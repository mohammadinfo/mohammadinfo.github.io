'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "780d2aace3dbcf56c3634db045f490b9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "48d2aacabbfb40746d512305945c6be2",
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
".git/index": "c02358c457ef6aacdfcd8ddb11aa8229",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad1447dbffb1049d54dacb21dd19116a",
".git/logs/refs/heads/master": "ad1447dbffb1049d54dacb21dd19116a",
".git/logs/refs/remotes/origin/master": "8a77a5381d22a394eb7d593c13d354a4",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0c/1891abcc5f19d3803b530d6a2a81103b396a12": "3bfdcb8c625f5039b74f83ef472c602d",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/17/97fa4db275cbd8b2b068b6cda3b3c3f74af9e4": "c61544a6064ae6bd7dabd81f85dd867d",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/28/7fd48c5925ca439769e35840970b8eebeb4052": "476103285ef3b9d3fa85a9d1b8d9b04b",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/41/1e83ee000c60cd62f76037807e5d57e1ed4476": "187b23dc474e9093ae91779056cf0b56",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/47/2fdeb5d1df32ea69ff6e16f24fa0f3b235962d": "3a2b6edc8595d6065b8e3d5a9b388ab3",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/a7136d30aa9ffb966e5e8f9cedb13457e46f82": "b4ff22b2e5fdf5a0cf5a7e5c5bb291c9",
".git/objects/4a/5a1bd4882ccddf6b49e168a48032710d959e6b": "1f06c8a5f4107169818782827878e351",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/50d72b5251ece082e2ea9729416418299a3d15": "b129de7e998e96a25499c0e8944f7fa2",
".git/objects/56/1be0eb879dbeedf3118da42f0b6abea04ecdc2": "ee16ed29d9d971087a5d3b825e8bfdf8",
".git/objects/59/e84384ba42252408163381eee6e8a696980c52": "0640b092365868c4c62a3ba30a437cf0",
".git/objects/6c/d199ed7c32b713e7f4194c318dfcceaa701e01": "0c8f41dacdb03589a922ea82ca3cc06a",
".git/objects/6c/dec3fb3797911431708b982f87605aa86a0740": "e4f4ea1a78d03eb8517bb89b9ce393b7",
".git/objects/75/76a03ebf9a177ca032925c9f989fa007da7391": "0eab319b6cbb4636b791a2a0bf1b4f19",
".git/objects/75/b34942318fef469531807b061a43e47baa1940": "80355482e4299b7e82c1b70e6f60625f",
".git/objects/7a/b3f9d65ee5c49863c21fa24ddabc2602a02bb8": "67197e39c1f497003e8e13799994bd40",
".git/objects/7f/e6e87f910f609e2933cd3fe9c512ffe66a36ec": "687ead49e1e00a4abf870bca9adb02c2",
".git/objects/87/647f882f09759b628a5f825035006e11dc75e8": "39ab6ba0dfd745f885fdc1c611817f6b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/94/df1dcbec71efb857864ba13572a4fea9f50c9e": "10cddecda76d9e48fcd6b82073fffde3",
".git/objects/a9/6f09d8793e9dcbf0eb57858823d8c8a4fbfd59": "1133f30d36cf2c8a10b8a20f81043a58",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/a7f5771c3228c9c1dbbb8c58c386b21abf6fe3": "517d8fbe901885c5d3d63ca4f5d49b85",
".git/objects/c3/7aa87a57bab4ae6bb751aef8efcbbddcffb2c7": "292a3ef913b03a47263c1ea56db92374",
".git/objects/cf/1b10d38b4a7e4525240a64d06b86abeb810472": "172476910ca8b50e65882e8955cfaf48",
".git/objects/cf/9ed7eda03793aa17aca6fe907dd1cc6130a7a9": "bbe34505172a662e6c8077bf3109e4be",
".git/objects/d1/3dbe415f57fddd270b616758ec82a92e04e6b9": "f6667f92ad0411062c2d8a0905c83d75",
".git/objects/d2/42fab57aef9826cd278775c9eaed7fb4e8f869": "2514b316c60c9c34c935914c205575fa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/db/4d125116837aea331bbc36ec7a870aa23bf3be": "68e00c8c999e4375e106d6db3034a4f3",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e4/9d775a364a8121a89f69679aa4c0ecdef1dba8": "dbb49305ed0e034ec049be9e18c0a453",
".git/objects/e4/ac19224b70ff42190d4f3c7f704360aa746356": "1442223951a78d230bc9f43210d2908d",
".git/objects/e5/d980fb4684152bf7fe57cf6efeb005adae62b2": "ff74f108fa6ccea7d0dcfbffba5fbdd4",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/af9bc5c267edd93aa184aa26211962931551de": "e7f8108b54dda5e611b5173d5fc11a0f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/1252edb2a599f27accf24a9a89b7615aa44a7a": "dd553f5b97cd1d511551e1df09eae3a6",
".git/objects/f0/3207a75f1d1f539e622ed09c8057fed883f8c5": "b5c52d9b19de7f3e9ffcb94fd1ecdf0e",
".git/objects/f9/3344d27dacc1a2460a80c57e710cfd6b824378": "e167eb72a17f03b841449ddaa087d1c7",
".git/objects/fc/f25352b25e9d90f807a1d26b76fcb9bdcc01d3": "4ff074de3a6a7462b8bbf36b00f5e90f",
".git/ORIG_HEAD": "ce2c4c76b9b53f9b380655e604d3425e",
".git/refs/heads/master": "ce2c4c76b9b53f9b380655e604d3425e",
".git/refs/remotes/origin/master": "ce2c4c76b9b53f9b380655e604d3425e",
"assets/AssetManifest.bin": "e91cf63d4f75847cc83f99d21bc33404",
"assets/AssetManifest.bin.json": "92dbafcbec1ce94c5f7dd73443c511c6",
"assets/AssetManifest.json": "849c37250bd278d0ac7df51950a7f79b",
"assets/assets/animations/love.json": "71d569f2ad9f908d983c48a636935613",
"assets/assets/animations/register.json": "365cb546b57916adad7bd59158644511",
"assets/assets/animations/welcome.json": "cc9c5a69d4f40d940326e5ea6ab1ac6f",
"assets/assets/fonts/YekanBakhFaNum-Black.ttf": "30ee3f6630082718f1d37619f3d3134a",
"assets/assets/fonts/YekanBakhFaNum-Bold.ttf": "86130bdf09f379e55bb688505fc7a105",
"assets/assets/fonts/YekanBakhFaNum-Regular.ttf": "ace8a888630f4069d7a2d8225921a576",
"assets/assets/fonts/YekanBakhFaNum-SemiBold.ttf": "4741c5fbbe039cc9389020b2e167c53e",
"assets/assets/icons/doctor.svg": "ebc2df771cd6ab4101d9f8b8156402a7",
"assets/assets/icons/register.svg": "6856e15727adafd2017eb6b94dfbaf53",
"assets/assets/images/doctors.jpg": "297b071c8f7eb6de3a3583d151551199",
"assets/assets/images/logo.png": "21d499ce75ff6a95ee2a44c907f58d72",
"assets/FontManifest.json": "074553f8aa7425aa94164dae76f01a8a",
"assets/fonts/MaterialIcons-Regular.otf": "af9063a06d067ac58ba5cc07ba24ed7a",
"assets/NOTICES": "5cffc85bccd79364afdd1834b5334b7b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8f72f6a1bd52239ff268b7e9821d5595",
"/": "8f72f6a1bd52239ff268b7e9821d5595",
"main.dart.js": "16dec3ecbbe8f9e5d0100d1250540ccb",
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
