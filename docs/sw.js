//service worker
let cacheName = 'showcaseCache001';

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll([
        '/showcase',
        '/showcase/index.html'
      ])
    }).catch(function(err){
      console.log(err);
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
