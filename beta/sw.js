// Netzwerk zuerst, damit Updates sofort ankommen; Cache nur als Notfall offline.
const CACHE='spieleabend-v22';
const FILES=['./','index.html','supabase.js','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).catch(()=>{}).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
  e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp));return res}).catch(()=>caches.match(r).then(m=>m||caches.match('index.html'))));
});

// Push-Benachrichtigungen (Einladung, du bist dran)
self.addEventListener('push',e=>{
  let d={};try{d=e.data?e.data.json():{}}catch(_){d={body:e.data&&e.data.text()}}
  e.waitUntil(self.registration.showNotification(d.title||'Spieleabend',{
    body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.tag||'spieleabend',renotify:true,vibrate:[120,60,120],data:{url:d.url||''}
  }));
});
self.addEventListener('notificationclick',e=>{
  e.notification.close();
  const target=new URL((e.notification.data&&e.notification.data.url)||'',self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
    for(const c of list){if(c.url.startsWith(self.registration.scope)){c.navigate(target).catch(()=>{});return c.focus()}}
    return self.clients.openWindow(target);
  }));
});
