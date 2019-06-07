!function(){"use strict";!function(e,t,n){if(!t.get("ungap-li")&&typeof Reflect!=typeof r){var r="extends";try{var o={};o[r]="li";var s=HTMLLIElement,a=function(){return Reflect.construct(s,[],a)};if(a.prototype=n.create(s.prototype),t.define("ungap-li",a,o),!/is="ungap-li"/.test((new a).outerHTML))throw{}}catch(o){!function(){var o="attributeChangedCallback",s="connectedCallback",a="disconnectedCallback",i=n.assign,c=n.create,l=n.defineProperties,u=n.setPrototypeOf,d=t.define,h=t.get,f=t.upgrade,p=t.whenDefined,m=c(null),g=new WeakMap;new MutationObserver(function(e){for(var t=0,n=e.length;t<n;t++){for(var r=e[t],o=r.addedNodes,s=r.removedNodes,a=0,i=o.length;a<i;a++)C(o[a]);for(a=0,i=s.length;a<i;a++)w(s[a])}}).observe(e,{childList:!0,subtree:!0}),A(Document.prototype,"importNode"),A(Node.prototype,"cloneNode"),l(t,{define:{value:function(n,o,s){if(n=n.toLowerCase(),s&&r in s){m[n]=i({},s,{Class:o});for(var a=s[r]+'[is="'+n+'"]',c=e.querySelectorAll(a),l=0,u=c.length;l<u;l++)C(c[l])}else d.apply(t,arguments)}},get:{value:function(e){return e in m?m[e].Class:h.call(t,e)}},upgrade:{value:function(e){var n=k(e);!n||e instanceof n.Class?f.call(t,e):x(e,n)}},whenDefined:{value:function(e){return e in m?Promise.resolve():p.call(t,e)}}});var v=e.createElement;l(e,{createElement:{value:function(n,r){var o=v.call(e,n);return r&&"is"in r&&(o.setAttribute("is",r.is),t.upgrade(o)),o}}});var b=n.getOwnPropertyDescriptor(Element.prototype,"innerHTML");function y(e){for(var t=0,n=e.length;t<n;t++){var r=e[t],s=r.attributeName,a=r.oldValue,i=r.target,c=i.getAttribute(s);o in i&&(a!=c||null!=c)&&i[o](s,a,i.getAttribute(s),null)}}function w(e){if(1===e.nodeType){var t=k(e);t&&e instanceof t.Class&&a in e&&g.get(e)!==a&&(g.set(e,a),Promise.resolve(e).then(N)),$(e,w)}}function k(e){var t=e.getAttribute("is");return t&&(t=t.toLowerCase())in m?m[t]:null}function E(e){e[s]()}function N(e){e[a]()}function x(e,t){var n=t.Class,r=n.observedAttributes||[];if(u(e,n.prototype),r.length){new MutationObserver(y).observe(e,{attributes:!0,attributeFilter:r,attributeOldValue:!0});for(var o=[],s=0,a=r.length;s<a;s++)o.push({attributeName:r[s],oldValue:null,target:e});y(o)}}function C(e){if(1===e.nodeType){var t=k(e);t&&(e instanceof t.Class||x(e,t),s in e&&e.isConnected&&g.get(e)!==s&&(g.set(e,s),Promise.resolve(e).then(E))),$(e,C)}}function $(e,t){for(var n=e.querySelectorAll("[is]"),r=0,o=n.length;r<o;r++)t(n[r])}function A(e,t){var n=e[t],r={};r[t]={value:function(){var e=n.apply(this,arguments);switch(e.nodeType){case 1:case 11:$(e.content||e,C)}return e}},l(e,r)}l(Element.prototype,{innerHTML:{get:b.get,set:function(e){b.set.call(this,e),/\bis=("|')?[a-z0-9_-]+\1/i.test(e)&&$(this.content||this,C)}}})}()}}}(document,customElements,Object);var e=(...e)=>e,t=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var o=this.ownerDocument.createRange();o.setStartBefore(e?t[1]:n),o.setEndAfter(r),o.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,o=0,s=r.length;o<s;o++)t.appendChild(r[o]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const{isArray:n}=Array,r=t.prototype.nodeType,o=e=>document.createElementNS("http://www.w3.org/1999/xhtml",e),s=(e,t)=>("svg"===t?i:a)(e),a=e=>{const t=o("template");return t.innerHTML=e,t.content},i=e=>{const{content:t}=o("template"),n=o("div");n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>";const{childNodes:r}=n.firstChild;let{length:s}=r;for(;s--;)t.appendChild(r[0]);return t},c=(e,t,n,r,o,s)=>{if(o-r<2)t.insertBefore(e(n[r],1),s);else{const a=t.ownerDocument.createDocumentFragment();for(;r<o;)a.appendChild(e(n[r++],1));t.insertBefore(a,s)}},l=(e,t)=>e==t,u=e=>e,d=(e,t,n,r,o,s,a)=>{const i=s-o;if(i<1)return-1;for(;n-t>=i;){let i=t,c=o;for(;i<n&&c<s&&a(e[i],r[c]);)i++,c++;if(c===s)return t;t=i+1}return-1},h=(e,t,n,r,o)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:o,f=(e,t,n,r,o)=>{if(o-r<2)t.removeChild(e(n[r],-1));else{const s=t.ownerDocument.createRange();s.setStartBefore(e(n[r],-1)),s.setEndAfter(e(n[o-1],-1)),s.deleteContents()}},p=(e,t,n)=>{let r=1,o=t;for(;r<o;){const t=(r+o)/2>>>0;n<e[t]?o=t:r=t+1}return r},m=(e,t,n,r,o,s,a,i,l,u,d,h,m)=>{((e,t,n,r,o,s,a,i,l)=>{const u=new Map,d=e.length;let h=a,p=0;for(;p<d;)switch(e[p++]){case 0:o++,h++;break;case 1:u.set(r[o],1),c(t,n,r,o++,o,h<i?t(s[h],0):l);break;case-1:h++}for(p=0;p<d;)switch(e[p++]){case 0:a++;break;case-1:u.has(s[a])?a++:f(t,n,s,a++,a)}})(((e,t,n,r,o,s,a)=>{const i=n+s,c=[];let l,u,d,h,f,p,m;e:for(l=0;l<=i;l++){if(l>50)return null;for(m=l-1,f=l?c[l-1]:[0,0],p=c[l]=[],u=-l;u<=l;u+=2){for(d=(h=u===-l||u!==l&&f[m+u-1]<f[m+u+1]?f[m+u+1]:f[m+u-1]+1)-u;h<s&&d<n&&a(r[o+h],e[t+d]);)h++,d++;if(h===s&&d===n)break e;p[l+u]=h}}const g=Array(l/2+i/2);let v=g.length-1;for(l=c.length-1;l>=0;l--){for(;h>0&&d>0&&a(r[o+h-1],e[t+d-1]);)g[v--]=0,h--,d--;if(!l)break;m=l-1,f=l?c[l-1]:[0,0],(u=h-d)==-l||u!==l&&f[m+u-1]<f[m+u+1]?(d--,g[v--]=1):(h--,g[v--]=-1)}return g})(n,r,s,a,i,u,h)||((e,t,n,r,o,s,a,i)=>{let c=0,l=r<i?r:i;const u=Array(l++),d=Array(l);d[0]=-1;for(let e=1;e<l;e++)d[e]=a;const h=new Map;for(let e=s;e<a;e++)h.set(o[e],e);for(let r=t;r<n;r++){const t=h.get(e[r]);null!=t&&-1<(c=p(d,l,t))&&(d[c]=t,u[c]={newi:r,oldi:t,prev:u[c-1]})}for(c=--l,--a;d[c]>a;)--c;l=i+r-c;const f=Array(l);let m=u[c];for(--n;m;){const{newi:e,oldi:t}=m;for(;n>e;)f[--l]=1,--n;for(;a>t;)f[--l]=-1,--a;f[--l]=0,--n,--a,m=m.prev}for(;n>=t;)f[--l]=1,--n;for(;a>=s;)f[--l]=-1,--a;return f})(n,r,o,s,a,i,l,u),e,t,n,r,a,i,d,m)},g=(e,t,n,r)=>{r||(r={});const o=r.compare||l,s=r.node||u,a=null==r.before?null:s(r.before,0),i=t.length;let p=i,g=0,v=n.length,b=0;for(;g<p&&b<v&&o(t[g],n[b]);)g++,b++;for(;g<p&&b<v&&o(t[p-1],n[v-1]);)p--,v--;const y=g===p,w=b===v;if(y&&w)return n;if(y&&b<v)return c(s,e,n,b,v,h(s,t,g,i,a)),n;if(w&&g<p)return f(s,e,t,g,p),n;const k=p-g,E=v-b;let N=-1;if(k<E){if(-1<(N=d(n,b,v,t,g,p,o)))return c(s,e,n,b,N,s(t[g],0)),c(s,e,n,N+k,v,h(s,t,p,i,a)),n}else if(E<k&&-1<(N=d(t,g,p,n,b,v,o)))return f(s,e,t,g,N),f(s,e,t,N+E,p),n;return k<2||E<2?(c(s,e,n,b,v,s(t[g],0)),f(s,e,t,g,p),n):k===E&&((e,t,n,r,o,s)=>{for(;r<o&&s(n[r],e[t-1]);)r++,t--;return 0===t})(n,v,t,g,p,o)?(c(s,e,n,b,v,h(s,t,p,i,a)),n):(m(s,e,n,b,v,E,t,g,p,k,i,o,a),n)};var v,b=document.importNode,y="".trim,w="-"+Math.random().toFixed(6)+"%";try{"content"in(v=document.createElement("template"))&&(v.innerHTML='<p tabindex="'+w+'"></p>',v.content.childNodes[0].getAttribute("tabindex")==w)||(w="_dt: "+w.slice(1,-1)+";")}catch(e){}var k="\x3c!--"+w+"--\x3e",E=8,N=1,x=3,C=/^(?:style|textarea)$/i,$=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var A=" \\f\\n\\r\\t",M="[^"+A+"\\/>\"'=]+",j="["+A+"]+"+M,L="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",O="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+M.replace("\\/","")+"))?)",S=new RegExp(L+j+O+"+)(["+A+"]*/?>)","g"),T=new RegExp(L+j+O+"*)(["+A+"]*/>)","g"),W=new RegExp("("+j+"\\s*=\\s*)(['\"]?)"+k+"\\2","gi");function D(e,t,n,r){return"<"+t+n.replace(W,P)+r}function P(e,t,n){return t+(n||'"')+w+(n||'"')}function R(e,t,n){return $.test(t)?e:"<"+t+n+"></"+t+">"}function _(e,t,n,r){return{name:r,node:t,path:n,type:e}}function z(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function V(e,t,n,r){for(var o=new Map,s=e.attributes,a=[],i=a.slice.call(s,0),c=i.length,l=0;l<c;){var u=i[l++];if(u.value===w){var d=u.name;if(!o.has(d)){var h=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),f=s[h]||s[h.toLowerCase()];o.set(d,f),t.push(_("attr",f,r,h))}a.push(u)}}for(c=a.length,l=0;l<c;){var p=a[l++];/^id$/i.test(p.name)?e.removeAttribute(p.name):e.removeAttributeNode(p)}var m=e.nodeName;if(/^script$/i.test(m)){var g=document.createElement(m);for(c=s.length,l=0;l<c;)g.setAttributeNode(s[l++].cloneNode(!0));g.textContent=e.textContent,e.parentNode.replaceChild(g,e)}}var Z=new WeakMap,H=new WeakMap;function F(e,t){var n=function(e){return e.join(k).replace(T,R).replace(S,D)}(t),r=e.transform;r&&(n=r(n));var o=s(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===y.call(r.textContent).length&&e.removeChild(r)}}(o);var a=[];!function e(t,n,r,o){for(var s=t.childNodes,a=s.length,i=0;i<a;){var c=s[i];switch(c.nodeType){case N:var l=o.concat(i);V(c,n,r,l),e(c,n,r,l);break;case E:var u=c.textContent;if(u===w)r.shift(),n.push(C.test(t.nodeName)?_("text",t,o):_("any",c,o.concat(i)));else switch(u.slice(0,2)){case"/*":if("*/"!==u.slice(-2))break;case"👻":t.removeChild(c),i--,a--}break;case x:C.test(t.nodeName)&&y.call(c.textContent)===k&&(r.shift(),n.push(_("text",t,o)))}i++}}(o,a,t.slice(0),[]);var i={content:o,updates:function(n){for(var r=[],o=a.length,s=0;s<o;){var i=a[s++],c=z(n,i.path);switch(i.type){case"any":r.push(e.any(c,[]));break;case"attr":r.push(e.attribute(c,i.name,i.node));break;case"text":r.push(e.text(c)),c.textContent=""}}return function(){var e=arguments.length,s=e-1,a=1;if(o!==s)throw new Error(s+" values instead of "+o+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return Z.set(t,i),i}function I(e){return function(t){var n=H.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=Z.get(t)||F(e,t),r=b.call(document,n.content,!0),o={content:r,template:t,updates:n.updates(r)};return H.set(e,o),o}(e,t)),n.updates.apply(null,arguments),n.content}}var B=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,o){var s,a;return function(i){var c,l,u,d;switch(typeof i){case"object":if(i){if("object"===s){if(!o&&a!==i)for(l in a)l in i||(r[l]="")}else o?r.value="":r.cssText="";for(l in c=o?{}:r,i)u="number"!=typeof(d=i[l])||e.test(l)?d:d+"px",!o&&/^--/.test(l)?c.setProperty(l,u):c[l]=u;s="object",o?r.value=function(e){var r,o=[];for(r in e)o.push(r.replace(t,n),":",e[r],";");return o.join("")}(a=c):a=i;break}default:a!=i&&(s="string",a=i,o?r.value=i||"":r.cssText=i||"")}}}}();const G=(e,t)=>e.nodeType===r?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e,q=(e,t)=>{let n,r=!1;const o=t.cloneNode(!0);return t=>{n!==t&&(n=t,o.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(o)),o.value=t):(o.value=t,r||(r=!0,e.setAttributeNode(o)))))}},J=(e,t)=>{let n;return r=>{n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},K=/^(?:form|list)$/i,Q=[].slice,U=(e,t)=>e.ownerDocument.createTextNode(t);function X(e){return this.type=e,I(this)}function Y(e){return e(this)}X.prototype={attribute(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return q(e,n);t="className";case"data":case"props":return J(e,t);case"style":return B(e,n,"ownerSVGElement"in e);case"ref":return(e=>t=>{t.current=e})(e);default:return"."===t.slice(0,1)?((e,t)=>n=>{e[t]=n})(e,t.slice(1)):"on"===t.slice(0,2)?((e,t)=>{let n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}})(e,t):t in e&&!("ownerSVGElement"in e||K.test(t))?J(e,t):q(e,n)}},any(e,t){const r={node:G,before:e},o="ownerSVGElement"in e?"svg":"html";let a,i=!1;const c=l=>{switch(typeof l){case"string":case"number":case"boolean":i?a!==l&&(a=l,t[0].textContent=l):(i=!0,a=l,t=g(e.parentNode,t,[U(e,l)],r));break;case"function":c(l(e));break;case"object":case"undefined":if(null==l){i=!1,t=g(e.parentNode,t,[],r);break}default:if(i=!1,a=l,n(l))if(0===l.length)t.length&&(t=g(e.parentNode,t,[],r));else switch(typeof l[0]){case"string":case"number":case"boolean":c(String(l));break;case"function":c(l.map(Y,e));break;case"object":n(l[0])&&(l=l.concat.apply([],l));default:t=g(e.parentNode,t,l,r)}else(e=>"ELEMENT_NODE"in e)(l)?t=g(e.parentNode,t,11===l.nodeType?Q.call(l.childNodes):[l],r):"text"in l?c(String(l.text)):"any"in l?c(l.any):"html"in l?t=g(e.parentNode,t,Q.call(s([].concat(l.html).join(""),o).childNodes),r):"length"in l&&c(Q.call(l))}};return c},text(e){let t;const n=r=>{if(t!==r){t=r;const o=typeof r;"object"===o&&r?"text"in r?n(String(r.text)):"any"in r?n(r.any):"html"in r?n([].concat(r.html).join("")):"length"in r&&n(Q.call(r).join("")):"function"===o?n(r(e)):e.textContent=null==r?"":r}};return n}};const ee=new WeakMap,te=new WeakMap;let ne=null;function re(e,t){const n=function(e,t){const n=ne;(ne=ee.get(e)||function(e){const t={i:0,length:0,stack:[],update:!1};return ee.set(e,t),t}(e)).i=0;const r=t.call(this);let o;if(r instanceof ue){o=ae(ce(r,0),ne.update);const{i:e,length:t,stack:n,update:s}=ne;e<t&&n.splice(ne.length=e),s&&(ne.update=!1)}else o=ae(r,!1);return ne=n,o}.call(this,e,t);return te.get(e)!==n&&(te.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e}const oe=ie("html"),se=ie("svg");function ae(e,t){return e.nodeType===r?e.valueOf(t):e}function ie(t){const n=new WeakMap;return r.for=((r,o)=>{const s=n.get(r)||function(e){const t={$:null};return n.set(e,t),t}(r);return null==o&&(o="$"),s[o]||function(n,r){let o=null;const s=new X(t);return n[r]=function(){const t=s.apply(null,e.apply(null,arguments));return o||(o=le(t))}}(s,o)}),r;function r(){const n=e.apply(null,arguments);return ne?new ue(t,n):new X(t).apply(null,n)}}function ce(e,t){const{i:r,length:o,stack:s}=ne,{type:a,args:i}=e,c=r<o;ne.i++,c||(ne.length=s.push({l:t,kind:a,tag:null,tpl:i[0],wire:null})),function e(t,r,o){for(const{length:s}=t;r<s;r++){const s=t[r];"object"==typeof s&&s&&(s instanceof ue?t[r]=ce(s,o-1):n(s)&&(t[r]=e(s,0,o++)))}return t}(i,1,t+1);const l=s[r];if(c){const{l:e,kind:n,tag:r,tpl:o,wire:s}=l;if(e===t&&a===n&&o===i[0])return r.apply(null,i),s}const u=new X(a),d=le(u.apply(null,i));return l.l=t,l.kind=a,l.tag=u,l.tpl=i[0],l.wire=d,r<1&&(ne.update=!0),d}function le(e){const n=e.childNodes,{length:r}=n;return 1===r?n[0]:r?new t(n):e}function ue(e,t){this.type=e,this.args=t}Object.freeze(ue);var de={};try{de.Event=new Event(".").constructor}catch(e){try{de.Event=new CustomEvent(".").constructor}catch(e){de.Event=function(e,t){t||(t={});var n=document.createEvent("Event"),r=!!t.bubbles,o=!!t.cancelable;n.initEvent(e,r,o);try{n.bubbles=r,n.cancelable=o}catch(n){}return n}}}var he=de.Event,fe={};try{fe.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},fe.WeakSet=r}(WeakMap)}var pe=fe.WeakSet,me=function(){var e,t="object"!=typeof document,n=function(o){if(!("raw"in o)||o.propertyIsEnumerable("raw")||!Object.isFrozen(o.raw)||/(Firefox|Safari)\/(\d+)/.test(e=(document.defaultView.navigator||{}).userAgent)&&("Firefox"==RegExp.$1?RegExp.$2<55:!/(Chrome|Android)\/(\d+)/.test(e))){var s={};n=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return s[t]||(s[t]=e)}}else t=!0;return r(o)};return r;function r(e){return t?e:n(e)}}();const ge={map:{},re:null},ve=e=>new RegExp(`<(/)?(${e.join("|")})([^A-Za-z0-9_])`,"g");let be=null;const ye=(e,t)=>{const{map:n,re:r}=be||t;return e.replace(r,(e,t,r,o)=>{const{tagName:s,is:a,element:i}=n[r];return i?t?`</${a}>`:`<${a}${o}`:t?`</${s}>`:`<${s} is="${a}"${o}`})},we=({tagName:e,is:t,element:n})=>n?t:`${e}[is="${t}"]`,ke=e=>{be=e},Ee="_🔥",{defineProperties:Ne}=Object,xe=new WeakMap,Ce=new WeakMap,$e=new WeakMap,Ae=new pe,Me="attributeChangedCallback",je="connectedCallback",Le=`dis${je}`,Oe=(e,t,n)=>{if(n in e){const r=e[n];t[n]={configurable:!0,value(){return Fe.call(this),r.call(this)}}}else t[n]={configurable:!0,value:Fe}},Se=e=>{const{render:t}=e;e.render=function(){const n=this.constructor[Ee];return(e.render=n?function(){ke(n);const e=t.apply(this,arguments);return ke(null),e}:t).apply(this,arguments)}},Te=(e,t)=>{"render"in e&&Se(e);const n=[],r={is:{value:t},html:{configurable:!0,get:Ve},svg:{configurable:!0,get:Ze}};r[Ee]={value:n},"handleEvent"in e||(r.handleEvent={configurable:!0,value:He}),"oninit"in e&&(n.push("init"),Oe(e,r,"render")),Oe(e,r,Me),Oe(e,r,je),Oe(e,r,Le),[[Me,"onattributechanged",Ie],[je,"onconnected",Be],[Le,"ondisconnected",qe],[je,"render",Ge]].forEach(([t,o,s])=>{if(!(t in e)&&o in e)if("on"===o.slice(0,2)&&n.push(o.slice(2)),t in r){const e=r[t].value;r[t]={configurable:!0,value(){return e.apply(this,arguments),s.apply(this,arguments)}}}else r[t]={configurable:!0,value:s}}),Ne(e,r)},We=e=>new he(e),De=(...e)=>new ue("html",e);De.for=oe.for;const Pe=(...e)=>new ue("svg",e);Pe.for=se.for;const Re=(e,t,n)=>{const r=_e(e,t);return n.set(e,r),r},_e=(e,t)=>(n,...r)=>{const o=me(n),s=$e.get(o)||((e,t)=>{const n=t?ye(e.join(Ee),t).split(Ee):e;return $e.set(e,n),n})(o,e.constructor[Ee]);return re(e,()=>t(s,...r))};function ze(e){this.addEventListener(e,this)}function Ve(){return xe.get(this)||Re(this,De,xe)}function Ze(){return Ce.get(this)||Re(this,Pe,Ce)}function He(e){this[`on${e.type}`](e)}function Fe(){Ae.has(this)||(Ae.add(this),this[Ee].forEach(ze,this),this.dispatchEvent(We("init")))}function Ie(e,t,n){const r=We("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}function Be(){this.dispatchEvent(We("connected"))}function Ge(){this.render()}function qe(){this.dispatchEvent(We("disconnected"))}const{construct:Je,getPrototypeOf:Ke,setPrototypeOf:Qe}=Reflect;let Ue=null;try{Ue=new{o(){}}.o}catch(e){}var Xe=Ue?function(e,t){function n(){return Je(t?Ke(e):e,arguments,n)}return Qe(n,e),Qe(n.prototype,e.prototype),n}:e=>(class extends e{});const{create:Ye,defineProperty:et,defineProperties:tt,getOwnPropertyNames:nt,getOwnPropertySymbols:rt,getOwnPropertyDescriptor:ot,keys:st}=Object,at={element:HTMLElement},it=new WeakMap,ct=new WeakMap,lt=e=>e.tagName||e.extends,ut=e=>{const t=Ye(null),n=Ye(null),r={statics:t,prototype:n,tag:lt(e)};return nt(e).concat(rt(e)).forEach(r=>{const o=ot(e,r);switch(o.enumerable=!1,r){case"extends":r="tagName";case"contains":case"includes":case"name":case"observedAttributes":case"style":case"tagName":t[r]=o;break;default:n[r]=o}}),r},dt=(e,t)=>e?e[t]||(e[t]={current:null}):{current:null},ht=(e,t,n)=>{if(e.indexOf(":")<0&&(e+=":"+lt(t)),!/^([A-Z][A-Za-z0-9_]*):([A-Za-z0-9-]+)$/.test(e))throw"Invalid name or tagName";const{$1:r,$2:o}=RegExp,s=function(e,t){return e.replace(/([A-Z])([A-Z][a-z])/g,t="$1"+(t||"-")+"$2").replace(/([a-z])([A-Z])/g,t).toLowerCase()}(r)+n+"-heresy";if(customElements.get(s))throw`Duplicated ${s} definition`;const a=Xe("object"==typeof t?ct.get(t)||((e,t)=>{const{statics:n,prototype:r,tag:o}=ut(e),s=Xe(at[o]||(at[o]=document.createElement(o).constructor),!1);return Te(tt(s.prototype,r),t),ct.set(e,tt(s,n)),s})(t,s):it.get(t)||((e,t)=>{const n=Xe(e,!1);return Te(n.prototype,t),it.set(e,n),n})(t,s),!0);""===n&&(ge.map[r]=pt(a,o,s),ge.re=ve(st(ge.map)));const i=[s,a],c="element"===o;return c||i.push({extends:o}),customElements.define(...i),et(a,"new",{value:()=>c?document.createElement(s):document.createElement(o,{is:s})}),{Class:a,is:s,name:r,tagName:o}};let ft=0;const pt=(e,t,n)=>{const r=((e,t)=>({tagName:e,is:t,element:"element"===e}))(t,n),o=[we(r)],s=e.includes||e.contains;if(s){const t="-"+ ++ft,n={};st(s).forEach(e=>{const{Class:r,is:a,name:i,tagName:c}=ht(e,s[e],t);o.push(we(n[i]=pt(r,c,a)))});const r=ve(st(n));et(e,Ee,{value:{map:n,re:r}})}return"style"in e&&(e=>{const t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));const n=document.head||document.querySelector("head");n.insertBefore(t,n.lastChild)})(e.style(...o)),r};(e=>{const{transform:t}=X.prototype;X.prototype.transform=t?n=>e(t(n)):e})(e=>ye(e,ge));const mt=Object.create(null);var gt=e=>mt[e]||function(e){return addEventListener("beforeunload",{name:e,handleEvent:vt},!1),mt[e]=JSON.parse(localStorage.getItem(e)||"{}")}(e);function vt(){const{name:e}=this;localStorage.setItem(e,JSON.stringify(mt[e]))}const bt=(...e)=>{const t=e.pop();return e.forEach(e=>{const n=new WeakMap;Object.defineProperty(t,e,{get(){return n.get(this)},set(t){n.set(this,t);const r=`on${e}`;r in this&&this[r]()}})}),t};var yt={extends:"header",render(){this.html`
      <h1>todos</h1>
      <input class="new-todo" placeholder="What needs to be done?" autofocus>
    `}},wt=bt("value",{extends:"li",onvalue(){this.render()},onclick(e){e.stopPropagation(),this.dispatchEvent(new Event("delete"))},render(){const{checked:e,text:t}=this.value;this.classList.toggle("completed",e),this.html`
    <div class="view">
      <input
        class="toggle" type="checkbox"
        checked=${e}
      >
      <label>${t}</label>
      <button class="destroy" onclick=${this}></button>
    </div>`}}),kt=bt("items",{extends:"ul",includes:{Item:wt},onitems(){this.render()},render(){const{items:e}=this;this.html`${Object.keys(e).map(t=>De`<Item ondelete=${this} .value=${e[t]}/>`)}`},ondelete(e){const{items:t}=this,{currentTarget:n}=e,{value:r}=n;Object.keys(t).forEach(e=>{t[e]===r&&(delete t[e],this.render())})}});((e,t)=>("string"==typeof e?ht(e,t,""):ht(e.name,e,"")).Class)("Todo",{extends:"section",includes:{Header:yt,Main:bt("data",{extends:"section",includes:{List:kt},ondata(){this.render()},render(){this.html`
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <List
        class="todo-list"
        ref=${dt(this,"list")}
        .items=${this.data.items}
      />
    `}}),Footer:bt("count",{extends:"footer",oncount(){this.render()},render(){this.html`
      <span class="todo-count">${this.count}</span>
      <ul class="filters">
        <li>
          <a href="#/" class="selected">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button class="clear-completed">Clear completed</button>
    `}})},style:e=>`\n    ${e} ul.completed > li:not(.completed),\n    ${e} ul.active > li.completed {\n      display: none;\n    }\n  `,oninit(){this.data=(e=>{const t=gt(e);return t.id||(t.id=0,t.items={}),t})([this.id||"",this.is].join(":")),this.header=dt(),this.main=dt(),this.footer=dt()},render(){const e=(t=this.data.items,Object.keys(t).filter(e=>!t[e].checked).length);var t;this.html`
      <Header class="header" ref=${this.header} onchange=${this}/>
      <Main class="main" ref=${this.main} onchange=${this} .data=${this.data}/>
      <Footer class="footer" ref=${this.footer} count=${e} onclick=${this}/>
    `},clearCompleted(){const{items:e}=this.data;Object.keys(e).forEach(t=>{e[t].checked&&delete e[t]})},create(e){const t=++this.data.id;this.data.items[t]={text:e,checked:!1}},toggleAll(e){const{items:t}=this.data;Object.keys(t).forEach(n=>{t[n].checked=e})},onchange(e){const{currentTarget:t,target:n}=e;switch(t){case this.header.current:const e=n.value.trim();e&&(r=this.data.items,o=e,!Object.keys(r).some(e=>r[e].text===o))&&(n.value="",this.create(e));break;case this.main.current:if("toggle-all"===n.className)this.toggleAll(n.checked);else{const{value:e}=n.closest("li");e.checked=n.checked}}var r,o;this.render()},onclick(e){const{currentTarget:t,target:n}=e;switch(t){case this.footer.current:if("clear-completed"===n.className)this.clearCompleted();else if(!n.classList.contains("selected")){t.querySelector("a.selected").classList.remove("selected"),n.classList.add("selected");const{list:e}=this.main.current;e.current.classList.remove("active","completed");const r=n.hash.slice(2);r&&e.current.classList.add(r)}}this.render()}})}();
