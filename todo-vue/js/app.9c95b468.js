(function(t){function e(e){for(var o,r,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function c(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-24ce0336":"d5654b73","chunk-051abf05":"368e7cf4","chunk-f905419a":"7a592b60"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-24ce0336":1,"chunk-051abf05":1,"chunk-f905419a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-24ce0336":"a7df5de7","chunk-051abf05":"fd9efd01","chunk-f905419a":"bd8c7368"}[t]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===o||l===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/todo-vue/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"43bd":function(t,e,n){},"45c2":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",t._g({staticClass:"button",class:t.buttonClasses,attrs:{disabled:t.disabled}},t.$listeners),[t.icon?n("span",{staticClass:"button__icon"},[t._v(t._s(t.iconChar))]):t._e(),t._t("default")],2)},r=[],a={add:"¡",edit:"¢",trash:"£"},i={name:"AppButton",props:{icon:{type:String,default:""},danger:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},primary:{type:Boolean,default:!1}},computed:{iconChar:function(){return a[this.icon]||""},buttonClasses:function(){return{"button--icon":this.icon,"button--danger":this.danger,"button--primary":this.primary,"button--disabled":this.disabled}}}},c=i,u=(n("8e2c"),n("2877")),s=Object(u["a"])(c,o,r,!1,null,"756c1059",null);e["a"]=s.exports},5042:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o,r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c={name:"App"},u=c,s=(n("034f"),n("2877")),l=Object(s["a"])(u,a,i,!1,null,null,null),d=l.exports,f=n("2f62"),p=n("d722"),h=n("63e0"),m=(n("4de4"),n("c740"),n("a434"),n("ade3")),b=n("5530"),v={ADD_NOTE:"addNote",DELETE_NOTE:"deleteNote",UPDATE_NOTE:"updateNote"},g=(o={},Object(m["a"])(o,v.ADD_NOTE,(function(t,e){var n=t.notes;n.push(e)})),Object(m["a"])(o,v.DELETE_NOTE,(function(t,e){t.notes=t.notes.filter((function(t){return t.id!==e}))})),Object(m["a"])(o,v.UPDATE_NOTE,(function(t,e){var n=t.notes,o=n.findIndex((function(t){return t.id===e.id}));if(-1===o)throw Error("Imposible to update note. Note with id ".concat(e.id," does not exist."));n.splice(o,1,Object(b["a"])({},n[o],{},e))})),o);r["a"].use(f["a"]);var y=new f["a"].Store({state:{notes:p["a"].getNotes()},mutations:g,actions:h["b"]}),E=(n("d3b7"),n("8c4f"));r["a"].use(E["a"]);var _=[{path:"/",component:function(){return Promise.all([n.e("chunk-24ce0336"),n.e("chunk-f905419a")]).then(n.bind(null,"4385"))}},{path:"/edit/:noteId/",component:function(){return Promise.all([n.e("chunk-24ce0336"),n.e("chunk-051abf05")]).then(n.bind(null,"8521"))},props:!0}],N=new E["a"]({base:"/todo-vue/",routes:_,mode:"history"}),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dialog-backdrop"},[n("div",{staticClass:"dialog"},[n("p",[t._v(" "+t._s(t.text)+" ")]),n("div",{staticClass:"actions"},[n("app-button",{staticClass:"actions__action-button",on:{click:t.onConfirm}},[t._v("ok")]),n("app-button",{staticClass:"actions__action-button",on:{click:t.onCancel}},[t._v("cancel")])],1)])])},w=[],T=n("45c2"),k={name:"ConfirmDialog",components:{AppButton:T["a"]},props:{text:{type:String,required:!0}},methods:{onConfirm:function(){this.$emit("confirm")},onCancel:function(){this.$emit("cancel")}}},j=k,C=(n("db07"),Object(s["a"])(j,O,w,!1,null,"7dcd88a2",null)),S=C.exports,D=function(t){var e=function(e){return new Promise((function(n){var o=t.extend(S),r=new o({propsData:{text:e}}),a=r.$mount();document.documentElement.append(a.$el);var i=function(){r.$destroy(),a.$el.remove()};r.$on("confirm",(function(){n(!0),i()})),r.$on("cancel",(function(){n(!1),i()}))}))};return{confirm:e}},x={install:function(t){t.prototype.$dialog=D(t)}},A=(n("4160"),n("a15b"),n("fb6a"),n("ac1f"),n("841c"),n("1276"),n("159b"),n("3835")),P=function(t){return t.split("/").filter((function(t){return!!t})).join("/"),t?"/"+t+"/":"/"},$={install:function(){if(window.location.search){var t={};if(window.location.search.slice(1).split("&").forEach((function(e){var n=e.split("="),o=Object(A["a"])(n,2),r=o[0],a=o[1];t[r]=a})),void 0!==t.p){var e=t.p,n=P(window.location.pathname+"/"+e);window.history.replaceState(null,null,n)}}}};r["a"].use($),r["a"].use(x),r["a"].config.productionTip=!1,new r["a"]({store:y,router:N,render:function(t){return t(d)}}).$mount("#app")},"63e0":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o,r=n("ade3"),a=n("d722"),i={ADD_NOTE:"addNote",DELETE_NOTE:"deleteNote",UPDATE_NOTE:"updateNote"};e["b"]=(o={},Object(r["a"])(o,i.ADD_NOTE,(function(t,e){var n=t.commit;a["a"].addNote(e),n("addNote",e)})),Object(r["a"])(o,i.DELETE_NOTE,(function(t,e){var n=t.commit;a["a"].deleteNote(e),n("deleteNote",e)})),Object(r["a"])(o,i.UPDATE_NOTE,(function(t,e){var n=t.commit,o=a["a"].updateNote(e);o&&n("updateNote",e)})),o)},"85ec":function(t,e,n){},"8e2c":function(t,e,n){"use strict";var o=n("43bd"),r=n.n(o);r.a},d722:function(t,e,n){"use strict";n("4de4"),n("c740"),n("a434");var o=n("5530"),r="notes",a=function(){var t=localStorage.getItem(r);return t?JSON.parse(t):[]},i=function(t){var e=a();e.push(t),localStorage.setItem(r,JSON.stringify(e))},c=function(t){var e=a().filter((function(e){return e.id!==t}));localStorage.setItem(r,JSON.stringify(e))},u=function(t){var e=a(),n=e.findIndex((function(e){return e.id===t.id}));return-1===n?(console.error("Imposible to update note. Note with id ".concat(t.id," does not exist.")),!1):(e.splice(n,1,Object(o["a"])({},e[n],{},t)),localStorage.setItem(r,JSON.stringify(e)),!0)};e["a"]={getNotes:a,addNote:i,deleteNote:c,updateNote:u}},db07:function(t,e,n){"use strict";var o=n("5042"),r=n.n(o);r.a}});
//# sourceMappingURL=app.9c95b468.js.map