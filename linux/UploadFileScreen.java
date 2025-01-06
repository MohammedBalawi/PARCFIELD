import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:file_picker/file_picker.dart';

class UploadFileScreen extends StatefulWidget {
  @override
  _UploadFileScreenState createState() => _UploadFileScreenState();
}

class _UploadFileScreenState extends State<UploadFileScreen> {
  bool isUploading = false;
  bool isLoadingFiles = true;
  List<Map<String, dynamic>> uploadedFiles = [];
  String selectedCategory = '';
  FlutterLocalNotificationsPlugin flutterLocalNotificationsPlugin = FlutterLocalNotificationsPlugin();

  @override
  void initState() {
    super.initState();
    fetchUploadedFiles();
    _initializeNotifications();
  }

  // إعداد الإشعارات المحلية
  Future<void> _initializeNotifications() async {
    const AndroidInitializationSettings initializationSettingsAndroid = AndroidInitializationSettings('@mipmap/ic_launcher');
    final InitializationSettings initializationSettings = InitializationSettings(
      android: initializationSettingsAndroid,
    );
    await flutterLocalNotificationsPlugin.initialize(initializationSettings);
  }

  // إرسال إشعار محلي
  Future<void> _showNotification(String fileName) async {
    const AndroidNotificationDetails androidPlatformChannelSpecifics = AndroidNotificationDetails(
      'your_channel_id',
      'your_channel_name',
      channelDescription: 'your_channel_description',
      importance: Importance.high,
      priority: Priority.high,
      ticker: 'ticker',
    );
    const NotificationDetails platformChannelSpecifics = NotificationDetails(android: androidPlatformChannelSpecifics);

    await flutterLocalNotificationsPlugin.show(
      0,
      'File Uploaded',
      'The file $fileName has been uploaded successfully.',
      platformChannelSpecifics,
      payload: 'item x',
    );
  }

  Future<void> uploadFile() async {
    String? category = await showDialog<String>(
      context: context,
      builder: (context) {
        return SimpleDialog(
          title: const Text('Select Category'),
          children: <Widget>[
            SimpleDialogOption(
              onPressed: () => Navigator.pop(context, 'WFP'),
              child: const Text('WFP'),
            ),
            SimpleDialogOption(
              onPressed: () => Navigator.pop(context, 'Vegetable'),
              child: const Text('Vegetable'),
            ),
            // Add other categories here...
          ],
        );
      },
    );

    if (category == null) return;
    setState(() {
      selectedCategory = category;
    });

    FilePickerResult? result = await FilePicker.platform.pickFiles();
    if (result == null) return;

    setState(() {
      isUploading = true;
    });

    try {
      User? user = FirebaseAuth.instance.currentUser;
      if (user == null) throw Exception("User not logged in");

      Uint8List fileBytes = result.files.single.bytes as Uint8List;
      String fileName = result.files.single.name;

      final storageRef = FirebaseStorage.instance.ref().child('uploads/$fileName');

      SettableMetadata metadata = SettableMetadata(customMetadata: {
        'category': category,
        'uploader_email': user.email!,
      });

      await storageRef.putData(fileBytes, metadata);

      await fetchUploadedFiles();

      // عرض إشعار بعد رفع الملف بنجاح
      _showNotification(fileName);

      showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: const Text('Success'),
            content: const Text('Uploaded successfully.'),
            actions: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: const Text('OK'),
              ),
            ],
          );
        },
      );
    } catch (e) {
      showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            title: const Text('Error'),
            content: Text('Error uploading file: $e'),
            actions: [
              TextButton(
                onPressed: () => Navigator.of(context).pop(),
                child: const Text('OK'),
              ),
            ],
          );
        },
      );
    } finally {
      setState(() {
        isUploading = false;
      });
    }
  }

  Future<void> fetchUploadedFiles() async {
    User? user = FirebaseAuth.instance.currentUser;
    if (user == null) return;

    final ListResult result = await FirebaseStorage.instance.ref().child('uploads').listAll();

    List<Map<String, dynamic>> files = [];

    for (var ref in result.items) {
      final metadata = await ref.getMetadata();
      if (metadata.customMetadata?['uploader_email'] == user.email) {
        files.add({
          'name': ref.name,
          'date': metadata.timeCreated,
          'ref': ref,
          'category': metadata.customMetadata?['category'] ?? 'Unknown',
        });
      }
    }

    files.sort((a, b) => b['date'].compareTo(a['date']));

    setState(() {
      uploadedFiles = files;
      isLoadingFiles = false;
    });
  }

  Widget getFileIcon(String fileName) {
    if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
      return Icon(Icons.table_chart, color: Colors.green);
    } else if (fileName.endsWith('.pdf')) {
      return Icon(Icons.picture_as_pdf, color: Colors.red);
    } else if (fileName.endsWith('.jpg') || fileName.endsWith('.png')) {
      return Icon(Icons.image, color: Colors.grey);
    } else {
      return Icon(Icons.file_copy, color: Colors.blueAccent); // لأية أنواع ملفات أخرى
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.yellow[700],
        title: const Text(
          'Upload File',
          style: TextStyle(fontWeight: FontWeight.bold, color: Colors.white),
        ),
        actions: [
          IconButton(
            onPressed: () {
              Navigator.pushReplacementNamed(context, '/home');
            },
            icon: Icon(Icons.arrow_forward_ios_outlined),
          ),
        ],
      ),
      body: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          image: DecorationImage(
            image: AssetImage('assets/image/parc.jpg'),
            fit: BoxFit.cover,
          ),
        ),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 5, sigmaY: 5),
          child: Container(
            decoration: BoxDecoration(
              color: Colors.black.withOpacity(0),
            ),
            child: Column(
              children: [
                SizedBox(
                  height: 10,
                ),
                isUploading
                    ? Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: const CircularProgressIndicator(
                      color: Colors.green),
                )
                    : ElevatedButton(
                  onPressed: uploadFile,
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: const Text('Upload File'),
                  ),
                  style: ElevatedButton.styleFrom(
                    foregroundColor: Colors.white,
                    backgroundColor: Colors.blueAccent,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10.0),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    'Total files: ${uploadedFiles.length}',
                    style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Colors.black),
                  ),
                ),
                Expanded(
                  child: isLoadingFiles
                      ? ListView.separated(
                    itemCount: 5,
                    itemBuilder: (context, index) =>
                    const NewsCardSkelton(),
                    separatorBuilder: (context, index) =>
                    const SizedBox(height: 16.0),
                  )
                      : ListView.builder(
                    itemCount: uploadedFiles.length,
                    itemBuilder: (context, index) {
                      final file = uploadedFiles[index];
                      return Container(
                        margin: const EdgeInsets.symmetric(
                            vertical: 5.0, horizontal: 10.0),
                        padding: const EdgeInsets.all(10.0),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(10.0),
                          boxShadow: [
                            BoxShadow(
                              color: Colors.grey.withOpacity(0.5),
                              spreadRadius: 2,
                              blurRadius: 5,
                              offset: Offset(0, 3),
                            ),
                          ],
                        ),
                        child: ListTile(
                          leading: getFileIcon(file['name']),
                          title: Text(
                            file['name'],
                            style: TextStyle(
                                fontWeight: FontWeight.bold,
                                color: Colors.black87),
                          ),
                          subtitle: Text(
                            '${file['date'].toString()}\nCategory: ${file['category']}',
                            style: TextStyle(color: Colors.black54),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
