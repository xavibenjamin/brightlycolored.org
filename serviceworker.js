(function () {
  'use strict';

  var filesToCache = [
    '.',
    'https://gravatar.com/avatar/febbffcb54abe1be1435720fc2268237?s=100',
    'offline/index.html',
    'themes/theme-001.css',
    'themes/theme-002.css',
    'themes/theme-003.css',
    'themes/theme-004.css',
    'themes/theme-005.css',
    'themes/theme-006.css',
    '404.html'
  ];

  var staticCacheName = 'cachev3';

  var addToCache = function (request, response) {
    caches.open(staticCacheName)
      .then(function (cache) {
        cache.put(request, response);
      });
  }

  self.addEventListener('install', function (event) {
    event.waitUntil(
      caches.open(staticCacheName)
        .then(function (cache) {
          return cache.addAll(filesToCache);
        })
    );
  });

  self.addEventListener('fetch', function (event) {
    var type = event.request.headers.get('Accept');
    if (type.includes('text/html')) {
      event.respondWith(
        fetch(event.request).then(function (response) {
          let responseCopy = response.clone();
          return response;
        })
          .catch(function (error) {
            return caches.match(event.request)
              .then(function (response) {
                response || caches.match('/offline/');
              })
          })
      );
    }
    else {
      event.respondWith(
        caches.match(event.request).then(function (response) {
          if (response) {
            return response;
          }
          return fetch(event.request).then(function (response) {
            if (response.status === 404) {
              return caches.match('404.html');
            }
            return caches.open(staticCacheName).then(function (cache) {
              if (event.request.url.indexOf('test') < 0) {
                cache.put(event.request.url, response.clone());
              }
              return response;
            });
          });
        }).catch(function (error) {
          return caches.match('offline/index.html');
        })
      );
    }
  });

  self.addEventListener('activate', function (event) {
    console.log('Activating new service worker...');
    var cacheWhitelist = [staticCacheName];
    event.waitUntil(
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
})();
