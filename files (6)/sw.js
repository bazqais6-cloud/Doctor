// Minimal service worker: makes the site installable.
// It always fetches from the network (no offline cache), so patients always see the latest clinic content.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
