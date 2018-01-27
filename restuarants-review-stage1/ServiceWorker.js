/**
 * Created by mislam on 1/27/18.
 */

const cache = 'restaurantReview-';
let items = ['index.html','restaurant.html','/','data/restaurants.json','css/styles.css','js/dbhelper.js','js/main.js', 'js/restaurant_info.js'];
let version = 2;

self.addEventListener('fetch',(event) => {
    let e = event.request;
    let url = e.url;
    event.respondWith(caches.match(e).then((response) =>{
        return response? response : fetch(e);
        })
);
});
self.addEventListener("install", (event) => {
    caches.open(`${cache}${version}`).then( (cach) => {
        items.forEach(item => {
            return cach.add(item).catch(function (e) {
                console.error(item + " not found");
            });
    });
    }).catch(function (err) {
        console.error(err);
    });
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(function (CacheNames) {
            return Promise.all(
                CacheNames.filter(function (cache) {
                    return cache.startsWith(StaticCacheName) && !cache.endsWith(index);
                }).map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});