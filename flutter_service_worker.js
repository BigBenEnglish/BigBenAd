'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "171be465dab8add1c8d54cf91b25c4e6",
"index.html": "826b7ded4c5df4ca7ddd3976b9f19239",
"/": "826b7ded4c5df4ca7ddd3976b9f19239",
"main.dart.js": "446946c932827d80d9ef8f43bc392392",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e8cae5e77d7134dbf85eab88a81baa1",
"assets/res/Music/game_music_0.mp3": "91023836de9b8a0db225ab3922c236fc",
"assets/res/Music/end_music.mp3": "5b96b9d2fc528ab73d8fe5fb6cbc4760",
"assets/res/Animation/angry_bird_3.txt": "a8762fa510fa7a0bf17acd21e8c4972b",
"assets/res/Animation/bigbeneng.txt": "034e68847f5dee14918cbb2c3e8bf4b5",
"assets/res/System/heart.png": "e92b6abd2d7b661a99c8d299146e3998",
"assets/res/System/heart.fill.png": "c6975c94173e38c99fbbbfa91deb3d87",
"assets/res/Lesson/1_Prof.json": "9289865eb8d64af5e5dcff77805c5a94",
"assets/res/Lesson/Profession/Image/doctor_1.webp": "bf7ab4c923fe935fe106a0237c6541b2",
"assets/res/Lesson/Profession/Image/witch_1.webp": "ee46a60c17c80a38b9d17d0e8d80233e",
"assets/res/Lesson/Profession/Image/veterinarian_0.webp": "96a6a10f8595d76f8421c0e40de90dde",
"assets/res/Lesson/Profession/Image/teacher_1.webp": "a30503064ec4a48acac22769512154ae",
"assets/res/Lesson/Profession/Image/scientist_1.webp": "e9ec47b24a5831a443c7e748cf2c188c",
"assets/res/Lesson/Profession/Image/housekeeper_1.webp": "20fc6f02513821383daf856a4e411223",
"assets/res/Lesson/Profession/Image/sailor_0.webp": "43bed403534fde953376f2c19c5115a2",
"assets/res/Lesson/Profession/Image/firefighter_0.webp": "f5aa51e0f8588b7cd3a4ac6459247def",
"assets/res/Lesson/Profession/Image/student_0.webp": "2caee50e47695dd38737fa75a07a20c5",
"assets/res/Lesson/Profession/Image/pilot_1.webp": "4863d44de24877a57e9ca212d6826453",
"assets/res/Lesson/Profession/Image/nurse_1.webp": "cbacf66028048856fb5758eb46ce7e89",
"assets/res/Lesson/Profession/Sound/nurse.mp3": "b47fd32191e27581ab2cb12adf8c3321",
"assets/res/Lesson/Profession/Sound/student.mp3": "bc440a1ec4d27f97cbd3dc88285bc30c",
"assets/res/Lesson/Profession/Sound/veterinarian.mp3": "f24166274eca6342f8369cd53d278af9",
"assets/res/Lesson/Profession/Sound/scientist.mp3": "aad10ddd645285574e34ab8220f92540",
"assets/res/Lesson/Profession/Sound/housekeeper.mp3": "7266bbb77130c385fbe1e26cbc13c20f",
"assets/res/Lesson/Profession/Sound/firefighter.mp3": "f8ce71306e77128d59c0f49d409008f2",
"assets/res/Lesson/Profession/Sound/doctor.mp3": "658906b01d1eb95005b44de3b133f131",
"assets/res/Lesson/Profession/Sound/sailor.mp3": "4f1c783aad12f6f4cbf8bd3d0647597a",
"assets/res/Lesson/Profession/Sound/pilot.mp3": "9a2cb875df7f1e572a18c53af0954030",
"assets/res/Lesson/Profession/Sound/witch.mp3": "6cb86baa5d86854b0630954bf0ef03fd",
"assets/res/Lesson/Profession/Sound/teacher.mp3": "6321109540af1f9aee50006399209e7d",
"assets/res/replicas.json": "31f1c61b4cf8e9a50af8b4bf13761100",
"assets/res/Sound/incorrect.mp3": "ff56e412e4159dfa5e7395644e771612",
"assets/res/Sound/click.mp3": "67ef3aa186c64a4db5e155a3c1018702",
"assets/res/Sound/stamp.mp3": "589bd939fb59e425a16d80f3d63d7131",
"assets/res/Sound/success.mp3": "ddef280537f729d0be9dc74d636b553e",
"assets/res/Store/GooglePlay.png": "399b0cbf52a5a6c2b1b747f1d43c18b4",
"assets/res/Store/AppStore.png": "1074c2bf0ae58f205e50fcfd16014759",
"assets/AssetManifest.json": "6b3ed84cc561418b0758ff587cc3c5fa",
"assets/NOTICES": "c99b72a83f69d354aaab6f7fa518f2d5",
"assets/FontManifest.json": "d751713988987e9331980363e24189ce"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
