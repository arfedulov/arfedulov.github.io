(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-119c4b87"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7"),n("e6cf");function r(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)}))}}},"22bc":function(t,e,n){"use strict";var r=n("c5b7"),o=n.n(r);o.a},2345:function(t,e,n){"use strict";var r=n("c78c"),o=n.n(r);o.a},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),i=n("d039"),a=n("ad6d"),c="toString",s=RegExp.prototype,u=s[c],l=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=c;(l||d)&&r(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?a.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,o=n("69f3"),i=n("7dd0"),a="String Iterator",c=o.set,s=o.getterFor(a);i(String,"String",(function(t){c(this,{type:a,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),i=n("9bdd"),a=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,l,d,f,h,p=o(t),v="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,m=void 0!==g,b=u(p),w=0;if(m&&(g=r(g,y>2?arguments[2]:void 0,2)),void 0==b||v==Array&&a(b))for(e=c(p.length),n=new v(e);e>w;w++)h=m?g(p[w],w):p[w],s(n,w,h);else for(d=b.call(p),f=d.next,n=new v;!(l=f.call(d)).done;w++)h=m?i(d,g,[l.value,w],!0):l.value,s(n,w,h);return n.length=w,n}},6547:function(t,e,n){var r=n("a691"),o=n("1d80"),i=function(t){return function(e,n){var i,a,c=String(o(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(a=c.charCodeAt(s+1))<56320||a>57343?t?c.charAt(s):i:t?c.slice(s,s+2):a-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"798f":function(t,e,n){"use strict";n("d3b7"),n("25f0");e["a"]=function(){return Date.now().toString()}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new A(r||[]);return i._invoke=C(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=s;var l="suspendedStart",d="suspendedYield",f="executing",h="completed",p={};function v(){}function y(){}function g(){}var m={};m[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(I([])));w&&w!==n&&r.call(w,i)&&(m=w);var x=g.prototype=v.prototype=Object.create(m);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function S(t,e){function n(o,i,a,c){var s=u(t[o],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function C(t,e,n){var r=l;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return O()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?h:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=h,n.method="throw",n.arg=s.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function I(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:O}}function O(){return{value:e,done:!0}}return y.prototype=x.constructor=g,g.constructor=y,g[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(S.prototype),S.prototype[a]=function(){return this},t.AsyncIterator=S,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new S(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=I,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:I(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),i=n("e8b5"),a=n("861d"),c=n("7b0b"),s=n("50c4"),u=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),p=f("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",g=h>=51||!o((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},w=!g||!m;r({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,r,o,i,a=c(this),d=l(a,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],b(i)){if(o=s(i.length),f+o>v)throw TypeError(y);for(n=0;n<o;n++,f++)n in i&&u(d,f,i[n])}else{if(f>=v)throw TypeError(y);u(d,f++,i)}return d.length=f,d}})},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:o})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),o=n("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in i)&&o(i,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},c5b7:function(t,e,n){},c78c:function(t,e,n){},cc80:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-note"},[n("div",{staticClass:"todo-note__actions"},[t._t("actions")],2),n("h2",{staticClass:"todo-note__title"},[t.readonly?n("span",[t._v(t._s(t.title))]):n("input",{staticClass:"app-text-input app-text-input--big",class:t.titleInputClasses,attrs:{type:"text",placeholder:"title"},domProps:{value:t.title},on:{input:t.onTitleChange}})]),n("div",{staticClass:"todo-note__todo-list"},[t._l(t.todoList,(function(e){return n("todo-item",{key:e.id,attrs:{value:e,readonly:t.readonly},on:{delete:t.onItemDelete,input:t.onItemChange}})})),t.showAddItemButton?n("app-button",{staticClass:"todo-note__add-button",attrs:{title:"add item to list",icon:"add",disabled:t.readonly},on:{click:t.onAddItem}}):t._e()],2),t.hasUnsavedChanges?n("div",{staticClass:"bottom-actions todo-note__bottom-actions"},[n("app-button",{staticClass:"bottom-actions__action-button",on:{click:t.onSave}},[t._v("save")]),n("app-button",{staticClass:"bottom-actions__action-button",on:{click:t.onCancel}},[t._v("cancel")]),n("app-button",{staticClass:"bottom-actions__action-button",on:{click:t.undoNoteUpdate}},[t._v("undo")]),n("app-button",{staticClass:"bottom-actions__action-button",on:{click:t.redoNoteUpdate}},[t._v("redo")])],1):t._e()])},o=[],i=(n("99af"),n("4de4"),n("c740"),n("fb6a"),n("a434"),n("96cf"),n("1da1"));function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){if(Array.isArray(t))return a(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}n("b0c0"),n("25f0");function u(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return c(t)||s(t)||u(t)||l()}var f=n("5530"),h=n("2f62"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todo-item"},[n("input",{staticClass:"app-checkbox",attrs:{type:"checkbox",disabled:t.readonly},domProps:{checked:t.checked},on:{input:t.onCheckboxValueChange}}),n("input",{staticClass:"app-text-input",class:t.textClasses,attrs:{type:"text",placeholder:"to do",disabled:t.readonly},domProps:{value:t.text},on:{input:t.onTextChange}}),t.showDeleteButton?n("app-button",{staticClass:"icon",attrs:{title:"delete",danger:"",icon:"trash"},on:{click:t.onDelete}}):t._e()],1)},v=[],y=n("45c2"),g={name:"TodoItem",components:{AppButton:y["a"]},props:{value:{type:Object,required:!0},readonly:{type:Boolean,default:!1}},computed:{showDeleteButton:function(){return!this.readonly},checked:function(){return this.value.checked},text:function(){return this.value.text},textClasses:function(){return{"app-text-input--checked":this.checked,"app-text-input--disabled":this.readonly}}},methods:{onDelete:function(){this.$emit("delete",this.value.id)},onTextChange:function(t){this.$emit("input",Object(f["a"])({},this.value,{text:t.target.value}))},onCheckboxValueChange:function(t){this.$emit("input",Object(f["a"])({},this.value,{checked:t.target.checked}))}}},m=g,b=(n("22bc"),n("2877")),w=Object(b["a"])(m,p,v,!1,null,"66c5affb",null),x=w.exports,_=n("63e0"),S=n("798f"),C=function(){return{id:Object(S["a"])(),text:"",checked:!1}},E=3,k={name:"TodoNote",components:{TodoItem:x,AppButton:y["a"]},props:{note:{type:Object,required:!0},readonly:{type:Boolean,default:!1}},data:function(){return{editsStack:[],undoneEditsStack:[],noteDataIntermediate:this.note,hasUnsavedChanges:!1}},computed:{title:function(){return this.noteDataIntermediate.title},todoList:function(){return this.readonly?this.noteDataIntermediate.todoList.slice(0,E):this.noteDataIntermediate.todoList},titleInputClasses:function(){return{"app-text-input--disabled":this.readonly}},showAddItemButton:function(){return!this.readonly}},methods:Object(f["a"])({},Object(h["b"])({updateNote:_["a"].UPDATE_NOTE}),{pushEdit:function(t){this.noteDataIntermediate=Object(f["a"])({},t.after),this.editsStack.push(t),this.hasUnsavedChanges=!0},popEdit:function(t){this.noteDataIntermediate=Object(f["a"])({},t.before),this.undoneEditsStack.push(t),this.hasUnsavedChanges=!0},doNoteUpdate:function(t){var e=Object(f["a"])({},this.noteDataIntermediate,{},t),n={before:Object(f["a"])({},this.noteDataIntermediate),after:e};this.pushEdit(n)},redoNoteUpdate:function(){var t=this.undoneEditsStack.pop();t&&this.pushEdit(t)},undoNoteUpdate:function(){var t=this.editsStack.pop();t&&this.popEdit(t)},onAddItem:function(){var t=C();this.doNoteUpdate({todoList:[].concat(d(this.noteDataIntermediate.todoList),[t])})},onItemChange:function(t){var e=this.noteDataIntermediate.todoList.findIndex((function(e){return e.id===t.id}));if(-1!==e){var n=d(this.noteDataIntermediate.todoList);n.splice(e,1,Object(f["a"])({},n[e],{},t)),this.doNoteUpdate({todoList:n})}},onItemDelete:function(t){var e=this.noteDataIntermediate.todoList.filter((function(e){return e.id!==t}));this.doNoteUpdate({todoList:e})},onTitleChange:function(t){this.doNoteUpdate({title:t.target.value})},onSave:function(){this.updateNote(this.noteDataIntermediate),this.resetState()},resetState:function(){this.hasUnsavedChanges=!1,this.editsStack=[],this.undoneEditsStack=[]},onCancel:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$dialog.confirm("Are you sure you want to cancel all unsaved changes?");case 2:n=e.sent,n&&(t.noteDataIntermediate=t.note,t.resetState());case 4:case"end":return e.stop()}}),e)})))()}})},L=k,A=(n("2345"),Object(b["a"])(L,r,o,!1,null,"8aa76122",null));e["a"]=A.exports},d28b:function(t,e,n){var r=n("746f");r("iterator")},ddb0:function(t,e,n){var r=n("da84"),o=n("fdbc"),i=n("e260"),a=n("9112"),c=n("b622"),s=c("iterator"),u=c("toStringTag"),l=i.values;for(var d in o){var f=r[d],h=f&&f.prototype;if(h){if(h[s]!==l)try{a(h,s,l)}catch(v){h[s]=l}if(h[u]||a(h,u,d),o[d])for(var p in i)if(h[p]!==i[p])try{a(h,p,i[p])}catch(v){h[p]=i[p]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),a=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var h=f.prototype=l.prototype;h.constructor=f;var p=h.toString,v="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;s(h,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(a(d,t))return"";var n=v?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),a=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),l=n("b622"),d=n("1dde"),f=n("ae40"),h=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),v=l("species"),y=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!h||!p},{slice:function(t,e){var n,r,l,d=s(this),f=c(d.length),h=a(t,f),p=a(void 0===e?f:e,f);if(i(d)&&(n=d.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return y.call(d,h,p);for(r=new(void 0===n?Array:n)(g(p-h,0)),l=0;h<p;h++,l++)h in d&&u(r,l,d[h]);return r.length=l,r}})}}]);
//# sourceMappingURL=chunk-119c4b87.f9399bfc.js.map