(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24300c84"],{"1b4c":function(t,n,e){"use strict";e("7597")},7597:function(t,n,e){},ff2c:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",t._l(t.songs,(function(n){return e("li",{key:n.id,staticClass:"list-item"},[e("img",{staticClass:"list-item__img",attrs:{src:n.pictureUrl,alt:""}}),e("router-link",{attrs:{to:{name:"Song",params:{songId:n.id}}}},[t._v(t._s(n.name))])],1)})),0)},s=[],i=e("1da1"),a=(e("d3b7"),e("4de4"),e("96cf"),{name:"Section",props:{sectionName:{type:String,required:!0}},data:function(){return{songs:[]}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.loadSongOptions();case 2:case"end":return n.stop()}}),n)})))()},methods:{loadSongOptions:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat("https://arfedulov.github.io/piano","/content/songs.json"));case 2:return e=n.sent,n.next=5,e.json();case 5:r=n.sent,t.songs=r.filter((function(n){return n.sectionName===t.sectionName}));case 7:case"end":return n.stop()}}),n)})))()}}}),o=a,c=(e("1b4c"),e("2877")),u=Object(c["a"])(o,r,s,!1,null,"5661a4c6",null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-24300c84.7acbacf5.js.map