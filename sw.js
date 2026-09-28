self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
self.addEventListener("push",e=>{
 let d={title:"Pechincha encontrada!",body:"Abra o Pechincha Radar para ver.",url:"/"};
 try{d={...d,...e.data.json()}}catch(_){}
 e.waitUntil(self.registration.showNotification(d.title,{body:d.body,data:{url:d.url},icon:""}));
});
self.addEventListener("notificationclick",e=>{
 e.notification.close(); e.waitUntil(clients.openWindow(e.notification.data?.url||"/"));
});