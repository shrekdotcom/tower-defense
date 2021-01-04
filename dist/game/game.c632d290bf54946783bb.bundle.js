(()=>{"use strict";var t={197:(t,e,n)=>{n.d(e,{Z:()=>r});var s=n(645),i=n.n(s)()((function(t){return t[1]}));i.push([t.id,"* {\r\n\tmargin:0;\r\n\tpadding:0;\r\n\tbox-sizing: border-box;\r\n}\r\nbody {\r\n\tfont-size:16px;\r\n\tbackground-color: #141414;\r\n}\r\ncanvas {\r\n\tposition:absolute;\r\n\tleft:0;\r\n\ttop:0;\r\n}",""]);const r=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,s){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(s)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var o=0;o<t.length;o++){var h=[].concat(t[o]);s&&i[h[0]]||(n&&(h[2]?h[2]="".concat(n," and ").concat(h[2]):h[2]=n),e.push(h))}},e}},202:(t,e,n)=>{n.r(e),n.d(e,{default:()=>a});var s=n(379),i=n.n(s),r=n(197);i()(r.Z,{insert:"head",singleton:!1});const a=r.Z.locals||{}},379:(t,e,n)=>{var s,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),r=[];function a(t){for(var e=-1,n=0;n<r.length;n++)if(r[n].identifier===t){e=n;break}return e}function o(t,e){for(var n={},s=[],i=0;i<t.length;i++){var o=t[i],h=e.base?o[0]+e.base:o[0],c=n[h]||0,d="".concat(h," ").concat(c);n[h]=c+1;var l=a(d),u={css:o[1],media:o[2],sourceMap:o[3]};-1!==l?(r[l].references++,r[l].updater(u)):r.push({identifier:d,updater:y(u,e),references:1}),s.push(d)}return s}function h(t){var e=document.createElement("style"),s=t.attributes||{};if(void 0===s.nonce){var r=n.nc;r&&(s.nonce=r)}if(Object.keys(s).forEach((function(t){e.setAttribute(t,s[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,d=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function l(t,e,n,s){var i=n?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(t.styleSheet)t.styleSheet.cssText=d(e,i);else{var r=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}function u(t,e,n){var s=n.css,i=n.media,r=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var p=null,f=0;function y(t,e){var n,s,i;if(e.singleton){var r=f++;n=p||(p=h(e)),s=l.bind(null,n,r,!1),i=l.bind(null,n,r,!0)}else n=h(e),s=u.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s));var n=o(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var s=0;s<n.length;s++){var i=a(n[s]);r[i].references--}for(var h=o(t,e),c=0;c<n.length;c++){var d=a(n[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}n=h}}}},693:(t,e,n)=>{const{GAME_WIDTH:s,GAME_HEIGHT:i}=n(556);t.exports=class{constructor(t=s/2,e=i/2,n=1){this.x=t,this.y=e,this.speed=n}interp(t,e,n){this.x+=(t-this.x)*n*this.speed,this.y+=(e-this.y)*n*this.speed}setTo(t,e){this.x=t,this.y=e}}},688:(t,e,n)=>{const s=n(17),i=n(131);t.exports={Basic:s,Fast:i}},17:(t,e,n)=>{const{PATH_SIZE:s,BASIC_ENEMY_COLOR:i}=n(556),r=n(503);t.exports=class{constructor(t,e=5,n=s-10){this.pathIndex=1,this.path=t,this.x=this.lastPath.x,this.y=this.lastPath.y,this.radius=n/2,this.speed=e,this.color=i,this.calculateVelocity()}lerp(t,e,n){return t*(1-n)+e*n}findAngle(){return Math.atan2(this.currentPath.y-this.lastPath.y,this.currentPath.x-this.lastPath.x)}calculateVelocity(){this.angle=this.findAngle(),this.xv=this.speed*Math.cos(this.angle),this.yv=this.speed*Math.sin(this.angle)}update(){this.x+=this.xv,this.y+=this.yv,this.onPath&&(this.pathIndex++,this.x=this.lastPath.x,this.y=this.lastPath.y,this.nextPath||(this.pathIndex=0),this.calculateVelocity())}get roundPos(){return{x:Math.round(this.x),y:Math.round(this.y)}}render(t,e){const n=this.radius;!function(s,i,a){t.fillStyle=a,t.beginPath();const o=r(s,i,e);t.arc(o.x,o.y,n,0,2*Math.PI),t.fill()}(this.x,this.y,this.color)}get lastPath(){return this.path[this.pathIndex-1]}get onPath(){return Math.abs(this.currentPath.x-this.roundPos.x)<this.speed&&Math.abs(this.currentPath.y-this.roundPos.y)<this.speed}get nextPath(){return this.path[this.pathIndex+1]}get currentPath(){return this.path[this.pathIndex]}}},131:(t,e,n)=>{const s=n(17),{PATH_SIZE:i,FAST_ENEMY_COLOR:r}=n(556);t.exports=class extends s{constructor(t,e=8,n=i-15){super(t,e,n),this.color=r}}},565:(t,e,n)=>{const s=n(736),i=n(140),r=n(693),a=n(1),{BACKGROUND_COLOR:o,SIMULATION_RATE:h}=n(556),c=n(662),d=n(448);t.exports=class{constructor(){this.wave=0,this.towers=[],this.fov=.1,this.camera=new r,this.path=n(846),this.pathObject=new i(this.path),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.state=new a,d(this.state.enemy,this.path,n(673)),this.tick=0,this.startTime=window.performance.now(),s(this.canvas),this.listen("resize",(()=>s(this.canvas))),document.body.appendChild(this.canvas)}listen(t,e){window.addEventListener(t,e.bind(this))}stop(){this.afr&&window.cancelAnimationFrame(this.afr)}start(){(function t(){this.update(),this.render(),this.afr=requestAnimationFrame(t.bind(this))}).bind(this)()}render(){this.ctx.fillStyle=o,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.pathObject.render(this.ctx,this.camera),this.state.render(this.ctx,this.camera)}simulate(){this.state.simulate()}update(){const t=c(this.startTime);let e=0;for(;this.tick<t;){if(e>h){this.tick=t;break}this.simulate(),this.tick++,e++}}}},673:t=>{t.exports=JSON.parse('[{"type":"basic","amount":10,"time-in-between-ms":600,"delay":150,"random-time":75},{"type":"fast","amount":5,"delay":300,"time-in-between-ms":250,"random-time":75}]')},846:t=>{t.exports=JSON.parse('[{"x":-50,"y":-50},{"x":100,"y":100},{"x":200,"y":300},{"x":700,"y":400},{"x":690,"y":250},{"x":800,"y":250},{"x":850,"y":200},{"x":900,"y":100},{"x":950,"y":150},{"x":1000,"y":175},{"x":1000,"y":200},{"x":1100,"y":350},{"x":1250,"y":200},{"x":1300,"y":200},{"x":1350,"y":300},{"x":1400,"y":400},{"x":1200,"y":500},{"x":1000,"y":600},{"x":500,"y":600},{"x":450,"y":550},{"x":300,"y":650},{"x":400,"y":700},{"x":1000,"y":750},{"x":1300,"y":800},{"x":1500,"y":850},{"x":1600,"y":900}]')},140:(t,e,n)=>{const s=n(503),{PATH_SIZE:i}=n(556);t.exports=class{constructor(t){this.paths=t}idx(t){return this.paths[t]}lineToPaths(t,e){for(const{x:n,y:i}of this.paths){const r=s(n,i,e);t.lineTo(r.x,r.y)}}render(t,e){t.beginPath(),t.lineJoin="round",this.lineToPaths(t,e),t.strokeStyle="black",t.lineWidth=i,t.stroke(),t.beginPath(),this.lineToPaths(t,e),t.strokeStyle="white",t.lineWidth=.8*i,t.stroke()}}},1:t=>{t.exports=class{constructor(){this.towers=[],this.enemy=[]}simulate(){for(const t of this.enemy)t.update()}render(t,e){for(const n of this.enemy)n.render(t,e)}}},556:t=>{t.exports={GAME_WIDTH:1600,GAME_HEIGHT:900,BACKGROUND_COLOR:"#c8c8c8",LINE_DISTANCE:50,PATH_SIZE:60,SIMULATION_RATE:30,FAST_ENEMY_COLOR:"#19d4ab",BASIC_ENEMY_COLOR:"#2d2e2e"}},662:(t,e,n)=>{const{SIMULATION_RATE:s}=n(556);t.exports=function(t){return Math.ceil((window.performance.now()-t)*(s/1e3))}},503:(t,e,n)=>{const{GAME_WIDTH:s,GAME_HEIGHT:i}=n(556);t.exports=function(t,e,n){return{x:Math.round(t-n.x+s/2),y:Math.round(e-n.y+i/2)}}},736:(t,e,n)=>{const{GAME_WIDTH:s,GAME_HEIGHT:i}=n(556);t.exports=function(t,e=(()=>{})){t&&(t.width!==s&&(t.width=s),t.height!==i&&(t.height=i),t.style.transform=`scale(${Math.min(window.innerWidth/s,window.innerHeight/i)})`,t.style.left=(window.innerWidth-s)/2+"px",t.style.top=(window.innerHeight-i)/2+"px",e())}},448:(t,e,n)=>{const s=n(688);t.exports=function(t,e,n){function i(n,s,i,r,a){setTimeout((()=>{for(let r=0;r<s;r++)setTimeout((()=>{t.push(new n(e))}),r*i+Math.random()*a)}),r)}for(const t of n){const{type:e,amount:n,delay:r}=t;"basic"===e?i(s.Basic,n,t["time-in-between-ms"],r,t["random-time"]):"fast"===e&&i(s.Fast,n,t["time-in-between-ms"],r,t["random-time"])}}}},e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={id:s,exports:{}};return t[s](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(202),(new(n(565))).start()})();