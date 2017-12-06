(function () {
  'use strict';

  var filesToCache = [
    '.',
    'https://gravatar.com/avatar/febbffcb54abe1be1435720fc2268237?s=100',
    'search.js',
    'index.html',
    'offline/index.html',
    '404.html'
  ];

  var staticCacheName = 'cache';

  var addToCache = function(request, response) {
    caches.open(staticCacheName)
      .then(function (cache) {
        cache.put(request, response);
      });
  }

  self.addEventListener('install', function (event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
        .then(function (cache) {
          return cache.addAll(filesToCache);
        })
    );
  });

  self.addEventListener('fetch', function (event) {
    console.log('Fetch event for ', event.request.url);

    var type = event.request.headers.get('Accept');
    // network-first for HTML documents
    if (type.includes('text/html')) {
      event.respondWith(
        // try fetching a resource from the network
        fetch(event.request).then(response => {
          // cache the resource and serve it
          let responseCopy = response.clone();
          addToCache(event.request.url, responseCopy); // this is a custom function, I'll elaborate on it later
          return response;
        })
        .catch(function(error) {
          // the resource could not be fetched from network
          // so let's pull it out from cache, otherwise serve the "offline" page
          return caches.match(event.request)
            .then(function (response) {
              response || caches.match('/offline/');
            })
        })
      );
    }
    // cache-first for assets
    else {
      event.respondWith(
        caches.match(event.request).then(function (response) {
          if (response) {
            console.log('Found ', event.request.url, ' in cache');
            return response;
          }
          console.log('Network request for ', event.request.url);
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
          console.log('Error, ', error);
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
