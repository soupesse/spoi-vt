// Service Worker — SPOI VT PWA
// Cache hors-ligne pour Module 01

const CACHE_NAME = 'spoi-vt-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installation — mise en cache des assets
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('[SW] Cache ouvert');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activation — nettoyage anciens caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Fetch — stratégie Cache First (hors-ligne)
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) {
        // Retourne le cache, met à jour en background
        fetch(event.request).then(function(response) {
          if (response && response.status === 200) {
            caches.open(CACHE_NAME).then(function(cache) {
              cache.put(event.request, response.clone());
            });
          }
        }).catch(function() {});
        return cached;
      }
      // Pas en cache — fetch réseau
      return fetch(event.request).catch(function() {
        // Hors ligne et pas en cache
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// Background Sync — sync fiches en attente
self.addEventListener('sync', function(event) {
  if (event.tag === 'sync-fiches-vt') {
    event.waitUntil(syncFichesEnAttente());
  }
});

async function syncFichesEnAttente() {
  console.log('[SW] Synchronisation fiches en attente...');
  // La logique de sync est gérée dans index.html
}
