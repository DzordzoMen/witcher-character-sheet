if(!self.define){let e,r={};const c=(c,s)=>(c=new URL(c+".js",s).href,r[c]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=r,document.head.appendChild(e)}else e=c,importScripts(c),r()})).then((()=>{let e=r[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(s,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(r[t])return;let i={};const h=e=>c(e,t),o={module:{uri:t},exports:i,require:h};r[t]=Promise.all(s.map((e=>o[e]||h(e)))).then((e=>(a(...e),i)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"witcher-character-sheet"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/witcher-character-sheet/character-sheet.pdf",revision:"93a5913d919fb48a86dc2371de898ac6"},{url:"/witcher-character-sheet/css/app.6f8a772f.css",revision:null},{url:"/witcher-character-sheet/css/chunk-vendors.8d0f58f7.css",revision:null},{url:"/witcher-character-sheet/img/logo.69a555fa.png",revision:null},{url:"/witcher-character-sheet/index.html",revision:"3f3a640aa29a10aab5e8f6cb054f4e67"},{url:"/witcher-character-sheet/js/app.4fa90838.js",revision:null},{url:"/witcher-character-sheet/js/chunk-vendors.6220db05.js",revision:null},{url:"/witcher-character-sheet/manifest.json",revision:"1bd9412d8c8a08744d8eb7e53eb82297"},{url:"/witcher-character-sheet/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/witcher-character-sheet/sheet-logo.svg",revision:"86114b5333f5d6468dcf847af8fe8947"},{url:"/witcher-character-sheet/sounds/bats.mp3",revision:"e206f129f40abff10107aee66963c490"},{url:"/witcher-character-sheet/sounds/creaking_doors.mp3",revision:"3f1982da2b5ffa6da7cb14e0b5298d5d"},{url:"/witcher-character-sheet/sounds/doorbell.mp3",revision:"7cd36b09b7afff4c67a22be7de8e3539"},{url:"/witcher-character-sheet/sounds/dragon_fast_wings_flap.mp3",revision:"2fb4b189d1832f705dedc15aff02df78"},{url:"/witcher-character-sheet/sounds/dragon_roar.mp3",revision:"988170b7189261690dcc9f2a76181125"},{url:"/witcher-character-sheet/sounds/dragon_slow_wings_flap.mp3",revision:"5937cd4b0b449c8b357f54ae48b5daaa"},{url:"/witcher-character-sheet/sounds/horse_laugh.mp3",revision:"ad6bab9ab827cf6a839857c9879904ed"},{url:"/witcher-character-sheet/sounds/horse_walk.mp3",revision:"cf0ed92733593e45cf380f92bd7122b6"},{url:"/witcher-character-sheet/sounds/knocking.mp3",revision:"9654ddbe1a6e4684807a8b605dc6564c"},{url:"/witcher-character-sheet/sounds/knocking_on_doors.mp3",revision:"173c81c2c2c63cefa4235c60098586fa"},{url:"/witcher-character-sheet/sounds/lighter.mp3",revision:"56671acddd19e963d44a7ccd09b4a07c"},{url:"/witcher-character-sheet/sounds/object_destroying.mp3",revision:"eae379c31d7204b20b6881a9836f161e"},{url:"/witcher-character-sheet/sounds/opening_doors.mp3",revision:"4ad24f9bdc1cbf1a545fb20f103ba101"},{url:"/witcher-character-sheet/sounds/paper_writing_fast.mp3",revision:"ff0174c60e8c574fc56d91edbe039a39"},{url:"/witcher-character-sheet/sounds/paper_writing_slow.mp3",revision:"aadb0a35fad2fbae183c09adbb6bd05e"},{url:"/witcher-character-sheet/sounds/room_search.mp3",revision:"c258dae8f93db21337148399760ab9a6"},{url:"/witcher-character-sheet/sounds/steam_machine.mp3",revision:"2c1cbe2858e8d6a0c1a8da4f5af56d28"},{url:"/witcher-character-sheet/sounds/stone_scratching.mp3",revision:"537c08fb992e4826e706b0b0d8a6f8b0"},{url:"/witcher-character-sheet/sounds/table_scratching.mp3",revision:"80f9872d376dc4f5b99b3c9975752171"},{url:"/witcher-character-sheet/sounds/torch_flame.mp3",revision:"5ee29b4da9d0451a70ccdb96837aea3f"}],{})}));
//# sourceMappingURL=service-worker.js.map
