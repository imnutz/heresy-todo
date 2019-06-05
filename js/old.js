!function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&a(i,n.prototype),i}).apply(null,arguments)}function u(e){var t="function"==typeof Map?new Map:void 0;return(u=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return c(e,arguments,o(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)})(e)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h={};try{h.WeakMap=WeakMap}catch(e){h.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,i=o.prototype;return i.delete=function(e){return this.has(e)&&delete e[this._]},i.get=function(e){return this.has(e)?e[this._]:void 0},i.has=function(e){return r.call(e,this._)},i.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(a,this)}function a(e){this.set(e[0],e[1])}}(Math.random(),Object)}var d=h.WeakMap,p=function(){var t="object"!==("undefined"==typeof document?"undefined":e(document)),n=function(e){if(!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw)||/Firefox\/(\d+)/.test((document.defaultView.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var i={};n=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return i[t]||(i[t]=e)}}else t=!0;return r(e)};return r;function r(e){return t?e:n(e)}}();function v(e){for(var t=arguments.length,n=[p(e)],r=1;r<t;)n.push(arguments[r++]);return n}var m=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var i=this.ownerDocument.createRange();i.setStartBefore(e?t[1]:n),i.setEndAfter(r),i.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,i=0,o=r.length;i<o;i++)t.appendChild(r[i]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice),g=Array.isArray,y=m.prototype.nodeType,b=function(e){var t="fragment",n="content"in i("template")?function(e){var t=i("template");return t.innerHTML=e,t.content}:function(e){var n=i(t),o=i("template"),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var c=RegExp.$1;o.innerHTML="<table>"+e+"</table>",a=o.querySelectorAll(c)}else o.innerHTML=e,a=o.childNodes;return r(n,a),n};return function(e,o){return("svg"===o?function(e){var n=i(t),o=i("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function i(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document),w={};try{w.Map=Map}catch(e){w.Map=function(){var e=0,t=[],n=[];return{delete:function(i){var o=r(i);return o&&(t.splice(e,1),n.splice(e,1)),o},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(i,o){return n[r(i)?e:t.push(i)-1]=o,this}};function r(n){return-1<(e=t.indexOf(n))}}}var k,E=w.Map,N=function(e,t,n,r,i,o){if(i-r<2)t.insertBefore(e(n[r],1),o);else{for(var a=t.ownerDocument.createDocumentFragment();r<i;)a.appendChild(e(n[r++],1));t.insertBefore(a,o)}},x=function(e,t){return e==t},C=function(e){return e},A=function(e,t,n,r,i,o,a){var c=o-i;if(c<1)return-1;for(;n-t>=c;){for(var u=t,l=i;u<n&&l<o&&a(e[u],r[l]);)u++,l++;if(l===o)return t;t=u+1}return-1},j=function(e,t,n,r,i){return n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i},O=function(e,t,n,r,i){if(i-r<2)t.removeChild(e(n[r],-1));else{var o=t.ownerDocument.createRange();o.setStartBefore(e(n[r],-1)),o.setEndAfter(e(n[i-1],-1)),o.deleteContents()}},S=function(e,t,n){for(var r=1,i=t;r<i;){var o=(r+i)/2>>>0;n<e[o]?i=o:r=o+1}return r},T=function(e,t,n,r,i,o,a,c,u,l,s,f,h){!function(e,t,n,r,i,o,a,c,u){for(var l=new E,s=e.length,f=a,h=0;h<s;)switch(e[h++]){case 0:i++,f++;break;case 1:l.set(r[i],1),N(t,n,r,i++,i,f<c?t(o[f],0):u);break;case-1:f++}for(h=0;h<s;)switch(e[h++]){case 0:a++;break;case-1:l.has(o[a])?a++:O(t,n,o,a++,a)}}(function(e,t,n,r,i,o,a){var c,u,l,s,f,h,d,p=n+o,v=[];e:for(c=0;c<=p;c++){if(c>50)return null;for(d=c-1,f=c?v[c-1]:[0,0],h=v[c]=[],u=-c;u<=c;u+=2){for(l=(s=u===-c||u!==c&&f[d+u-1]<f[d+u+1]?f[d+u+1]:f[d+u-1]+1)-u;s<o&&l<n&&a(r[i+s],e[t+l]);)s++,l++;if(s===o&&l===n)break e;h[c+u]=s}}var m=Array(c/2+p/2),g=m.length-1;for(c=v.length-1;c>=0;c--){for(;s>0&&l>0&&a(r[i+s-1],e[t+l-1]);)m[g--]=0,s--,l--;if(!c)break;d=c-1,f=c?v[c-1]:[0,0],(u=s-l)==-c||u!==c&&f[d+u-1]<f[d+u+1]?(l--,m[g--]=1):(s--,m[g--]=-1)}return m}(n,r,o,a,c,l,f)||function(e,t,n,r,i,o,a,c){var u=0,l=r<c?r:c,s=Array(l++),f=Array(l);f[0]=-1;for(var h=1;h<l;h++)f[h]=a;for(var d=new E,p=o;p<a;p++)d.set(i[p],p);for(var v=t;v<n;v++){var m=d.get(e[v]);null!=m&&-1<(u=S(f,l,m))&&(f[u]=m,s[u]={newi:v,oldi:m,prev:s[u-1]})}for(u=--l,--a;f[u]>a;)--u;l=c+r-u;var g=Array(l),y=s[u];for(--n;y;){for(var b=y,w=b.newi,k=b.oldi;n>w;)g[--l]=1,--n;for(;a>k;)g[--l]=-1,--a;g[--l]=0,--n,--a,y=y.prev}for(;n>=t;)g[--l]=1,--n;for(;a>=o;)g[--l]=-1,--a;return g}(n,r,i,o,a,c,u,l),e,t,n,r,a,c,s,h)},L=function(e,t,n,r){r||(r={});for(var i=r.compare||x,o=r.node||C,a=null==r.before?null:o(r.before,0),c=t.length,u=c,l=0,s=n.length,f=0;l<u&&f<s&&i(t[l],n[f]);)l++,f++;for(;l<u&&f<s&&i(t[u-1],n[s-1]);)u--,s--;var h=l===u,d=f===s;if(h&&d)return n;if(h&&f<s)return N(o,e,n,f,s,j(o,t,l,c,a)),n;if(d&&l<u)return O(o,e,t,l,u),n;var p=u-l,v=s-f,m=-1;if(p<v){if(-1<(m=A(n,f,s,t,l,u,i)))return N(o,e,n,f,m,o(t[l],0)),N(o,e,n,m+p,s,j(o,t,u,c,a)),n}else if(v<p&&-1<(m=A(t,l,u,n,f,s,i)))return O(o,e,t,l,m),O(o,e,t,m+v,u),n;return p<2||v<2?(N(o,e,n,f,s,o(t[l],0)),O(o,e,t,l,u),n):p===v&&function(e,t,n,r,i,o){for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t}(n,s,t,l,u,i)?(N(o,e,n,f,s,j(o,t,u,c,a)),n):(T(o,e,n,f,s,v,t,l,u,p,c,i,a),n)},M=function(e,t,n,r,i){var o="importNode"in e,a=e.createDocumentFragment();return a.appendChild(e.createTextNode("g")),a.appendChild(e.createTextNode("")),(o?e.importNode(a,!0):a.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),i=t.childNodes||[],o=i.length,a=0;n&&a<o;a++)r.appendChild(e(i[a],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),_="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},$="-"+Math.random().toFixed(6)+"%";try{"content"in(k=document.createElement("template"))&&(k.innerHTML='<p tabindex="'+$+'"></p>',k.content.childNodes[0].getAttribute("tabindex")==$)||($="_dt: "+$.slice(1,-1)+";")}catch(e){}var D="\x3c!--"+$+"--\x3e",R=8,P=1,H=3,z=/^(?:style|textarea)$/i,F=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var W=" \\f\\n\\r\\t",Z="[^"+W+"\\/>\"'=]+",V="["+W+"]+"+Z,I="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",B="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+Z.replace("\\/","")+"))?)",G=new RegExp(I+V+B+"+)(["+W+"]*/?>)","g"),q=new RegExp(I+V+B+"*)(["+W+"]*/>)","g"),J=new RegExp("("+V+"\\s*=\\s*)(['\"]?)"+D+"\\2","gi");function U(e,t,n,r){return"<"+t+n.replace(J,K)+r}function K(e,t,n){return t+(n||'"')+$+(n||'"')}function Q(e,t,n){return F.test(t)?e:"<"+t+n+"></"+t+">"}function X(e,t,n,r){return{name:r,node:t,path:n,type:e}}function Y(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function ee(e,t,n,r){for(var i=new E,o=e.attributes,a=[],c=a.slice.call(o,0),u=c.length,l=0;l<u;){var s=c[l++];if(s.value===$){var f=s.name;if(!i.has(f)){var h=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*['"]?$/,"$1"),d=o[h]||o[h.toLowerCase()];i.set(f,d),t.push(X("attr",d,r,h))}a.push(s)}}for(u=a.length,l=0;l<u;){var p=a[l++];/^id$/i.test(p.name)?e.removeAttribute(p.name):e.removeAttributeNode(p)}var v=e.nodeName;if(/^script$/i.test(v)){var m=document.createElement(v);for(u=o.length,l=0;l<u;)m.setAttributeNode(o[l++].cloneNode(!0));m.textContent=e.textContent,e.parentNode.replaceChild(m,e)}}var te=new d,ne=new d;function re(e,t){var n=function(e){return e.join(D).replace(q,Q).replace(G,U)}(t),r=e.transform;r&&(n=r(n));var i=b(n,e.type);!function(e){var t=e.childNodes,n=t.length;for(;n--;){var r=t[n];1!==r.nodeType&&0===_.call(r.textContent).length&&e.removeChild(r)}}(i);var o=[];!function e(t,n,r,i){for(var o=t.childNodes,a=o.length,c=0;c<a;){var u=o[c];switch(u.nodeType){case P:var l=i.concat(c);ee(u,n,r,l),e(u,n,r,l);break;case R:var s=u.textContent;if(s===$)r.shift(),n.push(z.test(t.nodeName)?X("text",t,i):X("any",u,i.concat(c)));else switch(s.slice(0,2)){case"/*":if("*/"!==s.slice(-2))break;case"👻":t.removeChild(u),c--,a--}break;case H:z.test(t.nodeName)&&_.call(u.textContent)===D&&(r.shift(),n.push(X("text",t,i)))}c++}}(i,o,t.slice(0),[]);var a={content:i,updates:function(n){for(var r=[],i=o.length,a=0;a<i;){var c=o[a++],u=Y(n,c.path);switch(c.type){case"any":r.push(e.any(u,[]));break;case"attr":r.push(e.attribute(u,c.name,c.node));break;case"text":r.push(e.text(u)),u.textContent=""}}return function(){var e=arguments.length,o=e-1,a=1;if(i!==o)throw new Error(o+" values instead of "+i+"\n"+t.join(", "));for(;a<e;)r[a-1](arguments[a++]);return n}}};return te.set(t,a),a}function ie(e){return function(t){var n=ne.get(e);return null!=n&&n.template===t||(n=function(e,t){var n=te.get(t)||re(e,t),r=M.call(document,n.content,!0),i={content:r,template:t,updates:n.updates(r)};return ne.set(e,i),i}(e,t)),n.updates.apply(null,arguments),n.content}}var oe=function(){var t=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,n=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),i(n,!0)}(e,t):i(e.style,!1)};function r(e,t,n){return t+"-"+n.toLowerCase()}function i(i,o){var a,c;return function(u){var l,s,f,h;switch(e(u)){case"object":if(u){if("object"===a){if(!o&&c!==u)for(s in c)s in u||(i[s]="")}else o?i.value="":i.cssText="";for(s in l=o?{}:i,u)f="number"!=typeof(h=u[s])||t.test(s)?h:h+"px",!o&&/^--/.test(s)?l.setProperty(s,f):l[s]=f;a="object",o?i.value=function(e){var t,i=[];for(t in e)i.push(t.replace(n,r),":",e[t],";");return i.join("")}(c=l):c=u;break}default:c!=u&&(a="string",c=u,o?i.value=u||"":i.cssText=u||"")}}}}(),ae=function(e,t){return e.nodeType===y?1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild:e},ce=function(e,t){var n,r=!1,i=t.cloneNode(!0);return function(t){n!==t&&(n=t,i.value!==t&&(null==t?(r&&(r=!1,e.removeAttributeNode(i)),i.value=t):(i.value=t,r||(r=!0,e.setAttributeNode(i)))))}},ue=function(e,t){var n;return function(r){n!==r&&(n=r,e[t]!==r&&(null==r?(e[t]="",e.removeAttribute(t)):e[t]=r))}},le=/^(?:form|list)$/i,se=[].slice,fe=function(e,t){return e.ownerDocument.createTextNode(t)};function he(e){return this.type=e,ie(this)}function de(e){return e(this)}he.prototype={attribute:function(e,t,n){switch(t){case"class":if("ownerSVGElement"in e)return ce(e,n);t="className";case"data":case"props":return ue(e,t);case"style":return oe(e,n,"ownerSVGElement"in e);case"ref":return function(e){return function(t){t.current=e}}(e);default:return"."===t.slice(0,1)?function(e,t){return function(n){e[t]=n}}(e,t.slice(1)):"on"===t.slice(0,2)?function(e,t){var n,r=t.slice(2);return t.toLowerCase()in e&&(r=r.toLowerCase()),function(t){n!==t&&(n&&e.removeEventListener(r,n,!1),n=t,t&&e.addEventListener(r,t,!1))}}(e,t):t in e&&!("ownerSVGElement"in e||le.test(t))?ue(e,t):ce(e,n)}},any:function(t,n){var r,i={node:ae,before:t},o="ownerSVGElement"in t?"svg":"html",a=!1;return function c(u){switch(e(u)){case"string":case"number":case"boolean":a?r!==u&&(r=u,n[0].textContent=u):(a=!0,r=u,n=L(t.parentNode,n,[fe(t,u)],i));break;case"function":c(u(t));break;case"object":case"undefined":if(null==u){a=!1,n=L(t.parentNode,n,[],i);break}default:if(a=!1,r=u,g(u))if(0===u.length)n.length&&(n=L(t.parentNode,n,[],i));else switch(e(u[0])){case"string":case"number":case"boolean":c(String(u));break;case"function":c(u.map(de,t));break;case"object":g(u[0])&&(u=u.concat.apply([],u));default:n=L(t.parentNode,n,u,i)}else!function(e){return"ELEMENT_NODE"in e}(u)?"text"in u?c(String(u.text)):"any"in u?c(u.any):"html"in u?n=L(t.parentNode,n,se.call(b([].concat(u.html).join(""),o).childNodes),i):"length"in u&&c(se.call(u)):n=L(t.parentNode,n,11===u.nodeType?se.call(u.childNodes):[u],i)}}},text:function(t){var n;return function r(i){if(n!==i){n=i;var o=e(i);"object"===o&&i?"text"in i?r(String(i.text)):"any"in i?r(i.any):"html"in i?r([].concat(i.html).join("")):"length"in i&&r(se.call(i).join("")):"function"===o?r(i(t)):t.textContent=null==i?"":i}}}};var pe=new d,ve=new d,me=null;function ge(e,t){var n=function(e,t){var n=me;(me=pe.get(e)||(r=e,i={i:0,length:0,stack:[],update:!1},pe.set(r,i),i)).i=0;var r,i;var o,a=t.call(this);if(a instanceof xe){o=we(Ee(a,0),me.update);var c=me,u=c.i,l=c.length,s=c.stack,f=c.update;u<l&&s.splice(me.length=u),f&&(me.update=!1)}else o=we(a,!1);return me=n,o}.call(this,e,t);return ve.get(e)!==n&&(ve.set(e,n),function(e,t){e.textContent="",e.appendChild(t)}(e,n)),e}var ye=ke("html"),be=ke("svg");function we(e,t){return e.nodeType===y?e.valueOf(t):e}function ke(e){var t=new d;return n.for=function(n,r){var i=t.get(n)||function(e){var n={$:null};return t.set(e,n),n}(n);return null==r&&(r="$"),i[r]||function(t,n){var r=null,i=new he(e);return t[n]=function(){var e=i.apply(null,v.apply(null,arguments));return r||(r=Ne(e))}}(i,r)},n;function n(){var t=v.apply(null,arguments);return me?new xe(e,t):new he(e).apply(null,t)}}function Ee(t,n){var r=me,i=r.i,o=r.length,a=r.stack,c=t.type,u=t.args,l=i<o;me.i++,l||(me.length=a.push({l:n,kind:c,tag:null,tpl:u[0],wire:null})),function t(n,r,i){for(var o=n.length;r<o;r++){var a=n[r];"object"===e(a)&&a&&(a instanceof xe?n[r]=Ee(a,i-1):g(a)&&(n[r]=t(a,0,i++)))}return n}(u,1,n+1);var s=a[i];if(l){var f=s.l,h=s.kind,d=s.tag,p=s.tpl,v=s.wire;if(f===n&&c===h&&p===u[0])return d.apply(null,u),v}var m=new he(c),y=Ne(m.apply(null,u));return s.l=n,s.kind=c,s.tag=m,s.tpl=u[0],s.wire=y,i<1&&(me.update=!0),y}function Ne(e){var t=e.childNodes,n=t.length;return 1===n?t[0]:n?new m(t):e}function xe(e,t){this.type=e,this.args=t}Object.freeze(xe);var Ce={};try{Ce.Event=new Event(".").constructor}catch(e){try{Ce.Event=new CustomEvent(".").constructor}catch(e){Ce.Event=function(e,t){t||(t={});var n=document.createEvent("Event"),r=!!t.bubbles,i=!!t.cancelable;n.initEvent(e,r,i);try{n.bubbles=r,n.cancelable=i}catch(n){}return n}}}var Ae=Ce.Event,je={};try{je.WeakSet=WeakSet}catch(e){!function(e){var t=new e,n=r.prototype;function r(n){t.set(this,new e),n&&n.forEach(this.add,this)}n.add=function(e){return t.get(this).set(e,1),this},n.delete=function(e){return t.get(this).delete(e)},n.has=function(e){return t.get(this).has(e)},je.WeakSet=r}(WeakMap)}var Oe=je.WeakSet,Se=Object.getPrototypeOf,Te="attributeChangedCallback",Le="connectedCallback",Me="dis".concat(Le),_e=new Oe,$e=new d,De=function(e,t,n){if(n in e){var r=e[n];t[n]={configurable:!0,value:function(){return Ie.call(this),r.call(this)}}}else t[n]={configurable:!0,value:Ie}},Re=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new xe("html",t)};Re.for=ye.for;var Pe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return new xe("svg",t)};Pe.for=be.for;var He=function(e,t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return ge(e,"function"==typeof(o=function(){return t.apply(void 0,r)})?o:function(){return o});var o}};function ze(e){this.addEventListener(e,this)}function Fe(){return He(this,Re)}function We(){return He(this,Pe)}function Ze(){return this.getAttribute("is")}function Ve(e){this["on".concat(e.type)](e)}function Ie(){_e.has(this)||(_e.add(this),$e.get(Se(this)).forEach(ze,this),this.dispatchEvent(new Ae("init")))}function Be(e,t,n){var r=new Ae("attributechanged");r.attributeName=e,r.oldValue=t,r.newValue=n,this.dispatchEvent(r)}function Ge(){this.dispatchEvent(new Ae("connected"))}function qe(){this.render()}function Je(){this.dispatchEvent(new Ae("disconnected"))}var Ue=Object.defineProperties,Ke={},Qe=null,Xe=0,Ye=function(){var e=Xe?"-"+Xe:"";return Xe++,function(t,n){if("function"==typeof t&&(t=(n=t).name+":"+n.tagName),!/^([A-Z][A-Za-z0-9_]*):([A-Za-z0-9-]+)$/.test(t))throw"Unable to retrieve name and tagName";var r,i=RegExp.$1,o=RegExp.$2,a=i.replace(/([A-Z])([A-Z][a-z])/g,r="$1"+(r||"-")+"$2").replace(/([a-z])([A-Z])/g,r).toLowerCase()+e+"-heresy";if(customElements.get(a))throw"Duplicated ".concat(a," definition");var c=n,u=c.prototype,l=c.style;Ue(u,function(e){$e.set(e,[]);var t={html:{configurable:!0,get:Fe},svg:{configurable:!0,get:We}};return"handleEvent"in e||(t.handleEvent={configurable:!0,value:Ve}),"is"in e||(t.is={configurable:!0,get:Ze}),"oninit"in e&&($e.get(e).push("init"),De(e,t,"render")),De(e,t,Te),De(e,t,Le),De(e,t,Me),[[Te,"onattributechanged",Be],[Le,"onconnected",Ge],[Me,"ondisconnected",Je],[Le,"render",qe]].forEach(function(n){var r=f(n,3),i=r[0],o=r[1],a=r[2];if(!(i in e)&&o in e)if("on"===o.slice(0,2)&&$e.get(e).push(o.slice(2)),i in t){var c=t[i].value;t[i]={configurable:!0,value:function(){return c.apply(this,arguments),a.apply(this,arguments)}}}else t[i]={configurable:!0,value:a}}),t}(u)),customElements.define(a,n,{extends:o}),Ke[i]={tagName:o,is:a},l&&function(e){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));var n=document.head||document.querySelector("head");n.insertBefore(t,n.lastChild)}(l.call(n,"".concat(o,'[is="').concat(a,'"]'))),Qe||function(e){var t=he.prototype.transform;he.prototype.transform=t?function(n){return e(t(n))}:e}(function(e){return e.replace(Qe,function(e,t,n,r){var i=Ke[n],o=i.tagName,a=i.is;return t?"</".concat(o,">"):"<".concat(o,' is="').concat(a,'"').concat(r)})});var s=Object.keys(Ke).join("|");return Qe=new RegExp("<(/)?(".concat(s,")([^A-Za-z0-9_])"),"g"),n}},et=Ue(Ye(),{local:{get:Ye}}),tt=function(e,t){return e?e[t]||(e[t]={current:null}):{current:null}};function nt(){var e=s(['\n      <h1>todos</h1>\n      <input class="new-todo" placeholder="What needs to be done?" autofocus>\n    ']);return nt=function(){return e},e}var rt=function(e){function n(){return t(this,n),l(this,o(n).apply(this,arguments))}return i(n,u(HTMLElement)),r(n,[{key:"render",value:function(){this.html(nt())}}]),n}(),it=Object.create(null),ot=function(e){return it[e]||function(e){return addEventListener("beforeunload",{name:e,handleEvent:at},!1),it[e]=JSON.parse(localStorage.getItem(e)||"{}")}(e)};function at(){var e=this.name;localStorage.setItem(e,JSON.stringify(it[e]))}var ct=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.pop();return t.forEach(function(e){var t=new WeakMap;Object.defineProperty(r.prototype,e,{get:function(){return t.get(this)},set:function(n){t.set(this,n);var r="on".concat(e);r in this&&this[r]()}})}),r};function ut(){var e=s(['\n    <div class="view">\n      <input\n        class="toggle" type="checkbox"\n        checked=',"\n      >\n      <label>",'</label>\n      <button class="destroy" onclick=',"></button>\n    </div>"]);return ut=function(){return e},e}var lt=ct("value",function(e){function n(){return t(this,n),l(this,o(n).apply(this,arguments))}return i(n,u(HTMLLIElement)),r(n,[{key:"render",value:function(){var e=this.value,t=e.checked,n=e.text;this.classList.toggle("completed",t),this.html(ut(),t,n,this)}},{key:"onclick",value:function(e){e.stopPropagation(),this.dispatchEvent(new Event("delete"))}},{key:"onvalue",value:function(){this.render()}}]),n}());function st(){var e=s(["<Item ondelete="," .value=","/>"]);return st=function(){return e},e}function ft(){var e=s(["",""]);return ft=function(){return e},e}et.local("Item:li",lt);var ht=ct("items",function(e){function n(){return t(this,n),l(this,o(n).apply(this,arguments))}return i(n,u(HTMLUListElement)),r(n,[{key:"render",value:function(){var e=this,t=this.items;this.html(ft(),Object.keys(t).map(function(n){return Re(st(),e,t[n])}))}},{key:"ondelete",value:function(e){var t=this,n=this.items,r=e.currentTarget.value;Object.keys(n).forEach(function(e){n[e]===r&&(delete n[e],t.render())})}},{key:"onitems",value:function(){this.render()}}]),n}());function dt(){var e=s(['\n      <input id="toggle-all" class="toggle-all" type="checkbox">\n      <label for="toggle-all">Mark all as complete</label>\n      <List\n        class="todo-list"\n        ref=',"\n        .items=","\n      />\n    "]);return dt=function(){return e},e}et.local("List:ul",ht);var pt=ct("data",function(e){function n(){return t(this,n),l(this,o(n).apply(this,arguments))}return i(n,u(HTMLElement)),r(n,[{key:"render",value:function(){this.html(dt(),tt(this,"list"),this.data.items)}},{key:"ondata",value:function(){this.render()}}]),n}());function vt(){var e=s(['\n      <span class="todo-count">','</span>\n      <ul class="filters">\n        <li>\n          <a href="#/" class="selected">All</a>\n        </li>\n        <li>\n          <a href="#/active">Active</a>\n        </li>\n        <li>\n          <a href="#/completed">Completed</a>\n        </li>\n      </ul>\n      <button class="clear-completed">Clear completed</button>\n    ']);return vt=function(){return e},e}var mt=ct("count",function(e){function n(){return t(this,n),l(this,o(n).apply(this,arguments))}return i(n,u(HTMLElement)),r(n,[{key:"oncount",value:function(){this.render()}},{key:"render",value:function(){this.html(vt(),this.count)}}]),n}());function gt(){var e=s(['\n      <Header class="header" ref='," onchange=",'/>\n      <Main class="main" ref='," onchange="," .data=",'/>\n      <Footer class="footer" ref='," count="," onclick=","/>\n    "]);return gt=function(){return e},e}var yt=et.local;yt("Header:header",rt),yt("Main:section",pt),yt("Footer:footer",mt),et("Todo:section",function(e){function n(){return t(this,n),l(this,o(n).apply(this,arguments))}return i(n,u(HTMLElement)),r(n,[{key:"render",value:function(){var e,t=(e=this.data.items,Object.keys(e).filter(function(t){return!e[t].checked}).length);this.html(gt(),this.header,this,this.main,this,this.data,this.footer,t,this)}},{key:"clearCompleted",value:function(){var e=this.data.items;Object.keys(e).forEach(function(t){e[t].checked&&delete e[t]})}},{key:"create",value:function(e){var t=++this.data.id;this.data.items[t]={text:e,checked:!1}}},{key:"toggleAll",value:function(e){var t=this.data.items;Object.keys(t).forEach(function(n){t[n].checked=e})}},{key:"oninit",value:function(){var e,t=[this.id||"",this.getAttribute("is")].join(":");this.data=((e=ot(t)).id||(e.id=0,e.items={}),e),this.header=tt(),this.main=tt(),this.footer=tt()}},{key:"onchange",value:function(e){var t,n,r=e.currentTarget,i=e.target;switch(r){case this.header.current:var o=i.value.trim();o&&(t=this.data.items,n=o,!Object.keys(t).some(function(e){return t[e].text===n}))&&(i.value="",this.create(o));break;case this.main.current:if("toggle-all"===i.className)this.toggleAll(i.checked);else i.closest("li").value.checked=i.checked}this.render()}},{key:"onclick",value:function(e){var t=e.currentTarget,n=e.target;switch(t){case this.footer.current:if("clear-completed"===n.className)this.clearCompleted();else if(!n.classList.contains("selected")){t.querySelector("a.selected").classList.remove("selected"),n.classList.add("selected");var r=this.main.current.list;r.current.classList.remove("active","completed");var i=n.hash.slice(2);i&&r.current.classList.add(i)}}this.render()}}],[{key:"style",value:function(e){return"\n      ".concat(e," ul.completed > li:not(.completed),\n      ").concat(e," ul.active > li.completed {\n        display: none;\n      }\n    ")}}]),n}())}();
