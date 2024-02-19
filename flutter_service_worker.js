'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4a09189de8d3cad4ee02ed89e4a8e578",
".git/config": "780d2aace3dbcf56c3634db045f490b9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9ffb17df1b5d64129657e9577093f01f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5317e5a2c993b7f3ab432dcf4434ff11",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7c337baae71ccaa13b3d241fe8d308e7",
".git/logs/refs/heads/master": "7c337baae71ccaa13b3d241fe8d308e7",
".git/logs/refs/remotes/origin/HEAD": "87694fc4f8ec9064f7e2877ecf6e80d5",
".git/logs/refs/remotes/origin/master": "1ad3e459604215298f060efb8db8b1e2",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/04/ebe9adc99e6517ea9f44e63aa071f763ff288e": "f3cd7ea727e11fbf97f51a48e241e9c4",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/1e/bc6639a621431c87ce9617588255dd0e266575": "d095bfd91f3dcf3a106b76012741be5f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/38/05953d36a19251a919a6d916e2780716ca3551": "991c93c40da72bfbdeaca37a965695d7",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/70ab2bd0db669d7f5a002d7ce6930f499efa2d": "227f78aee9063c83dc1fcb714a49385a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/fec44a39f542c133de720356e0248e5fd6ed21": "ddc772cf5e255f1eeb774866ebcf321c",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/2aee0fe1b72106187aed05f54abfba3c3c0fd4": "828386ceade062358d4ea7d02631f169",
".git/objects/4d/f82594b3ac31f874006bc0e9980a3584a89b89": "71e94303746385adbb5b361d78fb95f1",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/1be0eb879dbeedf3118da42f0b6abea04ecdc2": "ee16ed29d9d971087a5d3b825e8bfdf8",
".git/objects/6c/d199ed7c32b713e7f4194c318dfcceaa701e01": "0c8f41dacdb03589a922ea82ca3cc06a",
".git/objects/6e/4a09cfba70b3507bb078af978202e050adec6d": "4d123a5c77f7200df7bf0b8bfec5ca5e",
".git/objects/70/4fb65122d768a895231d032e709812173c8b15": "1fe517f74c18b775b62f6fe6b2bbe825",
".git/objects/75/76a03ebf9a177ca032925c9f989fa007da7391": "0eab319b6cbb4636b791a2a0bf1b4f19",
".git/objects/75/b34942318fef469531807b061a43e47baa1940": "80355482e4299b7e82c1b70e6f60625f",
".git/objects/77/0144c81d25f994feb3f05f2448cc0d57f96346": "4624d0657edb1c7efa58506ad3586cb4",
".git/objects/79/bd2de59d6918bb89d6da5685047a6c654dfe4c": "6b5732f0ae6b6b00c63154d0c93a2069",
".git/objects/7a/4886023aa6685d87acf1bae344ffc000e18704": "e2e2731756778d559bc54a950f19d2f7",
".git/objects/84/6617439a3dac9568afd028f52b154cbe1c30b4": "839774bee7849b797a7a2b381d406536",
".git/objects/8f/96729aa9057906a07941c9c445d286ec0643be": "ecd7b9e209a7c03666df891873673d0d",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/99/d1dad26f9edd187e43c7a8e142a5f5ecc4c914": "078db738e0e03df17049b5ef6ba43a73",
".git/objects/9e/242aec85b742997de11d5ce68ea991867f320d": "f3f76dfc09df2ddde85f51019dedb402",
".git/objects/a0/f49da8ad61b2856e29a78a76b7c4356ed44ca4": "fd255e147a8871e291da955656dadb3d",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/cc/32fa6867d09ed2d32aea14afa88a4674b691e1": "631e45d17fa25b65692386074decd927",
".git/objects/cf/9ed7eda03793aa17aca6fe907dd1cc6130a7a9": "bbe34505172a662e6c8077bf3109e4be",
".git/objects/d0/132eadd0d32017a92a98ded8c8271f0097c570": "cfcd511c6eba3c3409ceff80a0f78e98",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/6b32379a467e0c1999fffc435c1bd0553e7db5": "df1918dd09ed4efc7e2f810a154ba42f",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/c7c96e4a1edd189c81c58da9e267ae208425e7": "6db8755fa1c2ef8098df767b1c344baa",
".git/objects/e3/9683f8d3ef5ccea0ebe5d3bedc4851114d8912": "7d77c2a8e22c043ec1f232085bda594e",
".git/objects/e4/6da2df56174145d535f642f4eab5ca06a6558a": "a3d599f4cc7da4ef04c909fbd3cd593b",
".git/objects/e5/d980fb4684152bf7fe57cf6efeb005adae62b2": "ff74f108fa6ccea7d0dcfbffba5fbdd4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/ffa43da0a35d5236a57c42ab369155e689d7f6": "54bf8fc1be4ce0a9f399e546ebd5b415",
".git/objects/f8/741089acd32ae1e4ecd84d6722611e1e70f9f1": "09626573ab3830308c8ecc2b5dffefcc",
".git/objects/pack/pack-101379f02eb39fedb1ee90c1326fe4f4d3d5a3ce.idx": "627b3b9f25a550e55ae28244227c0af6",
".git/objects/pack/pack-101379f02eb39fedb1ee90c1326fe4f4d3d5a3ce.pack": "f95cca53d4a0fa769ee5e756d7d3e2d3",
".git/objects/pack/pack-101379f02eb39fedb1ee90c1326fe4f4d3d5a3ce.rev": "307e61acc80575ac2b825c8e12dc6cf6",
".git/objects/pack/pack-3e1181a998350a6bd86ff21215e2655a1aa916d6.idx": "e673056cb3febc6597406d75220a047d",
".git/objects/pack/pack-3e1181a998350a6bd86ff21215e2655a1aa916d6.pack": "5d2f6d1f5bbb4b05f03733a3c00e4fe0",
".git/objects/pack/pack-3e1181a998350a6bd86ff21215e2655a1aa916d6.rev": "2a1829d303b5a3e45ab57706458477fa",
".git/ORIG_HEAD": "4857ee14e91ac7e53f96f5250097c8b1",
".git/packed-refs": "9699150efcf5b40152912d0c61a58d64",
".git/refs/heads/master": "4857ee14e91ac7e53f96f5250097c8b1",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4857ee14e91ac7e53f96f5250097c8b1",
"assets/AssetManifest.bin": "60b1a3b3b3f2b0542c1f8425eab6b68e",
"assets/AssetManifest.bin.json": "52ab71a533cd364363b498560c3e2cf0",
"assets/AssetManifest.json": "f574de2d6a19288977efba7ade02264c",
"assets/assets/animations/love.json": "71d569f2ad9f908d983c48a636935613",
"assets/assets/animations/register.json": "365cb546b57916adad7bd59158644511",
"assets/assets/animations/welcome.json": "cc9c5a69d4f40d940326e5ea6ab1ac6f",
"assets/assets/fonts/YekanBakhFaNum-Black.ttf": "30ee3f6630082718f1d37619f3d3134a",
"assets/assets/fonts/YekanBakhFaNum-Bold.ttf": "86130bdf09f379e55bb688505fc7a105",
"assets/assets/fonts/YekanBakhFaNum-Regular.ttf": "ace8a888630f4069d7a2d8225921a576",
"assets/assets/fonts/YekanBakhFaNum-SemiBold.ttf": "4741c5fbbe039cc9389020b2e167c53e",
"assets/assets/icons/doctor.svg": "ebc2df771cd6ab4101d9f8b8156402a7",
"assets/assets/icons/empty.svg": "b85df1875a645c6fa995f92f57dfbfeb",
"assets/assets/icons/register.svg": "6856e15727adafd2017eb6b94dfbaf53",
"assets/assets/images/doctors.jpg": "297b071c8f7eb6de3a3583d151551199",
"assets/assets/images/logo.png": "21d499ce75ff6a95ee2a44c907f58d72",
"assets/FontManifest.json": "074553f8aa7425aa94164dae76f01a8a",
"assets/fonts/MaterialIcons-Regular.otf": "1f807ece52efe3b09c0a27f0bea09e1c",
"assets/NOTICES": "d833cf278cc8482263c28055f7fd9732",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "21d499ce75ff6a95ee2a44c907f58d72",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2081ffadd750c97871382719dd6f4d4c",
"/": "2081ffadd750c97871382719dd6f4d4c",
"main.dart.js": "b849dee585203471ba50b4367ee37428",
"manifest.json": "1e0eca3eed4533c5c28086bd1ed6f693",
"version.json": "3ab6cb73a42391d7cfb3bc997896334a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
