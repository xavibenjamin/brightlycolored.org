---
---

const version = '{{ site.time | date: '%Y%m%d%H%M%S' }}';
const staticCacheName = `brightlycolored-${version}`;

console.log("installing service worker");

const filesToCache = [
  '404.html',
  '/about/',
  '/archive/',
  '/genres/',
  '/subscribe/',
  '/topics/',
  '/offline/',
  '/',

  {% for post in site.posts limit: 3 %}
  '{{ post.url }}',
  {% endfor %}

  // can be automated rather than manual entries
  "https://gravatar.com/avatar/febbffcb54abe1be1435720fc2268237?s=100",
  "/assets/stylesheets/global.css",
  "/assets/app.js",
  "/themes/theme-001.css",
  "/themes/theme-002.css",
  "/themes/theme-003.css",
  "/themes/theme-004.css",
  "/themes/theme-005.css",
  "/themes/theme-006.css"
];


self.addEventListener("install", function (e) {
  self.skipWaiting();

  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  )
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {
          return cacheName.startsWith("brightlycolored-")
            && cacheName != staticCacheName;
        }).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      )
    })
  )
});

self.addEventListener("fetch", function (e) {
  let request = e.request;


  if (request.method !== 'GET') {
    e.respondWith(fetch(request));
    return;
  }

  if (request.headers.get('Accept').indexOf('text/html') !== -1) {
    e.respondWith(
      fetch(request).catch(function(error) {
        return caches.match(request);
      })
      // .catch(function() {
      //   return caches.match('/offline/');
      // })
    );
    return;
  }

  e.respondWith(
    caches.match(request).then(function (response) {
      return response || fetch(request);
    })
  )
});
