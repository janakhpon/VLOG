if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let i={};const c=e=>n(e,r),o={module:{uri:r},exports:i,require:c};s[r]=Promise.all(t.map((e=>o[e]||c(e)))).then((e=>(a(...e),i)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts("fallback-2ms8TCtZNp7AMt-xC22o6.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2ms8TCtZNp7AMt-xC22o6/_buildManifest.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/2ms8TCtZNp7AMt-xC22o6/_ssgManifest.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/196.88e1c4c3270a0e0dc343.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/464.ad7df57ddc6571038398.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/740.b916036ae4adbd0f4da8.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/75fc9c18-996fd28c28520217391a.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/933.4c25d4e194a7aeb0ba62.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/framework-47066c84582f81982bde.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/main-e1ace7b59fa7d7d5ffb4.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/pages/_app-5f9718549a5bef081c82.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/pages/_error-cb0e1498af4f5c7d1203.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/pages/_offline-bae047833a6870243cbe.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/pages/about-8206c7a23f26b8dd7795.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/pages/index-575dfaa0491ee34870bd.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/polyfills-1052d44989b60b029627.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/chunks/webpack-9dbb8400842b64a1f035.js",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/css/120f2e2270820d49a21f.css",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_next/static/css/63876c1dd666ae620ee1.css",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/_offline",revision:"2ms8TCtZNp7AMt-xC22o6"},{url:"/android-chrome-192x192.png",revision:"2ef400a444c3a4f754c63839665e5c86"},{url:"/android-chrome-512x512.png",revision:"8a08ce57ed4be06c335f8b983a294105"},{url:"/apple-touch-icon.png",revision:"e5f995f72cdc9b6d26e8f8330d61d03a"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"1d5d527b842e556c404b753e72ce9da3"},{url:"/favicon-32x32.png",revision:"5164e99cf770ac12dda83736597c4a3c"},{url:"/favicon.ico",revision:"fddf85f61252b935551671381935f003"},{url:"/manifest.json",revision:"f724a378451b8f4ecba661ddde6eee4b"},{url:"/mstile-150x150.png",revision:"f0be37c95e615055a37134db12e0f962"},{url:"/safari-pinned-tab.svg",revision:"b4b405249d0db2879e73a65651e6539c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
