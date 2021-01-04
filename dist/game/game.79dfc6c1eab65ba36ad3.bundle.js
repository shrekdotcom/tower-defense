(()=>{"use strict";var t={197:(t,e,n)=>{n.d(e,{Z:()=>o});var i=n(645),r=n.n(i)()((function(t){return t[1]}));r.push([t.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\tbackground-color: #141414;\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n}",""]);const o=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(r[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);i&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},202:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s});var i=n(379),r=n.n(i),o=n(197);r()(o.Z,{insert:"head",singleton:!1});const s=o.Z.locals||{}},379:(t,e,n)=>{var i,r=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function s(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},i=[],r=0;r<t.length;r++){var a=t[r],c=e.base?a[0]+e.base:a[0],h=n[c]||0,d="".concat(c," ").concat(h);n[c]=h+1;var l=s(d),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(o[l].references++,o[l].updater(u)):o.push({identifier:d,updater:y(u,e),references:1}),i.push(d)}return i}function c(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var s=r(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var h,d=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function l(t,e,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function u(t,e,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var f=null,p=0;function y(t,e){var n,i,r;if(e.singleton){var o=p++;n=f||(f=c(e)),i=l.bind(null,n,o,!1),r=l.bind(null,n,o,!0)}else n=c(e),i=u.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var r=s(n[i]);o[r].references--}for(var c=a(t,e),h=0;h<n.length;h++){var d=s(n[h]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=c}}}},693:(t,e,n)=>{const{GAME_WIDTH:i,GAME_HEIGHT:r}=n(556);t.exports=class{constructor(t=i/2,e=r/2,n=1){this.x=t,this.y=e,this.speed=n}interp(t,e,n){this.x+=(t-this.x)*n*this.speed,this.y+=(e-this.y)*n*this.speed}setTo(t,e){this.x=t,this.y=e}}},565:(t,e,n)=>{const i=n(736),r=n(140),o=n(693),{BACKGROUND_COLOR:s}=n(556);t.exports=class{constructor(){this.wave=0,this.towers=[],this.fov=.1,this.camera=new o,this.path=new r([{x:0,y:0},{x:100,y:100},{x:200,y:300},{x:700,y:400},{x:690,y:250},{x:800,y:250},{x:850,y:200},{x:900,y:100},{x:950,y:150},{x:1e3,y:175},{x:1e3,y:200},{x:1100,y:350},{x:1250,y:200},{x:1300,y:200},{x:1350,y:300},{x:1400,y:400},{x:1200,y:500},{x:1e3,y:600},{x:500,y:600},{x:450,y:550},{x:300,y:650},{x:400,y:700},{x:1e3,y:750},{x:1300,y:800},{x:1500,y:850},{x:1600,y:900}],70),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),i(this.canvas),this.listen("resize",(()=>i(this.canvas))),document.body.appendChild(this.canvas)}listen(t,e){window.addEventListener(t,e.bind(this))}stop(){this.afr&&window.cancelAnimationFrame(this.afr)}start(){(function t(){this.update(),this.render(),this.afr=requestAnimationFrame(t.bind(this))}).bind(this)()}render(){this.ctx.fillStyle=s,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.path.render(this.ctx,this.camera)}update(){}}},140:(t,e,n)=>{const i=n(503);t.exports=class{constructor(t,e){this.paths=t,this.pathSize=e}idx(t){return this.paths[t]}lineToPaths(t,e){for(const{x:n,y:r}of this.paths){const o=i(n,r,e);t.lineTo(o.x,o.y)}}render(t,e){t.beginPath(),t.lineJoin="round",this.lineToPaths(t,e),t.strokeStyle="black",t.lineWidth=this.pathSize,t.stroke(),t.beginPath(),this.lineToPaths(t,e),t.strokeStyle="white",t.lineWidth=.8*this.pathSize,t.stroke(),t.beginPath(),this.lineToPaths(t,e),t.strokeStyle="red",t.lineWidth=2,t.stroke()}}},556:t=>{t.exports={GAME_WIDTH:1600,GAME_HEIGHT:900,BACKGROUND_COLOR:"#c8c8c8",LINE_DISTANCE:50}},503:(t,e,n)=>{const{GAME_WIDTH:i,GAME_HEIGHT:r}=n(556);t.exports=function(t,e,n){return{x:Math.round(t-n.x+i/2),y:Math.round(e-n.y+r/2)}}},736:(t,e,n)=>{const{GAME_WIDTH:i,GAME_HEIGHT:r}=n(556);t.exports=function(t,e=(()=>{})){t&&(t.width!==i&&(t.width=i),t.height!==r&&(t.height=r),t.style.transform=`scale(${Math.min(window.innerWidth/i,window.innerHeight/r)})`,t.style.left=(window.innerWidth-i)/2+"px",t.style.top=(window.innerHeight-r)/2+"px",e())}}},e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={id:i,exports:{}};return t[i](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(202),(new(n(565))).start()})();