'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "25a4d09ca1c06b0e8a03f97ef801187d",
"version.json": "4125c7ce02b6d916e4b080b48520974c",
"index.html": "4d0dcb82c7c7f4d3832b724f87bb7fec",
"/": "4d0dcb82c7c7f4d3832b724f87bb7fec",
"main.dart.js": "946861a90b78cc06addb82861f2d550b",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b333416a4e35eab80d353af7d3580333",
".git/config": "c6f8928ce6c178a490128da80197381a",
".git/objects/57/081f054f4d6d003bd9b13012e0cdcb96b02256": "964f8e6bd34728f5f04909469689bd19",
".git/objects/3b/3c80a21a7cadafb7c68c72919a53fa253d392f": "313a1b53c78b95b30e8ffbef63102539",
".git/objects/32/3dceabf7c7ed76d1e42996af32907153ee6888": "257951fe60d72e01d323eb84b7c5e75a",
".git/objects/35/093a32c5487c8830b3ec2ea45806b6847c6b46": "3e202b7a5c9cb416037032ed49615a47",
".git/objects/35/59a2f1bbb10124e80ec98cf200c00a0052575c": "e5bf91ca22c1d3da3881c0dc98eb0457",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "c9afe800e603c7935de25bc40ffd8226",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "a5139be2d64fbf291c1118a06e2877ae",
".git/objects/0b/fb6398c5b49176a3e9b32f5de83c74649ec1fb": "ce1d1cd15f19d21d5d3be7eaca5ea45d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "8a68cf9111e34dab3527830024de996f",
".git/objects/0e/90ce284baa6940a1870859c7cf1405f6f36d6a": "599624950c62d621d7c8b48335d02689",
".git/objects/60/bde01e5de2e70db7fa481ee39311977b160092": "5bcdabc1be37e7e69cb1a235eb5ef928",
".git/objects/9c/2873b1c18ef765dd7e9a17366f2e16fbebc328": "63402bcf051b03e37b28047f39c3c670",
".git/objects/be/15e90a705446b06e0fbd3178a677f89b3f805e": "a4df4e11a58eed925512dc1fb1eb7add",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "acffaef415384586af017e5ae7f0d1fd",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "2d21dcb62774f28dd83eb4b98859b3f3",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "5f32ac9757f448a77d70bf96052de5dd",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "5fa10c835c8e287b1fb7beb9ce0f5bbd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "54a4b021eebfec777d6a7400e640d810",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "d7947f223c44c0e877fdc0eddaa85181",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "f6c569ef70469cd83a4ab33010f83d45",
".git/objects/pack/tmp_pack_1WmJdZ": "604bdc56c0db4bf3922a07f4679f0780",
".git/objects/pack/tmp_pack_URo6Jo": "781d41af2694b6aaf3f60161837e544c",
".git/objects/pack/tmp_pack_RqTFwu": "a0eb74db4fc5f705353f36eed760f5f3",
".git/objects/11/db4bbae5f07c7d5f84dd7cd256fd29a6f624f8": "abeb1685d36c2d0b13a2eadf3e8caa22",
".git/objects/7d/a8ec91ca799721999c8212c048a38569eff1f6": "cdf849dc5102a958e2ad9b1974f475ca",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/8f/b4c199b4e5718ecec5dccf5f638ea847afff11": "f19c5b8569235fe893576247b0de31a2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/7e/72b6792b7bba6d5991b59f62bec0e04e0696ff": "84cb089823166fb3a3f0c2de08f69ff6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/9a/48eaa999d0abe013e453ebaa36e2db5e222e48": "d854efc8cde0b8fe72bee58e0173deaa",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "7f7b221c21a4daf44b542e74c57fd2e8",
".git/objects/31/540f3af9c01521e2c5a1dc5fc264e730005a10": "981eed7aae89619db0a494333d098958",
".git/objects/96/7dd675d6b65c9d214c6b525708a2f61fc36e69": "b8fe9a89687d880e4adf6042be05e250",
".git/objects/30/6b91e2e4d6fe3d660c06febdbfaeaabe7aa33f": "20cff94690de99bfdfd55bfb412dd604",
".git/objects/06/efa5fe8f85f82db9f26497967d9e764bef0f6c": "9ecc45d572db8171864961d907eddfe5",
".git/objects/90/fcf57a9bc6777158b96b07fe3f80b1cdbfa791": "9cdf09292366f649a68006b01661fcce",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/a0/451228e348edd1dcbbc145fc519d1ce82325a0": "82ada602a1335a95089a8fc616d8c0c9",
".git/objects/dd/5bbd9311b4481079ca7d6dbec3f5b532fffea4": "d5c2a01b6908af093ffb25fa2f01bcd6",
".git/objects/d5/8b9eeebc15ead1c68d092b2dc8322b55b19891": "d8148c90c89caa91476d00821d5302ec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/db/d6ceade0016d9646eed2cc6d50695d7de95172": "c4f47ca58e851f0f6fc9409a5b3befa7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/c3/1ec7e1c5f6cdc071f1625ab0b1179439d11fda": "176ecaf55d8c32865ee08c1be3e8abd5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/83/240ee329c9d6b432ec6aff36c5989b0850cd43": "2e451eb9cf60a0e52f22dd02d752592f",
".git/objects/77/66e99acf30f05a88390aa496076695f9818b58": "027bad42d20a0ec096534a9dafb39482",
".git/objects/77/28f6d9d60bb7a0fb22aaf459b03ca185c5eb76": "4b22aaf6add9b94aac4c3e6afa0daa73",
".git/objects/84/72248b409040fc920dd94ad599ee467116bd05": "037781b0095764a20bd0ea69270c6c75",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/71/91638f904f0388ad1da19964a68ada3b0ff0e4": "dfe3482686b54faa422d31e3f39f6a1c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "7825fa2a8de4953cac3eb1b68e02600a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "81ef0ed892ac844ebc65145150ca7534",
".git/objects/47/0e4c0de7bd29c9f3a1f845b3490b88f0318dd5": "e70b910f2056273820e5ee89581f3405",
".git/objects/7a/ebe7a6f56530dd56dfdec264dc8ab7e27f73c8": "41e6e4c4fd5c0ca5ecc33d7bb108c27e",
".git/objects/22/991463fcd6d8786424c5569a9eff7de6dc7768": "ae3c954e45f638af65ac4679f3506ef5",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05958d7effcb75abc55e82a7063757ae",
".git/logs/refs/heads/main": "55c2470219a0ed676d5341ae98e8dcfe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "52ac1b94f99331d79ffff497807e0290",
".git/index": "aae88324692ba399773123ed0f45a18b",
".git/COMMIT_EDITMSG": "2b9f0f83ea8e0515e7d22171a59cb12b",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "c51883e936140ed668fc4675f425be5a",
"assets/NOTICES": "c68db7dbe3de36b070d3c8de7b7c9a9c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "06e7ac12316fa0ae9469062152f50a96",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bcc5cdd502f51d6134ff6695759e2832",
"assets/fonts/MaterialIcons-Regular.otf": "a5120137c86b990e93596dd052085596",
"assets/assets/image/image_garden.jpg": "9035f5bc0b9ac973250a41c64ff8e29c",
"assets/assets/image/images_parc.png": "50893d51146a2a9740ef2f23e48ce346",
"assets/assets/image/profile_pic.png": "8bc312b4a517860a66276b12fac675fd",
"assets/assets/image/image_profile.jpeg": "b28f40c23ecb9b1a9da4836a9f1232d8",
"assets/assets/image/A46425C8-332E-46D0-B670-5CCBFE4795E9.jpeg": "b28f40c23ecb9b1a9da4836a9f1232d8",
"assets/assets/image/%25D8%25B4%25D8%25B9%25D8%25A7%25D8%25B1%2520%25D9%2585%25D9%2581%25D8%25B1%25D8%25BA.png": "f2c116d998b63c7578c361762a88bb74",
"assets/assets/image/parc.jpg": "556e8405a425afabf4a85f28e3496a1c",
"assets/assets/icons/medical.jpeg": "06fc10e5b709c3e18cf50a77362b31a5",
"assets/assets/icons/water.jpeg": "3fff68e23062a0d7e2f7e6697e99b23f",
"assets/assets/icons/residential.jpeg": "fced27fe440b18e812443175cd1a2a02",
"assets/assets/icons/house.jpeg": "6cc112f3727e28d124d296827f084506",
"assets/assets/icons/institution.jpeg": "681c13214de69765ee4971335622daf3",
"assets/assets/icons/farm.jpeg": "9183139e6b5c57a1b13408f95599c176",
"assets/assets/icons/school.jpeg": "286eae03eff744d02fcf1ce3688c85c8",
"assets/assets/icons/green_marker.png": "9118bcf2c9d36285a0cdda4af581694b",
"assets/assets/icons/camp.jpeg": "6807895658c2756e358737838737e265",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
