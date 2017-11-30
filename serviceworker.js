(function () {
  'use strict';

  var filesToCache = [
    '.',
    // 'https://cloud.typography.com/6973314/6893552/css/fonts.css',
    'https://gravatar.com/avatar/febbffcb54abe1be1435720fc2268237?s=100',
    'search.js',
    'index.html',
    '404.html'
  ];

  var staticCacheName = 'cache-v1';

  self.addEventListener('install', function (event) {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
        .then(function (cache) {
          return cache.addAll(filesToCache);
        })
    );
  });


})();
