(function(t){function e(e){for(var s,i,c=e[0],r=e[1],l=e[2],h=0,d=[];h<c.length;h++)i=c[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/edit/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"20b4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app",tabindex:"0"},on:{paste:t.onPaste,keyup:[function(e){return!e.type.indexOf("key")&&67!==e.keyCode&&t._k(e.keyCode,"c",void 0,e.key,void 0)?null:e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:t.copySelection(e):null},function(e){return!e.type.indexOf("key")&&88!==e.keyCode&&t._k(e.keyCode,"x",void 0,e.key,void 0)?null:e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:t.cutSelection(e):null},function(e){return!e.type.indexOf("key")&&90!==e.keyCode&&t._k(e.keyCode,"z",void 0,e.key,void 0)?null:e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:t.undo(e):null},function(e){return!e.type.indexOf("key")&&89!==e.keyCode&&t._k(e.keyCode,"y",void 0,e.key,void 0)?null:e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:t.redo(e):null},function(e){return e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.onKeyUp(e)}],mouseup:t.onMouseUp,mousedown:t.onMouseDown,mousemove:t.onMouseMove}},[n("tool-bar",{attrs:{"active-tool":t.tool,"active-color":t.lineColor,"line-thickness":t.lineWidth},on:{"select-tool":t.onSelectTool,"select-color":t.onSelectColor,"select-line-thickness":t.onSelectLineThickness}}),n("img",{ref:"offscreenImage",staticClass:"offscreen"}),n("div",{ref:"canvasContainer",staticClass:"canvas-container",style:t.canvasContainerStyle}),t.showStatusBar?n("status-bar",{attrs:{value:t.statusMessage}}):t._e()],1)},o=[],i=(n("4160"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("2b3d"),n("b85c")),c=n("ade3"),r=(n("13d5"),n("b64b"),1),l="#EB6F09",u={LINE:"line",PATH:"path",RECT:"rect",ARROW:"arrow",SELECT:"select"},h=Object.keys(u).reduce((function(t,e,n){return t[e]=n+1,t}),{}),d=Object.keys(u).reduce((function(t,e,n){return t[n+1]=e,t}),{}),v=["#E3310E","#D2DB1F","#9808D1"],f=v[0],y={WIDTH:900,HEIGHT:600},p=n("2909"),k=function(t,e){var n=e.x,s=e.y,a=e.dx,o=e.dy,i=e.color,c=void 0===i?f:i,l=e.thickness,u=void 0===l?r:l;t.strokeStyle=c,t.lineWidth=u,t.beginPath(),t.moveTo(n,s),t.lineTo(a,o),t.stroke();var h=Math.atan2(o-s,a-n);t.save(),t.translate(a,o),t.rotate(h-1.1*Math.PI),t.beginPath(),t.moveTo(0,0),t.lineTo(20,20),t.stroke(),t.restore(),t.save(),t.translate(a,o),t.rotate(h+.6*Math.PI),t.beginPath(),t.moveTo(0,0),t.lineTo(20,20),t.stroke(),t.restore()},b=function(t){var e,n=t||{},s=n.width,a=n.height,o=n.classes,i=void 0===o?[]:o,c=document.createElement("canvas");(c.width=s,c.height=a,i.length)&&(e=c.classList).add.apply(e,Object(p["a"])(i));return c},C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tool-bar"},[n("div",{staticClass:"tools"},t._l(t.tools,(function(e){return n("div",{key:e.name,staticClass:"tool-button",class:{selected:t.activeTool===e.name},attrs:{name:e.name},on:{click:function(n){return t.selectTool(e.name)}}},[t._v(" "+t._s(e.keyboardKey)+" "+t._s(e.name)+" ")])})),0),n("div",{staticClass:"color-controls"},t._l(t.colors,(function(e){return n("div",{key:e,staticClass:"color-control",class:{selected:e===t.activeColor},style:{backgroundColor:e},on:{click:function(n){return t.selectColor(e)}}})})),0),n("div",{staticClass:"thickness-controls"},[n("div",{staticClass:"thicknes-button",class:{selected:1===t.lineThickness},on:{click:function(e){return t.selectLineThickness(1)}}},[t._v("1.0x")]),n("div",{staticClass:"thicknes-button",class:{selected:2.5===t.lineThickness},on:{click:function(e){return t.selectLineThickness(2.5)}}},[t._v("2.5x")]),n("div",{staticClass:"thicknes-button",class:{selected:5===t.lineThickness},on:{click:function(e){return t.selectLineThickness(5)}}},[t._v("5.0x")])]),n("div",{staticClass:"info"},[t._v(" Use keyboard: Ctrl + C | Ctrl + X | Ctrl + V ")])])},g=[],m=(n("a9e3"),{name:"ToolBar",props:{activeTool:{type:String,required:!0},activeColor:{type:String,required:!0},lineThickness:{type:Number,required:!0}},computed:{tools:function(){var t=[];return Object.keys(u).forEach((function(e){t.push({name:u[e],keyboardKey:h[e]})})),t.sort((function(t,e){return t.keyboardKey-e.keyboardKey})),t},colors:function(){return Object(p["a"])(v)}},methods:{selectTool:function(t){this.$emit("select-tool",t)},selectColor:function(t){this.$emit("select-color",t)},selectLineThickness:function(t){this.$emit("select-line-thickness",t)}}}),S=m,x=(n("7d41"),n("2877")),w=Object(x["a"])(S,C,g,!1,null,"9294ee70",null),T=w.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"status-bar"},[t._v(" "+t._s(t.value)+" ")])},O=[],_={name:"StatusBar",props:{value:{type:String,default:""}}},K=_,M=(n("b5b1"),Object(x["a"])(K,L,O,!1,null,"2b2b979a",null)),P=M.exports,j={name:"App",components:{ToolBar:T,StatusBar:P},data:function(){return{tool:u.PATH,mousePressed:!1,startX:0,startY:0,selection:void 0,lineColor:f,lineWidth:r,statusMessage:"",canvasStack:[],redoCanvasStack:[]}},computed:{showStatusBar:function(){return""!==this.statusMessage},topLayerCtx:function(){return this.canvasStack.length<1?null:this.canvasStack[this.canvasStack.length-1].getContext("2d")},canvasWidth:function(){return this.topLayerCtx?this.topLayerCtx.canvas.width:y.WIDTH},canvasHeight:function(){return this.topLayerCtx?this.topLayerCtx.canvas.height:y.HEIGHT},canvasContainerStyle:function(){return{width:"".concat(this.canvasWidth,"px"),height:"".concat(this.canvasHeight,"px")}}},mounted:function(){this.pushCanvas(this.canvasWidth,this.canvasHeight,!0)},methods:{clearRedoStack:function(){this.redoCanvasStack.forEach((function(t){t.remove()})),this.redoCanvasStack=[]},pushCanvas:function(t,e,n){this.clearRedoStack();var s=["canvas"];n&&s.push("background-layer-canvas");var a=b({width:t,height:e,classes:s});this.canvasStack.push(a),this.$refs.canvasContainer.append(a)},undo:function(){if(!(this.canvasStack.length<2)){var t=this.canvasStack.pop();t.hidden=!0,this.redoCanvasStack.push(t)}},redo:function(){var t=this.redoCanvasStack.pop();t&&(t.hidden=!1,this.canvasStack.push(t))},resetSelection:function(){this.selection=void 0},resetLineStyle:function(){this.topLayerCtx.strokeStyle=this.lineColor,this.topLayerCtx.lineWidth=this.lineWidth,this.topLayerCtx.setLineDash([])},onMouseDown:function(t){this.pushCanvas(this.canvasWidth,this.canvasHeight),this.resetSelection(),this.mousePressed=!0;var e=this.toCanvasCoords(t.clientX,t.clientY),n=e.x,s=e.y;this.startX=n,this.startY=s,this.resetLineStyle(),"path"===this.tool&&(this.topLayerCtx.beginPath(),this.topLayerCtx.moveTo(n,s))},onMouseMove:function(t){if(this.mousePressed){var e=this.toCanvasCoords(t.clientX,t.clientY),n=e.x,s=e.y,a=this.topLayerCtx,o=this.startX,i=this.startY;switch(this.tool){case"path":a.lineTo(n,s),a.stroke();break;case"line":a.clearRect(0,0,a.canvas.width,a.canvas.height),a.beginPath(),a.moveTo(o,i),a.lineTo(n,s),a.stroke();break;case"rect":a.clearRect(0,0,a.canvas.width,a.canvas.height),a.strokeRect(o,i,n-o,s-i);break;case"select":a.setLineDash([15,5]),a.strokeStyle=l,a.lineWidth=r,a.clearRect(0,0,a.canvas.width,a.canvas.height),a.strokeRect(o,i,n-o,s-i);break;case"arrow":a.clearRect(0,0,a.canvas.width,a.canvas.height),k(a,{x:o,y:i,dx:n,dy:s,color:this.lineColor,thickness:this.lineWidth});break;default:break}}},onMouseUp:function(t){this.mousePressed=!1;var e=this.toCanvasCoords(t.clientX,t.clientY),n=e.x,s=e.y;if("select"===this.tool){var a=this.startX,o=this.startY;this.selection={x:a,y:o,width:n-a,height:s-o}}},copySelection:function(){var t=this,e=this.selection;if(e){var n=b({width:e.width,height:e.height});this.canvasStack.forEach((function(s,a){a!==t.canvasStack.length-1&&n.getContext("2d").drawImage(s,e.x,e.y,e.width,e.height,0,0,e.width,e.height)})),n.toBlob((function(e){var n=new ClipboardItem(Object(c["a"])({},e.type,e));navigator.clipboard.write([n]).then((function(){return t.setStatusMessage("Copied to clipboard",2)}))}),"image/png",1)}},cutSelection:function(){var t=this.selection;t&&(this.copySelection(),this.canvasStack.forEach((function(e){e.getContext("2d").clearRect(t.x,t.y,t.width,t.height)})),this.topLayerCtx.clearRect(0,0,this.topLayerCtx.canvas.width,this.topLayerCtx.canvas.height),this.resetSelection())},onKeyUp:function(t){switch(t.code){case"Digit1":this.tool=u[d[1]];break;case"Digit2":this.tool=u[d[2]];break;case"Digit3":this.tool=u[d[3]];break;case"Digit4":this.tool=u[d[4]];break;case"Digit5":this.tool=u[d[5]];break}},setStatusMessage:function(t,e){var n=this;this.statusMessage=t,window.setTimeout((function(){n.statusMessage=""}),1e3*e)},onPaste:function(t){var e,n=this,s=this.$refs.offscreenImage,a=(t.clipboardData||t.originalEvent.clipboardData).items,o=Object(i["a"])(a);try{for(o.s();!(e=o.n()).done;){var c=e.value;if("file"===c.kind){var r=function(){var t=c.getAsFile(),e=URL.createObjectURL(t);return s.onload=function(){n.pushCanvas(s.width,s.height),n.topLayerCtx.canvas.classList.add("background-layer-canvas"),n.topLayerCtx.drawImage(s,0,0),URL.revokeObjectURL(e)},s.setAttribute("src",e),"break"}();if("break"===r)break}}}catch(l){o.e(l)}finally{o.f()}},toCanvasCoords:function(t,e){var n=this.$refs.canvasContainer.getBoundingClientRect(),s=n.x,a=n.y;return{x:t-s,y:e-a}},onSelectTool:function(t){this.tool=t},onSelectColor:function(t){this.lineColor=t},onSelectLineThickness:function(t){this.lineWidth=t}}},E=j,R=(n("5c0b"),Object(x["a"])(E,a,o,!1,null,null,null)),D=R.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(D)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var s=n("9c0c"),a=n.n(s);a.a},"72ef":function(t,e,n){},"7d41":function(t,e,n){"use strict";var s=n("72ef"),a=n.n(s);a.a},"9c0c":function(t,e,n){},b5b1:function(t,e,n){"use strict";var s=n("20b4"),a=n.n(s);a.a}});
//# sourceMappingURL=app.f53f6cd3.js.map