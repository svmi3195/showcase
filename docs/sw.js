//service worker
let cacheName = 'showcaseCache001';

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
      return cache.addAll([
        '/showcase',
        '/showcase/index.html'
      ])
    })
  )
})
