(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3279a886"],{"2e17":function(t,n,e){},"408a":function(t,n,e){var r=e("e330");t.exports=r(1..valueOf)},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,e){var r=e("e330"),i=e("1d80"),s=e("577e"),o=e("5899"),a=r("".replace),c="["+o+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t){return function(n){var e=s(i(n));return 1&t&&(e=a(e,l,"")),2&t&&(e=a(e,u,"")),e}};t.exports={start:f(1),end:f(2),trim:f(3)}},"680c":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("slice-controls",{staticClass:"controls",attrs:{left:t.left,right:t.right},on:{"update-right":t.onUpdateRight,"update-left":t.onUpdateLeft}})],1)},i=[],s=e("d583"),o={name:"Demo",components:{SliceControls:s["a"]},data:function(){return{left:200,right:800}},methods:{onUpdateRight:function(t){this.right=t},onUpdateLeft:function(t){this.left=t}}},a=o,c=(e("c4c1"),e("2877")),l=Object(c["a"])(a,r,i,!1,null,"79453f00",null);n["default"]=l.exports},7156:function(t,n,e){var r=e("1626"),i=e("861d"),s=e("d2bb");t.exports=function(t,n,e){var o,a;return s&&r(o=n.constructor)&&o!==e&&i(a=o.prototype)&&a!==e.prototype&&s(t,a),t}},a9e3:function(t,n,e){"use strict";var r=e("83ab"),i=e("da84"),s=e("e330"),o=e("94ca"),a=e("6eeb"),c=e("1a2d"),l=e("7156"),u=e("3a9b"),f=e("d9b5"),d=e("c04e"),h=e("d039"),p=e("241c").f,g=e("06cf").f,v=e("9bf2").f,_=e("408a"),b=e("58a8").trim,E="Number",N=i[E],m=N.prototype,I=i.TypeError,y=s("".slice),x=s("".charCodeAt),R=function(t){var n=d(t,"number");return"bigint"==typeof n?n:C(n)},C=function(t){var n,e,r,i,s,o,a,c,l=d(t,"number");if(f(l))throw I("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=b(l),n=x(l,0),43===n||45===n){if(e=x(l,2),88===e||120===e)return NaN}else if(48===n){switch(x(l,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(s=y(l,2),o=s.length,a=0;a<o;a++)if(c=x(s,a),c<48||c>i)return NaN;return parseInt(s,r)}return+l};if(o(E,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var L,w=function(t){var n=arguments.length<1?0:N(R(t)),e=this;return u(m,e)&&h((function(){_(e)}))?l(Object(n),e,w):n},D=r?p(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),S=0;D.length>S;S++)c(N,L=D[S])&&!c(w,L)&&v(w,L,g(N,L));w.prototype=m,m.constructor=w,a(i,E,w)}},c4c1:function(t,n,e){"use strict";e("2e17")},d1c8:function(t,n,e){},d583:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"slice-controls-container",style:{left:t.left+"px",width:t.right-t.left+"px"}},[e("div",{staticClass:"slice-controls-container__slice-controls slice-controls slice-controls--visual",style:{left:t.visualLeft+"px",right:t.visualRight+"px",width:"auto"}},[e("div",{staticClass:"slice-controls__btn slice-controls__btn--left slice-controls__btn--visual"},[t._v(" « ")]),e("div",{staticClass:"slice-controls__btn slice-controls__btn--right slice-controls__btn--visual"},[t._v(" » ")])]),e("div",{staticClass:"slice-controls-container__slice-controls slice-controls slice-controls--hidden"},[e("div",{staticClass:"slice-controls__btn slice-controls__btn--left",attrs:{draggable:"true"},on:{"&dragend":function(n){return t.onDragEndLeft.apply(null,arguments)},"&drag":function(n){return t.onDragLeft.apply(null,arguments)}}}),e("div",{ref:"sliceControls",staticClass:"slice-controls__btn slice-controls__btn--right",attrs:{draggable:"true"},on:{"&dragend":function(n){return t.onDragEndRight.apply(null,arguments)},"&drag":function(n){return t.onDragRight.apply(null,arguments)}}})])])},i=[],s=(e("a9e3"),{name:"SliceControls",props:{left:{type:Number,required:!0},right:{type:Number,required:!0}},data:function(){return{visualRight:0,visualLeft:0}},watch:{left:function(){this.visualLeft=0},right:function(){this.visualRight=0}},methods:{onDragEndLeft:function(){this.$emit("update-left",this.left+this.visualLeft)},onDragEndRight:function(){this.$emit("update-right",this.right-this.visualRight)},onDragLeft:function(t){0!==t.x&&(this.visualLeft=t.offsetX)},onDragRight:function(t){0!==t.x&&(this.visualRight=-t.offsetX)}}}),o=s,a=(e("dc30"),e("2877")),c=Object(a["a"])(o,r,i,!1,null,"101be13b",null);n["a"]=c.exports},dc30:function(t,n,e){"use strict";e("d1c8")}}]);
//# sourceMappingURL=chunk-3279a886.ed3e5e67.js.map