!function(e){function n(n){for(var t,o,a=n[0],i=n[1],l=0,u=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);for(s&&s(n);u.length;)u.shift()()}var t={},r={0:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var a=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=function(e){return o.p+""+e+".DockManagerUpdatingPanes.bundle.js"}(e);var s=new Error;i=function(n){l.onerror=l.onload=null,clearTimeout(u);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,t[1](s)}r[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var s=i;o(o.s=2)}([function(e,n,t){"use strict";t.d(n,"a",(function(){return E})),t.d(n,"b",(function(){return Me})),t.d(n,"c",(function(){return oe})),t.d(n,"d",(function(){return q})),t.d(n,"e",(function(){return A})),t.d(n,"f",(function(){return O})),t.d(n,"g",(function(){return le}));var r,o,a,i=(r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),l=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function i(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(i,l)}s((r=r.apply(e,n||[])).next())}))},s=function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},u=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var a=arguments[n],i=0,l=a.length;i<l;i++,o++)r[o]=a[i];return r},c="igniteui-dockmanager",$=0,f=!1,d="undefined"!=typeof window?window:{},p=d.document||{head:{}},h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,n,t,r){return e.addEventListener(n,t,r)},rel:function(e,n,t,r){return e.removeEventListener(n,t,r)}},g=function(e){return Promise.resolve(e)},m=function(){try{return new CSSStyleSheet,!0}catch(e){}return!1}(),y=function(e,n,t,r){t&&t.map((function(t){var r=t[0],o=t[1],a=t[2],i=e,l=v(n,a),s=b(r);h.ael(i,o,l,s),(n.$rmListeners$=n.$rmListeners$||[]).push((function(){return h.rel(i,o,l,s)}))}))},v=function(e,n){return function(t){256&e.$flags$?e.$lazyInstance$[n](t):(e.$queuedListeners$=e.$queuedListeners$||[]).push([n,t])}},b=function(e){return 0!=(2&e)},w=function(e,n){return void 0===n&&(n=""),function(){}},M=new WeakMap,P=function(e){var n=e.$cmpMeta$,t=e.$hostElement$,r=n.$flags$,o=w(0,n.$tagName$),a=function(e,n,t,r){var o=k(n.$tagName$),a=de.get(o);if(e=11===e.nodeType?e:p,a)if("string"==typeof a){e=e.head||e;var i=M.get(e),l=void 0;i||M.set(e,i=new Set),i.has(o)||((l=p.createElement("style")).innerHTML=a,e.insertBefore(l,e.querySelector("link")),i&&i.add(o))}else e.adoptedStyleSheets.includes(a)||(e.adoptedStyleSheets=u(e.adoptedStyleSheets,[a]));return o}(t.shadowRoot?t.shadowRoot:t.getRootNode(),n);10&r&&(t["s-sc"]=a,t.classList.add(a+"-h"),2&r&&t.classList.add(a+"-s")),o()},k=function(e,n){return"sc-"+e},L={},j=function(e){return"object"===(e=typeof e)||"function"===e},O=function(e,n){for(var t=[],r=2;r<arguments.length;r++)t[r-2]=arguments[r];var o=null,a=null,i=!1,l=!1,s=[],u=function(n){for(var t=0;t<n.length;t++)o=n[t],Array.isArray(o)?u(o):null!=o&&"boolean"!=typeof o&&((i="function"!=typeof e&&!j(o))&&(o=String(o)),i&&l?s[s.length-1].$text$+=o:s.push(i?x(null,o):o),l=i)};if(u(t),n){n.key&&(a=n.key);var c=n.className||n.class;c&&(n.class="object"!=typeof c?c:Object.keys(c).filter((function(e){return c[e]})).join(" "))}var $=x(e,null);return $.$attrs$=n,s.length>0&&($.$children$=s),$.$key$=a,$},x=function(e,n){var t={$flags$:0,$tag$:e,$text$:n,$elm$:null,$children$:null,$attrs$:null,$key$:null};return t},E={},R=function(e,n,t,r,o,a){if(t!==r){var i=ue(e,n),l=n.toLowerCase();if("class"===n){var s=e.classList,u=T(t),c=T(r);s.remove.apply(s,u.filter((function(e){return e&&!c.includes(e)}))),s.add.apply(s,c.filter((function(e){return e&&!u.includes(e)})))}else if("style"===n){for(var $ in t)r&&null!=r[$]||($.includes("-")?e.style.removeProperty($):e.style[$]="");for(var $ in r)t&&r[$]===t[$]||($.includes("-")?e.style.setProperty($,r[$]):e.style[$]=r[$])}else if("key"===n);else if("ref"===n)r&&r(e);else if(i||"o"!==n[0]||"n"!==n[1]){var f=j(r);if((i||f&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[n]=r;else{var p=null==r?"":r;"list"===n?i=!1:null!=t&&e[n]==p||(e[n]=p)}}catch(e){}null==r||!1===r?e.removeAttribute(n):(!i||4&a||o)&&!f&&(r=!0===r?"":r,e.setAttribute(n,r))}else n="-"===n[2]?n.slice(3):ue(d,l)?l.slice(2):l[2]+n.slice(3),t&&h.rel(e,n,t,!1),r&&h.ael(e,n,r,!1)}},S=/\s/,T=function(e){return e?e.split(S):[]},C=function(e,n,t,r){var o=11===n.$elm$.nodeType&&n.$elm$.host?n.$elm$.host:n.$elm$,a=e&&e.$attrs$||L,i=n.$attrs$||L;for(r in a)r in i||R(o,r,a[r],void 0,t,n.$flags$);for(r in i)R(o,r,a[r],i[r],t,n.$flags$)},N=function(e,n,t,r){var a,i,l=n.$children$[t],s=0;if(null!==l.$text$)a=l.$elm$=p.createTextNode(l.$text$);else if(a=l.$elm$=p.createElement(l.$tag$),C(null,l,!1),null!=o&&a["s-si"]!==o&&a.classList.add(a["s-si"]=o),l.$children$)for(s=0;s<l.$children$.length;++s)(i=N(e,l,s))&&a.appendChild(i);return a},z=function(e,n,t,r,o,i){var l,s=e;for(s.shadowRoot&&s.tagName===a&&(s=s.shadowRoot);o<=i;++o)r[o]&&(l=N(null,t,o))&&(r[o].$elm$=l,s.insertBefore(l,n))},_=function(e,n,t,r,o){for(;n<=t;++n)(r=e[n])&&(o=r.$elm$,D(r),o.remove())},H=function(e,n){return e.$tag$===n.$tag$&&e.$key$===n.$key$},I=function(e,n){var t=n.$elm$=e.$elm$,r=e.$children$,o=n.$children$,a=n.$tag$,i=n.$text$;null===i?("slot"===a||C(e,n,!1),null!==r&&null!==o?function(e,n,t,r){for(var o,a,i=0,l=0,s=0,u=0,c=n.length-1,$=n[0],f=n[c],d=r.length-1,p=r[0],h=r[d];i<=c&&l<=d;)if(null==$)$=n[++i];else if(null==f)f=n[--c];else if(null==p)p=r[++l];else if(null==h)h=r[--d];else if(H($,p))I($,p),$=n[++i],p=r[++l];else if(H(f,h))I(f,h),f=n[--c],h=r[--d];else if(H($,h))I($,h),e.insertBefore($.$elm$,f.$elm$.nextSibling),$=n[++i],h=r[--d];else if(H(f,p))I(f,p),e.insertBefore(f.$elm$,$.$elm$),f=n[--c],p=r[++l];else{for(s=-1,u=i;u<=c;++u)if(n[u]&&null!==n[u].$key$&&n[u].$key$===p.$key$){s=u;break}s>=0?((a=n[s]).$tag$!==p.$tag$?o=N(n&&n[l],t,s):(I(a,p),n[s]=void 0,o=a.$elm$),p=r[++l]):(o=N(n&&n[l],t,l),p=r[++l]),o&&$.$elm$.parentNode.insertBefore(o,$.$elm$)}i>c?z(e,null==r[d+1]?null:r[d+1].$elm$,t,r,l,d):l>d&&_(n,i,c)}(t,r,n,o):null!==o?(null!==e.$text$&&(t.textContent=""),z(t,null,n,o,0,o.length-1)):null!==r&&_(r,0,r.length-1)):e.$text$!==i&&(t.data=i)},D=function(e){e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(D)},U=function(e,n){var t,r=e.$hostElement$,i=e.$cmpMeta$,l=e.$vnode$||x(null,null),s=(t=n)&&t.$tag$===E?n:O(null,null,n);a=r.tagName,i.$attrsToReflect$&&(s.$attrs$=s.$attrs$||{},i.$attrsToReflect$.map((function(e){var n=e[0],t=e[1];return s.$attrs$[t]=r[n]}))),s.$tag$=null,s.$flags$|=4,e.$vnode$=s,s.$elm$=l.$elm$=r.shadowRoot||r,o=r["s-sc"],I(l,s)},A=function(e){return ie(e).$hostElement$},q=function(e,n,t){var r=A(e);return{emit:function(e){return B(r,n,{bubbles:!!(4&t),composed:!!(2&t),cancelable:!!(1&t),detail:e})}}},B=function(e,n,t){var r=new CustomEvent(n,t);return e.dispatchEvent(r),r},F=function(e,n){n&&!e.$onRenderResolve$&&n["s-p"]&&n["s-p"].push(new Promise((function(n){return e.$onRenderResolve$=n})))},W=function(e,n){if(e.$flags$|=16,!(4&e.$flags$)){F(e,e.$ancestorComponent$);return we((function(){return V(e,n)}))}e.$flags$|=512},V=function(e,n){var t,r=w(0,e.$cmpMeta$.$tagName$),o=e.$lazyInstance$;return n&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var n=e[0],t=e[1];return Z(o,n,t)})),e.$queuedListeners$=null),t=Z(o,"componentWillLoad")),r(),X(t,(function(){return G(e,o,n)}))},G=function(e,n,t){var r=e.$hostElement$,o=w(0,e.$cmpMeta$.$tagName$),a=r["s-rc"];t&&P(e);var i=w(0,e.$cmpMeta$.$tagName$);U(e,J(n)),e.$flags$&=-17,e.$flags$|=2,a&&(a.map((function(e){return e()})),r["s-rc"]=void 0),i(),o();var l=r["s-p"],s=function(){return K(e)};0===l.length?s():(Promise.all(l).then(s),e.$flags$|=4,l.length=0)},J=function(e){try{e=e.render()}catch(e){ce(e)}return e},K=function(e){var n=e.$cmpMeta$.$tagName$,t=e.$hostElement$,r=w(0,n),o=e.$lazyInstance$,a=e.$ancestorComponent$;64&e.$flags$?r():(e.$flags$|=64,Y(t),Z(o,"componentDidLoad"),r(),e.$onReadyResolve$(t),a||Q()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&be((function(){return W(e,!1)})),e.$flags$&=-517},Q=function(e){Y(p.documentElement),h.$flags$|=2,be((function(){return B(d,"appload",{detail:{namespace:c}})}))},Z=function(e,n,t){if(e&&e[n])try{return e[n](t)}catch(e){ce(e)}},X=function(e,n){return e&&e.then?e.then(n):n()},Y=function(e){return e.classList.add("hydrated")},ee=function(e,n,t,r){var o,a,i=ie(e),l=i.$instanceValues$.get(n),s=i.$flags$,u=i.$lazyInstance$;if(o=t,a=r.$members$[n][0],t=null==o||j(o)?o:4&a?"false"!==o&&(""===o||!!o):2&a?parseFloat(o):1&a?String(o):o,!(8&s&&void 0!==l||t===l)&&(i.$instanceValues$.set(n,t),u)){if(r.$watchers$&&128&s){var c=r.$watchers$[n];c&&c.map((function(e){try{u[e](t,l,n)}catch(e){ce(e)}}))}2==(18&s)&&W(i,!1)}},ne=function(e,n,t){if(n.$members$){e.watchers&&(n.$watchers$=e.watchers);var r=Object.entries(n.$members$),o=e.prototype;if(r.map((function(e){var r=e[0],a=e[1][0];(31&a||2&t&&32&a)&&Object.defineProperty(o,r,{get:function(){return e=r,ie(this).$instanceValues$.get(e);var e},set:function(e){ee(this,r,e,n)},configurable:!0,enumerable:!0})})),1&t){var a=new Map;o.attributeChangedCallback=function(e,n,t){var r=this;h.jmp((function(){var n=a.get(e);r[n]=(null!==t||"boolean"!=typeof r[n])&&t}))},e.observedAttributes=r.filter((function(e){e[0];return 15&e[1][0]})).map((function(e){var t=e[0],r=e[1],o=r[1]||t;return a.set(o,t),512&r[0]&&n.$attrsToReflect$.push([t,o]),o}))}}return e},te=function(e,n,t,r,o){return l(void 0,void 0,void 0,(function(){var e,r,a,i,l,u,c;return s(this,(function(s){switch(s.label){case 0:return 0!=(32&n.$flags$)?[3,3]:(n.$flags$|=32,(o=fe(t)).then?(e=function(){},[4,o]):[3,2]);case 1:o=s.sent(),e(),s.label=2;case 2:o.isProxied||(t.$watchers$=o.watchers,ne(o,t,2),o.isProxied=!0),r=w(0,t.$tagName$),n.$flags$|=8;try{new o(n)}catch(e){ce(e)}n.$flags$&=-9,n.$flags$|=128,r(),re(n.$lazyInstance$),a=k(t.$tagName$),!de.has(a)&&o.style&&(i=w(0,t.$tagName$),l=o.style,function(e,n,t){var r=de.get(e);m&&t?(r=r||new CSSStyleSheet).replace(n):r=n,de.set(e,r)}(a,l,!!(1&t.$flags$)),i()),s.label=3;case 3:return u=n.$ancestorComponent$,c=function(){return W(n,!0)},u&&u["s-rc"]?u["s-rc"].push(c):c(),[2]}}))}))},re=function(e){Z(e,"connectedCallback")},oe=function(e,n){void 0===n&&(n={});var t,r=w(),o=[],a=n.exclude||[],l=d.customElements,s=p.head,u=s.querySelector("meta[charset]"),c=p.createElement("style"),$=[],f=!0;Object.assign(h,n),h.$resourcesUrl$=new URL(n.resourcesUrl||"./",p.baseURI).href,n.syncQueue&&(h.$flags$|=4),e.map((function(e){return e[1].map((function(n){var r={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};r.$members$=n[2],r.$listeners$=n[3],r.$attrsToReflect$=[],r.$watchers$={};var s=r.$tagName$,u=function(e){function n(n){var t=e.call(this,n)||this;return se(n=t,r),1&r.$flags$&&n.attachShadow({mode:"open"}),t}return i(n,e),n.prototype.connectedCallback=function(){var e=this;t&&(clearTimeout(t),t=null),f?$.push(this):h.jmp((function(){return function(e){if(0==(1&h.$flags$)){var n=ie(e),t=n.$cmpMeta$,r=w(0,t.$tagName$);if(1&n.$flags$)y(e,n,t.$listeners$),re(n.$lazyInstance$);else{n.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){F(n,n.$ancestorComponent$=o);break}t.$members$&&Object.entries(t.$members$).map((function(n){var t=n[0];if(31&n[1][0]&&e.hasOwnProperty(t)){var r=e[t];delete e[t],e[t]=r}})),be((function(){return te(0,n,t)}))}r()}}(e)}))},n.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return function(e){if(0==(1&h.$flags$)){var n=ie(e),t=n.$lazyInstance$;n.$rmListeners$&&(n.$rmListeners$.map((function(e){return e()})),n.$rmListeners$=void 0),Z(t,"disconnectedCallback"),Z(t,"componentDidUnload")}}(e)}))},n.prototype.forceUpdate=function(){var e;e=ie(this),e.$hostElement$.isConnected&&2==(18&e.$flags$)&&W(e,!1)},n.prototype.componentOnReady=function(){return ie(this).$onReadyPromise$},n}(HTMLElement);r.$lazyBundleIds$=e[0],a.includes(s)||l.get(s)||(o.push(s),l.define(s,ne(u,r,1)))}))})),c.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),s.insertBefore(c,u?u.nextSibling:s.firstChild),f=!1,$.length?$.map((function(e){return e.connectedCallback()})):h.jmp((function(){return t=setTimeout(Q,30)})),r()},ae=new WeakMap,ie=function(e){return ae.get(e)},le=function(e,n){return ae.set(n.$lazyInstance$=e,n)},se=function(e,n){var t={$flags$:0,$hostElement$:e,$cmpMeta$:n,$instanceValues$:new Map};return t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],y(e,t,n.$listeners$),ae.set(e,t)},ue=function(e,n){return n in e},ce=function(e){return console.error(e)},$e=new Map,fe=function(e,n,r){var o=e.$tagName$.replace(/-/g,"_"),a=e.$lazyBundleIds$,i=$e.get(a);return i?i[o]:t(1)("./"+a+".entry.js").then((function(e){return $e.set(a,e),e[o]}),ce)},de=new Map,pe=[],he=[],ge=[],me=function(e,n){return function(t){e.push(t),f||(f=!0,n&&4&h.$flags$?be(ve):h.raf(ve))}},ye=function(e,n){for(var t=0,r=0;t<e.length&&(r=performance.now())<n;)try{e[t++](r)}catch(e){ce(e)}t===e.length?e.length=0:0!==t&&e.splice(0,t)},ve=function(){$++,function(e){for(var n=0;n<e.length;n++)try{e[n](performance.now())}catch(e){ce(e)}e.length=0}(pe);var e=2==(6&h.$flags$)?performance.now()+14*Math.ceil(.1*$):1/0;ye(he,e),ye(ge,e),he.length>0&&(ge.push.apply(ge,he),he.length=0),(f=pe.length+he.length+ge.length>0)?h.raf(ve):$=0},be=function(e){return g().then(e)},we=me(he,!0),Me=function(){return g()}},function(e,n,t){var r={"./igc-button_18.entry.js":[3,3]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=1,e.exports=o},function(e,n,t){"use strict";t.r(n);var r,o=t(0);function a(e,n){return{header:n,type:"contentPane",contentId:e}}function i(e,n,t){return{type:"splitPane",orientation:e,panes:n,size:t}}!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():Object(o.b)().then((function(){return Object(o.c)([["igc-button_18",[[2,"sample-component"],[1,"igc-dockmanager",{layout:[1040],draggedFloatingPane:[32],dropTargetPaneInfo:[32],flyoutPane:[32],floatingPaneZIndicesMap:[32],contextMenuMeta:[32]}],[1,"igc-pane-header",{pinned:[4],isFloating:[4,"is-floating"],forcedDrag:[4,"forced-drag"],isFloatingPaneHeader:[4,"is-floating-pane-header"],allowClose:[4,"allow-close"]}],[1,"igc-tab-header",{selected:[4],position:[1],iconName:[1,"icon-name"]},[[1,"mousedown","handleMouseDown"]]],[1,"igc-context-menu",{orientation:[1],target:[16],items:[16],activeIndex:[1026,"active-index"]},[[0,"focusout","emitMenuClosed"]]],[1,"igc-floating-pane",{floatingLocation:[16],floatingWidth:[2,"floating-width"],floatingHeight:[2,"floating-height"],hasHeader:[4,"has-header"],floatingMinHeight:[2,"floating-min-height"],floatingMinWidth:[2,"floating-min-width"]}],[2,"igc-joystick-indicator",{isDocHost:[4,"is-doc-host"]}],[2,"igc-root-docking-indicator",{position:[1]}],[1,"igc-content-pane",{size:[2],isFlyout:[4,"is-flyout"],unpinnedSize:[2,"unpinned-size"]}],[2,"igc-document-host",{size:[2]}],[2,"igc-split-pane",{orientation:[1],size:[2]}],[2,"igc-splitter",{splitPaneOrientation:[1,"split-pane-orientation"],flyoutLocation:[1,"flyout-location"],showDragGhost:[32],dragOffset:[32]},[[0,"keydown","handleKeydownEvent"],[1,"mousedown","handleMouseDown"]]],[2,"igc-tab-panel",{selected:[4]}],[1,"igc-tabs",{size:[2],tabHeadersPosition:[1,"tab-headers-position"],selectedIndex:[1026,"selected-index"],hasHeaders:[4,"has-headers"]},[[0,"tabMouseDown","handleTabMouseDown"]]],[1,"igc-unpinned-pane-header",{location:[1]}],[2,"igc-resizer",{orientation:[1]}],[1,"igc-button",{disabled:[4],name:[513],type:[513],value:[513]}],[2,"igc-icon",{name:[1]}]]]],r)})),(window.DockManagerUpdatingPanes=window.DockManagerUpdatingPanes||{}).arrange=function(e){const n=a("content1","Managers List"),t=a("content2","Manager's Productivity"),r=a("content3","Managers Location"),o=i("vertical",[n]),l=i("vertical",[t,r],200),s=i("horizontal",[o,l],200);e.layout={rootPane:s}}}]);