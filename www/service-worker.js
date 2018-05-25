"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","fc0dbc5d5edcd08b04b3a0fc95218a04"],["/static/css/main.23efca2c.css","5efb0014f2f8728d8671065380e8e34c"],["/static/media/Material-Design-Iconic-Font.a4d31128.woff2","a4d31128b633bc0b1cc1f18a34fb3851"],["/static/media/Material-Design-Iconic-Font.b351bd62.ttf","b351bd62abcd96e924d9f44a3da169a7"],["/static/media/Material-Design-Iconic-Font.d2a55d33.woff","d2a55d331bdd1a7ea97a8a1fbb3c569c"],["/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/static/media/icomoon.2a209b87.woff","2a209b870e3a079172652aac0761e1d4"],["/static/media/icomoon.4030600e.eot","4030600e1512b952f68578a8dd0226ee"],["/static/media/icomoon.86bfc621.ttf","86bfc6214174b75c18b6da786bddbf9e"],["/static/media/icomoon.c7f77bab.svg","c7f77bab399ac52866e72ee1518e2c2a"],["/static/media/ionicons.05acfdb5.woff","05acfdb568b3df49ad31355b19495d4a"],["/static/media/ionicons.19e65b89.eot","19e65b89cee273a249fba4c09b951b74"],["/static/media/ionicons.24712f6c.ttf","24712f6c47821394fba7942fbb52c3b2"],["/static/media/ionicons.2c159d0d.woff","2c159d0d05473040b53ec79df8797d32"],["/static/media/ionicons.2c2ae068.eot","2c2ae068be3b089e0a5b59abb1831550"],["/static/media/ionicons.621bd386.svg","621bd386841f74e0053cb8e67f8a0604"],["/static/media/ionicons.aff28a20.svg","aff28a207631f39ee0272d5cdde43ee7"],["/static/media/ionicons.dd4781d1.ttf","dd4781d1acc57ba4c4808d1b44301201"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});