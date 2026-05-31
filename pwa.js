self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("namakkal-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/assets/css/style.css",
        "/assets/js/app.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});