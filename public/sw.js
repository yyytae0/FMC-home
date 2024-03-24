// install event
self.addEventListener("install", (e) => {
  console.log("[Service Worker] installed");
});

// activate event
self.addEventListener("activate", (e) => {
  console.log("[Service Worker] actived", e);
});

// fetch event
self.addEventListener("fetch", (e) => {
  const { method, headers, url } = e.request;
  console.log("[Service Worker] fetched resource " + url);
});