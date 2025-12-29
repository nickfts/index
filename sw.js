const CACHE_NAME = 'udee-katerinis-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-180x180.png',
  './icons/android/android-launchericon-512-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
