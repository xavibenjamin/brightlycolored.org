---
---

const staticCacheName = "brightlycolored-v1";

console.log("installing service worker");

const filesToCache = [
  {% for page in site.html_pages %}
  '{{ page.url }}',
  {% endfor %}
  {% for post in site.posts %}
  '{{ post.url }}',
  {% endfor %}

  // can be automated rather than manual entries
  "https://gravatar.com/avatar/febbffcb54abe1be1435720fc2268237?s=100",
  "/uploads/tim@2x.jpg",
  "/assets/stylesheets/global.css",
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
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  )
});
