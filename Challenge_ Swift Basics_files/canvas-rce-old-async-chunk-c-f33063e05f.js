(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[254],{"/2dx":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var a=n(r("oyhc"))
function o(e,t,r){r=void 0===r?window.MutationObserver:r
var n=t.init_instance_callback
t.init_instance_callback=function(t){var o=e||{}
var i=t.getElement()
if(i){Object.keys(o).forEach(function(e){i.setAttribute(e,o[e])})
i.dataset.rich_text=true}var u=new a.default
u.hookAddVisual(t,r)
n&&n(t)}
return t}},"/UCH":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.downloadToWrap=a
var n=r("CxY0")
function a(e){if(!e)return e
var t=(0,n.parse)(e,true)
delete t.search
delete t.query.download_frd
t.query.wrap=1
return(0,n.format)(t)}},"/cFM":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=a
var n=r("WYc/")
function a(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case n.TOGGLE_NEWPAGE_FORM:return!e
default:return e}}},"0SkP":function(e,t,r){"use strict"
var n=r("TqRt")
var a=n(r("dKDz"))
var o=n(r("BAch"))
var i=n(r("1I50"))
tinymce.create("tinymce.plugins.InstructureImagePlugin",{init:function(e){e.addCommand("mceInstructureImage",i.default.bind(this,e,document))
e.addButton("instructure_image",{title:(0,a.default)((0,o.default)({default:"Embed Image",description:"Title for RCE button to embed an image"})),cmd:"mceInstructureImage",icon:"image",onPostRender:function(){var t=this
e.on("NodeChange",function(e){t.active("IMG"==e.nodeName&&"equation_image"!=e.className)})}})},getInfo:function(){return{longname:"Instructure image",author:"Instructure",authorurl:"http://instructure.com",infourl:"http://instructure.com",version:"1"}}})
tinymce.PluginManager.add("instructure_image",tinymce.plugins.InstructureImagePlugin)},"1I50":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e,t){var r=e.selection.getNode()
if(-1!=e.dom.getAttrib(r,"class","").indexOf("mceItem"))return
var n=t.createEvent("CustomEvent")
n.initCustomEvent("tinyRCE/initImagePicker",true,true,{ed:e,selectedNode:r})
t.dispatchEvent(n)}},"25BE":function(e,t,r){"use strict"
r.d(t,"a",function(){return n})
function n(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},"2n0+":function(e,t,r){"use strict"
var n=0
e.exports=function(){return"react-tinymce-"+n++}},"3ps1":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=r("9Pur")
var o=n(r("a9nG"))
var i=r("ANjH")
function u(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var r=arguments.length>1?arguments[1]:void 0
switch(r.type){case a.REQUEST_PAGE:case a.RECEIVE_PAGE:case a.FAIL_PAGE:return r.key===e?(0,o.default)(t,r):t
default:return t}}}var s=(0,i.combineReducers)({announcements:u("announcements"),assignments:u("assignments"),discussions:u("discussions"),modules:u("modules"),quizzes:u("quizzes"),wikiPages:u("wikiPages")})
t.default=s},"45EY":function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=n(r("q1tI"))
var d=a(r("q3EI"))
var v=f.default.createElement("path",{d:"M1458.948 1305.626c104.637-136.95 167.527-307.187 167.527-492.388C1626.475 364.764 1261.711 0 813.238 0 364.764 0 0 364.764 0 813.238c0 448.473 364.764 813.237 813.238 813.237 185.201 0 355.547-62.89 492.496-167.527L1766.678 1920 1920 1766.678l-461.052-461.052zm-645.71 103.986c-328.874 0-596.375-267.61-596.375-596.374 0-328.765 267.501-596.375 596.375-596.375 328.873 0 596.374 267.61 596.374 596.375s-267.501 596.374-596.374 596.374z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){(0,c.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(d.default,Object.assign({},this.props,{name:"IconSearch",viewBox:"0 0 1920 1920"}),v)}}])
t.displayName="IconSearch"
return t}(f.Component)
t.default=m
m.glyphName="search"
m.variant="Solid"
m.propTypes=(0,o.default)({},d.default.propTypes)},"4PjY":function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=n(r("q1tI"))
var d=a(r("Vbms"))
var v=a(r("JVSA"))
var m=function(e){(0,l.default)(t,e)
function t(){(0,o.default)(this,t)
return(0,u.default)(this,(0,s.default)(t).apply(this,arguments))}(0,i.default)(t,[{key:"componentWillMount",value:function(){this.props.fetchImages({calledFromRender:true})}},{key:"renderImages",value:function(){var e=this
return f.default.createElement("div",{style:{width:"100%"}},this.props.images.records.map(function(t){return f.default.createElement(v.default,{key:"image-"+t.id,image:t,onImageEmbed:e.props.onImageEmbed})}))}},{key:"render",value:function(){return f.default.createElement("div",{style:{maxHeight:"300px",overflow:"auto"}},f.default.createElement("div",{style:{clear:"both"}},f.default.createElement(d.default,{focusSelector:".img_link",hasMore:this.props.images.hasMore,isLoading:this.props.images.isLoading,loadMore:this.props.fetchImages},this.renderImages())))}}])
t.displayName="ImageUploadsList"
return t}(f.Component)
m.propTypes={images:c.default.shape({records:c.default.array.isRequired,isLoading:c.default.bool.isRequired,hasMore:c.default.bool.isRequired}),fetchImages:c.default.func.isRequired,onImageEmbed:c.default.func.isRequired}
m.defaultProps={images:[]}
var g=m
t.default=g},"4cKe":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=n(r("J4zp"))
var o=n(r("HK1/"))
function i(e){if(!e||"number"===typeof e)return e
var t=(0,o.default)(e),r=(0,a.default)(t,2),n=r[0],i=r[1]
return"ms"===i?n:"s"===i?1e3*n:n}},"4ebf":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.renderIntoDiv=u
Object.defineProperty(t,"renderSidebarIntoDiv",{enumerable:true,get:function(){return i.renderIntoDiv}})
var a=n(r("a6RQ"))
var o=r("sMbP")
r("5WJX")
var i=r("onOR")
function u(e,t,n){var i=(0,a.default)(t.language)
"en"===i?(0,o.renderIntoDiv)(e,t,n):r("obhq")("./".concat(i)).then(function(){return(0,o.renderIntoDiv)(e,t,n)})}},"4tak":function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
var t=tinymce.util.Tools.resolve("tinymce.util.Tools")
var r=function(e,r){var n=e.dom
var a
var o=e.selection.getSelectedBlocks()
if(o.length){a=n.getAttrib(o[0],"dir")
t.each(o,function(e){n.getParent(e.parentNode,'*[dir="'+r+'"]',n.getRoot())||n.setAttrib(e,"dir",a!==r?r:null)})
e.nodeChanged()}}
var n={setDir:r}
var a=function(e){e.addCommand("mceDirectionLTR",function(){n.setDir(e,"ltr")})
e.addCommand("mceDirectionRTL",function(){n.setDir(e,"rtl")})}
var o={register:a}
var i=function(e){var r=[]
t.each("h1 h2 h3 h4 h5 h6 div p".split(" "),function(t){r.push(t+"[dir="+e+"]")})
return r.join(",")}
var u=function(e){e.addButton("ltr",{title:"Left to right",cmd:"mceDirectionLTR",stateSelector:i("ltr")})
e.addButton("rtl",{title:"Right to left",cmd:"mceDirectionRTL",stateSelector:i("rtl")})}
var s={register:u}
e.add("directionality",function(e){o.register(e)
s.register(e)})}()},"54TC":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.insertContent=l
t.insertImage=v
t.existingContentToLink=p
t.existingContentToLinkIsImg=h
t.insertLink=w
var a=n(r("TSYQ"))
var o=r("R7S1")
var i=r("GuEk")
var u=n(r("rMyL"))
function s(e,t){var r=e.getElement()
if("selectionStart"in r){var n=r.value.substr(0,r.selectionStart)
var a=r.value.substr(r.selectionEnd,r.value.length)
r.value=n+t+a}else if(document.selection){r.focus()
document.selection.createRange().text=t}else r.value+=t}function l(e,t){if(e.isHidden()){s(e,t)
return null}u.default.scrollIntoViewWDelay(e.iframeElement,{})
e.insertContent(t)
return e.selection.getEnd()}function c(e){return e&&"img"===e.nodeName.toLowerCase()}function f(e){return e&&"a"===e.nodeName.toLowerCase()}function d(e){var t=e.selection
var r=t.getRng()
return c(t.getNode())&&f(r.startContainer)&&r.startContainer===r.endContainer}function v(e,t){var r=""
r=d(e)?(0,o.renderLinkedImage)(e.selection.getRng().startContainer,t):(0,o.renderImage)(t)
return l(e,r)}function m(e,t){var r=t.selectionDetails&&t.selectionDetails.node?t.selectionDetails.node:e.selection.getNode()
return e.dom.getParent(r,"a")}function g(e){var t=e.selection.getContent()
t=e.dom.decode(t)
return!!t&&""!=t}function p(e,t){return!e.isHidden()&&(t&&(m(e,t)||!!t.selectedContent)||g(e))}function A(e){var t=e.selection.getContent()
return e.dom.$(t).is("img")}function h(e){return!e.isHidden()&&A(e)}function b(e,t){e.focus()
if(p(e,t)){g(e)||e.selection.setRng(t.selectionDetails.range)
e.execCommand("mceInsertLink",false,t)
return e.selection.getNode()}return l(e,(0,o.renderLink)(t))}function y(e){e["class"]=(0,a.default)(e["class"],{instructure_file_link:true,instructure_scribd_file:"scribd"==e.embed.type,instructure_image_thumbnail:"image"==e.embed.type,instructure_video_link:"video"==e.embed.type,instructure_audio_link:"audio"==e.embed.type})
"video"!=e.embed.type&&"audio"!=e.embed.type||(e["id"]="media_comment_".concat(e.embed.id||"maybe"))}function w(e,t){t.href&&(t.href=(0,i.cleanUrl)(t.href))
t.embed&&y(t)
return b(e,t)}},"5WJX":function(e,t,r){(function(t){!function(){"use strict"
var r=function(){var e=[]
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]}
var n=function(e,t){return function(){var r=[]
for(var n=0;n<arguments.length;n++)r[n]=arguments[n]
return e(t.apply(null,r))}}
var a=function(e){return function(){return e}}
var o=function(e){return e}
function i(e){var t=[]
for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
return function(){var r=[]
for(var n=0;n<arguments.length;n++)r[n]=arguments[n]
var a=t.concat(r)
return e.apply(null,a)}}var u=function(e){return function(){var t=[]
for(var r=0;r<arguments.length;r++)t[r]=arguments[r]
return!e.apply(null,t)}}
var s=function(e){return function(){throw new Error(e)}}
var l=a(false)
var c=a(true)
var f=l
var d=c
var v=function(){return m}
var m=function(){var e=function(e){return e.isNone()}
var t=function(e){return e()}
var r=function(e){return e}
var n=function(){}
var o=function(){return null}
var i=function(){return}
var u={fold:function(e,t){return e()},is:f,isSome:f,isNone:d,getOr:r,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:o,getOrUndefined:i,or:r,orThunk:t,map:v,ap:v,each:n,bind:v,flatten:v,exists:f,forall:d,filter:v,equals:e,equals_:e,toArray:function(){return[]},toString:a("none()")}
Object.freeze&&Object.freeze(u)
return u}()
var g=function(e){var t=function(){return e}
var r=function(){return o}
var n=function(t){return g(t(e))}
var a=function(t){return t(e)}
var o={fold:function(t,r){return r(e)},is:function(t){return e===t},isSome:d,isNone:f,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:n,ap:function(t){return t.fold(v,function(t){return g(t(e))})},each:function(t){t(e)},bind:a,flatten:t,exists:a,forall:a,filter:function(t){return t(e)?o:m},equals:function(t){return t.is(e)},equals_:function(t,r){return t.fold(f,function(t){return r(e,t)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o}
var p=function(e){return null===e||void 0===e?m:g(e)}
var A={some:g,none:v,from:p}
var h=function(e){if(null===e)return"null"
var t=typeof e
if("object"===t&&Array.prototype.isPrototypeOf(e))return"array"
if("object"===t&&String.prototype.isPrototypeOf(e))return"string"
return t}
var b=function(e){return function(t){return h(t)===e}}
var y=b("string")
var w=b("object")
var E=b("array")
var x=b("null")
var C=b("boolean")
var k=b("function")
var B=b("number")
var T=(R=Array.prototype.indexOf,I=function(e,t){return R.call(e,t)},S=function(e,t){return H(e,t)},void 0===R?S:I)
var R,I,S
var D=function(e,t){var r=T(e,t)
return-1===r?A.none():A.some(r)}
var N=function(e,t){return T(e,t)>-1}
var M=function(e,t){return j(e,t).isSome()}
var P=function(e,t){var r=e.length
var n=new Array(r)
for(var a=0;a<r;a++){var o=e[a]
n[a]=t(o,a,e)}return n}
var _=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
t(a,r,e)}}
var O=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r]
t(n,r,e)}}
var F=function(e,t){var r=[]
var n=[]
for(var a=0,o=e.length;a<o;a++){var i=e[a]
var u=t(i,a,e)?r:n
u.push(i)}return{pass:r,fail:n}}
var L=function(e,t){var r=[]
for(var n=0,a=e.length;n<a;n++){var o=e[n]
t(o,n,e)&&r.push(o)}return r}
var U=function(e,t,r){O(e,function(e){r=t(r,e)})
return r}
var Q=function(e,t,r){_(e,function(e){r=t(r,e)})
return r}
var z=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
if(t(a,r,e))return A.some(a)}return A.none()}
var j=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
if(t(a,r,e))return A.some(r)}return A.none()}
var H=function(e,t){for(var r=0,n=e.length;r<n;++r)if(e[r]===t)return r
return-1}
var W=Array.prototype.push
var V=function(e){var t=[]
for(var r=0,n=e.length;r<n;++r){if(!Array.prototype.isPrototypeOf(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e)
W.apply(t,e[r])}return t}
var G=function(e,t){var r=P(e,t)
return V(r)}
var Y=function(e,t){for(var r=0,n=e.length;r<n;++r){var a=e[r]
if(true!==t(a,r,e))return false}return true}
var J=Array.prototype.slice
var q=function(e){var t=J.call(e,0)
t.reverse()
return t}
var K=function(e,t){return L(e,function(e){return!N(t,e)})}
var X=function(e,t){var r={}
for(var n=0,a=e.length;n<a;n++){var o=e[n]
r[String(o)]=t(o,n)}return r}
var Z=function(e,t){var r=J.call(e,0)
r.sort(t)
return r}
var $=function(e){return 0===e.length?A.none():A.some(e[0])}
var ee=function(e){return 0===e.length?A.none():A.some(e[e.length-1])}
var te=k(Array.from)?Array.from:function(e){return J.call(e)}
var re="undefined"!==typeof window?window:Function("return this;")()
var ne=function(e,t){var r=void 0!==t&&null!==t?t:re
for(var n=0;n<e.length&&void 0!==r&&null!==r;++n)r=r[e[n]]
return r}
var ae=function(e,t){var r=e.split(".")
return ne(r,t)}
var oe=function(e,t){return ae(e,t)}
var ie=function(e,t){var r=oe(e,t)
if(void 0===r||null===r)throw e+" not available on this browser"
return r}
var ue={getOrDie:ie}
var se=function(){return ue.getOrDie("URL")}
var le=function(e){return se().createObjectURL(e)}
var ce=function(e){se().revokeObjectURL(e)}
var fe={createObjectURL:le,revokeObjectURL:ce}
var de=navigator,ve=de.userAgent
var me,ge,pe,Ae,he,be,ye,we,Ee,xe,Ce,ke,Be
var Te=function(e){return"matchMedia"in window&&matchMedia(e).matches}
me=false
Ee=/Android/.test(ve)
ge=/WebKit/.test(ve)
pe=!ge&&!me&&/MSIE/gi.test(ve)&&/Explorer/gi.test(de.appName)
pe=pe&&/MSIE (\w+)\./.exec(ve)[1]
Ae=-1!==ve.indexOf("Trident/")&&(-1!==ve.indexOf("rv:")||-1!==de.appName.indexOf("Netscape"))&&11
he=-1!==ve.indexOf("Edge/")&&!pe&&!Ae&&12
pe=pe||Ae||he
be=!ge&&!Ae&&/Gecko/.test(ve)
ye=-1!==ve.indexOf("Mac")
we=/(iPad|iPhone)/.test(ve)
xe="FormData"in window&&"FileReader"in window&&"URL"in window&&!!fe.createObjectURL
Ce=Te("only screen and (max-device-width: 480px)")&&(Ee||we)
ke=Te("only screen and (min-width: 800px)")&&(Ee||we)
Be=-1!==ve.indexOf("Windows Phone")
he&&(ge=false)
var Re=!we||xe||parseInt(ve.match(/AppleWebKit\/(\d*)/)[1],10)>=534
var Ie={opera:me,webkit:ge,ie:pe,gecko:be,mac:ye,iOS:we,android:Ee,contentEditable:Re,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!==pe,range:window.getSelection&&"Range"in window,documentMode:pe&&!he?document.documentMode||7:10,fileApi:xe,ceFalse:false===pe||pe>8,cacheSuffix:null,container:null,overrideViewPort:null,experimentalShadowDom:false,canHaveCSP:false===pe||pe>11,desktop:!Ce&&!ke,windowsPhone:Be}
var Se=function(){function e(e,t){return function(){e.apply(t,arguments)}}var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}
var n=function(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new")
if("function"!==typeof t)throw new TypeError("not a function")
this._state=null
this._value=null
this._deferreds=[]
c(t,e(i,this),e(u,this))}
var a=n.immediateFn||"function"===typeof t&&t||function(e){setTimeout(e,1)}
function o(e){var t=this
if(null===this._state){this._deferreds.push(e)
return}a(function(){var r=t._state?e.onFulfilled:e.onRejected
if(null===r){(t._state?e.resolve:e.reject)(t._value)
return}var n
try{n=r(t._value)}catch(t){e.reject(t)
return}e.resolve(n)})}function i(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===typeof t||"function"===typeof t)){var r=t.then
if("function"===typeof r){c(e(r,t),e(i,this),e(u,this))
return}}this._state=true
this._value=t
s.call(this)}catch(e){u.call(this,e)}}function u(e){this._state=false
this._value=e
s.call(this)}function s(){for(var e=0,t=this._deferreds.length;e<t;e++)o.call(this,this._deferreds[e])
this._deferreds=null}function l(e,t,r,n){this.onFulfilled="function"===typeof e?e:null
this.onRejected="function"===typeof t?t:null
this.resolve=r
this.reject=n}function c(e,t,r){var n=false
try{e(function(e){if(n)return
n=true
t(e)},function(e){if(n)return
n=true
r(e)})}catch(e){if(n)return
n=true
r(e)}}n.prototype.catch=function(e){return this.then(null,e)}
n.prototype.then=function(e,t){var r=this
return new n(function(n,a){o.call(r,new l(e,t,n,a))})}
n.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&r(arguments[0])?arguments[0]:arguments)
return new n(function(t,r){if(0===e.length)return t([])
var n=e.length
function a(o,i){try{if(i&&("object"===typeof i||"function"===typeof i)){var u=i.then
if("function"===typeof u){u.call(i,function(e){a(o,e)},r)
return}}e[o]=i
0===--n&&t(e)}catch(e){r(e)}}for(var o=0;o<e.length;o++)a(o,e[o])})}
n.resolve=function(e){if(e&&"object"===typeof e&&e.constructor===n)return e
return new n(function(t){t(e)})}
n.reject=function(e){return new n(function(t,r){r(e)})}
n.race=function(e){return new n(function(t,r){for(var n=0,a=e.length;n<a;n++)e[n].then(t,r)})}
return n}
var De=window.Promise?window.Promise:Se()
var Ne
var Me=function(e,t){var r,n=window.requestAnimationFrame
var a=["ms","moz","webkit"]
var o=function(e){window.setTimeout(e,0)}
for(r=0;r<a.length&&!n;r++)n=window[a[r]+"RequestAnimationFrame"]
n||(n=o)
n(e,t)}
var Pe=function(e,t){"number"!==typeof t&&(t=0)
return setTimeout(e,t)}
var _e=function(e,t){"number"!==typeof t&&(t=1)
return setInterval(e,t)}
var Oe=function(e){return clearTimeout(e)}
var Fe=function(e){return clearInterval(e)}
var Le=function(e,t){var r,n
n=function(){var n=arguments
clearTimeout(r)
r=Pe(function(){e.apply(this,n)},t)}
n.stop=function(){clearTimeout(r)}
return n}
var Ue={requestAnimationFrame:function(e,t){if(Ne){Ne.then(e)
return}Ne=new De(function(e){t||(t=document.body)
Me(e,t)}).then(e)},setTimeout:Pe,setInterval:_e,setEditorTimeout:function(e,t,r){return Pe(function(){e.removed||t()},r)},setEditorInterval:function(e,t,r){var n
n=_e(function(){e.removed?clearInterval(n):t()},r)
return n},debounce:Le,throttle:Le,clearInterval:Fe,clearTimeout:Oe}
var Qe="mce-data-"
var ze=/^(?:mouse|contextmenu)|click/
var je={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1,keyIdentifier:1}
var He=function(e){return e.isDefaultPrevented===Ve||e.isDefaultPrevented===We}
var We=function(){return false}
var Ve=function(){return true}
var Ge=function(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n||false):e.attachEvent&&e.attachEvent("on"+t,r)}
var Ye=function(e,t,r,n){e.removeEventListener?e.removeEventListener(t,r,n||false):e.detachEvent&&e.detachEvent("on"+t,r)}
var Je=function(e,t){if(e.composedPath){var r=e.composedPath()
if(r&&r.length>0)return r[0]}return t}
var qe=function(e,t){var r
var n=t||{}
for(r in e)je[r]||(n[r]=e[r])
n.target||(n.target=n.srcElement||document)
Ie.experimentalShadowDom&&(n.target=Je(e,n.target))
if(e&&ze.test(e.type)&&void 0===e.pageX&&void 0!==e.clientX){var a=n.target.ownerDocument||document
var o=a.documentElement
var i=a.body
n.pageX=e.clientX+(o&&o.scrollLeft||i&&i.scrollLeft||0)-(o&&o.clientLeft||i&&i.clientLeft||0)
n.pageY=e.clientY+(o&&o.scrollTop||i&&i.scrollTop||0)-(o&&o.clientTop||i&&i.clientTop||0)}n.preventDefault=function(){n.isDefaultPrevented=Ve
e&&(e.preventDefault?e.preventDefault():e.returnValue=false)}
n.stopPropagation=function(){n.isPropagationStopped=Ve
e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=true)}
n.stopImmediatePropagation=function(){n.isImmediatePropagationStopped=Ve
n.stopPropagation()}
if(false===He(n)){n.isDefaultPrevented=We
n.isPropagationStopped=We
n.isImmediatePropagationStopped=We}"undefined"===typeof n.metaKey&&(n.metaKey=false)
return n}
var Ke=function(e,t,r){var n=e.document,a={type:"ready"}
if(r.domLoaded){t(a)
return}var o=function(){return"complete"===n.readyState||"interactive"===n.readyState&&n.body}
var i=function(){if(!r.domLoaded){r.domLoaded=true
t(a)}}
var u=function(){if(o()){Ye(n,"readystatechange",u)
i()}}
var s=function(){try{n.documentElement.doScroll("left")}catch(e){Ue.setTimeout(s)
return}i()}
if(!n.addEventListener||Ie.ie&&Ie.ie<11){Ge(n,"readystatechange",u)
n.documentElement.doScroll&&e.self===e.top&&s()}else o()?i():Ge(e,"DOMContentLoaded",i)
Ge(e,"load",i)}
var Xe=function(){var e=this
var t,r,n,a,o,i={}
r=Qe+(+new Date).toString(32)
a="onmouseenter"in document.documentElement
n="onfocusin"in document.documentElement
o={mouseenter:"mouseover",mouseleave:"mouseout"}
t=1
e.domLoaded=false
e.events=i
var u=function(e,t){var r,n,a,o
var u=i[t]
r=u&&u[e.type]
if(r)for(n=0,a=r.length;n<a;n++){o=r[n]
o&&false===o.func.call(o.scope,e)&&e.preventDefault()
if(e.isImmediatePropagationStopped())return}}
e.bind=function(s,l,c,f){var d,v,m,g,p,A,h
var b=window
var y=function(e){u(qe(e||b.event),d)}
if(!s||3===s.nodeType||8===s.nodeType)return
if(s[r])d=s[r]
else{d=t++
s[r]=d
i[d]={}}f=f||s
l=l.split(" ")
m=l.length
while(m--){g=l[m]
A=y
p=h=false
"DOMContentLoaded"===g&&(g="ready")
if(e.domLoaded&&"ready"===g&&"complete"===s.readyState){c.call(f,qe({type:g}))
continue}if(!a){p=o[g]
p&&(A=function(e){var t,r
t=e.currentTarget
r=e.relatedTarget
if(r&&t.contains)r=t.contains(r)
else while(r&&r!==t)r=r.parentNode
if(!r){e=qe(e||b.event)
e.type="mouseout"===e.type?"mouseleave":"mouseenter"
e.target=t
u(e,d)}})}if(!n&&("focusin"===g||"focusout"===g)){h=true
p="focusin"===g?"focus":"blur"
A=function(e){e=qe(e||b.event)
e.type="focus"===e.type?"focusin":"focusout"
u(e,d)}}v=i[d][g]
if(v)"ready"===g&&e.domLoaded?c({type:g}):v.push({func:c,scope:f})
else{i[d][g]=v=[{func:c,scope:f}]
v.fakeName=p
v.capture=h
v.nativeHandler=A
"ready"===g?Ke(s,A,e):Ge(s,p||g,A,h)}}s=v=0
return c}
e.unbind=function(t,n,a){var o,u,s,l,c,f
if(!t||3===t.nodeType||8===t.nodeType)return e
o=t[r]
if(o){f=i[o]
if(n){n=n.split(" ")
s=n.length
while(s--){c=n[s]
u=f[c]
if(u){if(a){l=u.length
while(l--)if(u[l].func===a){var d=u.nativeHandler
var v=u.fakeName,m=u.capture
u=u.slice(0,l).concat(u.slice(l+1))
u.nativeHandler=d
u.fakeName=v
u.capture=m
f[c]=u}}if(!a||0===u.length){delete f[c]
Ye(t,u.fakeName||c,u.nativeHandler,u.capture)}}}}else{for(c in f){u=f[c]
Ye(t,u.fakeName||c,u.nativeHandler,u.capture)}f={}}for(c in f)return e
delete i[o]
try{delete t[r]}catch(e){t[r]=null}}return e}
e.fire=function(t,n,a){var o
if(!t||3===t.nodeType||8===t.nodeType)return e
a=qe(null,a)
a.type=n
a.target=t
do{o=t[r]
o&&u(a,o)
t=t.parentNode||t.ownerDocument||t.defaultView||t.parentWindow}while(t&&!a.isPropagationStopped())
return e}
e.clean=function(t){var n,a
var o=e.unbind
if(!t||3===t.nodeType||8===t.nodeType)return e
t[r]&&o(t)
t.getElementsByTagName||(t=t.document)
if(t&&t.getElementsByTagName){o(t)
a=t.getElementsByTagName("*")
n=a.length
while(n--){t=a[n]
t[r]&&o(t)}}return e}
e.destroy=function(){i={}}
e.cancel=function(e){if(e){e.preventDefault()
e.stopImmediatePropagation()}return false}}
Xe.Event=new Xe
Xe.Event.bind(window,"ready",function(){})
var Ze,$e,et,tt,rt,nt,at,ot,it,ut,st,lt,ct,ft,dt,vt,mt,gt,pt,At="sizzle"+-new Date,ht=window.document,bt=0,yt=0,wt=tr(),Et=tr(),xt=tr(),Ct=function(e,t){e===t&&(st=true)
return 0},kt="undefined",Bt=1<<31,Tt={}.hasOwnProperty,Rt=[],It=Rt.pop,St=Rt.push,Dt=Rt.push,Nt=Rt.slice,Mt=Rt.indexOf||function(e){var t=0,r=this.length
for(;t<r;t++)if(this[t]===e)return t
return-1},Pt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",_t="[\\x20\\t\\r\\n\\f]",Ot="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",Ft="\\["+_t+"*("+Ot+")(?:"+_t+"*([*^$|!~]?=)"+_t+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+Ot+"))|)"+_t+"*\\]",Lt=":("+Ot+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+Ft+")*)|.*)\\)|)",Ut=new RegExp("^"+_t+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_t+"+$","g"),Qt=new RegExp("^"+_t+"*,"+_t+"*"),zt=new RegExp("^"+_t+"*([>+~]|"+_t+")"+_t+"*"),jt=new RegExp("="+_t+"*([^\\]'\"]*?)"+_t+"*\\]","g"),Ht=new RegExp(Lt),Wt=new RegExp("^"+Ot+"$"),Vt={ID:new RegExp("^#("+Ot+")"),CLASS:new RegExp("^\\.("+Ot+")"),TAG:new RegExp("^("+Ot+"|[*])"),ATTR:new RegExp("^"+Ft),PSEUDO:new RegExp("^"+Lt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_t+"*(even|odd|(([+-]|)(\\d*)n|)"+_t+"*(?:([+-]|)"+_t+"*(\\d+)|))"+_t+"*\\)|)","i"),bool:new RegExp("^(?:"+Pt+")$","i"),needsContext:new RegExp("^"+_t+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_t+"*((?:-\\d)?\\d*)"+_t+"*\\)|)(?=[^-]|$)","i")},Gt=/^(?:input|select|textarea|button)$/i,Yt=/^h\d$/i,Jt=/^[^{]+\{\s*\[native \w/,qt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Kt=/[+~]/,Xt=/'|\\/g,Zt=new RegExp("\\\\([\\da-f]{1,6}"+_t+"?|("+_t+")|.)","ig"),$t=function(e,t,r){var n="0x"+t-65536
return n!==n||r?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)}
try{Dt.apply(Rt=Nt.call(ht.childNodes),ht.childNodes)
Rt[ht.childNodes.length].nodeType}catch(e){Dt={apply:Rt.length?function(e,t){St.apply(e,Nt.call(t))}:function(e,t){var r=e.length,n=0
while(e[r++]=t[n++]);e.length=r-1}}}var er=function(e,t,r,n){var a,o,i,u,s,l,c,f,d,v;(t?t.ownerDocument||t:ht)!==ct&&lt(t)
t=t||ct
r=r||[]
if(!e||"string"!==typeof e)return r
if(1!==(u=t.nodeType)&&9!==u)return[]
if(dt&&!n){if(a=qt.exec(e))if(i=a[1]){if(9===u){o=t.getElementById(i)
if(!o||!o.parentNode)return r
if(o.id===i){r.push(o)
return r}}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(i))&&pt(t,o)&&o.id===i){r.push(o)
return r}}else{if(a[2]){Dt.apply(r,t.getElementsByTagName(e))
return r}if((i=a[3])&&$e.getElementsByClassName){Dt.apply(r,t.getElementsByClassName(i))
return r}}if($e.qsa&&(!vt||!vt.test(e))){f=c=At
d=t
v=9===u&&e
if(1===u&&"object"!==t.nodeName.toLowerCase()){l=nt(e);(c=t.getAttribute("id"))?f=c.replace(Xt,"\\$&"):t.setAttribute("id",f)
f="[id='"+f+"'] "
s=l.length
while(s--)l[s]=f+lr(l[s])
d=Kt.test(e)&&ur(t.parentNode)||t
v=l.join(",")}if(v)try{Dt.apply(r,d.querySelectorAll(v))
return r}catch(e){}finally{c||t.removeAttribute("id")}}}return ot(e.replace(Ut,"$1"),t,r,n)}
function tr(){var e=[]
function t(r,n){e.push(r+" ")>et.cacheLength&&delete t[e.shift()]
return t[r+" "]=n}return t}function rr(e){e[At]=true
return e}function nr(e,t){var r=t&&e,n=r&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Bt)-(~e.sourceIndex||Bt)
if(n)return n
if(r)while(r=r.nextSibling)if(r===t)return-1
return e?1:-1}function ar(e){return function(t){var r=t.nodeName.toLowerCase()
return"input"===r&&t.type===e}}function or(e){return function(t){var r=t.nodeName.toLowerCase()
return("input"===r||"button"===r)&&t.type===e}}function ir(e){return rr(function(t){t=+t
return rr(function(r,n){var a,o=e([],r.length,t),i=o.length
while(i--)r[a=o[i]]&&(r[a]=!(n[a]=r[a]))})})}function ur(e){return e&&typeof e.getElementsByTagName!==kt&&e}$e=er.support={}
rt=er.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName}
lt=er.setDocument=function(e){var t,r=e?e.ownerDocument||e:ht,n=r.defaultView
function a(e){try{return e.top}catch(e){}return null}if(r===ct||9!==r.nodeType||!r.documentElement)return ct
ct=r
ft=r.documentElement
dt=!rt(r)
n&&n!==a(n)&&(n.addEventListener?n.addEventListener("unload",function(){lt()},false):n.attachEvent&&n.attachEvent("onunload",function(){lt()}))
$e.attributes=true
$e.getElementsByTagName=true
$e.getElementsByClassName=Jt.test(r.getElementsByClassName)
$e.getById=true
et.find.ID=function(e,t){if(typeof t.getElementById!==kt&&dt){var r=t.getElementById(e)
return r&&r.parentNode?[r]:[]}}
et.filter.ID=function(e){var t=e.replace(Zt,$t)
return function(e){return e.getAttribute("id")===t}}
et.find.TAG=$e.getElementsByTagName?function(e,t){if(typeof t.getElementsByTagName!==kt)return t.getElementsByTagName(e)}:function(e,t){var r,n=[],a=0,o=t.getElementsByTagName(e)
if("*"===e){while(r=o[a++])1===r.nodeType&&n.push(r)
return n}return o}
et.find.CLASS=$e.getElementsByClassName&&function(e,t){if(dt)return t.getElementsByClassName(e)}
mt=[]
vt=[]
$e.disconnectedMatch=true
vt=vt.length&&new RegExp(vt.join("|"))
mt=mt.length&&new RegExp(mt.join("|"))
t=Jt.test(ft.compareDocumentPosition)
pt=t||Jt.test(ft.contains)?function(e,t){var r=9===e.nodeType?e.documentElement:e,n=t&&t.parentNode
return e===n||!!(n&&1===n.nodeType&&(r.contains?r.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return true
return false}
Ct=t?function(e,t){if(e===t){st=true
return 0}var n=!e.compareDocumentPosition-!t.compareDocumentPosition
if(n)return n
n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1
if(1&n||!$e.sortDetached&&t.compareDocumentPosition(e)===n){if(e===r||e.ownerDocument===ht&&pt(ht,e))return-1
if(t===r||t.ownerDocument===ht&&pt(ht,t))return 1
return ut?Mt.call(ut,e)-Mt.call(ut,t):0}return 4&n?-1:1}:function(e,t){if(e===t){st=true
return 0}var n,a=0,o=e.parentNode,i=t.parentNode,u=[e],s=[t]
if(!o||!i)return e===r?-1:t===r?1:o?-1:i?1:ut?Mt.call(ut,e)-Mt.call(ut,t):0
if(o===i)return nr(e,t)
n=e
while(n=n.parentNode)u.unshift(n)
n=t
while(n=n.parentNode)s.unshift(n)
while(u[a]===s[a])a++
return a?nr(u[a],s[a]):u[a]===ht?-1:s[a]===ht?1:0}
return r}
er.matches=function(e,t){return er(e,null,null,t)}
er.matchesSelector=function(e,t){(e.ownerDocument||e)!==ct&&lt(e)
t=t.replace(jt,"='$1']")
if($e.matchesSelector&&dt&&(!mt||!mt.test(t))&&(!vt||!vt.test(t)))try{var r=gt.call(e,t)
if(r||$e.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return er(t,ct,null,[e]).length>0}
er.contains=function(e,t){(e.ownerDocument||e)!==ct&&lt(e)
return pt(e,t)}
er.attr=function(e,t){(e.ownerDocument||e)!==ct&&lt(e)
var r=et.attrHandle[t.toLowerCase()],n=r&&Tt.call(et.attrHandle,t.toLowerCase())?r(e,t,!dt):void 0
return void 0!==n?n:$e.attributes||!dt?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null}
er.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)}
er.uniqueSort=function(e){var t,r=[],n=0,a=0
st=!$e.detectDuplicates
ut=!$e.sortStable&&e.slice(0)
e.sort(Ct)
if(st){while(t=e[a++])t===e[a]&&(n=r.push(a))
while(n--)e.splice(r[n],1)}ut=null
return e}
tt=er.getText=function(e){var t,r="",n=0,a=e.nodeType
if(a){if(1===a||9===a||11===a){if("string"===typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)r+=tt(e)}else if(3===a||4===a)return e.nodeValue}else while(t=e[n++])r+=tt(t)
return r}
et=er.selectors={cacheLength:50,createPseudo:rr,match:Vt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(Zt,$t)
e[3]=(e[3]||e[4]||e[5]||"").replace(Zt,$t)
"~="===e[2]&&(e[3]=" "+e[3]+" ")
return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase()
if("nth"===e[1].slice(0,3)){e[3]||er.error(e[0])
e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3]))
e[5]=+(e[7]+e[8]||"odd"===e[3])}else e[3]&&er.error(e[0])
return e},PSEUDO:function(e){var t,r=!e[6]&&e[2]
if(Vt.CHILD.test(e[0]))return null
if(e[3])e[2]=e[4]||e[5]||""
else if(r&&Ht.test(r)&&(t=nt(r,true))&&(t=r.indexOf(")",r.length-t)-r.length)){e[0]=e[0].slice(0,t)
e[2]=r.slice(0,t)}return e.slice(0,3)}},filter:{TAG:function(e){var t=e.replace(Zt,$t).toLowerCase()
return"*"===e?function(){return true}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=wt[e+" "]
return t||(t=new RegExp("(^|"+_t+")"+e+"("+_t+"|$)"))&&wt(e,function(e){return t.test("string"===typeof e.className&&e.className||typeof e.getAttribute!==kt&&e.getAttribute("class")||"")})},ATTR:function(e,t,r){return function(n){var a=er.attr(n,e)
if(null==a)return"!="===t
if(!t)return true
a+=""
return"="===t?a===r:"!="===t?a!==r:"^="===t?r&&0===a.indexOf(r):"*="===t?r&&a.indexOf(r)>-1:"$="===t?r&&a.slice(-r.length)===r:"~="===t?(" "+a+" ").indexOf(r)>-1:"|="===t&&(a===r||a.slice(0,r.length+1)===r+"-")}},CHILD:function(e,t,r,n,a){var o="nth"!==e.slice(0,3),i="last"!==e.slice(-4),u="of-type"===t
return 1===n&&0===a?function(e){return!!e.parentNode}:function(t,r,s){var l,c,f,d,v,m,g=o!==i?"nextSibling":"previousSibling",p=t.parentNode,A=u&&t.nodeName.toLowerCase(),h=!s&&!u
if(p){if(o){while(g){f=t
while(f=f[g])if(u?f.nodeName.toLowerCase()===A:1===f.nodeType)return false
m=g="only"===e&&!m&&"nextSibling"}return true}m=[i?p.firstChild:p.lastChild]
if(i&&h){c=p[At]||(p[At]={})
l=c[e]||[]
v=l[0]===bt&&l[1]
d=l[0]===bt&&l[2]
f=v&&p.childNodes[v]
while(f=++v&&f&&f[g]||(d=v=0)||m.pop())if(1===f.nodeType&&++d&&f===t){c[e]=[bt,v,d]
break}}else if(h&&(l=(t[At]||(t[At]={}))[e])&&l[0]===bt)d=l[1]
else while(f=++v&&f&&f[g]||(d=v=0)||m.pop())if((u?f.nodeName.toLowerCase()===A:1===f.nodeType)&&++d){h&&((f[At]||(f[At]={}))[e]=[bt,d])
if(f===t)break}d-=a
return d===n||d%n===0&&d/n>=0}}},PSEUDO:function(e,t){var r,n=et.pseudos[e]||et.setFilters[e.toLowerCase()]||er.error("unsupported pseudo: "+e)
if(n[At])return n(t)
if(n.length>1){r=[e,e,"",t]
return et.setFilters.hasOwnProperty(e.toLowerCase())?rr(function(e,r){var a,o=n(e,t),i=o.length
while(i--){a=Mt.call(e,o[i])
e[a]=!(r[a]=o[i])}}):function(e){return n(e,0,r)}}return n}},pseudos:{not:rr(function(e){var t=[],r=[],n=at(e.replace(Ut,"$1"))
return n[At]?rr(function(e,t,r,a){var o,i=n(e,null,a,[]),u=e.length
while(u--)(o=i[u])&&(e[u]=!(t[u]=o))}):function(e,a,o){t[0]=e
n(t,null,o,r)
return!r.pop()}}),has:rr(function(e){return function(t){return er(e,t).length>0}}),contains:rr(function(e){e=e.replace(Zt,$t)
return function(t){return(t.textContent||t.innerText||tt(t)).indexOf(e)>-1}}),lang:rr(function(e){Wt.test(e||"")||er.error("unsupported lang: "+e)
e=e.replace(Zt,$t).toLowerCase()
return function(t){var r
do{if(r=dt?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang")){r=r.toLowerCase()
return r===e||0===r.indexOf(e+"-")}}while((t=t.parentNode)&&1===t.nodeType)
return false}}),target:function(e){var t=window.location&&window.location.hash
return t&&t.slice(1)===e.id},root:function(e){return e===ft},focus:function(e){return e===ct.activeElement&&(!ct.hasFocus||ct.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return false===e.disabled},disabled:function(e){return true===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){e.parentNode&&e.parentNode.selectedIndex
return true===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return false
return true},parent:function(e){return!et.pseudos.empty(e)},header:function(e){return Yt.test(e.nodeName)},input:function(e){return Gt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ir(function(){return[0]}),last:ir(function(e,t){return[t-1]}),eq:ir(function(e,t,r){return[r<0?r+t:r]}),even:ir(function(e,t){var r=0
for(;r<t;r+=2)e.push(r)
return e}),odd:ir(function(e,t){var r=1
for(;r<t;r+=2)e.push(r)
return e}),lt:ir(function(e,t,r){var n=r<0?r+t:r
for(;--n>=0;)e.push(n)
return e}),gt:ir(function(e,t,r){var n=r<0?r+t:r
for(;++n<t;)e.push(n)
return e})}}
et.pseudos.nth=et.pseudos.eq
for(Ze in{radio:true,checkbox:true,file:true,password:true,image:true})et.pseudos[Ze]=ar(Ze)
for(Ze in{submit:true,reset:true})et.pseudos[Ze]=or(Ze)
function sr(){}sr.prototype=et.filters=et.pseudos
et.setFilters=new sr
nt=er.tokenize=function(e,t){var r,n,a,o,i,u,s,l=Et[e+" "]
if(l)return t?0:l.slice(0)
i=e
u=[]
s=et.preFilter
while(i){if(!r||(n=Qt.exec(i))){n&&(i=i.slice(n[0].length)||i)
u.push(a=[])}r=false
if(n=zt.exec(i)){r=n.shift()
a.push({value:r,type:n[0].replace(Ut," ")})
i=i.slice(r.length)}for(o in et.filter)if((n=Vt[o].exec(i))&&(!s[o]||(n=s[o](n)))){r=n.shift()
a.push({value:r,type:o,matches:n})
i=i.slice(r.length)}if(!r)break}return t?i.length:i?er.error(e):Et(e,u).slice(0)}
function lr(e){var t=0,r=e.length,n=""
for(;t<r;t++)n+=e[t].value
return n}function cr(e,t,r){var n=t.dir,a=r&&"parentNode"===n,o=yt++
return t.first?function(t,r,o){while(t=t[n])if(1===t.nodeType||a)return e(t,r,o)}:function(t,r,i){var u,s,l=[bt,o]
if(i){while(t=t[n])if((1===t.nodeType||a)&&e(t,r,i))return true}else while(t=t[n])if(1===t.nodeType||a){s=t[At]||(t[At]={})
if((u=s[n])&&u[0]===bt&&u[1]===o)return l[2]=u[2]
s[n]=l
if(l[2]=e(t,r,i))return true}}}function fr(e){return e.length>1?function(t,r,n){var a=e.length
while(a--)if(!e[a](t,r,n))return false
return true}:e[0]}function dr(e,t,r){var n=0,a=t.length
for(;n<a;n++)er(e,t[n],r)
return r}function vr(e,t,r,n,a){var o,i=[],u=0,s=e.length,l=null!=t
for(;u<s;u++)if((o=e[u])&&(!r||r(o,n,a))){i.push(o)
l&&t.push(u)}return i}function mr(e,t,r,n,a,o){n&&!n[At]&&(n=mr(n))
a&&!a[At]&&(a=mr(a,o))
return rr(function(o,i,u,s){var l,c,f,d=[],v=[],m=i.length,g=o||dr(t||"*",u.nodeType?[u]:u,[]),p=!e||!o&&t?g:vr(g,d,e,u,s),A=r?a||(o?e:m||n)?[]:i:p
r&&r(p,A,u,s)
if(n){l=vr(A,v)
n(l,[],u,s)
c=l.length
while(c--)(f=l[c])&&(A[v[c]]=!(p[v[c]]=f))}if(o){if(a||e){if(a){l=[]
c=A.length
while(c--)(f=A[c])&&l.push(p[c]=f)
a(null,A=[],l,s)}c=A.length
while(c--)(f=A[c])&&(l=a?Mt.call(o,f):d[c])>-1&&(o[l]=!(i[l]=f))}}else{A=vr(A===i?A.splice(m,A.length):A)
a?a(null,i,A,s):Dt.apply(i,A)}})}function gr(e){var t,r,n,a=e.length,o=et.relative[e[0].type],i=o||et.relative[" "],u=o?1:0,s=cr(function(e){return e===t},i,true),l=cr(function(e){return Mt.call(t,e)>-1},i,true),c=[function(e,r,n){return!o&&(n||r!==it)||((t=r).nodeType?s(e,r,n):l(e,r,n))}]
for(;u<a;u++)if(r=et.relative[e[u].type])c=[cr(fr(c),r)]
else{r=et.filter[e[u].type].apply(null,e[u].matches)
if(r[At]){n=++u
for(;n<a;n++)if(et.relative[e[n].type])break
return mr(u>1&&fr(c),u>1&&lr(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(Ut,"$1"),r,u<n&&gr(e.slice(u,n)),n<a&&gr(e=e.slice(n)),n<a&&lr(e))}c.push(r)}return fr(c)}function pr(e,t){var r=t.length>0,n=e.length>0,a=function(a,o,i,u,s){var l,c,f,d=0,v="0",m=a&&[],g=[],p=it,A=a||n&&et.find.TAG("*",s),h=bt+=null==p?1:Math.random()||.1,b=A.length
s&&(it=o!==ct&&o)
for(;v!==b&&null!=(l=A[v]);v++){if(n&&l){c=0
while(f=e[c++])if(f(l,o,i)){u.push(l)
break}s&&(bt=h)}if(r){(l=!f&&l)&&d--
a&&m.push(l)}}d+=v
if(r&&v!==d){c=0
while(f=t[c++])f(m,g,o,i)
if(a){if(d>0)while(v--)m[v]||g[v]||(g[v]=It.call(u))
g=vr(g)}Dt.apply(u,g)
s&&!a&&g.length>0&&d+t.length>1&&er.uniqueSort(u)}if(s){bt=h
it=p}return m}
return r?rr(a):a}at=er.compile=function(e,t){var r,n=[],a=[],o=xt[e+" "]
if(!o){t||(t=nt(e))
r=t.length
while(r--){o=gr(t[r])
o[At]?n.push(o):a.push(o)}o=xt(e,pr(a,n))
o.selector=e}return o}
ot=er.select=function(e,t,r,n){var a,o,i,u,s,l="function"===typeof e&&e,c=!n&&nt(e=l.selector||e)
r=r||[]
if(1===c.length){o=c[0]=c[0].slice(0)
if(o.length>2&&"ID"===(i=o[0]).type&&$e.getById&&9===t.nodeType&&dt&&et.relative[o[1].type]){t=(et.find.ID(i.matches[0].replace(Zt,$t),t)||[])[0]
if(!t)return r
l&&(t=t.parentNode)
e=e.slice(o.shift().value.length)}a=Vt.needsContext.test(e)?0:o.length
while(a--){i=o[a]
if(et.relative[u=i.type])break
if((s=et.find[u])&&(n=s(i.matches[0].replace(Zt,$t),Kt.test(o[0].type)&&ur(t.parentNode)||t))){o.splice(a,1)
e=n.length&&lr(o)
if(!e){Dt.apply(r,n)
return r}break}}}(l||at(e,c))(n,t,!dt,r,Kt.test(e)&&ur(t.parentNode)||t)
return r}
$e.sortStable=At.split("").sort(Ct).join("")===At
$e.detectDuplicates=!!st
lt()
$e.sortDetached=true
var Ar=Array.isArray
var hr=function(e){var t,r,n=e
if(!Ar(e)){n=[]
for(t=0,r=e.length;t<r;t++)n[t]=e[t]}return n}
var br=function(e,t,r){var n,a
if(!e)return 0
r=r||e
if(void 0!==e.length){for(n=0,a=e.length;n<a;n++)if(false===t.call(r,e[n],n,e))return 0}else for(n in e)if(e.hasOwnProperty(n)&&false===t.call(r,e[n],n,e))return 0
return 1}
var yr=function(e,t){var r=[]
br(e,function(n,a){r.push(t(n,a,e))})
return r}
var wr=function(e,t){var r=[]
br(e,function(n,a){t&&!t(n,a,e)||r.push(n)})
return r}
var Er=function(e,t){var r,n
if(e)for(r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1}
var xr=function(e,t,r,n){var a=0
arguments.length<3&&(r=e[0])
for(;a<e.length;a++)r=t.call(n,r,e[a],a)
return r}
var Cr=function(e,t,r){var n,a
for(n=0,a=e.length;n<a;n++)if(t.call(r,e[n],n,e))return n
return-1}
var kr=function(e,t,r){var n=Cr(e,t,r)
if(-1!==n)return e[n]
return}
var Br=function(e){return e[e.length-1]}
var Tr={isArray:Ar,toArray:hr,each:br,map:yr,filter:wr,indexOf:Er,reduce:xr,findIndex:Cr,find:kr,last:Br}
var Rr=/^\s*|\s*$/g
var Ir=function(e){return null===e||void 0===e?"":(""+e).replace(Rr,"")}
var Sr=function(e,t){if(!t)return void 0!==e
if("array"===t&&Tr.isArray(e))return true
return typeof e===t}
var Dr=function(e,t,r){var n
e=e||[]
t=t||","
"string"===typeof e&&(e=e.split(t))
r=r||{}
n=e.length
while(n--)r[e[n]]={}
return r}
var Nr=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
var Mr=function(e,t,r){var n=this
var a,o,i,u,s,l=0
e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e)
i=e[3].match(/(^|\.)(\w+)$/i)[2]
o=n.createNS(e[3].replace(/\.\w+$/,""),r)
if(o[i])return
if("static"===e[2]){o[i]=t
this.onCreate&&this.onCreate(e[2],e[3],o[i])
return}if(!t[i]){t[i]=function(){}
l=1}o[i]=t[i]
n.extend(o[i].prototype,t)
if(e[5]){a=n.resolve(e[5]).prototype
u=e[5].match(/\.(\w+)$/i)[1]
s=o[i]
o[i]=l?function(){return a[u].apply(this,arguments)}:function(){this.parent=a[u]
return s.apply(this,arguments)}
o[i].prototype[i]=o[i]
n.each(a,function(e,t){o[i].prototype[t]=a[t]})
n.each(t,function(e,t){a[t]?o[i].prototype[t]=function(){this.parent=a[t]
return e.apply(this,arguments)}:t!==i&&(o[i].prototype[t]=e)})}n.each(t.static,function(e,t){o[i][t]=e})}
var Pr=function(e,t){var r=[]
for(var n=2;n<arguments.length;n++)r[n-2]=arguments[n]
var a,o,i
var u=arguments
var s
for(a=1,o=u.length;a<o;a++){t=u[a]
for(i in t)if(t.hasOwnProperty(i)){s=t[i]
void 0!==s&&(e[i]=s)}}return e}
var _r=function(e,t,r,n){n=n||this
if(e){r&&(e=e[r])
Tr.each(e,function(e,a){if(false===t.call(n,e,a,r))return false
_r(e,t,r,n)})}}
var Or=function(e,t){var r,n
t=t||window
e=e.split(".")
for(r=0;r<e.length;r++){n=e[r]
t[n]||(t[n]={})
t=t[n]}return t}
var Fr=function(e,t){var r,n
t=t||window
e=e.split(".")
for(r=0,n=e.length;r<n;r++){t=t[e[r]]
if(!t)break}return t}
var Lr=function(e,t){if(!e||Sr(e,"array"))return e
return Tr.map(e.split(t||","),Ir)}
var Ur=function(e){var t=Ie.cacheSuffix
t&&(e+=(-1===e.indexOf("?")?"?":"&")+t)
return e}
var Qr={trim:Ir,isArray:Tr.isArray,is:Sr,toArray:Tr.toArray,makeMap:Dr,each:Tr.each,map:Tr.map,grep:Tr.filter,inArray:Tr.indexOf,hasOwn:Nr,extend:Pr,create:Mr,walk:_r,createNS:Or,resolve:Fr,explode:Lr,_addCacheSuffix:Ur}
var zr=document,jr=Array.prototype.push,Hr=Array.prototype.slice
var Wr=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/
var Vr=Xe.Event
var Gr=Qr.makeMap("children,contents,next,prev")
var Yr=function(e){return"undefined"!==typeof e}
var Jr=function(e){return"string"===typeof e}
var qr=function(e){return e&&e===e.window}
var Kr=function(e,t){var r,n,a
t=t||zr
a=t.createElement("div")
r=t.createDocumentFragment()
a.innerHTML=e
while(n=a.firstChild)r.appendChild(n)
return r}
var Xr=function(e,t,r,n){var a
if(Jr(t))t=Kr(t,vn(e[0]))
else if(t.length&&!t.nodeType){t=un.makeArray(t)
if(n)for(a=t.length-1;a>=0;a--)Xr(e,t[a],r,n)
else for(a=0;a<t.length;a++)Xr(e,t[a],r,n)
return e}if(t.nodeType){a=e.length
while(a--)r.call(e[a],t)}return e}
var Zr=function(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")}
var $r=function(e,t,r){var n,a
t=un(t)[0]
e.each(function(){var e=this
if(r&&n===e.parentNode)a.appendChild(e)
else{n=e.parentNode
a=t.cloneNode(false)
e.parentNode.insertBefore(a,e)
a.appendChild(e)}})
return e}
var en=Qr.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," ")
var tn=Qr.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," ")
var rn={for:"htmlFor",class:"className",readonly:"readOnly"}
var nn={float:"cssFloat"}
var an={},on={}
var un=function(e,t){return new un.fn.init(e,t)}
var sn=function(e,t){var r
if(t.indexOf)return t.indexOf(e)
r=t.length
while(r--)if(t[r]===e)return r
return-1}
var ln=/^\s*|\s*$/g
var cn=function(e){return null===e||void 0===e?"":(""+e).replace(ln,"")}
var fn=function(e,t){var r,n,a,o
if(e){r=e.length
if(void 0===r){for(n in e)if(e.hasOwnProperty(n)){o=e[n]
if(false===t.call(o,n,o))break}}else for(a=0;a<r;a++){o=e[a]
if(false===t.call(o,a,o))break}}return e}
var dn=function(e,t){var r=[]
fn(e,function(e,n){t(n,e)&&r.push(n)})
return r}
var vn=function(e){if(!e)return zr
if(9===e.nodeType)return e
return e.ownerDocument}
un.fn=un.prototype={constructor:un,selector:"",context:null,length:0,init:function(e,t){var r=this
var n,a
if(!e)return r
if(e.nodeType){r.context=r[0]=e
r.length=1
return r}if(t&&t.nodeType)r.context=t
else{if(t)return un(e).attr(t)
r.context=t=document}if(Jr(e)){r.selector=e
n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:Wr.exec(e)
if(!n)return un(t).find(e)
if(n[1]){a=Kr(e,vn(t)).firstChild
while(a){jr.call(r,a)
a=a.nextSibling}}else{a=vn(t).getElementById(n[2])
if(!a)return r
if(a.id!==n[2])return r.find(e)
r.length=1
r[0]=a}}else this.add(e,false)
return r},toArray:function(){return Qr.toArray(this)},add:function(e,t){var r=this
var n,a
if(Jr(e))return r.add(un(e))
if(false!==t){n=un.unique(r.toArray().concat(un.makeArray(e)))
r.length=n.length
for(a=0;a<n.length;a++)r[a]=n[a]}else jr.apply(r,un.makeArray(e))
return r},attr:function(e,t){var r=this
var n
if("object"===typeof e)fn(e,function(e,t){r.attr(e,t)})
else{if(!Yr(t)){if(r[0]&&1===r[0].nodeType){n=an[e]
if(n&&n.get)return n.get(r[0],e)
if(tn[e])return r.prop(e)?e:void 0
t=r[0].getAttribute(e,2)
null===t&&(t=void 0)}return t}this.each(function(){var r
if(1===this.nodeType){r=an[e]
if(r&&r.set){r.set(this,t)
return}null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}})}return r},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var r=this
e=rn[e]||e
if("object"===typeof e)fn(e,function(e,t){r.prop(e,t)})
else{if(!Yr(t)){if(r[0]&&r[0].nodeType&&e in r[0])return r[0][e]
return t}this.each(function(){1===this.nodeType&&(this[e]=t)})}return r},css:function(e,t){var r=this
var n,a
var o=function(e){return e.replace(/-(\D)/g,function(e,t){return t.toUpperCase()})}
var i=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e})}
if("object"===typeof e)fn(e,function(e,t){r.css(e,t)})
else if(Yr(t)){e=o(e)
"number"!==typeof t||en[e]||(t=t.toString()+"px")
r.each(function(){var r=this.style
a=on[e]
if(a&&a.set){a.set(this,t)
return}try{this.style[nn[e]||e]=t}catch(e){}null!==t&&""!==t||(r.removeProperty?r.removeProperty(i(e)):r.removeAttribute(e))})}else{n=r[0]
a=on[e]
if(a&&a.get)return a.get(n)
if(!n.ownerDocument.defaultView)return n.currentStyle?n.currentStyle[o(e)]:""
try{return n.ownerDocument.defaultView.getComputedStyle(n,null).getPropertyValue(i(e))}catch(e){return}}return r},remove:function(){var e=this
var t,r=this.length
while(r--){t=e[r]
Vr.clean(t)
t.parentNode&&t.parentNode.removeChild(t)}return this},empty:function(){var e=this
var t,r=this.length
while(r--){t=e[r]
while(t.firstChild)t.removeChild(t.firstChild)}return this},html:function(e){var t=this
var r
if(Yr(e)){r=t.length
try{while(r--)t[r].innerHTML=e}catch(n){un(t[r]).empty().append(e)}return t}return t[0]?t[0].innerHTML:""},text:function(e){var t=this
var r
if(Yr(e)){r=t.length
while(r--)"innerText"in t[r]?t[r].innerText=e:t[0].textContent=e
return t}return t[0]?t[0].innerText||t[0].textContent:""},append:function(){return Xr(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.appendChild(e)})},prepend:function(){return Xr(this,arguments,function(e){(1===this.nodeType||this.host&&1===this.host.nodeType)&&this.insertBefore(e,this.firstChild)},true)},before:function(){var e=this
if(e[0]&&e[0].parentNode)return Xr(e,arguments,function(e){this.parentNode.insertBefore(e,this)})
return e},after:function(){var e=this
if(e[0]&&e[0].parentNode)return Xr(e,arguments,function(e){this.parentNode.insertBefore(e,this.nextSibling)},true)
return e},appendTo:function(e){un(e).append(this)
return this},prependTo:function(e){un(e).prepend(this)
return this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return $r(this,e)},wrapAll:function(e){return $r(this,e,true)},wrapInner:function(e){this.each(function(){un(this).contents().wrapAll(e)})
return this},unwrap:function(){return this.parent().each(function(){un(this).replaceWith(this.childNodes)})},clone:function(){var e=[]
this.each(function(){e.push(this.cloneNode(true))})
return un(e)},addClass:function(e){return this.toggleClass(e,true)},removeClass:function(e){return this.toggleClass(e,false)},toggleClass:function(e,t){var r=this
if("string"!==typeof e)return r;-1!==e.indexOf(" ")?fn(e.split(" "),function(){r.toggleClass(this,t)}):r.each(function(r,n){var a,o
o=Zr(n,e)
if(o!==t){a=n.className
o?n.className=cn((" "+a+" ").replace(" "+e+" "," ")):n.className+=a?" "+e:e}})
return r},hasClass:function(e){return Zr(this[0],e)},each:function(e){return fn(this,e)},on:function(e,t){return this.each(function(){Vr.bind(this,e,t)})},off:function(e,t){return this.each(function(){Vr.unbind(this,e,t)})},trigger:function(e){return this.each(function(){"object"===typeof e?Vr.fire(this,e.type,e):Vr.fire(this,e)})},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new un(Hr.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,r
var n=[]
for(t=0,r=this.length;t<r;t++)un.find(e,this[t],n)
return un(n)},filter:function(e){if("function"===typeof e)return un(dn(this.toArray(),function(t,r){return e(r,t)}))
return un(un.filter(e,this.toArray()))},closest:function(e){var t=[]
e instanceof un&&(e=e[0])
this.each(function(r,n){while(n){if("string"===typeof e&&un(n).is(e)){t.push(n)
break}if(n===e){t.push(n)
break}n=n.parentNode}})
return un(t)},offset:function(e){var t,r,n
var a,o=0,i=0
if(!e){t=this[0]
if(t){r=t.ownerDocument
n=r.documentElement
if(t.getBoundingClientRect){a=t.getBoundingClientRect()
o=a.left+(n.scrollLeft||r.body.scrollLeft)-n.clientLeft
i=a.top+(n.scrollTop||r.body.scrollTop)-n.clientTop}}return{left:o,top:i}}return this.css(e)},push:jr,sort:[].sort,splice:[].splice}
Qr.extend(un,{extend:Qr.extend,makeArray:function(e){if(qr(e)||e.nodeType)return[e]
return Qr.toArray(e)},inArray:sn,isArray:Qr.isArray,each:fn,trim:cn,grep:dn,find:er,expr:er.selectors,unique:er.uniqueSort,text:er.getText,contains:er.contains,filter:function(e,t,r){var n=t.length
r&&(e=":not("+e+")")
while(n--)1!==t[n].nodeType&&t.splice(n,1)
t=1===t.length?un.find.matchesSelector(t[0],e)?[t[0]]:[]:un.find.matches(e,t)
return t}})
var mn=function(e,t,r){var n=[]
var a=e[t]
"string"!==typeof r&&r instanceof un&&(r=r[0])
while(a&&9!==a.nodeType){if(void 0!==r){if(a===r)break
if("string"===typeof r&&un(a).is(r))break}1===a.nodeType&&n.push(a)
a=a[t]}return n}
var gn=function(e,t,r,n){var a=[]
n instanceof un&&(n=n[0])
for(;e;e=e[t]){if(r&&e.nodeType!==r)continue
if(void 0!==n){if(e===n)break
if("string"===typeof n&&un(e).is(n))break}a.push(e)}return a}
var pn=function(e,t,r){for(e=e[t];e;e=e[t])if(e.nodeType===r)return e
return null}
fn({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return mn(e,"parentNode")},next:function(e){return pn(e,"nextSibling",1)},prev:function(e){return pn(e,"previousSibling",1)},children:function(e){return gn(e.firstChild,"nextSibling",1)},contents:function(e){return Qr.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},function(e,t){un.fn[e]=function(r){var n=this
var a=[]
n.each(function(){var e=t.call(a,this,r,a)
e&&(un.isArray(e)?a.push.apply(a,e):a.push(e))})
if(this.length>1){Gr[e]||(a=un.unique(a))
0===e.indexOf("parents")&&(a=a.reverse())}a=un(a)
if(r)return a.filter(r)
return a}})
fn({parentsUntil:function(e,t){return mn(e,"parentNode",t)},nextUntil:function(e,t){return gn(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return gn(e,"previousSibling",1,t).slice(1)}},function(e,t){un.fn[e]=function(r,n){var a=this
var o=[]
a.each(function(){var e=t.call(o,this,r,o)
e&&(un.isArray(e)?o.push.apply(o,e):o.push(e))})
if(this.length>1){o=un.unique(o)
0!==e.indexOf("parents")&&"prevUntil"!==e||(o=o.reverse())}o=un(o)
if(n)return o.filter(n)
return o}})
un.fn.is=function(e){return!!e&&this.filter(e).length>0}
un.fn.init.prototype=un.fn
un.overrideDefaults=function(e){var t
var r=function(n,a){t=t||e()
0===arguments.length&&(n=t.element)
a||(a=t.context)
return new r.fn.init(n,a)}
un.extend(r,this)
return r}
var An=function(e,t,r){fn(r,function(r,n){e[r]=e[r]||{}
e[r][t]=n})}
if(Ie.ie&&Ie.ie<8){An(an,"get",{maxlength:function(e){var t=e.maxLength
if(2147483647===t)return
return t},size:function(e){var t=e.size
if(20===t)return
return t},class:function(e){return e.className},style:function(e){var t=e.style.cssText
if(0===t.length)return
return t}})
An(an,"set",{class:function(e,t){e.className=t},style:function(e,t){e.style.cssText=t}})}if(Ie.ie&&Ie.ie<9){nn.float="styleFloat"
An(on,"set",{opacity:function(e,t){var r=e.style
if(null===t||""===t)r.removeAttribute("filter")
else{r.zoom=1
r.filter="alpha(opacity="+100*t+")"}}})}un.attrHooks=an
un.cssHooks=on
var hn=function(e){var t=false
var r
return function(){var n=[]
for(var a=0;a<arguments.length;a++)n[a]=arguments[a]
if(!t){t=true
r=e.apply(null,n)}return r}}
var bn=function(e,t){for(var r=0;r<e.length;r++){var n=e[r]
if(n.test(t))return n}return}
var yn=function(e,t){var r=bn(e,t)
if(!r)return{major:0,minor:0}
var n=function(e){return Number(t.replace(r,"$"+e))}
return xn(n(1),n(2))}
var wn=function(e,t){var r=String(t).toLowerCase()
if(0===e.length)return En()
return yn(e,r)}
var En=function(){return xn(0,0)}
var xn=function(e,t){return{major:e,minor:t}}
var Cn={nu:xn,detect:wn,unknown:En}
var kn="Edge"
var Bn="Chrome"
var Tn="IE"
var Rn="Opera"
var In="Firefox"
var Sn="Safari"
var Dn=function(e,t){return function(){return t===e}}
var Nn=function(){return Mn({current:void 0,version:Cn.unknown()})}
var Mn=function(e){var t=e.current
var r=e.version
return{current:t,version:r,isEdge:Dn(kn,t),isChrome:Dn(Bn,t),isIE:Dn(Tn,t),isOpera:Dn(Rn,t),isFirefox:Dn(In,t),isSafari:Dn(Sn,t)}}
var Pn={unknown:Nn,nu:Mn,edge:a(kn),chrome:a(Bn),ie:a(Tn),opera:a(Rn),firefox:a(In),safari:a(Sn)}
var _n="Windows"
var On="iOS"
var Fn="Android"
var Ln="Linux"
var Un="OSX"
var Qn="Solaris"
var zn="FreeBSD"
var jn=function(e,t){return function(){return t===e}}
var Hn=function(){return Wn({current:void 0,version:Cn.unknown()})}
var Wn=function(e){var t=e.current
var r=e.version
return{current:t,version:r,isWindows:jn(_n,t),isiOS:jn(On,t),isAndroid:jn(Fn,t),isOSX:jn(Un,t),isLinux:jn(Ln,t),isSolaris:jn(Qn,t),isFreeBSD:jn(zn,t)}}
var Vn={unknown:Hn,nu:Wn,windows:a(_n),ios:a(On),android:a(Fn),linux:a(Ln),osx:a(Un),solaris:a(Qn),freebsd:a(zn)}
var Gn=function(e,t,r){var n=e.isiOS()&&true===/ipad/i.test(r)
var o=e.isiOS()&&!n
var i=e.isAndroid()&&3===e.version.major
var u=e.isAndroid()&&4===e.version.major
var s=n||i||u&&true===/mobile/i.test(r)
var l=e.isiOS()||e.isAndroid()
var c=l&&!s
var f=t.isSafari()&&e.isiOS()&&false===/safari/i.test(r)
return{isiPad:a(n),isiPhone:a(o),isTablet:a(s),isPhone:a(c),isTouch:a(l),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:a(f)}}
var Yn=function(e,t){var r=String(t).toLowerCase()
return z(e,function(e){return e.search(r)})}
var Jn=function(e,t){return Yn(e,t).map(function(e){var r=Cn.detect(e.versionRegexes,t)
return{current:e.name,version:r}})}
var qn=function(e,t){return Yn(e,t).map(function(e){var r=Cn.detect(e.versionRegexes,t)
return{current:e.name,version:r}})}
var Kn={detectBrowser:Jn,detectOs:qn}
var Xn=function(e,t){return-1!==e.indexOf(t)}
var Zn=function(e){return e.replace(/^\s+|\s+$/g,"")}
var $n=function(e){return e.replace(/^\s+/g,"")}
var ea=function(e){return e.replace(/\s+$/g,"")}
var ta=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/
var ra=function(e){return function(t){return Xn(t,e)}}
var na=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){var t=Xn(e,"edge/")&&Xn(e,"chrome")&&Xn(e,"safari")&&Xn(e,"applewebkit")
return t}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,ta],search:function(e){return Xn(e,"chrome")&&!Xn(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Xn(e,"msie")||Xn(e,"trident")}},{name:"Opera",versionRegexes:[ta,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:ra("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:ra("firefox")},{name:"Safari",versionRegexes:[ta,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Xn(e,"safari")||Xn(e,"mobile/"))&&Xn(e,"applewebkit")}}]
var aa=[{name:"Windows",search:ra("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Xn(e,"iphone")||Xn(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:ra("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:ra("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:ra("linux"),versionRegexes:[]},{name:"Solaris",search:ra("sunos"),versionRegexes:[]},{name:"FreeBSD",search:ra("freebsd"),versionRegexes:[]}]
var oa={browsers:a(na),oses:a(aa)}
var ia=function(e){var t=oa.browsers()
var r=oa.oses()
var n=Kn.detectBrowser(t,e).fold(Pn.unknown,Pn.nu)
var a=Kn.detectOs(r,e).fold(Vn.unknown,Vn.nu)
var o=Gn(a,n,e)
return{browser:n,os:a,deviceType:o}}
var ua={detect:ia}
var sa=hn(function(){var e=navigator.userAgent
return ua.detect(e)})
var la={detect:sa}
var ca=function(e,t){var r=t||document
var n=r.createElement("div")
n.innerHTML=e
if(!n.hasChildNodes()||n.childNodes.length>1){console.error("HTML does not have a single root node",e)
throw"HTML must have a single root node"}return va(n.childNodes[0])}
var fa=function(e,t){var r=t||document
var n=r.createElement(e)
return va(n)}
var da=function(e,t){var r=t||document
var n=r.createTextNode(e)
return va(n)}
var va=function(e){if(null===e||void 0===e)throw new Error("Node cannot be null or undefined")
return{dom:a(e)}}
var ma=function(e,t,r){var n=e.dom()
return A.from(n.elementFromPoint(t,r)).map(va)}
var ga={fromHtml:ca,fromTag:fa,fromText:da,fromDom:va,fromPoint:ma}
Node.ATTRIBUTE_NODE
Node.CDATA_SECTION_NODE
Node.COMMENT_NODE
var pa=Node.DOCUMENT_NODE
Node.DOCUMENT_TYPE_NODE
Node.DOCUMENT_FRAGMENT_NODE
var Aa=Node.ELEMENT_NODE
var ha=Node.TEXT_NODE
Node.PROCESSING_INSTRUCTION_NODE
Node.ENTITY_REFERENCE_NODE
Node.ENTITY_NODE
Node.NOTATION_NODE
var ba=function(e){var t=e.dom().nodeName
return t.toLowerCase()}
var ya=function(e){return e.dom().nodeType}
var wa=function(e){return function(t){return ya(t)===e}}
var Ea=wa(Aa)
var xa=wa(ha)
var Ca=Object.keys
var ka=Object.hasOwnProperty
var Ba=function(e,t){var r=Ca(e)
for(var n=0,a=r.length;n<a;n++){var o=r[n]
var i=e[o]
t(i,o,e)}}
var Ta=function(e,t){return Ra(e,function(e,r,n){return{k:r,v:t(e,r,n)}})}
var Ra=function(e,t){var r={}
Ba(e,function(n,a){var o=t(n,a,e)
r[o.k]=o.v})
return r}
var Ia=function(e,t){var r={}
var n={}
Ba(e,function(e,a){var o=t(e,a)?r:n
o[a]=e})
return{t:r,f:n}}
var Sa=function(e,t){return ka.call(e,t)}
var Da=function(e,t,r){if(!(y(r)||C(r)||B(r))){console.error("Invalid call to Attr.set. Key ",t,":: Value ",r,":: Element ",e)
throw new Error("Attribute value was not simple")}e.setAttribute(t,r+"")}
var Na=function(e,t,r){Da(e.dom(),t,r)}
var Ma=function(e,t){var r=e.dom()
Ba(t,function(e,t){Da(r,t,e)})}
var Pa=function(e,t){var r=e.dom().getAttribute(t)
return null===r?void 0:r}
var _a=function(e,t){var r=e.dom()
return!(!r||!r.hasAttribute)&&r.hasAttribute(t)}
var Oa=function(e,t){e.dom().removeAttribute(t)}
var Fa=function(e){var t=xa(e)?e.dom().parentNode:e.dom()
return void 0!==t&&null!==t&&t.ownerDocument.body.contains(t)}
var La=function(e){return void 0!==e.style}
var Ua=function(e,t,r){if(!y(r)){console.error("Invalid call to CSS.set. Property ",t,":: Value ",r,":: Element ",e)
throw new Error("CSS value must be a string: "+r)}La(e)&&e.style.setProperty(t,r)}
var Qa=function(e,t){var r=e.dom()
Ba(t,function(e,t){Ua(r,t,e)})}
var za=function(e,t){var r=e.dom()
var n=window.getComputedStyle(r)
var a=n.getPropertyValue(t)
var o=""!==a||Fa(e)?a:ja(r,t)
return null===o?void 0:o}
var ja=function(e,t){return La(e)?e.style.getPropertyValue(t):""}
var Ha=function(e,t){var r=e.dom()
var n=ja(r,t)
return A.from(n).filter(function(e){return e.length>0})}
var Wa=function(){var e=[]
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(){var t=[]
for(var r=0;r<arguments.length;r++)t[r]=arguments[r]
if(e.length!==t.length)throw new Error('Wrong number of arguments to struct. Expected "['+e.length+']", got '+t.length+" arguments")
var n={}
_(e,function(e,r){n[e]=a(t[r])})
return n}}
var Va=function(e,t){var r=[]
var n=function(e){r.push(e)
return t(e)}
var a=t(e)
do{a=a.bind(n)}while(a.isSome())
return r}
var Ga={toArray:Va}
var Ya=function(){var e=ue.getOrDie("Node")
return e}
var Ja=function(e,t,r){return 0!==(e.compareDocumentPosition(t)&r)}
var qa=function(e,t){return Ja(e,t,Ya().DOCUMENT_POSITION_PRECEDING)}
var Ka=function(e,t){return Ja(e,t,Ya().DOCUMENT_POSITION_CONTAINED_BY)}
var Xa={documentPositionPreceding:qa,documentPositionContainedBy:Ka}
var Za=Aa
var $a=pa
var eo=function(e,t){var r=e.dom()
if(r.nodeType!==Za)return false
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")}
var to=function(e){return e.nodeType!==Za&&e.nodeType!==$a||0===e.childElementCount}
var ro=function(e,t){var r=void 0===t?document:t.dom()
return to(r)?[]:P(r.querySelectorAll(e),ga.fromDom)}
var no=function(e,t){var r=void 0===t?document:t.dom()
return to(r)?A.none():A.from(r.querySelector(e)).map(ga.fromDom)}
var ao=function(e,t){return e.dom()===t.dom()}
var oo=function(e,t){var r=e.dom(),n=t.dom()
return r!==n&&r.contains(n)}
var io=function(e,t){return Xa.documentPositionContainedBy(e.dom(),t.dom())}
var uo=la.detect().browser
var so=uo.isIE()?io:oo
var lo=function(e){return ga.fromDom(e.dom().ownerDocument)}
var co=function(e){return ga.fromDom(e.dom().ownerDocument.documentElement)}
var fo=function(e){var t=e.dom()
var r=t.ownerDocument.defaultView
return ga.fromDom(r)}
var vo=function(e){var t=e.dom()
return A.from(t.parentNode).map(ga.fromDom)}
var mo=function(e,t){var r=k(t)?t:a(false)
var n=e.dom()
var o=[]
while(null!==n.parentNode&&void 0!==n.parentNode){var i=n.parentNode
var u=ga.fromDom(i)
o.push(u)
if(true===r(u))break
n=i}return o}
var go=function(e){var t=e.dom()
return A.from(t.previousSibling).map(ga.fromDom)}
var po=function(e){var t=e.dom()
return A.from(t.nextSibling).map(ga.fromDom)}
var Ao=function(e){return q(Ga.toArray(e,go))}
var ho=function(e){return Ga.toArray(e,po)}
var bo=function(e){var t=e.dom()
return P(t.childNodes,ga.fromDom)}
var yo=function(e,t){var r=e.dom().childNodes
return A.from(r[t]).map(ga.fromDom)}
var wo=function(e){return yo(e,0)}
var Eo=function(e){return yo(e,e.dom().childNodes.length-1)}
var xo=function(e){return e.dom().childNodes.length}
Wa("element","offset")
var Co=la.detect().browser
var ko=function(e){return z(e,Ea)}
var Bo=function(e){return Co.isFirefox()&&"table"===ba(e)?ko(bo(e)).filter(function(e){return"caption"===ba(e)}).bind(function(e){return ko(ho(e)).map(function(t){var r=t.dom().offsetTop
var n=e.dom().offsetTop
var a=e.dom().offsetHeight
return r<=n?-a:0})}).getOr(0):0}
var To=function(e,t,r){var n,a=0,o=0
var i=e.ownerDocument
var u
r=r||e
if(t){if(r===e&&t.getBoundingClientRect&&"static"===za(ga.fromDom(e),"position")){u=t.getBoundingClientRect()
a=u.left+(i.documentElement.scrollLeft||e.scrollLeft)-i.documentElement.clientLeft
o=u.top+(i.documentElement.scrollTop||e.scrollTop)-i.documentElement.clientTop
return{x:a,y:o}}n=t
while(n&&n!==r&&n.nodeType){a+=n.offsetLeft||0
o+=n.offsetTop||0
n=n.offsetParent}n=t.parentNode
while(n&&n!==r&&n.nodeType){a-=n.scrollLeft||0
o-=n.scrollTop||0
n=n.parentNode}o+=Bo(ga.fromDom(t))}return{x:a,y:o}}
var Ro={getPos:To}
var Io=function(e){var t=A.none()
var r=[]
var n=function(e){return Io(function(t){a(function(r){t(e(r))})})}
var a=function(e){i()?s(e):r.push(e)}
var o=function(e){t=A.some(e)
u(r)
r=[]}
var i=function(){return t.isSome()}
var u=function(e){_(e,s)}
var s=function(e){t.each(function(t){setTimeout(function(){e(t)},0)})}
e(o)
return{get:a,map:n,isReady:i}}
var So=function(e){return Io(function(t){t(e)})}
var Do={nu:Io,pure:So}
var No=function(e){return function(){var t=[]
for(var r=0;r<arguments.length;r++)t[r]=arguments[r]
var n=this
setTimeout(function(){e.apply(n,t)},0)}}
var Mo=function(e){var t=function(t){e(No(t))}
var r=function(e){return Mo(function(r){t(function(t){var n=e(t)
r(n)})})}
var n=function(e){return Mo(function(r){t(function(t){e(t).get(r)})})}
var a=function(e){return Mo(function(r){t(function(t){e.get(r)})})}
var o=function(){return Do.nu(t)}
var i=function(){var e=null
return Mo(function(t){null===e&&(e=o())
e.get(t)})}
return{map:r,bind:n,anonBind:a,toLazy:o,toCached:i,get:t}}
var Po=function(e){return Mo(function(t){t(e)})}
var _o={nu:Mo,pure:Po}
var Oo=function(e,t){return t(function(t){var r=[]
var n=0
var a=function(a){return function(o){r[a]=o
n++
n>=e.length&&t(r)}}
0===e.length?t([]):_(e,function(e,t){e.get(a(t))})})}
var Fo=function(e){return Oo(e,_o.nu)}
var Lo=function(e){var t=function(t){return e===t}
var r=function(t){return Lo(e)}
var n=function(t){return Lo(e)}
var o=function(t){return Lo(t(e))}
var i=function(t){return Lo(e)}
var u=function(t){t(e)}
var s=function(t){return t(e)}
var f=function(t,r){return r(e)}
var d=function(t){return t(e)}
var v=function(t){return t(e)}
var m=function(){return A.some(e)}
return{is:t,isValue:c,isError:l,getOr:a(e),getOrThunk:a(e),getOrDie:a(e),or:r,orThunk:n,fold:f,map:o,mapError:i,each:u,bind:s,exists:d,forall:v,toOption:m}}
var Uo=function(e){var t=function(e){return e()}
var n=function(){return s(String(e))()}
var a=function(e){return e}
var i=function(e){return e()}
var u=function(t){return Uo(e)}
var f=function(t){return Uo(t(e))}
var d=function(t){return Uo(e)}
var v=function(t,r){return t(e)}
return{is:l,isValue:l,isError:c,getOr:o,getOrThunk:t,getOrDie:n,or:a,orThunk:i,fold:v,map:u,mapError:f,each:r,bind:d,exists:l,forall:c,toOption:A.none}}
var Qo={value:Lo,error:Uo}
function zo(e,t){void 0===t&&(t={})
var r=0
var i={}
var u
u=t.maxLoadTime||5e3
var s=function(t){e.getElementsByTagName("head")[0].appendChild(t)}
var l=function(n,a,o){var l,c,f,d
var v=function(){var e=d.passed
var t=e.length
while(t--)e[t]()
d.status=2
d.passed=[]
d.failed=[]}
var m=function(){var e=d.failed
var t=e.length
while(t--)e[t]()
d.status=3
d.passed=[]
d.failed=[]}
var g=function(){var e=navigator.userAgent.match(/WebKit\/(\d*)/)
return!!(e&&parseInt(e[1],10)<536)}
var p=function(e,t){e()||((new Date).getTime()-f<u?Ue.setTimeout(t):m())}
var A=function(){p(function(){var t=e.styleSheets
var r,n,a=t.length
while(a--){r=t[a]
n=r.ownerNode?r.ownerNode:r.owningElement
if(n&&n.id===l.id){v()
return true}}},A)}
var h=function(){p(function(){try{var e=c.sheet.cssRules
v()
return!!e}catch(e){}},h)}
n=Qr._addCacheSuffix(n)
if(i[n])d=i[n]
else{d={passed:[],failed:[]}
i[n]=d}a&&d.passed.push(a)
o&&d.failed.push(o)
if(1===d.status)return
if(2===d.status){v()
return}if(3===d.status){m()
return}d.status=1
l=e.createElement("link")
l.rel="stylesheet"
l.type="text/css"
l.id="u"+r++
l.async=false
l.defer=false
f=(new Date).getTime()
t.contentCssCors&&(l.crossOrigin="anonymous")
if("onload"in l&&!g()){l.onload=A
l.onerror=m}else{if(navigator.userAgent.indexOf("Firefox")>0){c=e.createElement("style")
c.textContent='@import "'+n+'"'
h()
s(c)
return}A()}s(l)
l.href=n}
var c=function(e){return _o.nu(function(t){l(e,n(t,a(Qo.value(e))),n(t,a(Qo.error(e))))})}
var f=function(e){return e.fold(o,o)}
var d=function(e,t,r){Fo(P(e,c)).get(function(e){var n=F(e,function(e){return e.isValue()})
n.fail.length>0?r(n.fail.map(f)):t(n.pass.map(f))})}
return{load:l,loadAll:d}}function jo(e,t){var r=e
var n=function(e,r,n,a){var o,i
if(e){if(!a&&e[r])return e[r]
if(e!==t){o=e[n]
if(o)return o
for(i=e.parentNode;i&&i!==t;i=i.parentNode){o=i[n]
if(o)return o}}}}
var a=function(e,r,n,a){var o,i,u
if(e){o=e[n]
if(t&&o===t)return
if(o){if(!a)for(u=o[r];u;u=u[r])if(!u[r])return u
return o}i=e.parentNode
if(i&&i!==t)return i}}
this.current=function(){return r}
this.next=function(e){r=n(r,"firstChild","nextSibling",e)
return r}
this.prev=function(e){r=n(r,"lastChild","previousSibling",e)
return r}
this.prev2=function(e){r=a(r,"lastChild","previousSibling",e)
return r}}var Ho=["article","aside","details","div","dt","figcaption","footer","form","fieldset","header","hgroup","html","main","nav","section","summary","body","p","dl","multicol","dd","figure","address","center","blockquote","h1","h2","h3","h4","h5","h6","listing","xmp","pre","plaintext","menu","dir","ul","ol","li","hr","table","tbody","thead","tfoot","th","tr","td","caption"]
var Wo=["area","base","basefont","br","col","frame","hr","img","input","isindex","link","meta","param","embed","source","wbr","track"]
var Vo=["td","th"]
var Go=["thead","tbody","tfoot"]
var Yo=["h1","h2","h3","h4","h5","h6","p","div","address","pre","form","blockquote","center","dir","fieldset","header","footer","article","section","hgroup","aside","nav","figure"]
var Jo=["h1","h2","h3","h4","h5","h6"]
var qo=["li","dd","dt"]
var Ko=["ul","ol","dl"]
var Xo=["pre","script","textarea","style"]
var Zo=function(e){var t
return function(r){t=t||X(e,a(true))
return t.hasOwnProperty(ba(r))}}
var $o=Zo(Jo)
var ei=Zo(Ho)
var ti=function(e){return Ea(e)&&!ei(e)}
var ri=function(e){return Ea(e)&&"br"===ba(e)}
var ni=Zo(Yo)
var ai=Zo(Ko)
var oi=Zo(qo)
var ii=Zo(Wo)
var ui=Zo(Go)
var si=Zo(Vo)
var li=Zo(Xo)
var ci=function(e){return function(t){return!!t&&t.nodeType===e}}
var fi=ci(1)
var di=function(e){var t=e.toLowerCase().split(" ")
return function(e){var r,n
if(e&&e.nodeType){n=e.nodeName.toLowerCase()
for(r=0;r<t.length;r++)if(n===t[r])return true}return false}}
var vi=function(e,t){var r=t.toLowerCase().split(" ")
return function(t){var n,a
if(fi(t))for(n=0;n<r.length;n++){var o=t.ownerDocument.defaultView.getComputedStyle(t,null)
a=o?o.getPropertyValue(e):null
if(a===r[n])return true}return false}}
var mi=function(e,t){return function(r){return fi(r)&&r[e]===t}}
var gi=function(e,t){return function(t){return fi(t)&&t.hasAttribute(e)}}
var pi=function(e,t){return function(r){return fi(r)&&r.getAttribute(e)===t}}
var Ai=function(e){return fi(e)&&e.hasAttribute("data-mce-bogus")}
var hi=function(e){return fi(e)&&"all"===e.getAttribute("data-mce-bogus")}
var bi=function(e){return fi(e)&&"TABLE"===e.tagName}
var yi=function(e){return function(t){if(fi(t)){if(t.contentEditable===e)return true
if(t.getAttribute("data-mce-contenteditable")===e)return true}return false}}
var wi=ci(3)
var Ei=ci(8)
var xi=ci(9)
var Ci=di("br")
var ki=yi("true")
var Bi=yi("false")
var Ti={isText:wi,isElement:fi,isComment:Ei,isDocument:xi,isBr:Ci,isContentEditableTrue:ki,isContentEditableFalse:Bi,matchNodeNames:di,hasPropValue:mi,hasAttribute:gi,hasAttributeValue:pi,matchStyleValues:vi,isBogus:Ai,isBogusAll:hi,isTable:bi}
var Ri=function(e){var t=e.previousSibling&&"SPAN"===e.previousSibling.nodeName
var r=e.nextSibling&&"SPAN"===e.nextSibling.nodeName
return t&&r}
var Ii=function(e){return e&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")}
var Si=function(e,t){var r,n=t.childNodes
if(Ti.isElement(t)&&Ii(t))return
for(r=n.length-1;r>=0;r--)Si(e,n[r])
if(false===Ti.isDocument(t)){if(Ti.isText(t)&&t.nodeValue.length>0){var a=Qr.trim(t.nodeValue).length
if(e.isBlock(t.parentNode)||a>0)return
if(0===a&&Ri(t))return}else if(Ti.isElement(t)){n=t.childNodes
1===n.length&&Ii(n[0])&&t.parentNode.insertBefore(n[0],t)
if(n.length||ii(ga.fromDom(t)))return}e.remove(t)}return t}
var Di={trimNode:Si}
var Ni=Qr.makeMap
var Mi,Pi,_i
var Oi=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g
var Fi=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g
var Li=/[<>&\"\']/g
var Ui=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi
var Qi={128:"€",130:"‚",131:"ƒ",132:"„",133:"…",134:"†",135:"‡",136:"ˆ",137:"‰",138:"Š",139:"‹",140:"Œ",142:"Ž",145:"‘",146:"’",147:"“",148:"”",149:"•",150:"–",151:"—",152:"˜",153:"™",154:"š",155:"›",156:"œ",158:"ž",159:"Ÿ"}
Pi={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"}
_i={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"}
var zi=function(e){var t
t=ga.fromTag("div").dom()
t.innerHTML=e
return t.textContent||t.innerText||e}
var ji=function(e,t){var r,n,a
var o={}
if(e){e=e.split(",")
t=t||10
for(r=0;r<e.length;r+=2){n=String.fromCharCode(parseInt(e[r],t))
if(!Pi[n]){a="&"+e[r+1]+";"
o[n]=a
o[a]=n}}return o}}
Mi=ji("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32)
var Hi=function(e,t){return e.replace(t?Oi:Fi,function(e){return Pi[e]||e})}
var Wi=function(e){return(""+e).replace(Li,function(e){return Pi[e]||e})}
var Vi=function(e,t){return e.replace(t?Oi:Fi,function(e){if(e.length>1)return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"
return Pi[e]||"&#"+e.charCodeAt(0)+";"})}
var Gi=function(e,t,r){r=r||Mi
return e.replace(t?Oi:Fi,function(e){return Pi[e]||r[e]||e})}
var Yi=function(e,t){var r=ji(t)||Mi
var n=function(e,t){return e.replace(t?Oi:Fi,function(e){if(void 0!==Pi[e])return Pi[e]
if(void 0!==r[e])return r[e]
if(e.length>1)return"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";"
return"&#"+e.charCodeAt(0)+";"})}
var a=function(e,t){return Gi(e,t,r)}
var o=Ni(e.replace(/\+/g,","))
if(o.named&&o.numeric)return n
if(o.named){if(t)return a
return Gi}if(o.numeric)return Vi
return Hi}
var Ji=function(e){return e.replace(Ui,function(e,t){if(t){t="x"===t.charAt(0).toLowerCase()?parseInt(t.substr(1),16):parseInt(t,10)
if(t>65535){t-=65536
return String.fromCharCode(55296+(t>>10),56320+(1023&t))}return Qi[t]||String.fromCharCode(t)}return _i[e]||Mi[e]||zi(e)})}
var qi={encodeRaw:Hi,encodeAllRaw:Wi,encodeNumeric:Vi,encodeNamed:Gi,getEncodeFunc:Yi,decode:Ji}
var Ki={},Xi={}
var Zi=Qr.makeMap,$i=Qr.each,eu=Qr.extend,tu=Qr.explode,ru=Qr.inArray
var nu=function(e,t){e=Qr.trim(e)
return e?e.split(t||" "):[]}
var au=function(e){var t={}
var r,n
var a,o,i,u
var s=function(e,n,a){var o,i,u
var s=function(e,t){var r={}
var n,a
for(n=0,a=e.length;n<a;n++)r[e[n]]=t||{}
return r}
a=a||[]
n=n||""
"string"===typeof a&&(a=nu(a))
e=nu(e)
o=e.length
while(o--){i=nu([r,n].join(" "))
u={attributes:s(i),attributesOrder:i,children:s(a,Xi)}
t[e[o]]=u}}
var l=function(e,r){var n,a,o,i
e=nu(e)
n=e.length
r=nu(r)
while(n--){a=t[e[n]]
for(o=0,i=r.length;o<i;o++){a.attributes[r[o]]={}
a.attributesOrder.push(r[o])}}}
if(Ki[e])return Ki[e]
r="id accesskey class dir lang style tabindex title role"
n="address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"
a="a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"
if("html4"!==e){r+=" contenteditable contextmenu draggable dropzone hidden spellcheck translate"
n+=" article aside details dialog figure main header footer hgroup section nav"
a+=" audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"}if("html5-strict"!==e){r+=" xml:lang"
u="acronym applet basefont big font strike tt"
a=[a,u].join(" ")
$i(nu(u),function(e){s(e,"",a)})
i="center dir isindex noframes"
n=[n,i].join(" ")
o=[n,a].join(" ")
$i(nu(i),function(e){s(e,"",o)})}o=o||[n,a].join(" ")
s("html","manifest","head body")
s("head","","base command link meta noscript script style title")
s("title hr noscript br")
s("base","href target")
s("link","href rel media hreflang type sizes hreflang")
s("meta","name http-equiv content charset")
s("style","media type scoped")
s("script","src async defer type charset")
s("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",o)
s("address dt dd div caption","",o)
s("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",a)
s("blockquote","cite",o)
s("ol","reversed start type","li")
s("ul","","li")
s("li","value",o)
s("dl","","dt dd")
s("a","href target rel media hreflang type",a)
s("q","cite",a)
s("ins del","cite datetime",o)
s("img","src sizes srcset alt usemap ismap width height")
s("iframe","src name width height",o)
s("embed","src type width height")
s("object","data type typemustmatch name usemap form width height",[o,"param"].join(" "))
s("param","name value")
s("map","name",[o,"area"].join(" "))
s("area","alt coords shape href target rel media hreflang type")
s("table","border","caption colgroup thead tfoot tbody tr"+("html4"===e?" col":""))
s("colgroup","span","col")
s("col","span")
s("tbody thead tfoot","","tr")
s("tr","","td th")
s("td","colspan rowspan headers",o)
s("th","colspan rowspan headers scope abbr",o)
s("form","accept-charset action autocomplete enctype method name novalidate target",o)
s("fieldset","disabled form name",[o,"legend"].join(" "))
s("label","form for",a)
s("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width")
s("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"===e?o:a)
s("select","disabled form multiple name required size","option optgroup")
s("optgroup","disabled label","option")
s("option","disabled label selected value")
s("textarea","cols dirname disabled form maxlength name readonly required rows wrap")
s("menu","type label",[o,"li"].join(" "))
s("noscript","",o)
if("html4"!==e){s("wbr")
s("ruby","",[a,"rt rp"].join(" "))
s("figcaption","",o)
s("mark rt rp summary bdi","",a)
s("canvas","width height",o)
s("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",[o,"track source"].join(" "))
s("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",[o,"track source"].join(" "))
s("picture","","img source")
s("source","src srcset type media sizes")
s("track","kind src srclang label default")
s("datalist","",[a,"option"].join(" "))
s("article section nav aside main header footer","",o)
s("hgroup","","h1 h2 h3 h4 h5 h6")
s("figure","",[o,"figcaption"].join(" "))
s("time","datetime",a)
s("dialog","open",o)
s("command","type label icon disabled checked radiogroup command")
s("output","for form name",a)
s("progress","value max",a)
s("meter","value min max low high optimum",a)
s("details","open",[o,"summary"].join(" "))
s("keygen","autofocus challenge disabled form keytype name")}if("html5-strict"!==e){l("script","language xml:space")
l("style","xml:space")
l("object","declare classid code codebase codetype archive standby align border hspace vspace")
l("embed","align name hspace vspace")
l("param","valuetype type")
l("a","charset name rev shape coords")
l("br","clear")
l("applet","codebase archive code object alt name width height align hspace vspace")
l("img","name longdesc align border hspace vspace")
l("iframe","longdesc frameborder marginwidth marginheight scrolling align")
l("font basefont","size color face")
l("input","usemap align")
l("select","onchange")
l("textarea")
l("h1 h2 h3 h4 h5 h6 div p legend caption","align")
l("ul","type compact")
l("li","type")
l("ol dl menu dir","compact")
l("pre","width xml:space")
l("hr","align noshade size width")
l("isindex","prompt")
l("table","summary width frame rules cellspacing cellpadding align bgcolor")
l("col","width align char charoff valign")
l("colgroup","width align char charoff valign")
l("thead","align char charoff valign")
l("tr","align char charoff valign bgcolor")
l("th","axis align char charoff valign nowrap bgcolor width height")
l("form","accept")
l("td","abbr axis scope align char charoff valign nowrap bgcolor width height")
l("tfoot","align char charoff valign")
l("tbody","align char charoff valign")
l("area","nohref")
l("body","background bgcolor text link vlink alink")}if("html4"!==e){l("input button select textarea","autofocus")
l("input textarea","placeholder")
l("a","download")
l("link script img","crossorigin")
l("iframe","sandbox seamless allowfullscreen")}$i(nu("a form meter progress dfn"),function(e){t[e]&&delete t[e].children[e]})
delete t.caption.children.table
delete t.script
Ki[e]=t
return t}
var ou=function(e,t){var r
if(e){r={}
"string"===typeof e&&(e={"*":e})
$i(e,function(e,n){r[n]=r[n.toUpperCase()]="map"===t?Zi(e,/[, ]/):tu(e,/[, ]/)})}return r}
function iu(e){var t={}
var r={}
var n=[]
var a
var o
var i
var u,s,l,c,f
var d,v,m,g,p
var A={},h={}
var b=function(t,r,n){var a=e[t]
if(a)a=Zi(a,/[, ]/,Zi(a.toUpperCase(),/[, ]/))
else{a=Ki[t]
if(!a){a=Zi(r," ",Zi(r.toUpperCase()," "))
a=eu(a,n)
Ki[t]=a}}return a}
e=e||{}
i=au(e.schema)
false===e.verify_html&&(e.valid_elements="*[*]")
a=ou(e.valid_styles)
o=ou(e.invalid_styles,"map")
f=ou(e.valid_classes,"map")
u=b("whitespace_elements","pre script noscript style textarea video audio iframe object code")
s=b("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr")
l=b("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track")
c=b("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls")
v=b("non_empty_elements","td th iframe video audio object script pre code",l)
m=b("move_caret_before_on_enter_elements","table",v)
g=b("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure")
d=b("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",g)
p=b("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp")
$i((e.special||"script noscript noframes noembed title style textarea xmp").split(" "),function(e){h[e]=new RegExp("</"+e+"[^>]*>","gi")})
var y=function(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")}
var w=function(e){var r,a,o,i,u,s,l,c,f,d,v,m,g,p,A,h,b,w,E
var x=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,C=/^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,k=/[*?+]/
if(e){e=nu(e,",")
if(t["@"]){h=t["@"].attributes
b=t["@"].attributesOrder}for(r=0,a=e.length;r<a;r++){u=x.exec(e[r])
if(u){p=u[1]
f=u[2]
A=u[3]
c=u[5]
m={}
g=[]
s={attributes:m,attributesOrder:g}
"#"===p&&(s.paddEmpty=true)
"-"===p&&(s.removeEmpty=true)
"!"===u[4]&&(s.removeEmptyAttrs=true)
if(h){for(w in h)m[w]=h[w]
g.push.apply(g,b)}if(c){c=nu(c,"|")
for(o=0,i=c.length;o<i;o++){u=C.exec(c[o])
if(u){l={}
v=u[1]
d=u[2].replace(/[\\:]:/g,":")
p=u[3]
E=u[4]
if("!"===v){s.attributesRequired=s.attributesRequired||[]
s.attributesRequired.push(d)
l.required=true}if("-"===v){delete m[d]
g.splice(ru(g,d),1)
continue}if(p){if("="===p){s.attributesDefault=s.attributesDefault||[]
s.attributesDefault.push({name:d,value:E})
l.defaultValue=E}if(":"===p){s.attributesForced=s.attributesForced||[]
s.attributesForced.push({name:d,value:E})
l.forcedValue=E}"<"===p&&(l.validValues=Zi(E,"?"))}if(k.test(d)){s.attributePatterns=s.attributePatterns||[]
l.pattern=y(d)
s.attributePatterns.push(l)}else{m[d]||g.push(d)
m[d]=l}}}}if(!h&&"@"===f){h=m
b=g}if(A){s.outputName=f
t[A]=s}if(k.test(f)){s.pattern=y(f)
n.push(s)}else t[f]=s}}}}
var E=function(e){t={}
n=[]
w(e)
$i(i,function(e,t){r[t]=e.children})}
var x=function(e){var n=/^(~)?(.+)$/
if(e){Ki.text_block_elements=Ki.block_elements=null
$i(nu(e,","),function(e){var a=n.exec(e),o="~"===a[1],i=o?"span":"div",u=a[2]
r[u]=r[i]
A[u]=i
if(!o){d[u.toUpperCase()]={}
d[u]={}}if(!t[u]){var s=t[i]
s=eu({},s)
delete s.removeEmptyAttrs
delete s.removeEmpty
t[u]=s}$i(r,function(e,t){if(e[i]){r[t]=e=eu({},r[t])
e[u]=e[i]}})})}}
var C=function(t){var n=/^([+\-]?)(\w+)\[([^\]]+)\]$/
Ki[e.schema]=null
t&&$i(nu(t,","),function(e){var t=n.exec(e)
var a,o
if(t){o=t[1]
a=o?r[t[2]]:r[t[2]]={"#comment":{}}
a=r[t[2]]
$i(nu(t[3],"|"),function(e){"-"===o?delete a[e]:a[e]={}})}})}
var k=function(e){var r,a=t[e]
if(a)return a
r=n.length
while(r--){a=n[r]
if(a.pattern.test(e))return a}}
if(e.valid_elements)E(e.valid_elements)
else{$i(i,function(e,n){t[n]={attributes:e.attributes,attributesOrder:e.attributesOrder}
r[n]=e.children})
"html5"!==e.schema&&$i(nu("strong/b em/i"),function(e){e=nu(e,"/")
t[e[1]].outputName=e[0]})
$i(nu("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(e){t[e]&&(t[e].removeEmpty=true)})
$i(nu("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),function(e){t[e].paddEmpty=true})
$i(nu("span"),function(e){t[e].removeEmptyAttrs=true})}x(e.custom_elements)
C(e.valid_children)
w(e.extended_valid_elements)
C("+ol[ul|ol],+ul[ul|ol]")
$i({dd:"dl",dt:"dl",li:"ul ol",td:"tr",th:"tr",tr:"tbody thead tfoot",tbody:"table",thead:"table",tfoot:"table",legend:"fieldset",area:"map",param:"video audio object"},function(e,r){t[r]&&(t[r].parentsRequired=nu(e))})
e.invalid_elements&&$i(tu(e.invalid_elements),function(e){t[e]&&delete t[e]})
k("span")||w("span[!data-mce-type|*]")
var B=function(){return a}
var T=function(){return o}
var R=function(){return f}
var I=function(){return c}
var S=function(){return d}
var D=function(){return g}
var N=function(){return p}
var M=function(){return l}
var P=function(){return s}
var _=function(){return v}
var O=function(){return m}
var F=function(){return u}
var L=function(){return h}
var U=function(e,t){var n=r[e.toLowerCase()]
return!!(n&&n[t.toLowerCase()])}
var Q=function(e,t){var r,n
var a=k(e)
if(a){if(!t)return true
if(a.attributes[t])return true
r=a.attributePatterns
if(r){n=r.length
while(n--)if(r[n].pattern.test(e))return true}}return false}
var z=function(){return A}
return{children:r,elements:t,getValidStyles:B,getValidClasses:R,getBlockElements:S,getInvalidStyles:T,getShortEndedElements:M,getTextBlockElements:D,getTextInlineElements:N,getBoolAttrs:I,getElementRule:k,getSelfClosingElements:P,getNonEmptyElements:_,getMoveCaretBeforeOnEnterElements:O,getWhiteSpaceElements:F,getSpecialElements:L,isValidChild:U,isValid:Q,getCustomElements:z,addValidElements:w,setValidElements:E,addCustomElements:x,addValidChildren:C}}var uu=function(e,t,r,n){var a=function(e){e=parseInt(e,10).toString(16)
return e.length>1?e:"0"+e}
return"#"+a(t)+a(r)+a(n)}
function su(e,t){var r=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi
var n=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi
var a=/\s*([^:]+):\s*([^;]+);?/g
var o=/\s+$/
var i
var u={}
var s
var l
var c
var f="\ufeff"
e=e||{}
if(t){l=t.getValidStyles()
c=t.getInvalidStyles()}s=("\\\" \\' \\; \\: ; : "+f).split(" ")
for(i=0;i<s.length;i++){u[s[i]]=f+i
u[f+i]=s[i]}return{toHex:function(e){return e.replace(r,uu)},parse:function(t){var s={}
var l,c,d,v
var m=e.url_converter
var g=e.url_converter_scope||this
var p=function(e,t,r){var n,a,o,u
n=s[e+"-top"+t]
if(!n)return
a=s[e+"-right"+t]
if(!a)return
o=s[e+"-bottom"+t]
if(!o)return
u=s[e+"-left"+t]
if(!u)return
var l=[n,a,o,u]
i=l.length-1
while(i--)if(l[i]!==l[i+1])break
if(i>-1&&r)return
s[e+t]=-1===i?l[0]:l.join(" ")
delete s[e+"-top"+t]
delete s[e+"-right"+t]
delete s[e+"-bottom"+t]
delete s[e+"-left"+t]}
var A=function(e){var t,r=s[e]
if(!r)return
r=r.split(" ")
t=r.length
while(t--)if(r[t]!==r[0])return false
s[e]=r[0]
return true}
var h=function(e,t,r,n){if(!A(t))return
if(!A(r))return
if(!A(n))return
s[e]=s[t]+" "+s[r]+" "+s[n]
delete s[t]
delete s[r]
delete s[n]}
var b=function(e){v=true
return u[e]}
var y=function(e,t){v&&(e=e.replace(/\uFEFF[0-9]/g,function(e){return u[e]}))
t||(e=e.replace(/\\([\'\";:])/g,"$1"))
return e}
var w=function(e){return String.fromCharCode(parseInt(e.slice(1),16))}
var E=function(e){return e.replace(/\\[0-9a-f]+/gi,w)}
var x=function(t,r,n,a,o,i){o=o||i
if(o){o=y(o)
return"'"+o.replace(/\'/g,"\\'")+"'"}r=y(r||n||a)
if(!e.allow_script_urls){var u=r.replace(/[\s\r\n]+/g,"")
if(/(java|vb)script:/i.test(u))return""
if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(u))return""}m&&(r=m.call(g,r,"style"))
return"url('"+r.replace(/\'/g,"\\'")+"')"}
if(t){t=t.replace(/[\u0000-\u001F]/g,"")
t=t.replace(/\\[\"\';:\uFEFF]/g,b).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(e){return e.replace(/[;:]/g,b)})
while(l=a.exec(t)){a.lastIndex=l.index+l[0].length
c=l[1].replace(o,"").toLowerCase()
d=l[2].replace(o,"")
if(c&&d){c=E(c)
d=E(d)
if(-1!==c.indexOf(f)||-1!==c.indexOf('"'))continue
if(!e.allow_script_urls&&("behavior"===c||/expression\s*\(|\/\*|\*\//.test(d)))continue
"font-weight"===c&&"700"===d?d="bold":"color"!==c&&"background-color"!==c||(d=d.toLowerCase())
d=d.replace(r,uu)
d=d.replace(n,x)
s[c]=v?y(d,true):d}}p("border","",true)
p("border","-width")
p("border","-color")
p("border","-style")
p("padding","")
p("margin","")
h("border","border-width","border-style","border-color")
"medium none"===s.border&&delete s.border
"none"===s["border-image"]&&delete s["border-image"]}return s},serialize:function(e,t){var r,n,a=""
var o=function(t){var r,n,o,i
r=l[t]
if(r)for(n=0,o=r.length;n<o;n++){t=r[n]
i=e[t]
i&&(a+=(a.length>0?" ":"")+t+": "+i+";")}}
var i=function(e,t){var r
r=c["*"]
if(r&&r[e])return false
r=c[t]
if(r&&r[e])return false
return true}
if(t&&l){o("*")
o(t)}else for(r in e){n=e[r]
!n||c&&!i(r,t)||(a+=(a.length>0?" ":"")+r+": "+n+";")}return a}}}var lu=Qr.each
var cu=Qr.grep
var fu=Ie.ie
var du=/^([a-z0-9],?)+$/i
var vu=/^[ \t\r\n]*$/
var mu=function(e,t,r){var n={}
var a=t.keep_values
var o={set:function(e,n,a){t.url_converter&&(n=t.url_converter.call(t.url_converter_scope||r(),n,a,e[0]))
e.attr("data-mce-"+a,n).attr(a,n)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}}
n={style:{set:function(e,t){if(null!==t&&"object"===typeof t){e.css(t)
return}a&&e.attr("data-mce-style",t)
e.attr("style",t)},get:function(t){var r=t.attr("data-mce-style")||t.attr("style")
r=e.serialize(e.parse(r),t[0].nodeName)
return r}}}
a&&(n.href=n.src=o)
return n}
var gu=function(e,t){var r=t.attr("style")
var n=e.serialize(e.parse(r),t[0].nodeName)
n||(n=null)
t.attr("data-mce-style",n)}
var pu=function(e,t){var r,n,a=0
if(e)for(r=e.nodeType,e=e.previousSibling;e;e=e.previousSibling){n=e.nodeType
if(t&&3===n&&(n===r||!e.nodeValue.length))continue
a++
r=n}return a}
function Au(e,t){var r=this
void 0===t&&(t={})
var n
var a={}
var o=window
var i={}
var u=0
var s=true
var l=true
var c=zo(e,{contentCssCors:t.contentCssCors})
var f=[]
var d=t.schema?t.schema:iu({})
var v=su({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema)
var m=t.ownEvents?new Xe(t.proxy):Xe.Event
var g=d.getBlockElements()
var p=un.overrideDefaults(function(){return{context:e,element:Be.getRoot()}})
var A=function(e){if("string"===typeof e)return!!g[e]
if(e){var t=e.nodeType
if(t)return!!(1===t&&g[e.nodeName])}return false}
var h=function(t){if(t&&e&&"string"===typeof t){var r=e.getElementById(t)
return r&&r.id!==t?e.getElementsByName(t)[1]:r}return t}
var b=function(e){"string"===typeof e&&(e=h(e))
return p(e)}
var y=function(e,t,r){var a,o
var i=b(e)
if(i.length){a=n[t]
o=a&&a.get?a.get(i,t):i.attr(t)}"undefined"===typeof o&&(o=r||"")
return o}
var w=function(e){var t=h(e)
if(!t)return[]
return t.attributes}
var E=function(e,r,a){var o,i
""===a&&(a=null)
var u=b(e)
o=u.attr(r)
if(!u.length)return
i=n[r]
i&&i.set?i.set(u,a,r):u.attr(r,a)
o!==a&&t.onSetAttrib&&t.onSetAttrib({attrElm:u,attrName:r,attrValue:a})}
var x=function(t,r){if(!fu||1!==t.nodeType||r)return t.cloneNode(r)
if(!r){var n=e.createElement(t.nodeName)
lu(w(t),function(e){E(n,e.nodeName,y(t,e.nodeName))})
return n}return null}
var C=function(){return t.root_element||e.body}
var k=function(e){var t=e||o
var r=t.document
var n=l?r.documentElement:r.body
return{x:t.pageXOffset||n.scrollLeft,y:t.pageYOffset||n.scrollTop,w:t.innerWidth||n.clientWidth,h:t.innerHeight||n.clientHeight}}
var B=function(t,r){return Ro.getPos(e.body,h(t),r)}
var T=function(e,r,n){var a=b(e).css(r,n)
t.update_styles&&gu(v,a)}
var R=function(e,r){var n=b(e).css(r)
t.update_styles&&gu(v,n)}
var I=function(e,t,r){var n=b(e)
if(r)return n.css(t)
t=t.replace(/-(\D)/g,function(e,t){return t.toUpperCase()})
"float"===t&&(t=Ie.ie&&Ie.ie<12?"styleFloat":"cssFloat")
return n[0]&&n[0].style?n[0].style[t]:void 0}
var S=function(e){var t,r
e=h(e)
t=I(e,"width")
r=I(e,"height");-1===t.indexOf("px")&&(t=0);-1===r.indexOf("px")&&(r=0)
return{w:parseInt(t,10)||e.offsetWidth||e.clientWidth,h:parseInt(r,10)||e.offsetHeight||e.clientHeight}}
var D=function(e){var t,r
e=h(e)
t=B(e)
r=S(e)
return{x:t.x,y:t.y,w:r.w,h:r.h}}
var N=function(e,t){var r
if(!e)return false
if(!Array.isArray(e)){if("*"===t)return 1===e.nodeType
if(du.test(t)){var n=t.toLowerCase().split(/,/)
var a=e.nodeName.toLowerCase()
for(r=n.length-1;r>=0;r--)if(n[r]===a)return true
return false}if(e.nodeType&&1!==e.nodeType)return false}var o=Array.isArray(e)?e:[e]
return er(t,o[0].ownerDocument||o[0],null,o).length>0}
var M=function(e,t,r,n){var a=[]
var o
var i=h(e)
n=void 0===n
r=r||("BODY"!==C().nodeName?C().parentNode:null)
if(Qr.is(t,"string")){o=t
t="*"===t?function(e){return 1===e.nodeType}:function(e){return N(e,o)}}while(i){if(i===r||!i.nodeType||9===i.nodeType)break
if(!t||"function"===typeof t&&t(i)){if(!n)return[i]
a.push(i)}i=i.parentNode}return n?a:null}
var P=function(e,t,r){var n=M(e,t,r,false)
return n&&n.length>0?n[0]:null}
var _=function(e,t,r){var n=t
if(e){"string"===typeof t&&(n=function(e){return N(e,t)})
for(e=e[r];e;e=e[r])if("function"===typeof n&&n(e))return e}return null}
var O=function(e,t){return _(e,t,"nextSibling")}
var F=function(e,t){return _(e,t,"previousSibling")}
var L=function(r,n){return er(r,h(n)||t.root_element||e,[])}
var U=function(e,t,n){var a
var o="string"===typeof e?h(e):e
if(!o)return false
if(Qr.isArray(o)&&(o.length||0===o.length)){a=[]
lu(o,function(e,r){if(e){"string"===typeof e&&(e=h(e))
a.push(t.call(n,e,r))}})
return a}var i=n||r
return t.call(i,o)}
var Q=function(e,t){b(e).each(function(e,r){lu(t,function(e,t){E(r,t,e)})})}
var z=function(e,t){var r=b(e)
fu?r.each(function(e,r){if(false===r.canHaveHTML)return
while(r.firstChild)r.removeChild(r.firstChild)
try{r.innerHTML="<br>"+t
r.removeChild(r.firstChild)}catch(e){un("<div></div>").html("<br>"+t).contents().slice(1).appendTo(r)}return t}):r.html(t)}
var j=function(t,r,n,a,o){return U(t,function(t){var i="string"===typeof r?e.createElement(r):r
Q(i,n)
a&&("string"!==typeof a&&a.nodeType?i.appendChild(a):"string"===typeof a&&z(i,a))
return o?i:t.appendChild(i)})}
var H=function(t,r,n){return j(e.createElement(t),t,r,n,true)}
var W=qi.decode
var V=qi.encodeAllRaw
var G=function(e,t,r){var n,a=""
a+="<"+e
for(n in t)t.hasOwnProperty(n)&&null!==t[n]&&"undefined"!==typeof t[n]&&(a+=" "+n+'="'+V(t[n])+'"')
if("undefined"!==typeof r)return a+">"+r+"</"+e+">"
return a+" />"}
var Y=function(t){var r
var n=e.createElement("div")
var a=e.createDocumentFragment()
t&&(n.innerHTML=t)
while(r=n.firstChild)a.appendChild(r)
return a}
var J=function(e,t){var r=b(e)
t?r.each(function(){var e
while(e=this.firstChild)3===e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)}).remove():r.remove()
return r.length>1?r.toArray():r[0]}
var q=function(e){return U(e,function(e){var t
var r=e.attributes
for(t=r.length-1;t>=0;t--)e.removeAttributeNode(r.item(t))})}
var K=function(e){return v.parse(e)}
var X=function(e,t){return v.serialize(e,t)}
var Z=function(t){var r,n
if(Be!==Au.DOM&&e===document){if(a[t])return
a[t]=true}n=e.getElementById("mceDefaultStyles")
if(!n){n=e.createElement("style")
n.id="mceDefaultStyles"
n.type="text/css"
r=e.getElementsByTagName("head")[0]
r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n)}n.styleSheet?n.styleSheet.cssText+=t:n.appendChild(e.createTextNode(t))}
var $=function(t){var r
if(Be!==Au.DOM&&e===document){Au.DOM.loadCSS(t)
return}t||(t="")
r=e.getElementsByTagName("head")[0]
lu(t.split(","),function(e){var t
e=Qr._addCacheSuffix(e)
if(i[e])return
i[e]=true
t=H("link",{rel:"stylesheet",href:e})
r.appendChild(t)})}
var ee=function(e,t,r){b(e).toggleClass(t,r).each(function(){""===this.className&&un(this).attr("class",null)})}
var te=function(e,t){b(e).addClass(t)}
var re=function(e,t){ee(e,t,false)}
var ne=function(e,t){return b(e).hasClass(t)}
var ae=function(e){b(e).show()}
var oe=function(e){b(e).hide()}
var ie=function(e){return"none"===b(e).css("display")}
var ue=function(e){return(e||"mce_")+u++}
var se=function(e){var t="string"===typeof e?h(e):e
return Ti.isElement(t)?t.outerHTML:un("<div></div>").append(un(t).clone()).html()}
var le=function(e,t){b(e).each(function(){try{if("outerHTML"in this){this.outerHTML=t
return}}catch(e){}J(un(this).html(t),true)})}
var ce=function(e,t){var r=h(t)
return U(e,function(e){var t,n
t=r.parentNode
n=r.nextSibling
n?t.insertBefore(e,n):t.appendChild(e)
return e})}
var fe=function(e,t,r){return U(t,function(t){Qr.is(t,"array")&&(e=e.cloneNode(true))
r&&lu(cu(t.childNodes),function(t){e.appendChild(t)})
return t.parentNode.replaceChild(e,t)})}
var de=function(e,t){var r
if(e.nodeName!==t.toUpperCase()){r=H(t)
lu(w(e),function(t){E(r,t.nodeName,y(e,t.nodeName))})
fe(r,e,true)}return r||e}
var ve=function(e,t){var r,n=e
while(n){r=t
while(r&&n!==r)r=r.parentNode
if(n===r)break
n=n.parentNode}if(!n&&e.ownerDocument)return e.ownerDocument.documentElement
return n}
var me=function(e){return v.toHex(Qr.trim(e))}
var ge=function(e,t){var r,n,a,o,i,u,s=0
e=e.firstChild
if(e){i=new jo(e,e.parentNode)
t=t||(d?d.getNonEmptyElements():null)
o=d?d.getWhiteSpaceElements():{}
do{a=e.nodeType
if(Ti.isElement(e)){var l=e.getAttribute("data-mce-bogus")
if(l){e=i.next("all"===l)
continue}u=e.nodeName.toLowerCase()
if(t&&t[u]){if("br"===u){s++
e=i.next()
continue}return false}n=w(e)
r=n.length
while(r--){u=n[r].nodeName
if("name"===u||"data-mce-bookmark"===u)return false}}if(8===a)return false
if(3===a&&!vu.test(e.nodeValue))return false
if(3===a&&e.parentNode&&o[e.parentNode.nodeName]&&vu.test(e.nodeValue))return false
e=i.next()}while(e)}return s<=1}
var pe=function(){return e.createRange()}
var Ae=function(e,t,r){var n,a,o,i=pe()
if(e&&t){i.setStart(e.parentNode,pu(e))
i.setEnd(t.parentNode,pu(t))
n=i.extractContents()
i=pe()
i.setStart(t.parentNode,pu(t)+1)
i.setEnd(e.parentNode,pu(e)+1)
a=i.extractContents()
o=e.parentNode
o.insertBefore(Di.trimNode(Be,n),e)
r?o.insertBefore(r,e):o.insertBefore(t,e)
o.insertBefore(Di.trimNode(Be,a),e)
J(e)
return r||t}}
var he=function(r,n,a,i){if(Qr.isArray(r)){var u=r.length
while(u--)r[u]=he(r[u],n,a,i)
return r}!t.collect||r!==e&&r!==o||f.push([r,n,a,i])
return m.bind(r,n,a,i||Be)}
var be=function(t,r,n){var a
if(Qr.isArray(t)){a=t.length
while(a--)t[a]=be(t[a],r,n)
return t}if(f&&(t===e||t===o)){a=f.length
while(a--){var i=f[a]
t!==i[0]||r&&r!==i[1]||n&&n!==i[2]||m.unbind(i[0],i[1],i[2])}}return m.unbind(t,r,n)}
var ye=function(e,t,r){return m.fire(e,t,r)}
var we=function(e){if(e&&Ti.isElement(e)){var t=e.getAttribute("data-mce-contenteditable")
if(t&&"inherit"!==t)return t
return"inherit"!==e.contentEditable?e.contentEditable:null}return null}
var Ee=function(e){var t=C()
var r=null
for(;e&&e!==t;e=e.parentNode){r=we(e)
if(null!==r)break}return r}
var xe=function(){if(f){var e=f.length
while(e--){var t=f[e]
m.unbind(t[0],t[1],t[2])}}er.setDocument&&er.setDocument()}
var Ce=function(e,t){while(e){if(t===e)return true
e=e.parentNode}return false}
var ke=function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset}
var Be={doc:e,settings:t,win:o,files:i,stdMode:s,boxModel:l,styleSheetLoader:c,boundEvents:f,styles:v,schema:d,events:m,isBlock:A,$:p,$$:b,root:null,clone:x,getRoot:C,getViewPort:k,getRect:D,getSize:S,getParent:P,getParents:M,get:h,getNext:O,getPrev:F,select:L,is:N,add:j,create:H,createHTML:G,createFragment:Y,remove:J,setStyle:T,getStyle:I,setStyles:R,removeAllAttribs:q,setAttrib:E,setAttribs:Q,getAttrib:y,getPos:B,parseStyle:K,serializeStyle:X,addStyle:Z,loadCSS:$,addClass:te,removeClass:re,hasClass:ne,toggleClass:ee,show:ae,hide:oe,isHidden:ie,uniqueId:ue,setHTML:z,getOuterHTML:se,setOuterHTML:le,decode:W,encode:V,insertAfter:ce,replace:fe,rename:de,findCommonAncestor:ve,toHex:me,run:U,getAttribs:w,isEmpty:ge,createRng:pe,nodeIndex:pu,split:Ae,bind:he,unbind:be,fire:ye,getContentEditable:we,getContentEditableParent:Ee,destroy:xe,isChildOf:Ce,dumpRng:ke}
n=mu(v,t,function(){return Be})
return Be}(function(e){e.DOM=e(document)
e.nodeIndex=pu})(Au||(Au={}))
var hu=Au
var bu=hu.DOM
var yu=Qr.each,wu=Qr.grep
var Eu=function(e){return"function"===typeof e}
var xu=function(){var e=0
var t=1
var r=2
var n=3
var a={}
var o=[]
var i={}
var u=[]
var s=0
var l=function(e,t,r){var n=bu
var a,o
var i=function(){n.remove(o)
a&&(a.onreadystatechange=a.onload=a=null)
t()}
var u=function(){Eu(r)?r():"undefined"!==typeof console&&console.log&&console.log("Failed to load script: "+e)}
o=n.uniqueId()
a=document.createElement("script")
a.id=o
a.type="text/javascript"
a.src=Qr._addCacheSuffix(e)
a.onload=i
a.onerror=u;(document.getElementsByTagName("head")[0]||document.body).appendChild(a)}
this.isDone=function(e){return a[e]===r}
this.markDone=function(e){a[e]=r}
this.add=this.load=function(t,r,n,u){var s=a[t]
if(void 0===s){o.push(t)
a[t]=e}if(r){i[t]||(i[t]=[])
i[t].push({success:r,failure:u,scope:n||this})}}
this.remove=function(e){delete a[e]
delete i[e]}
this.loadQueue=function(e,t,r){this.loadScripts(o,e,t,r)}
this.loadScripts=function(e,o,c,f){var d
var v=[]
var m=function(e,t){yu(i[t],function(t){Eu(t[e])&&t[e].call(t.scope)})
i[t]=void 0}
u.push({success:o,failure:f,scope:c||this})
d=function(){var o=wu(e)
e.length=0
yu(o,function(e){if(a[e]===r){m("success",e)
return}if(a[e]===n){m("failure",e)
return}if(a[e]!==t){a[e]=t
s++
l(e,function(){a[e]=r
s--
m("success",e)
d()},function(){a[e]=n
s--
v.push(e)
m("failure",e)
d()})}})
if(!s){var i=u.slice(0)
u.length=0
yu(i,function(e){0===v.length?Eu(e.success)&&e.success.call(e.scope):Eu(e.failure)&&e.failure.call(e.scope,v)})}}
d()}}
xu.ScriptLoader=new xu
var Cu=Qr.each
function ku(){var e=this
var t=[]
var r={}
var n={}
var a=[]
var o=function(e){if(n[e])return n[e].instance
return}
var i=function(e){var t
n[e]&&(t=n[e].dependencies)
return t||[]}
var u=function(e,t){var n=ku.language
if(n&&false!==ku.languageLoad){if(t){t=","+t+","
if(-1!==t.indexOf(","+n.substr(0,2)+","))n=n.substr(0,2)
else if(-1===t.indexOf(","+n+","))return}xu.ScriptLoader.add(r[e]+"/langs/"+n+".js")}}
var s=function(e,r,o){t.push(r)
n[e]={instance:r,dependencies:o}
var i=F(a,function(t){return t.name===e})
a=i.fail
Cu(i.pass,function(e){e.callback()})
return r}
var l=function(e){delete r[e]
delete n[e]}
var c=function(e,t){if("object"===typeof t)return t
return"string"===typeof e?{prefix:"",resource:t,suffix:""}:{prefix:e.prefix,resource:t,suffix:e.suffix}}
var f=function(t,r){var n=e.urls[t]
Cu(r,function(e){xu.ScriptLoader.add(n+"/"+e)})}
var d=function(e,t,r,n){var a=i(e)
Cu(a,function(e){var r=c(t,e)
v(r.resource,r,void 0,void 0)})
r&&(n?r.call(n):r.call(xu))}
var v=function(e,t,a,o,i){if(r[e])return
var u="string"===typeof t?t:t.prefix+t.resource+t.suffix
0!==u.indexOf("/")&&-1===u.indexOf("://")&&(u=ku.baseURL+"/"+u)
r[e]=u.substring(0,u.lastIndexOf("/"))
n[e]?d(e,t,a,o):xu.ScriptLoader.add(u,function(){return d(e,t,a,o)},o,i)}
var m=function(e,t){n.hasOwnProperty(e)?t():a.push({name:e,callback:t})}
return{items:t,urls:r,lookup:n,_listeners:a,get:o,dependencies:i,requireLangPack:u,add:s,remove:l,createUrl:c,addComponents:f,load:v,waitFor:m}}(function(e){e.PluginManager=e()
e.ThemeManager=e()})(ku||(ku={}))
var Bu=function(e,t){var r=vo(e)
r.each(function(r){r.dom().insertBefore(t.dom(),e.dom())})}
var Tu=function(e,t){var r=po(e)
r.fold(function(){var r=vo(e)
r.each(function(e){Iu(e,t)})},function(e){Bu(e,t)})}
var Ru=function(e,t){var r=wo(e)
r.fold(function(){Iu(e,t)},function(r){e.dom().insertBefore(t.dom(),r.dom())})}
var Iu=function(e,t){e.dom().appendChild(t.dom())}
var Su=function(e,t){Bu(e,t)
Iu(t,e)}
var Du=function(e,t){_(t,function(t){Bu(e,t)})}
var Nu=function(e,t){_(t,function(t){Iu(e,t)})}
var Mu=function(e){e.dom().textContent=""
_(bo(e),function(e){Pu(e)})}
var Pu=function(e){var t=e.dom()
null!==t.parentNode&&t.parentNode.removeChild(t)}
var _u=function(e){var t=bo(e)
t.length>0&&Du(e,t)
Pu(e)}
var Ou=function(e,t){var r=null
var n=function(){if(null!==r){clearTimeout(r)
r=null}}
var a=function(){var n=[]
for(var a=0;a<arguments.length;a++)n[a]=arguments[a]
null===r&&(r=setTimeout(function(){e.apply(null,n)
r=null},t))}
return{cancel:n,throttle:a}}
var Fu=function(e,t){var r=null
var n=function(){if(null!==r){clearTimeout(r)
r=null}}
var a=function(){var n=[]
for(var a=0;a<arguments.length;a++)n[a]=arguments[a]
null!==r&&clearTimeout(r)
r=setTimeout(function(){e.apply(null,n)
r=null},t)}
return{cancel:n,throttle:a}}
var Lu=function(e){var t=e
var r=function(){return t}
var n=function(e){t=e}
var a=function(){return Lu(r())}
return{get:r,set:n,clone:a}}
var Uu=function(e,t){var r=Pa(e,t)
return void 0===r||""===r?[]:r.split(" ")}
var Qu=function(e,t,r){var n=Uu(e,t)
var a=n.concat([r])
Na(e,t,a.join(" "))
return true}
var zu=function(e,t,r){var n=L(Uu(e,t),function(e){return e!==r})
n.length>0?Na(e,t,n.join(" ")):Oa(e,t)
return false}
var ju=function(e){return void 0!==e.dom().classList}
var Hu=function(e){return Uu(e,"class")}
var Wu=function(e,t){return Qu(e,"class",t)}
var Vu=function(e,t){return zu(e,"class",t)}
var Gu=function(e,t){ju(e)?e.dom().classList.add(t):Wu(e,t)}
var Yu=function(e){var t=ju(e)?e.dom().classList:Hu(e)
0===t.length&&Oa(e,"class")}
var Ju=function(e,t){if(ju(e)){var r=e.dom().classList
r.remove(t)}else Vu(e,t)
Yu(e)}
var qu=function(e,t){return ju(e)&&e.dom().classList.contains(t)}
var Ku=function(e,t){var r=[]
_(bo(e),function(e){t(e)&&(r=r.concat([e]))
r=r.concat(Ku(e,t))})
return r}
var Xu=function(e,t){return ro(t,e)}
function Zu(e,t,r,n,a){return e(r,n)?A.some(r):k(a)&&a(r)?A.none():t(r,n,a)}var $u=function(e,t,r){var n=e.dom()
var o=k(r)?r:a(false)
while(n.parentNode){n=n.parentNode
var i=ga.fromDom(n)
if(t(i))return A.some(i)
if(o(i))break}return A.none()}
var es=function(e,t,r){var n=function(e){return t(e)}
return Zu(n,$u,e,t,r)}
var ts=function(e,t,r){return $u(e,function(e){return eo(e,t)},r)}
var rs=function(e,t){return no(t,e)}
var ns=function(e,t,r){return Zu(eo,ts,e,t,r)}
var as=a("mce-annotation")
var os=a("data-mce-annotation")
var is=a("data-mce-annotation-uid")
var us=function(e,t){var r=e.selection.getRng()
var n=ga.fromDom(r.startContainer)
var a=ga.fromDom(e.getBody())
var o=t.fold(function(){return"."+as()},function(e){return"["+os()+'="'+e+'"]'})
var i=yo(n,r.startOffset).getOr(n)
var u=ns(i,o,function(e){return ao(e,a)})
var s=function(e,t){return _a(e,t)?A.some(Pa(e,t)):A.none()}
return u.bind(function(t){return s(t,""+is()).bind(function(r){return s(t,""+os()).map(function(t){var n=ls(e,r)
return{uid:r,name:t,elements:n}})})})}
var ss=function(e){return Ea(e)&&qu(e,as())}
var ls=function(e,t){var r=ga.fromDom(e.getBody())
return Xu(r,"["+is()+'="'+t+'"]')}
var cs=function(e,t){var r=ga.fromDom(e.getBody())
var n=Xu(r,"["+os()+'="'+t+'"]')
var a={}
_(n,function(e){var t=Pa(e,is())
var r=a.hasOwnProperty(t)?a[t]:[]
a[t]=r.concat([e])})
return a}
var fs=function(e,t){var r=Lu({})
var n=function(){return{listeners:[],previous:Lu(A.none())}}
var a=function(e,t){o(e,function(e){t(e)
return e})}
var o=function(e,t){var a=r.get()
var o=a.hasOwnProperty(e)?a[e]:n()
var i=t(o)
a[e]=i
r.set(a)}
var i=function(e,t,r){a(e,function(n){_(n.listeners,function(n){return n(true,e,{uid:t,nodes:P(r,function(e){return e.dom()})})})})}
var u=function(e){a(e,function(t){_(t.listeners,function(t){return t(false,e)})})}
var s=Fu(function(){var t=r.get()
var n=Z(Ca(t))
_(n,function(t){o(t,function(r){var n=r.previous.get()
us(e,A.some(t)).fold(function(){if(n.isSome()){u(t)
r.previous.set(A.none())}},function(e){var t=e.uid,a=e.name,o=e.elements
if(!n.is(t)){i(a,t,o)
r.previous.set(A.some(t))}})
return{previous:r.previous,listeners:r.listeners}})})},30)
e.on("remove",function(){s.cancel()})
e.on("nodeChange",function(){s.throttle()})
var l=function(e,t){o(e,function(e){return{previous:e.previous,listeners:e.listeners.concat([t])}})}
return{addListener:l}}
var ds=function(e,t){var r=function(e){var r=A.from(e.attributes.map[os()])
return r.bind(t.lookup)}
e.on("init",function(){e.serializer.addNodeFilter("span",function(e){_(e,function(e){r(e).each(function(t){false===t.persistent&&e.unwrap()})})})})}
var vs=function(){var e={}
var t=function(t,r){e[t]={name:t,settings:r}}
var r=function(t){return e.hasOwnProperty(t)?A.from(e[t]).map(function(e){return e.settings}):A.none()}
return{register:t,lookup:r}}
function ms(e,t){var r={}
for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n])
if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0
for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r}var gs=0
var ps=function(e){var t=new Date
var r=t.getTime()
var n=Math.floor(1e9*Math.random())
gs++
return e+"_"+n+gs+String(r)}
var As=function(e,t){_(t,function(t){Gu(e,t)})}
var hs=function(e,t){return ga.fromDom(e.dom().cloneNode(t))}
var bs=function(e){return hs(e,false)}
var ys=function(e){return hs(e,true)}
var ws=function(e,t){var r=t||document
var n=r.createElement("div")
n.innerHTML=e
return bo(ga.fromDom(n))}
var Es=function(e){return e.dom().innerHTML}
var xs=function(e,t){var r=lo(e)
var n=r.dom()
var a=ga.fromDom(n.createDocumentFragment())
var o=ws(t,n)
Nu(a,o)
Mu(e)
Iu(e,a)}
var Cs="\ufeff"
var ks=function(e){return e===Cs}
var Bs=function(e){return e.replace(new RegExp(Cs,"g"),"")}
var Ts={isZwsp:ks,ZWSP:Cs,trim:Bs}
var Rs=Ti.isElement
var Is=Ti.isText
var Ss=function(e){Is(e)&&(e=e.parentNode)
return Rs(e)&&e.hasAttribute("data-mce-caret")}
var Ds=function(e){return Is(e)&&Ts.isZwsp(e.data)}
var Ns=function(e){return Ss(e)||Ds(e)}
var Ms=function(e){return e.firstChild!==e.lastChild||!Ti.isBr(e.firstChild)}
var Ps=function(e,t){var r,n,a,o
r=e.ownerDocument
a=r.createTextNode(Ts.ZWSP)
o=e.parentNode
if(t){n=e.previousSibling
if(Is(n)){if(Ns(n))return n
if(Qs(n))return n.splitText(n.data.length-1)}o.insertBefore(a,e)}else{n=e.nextSibling
if(Is(n)){if(Ns(n))return n
if(Us(n)){n.splitText(1)
return n}}e.nextSibling?o.insertBefore(a,e.nextSibling):o.appendChild(a)}return a}
var _s=function(e){var t=e.container()
return e&&Ti.isText(t)&&t.data.charAt(e.offset())===Ts.ZWSP}
var Os=function(e){var t=e.container()
return e&&Ti.isText(t)&&t.data.charAt(e.offset()-1)===Ts.ZWSP}
var Fs=function(){var e=document.createElement("br")
e.setAttribute("data-mce-bogus","1")
return e}
var Ls=function(e,t,r){var n,a,o
n=t.ownerDocument
a=n.createElement(e)
a.setAttribute("data-mce-caret",r?"before":"after")
a.setAttribute("data-mce-bogus","all")
a.appendChild(Fs())
o=t.parentNode
r?o.insertBefore(a,t):t.nextSibling?o.insertBefore(a,t.nextSibling):o.appendChild(a)
return a}
var Us=function(e){return Is(e)&&e.data[0]===Ts.ZWSP}
var Qs=function(e){return Is(e)&&e.data[e.data.length-1]===Ts.ZWSP}
var zs=function(e){var t=e.getElementsByTagName("br")
var r=t[t.length-1]
Ti.isBogus(r)&&r.parentNode.removeChild(r)}
var js=function(e){if(e&&e.hasAttribute("data-mce-caret")){zs(e)
e.removeAttribute("data-mce-caret")
e.removeAttribute("data-mce-bogus")
e.removeAttribute("style")
e.removeAttribute("_moz_abspos")
return e}return null}
var Hs=function(e){return Ss(e.startContainer)}
var Ws=Ti.isContentEditableTrue
var Vs=Ti.isContentEditableFalse
var Gs=Ti.isBr
var Ys=Ti.isText
var Js=Ti.matchNodeNames("script style textarea")
var qs=Ti.matchNodeNames("img input textarea hr iframe video audio object")
var Ks=Ti.matchNodeNames("table")
var Xs=Ns
var Zs=function(e){if(Xs(e))return false
if(Ys(e)){if(Js(e.parentNode))return false
return true}return qs(e)||Gs(e)||Ks(e)||el(e)}
var $s=function(e){return Ti.isElement(e)&&"true"===e.getAttribute("unselectable")}
var el=function(e){return false===$s(e)&&Vs(e)}
var tl=function(e,t){for(e=e.parentNode;e&&e!==t;e=e.parentNode){if(el(e))return false
if(Ws(e))return true}return true}
var rl=function(e){if(!el(e))return false
return true!==Q(te(e.getElementsByTagName("*")),function(e,t){return e||Ws(t)},false)}
var nl=function(e){return qs(e)||rl(e)}
var al=function(e,t){return Zs(e)&&tl(e,t)}
var ol=Math.round
var il=function(e){if(!e)return{left:0,top:0,bottom:0,right:0,width:0,height:0}
return{left:ol(e.left),top:ol(e.top),bottom:ol(e.bottom),right:ol(e.right),width:ol(e.width),height:ol(e.height)}}
var ul=function(e,t){e=il(e)
if(t)e.right=e.left
else{e.left=e.left+e.width
e.right=e.left}e.width=0
return e}
var sl=function(e,t){return e.left===t.left&&e.top===t.top&&e.bottom===t.bottom&&e.right===t.right}
var ll=function(e,t,r){return e>=0&&e<=Math.min(t.height,r.height)/2}
var cl=function(e,t){if(e.bottom-e.height/2<t.top)return true
if(e.top>t.bottom)return false
return ll(t.top-e.bottom,e,t)}
var fl=function(e,t){if(e.top>t.bottom)return true
if(e.bottom<t.top)return false
return ll(t.bottom-e.top,e,t)}
var dl=function(e,t,r){return t>=e.left&&t<=e.right&&r>=e.top&&r<=e.bottom}
var vl=function(e,t){return t.left>e.left&&t.right<e.right?0:t.left<e.left?t.left-e.left:t.right-e.right}
var ml=function(e,t){return t.top>e.top&&t.bottom<e.bottom?0:t.top<e.top?t.top-e.top:t.bottom-e.bottom}
var gl=function(e,t){return{x:vl(e,t),y:ml(e,t)}}
var pl=function(e){var t=e.startContainer,r=e.startOffset
if(t.hasChildNodes()&&e.endOffset===r+1)return t.childNodes[r]
return null}
var Al=function(e,t){if(1===e.nodeType&&e.hasChildNodes()){t>=e.childNodes.length&&(t=e.childNodes.length-1)
e=e.childNodes[t]}return e}
var hl=new RegExp("[̀-ͯ҃-҇҈-҉֑-ֽֿׁ-ׂׄ-ׇׅؐ-ًؚ-ٰٟۖ-ۜ۟-ۤۧ-۪ۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣣ-ंऺ़ु-ै्॑-ॗॢ-ॣঁ়াু-ৄ্ৗৢ-ৣਁ-ਂ਼ੁ-ੂੇ-ੈੋ-੍ੑੰ-ੱੵઁ-ં઼ુ-ૅે-ૈ્ૢ-ૣଁ଼ାିୁ-ୄ୍ୖୗୢ-ୣஂாீ்ௗఀా-ీె-ైొ-్ౕ-ౖౢ-ౣಁ಼ಿೂೆೌ-್ೕ-ೖೢ-ೣഁാു-ൄ്ൗൢ-ൣ්ාි-ුූෟัิ-ฺ็-๎ັິ-ູົ-ຼ່-ໍ༘-ཱ༹༙༵༷-ཾྀ-྄྆-྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္-်ွ-ှၘ-ၙၞ-ၠၱ-ၴႂႅ-ႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒ-ᝓᝲ-ᝳ឴-឵ិ-ួំ៉-៓៝᠋-᠍ᢩᤠ-ᤢᤧ-ᤨᤲ᤹-᤻ᨗ-ᨘᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽᪾ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀ-ᮁᮢ-ᮥᮨ-ᮩ᮫-ᮭ᯦ᯨ-ᯩᯭᯯ-ᯱᰬ-ᰳᰶ-᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸-᳹᷀-᷵᷼-᷿‌-‍⃐-⃜⃝-⃠⃡⃢-⃤⃥-⃰⳯-⵿⳱ⷠ-〪ⷿ-〭〮-゙〯-゚꙯꙰-꙲ꙴ-꙽ꚞ-ꚟ꛰-꛱ꠂ꠆ꠋꠥ-ꠦ꣄꣠-꣱ꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱ-ꨲꨵ-ꨶꩃꩌꩼꪰꪲ-ꪴꪷ-ꪸꪾ-꪿꫁ꫬ-ꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯ﾞ-ﾟ]")
var bl=function(e){return"string"===typeof e&&e.charCodeAt(0)>=768&&hl.test(e)}
var yl=function(e,t){var r=[]
for(var n=0;n<e.length;n++){var a=e[n]
if(!a.isSome())return A.none()
r.push(a.getOrDie())}return A.some(t.apply(null,r))}
var wl=[].slice
var El=function(){var e=[]
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]
var r=wl.call(arguments)
return function(e){for(var t=0;t<r.length;t++)if(r[t](e))return true
return false}}
var xl=function(){var e=[]
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]
var r=wl.call(arguments)
return function(e){for(var t=0;t<r.length;t++)if(!r[t](e))return false
return true}}
var Cl={and:xl,or:El}
var kl=Ti.isElement
var Bl=Zs
var Tl=Ti.matchStyleValues("display","block table")
var Rl=Ti.matchStyleValues("float","left right")
var Il=Cl.and(kl,Bl,u(Rl))
var Sl=u(Ti.matchStyleValues("white-space","pre pre-line pre-wrap"))
var Dl=Ti.isText
var Nl=Ti.isBr
var Ml=hu.nodeIndex
var Pl=Al
var _l=function(e){return"createRange"in e?e.createRange():hu.DOM.createRng()}
var Ol=function(e){return e&&/[\r\n\t ]/.test(e)}
var Fl=function(e){return!!e.setStart&&!!e.setEnd}
var Ll=function(e){var t=e.startContainer
var r=e.startOffset
var n
if(Ol(e.toString())&&Sl(t.parentNode)&&Ti.isText(t)){n=t.data
if(Ol(n[r-1])||Ol(n[r+1]))return true}return false}
var Ul=function(e){var t=e.ownerDocument
var r=_l(t)
var n=t.createTextNode(" ")
var a=e.parentNode
var o
a.insertBefore(n,e)
r.setStart(n,0)
r.setEnd(n,1)
o=il(r.getBoundingClientRect())
a.removeChild(n)
return o}
var Ql=function(e){var t=e.startContainer
var r=e.endContainer
var n=e.startOffset
var a=e.endOffset
if(t===r&&Ti.isText(r)&&0===n&&1===a){var o=e.cloneRange()
o.setEndAfter(r)
return jl(o)}return null}
var zl=function(e){return 0===e.left&&0===e.right&&0===e.top&&0===e.bottom}
var jl=function(e){var t,r
r=e.getClientRects()
t=r.length>0?il(r[0]):il(e.getBoundingClientRect())
if(!Fl(e)&&Nl(e)&&zl(t))return Ul(e)
if(zl(t)&&Fl(e))return Ql(e)
return t}
var Hl=function(e,t){var r=ul(e,t)
r.width=1
r.right=r.left+1
return r}
var Wl=function(e){var t=[]
var r,n
var a=function(e){if(0===e.height)return
if(t.length>0&&sl(e,t[t.length-1]))return
t.push(e)}
var o=function(e,r){var n=_l(e.ownerDocument)
if(r<e.data.length){if(bl(e.data[r]))return t
if(bl(e.data[r-1])){n.setStart(e,r)
n.setEnd(e,r+1)
if(!Ll(n)){a(Hl(jl(n),false))
return t}}}if(r>0){n.setStart(e,r-1)
n.setEnd(e,r)
Ll(n)||a(Hl(jl(n),false))}if(r<e.data.length){n.setStart(e,r)
n.setEnd(e,r+1)
Ll(n)||a(Hl(jl(n),true))}}
if(Dl(e.container())){o(e.container(),e.offset())
return t}if(kl(e.container()))if(e.isAtEnd()){n=Pl(e.container(),e.offset())
Dl(n)&&o(n,n.data.length)
Il(n)&&!Nl(n)&&a(Hl(jl(n),false))}else{n=Pl(e.container(),e.offset())
Dl(n)&&o(n,0)
if(Il(n)&&e.isAtEnd()){a(Hl(jl(n),false))
return t}r=Pl(e.container(),e.offset()-1)
Il(r)&&!Nl(r)&&(Tl(r)||Tl(n)||!Il(n))&&a(Hl(jl(r),false))
Il(n)&&a(Hl(jl(n),true))}return t}
function Vl(e,t,r){var n=function(){if(Dl(e))return 0===t
return 0===t}
var o=function(){if(Dl(e))return t>=e.data.length
return t>=e.childNodes.length}
var i=function(){var r
r=_l(e.ownerDocument)
r.setStart(e,t)
r.setEnd(e,t)
return r}
var u=function(){r||(r=Wl(Vl(e,t)))
return r}
var s=function(){return u().length>0}
var l=function(r){return r&&e===r.container()&&t===r.offset()}
var c=function(r){return Pl(e,r?t-1:t)}
return{container:a(e),offset:a(t),toRange:i,getClientRects:u,isVisible:s,isAtStart:n,isAtEnd:o,isEqual:l,getNode:c}}(function(e){e.fromRangeStart=function(t){return e(t.startContainer,t.startOffset)}
e.fromRangeEnd=function(t){return e(t.endContainer,t.endOffset)}
e.after=function(t){return e(t.parentNode,Ml(t)+1)}
e.before=function(t){return e(t.parentNode,Ml(t))}
e.isAbove=function(e,t){return yl([$(t.getClientRects()),ee(e.getClientRects())],cl).getOr(false)}
e.isBelow=function(e,t){return yl([ee(t.getClientRects()),$(e.getClientRects())],fl).getOr(false)}
e.isAtStart=function(e){return!!e&&e.isAtStart()}
e.isAtEnd=function(e){return!!e&&e.isAtEnd()}
e.isTextPosition=function(e){return!!e&&Ti.isText(e.container())}
e.isElementPosition=function(t){return false===e.isTextPosition(t)}})(Vl||(Vl={}))
var Gl=Vl
var Yl=Ti.isText
var Jl=Ti.isBogus
var ql=hu.nodeIndex
var Kl=function(e){var t=e.parentNode
if(Jl(t))return Kl(t)
return t}
var Xl=function(e){if(!e)return[]
return Tr.reduce(e.childNodes,function(e,t){Jl(t)&&"BR"!==t.nodeName?e=e.concat(Xl(t)):e.push(t)
return e},[])}
var Zl=function(e,t){while(e=e.previousSibling){if(!Yl(e))break
t+=e.data.length}return t}
var $l=function(e){return function(t){return e===t}}
var ec=function(e){var t,r,n
t=Xl(Kl(e))
r=Tr.findIndex(t,$l(e),e)
t=t.slice(0,r+1)
n=Tr.reduce(t,function(e,r,n){Yl(r)&&Yl(t[n-1])&&e++
return e},0)
t=Tr.filter(t,Ti.matchNodeNames(e.nodeName))
r=Tr.findIndex(t,$l(e),e)
return r-n}
var tc=function(e){var t
t=Yl(e)?"text()":e.nodeName.toLowerCase()
return t+"["+ec(e)+"]"}
var rc=function(e,t,r){var n=[]
for(t=t.parentNode;t!==e;t=t.parentNode){if(r&&r(t))break
n.push(t)}return n}
var nc=function(e,t){var r,n,a,o,i,s=[]
r=t.container()
n=t.offset()
if(Yl(r))a=Zl(r,n)
else{o=r.childNodes
if(n>=o.length){a="after"
n=o.length-1}else a="before"
r=o[n]}s.push(tc(r))
i=rc(e,r)
i=Tr.filter(i,u(Ti.isBogus))
s=s.concat(Tr.map(i,function(e){return tc(e)}))
return s.reverse().join("/")+","+a}
var ac=function(e,t,r){var n=Xl(e)
n=Tr.filter(n,function(e,t){return!Yl(e)||!Yl(n[t-1])})
n=Tr.filter(n,Ti.matchNodeNames(t))
return n[r]}
var oc=function(e,t){var r,n=e,a=0
while(Yl(n)){r=n.data.length
if(t>=a&&t<=a+r){e=n
t-=a
break}if(!Yl(n.nextSibling)){e=n
t=r
break}a+=r
n=n.nextSibling}Yl(e)&&t>e.data.length&&(t=e.data.length)
return Gl(e,t)}
var ic=function(e,t){var r,n,a
if(!t)return null
r=t.split(",")
t=r[0].split("/")
a=r.length>1?r[1]:"before"
n=Tr.reduce(t,function(e,t){t=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t)
if(!t)return null
"text()"===t[1]&&(t[1]="#text")
return ac(e,t[1],parseInt(t[2],10))},e)
if(!n)return null
if(!Yl(n)){a="after"===a?ql(n)+1:ql(n)
return Gl(n.parentNode,a)}return oc(n,parseInt(a,10))}
var uc=Ti.isContentEditableFalse
var sc=function(e,t,r){var n,a
a=e(t.data.slice(0,r)).length
for(n=t.previousSibling;n&&Ti.isText(n);n=n.previousSibling)a+=e(n.data).length
return a}
var lc=function(e,t,r,n,a){var o=n[a?"startContainer":"endContainer"]
var i=n[a?"startOffset":"endOffset"]
var u=[]
var s,l=0
var c=e.getRoot()
if(Ti.isText(o))u.push(r?sc(t,o,i):i)
else{s=o.childNodes
if(i>=s.length&&s.length){l=1
i=Math.max(0,s.length-1)}u.push(e.nodeIndex(s[i],r)+l)}for(;o&&o!==c;o=o.parentNode)u.push(e.nodeIndex(o,r))
return u}
var cc=function(e,t,r,n){var a=t.dom,o={}
o.start=lc(a,e,r,n,true)
t.isCollapsed()||(o.end=lc(a,e,r,n,false))
return o}
var fc=function(e){Ti.isText(e)&&0===e.data.length&&e.parentNode.removeChild(e)}
var dc=function(e,t,r){var n=0
Qr.each(e.select(t),function(e){if("all"===e.getAttribute("data-mce-bogus"))return
if(e===r)return false
n++})
return n}
var vc=function(e,t){var r,n,a
var o=t?"start":"end"
r=e[o+"Container"]
n=e[o+"Offset"]
if(Ti.isElement(r)&&"TR"===r.nodeName){a=r.childNodes
r=a[Math.min(t?n:n-1,a.length-1)]
if(r){n=t?0:r.childNodes.length
e["set"+(t?"Start":"End")](r,n)}}}
var mc=function(e){vc(e,true)
vc(e,false)
return e}
var gc=function(e,t){var r
if(Ti.isElement(e)){e=Al(e,t)
if(uc(e))return e}if(Ns(e)){Ti.isText(e)&&Ss(e)&&(e=e.parentNode)
r=e.previousSibling
if(uc(r))return r
r=e.nextSibling
if(uc(r))return r}}
var pc=function(e){return gc(e.startContainer,e.startOffset)||gc(e.endContainer,e.endOffset)}
var Ac=function(e,t,r){var n=r.getNode()
var a=n?n.nodeName:null
var o=r.getRng()
if(uc(n)||"IMG"===a)return{name:a,index:dc(r.dom,a,n)}
var i=pc(o)
if(i){a=i.tagName
return{name:a,index:dc(r.dom,a,i)}}return cc(e,r,t,o)}
var hc=function(e){var t=e.getRng()
return{start:nc(e.dom.getRoot(),Gl.fromRangeStart(t)),end:nc(e.dom.getRoot(),Gl.fromRangeEnd(t))}}
var bc=function(e){return{rng:e.getRng()}}
var yc=function(e,t,r){var n={"data-mce-type":"bookmark",id:t,style:"overflow:hidden;line-height:0px"}
return r?e.create("span",n,"&#xFEFF;"):e.create("span",n)}
var wc=function(e,t){var r=e.dom
var n=e.getRng()
var a=r.uniqueId()
var o=e.isCollapsed()
var i=e.getNode()
var u=i.nodeName
if("IMG"===u)return{name:u,index:dc(r,u,i)}
var s=mc(n.cloneRange())
if(!o){s.collapse(false)
var l=yc(r,a+"_end",t)
s.insertNode(l)
fc(l.nextSibling)}n=mc(n)
n.collapse(true)
var c=yc(r,a+"_start",t)
n.insertNode(c)
fc(c.previousSibling)
fc(c.nextSibling)
e.moveToBookmark({id:a,keep:1})
return{id:a}}
var Ec=function(e,t,r){return 2===t?Ac(Ts.trim,r,e):3===t?hc(e):t?bc(e):wc(e,false)}
var xc={getBookmark:Ec,getUndoBookmark:i(Ac,o,true),getPersistentBookmark:wc}
var Cc="_mce_caret"
var kc=function(e){return Ti.isElement(e)&&e.id===Cc}
var Bc=function(e,t){while(t&&t!==e){if(t.id===Cc)return t
t=t.parentNode}return null}
var Tc=Ti.isElement
var Rc=Ti.isText
var Ic=function(e){var t=e.parentNode
t&&t.removeChild(e)}
var Sc=function(e){try{return e.nodeValue}catch(e){return""}}
var Dc=function(e,t){0===t.length?Ic(e):e.nodeValue=t}
var Nc=function(e){var t=Ts.trim(e)
return{count:e.length-t.length,text:t}}
var Mc=function(e,t){Uc(e)
return t}
var Pc=function(e,t){var r=Nc(e.data.substr(0,t.offset()))
var n=Nc(e.data.substr(t.offset()))
var a=r.text+n.text
if(a.length>0){Dc(e,a)
return Gl(e,t.offset()-r.count)}return t}
var _c=function(e,t){var r=t.container()
var n=D(te(r.childNodes),e).map(function(e){return e<t.offset()?Gl(r,t.offset()-1):t}).getOr(t)
Uc(e)
return n}
var Oc=function(e,t){return Rc(e)&&t.container()===e?Pc(e,t):Mc(e,t)}
var Fc=function(e,t){return t.container()===e.parentNode?_c(e,t):Mc(e,t)}
var Lc=function(e,t){return Gl.isTextPosition(t)?Oc(e,t):Fc(e,t)}
var Uc=function(e){Tc(e)&&Ns(e)&&(Ms(e)?e.removeAttribute("data-mce-caret"):Ic(e))
if(Rc(e)){var t=Ts.trim(Sc(e))
Dc(e,t)}}
var Qc={removeAndReposition:Lc,remove:Uc}
var zc=la.detect().browser
var jc=Ti.isContentEditableFalse
var Hc=function(e){return Ti.isElement(e)&&/^(TD|TH)$/i.test(e.tagName)}
var Wc=function(e,t,r){var n=ul(t.getBoundingClientRect(),r)
var a,o,i,u,s
if("BODY"===e.tagName){a=e.ownerDocument.documentElement
o=e.scrollLeft||a.scrollLeft
i=e.scrollTop||a.scrollTop}else{s=e.getBoundingClientRect()
o=e.scrollLeft-s.left
i=e.scrollTop-s.top}n.left+=o
n.right+=o
n.top+=i
n.bottom+=i
n.width=1
u=t.offsetWidth-t.clientWidth
if(u>0){r&&(u*=-1)
n.left+=u
n.right+=u}return n}
var Vc=function(e){var t,r,n,a,o
t=un("*[contentEditable=false]",e)
for(a=0;a<t.length;a++){r=t[a]
n=r.previousSibling
if(Qs(n)){o=n.data
1===o.length?n.parentNode.removeChild(n):n.deleteData(o.length-1,1)}n=r.nextSibling
if(Us(n)){o=n.data
1===o.length?n.parentNode.removeChild(n):n.deleteData(0,1)}}}
var Gc=function(e,t,r){var n=Lu(A.none())
var a,o
var i=function(r,a){var i,l
u()
if(Hc(a))return null
if(!t(a)){o=Ps(a,r)
l=a.ownerDocument.createRange()
if(jc(o.nextSibling)){l.setStart(o,0)
l.setEnd(o,0)}else{l.setStart(o,1)
l.setEnd(o,1)}return l}o=Ls("p",a,r)
i=Wc(e,a,r)
un(o).css("top",i.top)
var c=un('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(i).appendTo(e)[0]
n.set(A.some({caret:c,element:a,before:r}))
n.get().each(function(e){r&&un(e.caret).addClass("mce-visual-caret-before")})
s()
l=a.ownerDocument.createRange()
l.setStart(o,0)
l.setEnd(o,0)
return l}
var u=function(){Vc(e)
if(o){Qc.remove(o)
o=null}n.get().each(function(e){un(e.caret).remove()
n.set(A.none())})
clearInterval(a)}
var s=function(){a=Ue.setInterval(function(){r()?un("div.mce-visual-caret",e).toggleClass("mce-visual-caret-hidden"):un("div.mce-visual-caret",e).addClass("mce-visual-caret-hidden")},500)}
var l=function(){n.get().each(function(t){var r=Wc(e,t.element,t.before)
un(t.caret).css(r)})}
var c=function(){return Ue.clearInterval(a)}
var f=function(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"}
return{show:i,hide:u,getCss:f,reposition:l,destroy:c}}
var Yc=function(){return zc.isIE()||zc.isEdge()||zc.isFirefox()}
var Jc=function(e){return jc(e)||Ti.isTable(e)&&Yc()}
var qc=function(e){return function(t){return e===t}}
var Kc=qc(" ")
var Xc=function(e){return/^[\r\n\t ]$/.test(e)}
var Zc=function(e){return!Xc(e)&&!Kc(e)}
var $c=Ti.isContentEditableFalse
var ef=Ti.matchStyleValues("display","block table table-cell table-caption list-item")
var tf=Ns
var rf=Ss
var nf=Ti.isElement
var af=Zs
var of=function(e){return e>0}
var uf=function(e){return e<0}
var sf=function(e,t){var r
while(r=e(t))if(!rf(r))return r
return null}
var lf=function(e,t,r,n,a){var o=new jo(e,n)
if(uf(t)){if($c(e)||rf(e)){e=sf(o.prev,true)
if(r(e))return e}while(e=sf(o.prev,a))if(r(e))return e}if(of(t)){if($c(e)||rf(e)){e=sf(o.next,true)
if(r(e))return e}while(e=sf(o.next,a))if(r(e))return e}return null}
var cf=function(e,t){while(e&&e!==t){if(ef(e))return e
e=e.parentNode}return null}
var ff=function(e,t,r){return cf(e.container(),r)===cf(t.container(),r)}
var df=function(e,t){var r,n
if(!t)return null
r=t.container()
n=t.offset()
if(!nf(r))return null
return r.childNodes[n+e]}
var vf=function(e,t){var r=t.ownerDocument.createRange()
if(e){r.setStartBefore(t)
r.setEndBefore(t)}else{r.setStartAfter(t)
r.setEndAfter(t)}return r}
var mf=function(e,t,r){return cf(t,e)===cf(r,e)}
var gf=function(e,t,r){var n,a
a=e?"previousSibling":"nextSibling"
while(r&&r!==t){n=r[a]
tf(n)&&(n=n[a])
if($c(n)){if(mf(t,n,r))return n
break}if(af(n))break
r=r.parentNode}return null}
var pf=i(vf,true)
var Af=i(vf,false)
var hf=function(e,t,r){var n,a,o,u
var s=i(gf,true,t)
var l=i(gf,false,t)
a=r.startContainer
o=r.startOffset
if(Ss(a)){nf(a)||(a=a.parentNode)
u=a.getAttribute("data-mce-caret")
if("before"===u){n=a.nextSibling
if(Jc(n))return pf(n)}if("after"===u){n=a.previousSibling
if(Jc(n))return Af(n)}}if(!r.collapsed)return r
if(Ti.isText(a)){if(tf(a)){if(1===e){n=l(a)
if(n)return pf(n)
n=s(a)
if(n)return Af(n)}if(-1===e){n=s(a)
if(n)return Af(n)
n=l(a)
if(n)return pf(n)}return r}if(Qs(a)&&o>=a.data.length-1){if(1===e){n=l(a)
if(n)return pf(n)}return r}if(Us(a)&&o<=1){if(-1===e){n=s(a)
if(n)return Af(n)}return r}if(o===a.data.length){n=l(a)
if(n)return pf(n)
return r}if(0===o){n=s(a)
if(n)return Af(n)
return r}}return r}
var bf=function(e,t){var r=df(e,t)
return $c(r)&&!Ti.isBogusAll(r)}
var yf=function(e,t){return Ti.isTable(df(e,t))}
var wf=function(e,t){return A.from(df(e?0:-1,t)).filter($c)}
var Ef=function(e,t,r){var n=hf(e,t,r)
if(-1===e)return Vl.fromRangeStart(n)
return Vl.fromRangeEnd(n)}
var xf=i(bf,0)
var Cf=i(bf,-1)
var kf=i(yf,0)
var Bf=i(yf,-1)
var Tf=function(e,t,r){return A.from(r.container()).filter(Ti.isText).exists(function(n){var a=e?0:-1
return t(n.data.charAt(r.offset()+a))})}
var Rf=i(Tf,true,Xc)
var If=i(Tf,false,Xc)
var Sf=function(e){return A.from(e.getNode()).map(ga.fromDom)}
var Df=function(e){return A.from(e.getNode(true)).map(ga.fromDom)}
var Nf;(function(e){e[e["Backwards"]=-1]="Backwards"
e[e["Forwards"]=1]="Forwards"})(Nf||(Nf={}))
var Mf=Ti.isContentEditableFalse
var Pf=Ti.isText
var _f=Ti.isElement
var Of=Ti.isBr
var Ff=Zs
var Lf=nl
var Uf=al
var Qf=function(e,t){var r=[]
while(e&&e!==t){r.push(e)
e=e.parentNode}return r}
var zf=function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length)return e.childNodes[t]
return null}
var jf=function(e,t){if(of(e)){if(Ff(t.previousSibling)&&!Pf(t.previousSibling))return Gl.before(t)
if(Pf(t))return Gl(t,0)}if(uf(e)){if(Ff(t.nextSibling)&&!Pf(t.nextSibling))return Gl.after(t)
if(Pf(t))return Gl(t,t.data.length)}if(uf(e)){if(Of(t))return Gl.before(t)
return Gl.after(t)}return Gl.before(t)}
var Hf=function(e,t){var r=t.nextSibling
return r&&Ff(r)?Pf(r)?Gl(r,0):Gl.before(r):Wf(Nf.Forwards,Gl.after(t),e)}
var Wf=function(e,t,r){var n,o,i
var u,s
if(!_f(r)||!t)return null
if(t.isEqual(Gl.after(r))&&r.lastChild){s=Gl.after(r.lastChild)
if(uf(e)&&Ff(r.lastChild)&&_f(r.lastChild))return Of(r.lastChild)?Gl.before(r.lastChild):s}else s=t
var l=s.container()
var c=s.offset()
if(Pf(l)){if(uf(e)&&c>0)return Gl(l,--c)
if(of(e)&&c<l.length)return Gl(l,++c)
n=l}else{if(uf(e)&&c>0){o=zf(l,c-1)
if(Ff(o)){if(!Lf(o)){i=lf(o,e,Uf,o)
if(i){if(Pf(i))return Gl(i,i.data.length)
return Gl.after(i)}}if(Pf(o))return Gl(o,o.data.length)
return Gl.before(o)}}if(of(e)&&c<l.childNodes.length){o=zf(l,c)
if(Ff(o)){if(Of(o))return Hf(r,o)
if(!Lf(o)){i=lf(o,e,Uf,o)
if(i){if(Pf(i))return Gl(i,0)
return Gl.before(i)}}if(Pf(o))return Gl(o,0)
return Gl.after(o)}}n=o||s.getNode()}if(of(e)&&s.isAtEnd()||uf(e)&&s.isAtStart()){n=lf(n,e,a(true),r,true)
if(Uf(n,r))return jf(e,n)}o=lf(n,e,Uf,r)
u=Tr.last(L(Qf(l,r),Mf))
if(u&&(!o||!u.contains(o))){s=of(e)?Gl.after(u):Gl.before(u)
return s}if(o)return jf(e,o)
return null}
var Vf=function(e){return{next:function(t){return Wf(Nf.Forwards,t,e)},prev:function(t){return Wf(Nf.Backwards,t,e)}}}
var Gf=function(e,t,r){var n=e?Gl.before(r):Gl.after(r)
return $f(e,t,n)}
var Yf=function(e){return Ti.isBr(e)?Gl.before(e):Gl.after(e)}
var Jf=function(e){return Gl.isTextPosition(e)?0===e.offset():Zs(e.getNode())}
var qf=function(e){if(Gl.isTextPosition(e)){var t=e.container()
return e.offset()===t.data.length}return Zs(e.getNode(true))}
var Kf=function(e,t){return!Gl.isTextPosition(e)&&!Gl.isTextPosition(t)&&e.getNode()===t.getNode(true)}
var Xf=function(e){return!Gl.isTextPosition(e)&&Ti.isBr(e.getNode())}
var Zf=function(e,t,r){return e?!Kf(t,r)&&!Xf(t)&&qf(t)&&Jf(r):!Kf(r,t)&&Jf(t)&&qf(r)}
var $f=function(e,t,r){var n=Vf(t)
return A.from(e?n.next(r):n.prev(r))}
var ed=function(e,t,r){return $f(e,t,r).bind(function(n){return ff(r,n,t)&&Zf(e,r,n)?$f(e,t,n):A.some(n)})}
var td=function(e,t){var r=e?t.firstChild:t.lastChild
return Ti.isText(r)?A.some(Gl(r,e?0:r.data.length)):r?Zs(r)?A.some(e?Gl.before(r):Yf(r)):Gf(e,t,r):A.none()}
var rd=i($f,true)
var nd=i($f,false)
var ad={fromPosition:$f,nextPosition:rd,prevPosition:nd,navigate:ed,positionIn:td,firstPositionIn:i(td,true),lastPositionIn:i(td,false)}
var od=function(e){return"string"===typeof e.start}
var id=function(e){return e.hasOwnProperty("rng")}
var ud=function(e){return e.hasOwnProperty("id")}
var sd=function(e){return e.hasOwnProperty("name")}
var ld=function(e){return Qr.isArray(e.start)}
var cd=function(e,t){!e.isBlock(t)||t.innerHTML||Ie.ie||(t.innerHTML='<br data-mce-bogus="1" />')
return t}
var fd=function(e,t){var r,n
r=e.createRng()
n=ic(e.getRoot(),t.start)
r.setStart(n.container(),n.offset())
n=ic(e.getRoot(),t.end)
r.setEnd(n.container(),n.offset())
return r}
var dd=function(e,t){var r=e.ownerDocument.createTextNode(Ts.ZWSP)
e.appendChild(r)
t.setStart(r,0)
t.setEnd(r,0)}
var vd=function(e){return false===e.hasChildNodes()}
var md=function(e,t){return ad.lastPositionIn(e).fold(function(){return false},function(e){t.setStart(e.container(),e.offset())
t.setEnd(e.container(),e.offset())
return true})}
var gd=function(e,t,r){if(vd(t)&&Bc(e,t)){dd(t,r)
return true}return false}
var pd=function(e,t,r,n){var a=r[t?"start":"end"]
var o,i,u,s
var l=e.getRoot()
if(a){u=a[0]
for(i=l,o=a.length-1;o>=1;o--){s=i.childNodes
if(gd(l,i,n))return true
if(a[o]>s.length-1){if(gd(l,i,n))return true
return md(i,n)}i=s[a[o]]}3===i.nodeType&&(u=Math.min(a[0],i.nodeValue.length))
1===i.nodeType&&(u=Math.min(a[0],i.childNodes.length))
t?n.setStart(i,u):n.setEnd(i,u)}return true}
var Ad=function(e){return Ti.isText(e)&&e.data.length>0}
var hd=function(e,t,r){var n,a,o,i,u=e.get(r.id+"_"+t)
var s=r.keep
var l,c
if(u){n=u.parentNode
if("start"===t){if(s)if(u.hasChildNodes()){n=u.firstChild
a=1}else if(Ad(u.nextSibling)){n=u.nextSibling
a=0}else if(Ad(u.previousSibling)){n=u.previousSibling
a=u.previousSibling.data.length}else{n=u.parentNode
a=e.nodeIndex(u)+1}else a=e.nodeIndex(u)
l=n
c=a}else{if(s)if(u.hasChildNodes()){n=u.firstChild
a=1}else if(Ad(u.previousSibling)){n=u.previousSibling
a=u.previousSibling.data.length}else{n=u.parentNode
a=e.nodeIndex(u)}else a=e.nodeIndex(u)
l=n
c=a}if(!s){i=u.previousSibling
o=u.nextSibling
Qr.each(Qr.grep(u.childNodes),function(e){Ti.isText(e)&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))})
while(u=e.get(r.id+"_"+t))e.remove(u,true)
if(i&&o&&i.nodeType===o.nodeType&&Ti.isText(i)&&!Ie.opera){a=i.nodeValue.length
i.appendData(o.nodeValue)
e.remove(o)
if("start"===t){l=i
c=a}else{l=i
c=a}}}return A.some(Gl(l,c))}return A.none()}
var bd=function(e,t){return e.isSome()?e:t}
var yd=function(e,t){var r=e.createRng()
return pd(e,true,t,r)&&pd(e,false,t,r)?A.some(r):A.none()}
var wd=function(e,t){var r=hd(e,"start",t)
var n=hd(e,"end",t)
return yl([r,bd(n,r)],function(t,r){var n=e.createRng()
n.setStart(cd(e,t.container()),t.offset())
n.setEnd(cd(e,r.container()),r.offset())
return n})}
var Ed=function(e,t){return A.from(e.select(t.name)[t.index]).map(function(t){var r=e.createRng()
r.selectNode(t)
return r})}
var xd=function(e,t){var r=e.dom
if(t){if(ld(t))return yd(r,t)
if(od(t))return A.some(fd(r,t))
if(ud(t))return wd(r,t)
if(sd(t))return Ed(r,t)
if(id(t))return A.some(t.rng)}return A.none()}
var Cd={resolve:xd}
var kd=function(e,t,r){return xc.getBookmark(e,t,r)}
var Bd=function(e,t){Cd.resolve(e,t).each(function(t){e.setRng(t)})}
var Td=function(e){return Ti.isElement(e)&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")}
var Rd={getBookmark:kd,moveToBookmark:Bd,isBookmarkNode:Td}
var Id=function(e){return e&&/^(IMG)$/.test(e.nodeName)}
var Sd=function(e,t,r){var n=r.startOffset
var a,o,i,u=r.startContainer
if(r.startContainer===r.endContainer&&Id(r.startContainer.childNodes[r.startOffset]))return
if(1===u.nodeType){i=u.childNodes
if(n<i.length){u=i[n]
a=new jo(u,e.getParent(u,e.isBlock))}else{u=i[i.length-1]
a=new jo(u,e.getParent(u,e.isBlock))
a.next(true)}for(o=a.current();o;o=a.next())if(3===o.nodeType&&!Pd(o)){r.setStart(o,0)
t.setRng(r)
return}}}
var Dd=function(e,t,r){if(e){t=t?"nextSibling":"previousSibling"
for(e=r?e:e[t];e;e=e[t])if(1===e.nodeType||!Pd(e))return e}}
var Nd=function(e,t){t.nodeType&&(t=t.nodeName)
return!!e.schema.getTextBlockElements()[t.toLowerCase()]}
var Md=function(e,t,r){return e.schema.isValidChild(t,r)}
var Pd=function(e){return e&&3===e.nodeType&&/^([\t \r\n]+|)$/.test(e.nodeValue)}
var _d=function(e,t){"string"!==typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,function(e,r){return t[r]||e}))
return e}
var Od=function(e,t){e=e||""
t=t||""
e=""+(e.nodeName||e)
t=""+(t.nodeName||t)
return e.toLowerCase()===t.toLowerCase()}
var Fd=function(e,t,r){"color"!==r&&"backgroundColor"!==r||(t=e.toHex(t))
"fontWeight"===r&&700===t&&(t="bold")
"fontFamily"===r&&(t=t.replace(/[\'\"]/g,"").replace(/,\s+/g,","))
return""+t}
var Ld=function(e,t,r){return Fd(e,e.getStyle(t,r),r)}
var Ud=function(e,t){var r
e.getParent(t,function(t){r=e.getStyle(t,"text-decoration")
return r&&"none"!==r})
return r}
var Qd=function(e,t,r){return e.getParents(t,r,e.getRoot())}
var zd={isInlineBlock:Id,moveStart:Sd,getNonWhiteSpaceSibling:Dd,isTextBlock:Nd,isValid:Md,isWhiteSpaceNode:Pd,replaceVars:_d,isEq:Od,normalizeStyleValue:Fd,getStyle:Ld,getTextDecoration:Ud,getParents:Qd}
var jd=Rd.isBookmarkNode
var Hd=zd.getParents,Wd=zd.isWhiteSpaceNode,Vd=zd.isTextBlock
var Gd=function(e,t){"undefined"===typeof t&&(t=3===e.nodeType?e.length:e.childNodes.length)
while(e&&e.hasChildNodes()){e=e.childNodes[t]
e&&(t=3===e.nodeType?e.length:e.childNodes.length)}return{node:e,offset:t}}
var Yd=function(e,t){var r=Gd(e,t)
if(r.node){while(r.node&&0===r.offset&&r.node.previousSibling)r=Gd(r.node.previousSibling)
if(r.node&&r.offset>0&&3===r.node.nodeType&&" "===r.node.nodeValue.charAt(r.offset-1)&&r.offset>1){e=r.node
e.splitText(r.offset-1)}}return e}
var Jd=function(e){return"BR"===e.nodeName&&e.getAttribute("data-mce-bogus")&&!e.nextSibling}
var qd=function(e,t){var r=t
while(r){if(1===r.nodeType&&e.getContentEditable(r))return"false"===e.getContentEditable(r)?r:t
r=r.parentNode}return t}
var Kd=function(e,t,r,n){var a,o
var i=r.nodeValue
"undefined"===typeof n&&(n=e?i.length:0)
if(e){a=i.lastIndexOf(" ",n)
o=i.lastIndexOf(" ",n)
a=a>o?a:o;-1!==a&&!t&&(a<n||!e)&&a<=i.length&&a++}else{a=i.indexOf(" ",n)
o=i.indexOf(" ",n)
a=-1!==a&&(-1===o||a<o)?a:o}return a}
var Xd=function(e,t,r,n,a,o){var i,u,s,l
if(3===r.nodeType){s=Kd(a,o,r,n)
if(-1!==s)return{container:r,offset:s}
l=r}i=new jo(r,e.getParent(r,e.isBlock)||t)
while(u=i[a?"prev":"next"]())if(3!==u.nodeType||jd(u.parentNode)){if(e.isBlock(u)||zd.isEq(u,"BR"))break}else{l=u
s=Kd(a,o,u)
if(-1!==s)return{container:u,offset:s}}if(l){n=a?0:l.length
return{container:l,offset:n}}}
var Zd=function(e,t,r,n,a){var o,i,u,s
3===n.nodeType&&0===n.nodeValue.length&&n[a]&&(n=n[a])
o=Hd(e,n)
for(i=0;i<o.length;i++)for(u=0;u<t.length;u++){s=t[u]
if("collapsed"in s&&s.collapsed!==r.collapsed)continue
if(e.is(o[i],s.selector))return o[i]}return n}
var $d=function(e,t,r,n){var a
var o=e.dom
var i=o.getRoot()
t[0].wrapper||(a=o.getParent(r,t[0].block,i))
if(!a){var u=o.getParent(r,"LI,TD,TH")
a=o.getParent(3===r.nodeType?r.parentNode:r,function(t){return t!==i&&Vd(e,t)},u)}a&&t[0].wrapper&&(a=Hd(o,a,"ul,ol").reverse()[0]||a)
if(!a){a=r
while(a[n]&&!o.isBlock(a[n])){a=a[n]
if(zd.isEq(a,"br"))break}}return a||r}
var ev=function(e,t,r,n,a,o,i){var u,s,l,c,f
u=s=i?r:a
c=i?"previousSibling":"nextSibling"
f=e.getRoot()
if(3===u.nodeType&&!Wd(u)&&(i?n>0:o<u.nodeValue.length))return u
while(true){if(!t[0].block_expand&&e.isBlock(s))return s
for(l=s[c];l;l=l[c])if(!jd(l)&&!Wd(l)&&!Jd(l))return s
if(s===f||s.parentNode===f){u=s
break}s=s.parentNode}return u}
var tv=function(e,t,r,n){var a,o=t.startContainer,i=t.startOffset,u=t.endContainer,s=t.endOffset
var l=e.dom
if(1===o.nodeType&&o.hasChildNodes()){o=Al(o,i)
3===o.nodeType&&(i=0)}if(1===u.nodeType&&u.hasChildNodes()){u=Al(u,t.collapsed?s:s-1)
3===u.nodeType&&(s=u.nodeValue.length)}o=qd(l,o)
u=qd(l,u)
if(jd(o.parentNode)||jd(o)){o=jd(o)?o:o.parentNode
o=t.collapsed?o.previousSibling||o:o.nextSibling||o
3===o.nodeType&&(i=t.collapsed?o.length:0)}if(jd(u.parentNode)||jd(u)){u=jd(u)?u:u.parentNode
u=t.collapsed?u.nextSibling||u:u.previousSibling||u
3===u.nodeType&&(s=t.collapsed?0:u.length)}if(t.collapsed){a=Xd(l,e.getBody(),o,i,true,n)
if(a){o=a.container
i=a.offset}a=Xd(l,e.getBody(),u,s,false,n)
if(a){u=a.container
s=a.offset}}r[0].inline&&(u=n?u:Yd(u,s))
if(r[0].inline||r[0].block_expand){r[0].inline&&3===o.nodeType&&0!==i||(o=ev(l,r,o,i,u,s,true))
r[0].inline&&3===u.nodeType&&s!==u.nodeValue.length||(u=ev(l,r,o,i,u,s,false))}if(r[0].selector&&false!==r[0].expand&&!r[0].inline){o=Zd(l,r,t,o,"previousSibling")
u=Zd(l,r,t,u,"nextSibling")}if(r[0].block||r[0].selector){o=$d(e,r,o,"previousSibling")
u=$d(e,r,u,"nextSibling")
if(r[0].block){l.isBlock(o)||(o=ev(l,r,o,i,u,s,true))
l.isBlock(u)||(u=ev(l,r,o,i,u,s,false))}}if(1===o.nodeType){i=l.nodeIndex(o)
o=o.parentNode}if(1===u.nodeType){s=l.nodeIndex(u)+1
u=u.parentNode}return{startContainer:o,startOffset:i,endContainer:u,endOffset:s}}
var rv={expandRng:tv}
var nv=Qr.each
var av=function(e,t){var r=e.childNodes
t--
t>r.length-1?t=r.length-1:t<0&&(t=0)
return r[t]||e}
var ov=function(e,t,r){var n=t.startContainer
var a=t.startOffset
var o=t.endContainer
var i=t.endOffset
var u
var s
var l
var c
var f
var d
var v
v=e.select("td[data-mce-selected],th[data-mce-selected]")
if(v.length>0){nv(v,function(e){r([e])})
return}var m=function(e){var t
t=e[0]
3===t.nodeType&&t===n&&a>=t.nodeValue.length&&e.splice(0,1)
t=e[e.length-1]
0===i&&e.length>0&&t===o&&3===t.nodeType&&e.splice(e.length-1,1)
return e}
var g=function(e,t,r){var n=[]
for(;e&&e!==r;e=e[t])n.push(e)
return n}
var p=function(e,t){do{if(e.parentNode===t)return e
e=e.parentNode}while(e)}
var A=function(e,t,n){var a=n?"nextSibling":"previousSibling"
for(c=e,f=c.parentNode;c&&c!==t;c=f){f=c.parentNode
d=g(c===e?c:c[a],a)
if(d.length){n||d.reverse()
r(m(d))}}}
1===n.nodeType&&n.hasChildNodes()&&(n=n.childNodes[a])
1===o.nodeType&&o.hasChildNodes()&&(o=av(o,i))
if(n===o)return r(m([n]))
u=e.findCommonAncestor(n,o)
for(c=n;c;c=c.parentNode){if(c===o)return A(n,u,true)
if(c===u)break}for(c=o;c;c=c.parentNode){if(c===n)return A(o,u)
if(c===u)break}s=p(n,u)||n
l=p(o,u)||o
A(n,s,true)
d=g(s===n?s:s.nextSibling,"nextSibling",l===o?l.nextSibling:l)
d.length&&r(m(d))
A(o,l)}
var iv={walk:ov}
var uv=function(){return"\ufeff"}
function sv(e,t){var r=function(r){if(!e(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return i(r).getOr("")}
var n=function(e){try{return a(e)}catch(e){return A.none()}}
var a=function(t){return e(t)?A.from(t.dom().nodeValue):A.none()}
var o=la.detect().browser
var i=o.isIE()&&10===o.version.major?n:a
var u=function(r,n){if(!e(r))throw new Error("Can only set raw "+t+" value of a "+t+" node")
r.dom().nodeValue=n}
return{get:r,getOption:i,set:u}}var lv=sv(xa,"text")
var cv=function(e){return lv.get(e)}
var fv=function(e){return xa(e)&&cv(e)===uv()}
var dv=function(e,t,r,n){return vo(t).fold(function(){return"skipping"},function(a){return"br"===n||fv(t)?"valid":ss(t)?"existing":kc(t)?"caret":zd.isValid(e,r,n)&&zd.isValid(e,ba(a),r)?"valid":"invalid-child"})}
var vv=function(e){return 3===e.startContainer.nodeType&&e.startContainer.nodeValue.length>=e.startOffset&&" "===e.startContainer.nodeValue[e.startOffset]}
var mv=function(e,t){var r=rv.expandRng(e,t,[{inline:true}],vv(t))
t.setStart(r.startContainer,r.startOffset)
t.setEnd(r.endContainer,r.endOffset)
e.selection.setRng(t)}
var gv=function(e,t,r,n){var a=t.uid,o=void 0===a?ps("mce-annotation"):a,i=ms(t,["uid"])
var u=ga.fromTag("span",e)
Gu(u,as())
Na(u,""+is(),o)
Na(u,""+os(),r)
var s=n(o,i),l=s.attributes,c=void 0===l?{}:l,f=s.classes,d=void 0===f?[]:f
Ma(u,c)
As(u,d)
return u}
var pv=function(e,t,r,n,a){var o=[]
var i=gv(e.getDoc(),a,r,n)
var u=Lu(A.none())
var s=function(){u.set(A.none())}
var l=function(){return u.get().getOrThunk(function(){var e=bs(i)
o.push(e)
u.set(A.some(e))
return e})}
var c=function(e){_(e,f)}
var f=function(t){var r=dv(e,t,"span",ba(t))
switch(r){case"invalid-child":s()
var n=bo(t)
c(n)
s()
break
case"valid":var a=l()
Su(t,a)}}
var d=function(e){var t=P(e,ga.fromDom)
c(t)}
iv.walk(e.dom,t,function(e){s()
d(e)})
return o}
var Av=function(e,t,r,n){e.undoManager.transact(function(){var a=e.selection.getRng()
a.collapsed&&mv(e,a)
if(e.selection.getRng().collapsed){var o=gv(e.getDoc(),n,t,r.decorate)
xs(o," ")
e.selection.getRng().insertNode(o.dom())
e.selection.select(o.dom())}else{var i=xc.getPersistentBookmark(e.selection,false)
var u=e.selection.getRng()
pv(e,u,t,r.decorate,n)
e.selection.moveToBookmark(i)}})}
function hv(e){var t=vs()
ds(e,t)
var r=fs(e,t)
return{register:function(e,r){t.register(e,r)},annotate:function(r,n){t.lookup(r).each(function(t){Av(e,r,t,n)})},annotationChanged:function(e,t){r.addListener(e,t)},remove:function(t){us(e,A.some(t)).each(function(e){var t=e.elements
_(t,_u)})},getAll:function(t){var r=cs(e,t)
return Ta(r,function(e){return P(e,function(e){return e.dom()})})}}}var bv=function(e){return e.firstChild&&e.firstChild===e.lastChild}
var yv=function(e){return"br"===e.name||" "===e.value}
var wv=function(e,t){var r=e.getBlockElements()
return r[t.name]&&bv(t)&&yv(t.firstChild)}
var Ev=function(e,t){var r=e.getNonEmptyElements()
return t&&(t.isEmpty(r)||wv(e,t))}
var xv=function(e,t){var r=t.firstChild
var n=t.lastChild
r&&"meta"===r.name&&(r=r.next)
n&&"mce_marker"===n.attr("id")&&(n=n.prev)
Ev(e,n)&&(n=n.prev)
if(!r||r!==n)return false
return"ul"===r.name||"ol"===r.name}
var Cv=function(e){var t=e.firstChild
var r=e.lastChild
t&&"META"===t.nodeName&&t.parentNode.removeChild(t)
r&&"mce_marker"===r.id&&r.parentNode.removeChild(r)
return e}
var kv=function(e,t,r){var n=t.serialize(r)
var a=e.createFragment(n)
return Cv(a)}
var Bv=function(e){return Qr.grep(e.childNodes,function(e){return"LI"===e.nodeName})}
var Tv=function(e){return" "===e.data||Ti.isBr(e)}
var Rv=function(e){return e&&e.firstChild&&e.firstChild===e.lastChild&&Tv(e.firstChild)}
var Iv=function(e){return!e.firstChild||Rv(e)}
var Sv=function(e){return e.length>0&&Iv(e[e.length-1])?e.slice(0,-1):e}
var Dv=function(e,t){var r=e.getParent(t,e.isBlock)
return r&&"LI"===r.nodeName?r:null}
var Nv=function(e,t){return!!Dv(e,t)}
var Mv=function(e,t){var r=t.cloneRange()
var n=t.cloneRange()
r.setStartBefore(e)
n.setEndAfter(e)
return[r.cloneContents(),n.cloneContents()]}
var Pv=function(e,t){var r=Gl.before(e)
var n=Vf(t)
var a=n.next(r)
return a?a.toRange():null}
var _v=function(e,t){var r=Gl.after(e)
var n=Vf(t)
var a=n.prev(r)
return a?a.toRange():null}
var Ov=function(e,t,r,n){var a=Mv(e,n)
var o=e.parentNode
o.insertBefore(a[0],e)
Qr.each(t,function(t){o.insertBefore(t,e)})
o.insertBefore(a[1],e)
o.removeChild(e)
return _v(t[t.length-1],r)}
var Fv=function(e,t,r){var n=e.parentNode
Qr.each(t,function(t){n.insertBefore(t,e)})
return Pv(e,r)}
var Lv=function(e,t,r,n){n.insertAfter(t.reverse(),e)
return _v(t[0],r)}
var Uv=function(e,t,r,n){var a=kv(t,e,n)
var o=Dv(t,r.startContainer)
var i=Sv(Bv(a.firstChild))
var u=1,s=2
var l=t.getRoot()
var c=function(e){var n=Gl.fromRangeStart(r)
var a=Vf(t.getRoot())
var i=e===u?a.prev(n):a.next(n)
return!i||Dv(t,i.getNode())!==o}
if(c(u))return Fv(o,i,l)
if(c(s))return Lv(o,i,l,t)
return Ov(o,i,l,r)}
var Qv={isListFragment:xv,insertAtCaret:Uv,isParentBlockLi:Nv,trimListItems:Sv,listItems:Bv}
var zv=Qr.each
var jv=function(e){this.compare=function(t,r){if(t.nodeName!==r.nodeName)return false
var n=function(t){var r={}
zv(e.getAttribs(t),function(n){var a=n.nodeName.toLowerCase()
0!==a.indexOf("_")&&"style"!==a&&0!==a.indexOf("data-")&&(r[a]=e.getAttrib(t,a))})
return r}
var a=function(e,t){var r,n
for(n in e)if(e.hasOwnProperty(n)){r=t[n]
if("undefined"===typeof r)return false
if(e[n]!==r)return false
delete t[n]}for(n in t)if(t.hasOwnProperty(n))return false
return true}
if(!a(n(t),n(r)))return false
if(!a(e.parseStyle(e.getAttrib(t,"style")),e.parseStyle(e.getAttrib(r,"style"))))return false
return!Rd.isBookmarkNode(t)&&!Rd.isBookmarkNode(r)}}
var Hv=function(e){var t=[]
var r=e.dom()
while(r){t.push(ga.fromDom(r))
r=r.lastChild}return t}
var Wv=function(e){var t=Xu(e,"br")
var r=L(Hv(e).slice(-1),ri)
t.length===r.length&&_(r,Pu)}
var Vv=function(e){Mu(e)
Iu(e,ga.fromHtml('<br data-mce-bogus="1">'))}
var Gv=function(e){return xa(e)?" "===cv(e):ri(e)}
var Yv=function(e){return 1===L(bo(e),Gv).length}
var Jv=function(e){Eo(e).each(function(t){go(t).each(function(r){ei(e)&&ri(t)&&ei(r)&&Pu(t)})})}
var qv={removeTrailingBr:Wv,fillWithPaddingBr:Vv,isPaddedElement:Yv,trimBlockTrailingBr:Jv}
var Kv=Qr.makeMap
function Xv(e){var t=[]
var r,n,a,o,i
e=e||{}
r=e.indent
n=Kv(e.indent_before||"")
a=Kv(e.indent_after||"")
o=qi.getEncodeFunc(e.entity_encoding||"raw",e.entities)
i="html"===e.element_format
return{start:function(e,u,s){var l,c,f,d
if(r&&n[e]&&t.length>0){d=t[t.length-1]
d.length>0&&"\n"!==d&&t.push("\n")}t.push("<",e)
if(u)for(l=0,c=u.length;l<c;l++){f=u[l]
t.push(" ",f.name,'="',o(f.value,true),'"')}t[t.length]=!s||i?">":" />"
if(s&&r&&a[e]&&t.length>0){d=t[t.length-1]
d.length>0&&"\n"!==d&&t.push("\n")}},end:function(e){var n
t.push("</",e,">")
if(r&&a[e]&&t.length>0){n=t[t.length-1]
n.length>0&&"\n"!==n&&t.push("\n")}},text:function(e,r){e.length>0&&(t[t.length]=r?e:o(e))},cdata:function(e){t.push("<![CDATA[",e,"]]>")},comment:function(e){t.push("\x3c!--",e,"--\x3e")},pi:function(e,n){n?t.push("<?",e," ",o(n),"?>"):t.push("<?",e,"?>")
r&&t.push("\n")},doctype:function(e){t.push("<!DOCTYPE",e,">",r?"\n":"")},reset:function(){t.length=0},getContent:function(){return t.join("").replace(/\n$/,"")}}}function Zv(e,t){void 0===t&&(t=iu())
var r=Xv(e)
e=e||{}
e.validate=!("validate"in e)||e.validate
var n=function(n){var a,o
o=e.validate
a={3:function(e){r.text(e.value,e.raw)},8:function(e){r.comment(e.value)},7:function(e){r.pi(e.name,e.value)},10:function(e){r.doctype(e.value)},4:function(e){r.cdata(e.value)},11:function(e){if(e=e.firstChild)do{i(e)}while(e=e.next)}}
r.reset()
var i=function(e){var n=a[e.type]
var u,s,l,c,f,d,v,m,g
if(n)n(e)
else{u=e.name
s=e.shortEnded
l=e.attributes
if(o&&l&&l.length>1){d=[]
d.map={}
g=t.getElementRule(e.name)
if(g){for(v=0,m=g.attributesOrder.length;v<m;v++){c=g.attributesOrder[v]
if(c in l.map){f=l.map[c]
d.map[c]=f
d.push({name:c,value:f})}}for(v=0,m=l.length;v<m;v++){c=l[v].name
if(!(c in d.map)){f=l.map[c]
d.map[c]=f
d.push({name:c,value:f})}}l=d}}r.start(e.name,l,s)
if(!s){if(e=e.firstChild)do{i(e)}while(e=e.next)
r.end(u)}}}
1!==n.type||e.inner?a[11](n):i(n)
return r.getContent()}
return{serialize:n}}var $v=function(e,t,r,n){var a=document.createRange()
a.setStart(e,t)
a.setEnd(r,n)
return a}
var em=function(e){var t=Gl.fromRangeStart(e)
var r=Gl.fromRangeEnd(e)
var n=e.commonAncestorContainer
return ad.fromPosition(false,n,r).map(function(a){return!ff(t,r,n)&&ff(t,a,n)?$v(t.container(),t.offset(),a.container(),a.offset()):e}).getOr(e)}
var tm=function(e){return e.collapsed?e:em(e)}
var rm={normalize:tm}
var nm=function(e,t){return Ti.isText(e)&&" "===e.nodeValue[t-1]}
var am=function(e,t){var r,n
r=e.startContainer
n=e.startOffset
var a=function(e){return r[e]&&3===r[e].nodeType}
if(3===r.nodeType){n>0?t=t.replace(/^&nbsp;/," "):a("previousSibling")||(t=t.replace(/^ /,"&nbsp;"))
n<r.length?t=t.replace(/&nbsp;(<br>|)$/," "):a("nextSibling")||(t=t.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))}return t}
var om=function(e,t){var r,n
r=e.startContainer
n=e.startOffset
if(3===r.nodeType&&e.collapsed)if(" "===r.data[n]){r.deleteData(n,1);/[\u00a0| ]$/.test(t)||(t+=" ")}else if(" "===r.data[n-1]){r.deleteData(n-1,1);/[\u00a0| ]$/.test(t)||(t=" "+t)}return t}
var im=Ti.matchNodeNames("td th")
var um=function(e,t){var r=e.selection.getRng()
var n=r.startContainer
var a=r.startOffset
if(r.collapsed&&nm(n,a)&&Ti.isText(n)){n.insertData(a-1," ")
n.deleteData(a,1)
r.setStart(n,a)
r.setEnd(n,a)
e.selection.setRng(r)}e.selection.setContent(t)}
var sm=function(e,t,r){if("all"===r.getAttribute("data-mce-bogus"))r.parentNode.insertBefore(e.dom.createFragment(t),r)
else{var n=r.firstChild
var a=r.lastChild
!n||n===a&&"BR"===n.nodeName?e.dom.setHTML(r,t):um(e,t)}}
var lm=function(e,t){A.from(e.getParent(t,"td,th")).map(ga.fromDom).each(qv.trimBlockTrailingBr)}
var cm=function(e,t){var r=e.schema.getTextInlineElements()
var n=e.dom
if(t){var a=e.getBody(),o=new jv(n)
Qr.each(n.select("*[data-mce-fragment]"),function(e){for(var t=e.parentNode;t&&t!==a;t=t.parentNode)r[e.nodeName.toLowerCase()]&&o.compare(t,e)&&n.remove(e,true)})}}
var fm=function(e){var t=e
while(t=t.walk())1===t.type&&t.attr("data-mce-fragment","1")}
var dm=function(e){Qr.each(e.getElementsByTagName("*"),function(e){e.removeAttribute("data-mce-fragment")})}
var vm=function(e){return!!e.getAttribute("data-mce-fragment")}
var mm=function(e,t){return t&&!e.schema.getShortEndedElements()[t.nodeName]}
var gm=function(e,t){var r,n,a
var o=e.dom,i=e.selection
var u,s
var l=function(t){var r=e.getBody()
for(;t&&t!==r;t=t.parentNode)if("false"===e.dom.getContentEditable(t))return t
return null}
if(!t)return
e.selection.scrollIntoView(t)
r=l(t)
if(r){o.remove(t)
i.select(r)
return}var c=o.createRng()
u=t.previousSibling
if(u&&3===u.nodeType){c.setStart(u,u.nodeValue.length)
if(!Ie.ie){s=t.nextSibling
if(s&&3===s.nodeType){u.appendData(s.data)
s.parentNode.removeChild(s)}}}else{c.setStartBefore(t)
c.setEndBefore(t)}var f=function(t){var r=Gl.fromRangeStart(t)
var n=Vf(e.getBody())
r=n.next(r)
if(r)return r.toRange()}
n=o.getParent(t,o.isBlock)
o.remove(t)
if(n&&o.isEmpty(n)){e.$(n).empty()
c.setStart(n,0)
c.setEnd(n,0)
if(im(n)||vm(n)||!(a=f(c)))o.add(n,o.create("br",{"data-mce-bogus":"1"}))
else{c=a
o.remove(n)}}i.setRng(c)}
var pm=function(e,t,r){var n,a,o,i,u,s
var l,c,f,d,v
var m=e.selection,g=e.dom;/^ | $/.test(t)&&(t=am(m.getRng(),t))
n=e.parser
v=r.merge
a=Zv({validate:e.settings.validate},e.schema)
d='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>'
s={content:t,format:"html",selection:true,paste:r.paste}
s=e.fire("BeforeSetContent",s)
if(s.isDefaultPrevented()){e.fire("SetContent",{content:s.content,format:"html",selection:true,paste:r.paste})
return}t=s.content;-1===t.indexOf("{$caret}")&&(t+="{$caret}")
t=t.replace(/\{\$caret\}/,d)
c=m.getRng()
var p=c.startContainer||(c.parentElement?c.parentElement():null)
var A=e.getBody()
if(p===A&&m.isCollapsed()&&g.isBlock(A.firstChild)&&mm(e,A.firstChild)&&g.isEmpty(A.firstChild)){c=g.createRng()
c.setStart(A.firstChild,0)
c.setEnd(A.firstChild,0)
m.setRng(c)}if(!m.isCollapsed()){e.selection.setRng(rm.normalize(e.selection.getRng()))
e.getDoc().execCommand("Delete",false,null)
t=om(e.selection.getRng(),t)}o=m.getNode()
var h={context:o.nodeName.toLowerCase(),data:r.data,insert:true}
u=n.parse(t,h)
if(true===r.paste&&Qv.isListFragment(e.schema,u)&&Qv.isParentBlockLi(g,o)){c=Qv.insertAtCaret(a,g,e.selection.getRng(),u)
e.selection.setRng(c)
e.fire("SetContent",s)
return}fm(u)
f=u.lastChild
if("mce_marker"===f.attr("id")){l=f
for(f=f.prev;f;f=f.walk(true))if(3===f.type||!g.isBlock(f.name)){e.schema.isValidChild(f.parent.name,"span")&&f.parent.insert(l,f,"br"===f.name)
break}}e._selectionOverrides.showBlockCaretContainer(o)
if(h.invalid){um(e,d)
o=m.getNode()
i=e.getBody()
9===o.nodeType?o=f=i:f=o
while(f!==i){o=f
f=f.parentNode}t=o===i?i.innerHTML:g.getOuterHTML(o)
t=a.serialize(n.parse(t.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return a.serialize(u)})))
o===i?g.setHTML(i,t):g.setOuterHTML(o,t)}else{t=a.serialize(u)
sm(e,t,o)}cm(e,v)
gm(e,g.get("mce_marker"))
dm(e.getBody())
lm(e.dom,e.selection.getStart())
e.fire("SetContent",s)
e.addVisual()}
var Am=function(e){var t
if("string"!==typeof e){t=Qr.extend({paste:e.paste,data:{paste:e.paste}},e)
return{content:e.content,details:t}}return{content:e,details:{}}}
var hm=function(e,t){var r=Am(t)
pm(e,r.content,r.details)}
var bm={insertAtCaret:hm}
var ym=Wa("sections","settings")
var wm=la.detect()
var Em=wm.deviceType.isTouch()
var xm=["lists","autolink","autosave"]
var Cm={theme:"mobile"}
var km=function(e){var t=E(e)?e.join(" "):e
var r=P(y(t)?t.split(" "):[],Zn)
return L(r,function(e){return e.length>0})}
var Bm=function(e){return L(e,i(N,xm))}
var Tm=function(e,t){var r=Ia(t,function(t,r){return N(e,r)})
return ym(r.t,r.f)}
var Rm=function(e,t,r){var n=e.sections()
var a=n.hasOwnProperty(t)?n[t]:{}
return Qr.extend({},r,a)}
var Im=function(e,t){return e.sections().hasOwnProperty(t)}
var Sm=function(e,t,r){return{id:e,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:t,add_form_submit_trigger:true,submit_patch:true,add_unload_trigger:true,convert_urls:true,relative_urls:true,remove_script_host:true,object_resizing:true,doctype:"<!DOCTYPE html>",visual:true,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:true,render_ui:true,indentation:"40px",inline_styles:true,convert_fonts_to_spans:true,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",entity_encoding:"named",url_converter:r.convertURL,url_converter_scope:r,ie7_compat:true}}
var Dm=function(e,t){var r=t.external_plugins?t.external_plugins:{}
return e&&e.external_plugins?Qr.extend({},e.external_plugins,r):r}
var Nm=function(e,t){return[].concat(km(e)).concat(km(t))}
var Mm=function(e,t,r,n){var a=km(r.forced_plugins)
var o=km(n.plugins)
var i=e&&Im(t,"mobile")?Bm(o):o
var u=Nm(a,i)
return Qr.extend(n,{plugins:u.join(" ")})}
var Pm=function(e,t){var r=t.settings().inline
return e&&Im(t,"mobile")&&!r}
var _m=function(e,t,r,n){var a=Tm(["mobile"],n)
var o=Qr.extend(t,r,a.settings(),Pm(e,a)?Rm(a,"mobile",Cm):{},{validate:true,content_editable:a.settings().inline,external_plugins:Dm(r,a.settings())})
return Mm(e,a,r,o)}
var Om=function(e,t,r,n,a){var o=Sm(t,r,e)
return _m(Em,o,n,a)}
var Fm=function(e,t,r){return A.from(t.settings[r]).filter(e)}
var Lm=i(Fm,y)
var Um=function(e){var t={}
"string"===typeof e?_(e.indexOf("=")>0?e.split(/[;,](?![^=;,]*(?:[;,]|$))/):e.split(","),function(e){var r=e.split("=")
r.length>1?t[Qr.trim(r[0])]=Qr.trim(r[1]):t[Qr.trim(r[0])]=Qr.trim(r)}):t=e
return t}
var Qm=function(e){return function(t){return E(t)&&Y(t,e)}}
var zm=function(e,t,r,n){var a=t in e.settings?e.settings[t]:r
return"hash"===n?Um(a):"string"===n?Fm(y,e,t).getOr(r):"number"===n?Fm(B,e,t).getOr(r):"boolean"===n?Fm(C,e,t).getOr(r):"object"===n?Fm(w,e,t).getOr(r):"array"===n?Fm(E,e,t).getOr(r):"string[]"===n?Fm(Qm(y),e,t).getOr(r):"function"===n?Fm(k,e,t).getOr(r):a}
var jm=/[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/
var Hm=function(e){return jm.test(e)}
var Wm=function(e,t){var r=Lm(e,"inline_boundaries_selector").getOr("a[href],code")
return eo(ga.fromDom(t),r)}
var Vm=function(e){return"rtl"===hu.DOM.getStyle(e,"direction",true)||Hm(e.textContent)}
var Gm=function(e,t,r){return L(hu.DOM.getParents(r.container(),"*",t),e)}
var Ym=function(e,t,r){var n=Gm(e,t,r)
return A.from(n[n.length-1])}
var Jm=function(e,t,r){var n=cf(t,e)
var a=cf(r,e)
return n&&n===a}
var qm=function(e){return _s(e)||Os(e)}
var Km=function(e,t){var r=t.container(),n=t.offset()
return e?Ds(r)?Ti.isText(r.nextSibling)?Gl(r.nextSibling,0):Gl.after(r):_s(t)?Gl(r,n+1):t:Ds(r)?Ti.isText(r.previousSibling)?Gl(r.previousSibling,r.previousSibling.data.length):Gl.before(r):Os(t)?Gl(r,n-1):t}
var Xm=i(Km,true)
var Zm=i(Km,false)
var $m={isInlineTarget:Wm,findRootInline:Ym,isRtl:Vm,isAtZwsp:qm,normalizePosition:Km,normalizeForwards:Xm,normalizeBackwards:Zm,hasSameParentBlock:Jm}
var eg=function(e){return function(t){return ao(e,ga.fromDom(t.dom().parentNode))}}
var tg=function(e,t){return so(e,t)?es(t,function(e){return ni(e)||oi(e)},eg(e)):A.none()}
var rg=function(e){var t=e.getBody()
var r=t.firstChild&&e.dom.isBlock(t.firstChild)?t.firstChild:t
e.selection.setCursorLocation(r,0)}
var ng=function(e){if(e.dom.isEmpty(e.getBody())){e.setContent("")
rg(e)}}
var ag=function(e,t,r){return yl([ad.firstPositionIn(r),ad.lastPositionIn(r)],function(n,a){var o=$m.normalizePosition(true,n)
var i=$m.normalizePosition(false,a)
var u=$m.normalizePosition(false,t)
return e?ad.nextPosition(r,u).map(function(e){return e.isEqual(i)&&t.isEqual(o)}).getOr(false):ad.prevPosition(r,u).map(function(e){return e.isEqual(o)&&t.isEqual(i)}).getOr(false)}).getOr(true)}
var og={getParentBlock:tg,paddEmptyBody:ng,willDeleteLastPositionInElement:ag}
var ig=function(e,t,r){return ts(e,t,r).isSome()}
var ug=function(e,t){var r=ga.fromDom(e)
var n=ga.fromDom(t)
return ig(n,"pre,code",i(ao,r))}
var sg=function(e,t){return Ti.isText(t)&&/^[ \t\r\n]*$/.test(t.data)&&false===ug(e,t)}
var lg=function(e){return Ti.isElement(e)&&"A"===e.nodeName&&e.hasAttribute("name")}
var cg=function(e,t){return Zs(t)&&false===sg(e,t)||lg(t)||fg(t)}
var fg=Ti.hasAttribute("data-mce-bookmark")
var dg=Ti.hasAttribute("data-mce-bogus")
var vg=Ti.hasAttributeValue("data-mce-bogus","all")
var mg=function(e){var t,r,n=0
if(cg(e,e))return false
r=e.firstChild
if(!r)return true
t=new jo(r,e)
do{if(vg(r)){r=t.next(true)
continue}if(dg(r)){r=t.next()
continue}if(Ti.isBr(r)){n++
r=t.next()
continue}if(cg(e,r))return false
r=t.next()}while(r)
return n<=1}
var gg=function(e){return mg(e.dom())}
var pg={isEmpty:gg}
var Ag=Wa("block","position")
var hg=Wa("from","to")
var bg=function(e,t){var r=ga.fromDom(e)
var n=ga.fromDom(t.container())
return og.getParentBlock(r,n).map(function(e){return Ag(e,t)})}
var yg=function(e){return false===ao(e.from().block(),e.to().block())}
var wg=function(e){return vo(e.from().block()).bind(function(t){return vo(e.to().block()).filter(function(e){return ao(t,e)})}).isSome()}
var Eg=function(e){return false===Ti.isContentEditableFalse(e.from().block())&&false===Ti.isContentEditableFalse(e.to().block())}
var xg=function(e,t,r){return Ti.isBr(r.position().getNode())&&false===pg.isEmpty(r.block())?ad.positionIn(false,r.block().dom()).bind(function(n){return n.isEqual(r.position())?ad.fromPosition(t,e,n).bind(function(t){return bg(e,t)}):A.some(r)}).getOr(r):r}
var Cg=function(e,t,r){var n=bg(e,Gl.fromRangeStart(r))
var a=n.bind(function(r){return ad.fromPosition(t,e,r.position()).bind(function(r){return bg(e,r).map(function(r){return xg(e,t,r)})})})
return yl([n,a],hg).filter(function(e){return yg(e)&&wg(e)&&Eg(e)})}
var kg=function(e,t,r){return r.collapsed?Cg(e,t,r):A.none()}
var Bg={read:kg}
var Tg=function(e){return e.slice(0,-1)}
var Rg=function(e,t,r){return so(t,e)?Tg(mo(e,function(e){return r(e)||ao(e,t)})):[]}
var Ig=function(e,t){return Rg(e,t,a(false))}
var Sg=function(e,t){return[e].concat(Ig(e,t))}
var Dg={parentsUntil:Rg,parents:Ig,parentsAndSelf:Sg}
var Ng=function(e){var t=bo(e)
return j(t,ei).fold(function(){return t},function(e){return t.slice(0,e)})}
var Mg=function(e){var t=Ng(e)
_(t,Pu)
return t}
var Pg=function(e,t){var r=Dg.parentsAndSelf(t,e)
return z(r.reverse(),pg.isEmpty).each(Pu)}
var _g=function(e){return 0===L(Ao(e),function(e){return!pg.isEmpty(e)}).length}
var Og=function(e,t,r,n){if(pg.isEmpty(r)){qv.fillWithPaddingBr(r)
return ad.firstPositionIn(r.dom())}_g(n)&&pg.isEmpty(t)&&Bu(n,ga.fromTag("br"))
var a=ad.prevPosition(r.dom(),Gl.before(n.dom()))
_(Mg(t),function(e){Bu(n,e)})
Pg(e,t)
return a}
var Fg=function(e,t,r){if(pg.isEmpty(r)){Pu(r)
pg.isEmpty(t)&&qv.fillWithPaddingBr(t)
return ad.firstPositionIn(t.dom())}var n=ad.lastPositionIn(r.dom())
_(Mg(t),function(e){Iu(r,e)})
Pg(e,t)
return n}
var Lg=function(e,t){var r=Dg.parentsAndSelf(t,e)
return A.from(r[r.length-1])}
var Ug=function(e,t){return so(t,e)?Lg(t,e):A.none()}
var Qg=function(e,t){ad.positionIn(e,t.dom()).map(function(e){return e.getNode()}).map(ga.fromDom).filter(ri).each(Pu)}
var zg=function(e,t,r){Qg(true,t)
Qg(false,r)
return Ug(t,r).fold(i(Fg,e,t,r),i(Og,e,t,r))}
var jg=function(e,t,r,n){return t?zg(e,n,r):zg(e,r,n)}
var Hg={mergeBlocks:jg}
var Wg=function(e,t){var r
var n=ga.fromDom(e.getBody())
r=Bg.read(n.dom(),t,e.selection.getRng()).bind(function(e){return Hg.mergeBlocks(n,t,e.from().block(),e.to().block())})
r.each(function(t){e.selection.setRng(t.toRange())})
return r.isSome()}
var Vg={backspaceDelete:Wg}
var Gg=function(e,t){var r=t.getRng()
return yl([og.getParentBlock(e,ga.fromDom(r.startContainer)),og.getParentBlock(e,ga.fromDom(r.endContainer))],function(n,a){if(false===ao(n,a)){r.deleteContents()
Hg.mergeBlocks(e,true,n,a).each(function(e){t.setRng(e.toRange())})
return true}return false}).getOr(false)}
var Yg=function(e,t){var r=ga.fromDom(t)
var n=i(ao,e)
return $u(r,si,n).isSome()}
var Jg=function(e,t){return Yg(e,t.startContainer)||Yg(e,t.endContainer)}
var qg=function(e,t){var r=ad.prevPosition(e.dom(),Gl.fromRangeStart(t)).isNone()
var n=ad.nextPosition(e.dom(),Gl.fromRangeEnd(t)).isNone()
return!Jg(e,t)&&r&&n}
var Kg=function(e){e.setContent("")
e.selection.setCursorLocation()
return true}
var Xg=function(e){var t=ga.fromDom(e.getBody())
var r=e.selection.getRng()
return qg(t,r)?Kg(e):Gg(t,e.selection)}
var Zg=function(e,t){return!e.selection.isCollapsed()&&Xg(e)}
var $g={backspaceDelete:Zg}
var ep=function(e){if(!E(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[]
var r={}
_(e,function(n,a){var o=Ca(n)
if(1!==o.length)throw new Error("one and only one name per case")
var i=o[0]
var u=n[i]
if(void 0!==r[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!E(u))throw new Error("case arguments must be an array")
t.push(i)
r[i]=function(){var r=arguments.length
if(r!==u.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+u.length+" ("+u+"), got "+r)
var n=new Array(r)
for(var o=0;o<n.length;o++)n[o]=arguments[o]
var s=function(e){var r=Ca(e)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
var a=Y(t,function(e){return N(r,e)})
if(!a)throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return e[i].apply(null,n)}
return{fold:function(){if(arguments.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+arguments.length)
var t=arguments[a]
return t.apply(null,n)},match:s,log:function(e){console.log(e,{constructors:t,constructor:i,params:n})}}}})
return r}
var tp={generate:ep}
var rp=function(e){return Sf(e).exists(ri)}
var np=function(e,t,r){var n=L(Dg.parentsAndSelf(ga.fromDom(r.container()),t),ei)
var a=$(n).getOr(t)
return ad.fromPosition(e,a.dom(),r).filter(rp)}
var ap=function(e,t){return Sf(t).exists(ri)||np(true,e,t).isSome()}
var op=function(e,t){return Df(t).exists(ri)||np(false,e,t).isSome()}
var ip=i(np,false)
var up=i(np,true)
var sp=function(e){return si(ga.fromDom(e))||oi(ga.fromDom(e))}
var lp=tp.generate([{remove:["element"]},{moveToElement:["element"]},{moveToPosition:["position"]}])
var cp=function(e,t){var r=t.getNode(false===e)
var n=e?"after":"before"
return Ti.isElement(r)&&r.getAttribute("data-mce-caret")===n}
var fp=function(e,t,r,n){var o=function(t){return ti(ga.fromDom(t))&&!ff(r,n,e)}
return wf(!t,r).fold(function(){return wf(t,n).fold(a(false),o)},o)}
var dp=function(e,t,r,n){var a=n.getNode(false===t)
return og.getParentBlock(ga.fromDom(e),ga.fromDom(r.getNode())).map(function(e){return pg.isEmpty(e)?lp.remove(e.dom()):lp.moveToElement(a)}).orThunk(function(){return A.some(lp.moveToElement(a))})}
var vp=function(e,t,r){return ad.fromPosition(t,e,r).bind(function(n){return sp(n.getNode())?A.none():fp(e,t,r,n)?A.none():t&&Ti.isContentEditableFalse(n.getNode())?dp(e,t,r,n):false===t&&Ti.isContentEditableFalse(n.getNode(true))?dp(e,t,r,n):t&&Cf(r)?A.some(lp.moveToPosition(n)):false===t&&xf(r)?A.some(lp.moveToPosition(n)):A.none()})}
var mp=function(e,t){return e&&Ti.isContentEditableFalse(t.nextSibling)?A.some(lp.moveToElement(t.nextSibling)):false===e&&Ti.isContentEditableFalse(t.previousSibling)?A.some(lp.moveToElement(t.previousSibling)):A.none()}
var gp=function(e,t,r){return r.fold(function(e){return A.some(lp.remove(e))},function(e){return A.some(lp.moveToElement(e))},function(r){return ff(t,r,e)?A.none():A.some(lp.moveToPosition(r))})}
var pp=function(e,t,r){return cp(t,r)?mp(t,r.getNode(false===t)).fold(function(){return vp(e,t,r)},A.some):vp(e,t,r).bind(function(t){return gp(e,r,t)})}
var Ap=function(e,t,r){var n=hf(t?1:-1,e,r)
var a=Gl.fromRangeStart(n)
var o=ga.fromDom(e)
return false===t&&Cf(a)?A.some(lp.remove(a.getNode(true))):t&&xf(a)?A.some(lp.remove(a.getNode())):false===t&&xf(a)&&op(o,a)?ip(o,a).map(function(e){return lp.remove(e.getNode())}):t&&Cf(a)&&ap(o,a)?up(o,a).map(function(e){return lp.remove(e.getNode())}):pp(e,t,a)}
var hp=function(e){return-1!==" \f\n\r\t\v".indexOf(e)}
var bp=function(e,t,r){var n=Q(e.split(""),function(n,a){return hp(a)||" "===a?n.previousCharIsSpace||""===n.str&&t||n.str.length===e.length-1&&r?{previousCharIsSpace:false,str:n.str+" "}:{previousCharIsSpace:true,str:n.str+" "}:{previousCharIsSpace:false,str:n.str+a}},{previousCharIsSpace:false,str:""})
return n.str}
var yp=function(e,t,r){if(0===r)return
var n=e.data.slice(t,t+r)
var a=t+r>=e.data.length
var o=0===t
e.replaceData(t,r,bp(n,o,a))}
var wp=function(e,t){var r=e.data.slice(t)
var n=r.length-$n(r).length
return yp(e,t,n)}
var Ep=function(e,t){var r=e.data.slice(0,t)
var n=r.length-ea(r).length
return yp(e,t-n,n)}
var xp=function(e,t,r){var n=ea(e.data).length
e.appendData(t.data)
Pu(ga.fromDom(t))
r&&wp(e,n)
return e}
var Cp=function(e,t){var r=e.container()
var n=e.offset()
return false===Gl.isTextPosition(e)&&r===t.parentNode&&n>Gl.before(t).offset()}
var kp=function(e,t){return Cp(t,e)?Gl(t.container(),t.offset()-1):t}
var Bp=function(e){return Ti.isText(e)?Gl(e,0):Gl.before(e)}
var Tp=function(e){return Ti.isText(e)?Gl(e,e.data.length):Gl.after(e)}
var Rp=function(e){return Zs(e.previousSibling)?A.some(Tp(e.previousSibling)):e.previousSibling?ad.lastPositionIn(e.previousSibling):A.none()}
var Ip=function(e){return Zs(e.nextSibling)?A.some(Bp(e.nextSibling)):e.nextSibling?ad.firstPositionIn(e.nextSibling):A.none()}
var Sp=function(e,t){var r=Gl.before(t.previousSibling?t.previousSibling:t.parentNode)
return ad.prevPosition(e,r).fold(function(){return ad.nextPosition(e,Gl.after(t))},A.some)}
var Dp=function(e,t){return ad.nextPosition(e,Gl.after(t)).fold(function(){return ad.prevPosition(e,Gl.before(t))},A.some)}
var Np=function(e,t){return Rp(t).orThunk(function(){return Ip(t)}).orThunk(function(){return Sp(e,t)})}
var Mp=function(e,t){return Ip(t).orThunk(function(){return Rp(t)}).orThunk(function(){return Dp(e,t)})}
var Pp=function(e,t,r){return e?Mp(t,r):Np(t,r)}
var _p=function(e,t,r){return Pp(e,t,r).map(i(kp,r))}
var Op=function(e,t,r){r.fold(function(){e.focus()},function(r){e.selection.setRng(r.toRange(),t)})}
var Fp=function(e){return function(t){return t.dom()===e}}
var Lp=function(e,t){return t&&e.schema.getBlockElements().hasOwnProperty(ba(t))}
var Up=function(e){if(pg.isEmpty(e)){var t=ga.fromHtml('<br data-mce-bogus="1">')
Mu(e)
Iu(e,t)
return A.some(Gl.before(t.dom()))}return A.none()}
var Qp=function(e,t,r){var n=go(e).filter(function(e){return Ti.isText(e.dom())})
var a=po(e).filter(function(e){return Ti.isText(e.dom())})
Pu(e)
return yl([n,a,t],function(e,t,n){var a=e.dom(),o=t.dom()
var i=a.data.length
xp(a,o,r)
return n.container()===o?Gl(a,i):n}).orThunk(function(){if(r){n.each(function(e){return Ep(e.dom(),e.dom().length)})
a.each(function(e){return wp(e.dom(),0)})}return t})}
var zp=function(e,t){return Sa(e.schema.getTextInlineElements(),ba(t))}
var jp=function(e,t,r,n){void 0===n&&(n=true)
var a=_p(t,e.getBody(),r.dom())
var o=$u(r,i(Lp,e),Fp(e.getBody()))
var u=Qp(r,a,zp(e,r))
if(e.dom.isEmpty(e.getBody())){e.setContent("")
e.selection.setCursorLocation()}else o.bind(Up).fold(function(){n&&Op(e,t,u)},function(r){n&&Op(e,t,A.some(r))})}
var Hp={deleteElement:jp}
var Wp=function(e,t){return function(r){e._selectionOverrides.hideFakeCaret()
Hp.deleteElement(e,t,ga.fromDom(r))
return true}}
var Vp=function(e,t){return function(r){var n=t?Gl.before(r):Gl.after(r)
e.selection.setRng(n.toRange())
return true}}
var Gp=function(e){return function(t){e.selection.setRng(t.toRange())
return true}}
var Yp=function(e,t){var r=Ap(e.getBody(),t,e.selection.getRng()).map(function(r){return r.fold(Wp(e,t),Vp(e,t),Gp(e))})
return r.getOr(false)}
var Jp=function(e){_(Xu(e,".mce-offscreen-selection"),Pu)}
var qp=function(e,t){var r=e.selection.getNode()
if(Ti.isContentEditableFalse(r)){Jp(ga.fromDom(e.getBody()))
Hp.deleteElement(e,t,ga.fromDom(e.selection.getNode()))
og.paddEmptyBody(e)
return true}return false}
var Kp=function(e,t){while(t&&t!==e){if(Ti.isContentEditableTrue(t)||Ti.isContentEditableFalse(t))return t
t=t.parentNode}return null}
var Xp=function(e){var t
var r=Kp(e.getBody(),e.selection.getNode())
if(Ti.isContentEditableTrue(r)&&e.dom.isBlock(r)&&e.dom.isEmpty(r)){t=e.dom.create("br",{"data-mce-bogus":"1"})
e.dom.setHTML(r,"")
r.appendChild(t)
e.selection.setRng(Gl.before(t).toRange())}return true}
var Zp=function(e,t){return e.selection.isCollapsed()?Yp(e,t):qp(e,t)}
var $p={backspaceDelete:Zp,paddEmptyElement:Xp}
var eA=Ti.isText
var tA=function(e){return eA(e)&&e.data[0]===Ts.ZWSP}
var rA=function(e){return eA(e)&&e.data[e.data.length-1]===Ts.ZWSP}
var nA=function(e){return e.ownerDocument.createTextNode(Ts.ZWSP)}
var aA=function(e){if(eA(e.previousSibling)){if(rA(e.previousSibling))return e.previousSibling
e.previousSibling.appendData(Ts.ZWSP)
return e.previousSibling}if(eA(e)){if(tA(e))return e
e.insertData(0,Ts.ZWSP)
return e}var t=nA(e)
e.parentNode.insertBefore(t,e)
return t}
var oA=function(e){if(eA(e.nextSibling)){if(tA(e.nextSibling))return e.nextSibling
e.nextSibling.insertData(0,Ts.ZWSP)
return e.nextSibling}if(eA(e)){if(rA(e))return e
e.appendData(Ts.ZWSP)
return e}var t=nA(e)
e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)
return t}
var iA=function(e,t){return e?aA(t):oA(t)}
var uA=i(iA,true)
var sA=i(iA,false)
var lA=function(e,t){return Ti.isText(e.container())?iA(t,e.container()):iA(t,e.getNode())}
var cA=function(e,t){var r=t.get()
return r&&e.container()===r&&Ds(r)}
var fA=function(e,t){return t.fold(function(t){Qc.remove(e.get())
var r=uA(t)
e.set(r)
return A.some(Gl(r,r.length-1))},function(t){return ad.firstPositionIn(t).map(function(t){if(cA(t,e))return Gl(e.get(),1)
Qc.remove(e.get())
var r=lA(t,true)
e.set(r)
return Gl(r,1)})},function(t){return ad.lastPositionIn(t).map(function(t){if(cA(t,e))return Gl(e.get(),e.get().length-1)
Qc.remove(e.get())
var r=lA(t,false)
e.set(r)
return Gl(r,r.length-1)})},function(t){Qc.remove(e.get())
var r=sA(t)
e.set(r)
return A.some(Gl(r,1))})}
var dA={renderCaret:fA}
var vA=function(e,t){for(var r=0;r<e.length;r++){var n=e[r].apply(null,t)
if(n.isSome())return n}return A.none()}
var mA={evaluateUntil:vA}
var gA=tp.generate([{before:["element"]},{start:["element"]},{end:["element"]},{after:["element"]}])
var pA=function(e,t){var r=cf(t,e)
return r||e}
var AA=function(e,t,r){var n=$m.normalizeForwards(r)
var a=pA(t,n.container())
return $m.findRootInline(e,a,n).fold(function(){return ad.nextPosition(a,n).bind(i($m.findRootInline,e,a)).map(function(e){return gA.before(e)})},A.none)}
var hA=function(e,t){return null===Bc(e,t)}
var bA=function(e,t,r){return $m.findRootInline(e,t,r).filter(i(hA,t))}
var yA=function(e,t,r){var n=$m.normalizeBackwards(r)
return bA(e,t,n).bind(function(e){var t=ad.prevPosition(e,n)
return t.isNone()?A.some(gA.start(e)):A.none()})}
var wA=function(e,t,r){var n=$m.normalizeForwards(r)
return bA(e,t,n).bind(function(e){var t=ad.nextPosition(e,n)
return t.isNone()?A.some(gA.end(e)):A.none()})}
var EA=function(e,t,r){var n=$m.normalizeBackwards(r)
var a=pA(t,n.container())
return $m.findRootInline(e,a,n).fold(function(){return ad.prevPosition(a,n).bind(i($m.findRootInline,e,a)).map(function(e){return gA.after(e)})},A.none)}
var xA=function(e){return false===$m.isRtl(kA(e))}
var CA=function(e,t,r){var n=mA.evaluateUntil([AA,yA,wA,EA],[e,t,r])
return n.filter(xA)}
var kA=function(e){return e.fold(o,o,o,o)}
var BA=function(e){return e.fold(a("before"),a("start"),a("end"),a("after"))}
var TA=function(e){return e.fold(gA.before,gA.before,gA.after,gA.after)}
var RA=function(e){return e.fold(gA.start,gA.start,gA.end,gA.end)}
var IA=function(e,t){return BA(e)===BA(t)&&kA(e)===kA(t)}
var SA=function(e,t,r,n,a,o){return yl([$m.findRootInline(t,r,n),$m.findRootInline(t,r,a)],function(t,n){return t!==n&&$m.hasSameParentBlock(r,t,n)?gA.after(e?t:n):o}).getOr(o)}
var DA=function(e,t){return e.fold(a(true),function(e){return!IA(e,t)})}
var NA=function(e,t,r,n,a){var o=$m.normalizePosition(e,a)
var u=ad.fromPosition(e,r,o).map(i($m.normalizePosition,e))
var s=u.fold(function(){return n.map(TA)},function(a){return CA(t,r,a).map(i(SA,e,t,r,o,a)).filter(i(DA,n))})
return s.filter(xA)}
var MA=function(e,t){return e?t.fold(n(A.some,gA.start),A.none,n(A.some,gA.after),A.none):t.fold(A.none,n(A.some,gA.before),A.none,n(A.some,gA.end))}
var PA=function(e,t,r,n){var a=$m.normalizePosition(e,n)
var o=CA(t,r,a)
return CA(t,r,a).bind(i(MA,e)).orThunk(function(){return NA(e,t,r,o,n)})}
var _A={readLocation:CA,findLocation:PA,prevLocation:i(PA,false),nextLocation:i(PA,true),getElement:kA,outside:TA,inside:RA}
var OA=function(e){return k(e.selection.getSel().modify)}
var FA=function(e,t,r){var n=e?1:-1
t.setRng(Gl(r.container(),r.offset()+n).toRange())
t.getSel().modify("move",e?"forward":"backward","word")
return true}
var LA=function(e,t){var r=t.selection.getRng()
var n=e?Gl.fromRangeEnd(r):Gl.fromRangeStart(r)
return!!OA(t)&&(e&&_s(n)?FA(true,t.selection,n):!(e||!Os(n))&&FA(false,t.selection,n))}
var UA={hasSelectionModifyApi:OA,moveByWord:LA}
var QA=function(e,t){var r=e.dom.createRng()
r.setStart(t.container(),t.offset())
r.setEnd(t.container(),t.offset())
e.selection.setRng(r)}
var zA=function(e){return false!==e.settings.inline_boundaries}
var jA=function(e,t){e?t.setAttribute("data-mce-selected","inline-boundary"):t.removeAttribute("data-mce-selected")}
var HA=function(e,t,r){return dA.renderCaret(t,r).map(function(t){QA(e,t)
return r})}
var WA=function(e,t,r){var n=e.getBody()
var a=Gl.fromRangeStart(e.selection.getRng())
var o=i($m.isInlineTarget,e)
var u=_A.findLocation(r,o,n,a)
return u.bind(function(r){return HA(e,t,r)})}
var VA=function(e,t,r){var n=L(t.select('*[data-mce-selected="inline-boundary"]'),e)
var a=L(r,e)
_(K(n,a),i(jA,false))
_(K(a,n),i(jA,true))}
var GA=function(e,t){if(e.selection.isCollapsed()&&true!==e.composing&&t.get()){var r=Gl.fromRangeStart(e.selection.getRng())
if(Gl.isTextPosition(r)&&false===$m.isAtZwsp(r)){QA(e,Qc.removeAndReposition(t.get(),r))
t.set(null)}}}
var YA=function(e,t,r,n){if(t.selection.isCollapsed()){var a=L(n,e)
_(a,function(n){var a=Gl.fromRangeStart(t.selection.getRng())
_A.readLocation(e,t.getBody(),a).bind(function(e){return HA(t,r,e)})})}}
var JA=function(e,t,r){return function(){return!!zA(e)&&WA(e,t,r).isSome()}}
var qA=function(e,t,r){return function(){return!!zA(t)&&UA.moveByWord(e,t)}}
var KA=function(e){var t=Lu(null)
var r=i($m.isInlineTarget,e)
e.on("NodeChange",function(n){if(zA(e)){VA(r,e.dom,n.parents)
GA(e,t)
YA(r,e,t,n.parents)}})
return t}
var XA=i(qA,true)
var ZA=i(qA,false)
var $A={move:JA,moveNextWord:XA,movePrevWord:ZA,setupSelectedState:KA,setCaretPosition:QA}
var eh=function(e){return false!==e.settings.inline_boundaries}
var th=function(e,t){var r=document.createRange()
r.setStart(e.container(),e.offset())
r.setEnd(t.container(),t.offset())
return r}
var rh=function(e){return yl([ad.firstPositionIn(e),ad.lastPositionIn(e)],function(t,r){var n=$m.normalizePosition(true,t)
var a=$m.normalizePosition(false,r)
return ad.nextPosition(e,n).map(function(e){return e.isEqual(a)}).getOr(true)}).getOr(true)}
var nh=function(e,t){return function(r){return dA.renderCaret(t,r).map(function(t){$A.setCaretPosition(e,t)
return true}).getOr(false)}}
var ah=function(e,t,r,n){var a=e.getBody()
var o=i($m.isInlineTarget,e)
e.undoManager.ignore(function(){e.selection.setRng(th(r,n))
e.execCommand("Delete")
_A.readLocation(o,a,Gl.fromRangeStart(e.selection.getRng())).map(_A.inside).map(nh(e,t))})
e.nodeChanged()}
var oh=function(e,t){var r=cf(t,e)
return r||e}
var ih=function(e,t,r,n){var o=oh(e.getBody(),n.container())
var u=i($m.isInlineTarget,e)
var s=_A.readLocation(u,o,n)
return s.bind(function(e){return r?e.fold(a(A.some(_A.inside(e))),A.none,a(A.some(_A.outside(e))),A.none):e.fold(A.none,a(A.some(_A.outside(e))),A.none,a(A.some(_A.inside(e))))}).map(nh(e,t)).getOrThunk(function(){var a=ad.navigate(r,o,n)
var i=a.bind(function(e){return _A.readLocation(u,o,e)})
return s.isSome()&&i.isSome()?$m.findRootInline(u,o,n).map(function(t){if(rh(t)){Hp.deleteElement(e,r,ga.fromDom(t))
return true}return false}).getOr(false):i.bind(function(o){return a.map(function(a){r?ah(e,t,n,a):ah(e,t,a,n)
return true})}).getOr(false)})}
var uh=function(e,t,r){if(e.selection.isCollapsed()&&eh(e)){var n=Gl.fromRangeStart(e.selection.getRng())
return ih(e,t,r,n)}return false}
var sh={backspaceDelete:uh}
var lh=Wa("start","end")
var ch=Wa("rng","table","cells")
var fh=tp.generate([{removeTable:["element"]},{emptyCells:["cells"]}])
var dh=function(e){return i(ao,e)}
var vh=function(e,t){return ns(ga.fromDom(e),"td,th",t)}
var mh=function(e,t){return ts(e,"table",t)}
var gh=function(e){return false===ao(e.start(),e.end())}
var ph=function(e,t){return mh(e.start(),t).bind(function(r){return mh(e.end(),t).bind(function(e){return ao(r,e)?A.some(r):A.none()})})}
var Ah=function(e){return Xu(e,"td,th")}
var hh=function(e,t){return mh(e.start(),t).bind(function(t){return ee(Ah(t)).map(function(t){return lh(e.start(),t)})})}
var bh=function(e,t){var r=vh(t.startContainer,e)
var n=vh(t.endContainer,e)
return t.collapsed?A.none():yl([r,n],lh).fold(function(){return r.fold(function(){return n.bind(function(t){return mh(t,e).bind(function(e){return $(Ah(e)).map(function(e){return lh(e,t)})})})},function(t){return mh(t,e).bind(function(e){return ee(Ah(e)).map(function(e){return lh(t,e)})})})},function(t){return yh(e,t)?A.none():hh(t,e)})}
var yh=function(e,t){return ph(t,e).isSome()}
var wh=function(e,t){var r=vh(e.startContainer,t)
var n=vh(e.endContainer,t)
return yl([r,n],lh).filter(gh).filter(function(e){return yh(t,e)}).orThunk(function(){return bh(t,e)})}
var Eh=function(e,t){return ph(e,t).map(function(t){return ch(e,t,Ah(t))})}
var xh=function(e,t){var r=dh(e)
return wh(t,r).bind(function(e){return Eh(e,r)})}
var Ch=function(e,t){return j(e,function(e){return ao(e,t)})}
var kh=function(e){return yl([Ch(e.cells(),e.rng().start()),Ch(e.cells(),e.rng().end())],function(t,r){return e.cells().slice(t,r+1)})}
var Bh=function(e){return kh(e).map(function(t){var r=e.cells()
return t.length===r.length?fh.removeTable(e.table()):fh.emptyCells(t)})}
var Th=function(e){return fh.emptyCells(e)}
var Rh=function(e,t){return xh(e,t).bind(Bh)}
var Ih={getActionFromRange:Rh,getActionFromCells:Th}
var Sh=function(e){var t=[]
if(e)for(var r=0;r<e.rangeCount;r++)t.push(e.getRangeAt(r))
return t}
var Dh=function(e){return G(e,function(e){var t=pl(e)
return t?[ga.fromDom(t)]:[]})}
var Nh=function(e){return Sh(e).length>1}
var Mh={getRanges:Sh,getSelectedNodes:Dh,hasMultipleRanges:Nh}
var Ph=function(e){return L(Mh.getSelectedNodes(e),si)}
var _h=function(e){var t=Xu(e,"td[data-mce-selected],th[data-mce-selected]")
return t}
var Oh=function(e,t){var r=_h(t)
var n=Ph(e)
return r.length>0?r:n}
var Fh=function(e){return Oh(Mh.getRanges(e.selection.getSel()),ga.fromDom(e.getBody()))}
var Lh={getCellsFromRanges:Ph,getCellsFromElement:_h,getCellsFromElementOrRanges:Oh,getCellsFromEditor:Fh}
var Uh=function(e,t){_(t,qv.fillWithPaddingBr)
e.selection.setCursorLocation(t[0].dom(),0)
return true}
var Qh=function(e,t){Hp.deleteElement(e,false,t)
return true}
var zh=function(e,t,r){return Ih.getActionFromRange(t,r).map(function(t){return t.fold(i(Qh,e),i(Uh,e))})}
var jh=function(e,t){return Jh(e,t)}
var Hh=function(e,t,r,n){return Gh(t,n).fold(function(){return zh(e,t,r)},function(t){return jh(e,t)}).getOr(false)}
var Wh=function(e,t){var r=ga.fromDom(e.getBody())
var n=e.selection.getRng()
var a=Lh.getCellsFromEditor(e)
return 0!==a.length?Uh(e,a):Hh(e,r,n,t)}
var Vh=function(e,t){return z(Dg.parentsAndSelf(t,e),si)}
var Gh=function(e,t){return z(Dg.parentsAndSelf(t,e),function(e){return"caption"===ba(e)})}
var Yh=function(e,t,r,n,a){return ad.navigate(r,e.getBody(),a).bind(function(e){return Vh(t,ga.fromDom(e.getNode())).map(function(e){return false===ao(e,n)})})}
var Jh=function(e,t){qv.fillWithPaddingBr(t)
e.selection.setCursorLocation(t.dom(),0)
return A.some(true)}
var qh=function(e,t,r,n){return ad.firstPositionIn(e.dom()).bind(function(a){return ad.lastPositionIn(e.dom()).map(function(e){return t?r.isEqual(a)&&n.isEqual(e):r.isEqual(e)&&n.isEqual(a)})}).getOr(true)}
var Kh=function(e,t){return Jh(e,t)}
var Xh=function(e,t,r){return Gh(e,ga.fromDom(r.getNode())).map(function(e){return false===ao(e,t)})}
var Zh=function(e,t,r,n,a){return ad.navigate(r,e.getBody(),a).bind(function(o){return qh(n,r,a,o)?Kh(e,n):Xh(t,n,o)}).or(A.some(true))}
var $h=function(e,t,r,n){var a=Gl.fromRangeStart(e.selection.getRng())
return Vh(r,n).bind(function(n){return pg.isEmpty(n)?Jh(e,n):Yh(e,r,t,n,a)})}
var eb=function(e,t,r,n){var a=Gl.fromRangeStart(e.selection.getRng())
return pg.isEmpty(n)?Jh(e,n):Zh(e,r,t,n,a)}
var tb=function(e,t,r){var n=ga.fromDom(e.getBody())
return Gh(n,r).fold(function(){return $h(e,t,n,r)},function(r){return eb(e,t,n,r)}).getOr(false)}
var rb=function(e,t){var r=ga.fromDom(e.selection.getStart(true))
var n=Lh.getCellsFromEditor(e)
return e.selection.isCollapsed()&&0===n.length?tb(e,t,r):Wh(e,r)}
var nb={backspaceDelete:rb}
var ab=function(e,t){e.getDoc().execCommand(t,false,null)}
var ob=function(e){if($p.backspaceDelete(e,false))return
if(sh.backspaceDelete(e,false))return
if(Vg.backspaceDelete(e,false))return
if(nb.backspaceDelete(e))return
if($g.backspaceDelete(e,false))return
ab(e,"Delete")
og.paddEmptyBody(e)}
var ib=function(e){if($p.backspaceDelete(e,true))return
if(sh.backspaceDelete(e,true))return
if(Vg.backspaceDelete(e,true))return
if(nb.backspaceDelete(e))return
if($g.backspaceDelete(e,true))return
ab(e,"ForwardDelete")}
var ub={deleteCommand:ob,forwardDeleteCommand:ib}
var sb=function(e,t,r){var n=e.getParam(t,r)
if(-1!==n.indexOf("=")){var a=e.getParam(t,"","hash")
return a.hasOwnProperty(e.id)?a[e.id]:r}return n}
var lb=function(e){return e.getParam("iframe_attrs",{})}
var cb=function(e){return e.getParam("doctype","<!DOCTYPE html>")}
var fb=function(e){return e.getParam("document_base_url","")}
var db=function(e){return sb(e,"body_id","tinymce")}
var vb=function(e){return sb(e,"body_class","")}
var mb=function(e){return e.getParam("content_security_policy","")}
var gb=function(e){return e.getParam("br_in_pre",true)}
var pb=function(e){if(e.getParam("force_p_newlines",false))return"p"
var t=e.getParam("forced_root_block","p")
return false===t?"":t}
var Ab=function(e){return e.getParam("forced_root_block_attrs",{})}
var hb=function(e){return e.getParam("br_newline_selector",".mce-toc h2,figcaption,caption")}
var bb=function(e){return e.getParam("no_newline_selector","")}
var yb=function(e){return e.getParam("keep_styles",true)}
var wb=function(e){return e.getParam("end_container_on_empty_block",false)}
var Eb=function(e){return Qr.explode(e.getParam("font_size_style_values",""))}
var xb=function(e){return Qr.explode(e.getParam("font_size_classes",""))}
var Cb=function(e){return e.getParam("images_dataimg_filter",a(true),"function")}
var kb=function(e){return e.getParam("automatic_uploads",true,"boolean")}
var Bb=function(e){return e.getParam("images_reuse_filename",false,"boolean")}
var Tb=function(e){return e.getParam("images_replace_blob_uris",true,"boolean")}
var Rb=function(e){return e.getParam("images_upload_url","","string")}
var Ib=function(e){return e.getParam("images_upload_base_path","","string")}
var Sb=function(e){return e.getParam("images_upload_credentials",false,"boolean")}
var Db=function(e){return e.getParam("images_upload_handler",null,"function")}
var Nb=function(e){return e.getParam("content_css_cors",false,"boolean")}
var Mb={getIframeAttrs:lb,getDocType:cb,getDocumentBaseUrl:fb,getBodyId:db,getBodyClass:vb,getContentSecurityPolicy:mb,shouldPutBrInPre:gb,getForcedRootBlock:pb,getForcedRootBlockAttrs:Ab,getBrNewLineSelector:hb,getNoNewLineSelector:bb,shouldKeepStyles:yb,shouldEndContainerOnEmptyBlock:wb,getFontStyleValues:Eb,getFontSizeClasses:xb,getImagesDataImgFilter:Cb,isAutomaticUploadsEnabled:kb,shouldReuseFileName:Bb,shouldReplaceBlobUris:Tb,getImageUploadUrl:Rb,getImageUploadBasePath:Ib,getImagesUploadCredentials:Sb,getImagesUploadHandler:Db,shouldUseContentCssCors:Nb}
var Pb=function(e,t,r){var n=function(t){return Ha(t,e)}
var a=function(e){return ao(ga.fromDom(t),e)}
return es(ga.fromDom(r),function(e){return n(e).isSome()},a).bind(n)}
var _b=function(e,t){var r=Math.pow(10,t)
return Math.round(e*r)/r}
var Ob=function(e,t){if(/[0-9.]+px$/.test(e))return _b(72*parseInt(e,10)/96,t||0)+"pt"
return e}
var Fb=function(e){return e.replace(/[\'\"\\]/g,"").replace(/,\s+/g,",")}
var Lb=function(e,t){return A.from(hu.DOM.getStyle(t,e,true))}
var Ub=function(e){return function(t,r){return A.from(r).map(ga.fromDom).filter(Ea).bind(function(r){return Pb(e,t,r.dom()).or(Lb(e,r.dom()))}).getOr("")}}
var Qb={getFontSize:Ub("font-size"),getFontFamily:n(Fb,Ub("font-family")),toPt:Ob}
var zb=function(e){return ad.firstPositionIn(e.getBody()).map(function(e){var t=e.container()
return Ti.isText(t)?t.parentNode:t})}
var jb=function(e,t){return e.startContainer===t&&0===e.startOffset}
var Hb=function(e){return A.from(e.selection.getRng()).bind(function(t){var r=e.getBody()
return jb(t,r)?A.none():A.from(e.selection.getStart(true))})}
var Wb=function(e,t){if(/^[0-9\.]+$/.test(t)){var r=parseInt(t,10)
if(r>=1&&r<=7){var n=Mb.getFontStyleValues(e)
var a=Mb.getFontSizeClasses(e)
return a?a[r-1]||t:n[r-1]||t}return t}return t}
var Vb=function(e,t){e.formatter.toggle("fontname",{value:Wb(e,t)})
e.nodeChanged()}
var Gb=function(e){return Hb(e).fold(function(){return zb(e).map(function(t){return Qb.getFontFamily(e.getBody(),t)}).getOr("")},function(t){return Qb.getFontFamily(e.getBody(),t)})}
var Yb=function(e,t){e.formatter.toggle("fontsize",{value:Wb(e,t)})
e.nodeChanged()}
var Jb=function(e){return Hb(e).fold(function(){return zb(e).map(function(t){return Qb.getFontSize(e.getBody(),t)}).getOr("")},function(t){return Qb.getFontSize(e.getBody(),t)})}
var qb=function(e,t){return e&&t&&e.startContainer===t.startContainer&&e.startOffset===t.startOffset&&e.endContainer===t.endContainer&&e.endOffset===t.endOffset}
var Kb={isEq:qb}
var Xb=function(e,t,r){while(e&&e!==t){if(r(e))return e
e=e.parentNode}return null}
var Zb=function(e,t,r){return null!==Xb(e,t,r)}
var $b=function(e,t,r){return Zb(e,t,function(e){return e.nodeName===r})}
var ey=function(e){return e&&"TABLE"===e.nodeName}
var ty=function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}
var ry=function(e,t){return Ns(e)&&false===Zb(e,t,kc)}
var ny=function(e,t,r){var n=new jo(t,e.getParent(t.parentNode,e.isBlock)||e.getRoot())
while(t=n[r?"prev":"next"]())if(Ti.isBr(t))return true}
var ay=function(e,t){return e.previousSibling&&e.previousSibling.nodeName===t}
var oy=function(e,t){while(t&&t!==e){if(Ti.isContentEditableFalse(t))return true
t=t.parentNode}return false}
var iy=function(e,t,r,n,a){var o,i,u
var s=e.getRoot()
var l
var c=e.schema.getNonEmptyElements()
u=e.getParent(a.parentNode,e.isBlock)||s
if(n&&Ti.isBr(a)&&t&&e.isEmpty(u))return A.some(Vl(a.parentNode,e.nodeIndex(a)))
o=new jo(a,u)
while(l=o[n?"prev":"next"]()){if("false"===e.getContentEditableParent(l)||ry(l,s))return A.none()
if(Ti.isText(l)&&l.nodeValue.length>0){if(false===$b(l,s,"A"))return A.some(Vl(l,n?l.nodeValue.length:0))
return A.none()}if(e.isBlock(l)||c[l.nodeName.toLowerCase()])return A.none()
i=l}if(r&&i)return A.some(Vl(i,0))
return A.none()}
var uy=function(e,t,r,n){var a,o,i
var u=e.getRoot()
var s,l
var c,f,d=false
a=n[(r?"start":"end")+"Container"]
o=n[(r?"start":"end")+"Offset"]
f=Ti.isElement(a)&&o===a.childNodes.length
l=e.schema.getNonEmptyElements()
c=r
if(Ns(a))return A.none()
Ti.isElement(a)&&o>a.childNodes.length-1&&(c=false)
if(Ti.isDocument(a)){a=u
o=0}if(a===u){if(c){s=a.childNodes[o>0?o-1:0]
if(s){if(Ns(s))return A.none()
if(l[s.nodeName]||ey(s))return A.none()}}if(a.hasChildNodes()){o=Math.min(!c&&o>0?o-1:o,a.childNodes.length-1)
a=a.childNodes[o]
o=Ti.isText(a)&&f?a.data.length:0
if(!t&&a===u.lastChild&&ey(a))return A.none()
if(oy(u,a)||Ns(a))return A.none()
if(a.hasChildNodes()&&false===ey(a)){s=a
i=new jo(a,u)
do{if(Ti.isContentEditableFalse(s)||Ns(s)){d=false
break}if(Ti.isText(s)&&s.nodeValue.length>0){o=c?0:s.nodeValue.length
a=s
d=true
break}if(l[s.nodeName.toLowerCase()]&&!ty(s)){o=e.nodeIndex(s)
a=s.parentNode
c||o++
d=true
break}}while(s=c?i.next():i.prev())}}}if(t){Ti.isText(a)&&0===o&&iy(e,f,t,true,a).each(function(e){a=e.container()
o=e.offset()
d=true})
if(Ti.isElement(a)){s=a.childNodes[o]
s||(s=a.childNodes[o-1])
!s||!Ti.isBr(s)||ay(s,"A")||ny(e,s,false)||ny(e,s,true)||iy(e,f,t,true,s).each(function(e){a=e.container()
o=e.offset()
d=true})}}c&&!t&&Ti.isText(a)&&o===a.nodeValue.length&&iy(e,f,t,false,a).each(function(e){a=e.container()
o=e.offset()
d=true})
return d?A.some(Vl(a,o)):A.none()}
var sy=function(e,t){var r=t.collapsed,n=t.cloneRange()
var a=Vl.fromRangeStart(t)
uy(e,r,true,n).each(function(e){r&&Vl.isAbove(a,e)||n.setStart(e.container(),e.offset())})
r||uy(e,r,false,n).each(function(e){n.setEnd(e.container(),e.offset())})
r&&n.collapse(true)
return Kb.isEq(t,n)?A.none():A.some(n)}
var ly={normalize:sy}
var cy=function(e,t,r){var n=new jo(t,r)
var a
var o=e.getNonEmptyElements()
while(a=n.next())if(o[a.nodeName.toLowerCase()]||a.length>0)return true}
var fy=function(e,t,r){var n=e.create("span",{},"&nbsp;")
r.parentNode.insertBefore(n,r)
t.scrollIntoView(n)
e.remove(n)}
var dy=function(e,t,r,n){var a=e.createRng()
if(n){a.setStartBefore(r)
a.setEndBefore(r)}else{a.setStartAfter(r)
a.setEndAfter(r)}t.setRng(a)}
var vy=function(e,t){var r=e.selection,n=e.dom
var a,o
var i=r.getRng()
ly.normalize(n,i).each(function(e){i.setStart(e.startContainer,e.startOffset)
i.setEnd(e.endContainer,e.endOffset)})
var u=i.startOffset
var s=i.startContainer
if(1===s.nodeType&&s.hasChildNodes()){var l=u>s.childNodes.length-1
s=s.childNodes[Math.min(u,s.childNodes.length-1)]||s
u=l&&3===s.nodeType?s.nodeValue.length:0}var c=n.getParent(s,n.isBlock)
var f=c?n.getParent(c.parentNode,n.isBlock):null
var d=f?f.nodeName.toUpperCase():""
var v=t&&t.ctrlKey
"LI"!==d||v||(c=f)
if(s&&3===s.nodeType&&u>=s.nodeValue.length&&!cy(e.schema,s,c)){a=n.create("br")
i.insertNode(a)
i.setStartAfter(a)
i.setEndAfter(a)
o=true}a=n.create("br")
i.insertNode(a)
fy(n,r,a)
dy(n,r,a,o)
e.undoManager.add()}
var my=function(e,t){var r=ga.fromTag("br")
Bu(ga.fromDom(t),r)
e.undoManager.add()}
var gy=function(e,t){Ay(e.getBody(),t)||Tu(ga.fromDom(t),ga.fromTag("br"))
var r=ga.fromTag("br")
Tu(ga.fromDom(t),r)
fy(e.dom,e.selection,r.dom())
dy(e.dom,e.selection,r.dom(),false)
e.undoManager.add()}
var py=function(e){return Ti.isBr(e.getNode())}
var Ay=function(e,t){return!!py(Gl.after(t))||ad.nextPosition(e,Gl.after(t)).map(function(e){return Ti.isBr(e.getNode())}).getOr(false)}
var hy=function(e){return e&&"A"===e.nodeName&&"href"in e}
var by=function(e){return e.fold(a(false),hy,hy,a(false))}
var yy=function(e){var t=i($m.isInlineTarget,e)
var r=Gl.fromRangeStart(e.selection.getRng())
return _A.readLocation(t,e.getBody(),r).filter(by)}
var wy=function(e,t){t.fold(r,i(my,e),i(gy,e),r)}
var Ey=function(e,t){var r=yy(e)
r.isSome()?r.each(i(wy,e)):vy(e,t)}
var xy={insert:Ey}
tp.generate([{before:["element"]},{on:["element","offset"]},{after:["element"]}])
var Cy=tp.generate([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}])
var ky=Wa("start","soffset","finish","foffset")
Cy.domRange
Cy.relative
Cy.exact
var By=la.detect().browser
var Ty=function(e,t){var r=xa(t)?cv(t).length:bo(t).length+1
if(e>r)return r
if(e<0)return 0
return e}
var Ry=function(e){return ky(e.start(),Ty(e.soffset(),e.start()),e.finish(),Ty(e.foffset(),e.finish()))}
var Iy=function(e,t){return so(e,t)||ao(e,t)}
var Sy=function(e){return function(t){return Iy(e,t.start())&&Iy(e,t.finish())}}
var Dy=function(e){return true===e.inline||By.isIE()}
var Ny=function(e){return ky(ga.fromDom(e.startContainer),e.startOffset,ga.fromDom(e.endContainer),e.endOffset)}
var My=function(e){var t=e.getSelection()
var r=t&&0!==t.rangeCount?A.from(t.getRangeAt(0)):A.none()
return r.map(Ny)}
var Py=function(e){var t=fo(e)
return My(t.dom()).filter(Sy(e))}
var _y=function(e,t){return A.from(t).filter(Sy(e)).map(Ry)}
var Oy=function(e){var t=document.createRange()
try{t.setStart(e.start().dom(),e.soffset())
t.setEnd(e.finish().dom(),e.foffset())
return A.some(t)}catch(e){return A.none()}}
var Fy=function(e){var t=Dy(e)?Py(ga.fromDom(e.getBody())):A.none()
e.bookmark=t.isSome()?t:e.bookmark}
var Ly=function(e,t){var r=ga.fromDom(e.getBody())
var n=Dy(e)?A.from(t):A.none()
var a=n.map(Ny).filter(Sy(r))
e.bookmark=a.isSome()?a:e.bookmark}
var Uy=function(e){var t=e.bookmark?e.bookmark:A.none()
return t.bind(i(_y,ga.fromDom(e.getBody()))).bind(Oy)}
var Qy=function(e){Uy(e).each(function(t){e.selection.setRng(t)})}
var zy={store:Fy,storeNative:Ly,readRange:My,restore:Qy,getRng:Uy,getBookmark:Py,validate:_y}
var jy=function(e,t,r,n,a,o){if("false"===e.getContentEditable(o))return
var i=r?"margin":"padding"
i="TABLE"===o.nodeName?"margin":i
i+="rtl"===e.getStyle(o,"direction",true)?"Right":"Left"
if("outdent"===t){var u=Math.max(0,parseInt(o.style[i]||0,10)-n)
e.setStyle(o,i,u?u+a:"")}else{u=parseInt(o.style[i]||0,10)+n+a
e.setStyle(o,i,u)}}
var Hy=function(e){return ai(e)||oi(e)}
var Wy=function(e){return vo(e).map(Hy).getOr(false)}
var Vy=function(e){return L(P(e.selection.getSelectedBlocks(),ga.fromDom),function(e){return!Hy(e)&&!Wy(e)})}
var Gy=function(e,t){var r=e.settings,n=e.dom,a=e.selection,o=e.formatter
var i=/[a-z%]+$/i.exec(r.indentation)[0]
var u=parseInt(r.indentation,10)
var s=e.getParam("indent_use_margin",false)
e.queryCommandState("InsertUnorderedList")||e.queryCommandState("InsertOrderedList")||r.forced_root_block||n.getParent(a.getNode(),n.isBlock)||o.apply("div")
_(Vy(e),function(e){jy(n,t,s,u,i,e.dom())})}
var Yy=Qr.each,Jy=Qr.extend
var qy=Qr.map,Ky=Qr.inArray
function Xy(e){var t,r,n
var a={state:{},exec:{},value:{}}
var o,i=e.settings
e.on("PreInit",function(){t=e.dom
r=e.selection
i=e.settings
n=e.formatter})
var u=function(t,r,n,o){var i,u,s=false
if(e.removed)return;/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(t)||o&&o.skip_focus?zy.restore(e):e.focus()
o=e.fire("BeforeExecCommand",{command:t,ui:r,value:n})
if(o.isDefaultPrevented())return false
u=t.toLowerCase()
if(i=a.exec[u]){i(u,r,n)
e.fire("ExecCommand",{command:t,ui:r,value:n})
return true}Yy(e.plugins,function(a){if(a.execCommand&&a.execCommand(t,r,n)){e.fire("ExecCommand",{command:t,ui:r,value:n})
s=true
return false}})
if(s)return s
if(e.theme&&e.theme.execCommand&&e.theme.execCommand(t,r,n)){e.fire("ExecCommand",{command:t,ui:r,value:n})
return true}try{s=e.getDoc().execCommand(t,r,n)}catch(e){}if(s){e.fire("ExecCommand",{command:t,ui:r,value:n})
return true}return false}
var s=function(t){var r
if(e.quirks.isHidden()||e.removed)return
t=t.toLowerCase()
if(r=a.state[t])return r(t)
try{return e.getDoc().queryCommandState(t)}catch(e){}return false}
var l=function(t){var r
if(e.quirks.isHidden()||e.removed)return
t=t.toLowerCase()
if(r=a.value[t])return r(t)
try{return e.getDoc().queryCommandValue(t)}catch(e){}}
var c=function(e,t){t=t||"exec"
Yy(e,function(e,r){Yy(r.toLowerCase().split(","),function(r){a[t][r]=e})})}
var f=function(t,r,n){t=t.toLowerCase()
a.exec[t]=function(t,a,o,i){return r.call(n||e,a,o,i)}}
var d=function(t){t=t.toLowerCase()
if(a.exec[t])return true
try{return e.getDoc().queryCommandSupported(t)}catch(e){}return false}
var v=function(t,r,n){t=t.toLowerCase()
a.state[t]=function(){return r.call(n||e)}}
var m=function(t,r,n){t=t.toLowerCase()
a.value[t]=function(){return r.call(n||e)}}
var g=function(e){e=e.toLowerCase()
return!!a.exec[e]}
Jy(this,{execCommand:u,queryCommandState:s,queryCommandValue:l,queryCommandSupported:d,addCommands:c,addCommand:f,addQueryStateHandler:v,addQueryValueHandler:m,hasCustomCommand:g})
var p=function(t,r,n){void 0===r&&(r=false)
void 0===n&&(n=null)
return e.getDoc().execCommand(t,r,n)}
var A=function(e){return n.match(e)}
var h=function(t,r){n.toggle(t,r?{value:r}:void 0)
e.nodeChanged()}
var b=function(e){o=r.getBookmark(e)}
var y=function(){r.moveToBookmark(o)}
c({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){e.undoManager.add()},"Cut,Copy,Paste":function(t){var r=e.getDoc()
var n
try{p(t)}catch(e){n=true}"paste"!==t||r.queryCommandEnabled(t)||(n=true)
if(n||!r.queryCommandSupported(t)){var a=e.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.")
Ie.mac&&(a=a.replace(/Ctrl\+/g,"⌘+"))
e.notificationManager.open({text:a,type:"error"})}},unlink:function(){if(r.isCollapsed()){var t=e.dom.getParent(e.selection.getStart(),"a")
t&&e.dom.remove(t,true)
return}n.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(e){var t=e.substring(7)
"full"===t&&(t="justify")
Yy("left,center,right,justify".split(","),function(e){t!==e&&n.remove("align"+e)})
"none"!==t&&h("align"+t)},"InsertUnorderedList,InsertOrderedList":function(e){var n,a
p(e)
n=t.getParent(r.getNode(),"ol,ul")
if(n){a=n.parentNode
if(/^(H[1-6]|P|ADDRESS|PRE)$/.test(a.nodeName)){b()
t.split(a,n)
y()}}},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){h(e)},"ForeColor,HiliteColor":function(e,t,r){h(e,r)},FontName:function(t,r,n){Vb(e,n)},FontSize:function(t,r,n){Yb(e,n)},RemoveFormat:function(e){n.remove(e)},mceBlockQuote:function(){h("blockquote")},FormatBlock:function(e,t,r){return h(r||"p")},mceCleanup:function(){var t=r.getBookmark()
e.setContent(e.getContent())
r.moveToBookmark(t)},mceRemoveNode:function(t,n,a){var o=a||r.getNode()
if(o!==e.getBody()){b()
e.dom.remove(o,true)
y()}},mceSelectNodeDepth:function(n,a,o){var i=0
t.getParent(r.getNode(),function(e){if(1===e.nodeType&&i++===o){r.select(e)
return false}},e.getBody())},mceSelectNode:function(e,t,n){r.select(n)},mceInsertContent:function(t,r,n){bm.insertAtCaret(e,n)},mceInsertRawHTML:function(t,n,a){r.setContent("tiny_mce_marker")
var o=e.getContent()
e.setContent(o.replace(/tiny_mce_marker/g,function(){return a}))},mceToggleFormat:function(e,t,r){h(r)},mceSetContent:function(t,r,n){e.setContent(n)},"Indent,Outdent":function(t){Gy(e,t)},mceRepaint:function(){},InsertHorizontalRule:function(){e.execCommand("mceInsertContent",false,"<hr />")},mceToggleVisualAid:function(){e.hasVisual=!e.hasVisual
e.addVisual()},mceReplaceContent:function(t,n,a){e.execCommand("mceInsertContent",false,a.replace(/\{\$selection\}/g,r.getContent({format:"text"})))},mceInsertLink:function(e,a,o){var i
"string"===typeof o&&(o={href:o})
i=t.getParent(r.getNode(),"a")
o.href=o.href.replace(" ","%20")
i&&o.href||n.remove("link")
o.href&&n.apply("link",o,i)},selectAll:function(){var e=t.getParent(r.getStart(),Ti.isContentEditableTrue)
if(e){var n=t.createRng()
n.selectNodeContents(e)
r.setRng(n)}},delete:function(){ub.deleteCommand(e)},forwardDelete:function(){ub.forwardDeleteCommand(e)},mceNewDocument:function(){e.setContent("")},InsertLineBreak:function(t,r,n){xy.insert(e,n)
return true}})
var w=function(e){return function(){var a=r.isCollapsed()?[t.getParent(r.getNode(),t.isBlock)]:r.getSelectedBlocks()
var o=qy(a,function(t){return!!n.matchNode(t,e)})
return-1!==Ky(o,true)}}
c({JustifyLeft:w("alignleft"),JustifyCenter:w("aligncenter"),JustifyRight:w("alignright"),JustifyFull:w("alignjustify"),"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return A(e)},mceBlockQuote:function(){return A("blockquote")},Outdent:function(){var e
if(i.inline_styles){if((e=t.getParent(r.getStart(),t.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return true
if((e=t.getParent(r.getEnd(),t.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return true}return s("InsertUnorderedList")||s("InsertOrderedList")||!i.inline_styles&&!!t.getParent(r.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(e){var n=t.getParent(r.getNode(),"ul,ol")
return n&&("insertunorderedlist"===e&&"UL"===n.tagName||"insertorderedlist"===e&&"OL"===n.tagName)}},"state")
c({Undo:function(){e.undoManager.undo()},Redo:function(){e.undoManager.redo()}})
m("FontName",function(){return Gb(e)},this)
m("FontSize",function(){return Jb(e)},this)}var Zy=Qr.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend"," ")
var $y=function(e){var t=this
var r,n,a={}
var o=function(){return false}
var i=function(){return true}
e=e||{}
r=e.scope||t
n=e.toggleEvent||o
var u=function(t,n){var u,s,c,f
t=t.toLowerCase()
n=n||{}
n.type=t
n.target||(n.target=r)
if(!n.preventDefault){n.preventDefault=function(){n.isDefaultPrevented=i}
n.stopPropagation=function(){n.isPropagationStopped=i}
n.stopImmediatePropagation=function(){n.isImmediatePropagationStopped=i}
n.isDefaultPrevented=o
n.isPropagationStopped=o
n.isImmediatePropagationStopped=o}e.beforeFire&&e.beforeFire(n)
u=a[t]
if(u)for(s=0,c=u.length;s<c;s++){f=u[s]
f.once&&l(t,f.func)
if(n.isImmediatePropagationStopped()){n.stopPropagation()
return n}if(false===f.func.call(r,n)){n.preventDefault()
return n}}return n}
var s=function(e,r,i,u){var s,l,c
false===r&&(r=o)
if(r){r={func:r}
u&&Qr.extend(r,u)
l=e.toLowerCase().split(" ")
c=l.length
while(c--){e=l[c]
s=a[e]
if(!s){s=a[e]=[]
n(e,true)}i?s.unshift(r):s.push(r)}}return t}
var l=function(e,r){var o,i,u,s,l
if(e){s=e.toLowerCase().split(" ")
o=s.length
while(o--){e=s[o]
i=a[e]
if(!e){for(u in a){n(u,false)
delete a[u]}return t}if(i){if(r){l=i.length
while(l--)if(i[l].func===r){i=i.slice(0,l).concat(i.slice(l+1))
a[e]=i}}else i.length=0
if(!i.length){n(e,false)
delete a[e]}}}}else{for(e in a)n(e,false)
a={}}return t}
var c=function(e,t,r){return s(e,t,r,{once:true})}
var f=function(e){e=e.toLowerCase()
return!(!a[e]||0===a[e].length)}
t.fire=u
t.on=s
t.off=l
t.once=c
t.has=f}
$y.isNative=function(e){return!!Zy[e.toLowerCase()]}
var ew=function(e){e._eventDispatcher||(e._eventDispatcher=new $y({scope:e,toggleEvent:function(t,r){$y.isNative(t)&&e.toggleNativeEvent&&e.toggleNativeEvent(t,r)}}))
return e._eventDispatcher}
var tw={fire:function(e,t,r){var n=this
if(n.removed&&"remove"!==e)return t
t=ew(n).fire(e,t,r)
if(false!==r&&n.parent){var a=n.parent()
while(a&&!t.isPropagationStopped()){a.fire(e,t,false)
a=a.parent()}}return t},on:function(e,t,r){return ew(this).on(e,t,r)},off:function(e,t){return ew(this).off(e,t)},once:function(e,t){return ew(this).once(e,t)},hasEventListeners:function(e){return ew(this).has(e)}}
var rw=function(e,t){return e.fire("PreProcess",t)}
var nw=function(e,t){return e.fire("PostProcess",t)}
var aw=function(e){return e.fire("remove")}
var ow=function(e,t){return e.fire("SwitchMode",{mode:t})}
var iw=function(e,t,r,n){e.fire("ObjectResizeStart",{target:t,width:r,height:n})}
var uw=function(e,t,r,n){e.fire("ObjectResized",{target:t,width:r,height:n})}
var sw={firePreProcess:rw,firePostProcess:nw,fireRemove:aw,fireSwitchMode:ow,fireObjectResizeStart:iw,fireObjectResized:uw}
var lw=function(e,t,r){try{e.getDoc().execCommand(t,false,r)}catch(e){}}
var cw=function(e,t,r){qu(e,t)&&false===r?Ju(e,t):r&&Gu(e,t)}
var fw=function(e,t){cw(ga.fromDom(e.getBody()),"mce-content-readonly",t)
if(t){e.selection.controlSelection.hideResizeRect()
e.readonly=true
e.getBody().contentEditable="false"}else{e.readonly=false
e.getBody().contentEditable="true"
lw(e,"StyleWithCSS",false)
lw(e,"enableInlineTableEditing",false)
lw(e,"enableObjectResizing",false)
e.focus()
e.nodeChanged()}}
var dw=function(e,t){if(t===vw(e))return
e.initialized?fw(e,"readonly"===t):e.on("init",function(){fw(e,"readonly"===t)})
sw.fireSwitchMode(e,t)}
var vw=function(e){return e.readonly?"readonly":"design"}
var mw=function(e){return true===e.readonly}
var gw=hu.DOM
var pw
var Aw=function(e,t){if("selectionchange"===t)return e.getDoc()
if(!e.inline&&/^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t))return e.getDoc().documentElement
if(e.settings.event_root){e.eventRoot||(e.eventRoot=gw.select(e.settings.event_root)[0])
return e.eventRoot}return e.getBody()}
var hw=function(e){return!e.hidden&&!e.readonly}
var bw=function(e,t,r){hw(e)?e.fire(t,r):mw(e)&&r.preventDefault()}
var yw=function(e,t){var r,n
e.delegates||(e.delegates={})
if(e.delegates[t]||e.removed)return
r=Aw(e,t)
if(e.settings.event_root){if(!pw){pw={}
e.editorManager.on("removeEditor",function(){var t
if(!e.editorManager.activeEditor&&pw){for(t in pw)e.dom.unbind(Aw(e,t))
pw=null}})}if(pw[t])return
n=function(r){var n=r.target
var a=e.editorManager.get()
var o=a.length
while(o--){var i=a[o].getBody();(i===n||gw.isChildOf(n,i))&&bw(a[o],t,r)}}
pw[t]=n
gw.bind(r,t,n)}else{n=function(r){bw(e,t,r)}
gw.bind(r,t,n)
e.delegates[t]=n}}
var ww={bindPendingEventDelegates:function(){var e=this
Qr.each(e._pendingNativeEvents,function(t){yw(e,t)})},toggleNativeEvent:function(e,t){var r=this
if("focus"===e||"blur"===e)return
if(t)r.initialized?yw(r,e):r._pendingNativeEvents?r._pendingNativeEvents.push(e):r._pendingNativeEvents=[e]
else if(r.initialized){r.dom.unbind(Aw(r,e),e,r.delegates[e])
delete r.delegates[e]}},unbindAllNativeEvents:function(){var e=this
var t=e.getBody()
var r=e.dom
var n
if(e.delegates){for(n in e.delegates)e.dom.unbind(Aw(e,n),n,e.delegates[n])
delete e.delegates}if(!e.inline&&t&&r){t.onload=null
r.unbind(e.getWin())
r.unbind(e.getDoc())}if(r){r.unbind(t)
r.unbind(e.getContainer())}}}
ww=Qr.extend({},tw,ww)
var Ew=ww
var xw=Qr.each,Cw=Qr.explode
var kw={f9:120,f10:121,f11:122}
var Bw=Qr.makeMap("alt,ctrl,shift,meta,access")
function Tw(e){var t=this
var r={}
var n=[]
var a=function(e){var t,r
var n={}
xw(Cw(e,"+"),function(e){if(e in Bw)n[e]=true
else if(/^[0-9]{2,}$/.test(e))n.keyCode=parseInt(e,10)
else{n.charCode=e.charCodeAt(0)
n.keyCode=kw[e]||e.toUpperCase().charCodeAt(0)}})
t=[n.keyCode]
for(r in Bw)n[r]?t.push(r):n[r]=false
n.id=t.join(",")
if(n.access){n.alt=true
Ie.mac?n.ctrl=true:n.shift=true}if(n.meta)if(Ie.mac)n.meta=true
else{n.ctrl=true
n.meta=false}return n}
var o=function(t,r,n,o){var i
i=Qr.map(Cw(t,">"),a)
i[i.length-1]=Qr.extend(i[i.length-1],{func:n,scope:o||e})
return Qr.extend(i[0],{desc:e.translate(r),subpatterns:i.slice(1)})}
var i=function(e){return e.altKey||e.ctrlKey||e.metaKey}
var u=function(e){return"keydown"===e.type&&e.keyCode>=112&&e.keyCode<=123}
var s=function(e,t){if(!t)return false
if(t.ctrl!==e.ctrlKey||t.meta!==e.metaKey)return false
if(t.alt!==e.altKey||t.shift!==e.shiftKey)return false
if(e.keyCode===t.keyCode||e.charCode&&e.charCode===t.charCode){e.preventDefault()
return true}return false}
var l=function(e){return e.func?e.func.call(e.scope):null}
e.on("keyup keypress keydown",function(e){if((i(e)||u(e))&&!e.isDefaultPrevented()){xw(r,function(t){if(s(e,t)){n=t.subpatterns.slice(0)
"keydown"===e.type&&l(t)
return true}})
if(s(e,n[0])){1===n.length&&"keydown"===e.type&&l(n[0])
n.shift()}}})
t.add=function(t,n,a,i){var u
u=a
"string"===typeof a?a=function(){e.execCommand(u,false,null)}:Qr.isArray(u)&&(a=function(){e.execCommand(u[0],u[1],u[2])})
xw(Cw(Qr.trim(t.toLowerCase())),function(e){var t=o(e,n,a,i)
r[t.id]=t})
return true}
t.remove=function(e){var t=o(e)
if(r[t.id]){delete r[t.id]
return true}return false}}var Rw=function(e){var t=lo(e).dom()
return e.dom()===t.activeElement}
var Iw=function(e){var t=void 0!==e?e.dom():document
return A.from(t.activeElement).map(ga.fromDom)}
var Sw=function(e){return Iw(lo(e)).filter(function(t){return e.dom().contains(t.dom())})}
var Dw=function(e,t){return e.dom.getParent(t,function(t){return"true"===e.dom.getContentEditable(t)})}
var Nw=function(e){return e.collapsed?A.from(Al(e.startContainer,e.startOffset)).map(ga.fromDom):A.none()}
var Mw=function(e,t){return Nw(t).bind(function(t){return ui(t)?A.some(t):false===so(e,t)?A.some(e):A.none()})}
var Pw=function(e,t){Mw(ga.fromDom(e.getBody()),t).bind(function(e){return ad.firstPositionIn(e.dom())}).fold(function(){e.selection.normalize()
return},function(t){return e.selection.setRng(t.toRange())})}
var _w=function(e){if(e.setActive)try{e.setActive()}catch(t){e.focus()}else e.focus()}
var Ow=function(e){return Rw(e)||Sw(e).isSome()}
var Fw=function(e){return e.iframeElement&&Rw(ga.fromDom(e.iframeElement))}
var Lw=function(e){var t=e.getBody()
return t&&Ow(ga.fromDom(t))}
var Uw=function(e){return e.inline?Lw(e):Fw(e)}
var Qw=function(e){var t=e.selection,r=e.settings.content_editable
var n=e.getBody()
var a=t.getRng()
e.quirks.refreshContentEditable()
var o=Dw(e,t.getNode())
if(e.$.contains(n,o)){_w(o)
Pw(e,a)
zw(e)
return}void 0!==e.bookmark&&false===Uw(e)&&zy.getRng(e).each(function(t){e.selection.setRng(t)
a=t})
if(!r){Ie.opera||_w(n)
e.getWin().focus()}if(Ie.gecko||r){_w(n)
Pw(e,a)}zw(e)}
var zw=function(e){return e.editorManager.setActive(e)}
var jw=function(e,t){if(e.removed)return
t?zw(e):Qw(e)}
var Hw={focus:jw,hasFocus:Uw}
var Ww=function(e,t){var r=t.dom()
return r[e]}
var Vw=function(e,t){return parseInt(za(t,e),10)}
var Gw=i(Ww,"clientWidth")
var Yw=i(Ww,"clientHeight")
var Jw=i(Vw,"margin-top")
var qw=i(Vw,"margin-left")
var Kw=function(e){return e.dom().getBoundingClientRect()}
var Xw=function(e,t,r){var n=Gw(e)
var a=Yw(e)
return t>=0&&r>=0&&t<=n&&r<=a}
var Zw=function(e,t,r,n){var a=Kw(t)
var o=e?a.left+t.dom().clientLeft+qw(t):0
var i=e?a.top+t.dom().clientTop+Jw(t):0
var u=r-o
var s=n-i
return{x:u,y:s}}
var $w=function(e,t,r){var n=ga.fromDom(e.getBody())
var a=e.inline?n:co(n)
var o=Zw(e.inline,a,t,r)
return Xw(a,o.x,o.y)}
var eE=function(e){return A.from(e).map(ga.fromDom)}
var tE=function(e){var t=e.inline?e.getBody():e.getContentAreaContainer()
return eE(t).map(function(e){return so(lo(e),e)}).getOr(false)}
var rE={isXYInContentArea:$w,isEditorAttachedToDom:tE}
function nE(){var e=function(){throw new Error("Theme did not provide a NotificationManager implementation.")}
return{open:e,close:e,reposition:e,getArgs:e}}function aE(e){var t=[]
var r=function(){var t=e.theme
return t&&t.getNotificationManagerImpl?t.getNotificationManagerImpl():nE()}
var n=function(){return A.from(t[0])}
var a=function(e,t){return e.type===t.type&&e.text===t.text&&!e.progressBar&&!e.timeout&&!t.progressBar&&!t.timeout}
var o=function(){t.length>0&&r().reposition(t)}
var i=function(e){t.push(e)}
var u=function(e){j(t,function(t){return t===e}).each(function(e){t.splice(e,1)})}
var s=function(n){if(e.removed||!rE.isEditorAttachedToDom(e))return
return z(t,function(e){return a(r().getArgs(e),n)}).getOrThunk(function(){e.editorManager.setActive(e)
var t=r().open(n,function(){u(t)
o()})
i(t)
o()
return t})}
var l=function(){n().each(function(e){r().close(e)
u(e)
o()})}
var c=function(){return t}
var f=function(e){e.on("SkinLoaded",function(){var t=e.settings.service_message
t&&s({text:t,type:"warning",timeout:0,icon:""})})
e.on("ResizeEditor ResizeWindow",function(){Ue.requestAnimationFrame(o)})
e.on("remove",function(){_(t.slice(),function(e){r().close(e)})})}
f(e)
return{open:s,close:l,getNotifications:c}}function oE(){var e=function(){throw new Error("Theme did not provide a WindowManager implementation.")}
return{open:e,alert:e,confirm:e,close:e,getParams:e,setParams:e}}function iE(e){var t=[]
var r=function(){var t=e.theme
return t&&t.getWindowManagerImpl?t.getWindowManagerImpl():oE()}
var n=function(e,t){return function(){return t?t.apply(e,arguments):void 0}}
var a=function(t){e.fire("OpenWindow",{win:t})}
var o=function(t){e.fire("CloseWindow",{win:t})}
var i=function(e){t.push(e)
a(e)}
var u=function(r){j(t,function(e){return e===r}).each(function(n){t.splice(n,1)
o(r)
0===t.length&&e.focus()})}
var s=function(){return A.from(t[t.length-1])}
var l=function(t,n){e.editorManager.setActive(e)
zy.store(e)
var a=r().open(t,n,u)
i(a)
return a}
var c=function(e,t,a){var o=r().alert(e,n(a||this,t),u)
i(o)}
var f=function(e,t,a){var o=r().confirm(e,n(a||this,t),u)
i(o)}
var d=function(){s().each(function(e){r().close(e)
u(e)})}
var v=function(){return s().map(r().getParams).getOr(null)}
var m=function(e){s().each(function(t){r().setParams(t,e)})}
var g=function(){return t}
e.on("remove",function(){_(t.slice(0),function(e){r().close(e)})})
return{windows:t,open:l,alert:c,confirm:f,close:d,getParams:v,setParams:m,getWindows:g}}var uE=ku.PluginManager
var sE=function(e,t){for(var r in uE.urls){var n=uE.urls[r]+"/plugin"+t+".js"
if(n===e)return r}return null}
var lE=function(e,t){var r=sE(t,e.suffix)
return r?"Failed to load plugin: "+r+" from url "+t:"Failed to load plugin url: "+t}
var cE=function(e,t){e.notificationManager.open({type:"error",text:t})}
var fE=function(e,t){e._skinLoaded?cE(e,t):e.on("SkinLoaded",function(){cE(e,t)})}
var dE=function(e,t){fE(e,"Failed to upload image: "+t)}
var vE=function(e,t){fE(e,lE(e,t))}
var mE=function(e){var t=[]
for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
var n=window.console
n&&(n.error?n.error.apply(n,arguments):n.log.apply(n,arguments))}
var gE={pluginLoadError:vE,uploadError:dE,displayError:fE,initError:mE}
var pE=ku.PluginManager
var AE=ku.ThemeManager
function hE(){var e=ue.getOrDie("XMLHttpRequest")
return new e}function bE(e,t){var r={}
var n=function(e,t){if(e)return e.replace(/\/$/,"")+"/"+t.replace(/^\//,"")
return t}
var a=function(e,r,a,o){var i,u
i=hE()
i.open("POST",t.url)
i.withCredentials=t.credentials
i.upload.onprogress=function(e){o(e.loaded/e.total*100)}
i.onerror=function(){a("Image upload failed due to a XHR Transport error. Code: "+i.status)}
i.onload=function(){var e
if(i.status<200||i.status>=300){a("HTTP Error: "+i.status)
return}e=JSON.parse(i.responseText)
if(!e||"string"!==typeof e.location){a("Invalid JSON: "+i.responseText)
return}r(n(t.basePath,e.location))}
u=new FormData
u.append("file",e.blob(),e.filename())
i.send(u)}
var o=function(){return new De(function(e){e([])})}
var i=function(e,t){return{url:t,blobInfo:e,status:true}}
var u=function(e,t){return{url:"",blobInfo:e,status:false,error:t}}
var s=function(e,t){Qr.each(r[e],function(e){e(t)})
delete r[e]}
var l=function(t,r,n){e.markPending(t.blobUri())
return new De(function(a){var o,l
var c=function(){}
try{var f=function(){if(o){o.close()
l=c}}
var d=function(r){f()
e.markUploaded(t.blobUri(),r)
s(t.blobUri(),i(t,r))
a(i(t,r))}
var v=function(r){f()
e.removeFailed(t.blobUri())
s(t.blobUri(),u(t,r))
a(u(t,r))}
l=function(e){if(e<0||e>100)return
o||(o=n())
o.progressBar.value(e)}
r(t,d,v,l)}catch(e){a(u(t,e.message))}})}
var c=function(e){return e===a}
var f=function(e){var t=e.blobUri()
return new De(function(e){r[t]=r[t]||[]
r[t].push(e)})}
var d=function(r,n){r=Qr.grep(r,function(t){return!e.isUploaded(t.blobUri())})
return De.all(Qr.map(r,function(r){return e.isPending(r.blobUri())?f(r):l(r,t.handler,n)}))}
var v=function(e,r){return!t.url&&c(t.handler)?o():d(e,r)}
false===k(t.handler)&&(t.handler=a)
return{upload:v}}function yE(){var e=ue.getOrDie("FileReader")
return new e}function wE(e){var t=ue.getOrDie("Uint8Array")
return new t(e)}var EE=function(e){var t=ue.getOrDie("requestAnimationFrame")
t(e)}
var xE=function(e){var t=ue.getOrDie("atob")
return t(e)}
var CE={atob:xE,requestAnimationFrame:EE}
var kE=function(e){return new De(function(t,r){var n=function(){r("Cannot convert "+e+" to Blob. Resource might not exist or is inaccessible.")}
try{var a=hE()
a.open("GET",e,true)
a.responseType="blob"
a.onload=function(){200===this.status?t(this.response):n()}
a.onerror=n
a.send()}catch(e){n()}})}
var BE=function(e){var t,r
var n=decodeURIComponent(e).split(",")
r=/data:([^;]+)/.exec(n[0])
r&&(t=r[1])
return{type:t,data:n[1]}}
var TE=function(e){return new De(function(t){var r,n,a
var o=BE(e)
try{r=CE.atob(o.data)}catch(e){t(new Blob([]))
return}n=wE(r.length)
for(a=0;a<n.length;a++)n[a]=r.charCodeAt(a)
t(new Blob([n],{type:o.type}))})}
var RE=function(e){if(0===e.indexOf("blob:"))return kE(e)
if(0===e.indexOf("data:"))return TE(e)
return null}
var IE=function(e){return new De(function(t){var r=yE()
r.onloadend=function(){t(r.result)}
r.readAsDataURL(e)})}
var SE={uriToBlob:RE,blobToDataUri:IE,parseDataUri:BE}
var DE=0
var NE=function(e){return(e||"blobid")+DE++}
var ME=function(e,t,r,n){var a,o
if(0===t.src.indexOf("blob:")){o=e.getByUri(t.src)
o?r({image:t,blobInfo:o}):SE.uriToBlob(t.src).then(function(n){SE.blobToDataUri(n).then(function(i){a=SE.parseDataUri(i).data
o=e.create(NE(),n,a)
e.add(o)
r({image:t,blobInfo:o})})},function(e){n(e)})
return}a=SE.parseDataUri(t.src).data
o=e.findFirst(function(e){return e.base64()===a})
o?r({image:t,blobInfo:o}):SE.uriToBlob(t.src).then(function(n){o=e.create(NE(),n,a)
e.add(o)
r({image:t,blobInfo:o})},function(e){n(e)})}
var PE=function(e){return e?te(e.getElementsByTagName("img")):[]}
function _E(e,t){var r={}
var n=function(n,o){var i
o||(o=a(true))
i=L(PE(n),function(t){var r=t.src
if(!Ie.fileApi)return false
if(t.hasAttribute("data-mce-bogus"))return false
if(t.hasAttribute("data-mce-placeholder"))return false
if(!r||r===Ie.transparentSrc)return false
if(0===r.indexOf("blob:"))return!e.isUploaded(r)&&o(t)
if(0===r.indexOf("data:"))return o(t)
return false})
var u=P(i,function(e){if(r[e.src])return new De(function(t){r[e.src].then(function(r){if("string"===typeof r)return r
t({image:e,blobInfo:r.blobInfo})})})
var n=new De(function(r,n){ME(t,e,r,n)}).then(function(e){delete r[e.image.src]
return e}).catch(function(t){delete r[e.src]
return t})
r[e.src]=n
return n})
return De.all(u)}
return{findAll:n}}var OE=0
var FE=function(){var e=function(){return Math.round(4294967295*Math.random()).toString(36)}
var t=(new Date).getTime()
return"s"+t.toString(36)+e()+e()+e()}
var LE=function(e){return e+OE+++FE()}
var UE={uuid:LE}
function QE(){var e=[]
var t=function(e){var t={"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"}
return t[e.toLowerCase()]||"dat"}
var r=function(e,t,r,a){if(y(e)){var o=e
return n({id:o,name:a,blob:t,base64:r})}if(w(e))return n(e)
throw new Error("Unknown input type")}
var n=function(e){var r,n
if(!e.blob||!e.base64)throw new Error("blob and base64 representations of the image are required for BlobInfo to be created")
r=e.id||UE.uuid("blobid")
n=e.name||r
return{id:a(r),name:a(n),filename:a(n+"."+t(e.blob.type)),blob:a(e.blob),base64:a(e.base64),blobUri:a(e.blobUri||fe.createObjectURL(e.blob)),uri:a(e.uri)}}
var o=function(t){i(t.id())||e.push(t)}
var i=function(e){return u(function(t){return t.id()===e})}
var u=function(t){return L(e,t)[0]}
var s=function(e){return u(function(t){return t.blobUri()===e})}
var l=function(t){e=L(e,function(e){if(e.blobUri()===t){fe.revokeObjectURL(e.blobUri())
return false}return true})}
var c=function(){_(e,function(e){fe.revokeObjectURL(e.blobUri())})
e=[]}
return{create:r,add:o,get:i,getByUri:s,findFirst:u,removeByUri:l,destroy:c}}function zE(){var e=1,t=2
var r={}
var n=function(e,t){return{status:e,resultUri:t}}
var a=function(e){return e in r}
var o=function(e){var t=r[e]
return t?t.resultUri:null}
var i=function(t){return!!a(t)&&r[t].status===e}
var u=function(e){return!!a(e)&&r[e].status===t}
var s=function(t){r[t]=n(e,null)}
var l=function(e,a){r[e]=n(t,a)}
var c=function(e){delete r[e]}
var f=function(){r={}}
return{hasBlobUri:a,getResultUri:o,isPending:i,isUploaded:u,markPending:s,markUploaded:l,removeFailed:c,destroy:f}}function jE(e){var t=QE()
var r,n
var a=zE()
var o=[]
var i=function(t){return function(r){if(e.selection)return t(r)
return[]}}
var u=function(){return"?"+(new Date).getTime()}
var s=function(e,t,r){var n=0
do{n=e.indexOf(t,n)
if(-1!==n){e=e.substring(0,n)+r+e.substr(n+t.length)
n+=r.length-t.length+1}}while(-1!==n)
return e}
var l=function(e,t,r){e=s(e,'src="'+t+'"','src="'+r+'"')
e=s(e,'data-mce-src="'+t+'"','data-mce-src="'+r+'"')
return e}
var c=function(t,r){_(e.undoManager.data,function(e){"fragmented"===e.type?e.fragments=P(e.fragments,function(e){return l(e,t,r)}):e.content=l(e.content,t,r)})}
var f=function(){return e.notificationManager.open({text:e.translate("Image uploading..."),type:"info",timeout:-1,progressBar:true})}
var d=function(r,n){t.removeByUri(r.src)
c(r.src,n)
e.$(r).attr({src:Mb.shouldReuseFileName(e)?n+u():n,"data-mce-src":e.convertURL(n,"src")})}
var v=function(t){r||(r=bE(a,{url:Mb.getImageUploadUrl(e),basePath:Mb.getImageUploadBasePath(e),credentials:Mb.getImagesUploadCredentials(e),handler:Mb.getImagesUploadHandler(e)}))
return A().then(i(function(n){var a
a=P(n,function(e){return e.blobInfo})
return r.upload(a,f).then(i(function(r){var a=P(r,function(t,r){var a=n[r].image
t.status&&Mb.shouldReplaceBlobUris(e)?d(a,t.url):t.error&&gE.uploadError(e,t.error)
return{element:a,status:t.status}})
t&&t(a)
return a}))}))}
var m=function(t){if(Mb.isAutomaticUploadsEnabled(e))return v(t)}
var g=function(t){if(false===Y(o,function(e){return e(t)}))return false
if(0===t.getAttribute("src").indexOf("data:")){var r=Mb.getImagesDataImgFilter(e)
return r(t)}return true}
var p=function(e){o.push(e)}
var A=function(){n||(n=_E(a,t))
return n.findAll(e.getBody(),g).then(i(function(t){t=L(t,function(t){if("string"===typeof t){gE.displayError(e,t)
return false}return true})
_(t,function(e){c(e.image.src,e.blobInfo.blobUri())
e.image.src=e.blobInfo.blobUri()
e.image.removeAttribute("data-mce-src")})
return t}))}
var h=function(){t.destroy()
a.destroy()
n=r=null}
var b=function(r){return r.replace(/src="(blob:[^"]+)"/g,function(r,n){var o=a.getResultUri(n)
if(o)return'src="'+o+'"'
var i=t.getByUri(n)
i||(i=Q(e.editorManager.get(),function(e,t){return e||t.editorUpload&&t.editorUpload.blobCache.getByUri(n)},null))
if(i){var u=i.blob()
return'src="data:'+u.type+";base64,"+i.base64()+'"'}return r})}
e.on("setContent",function(){Mb.isAutomaticUploadsEnabled(e)?m():A()})
e.on("RawSaveContent",function(e){e.content=b(e.content)})
e.on("getContent",function(e){if(e.source_view||"raw"===e.format)return
e.content=b(e.content)})
e.on("PostRender",function(){e.parser.addNodeFilter("img",function(e){_(e,function(e){var r=e.attr("src")
if(t.getByUri(r))return
var n=a.getResultUri(r)
n&&e.attr("src",n)})})})
return{blobCache:t,addFilter:p,uploadImages:v,uploadImagesAuto:m,scanForImages:A,destroy:h}}var HE=function(e,t){return e.hasOwnProperty(t.nodeName)}
var WE=function(e,t){return!!Ti.isText(t)||!!Ti.isElement(t)&&!HE(e,t)&&!Rd.isBookmarkNode(t)}
var VE=function(e,t,r){return M(Dg.parents(ga.fromDom(r),ga.fromDom(t)),function(t){return HE(e,t.dom())})}
var GE=function(e,t){if(Ti.isText(t)){if(0===t.nodeValue.length)return true
if(/^\s+$/.test(t.nodeValue)&&(!t.nextSibling||HE(e,t.nextSibling)))return true}return false}
var YE=function(e){var t=e.settings,r=e.dom,n=e.selection
var a=e.schema,o=a.getBlockElements()
var i=n.getStart()
var u=e.getBody()
var s
var l,c,f,d,v
var m,g,p
var A,h
h=t.forced_root_block
if(!i||!Ti.isElement(i)||!h)return
A=u.nodeName.toLowerCase()
if(!a.isValidChild(A,h.toLowerCase())||VE(o,u,i))return
s=n.getRng()
l=s.startContainer
c=s.startOffset
f=s.endContainer
d=s.endOffset
p=Hw.hasFocus(e)
i=u.firstChild
while(i)if(WE(o,i)){if(GE(o,i)){m=i
i=i.nextSibling
r.remove(m)
continue}if(!v){v=r.create(h,e.settings.forced_root_block_attrs)
i.parentNode.insertBefore(v,i)
g=true}m=i
i=i.nextSibling
v.appendChild(m)}else{v=null
i=i.nextSibling}if(g&&p){s.setStart(l,c)
s.setEnd(f,d)
n.setRng(s)
e.nodeChanged()}}
var JE=function(e){e.settings.forced_root_block&&e.on("NodeChange",i(YE,e))}
var qE={setup:JE}
var KE=function(e){var t=e.startContainer,r=e.startOffset
return Ti.isText(t)?0===r?A.some(ga.fromDom(t)):A.none():A.from(t.childNodes[r]).map(ga.fromDom)}
var XE=function(e){var t=e.endContainer,r=e.endOffset
return Ti.isText(t)?r===t.data.length?A.some(ga.fromDom(t)):A.none():A.from(t.childNodes[r-1]).map(ga.fromDom)}
var ZE=function(e){return wo(e).fold(a([e]),function(t){return[e].concat(ZE(t))})}
var $E=function(e){return Eo(e).fold(a([e]),function(t){return"br"===ba(t)?go(t).map(function(t){return[e].concat($E(t))}).getOr([]):[e].concat($E(t))})}
var ex=function(e,t){return yl([KE(t),XE(t)],function(t,r){var n=z(ZE(e),i(ao,t))
var a=z($E(e),i(ao,r))
return n.isSome()&&a.isSome()}).getOr(false)}
var tx=function(e,t,r,n){var a=r,o=new jo(r,a)
var i=e.schema.getNonEmptyElements()
do{if(3===r.nodeType&&0!==Qr.trim(r.nodeValue).length){n?t.setStart(r,0):t.setEnd(r,r.nodeValue.length)
return}if(i[r.nodeName]&&!/^(TD|TH)$/.test(r.nodeName)){n?t.setStartBefore(r):"BR"===r.nodeName?t.setEndBefore(r):t.setEndAfter(r)
return}if(Ie.ie&&Ie.ie<11&&e.isBlock(r)&&e.isEmpty(r)){n?t.setStart(r,0):t.setEnd(r,0)
return}}while(r=n?o.next():o.prev())
"BODY"===a.nodeName&&(n?t.setStart(a,0):t.setEnd(a,a.childNodes.length))}
var rx=function(e){var t=e.selection.getSel()
return t&&t.rangeCount>0}
function nx(e){var t,r=[]
var n=function(t){var n,a
a=e.$(t).parentsUntil(e.getBody()).add(t)
if(a.length===r.length){for(n=a.length;n>=0;n--)if(a[n]!==r[n])break
if(-1===n){r=a
return true}}r=a
return false}
"onselectionchange"in e.getDoc()||e.on("NodeChange Click MouseUp KeyUp Focus",function(r){var n,a
n=e.selection.getRng()
a={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset}
"nodechange"!==r.type&&Kb.isEq(a,t)||e.fire("SelectionChange")
t=a})
e.on("contextmenu",function(){e.fire("SelectionChange")})
e.on("SelectionChange",function(){var t=e.selection.getStart(true)
if(!t||!Ie.range&&e.selection.isCollapsed())return
rx(e)&&!n(t)&&e.dom.isChildOf(t,e.getBody())&&e.nodeChanged({selectionChange:true})})
e.on("MouseUp",function(t){!t.isDefaultPrevented()&&rx(e)&&("IMG"===e.selection.getNode().nodeName?Ue.setEditorTimeout(e,function(){e.nodeChanged()}):e.nodeChanged())})
this.nodeChanged=function(t){var r=e.selection
var n,a,o
if(e.initialized&&r&&!e.settings.disable_nodechange&&!e.readonly){o=e.getBody()
n=r.getStart(true)||o
n.ownerDocument===e.getDoc()&&e.dom.isChildOf(n,o)||(n=o)
a=[]
e.dom.getParent(n,function(e){if(e===o)return true
a.push(e)})
t=t||{}
t.element=n
t.parents=a
e.fire("NodeChange",t)}}}var ax=function(e){var t,r,n,a
a=e.getBoundingClientRect()
t=e.ownerDocument
r=t.documentElement
n=t.defaultView
return{top:a.top+n.pageYOffset-r.clientTop,left:a.left+n.pageXOffset-r.clientLeft}}
var ox=function(e){return e.inline?ax(e.getBody()):{left:0,top:0}}
var ix=function(e){var t=e.getBody()
return e.inline?{left:t.scrollLeft,top:t.scrollTop}:{left:0,top:0}}
var ux=function(e){var t=e.getBody(),r=e.getDoc().documentElement
var n={left:t.scrollLeft,top:t.scrollTop}
var a={left:t.scrollLeft||r.scrollLeft,top:t.scrollTop||r.scrollTop}
return e.inline?n:a}
var sx=function(e,t){if(t.target.ownerDocument!==e.getDoc()){var r=ax(e.getContentAreaContainer())
var n=ux(e)
return{left:t.pageX-r.left+n.left,top:t.pageY-r.top+n.top}}return{left:t.pageX,top:t.pageY}}
var lx=function(e,t,r){return{pageX:r.left-e.left+t.left,pageY:r.top-e.top+t.top}}
var cx=function(e,t){return lx(ox(e),ix(e),sx(e,t))}
var fx={calc:cx}
var dx=Ti.isContentEditableFalse,vx=Ti.isContentEditableTrue
var mx=function(e,t){return dx(t)&&t!==e}
var gx=function(e,t,r){if(t===r||e.dom.isChildOf(t,r))return false
if(dx(t))return false
return true}
var px=function(e){var t=e.cloneNode(true)
t.removeAttribute("data-mce-selected")
return t}
var Ax=function(e,t,r,n){var a=t.cloneNode(true)
e.dom.setStyles(a,{width:r,height:n})
e.dom.setAttrib(a,"data-mce-selected",null)
var o=e.dom.create("div",{class:"mce-drag-container","data-mce-bogus":"all",unselectable:"on",contenteditable:"false"})
e.dom.setStyles(o,{position:"absolute",opacity:.5,overflow:"hidden",border:0,padding:0,margin:0,width:r,height:n})
e.dom.setStyles(a,{margin:0,boxSizing:"border-box"})
o.appendChild(a)
return o}
var hx=function(e,t){e.parentNode!==t&&t.appendChild(e)}
var bx=function(e,t,r,n,a,o){var i=0,u=0
e.style.left=t.pageX+"px"
e.style.top=t.pageY+"px"
t.pageX+r>a&&(i=t.pageX+r-a)
t.pageY+n>o&&(u=t.pageY+n-o)
e.style.width=r-i+"px"
e.style.height=n-u+"px"}
var yx=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)}
var wx=function(e){return 0===e.button}
var Ex=function(e){return e.element}
var xx=function(e,t){return{pageX:t.pageX-e.relX,pageY:t.pageY+5}}
var Cx=function(e,t){return function(r){if(wx(r)){var n=z(t.dom.getParents(r.target),Cl.or(dx,vx)).getOr(null)
if(mx(t.getBody(),n)){var a=t.dom.getPos(n)
var o=t.getBody()
var i=t.getDoc().documentElement
e.element=n
e.screenX=r.screenX
e.screenY=r.screenY
e.maxX=(t.inline?o.scrollWidth:i.offsetWidth)-2
e.maxY=(t.inline?o.scrollHeight:i.offsetHeight)-2
e.relX=r.pageX-a.x
e.relY=r.pageY-a.y
e.width=n.offsetWidth
e.height=n.offsetHeight
e.ghost=Ax(t,n,e.width,e.height)}}}}
var kx=function(e,t){var r=Ue.throttle(function(e,r){t._selectionOverrides.hideFakeCaret()
t.selection.placeCaretAt(e,r)},0)
return function(n){var a=Math.max(Math.abs(n.screenX-e.screenX),Math.abs(n.screenY-e.screenY))
if(Ex(e)&&!e.dragging&&a>10){var o=t.fire("dragstart",{target:e.element})
if(o.isDefaultPrevented())return
e.dragging=true
t.focus()}if(e.dragging){var i=xx(e,fx.calc(t,n))
hx(e.ghost,t.getBody())
bx(e.ghost,i,e.width,e.height,e.maxX,e.maxY)
r(n.clientX,n.clientY)}}}
var Bx=function(e){var t=e.getSel().getRangeAt(0)
var r=t.startContainer
return 3===r.nodeType?r.parentNode:r}
var Tx=function(e,t){return function(r){if(e.dragging&&gx(t,Bx(t.selection),e.element)){var n=px(e.element)
var a=t.fire("drop",{targetClone:n,clientX:r.clientX,clientY:r.clientY})
if(!a.isDefaultPrevented()){n=a.targetClone
t.undoManager.transact(function(){yx(e.element)
t.insertContent(t.dom.getOuterHTML(n))
t._selectionOverrides.hideFakeCaret()})}}Ix(e)}}
var Rx=function(e,t){return function(){e.dragging&&t.fire("dragend")
Ix(e)}}
var Ix=function(e){e.dragging=false
e.element=null
yx(e.ghost)}
var Sx=function(e){var t={}
var r,n,a,o,i,u
r=hu.DOM
u=document
n=Cx(t,e)
a=kx(t,e)
o=Tx(t,e)
i=Rx(t,e)
e.on("mousedown",n)
e.on("mousemove",a)
e.on("mouseup",o)
r.bind(u,"mousemove",a)
r.bind(u,"mouseup",i)
e.on("remove",function(){r.unbind(u,"mousemove",a)
r.unbind(u,"mouseup",i)})}
var Dx=function(e){e.on("drop",function(t){var r="undefined"!==typeof t.clientX?e.getDoc().elementFromPoint(t.clientX,t.clientY):null;(dx(r)||dx(e.dom.getContentEditableParent(r)))&&t.preventDefault()})}
var Nx=function(e){Sx(e)
Dx(e)}
var Mx={init:Nx}
var Px=function(e){var t=function(t){return P(t,function(t){t=il(t)
t.node=e
return t})}
if(Ti.isElement(e))return t(e.getClientRects())
if(Ti.isText(e)){var r=e.ownerDocument.createRange()
r.setStart(e,0)
r.setEnd(e,e.data.length)
return t(r.getClientRects())}}
var _x=function(e){return Q(e,function(e,t){return e.concat(Px(t))},[])}
var Ox;(function(e){e[e["Up"]=-1]="Up"
e[e["Down"]=1]="Down"})(Ox||(Ox={}))
var Fx=function(e,t,r,n){while(n=lf(n,e,al,t))if(r(n))return}
var Lx=function(e,t,r,n,a,o){var i,u=0
var s=[]
var l
var c=function(n){var o,i,c
c=_x([n]);-1===e&&(c=c.reverse())
for(o=0;o<c.length;o++){i=c[o]
if(r(i,l))continue
s.length>0&&t(i,Tr.last(s))&&u++
i.line=u
if(a(i))return true
s.push(i)}}
l=Tr.last(o.getClientRects())
if(!l)return s
i=o.getNode()
c(i)
Fx(e,n,c,i)
return s}
var Ux=function(e,t){return t.line>e}
var Qx=function(e,t){return t.line===e}
var zx=i(Lx,Ox.Up,cl,fl)
var jx=i(Lx,Ox.Down,fl,cl)
var Hx=function(e,t,r,n){var a=Vf(t)
var o,i,u,s
var l=[]
var c,f,d=0
var v=function(t){if(1===e)return Tr.last(t.getClientRects())
return Tr.last(t.getClientRects())}
if(1===e){o=a.next
i=fl
u=cl
s=Gl.after(n)}else{o=a.prev
i=cl
u=fl
s=Gl.before(n)}f=v(s)
do{if(!s.isVisible())continue
c=v(s)
if(u(c,f))continue
l.length>0&&i(c,Tr.last(l))&&d++
c=il(c)
c.position=s
c.line=d
if(r(c))return l
l.push(c)}while(s=o(s))
return l}
var Wx=function(e){return function(t){return Ux(e,t)}}
var Vx=function(e){return function(t){return Qx(e,t)}}
var Gx=Ti.isContentEditableFalse
var Yx=lf
var Jx=function(e,t){return Math.abs(e.left-t)}
var qx=function(e,t){return Math.abs(e.right-t)}
var Kx=function(e,t){return e>=t.left&&e<=t.right}
var Xx=function(e,t){return Tr.reduce(e,function(e,r){var n,a
n=Math.min(Jx(e,t),qx(e,t))
a=Math.min(Jx(r,t),qx(r,t))
if(Kx(t,r))return r
if(Kx(t,e))return e
if(a===n&&Gx(r.node))return r
if(a<n)return r
return e})}
var Zx=function(e,t,r,n){while(n=Yx(n,e,al,t))if(r(n))return}
var $x=function(e,t){var r=[]
var n=function(e,n){var a
a=L(_x([n]),function(r){return!e(r,t)})
r=r.concat(a)
return 0===a.length}
r.push(t)
Zx(Ox.Up,e,i(n,cl),t.node)
Zx(Ox.Down,e,i(n,fl),t.node)
return r}
var eC=function(e){return L(te(e.getElementsByTagName("*")),Jc)}
var tC=function(e,t){return{node:e.node,before:Jx(e,t)<qx(e,t)}}
var rC=function(e,t,r){var n
var a=_x(eC(e))
var o=L(a,function(e){return r>=e.top&&r<=e.bottom})
n=Xx(o,t)
if(n){n=Xx($x(e,n),t)
if(n&&Jc(n.node))return tC(n,t)}return null}
var nC=function(e,t,r){if(r.collapsed)return false
return Q(r.getClientRects(),function(r,n){return r||dl(n,e,t)},false)}
var aC={isXYWithinRange:nC}
var oC=Ti.isContentEditableTrue
var iC=Ti.isContentEditableFalse
var uC=function(e,t,r,n,a){return t._selectionOverrides.showCaret(e,r,n,a)}
var sC=function(e){var t=e.ownerDocument.createRange()
t.selectNode(e)
return t}
var lC=function(e,t){var r=e.fire("BeforeObjectSelected",{target:t})
if(r.isDefaultPrevented())return null
return sC(t)}
var cC=function(e,t,r){var n=hf(1,e.getBody(),t)
var a=Gl.fromRangeStart(n)
var o=a.getNode()
if(iC(o))return uC(1,e,o,!a.isAtEnd(),false)
var i=a.getNode(true)
if(iC(i))return uC(1,e,i,false,false)
var u=e.dom.getParent(a.getNode(),function(e){return iC(e)||oC(e)})
if(iC(u))return uC(1,e,u,false,r)
return null}
var fC=function(e,t,r){if(!t||!t.collapsed)return t
var n=cC(e,t,r)
if(n)return n
return t}
var dC=function(e){var t=Ou(function(){if(!e.removed){var t=e.selection.getRng()
if(t.collapsed){var r=fC(e,e.selection.getRng(),false)
e.selection.setRng(r)}}},0)
e.on("focus",function(){t.throttle()})
e.on("blur",function(){t.cancel()})}
var vC={setup:dC}
var mC={BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(e){return Ie.mac?e.metaKey:e.ctrlKey&&!e.altKey}}
var gC=Ti.isContentEditableTrue
var pC=Ti.isContentEditableFalse
var AC=Cf
var hC=xf
var bC=function(e,t){var r=e.getBody()
while(t&&t!==r){if(gC(t)||pC(t))return t
t=t.parentNode}return null}
var yC=function(e){var t=function(t){return e.dom.isBlock(t)}
var r=e.getBody()
var n=Gc(e.getBody(),t,function(){return Hw.hasFocus(e)})
var a="sel-"+e.dom.uniqueId()
var o
var i=function(t){return e.dom.hasClass(t,"mce-offscreen-selection")}
var u=function(){var t=e.dom.get(a)
return t?t.getElementsByTagName("*")[0]:t}
var s=function(t){t&&e.selection.setRng(t)}
var l=function(){return e.selection.getRng()}
var c=function(t,r,a,o){void 0===o&&(o=true)
var i
i=e.fire("ShowCaret",{target:r,direction:t,before:a})
if(i.isDefaultPrevented())return null
o&&e.selection.scrollIntoView(r,-1===t)
return n.show(a,r)}
var f=function(e,t){t=hf(e,r,t)
if(-1===e)return Gl.fromRangeStart(t)
return Gl.fromRangeEnd(t)}
var d=function(t){if(t.hasAttribute("data-mce-caret")){js(t)
s(l())
e.selection.scrollIntoView(t[0])}}
var v=function(){e.on("mouseup",function(t){var r=l()
r.collapsed&&rE.isXYInContentArea(e,t.clientX,t.clientY)&&s(cC(e,r,false))})
e.on("click",function(t){var r
r=bC(e,t.target)
if(r){if(pC(r)){t.preventDefault()
e.focus()}gC(r)&&e.dom.isChildOf(r,e.selection.getNode())&&h()}})
e.on("blur NewBlock",function(){h()})
e.on("ResizeWindow FullscreenStateChanged",function(){return n.reposition()})
var t=function(e){var t=false
e.on("touchstart",function(){t=false})
e.on("touchmove",function(){t=true})
e.on("touchend",function(r){var n=bC(e,r.target)
if(pC(n)&&!t){r.preventDefault()
A(lC(e,n))}})}
var a=function(e){var t=Vf(e)
if(!e.firstChild)return false
var r=Gl.before(e.firstChild)
var n=t.next(r)
return n&&!hC(n)&&!AC(n)}
var f=function(t,r){var n=e.dom.getParent(t,e.dom.isBlock)
var a=e.dom.getParent(r,e.dom.isBlock)
return n===a}
var d=function(t,r){var n=e.dom.getParent(t,e.dom.isBlock)
var o=e.dom.getParent(r,e.dom.isBlock)
if(n&&e.dom.isChildOf(n,o)&&false===pC(bC(e,n)))return true
return n&&!f(n,o)&&a(n)}
t(e)
e.on("mousedown",function(t){var n
var a=t.target
if(a!==r&&"HTML"!==a.nodeName&&!e.dom.isChildOf(a,r))return
if(false===rE.isXYInContentArea(e,t.clientX,t.clientY))return
n=bC(e,a)
if(n)if(pC(n)){t.preventDefault()
A(lC(e,n))}else{h()
if(!(gC(n)&&t.shiftKey)&&!aC.isXYWithinRange(t.clientX,t.clientY,e.selection.getRng())){y()
e.selection.placeCaretAt(t.clientX,t.clientY)}}else if(false===Jc(a)){h()
y()
var o=rC(r,t.clientX,t.clientY)
if(o&&!d(t.target,o.node)){t.preventDefault()
var i=c(1,o.node,o.before,false)
e.getBody().focus()
s(i)}}})
e.on("keypress",function(t){if(mC.modifierPressed(t))return
t.keyCode
pC(e.selection.getNode())&&t.preventDefault()})
e.on("getSelectionRange",function(e){var t=e.range
if(o){if(!o.parentNode){o=null
return}t=t.cloneRange()
t.selectNode(o)
e.range=t}})
e.on("setSelectionRange",function(e){var t
t=A(e.range,e.forward)
t&&(e.range=t)})
var v=function(e){return"mcepastebin"===e.id}
e.on("AfterSetSelectionRange",function(e){var t=e.range
p(t)||v(t.startContainer.parentNode)||y()
i(t.startContainer.parentNode)||h()})
e.on("copy",function(e){var t=e.clipboardData
if(!e.isDefaultPrevented()&&e.clipboardData&&!Ie.ie){var r=u()
if(r){e.preventDefault()
t.clearData()
t.setData("text/html",r.outerHTML)
t.setData("text/plain",r.outerText)}}})
Mx.init(e)
vC.setup(e)}
var m=function(){var t=e.contentStyles,r=".mce-content-body"
t.push(n.getCss())
t.push(r+" .mce-offscreen-selection {position: absolute;left: -9999999999px;max-width: 1000000px;}"+r+" *[contentEditable=false] {cursor: default;}"+r+" *[contentEditable=true] {cursor: text;}")}
var g=function(e){return Ns(e)||Us(e)||Qs(e)}
var p=function(e){return g(e.startContainer)||g(e.endContainer)}
var A=function(t,r){var n
var i=e.$
var u=e.dom
var s,l,d,v,m,g,A,h,b
if(!t)return null
if(t.collapsed){if(!p(t))if(false===r){A=f(-1,t)
if(Jc(A.getNode(true)))return c(-1,A.getNode(true),false,false)
if(Jc(A.getNode()))return c(-1,A.getNode(),!A.isAtEnd(),false)}else{A=f(1,t)
if(Jc(A.getNode()))return c(1,A.getNode(),!A.isAtEnd(),false)
if(Jc(A.getNode(true)))return c(1,A.getNode(true),false,false)}return null}d=t.startContainer
v=t.startOffset
m=t.endOffset
if(3===d.nodeType&&0===v&&pC(d.parentNode)){d=d.parentNode
v=u.nodeIndex(d)
d=d.parentNode}if(1!==d.nodeType)return null
m===v+1&&(n=d.childNodes[v])
if(!pC(n))return null
h=b=n.cloneNode(true)
g=e.fire("ObjectSelected",{target:n,targetClone:h})
if(g.isDefaultPrevented())return null
s=rs(ga.fromDom(e.getBody()),"#"+a).fold(function(){return i([])},function(e){return i([e.dom()])})
h=g.targetClone
if(0===s.length){s=i('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",a)
s.appendTo(e.getBody())}t=e.dom.createRng()
if(h===b&&Ie.ie){s.empty().append('<p style="font-size: 0" data-mce-bogus="all"> </p>').append(h)
t.setStartAfter(s[0].firstChild.firstChild)
t.setEndAfter(h)}else{s.empty().append(" ").append(h).append(" ")
t.setStart(s[0].firstChild,1)
t.setEnd(s[0].lastChild,0)}s.css({top:u.getPos(n,e.getBody()).y})
s[0].focus()
l=e.selection.getSel()
l.removeAllRanges()
l.addRange(t)
_(Xu(ga.fromDom(e.getBody()),"*[data-mce-selected]"),function(e){Oa(e,"data-mce-selected")})
n.setAttribute("data-mce-selected","1")
o=n
y()
return t}
var h=function(){if(o){o.removeAttribute("data-mce-selected")
rs(ga.fromDom(e.getBody()),"#"+a).each(Pu)
o=null}rs(ga.fromDom(e.getBody()),"#"+a).each(Pu)
o=null}
var b=function(){n.destroy()
o=null}
var y=function(){n.hide()}
if(Ie.ceFalse){v()
m()}return{showCaret:c,showBlockCaretContainer:d,hideFakeCaret:y,destroy:b}}
var wC=function(e){return 0===e.indexOf("data-")||0===e.indexOf("aria-")}
var EC=function(e){return e.replace(/<!--|-->/g,"")}
var xC=function(e,t){return!e.allow_html_data_urls&&(/^data:image\//i.test(t)?false===e.allow_svg_data_urls&&/^data:image\/svg\+xml/i.test(t):/^data:/i.test(t))}
var CC=function(e,t,r){var n,a,o,i,u=1
i=e.getShortEndedElements()
o=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g
o.lastIndex=n=r
while(a=o.exec(t)){n=o.lastIndex
if("/"===a[1])u--
else if(!a[1]){if(a[2]in i)continue
u++}if(0===u)break}return n}
function kC(e,t){void 0===t&&(t=iu())
var r=function(){}
e=e||{}
false!==e.fix_self_closing&&(e.fix_self_closing=true)
var n=e.comment?e.comment:r
var a=e.cdata?e.cdata:r
var o=e.text?e.text:r
var i=e.start?e.start:r
var u=e.end?e.end:r
var s=e.pi?e.pi:r
var l=e.doctype?e.doctype:r
var c=function(r){var c,f,d,v=0
var m=[]
var g,p,A,h
var b,y,w,E,x
var C,k,B,T,R,I,S
var D,N,M,P
var _,O,F,L,U,Q,z=0
var j=qi.decode
var H
var W=Qr.makeMap("src,href,data,background,formaction,poster,xlink:href")
var V=/((java|vb)script|mhtml):/i
var G=function(e){var t,r
t=m.length
while(t--)if(m[t].name===e)break
if(t>=0){for(r=m.length-1;r>=t;r--){e=m[r]
e.valid&&u(e.name)}m.length=t}}
var Y=function(t,r,n,a,o){var i,u
var s=/[\s\u0000-\u001F]+/g
r=r.toLowerCase()
n=r in E?r:j(n||a||o||"")
if(C&&!b&&false===wC(r)){i=I[r]
if(!i&&S){u=S.length
while(u--){i=S[u]
if(i.pattern.test(r))break}-1===u&&(i=null)}if(!i)return
if(i.validValues&&!(n in i.validValues))return}if(W[r]&&!e.allow_script_urls){var l=n.replace(s,"")
try{l=decodeURIComponent(l)}catch(e){l=unescape(l)}if(V.test(l))return
if(xC(e,l))return}if(b&&(r in W||0===r.indexOf("on")))return
g.map[r]=n
g.push({name:r,value:n})}
F=new RegExp("<(?:(?:!--([\\w\\W]*?)--\x3e)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g")
L=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g
w=t.getShortEndedElements()
O=e.self_closing_elements||t.getSelfClosingElements()
E=t.getBoolAttrs()
C=e.validate
y=e.remove_internals
H=e.fix_self_closing
U=t.getSpecialElements()
P=r+">"
while(c=F.exec(P)){v<c.index&&o(j(r.substr(v,c.index-v)))
if(f=c[6]){f=f.toLowerCase()
":"===f.charAt(0)&&(f=f.substr(1))
G(f)}else if(f=c[7]){if(c.index+c[0].length>r.length){o(j(r.substr(c.index)))
v=c.index+c[0].length
continue}f=f.toLowerCase()
":"===f.charAt(0)&&(f=f.substr(1))
x=f in w
H&&O[f]&&m.length>0&&m[m.length-1].name===f&&G(f)
if(!C||(k=t.getElementRule(f))){B=true
if(C){I=k.attributes
S=k.attributePatterns}if(R=c[8]){b=-1!==R.indexOf("data-mce-type")
b&&y&&(B=false)
g=[]
g.map={}
R.replace(L,Y)}else{g=[]
g.map={}}if(C&&!b){D=k.attributesRequired
N=k.attributesDefault
M=k.attributesForced
_=k.removeEmptyAttrs
_&&!g.length&&(B=false)
if(M){p=M.length
while(p--){T=M[p]
h=T.name
Q=T.value
"{$uid}"===Q&&(Q="mce_"+z++)
g.map[h]=Q
g.push({name:h,value:Q})}}if(N){p=N.length
while(p--){T=N[p]
h=T.name
if(!(h in g.map)){Q=T.value
"{$uid}"===Q&&(Q="mce_"+z++)
g.map[h]=Q
g.push({name:h,value:Q})}}}if(D){p=D.length
while(p--)if(D[p]in g.map)break;-1===p&&(B=false)}if(T=g.map["data-mce-bogus"]){if("all"===T){v=CC(t,r,F.lastIndex)
F.lastIndex=v
continue}B=false}}B&&i(f,g,x)}else B=false
if(d=U[f]){d.lastIndex=v=c.index+c[0].length
if(c=d.exec(r)){B&&(A=r.substr(v,c.index-v))
v=c.index+c[0].length}else{A=r.substr(v)
v=r.length}if(B){A.length>0&&o(A,true)
u(f)}F.lastIndex=v
continue}x||(R&&R.indexOf("/")===R.length-1?B&&u(f):m.push({name:f,valid:B}))}else if(f=c[1]){">"===f.charAt(0)&&(f=" "+f)
e.allow_conditional_comments||"[if"!==f.substr(0,3).toLowerCase()||(f=" "+f)
n(f)}else(f=c[2])?a(EC(f)):(f=c[3])?l(f):(f=c[4])&&s(f,c[5])
v=c.index+c[0].length}v<r.length&&o(j(r.substr(v)))
for(p=m.length-1;p>=0;p--){f=m[p]
f.valid&&u(f.name)}}
return{parse:c}}(function(e){e.findEndTag=CC})(kC||(kC={}))
var BC=kC
var TC=function(e,t){var r=new RegExp(["\\s?("+e.join("|")+')="[^"]+"'].join("|"),"gi")
return t.replace(r,"")}
var RC=function(e,t){var r=t
var n=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g
var a,o,i,u,s
var l=e.schema
r=TC(e.getTempAttrs(),r)
s=l.getShortEndedElements()
while(u=n.exec(r)){o=n.lastIndex
i=u[0].length
a=s[u[1]]?o:BC.findEndTag(l,r,o)
r=r.substring(0,o-i)+r.substring(a)
n.lastIndex=o-i}return Ts.trim(r)}
var IC=RC
var SC={trimExternal:IC,trimInternal:RC}
var DC=0,NC=1,MC=2
var PC=function(e,t){var r=e.length+t.length+2
var n=new Array(r)
var a=new Array(r)
var o=function(e,t,r){return{start:e,end:t,diag:r}}
var i=function(r,n,a,o,u){var l=s(r,n,a,o)
if(null===l||l.start===n&&l.diag===n-o||l.end===r&&l.diag===r-a){var c=r
var f=a
while(c<n||f<o)if(c<n&&f<o&&e[c]===t[f]){u.push([DC,e[c]]);++c;++f}else if(n-r>o-a){u.push([MC,e[c]]);++c}else{u.push([NC,t[f]]);++f}}else{i(r,l.start,a,l.start-l.diag,u)
for(var d=l.start;d<l.end;++d)u.push([DC,e[d]])
i(l.end,n,l.end-l.diag,o,u)}}
var u=function(r,n,a,i){var u=r
while(u-n<i&&u<a&&e[u]===t[u-n])++u
return o(r,u,n)}
var s=function(r,o,i,s){var l=o-r
var c=s-i
if(0===l||0===c)return null
var f=l-c
var d=c+l
var v=(d%2===0?d:d+1)/2
n[1+v]=r
a[1+v]=o+1
var m,g,p,A,h
for(m=0;m<=v;++m){for(g=-m;g<=m;g+=2){p=g+v
g===-m||g!==m&&n[p-1]<n[p+1]?n[p]=n[p+1]:n[p]=n[p-1]+1
A=n[p]
h=A-r+i-g
while(A<o&&h<s&&e[A]===t[h]){n[p]=++A;++h}if(f%2!==0&&f-m<=g&&g<=f+m&&a[p-f]<=n[p])return u(a[p-f],g+r-i,o,s)}for(g=f-m;g<=f+m;g+=2){p=g+v-f
g===f-m||g!==f+m&&a[p+1]<=a[p-1]?a[p]=a[p+1]-1:a[p]=a[p-1]
A=a[p]-1
h=A-r+i-g
while(A>=r&&h>=i&&e[A]===t[h]){a[p]=A--
h--}if(f%2===0&&-m<=g&&g<=m&&a[p]<=n[p+f])return u(a[p],g+r-i,o,s)}}}
var l=[]
i(0,e.length,0,t.length,l)
return l}
var _C={KEEP:DC,DELETE:MC,INSERT:NC,diff:PC}
var OC=function(e){if(Ti.isElement(e))return e.outerHTML
if(Ti.isText(e))return qi.encodeRaw(e.data,false)
if(Ti.isComment(e))return"\x3c!--"+e.data+"--\x3e"
return""}
var FC=function(e){var t,r,n
n=document.createElement("div")
t=document.createDocumentFragment()
e&&(n.innerHTML=e)
while(r=n.firstChild)t.appendChild(r)
return t}
var LC=function(e,t,r){var n=FC(t)
if(e.hasChildNodes()&&r<e.childNodes.length){var a=e.childNodes[r]
a.parentNode.insertBefore(n,a)}else e.appendChild(n)}
var UC=function(e,t){if(e.hasChildNodes()&&t<e.childNodes.length){var r=e.childNodes[t]
r.parentNode.removeChild(r)}}
var QC=function(e,t){var r=0
_(e,function(e){if(e[0]===_C.KEEP)r++
else if(e[0]===_C.INSERT){LC(t,e[1],r)
r++}else e[0]===_C.DELETE&&UC(t,r)})}
var zC=function(e){return L(P(te(e.childNodes),OC),function(e){return e.length>0})}
var jC=function(e,t){var r=P(te(t.childNodes),OC)
QC(_C.diff(r,e),t)
return t}
var HC={read:zC,write:jC}
var WC=Lu(A.none())
var VC=function(){return WC.get().getOrThunk(function(){var e=document.implementation.createHTMLDocument("undo")
WC.set(A.some(e))
return e})}
var GC=function(e){return-1!==e.indexOf("</iframe>")}
var YC=function(e){return{type:"fragmented",fragments:e,content:"",bookmark:null,beforeBookmark:null}}
var JC=function(e){return{type:"complete",fragments:null,content:e,bookmark:null,beforeBookmark:null}}
var qC=function(e){var t,r,n
t=HC.read(e.getBody())
n=G(t,function(t){var r=SC.trimInternal(e.serializer,t)
return r.length>0?[r]:[]})
r=n.join("")
return GC(r)?YC(n):JC(r)}
var KC=function(e,t,r){"fragmented"===t.type?HC.write(t.fragments,e.getBody()):e.setContent(t.content,{format:"raw"})
e.selection.moveToBookmark(r?t.beforeBookmark:t.bookmark)}
var XC=function(e){return"fragmented"===e.type?e.fragments.join(""):e.content}
var ZC=function(e){var t=ga.fromTag("body",VC())
xs(t,XC(e))
_(Xu(t,"*[data-mce-bogus]"),_u)
return Es(t)}
var $C=function(e,t){return XC(e)===XC(t)}
var ek=function(e,t){return ZC(e)===ZC(t)}
var tk=function(e,t){return!(!e||!t)&&(!!$C(e,t)||ek(e,t))}
var rk={createFragmentedLevel:YC,createCompleteLevel:JC,createFromEditor:qC,applyToEditor:KC,isEq:tk}
function nk(e){var t,r,n=this,a=0,o=[],i=0
var u=function(){return 0===i}
var s=function(e){u()&&(n.typing=e)}
var l=function(t){e.setDirty(t)}
var c=function(e){s(false)
n.add({},e)}
var f=function(){if(n.typing){s(false)
n.add()}}
e.on("init",function(){n.add()})
e.on("BeforeExecCommand",function(e){var t=e.command
if("Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t){f()
n.beforeChange()}})
e.on("ExecCommand",function(e){var t=e.command
"Undo"!==t&&"Redo"!==t&&"mceRepaint"!==t&&c(e)})
e.on("ObjectResizeStart Cut",function(){n.beforeChange()})
e.on("SaveContent ObjectResized blur",c)
e.on("DragEnd",c)
e.on("KeyUp",function(t){var a=t.keyCode
if(t.isDefaultPrevented())return
if(a>=33&&a<=36||a>=37&&a<=40||45===a||t.ctrlKey){c()
e.nodeChanged()}46!==a&&8!==a||e.nodeChanged()
if(r&&n.typing&&false===rk.isEq(rk.createFromEditor(e),o[0])){if(false===e.isDirty()){l(true)
e.fire("change",{level:o[0],lastLevel:null})}e.fire("TypingUndo")
r=false
e.nodeChanged()}})
e.on("KeyDown",function(e){var t=e.keyCode
if(e.isDefaultPrevented())return
if(t>=33&&t<=36||t>=37&&t<=40||45===t){n.typing&&c(e)
return}var a=e.ctrlKey&&!e.altKey||e.metaKey
if((t<16||t>20)&&224!==t&&91!==t&&!n.typing&&!a){n.beforeChange()
s(true)
n.add({},e)
r=true}})
e.on("MouseDown",function(e){n.typing&&c(e)})
var d=function(e){return"insertReplacementText"===e.inputType}
var v=function(e){return"insertText"===e.inputType&&null===e.data}
e.on("input",function(e){e.inputType&&(d(e)||v(e))&&c(e)})
e.addShortcut("meta+z","","Undo")
e.addShortcut("meta+y,meta+shift+z","","Redo")
e.on("AddUndo Undo Redo ClearUndos",function(t){t.isDefaultPrevented()||e.nodeChanged()})
n={data:o,typing:false,beforeChange:function(){u()&&(t=xc.getUndoBookmark(e.selection))},add:function(r,n){var i
var s=e.settings
var c,f
f=rk.createFromEditor(e)
r=r||{}
r=Qr.extend(r,f)
if(false===u()||e.removed)return null
c=o[a]
if(e.fire("BeforeAddUndo",{level:r,lastLevel:c,originalEvent:n}).isDefaultPrevented())return null
if(c&&rk.isEq(c,r))return null
o[a]&&(o[a].beforeBookmark=t)
if(s.custom_undo_redo_levels&&o.length>s.custom_undo_redo_levels){for(i=0;i<o.length-1;i++)o[i]=o[i+1]
o.length--
a=o.length}r.bookmark=xc.getUndoBookmark(e.selection)
a<o.length-1&&(o.length=a+1)
o.push(r)
a=o.length-1
var d={level:r,lastLevel:c,originalEvent:n}
e.fire("AddUndo",d)
if(a>0){l(true)
e.fire("change",d)}return r},undo:function(){var t
if(n.typing){n.add()
n.typing=false
s(false)}if(a>0){t=o[--a]
rk.applyToEditor(e,t,true)
l(true)
e.fire("undo",{level:t})}return t},redo:function(){var t
if(a<o.length-1){t=o[++a]
rk.applyToEditor(e,t,false)
l(true)
e.fire("redo",{level:t})}return t},clear:function(){o=[]
a=0
n.typing=false
n.data=o
e.fire("ClearUndos")},hasUndo:function(){return a>0||n.typing&&o[0]&&!rk.isEq(rk.createFromEditor(e),o[0])},hasRedo:function(){return a<o.length-1&&!n.typing},transact:function(e){f()
n.beforeChange()
n.ignore(e)
return n.add()},ignore:function(e){try{i++
e()}finally{i--}},extra:function(t,r){var i,u
if(n.transact(t)){u=o[a].bookmark
i=o[a-1]
rk.applyToEditor(e,i,true)
n.transact(r)&&(o[a-1].beforeBookmark=u)}}}
return n}var ak=zd.isEq
var ok=function(e,t,r){var n=e.formatter.get(r)
if(n)for(var a=0;a<n.length;a++)if(false===n[a].inherit&&e.dom.is(t,n[a].selector))return true
return false}
var ik=function(e,t,r,n){var a=e.dom.getRoot()
if(t===a)return false
t=e.dom.getParent(t,function(t){if(ok(e,t,r))return true
return t.parentNode===a||!!lk(e,t,r,n,true)})
return lk(e,t,r,n)}
var uk=function(e,t,r){if(ak(t,r.inline))return true
if(ak(t,r.block))return true
if(r.selector)return 1===t.nodeType&&e.is(t,r.selector)}
var sk=function(e,t,r,n,a,o){var i,u
var s=r[n]
var l
if(r.onmatch)return r.onmatch(t,r,n)
if(s)if("undefined"===typeof s.length){for(i in s)if(s.hasOwnProperty(i)){u="attributes"===n?e.getAttrib(t,i):zd.getStyle(e,t,i)
if(a&&!u&&!r.exact)return
if((!a||r.exact)&&!ak(u,zd.normalizeStyleValue(e,zd.replaceVars(s[i],o),i)))return}}else for(l=0;l<s.length;l++)if("attributes"===n?e.getAttrib(t,s[l]):zd.getStyle(e,t,s[l]))return r
return r}
var lk=function(e,t,r,n,a){var o=e.formatter.get(r)
var i,u,s,l
var c=e.dom
if(o&&t)for(u=0;u<o.length;u++){i=o[u]
if(uk(e.dom,t,i)&&sk(c,t,i,"attributes",a,n)&&sk(c,t,i,"styles",a,n)){if(l=i.classes)for(s=0;s<l.length;s++)if(!e.dom.hasClass(t,l[s]))return
return i}}}
var ck=function(e,t,r,n){var a
if(n)return ik(e,n,t,r)
n=e.selection.getNode()
if(ik(e,n,t,r))return true
a=e.selection.getStart()
if(a!==n&&ik(e,a,t,r))return true
return false}
var fk=function(e,t,r){var n
var a=[]
var o={}
n=e.selection.getStart()
e.dom.getParent(n,function(n){var i,u
for(i=0;i<t.length;i++){u=t[i]
if(!o[u]&&lk(e,n,u,r)){o[u]=true
a.push(u)}}},e.dom.getRoot())
return a}
var dk=function(e,t){var r=e.formatter.get(t)
var n,a,o,i,u
var s=e.dom
if(r){n=e.selection.getStart()
a=zd.getParents(s,n)
for(i=r.length-1;i>=0;i--){u=r[i].selector
if(!u||r[i].defaultBlock)return true
for(o=a.length-1;o>=0;o--)if(s.is(a[o],u))return true}}return false}
var vk={matchNode:lk,matchName:uk,match:ck,matchAll:fk,canApply:dk,matchesUnInheritedFormatSelector:ok}
var mk=function(e,t){return e.splitText(t)}
var gk=function(e){var t=e.startContainer,r=e.startOffset,n=e.endContainer,a=e.endOffset
if(t===n&&Ti.isText(t)){if(r>0&&r<t.nodeValue.length){n=mk(t,r)
t=n.previousSibling
if(a>r){a-=r
t=n=mk(n,a).previousSibling
a=n.nodeValue.length
r=0}else a=0}}else{if(Ti.isText(t)&&r>0&&r<t.nodeValue.length){t=mk(t,r)
r=0}if(Ti.isText(n)&&a>0&&a<n.nodeValue.length){n=mk(n,a).previousSibling
a=n.nodeValue.length}}return{startContainer:t,startOffset:r,endContainer:n,endOffset:a}}
var pk={split:gk}
var Ak=Ts.ZWSP,hk="_mce_caret"
var bk=function(e,t){return e.importNode(t,true)}
var yk=function(e){var t=[]
while(e){if(3===e.nodeType&&e.nodeValue!==Ak||e.childNodes.length>1)return[]
1===e.nodeType&&t.push(e)
e=e.firstChild}return t}
var wk=function(e){return yk(e).length>0}
var Ek=function(e){var t
if(e){t=new jo(e,e)
for(e=t.current();e;e=t.next())if(3===e.nodeType)return e}return null}
var xk=function(e){var t=ga.fromTag("span")
Ma(t,{id:hk,"data-mce-bogus":"1","data-mce-type":"format-caret"})
e&&Iu(t,ga.fromText(Ak))
return t}
var Ck=function(e){var t=Ek(e)
t&&t.nodeValue.charAt(0)===Ak&&t.deleteData(0,1)
return t}
var kk=function(e,t,r){void 0===r&&(r=true)
var n=e.dom,a=e.selection
if(wk(t))Hp.deleteElement(e,false,ga.fromDom(t),r)
else{var o=a.getRng()
var i=n.getParent(t,n.isBlock)
var u=Ck(t)
o.startContainer===u&&o.startOffset>0&&o.setStart(u,o.startOffset-1)
o.endContainer===u&&o.endOffset>0&&o.setEnd(u,o.endOffset-1)
n.remove(t,true)
i&&n.isEmpty(i)&&qv.fillWithPaddingBr(ga.fromDom(i))
a.setRng(o)}}
var Bk=function(e,t,r){void 0===r&&(r=true)
var n=e.dom,a=e.selection
if(t)kk(e,t,r)
else{t=Bc(e.getBody(),a.getStart())
if(!t)while(t=n.get(hk))kk(e,t,false)}}
var Tk=function(e,t,r){var n=e.dom,a=n.getParent(r,i(zd.isTextBlock,e))
if(a&&n.isEmpty(a))r.parentNode.replaceChild(t,r)
else{qv.removeTrailingBr(ga.fromDom(r))
n.isEmpty(r)?r.parentNode.replaceChild(t,r):n.insertAfter(t,r)}}
var Rk=function(e,t){e.appendChild(t)
return t}
var Ik=function(e,t){var r=U(e,function(e,t){return Rk(e,t.cloneNode(false))},t)
return Rk(r,r.ownerDocument.createTextNode(Ak))}
var Sk=function(e,t,r){var n,a,o,i,u,s,l
var c=e.selection
n=c.getRng(true)
i=n.startOffset
s=n.startContainer
l=s.nodeValue
a=Bc(e.getBody(),c.getStart())
a&&(o=Ek(a))
var f=/[^\s\u00a0\u00ad\u200b\ufeff]/
if(l&&i>0&&i<l.length&&f.test(l.charAt(i))&&f.test(l.charAt(i-1))){u=c.getBookmark()
n.collapse(true)
n=rv.expandRng(e,n,e.formatter.get(t))
n=pk.split(n)
e.formatter.apply(t,r,n)
c.moveToBookmark(u)}else{if(a&&o.nodeValue===Ak)e.formatter.apply(t,r,a)
else{a=bk(e.getDoc(),xk(true).dom())
o=a.firstChild
n.insertNode(a)
i=1
e.formatter.apply(t,r,a)}c.setCursorLocation(o,i)}}
var Dk=function(e,t,r,n){var a=e.dom,o=e.selection
var i,u,s
var l,c,f
var d=[],v=o.getRng()
var m
i=v.startContainer
u=v.startOffset
c=i
if(3===i.nodeType){u!==i.nodeValue.length&&(l=true)
c=c.parentNode}while(c){if(vk.matchNode(e,c,t,r,n)){f=c
break}c.nextSibling&&(l=true)
d.push(c)
c=c.parentNode}if(!f)return
if(l){s=o.getBookmark()
v.collapse(true)
var g=rv.expandRng(e,v,e.formatter.get(t),true)
g=pk.split(g)
e.formatter.remove(t,r,g)
o.moveToBookmark(s)}else{m=Bc(e.getBody(),f)
var p=xk(false).dom()
var A=Ik(d,p)
Tk(e,p,m||f)
kk(e,m,false)
o.setCursorLocation(A,1)
a.isEmpty(f)&&a.remove(f)}}
var Nk=function(e,t){var r=e.selection,n=e.getBody()
Bk(e,null,false)
8!==t&&46!==t||!r.isCollapsed()||r.getStart().innerHTML!==Ak||Bk(e,Bc(n,r.getStart()))
37!==t&&39!==t||Bk(e,Bc(n,r.getStart()))}
var Mk=function(e){e.on("mouseup keydown",function(t){Nk(e,t.keyCode)})}
var Pk=function(e,t){var r=xk(false)
var n=Ik(t,r.dom())
Bu(ga.fromDom(e),r)
Pu(ga.fromDom(e))
return Gl(n,0)}
var _k=function(e,t){var r=e.schema.getTextInlineElements()
return r.hasOwnProperty(ba(t))&&!kc(t.dom())&&!Ti.isBogus(t.dom())}
var Ok=function(e){return kc(e.dom())&&wk(e.dom())}
var Fk={},Lk=Tr.filter,Uk=Tr.each
var Qk=function(e,t){var r=Fk[e]
r||(Fk[e]=r=[])
Fk[e].push(t)}
var zk=function(e,t){Uk(Fk[e],function(e){e(t)})}
Qk("pre",function(e){var t=e.selection.getRng()
var r,n
var a=function(e){return r(e.previousSibling)&&-1!==Tr.indexOf(n,e.previousSibling)}
var o=function(e,t){un(t).remove()
un(e).append("<br><br>").append(t.childNodes)}
r=Ti.matchNodeNames("pre")
if(!t.collapsed){n=e.selection.getSelectedBlocks()
Uk(Lk(Lk(n,r),a),function(e){o(e.previousSibling,e)})}})
var jk={postProcess:zk}
var Hk=/^(src|href|style)$/
var Wk=Qr.each
var Vk=zd.isEq
var Gk=function(e){return/^(TH|TD)$/.test(e.nodeName)}
var Yk=function(e,t,r){return e.isChildOf(t,r)&&t!==r&&!e.isBlock(r)}
var Jk=function(e,t,r){var n,a,o
n=t[r?"startContainer":"endContainer"]
a=t[r?"startOffset":"endOffset"]
if(Ti.isElement(n)){o=n.childNodes.length-1
!r&&a&&a--
n=n.childNodes[a>o?o:a]}Ti.isText(n)&&r&&a>=n.nodeValue.length&&(n=new jo(n,e.getBody()).next()||n)
Ti.isText(n)&&!r&&0===a&&(n=new jo(n,e.getBody()).prev()||n)
return n}
var qk=function(e,t,r,n){var a=e.create(r,n)
t.parentNode.insertBefore(a,t)
a.appendChild(t)
return a}
var Kk=function(e,t,r,n,a){var o=ga.fromDom(t)
var i=ga.fromDom(e.create(n,a))
var u=r?ho(o):Ao(o)
Nu(i,u)
if(r){Bu(o,i)
Ru(i,o)}else{Tu(o,i)
Iu(i,o)}return i.dom()}
var Xk=function(e,t,r){if(Vk(t,r.inline))return true
if(Vk(t,r.block))return true
if(r.selector)return Ti.isElement(t)&&e.is(t,r.selector)}
var Zk=function(e,t){return t.links&&"A"===e.tagName}
var $k=function(e,t,r,n){t=zd.getNonWhiteSpaceSibling(t,r,n)
return!t||"BR"===t.nodeName||e.isBlock(t)}
var eB=function(e,t,r){var n=t.parentNode
var a
var o=e.dom,i=e.settings.forced_root_block
if(r.block)if(i)n===o.getRoot()&&(r.list_block&&Vk(t,r.list_block)||Wk(Qr.grep(t.childNodes),function(t){if(zd.isValid(e,i,t.nodeName.toLowerCase()))if(a)a.appendChild(t)
else{a=qk(o,t,i)
o.setAttribs(a,e.settings.forced_root_block_attrs)}else a=0}))
else if(o.isBlock(t)&&!o.isBlock(n)){$k(o,t,false)||$k(o,t.firstChild,true,1)||t.insertBefore(o.create("br"),t.firstChild)
$k(o,t,true)||$k(o,t.lastChild,false,1)||t.appendChild(o.create("br"))}if(r.selector&&r.inline&&!Vk(r.inline,t))return
o.remove(t,1)}
var tB=function(e,t,r,n,a){var o,i,u
var s=e.dom
if(!Xk(s,n,t)&&!Zk(n,t))return false
if("all"!==t.remove){Wk(t.styles,function(e,o){e=zd.normalizeStyleValue(s,zd.replaceVars(e,r),o)
if("number"===typeof o){o=e
a=0}(t.remove_similar||!a||Vk(zd.getStyle(s,a,o),e))&&s.setStyle(n,o,"")
u=1})
if(u&&""===s.getAttrib(n,"style")){n.removeAttribute("style")
n.removeAttribute("data-mce-style")}Wk(t.attributes,function(e,t){var o
e=zd.replaceVars(e,r)
if("number"===typeof t){t=e
a=0}if(!a||Vk(s.getAttrib(a,t),e)){if("class"===t){e=s.getAttrib(n,t)
if(e){o=""
Wk(e.split(/\s+/),function(e){/mce\-\w+/.test(e)&&(o+=(o?" ":"")+e)})
if(o){s.setAttrib(n,t,o)
return}}}"class"===t&&n.removeAttribute("className")
Hk.test(t)&&n.removeAttribute("data-mce-"+t)
n.removeAttribute(t)}})
Wk(t.classes,function(e){e=zd.replaceVars(e,r)
a&&!s.hasClass(a,e)||s.removeClass(n,e)})
i=s.getAttribs(n)
for(o=0;o<i.length;o++){var l=i[o].nodeName
if(0!==l.indexOf("_")&&0!==l.indexOf("data-"))return false}}if("none"!==t.remove){eB(e,n,t)
return true}}
var rB=function(e,t,r,n,a){var o
Wk(zd.getParents(e.dom,t.parentNode).reverse(),function(t){var i
if(!o&&"_start"!==t.id&&"_end"!==t.id){i=vk.matchNode(e,t,r,n,a)
i&&false!==i.split&&(o=t)}})
return o}
var nB=function(e,t,r,n,a,o,i,u){var s,l,c,f,d,v
var m=e.dom
if(r){v=r.parentNode
for(s=n.parentNode;s&&s!==v;s=s.parentNode){l=m.clone(s,false)
for(d=0;d<t.length;d++)if(tB(e,t[d],u,l,l)){l=0
break}if(l){c&&l.appendChild(c)
f||(f=l)
c=l}}!o||i.mixed&&m.isBlock(r)||(n=m.split(r,n))
if(c){a.parentNode.insertBefore(c,a)
f.appendChild(a)}}return n}
var aB=function(e,t,r,n,a){var o=e.formatter.get(t),i=o[0]
var u,s,l=true
var c=e.dom
var f=e.selection
var d=function(n){var u=rB(e,n,t,r,a)
return nB(e,o,u,n,n,true,i,r)}
var v=function(e){return Rd.isBookmarkNode(e)&&Ti.isElement(e)&&("_start"===e.id||"_end"===e.id)}
var m=function(t){var n,a,u,s,f
if(Ti.isElement(t)&&c.getContentEditable(t)){s=l
l="true"===c.getContentEditable(t)
f=true}n=Qr.grep(t.childNodes)
if(l&&!f)for(a=0,u=o.length;a<u;a++)if(tB(e,o[a],r,t,t))break
if(i.deep&&n.length){for(a=0,u=n.length;a<u;a++)m(n[a])
f&&(l=s)}}
var g=function(e){var t=c.get(e?"_start":"_end")
var r=t[e?"firstChild":"lastChild"]
v(r)&&(r=r[e?"firstChild":"lastChild"])
Ti.isText(r)&&0===r.data.length&&(r=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling)
c.remove(t,true)
return r}
var p=function(t){var r,n
var a=t.commonAncestorContainer
t=rv.expandRng(e,t,o,true)
if(i.split){t=pk.split(t)
r=Jk(e,t,true)
n=Jk(e,t)
if(r!==n){/^(TR|TH|TD)$/.test(r.nodeName)&&r.firstChild&&(r="TR"===r.nodeName?r.firstChild.firstChild||r:r.firstChild||r)
a&&/^T(HEAD|BODY|FOOT|R)$/.test(a.nodeName)&&Gk(n)&&n.firstChild&&(n=n.firstChild||n)
if(Yk(c,r,n)){var u=A.from(r.firstChild).getOr(r)
d(Kk(c,u,true,"span",{id:"_start","data-mce-type":"bookmark"}))
g(true)
return}if(Yk(c,n,r)){u=A.from(n.lastChild).getOr(n)
d(Kk(c,u,false,"span",{id:"_end","data-mce-type":"bookmark"}))
g(false)
return}r=qk(c,r,"span",{id:"_start","data-mce-type":"bookmark"})
n=qk(c,n,"span",{id:"_end","data-mce-type":"bookmark"})
d(r)
d(n)
r=g(true)
n=g()}else r=n=d(r)
t.startContainer=r.parentNode?r.parentNode:r
t.startOffset=c.nodeIndex(r)
t.endContainer=n.parentNode?n.parentNode:n
t.endOffset=c.nodeIndex(n)+1}iv.walk(c,t,function(t){Wk(t,function(t){m(t)
Ti.isElement(t)&&"underline"===e.dom.getStyle(t,"text-decoration")&&t.parentNode&&"underline"===zd.getTextDecoration(c,t.parentNode)&&tB(e,{deep:false,exact:true,inline:"span",styles:{textDecoration:"underline"}},null,t)})})}
if(n){if(n.nodeType){s=c.createRng()
s.setStartBefore(n)
s.setEndAfter(n)
p(s)}else p(n)
return}if("false"===c.getContentEditable(f.getNode())){n=f.getNode()
for(var h=0,b=o.length;h<b;h++)if(o[h].ceFalseOverride&&tB(e,o[h],r,n,n))break
return}if(f.isCollapsed()&&i.inline&&!c.select("td[data-mce-selected],th[data-mce-selected]").length)Dk(e,t,r,a)
else{u=xc.getPersistentBookmark(e.selection,true)
p(f.getRng())
f.moveToBookmark(u)
i.inline&&vk.match(e,t,r,f.getStart())&&zd.moveStart(c,f,f.getRng())
e.nodeChanged()}}
var oB={removeFormat:tB,remove:aB}
var iB=Qr.each
var uB=function(e){return e&&1===e.nodeType&&!Rd.isBookmarkNode(e)&&!kc(e)&&!Ti.isBogus(e)}
var sB=function(e,t){var r
for(r=e;r;r=r[t]){if(3===r.nodeType&&0!==r.nodeValue.length)return e
if(1===r.nodeType&&!Rd.isBookmarkNode(r))return r}return e}
var lB=function(e,t,r){var n,a
var o=new jv(e)
if(t&&r){t=sB(t,"previousSibling")
r=sB(r,"nextSibling")
if(o.compare(t,r)){for(n=t.nextSibling;n&&n!==r;){a=n
n=n.nextSibling
t.appendChild(a)}e.remove(r)
Qr.each(Qr.grep(r.childNodes),function(e){t.appendChild(e)})
return t}}return r}
var cB=function(e,t,r){iB(e.childNodes,function(e){if(uB(e)){t(e)&&r(e)
e.hasChildNodes()&&cB(e,t,r)}})}
var fB=function(e,t){return i(function(t,r){return!!(r&&zd.getStyle(e,r,t))},t)}
var dB=function(e,t,r){return i(function(t,r,n){e.setStyle(n,t,r)
""===n.getAttribute("style")&&n.removeAttribute("style")
vB(e,n)},t,r)}
var vB=function(e,t){"SPAN"===t.nodeName&&0===e.getAttribs(t).length&&e.remove(t,true)}
var mB=function(e,t){var r
if(1===t.nodeType&&t.parentNode&&1===t.parentNode.nodeType){r=zd.getTextDecoration(e,t.parentNode)
e.getStyle(t,"color")&&r?e.setStyle(t,"text-decoration",r):e.getStyle(t,"text-decoration")===r&&e.setStyle(t,"text-decoration",null)}}
var gB=function(e,t,r,n){if(t.styles.color||t.styles.textDecoration){Qr.walk(n,i(mB,e),"childNodes")
mB(e,n)}}
var pB=function(e,t,r,n){t.styles&&t.styles.backgroundColor&&cB(n,fB(e,"fontSize"),dB(e,"backgroundColor",zd.replaceVars(t.styles.backgroundColor,r)))}
var AB=function(e,t,r,n){if("sub"===t.inline||"sup"===t.inline){cB(n,fB(e,"fontSize"),dB(e,"fontSize",""))
e.remove(e.select("sup"===t.inline?"sub":"sup",n),true)}}
var hB=function(e,t,r,n){if(n&&false!==t.merge_siblings){n=lB(e,zd.getNonWhiteSpaceSibling(n),n)
n=lB(e,n,zd.getNonWhiteSpaceSibling(n,true))}}
var bB=function(e,t,r){if(t.clear_child_styles){var n=t.links?"*:not(a)":"*"
iB(e.select(n,r),function(r){uB(r)&&iB(t.styles,function(t,n){e.setStyle(r,n,"")})})}}
var yB=function(e,t,r,n){iB(t,function(t){iB(e.dom.select(t.inline,n),function(n){if(!uB(n))return
oB.removeFormat(e,t,r,n,t.exact?n:null)})
bB(e.dom,t,n)})}
var wB=function(e,t,r,n,a){if(vk.matchNode(e,a.parentNode,r,n)&&oB.removeFormat(e,t,n,a))return
t.merge_with_parents&&e.dom.getParent(a.parentNode,function(o){if(vk.matchNode(e,o,r,n)){oB.removeFormat(e,t,n,a)
return true}})}
var EB={mergeWithChildren:yB,mergeUnderlineAndColor:gB,mergeBackgroundColorAndFontSize:pB,mergeSubSup:AB,mergeSiblings:hB,mergeWithParents:wB}
var xB=Qr.each
var CB=function(e){return e&&1===e.nodeType&&!Rd.isBookmarkNode(e)&&!kc(e)&&!Ti.isBogus(e)}
var kB=function(e,t,r,n){var a=e.formatter.get(t)
var o=a[0]
var i,u
var s=!n&&e.selection.isCollapsed()
var l=e.dom,c=e.selection
var f=function(e,t){t=t||o
if(e){t.onformat&&t.onformat(e,t,r,n)
xB(t.styles,function(t,n){l.setStyle(e,n,zd.replaceVars(t,r))})
if(t.styles){var a=l.getAttrib(e,"style")
a&&e.setAttribute("data-mce-style",a)}xB(t.attributes,function(t,n){l.setAttrib(e,n,zd.replaceVars(t,r))})
xB(t.classes,function(t){t=zd.replaceVars(t,r)
l.hasClass(e,t)||l.addClass(e,t)})}}
var d=function(e,t){var r=false
if(!o.selector)return false
xB(e,function(e){if("collapsed"in e&&e.collapsed!==s)return
if(l.is(t,e.selector)&&!kc(t)){f(t,e)
r=true
return false}})
return r}
var v=function(n,i,u,s){var l=[]
var c,v,m=true
c=o.inline||o.block
v=n.create(c)
f(v)
iv.walk(n,i,function(i){var u
var g=function(i){var p,A,h,b
b=m
p=i.nodeName.toLowerCase()
A=i.parentNode.nodeName.toLowerCase()
if(1===i.nodeType&&n.getContentEditable(i)){b=m
m="true"===n.getContentEditable(i)
h=true}if(zd.isEq(p,"br")){u=0
o.block&&n.remove(i)
return}if(o.wrapper&&vk.matchNode(e,i,t,r)){u=0
return}if(m&&!h&&o.block&&!o.wrapper&&zd.isTextBlock(e,p)&&zd.isValid(e,A,c)){i=n.rename(i,c)
f(i)
l.push(i)
u=0
return}if(o.selector){var y=d(a,i)
if(!o.inline||y){u=0
return}}if(!m||h||!zd.isValid(e,c,p)||!zd.isValid(e,A,c)||!s&&3===i.nodeType&&1===i.nodeValue.length&&65279===i.nodeValue.charCodeAt(0)||kc(i)||o.inline&&n.isBlock(i)){u=0
xB(Qr.grep(i.childNodes),g)
h&&(m=b)
u=0}else{if(!u){u=n.clone(v,false)
i.parentNode.insertBefore(u,i)
l.push(u)}u.appendChild(i)}}
xB(i,g)})
true===o.links&&xB(l,function(e){var t=function(e){"A"===e.nodeName&&f(e,o)
xB(Qr.grep(e.childNodes),t)}
t(e)})
xB(l,function(i){var u
var s=function(e){var t=0
xB(e.childNodes,function(e){zd.isWhiteSpaceNode(e)||Rd.isBookmarkNode(e)||t++})
return t}
var c=function(e){var t=false
xB(e.childNodes,function(e){if(CB(e)){t=e
return false}})
return t}
var d=function(e){var t,r
t=c(e)
if(t&&!Rd.isBookmarkNode(t)&&vk.matchName(n,t,o)){r=n.clone(t,false)
f(r)
n.replace(r,e,true)
n.remove(t,1)}return r||e}
u=s(i)
if((l.length>1||!n.isBlock(i))&&0===u){n.remove(i,1)
return}if(o.inline||o.wrapper){o.exact||1!==u||(i=d(i))
EB.mergeWithChildren(e,a,r,i)
EB.mergeWithParents(e,o,t,r,i)
EB.mergeBackgroundColorAndFontSize(n,o,r,i)
EB.mergeSubSup(n,o,r,i)
EB.mergeSiblings(n,o,r,i)}})}
if("false"===l.getContentEditable(c.getNode())){n=c.getNode()
for(var m=0,g=a.length;m<g;m++)if(a[m].ceFalseOverride&&l.is(n,a[m].selector)){f(n,a[m])
return}return}if(o){if(n)if(n.nodeType){if(!d(a,n)){u=l.createRng()
u.setStartBefore(n)
u.setEndAfter(n)
v(l,rv.expandRng(e,u,a),null,true)}}else v(l,n,null,true)
else if(s&&o.inline&&!l.select("td[data-mce-selected],th[data-mce-selected]").length)Sk(e,t,r)
else{var p=e.selection.getNode()
e.settings.forced_root_block||!a[0].defaultBlock||l.getParent(p,l.isBlock)||kB(e,a[0].defaultBlock)
e.selection.setRng(rm.normalize(e.selection.getRng()))
i=xc.getPersistentBookmark(e.selection,true)
v(l,rv.expandRng(e,c.getRng(),a),i)
o.styles&&EB.mergeUnderlineAndColor(l,o,r,p)
c.moveToBookmark(i)
zd.moveStart(l,c,c.getRng())
e.nodeChanged()}jk.postProcess(t,e)}}
var BB={applyFormat:kB}
var TB=Qr.each
var RB=function(e,t){var r={}
e.set({})
t.on("NodeChange",function(n){var a=zd.getParents(t.dom,n.element)
var o={}
a=Qr.grep(a,function(e){return 1===e.nodeType&&!e.getAttribute("data-mce-bogus")})
TB(e.get(),function(e,n){TB(a,function(i){if(t.formatter.matchNode(i,n,{},e.similar)){if(!r[n]){TB(e,function(e){e(true,{node:i,format:n,parents:a})})
r[n]=e}o[n]=e
return false}if(vk.matchesUnInheritedFormatSelector(t,i,n))return false})})
TB(r,function(e,t){if(!o[t]){delete r[t]
TB(e,function(e){e(false,{node:n.element,format:t,parents:a})})}})})}
var IB=function(e,t,r,n){var a=e.get()
TB(t.split(","),function(e){if(!a[e]){a[e]=[]
a[e].similar=n}a[e].push(r)})
e.set(a)}
var SB=function(e,t,r,n,a){null===t.get()&&RB(t,e)
IB(t,r,n,a)}
var DB={formatChanged:SB}
var NB=function(e){var t={valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:false,classes:"align-left",ceFalseOverride:true,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},inherit:false,preview:false,defaultBlock:"div"},{selector:"img,table",collapsed:false,styles:{float:"left"},preview:"font-family font-size"}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},inherit:false,preview:"font-family font-size",defaultBlock:"div"},{selector:"figure.image",collapsed:false,classes:"align-center",ceFalseOverride:true,preview:"font-family font-size"},{selector:"img",collapsed:false,styles:{display:"block",marginLeft:"auto",marginRight:"auto"},preview:false},{selector:"table",collapsed:false,styles:{marginLeft:"auto",marginRight:"auto"},preview:"font-family font-size"}],alignright:[{selector:"figure.image",collapsed:false,classes:"align-right",ceFalseOverride:true,preview:"font-family font-size"},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},inherit:false,preview:"font-family font-size",defaultBlock:"div"},{selector:"img,table",collapsed:false,styles:{float:"right"},preview:"font-family font-size"}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},inherit:false,defaultBlock:"div",preview:"font-family font-size"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:true},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:true},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},links:true,remove_similar:true,clear_child_styles:true},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:true,remove_similar:true,clear_child_styles:true},fontname:{inline:"span",toggle:false,styles:{fontFamily:"%value"},clear_child_styles:true},fontsize:{inline:"span",toggle:false,styles:{fontSize:"%value"},clear_child_styles:true},fontsize_class:{inline:"span",attributes:{class:"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:true,deep:true,onmatch:function(){return true},onformat:function(t,r,n){Qr.each(n,function(r,n){e.setAttrib(t,n,r)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:true,expand:false,block_expand:true,deep:true},{selector:"span",attributes:["style","class"],remove:"empty",split:true,expand:false,deep:true},{selector:"*",attributes:["style","class"],split:false,expand:false,deep:true}]}
Qr.each("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(e){t[e]={block:e,remove:"all"}})
return t}
var MB={get:NB}
function PB(e){var t={}
var r=function(e){return e?t[e]:t}
var n=function(e,r){if(e)if("string"!==typeof e)Qr.each(e,function(e,t){n(t,e)})
else{r=r.length?r:[r]
Qr.each(r,function(e){"undefined"===typeof e.deep&&(e.deep=!e.selector)
"undefined"===typeof e.split&&(e.split=!e.selector||e.inline)
"undefined"===typeof e.remove&&e.selector&&!e.inline&&(e.remove="none")
if(e.selector&&e.inline){e.mixed=true
e.block_expand=true}"string"===typeof e.classes&&(e.classes=e.classes.split(/\s+/))})
t[e]=r}}
var a=function(e){e&&t[e]&&delete t[e]
return t}
n(MB.get(e.dom))
n(e.settings.formats)
return{get:r,register:n,unregister:a}}var _B=Qr.each
var OB=hu.DOM
var FB=function(e,t){var r,n,a
var o=t&&t.schema||iu({})
var i=function(e,t){t.classes.length&&OB.addClass(e,t.classes.join(" "))
OB.setAttribs(e,t.attrs)}
var u=function(e){var t
n="string"===typeof e?{name:e,classes:[],attrs:{}}:e
t=OB.create(n.name)
i(t,n)
return t}
var s=function(e,t){var r="string"!==typeof e?e.nodeName.toLowerCase():e
var n=o.getElementRule(r)
var a=n&&n.parentsRequired
return!(!a||!a.length)&&(t&&-1!==Qr.inArray(a,t)?t:a[0])}
var l=function(e,t,r){var n,a,o
var i=t.length>0&&t[0]
var c=i&&i.name
o=s(e,c)
if(o)if(c===o){a=t[0]
t=t.slice(1)}else a=o
else if(i){a=t[0]
t=t.slice(1)}else if(!r)return e
if(a){n=u(a)
n.appendChild(e)}if(r){if(!n){n=OB.create("div")
n.appendChild(e)}Qr.each(r,function(t){var r=u(t)
n.insertBefore(r,e)})}return l(n,t,a&&a.siblings)}
if(e&&e.length){n=e[0]
r=u(n)
a=OB.create("div")
a.appendChild(l(r,e.slice(1),n.siblings))
return a}return""}
var LB=function(e,t){return FB(QB(e),t)}
var UB=function(e){var t
var r={classes:[],attrs:{}}
e=r.selector=Qr.trim(e)
"*"!==e&&(t=e.replace(/(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,function(e,t,n,a,o){switch(t){case"#":r.attrs.id=n
break
case".":r.classes.push(n)
break
case":":-1!==Qr.inArray("checked disabled enabled read-only required".split(" "),n)&&(r.attrs[n]=n)}if("["===a){var i=o.match(/([\w\-]+)(?:\=\"([^\"]+))?/)
i&&(r.attrs[i[1]]=i[2])}return""}))
r.name=t||"div"
return r}
var QB=function(e){if(!e||"string"!==typeof e)return[]
e=e.split(/\s*,\s*/)[0]
e=e.replace(/\s*(~\+|~|\+|>)\s*/g,"$1")
return Qr.map(e.split(/(?:>|\s+(?![^\[\]]+\]))/),function(e){var t=Qr.map(e.split(/(?:~\+|~|\+)/),UB)
var r=t.pop()
t.length&&(r.siblings=t)
return r}).reverse()}
var zB=function(e,t){var r,n,a,o
var i,u,s=""
u=e.settings.preview_styles
if(false===u)return""
"string"!==typeof u&&(u="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow")
var l=function(e){return e.replace(/%(\w+)/g,"")}
if("string"===typeof t){t=e.formatter.get(t)
if(!t)return
t=t[0]}if("preview"in t){u=t.preview
if(false===u)return""}r=t.block||t.inline||"span"
o=QB(t.selector)
if(o.length){o[0].name||(o[0].name=r)
r=t.selector
n=FB(o,e)}else n=FB([r],e)
a=OB.select(r,n)[0]||n.firstChild
_B(t.styles,function(e,t){e=l(e)
e&&OB.setStyle(a,t,e)})
_B(t.attributes,function(e,t){e=l(e)
e&&OB.setAttrib(a,t,e)})
_B(t.classes,function(e){e=l(e)
OB.hasClass(a,e)||OB.addClass(a,e)})
e.fire("PreviewFormats")
OB.setStyles(n,{position:"absolute",left:-65535})
e.getBody().appendChild(n)
i=OB.getStyle(e.getBody(),"fontSize",true)
i=/px$/.test(i)?parseInt(i,10):0
_B(u.split(" "),function(t){var r=OB.getStyle(a,t,true)
if("background-color"===t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(r)){r=OB.getStyle(e.getBody(),t,true)
if("#ffffff"===OB.toHex(r).toLowerCase())return}if("color"===t&&"#000000"===OB.toHex(r).toLowerCase())return
if("font-size"===t&&/em|%$/.test(r)){if(0===i)return
var n=parseFloat(r)/(/%$/.test(r)?100:1)
r=n*i+"px"}"border"===t&&r&&(s+="padding:0 2px;")
s+=t+":"+r+";"})
e.fire("AfterPreviewFormats")
OB.remove(n)
return s}
var jB={getCssText:zB,parseSelector:QB,selectorToHtml:LB}
var HB=function(e,t,r,n,a){var o=t.get(r)
!vk.match(e,r,n,a)||"toggle"in o[0]&&!o[0].toggle?BB.applyFormat(e,r,n,a):oB.remove(e,r,n,a)}
var WB={toggle:HB}
var VB=function(e){e.addShortcut("meta+b","","Bold")
e.addShortcut("meta+i","","Italic")
e.addShortcut("meta+u","","Underline")
for(var t=1;t<=6;t++)e.addShortcut("access+"+t,"",["FormatBlock",false,"h"+t])
e.addShortcut("access+7","",["FormatBlock",false,"p"])
e.addShortcut("access+8","",["FormatBlock",false,"div"])
e.addShortcut("access+9","",["FormatBlock",false,"address"])}
var GB={setup:VB}
function YB(e){var t=PB(e)
var r=Lu(null)
GB.setup(e)
Mk(e)
return{get:t.get,register:t.register,unregister:t.unregister,apply:i(BB.applyFormat,e),remove:i(oB.remove,e),toggle:i(WB.toggle,e,t),match:i(vk.match,e),matchAll:i(vk.matchAll,e),matchNode:i(vk.matchNode,e),canApply:i(vk.canApply,e),formatChanged:i(DB.formatChanged,e,r),getCssText:i(jB.getCssText,e)}}var JB=Object.prototype.hasOwnProperty
var qB=function(e,t){return t}
var KB=function(e){return function(){var t=new Array(arguments.length)
for(var r=0;r<t.length;r++)t[r]=arguments[r]
if(0===t.length)throw new Error("Can't merge zero objects")
var n={}
for(var a=0;a<t.length;a++){var o=t[a]
for(var i in o)JB.call(o,i)&&(n[i]=e(n[i],o[i]))}return n}}
var XB=KB(qB)
var ZB=function(e,t,r){e.addAttributeFilter("data-mce-tabindex",function(e,t){var r,n=e.length
while(n--){r=e[n]
r.attr("tabindex",r.attributes.map["data-mce-tabindex"])
r.attr(t,null)}})
e.addAttributeFilter("src,href,style",function(e,n){var a,o,i=e.length
var u="data-mce-"+n
var s=t.url_converter
var l=t.url_converter_scope
while(i--){a=e[i]
o=a.attributes.map[u]
if(void 0!==o){a.attr(n,o.length>0?o:null)
a.attr(u,null)}else{o=a.attributes.map[n]
"style"===n?o=r.serializeStyle(r.parseStyle(o),a.name):s&&(o=s.call(l,o,n,a.name))
a.attr(n,o.length>0?o:null)}}})
e.addAttributeFilter("class",function(e){var t,r,n=e.length
while(n--){t=e[n]
r=t.attr("class")
if(r){r=t.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,"")
t.attr("class",r.length>0?r:null)}}})
e.addAttributeFilter("data-mce-type",function(e,t,r){var n,a=e.length
while(a--){n=e[a]
"bookmark"!==n.attributes.map["data-mce-type"]||r.cleanup||n.remove()}})
e.addNodeFilter("noscript",function(e){var t,r=e.length
while(r--){t=e[r].firstChild
t&&(t.value=qi.decode(t.value))}})
e.addNodeFilter("script,style",function(e,r){var n,a,o,i=e.length
var u=function(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")}
while(i--){n=e[i]
a=n.firstChild?n.firstChild.value:""
if("script"===r){o=n.attr("type")
o&&n.attr("type","mce-no/type"===o?null:o.replace(/^mce\-/,""))
"xhtml"===t.element_format&&a.length>0&&(n.firstChild.value="// <![CDATA[\n"+u(a)+"\n// ]]>")}else"xhtml"===t.element_format&&a.length>0&&(n.firstChild.value="\x3c!--\n"+u(a)+"\n--\x3e")}})
e.addNodeFilter("#comment",function(e){var t,r=e.length
while(r--){t=e[r]
if(0===t.value.indexOf("[CDATA[")){t.name="#cdata"
t.type=4
t.value=t.value.replace(/^\[CDATA\[|\]\]$/g,"")}else if(0===t.value.indexOf("mce:protected ")){t.name="#text"
t.type=3
t.raw=true
t.value=unescape(t.value).substr(14)}}})
e.addNodeFilter("xml:namespace,input",function(e,t){var r,n=e.length
while(n--){r=e[n]
7===r.type?r.remove():1===r.type&&("input"!==t||"type"in r.attributes.map||r.attr("type","text"))}})
e.addAttributeFilter("data-mce-type",function(t){_(t,function(t){"format-caret"===t.attr("data-mce-type")&&(t.isEmpty(e.schema.getNonEmptyElements())?t.remove():t.unwrap())})})
e.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",function(e,t){var r=e.length
while(r--)e[r].attr(t,null)})}
var $B=function(e){var t,r
var n=function(e){return e&&"br"===e.name}
t=e.lastChild
if(n(t)){r=t.prev
if(n(r)){t.remove()
r.remove()}}}
var eT={register:ZB,trimTrailingBr:$B}
var tT=function(e,t,r){var n,a,o
var i=e.dom
t=t.cloneNode(true)
n=document.implementation
if(n.createHTMLDocument){a=n.createHTMLDocument("")
Qr.each("BODY"===t.nodeName?t.childNodes:[t],function(e){a.body.appendChild(a.importNode(e,true))})
t="BODY"!==t.nodeName?a.body.firstChild:a.body
o=i.doc
i.doc=a}sw.firePreProcess(e,XB(r,{node:t}))
o&&(i.doc=o)
return t}
var rT=function(e,t){return e&&e.hasEventListeners("PreProcess")&&!t.no_events}
var nT=function(e,t,r){return rT(e,r)?tT(e,t,r):t}
var aT={process:nT}
var oT=function(e,t){_(t,function(t){e.attr(t,null)})}
var iT=function(e,t,r){e.addNodeFilter("font",function(e){_(e,function(e){var n=t.parse(e.attr("style"))
var a=e.attr("color")
var o=e.attr("face")
var i=e.attr("size")
a&&(n.color=a)
o&&(n["font-family"]=o)
i&&(n["font-size"]=r[parseInt(e.attr("size"),10)-1])
e.name="span"
e.attr("style",t.serialize(n))
oT(e,["color","face","size"])})})}
var uT=function(e,t){e.addNodeFilter("strike",function(e){_(e,function(e){var r=t.parse(e.attr("style"))
r["text-decoration"]="line-through"
e.name="span"
e.attr("style",t.serialize(r))})})}
var sT=function(e,t){var r=su()
t.convert_fonts_to_spans&&iT(e,r,Qr.explode(t.font_size_legacy_values))
uT(e,r)}
var lT=function(e,t){t.inline_styles&&sT(e,t)}
var cT={register:lT}
var fT=/^[ \t\r\n]*$/
var dT={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11}
var vT=function(e,t,r){var n
var a
var o=r?"lastChild":"firstChild"
var i=r?"prev":"next"
if(e[o])return e[o]
if(e!==t){n=e[i]
if(n)return n
for(a=e.parent;a&&a!==t;a=a.parent){n=a[i]
if(n)return n}}}
var mT=function(){function e(e,t){this.name=e
this.type=t
if(1===t){this.attributes=[]
this.attributes.map={}}}e.create=function(t,r){var n,a
n=new e(t,dT[t]||1)
if(r)for(a in r)n.attr(a,r[a])
return n}
e.prototype.replace=function(e){var t=this
e.parent&&e.remove()
t.insert(e,t)
t.remove()
return t}
e.prototype.attr=function(e,t){var r=this
var n,a
if("string"!==typeof e){for(a in e)r.attr(a,e[a])
return r}if(n=r.attributes){if(void 0!==t){if(null===t){if(e in n.map){delete n.map[e]
a=n.length
while(a--)if(n[a].name===e){n=n.splice(a,1)
return r}}return r}if(e in n.map){a=n.length
while(a--)if(n[a].name===e){n[a].value=t
break}}else n.push({name:e,value:t})
n.map[e]=t
return r}return n.map[e]}}
e.prototype.clone=function(){var t=this
var r=new e(t.name,t.type)
var n,a,o,i,u
if(o=t.attributes){u=[]
u.map={}
for(n=0,a=o.length;n<a;n++){i=o[n]
if("id"!==i.name){u[u.length]={name:i.name,value:i.value}
u.map[i.name]=i.value}}r.attributes=u}r.value=t.value
r.shortEnded=t.shortEnded
return r}
e.prototype.wrap=function(e){var t=this
t.parent.insert(e,t)
e.append(t)
return t}
e.prototype.unwrap=function(){var e=this
var t,r
for(t=e.firstChild;t;){r=t.next
e.insert(t,e,true)
t=r}e.remove()}
e.prototype.remove=function(){var e=this,t=e.parent,r=e.next,n=e.prev
if(t){if(t.firstChild===e){t.firstChild=r
r&&(r.prev=null)}else n.next=r
if(t.lastChild===e){t.lastChild=n
n&&(n.next=null)}else r.prev=n
e.parent=e.next=e.prev=null}return e}
e.prototype.append=function(e){var t=this
var r
e.parent&&e.remove()
r=t.lastChild
if(r){r.next=e
e.prev=r
t.lastChild=e}else t.lastChild=t.firstChild=e
e.parent=t
return e}
e.prototype.insert=function(e,t,r){var n
e.parent&&e.remove()
n=t.parent||this
if(r){t===n.firstChild?n.firstChild=e:t.prev.next=e
e.prev=t.prev
e.next=t
t.prev=e}else{t===n.lastChild?n.lastChild=e:t.next.prev=e
e.next=t.next
e.prev=t
t.next=e}e.parent=n
return e}
e.prototype.getAll=function(e){var t=this
var r
var n=[]
for(r=t.firstChild;r;r=vT(r,t))r.name===e&&n.push(r)
return n}
e.prototype.empty=function(){var e=this
var t,r,n
if(e.firstChild){t=[]
for(n=e.firstChild;n;n=vT(n,e))t.push(n)
r=t.length
while(r--){n=t[r]
n.parent=n.firstChild=n.lastChild=n.next=n.prev=null}}e.firstChild=e.lastChild=null
return e}
e.prototype.isEmpty=function(e,t,r){var n=this
var a,o,i=n.firstChild
t=t||{}
if(i)do{if(1===i.type){if(i.attributes.map["data-mce-bogus"])continue
if(e[i.name])return false
a=i.attributes.length
while(a--){o=i.attributes[a].name
if("name"===o||0===o.indexOf("data-mce-bookmark"))return false}}if(8===i.type)return false
if(3===i.type&&!fT.test(i.value))return false
if(3===i.type&&i.parent&&t[i.parent.name]&&fT.test(i.value))return false
if(r&&r(i))return false}while(i=vT(i,n))
return true}
e.prototype.walk=function(e){return vT(this,null,e)}
return e}()
var gT=function(e,t,r,n){var a=e.padd_empty_with_br||t.insert
a&&r[n.name]?n.empty().append(new mT("br",1)).shortEnded=true:n.empty().append(new mT("#text",3)).value=" "}
var pT=function(e){return AT(e,"#text")&&" "===e.firstChild.value}
var AT=function(e,t){return e&&e.firstChild&&e.firstChild===e.lastChild&&e.firstChild.name===t}
var hT=function(e,t){var r=e.getElementRule(t.name)
return r&&r.paddEmpty}
var bT=function(e,t,r,n){return n.isEmpty(t,r,function(t){return hT(e,t)})}
var yT=function(e,t){return e&&(t[e.name]||"br"===e.name)}
var wT=function(e,t){var r=e.schema
t.remove_trailing_brs&&e.addNodeFilter("br",function(e,n,a){var o
var i=e.length
var u
var s=Qr.extend({},r.getBlockElements())
var l=r.getNonEmptyElements()
var c,f,d,v
var m=r.getNonEmptyElements()
var g,p
s.body=1
for(o=0;o<i;o++){u=e[o]
c=u.parent
if(s[u.parent.name]&&u===c.lastChild){d=u.prev
while(d){v=d.name
if("span"!==v||"bookmark"!==d.attr("data-mce-type")){if("br"!==v)break
if("br"===v){u=null
break}}d=d.prev}if(u){u.remove()
if(bT(r,l,m,c)){g=r.getElementRule(c.name)
g&&(g.removeEmpty?c.remove():g.paddEmpty&&gT(t,a,s,c))}}}else{f=u
while(c&&c.firstChild===f&&c.lastChild===f){f=c
if(s[c.name])break
c=c.parent}if(f===c&&true!==t.padd_empty_with_br){p=new mT("#text",3)
p.value=" "
u.replace(p)}}}})
e.addAttributeFilter("href",function(e){var r,n=e.length
var a=function(e){var t=e.split(" ").filter(function(e){return e.length>0})
return t.concat(["noopener"]).sort().join(" ")}
var o=function(e){var t=e?Qr.trim(e):""
return/\b(noopener)\b/g.test(t)?t:a(t)}
if(!t.allow_unsafe_link_target)while(n--){r=e[n]
"a"===r.name&&"_blank"===r.attr("target")&&r.attr("rel",o(r.attr("rel")))}})
t.allow_html_in_named_anchor||e.addAttributeFilter("id,name",function(e){var t,r,n,a,o=e.length
while(o--){a=e[o]
if("a"===a.name&&a.firstChild&&!a.attr("href")){n=a.parent
t=a.lastChild
do{r=t.prev
n.insert(t,a)
t=r}while(t)}}})
t.fix_list_elements&&e.addNodeFilter("ul,ol",function(e){var t,r,n=e.length
while(n--){t=e[n]
r=t.parent
if("ul"===r.name||"ol"===r.name)if(t.prev&&"li"===t.prev.name)t.prev.append(t)
else{var a=new mT("li",1)
a.attr("style","list-style-type: none")
t.wrap(a)}}})
t.validate&&r.getValidClasses()&&e.addAttributeFilter("class",function(e){var t,n,a,o,i,u=e.length
var s=r.getValidClasses()
var l,c
while(u--){t=e[u]
n=t.attr("class").split(" ")
i=""
for(a=0;a<n.length;a++){o=n[a]
c=false
l=s["*"]
l&&l[o]&&(c=true)
l=s[t.name]
!c&&l&&l[o]&&(c=true)
if(c){i&&(i+=" ")
i+=o}}i.length||(i=null)
t.attr("class",i)}})}
var ET=Qr.makeMap,xT=Qr.each,CT=Qr.explode,kT=Qr.extend
function BT(e,t){void 0===t&&(t=iu())
var r={}
var n=[]
var a={}
var o={}
e=e||{}
e.validate=!("validate"in e)||e.validate
e.root_name=e.root_name||"body"
var i=function(e){var r,n,a,o,i,s,l,c,f
var d,v,m,g,p,A,h
m=ET("tr,td,th,tbody,thead,tfoot,table")
d=t.getNonEmptyElements()
v=t.getWhiteSpaceElements()
g=t.getTextBlockElements()
p=t.getSpecialElements()
for(r=0;r<e.length;r++){n=e[r]
if(!n.parent||n.fixed)continue
if(g[n.name]&&"li"===n.parent.name){A=n.next
while(A){if(!g[A.name])break
A.name="li"
A.fixed=true
n.parent.insert(A,n.parent)
A=A.next}n.unwrap(n)
continue}o=[n]
for(a=n.parent;a&&!t.isValidChild(a.name,n.name)&&!m[a.name];a=a.parent)o.push(a)
if(a&&o.length>1){o.reverse()
i=s=u(o[0].clone())
for(f=0;f<o.length-1;f++){if(t.isValidChild(s.name,o[f].name)){l=u(o[f].clone())
s.append(l)}else l=s
for(c=o[f].firstChild;c&&c!==o[f+1];){h=c.next
l.append(c)
c=h}s=l}if(bT(t,d,v,i))a.insert(n,o[0],true)
else{a.insert(i,o[0],true)
a.insert(n,i)}a=o[0];(bT(t,d,v,a)||AT(a,"br"))&&a.empty().remove()}else if(n.parent){if("li"===n.name){A=n.prev
if(A&&("ul"===A.name||"ul"===A.name)){A.append(n)
continue}A=n.next
if(A&&("ul"===A.name||"ul"===A.name)){A.insert(n,A.firstChild,true)
continue}n.wrap(u(new mT("ul",1)))
continue}t.isValidChild(n.parent.name,"div")&&t.isValidChild("div",n.name)?n.wrap(u(new mT("div",1))):p[n.name]?n.empty().remove():n.unwrap()}}}
var u=function(e){var t,i,u
i=e.name
if(i in r){u=a[i]
u?u.push(e):a[i]=[e]}t=n.length
while(t--){i=n[t].name
if(i in e.attributes.map){u=o[i]
u?u.push(e):o[i]=[e]}}return e}
var s=function(e,t){xT(CT(e),function(e){var n=r[e]
n||(r[e]=n=[])
n.push(t)})}
var l=function(){var e=[]
for(var t in r)r.hasOwnProperty(t)&&e.push({name:t,callbacks:r[t]})
return e}
var c=function(e,t){xT(CT(e),function(e){var r
for(r=0;r<n.length;r++)if(n[r].name===e){n[r].callbacks.push(t)
return}n.push({name:e,callbacks:[t]})})}
var f=function(){return[].concat(n)}
var d=function(u,s){var l,c,f,d,v,m,g,p
var A
var h=[]
var b
var y
s=s||{}
a={}
o={}
A=kT(ET("script,style,head,html,body,title,meta,param"),t.getBlockElements())
var w=t.getNonEmptyElements()
var E=t.children
var x=e.validate
var C="forced_root_block"in s?s.forced_root_block:e.forced_root_block
var k=t.getWhiteSpaceElements()
var B=/^[ \t\r\n]+/
var T=/[ \t\r\n]+$/
var R=/[ \t\r\n]+/g
var I=/^[ \t\r\n]+$/
b=k.hasOwnProperty(s.context)||k.hasOwnProperty(e.root_name)
var S=function(){var r,n,a=P.firstChild
var o=function(e){if(e){a=e.firstChild
a&&3===a.type&&(a.value=a.value.replace(B,""))
a=e.lastChild
a&&3===a.type&&(a.value=a.value.replace(T,""))}}
if(!t.isValidChild(P.name,C.toLowerCase()))return
while(a){r=a.next
if(3===a.type||1===a.type&&"p"!==a.name&&!A[a.name]&&!a.attr("data-mce-type"))if(n)n.append(a)
else{n=D(C,1)
n.attr(e.forced_root_block_attrs)
P.insert(n,a)
n.append(a)}else{o(n)
n=null}a=r}o(n)}
var D=function(e,t){var n=new mT(e,t)
var o
if(e in r){o=a[e]
o?o.push(n):a[e]=[n]}return n}
var N=function(e){var r,n,a,o
var i=t.getBlockElements()
for(r=e.prev;r&&3===r.type;){a=r.value.replace(T,"")
if(a.length>0){r.value=a
return}n=r.next
if(n){if(3===n.type&&n.value.length){r=r.prev
continue}if(!i[n.name]&&"script"!==n.name&&"style"!==n.name){r=r.prev
continue}}o=r.prev
r.remove()
r=o}}
var M=function(e){var t
var r={}
for(t in e)"li"!==t&&"p"!==t&&(r[t]=e[t])
return r}
l=BC({validate:x,allow_script_urls:e.allow_script_urls,allow_conditional_comments:e.allow_conditional_comments,self_closing_elements:M(t.getSelfClosingElements()),cdata:function(e){y.append(D("#cdata",4)).value=e},text:function(e,t){var r
if(!b){e=e.replace(R," ")
yT(y.lastChild,A)&&(e=e.replace(B,""))}if(0!==e.length){r=D("#text",3)
r.raw=!!t
y.append(r).value=e}},comment:function(e){y.append(D("#comment",8)).value=e},pi:function(e,t){y.append(D(e,7)).value=t
N(y)},doctype:function(e){var t
t=y.append(D("#doctype",10))
t.value=e
N(y)},start:function(e,r,a){var i,u,s,l,c
s=x?t.getElementRule(e):{}
if(s){i=D(s.outputName||e,1)
i.attributes=r
i.shortEnded=a
y.append(i)
c=E[y.name]
c&&E[i.name]&&!c[i.name]&&h.push(i)
u=n.length
while(u--){l=n[u].name
if(l in r.map){g=o[l]
g?g.push(i):o[l]=[i]}}A[e]&&N(i)
a||(y=i)
!b&&k[e]&&(b=true)}},end:function(r){var n,a,o,i,u
a=x?t.getElementRule(r):{}
if(a){if(A[r]&&!b){n=y.firstChild
if(n&&3===n.type){o=n.value.replace(B,"")
if(o.length>0){n.value=o
n=n.next}else{i=n.next
n.remove()
n=i
while(n&&3===n.type){o=n.value
i=n.next
if(0===o.length||I.test(o)){n.remove()
n=i}n=i}}}n=y.lastChild
if(n&&3===n.type){o=n.value.replace(T,"")
if(o.length>0){n.value=o
n=n.prev}else{i=n.prev
n.remove()
n=i
while(n&&3===n.type){o=n.value
i=n.prev
if(0===o.length||I.test(o)){n.remove()
n=i}n=i}}}}b&&k[r]&&(b=false)
if(a.removeEmpty&&bT(t,w,k,y)&&!y.attributes.map.name&&!y.attr("id")){u=y.parent
A[y.name]?y.empty().remove():y.unwrap()
y=u
return}a.paddEmpty&&(pT(y)||bT(t,w,k,y))&&gT(e,s,A,y)
y=y.parent}}},t)
var P=y=new mT(s.context||e.root_name,11)
l.parse(u)
x&&h.length&&(s.context?s.invalid=true:i(h))
C&&("body"===P.name||s.isRootContent)&&S()
if(!s.invalid){for(p in a){g=r[p]
c=a[p]
v=c.length
while(v--)c[v].parent||c.splice(v,1)
for(f=0,d=g.length;f<d;f++)g[f](c,p,s)}for(f=0,d=n.length;f<d;f++){g=n[f]
if(g.name in o){c=o[g.name]
v=c.length
while(v--)c[v].parent||c.splice(v,1)
for(v=0,m=g.callbacks.length;v<m;v++)g.callbacks[v](c,g.name,s)}}}return P}
var v={schema:t,addAttributeFilter:c,getAttributeFilters:f,addNodeFilter:s,getNodeFilters:l,filterNode:u,parse:d}
wT(v,e)
cT.register(v,e)
return v}var TT=function(e,t,r){if(-1===Qr.inArray(t,r)){e.addAttributeFilter(r,function(e,t){var r=e.length
while(r--)e[r].attr(t,null)})
t.push(r)}}
var RT=function(e,t,r){if(!t.no_events&&e){var n=sw.firePostProcess(e,XB(t,{content:r}))
return n.content}return r}
var IT=function(e,t,r){var n=Ts.trim(r.getInner?t.innerHTML:e.getOuterHTML(t))
return r.selection||li(ga.fromDom(t))?n:Qr.trim(n)}
var ST=function(e,t,r){var n=r.selection?XB({forced_root_block:false},r):r
var a=e.parse(t,n)
eT.trimTrailingBr(a)
return a}
var DT=function(e,t,r){var n=Zv(e,t)
return n.serialize(r)}
var NT=function(e,t,r,n,a){var o=DT(t,r,n)
return RT(e,a,o)}
function MT(e,t){var r,n,a
var o=["data-mce-selected"]
r=t&&t.dom?t.dom:hu.DOM
n=t&&t.schema?t.schema:iu(e)
e.entity_encoding=e.entity_encoding||"named"
e.remove_trailing_brs=!("remove_trailing_brs"in e)||e.remove_trailing_brs
a=BT(e,n)
eT.register(a,e,r)
var u=function(o,i){var u=XB({format:"html"},i||{})
var s=aT.process(t,o,u)
var l=IT(r,s,u)
var c=ST(a,l,u)
return"tree"===u.format?c:NT(t,e,n,c,u)}
return{schema:n,addNodeFilter:a.addNodeFilter,addAttributeFilter:a.addAttributeFilter,serialize:u,addRules:function(e){n.addValidElements(e)},setRules:function(e){n.setValidElements(e)},addTempAttr:i(TT,a,o),getTempAttrs:function(){return o}}}function PT(e,t){var r=MT(e,t)
return{schema:r.schema,addNodeFilter:r.addNodeFilter,addAttributeFilter:r.addAttributeFilter,serialize:r.serialize,addRules:r.addRules,setRules:r.setRules,addTempAttr:r.addTempAttr,getTempAttrs:r.getTempAttrs}}function _T(e){return{getBookmark:i(Rd.getBookmark,e),moveToBookmark:i(Rd.moveToBookmark,e)}}(function(e){e.isBookmarkNode=Rd.isBookmarkNode})(_T||(_T={}))
var OT=_T
var FT=Ti.isContentEditableFalse
var LT=Ti.isContentEditableTrue
var UT=function(e,t){while(t&&t!==e){if(LT(t)||FT(t))return t
t=t.parentNode}return null}
var QT=function(e,t){var r=t.dom,n=Qr.each
var a,o,i,u,s
var l,c,f,d,v,m,g,p
var A,h
var b=t.getDoc(),y=document
var w=Math.abs,E=Math.round,x=t.getBody()
var C,k
u={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]}
var B=".mce-content-body"
t.contentStyles.push(B+" div.mce-resizehandle {position: absolute;border: 1px solid black;box-sizing: content-box;background: #FFF;width: 7px;height: 7px;z-index: 10000}"+B+" .mce-resizehandle:hover {background: #000}"+B+" img[data-mce-selected],"+B+" hr[data-mce-selected] {outline: 1px solid black;resize: none}"+B+" .mce-clonedresizable {position: absolute;"+(Ie.gecko?"":"outline: 1px dashed black;")+"opacity: .5;filter: alpha(opacity=50);z-index: 10000}"+B+" .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}")
var T=function(e){return e&&("IMG"===e.nodeName||t.dom.is(e,"figure.image"))}
var R=function(e,t){return T(e.target)&&!aC.isXYWithinRange(e.clientX,e.clientY,t)}
var I=function(e){var r=e.target
if(R(e,t.selection.getRng())&&!e.isDefaultPrevented()){e.preventDefault()
t.selection.select(r)}}
var S=function(e){return t.dom.is(e,"figure.image")?e.querySelector("img"):e}
var D=function(e){var r=t.settings.object_resizing
if(false===r||Ie.iOS)return false
"string"!==typeof r&&(r="table,img,figure.image,div")
if("false"===e.getAttribute("data-mce-resize"))return false
if(e===t.getBody())return false
return eo(ga.fromDom(e),r)}
var N=function(e){var n,u,b
var y,B
n=e.screenX-l
u=e.screenY-c
A=n*s[2]+v
h=u*s[3]+m
A=A<5?5:A
h=h<5?5:h
b=T(a)&&false!==t.settings.resize_img_proportional?!mC.modifierPressed(e):mC.modifierPressed(e)||T(a)&&s[2]*s[3]!==0
if(b)if(w(n)>w(u)){h=E(A*g)
A=E(h/g)}else{A=E(h/g)
h=E(A*g)}r.setStyles(S(o),{width:A,height:h})
y=s.startPos.x+n
B=s.startPos.y+u
y=y>0?y:0
B=B>0?B:0
r.setStyles(i,{left:y,top:B,display:"block"})
i.innerHTML=A+" &times; "+h
s[2]<0&&o.clientWidth<=A&&r.setStyle(o,"left",f+(v-A))
s[3]<0&&o.clientHeight<=h&&r.setStyle(o,"top",d+(m-h))
n=x.scrollWidth-C
u=x.scrollHeight-k
n+u!==0&&r.setStyles(i,{left:y-n,top:B-u})
if(!p){sw.fireObjectResizeStart(t,a,v,m)
p=true}}
var M=function(){p=false
var e=function(e,n){n&&(a.style[e]||!t.schema.isValid(a.nodeName.toLowerCase(),e)?r.setStyle(S(a),e,n):r.setAttrib(S(a),e,n))}
e("width",A)
e("height",h)
r.unbind(b,"mousemove",N)
r.unbind(b,"mouseup",M)
if(y!==b){r.unbind(y,"mousemove",N)
r.unbind(y,"mouseup",M)}r.remove(o)
r.remove(i)
P(a)
sw.fireObjectResized(t,a,A,h)
r.setAttrib(a,"style",r.getAttrib(a,"style"))
t.nodeChanged()}
var P=function(e){var p,w,E,B,T
_()
L()
p=r.getPos(e,x)
f=p.x
d=p.y
T=e.getBoundingClientRect()
w=T.width||T.right-T.left
E=T.height||T.bottom-T.top
if(a!==e){a=e
A=h=0}B=t.fire("ObjectSelected",{target:e})
D(e)&&!B.isDefaultPrevented()?n(u,function(e,t){var n
var u=function(t){l=t.screenX
c=t.screenY
v=S(a).clientWidth
m=S(a).clientHeight
g=m/v
s=e
e.startPos={x:w*e[0]+f,y:E*e[1]+d}
C=x.scrollWidth
k=x.scrollHeight
o=a.cloneNode(true)
r.addClass(o,"mce-clonedresizable")
r.setAttrib(o,"data-mce-bogus","all")
o.contentEditable=false
o.unSelectabe=true
r.setStyles(o,{left:f,top:d,margin:0})
o.removeAttribute("data-mce-selected")
x.appendChild(o)
r.bind(b,"mousemove",N)
r.bind(b,"mouseup",M)
if(y!==b){r.bind(y,"mousemove",N)
r.bind(y,"mouseup",M)}i=r.add(x,"div",{class:"mce-resize-helper","data-mce-bogus":"all"},v+" &times; "+m)}
n=r.get("mceResizeHandle"+t)
n&&r.remove(n)
n=r.add(x,"div",{id:"mceResizeHandle"+t,"data-mce-bogus":"all",class:"mce-resizehandle",unselectable:true,style:"cursor:"+t+"-resize; margin:0; padding:0"})
11===Ie.ie&&(n.contentEditable=false)
r.bind(n,"mousedown",function(e){e.stopImmediatePropagation()
e.preventDefault()
u(e)})
e.elm=n
r.setStyles(n,{left:w*e[0]+f-n.offsetWidth/2,top:E*e[1]+d-n.offsetHeight/2})}):_()
a.setAttribute("data-mce-selected","1")}
var _=function(){var e,t
L()
a&&a.removeAttribute("data-mce-selected")
for(e in u){t=r.get("mceResizeHandle"+e)
if(t){r.unbind(t)
r.remove(t)}}}
var O=function(a){var o,i
var u=function(e,t){if(e)do{if(e===t)return true}while(e=e.parentNode)}
if(p||t.removed)return
n(r.select("img[data-mce-selected],hr[data-mce-selected]"),function(e){e.removeAttribute("data-mce-selected")})
i="mousedown"===a.type?a.target:e.getNode()
i=r.$(i).closest("table,img,figure.image,hr")[0]
if(u(i,x)){U()
o=e.getStart(true)
if(u(o,i)&&u(e.getEnd(true),i)){P(i)
return}}_()}
var F=function(e){return FT(UT(t.getBody(),e))}
var L=function(){for(var e in u){var t=u[e]
if(t.elm){r.unbind(t.elm)
delete t.elm}}}
var U=function(){try{t.getDoc().execCommand("enableObjectResizing",false,false)}catch(e){}}
t.on("init",function(){U()
if(Ie.ie&&Ie.ie>=11){t.on("mousedown click",function(e){var r=e.target,n=r.nodeName
if(!p&&/^(TABLE|IMG|HR)$/.test(n)&&!F(r)){2!==e.button&&t.selection.select(r,"TABLE"===n)
"mousedown"===e.type&&t.nodeChanged()}})
t.dom.bind(x,"mscontrolselect",function(e){var r=function(e){Ue.setEditorTimeout(t,function(){t.selection.select(e)})}
if(F(e.target)){e.preventDefault()
r(e.target)
return}if(/^(TABLE|IMG|HR)$/.test(e.target.nodeName)){e.preventDefault()
"IMG"===e.target.tagName&&r(e.target)}})}var e=Ue.throttle(function(e){t.composing||O(e)})
t.on("nodechange ResizeEditor ResizeWindow drop FullscreenStateChanged",e)
t.on("keyup compositionend",function(t){a&&"TABLE"===a.nodeName&&e(t)})
t.on("hide blur",_)
t.on("contextmenu",I)})
t.on("remove",L)
var Q=function(){a=o=null}
return{isResizable:D,showResizeRect:P,hideResizeRect:_,updateResizeRect:O,destroy:Q}}
var zT=function(e){var t=0,r=0
var n=e
while(n&&n.nodeType){t+=n.offsetLeft||0
r+=n.offsetTop||0
n=n.offsetParent}return{x:t,y:r}}
var jT=function(e,t,r){var n={elm:t,alignToTop:r}
e.fire("scrollIntoView",n)
return n.isDefaultPrevented()}
var HT=function(e,t,r){var n,a
var o=e.dom
var i=o.getRoot()
var u,s,l=0
if(jT(e,t,r))return
if(!Ti.isElement(t))return
false===r&&(l=t.offsetHeight)
if("BODY"!==i.nodeName){var c=e.selection.getScrollContainer()
if(c){n=zT(t).y-zT(c).y+l
s=c.clientHeight
u=c.scrollTop;(n<u||n+25>u+s)&&(c.scrollTop=n<u?n:n-s+25)
return}}a=o.getViewPort(e.getWin())
n=o.getPos(t).y+l
u=a.y
s=a.h;(n<a.y||n+25>u+s)&&e.getWin().scrollTo(0,n<u?n:n-s+25)}
var WT=function(e){if(e.inline)return e.getBody().getBoundingClientRect()
var t=e.getWin()
return{left:0,right:t.innerWidth,top:0,bottom:t.innerHeight,width:t.innerWidth,height:t.innerHeight}}
var VT=function(e,t,r){if(e.inline){e.getBody().scrollLeft+=t
e.getBody().scrollTop+=r}else e.getWin().scrollBy(t,r)}
var GT=function(e,t){$(Vl.fromRangeStart(t).getClientRects()).each(function(t){var r=WT(e)
var n=gl(r,t)
var a=4
var o=n.x>0?n.x+a:n.x-a
var i=n.y>0?n.y+a:n.y-a
VT(e,0!==n.x?o:0,0!==n.y?i:0)})}
var YT={scrollElementIntoView:HT,scrollRangeIntoView:GT}
var JT=function(e){return Ti.isContentEditableTrue(e)||Ti.isContentEditableFalse(e)}
var qT=function(e,t,r){while(e&&e!==t){if(r(e))return e
e=e.parentNode}return null}
var KT=function(e,t,r){var n,a,o
n=r.elementFromPoint(e,t)
a=r.body.createTextRange()
n&&"HTML"!==n.tagName||(n=r.body)
a.moveToElementText(n)
o=Qr.toArray(a.getClientRects())
o=o.sort(function(e,r){e=Math.abs(Math.max(e.top-t,e.bottom-t))
r=Math.abs(Math.max(r.top-t,r.bottom-t))
return e-r})
if(o.length>0){t=(o[0].bottom+o[0].top)/2
try{a.moveToPoint(e,t)
a.collapse(true)
return a}catch(e){}}return null}
var XT=function(e,t){var r=e&&e.parentElement?e.parentElement():null
return Ti.isContentEditableFalse(qT(r,t,JT))?null:e}
var ZT=function(e,t,r){var n,a
var o=r
if(o.caretPositionFromPoint){a=o.caretPositionFromPoint(e,t)
if(a){n=r.createRange()
n.setStart(a.offsetNode,a.offset)
n.collapse(true)}}else if(r.caretRangeFromPoint)n=r.caretRangeFromPoint(e,t)
else if(o.body.createTextRange){n=o.body.createTextRange()
try{n.moveToPoint(e,t)
n.collapse(true)}catch(a){n=KT(e,t,r)}return XT(n,r.body)}return n}
var $T={fromPoint:ZT}
var eR=function(e,t){return P(t,function(t){var r=e.fire("GetSelectionRange",{range:t})
return r.range!==t?r.range:t})}
var tR={processRanges:eR}
var rR=function(e,t){var r=t||document
var n=r.createDocumentFragment()
_(e,function(e){n.appendChild(e.dom())})
return ga.fromDom(n)}
var nR=Wa("element","width","rows")
var aR=Wa("element","cells")
var oR=Wa("x","y")
var iR=function(e,t){var r=parseInt(Pa(e,t),10)
return isNaN(r)?1:r}
var uR=function(e,t,r,n,a){var o=iR(a,"rowspan")
var i=iR(a,"colspan")
var u=e.rows()
for(var s=r;s<r+o;s++){u[s]||(u[s]=aR(ys(n),[]))
for(var l=t;l<t+i;l++){var c=u[s].cells()
c[l]=s===r&&l===t?a:bs(a)}}}
var sR=function(e,t,r){var n=e.rows()
var a=n[r]?n[r].cells():[]
return!!a[t]}
var lR=function(e,t,r){while(sR(e,t,r))t++
return t}
var cR=function(e){return Q(e,function(e,t){return t.cells().length>e?t.cells().length:e},0)}
var fR=function(e,t){var r=e.rows()
for(var n=0;n<r.length;n++){var a=r[n].cells()
for(var o=0;o<a.length;o++)if(ao(a[o],t))return A.some(oR(o,n))}return A.none()}
var dR=function(e,t,r,n,a){var o=[]
var i=e.rows()
for(var u=r;u<=a;u++){var s=i[u].cells()
var l=t<n?s.slice(t,n+1):s.slice(n,t+1)
o.push(aR(i[u].element(),l))}return o}
var vR=function(e,t,r){var n=t.x(),a=t.y()
var o=r.x(),i=r.y()
var u=a<i?dR(e,n,a,o,i):dR(e,n,i,o,a)
return nR(e.element(),cR(u),u)}
var mR=function(e,t){var r=bs(e.element())
var n=ga.fromTag("tbody")
Nu(n,t)
Iu(r,n)
return r}
var gR=function(e){return P(e.rows(),function(e){var t=P(e.cells(),function(e){var t=ys(e)
Oa(t,"colspan")
Oa(t,"rowspan")
return t})
var r=bs(e.element())
Nu(r,t)
return r})}
var pR=function(e){var t=nR(bs(e),0,[])
_(Xu(e,"tr"),function(e,r){_(Xu(e,"td,th"),function(n,a){uR(t,lR(t,a,r),r,e,n)})})
return nR(t.element(),cR(t.rows()),t.rows())}
var AR=function(e){return mR(e,gR(e))}
var hR=function(e,t,r){return fR(e,t).bind(function(t){return fR(e,r).map(function(r){return vR(e,t,r)})})}
var bR={fromDom:pR,toDom:AR,subsection:hR}
var yR=function(e){return z(e,function(e){return"ul"===ba(e)||"ol"===ba(e)})}
var wR=function(e,t){return z(e,function(e){return"li"===ba(e)&&ex(e,t)}).fold(a([]),function(t){return yR(e).map(function(e){return[ga.fromTag("li"),ga.fromTag(ba(e))]}).getOr([])})}
var ER=function(e,t){var r=Q(t,function(e,t){Iu(t,e)
return t},e)
return t.length>0?rR([r]):r}
var xR=function(e){return oi(e)?vo(e).filter(ai).fold(a([]),function(t){return[e,t]}):ai(e)?[e]:[]}
var CR=function(e,t){var r=ga.fromDom(t.commonAncestorContainer)
var n=Dg.parentsAndSelf(r,e)
var a=L(n,function(e){return ti(e)||$o(e)})
var o=wR(n,t)
var i=a.concat(o.length?o:xR(r))
return P(i,bs)}
var kR=function(){return rR([])}
var BR=function(e,t){return ER(ga.fromDom(t.cloneContents()),CR(e,t))}
var TR=function(e,t){return ts(t,"table",i(ao,e))}
var RR=function(e,t){return TR(e,t[0]).bind(function(e){var r=t[0]
var n=t[t.length-1]
var a=bR.fromDom(e)
return bR.subsection(a,r,n).map(function(e){return rR([bR.toDom(e)])})}).getOrThunk(kR)}
var IR=function(e,t){return t.length>0&&t[0].collapsed?kR():BR(e,t[0])}
var SR=function(e,t){var r=Lh.getCellsFromElementOrRanges(t,e)
return r.length>0?RR(e,r):IR(e,t)}
var DR={read:SR}
var NR=function(e){return A.from(e.selection.getRng()).map(function(e){return Ts.trim(e.toString())}).getOr("")}
var MR=function(e,t){var r=e.selection.getRng(),n=e.dom.create("body")
var a=e.selection.getSel()
var o
var i=tR.processRanges(e,Mh.getRanges(a))
if(r.cloneContents){o=t.contextual?DR.read(ga.fromDom(e.getBody()),i).dom():r.cloneContents()
o&&n.appendChild(o)}else n.innerHTML=r.toString()
return e.selection.serializer.serialize(n,t)}
var PR=function(e,t){void 0===t&&(t={})
t.get=true
t.format=t.format||"html"
t.selection=true
t=e.fire("BeforeGetContent",t)
if(t.isDefaultPrevented()){e.fire("GetContent",t)
return t.content}if("text"===t.format)return NR(e)
t.getInner=true
var r=MR(e,t)
if("tree"===t.format)return r
t.content=e.selection.isCollapsed()?"":r
e.fire("GetContent",t)
return t.content}
var _R={getContent:PR}
var OR=function(e,t,r){var n,a=e.selection.getRng()
var o=e.getDoc()
var i,u
r=r||{format:"html"}
r.set=true
r.selection=true
r.content=t
if(!r.no_events){r=e.fire("BeforeSetContent",r)
if(r.isDefaultPrevented()){e.fire("SetContent",r)
return}}t=r.content
if(a.insertNode){t+='<span id="__caret">_</span>'
if(a.startContainer===o&&a.endContainer===o)o.body.innerHTML=t
else{a.deleteContents()
if(0===o.body.childNodes.length)o.body.innerHTML=t
else if(a.createContextualFragment)a.insertNode(a.createContextualFragment(t))
else{i=o.createDocumentFragment()
u=o.createElement("div")
i.appendChild(u)
u.outerHTML=t
a.insertNode(i)}}n=e.dom.get("__caret")
a=o.createRange()
a.setStartBefore(n)
a.setEndBefore(n)
e.selection.setRng(a)
e.dom.remove("__caret")
try{e.selection.setRng(a)}catch(e){}}else{if(a.item){o.execCommand("Delete",false,null)
a=e.getRng()}if(/^\s+/.test(t)){a.pasteHTML('<span id="__mce_tmp">_</span>'+t)
e.dom.remove("__mce_tmp")}else a.pasteHTML(t)}r.no_events||e.fire("SetContent",r)}
var FR={setContent:OR}
var LR=function(e,t,r,n,a){var o=r?t.startContainer:t.endContainer
var i=r?t.startOffset:t.endOffset
return A.from(o).map(ga.fromDom).map(function(e){return n&&t.collapsed?e:yo(e,a(e,i)).getOr(e)}).bind(function(e){return Ea(e)?A.some(e):vo(e)}).map(function(e){return e.dom()}).getOr(e)}
var UR=function(e,t,r){return LR(e,t,true,r,function(e,t){return Math.min(xo(e),t)})}
var QR=function(e,t,r){return LR(e,t,false,r,function(e,t){return t>0?t-1:t})}
var zR=function(e,t){var r=e
while(e&&Ti.isText(e)&&0===e.length)e=t?e.nextSibling:e.previousSibling
return e||r}
var jR=function(e,t){var r,n,a,o,i
if(!t)return e
n=t.startContainer
a=t.endContainer
o=t.startOffset
i=t.endOffset
r=t.commonAncestorContainer
if(!t.collapsed){n===a&&i-o<2&&n.hasChildNodes()&&(r=n.childNodes[o])
if(3===n.nodeType&&3===a.nodeType){n=n.length===o?zR(n.nextSibling,true):n.parentNode
a=0===i?zR(a.previousSibling,false):a.parentNode
if(n&&n===a)return n}}if(r&&3===r.nodeType)return r.parentNode
return r}
var HR=function(e,t,r,n){var a,o
var i=[]
o=e.getRoot()
r=e.getParent(r||UR(o,t,t.collapsed),e.isBlock)
n=e.getParent(n||QR(o,t,t.collapsed),e.isBlock)
r&&r!==o&&i.push(r)
if(r&&n&&r!==n){a=r
var u=new jo(r,o)
while((a=u.next())&&a!==n)e.isBlock(a)&&i.push(a)}n&&r!==n&&n!==o&&i.push(n)
return i}
var WR=function(e,t,r){return A.from(t).map(function(t){var n=e.nodeIndex(t)
var a=e.createRng()
a.setStart(t.parentNode,n)
a.setEnd(t.parentNode,n+1)
if(r){tx(e,a,t,true)
tx(e,a,t,false)}return a})}
var VR=Qr.each
var GR=function(e){return!!e.select}
var YR=function(e){return!!(e&&e.ownerDocument)&&so(ga.fromDom(e.ownerDocument),ga.fromDom(e))}
var JR=function(e){return!!e&&(!!GR(e)||YR(e.startContainer)&&YR(e.endContainer))}
var qR=function(e,t,r,n){var a,o
var i,u,s
var l=function(t,r){var a=e.createRng()
if(t){a.setStart(t,r)
a.setEnd(t,r)
w(a)
h(false)}else{tx(e,a,n.getBody(),true)
w(a)}}
var c=function(e){return _R.getContent(n,e)}
var f=function(e,t){return FR.setContent(n,e,t)}
var d=function(e){return UR(n.getBody(),y(),e)}
var v=function(e){return QR(n.getBody(),y(),e)}
var m=function(e,t){return a.getBookmark(e,t)}
var g=function(e){return a.moveToBookmark(e)}
var p=function(t,r){WR(e,t,r).each(w)
return t}
var A=function(){var e=y(),t=b()
if(!e||e.item)return false
if(e.compareEndPoints)return 0===e.compareEndPoints("StartToEnd",e)
return!t||e.collapsed}
var h=function(e){var t=y()
t.collapse(!!e)
w(t)}
var b=function(){return t.getSelection?t.getSelection():t.document.selection}
var y=function(){var r,a,o,s
var l=function(e,t,r){try{return t.compareBoundaryPoints(e,r)}catch(e){return-1}}
if(!t)return null
s=t.document
if("undefined"===typeof s||null===s)return null
if(void 0!==n.bookmark&&false===Hw.hasFocus(n)){var c=zy.getRng(n)
if(c.isSome())return c.map(function(e){return tR.processRanges(n,[e])[0]}).getOr(s.createRange())}try{(r=b())&&(a=r.rangeCount>0?r.getRangeAt(0):r.createRange?r.createRange():s.createRange())}catch(e){}a=tR.processRanges(n,[a])[0]
a||(a=s.createRange?s.createRange():s.body.createTextRange())
if(a.setStart&&9===a.startContainer.nodeType&&a.collapsed){o=e.getRoot()
a.setStart(o,0)
a.setEnd(o,0)}if(i&&u)if(0===l(a.START_TO_START,a,i)&&0===l(a.END_TO_END,a,i))a=u
else{i=null
u=null}return a}
var w=function(e,t){var r,a,o
if(!JR(e))return
var s=GR(e)?e:null
if(s){u=null
try{s.select()}catch(e){}return}r=b()
o=n.fire("SetSelectionRange",{range:e,forward:t})
e=o.range
if(r){u=e
try{r.removeAllRanges()
r.addRange(e)}catch(e){}if(false===t&&r.extend){r.collapse(e.endContainer,e.endOffset)
r.extend(e.startContainer,e.startOffset)}i=r.rangeCount>0?r.getRangeAt(0):null}if(!e.collapsed&&e.startContainer===e.endContainer&&r.setBaseAndExtent&&!Ie.ie&&e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()){a=e.startContainer.childNodes[e.startOffset]
if(a&&"IMG"===a.tagName){r.setBaseAndExtent(e.startContainer,e.startOffset,e.endContainer,e.endOffset)
r.anchorNode===e.startContainer&&r.focusNode===e.endContainer||r.setBaseAndExtent(a,0,a,1)}}n.fire("AfterSetSelectionRange",{range:e,forward:t})}
var E=function(t){f(e.getOuterHTML(t))
return t}
var x=function(){return jR(n.getBody(),y())}
var C=function(t,r){return HR(e,y(),t,r)}
var k=function(){var t=b()
var r,n
if(!t||!t.anchorNode||!t.focusNode)return true
r=e.createRng()
r.setStart(t.anchorNode,t.anchorOffset)
r.collapse(true)
n=e.createRng()
n.setStart(t.focusNode,t.focusOffset)
n.collapse(true)
return r.compareBoundaryPoints(r.START_TO_START,n)<=0}
var B=function(){var t=y()
var r=b()
if(!Mh.hasMultipleRanges(r)&&rx(n)){var a=ly.normalize(e,t)
a.each(function(e){w(e,k())})
return a.getOr(t)}return t}
var T=function(t,r){var a
if(!s){s={}
a={}
n.on("NodeChange",function(t){var r=t.element,n=e.getParents(r,null,e.getRoot()),o={}
VR(s,function(t,r){VR(n,function(i){if(e.is(i,r)){if(!a[r]){VR(t,function(e){e(true,{node:i,selector:r,parents:n})})
a[r]=t}o[r]=t
return false}})})
VR(a,function(e,t){if(!o[t]){delete a[t]
VR(e,function(e){e(false,{node:r,selector:t,parents:n})})}})})}s[t]||(s[t]=[])
s[t].push(r)
return M}
var R=function(){var t
var r=e.getRoot()
while(r&&"BODY"!==r.nodeName){if(r.scrollHeight>r.clientHeight){t=r
break}r=r.parentNode}return t}
var I=function(e,t){return YT.scrollElementIntoView(n,e,t)}
var S=function(e,t){return w($T.fromPoint(e,t,n.getDoc()))}
var D=function(){var e=y()
return e.collapsed?Gl.fromRangeStart(e).getClientRects()[0]:e.getBoundingClientRect()}
var N=function(){t=i=u=null
o.destroy()}
var M={bookmarkManager:null,controlSelection:null,dom:e,win:t,serializer:r,editor:n,collapse:h,setCursorLocation:l,getContent:c,setContent:f,getBookmark:m,moveToBookmark:g,select:p,isCollapsed:A,isForward:k,setNode:E,getNode:x,getSel:b,setRng:w,getRng:y,getStart:d,getEnd:v,getSelectedBlocks:C,normalize:B,selectorChanged:T,getScrollContainer:R,scrollIntoView:I,placeCaretAt:S,getBoundingClientRect:D,destroy:N}
a=OT(M)
o=QT(M,n)
M.bookmarkManager=a
M.controlSelection=o
return M}
var KR=Ti.isContentEditableFalse
var XR=pl
var ZR=Cf
var $R=xf
var eI=function(e,t){while(t=e(t))if(t.isVisible())return t
return t}
var tI=function(e,t){var r=ff(e,t)
if(!r&&Ti.isBr(e.getNode()))return true
return r}
var rI=function(e,t,r,n){var a,o,i,u
var s=e===Nf.Forwards
var l=s?$R:ZR
if(!n.collapsed){a=XR(n)
if(KR(a))return uC(e,t,a,e===Nf.Backwards,true)}u=Hs(n)
o=Ef(e,t.getBody(),n)
if(l(o))return lC(t,o.getNode(!s))
o=r(o)
if(!o){if(u)return n
return null}if(l(o))return uC(e,t,o.getNode(!s),s,true)
i=r(o)
if(l(i)&&tI(o,i))return uC(e,t,i.getNode(!s),s,true)
if(u)return fC(t,o.toRange(),true)
return null}
var nI=function(e,t,r,n){var a,o,i
var u,s,l
var c,f,d
d=XR(n)
a=Ef(e,t.getBody(),n)
o=r(t.getBody(),Wx(1),a)
i=L(o,Vx(1))
s=Tr.last(a.getClientRects());($R(a)||kf(a))&&(d=a.getNode());(ZR(a)||Bf(a))&&(d=a.getNode(true))
if(!s)return null
l=s.left
u=Xx(i,l)
if(u&&KR(u.node)){c=Math.abs(l-u.left)
f=Math.abs(l-u.right)
return uC(e,t,u.node,c<f,true)}if(d){var v=Hx(e,t.getBody(),Wx(1),d)
u=Xx(L(v,Vx(1)),l)
if(u)return fC(t,u.position.toRange(),true)
u=Tr.last(L(v,Vx(0)))
if(u)return fC(t,u.position.toRange(),true)}}
var aI=function(e){var t=e.dom.create(e.settings.forced_root_block);(!Ie.ie||Ie.ie>=11)&&(t.innerHTML='<br data-mce-bogus="1">')
return t}
var oI=function(e,t,r){var n,a,o
var u=Vf(e.getBody())
var s=i(eI,u.next)
var l=i(eI,u.prev)
if(r.collapsed&&e.settings.forced_root_block){n=e.dom.getParent(r.startContainer,"PRE")
if(!n)return
a=1===t?s(Gl.fromRangeStart(r)):l(Gl.fromRangeStart(r))
if(!a){o=aI(e)
1===t?e.$(n).after(o):e.$(n).before(o)
e.selection.select(o,true)
e.selection.collapse()}}}
var iI=function(e,t){var r=Vf(e.getBody())
var n=i(eI,r.next)
var a=i(eI,r.prev)
var o
var u=t?Nf.Forwards:Nf.Backwards
var s=t?n:a
var l=e.selection.getRng()
o=rI(u,e,s,l)
if(o)return o
o=oI(e,u,l)
if(o)return o
return null}
var uI=function(e,t){var r
var n=t?1:-1
var a=t?jx:zx
var o=e.selection.getRng()
r=nI(n,e,a,o)
if(r)return r
r=oI(e,n,o)
if(r)return r
return null}
var sI=function(e,t){return function(){var r=iI(e,t)
if(r){e.selection.setRng(r)
return true}return false}}
var lI=function(e,t){return function(){var r=uI(e,t)
if(r){e.selection.setRng(r)
return true}return false}}
var cI;(function(e){e[e["Br"]=0]="Br"
e[e["Block"]=1]="Block"
e[e["Wrap"]=2]="Wrap"
e[e["Eol"]=3]="Eol"})(cI||(cI={}))
var fI=function(e,t){return e===Nf.Backwards?t.reverse():t}
var dI=function(e,t,r){return e===Nf.Forwards?t.next(r):t.prev(r)}
var vI=function(e,t,r,n){return Ti.isBr(n.getNode(t===Nf.Forwards))?cI.Br:false===ff(r,n)?cI.Block:cI.Wrap}
var mI=function(e,t,r,n){var a=Vf(r)
var o,i=n
var u=[]
while(i){o=dI(t,a,i)
if(!o)break
if(Ti.isBr(o.getNode(false)))return t===Nf.Forwards?{positions:fI(t,u).concat([o]),breakType:cI.Br,breakAt:A.some(o)}:{positions:fI(t,u),breakType:cI.Br,breakAt:A.some(o)}
if(!o.isVisible()){i=o
continue}if(e(i,o)){var s=vI(r,t,i,o)
return{positions:fI(t,u),breakType:s,breakAt:A.some(o)}}u.push(o)
i=o}return{positions:fI(t,u),breakType:cI.Eol,breakAt:A.none()}}
var gI=function(e,t,r,n){return t(r,n).breakAt.map(function(n){var a=t(r,n).positions
return e===Nf.Backwards?a.concat(n):[n].concat(a)}).getOr([])}
var pI=function(e,t){return Q(e,function(e,r){return e.fold(function(){return A.some(r)},function(n){return yl([$(n.getClientRects()),$(r.getClientRects())],function(e,a){var o=Math.abs(t-e.left)
var i=Math.abs(t-a.left)
return i<=o?r:n}).or(e)})},A.none())}
var AI=function(e,t){return $(t.getClientRects()).bind(function(t){return pI(e,t.left)})}
var hI=i(mI,Vl.isAbove,-1)
var bI=i(mI,Vl.isBelow,1)
var yI=function(e,t){return hI(e,t).breakAt.isNone()}
var wI=function(e,t){return bI(e,t).breakAt.isNone()}
var EI=i(gI,-1,hI)
var xI=i(gI,1,bI)
var CI=function(e){return ad.firstPositionIn(e).map(function(t){return[t].concat(bI(e,t).positions)}).getOr([])}
var kI=function(e){return ad.lastPositionIn(e).map(function(t){return hI(e,t).positions.concat(t)}).getOr([])}
var BI=function(e,t){return{left:e.left-t,top:e.top-t,right:e.right+2*t,bottom:e.bottom+2*t,width:e.width+t,height:e.height+t}}
var TI=function(e,t){return G(t,function(t){var r=BI(il(t.getBoundingClientRect()),-1)
return[{x:r.left,y:e(r),cell:t},{x:r.right,y:e(r),cell:t}]})}
var RI=function(e,t,r){return Q(e,function(e,n){return e.fold(function(){return A.some(n)},function(e){var a=Math.sqrt(Math.abs(e.x-t)+Math.abs(e.y-r))
var o=Math.sqrt(Math.abs(n.x-t)+Math.abs(n.y-r))
return A.some(o<a?n:e)})},A.none())}
var II=function(e,t,r,n,a){var o=Xu(ga.fromDom(r),"td,th,caption").map(function(e){return e.dom()})
var i=L(TI(e,o),function(e){return t(e,a)})
return RI(i,n,a).map(function(e){return e.cell})}
var SI=function(e){return e.bottom}
var DI=function(e){return e.top}
var NI=function(e,t){return e.y<t}
var MI=function(e,t){return e.y>t}
var PI=i(II,SI,NI)
var _I=i(II,DI,MI)
var OI=function(e,t){return $(t.getClientRects()).bind(function(t){return PI(e,t.left,t.top)}).bind(function(e){return AI(kI(e),t)})}
var FI=function(e,t){return ee(t.getClientRects()).bind(function(t){return _I(e,t.left,t.top)}).bind(function(e){return AI(CI(e),t)})}
var LI=function(e,t){e.selection.setRng(t)
YT.scrollRangeIntoView(e,t)}
var UI=function(e,t,r){return r.breakAt.map(function(r){return e(t,r).breakAt.isSome()}).getOr(false)}
var QI=function(e){return e.breakType===cI.Wrap&&0===e.positions.length}
var zI=function(e){return e.breakType===cI.Br&&1===e.positions.length}
var jI=function(e,t,r){var n=e(t,r)
return QI(n)||!Ti.isBr(r.getNode())&&zI(n)?!UI(e,t,n):n.breakAt.isNone()}
var HI=i(jI,hI)
var WI=i(jI,bI)
var VI=function(e,t,r){var n=Gl.fromRangeStart(t)
return ad.positionIn(!e,r).map(function(e){return e.isEqual(n)}).getOr(false)}
var GI=function(e,t,r,n){var a=e.selection.getRng()
var o=t?1:-1
if(Yc()&&VI(t,a,r)){var i=uC(o,e,r,!t,true)
LI(e,i)
return true}return false}
var YI=function(e,t,r){return OI(t,r).orThunk(function(){return $(r.getClientRects()).bind(function(r){return pI(EI(e,Gl.before(t)),r.left)})}).getOr(Gl.before(t))}
var JI=function(e,t,r){return FI(t,r).orThunk(function(){return $(r.getClientRects()).bind(function(r){return pI(xI(e,Gl.after(t)),r.left)})}).getOr(Gl.after(t))}
var qI=function(e,t){var r=t.getNode(e)
return Ti.isElement(r)&&"TABLE"===r.nodeName?A.some(r):A.none()}
var KI=function(e,t,r,n){var a=Mb.getForcedRootBlock(t)
a?t.undoManager.transact(function(){var n=ga.fromTag(a)
Ma(n,Mb.getForcedRootBlockAttrs(t))
Iu(n,ga.fromTag("br"))
e?Tu(ga.fromDom(r),n):Bu(ga.fromDom(r),n)
var o=t.dom.createRng()
o.setStart(n.dom(),0)
o.setEnd(n.dom(),0)
LI(t,o)}):LI(t,n.toRange())}
var XI=function(e,t,r){var n=qI(!!t,r)
var a=false===t
n.fold(function(){return LI(e,r.toRange())},function(n){return ad.positionIn(a,e.getBody()).filter(function(e){return e.isEqual(r)}).fold(function(){return LI(e,r.toRange())},function(a){return KI(t,e,n,r)})})}
var ZI=function(e,t,r,n){var a=e.selection.getRng()
var o=Gl.fromRangeStart(a)
var i=e.getBody()
if(!t&&HI(n,o)){var u=YI(i,r,o)
XI(e,t,u)
return true}if(t&&WI(n,o)){u=JI(i,r,o)
XI(e,t,u)
return true}return false}
var $I=function(e,t){return function(){return A.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind(function(r){return A.from(e.dom.getParent(r,"table")).map(function(n){return GI(e,t,n,r)})}).getOr(false)}}
var eS=function(e,t){return function(){return A.from(e.dom.getParent(e.selection.getNode(),"td,th")).bind(function(r){return A.from(e.dom.getParent(r,"table")).map(function(n){return ZI(e,t,n,r)})}).getOr(false)}}
var tS=function(e){return N(["figcaption"],ba(e))}
var rS=function(e){var t=document.createRange()
t.setStartBefore(e.dom())
t.setEndBefore(e.dom())
return t}
var nS=function(e,t,r){r?Iu(e,t):Ru(e,t)}
var aS=function(e,t){var r=ga.fromTag("br")
nS(e,r,t)
return rS(r)}
var oS=function(e,t,r,n){var a=ga.fromTag(r)
var o=ga.fromTag("br")
Ma(a,n)
Iu(a,o)
nS(e,a,t)
return rS(o)}
var iS=function(e,t,r,n){return""===t?aS(e,n):oS(e,n,t,r)}
var uS=function(e,t){var r=i(ao,t)
return es(ga.fromDom(e.container()),ei,r).filter(tS)}
var sS=function(e,t,r){return t?wI(e.dom(),r):yI(e.dom(),r)}
var lS=function(e,t){var r=ga.fromDom(e.getBody())
var n=Gl.fromRangeStart(e.selection.getRng())
var a=Mb.getForcedRootBlock(e)
var o=Mb.getForcedRootBlockAttrs(e)
return uS(n,r).exists(function(){if(sS(r,t,n)){var i=iS(r,a,o,t)
e.selection.setRng(i)
return true}return false})}
var cS=function(e,t){return function(){return!!e.selection.isCollapsed()&&lS(e,t)}}
var fS=function(e){return P(e,function(e){return XB({shiftKey:false,altKey:false,ctrlKey:false,metaKey:false,keyCode:0,action:r},e)})}
var dS=function(e,t){return t.keyCode===e.keyCode&&t.shiftKey===e.shiftKey&&t.altKey===e.altKey&&t.ctrlKey===e.ctrlKey&&t.metaKey===e.metaKey}
var vS=function(e,t){return G(fS(e),function(e){return dS(e,t)?[e]:[]})}
var mS=function(e){var t=[]
for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
var n=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,n)}}
var gS=function(e,t){return z(vS(e,t),function(e){return e.action()})}
var pS={match:vS,action:mS,execute:gS}
var AS=function(e,t,r){var n=la.detect().os
pS.execute([{keyCode:mC.RIGHT,action:sI(e,true)},{keyCode:mC.LEFT,action:sI(e,false)},{keyCode:mC.UP,action:lI(e,false)},{keyCode:mC.DOWN,action:lI(e,true)},{keyCode:mC.RIGHT,action:$I(e,true)},{keyCode:mC.LEFT,action:$I(e,false)},{keyCode:mC.UP,action:eS(e,false)},{keyCode:mC.DOWN,action:eS(e,true)},{keyCode:mC.RIGHT,action:$A.move(e,t,true)},{keyCode:mC.LEFT,action:$A.move(e,t,false)},{keyCode:mC.RIGHT,ctrlKey:!n.isOSX(),altKey:n.isOSX(),action:$A.moveNextWord(e,t)},{keyCode:mC.LEFT,ctrlKey:!n.isOSX(),altKey:n.isOSX(),action:$A.movePrevWord(e,t)},{keyCode:mC.UP,action:cS(e,false)},{keyCode:mC.DOWN,action:cS(e,true)}],r).each(function(e){r.preventDefault()})}
var hS=function(e,t){e.on("keydown",function(r){false===r.isDefaultPrevented()&&AS(e,t,r)})}
var bS={setup:hS}
var yS=function(e,t){var r=Dg.parentsAndSelf(t,e)
return j(r,ei).fold(a(r),function(e){return r.slice(0,e)})}
var wS=function(e){return 1===bo(e).length}
var ES=function(e,t,r,n){var a=i(_k,t)
var o=P(L(n,a),function(e){return e.dom()})
if(0===o.length)Hp.deleteElement(t,e,r)
else{var u=Pk(r.dom(),o)
t.selection.setRng(u.toRange())}}
var xS=function(e,t){var r=ga.fromDom(e.getBody())
var n=ga.fromDom(e.selection.getStart())
var a=L(yS(r,n),wS)
return ee(a).map(function(r){var n=Gl.fromRangeStart(e.selection.getRng())
if(og.willDeleteLastPositionInElement(t,n,r.dom())&&!Ok(r)){ES(t,e,r,a)
return true}return false}).getOr(false)}
var CS=function(e,t){return!!e.selection.isCollapsed()&&xS(e,t)}
var kS={backspaceDelete:CS}
var BS=function(e,t,r){pS.execute([{keyCode:mC.BACKSPACE,action:pS.action($p.backspaceDelete,e,false)},{keyCode:mC.DELETE,action:pS.action($p.backspaceDelete,e,true)},{keyCode:mC.BACKSPACE,action:pS.action(sh.backspaceDelete,e,t,false)},{keyCode:mC.DELETE,action:pS.action(sh.backspaceDelete,e,t,true)},{keyCode:mC.BACKSPACE,action:pS.action(nb.backspaceDelete,e,false)},{keyCode:mC.DELETE,action:pS.action(nb.backspaceDelete,e,true)},{keyCode:mC.BACKSPACE,action:pS.action($g.backspaceDelete,e,false)},{keyCode:mC.DELETE,action:pS.action($g.backspaceDelete,e,true)},{keyCode:mC.BACKSPACE,action:pS.action(Vg.backspaceDelete,e,false)},{keyCode:mC.DELETE,action:pS.action(Vg.backspaceDelete,e,true)},{keyCode:mC.BACKSPACE,action:pS.action(kS.backspaceDelete,e,false)},{keyCode:mC.DELETE,action:pS.action(kS.backspaceDelete,e,true)}],r).each(function(e){r.preventDefault()})}
var TS=function(e,t){pS.execute([{keyCode:mC.BACKSPACE,action:pS.action($p.paddEmptyElement,e)},{keyCode:mC.DELETE,action:pS.action($p.paddEmptyElement,e)}],t)}
var RS=function(e,t){e.on("keydown",function(r){false===r.isDefaultPrevented()&&BS(e,t,r)})
e.on("keyup",function(t){false===t.isDefaultPrevented()&&TS(e,t)})}
var IS={setup:RS}
var SS=function(e){while(e){if(1===e.nodeType||3===e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e
e=e.nextSibling}}
var DS=function(e,t){var r,n,a,o,i=t
var u=e.dom
var s=e.schema.getMoveCaretBeforeOnEnterElements()
if(!t)return
if(/^(LI|DT|DD)$/.test(t.nodeName)){var l=SS(t.firstChild)
l&&/^(UL|OL|DL)$/.test(l.nodeName)&&t.insertBefore(u.doc.createTextNode(" "),t.firstChild)}a=u.createRng()
t.normalize()
if(t.hasChildNodes()){r=new jo(t,t)
while(n=r.current()){if(Ti.isText(n)){a.setStart(n,0)
a.setEnd(n,0)
break}if(s[n.nodeName.toLowerCase()]){a.setStartBefore(n)
a.setEndBefore(n)
break}i=n
n=r.next()}if(!n){a.setStart(i,0)
a.setEnd(i,0)}}else if(Ti.isBr(t))if(t.nextSibling&&u.isBlock(t.nextSibling)){a.setStartBefore(t)
a.setEndBefore(t)}else{a.setStartAfter(t)
a.setEndAfter(t)}else{a.setStart(t,0)
a.setEnd(t,0)}e.selection.setRng(a)
u.remove(o)
e.selection.scrollIntoView(t)}
var NS=function(e,t){var r=e.getRoot()
var n,a
n=t
while(n!==r&&"false"!==e.getContentEditable(n)){"true"===e.getContentEditable(n)&&(a=n)
n=n.parentNode}return n!==r?a:r}
var MS=function(e){return A.from(e.dom.getParent(e.selection.getStart(true),e.dom.isBlock))}
var PS=function(e){return MS(e).fold(a(""),function(e){return e.nodeName.toUpperCase()})}
var _S=function(e){return MS(e).filter(function(e){return oi(ga.fromDom(e))}).isSome()}
var OS={moveToCaretPosition:DS,getEditableRoot:NS,getParentBlock:MS,getParentBlockName:PS,isListItemParentBlock:_S}
var FS=function(e,t){return e.firstChild&&e.firstChild.nodeName===t}
var LS=function(e,t){return e&&e.parentNode&&e.parentNode.nodeName===t}
var US=function(e){return e&&/^(OL|UL|LI)$/.test(e.nodeName)}
var QS=function(e){return US(e)&&US(e.parentNode)}
var zS=function(e){var t=e.parentNode
if(/^(LI|DT|DD)$/.test(t.nodeName))return t
return e}
var jS=function(e,t,r){var n=e[r?"firstChild":"lastChild"]
while(n){if(Ti.isElement(n))break
n=n[r?"nextSibling":"previousSibling"]}return n===t}
var HS=function(e,t,r,n,a){var o=e.dom
var i=e.selection.getRng()
if(r===e.getBody())return
QS(r)&&(a="LI")
var u=a?t(a):o.create("BR")
if(jS(r,n,true)&&jS(r,n,false))LS(r,"LI")?o.insertAfter(u,zS(r)):o.replace(u,r)
else if(jS(r,n,true))if(LS(r,"LI")){o.insertAfter(u,zS(r))
u.appendChild(o.doc.createTextNode(" "))
u.appendChild(r)}else r.parentNode.insertBefore(u,r)
else if(jS(r,n,false))o.insertAfter(u,zS(r))
else{r=zS(r)
var s=i.cloneRange()
s.setStartAfter(n)
s.setEndAfter(r)
var l=s.extractContents()
if("LI"===a&&FS(l,"LI")){u=l.firstChild
o.insertAfter(l,r)}else{o.insertAfter(l,r)
o.insertAfter(u,r)}}o.remove(n)
OS.moveToCaretPosition(e,u)}
var WS={insert:HS}
var VS=function(e){_(Ku(ga.fromDom(e),xa),function(e){var t=e.dom()
t.nodeValue=Ts.trim(t.nodeValue)})}
var GS=function(e,t){return t&&"A"===t.nodeName&&e.isEmpty(t)}
var YS=function(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}
var JS=function(e){e.innerHTML='<br data-mce-bogus="1">'}
var qS=function(e,t){return e.nodeName===t||e.previousSibling&&e.previousSibling.nodeName===t}
var KS=function(e,t){return t&&e.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&!/^(fixed|absolute)/i.test(t.style.position)&&"true"!==e.getContentEditable(t)}
var XS=function(e,t,r){var n=r
var a=[]
var o
if(!n)return
while(n=n.firstChild){if(e.isBlock(n))return
Ti.isElement(n)&&!t[n.nodeName.toLowerCase()]&&a.push(n)}o=a.length
while(o--){n=a[o]
!n.hasChildNodes()||n.firstChild===n.lastChild&&""===n.firstChild.nodeValue?e.remove(n):GS(e,n)&&e.remove(n)}}
var ZS=function(e,t,r){return false===Ti.isText(t)?r:e?1===r&&t.data.charAt(r-1)===Ts.ZWSP?0:r:r===t.data.length-1&&t.data.charAt(r)===Ts.ZWSP?t.data.length:r}
var $S=function(e){var t=e.cloneRange()
t.setStart(e.startContainer,ZS(true,e.startContainer,e.startOffset))
t.setEnd(e.endContainer,ZS(false,e.endContainer,e.endOffset))
return t}
var eD=function(e){do{Ti.isText(e)&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,""))
e=e.firstChild}while(e)}
var tD=function(e,t){var r=e.getRoot()
var n,a
n=t
while(n!==r&&"false"!==e.getContentEditable(n)){"true"===e.getContentEditable(n)&&(a=n)
n=n.parentNode}return n!==r?a:r}
var rD=function(e,t){var r=Mb.getForcedRootBlock(e)
r&&r.toLowerCase()===t.tagName.toLowerCase()&&e.dom.setAttribs(t,Mb.getForcedRootBlockAttrs(e))}
var nD=function(e,t,r,n,a){var o,i,u,s,l,c
var f=t||"P"
var d=e.dom,v=tD(d,n)
i=d.getParent(n,d.isBlock)
if(!i||!KS(d,i)){i=i||v
c=i===e.getBody()||YS(i)?i.nodeName.toLowerCase():i.parentNode.nodeName.toLowerCase()
if(!i.hasChildNodes()){o=d.create(f)
rD(e,o)
i.appendChild(o)
r.setStart(o,0)
r.setEnd(o,0)
return o}s=n
while(s.parentNode!==i)s=s.parentNode
while(s&&!d.isBlock(s)){u=s
s=s.previousSibling}if(u&&e.schema.isValidChild(c,f.toLowerCase())){o=d.create(f)
rD(e,o)
u.parentNode.insertBefore(o,u)
s=u
while(s&&!d.isBlock(s)){l=s.nextSibling
o.appendChild(s)
s=l}r.setStart(n,a)
r.setEnd(n,a)}}return n}
var aD=function(e,t){var r
t.normalize()
r=t.lastChild
r&&!/^(left|right)$/gi.test(e.getStyle(r,"float",true))||e.add(t,"br")}
var oD=function(e,t){var r,n,a,o,i,u
var s,l,c,f,d,v,m
var g=e.dom
var p=e.schema,A=p.getNonEmptyElements()
var h=e.selection.getRng()
var b=function(t){var r,o,u,s=a
var l=p.getTextInlineElements()
if(t||"TABLE"===f||"HR"===f){r=g.create(t||v)
rD(e,r)}else r=i.cloneNode(false)
u=r
if(false===Mb.shouldKeepStyles(e)){g.setAttrib(r,"style",null)
g.setAttrib(r,"class",null)}else do{if(l[s.nodeName]){if(kc(s))continue
o=s.cloneNode(false)
g.setAttrib(o,"id","")
if(r.hasChildNodes()){o.appendChild(r.firstChild)
r.appendChild(o)}else{u=o
r.appendChild(o)}}}while((s=s.parentNode)&&s!==n)
JS(u)
return r}
var y=function(e){var t,r,n,u
u=ZS(e,a,o)
if(Ti.isText(a)&&(e?u>0:u<a.nodeValue.length))return false
if(a.parentNode===i&&m&&!e)return true
if(e&&Ti.isElement(a)&&a===i.firstChild)return true
if(qS(a,"TABLE")||qS(a,"HR"))return m&&!e||!m&&e
t=new jo(a,i)
Ti.isText(a)&&(e&&0===u?t.prev():e||u!==a.nodeValue.length||t.next())
while(r=t.current()){if(Ti.isElement(r)){if(!r.getAttribute("data-mce-bogus")){n=r.nodeName.toLowerCase()
if(A[n]&&"br"!==n)return false}}else if(Ti.isText(r)&&!/^[ \t\r\n]*$/.test(r.nodeValue))return false
e?t.prev():t.next()}return true}
var w=function(){s=/^(H[1-6]|PRE|FIGURE)$/.test(f)&&"HGROUP"!==d?b(v):b()
Mb.shouldEndContainerOnEmptyBlock(e)&&KS(g,c)&&g.isEmpty(i)?s=g.split(c,i):g.insertAfter(s,i)
OS.moveToCaretPosition(e,s)}
ly.normalize(g,h).each(function(e){h.setStart(e.startContainer,e.startOffset)
h.setEnd(e.endContainer,e.endOffset)})
a=h.startContainer
o=h.startOffset
v=Mb.getForcedRootBlock(e)
u=t.shiftKey
if(Ti.isElement(a)&&a.hasChildNodes()){m=o>a.childNodes.length-1
a=a.childNodes[Math.min(o,a.childNodes.length-1)]||a
o=m&&Ti.isText(a)?a.nodeValue.length:0}n=tD(g,a)
if(!n)return;(v&&!u||!v&&u)&&(a=nD(e,v,h,a,o))
i=g.getParent(a,g.isBlock)
c=i?g.getParent(i.parentNode,g.isBlock):null
f=i?i.nodeName.toUpperCase():""
d=c?c.nodeName.toUpperCase():""
if("LI"===d&&!t.ctrlKey){i=c
c=c.parentNode
f=d}if(/^(LI|DT|DD)$/.test(f)&&g.isEmpty(i)){WS.insert(e,b,c,i,v)
return}if(v&&i===e.getBody())return
v=v||"P"
if(Ss(i)){s=js(i)
g.isEmpty(i)&&JS(i)
OS.moveToCaretPosition(e,s)}else if(y())w()
else if(y(true)){s=i.parentNode.insertBefore(b(),i)
OS.moveToCaretPosition(e,qS(i,"HR")?s:i)}else{r=$S(h).cloneRange()
r.setEndAfter(i)
l=r.extractContents()
VS(l)
eD(l)
s=l.firstChild
g.insertAfter(l,i)
XS(g,A,s)
aD(g,i)
g.isEmpty(i)&&JS(i)
s.normalize()
if(g.isEmpty(s)){g.remove(s)
w()}else OS.moveToCaretPosition(e,s)}g.setAttrib(s,"id","")
e.fire("NewBlock",{newBlock:s})}
var iD={insert:oD}
var uD=function(e,t){return OS.getParentBlock(e).filter(function(e){return t.length>0&&eo(ga.fromDom(e),t)}).isSome()}
var sD=function(e){return uD(e,Mb.getBrNewLineSelector(e))}
var lD=function(e){return uD(e,Mb.getNoNewLineSelector(e))}
var cD={shouldInsertBr:sD,shouldBlockNewLine:lD}
var fD=tp.generate([{br:[]},{block:[]},{none:[]}])
var dD=function(e,t){return cD.shouldBlockNewLine(e)}
var vD=function(e){return function(t,r){var n=""===Mb.getForcedRootBlock(t)
return n===e}}
var mD=function(e){return function(t,r){return OS.isListItemParentBlock(t)===e}}
var gD=function(e,t){return function(r,n){var a=OS.getParentBlockName(r)===e.toUpperCase()
return a===t}}
var pD=function(e){return gD("pre",e)}
var AD=function(){return gD("summary",true)}
var hD=function(e){return function(t,r){return Mb.shouldPutBrInPre(t)===e}}
var bD=function(e,t){return cD.shouldInsertBr(e)}
var yD=function(e,t){return t}
var wD=function(e){var t=Mb.getForcedRootBlock(e)
var r=OS.getEditableRoot(e.dom,e.selection.getStart())
return r&&e.schema.isValidChild(r.nodeName,t||"P")}
var ED=function(e,t){return function(r,n){var a=Q(e,function(e,t){return e&&t(r,n)},true)
return a?A.some(t):A.none()}}
var xD=function(e,t){return mA.evaluateUntil([ED([dD],fD.none()),ED([AD()],fD.br()),ED([pD(true),hD(false),yD],fD.br()),ED([pD(true),hD(false)],fD.block()),ED([pD(true),hD(true),yD],fD.block()),ED([pD(true),hD(true)],fD.br()),ED([mD(true),yD],fD.br()),ED([mD(true)],fD.block()),ED([vD(true),yD,wD],fD.block()),ED([vD(true)],fD.br()),ED([bD],fD.br()),ED([vD(false),yD],fD.br()),ED([wD],fD.block())],[e,t.shiftKey]).getOr(fD.none())}
var CD={getAction:xD}
var kD=function(e,t){CD.getAction(e,t).fold(function(){xy.insert(e,t)},function(){iD.insert(e,t)},r)}
var BD={insert:kD}
var TD=function(e){if(e.typing){e.typing=false
e.add()}}
var RD=function(e,t){if(t.isDefaultPrevented())return
t.preventDefault()
TD(e.undoManager)
e.undoManager.transact(function(){false===e.selection.isCollapsed()&&e.execCommand("Delete")
BD.insert(e,t)})}
var ID=function(e){e.on("keydown",function(t){t.keyCode===mC.ENTER&&RD(e,t)})}
var SD={setup:ID}
var DD=function(e,t){var r=t.container()
var n=t.offset()
if(Ti.isText(r)){r.insertData(n,e)
return A.some(Vl(r,n+e.length))}return Sf(t).map(function(r){var n=ga.fromText(e)
t.isAtEnd()?Tu(r,n):Bu(r,n)
return Vl(n.dom(),e.length)})}
var ND=i(DD," ")
var MD=i(DD," ")
var PD=function(e,t,r){var n=L(Dg.parentsAndSelf(ga.fromDom(r.container()),t),ei)
return $(n).fold(function(){return ad.navigate(e,t.dom(),r).forall(function(e){return false===ff(e,r,t.dom())})},function(t){return ad.navigate(e,t.dom(),r).isNone()})}
var _D=i(PD,false)
var OD=i(PD,true)
var FD=" "
var LD=function(e){return Vl.isTextPosition(e)&&!e.isAtStart()&&!e.isAtEnd()}
var UD=function(e,t){var r=L(Dg.parentsAndSelf(ga.fromDom(t.container()),e),ei)
return $(r).getOr(e)}
var QD=function(e,t){return LD(t)?If(t):If(t)||ad.prevPosition(UD(e,t).dom(),t).exists(If)}
var zD=function(e,t){return LD(t)?Rf(t):Rf(t)||ad.nextPosition(UD(e,t).dom(),t).exists(Rf)}
var jD=function(e){return N(["pre","pre-line","pre-wrap"],e)}
var HD=function(e){return Sf(e).bind(function(e){return es(e,Ea)}).exists(function(e){return jD(za(e,"white-space"))})}
var WD=function(e,t){return ad.prevPosition(e.dom(),t).isNone()}
var VD=function(e,t){return ad.nextPosition(e.dom(),t).isNone()}
var GD=function(e,t){return WD(e,t)||VD(e,t)||_D(e,t)||OD(e,t)||op(e,t)||ap(e,t)}
var YD=function(e,t){return!HD(t)&&(GD(e,t)||QD(e,t)||zD(e,t))}
var JD=function(e,t){return!HD(t)&&(_D(e,t)||op(e,t)||QD(e,t))}
var qD=function(e,t){return!HD(t)&&(OD(e,t)||ap(e,t)||zD(e,t))}
var KD=function(e,t){return Kc(e.charAt(t))}
var XD=function(e){var t=e.container()
return Ti.isText(t)&&Xn(t.data,FD)}
var ZD=function(e,t,r){var n=Vl(t,0)
return KD(r,0)&&!JD(e,n)?" "+r.slice(1):r}
var $D=function(e){return P(e.split(""),function(e,t,r){return Kc(e)&&t>0&&t<r.length-1&&Zc(r[t-1])&&Zc(r[t+1])?" ":e}).join("")}
var eN=function(e,t,r){var n=Vl(t,r.length)
return KD(r,r.length-1)&&!qD(e,n)?r.slice(0,-1)+" ":r}
var tN=function(e,t){return A.some(t).filter(XD).bind(function(t){var r=t.container()
var n=r.nodeValue
var a=ZD(e,r,$D(eN(e,r,n)))
if(n!==a){t.container().nodeValue=a
return A.some(t)}return A.none()})}
var rN=function(e){var t=ga.fromDom(e.getBody())
e.selection.isCollapsed()&&tN(t,Vl.fromRangeStart(e.selection.getRng())).each(function(t){e.selection.setRng(t.toRange())})}
var nN=function(e){return function(t){return t.fold(function(t){return ad.prevPosition(e.dom(),Gl.before(t))},function(e){return ad.firstPositionIn(e)},function(e){return ad.lastPositionIn(e)},function(t){return ad.nextPosition(e.dom(),Gl.after(t))})}}
var aN=function(e,t){return function(r){return YD(e,r)?ND(t):MD(t)}}
var oN=function(e){return function(t){e.selection.setRng(t.toRange())
e.nodeChanged()
return true}}
var iN=function(e){var t=Gl.fromRangeStart(e.selection.getRng())
var r=ga.fromDom(e.getBody())
if(e.selection.isCollapsed()){var n=i($m.isInlineTarget,e)
var a=Gl.fromRangeStart(e.selection.getRng())
return _A.readLocation(n,e.getBody(),a).bind(nN(r)).bind(aN(r,t)).exists(oN(e))}return false}
var uN=function(e,t){pS.execute([{keyCode:mC.SPACEBAR,action:pS.action(iN,e)}],t).each(function(e){t.preventDefault()})}
var sN=function(e){e.on("keydown",function(t){false===t.isDefaultPrevented()&&uN(e,t)})}
var lN={setup:sN}
var cN=function(e){return rs(ga.fromDom(e.getBody()),"*[data-mce-caret]").fold(a(null),function(e){return e.dom()})}
var fN=function(e){e.selection.setRng(e.selection.getRng())}
var dN=function(e,t){if(t.hasAttribute("data-mce-caret")){js(t)
fN(e)
e.selection.scrollIntoView(t)}}
var vN=function(e,t){var r=cN(e)
if(!r)return
if("compositionstart"===t.type){t.preventDefault()
t.stopPropagation()
dN(e,r)
return}if(Ms(r)){dN(e,r)
e.undoManager.add()}}
var mN=function(e){e.on("keyup compositionstart",i(vN,e))}
var gN={setup:mN}
var pN=la.detect().browser
var AN=function(e){var t=Ou(function(){e.composing||rN(e)},0)
if(pN.isIE()){e.on("keypress",function(e){t.throttle()})
e.on("remove",function(e){t.cancel()})}}
var hN=function(e){AN(e)
e.on("input",function(t){false===t.isComposing&&rN(e)})}
var bN=function(e){var t=$A.setupSelectedState(e)
gN.setup(e)
bS.setup(e,t)
IS.setup(e,t)
SD.setup(e)
lN.setup(e)
hN(e)}
var yN={setup:bN}
function wN(e){var t=Qr.each
var r=mC.BACKSPACE,n=mC.DELETE,a=e.dom,o=e.selection,i=e.settings,u=e.parser
var s=Ie.gecko,l=Ie.ie,c=Ie.webkit
var f="data:text/mce-internal,"
var d=l?"Text":"URL"
var v=function(t,r){try{e.getDoc().execCommand(t,false,r)}catch(e){}}
var m=function(e){return e.isDefaultPrevented()}
var g=function(t){var r,n
if(t.dataTransfer){e.selection.isCollapsed()&&"IMG"===t.target.tagName&&o.select(t.target)
r=e.selection.getContent()
if(r.length>0){n=f+escape(e.id)+","+escape(r)
t.dataTransfer.setData(d,n)}}}
var p=function(e){var t
if(e.dataTransfer){t=e.dataTransfer.getData(d)
if(t&&t.indexOf(f)>=0){t=t.substr(f.length).split(",")
return{id:unescape(t[0]),html:unescape(t[1])}}}return null}
var A=function(t,r){e.queryCommandSupported("mceInsertClipboardContent")?e.execCommand("mceInsertClipboardContent",false,{content:t,internal:r}):e.execCommand("mceInsertContent",false,t)}
var h=function(){var t=function(e){var t=a.create("body")
var r=e.cloneContents()
t.appendChild(r)
return o.serializer.serialize(t,{format:"html"})}
var i=function(r){var n=t(r)
var o=a.createRng()
o.selectNode(e.getBody())
var i=t(o)
return n===i}
e.on("keydown",function(t){var o=t.keyCode
var u,s
if(!m(t)&&(o===n||o===r)){u=e.selection.isCollapsed()
s=e.getBody()
if(u&&!a.isEmpty(s))return
if(!u&&!i(e.selection.getRng()))return
t.preventDefault()
e.setContent("")
s.firstChild&&a.isBlock(s.firstChild)?e.selection.setCursorLocation(s.firstChild,0):e.selection.setCursorLocation(s,0)
e.nodeChanged()}})}
var b=function(){e.shortcuts.add("meta+a",null,"SelectAll")}
var y=function(){e.settings.content_editable||a.bind(e.getDoc(),"mousedown mouseup",function(t){var r
if(t.target===e.getDoc().documentElement){r=o.getRng()
e.getBody().focus()
if("mousedown"===t.type){if(Ns(r.startContainer))return
o.placeCaretAt(t.clientX,t.clientY)}else o.setRng(r)}})}
var w=function(){e.on("keydown",function(t){if(!m(t)&&t.keyCode===r){if(!e.getBody().getElementsByTagName("hr").length)return
if(o.isCollapsed()&&0===o.getRng().startOffset){var n=o.getNode()
var i=n.previousSibling
if("HR"===n.nodeName){a.remove(n)
t.preventDefault()
return}if(i&&i.nodeName&&"hr"===i.nodeName.toLowerCase()){a.remove(i)
t.preventDefault()}}}})}
var E=function(){Range.prototype.getClientRects||e.on("mousedown",function(t){if(!m(t)&&"HTML"===t.target.nodeName){var r=e.getBody()
r.blur()
Ue.setEditorTimeout(e,function(){r.focus()})}})}
var x=function(){e.on("click",function(t){var r=t.target
if(/^(IMG|HR)$/.test(r.nodeName)&&"false"!==a.getContentEditableParent(r)){t.preventDefault()
e.selection.select(r)
e.nodeChanged()}if("A"===r.nodeName&&a.hasClass(r,"mce-item-anchor")){t.preventDefault()
o.select(r)}})}
var C=function(){var r=function(){var r=a.getAttribs(o.getStart().cloneNode(false))
return function(){var n=o.getStart()
if(n!==e.getBody()){a.setAttrib(n,"style",null)
t(r,function(e){n.setAttributeNode(e.cloneNode(true))})}}}
var n=function(){return!o.isCollapsed()&&a.getParent(o.getStart(),a.isBlock)!==a.getParent(o.getEnd(),a.isBlock)}
e.on("keypress",function(t){var a
if(!m(t)&&(8===t.keyCode||46===t.keyCode)&&n()){a=r()
e.getDoc().execCommand("delete",false,null)
a()
t.preventDefault()
return false}})
a.bind(e.getDoc(),"cut",function(t){var a
if(!m(t)&&n()){a=r()
Ue.setEditorTimeout(e,function(){a()})}})}
var k=function(){e.on("keydown",function(e){if(!m(e)&&e.keyCode===r&&o.isCollapsed()&&0===o.getRng().startOffset){var t=o.getNode().previousSibling
if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase()){e.preventDefault()
return false}}})}
var B=function(){e.on("keydown",function(t){var r,n,i,u,s
if(m(t)||t.keyCode!==mC.BACKSPACE)return
r=o.getRng()
n=r.startContainer
i=r.startOffset
u=a.getRoot()
s=n
if(!r.collapsed||0!==i)return
while(s&&s.parentNode&&s.parentNode.firstChild===s&&s.parentNode!==u)s=s.parentNode
if("BLOCKQUOTE"===s.tagName){e.formatter.toggle("blockquote",null,s)
r=a.createRng()
r.setStart(n,0)
r.setEnd(n,0)
o.setRng(r)}})}
var T=function(){var t=function(){v("StyleWithCSS",false)
v("enableInlineTableEditing",false)
i.object_resizing||v("enableObjectResizing",false)}
i.readonly||e.on("BeforeExecCommand MouseDown",t)}
var R=function(){var r=function(){t(a.select("a"),function(e){var t=e.parentNode
var r=a.getRoot()
if(t.lastChild===e){while(t&&!a.isBlock(t)){if(t.parentNode.lastChild!==t||t===r)return
t=t.parentNode}a.add(t,"br",{"data-mce-bogus":1})}})}
e.on("SetContent ExecCommand",function(e){"setcontent"!==e.type&&"mceInsertLink"!==e.command||r()})}
var I=function(){i.forced_root_block&&e.on("init",function(){v("DefaultParagraphSeparator",i.forced_root_block)})}
var S=function(){e.on("keyup focusin mouseup",function(e){mC.modifierPressed(e)||o.normalize()},true)}
var D=function(){e.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")}
var N=function(){e.inline||e.on("keydown",function(){document.activeElement===document.body&&e.getWin().focus()})}
var M=function(){if(!e.inline){e.contentStyles.push("body {min-height: 150px}")
e.on("click",function(t){var r
if("HTML"===t.target.nodeName){if(Ie.ie>11){e.getBody().focus()
return}r=e.selection.getRng()
e.getBody().focus()
e.selection.setRng(r)
e.selection.normalize()
e.nodeChanged()}})}}
var P=function(){Ie.mac&&e.on("keydown",function(t){if(mC.metaKeyPressed(t)&&!t.shiftKey&&(37===t.keyCode||39===t.keyCode)){t.preventDefault()
e.selection.getSel().modify("move",37===t.keyCode?"backward":"forward","lineboundary")}})}
var _=function(){v("AutoUrlDetect",false)}
var O=function(){e.on("click",function(e){var t=e.target
do{if("A"===t.tagName){e.preventDefault()
return}}while(t=t.parentNode)})
e.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")}
var F=function(){e.on("init",function(){e.dom.bind(e.getBody(),"submit",function(e){e.preventDefault()})})}
var L=function(){u.addNodeFilter("br",function(e){var t=e.length
while(t--)"Apple-interchange-newline"===e[t].attr("class")&&e[t].remove()})}
var U=function(){e.on("dragstart",function(e){g(e)})
e.on("drop",function(t){if(!m(t)){var r=p(t)
if(r&&r.id!==e.id){t.preventDefault()
var n=$T.fromPoint(t.x,t.y,e.getDoc())
o.setRng(n)
A(r.html,true)}}})}
var Q=function(){}
var z=function(){var t
if(!s||e.removed)return 0
t=e.selection.getSel()
return!t||!t.rangeCount||0===t.rangeCount}
B()
h()
Ie.windowsPhone||S()
if(c){y()
x()
I()
F()
k()
L()
if(Ie.iOS){N()
M()
O()}else b()}if(Ie.ie>=11){M()
k()}if(Ie.ie){b()
_()
U()}if(s){w()
E()
C()
T()
R()
D()
P()
k()}return{refreshContentEditable:Q,isHidden:z}}var EN=function(e){return Ti.isElement(e)&&ni(ga.fromDom(e))}
var xN=function(e){var t=e.selection.getRng()
var r=Vl.fromRangeStart(t)
var n=Vl.fromRangeEnd(t)
if(Vl.isElementPosition(r)){var a=r.container()
EN(a)&&ad.firstPositionIn(a).each(function(e){return t.setStart(e.container(),e.offset())})}if(Vl.isElementPosition(n)){a=r.container()
EN(a)&&ad.lastPositionIn(a).each(function(e){return t.setEnd(e.container(),e.offset())})}e.selection.setRng(rm.normalize(t))}
var CN=function(e){e.on("click",function(t){t.detail>=3&&xN(e)})}
var kN=function(e){e.on("click",function(t){e.dom.getParent(t.target,"details")&&t.preventDefault()})}
var BN=function(e){e.parser.addNodeFilter("details",function(e){_(e,function(e){e.attr("data-mce-open",e.attr("open"))
e.attr("open","open")})})
e.serializer.addNodeFilter("details",function(e){_(e,function(e){var t=e.attr("data-mce-open")
e.attr("open",y(t)?t:null)
e.attr("data-mce-open",null)})})}
var TN=function(e){kN(e)
BN(e)}
var RN=hu.DOM
var IN=function(e,t){var r=ga.fromDom(e.getDoc().head)
var n=ga.fromTag("style")
Na(n,"type","text/css")
Iu(n,ga.fromText(t))
Iu(r,n)}
var SN=function(e){var t=BT(e.settings,e.schema)
t.addAttributeFilter("src,href,style,tabindex",function(t,r){var n,a=t.length
var o=e.dom
var i,u
while(a--){n=t[a]
i=n.attr(r)
u="data-mce-"+r
if(!n.attributes.map[u]){if(0===i.indexOf("data:")||0===i.indexOf("blob:"))continue
if("style"===r){i=o.serializeStyle(o.parseStyle(i),n.name)
i.length||(i=null)
n.attr(u,i)
n.attr(r,i)}else if("tabindex"===r){n.attr(u,i)
n.attr(r,null)}else n.attr(u,e.convertURL(i,r,n.name))}}})
t.addNodeFilter("script",function(e){var t,r,n=e.length
while(n--){t=e[n]
r=t.attr("type")||"no/type"
0!==r.indexOf("mce-")&&t.attr("type","mce-"+r)}})
t.addNodeFilter("#cdata",function(e){var t,r=e.length
while(r--){t=e[r]
t.type=8
t.name="#comment"
t.value="[CDATA["+t.value+"]]"}})
t.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(t){var r,n=t.length
var a=e.schema.getNonEmptyElements()
while(n--){r=t[n]
r.isEmpty(a)&&0===r.getAll("br").length&&(r.append(new mT("br",1)).shortEnded=true)}})
return t}
var DN=function(e){e.settings.auto_focus&&Ue.setEditorTimeout(e,function(){var t
t=true===e.settings.auto_focus?e:e.editorManager.get(e.settings.auto_focus)
t.destroyed||t.focus()},100)}
var NN=function(e){e.bindPendingEventDelegates()
e.initialized=true
e.fire("init")
e.focus(true)
e.nodeChanged({initial:true})
e.execCallback("init_instance_callback",e)
DN(e)}
var MN=function(e){return e.inline?RN.styleSheetLoader:e.dom.styleSheetLoader}
var PN=function(e,t){var r=e.settings
var n=e.getElement()
var a,o,i=e.getDoc()
r.inline||(e.getElement().style.visibility=e.orgVisibility)
if(!t&&!r.content_editable){i.open()
i.write(e.iframeHTML)
i.close()}if(r.content_editable){e.on("remove",function(){var e=this.getBody()
RN.removeClass(e,"mce-content-body")
RN.removeClass(e,"mce-edit-focus")
RN.setAttrib(e,"contentEditable",null)})
RN.addClass(n,"mce-content-body")
e.contentDocument=i=r.content_document||document
e.contentWindow=r.content_window||window
e.bodyElement=n
r.content_document=r.content_window=null
r.root_name=n.nodeName.toLowerCase()}a=e.getBody()
a.disabled=true
e.readonly=r.readonly
if(!e.readonly){e.inline&&"static"===RN.getStyle(a,"position",true)&&(a.style.position="relative")
a.contentEditable=e.getParam("content_editable_state",true)}a.disabled=false
e.editorUpload=jE(e)
e.schema=iu(r)
e.dom=hu(i,{keep_values:true,url_converter:e.convertURL,url_converter_scope:e,hex_colors:r.force_hex_style_colors,class_filter:r.class_filter,update_styles:true,root_element:e.inline?e.getBody():null,collect:r.content_editable,schema:e.schema,contentCssCors:Mb.shouldUseContentCssCors(e),onSetAttrib:function(t){e.fire("SetAttrib",t)}})
e.parser=SN(e)
e.serializer=PT(r,e)
e.selection=qR(e.dom,e.getWin(),e.serializer,e)
e.annotator=hv(e)
e.formatter=YB(e)
e.undoManager=nk(e)
e._nodeChangeDispatcher=new nx(e)
e._selectionOverrides=yC(e)
TN(e)
CN(e)
yN.setup(e)
qE.setup(e)
e.fire("PreInit")
if(!r.browser_spellcheck&&!r.gecko_spellcheck){i.body.spellcheck=false
RN.setAttrib(a,"spellcheck","false")}e.quirks=wN(e)
e.fire("PostRender")
r.directionality&&(a.dir=r.directionality)
r.nowrap&&(a.style.whiteSpace="nowrap")
r.protect&&e.on("BeforeSetContent",function(e){Qr.each(r.protect,function(t){e.content=e.content.replace(t,function(e){return"\x3c!--mce:protected "+escape(e)+"--\x3e"})})})
e.on("SetContent",function(){e.addVisual(e.getBody())})
e.load({initial:true,format:"html"})
e.startContent=e.getContent({format:"raw"})
e.on("compositionstart compositionend",function(t){e.composing="compositionstart"===t.type})
if(e.contentStyles.length>0){o=""
Qr.each(e.contentStyles,function(e){o+=e+"\r\n"})
e.dom.addStyle(o)}MN(e).loadAll(e.contentCSS,function(t){NN(e)},function(t){NN(e)})
r.content_style&&IN(e,r.content_style)}
var _N={initContentBody:PN}
var ON=hu.DOM
var FN=function(e,t){if(document.domain!==window.location.hostname&&Ie.ie&&Ie.ie<12){var r=UE.uuid("mce")
e[r]=function(){_N.initContentBody(e)}
var n='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+e.id+'");document.write(ed.iframeHTML);document.close();ed.'+r+"(true);})()"
ON.setAttrib(t,"src",n)
return true}return false}
var LN=function(e){var t="number"===typeof e?e+"px":e
return t||""}
var UN=function(e,t,r,n){var a=ga.fromTag("iframe")
Ma(a,n)
Ma(a,{id:e+"_ifr",frameBorder:"0",allowTransparency:"true",title:t})
Qa(a,{width:"100%",height:LN(r),display:"block"})
return a}
var QN=function(e){var t,r,n
n=Mb.getDocType(e)+"<html><head>"
Mb.getDocumentBaseUrl(e)!==e.documentBaseUrl&&(n+='<base href="'+e.documentBaseURI.getURI()+'" />')
n+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
t=Mb.getBodyId(e)
r=Mb.getBodyClass(e)
Mb.getContentSecurityPolicy(e)&&(n+='<meta http-equiv="Content-Security-Policy" content="'+Mb.getContentSecurityPolicy(e)+'" />')
n+='</head><body id="'+t+'" class="mce-content-body '+r+'" data-id="'+e.id+'"><br></body></html>'
return n}
var zN=function(e,t){var r=e.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help")
var n=UN(e.id,r,t.height,Mb.getIframeAttrs(e)).dom()
n.onload=function(){n.onload=null
e.fire("load")}
var a=FN(e,n)
e.contentAreaContainer=t.iframeContainer
e.iframeElement=n
e.iframeHTML=QN(e)
ON.add(t.iframeContainer,n)
return a}
var jN=function(e,t){var r=zN(e,t)
if(t.editorContainer){ON.get(t.editorContainer).style.display=e.orgDisplay
e.hidden=ON.isHidden(t.editorContainer)}e.getElement().style.display="none"
ON.setAttrib(e.id,"aria-hidden","true")
r||_N.initContentBody(e)}
var HN={init:jN}
var WN=hu.DOM
var VN=function(e,t,r){var n=pE.get(r)
var a,o
a=pE.urls[r]||e.documentBaseUrl.replace(/\/$/,"")
r=Qr.trim(r)
if(n&&-1===Qr.inArray(t,r)){Qr.each(pE.dependencies(r),function(r){VN(e,t,r)})
if(e.plugins[r])return
o=new n(e,a,e.$)
e.plugins[r]=o
if(o.init){o.init(e,a)
t.push(r)}}}
var GN=function(e){return e.replace(/^\-/,"")}
var YN=function(e){var t=[]
Qr.each(e.settings.plugins.split(/[ ,]/),function(r){VN(e,t,GN(r))})}
var JN=function(e){var t
var r=e.settings.theme
if(y(r)){e.settings.theme=GN(r)
t=AE.get(r)
e.theme=new t(e,AE.urls[r])
e.theme.init&&e.theme.init(e,AE.urls[r]||e.documentBaseUrl.replace(/\/$/,""),e.$)}else e.theme={}}
var qN=function(e){var t,r,n,a,o
var i=e.settings
var u=e.getElement()
t=i.width||WN.getStyle(u,"width")||"100%"
r=i.height||WN.getStyle(u,"height")||u.offsetHeight
n=i.min_height||100
a=/^[0-9\.]+(|px)$/i
a.test(""+t)&&(t=Math.max(parseInt(t,10),100))
a.test(""+r)&&(r=Math.max(parseInt(r,10),n))
o=e.theme.renderUI({targetNode:u,width:t,height:r,deltaWidth:i.delta_width,deltaHeight:i.delta_height})
if(!i.content_editable){r=(o.iframeHeight||r)+("number"===typeof r?o.deltaHeight||0:"")
r<n&&(r=n)}o.height=r
return o}
var KN=function(e){var t
var r=e.getElement()
t=e.settings.theme(e,r)
t.editorContainer.nodeType&&(t.editorContainer.id=t.editorContainer.id||e.id+"_parent")
t.iframeContainer&&t.iframeContainer.nodeType&&(t.iframeContainer.id=t.iframeContainer.id||e.id+"_iframecontainer")
t.height=t.iframeHeight?t.iframeHeight:r.offsetHeight
return t}
var XN=function(e){return{editorContainer:e,iframeContainer:e}}
var ZN=function(e){var t=WN.create("div")
WN.insertAfter(t,e)
return XN(t)}
var $N=function(e){var t=e.getElement()
return e.inline?XN(null):ZN(t)}
var eM=function(e){var t=e.settings,r=e.getElement()
e.orgDisplay=r.style.display
return y(t.theme)?qN(e):k(t.theme)?KN(e):$N(e)}
var tM=function(e){var t=e.settings
var r=e.getElement()
var n
e.rtl=t.rtl_ui||e.editorManager.i18n.rtl
e.editorManager.i18n.setCode(t.language)
t.aria_label=t.aria_label||WN.getAttrib(r,"aria-label",e.getLang("aria.rich_text_area"))
e.fire("ScriptsLoaded")
JN(e)
YN(e)
n=eM(e)
e.editorContainer=n.editorContainer?n.editorContainer:null
t.content_css&&Qr.each(Qr.explode(t.content_css),function(t){e.contentCSS.push(e.documentBaseURI.toAbsolute(t))})
return t.content_editable?_N.initContentBody(e):HN.init(e,n)}
var rM={init:tM}
var nM=hu.DOM
var aM=function(e){return"-"===e.charAt(0)}
var oM=function(e,t){var r=t.settings
r.language&&"en"!==r.language&&!r.language_url&&(r.language_url=t.editorManager.baseURL+"/langs/"+r.language+".js")
r.language_url&&!t.editorManager.i18n.data[r.language]&&e.add(r.language_url)}
var iM=function(e,t,r,n){var a=t.settings,o=a.theme
if(y(o)){if(!aM(o)&&!AE.urls.hasOwnProperty(o)){var i=a.theme_url
i?AE.load(o,t.documentBaseURI.toAbsolute(i)):AE.load(o,"themes/"+o+"/theme"+r+".js")}e.loadQueue(function(){AE.waitFor(o,n)})}else n()}
var uM=function(e,t){Qr.isArray(e.plugins)&&(e.plugins=e.plugins.join(" "))
Qr.each(e.external_plugins,function(t,r){pE.load(r,t)
e.plugins+=" "+r})
Qr.each(e.plugins.split(/[ ,]/),function(e){e=Qr.trim(e)
if(e&&!pE.urls[e])if(aM(e)){e=e.substr(1,e.length)
var r=pE.dependencies(e)
Qr.each(r,function(e){var r={prefix:"plugins/",resource:e,suffix:"/plugin"+t+".js"}
e=pE.createUrl(r,e)
pE.load(e.resource,e)})}else pE.load(e,{prefix:"plugins/",resource:e,suffix:"/plugin"+t+".js"})})}
var sM=function(e,t){var r=xu.ScriptLoader
iM(r,e,t,function(){oM(r,e)
uM(e.settings,t)
r.loadQueue(function(){e.removed||rM.init(e)},e,function(t){gE.pluginLoadError(e,t[0])
e.removed||rM.init(e)})})}
var lM=function(e){var t=e.settings,r=e.id
var n=function(){nM.unbind(window,"ready",n)
e.render()}
if(!Xe.Event.domLoaded){nM.bind(window,"ready",n)
return}if(!e.getElement())return
if(!Ie.contentEditable)return
if(t.inline)e.inline=true
else{e.orgVisibility=e.getElement().style.visibility
e.getElement().style.visibility="hidden"}var a=e.getElement().form||nM.getParent(r,"form")
if(a){e.formElement=a
if(t.hidden_input&&!/TEXTAREA|INPUT/i.test(e.getElement().nodeName)){nM.insertAfter(nM.create("input",{type:"hidden",name:r}),r)
e.hasHiddenInput=true}e.formEventDelegate=function(t){e.fire(t.type,t)}
nM.bind(a,"submit reset",e.formEventDelegate)
e.on("reset",function(){e.setContent(e.startContent,{format:"raw"})})
if(t.submit_patch&&!a.submit.nodeType&&!a.submit.length&&!a._mceOldSubmit){a._mceOldSubmit=a.submit
a.submit=function(){e.editorManager.triggerSave()
e.setDirty(false)
return a._mceOldSubmit(a)}}}e.windowManager=iE(e)
e.notificationManager=aE(e)
"xml"===t.encoding&&e.on("GetContent",function(e){e.save&&(e.content=nM.encode(e.content))})
t.add_form_submit_trigger&&e.on("submit",function(){e.initialized&&e.save()})
if(t.add_unload_trigger){e._beforeUnload=function(){!e.initialized||e.destroyed||e.isHidden()||e.save({format:"raw",no_events:true,set_dirty:false})}
e.editorManager.on("BeforeUnload",e._beforeUnload)}e.editorManager.add(e)
sM(e,e.suffix)}
var cM={render:lM}
var fM=function(e,t,r){var n=e.sidebars?e.sidebars:[]
n.push({name:t,settings:r})
e.sidebars=n}
var dM={add:fM}
var vM=Qr.each,mM=Qr.trim
var gM="source protocol authority userInfo user password host port relative path directory file query anchor".split(" ")
var pM={ftp:21,http:80,https:443,mailto:25}
var AM=function(e,t){var r=this
var n,a
e=mM(e)
t=r.settings=t||{}
n=t.base_uri
if(/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e)){r.source=e
return}var o=0===e.indexOf("//")
0!==e.indexOf("/")||o||(e=(n&&n.protocol||"http")+"://mce_host"+e)
if(!/^[\w\-]*:?\/\//.test(e)){a=t.base_uri?t.base_uri.path:new AM(document.location.href).directory
if(""==t.base_uri.protocol)e="//mce_host"+r.toAbsPath(a,e)
else{e=/([^#?]*)([#?]?.*)/.exec(e)
e=(n&&n.protocol||"http")+"://mce_host"+r.toAbsPath(a,e[1])+e[2]}}e=e.replace(/@@/g,"(mce_at)")
e=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e)
vM(gM,function(t,n){var a=e[n]
a&&(a=a.replace(/\(mce_at\)/g,"@@"))
r[t]=a})
if(n){r.protocol||(r.protocol=n.protocol)
r.userInfo||(r.userInfo=n.userInfo)
r.port||"mce_host"!==r.host||(r.port=n.port)
r.host&&"mce_host"!==r.host||(r.host=n.host)
r.source=""}o&&(r.protocol="")}
AM.prototype={setPath:function(e){var t=this
e=/^(.*?)\/?(\w+)?$/.exec(e)
t.path=e[0]
t.directory=e[1]
t.file=e[2]
t.source=""
t.getURI()},toRelative:function(e){var t=this
var r
if("./"===e)return e
e=new AM(e,{base_uri:t})
if("mce_host"!==e.host&&t.host!==e.host&&e.host||t.port!==e.port||t.protocol!==e.protocol&&""!==e.protocol)return e.getURI()
var n=t.getURI(),a=e.getURI()
if(n===a||"/"===n.charAt(n.length-1)&&n.substr(0,n.length-1)===a)return n
r=t.toRelPath(t.path,e.path)
e.query&&(r+="?"+e.query)
e.anchor&&(r+="#"+e.anchor)
return r},toAbsolute:function(e,t){e=new AM(e,{base_uri:this})
return e.getURI(t&&this.isSameOrigin(e))},isSameOrigin:function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return true
var t=pM[this.protocol]
if(t&&(this.port||t)==(e.port||t))return true}return false},toRelPath:function(e,t){var r,n,a,o=0,i=""
e=e.substring(0,e.lastIndexOf("/"))
e=e.split("/")
r=t.split("/")
if(e.length>=r.length)for(n=0,a=e.length;n<a;n++)if(n>=r.length||e[n]!==r[n]){o=n+1
break}if(e.length<r.length)for(n=0,a=r.length;n<a;n++)if(n>=e.length||e[n]!==r[n]){o=n+1
break}if(1===o)return t
for(n=0,a=e.length-(o-1);n<a;n++)i+="../"
for(n=o-1,a=r.length;n<a;n++)i+=n!==o-1?"/"+r[n]:r[n]
return i},toAbsPath:function(e,t){var r,n,a,o=0,i=[]
n=/\/$/.test(t)?"/":""
e=e.split("/")
t=t.split("/")
vM(e,function(e){e&&i.push(e)})
e=i
for(r=t.length-1,i=[];r>=0;r--){if(0===t[r].length||"."===t[r])continue
if(".."===t[r]){o++
continue}if(o>0){o--
continue}i.push(t[r])}r=e.length-o
a=r<=0?i.reverse().join("/"):e.slice(0,r).join("/")+"/"+i.reverse().join("/")
0!==a.indexOf("/")&&(a="/"+a)
n&&a.lastIndexOf("/")!==a.length-1&&(a+=n)
return a},getURI:function(e){var t
var r=this
if(!r.source||e){t=""
if(!e){r.protocol?t+=r.protocol+"://":t+="//"
r.userInfo&&(t+=r.userInfo+"@")
r.host&&(t+=r.host)
r.port&&(t+=":"+r.port)}r.path&&(t+=r.path)
r.query&&(t+="?"+r.query)
r.anchor&&(t+="#"+r.anchor)
r.source=t}return r.source}}
AM.parseDataUri=function(e){var t,r
e=decodeURIComponent(e).split(",")
r=/data:([^;]+)/.exec(e[0])
r&&(t=r[1])
return{type:t,data:e[1]}}
AM.getDocumentBaseUrl=function(e){var t
t=0!==e.protocol.indexOf("http")&&"file:"!==e.protocol?e.href:e.protocol+"//"+e.host+e.pathname
if(/^[^:]+:\/\/\/?[^\/]+\//.test(t)){t=t.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,"");/[\/\\]$/.test(t)||(t+="/")}return t}
var hM="html"
var bM=function(e,t){var r=Mb.getForcedRootBlock(e)
var n=new RegExp("^(<"+r+"[^>]*>(&nbsp;|&#160;|\\s| |<br \\/>|)<\\/"+r+">[\r\n]*|<br \\/>[\r\n]*)$")
return t.replace(n,"")}
var yM=function(e,t,r){var n
t.format=t.format?t.format:hM
t.get=true
t.getInner=true
t.no_events||e.fire("BeforeGetContent",t)
if("raw"===t.format)n=Qr.trim(SC.trimExternal(e.serializer,r.innerHTML))
else if("text"===t.format)n=Ts.trim(r.innerText||r.textContent)
else{if("tree"===t.format)return e.serializer.serialize(r,t)
n=bM(e,e.serializer.serialize(r,t))}"text"===t.format||li(ga.fromDom(r))?t.content=n:t.content=Qr.trim(n)
t.no_events||e.fire("GetContent",t)
return t.content}
var wM=function(e,t){void 0===t&&(t={})
return A.from(e.getBody()).fold(a("tree"===t.format?new mT("body",11):""),function(r){return yM(e,t,r)})}
var EM=function(e,t){t(e)
e.firstChild&&EM(e.firstChild,t)
e.next&&EM(e.next,t)}
var xM=function(e,t,r){var n={}
var a={}
var o=[]
r.firstChild&&EM(r.firstChild,function(r){_(e,function(e){e.name===r.name&&(n[e.name]?n[e.name].nodes.push(r):n[e.name]={filter:e,nodes:[r]})})
_(t,function(e){"string"===typeof r.attr(e.name)&&(a[e.name]?a[e.name].nodes.push(r):a[e.name]={filter:e,nodes:[r]})})})
for(var i in n)n.hasOwnProperty(i)&&o.push(n[i])
for(var i in a)a.hasOwnProperty(i)&&o.push(a[i])
return o}
var CM=function(e,t,r){var n=xM(e,t,r)
_(n,function(e){_(e.filter.callbacks,function(t){t(e.nodes,e.filter.name,{})})})}
var kM="html"
var BM=function(e){return e instanceof mT}
var TM=function(e){Hw.hasFocus(e)&&ad.firstPositionIn(e.getBody()).each(function(t){var r=t.getNode()
var n=Ti.isTable(r)?ad.firstPositionIn(r).getOr(t):t
e.selection.setRng(n.toRange())})}
var RM=function(e,t){e.dom.setHTML(e.getBody(),t)
TM(e)}
var IM=function(e,t,r,n){var a,o
if(0===r.length||/^\s+$/.test(r)){o='<br data-mce-bogus="1">'
"TABLE"===t.nodeName?r="<tr><td>"+o+"</td></tr>":/^(UL|OL)$/.test(t.nodeName)&&(r="<li>"+o+"</li>")
a=Mb.getForcedRootBlock(e)
if(a&&e.schema.isValidChild(t.nodeName.toLowerCase(),a.toLowerCase())){r=o
r=e.dom.createHTML(a,e.settings.forced_root_block_attrs,r)}else r||(r='<br data-mce-bogus="1">')
RM(e,r)
e.fire("SetContent",n)}else{"raw"!==n.format&&(r=Zv({validate:e.validate},e.schema).serialize(e.parser.parse(r,{isRootContent:true,insert:true})))
n.content=li(ga.fromDom(t))?r:Qr.trim(r)
RM(e,n.content)
n.no_events||e.fire("SetContent",n)}return n.content}
var SM=function(e,t,r,n){CM(e.parser.getNodeFilters(),e.parser.getAttributeFilters(),r)
var a=Zv({validate:e.validate},e.schema).serialize(r)
n.content=li(ga.fromDom(t))?a:Qr.trim(a)
RM(e,n.content)
n.no_events||e.fire("SetContent",n)
return r}
var DM=function(e,t,r){void 0===r&&(r={})
r.format=r.format?r.format:kM
r.set=true
r.content=BM(t)?"":t
if(!BM(t)&&!r.no_events){e.fire("BeforeSetContent",r)
t=r.content}return A.from(e.getBody()).fold(a(t),function(n){return BM(t)?SM(e,n,t,r):IM(e,n,t,r)})}
var NM=hu.DOM
var MM=function(e){NM.setStyle(e.id,"display",e.orgDisplay)}
var PM=function(e){return A.from(e).each(function(e){return e.destroy()})}
var _M=function(e){e.contentAreaContainer=e.formElement=e.container=e.editorContainer=null
e.bodyElement=e.contentDocument=e.contentWindow=null
e.iframeElement=e.targetElm=null
e.selection&&(e.selection=e.selection.win=e.selection.dom=e.selection.dom.doc=null)}
var OM=function(e){var t=e.formElement
if(t){if(t._mceOldSubmit){t.submit=t._mceOldSubmit
t._mceOldSubmit=null}NM.unbind(t,"submit reset",e.formEventDelegate)}}
var FM=function(e){if(!e.removed){var t=e._selectionOverrides,r=e.editorUpload
var n=e.getBody()
var a=e.getElement()
n&&e.save({is_removing:true})
e.removed=true
e.unbindAllNativeEvents()
e.hasHiddenInput&&a&&NM.remove(a.nextSibling)
!e.inline&&n&&MM(e)
sw.fireRemove(e)
e.editorManager.remove(e)
NM.remove(e.getContainer())
PM(t)
PM(r)
e.destroy()}}
var LM=function(e,t){var r=e.selection,n=e.dom
if(e.destroyed)return
if(!t&&!e.removed){e.remove()
return}if(!t){e.editorManager.off("beforeunload",e._beforeUnload)
e.theme&&e.theme.destroy&&e.theme.destroy()
PM(r)
PM(n)}OM(e)
_M(e)
e.destroyed=true}
var UM=hu.DOM
var QM=Qr.extend,zM=Qr.each
var jM=Qr.resolve
var HM=Ie.ie
var WM=function(e,t,r){var n=this
var a=n.documentBaseUrl=r.documentBaseURL
var o=r.baseURI
t=Om(n,e,a,r.defaultSettings,t)
n.settings=t
ku.language=t.language||"en"
ku.languageLoad=t.language_load
ku.baseURL=r.baseURL
n.id=e
n.setDirty(false)
n.plugins={}
n.documentBaseURI=new AM(t.document_base_url,{base_uri:o})
n.baseURI=o
n.contentCSS=[]
n.contentStyles=[]
n.shortcuts=new Tw(n)
n.loadedCSS={}
n.editorCommands=new Xy(n)
n.suffix=r.suffix
n.editorManager=r
n.inline=t.inline
n.buttons={}
n.menuItems={}
t.cache_suffix&&(Ie.cacheSuffix=t.cache_suffix.replace(/^[\?\&]+/,""))
false===t.override_viewport&&(Ie.overrideViewPort=false)
r.fire("SetupEditor",{editor:n})
n.execCallback("setup",n)
n.$=un.overrideDefaults(function(){return{context:n.inline?n.getBody():n.getDoc(),element:n.getBody()}})}
WM.prototype={render:function(){cM.render(this)},focus:function(e){Hw.focus(this,e)},hasFocus:function(){return Hw.hasFocus(this)},execCallback:function(e){var t=[]
for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
var n=this
var a,o=n.settings[e]
if(!o)return
if(n.callbackLookup&&(a=n.callbackLookup[e])){o=a.func
a=a.scope}if("string"===typeof o){a=o.replace(/\.\w+$/,"")
a=a?jM(a):0
o=jM(o)
n.callbackLookup=n.callbackLookup||{}
n.callbackLookup[e]={func:o,scope:a}}return o.apply(a||n,Array.prototype.slice.call(arguments,1))},translate:function(e){if(e&&Qr.is(e,"string")){var t=this.settings.language||"en",r=this.editorManager.i18n
e=r.data[t+"."+e]||e.replace(/\{\#([^\}]+)\}/g,function(e,n){return r.data[t+"."+n]||"{#"+n+"}"})}return this.editorManager.translate(e)},getLang:function(e,t){return this.editorManager.i18n.data[(this.settings.language||"en")+"."+e]||(void 0!==t?t:"{#"+e+"}")},getParam:function(e,t,r){return zm(this,e,t,r)},nodeChanged:function(e){this._nodeChangeDispatcher.nodeChanged(e)},addButton:function(e,t){var r=this
t.cmd&&(t.onclick=function(){r.execCommand(t.cmd)})
t.stateSelector&&"undefined"===typeof t.active&&(t.active=false)
t.text||t.icon||(t.icon=e)
t.tooltip=t.tooltip||t.title
r.buttons[e]=t},addSidebar:function(e,t){return dM.add(this,e,t)},addMenuItem:function(e,t){var r=this
t.cmd&&(t.onclick=function(){r.execCommand(t.cmd)})
r.menuItems[e]=t},addContextToolbar:function(e,t){var r=this
var n
r.contextToolbars=r.contextToolbars||[]
if("string"===typeof e){n=e
e=function(e){return r.dom.is(e,n)}}r.contextToolbars.push({id:UE.uuid("mcet"),predicate:e,items:t})},addCommand:function(e,t,r){this.editorCommands.addCommand(e,t,r)},addQueryStateHandler:function(e,t,r){this.editorCommands.addQueryStateHandler(e,t,r)},addQueryValueHandler:function(e,t,r){this.editorCommands.addQueryValueHandler(e,t,r)},addShortcut:function(e,t,r,n){this.shortcuts.add(e,t,r,n)},execCommand:function(e,t,r,n){return this.editorCommands.execCommand(e,t,r,n)},queryCommandState:function(e){return this.editorCommands.queryCommandState(e)},queryCommandValue:function(e){return this.editorCommands.queryCommandValue(e)},queryCommandSupported:function(e){return this.editorCommands.queryCommandSupported(e)},show:function(){var e=this
if(e.hidden){e.hidden=false
if(e.inline)e.getBody().contentEditable=true
else{UM.show(e.getContainer())
UM.hide(e.id)}e.load()
e.fire("show")}},hide:function(){var e=this,t=e.getDoc()
if(!e.hidden){HM&&t&&!e.inline&&t.execCommand("SelectAll")
e.save()
if(e.inline){e.getBody().contentEditable=false
e===e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)}else{UM.hide(e.getContainer())
UM.setStyle(e.id,"display",e.orgDisplay)}e.hidden=true
e.fire("hide")}},isHidden:function(){return!!this.hidden},setProgressState:function(e,t){this.fire("ProgressState",{state:e,time:t})},load:function(e){var t=this
var r,n=t.getElement()
if(t.removed)return""
if(n){e=e||{}
e.load=true
r=t.setContent(void 0!==n.value?n.value:n.innerHTML,e)
e.element=n
e.no_events||t.fire("LoadContent",e)
e.element=n=null
return r}},save:function(e){var t=this
var r,n,a=t.getElement()
if(!a||!t.initialized||t.removed)return
e=e||{}
e.save=true
e.element=a
r=e.content=t.getContent(e)
e.no_events||t.fire("SaveContent",e)
"raw"===e.format&&t.fire("RawSaveContent",e)
r=e.content
if(/TEXTAREA|INPUT/i.test(a.nodeName))a.value=r
else{!e.is_removing&&t.inline||(a.innerHTML=r);(n=UM.getParent(t.id,"form"))&&zM(n.elements,function(e){if(e.name===t.id){e.value=r
return false}})}e.element=a=null
false!==e.set_dirty&&t.setDirty(false)
return r},setContent:function(e,t){return DM(this,e,t)},getContent:function(e){return wM(this,e)},insertContent:function(e,t){t&&(e=QM({content:e},t))
this.execCommand("mceInsertContent",false,e)},isDirty:function(){return!this.isNotDirty},setDirty:function(e){var t=!this.isNotDirty
this.isNotDirty=!e
e&&e!==t&&this.fire("dirty")},setMode:function(e){dw(this,e)},getContainer:function(){var e=this
e.container||(e.container=UM.get(e.editorContainer||e.id+"_parent"))
return e.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){this.targetElm||(this.targetElm=UM.get(this.id))
return this.targetElm},getWin:function(){var e=this
var t
if(!e.contentWindow){t=e.iframeElement
t&&(e.contentWindow=t.contentWindow)}return e.contentWindow},getDoc:function(){var e=this
var t
if(!e.contentDocument){t=e.getWin()
t&&(e.contentDocument=t.document)}return e.contentDocument},getBody:function(){var e=this.getDoc()
return this.bodyElement||(e?e.body:null)},convertURL:function(e,t,r){var n=this,a=n.settings
if(a.urlconverter_callback)return n.execCallback("urlconverter_callback",e,r,true,t)
if(!a.convert_urls||r&&"LINK"===r.nodeName||0===e.indexOf("file:")||0===e.length)return e
if(a.relative_urls)return n.documentBaseURI.toRelative(e)
e=n.documentBaseURI.toAbsolute(e,a.remove_script_host)
return e},addVisual:function(e){var t=this
var r=t.settings
var n=t.dom
var a
e=e||t.getBody()
void 0===t.hasVisual&&(t.hasVisual=r.visual)
zM(n.select("table,a",e),function(e){var o
switch(e.nodeName){case"TABLE":a=r.visual_table_class||"mce-item-table"
o=n.getAttrib(e,"border")
o&&"0"!==o||!t.hasVisual?n.removeClass(e,a):n.addClass(e,a)
return
case"A":if(!n.getAttrib(e,"href")){o=n.getAttrib(e,"name")||e.id
a=r.visual_anchor_class||"mce-item-anchor"
o&&t.hasVisual?n.addClass(e,a):n.removeClass(e,a)}return}})
t.fire("VisualAid",{element:e,hasVisual:t.hasVisual})},remove:function(){FM(this)},destroy:function(e){LM(this,e)},uploadImages:function(e){return this.editorUpload.uploadImages(e)},_scanForImages:function(){return this.editorUpload.scanForImages()}}
QM(WM.prototype,Ew)
var VM=function(e){return-1!==e.className.toString().indexOf("mce-")}
var GM={isEditorUIElement:VM}
var YM=function(e){return"nodechange"===e.type&&e.selectionChange}
var JM=function(e,t){var r=function(){t.throttle()}
hu.DOM.bind(document,"mouseup",r)
e.on("remove",function(){hu.DOM.unbind(document,"mouseup",r)})}
var qM=function(e){e.on("focusout",function(){zy.store(e)})}
var KM=function(e,t){e.on("mouseup touchend",function(e){t.throttle()})}
var XM=function(e,t){var r=la.detect().browser
r.isIE()?qM(e):KM(e,t)
e.on("keyup nodechange",function(t){YM(t)||zy.store(e)})}
var ZM=function(e){var t=Ou(function(){zy.store(e)},0)
e.inline&&JM(e,t)
e.on("init",function(){XM(e,t)})
e.on("remove",function(){t.cancel()})}
var $M={register:ZM}
var eP
var tP=hu.DOM
var rP=function(e){return GM.isEditorUIElement(e)}
var nP=function(e,t){var r=e?e.settings.custom_ui_selector:""
var n=tP.getParent(t,function(t){return rP(t)||!!r&&e.dom.is(t,r)})
return null!==n}
var aP=function(){try{return document.activeElement}catch(e){return document.body}}
var oP=function(e,t){var r=t.editor
$M.register(r)
r.on("focusin",function(){var t=this
var r=e.focusedEditor
if(r!==t){r&&r.fire("blur",{focusedEditor:t})
e.setActive(t)
e.focusedEditor=t
t.fire("focus",{blurredEditor:r})
t.focus(true)}})
r.on("focusout",function(){var t=this
Ue.setEditorTimeout(t,function(){var r=e.focusedEditor
if(!nP(t,aP())&&r===t){t.fire("blur",{focusedEditor:null})
e.focusedEditor=null}})})
if(!eP){eP=function(t){var r=e.activeEditor
var n
n=t.target
if(r&&n.ownerDocument===document&&n!==document.body&&!nP(r,n)&&e.focusedEditor===r){r.fire("blur",{focusedEditor:null})
e.focusedEditor=null}}
tP.bind(document,"focusin",eP)}}
var iP=function(e,t){e.focusedEditor===t.editor&&(e.focusedEditor=null)
if(!e.activeEditor){tP.unbind(document,"focusin",eP)
eP=null}}
var uP=function(e){e.on("AddEditor",i(oP,e))
e.on("RemoveEditor",i(iP,e))}
var sP={setup:uP,isEditorUIElement:rP,isUIElement:nP}
var lP={}
var cP="en"
var fP={setCode:function(e){if(e){cP=e
this.rtl=!!this.data[e]&&"rtl"===this.data[e]._dir}},getCode:function(){return cP},rtl:false,add:function(e,t){var r=lP[e]
r||(lP[e]=r={})
for(var n in t)r[n]=t[n]
this.setCode(e)},translate:function(e){var t=lP[cP]||{}
var r=function(e){if(Qr.is(e,"function"))return Object.prototype.toString.call(e)
return n(e)?"":""+e}
var n=function(e){return""===e||null===e||Qr.is(e,"undefined")}
var a=function(e){e=r(e)
return Qr.hasOwn(t,e)?r(t[e]):e}
if(n(e))return""
if(Qr.is(e,"object")&&Qr.hasOwn(e,"raw"))return r(e.raw)
if(Qr.is(e,"array")){var o=e.slice(1)
e=a(e[0]).replace(/\{([0-9]+)\}/g,function(e,t){return Qr.hasOwn(o,t)?r(o[t]):e})}return a(e).replace(/{context:\w+}$/,"")},data:lP}
var dP=hu.DOM
var vP=Qr.explode,mP=Qr.each,gP=Qr.extend
var pP,AP,hP=0,bP=false
var yP=[]
var wP=[]
var EP=function(e){return"length"!==e}
var xP=function(e){mP(AP.get(),function(t){"scroll"===e.type?t.fire("ScrollWindow",e):t.fire("ResizeWindow",e)})}
var CP=function(e){if(e!==bP){e?un(window).on("resize scroll",xP):un(window).off("resize scroll",xP)
bP=e}}
var kP=function(e){var t=wP
delete yP[e.id]
for(var r=0;r<yP.length;r++)if(yP[r]===e){yP.splice(r,1)
break}wP=L(wP,function(t){return e!==t})
AP.activeEditor===e&&(AP.activeEditor=wP.length>0?wP[0]:null)
AP.focusedEditor===e&&(AP.focusedEditor=null)
return t.length!==wP.length}
var BP=function(e){if(e&&e.initialized&&!(e.getContainer()||e.getBody()).parentNode){kP(e)
e.unbindAllNativeEvents()
e.destroy(true)
e.removed=true
e=null}return e}
AP={defaultSettings:{},$:un,majorVersion:"4",minorVersion:"9.2",releaseDate:"2018-12-17",editors:yP,i18n:fP,activeEditor:null,settings:{},setup:function(){var e=this
var t,r,n,a,o=""
r=AM.getDocumentBaseUrl(document.location)
if(/^[^:]+:\/\/\/?[^\/]+\//.test(r)){r=r.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,"");/[\/\\]$/.test(r)||(r+="/")}n=window.tinymce||window.tinyMCEPreInit
if(n){t=n.base||n.baseURL
o=n.suffix}else{var i=document.getElementsByTagName("script")
for(var u=0;u<i.length;u++){a=i[u].src
var s=a.substring(a.lastIndexOf("/"))
if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)){-1!==s.indexOf(".min")&&(o=".min")
t=a.substring(0,a.lastIndexOf("/"))
break}}if(!t&&document.currentScript){a=document.currentScript.src;-1!==a.indexOf(".min")&&(o=".min")
t=a.substring(0,a.lastIndexOf("/"))}}e.baseURL=new AM(r).toAbsolute(t)
e.documentBaseURL=r
e.baseURI=new AM(e.baseURL)
e.suffix=o
sP.setup(e)},overrideDefaults:function(e){var t,r
t=e.base_url
if(t){this.baseURL=new AM(this.documentBaseURL).toAbsolute(t.replace(/\/+$/,""))
this.baseURI=new AM(this.baseURL)}r=e.suffix
e.suffix&&(this.suffix=r)
this.defaultSettings=e
var n=e.plugin_base_urls
for(var a in n)ku.PluginManager.urls[a]=n[a]},init:function(e){var t=this
var r,n
n=Qr.makeMap("area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option tbody tfoot thead tr script noscript style textarea video audio iframe object menu"," ")
var a=function(e,t){return e.inline&&t.tagName.toLowerCase()in n}
var o=function(e){var t=e.id
if(!t){t=e.name
t=t&&!dP.get(t)?e.name:dP.uniqueId()
e.setAttribute("id",t)}return t}
var i=function(r){var n=e[r]
if(!n)return
return n.apply(t,Array.prototype.slice.call(arguments,2))}
var u=function(e,t){return t.constructor===RegExp?t.test(e.className):dP.hasClass(e,t)}
var s=function(e){var t,r=[]
if(Ie.ie&&Ie.ie<11){gE.initError("TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/")
return[]}if(e.types){mP(e.types,function(e){r=r.concat(dP.select(e.selector))})
return r}if(e.selector)return dP.select(e.selector)
if(e.target)return[e.target]
switch(e.mode){case"exact":t=e.elements||""
t.length>0&&mP(vP(t),function(e){var t;(t=dP.get(e))?r.push(t):mP(document.forms,function(t){mP(t.elements,function(t){if(t.name===e){e="mce_editor_"+hP++
dP.setAttrib(t,"id",e)
r.push(t)}})})})
break
case"textareas":case"specific_textareas":mP(dP.select("textarea"),function(t){if(e.editor_deselector&&u(t,e.editor_deselector))return
e.editor_selector&&!u(t,e.editor_selector)||r.push(t)})}return r}
var l=function(e){r=e}
var c=function(){var r=0
var n=[]
var u
var f=function(e,a,o){var i=new WM(e,a,t)
n.push(i)
i.on("init",function(){++r===u.length&&l(n)})
i.targetElm=i.targetElm||o
i.render()}
dP.unbind(window,"ready",c)
i("onpageload")
u=un.unique(s(e))
if(e.types){mP(e.types,function(t){Qr.each(u,function(r){if(dP.is(r,t.selector)){f(o(r),gP({},e,t),r)
return false}return true})})
return}Qr.each(u,function(e){BP(t.get(e.id))})
u=Qr.grep(u,function(e){return!t.get(e.id)})
0===u.length?l([]):mP(u,function(t){a(e,t)?gE.initError("Could not initialize inline editor on invalid inline target element",t):f(o(t),e,t)})}
t.settings=e
dP.bind(window,"ready",c)
return new De(function(e){r?e(r):l=function(t){e(t)}})},get:function(e){return 0===arguments.length?wP.slice(0):y(e)?z(wP,function(t){return t.id===e}).getOr(null):B(e)&&wP[e]?wP[e]:null},add:function(e){var t=this
var r
r=yP[e.id]
if(r===e)return e
if(null===t.get(e.id)){EP(e.id)&&(yP[e.id]=e)
yP.push(e)
wP.push(e)}CP(true)
t.activeEditor=e
t.fire("AddEditor",{editor:e})
if(!pP){pP=function(){t.fire("BeforeUnload")}
dP.bind(window,"beforeunload",pP)}return e},createEditor:function(e,t){return this.add(new WM(e,t,this))},remove:function(e){var t=this
var r,n
if(!e){for(r=wP.length-1;r>=0;r--)t.remove(wP[r])
return}if(y(e)){mP(dP.select(e),function(e){n=t.get(e.id)
n&&t.remove(n)})
return}n=e
if(x(t.get(n.id)))return null
kP(n)&&t.fire("RemoveEditor",{editor:n})
0===wP.length&&dP.unbind(window,"beforeunload",pP)
n.remove()
CP(wP.length>0)
return n},execCommand:function(e,t,r){var n=this,a=n.get(r)
switch(e){case"mceAddEditor":n.get(r)||new WM(r,n.settings,n).render()
return true
case"mceRemoveEditor":a&&a.remove()
return true
case"mceToggleEditor":if(!a){n.execCommand("mceAddEditor",0,r)
return true}a.isHidden()?a.show():a.hide()
return true}if(n.activeEditor)return n.activeEditor.execCommand(e,t,r)
return false},triggerSave:function(){mP(wP,function(e){e.save()})},addI18n:function(e,t){fP.add(e,t)},translate:function(e){return fP.translate(e)},setActive:function(e){var t=this.activeEditor
if(this.activeEditor!==e){t&&t.fire("deactivate",{relatedTarget:e})
e.fire("activate",{relatedTarget:t})}this.activeEditor=e}}
gP(AP,tw)
AP.setup()
var TP=AP
function RP(e){var t=function(t,r){return iv.walk(e,t,r)}
var r=pk.split
var n=function(t){return ly.normalize(e,t).fold(a(false),function(e){t.setStart(e.startContainer,e.startOffset)
t.setEnd(e.endContainer,e.endOffset)
return true})}
return{walk:t,split:r,normalize:n}}(function(e){e.compareRanges=Kb.isEq
e.getCaretRangeFromPoint=$T.fromPoint
e.getSelectedNode=pl
e.getNode=Al})(RP||(RP={}))
var IP=RP
var SP=Math.min,DP=Math.max,NP=Math.round
var MP=function(e,t,r){var n,a,o,i,u,s
n=t.x
a=t.y
o=e.w
i=e.h
u=t.w
s=t.h
r=(r||"").split("")
"b"===r[0]&&(a+=s)
"r"===r[1]&&(n+=u)
"c"===r[0]&&(a+=NP(s/2))
"c"===r[1]&&(n+=NP(u/2))
"b"===r[3]&&(a-=i)
"r"===r[4]&&(n-=o)
"c"===r[3]&&(a-=NP(i/2))
"c"===r[4]&&(n-=NP(o/2))
return LP(n,a,o,i)}
var PP=function(e,t,r,n){var a,o
for(o=0;o<n.length;o++){a=MP(e,t,n[o])
if(a.x>=r.x&&a.x+a.w<=r.w+r.x&&a.y>=r.y&&a.y+a.h<=r.h+r.y)return n[o]}return null}
var _P=function(e,t,r){return LP(e.x-t,e.y-r,e.w+2*t,e.h+2*r)}
var OP=function(e,t){var r,n,a,o
r=DP(e.x,t.x)
n=DP(e.y,t.y)
a=SP(e.x+e.w,t.x+t.w)
o=SP(e.y+e.h,t.y+t.h)
if(a-r<0||o-n<0)return null
return LP(r,n,a-r,o-n)}
var FP=function(e,t,r){var n,a,o,i,u,s,l,c,f,d
u=e.x
s=e.y
l=e.x+e.w
c=e.y+e.h
f=t.x+t.w
d=t.y+t.h
n=DP(0,t.x-u)
a=DP(0,t.y-s)
o=DP(0,l-f)
i=DP(0,c-d)
u+=n
s+=a
if(r){l+=n
c+=a
u-=o
s-=i}l-=o
c-=i
return LP(u,s,l-u,c-s)}
var LP=function(e,t,r,n){return{x:e,y:t,w:r,h:n}}
var UP=function(e){return LP(e.left,e.top,e.width,e.height)}
var QP={inflate:_P,relativePosition:MP,findBestRelativePosition:PP,intersect:OP,clamp:FP,create:LP,fromClientRect:UP}
var zP={}
var jP={add:function(e,t){zP[e.toLowerCase()]=t},has:function(e){return!!zP[e.toLowerCase()]},get:function(e){var t=e.toLowerCase()
var r=zP.hasOwnProperty(t)?zP[t]:null
if(null===r)throw new Error("Could not find module for type: "+e)
return r},create:function(e,t){var r
if("string"===typeof e){t=t||{}
t.type=e}else{t=e
e=t.type}e=e.toLowerCase()
r=zP[e]
if(!r)throw new Error("Could not find control by type: "+e)
r=new r(t)
r.type=e
return r}}
var HP=Qr.each,WP=Qr.extend
var VP,GP
var YP=function(){}
YP.extend=VP=function(e){var t=this
var r=t.prototype
var n,a,o
var i=function(){var e,t,r
var n=this
if(!GP){n.init&&n.init.apply(n,arguments)
t=n.Mixins
if(t){e=t.length
while(e--){r=t[e]
r.init&&r.init.apply(n,arguments)}}}}
var u=function(){return this}
var s=function(e,t){return function(){var n=this
var a=n._super
var o
n._super=r[e]
o=t.apply(n,arguments)
n._super=a
return o}}
GP=true
n=new t
GP=false
if(e.Mixins){HP(e.Mixins,function(t){for(var r in t)"init"!==r&&(e[r]=t[r])})
r.Mixins&&(e.Mixins=r.Mixins.concat(e.Mixins))}e.Methods&&HP(e.Methods.split(","),function(t){e[t]=u})
e.Properties&&HP(e.Properties.split(","),function(t){var r="_"+t
e[t]=function(e){var t=this
if(void 0!==e){t[r]=e
return t}return t[r]}})
e.Statics&&HP(e.Statics,function(e,t){i[t]=e})
e.Defaults&&r.Defaults&&(e.Defaults=WP({},r.Defaults,e.Defaults))
for(a in e){o=e[a]
"function"===typeof o&&r[a]?n[a]=s(a,o):n[a]=o}i.prototype=n
i.constructor=i
i.extend=VP
return i}
var JP=Math.min,qP=Math.max,KP=Math.round
var XP=function(e){var t={}
var r=0,n=0,a=0
var o=function(e,t,r){var n,a,o,i,u,s
n=0
a=0
o=0
e/=255
t/=255
r/=255
u=JP(e,JP(t,r))
s=qP(e,qP(t,r))
if(u===s){o=u
return{h:0,s:0,v:100*o}}i=e===u?t-r:r===u?e-t:r-e
n=e===u?3:r===u?1:5
n=60*(n-i/(s-u))
a=(s-u)/s
o=s
return{h:KP(n),s:KP(100*a),v:KP(100*o)}}
var i=function(e,t,o){var i,u,s,l
e=(parseInt(e,10)||0)%360
t=parseInt(t,10)/100
o=parseInt(o,10)/100
t=qP(0,JP(t,1))
o=qP(0,JP(o,1))
if(0===t){r=n=a=KP(255*o)
return}i=e/60
u=o*t
s=u*(1-Math.abs(i%2-1))
l=o-u
switch(Math.floor(i)){case 0:r=u
n=s
a=0
break
case 1:r=s
n=u
a=0
break
case 2:r=0
n=u
a=s
break
case 3:r=0
n=s
a=u
break
case 4:r=s
n=0
a=u
break
case 5:r=u
n=0
a=s
break
default:r=n=a=0}r=KP(255*(r+l))
n=KP(255*(n+l))
a=KP(255*(a+l))}
var u=function(){var e=function(e){e=parseInt(e,10).toString(16)
return e.length>1?e:"0"+e}
return"#"+e(r)+e(n)+e(a)}
var s=function(){return{r:r,g:n,b:a}}
var l=function(){return o(r,n,a)}
var c=function(e){var o
if("object"===typeof e)if("r"in e){r=e.r
n=e.g
a=e.b}else"v"in e&&i(e.h,e.s,e.v)
else if(o=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e)){r=parseInt(o[1],10)
n=parseInt(o[2],10)
a=parseInt(o[3],10)}else if(o=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e)){r=parseInt(o[1],16)
n=parseInt(o[2],16)
a=parseInt(o[3],16)}else if(o=/#([0-F])([0-F])([0-F])/gi.exec(e)){r=parseInt(o[1]+o[1],16)
n=parseInt(o[2]+o[2],16)
a=parseInt(o[3]+o[3],16)}r=r<0?0:r>255?255:r
n=n<0?0:n>255?255:n
a=a<0?0:a>255?255:a
return t}
e&&c(e)
t.toRgb=s
t.toHsv=l
t.toHex=u
t.parse=c
return t}
var ZP=function(e,t){var r,n,a,o
t=t||'"'
if(null===e)return"null"
a=typeof e
if("string"===a){n="\bb\tt\nn\ff\rr\"\"''\\\\"
return t+e.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(e,a){if('"'===t&&"'"===e)return e
r=n.indexOf(a)
if(r+1)return"\\"+n.charAt(r+1)
e=a.charCodeAt().toString(16)
return"\\u"+"0000".substring(e.length)+e})+t}if("object"===a){if(e.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(e)){for(r=0,n="[";r<e.length;r++)n+=(r>0?",":"")+ZP(e[r],t)
return n+"]"}n="{"
for(o in e)e.hasOwnProperty(o)&&(n+="function"!==typeof e[o]?(n.length>1?","+t:t)+o+t+":"+ZP(e[o],t):"")
return n+"}"}return""+e}
var $P={serialize:ZP,parse:function(e){try{return JSON.parse(e)}catch(e){}}}
var e_={callbacks:{},count:0,send:function(e){var t=this,r=hu.DOM,n=void 0!==e.count?e.count:t.count
var a="tinymce_jsonp_"+n
t.callbacks[n]=function(o){r.remove(a)
delete t.callbacks[n]
e.callback(o)}
r.add(r.doc.body,"script",{id:a,src:e.url,type:"text/javascript"})
t.count++}}
var t_={send:function(e){var t,r=0
var n=function(){if(!e.async||4===t.readyState||r++>1e4){e.success&&r<1e4&&200===t.status?e.success.call(e.success_scope,""+t.responseText,t,e):e.error&&e.error.call(e.error_scope,r>1e4?"TIMED_OUT":"GENERAL",t,e)
t=null}else setTimeout(n,10)}
e.scope=e.scope||this
e.success_scope=e.success_scope||e.scope
e.error_scope=e.error_scope||e.scope
e.async=false!==e.async
e.data=e.data||""
t_.fire("beforeInitialize",{settings:e})
t=hE()
if(t){t.overrideMimeType&&t.overrideMimeType(e.content_type)
t.open(e.type||(e.data?"POST":"GET"),e.url,e.async)
e.crossDomain&&(t.withCredentials=true)
e.content_type&&t.setRequestHeader("Content-Type",e.content_type)
e.requestheaders&&Qr.each(e.requestheaders,function(e){t.setRequestHeader(e.key,e.value)})
t.setRequestHeader("X-Requested-With","XMLHttpRequest")
t=t_.fire("beforeSend",{xhr:t,settings:e}).xhr
t.send(e.data)
if(!e.async)return n()
setTimeout(n,10)}}}
Qr.extend(t_,tw)
var r_=Qr.extend
var n_=function(e){this.settings=r_({},e)
this.count=0}
n_.sendRPC=function(e){return(new n_).send(e)}
n_.prototype={send:function(e){var t=e.error,r=e.success
e=r_(this.settings,e)
e.success=function(n,a){n=$P.parse(n)
"undefined"===typeof n&&(n={error:"JSON Parse error."})
n.error?t.call(e.error_scope||e.scope,n.error,a):r.call(e.success_scope||e.scope,n.result)}
e.error=function(r,n){t&&t.call(e.error_scope||e.scope,r,n)}
e.data=$P.serialize({id:e.id||"c"+this.count++,method:e.method,params:e.params})
e.content_type="application/json"
t_.send(e)}}
var a_=function(){return function(){var e={}
var t=[]
var r={getItem:function(t){var r=e[t]
return r||null},setItem:function(r,n){t.push(r)
e[r]=String(n)},key:function(e){return t[e]},removeItem:function(r){t=t.filter(function(e){return e===r})
delete e[r]},clear:function(){t=[]
e={}},length:0}
Object.defineProperty(r,"length",{get:function(){return t.length},configurable:false,enumerable:false})
return r}()}
var o_
try{o_=window.localStorage}catch(e){o_=a_()}var i_=o_
var u_=TP
var s_={geom:{Rect:QP},util:{Promise:De,Delay:Ue,Tools:Qr,VK:mC,URI:AM,Class:YP,EventDispatcher:$y,Observable:tw,I18n:fP,XHR:t_,JSON:$P,JSONRequest:n_,JSONP:e_,LocalStorage:i_,Color:XP},dom:{EventUtils:Xe,Sizzle:er,DomQuery:un,TreeWalker:jo,DOMUtils:hu,ScriptLoader:xu,RangeUtils:IP,Serializer:PT,ControlSelection:QT,BookmarkManager:OT,Selection:qR,Event:Xe.Event},html:{Styles:su,Entities:qi,Node:mT,Schema:iu,SaxParser:BC,DomParser:BT,Writer:Xv,Serializer:Zv},ui:{Factory:jP},Env:Ie,AddOnManager:ku,Annotator:hv,Formatter:YB,UndoManager:nk,EditorCommands:Xy,WindowManager:iE,NotificationManager:aE,EditorObservable:Ew,Shortcuts:Tw,Editor:WM,FocusManager:GM,EditorManager:TP,DOM:hu.DOM,ScriptLoader:xu.ScriptLoader,PluginManager:ku.PluginManager,ThemeManager:ku.ThemeManager,trim:Qr.trim,isArray:Qr.isArray,is:Qr.is,toArray:Qr.toArray,makeMap:Qr.makeMap,each:Qr.each,map:Qr.map,grep:Qr.grep,inArray:Qr.inArray,extend:Qr.extend,create:Qr.create,walk:Qr.walk,createNS:Qr.createNS,resolve:Qr.resolve,explode:Qr.explode,_addCacheSuffix:Qr._addCacheSuffix,isOpera:Ie.opera,isWebKit:Ie.webkit,isIE:Ie.ie,isGecko:Ie.gecko,isMac:Ie.mac}
u_=Qr.extend(u_,s_)
var l_=u_
var c_=function(t){try{e.exports=t}catch(e){}}
var f_=function(e){window.tinymce=e
window.tinyMCE=e}
f_(l_)
c_(l_)}()}).call(this,r("URgk").setImmediate)},"66gZ":function(e,t,r){"use strict"
r.r(t)
var n=r("4ebf")
for(var a in n)"default"!==a&&function(e){r.d(t,e,function(){return n[e]})}(a)
r("uKUS")},"6Hea":function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=a(r("17x9"))
var d=n(r("q1tI"))
var v=a(r("AdBD"))
var m=a(r("XbQQ"))
var g=a(r("a6bM"))
var p=a(r("BAch"))
var A=a(r("qnOc"))
var h=function(e){(0,c.default)(t,e)
function t(){var e
var r;(0,i.default)(this,t)
for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u]
r=(0,s.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(a)))
r.handleAltTextChange=function(e){var t=(0,o.default)({},r.state,{altText:e.target.value})
r.setState(t)
r.props.altResolved(r.isAltResolved(t))}
r.handleDecorativeCheckbox=function(e){var t=(0,o.default)({},r.state,{decorativeSelected:e.target.checked})
r.setState(t)
r.props.altResolved(r.isAltResolved(t))}
r.state={altText:"",decorativeSelected:false}
return r}(0,u.default)(t,[{key:"componentDidMount",value:function(){this.altTextField.focus()}},{key:"isAltResolved",value:function(e){return e.decorativeSelected||e.altText.length>0}},{key:"value",value:function(){return this.state}},{key:"render",value:function(){var e=this
var t=(0,p.default)("Enter the alternative text for this image")
var r=(0,p.default)("Alternative text:")
var n=d.default.createElement("span",null,d.default.createElement("span",{"aria-hidden":true},r),d.default.createElement(A.default,null,t))
var a=(0,p.default)("Check if the image is decorative")
var o=(0,p.default)("Decorative image")
var i=d.default.createElement("span",null,d.default.createElement("span",{"aria-hidden":true},o),d.default.createElement(A.default,null,a))
return d.default.createElement("div",{className:"rcs-AltTextForm"},d.default.createElement(g.default,{ref:function(t){e.altTextField=t},label:n,onChange:this.handleAltTextChange,name:"alt_text",disabled:this.state.decorativeSelected}),d.default.createElement(m.default,{margin:"x-small 0",display:"block"},d.default.createElement(v.default,{label:i,name:"decorative",onChange:this.handleDecorativeCheckbox})))}}])
t.displayName="AltTextForm"
return t}(d.Component)
t.default=h
h.propTypes={altResolved:f.default.func.isRequired}},"6LCz":function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
var t=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker")
var r=tinymce.util.Tools.resolve("tinymce.Env")
var n={aletter:"[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-׳ؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆༀཀ-ཇཉ-ཬྈ-ྌႠ-Ⴥა-ჺჼᄀ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᨀ-ᨖᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᯀ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⒶ-ⓩⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⴀ-ⴥⴰ-ⵥⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〻〼ㄅ-ㄭㄱ-ㆎㆠ-ㆺꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐꞑꞠ-ꞩꟺ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]",midnumlet:"[-'\\.‘’․﹒＇．]",midletter:"[:··״‧︓﹕：]",midnum:"[±+*/,;;։،؍٬߸⁄︐︔﹐﹔，；]",numeric:"[0-9٠-٩٫۰-۹߀-߉०-९০-৯੦-੯૦-૯୦-୯௦-௯౦-౯೦-೯൦-൯๐-๙໐-໙༠-༩၀-၉႐-႙០-៩᠐-᠙᥆-᥏᧐-᧙᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙꘠-꘩꣐-꣙꤀-꤉꧐-꧙꩐-꩙꯰-꯹]",cr:"\\r",lf:"\\n",newline:"[\v\f\u2028\u2029]",extend:"[̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ऀ-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఁ-ఃా-ౄె-ైొ-్ౕౖౢౣಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣംഃാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳា-៓៝᠋-᠍ᢩᤠ-ᤫᤰ-᤻ᦰ-ᧀᧈᧉᨗ-ᨛᩕ-ᩞ᩠-᩿᩼ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-᯦᮪-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ᷀-ᷦ᷼-᷿‌‍⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲꙼꙽꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-꣄꣠-꣱ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꨩ-ꨶꩃꩌꩍꩻꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︦ﾞﾟ]",format:"[­؀-؃۝܏឴឵‎‏‪-‮⁠-⁤⁪-⁯\ufeff￹-￻]",katakana:"[〱-〵゛゜゠-ヺー-ヿㇰ-ㇿ㋐-㋾㌀-㍗ｦ-ﾝ]",extendnumlet:"[=_‿⁀⁔︳︴﹍-﹏＿∀-⋿<>]",punctuation:"[!-#%-*,-\\/:;?@\\[-\\]_{}¡«·»¿;·՚-՟։֊־׀׃׆׳״؉؊،؍؛؞؟٪-٭۔܀-܍߷-߹࠰-࠾࡞।॥॰෴๏๚๛༄-༒༺-༽྅࿐-࿔࿙࿚၊-၏჻፡-፨᐀᙭᙮᚛᚜᛫-᛭᜵᜶។-៖៘-៚᠀-᠊᥄᥅᨞᨟᪠-᪦᪨-᪭᭚-᭠᯼-᯿᰻-᰿᱾᱿᳓‐-‧‰-⁃⁅-⁑⁓-⁞⁽⁾₍₎〈〉❨-❵⟅⟆⟦-⟯⦃-⦘⧘-⧛⧼⧽⳹-⳼⳾⳿⵰⸀-⸮⸰⸱、-〃〈-】〔-〟〰〽゠・꓾꓿꘍-꘏꙳꙾꛲-꛷꡴-꡷꣎꣏꣸-꣺꤮꤯꥟꧁-꧍꧞꧟꩜-꩟꫞꫟꯫﴾﴿︐-︙︰-﹒﹔-﹡﹣﹨﹪﹫！-＃％-＊，-／：；？＠［-］＿｛｝｟-･]"}
var a={ALETTER:0,MIDNUMLET:1,MIDLETTER:2,MIDNUM:3,NUMERIC:4,CR:5,LF:6,NEWLINE:7,EXTEND:8,FORMAT:9,KATAKANA:10,EXTENDNUMLET:11,AT:12,OTHER:13}
var o=[new RegExp(n.aletter),new RegExp(n.midnumlet),new RegExp(n.midletter),new RegExp(n.midnum),new RegExp(n.numeric),new RegExp(n.cr),new RegExp(n.lf),new RegExp(n.newline),new RegExp(n.extend),new RegExp(n.format),new RegExp(n.katakana),new RegExp(n.extendnumlet),new RegExp("@")]
var i=""
var u=new RegExp("^"+n.punctuation+"$")
var s=/^\s+$/
var l={characterIndices:a,SETS:o,EMPTY_STRING:i,PUNCTUATION:u,WHITESPACE:s}
var c=function(e){return function(){return e}}
var f=c(false)
var d=c(true)
var v=f
var m=d
var g=function(){return p}
var p=function(){var e=function(e){return e.isNone()}
var t=function(e){return e()}
var r=function(e){return e}
var n=function(){}
var a=function(){return null}
var o=function(){return}
var i={fold:function(e,t){return e()},is:v,isSome:v,isNone:m,getOr:r,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a,getOrUndefined:o,or:r,orThunk:t,map:g,ap:g,each:n,bind:g,flatten:g,exists:v,forall:m,filter:g,equals:e,equals_:e,toArray:function(){return[]},toString:c("none()")}
Object.freeze&&Object.freeze(i)
return i}()
var A=function(e){if(null===e)return"null"
var t=typeof e
if("object"===t&&Array.prototype.isPrototypeOf(e))return"array"
if("object"===t&&String.prototype.isPrototypeOf(e))return"string"
return t}
var h=function(e){return function(t){return A(t)===e}}
var b=h("function")
var y=function(e,t){var r=e.length
var n=new Array(r)
for(var a=0;a<r;a++){var o=e[a]
n[a]=t(o,a,e)}return n}
Array.prototype.slice
b(Array.from)&&Array.from
var w=l.SETS
var E=l.characterIndices.OTHER
var x=function(e){var t,r,n=E
var a=w.length
for(t=0;t<a;++t){r=w[t]
if(r&&r.test(e)){n=t
break}}return n}
var C=function(e){var t={}
return function(r){if(t[r])return t[r]
var n=e(r)
t[r]=n
return n}}
var k=function(e){var t=C(x)
return y(e.split(""),t)}
var B={classify:k}
var T=l.characterIndices
var R=function(e,t){var r
var n=e[t]
var a=e[t+1]
var o
if(t<0||t>e.length-1&&0!==t)return false
if(n===T.ALETTER&&a===T.ALETTER)return false
o=e[t+2]
if(n===T.ALETTER&&(a===T.MIDLETTER||a===T.MIDNUMLET||a===T.AT)&&o===T.ALETTER)return false
r=e[t-1]
if((n===T.MIDLETTER||n===T.MIDNUMLET||a===T.AT)&&a===T.ALETTER&&r===T.ALETTER)return false
if((n===T.NUMERIC||n===T.ALETTER)&&(a===T.NUMERIC||a===T.ALETTER))return false
if((n===T.MIDNUM||n===T.MIDNUMLET)&&a===T.NUMERIC&&r===T.NUMERIC)return false
if(n===T.NUMERIC&&(a===T.MIDNUM||a===T.MIDNUMLET)&&o===T.NUMERIC)return false
if(n===T.EXTEND||n===T.FORMAT||r===T.EXTEND||r===T.FORMAT||a===T.EXTEND||a===T.FORMAT)return false
if(n===T.CR&&a===T.LF)return false
if(n===T.NEWLINE||n===T.CR||n===T.LF)return true
if(a===T.NEWLINE||a===T.CR||a===T.LF)return true
if(n===T.KATAKANA&&a===T.KATAKANA)return false
if(a===T.EXTENDNUMLET&&(n===T.ALETTER||n===T.NUMERIC||n===T.KATAKANA||n===T.EXTENDNUMLET))return false
if(n===T.EXTENDNUMLET&&(a===T.ALETTER||a===T.NUMERIC||a===T.KATAKANA))return false
if(n===T.AT)return false
return true}
var I={isWordBoundary:R}
var S=l.EMPTY_STRING
var D=l.WHITESPACE
var N=l.PUNCTUATION
var M=function(e){return"http"===e||"https"===e}
var P=function(e,t){var r
for(r=t;r<e.length;++r){var n=e.charAt(r)
if(D.test(n))break}return r}
var _=function(e,t,r){var n=P(t,r+1)
var a=t.substring(r+1,n)
if("://"===a.substr(0,3))return{word:e+a,index:n}
return{word:e,index:r}}
var O=function(e,t){var r=0
var n=B.classify(e)
var a=n.length
var o=[]
var i=[]
var u
var s
var l
t||(t={})
t.ignoreCase&&(e=e.toLowerCase())
s=t.includePunctuation
l=t.includeWhitespace
for(;r<a;++r){u=e.charAt(r)
o.push(u)
if(I.isWordBoundary(n,r)){o=o.join(S)
if(o&&(l||!D.test(o))&&(s||!N.test(o)))if(M(o)){var c=_(o,e,r)
i.push(c.word)
r=c.index}else i.push(o)
o=[]}}return i}
var F=function(e,t){return O(e.replace(/\ufeff/g,""),t)}
var L={getWords:F}
var U=function(e,r){var n=r.getBlockElements()
var a=r.getShortEndedElements()
var o=r.getWhiteSpaceElements()
var i=function(e){return n[e.nodeName]||a[e.nodeName]||o[e.nodeName]}
var u=""
var s=new t(e,e)
while(e=s.next())3===e.nodeType?u+=e.data:i(e)&&(u+=" ")
return u}
var Q=function(e,t){return r.ie?U(e,t):e.innerText}
var z=function(e){return e.removed?"":Q(e.getBody(),e.schema)}
var j=function(e){return L.getWords(z(e)).length}
var H={getCount:j}
var W=function(e){var t=function(){return H.getCount(e)}
return{getCount:t}}
var V={get:W}
var G=tinymce.util.Tools.resolve("tinymce.util.Delay")
var Y=tinymce.util.Tools.resolve("tinymce.util.I18n")
var J=function(e){var t=function(e){return Y.translate(["{0} words",H.getCount(e)])}
var r=function(){e.theme.panel.find("#wordcount").text(t(e))}
e.on("init",function(){var n=e.theme.panel&&e.theme.panel.find("#statusbar")[0]
var a=G.debounce(r,300)
n&&G.setEditorTimeout(e,function(){n.insert({type:"label",name:"wordcount",text:t(e),classes:"wordcount",disabled:e.settings.readonly},0)
e.on("setcontent beforeaddundo undo redo keyup",a)},0)})}
var q={setup:J}
e.add("wordcount",function(e){q.setup(e)
return V.get(e)})}()},"6Mtf":function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("lwsE"))
var o=n(r("W8MJ"))
var i=n(r("MVZn"))
r("LpSC")
var u=r("/UCH")
var s=r("CxY0")
function l(e){return{Authorization:"Bearer "+e}}function c(e){if(e.status<400)return e
var t=new Error(e.statusText)
t.response=e
throw t}function f(e){return e.text().then(function(e){var t=e
try{t=e.replace(/^while\(1\);/,"")}catch(e){console.warn("Strange json package",e)}return JSON.parse(t)})}function d(){throw new Error("Token expired, no refresh function provided")}function v(e){return(0,i.default)({display_name:e.name},e,{url:(0,u.downloadToWrap)(e.url)})}function m(e){throw"TypeError"===e.name?new Error("Failed to fetch from the canvas-rce-api.\n        Did you forget to start it or configure it?\n        Details can be found at https://github.com/instructure/canvas-rce-api\n      "):e}var g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,a.default)(this,e)
this.jwt=t.jwt
this.host=t.host
this.refreshToken=t.refreshToken||d}(0,o.default)(e,[{key:"getSession",value:function(){var e=l(this.jwt)
var t=this.baseUri("session")
return this.apiFetch(t,e).catch(m)}},{key:"initializeCollection",value:function(e,t){return{links:[],bookmark:this.uriFor(e,t),loading:false}}},{key:"initializeUpload",value:function(){return{uploading:false,folders:{},formExpanded:false}}},{key:"initializeImages",value:function(){return{records:[],bookmark:void 0,hasMore:false,isLoading:false,requested:false}}},{key:"initializeFlickr",value:function(){return{searchResults:[],searching:false,formExpanded:false}}},{key:"fetchPage",value:function(e){return this.apiFetch(e,l(this.jwt))}},{key:"fetchFiles",value:function(e){return this.fetchPage(e).then(function(e){var t=e.bookmark,r=e.files
return{bookmark:t,files:r.map(v)}})}},{key:"fetchRootFolder",value:function(e){return this.fetchPage(this.uriFor("folders",e),this.jwt)}},{key:"fetchFolders",value:function(e,t){var r=l(this.jwt)
var n=t||this.uriFor("folders/all",e)
return this.apiFetch(n,r)}},{key:"fetchImages",value:function(e){if(e.bookmark)return this.apiFetch(e.bookmark,l(this.jwt))
var t=l(this.jwt)
var r=this.uriFor("images",e)
return this.apiFetch(r,t)}},{key:"preflightUpload",value:function(e,t){var r=l(this.jwt)
var n=this.baseUri("upload",t.host)
var a={contextId:t.contextId,contextType:t.contextType,file:e,no_redirect:true}
return this.apiPost(n,r,a)}},{key:"uploadFRD",value:function(e,t){var r=this
var n=new window.FormData
Object.keys(t.upload_params).forEach(function(e){n.append(e,t.upload_params[e])})
n.append("file",e)
var a={method:"POST",body:n}
t.upload_params["x-amz-signature"]||(a.credentials="include")
return fetch(t.upload_url,a).then(c).then(f).then(function(e){return r.finalizeUpload(t,e)}).then(v)}},{key:"finalizeUpload",value:function(e,t){if(e.upload_params.success_url)return fetch(e.upload_params.success_url).then(c).then(f)
if(t.location){var r=(0,s.parse)(t.location),n=r.pathname
var a=n.match(/^\/api\/v1\/files\/(\d+)$/)
if(!a){var o=new Error("cannot determine file ID from location")
o.location=t.location
throw o}var i=a[1]
return this.getFile(i)}return Promise.resolve(t)}},{key:"setUsageRights",value:function(e,t){var r=l(this.jwt)
var n=this.baseUri("usage_rights")
var a=(0,i.default)({fileId:e},t)
return this.apiPost(n,r,a)}},{key:"searchFlickr",value:function(e,t){var r=l(this.jwt)
var n=this.baseUri("flickr_search",t.host)
var a="".concat(n,"?term=").concat(encodeURIComponent(e))
return this.apiFetch(a,r)}},{key:"getFile",value:function(e){var t=l(this.jwt)
var r=this.baseUri("file")
var n="".concat(r,"/").concat(e)
return this.apiFetch(n,t).then(v)}},{key:"apiFetch",value:function(e,t){var r=this
e=this.normalizeUriProtocol(e)
return fetch(e,{headers:t}).then(function(n){return 401==n.status?r.buildRetryHeaders(t).then(function(t){return fetch(e,{headers:t})}):n}).then(c).then(f).catch(m)}},{key:"apiPost",value:function(e,t,r){var n=this
t=Object.assign({},t,{"Content-Type":"application/json"})
var a={method:"POST",headers:t,body:JSON.stringify(r)}
e=this.normalizeUriProtocol(e)
return fetch(e,a).then(function(t){return 401==t.status?n.buildRetryHeaders(a.headers).then(function(t){var r=Object.assign({},a,{headers:t})
return fetch(e,r)}):t}).then(c).then(f).catch(m)}},{key:"normalizeUriProtocol",value:function(e,t){var r=t||("undefined"!==typeof window?window:void 0)
if(r&&r.location&&"https:"==r.location.protocol)return e.replace("http://","https://")
return e}},{key:"buildRetryHeaders",value:function(e){var t=this
return new Promise(function(r){t.refreshToken(function(n){t.jwt=n
var a=l(n)
var o=Object.assign({},e,a)
r(o)})})}},{key:"baseUri",value:function(e,t,r){!t&&this.host&&(t=this.host)
if("string"!==typeof t)t=""
else if("http"!==t.substr(0,4)){t="//".concat(t)
var n=r||("undefined"!==typeof window?window:void 0)
t.length>0&&n&&n.location&&n.location.protocol&&(t="".concat(n.location.protocol).concat(t))}return"".concat(t,"/api/").concat(e)}},{key:"uriFor",value:function(e,t){var r=t.host,n=t.contextType,a=t.contextId
return"".concat(this.baseUri(e,r),"?contextType=").concat(n,"&contextId=").concat(a)}}])
return e}()
var p=g
t.default=p},"6x+X":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t["default"]=n
function n(e){return e[0].toUpperCase()+e.substring(1)}e.exports=t["default"]},"7NWa":function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=n(r("q1tI"))
var d=a(r("BAch"))
var v=a(r("CTAn"))
var m=a(r("a6bM"))
var g=a(r("h8gV"))
var p={"":(0,d.default)("Choose usage rights..."),own_copyright:(0,d.default)("I hold the copyright"),used_by_permission:(0,d.default)("I have obtained permission to use this file."),public_domain:(0,d.default)("The material is in the public domain"),fair_use:(0,d.default)("The material is subject to fair use exception"),creative_commons:(0,d.default)("The material is licensed under Creative Commons")}
var A={cc_by_nc_nd:(0,d.default)("CC Attribution Non-Commercial No Derivatives"),cc_by_nc_sa:(0,d.default)("CC Attribution Non-Commercial Share Alike"),cc_by_nc:(0,d.default)("CC Attribution Non-Commercial"),cc_by_nd:(0,d.default)("CC Attribution No Derivatives"),cc_by_sa:(0,d.default)("CC Attribution Share Alike"),cc_by:(0,d.default)("CC Attribution")}
var h=function(e){(0,c.default)(t,e)
function t(){var e;(0,i.default)(this,t)
e=(0,s.default)(this,(0,l.default)(t).call(this))
e.handleUsageRight=function(t){e.setState({usageRight:t.target.value})}
e.handleCCLicense=function(t){e.setState({ccLicense:t.target.value})}
e.handleCopyrightHolder=function(t){e.setState({copyrightHolder:t.target.value})}
e.state={usageRight:Object.keys(p)[0],copyrightHolder:""}
return e}(0,u.default)(t,[{key:"isCreativeCommons",value:function(){return"creative_commons"===this.state.usageRight}},{key:"isNotSelected",value:function(){return this.state.usageRight===Object.keys(p)[0]}},{key:"value",value:function(){if(this.isNotSelected())return null
var e=(0,o.default)({},this.state)
this.isCreativeCommons()||delete e.ccLicense
return e}},{key:"render",value:function(){return f.default.createElement("div",{className:"rcs-UsageRightsForm"},f.default.createElement(v.default,{label:(0,d.default)("Usage Right:"),value:this.state.usageRight,onChange:this.handleUsageRight},Object.keys(p).map(function(e){return f.default.createElement("option",{key:e,value:e},p[e])})),this.isCreativeCommons()&&f.default.createElement(v.default,{label:(0,d.default)("Creative Commons License:"),value:this.state.ccLicense,onChange:this.handleCCLicense},Object.keys(A).map(function(e){return f.default.createElement("option",{key:e,value:e},A[e])})),f.default.createElement(m.default,{label:(0,d.default)("Copyright Holder:"),placeholder:(0,d.default)("(c) 2001 Acme Inc."),value:this.state.copyrightHolder,onChange:this.handleCopyrightHolder}),this.isNotSelected()&&f.default.createElement(g.default,{variant:"warning"},f.default.createElement("i",{className:"icon-warning"})," "+(0,d.default)("If you do not select usage rights now, this file will be unpublished after it's uploaded.")))}}])
t.displayName="UsageRightsForm"
return t}(f.Component)
t.default=h},"9Pur":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.requestPage=i
t.receivePage=u
t.failPage=s
t.fetchPage=l
t.fetchNextPage=c
t.fetchInitialPage=f
t.FAIL_PAGE=t.RECEIVE_PAGE=t.REQUEST_PAGE=void 0
var n="REQUEST_PAGE"
t.REQUEST_PAGE="REQUEST_PAGE"
var a="RECEIVE_PAGE"
t.RECEIVE_PAGE="RECEIVE_PAGE"
var o="FAIL_PAGE"
t.FAIL_PAGE="FAIL_PAGE"
function i(e){return{type:n,key:e}}function u(e,t){var r=t.links,n=t.bookmark
return{type:a,key:e,links:r,bookmark:n}}function s(e,t){return{type:o,key:e,error:t}}function l(e){return function(t,r){var n=r(),a=n.source,o=n.collections
var l=o[e].bookmark
t(i(e))
return a.fetchPage(l).then(function(r){return t(u(e,r))}).catch(function(r){return t(s(e,r))})}}function c(e){return function(t,r){var n=r()
var a=n.collections[e]
if(a&&!a.loading&&a.bookmark)return t(l(e))}}function f(e){return function(t,r){var n=r()
var a=n.collections[e]
if(a&&0===a.links.length)return t(c(e))}}},"A+Oa":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
return e}},BAch:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("MVZn"))
var o=n(r("/HcR"))
var i=o.default.namespace()
i.addLocale=function(e){i.setup({translations:(0,a.default)({},i.setup().translations,e)})}
var u=i
t.default=u},BXe7:function(e,t,r){"use strict"
var n=r("TqRt")
var a=r("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=n(r("QILm"))
var i=n(r("lwsE"))
var u=n(r("W8MJ"))
var s=n(r("a1gu"))
var l=n(r("Nsbk"))
var c=n(r("7W2i"))
var f=a(r("q1tI"))
var d=n(r("17x9"))
var v=n(r("J2CL"))
var m=n(r("4cKe"))
var g=n(r("Zuoh"))
var p=n(r("uSWO"))
var A=n(r("WU1E"))
var h,b,y,w,E
var x={componentId:"eJkkQ",template:function(e){return"\n\n.eJkkQ_bGBk{transform:translateZ(0)}\n\n.eJkkQ_ddDm{transition:opacity ".concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_cpZA,.eJkkQ_fTmM{opacity:0.01}\n\n.eJkkQ_bEpV,.eJkkQ_NoZX{opacity:1}\n\n.eJkkQ_fOgU{transition:opacity ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_ZDum,.eJkkQ_fihg{opacity:0.01;transform:scale(0.01) translateZ(0)}\n\n.eJkkQ_eqrf,.eJkkQ_ftWB{opacity:1;transform:scale(1) translateZ(0)}\n\n.eJkkQ_dlJm,.eJkkQ_cPWt,.eJkkQ_bewW,.eJkkQ_bHhn{transition:opacity ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit",",transform ").concat(e.duration||"inherit"," ").concat(e.timing||"inherit","}\n\n.eJkkQ_bOBe,.eJkkQ_eKZC,.eJkkQ_cusP,.eJkkQ_djUe{opacity:0.01}\n\n.eJkkQ_cusP,.eJkkQ_dWfS{transform:translate3d(100%,0,0)}\n\n.eJkkQ_eKZC,.eJkkQ_chud{transform:translate3d(-100%,0,0)}\n\n.eJkkQ_djUe,.eJkkQ_fDdb{transform:translate3d(0,-100%,0)}\n\n.eJkkQ_bOBe,.eJkkQ_cYey{transform:translate3d(0,100%,0)}\n\n.eJkkQ_diPG,.eJkkQ_fEMB,.eJkkQ_eOlt,.eJkkQ_fvoZ,.eJkkQ_bIuM,.eJkkQ_fyZW,.eJkkQ_cuyj,.eJkkQ_gaix{opacity:1;transform:translateZ(0)}")},root:"eJkkQ_bGBk",fade:"eJkkQ_ddDm","fade--exited":"eJkkQ_cpZA","fade--exiting":"eJkkQ_fTmM","fade--entered":"eJkkQ_bEpV","fade--entering":"eJkkQ_NoZX",scale:"eJkkQ_fOgU","scale--exited":"eJkkQ_ZDum","scale--exiting":"eJkkQ_fihg","scale--entered":"eJkkQ_eqrf","scale--entering":"eJkkQ_ftWB","slide-down":"eJkkQ_dlJm","slide-left":"eJkkQ_cPWt","slide-right":"eJkkQ_bewW","slide-up":"eJkkQ_bHhn","slide-down--exited":"eJkkQ_bOBe","slide-left--exited":"eJkkQ_eKZC","slide-right--exited":"eJkkQ_cusP","slide-up--exited":"eJkkQ_djUe","slide-right--exiting":"eJkkQ_dWfS","slide-left--exiting":"eJkkQ_chud","slide-up--exiting":"eJkkQ_fDdb","slide-down--exiting":"eJkkQ_cYey","slide-down--entered":"eJkkQ_diPG","slide-down--entering":"eJkkQ_fEMB","slide-left--entered":"eJkkQ_eOlt","slide-left--entering":"eJkkQ_fvoZ","slide-right--entered":"eJkkQ_bIuM","slide-right--entering":"eJkkQ_fyZW","slide-up--entered":"eJkkQ_cuyj","slide-up--entering":"eJkkQ_gaix"}
var C=(h=(0,g.default)(),b=(0,v.default)(A.default,x),h(y=b(y=(E=w=function(e){(0,c.default)(t,e)
function t(){var e
var r;(0,i.default)(this,t)
for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o]
r=(0,s.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(a)))
r.handleExited=function(){"function"===typeof r.props.onExited&&r.props.onExited(r.props.type)}
r.handleEntered=function(){"function"===typeof r.props.onEntered&&r.props.onEntered(r.props.type)}
return r}(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.type,r=e.children,n=(0,o.default)(e,["type","children"])
var a=(0,m.default)(this.theme.duration)
var i=t?{exited:x["".concat(t,"--exited")],exiting:x["".concat(t,"--exiting")],entering:x["".concat(t,"--entered")],entered:x["".concat(t,"--entering")]}:{}
return f.default.createElement(p.default,Object.assign({},n,{enterDelay:a,exitDelay:a,transitionClassName:x[t],exitedClassName:i.exited,exitingClassName:i.exiting,enteredClassName:i.entering,enteringClassName:i.entered,onEntered:this.handleEntered,onExited:this.handleExited}),r)}}])
t.displayName="Transition"
return t}(f.Component),w.propTypes={type:d.default.oneOf(["fade","scale","slide-down","slide-up","slide-left","slide-right"]),children:d.default.element,in:d.default.bool,unmountOnExit:d.default.bool,transitionOnMount:d.default.bool,transitionEnter:d.default.bool,transitionExit:d.default.bool,onTransition:d.default.func,onEnter:d.default.func,onEntering:d.default.func,onEntered:d.default.func,onExit:d.default.func,onExiting:d.default.func,onExited:d.default.func},w.defaultProps={type:"fade",in:false,unmountOnExit:false,transitionOnMount:false,transitionEnter:true,transitionExit:true,onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},onTransition:function(e,t){},children:null},w.states=p.default.states,E))||y)||y)
t.default=C},Boq2:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e,t){var r=t.createEvent("CustomEvent")
r.initCustomEvent("tinyRCE/initLinks",true,true,{ed:e})
t.dispatchEvent(r)}},"Cc/A":function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
var t=function(e,t){var r
e.dom.getParents(e.selection.getStart(),function(e){var n;(n=e.style["forecolor"===t?"color":"background-color"])&&(r=r||n)})
return r}
var r=function(e){var t
var r=[]
for(t=0;t<e.length;t+=2)r.push({text:e[t+1],color:"#"+e[t]})
return r}
var n=function(e,t,r){e.undoManager.transact(function(){e.focus()
e.formatter.apply(t,{value:r})
e.nodeChanged()})}
var a=function(e,t){e.undoManager.transact(function(){e.focus()
e.formatter.remove(t,{value:null},null,true)
e.nodeChanged()})}
var o={getCurrentColor:t,mapColors:r,applyFormat:n,removeFormat:a}
var i=function(e){e.addCommand("mceApplyTextcolor",function(t,r){o.applyFormat(e,t,r)})
e.addCommand("mceRemoveTextcolor",function(t){o.removeFormat(e,t)})}
var u={register:i}
var s=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils")
var l=tinymce.util.Tools.resolve("tinymce.util.Tools")
var c=["000000","Black","993300","Burnt orange","333300","Dark olive","003300","Dark green","003366","Dark azure","000080","Navy Blue","333399","Indigo","333333","Very dark gray","800000","Maroon","FF6600","Orange","808000","Olive","008000","Green","008080","Teal","0000FF","Blue","666699","Grayish blue","808080","Gray","FF0000","Red","FF9900","Amber","99CC00","Yellow green","339966","Sea green","33CCCC","Turquoise","3366FF","Royal blue","800080","Purple","999999","Medium gray","FF00FF","Magenta","FFCC00","Gold","FFFF00","Yellow","00FF00","Lime","00FFFF","Aqua","00CCFF","Sky blue","993366","Red violet","FFFFFF","White","FF99CC","Pink","FFCC99","Peach","FFFF99","Light yellow","CCFFCC","Pale green","CCFFFF","Pale cyan","99CCFF","Light sky blue","CC99FF","Plum"]
var f=function(e){return e.getParam("textcolor_map",c)}
var d=function(e){return e.getParam("forecolor_map",f(e))}
var v=function(e){return e.getParam("backcolor_map",f(e))}
var m=function(e){return e.getParam("textcolor_rows",5)}
var g=function(e){return e.getParam("textcolor_cols",8)}
var p=function(e){return e.getParam("forecolor_rows",m(e))}
var A=function(e){return e.getParam("backcolor_rows",m(e))}
var h=function(e){return e.getParam("forecolor_cols",g(e))}
var b=function(e){return e.getParam("backcolor_cols",g(e))}
var y=function(e){return e.getParam("color_picker_callback",null)}
var w=function(e){return"function"===typeof y(e)}
var E={getForeColorMap:d,getBackColorMap:v,getForeColorRows:p,getBackColorRows:A,getForeColorCols:h,getBackColorCols:b,getColorPickerCallback:y,hasColorPicker:w}
var x=tinymce.util.Tools.resolve("tinymce.util.I18n")
var C=function(e,t,r,n){var a,i,u,l,c,f,d,v=0
var m=s.DOM.uniqueId("mcearia")
var g=function(e,t){var r="transparent"===e
return'<td class="mce-grid-cell'+(r?" mce-colorbtn-trans":"")+'"><div id="'+m+"-"+v+++'" data-mce-color="'+(e||"")+'" role="option" tabIndex="-1" style="'+(e?"background-color: "+e:"")+'" title="'+x.translate(t)+'">'+(r?"&#215;":"")+"</div></td>"}
a=o.mapColors(r)
a.push({text:x.translate("No color"),color:"transparent"})
u='<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="list" cellspacing="0"><tbody>'
l=a.length-1
for(f=0;f<t;f++){u+="<tr>"
for(c=0;c<e;c++){d=f*e+c
if(d>l)u+="<td></td>"
else{i=a[d]
u+=g(i.color,i.text)}}u+="</tr>"}if(n){u+='<tr><td colspan="'+e+'" class="mce-custom-color-btn"><div id="'+m+'-c" class="mce-widget mce-btn mce-btn-small mce-btn-flat" role="button" tabindex="-1" aria-labelledby="'+m+'-c" style="width: 100%"><button type="button" role="presentation" tabindex="-1">'+x.translate("Custom...")+"</button></div></td></tr>"
u+="<tr>"
for(c=0;c<e;c++)u+=g("","Custom color")
u+="</tr>"}u+="</tbody></table>"
return u}
var k={getHtml:C}
var B=function(e,t){e.style.background=t
e.setAttribute("data-mce-color",t)}
var T=function(e){return function(t){var r=t.control
r._color?e.execCommand("mceApplyTextcolor",r.settings.format,r._color):e.execCommand("mceRemoveTextcolor",r.settings.format)}}
var R=function(e,t){return function(r){var n=this.parent()
var a
var i=o.getCurrentColor(e,n.settings.format)
var u=function(t){e.execCommand("mceApplyTextcolor",n.settings.format,t)
n.hidePanel()
n.color(t)}
var c=function(){e.execCommand("mceRemoveTextcolor",n.settings.format)
n.hidePanel()
n.resetColor()}
if(s.DOM.getParent(r.target,".mce-custom-color-btn")){n.hidePanel()
var f=E.getColorPickerCallback(e)
f.call(e,function(e){var r=n.panel.getEl().getElementsByTagName("table")[0]
var a,o,i
a=l.map(r.rows[r.rows.length-1].childNodes,function(e){return e.firstChild})
for(i=0;i<a.length;i++){o=a[i]
if(!o.getAttribute("data-mce-color"))break}if(i===t)for(i=0;i<t-1;i++)B(a[i],a[i+1].getAttribute("data-mce-color"))
B(o,e)
u(e)},i)}a=r.target.getAttribute("data-mce-color")
if(a){this.lastId&&s.DOM.get(this.lastId).setAttribute("aria-selected","false")
r.target.setAttribute("aria-selected",true)
this.lastId=r.target.id
"transparent"===a?c():u(a)}else null!==a&&n.hidePanel()}}
var I=function(e,t){return function(){var r=t?E.getForeColorCols(e):E.getBackColorCols(e)
var n=t?E.getForeColorRows(e):E.getBackColorRows(e)
var a=t?E.getForeColorMap(e):E.getBackColorMap(e)
var o=E.hasColorPicker(e)
return k.getHtml(r,n,a,o)}}
var S=function(e){e.addButton("forecolor",{type:"colorbutton",tooltip:"Text color",format:"forecolor",panel:{role:"application",ariaRemember:true,html:I(e,true),onclick:R(e,E.getForeColorCols(e))},onclick:T(e)})
e.addButton("backcolor",{type:"colorbutton",tooltip:"Background color",format:"hilitecolor",panel:{role:"application",ariaRemember:true,html:I(e,false),onclick:R(e,E.getBackColorCols(e))},onclick:T(e)})}
var D={register:S}
e.add("textcolor",function(e){u.register(e)
D.register(e)})}()},GrEC:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=u
var a=n(r("t6i0"))
function o(e){return e.getContainer().querySelector("iframe")}function i(e){var t=e.getBoundingClientRect()
return{top:t.top,left:t.left,width:t.right-t.left,height:t.bottom-t.top}}function u(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.default
var n=o(e)
var u=r(n)
var s=i(t)
return{width:s.width,height:s.height,left:u.left+s.left,top:u.top+s.top}}},GuEk:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.cleanUrl=n
function n(e){var t=e
!e.match(/@/)||e.match(/\//)||e.match(/^mailto:/)?e.match(/^\w+:\/\//)||e.match(/^mailto:/)||e.match(/^\//)||(t="http://"+e):t="mailto:"+e;-1==t.indexOf("@")||0==t.indexOf("mailto:")||t.match(/^http/)||(t="mailto:"+t)
return t}},HRht:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.setFromTinymce=o
t.reset=i
t.set=u
t.ie=s
t.edge=l
var n=false
var a=false
function o(e){u(e.Env)}function i(){u({ie:false,edge:false})}function u(e){n=!!e.ie
a=n&&!!(e.edge||12==e.ie)}function s(){return n}function l(){return a}},ILCH:function(e,t,r){"use strict"
var n=r("TqRt")
var a=n(r("dKDz"))
var o=n(r("BAch"))
var i=n(r("nBnu"))
tinymce.create("tinymce.plugins.InstructureEquella",{init:function(e){e.addCommand("instructureEquella",i.default.bind(this,e,document))
e.addButton("instructure_equella",{title:(0,a.default)((0,o.default)({default:"Insert Equella Links",description:"Title for RCE button to insert links to Equella content"})),cmd:"instructureEquella",icon:"equella icon-equella"})},getInfo:function(){return{longname:"InstructureEquella",author:"Brian Whitmer",authorurl:"http://www.instructure.com",infourl:"http://www.instructure.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}})
tinymce.PluginManager.add("instructure_equella",tinymce.plugins.InstructureEquella)},IOtD:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=n(r("q1tI"))
var d=a(r("q3EI"))
var v=f.default.createElement("path",{d:"M1706.235 1807.059H350.941V112.94h903.53v451.765h451.764v1242.353zm-338.823-1670.74l315.443 315.447h-315.443V136.32zm402.182 242.487L1440.372 49.58C1408.296 17.62 1365.717 0 1320.542 0H238v1920h1581.175V498.635c0-45.176-17.618-87.755-49.58-119.83zM576.823 1242.353h790.589v-112.94H576.823v112.94zm0-451.765h903.53V677.647h-903.53v112.941zm0 677.647h451.765v-112.941H576.823v112.941zm0-451.764h677.648V903.53H576.823v112.941zm0-451.765h451.765V451.765H576.823v112.941z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){(0,c.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(d.default,Object.assign({},this.props,{name:"IconDocument",viewBox:"0 0 1920 1920",bidirectional:true}),v)}}])
t.displayName="IconDocument"
return t}(f.Component)
t.default=m
m.glyphName="document"
m.variant="Line"
m.propTypes=(0,o.default)({},d.default.propTypes)},IUx4:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=n(r("MVZn"))
var o=n(r("hSMc"))
function i(e){return(0,a.default)({onLinkClick:o.default.insertLink,onImageEmbed:o.default.embedImage},e)}},Imxt:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=n(r("q1tI"))
var d=a(r("e5nI"))
var v=a(r("U93Q"))
var m=r("/7Jz")
var g=a(r("LUxv"))
var p=a(r("hIra"))
var A=a(r("mWgA"))
var h=a(r("fYVe"))
var b=function(e){(0,l.default)(t,e)
function t(){var e
var r;(0,o.default)(this,t)
for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i]
r=(0,u.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(a)))
r.handleToggle=function(){var e=r.props,t=e.onToggle,n=e.folder
t&&t(n.id)}
return r}(0,i.default)(t,[{key:"files",value:function(){var e=this
return this.props.folder.fileIds.map(function(t){return e.props.files[t]}).filter(function(e){return null!=e})}},{key:"subFolders",value:function(){var e=this
return this.props.folder.folderIds.map(function(t){return e.props.folders[t]}).filter(function(e){return null!=e})}},{key:"toggleIcon",value:function(){var e=this.props.folder.expanded
return e?f.default.createElement(p.default,null):f.default.createElement(A.default,null)}},{key:"render",value:function(){var e=this.props,r=e.folders,n=e.folder,a=e.files,o=e.onSelect,i=e.onToggle
return f.default.createElement("div",{className:(0,m.css)(g.default.node)},f.default.createElement("button",{className:(0,m.css)(g.default.button),onClick:this.handleToggle,"aria-expanded":!!n.expanded},this.toggleIcon()," ",f.default.createElement(h.default,null)," ",n.name),n.expanded&&f.default.createElement("ul",{className:(0,m.css)(g.default.list)},this.subFolders().map(function(e){return f.default.createElement("li",{key:"folder-".concat(e.id),className:(0,m.css)(g.default.node)},f.default.createElement(t,{folders:r,files:a,folder:e,onToggle:i,onSelect:o}))}),this.files().map(function(e){return f.default.createElement("li",{key:"file-".concat(e.id),className:(0,m.css)(g.default.node)},f.default.createElement(d.default,{onSelect:o,file:e}))})),n.expanded&&n.loading&&f.default.createElement(v.default,{className:(0,m.css)(g.default.loading)}))}}])
t.displayName="Folder"
return t}(f.Component)
t.default=b
var y=c.default.shape({id:c.default.number,name:c.default.string,loading:c.default.bool,fileIds:c.default.arrayOf(c.default.number),folderIds:c.default.arrayOf(c.default.number)})
b.propTypes={folders:c.default.objectOf(y),files:c.default.objectOf(d.default.propTypes.file),folder:y.isRequired,onToggle:c.default.func,onSelect:d.default.propTypes.onSelect}
b.defaultProps={files:[],folders:[]}},JAFY:function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
var t=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils")
var r=tinymce.util.Tools.resolve("tinymce.dom.TreeWalker")
var n=tinymce.util.Tools.resolve("tinymce.util.VK")
var a=tinymce.util.Tools.resolve("tinymce.dom.BookmarkManager")
var o=tinymce.util.Tools.resolve("tinymce.util.Tools")
var i=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils")
var u=function(e){return e&&3===e.nodeType}
var s=function(e){return e&&/^(OL|UL|DL)$/.test(e.nodeName)}
var l=function(e){return e&&/^(OL|UL)$/.test(e.nodeName)}
var c=function(e){return e&&/^(LI|DT|DD)$/.test(e.nodeName)}
var f=function(e){return e&&/^(DT|DD)$/.test(e.nodeName)}
var d=function(e){return e&&/^(TH|TD)$/.test(e.nodeName)}
var v=function(e){return e&&"BR"===e.nodeName}
var m=function(e){return e.parentNode.firstChild===e}
var g=function(e){return e.parentNode.lastChild===e}
var p=function(e,t){return t&&!!e.schema.getTextBlockElements()[t.nodeName]}
var A=function(e,t){return e&&e.nodeName in t}
var h=function(e,t){if(!v(t))return false
if(e.isBlock(t.nextSibling)&&!v(t.previousSibling))return true
return false}
var b=function(e,t,r){var n=e.isEmpty(t)
if(r&&e.select("span[data-mce-type=bookmark]",t).length>0)return false
return n}
var y=function(e,t){return e.isChildOf(t,e.getRoot())}
var w={isTextNode:u,isListNode:s,isOlUlNode:l,isDlItemNode:f,isListItemNode:c,isTableCellNode:d,isBr:v,isFirstChild:m,isLastChild:g,isTextBlock:p,isBlock:A,isBogusBr:h,isEmpty:b,isChildOfBody:y}
var E=function(e,r){if(w.isTextNode(e))return{container:e,offset:r}
var n=t.getNode(e,r)
if(w.isTextNode(n))return{container:n,offset:r>=e.childNodes.length?n.data.length:0}
if(n.previousSibling&&w.isTextNode(n.previousSibling))return{container:n.previousSibling,offset:n.previousSibling.data.length}
if(n.nextSibling&&w.isTextNode(n.nextSibling))return{container:n.nextSibling,offset:0}
return{container:e,offset:r}}
var x=function(e){var t=e.cloneRange()
var r=E(e.startContainer,e.startOffset)
t.setStart(r.container,r.offset)
var n=E(e.endContainer,e.endOffset)
t.setEnd(n.container,n.offset)
return t}
var C={getNormalizedPoint:E,normalizeRange:x}
var k=i.DOM
var B=function(e){var t={}
var r=function(r){var n,a,o
a=e[r?"startContainer":"endContainer"]
o=e[r?"startOffset":"endOffset"]
if(1===a.nodeType){n=k.create("span",{"data-mce-type":"bookmark"})
if(a.hasChildNodes()){o=Math.min(o,a.childNodes.length-1)
r?a.insertBefore(n,a.childNodes[o]):k.insertAfter(n,a.childNodes[o])}else a.appendChild(n)
a=n
o=0}t[r?"startContainer":"endContainer"]=a
t[r?"startOffset":"endOffset"]=o}
r(true)
e.collapsed||r()
return t}
var T=function(e){function t(t){var r,n,a
var o=function(e){var t=e.parentNode.firstChild,r=0
while(t){if(t===e)return r
1===t.nodeType&&"bookmark"===t.getAttribute("data-mce-type")||r++
t=t.nextSibling}return-1}
r=a=e[t?"startContainer":"endContainer"]
n=e[t?"startOffset":"endOffset"]
if(!r)return
if(1===r.nodeType){n=o(r)
r=r.parentNode
k.remove(a)
!r.hasChildNodes()&&k.isBlock(r)&&r.appendChild(k.create("br"))}e[t?"startContainer":"endContainer"]=r
e[t?"startOffset":"endOffset"]=n}t(true)
t()
var r=k.createRng()
r.setStart(e.startContainer,e.startOffset)
e.endContainer&&r.setEnd(e.endContainer,e.endOffset)
return C.normalizeRange(r)}
var R={createBookmark:B,resolveBookmark:T}
var I=function(e){return function(){return e}}
function S(e){var t=[]
for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
return function(){var r=[]
for(var n=0;n<arguments.length;n++)r[n]=arguments[n]
var a=t.concat(r)
return e.apply(null,a)}}var D=function(e){return function(){var t=[]
for(var r=0;r<arguments.length;r++)t[r]=arguments[r]
return!e.apply(null,t)}}
var N=I(false)
var M=I(true)
var P=N
var _=M
var O=function(){return F}
var F=function(){var e=function(e){return e.isNone()}
var t=function(e){return e()}
var r=function(e){return e}
var n=function(){}
var a=function(){return null}
var o=function(){return}
var i={fold:function(e,t){return e()},is:P,isSome:P,isNone:_,getOr:r,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a,getOrUndefined:o,or:r,orThunk:t,map:O,ap:O,each:n,bind:O,flatten:O,exists:P,forall:_,filter:O,equals:e,equals_:e,toArray:function(){return[]},toString:I("none()")}
Object.freeze&&Object.freeze(i)
return i}()
var L=function(e){var t=function(){return e}
var r=function(){return o}
var n=function(t){return L(t(e))}
var a=function(t){return t(e)}
var o={fold:function(t,r){return r(e)},is:function(t){return e===t},isSome:_,isNone:P,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:n,ap:function(t){return t.fold(O,function(t){return L(t(e))})},each:function(t){t(e)},bind:a,flatten:t,exists:a,forall:a,filter:function(t){return t(e)?o:F},equals:function(t){return t.is(e)},equals_:function(t,r){return t.fold(P,function(t){return r(e,t)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o}
var U=function(e){return null===e||void 0===e?F:L(e)}
var Q={some:L,none:O,from:U}
var z=function(e){if(null===e)return"null"
var t=typeof e
if("object"===t&&Array.prototype.isPrototypeOf(e))return"array"
if("object"===t&&String.prototype.isPrototypeOf(e))return"string"
return t}
var j=function(e){return function(t){return z(t)===e}}
var H=j("string")
var W=j("boolean")
var V=j("function")
var G=j("number")
var Y=function(e,t){var r=e.length
var n=new Array(r)
for(var a=0;a<r;a++){var o=e[a]
n[a]=t(o,a,e)}return n}
var J=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
t(a,r,e)}}
var q=function(e,t){var r=[]
for(var n=0,a=e.length;n<a;n++){var o=e[n]
t(o,n,e)&&r.push(o)}return r}
var K=function(e,t){if(0===e.length)return[]
var r=t(e[0])
var n=[]
var a=[]
for(var o=0,i=e.length;o<i;o++){var u=e[o]
var s=t(u)
if(s!==r){n.push(a)
a=[]}r=s
a.push(u)}0!==a.length&&n.push(a)
return n}
var X=function(e,t,r){J(e,function(e){r=t(r,e)})
return r}
var Z=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
if(t(a,r,e))return Q.some(a)}return Q.none()}
var $=Array.prototype.push
var ee=function(e){var t=[]
for(var r=0,n=e.length;r<n;++r){if(!Array.prototype.isPrototypeOf(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e)
$.apply(t,e[r])}return t}
var te=function(e,t){var r=Y(e,t)
return ee(r)}
var re=Array.prototype.slice
var ne=function(e){var t=re.call(e,0)
t.reverse()
return t}
var ae=function(e){return 0===e.length?Q.none():Q.some(e[0])}
var oe=function(e){return 0===e.length?Q.none():Q.some(e[e.length-1])}
V(Array.from)&&Array.from
var ie="undefined"!==typeof window?window:Function("return this;")()
var ue=function(e,t){var r=void 0!==t&&null!==t?t:ie
for(var n=0;n<e.length&&void 0!==r&&null!==r;++n)r=r[e[n]]
return r}
var se=function(e,t){var r=e.split(".")
return ue(r,t)}
var le=function(e,t){return se(e,t)}
var ce=function(e,t){var r=le(e,t)
if(void 0===r||null===r)throw e+" not available on this browser"
return r}
var fe={getOrDie:ce}
var de=function(e){return fe.getOrDie("HTMLElement",e)}
var ve=function(e){var t=se("ownerDocument.defaultView",e)
return de(t).prototype.isPrototypeOf(e)}
var me={isPrototypeOf:ve}
var ge=tinymce.util.Tools.resolve("tinymce.dom.DomQuery")
var pe=function(e){var t=e.selection.getStart(true)
return e.dom.getParent(t,"OL,UL,DL",xe(e,t))}
var Ae=function(e,t){return e&&1===t.length&&t[0]===e}
var he=function(e){return o.grep(e.querySelectorAll("ol,ul,dl"),function(e){return w.isListNode(e)})}
var be=function(e){var t=pe(e)
var r=e.selection.getSelectedBlocks()
return Ae(t,r)?he(t):o.grep(r,function(e){return w.isListNode(e)&&t!==e})}
var ye=function(e,t){var r=o.map(t,function(t){var r=e.dom.getParent(t,"li,dd,dt",xe(e,t))
return r||t})
return ge.unique(r)}
var we=function(e){var t=e.selection.getSelectedBlocks()
return o.grep(ye(e,t),function(e){return w.isListItemNode(e)})}
var Ee=function(e){return q(we(e),w.isDlItemNode)}
var xe=function(e,t){var r=e.dom.getParents(t,"TD,TH")
var n=r.length>0?r[0]:e.getBody()
return n}
var Ce=function(e,t){var r=e.dom.getParents(t,"ol,ul",xe(e,t))
return oe(r)}
var ke=function(e){var t=Ce(e,e.selection.getStart())
var r=q(e.selection.getSelectedBlocks(),w.isOlUlNode)
return t.toArray().concat(r)}
var Be=function(e){var t=ke(e)
return Te(e,t)}
var Te=function(e,t){var r=Y(t,function(t){return Ce(e,t).getOr(t)})
return ge.unique(r)}
var Re=function(e){var t=pe(e)
return me.isPrototypeOf(t)}
var Ie={isList:Re,getParentList:pe,getSelectedSubLists:be,getSelectedListItems:we,getClosestListRootElm:xe,getSelectedDlItems:Ee,getSelectedListRoots:Be}
var Se=function(e){var t=false
var r
return function(){var n=[]
for(var a=0;a<arguments.length;a++)n[a]=arguments[a]
if(!t){t=true
r=e.apply(null,n)}return r}}
var De=function(e,t){for(var r=0;r<e.length;r++){var n=e[r]
if(n.test(t))return n}return}
var Ne=function(e,t){var r=De(e,t)
if(!r)return{major:0,minor:0}
var n=function(e){return Number(t.replace(r,"$"+e))}
return _e(n(1),n(2))}
var Me=function(e,t){var r=String(t).toLowerCase()
if(0===e.length)return Pe()
return Ne(e,r)}
var Pe=function(){return _e(0,0)}
var _e=function(e,t){return{major:e,minor:t}}
var Oe={nu:_e,detect:Me,unknown:Pe}
var Fe="Edge"
var Le="Chrome"
var Ue="IE"
var Qe="Opera"
var ze="Firefox"
var je="Safari"
var He=function(e,t){return function(){return t===e}}
var We=function(){return Ve({current:void 0,version:Oe.unknown()})}
var Ve=function(e){var t=e.current
var r=e.version
return{current:t,version:r,isEdge:He(Fe,t),isChrome:He(Le,t),isIE:He(Ue,t),isOpera:He(Qe,t),isFirefox:He(ze,t),isSafari:He(je,t)}}
var Ge={unknown:We,nu:Ve,edge:I(Fe),chrome:I(Le),ie:I(Ue),opera:I(Qe),firefox:I(ze),safari:I(je)}
var Ye="Windows"
var Je="iOS"
var qe="Android"
var Ke="Linux"
var Xe="OSX"
var Ze="Solaris"
var $e="FreeBSD"
var et=function(e,t){return function(){return t===e}}
var tt=function(){return rt({current:void 0,version:Oe.unknown()})}
var rt=function(e){var t=e.current
var r=e.version
return{current:t,version:r,isWindows:et(Ye,t),isiOS:et(Je,t),isAndroid:et(qe,t),isOSX:et(Xe,t),isLinux:et(Ke,t),isSolaris:et(Ze,t),isFreeBSD:et($e,t)}}
var nt={unknown:tt,nu:rt,windows:I(Ye),ios:I(Je),android:I(qe),linux:I(Ke),osx:I(Xe),solaris:I(Ze),freebsd:I($e)}
var at=function(e,t,r){var n=e.isiOS()&&true===/ipad/i.test(r)
var a=e.isiOS()&&!n
var o=e.isAndroid()&&3===e.version.major
var i=e.isAndroid()&&4===e.version.major
var u=n||o||i&&true===/mobile/i.test(r)
var s=e.isiOS()||e.isAndroid()
var l=s&&!u
var c=t.isSafari()&&e.isiOS()&&false===/safari/i.test(r)
return{isiPad:I(n),isiPhone:I(a),isTablet:I(u),isPhone:I(l),isTouch:I(s),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:I(c)}}
var ot=function(e,t){var r=String(t).toLowerCase()
return Z(e,function(e){return e.search(r)})}
var it=function(e,t){return ot(e,t).map(function(e){var r=Oe.detect(e.versionRegexes,t)
return{current:e.name,version:r}})}
var ut=function(e,t){return ot(e,t).map(function(e){var r=Oe.detect(e.versionRegexes,t)
return{current:e.name,version:r}})}
var st={detectBrowser:it,detectOs:ut}
var lt=function(e,t){return-1!==e.indexOf(t)}
var ct=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/
var ft=function(e){return function(t){return lt(t,e)}}
var dt=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){var t=lt(e,"edge/")&&lt(e,"chrome")&&lt(e,"safari")&&lt(e,"applewebkit")
return t}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,ct],search:function(e){return lt(e,"chrome")&&!lt(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return lt(e,"msie")||lt(e,"trident")}},{name:"Opera",versionRegexes:[ct,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:ft("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:ft("firefox")},{name:"Safari",versionRegexes:[ct,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(lt(e,"safari")||lt(e,"mobile/"))&&lt(e,"applewebkit")}}]
var vt=[{name:"Windows",search:ft("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return lt(e,"iphone")||lt(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:ft("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:ft("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:ft("linux"),versionRegexes:[]},{name:"Solaris",search:ft("sunos"),versionRegexes:[]},{name:"FreeBSD",search:ft("freebsd"),versionRegexes:[]}]
var mt={browsers:I(dt),oses:I(vt)}
var gt=function(e){var t=mt.browsers()
var r=mt.oses()
var n=st.detectBrowser(t,e).fold(Ge.unknown,Ge.nu)
var a=st.detectOs(r,e).fold(nt.unknown,nt.nu)
var o=at(a,n,e)
return{browser:n,os:a,deviceType:o}}
var pt={detect:gt}
var At=Se(function(){var e=navigator.userAgent
return pt.detect(e)})
var ht={detect:At}
var bt=function(e,t){var r=t||document
var n=r.createElement("div")
n.innerHTML=e
if(!n.hasChildNodes()||n.childNodes.length>1){console.error("HTML does not have a single root node",e)
throw"HTML must have a single root node"}return Et(n.childNodes[0])}
var yt=function(e,t){var r=t||document
var n=r.createElement(e)
return Et(n)}
var wt=function(e,t){var r=t||document
var n=r.createTextNode(e)
return Et(n)}
var Et=function(e){if(null===e||void 0===e)throw new Error("Node cannot be null or undefined")
return{dom:I(e)}}
var xt=function(e,t,r){var n=e.dom()
return Q.from(n.elementFromPoint(t,r)).map(Et)}
var Ct={fromHtml:bt,fromTag:yt,fromText:wt,fromDom:Et,fromPoint:xt}
Node.ATTRIBUTE_NODE
Node.CDATA_SECTION_NODE
Node.COMMENT_NODE
Node.DOCUMENT_NODE
Node.DOCUMENT_TYPE_NODE
Node.DOCUMENT_FRAGMENT_NODE
var kt=Node.ELEMENT_NODE
Node.TEXT_NODE
Node.PROCESSING_INSTRUCTION_NODE
Node.ENTITY_REFERENCE_NODE
Node.ENTITY_NODE
Node.NOTATION_NODE
var Bt=kt
var Tt=function(e,t){var r=e.dom()
if(r.nodeType!==Bt)return false
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")}
var Rt=function(e,t){return e.dom()===t.dom()}
var It=ht.detect().browser
It.isIE()
var St=Tt
var Dt=Object.keys
var Nt=function(e,t){var r=Dt(e)
for(var n=0,a=r.length;n<a;n++){var o=r[n]
var i=e[o]
t(i,o,e)}}
var Mt=function(e){var t=e.dom().nodeName
return t.toLowerCase()}
var Pt=function(e,t,r){if(!(H(r)||W(r)||G(r))){console.error("Invalid call to Attr.set. Key ",t,":: Value ",r,":: Element ",e)
throw new Error("Attribute value was not simple")}e.setAttribute(t,r+"")}
var _t=function(e,t){var r=e.dom()
Nt(t,function(e,t){Pt(r,t,e)})}
var Ot=function(e){return X(e.dom().attributes,function(e,t){e[t.name]=t.value
return e},{})}
var Ft=function(){var e=[]
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(){var t=[]
for(var r=0;r<arguments.length;r++)t[r]=arguments[r]
if(e.length!==t.length)throw new Error('Wrong number of arguments to struct. Expected "['+e.length+']", got '+t.length+" arguments")
var n={}
J(e,function(e,r){n[e]=I(t[r])})
return n}}
var Lt=function(e){var t=e.dom()
return Q.from(t.parentNode).map(Ct.fromDom)}
var Ut=function(e){var t=e.dom()
return Y(t.childNodes,Ct.fromDom)}
var Qt=function(e,t){var r=e.dom().childNodes
return Q.from(r[t]).map(Ct.fromDom)}
var zt=function(e){return Qt(e,0)}
var jt=function(e){return Qt(e,e.dom().childNodes.length-1)}
Ft("element","offset")
var Ht=function(e,t){var r=Lt(e)
r.each(function(r){r.dom().insertBefore(t.dom(),e.dom())})}
var Wt=function(e,t){e.dom().appendChild(t.dom())}
var Vt=function(e,t){J(t,function(t){Ht(e,t)})}
var Gt=function(e,t){J(t,function(t){Wt(e,t)})}
var Yt=function(e){var t=e.dom()
null!==t.parentNode&&t.parentNode.removeChild(t)}
var Jt=function(e,t){return Ct.fromDom(e.dom().cloneNode(t))}
var qt=function(e){return Jt(e,true)}
var Kt=function(e,t){var r=Ct.fromTag(t)
var n=Ot(e)
_t(r,n)
return r}
var Xt=function(e,t){var r=Kt(e,t)
Ht(e,r)
var n=Ut(e)
Gt(r,n)
Yt(e)
return r}
var Zt=tinymce.util.Tools.resolve("tinymce.Env")
var $t=i.DOM
var er=function(e,t,r){var n,a
var o=$t.createFragment()
var i
var u=e.schema.getBlockElements()
e.settings.forced_root_block&&(r=r||e.settings.forced_root_block)
if(r){a=$t.create(r)
a.tagName===e.settings.forced_root_block&&$t.setAttribs(a,e.settings.forced_root_block_attrs)
w.isBlock(t.firstChild,u)||o.appendChild(a)}if(t)while(n=t.firstChild){var s=n.nodeName
i||"SPAN"===s&&"bookmark"===n.getAttribute("data-mce-type")||(i=true)
if(w.isBlock(n,u)){o.appendChild(n)
a=null}else if(r){if(!a){a=$t.create(r)
o.appendChild(a)}a.appendChild(n)}else o.appendChild(n)}e.settings.forced_root_block?i||Zt.ie&&!(Zt.ie>10)||a.appendChild($t.create("br",{"data-mce-bogus":"1"})):o.appendChild($t.create("br"))
return o}
var tr={createNewTextBlock:er}
var rr=i.DOM
var nr=function(e,t,r,n){var a,i,u,s
var l=function(e){o.each(u,function(t){e.parentNode.insertBefore(t,r.parentNode)})
rr.remove(e)}
u=rr.select('span[data-mce-type="bookmark"]',t)
n=n||tr.createNewTextBlock(e,r)
a=rr.createRng()
a.setStartAfter(r)
a.setEndAfter(t)
i=a.extractContents()
for(s=i.firstChild;s;s=s.firstChild)if("LI"===s.nodeName&&e.dom.isEmpty(s)){rr.remove(s)
break}e.dom.isEmpty(i)||rr.insertAfter(i,t)
rr.insertAfter(n,t)
w.isEmpty(e.dom,r.parentNode)&&l(r.parentNode)
rr.remove(r)
w.isEmpty(e.dom,t)&&rr.remove(t)}
var ar={splitList:nr}
var or=function(e,t){var r=[]
for(var n=0;n<e.length;n++){var a=e[n]
if(!a.isSome())return Q.none()
r.push(a.getOrDie())}return Q.some(t.apply(null,r))}
var ir=function(e,t){var r=t||document
var n=r.createDocumentFragment()
J(e,function(e){n.appendChild(e.dom())})
return Ct.fromDom(n)}
var ur=function(e){return void 0!==e.style}
var sr=function(e,t,r){if(!H(r)){console.error("Invalid call to CSS.set. Property ",t,":: Value ",r,":: Element ",e)
throw new Error("CSS value must be a string: "+r)}ur(e)&&e.style.setProperty(t,r)}
var lr=function(e,t,r){var n=e.dom()
sr(n,t,r)}
var cr=function(e,t){var r={list:Ct.fromTag(t,e),item:Ct.fromTag("li",e)}
Wt(r.list,r.item)
return r}
var fr=function(e,t){Wt(e.item,t.list)}
var dr=function(e,t,r){var n=[]
var a=function(t){var a=cr(e,r)
oe(n).each(function(e){return fr(e,a)})
n.push(a)}
for(var o=0;o<t;o++)a(o)
return n}
var vr=function(e,t){Mt(e.list).toUpperCase()!==t.listType&&(e.list=Xt(e.list,t.listType))
_t(e.list,t.listAttributes)}
var mr=function(e,t,r){var n=Ct.fromTag("li",e)
_t(n,t)
Gt(n,r)
return n}
var gr=function(e,t){Wt(e.list,t)
e.item=t}
var pr=function(e,t,r){var n=t.slice(0,r.depth)
oe(n).each(function(t){gr(t,mr(e,r.itemAttributes,r.content))
vr(t,r)})
return n}
var Ar=function(e,t){oe(e).each(function(e){_t(e.list,t.listAttributes)
_t(e.item,t.itemAttributes)
Gt(e.item,t.content)})
for(var r=0;r<e.length-1;r++)lr(e[r].item,"list-style-type","none")}
var hr=function(e,t,r){var n=dr(e,r.depth-t.length,r.listType)
Ar(n,r)
or([oe(t),ae(n)],fr)
return t.concat(n)}
var br=function(e,t){var r=X(t,function(t,r){return r.depth>t.length?hr(e,t,r):pr(e,t,r)},[])
return ae(r).map(function(e){return e.list})}
var yr=function(e){return e.depth>0}
var wr=function(e){return e.isSelected}
var Er=function(e,t){switch(e){case"Indent":t.depth++
break
case"Outdent":t.depth--
break
case"Flatten":t.depth=0}}
var xr=Object.prototype.hasOwnProperty
var Cr=function(e,t){return t}
var kr=function(e){return function(){var t=new Array(arguments.length)
for(var r=0;r<t.length;r++)t[r]=arguments[r]
if(0===t.length)throw new Error("Can't merge zero objects")
var n={}
for(var a=0;a<t.length;a++){var o=t[a]
for(var i in o)xr.call(o,i)&&(n[i]=e(n[i],o[i]))}return n}}
var Br=kr(Cr)
var Tr=function(e,t){e.listType=t.listType
e.listAttributes=Br({},t.listAttributes)}
var Rr=function(e,t){var r=t.depth-1
e[r].each(function(e){return Tr(t,e)})
var n=e.slice(0,r)
n.push(Q.some(t))
return n}
var Ir=function(e,t){var r=e.slice(0)
var n=t.depth-e.length
for(var a=1;a<n;a++)r.push(Q.none())
r.push(Q.some(t))
return r}
var Sr=function(e){X(e,function(e,t){return t.depth>e.length?Ir(e,t):Rr(e,t)},[])}
var Dr=function(e){var t=e
var r=function(){return t}
var n=function(e){t=e}
var a=function(){return Dr(r())}
return{get:r,set:n,clone:a}}
var Nr;(function(e){e["OL"]="OL"
e["UL"]="UL"
e["DL"]="DL"})(Nr||(Nr={}))
var Mr=function(e){switch(Mt(e)){case"ol":return Q.some(Nr.OL)
case"ul":return Q.some(Nr.UL)
case"dl":return Q.some(Nr.DL)
default:return Q.none()}}
var Pr=function(e){return St(e,"OL,UL,DL")}
var _r=function(e){return zt(e).map(Pr).getOr(false)}
var Or=function(e){return jt(e).map(Pr).getOr(false)}
var Fr=function(e){var t=Ut(e)
var r=t.length+(Or(e)?-1:0)
return Y(t.slice(0,r),qt)}
var Lr=function(e,t,r){var n=Lt(e)
return{depth:t,isSelected:r,content:Fr(e),listType:n.bind(Mr).getOr(Nr.OL),listAttributes:n.map(Ot).getOr({}),itemAttributes:Ot(e)}}
var Ur=function(e,t,r,n){var a=S(Qr,e,t,r)
var o=function(e){return t.each(function(t){Rt("Start"===e?t.start:t.end,n)&&r.set("Start"===e)})}
return zt(n).filter(Pr).fold(function(){o("Start")
var t=Lr(n,e,r.get())
o("End")
var i=jt(n).filter(Pr).map(a).getOr([])
return[t].concat(i)},a)}
var Qr=function(e,t,r,n){var a=e+1
return te(Ut(n),function(e){return Pr(e)?Qr(a,t,r,e):Ur(a,t,r,e)})}
var zr=function(e,t){var r=Dr(false)
var n=0
return Y(e,function(e){return{entries:Qr(n,t,r,e),sourceList:e}})}
var jr=function(e,t){return Y(t,function(t){var r=ir(t.content)
return Ct.fromDom(tr.createNewTextBlock(e,r.dom()))})}
var Hr=function(e,t){Sr(t)
return br(e.contentDocument,t).toArray()}
var Wr=function(e,t){return te(K(t,yr),function(t){var r=ae(t).map(yr).getOr(false)
return r?Hr(e,t):jr(e,t)})}
var Vr=function(e,t){J(q(e,wr),function(e){return Er(t,e)})}
var Gr=function(e){var t=Y(Ie.getSelectedListItems(e),Ct.fromDom)
return or([Z(t,D(_r)),Z(ne(t),D(_r))],function(e,t){return{start:e,end:t}})}
var Yr=function(e,t,r){var n=zr(t,Gr(e))
J(n,function(t){Vr(t.entries,r)
Vt(t.sourceList,Wr(e,t.entries))
Yt(t.sourceList)})}
var Jr=function(e,t){St(t,"DD")?Xt(t,"DT"):St(t,"DT")&&Lt(t).each(function(r){return ar.splitList(e,r.dom(),t.dom())})}
var qr=function(e){St(e,"DT")&&Xt(e,"DD")}
var Kr=function(e,t,r){J(r,"Indent"===t?qr:function(t){return Jr(e,t)})}
var Xr=function(e,t){var r=Y(Ie.getSelectedDlItems(e),Ct.fromDom)
var n=Y(Ie.getSelectedListRoots(e),Ct.fromDom)
if(r.length||n.length){var a=e.selection.getBookmark()
Kr(e,t,r)
Yr(e,n,t)
e.selection.moveToBookmark(a)
e.selection.setRng(C.normalizeRange(e.selection.getRng()))
e.nodeChanged()}}
var Zr=function(e){Xr(e,"Indent")}
var $r=function(e){Xr(e,"Outdent")}
var en=function(e){Xr(e,"Flatten")}
var tn=function(e,t,r){var n=r["list-style-type"]?r["list-style-type"]:null
e.setStyle(t,"list-style-type",n)}
var rn=function(e,t){o.each(t,function(t,r){e.setAttribute(r,t)})}
var nn=function(e,t,r){rn(t,r["list-attributes"])
o.each(e.select("li",t),function(e){rn(e,r["list-item-attributes"])})}
var an=function(e,t,r){tn(e,t,r)
nn(e,t,r)}
var on=function(e,t,r){o.each(r,function(r){var n
return e.setStyle(t,(n={},n[r]="",n))})}
var un=function(e,t,r,n){var a,o
a=t[r?"startContainer":"endContainer"]
o=t[r?"startOffset":"endOffset"]
1===a.nodeType&&(a=a.childNodes[Math.min(o,a.childNodes.length-1)]||a)
!r&&w.isBr(a.nextSibling)&&(a=a.nextSibling)
while(a.parentNode!==n){if(w.isTextBlock(e,a))return a
if(/^(TD|TH)$/.test(a.parentNode.nodeName))return a
a=a.parentNode}return a}
var sn=function(e,t,r){var n=[],i=e.dom
var u=un(e,t,true,r)
var s=un(e,t,false,r)
var l
var c=[]
for(var f=u;f;f=f.nextSibling){c.push(f)
if(f===s)break}o.each(c,function(t){if(w.isTextBlock(e,t)){n.push(t)
l=null
return}if(i.isBlock(t)||w.isBr(t)){w.isBr(t)&&i.remove(t)
l=null
return}var o=t.nextSibling
if(a.isBookmarkNode(t)&&(w.isTextBlock(e,o)||!o&&t.parentNode===r)){l=null
return}if(!l){l=i.create("p")
t.parentNode.insertBefore(l,t)
n.push(l)}l.appendChild(t)})
return n}
var ln=function(e,t,r){var n=e.getStyle(t,"list-style-type")
var a=r?r["list-style-type"]:""
a=null===a?"":a
return n===a}
var cn=function(e,t,r){void 0===r&&(r={})
var n=e.selection.getRng(true)
var a
var i="LI"
var u=Ie.getClosestListRootElm(e,e.selection.getStart(true))
var s=e.dom
if("false"===s.getContentEditable(e.selection.getNode()))return
t=t.toUpperCase()
"DL"===t&&(i="DT")
a=R.createBookmark(n)
o.each(sn(e,n,u),function(n){var a,o
o=n.previousSibling
if(o&&w.isListNode(o)&&o.nodeName===t&&ln(s,o,r)){a=o
n=s.rename(n,i)
o.appendChild(n)}else{a=s.create(t)
n.parentNode.insertBefore(a,n)
a.appendChild(n)
n=s.rename(n,i)}on(s,n,["margin","margin-right","margin-bottom","margin-left","margin-top","padding","padding-right","padding-bottom","padding-left","padding-top"])
an(s,a,r)
gn(e.dom,a)})
e.selection.setRng(R.resolveBookmark(a))}
var fn=function(e,t){return e&&t&&w.isListNode(e)&&e.nodeName===t.nodeName}
var dn=function(e,t,r){var n=e.getStyle(t,"list-style-type",true)
var a=e.getStyle(r,"list-style-type",true)
return n===a}
var vn=function(e,t){return e.className===t.className}
var mn=function(e,t,r){return fn(t,r)&&dn(e,t,r)&&vn(t,r)}
var gn=function(e,t){var r,n
r=t.nextSibling
if(mn(e,t,r)){while(n=r.firstChild)t.appendChild(n)
e.remove(r)}r=t.previousSibling
if(mn(e,t,r)){while(n=r.lastChild)t.insertBefore(n,t.firstChild)
e.remove(r)}}
var pn=function(e,t,r,n){if(t.nodeName!==r){var a=e.rename(t,r)
an(e,a,n)}else an(e,t,n)}
var An=function(e,t,r,n,a){if(t.nodeName!==n||hn(a)){var i=R.createBookmark(e.selection.getRng(true))
o.each([t].concat(r),function(t){pn(e.dom,t,n,a)})
e.selection.setRng(R.resolveBookmark(i))}else en(e)}
var hn=function(e){return"list-style-type"in e}
var bn=function(e,t,r,n){if(t===e.getBody())return
if(t)if(t.nodeName!==r||hn(n)){var a=R.createBookmark(e.selection.getRng(true))
an(e.dom,t,n)
gn(e.dom,e.dom.rename(t,r))
e.selection.setRng(R.resolveBookmark(a))}else en(e)
else cn(e,r,n)}
var yn=function(e,t,r){var n=Ie.getParentList(e)
var a=Ie.getSelectedSubLists(e)
r=r||{}
n&&a.length>0?An(e,n,a,t,r):bn(e,n,t,r)}
var wn={toggleList:yn,mergeWithAdjacentLists:gn}
var En=i.DOM
var xn=function(e,t){var r
var n=t.parentNode
if("LI"===n.nodeName&&n.firstChild===t){r=n.previousSibling
if(r&&"LI"===r.nodeName){r.appendChild(t)
w.isEmpty(e,n)&&En.remove(n)}else En.setStyle(n,"listStyleType","none")}if(w.isListNode(n)){r=n.previousSibling
r&&"LI"===r.nodeName&&r.appendChild(t)}}
var Cn=function(e,t){o.each(o.grep(e.select("ol,ul",t)),function(t){xn(e,t)})}
var kn={normalizeList:xn,normalizeLists:Cn}
var Bn=function(e,n,a,o){var i=n.startContainer
var u=n.startOffset
var s,l
if(3===i.nodeType&&(a?u<i.data.length:u>0))return i
s=e.schema.getNonEmptyElements()
1===i.nodeType&&(i=t.getNode(i,u))
l=new r(i,o)
a&&w.isBogusBr(e.dom,i)&&l.next()
while(i=l[a?"next":"prev2"]()){if("LI"===i.nodeName&&!i.hasChildNodes())return i
if(s[i.nodeName])return i
if(3===i.nodeType&&i.data.length>0)return i}}
var Tn=function(e,t){var r=t.childNodes
return 1===r.length&&!w.isListNode(r[0])&&e.isBlock(r[0])}
var Rn=function(e,t){Tn(e,t)&&e.remove(t.firstChild,true)}
var In=function(e,t,r){var n,a
a=Tn(e,r)?r.firstChild:r
Rn(e,t)
if(!w.isEmpty(e,t,true))while(n=t.firstChild)a.appendChild(n)}
var Sn=function(e,t,r){var n,a
var o=t.parentNode
if(!w.isChildOfBody(e,t)||!w.isChildOfBody(e,r))return
w.isListNode(r.lastChild)&&(a=r.lastChild)
o===r.lastChild&&w.isBr(o.previousSibling)&&e.remove(o.previousSibling)
n=r.lastChild
n&&w.isBr(n)&&t.hasChildNodes()&&e.remove(n)
w.isEmpty(e,r,true)&&e.$(r).empty()
In(e,t,r)
a&&r.appendChild(a)
e.remove(t)
w.isEmpty(e,o)&&o!==e.getRoot()&&e.remove(o)}
var Dn=function(e,t,r){e.dom.$(r).empty()
Sn(e.dom,t,r)
e.selection.setCursorLocation(r)}
var Nn=function(e,t,r,n){var a=e.dom
if(a.isEmpty(n))Dn(e,r,n)
else{var o=R.createBookmark(t)
Sn(a,r,n)
e.selection.setRng(R.resolveBookmark(o))}}
var Mn=function(e,t,r,n){var a=R.createBookmark(t)
Sn(e.dom,r,n)
var o=R.resolveBookmark(a)
e.selection.setRng(o)}
var Pn=function(e,t){var r=e.dom,n=e.selection
var a=n.getStart()
var o=Ie.getClosestListRootElm(e,a)
var i=r.getParent(n.getStart(),"LI",o)
var u,s,l
if(i){u=i.parentNode
if(u===e.getBody()&&w.isEmpty(r,u))return true
s=C.normalizeRange(n.getRng(true))
l=r.getParent(Bn(e,s,t,o),"LI",o)
if(l&&l!==i){t?Nn(e,s,l,i):Mn(e,s,i,l)
return true}if(!l&&!t){en(e)
return true}}return false}
var _n=function(e,t,r){var n=e.getParent(t.parentNode,e.isBlock,r)
e.remove(t)
n&&e.isEmpty(n)&&e.remove(n)}
var On=function(e,t){var r=e.dom
var n=e.selection.getStart()
var a=Ie.getClosestListRootElm(e,n)
var o=r.getParent(n,r.isBlock,a)
if(o&&r.isEmpty(o)){var i=C.normalizeRange(e.selection.getRng(true))
var u=r.getParent(Bn(e,i,t,a),"LI",a)
if(u){e.undoManager.transact(function(){_n(r,o,a)
wn.mergeWithAdjacentLists(r,u.parentNode)
e.selection.select(u,true)
e.selection.collapse(t)})
return true}}return false}
var Fn=function(e,t){return Pn(e,t)||On(e,t)}
var Ln=function(e){var t=e.selection.getStart()
var r=Ie.getClosestListRootElm(e,t)
var n=e.dom.getParent(t,"LI,DT,DD",r)
if(n||Ie.getSelectedListItems(e).length>0){e.undoManager.transact(function(){e.execCommand("Delete")
kn.normalizeLists(e.dom,e.getBody())})
return true}return false}
var Un=function(e,t){return e.selection.isCollapsed()?Fn(e,t):Ln(e)}
var Qn=function(e){e.on("keydown",function(t){t.keyCode===n.BACKSPACE?Un(e,false)&&t.preventDefault():t.keyCode===n.DELETE&&Un(e,true)&&t.preventDefault()})}
var zn={setup:Qn,backspaceDelete:Un}
var jn=function(e){return{backspaceDelete:function(t){zn.backspaceDelete(e,t)}}}
var Hn={get:jn}
var Wn=function(e,t){return function(){var r=e.dom.getParent(e.selection.getStart(),"UL,OL,DL")
return r&&r.nodeName===t}}
var Vn=function(e){e.on("BeforeExecCommand",function(t){var r=t.command.toLowerCase()
"indent"===r?Zr(e):"outdent"===r&&$r(e)})
e.addCommand("InsertUnorderedList",function(t,r){wn.toggleList(e,"UL",r)})
e.addCommand("InsertOrderedList",function(t,r){wn.toggleList(e,"OL",r)})
e.addCommand("InsertDefinitionList",function(t,r){wn.toggleList(e,"DL",r)})
e.addCommand("RemoveList",function(){en(e)})
e.addQueryStateHandler("InsertUnorderedList",Wn(e,"UL"))
e.addQueryStateHandler("InsertOrderedList",Wn(e,"OL"))
e.addQueryStateHandler("InsertDefinitionList",Wn(e,"DL"))}
var Gn={register:Vn}
var Yn=function(e){return e.getParam("lists_indent_on_tab",true)}
var Jn={shouldIndentOnTab:Yn}
var qn=function(e){e.on("keydown",function(t){if(t.keyCode!==n.TAB||n.metaKeyPressed(t))return
if(Ie.isList(e)){t.preventDefault()
e.undoManager.transact(function(){t.shiftKey?$r(e):Zr(e)})}})}
var Kn=function(e){Jn.shouldIndentOnTab(e)&&qn(e)
zn.setup(e)}
var Xn={setup:Kn}
var Zn=function(e,t){for(var r=0;r<e.length;r++){var n=e[r]
if(t(n))return r}return-1}
var $n=function(e,t){return function(r){var n=r.control
e.on("NodeChange",function(e){var r=Zn(e.parents,w.isTableCellNode)
var a=-1!==r?e.parents.slice(0,r):e.parents
var i=o.grep(a,w.isListNode)
n.active(i.length>0&&i[0].nodeName===t)})}}
var ea=function(e){var t=function(e,t){var r=e.settings.plugins?e.settings.plugins:""
return-1!==o.inArray(r.split(/[ ,]/),t)}
if(!t(e,"advlist")){e.addButton("numlist",{active:false,title:"Numbered list",cmd:"InsertOrderedList",onPostRender:$n(e,"OL")})
e.addButton("bullist",{active:false,title:"Bullet list",cmd:"InsertUnorderedList",onPostRender:$n(e,"UL")})}e.addButton("indent",{icon:"indent",title:"Increase indent",cmd:"Indent"})}
var ta={register:ea}
e.add("lists",function(e){Xn.setup(e)
ta.register(e)
Gn.register(e)
return Hn.get(e)})}()},JOgE:function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
var t=tinymce.util.Tools.resolve("tinymce.Env")
var r=function(e){return e.getParam("autolink_pattern",/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i)}
var n=function(e){return e.getParam("default_link_target","")}
var a={getAutoLinkPattern:r,getDefaultLinkTarget:n}
var o=function(e,t){return e===t||" "===e||160===e.charCodeAt(0)}
var i=function(e){d(e,-1,"(")}
var u=function(e){d(e,0,"")}
var s=function(e){d(e,-1,"")}
var l=function(e,t){t<0&&(t=0)
if(3===e.nodeType){var r=e.data.length
t>r&&(t=r)}return t}
var c=function(e,t,r){1!==t.nodeType||t.hasChildNodes()?e.setStart(t,l(t,r)):e.setStartBefore(t)}
var f=function(e,t,r){1!==t.nodeType||t.hasChildNodes()?e.setEnd(t,l(t,r)):e.setEndAfter(t)}
var d=function(e,t,r){var n,i,u,s,l,d,v,m,g,p
var A=a.getAutoLinkPattern(e)
var h=a.getDefaultLinkTarget(e)
if("A"===e.selection.getNode().tagName)return
n=e.selection.getRng(true).cloneRange()
if(n.startOffset<5){m=n.endContainer.previousSibling
if(!m){if(!n.endContainer.firstChild||!n.endContainer.firstChild.nextSibling)return
m=n.endContainer.firstChild.nextSibling}g=m.length
c(n,m,g)
f(n,m,g)
if(n.endOffset<5)return
i=n.endOffset
s=m}else{s=n.endContainer
if(3!==s.nodeType&&s.firstChild){while(3!==s.nodeType&&s.firstChild)s=s.firstChild
if(3===s.nodeType){c(n,s,0)
f(n,s,s.nodeValue.length)}}i=1===n.endOffset?2:n.endOffset-1-t}u=i
do{c(n,s,i>=2?i-2:0)
f(n,s,i>=1?i-1:0)
i-=1
p=n.toString()}while(" "!==p&&""!==p&&160!==p.charCodeAt(0)&&i-2>=0&&p!==r)
if(o(n.toString(),r)){c(n,s,i)
f(n,s,u)
i+=1}else if(0===n.startOffset){c(n,s,0)
f(n,s,u)}else{c(n,s,i)
f(n,s,u)}d=n.toString()
"."===d.charAt(d.length-1)&&f(n,s,u-1)
d=n.toString().trim()
v=d.match(A)
if(v){"www."===v[1]?v[1]="http://www.":/@$/.test(v[1])&&!/^mailto:/.test(v[1])&&(v[1]="mailto:"+v[1])
l=e.selection.getBookmark()
e.selection.setRng(n)
e.execCommand("createlink",false,v[1]+v[2])
h&&e.dom.setAttrib(e.selection.getNode(),"target",h)
e.selection.moveToBookmark(l)
e.nodeChanged()}}
var v=function(e){var r
e.on("keydown",function(t){if(13===t.keyCode)return s(e)})
if(t.ie){e.on("focus",function(){if(!r){r=true
try{e.execCommand("AutoUrlDetect",false,true)}catch(e){}}})
return}e.on("keypress",function(t){if(41===t.keyCode)return i(e)})
e.on("keyup",function(t){if(32===t.keyCode)return u(e)})}
var m={setup:v}
e.add("autolink",function(e){m.setup(e)})}()},JVSA:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=n(r("q1tI"))
var d=r("R7S1")
var v=a(r("kqqL"))
var m=a(r("BAch"))
var g=function(e){(0,l.default)(t,e)
function t(){var e
var r;(0,o.default)(this,t)
for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i]
r=(0,u.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(a)))
r.handleImageClick=function(e){e.preventDefault()
r.props.onImageEmbed(r.props.image)}
r.onDrag=function(e){(0,v.default)(e,(0,d.renderImage)(r.props.image))}
return r}(0,i.default)(t,[{key:"imgTitle",value:function(){return(0,m.default)("Click to embed { imageName }",{imageName:this.props.image.display_name})}},{key:"renderImg",value:function(){var e=this.props.image
return f.default.createElement("img",{draggable:true,onDragStart:this.onDrag,src:e.thumbnail_url,alt:e.display_name,title:this.imgTitle(),style:{maxHeight:50,maxWidth:200}})}},{key:"render",value:function(){var e=(0,m.default)("Click to embed image")
return f.default.createElement("a",{href:this.props.image,role:"button",title:e,draggable:false,onDragStart:this.onDrag,onClick:this.handleImageClick,style:p},f.default.createElement("div",{style:{minHeight:"50px"}},this.renderImg()),f.default.createElement("div",{style:{wordBreak:"break-all"}},this.props.image.display_name))}}])
t.displayName="UploadedImage"
return t}(f.Component)
g.propTypes={image:c.default.shape({id:c.default.number.isRequired,filename:c.default.string,display_name:c.default.string.isRequired,preview_url:c.default.string.isRequired,thumbnail_url:c.default.string,href:c.default.string}).isRequired,onImageEmbed:c.default.func.isRequired}
var p={cursor:"pointer",overflow:"hidden",border:"1px solid #ccc",margin:"3px",padding:"3px",float:"left"}
var A=g
t.default=A},"K2W/":function(e,t,r){"use strict"
function n(e){return e&&e.__esModule?e:{default:e}}var a=r("q1tI")
var o=n(a)
var i=r("i8i4")
var u=r("17x9")
var s=n(u)
var l=r("fhzG")
var c=n(l)
var f=r("Y+p1")
var d=n(f)
var v=r("uM7l")
var m=n(v)
var g=r("2n0+")
var p=n(g)
var A=r("6x+X")
var h=n(A)
var b=["focusin","focusout","click","dblclick","mousedown","mouseup","mousemove","mouseover","beforepaste","paste","cut","copy","selectionchange","mouseout","mouseenter","mouseleave","keydown","keypress","keyup","contextmenu","dragend","dragover","draggesture","dragdrop","drop","drag","BeforeRenderUI","SetAttrib","PreInit","PostRender","init","deactivate","activate","NodeChange","BeforeExecCommand","ExecCommand","show","hide","ProgressState","LoadContent","SaveContent","BeforeSetContent","SetContent","BeforeGetContent","GetContent","VisualAid","remove","submit","reset","BeforeAddUndo","AddUndo","change","undo","redo","ClearUndos","ObjectSelected","ObjectResizeStart","ObjectResized","PreProcess","PostProcess","focus","blur","dirty"]
var y=b.map(function(e){return"on"+(0,h["default"])(e)})
var w=(0,c["default"])({displayName:"TinyMCE",propTypes:{config:s["default"].object,content:s["default"].string,id:s["default"].string,className:s["default"].string,name:s["default"].string},getDefaultProps:function(){return{config:{},content:""}},componentWillMount:function(){this.id=this.id||this.props.id||(0,p["default"])()},componentDidMount:function(){var e=(0,m["default"])(this.props.config)
this._init(e,this.props.content)},componentWillReceiveProps:function(e){if(!(0,d["default"])(this.props.config,e.config)||!(0,d["default"])(this.props.id,e.id)){this.id=e.id
this._init((0,m["default"])(e.config),e.content)
return}},shouldComponentUpdate:function(e){return!(0,d["default"])(this.props.config,e.config)},componentWillUnmount:function(){this._remove()},render:function(){return this.props.config.inline?o["default"].createElement("div",{id:this.id,className:this.props.className,dangerouslySetInnerHTML:{__html:this.props.content}}):o["default"].createElement("textarea",{id:this.id,className:this.props.className,name:this.props.name,defaultValue:this.props.content})},_init:function(e,t){var r=this
this._isInit&&this._remove();(0,i.findDOMNode)(this).style.hidden="hidden"
var n=e.setup
var a="function"===typeof n
e.selector="#"+this.id
e.setup=function(e){b.forEach(function(t,n){e.on(t,function(t){var a=r.props[y[n]]
"function"===typeof a&&a(t,e)})})
"undefined"!==typeof t&&e.on("init",function(){e.setContent(t)})
a&&n(e)}
tinymce.init(e);(0,i.findDOMNode)(this).style.hidden=""
this._isInit=true},_remove:function(){tinymce.EditorManager.execCommand("mceRemoveEditor",true,this.id)
this._isInit=false}})
y.forEach(function(e){w.propTypes[e]=s["default"].func})
e.exports=w},KRyp:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=c
var a=r("ANjH")
var o=n(r("oTko"))
var i=n(r("klMn"))
var u=n(r("sINF"))
var s=r("FkO2")
var l=n(r("pA8t"))
function c(e,t){var r=(0,a.createStore)((0,s.batching)(o.default),t||(0,i.default)(e),(0,a.applyMiddleware)(u.default,s.batch));(0,l.default)(r)
return r}},KuFL:function(e,t,r){"use strict"
var n={ar:"ar_SA",bg:"bg_BG",cs:"cs",cy:"cy",da:"da",de:"de",el:"el",en:"en_US","en-AU":"en_GB","en-GB":"en_GB",es:"es",fa:"fa_IR","fa-IR":"fa_IR",fr:"fr_FR","fr-CA":"fr_FR",he:"he_IL",ht:"en_US",hu:"hu_HU",hy:"hy",is:"en_US",it:"it",ja:"ja",ko:"ko_KR",mi:"en_US",nb:"nb_NO",nl:"nl",nn:"nb_NO",pl:"pl",pt:"pt_PT","pt-BR":"pt_BR",ro:"ro",ru:"ru_RU",sq:"en_US",sr:"sr",sv:"sv_SE",tr:"tr_TR","uk-UA":"uk_UA",vi:"vi_VN","zh-Hans":"zh_CN","zh-Hant":"zh_TW"}
function a(e){e.match("-x-")&&(e=e.split("-x-")[0])
return n[e]}e.exports=a},LUxv:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var n=r("/7Jz")
var a=n.StyleSheet.create({container:{marginBottom:"1em",overflow:"auto"},list:{margin:"0 0 0 .8em",padding:"0 0 0 .2em",borderLeft:"1px dotted #ccc",listStyle:"none outside",flex:1},node:{margin:0,padding:0,display:"block"},loading:{marginLeft:".8em",borderLeft:"1px dotted #ccc",padding:".5em .7em"},button:{display:"block",padding:".3em",borderRadius:".3em",backgroundColor:"transparent",textAlign:"left",margin:0,fontFamily:"inherit",fontSize:"inherit",flex:1,width:"100%",boxSizing:"border-box",border:"1px solid transparent",transition:"background-color 0.3s",wordBreak:"break-all",":hover":{backgroundColor:"#eee"},":focus":{border:"1px solid #000",outline:0},":active":{backgroundColor:"#ddd"}},file:{":active":{backgroundColor:"#008a14"}}})
t.default=a},M22B:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var o=a(r("MVZn"))
var i=n(r("xYFW"))
var u={id:null,name:null,loadingCount:0,loading:false,requested:false,expanded:false,filesUrl:null,foldersUrl:null,parentId:null,fileIds:[],folderIds:[]}
function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u
var t=arguments.length>1?arguments[1]:void 0
var r
switch(t.type){case i.ADD_FOLDER:return(0,o.default)({},e,{id:t.id,name:t.name,parentId:t.parentId,filesUrl:t.filesUrl,foldersUrl:t.foldersUrl})
case i.RECEIVE_FILES:r=e.loadingCount-1
return(0,o.default)({},e,{loadingCount:r,loading:!!r,fileIds:e.fileIds.concat(t.fileIds)})
case i.INSERT_FILE:return(0,o.default)({},e,{fileIds:e.fileIds.concat(t.fileId)})
case i.RECEIVE_SUBFOLDERS:r=e.loadingCount-1
return(0,o.default)({},e,{loadingCount:r,loading:!!r,folderIds:e.folderIds.concat(t.folderIds)})
case i.REQUEST_FILES:case i.REQUEST_SUBFOLDERS:r=e.loadingCount+1
return(0,o.default)({},e,{requested:true,loadingCount:r,loading:!!r})
case i.TOGGLE:return(0,o.default)({},e,{expanded:!e.expanded})
default:return e}}},M6qK:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=t.styles=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=a(r("17x9"))
var d=n(r("q1tI"))
var v=a(r("+eFp"))
var m=a(r("BAch"))
var g=a(r("VMdx"))
var p=a(r("a6bM"))
var A=a(r("yGSU"))
var h=a(r("rMyL"))
var b=r("/7Jz")
var y=function(e){(0,c.default)(t,e)
function t(){var e
var r;(0,i.default)(this,t)
for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o]
r=(0,s.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(a)))
r.handleLinkClick=function(e,t){if(r.props.onLinkClick){e.preventDefault()
r.props.onLinkClick(t)}}
return r}(0,u.default)(t,[{key:"validScrollTarget",value:function(e,t){return t.scrolled<1&&(e===window||e.style&&"auto"===e.style.overflow)}},{key:"componentDidUpdate",value:function(){if(this.props.newPageLinkExpanded&&this.pageInput){var e=this.pageInput.parentElement&&this.pageInput.parentElement.parentElement?this.pageInput.parentElement.parentElement:null
this.pageInput.focus()
e&&h.default.scrollIntoViewWDelay(e,{time:100,validTarget:this.validScrollTarget,align:{top:.75}})}}},{key:"toggleForm",value:function(e){e.preventDefault()
this.props.toggleNewPageForm()}},{key:"isGroup",value:function(){if("group"===this.props.contextType)return true
return false}},{key:"getContextHref",value:function(){var e="/"
this.isGroup()?e+="groups/":e+="courses/"
e+=this.props.contextId+"/"
e+="pages/"
return e}},{key:"handleSubmit",value:function(e){e.preventDefault()
if(this.state&&this.state.newPageTitle){var t=this.state.newPageTitle.trim()
var r=this.getContextHref()+encodeURIComponent(t)+"?titleize=0"
this.handleLinkClick(e,{href:r,title:t})
this.props.toggleNewPageForm()}}},{key:"updateNewPageTitle",value:function(e){this.setState((0,o.default)({},this.state,{newPageTitle:e.target.value}))}},{key:"renderForm",value:function(){var e=this
if(this.props.newPageLinkExpanded)return d.default.createElement("form",{id:"new_page_drop_down",style:{margin:"5px"},"aria-expanded":this.props.newPageLinkExpanded,onSubmit:this.handleSubmit.bind(this)},d.default.createElement(p.default,{id:"new-page-name-input",label:(0,m.default)("What would you like to call the new page?"),onChange:this.updateNewPageTitle.bind(this),ref:function(t){return e.pageInput=t?t._input:null},size:"small"}),d.default.createElement(g.default,{size:"small",id:"rcs-LinkToNewPage-submit",type:"submit"},(0,m.default)("Insert Link")))
return null}},{key:"render",value:function(){var e=this
return d.default.createElement("div",{className:(0,b.css)(w.container)},d.default.createElement(g.default,{size:"small",id:"rcs-LinkToNewPage-btn-link",type:"button",variant:"link",onClick:function(t){return e.toggleForm(t)}},d.default.createElement(A.default,{className:(0,b.css)(w.icon)})," ",(0,m.default)("Link to a New Page")),d.default.createElement(v.default,{transitionName:{enter:(0,b.css)(w.slideDownEnter),enterActive:(0,b.css)(w.slideDownEnter,w.slideDownEnterActive),leave:(0,b.css)(w.slideDownLeave),leaveActive:(0,b.css)(w.slideDownLeave,w.slideDownLeaveActive)},transitionEnterTimeout:500,transitionLeaveTimeout:300},this.renderForm()))}}])
t.displayName="LinkToNewPage"
return t}(d.Component)
y.propTypes={onLinkClick:f.default.func,toggleNewPageForm:f.default.func.isRequired,newPageLinkExpanded:f.default.bool,contextId:f.default.string.isRequired,contextType:f.default.string.isRequired}
var w=b.StyleSheet.create({slideDownEnter:{maxHeight:0,overflowY:"hidden"},slideDownEnterActive:{maxHeight:"500px",transition:"max-height 500ms ease-in"},slideDownLeave:{maxHeight:"500px",overflowY:"hidden"},slideDownLeaveActive:{maxHeight:0,transition:"max-height 300ms ease-in"},container:{marginTop:"5px"},icon:{verticalAlign:"middle"}})
t.styles=w
var E=y
t.default=E},NPeJ:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=u
var a=n(r("MVZn"))
var o=r("cKlk")
var i={}
function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case o.RECEIVE_SESSION:return(0,a.default)({},e,t.data)
default:return e}}},NpmH:function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
var t=tinymce.util.Tools.resolve("tinymce.Env")
var r=tinymce.util.Tools.resolve("tinymce.util.Tools")
var n=function(e){return e.getParam("media_scripts")}
var a=function(e){return e.getParam("audio_template_callback")}
var o=function(e){return e.getParam("video_template_callback")}
var i=function(e){return e.getParam("media_live_embeds",true)}
var u=function(e){return e.getParam("media_filter_html",true)}
var s=function(e){return e.getParam("media_url_resolver")}
var l=function(e){return e.getParam("media_alt_source",true)}
var c=function(e){return e.getParam("media_poster",true)}
var f=function(e){return e.getParam("media_dimensions",true)}
var d={getScripts:n,getAudioTemplateCallback:a,getVideoTemplateCallback:o,hasLiveEmbeds:i,shouldFilterHtml:u,getUrlResolver:s,hasAltSource:l,hasPoster:c,hasDimensions:f}
var v=tinymce.util.Tools.resolve("tinymce.html.SaxParser")
var m=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils")
var g=function(e,t){if(e)for(var r=0;r<e.length;r++)if(-1!==t.indexOf(e[r].filter))return e[r]}
var p={getVideoScriptMatch:g}
var A=function(e){return e.replace(/px$/,"")}
var h=function(e){return/^[0-9.]+$/.test(e)?e+"px":e}
var b=function(e){return function(t){return t?A(t.style[e]):""}}
var y=function(e){return function(t,r){t&&(t.style[e]=h(r))}}
var w={getMaxWidth:b("maxWidth"),getMaxHeight:b("maxHeight"),setMaxWidth:y("maxWidth"),setMaxHeight:y("maxHeight")}
var E=m.DOM
var x=function(e){return E.getAttrib(e,"data-ephox-embed-iri")}
var C=function(e){var t=E.createFragment(e)
return""!==x(t.firstChild)}
var k=function(e,t){var n={}
v({validate:false,allow_conditional_comments:true,special:"script,noscript",start:function(t,a){n.source1||"param"!==t||(n.source1=a.map.movie)
if("iframe"===t||"object"===t||"embed"===t||"video"===t||"audio"===t){n.type||(n.type=t)
n=r.extend(a.map,n)}if("script"===t){var o=p.getVideoScriptMatch(e,a.map.src)
if(!o)return
n={type:"script",source1:a.map.src,width:o.width,height:o.height}}"source"===t&&(n.source1?n.source2||(n.source2=a.map.src):n.source1=a.map.src)
"img"!==t||n.poster||(n.poster=a.map.src)}}).parse(t)
n.source1=n.source1||n.src||n.data
n.source2=n.source2||""
n.poster=n.poster||""
return n}
var B=function(e){var t=E.createFragment(e)
var r=t.firstChild
return{type:"ephox-embed-iri",source1:x(r),source2:"",poster:"",width:w.getMaxWidth(r),height:w.getMaxHeight(r)}}
var T=function(e,t){return C(t)?B(t):k(e,t)}
var R={htmlToData:T}
var I=tinymce.util.Tools.resolve("tinymce.util.Promise")
var S=function(e){var t={mp3:"audio/mpeg",wav:"audio/wav",mp4:"video/mp4",webm:"video/webm",ogg:"video/ogg",swf:"application/x-shockwave-flash"}
var r=e.toLowerCase().split(".").pop()
var n=t[r]
return n||""}
var D={guess:S}
var N=tinymce.util.Tools.resolve("tinymce.html.Writer")
var M=tinymce.util.Tools.resolve("tinymce.html.Schema")
var P=m.DOM
var _=function(e,t){var r
var n
var a
var o
for(r in t){a=""+t[r]
if(e.map[r]){n=e.length
while(n--){o=e[n]
if(o.name===r)if(a){e.map[r]=a
o.value=a}else{delete e.map[r]
e.splice(n,1)}}}else if(a){e.push({name:r,value:a})
e.map[r]=a}}}
var O=function(e){var t=N()
var r=v(t)
r.parse(e)
return t.getContent()}
var F=function(e,t,r){var n=N()
var a=0
var o
v({validate:false,allow_conditional_comments:true,special:"script,noscript",comment:function(e){n.comment(e)},cdata:function(e){n.cdata(e)},text:function(e,t){n.text(e,t)},start:function(e,i,u){switch(e){case"video":case"object":case"embed":case"img":case"iframe":void 0!==t.height&&void 0!==t.width&&_(i,{width:t.width,height:t.height})}if(r)switch(e){case"video":_(i,{poster:t.poster,src:""})
t.source2&&_(i,{src:""})
break
case"iframe":_(i,{src:t.source1})
break
case"source":a++
if(a<=2){_(i,{src:t["source"+a],type:t["source"+a+"mime"]})
if(!t["source"+a])return}break
case"img":if(!t.poster)return
o=true}n.start(e,i,u)},end:function(e){if("video"===e&&r)for(var i=1;i<=2;i++)if(t["source"+i]){var u=[]
u.map={}
if(a<i){_(u,{src:t["source"+i],type:t["source"+i+"mime"]})
n.start("source",u,true)}}if(t.poster&&"object"===e&&r&&!o){var s=[]
s.map={}
_(s,{src:t.poster,width:t.width,height:t.height})
n.start("img",s,true)}n.end(e)}},M({})).parse(e)
return n.getContent()}
var L=function(e){var t=P.createFragment(e)
return""!==P.getAttrib(t.firstChild,"data-ephox-embed-iri")}
var U=function(e,t){var r=P.createFragment(e)
var n=r.firstChild
w.setMaxWidth(n,t.width)
w.setMaxHeight(n,t.height)
return O(n.outerHTML)}
var Q=function(e,t,r){return L(e)?U(e,t):F(e,t,r)}
var z={updateHtml:Q}
var j=[{regex:/youtu\.be\/([\w\-_\?&=.]+)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:true},{regex:/youtube\.com(.+)v=([^&]+)(&([a-z0-9&=\-_]+))?/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$2?$4",allowFullscreen:true},{regex:/youtube.com\/embed\/([a-z0-9\?&=\-_]+)/i,type:"iframe",w:560,h:314,url:"//www.youtube.com/embed/$1",allowFullscreen:true},{regex:/vimeo\.com\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc",allowFullscreen:true},{regex:/vimeo\.com\/(.*)\/([0-9]+)/,type:"iframe",w:425,h:350,url:"//player.vimeo.com/video/$2?title=0&amp;byline=0",allowFullscreen:true},{regex:/maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,type:"iframe",w:425,h:350,url:'//maps.google.com/maps/ms?msid=$2&output=embed"',allowFullscreen:false},{regex:/dailymotion\.com\/video\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:true},{regex:/dai\.ly\/([^_]+)/,type:"iframe",w:480,h:270,url:"//www.dailymotion.com/embed/video/$1",allowFullscreen:true}]
var H=function(e,t){var r=e.regex.exec(t)
var n=e.url
var a=function(e){n=n.replace("$"+e,function(){return r[e]?r[e]:""})}
for(var o=0;o<r.length;o++)a(o)
return n.replace(/\?$/,"")}
var W=function(e){var t=j.filter(function(t){return t.regex.test(e)})
return t.length>0?r.extend({},t[0],{url:H(t[0],e)}):null}
var V=function(e){var t=e.allowFullscreen?' allowFullscreen="1"':""
return'<iframe src="'+e.source1+'" width="'+e.width+'" height="'+e.height+'"'+t+"></iframe>"}
var G=function(e){var t='<object data="'+e.source1+'" width="'+e.width+'" height="'+e.height+'" type="application/x-shockwave-flash">'
e.poster&&(t+='<img src="'+e.poster+'" width="'+e.width+'" height="'+e.height+'" />')
t+="</object>"
return t}
var Y=function(e,t){return t?t(e):'<audio controls="controls" src="'+e.source1+'">'+(e.source2?'\n<source src="'+e.source2+'"'+(e.source2mime?' type="'+e.source2mime+'"':"")+" />\n":"")+"</audio>"}
var J=function(e,t){return t?t(e):'<video width="'+e.width+'" height="'+e.height+'"'+(e.poster?' poster="'+e.poster+'"':"")+' controls="controls">\n<source src="'+e.source1+'"'+(e.source1mime?' type="'+e.source1mime+'"':"")+" />\n"+(e.source2?'<source src="'+e.source2+'"'+(e.source2mime?' type="'+e.source2mime+'"':"")+" />\n":"")+"</video>"}
var q=function(e){return'<script src="'+e.source1+'"><\/script>'}
var K=function(e,t){var n=r.extend({},t)
if(!n.source1){r.extend(n,R.htmlToData(d.getScripts(e),n.embed))
if(!n.source1)return""}n.source2||(n.source2="")
n.poster||(n.poster="")
n.source1=e.convertURL(n.source1,"source")
n.source2=e.convertURL(n.source2,"source")
n.source1mime=D.guess(n.source1)
n.source2mime=D.guess(n.source2)
n.poster=e.convertURL(n.poster,"poster")
var a=W(n.source1)
if(a){n.source1=a.url
n.type=a.type
n.allowFullscreen=a.allowFullscreen
n.width=n.width||a.w
n.height=n.height||a.h}if(n.embed)return z.updateHtml(n.embed,n,true)
var o=p.getVideoScriptMatch(d.getScripts(e),n.source1)
if(o){n.type="script"
n.width=o.width
n.height=o.height}var i=d.getAudioTemplateCallback(e)
var u=d.getVideoTemplateCallback(e)
n.width=n.width||300
n.height=n.height||150
r.each(n,function(t,r){n[r]=e.dom.encode(t)})
return"iframe"===n.type?V(n):"application/x-shockwave-flash"===n.source1mime?G(n):-1!==n.source1mime.indexOf("audio")?Y(n,i):"script"===n.type?q(n):J(n,u)}
var X={dataToHtml:K}
var Z={}
var $=function(e,t,r){return new I(function(n,a){var o=function(r){r.html&&(Z[e.source1]=r)
return n({url:e.source1,html:r.html?r.html:t(e)})}
Z[e.source1]?o(Z[e.source1]):r({url:e.source1},o,a)})}
var ee=function(e,t){return new I(function(r){r({html:t(e),url:e.source1})})}
var te=function(e){return function(t){return X.dataToHtml(e,t)}}
var re=function(e,t){var r=d.getUrlResolver(e)
return r?$(t,te(e),r):ee(t,te(e))}
var ne=function(e){return Z.hasOwnProperty(e)}
var ae={getEmbedHtml:re,isCached:ne}
var oe=function(e,t){e.state.set("oldVal",e.value())
t.state.set("oldVal",t.value())}
var ie=function(e,t){var r=e.find("#width")[0]
var n=e.find("#height")[0]
var a=e.find("#constrain")[0]
r&&n&&a&&t(r,n,a.checked())}
var ue=function(e,t,r){var n=e.state.get("oldVal")
var a=t.state.get("oldVal")
var o=e.value()
var i=t.value()
if(r&&n&&a&&o&&i)if(o!==n){i=Math.round(o/n*i)
isNaN(i)||t.value(i)}else{o=Math.round(i/a*o)
isNaN(o)||e.value(o)}oe(e,t)}
var se=function(e){ie(e,oe)}
var le=function(e){ie(e,ue)}
var ce=function(e){var t=function(){e(function(e){le(e)})}
return{type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:5,onchange:t,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:5,onchange:t,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:true,text:"Constrain proportions"}]}}
var fe={createUi:ce,syncSize:se,updateSize:le}
var de=t.ie&&t.ie<=8?"onChange":"onInput"
var ve=function(e){return function(t){var r=t&&t.msg?"Media embed handler error: "+t.msg:"Media embed handler threw unknown error."
e.notificationManager.open({type:"error",text:r})}}
var me=function(e){var t=e.selection.getNode()
var r=t.getAttribute("data-ephox-embed-iri")
if(r)return{source1:r,"data-ephox-embed-iri":r,width:w.getMaxWidth(t),height:w.getMaxHeight(t)}
return t.getAttribute("data-mce-object")?R.htmlToData(d.getScripts(e),e.serializer.serialize(t,{selection:true})):{}}
var ge=function(e){var t=e.selection.getNode()
if(t.getAttribute("data-mce-object")||t.getAttribute("data-ephox-embed-iri"))return e.selection.getContent()}
var pe=function(e,t){return function(n){var a=n.html
var o=e.find("#embed")[0]
var i=r.extend(R.htmlToData(d.getScripts(t),a),{source1:n.url})
e.fromJSON(i)
if(o){o.value(a)
fe.updateSize(e)}}}
var Ae=function(e,t){var r
var n
var a=e.dom.select("img[data-mce-object]")
for(r=0;r<t.length;r++)for(n=a.length-1;n>=0;n--)t[r]===a[n]&&a.splice(n,1)
e.selection.select(a[0])}
var he=function(e,t){var r=e.dom.select("img[data-mce-object]")
e.insertContent(t)
Ae(e,r)
e.nodeChanged()}
var be=function(e,t){var r=e.toJSON()
r.embed=z.updateHtml(r.embed,r)
r.embed&&ae.isCached(r.source1)?he(t,r.embed):ae.getEmbedHtml(t,r).then(function(e){he(t,e.html)}).catch(ve(t))}
var ye=function(e,t){r.each(t,function(t,r){e.find("#"+r).value(t)})}
var we=function(e){var t
var n
var a=[{name:"source1",type:"filepicker",filetype:"media",size:40,autofocus:true,label:"Source",onpaste:function(){setTimeout(function(){ae.getEmbedHtml(e,t.toJSON()).then(pe(t,e)).catch(ve(e))},1)},onchange:function(r){ae.getEmbedHtml(e,t.toJSON()).then(pe(t,e)).catch(ve(e))
ye(t,r.meta)},onbeforecall:function(e){e.meta=t.toJSON()}}]
var o=[]
var i=function(e){e(t)
n=t.toJSON()
t.find("#embed").value(z.updateHtml(n.embed,n))}
d.hasAltSource(e)&&o.push({name:"source2",type:"filepicker",filetype:"media",size:40,label:"Alternative source"})
d.hasPoster(e)&&o.push({name:"poster",type:"filepicker",filetype:"image",size:40,label:"Poster"})
if(d.hasDimensions(e)){var u=fe.createUi(i)
a.push(u)}n=me(e)
var s={id:"mcemediasource",type:"textbox",flex:1,name:"embed",value:ge(e),multiline:true,rows:5,label:"Source"}
var l=function(){n=r.extend({},R.htmlToData(d.getScripts(e),this.value()))
this.parent().parent().fromJSON(n)}
s[de]=l
var c=[{title:"General",type:"form",items:a},{title:"Embed",type:"container",layout:"flex",direction:"column",align:"stretch",padding:10,spacing:10,items:[{type:"label",text:"Paste your embed code below:",forId:"mcemediasource"},s]}]
o.length>0&&c.push({title:"Advanced",type:"form",items:o})
t=e.windowManager.open({title:"Insert/edit media",data:n,bodyType:"tabpanel",body:c,onSubmit:function(){fe.updateSize(t)
be(t,e)}})
fe.syncSize(t)}
var Ee={showDialog:we}
var xe=function(e){var t=function(){Ee.showDialog(e)}
return{showDialog:t}}
var Ce={get:xe}
var ke=function(e){var t=function(){Ee.showDialog(e)}
e.addCommand("mceMedia",t)}
var Be={register:ke}
var Te=tinymce.util.Tools.resolve("tinymce.html.Node")
var Re=function(e,t){if(false===d.shouldFilterHtml(e))return t
var r=N()
var n
v({validate:false,allow_conditional_comments:false,special:"script,noscript",comment:function(e){r.comment(e)},cdata:function(e){r.cdata(e)},text:function(e,t){r.text(e,t)},start:function(t,a,o){n=true
if("script"===t||"noscript"===t)return
for(var i=0;i<a.length;i++){if(0===a[i].name.indexOf("on"))return
"style"===a[i].name&&(a[i].value=e.dom.serializeStyle(e.dom.parseStyle(a[i].value),t))}r.start(t,a,o)
n=false},end:function(e){if(n)return
r.end(e)}},M({})).parse(t)
return r.getContent()}
var Ie={sanitize:Re}
var Se=function(e,r){var n
var a=r.name
n=new Te("img",1)
n.shortEnded=true
Ne(e,r,n)
n.attr({width:r.attr("width")||"300",height:r.attr("height")||("audio"===a?"30":"150"),style:r.attr("style"),src:t.transparentSrc,"data-mce-object":a,class:"mce-object mce-object-"+a})
return n}
var De=function(e,t){var r
var n
var a
var o=t.name
r=new Te("span",1)
r.attr({contentEditable:"false",style:t.attr("style"),"data-mce-object":o,class:"mce-preview-object mce-object-"+o})
Ne(e,t,r)
n=new Te(o,1)
n.attr({src:t.attr("src"),allowfullscreen:t.attr("allowfullscreen"),style:t.attr("style"),class:t.attr("class"),width:t.attr("width"),height:t.attr("height"),frameborder:"0"})
a=new Te("span",1)
a.attr("class","mce-shim")
r.append(n)
r.append(a)
return r}
var Ne=function(e,t,r){var n
var a
var o
var i
var u
o=t.attributes
i=o.length
while(i--){n=o[i].name
a=o[i].value
if("width"!==n&&"height"!==n&&"style"!==n){"data"!==n&&"src"!==n||(a=e.convertURL(a,n))
r.attr("data-mce-p-"+n,a)}}u=t.firstChild&&t.firstChild.value
if(u){r.attr("data-mce-html",escape(Ie.sanitize(e,u)))
r.firstChild=null}}
var Me=function(e){while(e=e.parent)if(e.attr("data-ephox-embed-iri"))return true
return false}
var Pe=function(e){return function(r){var n=r.length
var a
var o
while(n--){a=r[n]
if(!a.parent)continue
if(a.parent.attr("data-mce-object"))continue
if("script"===a.name){o=p.getVideoScriptMatch(d.getScripts(e),a.attr("src"))
if(!o)continue}if(o){o.width&&a.attr("width",o.width.toString())
o.height&&a.attr("height",o.height.toString())}"iframe"===a.name&&d.hasLiveEmbeds(e)&&t.ceFalse?Me(a)||a.replace(De(e,a)):Me(a)||a.replace(Se(e,a))}}}
var _e={createPreviewIframeNode:De,createPlaceholderNode:Se,placeHolderConverter:Pe}
var Oe=function(e){e.on("preInit",function(){var t=e.schema.getSpecialElements()
r.each("video audio iframe object".split(" "),function(e){t[e]=new RegExp("</"+e+"[^>]*>","gi")})
var n=e.schema.getBoolAttrs()
r.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "),function(e){n[e]={}})
e.parser.addNodeFilter("iframe,video,audio,object,embed,script",_e.placeHolderConverter(e))
e.serializer.addAttributeFilter("data-mce-object",function(t,r){var n=t.length
var a
var o
var i
var u
var s
var l
var c
var f
while(n--){a=t[n]
if(!a.parent)continue
c=a.attr(r)
o=new Te(c,1)
if("audio"!==c&&"script"!==c){f=a.attr("class")
f&&-1!==f.indexOf("mce-preview-object")?o.attr({width:a.firstChild.attr("width"),height:a.firstChild.attr("height")}):o.attr({width:a.attr("width"),height:a.attr("height")})}o.attr({style:a.attr("style")})
u=a.attributes
i=u.length
while(i--){var d=u[i].name
0===d.indexOf("data-mce-p-")&&o.attr(d.substr(11),u[i].value)}"script"===c&&o.attr("type","text/javascript")
s=a.attr("data-mce-html")
if(s){l=new Te("#text",3)
l.raw=true
l.value=Ie.sanitize(e,unescape(s))
o.append(l)}a.replace(o)}})})
e.on("setContent",function(){e.$("span.mce-preview-object").each(function(t,r){var n=e.$(r)
0===n.find("span.mce-shim",r).length&&n.append('<span class="mce-shim"></span>')})})}
var Fe={setup:Oe}
var Le=function(e){e.on("ResolveName",function(e){var t
1===e.target.nodeType&&(t=e.target.getAttribute("data-mce-object"))&&(e.name=t)})}
var Ue={setup:Le}
var Qe=function(e){e.on("click keyup",function(){var t=e.selection.getNode()
t&&e.dom.hasClass(t,"mce-preview-object")&&e.dom.getAttrib(t,"data-mce-selected")&&t.setAttribute("data-mce-selected","2")})
e.on("ObjectSelected",function(e){var t=e.target.getAttribute("data-mce-object")
"audio"!==t&&"script"!==t||e.preventDefault()})
e.on("objectResized",function(e){var t=e.target
var r
if(t.getAttribute("data-mce-object")){r=t.getAttribute("data-mce-html")
if(r){r=unescape(r)
t.setAttribute("data-mce-html",escape(z.updateHtml(r,{width:e.width,height:e.height})))}}})}
var ze={setup:Qe}
var je=function(e){e.addButton("media",{tooltip:"Insert/edit media",cmd:"mceMedia",stateSelector:["img[data-mce-object]","span[data-mce-object]","div[data-ephox-embed-iri]"]})
e.addMenuItem("media",{icon:"media",text:"Media",cmd:"mceMedia",context:"insert",prependToContext:true})}
var He={register:je}
e.add("media",function(e){Be.register(e)
He.register(e)
Ue.setup(e)
Fe.setup(e)
ze.setup(e)
return Ce.get(e)})}()},OF0b:function(e,t,r){"use strict"
var n=r("TqRt")
var a=r("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.startLoading=b
t.stopLoading=y
t.receiveFolder=w
t.failFoldersLoad=E
t.startUpload=x
t.failUpload=C
t.quotaExceeded=k
t.completeUpload=B
t.openOrCloseUploadForm=T
t.processedFolderBatch=R
t.allUploadCompleteActions=I
t.embedUploadResult=S
t.fetchFolders=D
t.setUsageRights=N
t.getFileUrlIfMissing=M
t.generateThumbnailUrl=_
t.setAltText=O
t.handleFailures=F
t.uploadPreflight=L
t.STOP_LOADING=t.START_LOADING=t.QUOTA_EXCEEDED_UPLOAD=t.PROCESSED_FOLDER_BATCH=t.TOGGLE_UPLOAD_FORM=t.COMPLETE_FILE_UPLOAD=t.FAIL_FILE_UPLOAD=t.START_FILE_UPLOAD=t.FAIL_FOLDERS_LOAD=t.RECEIVE_FOLDER=void 0
var o=a(r("xYFW"))
var i=a(r("sQ/i"))
var u=n(r("hSMc"))
var s=r("aB9U")
var l="RECEIVE_FOLDER"
t.RECEIVE_FOLDER="RECEIVE_FOLDER"
var c="FAIL_FOLDERS_LOAD"
t.FAIL_FOLDERS_LOAD="FAIL_FOLDERS_LOAD"
var f="START_FILE_UPLOAD"
t.START_FILE_UPLOAD="START_FILE_UPLOAD"
var d="FAIL_FILE_UPLOAD"
t.FAIL_FILE_UPLOAD="FAIL_FILE_UPLOAD"
var v="COMPLETE_FILE_UPLOAD"
t.COMPLETE_FILE_UPLOAD="COMPLETE_FILE_UPLOAD"
var m="TOGGLE_UPLOAD_FORM"
t.TOGGLE_UPLOAD_FORM="TOGGLE_UPLOAD_FORM"
var g="PROCESSED_FOLDER_BATCH"
t.PROCESSED_FOLDER_BATCH="PROCESSED_FOLDER_BATCH"
var p="QUOTA_EXCEEDED_UPLOAD"
t.QUOTA_EXCEEDED_UPLOAD="QUOTA_EXCEEDED_UPLOAD"
var A="START_LOADING"
t.START_LOADING="START_LOADING"
var h="STOP_LOADING"
t.STOP_LOADING="STOP_LOADING"
function b(){return{type:A}}function y(){return{type:h}}function w(e){var t=e.id,r=e.name,n=e.parentId
return{type:l,id:t,name:r,parentId:n}}function E(e){return{type:c,error:e}}function x(e){return{type:f,file:e}}function C(e){return{type:d,error:e}}function k(e){return{type:p,error:e}}function B(e){return{type:v,results:e}}function T(){return{type:m}}function R(e){var t=e.folders
return{type:g,folders:t}}function I(e,t){var r=[]
r.push(B(e))
var n={id:e.id,name:e.display_name,url:e.preview_url,type:t.contentType,embed:(0,s.fileEmbed)(e)}
r.push(o.createAddFile(n))
r.push(o.createInsertFile(t.parentFolderId,e.id));/^image\//.test(e["content-type"])&&r.push(i.createAddImage(e))
return r}function S(e,t){var r=(0,s.fileEmbed)(e)
"images"!=t||"image"!=r.type||u.default.existingContentToLink()&&!u.default.existingContentToLinkIsImg()?u.default.insertLink({title:e.display_name,href:e.url,embed:r}):u.default.insertImage(e)
return e}function D(e){return function(t,r){t(b())
var n=r(),a=n.source,o=n.jwt,i=n.upload,u=n.host,s=n.contextId,l=n.contextType
if(e||i.folders&&0===Object.keys(i.folders).length)return a.fetchFolders({jwt:o,host:u,contextId:s,contextType:l},e).then(function(e){var n=e.folders,a=e.bookmark
t(n.map(w))
var o=r(),i=o.upload
t(R(i))
t(a?D(a):y())}).catch(function(e){t(E(e))})}}function N(e,t,r){var n=t.usageRights
n&&e.setUsageRights(r.id,n)
return r}function M(e,t){if(t.url)return Promise.resolve(t)
return e.getFile(t.id).then(function(e){t.url=e.url
return t})}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new FileReader
return new Promise(function(r,n){t.onerror=function(){t.abort()
n(new DOMException("Unable to parse file"))}
t.onload=function(){r(t.result)}
t.readAsDataURL(e)})}function _(e,t,r){return/^image\//.test(e["content-type"])?P(t,r).then(function(t){e.thumbnail_url=t
return e}):Promise.resolve(e)}function O(e,t){e&&(t.alt_text=e)
return t}function F(e,t){return e.response.json().then(function(r){"file size exceeds quota"===r.message?t(k(e)):t(C(e))}).catch(function(e){return t(C(e))})}function L(e,t){return function(r,n){var a=n(),o=a.source,i=a.jwt,u=a.host,s=a.contextId,l=a.contextType
var c=t.fileReader
r(x(t))
return o.preflightUpload(t,{jwt:i,host:u,contextId:s,contextType:l}).then(function(e){return o.uploadFRD(t.domObject,e)}).then(function(e){return N(o,t,e)}).then(function(e){return M(o,e)}).then(function(e){return _(e,t.domObject,c)}).then(function(e){return O(t.altText,e)}).then(function(t){return S(t,e)}).then(function(e){r(I(e,t))}).catch(function(e){return F(e,r)})}}},PGNS:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=l
var o=a(r("lSNA"))
var i=a(r("MVZn"))
var u=a(r("M22B"))
var s=n(r("xYFW"))
function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case s.ADD_FOLDER:case s.RECEIVE_FILES:case s.INSERT_FILE:case s.RECEIVE_SUBFOLDERS:case s.REQUEST_FILES:case s.REQUEST_SUBFOLDERS:case s.TOGGLE:return(0,i.default)({},e,(0,o.default)({},t.id,(0,u.default)(e[t.id],t)))
default:return e}}},"Q/zO":function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
var t=tinymce.util.Tools.resolve("tinymce.util.Tools")
var r=function(e){return e.getParam("noneditable_noneditable_class","mceNonEditable")}
var n=function(e){return e.getParam("noneditable_editable_class","mceEditable")}
var a=function(e){var t=e.getParam("noneditable_regexp",[])
return t&&t.constructor===RegExp?[t]:t}
var o={getNonEditableClass:r,getEditableClass:n,getNonEditableRegExps:a}
var i=function(e){return function(t){return-1!==(" "+t.attr("class")+" ").indexOf(e)}}
var u=function(e,t,r){return function(n){var a=arguments,o=a[a.length-2]
var i=o>0?t.charAt(o-1):""
if('"'===i)return n
if(">"===i){var u=t.lastIndexOf("<",o)
if(-1!==u){var s=t.substring(u,o)
if(-1!==s.indexOf('contenteditable="false"'))return n}}return'<span class="'+r+'" data-mce-content="'+e.dom.encode(a[0])+'">'+e.dom.encode("string"===typeof a[1]?a[1]:a[0])+"</span>"}}
var s=function(e,t,r){var n=t.length,a=r.content
if("raw"===r.format)return
while(n--)a=a.replace(t[n],u(e,a,o.getNonEditableClass(e)))
r.content=a}
var l=function(e){var r,n
var a="contenteditable"
r=" "+t.trim(o.getEditableClass(e))+" "
n=" "+t.trim(o.getNonEditableClass(e))+" "
var u=i(r)
var l=i(n)
var c=o.getNonEditableRegExps(e)
e.on("PreInit",function(){c.length>0&&e.on("BeforeSetContent",function(t){s(e,c,t)})
e.parser.addAttributeFilter("class",function(e){var t,r=e.length
while(r--){t=e[r]
u(t)?t.attr(a,"true"):l(t)&&t.attr(a,"false")}})
e.serializer.addAttributeFilter(a,function(e){var t,r=e.length
while(r--){t=e[r]
if(!u(t)&&!l(t))continue
if(c.length>0&&t.attr("data-mce-content")){t.name="#text"
t.type=3
t.raw=true
t.value=t.attr("data-mce-content")}else t.attr(a,null)}})})}
var c={setup:l}
e.add("noneditable",function(e){c.setup(e)})}()},Qy3N:function(e,t,r){"use strict"
var n=r("TqRt")
var a=n(r("dQCo"))
tinymce.create("tinymce.plugins.InstructureExternalTools",{init:function(e,t){(0,a.default)(e,document,t)},getInfo:function(){return{longname:"InstructureExternalTools",author:"Brian Whitmer",authorurl:"http://www.instructure.com",infourl:"http://www.instructure.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}})
tinymce.PluginManager.add("instructure_external_tools",tinymce.plugins.InstructureExternalTools)},R7S1:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.renderLink=u
t.renderLinkedImage=s
t.constructJSXImageElement=l
t.renderImage=c
var a=n(r("q1tI"))
var o=r("KAy6")
var i=n(r("BAch"))
function u(e){var t=e.href||e.url
var r=e.title||(0,i.default)({default:"Link",description:"Fallback title attribute on an unnamed link inserted from the sidebar."})
var n=e["data-preview-alt"]
var u=e.contents||r
return(0,o.renderToStaticMarkup)(a.default.createElement("a",{href:t,title:r,"data-preview-alt":n,className:e["class"],id:e["id"]},u))}function s(e,t){var r=e.getAttribute("href")
return(0,o.renderToStaticMarkup)(a.default.createElement("a",{href:r,"data-mce-href":r},l(t,{doNotLink:true})))}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var r=e.href||e.url
var n=a.default.createElement("img",{alt:e.title||e.display_name,src:r})
e.alt_text&&(n=e.alt_text.decorativeSelected?a.default.createElement("img",{alt:"","data-decorative":"true",src:r}):a.default.createElement("img",{alt:e.alt_text.altText,src:r}))
e.link&&!t.doNotLink&&(n=a.default.createElement("a",{href:e.link,target:"_blank"},n))
return n}function c(e){return(0,o.renderToStaticMarkup)(l(e))}},RO5r:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=n(r("MVZn"))
var o=r("sQ/i")
function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case o.ADD_IMAGE:var r=t.id,n=t.filename,i=t.display_name,u=t.preview_url,s=t.thumbnail_url
return(0,a.default)({},e,{records:e.records.concat({id:r,filename:n,display_name:i,preview_url:u,thumbnail_url:s,href:u})})
case o.REQUEST_IMAGES:return(0,a.default)({},e,{requested:true,isLoading:true})
case o.RECEIVE_IMAGES:var l=t.imageRecords
return(0,a.default)({},e,{records:e.records.concat(l),isLoading:false,bookmark:t.bookmark,hasMore:!!t.bookmark})
default:return e}}},TCUh:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=a
var n=r("xYFW")
function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case n.SET_ROOT:return t.id
default:return e}}},Tb6I:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.changeTab=s
t.changeAccordion=l
t.resetUI=c
t.hideSidebar=f
t.showSidebar=d
t.SHOW_SIDEBAR=t.HIDE_SIDEBAR=t.RESET_UI=t.CHANGE_ACCORDION=t.CHANGE_TAB=void 0
var n="CHANGE_TAB"
t.CHANGE_TAB="CHANGE_TAB"
var a="CHANGE_ACCORDION"
t.CHANGE_ACCORDION="CHANGE_ACCORDION"
var o="RESET_UI"
t.RESET_UI="RESET_UI"
var i="HIDE_SIDEBAR"
t.HIDE_SIDEBAR="HIDE_SIDEBAR"
var u="SHOW_SIDEBAR"
t.SHOW_SIDEBAR="SHOW_SIDEBAR"
function s(e){return{type:n,index:e}}function l(e){return{type:a,index:e}}function c(){return{type:o}}function f(){return{type:i}}function d(){return{type:u}}},TdXa:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=u
var a=n(r("lSNA"))
var o=n(r("MVZn"))
var i=r("xYFW")
function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case i.ADD_FILE:return(0,o.default)({},e,(0,a.default)({},t.id,{id:t.id,name:t.name,type:t.fileType,url:t.url,embed:t.embed}))
default:return e}}},TfMG:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e,t){var r=t.createEvent("CustomEvent")
r.initCustomEvent("tinyRCE/initRecord",true,true,{ed:e})
t.dispatchEvent(r)}},"U+tQ":function(e,t,r){"use strict"
var n=r("TqRt")
var a=n(r("dKDz"))
var o=n(r("BAch"))
var i=n(r("Boq2"))
tinymce.create("tinymce.plugins.InstructureLinks",{init:function(e){e.addCommand("instructureLinks",i.default.bind(this,e,document))
e.addButton("instructure_links",{title:(0,a.default)((0,o.default)({default:"Link to URL",description:"Title for RCE button to insert links to a URL"})),cmd:"instructureLinks",icon:"link"})},getInfo:function(){return{longname:"InstructureLinks",author:"Brian Whitmer",authorurl:"http://www.instructure.com",infourl:"http://www.instructure.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}})
tinymce.PluginManager.add("instructure_links",tinymce.plugins.InstructureLinks)},U93Q:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("17x9"))
var i=n(r("q1tI"))
var u=a(r("BAch"))
var s=a(r("qnOc"))
var l=r("/7Jz")
function c(e){var t=((0,l.css)(d.loading)+" "+e.className).trim()
return i.default.createElement("span",{className:t},i.default.createElement(s.default,null,(0,u.default)("Loading...")),i.default.createElement("span",{className:(0,l.css)(d.dot,d.dot0)}),i.default.createElement("span",{className:(0,l.css)(d.dot,d.dot1)}),i.default.createElement("span",{className:(0,l.css)(d.dot,d.dot2)}))}c.propTypes={className:o.default.string}
c.defaultProps={className:""}
var f={"0%":{opacity:0},"50%":{opacity:1},"100%":{opacity:0}}
var d=l.StyleSheet.create({loading:{display:"inline-flex",alignItems:"center",justifyContent:"space-around",width:"48px",height:"10px"},dot:{animationName:[f],animationDuration:"1.95s",animationIterationCount:"infinite",animationDirection:"linear",background:"#666",borderRadius:"8px",width:"10px",height:"10px",flex:"none"},dot0:{animationDelay:"-1.8s"},dot1:{animationDelay:"-1.6s"},dot2:{animationDelay:"-1.4s"}})
var v=c
t.default=v},URgk:function(e,t,r){(function(e){var n="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window
var a=Function.prototype.apply
t.setTimeout=function(){return new o(a.call(setTimeout,n,arguments),clearTimeout)}
t.setInterval=function(){return new o(a.call(setInterval,n,arguments),clearInterval)}
t.clearTimeout=t.clearInterval=function(e){e&&e.close()}
function o(e,t){this._id=e
this._clearFn=t}o.prototype.unref=o.prototype.ref=function(){}
o.prototype.close=function(){this._clearFn.call(n,this._id)}
t.enroll=function(e,t){clearTimeout(e._idleTimeoutId)
e._idleTimeout=t}
t.unenroll=function(e){clearTimeout(e._idleTimeoutId)
e._idleTimeout=-1}
t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))}
r("YBdB")
t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate
t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,r("yLpj"))},Vbms:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=t.styles=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=n(r("q1tI"))
var d=a(r("U93Q"))
var v=a(r("BAch"))
var m=a(r("VMdx"))
var g=r("/7Jz")
var p=function(e){(0,l.default)(t,e)
function t(e){var r;(0,o.default)(this,t)
r=(0,u.default)(this,(0,s.default)(t).call(this,e))
r.loadMore=function(e){r.setState({nextFocus:r.focusableElements().length})
r.props.loadMore(e)}
r.state={nextFocus:Infinity}
return r}(0,i.default)(t,[{key:"componentDidUpdate",value:function(){var e=this.focusableElements()
if(e.length>this.state.nextFocus){var t=e[this.state.nextFocus]
t&&t.focus()}}},{key:"focusableElements",value:function(){if(!this.props.focusSelector)return[]
return this.refs.parent.querySelectorAll(this.props.focusSelector)}},{key:"render",value:function(){var e=f.default.Children.count(this.props.children)>0
var t=this.props.isLoading?1:0
return f.default.createElement("div",{ref:"parent"},this.props.children,this.props.hasMore&&!this.props.isLoading&&f.default.createElement("div",{className:(0,g.css)(A.button)},f.default.createElement(m.default,{variant:"link",onClick:this.loadMore,fluidWidth:true},(0,v.default)("Load more results"))),e&&this.props.hasMore&&f.default.createElement("div",{"aria-hidden":!this.props.isLoading,className:(0,g.css)(A.loader),style:{opacity:t}},f.default.createElement(d.default,null)))}}])
t.displayName="LoadMore"
return t}(f.Component)
p.propTypes={hasMore:c.default.bool.isRequired,loadMore:c.default.func.isRequired,isLoading:c.default.bool,focusSelector:c.default.string,children:c.default.any}
var A=g.StyleSheet.create({loader:{display:"block",margin:"20px 0 40px 0",clear:"both",paddingRight:"30px",textAlign:"center",fontSize:"13px",height:"15px",color:"#666"},button:{textAlign:"center",marginTop:"1em",clear:"both"}})
t.styles=A
var h=p
t.default=h},VxtD:function(e,t,r){n=function(){return function(e){var t={}
function r(n){if(t[n])return t[n].exports
var a=t[n]={i:n,l:false,exports:{}}
e[n].call(a.exports,a,a.exports,r)
a.l=true
return a.exports}r.m=e
r.c=t
r.i=function(e){return e}
r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:false,enumerable:true,get:n})}
r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e}
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=14)}([function(e,t){e.exports=function(){var e=[]
e.toString=function(){var e=[]
for(var t=0;t<this.length;t++){var r=this[t]
r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")}
e.i=function(t,r){"string"===typeof t&&(t=[[null,t,""]])
var n={}
for(var a=0;a<this.length;a++){var o=this[a][0]
"number"===typeof o&&(n[o]=true)}for(a=0;a<t.length;a++){var i=t[a]
if("number"!==typeof i[0]||!n[i[0]]){r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")")
e.push(i)}}}
return e}},function(e,t){var r={},n=function(e){var t
return function(){"undefined"===typeof t&&(t=e.apply(this,arguments))
return t}},a=n(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),o=n(function(){return document.head||document.getElementsByTagName("head")[0]}),i=null,u=0,s=[]
e.exports=function(e,t){if("undefined"!==typeof DEBUG&&DEBUG&&"object"!==typeof document)throw new Error("The style-loader cannot be used in a non-browser environment")
t=t||{}
"undefined"===typeof t.singleton&&(t.singleton=a())
"undefined"===typeof t.insertAt&&(t.insertAt="bottom")
var n=c(e)
l(n,t)
return function(e){var a=[]
for(var o=0;o<n.length;o++){var i=n[o]
var u=r[i.id]
u.refs--
a.push(u)}if(e){var s=c(e)
l(s,t)}for(o=0;o<a.length;o++){u=a[o]
if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]()
delete r[u.id]}}}}
function l(e,t){for(var n=0;n<e.length;n++){var a=e[n]
var o=r[a.id]
if(o){o.refs++
for(var i=0;i<o.parts.length;i++)o.parts[i](a.parts[i])
for(;i<a.parts.length;i++)o.parts.push(g(a.parts[i],t))}else{var u=[]
for(i=0;i<a.parts.length;i++)u.push(g(a.parts[i],t))
r[a.id]={id:a.id,refs:1,parts:u}}}}function c(e){var t=[]
var r={}
for(var n=0;n<e.length;n++){var a=e[n]
var o=a[0]
var i=a[1]
var u=a[2]
var s=a[3]
var l={css:i,media:u,sourceMap:s}
r[o]?r[o].parts.push(l):t.push(r[o]={id:o,parts:[l]})}return t}function f(e,t){var r=o()
var n=s[s.length-1]
if("top"===e.insertAt){n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild)
s.push(t)}else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")
r.appendChild(t)}}function d(e){e.parentNode.removeChild(e)
var t=s.indexOf(e)
t>=0&&s.splice(t,1)}function v(e){var t=document.createElement("style")
t.type="text/css"
f(e,t)
return t}function m(e){var t=document.createElement("link")
t.rel="stylesheet"
f(e,t)
return t}function g(e,t){var r,n,a
if(t.singleton){var o=u++
r=i||(i=v(t))
n=h.bind(null,r,o,false)
a=h.bind(null,r,o,true)}else if(e.sourceMap&&"function"===typeof URL&&"function"===typeof URL.createObjectURL&&"function"===typeof URL.revokeObjectURL&&"function"===typeof Blob&&"function"===typeof btoa){r=m(t)
n=y.bind(null,r)
a=function(){d(r)
r.href&&URL.revokeObjectURL(r.href)}}else{r=v(t)
n=b.bind(null,r)
a=function(){d(r)}}n(e)
return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return
n(e=t)}else a()}}var p=(A=[],function(e,t){A[e]=t
return A.filter(Boolean).join("\n")})
var A
function h(e,t,r,n){var a=r?"":n.css
if(e.styleSheet)e.styleSheet.cssText=p(t,a)
else{var o=document.createTextNode(a)
var i=e.childNodes
i[t]&&e.removeChild(i[t])
i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function b(e,t){var r=t.css
var n=t.media
n&&e.setAttribute("media",n)
if(e.styleSheet)e.styleSheet.cssText=r
else{while(e.firstChild)e.removeChild(e.firstChild)
e.appendChild(document.createTextNode(r))}}function y(e,t){var r=t.css
var n=t.sourceMap
n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */")
var a=new Blob([r],{type:"text/css"})
var o=e.href
e.href=URL.createObjectURL(a)
o&&URL.revokeObjectURL(o)}},function(e,t){e.exports="data:image/gif;base64,R0lGODlhBwAHAIABAAAAAP///yH5BAEAAAEALAAAAAAHAAcAAAIMjGGJmMH9mHQ0AlYAADs="},function(e,t){e.exports="data:image/gif;base64,R0lGODlhEQANALMPAOXl5T8/P29vb7S0tFdXV/39/djY2N3d3crKyu/v7/f39/Ly8p2dnf///zMzMwAAACH5BAEAAA8ALAAAAAARAA0AAARF0MlJq3uutay75lmGNU9pjiNFCsipqhgxmO9HSgFTgtt9O4EBABWa3AiGwvBlfAgWisPOyCslDDSbSHTa+SzgpmdMbkQAADs="},function(e,t,r){t=e.exports=r(0)()
t.push([e.i,"body{background-color:#FFF;color:#000;font-family:sans-serif;scrollbar-3dlight-color:#F0F0EE;scrollbar-arrow-color:#676662;scrollbar-base-color:#F0F0EE;scrollbar-darkshadow-color:#DDD;scrollbar-face-color:#E0E0DD;scrollbar-highlight-color:#F0F0EE;scrollbar-shadow-color:#F0F0EE;scrollbar-track-color:#F5F5F5}.mce-object{border:1px dotted #3A3A3A;background:#d5d5d5 url("+r(3)+") no-repeat center}.mce-pagebreak{cursor:default;display:block;border:0;width:100%;height:5px;border:1px dashed #666;margin-top:15px;page-break-before:always}@media print{.mce-pagebreak{border:0}}.mce-item-anchor{cursor:default;display:inline-block;-webkit-user-select:all;-webkit-user-modify:read-only;-moz-user-select:all;-moz-user-modify:read-only;user-select:all;user-modify:read-only;width:9px!important;height:9px!important;border:1px dotted #3A3A3A;background:#d5d5d5 url("+r(2)+") no-repeat center}.mce-nbsp,.mce-shy{background:#AAA}.mce-shy::after{content:'-'}hr{cursor:default}.mce-match-marker{background:#AAA;color:#fff}.mce-match-marker-selected{background:#39f;color:#fff}.mce-spellchecker-word{border-bottom:2px solid red;cursor:default}.mce-spellchecker-grammar{border-bottom:2px solid green;cursor:default}.mce-item-table,.mce-item-table td,.mce-item-table th,.mce-item-table caption{border:1px dashed #BBB}td.mce-item-selected,th.mce-item-selected{background-color:#39f!important}.mce-edit-focus{outline:1px dotted #333}\n",""])},function(e,t,r){var n=0
var a
var o=r(10)
"string"===typeof o&&(o=[[e.i,o,""]])
t.use=t.ref=function(){if(!n++){t.locals=o.locals
a=r(1)(o,{})}return t}
t.unuse=t.unref=function(){if(!--n){a()
a=null}}},function(e,t,r){var n=0
var a
var o=r(11)
"string"===typeof o&&(o=[[e.i,o,""]])
t.use=t.ref=function(){if(!n++){t.locals=o.locals
a=r(1)(o,{})}return t}
t.unuse=t.unref=function(){if(!--n){a()
a=null}}},function(e,t,r){var n=0
var a
var o=r(12)
"string"===typeof o&&(o=[[e.i,o,""]])
t.use=t.ref=function(){if(!n++){t.locals=o.locals
a=r(1)(o,{})}return t}
t.unuse=t.unref=function(){if(!--n){a()
a=null}}},function(e,t){e.exports="data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAACSkAAsAAAAAJFgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIDJGNtYXAAAAFoAAAAbAAAAGzGrcGEZ2FzcAAAAdQAAAAIAAAACAAAABBnbHlmAAAB3AAAHwQAAB8ECUcewWhlYWQAACDgAAAANgAAADYHZ8B7aGhlYQAAIRgAAAAkAAAAJAerA/JobXR4AAAhPAAAAOQAAADk2gISm2xvY2EAACIgAAAAdAAAAHTQJNhabWF4cAAAIpQAAAAgAAAAIABJANBuYW1lAAAitAAAAc4AAAHO/kzcgXBvc3QAACSEAAAAIAAAACAAAwAAAAMD9wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA5gMDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAFAAAAAQABAAAwAAAAEAIOAo4DLgNeYD//3//wAAAAAAIOAA4CrgNOYD//3//wAB/+MgBCADIAIaNQADAAEAAAAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAABABAAAADwAOAAA4AEwAeADcAACURJyEiBhURFBYzITI2NQEzFSM1EyEROAExITgBMREzIxE0JiMhIgYVESMRMxUUFjMhMjY9ARcRA8Dg/bAhLy8hAuAhL/6AQECA/oABgIBAJhr+gBomQEAmGgFAGiaAUAJQ4C8h/SAhLy8hArDAwP2AAQD/AAEAGiYmGv8AAoDAGiYmGquA/hUAAwCAAAADgAOAABQAHgAuAAABJy4BIyEiBhURFBYzITI2NRE0JicHHgEXIzUeAR8BEyE4ATEROAExIREhETgBMQNThhJBGv5gGiYmGgKAGiYbEi4GCgO4ChEFhRv9gAGAAQACzYYSGyYa/QAaJiYaAiAaQRItBREKuAMKBoX9oAMA/wD+AAAAAAIAAP/ABAADwAAwADkAAAE1Jy4BJzcnBy4BLwEjBw4BBycHFw4BDwEVFx4BFwcXNx4BHwEzNz4BNxc3Jz4BPwElByMnNTczFxUEAJ8GEgtocYATKxcQoBAXKxOAcWgLEgafnwYSC2hxgBMrFxCgEBcrE4BxaAsSBp/+wICAgICAgAFwoBAXKxOAcWgLEgafnwYSC2hxgBMrFxCgEBcrE4BxaAsSBp+fBhILaHGAEysXEBCAgICAgIAAAAAABABAAEADwAMAAAMABwALAA8AABMhFSERIRUhESEVIREhFSFAA4D8gAOA/IACQP3AAkD9wAMAgP8AgAFAgP8AgAAAAAAEAEAAQAPAAwAAAwAHAAsADwAAEyEVIREhFSETIRUhESEVIUADgPyAA4D8gMACAP4AAgD+AAMAgP8AgAFAgP8AgAAAAAQAQABAA8ADAAADAAcACwAPAAATIRUhESEVIQEhFSERIRUhQAOA/IADgPyAAUACQP3AAkD9wAMAgP8AgAFAgP8AgAAABABAAEADwAMAAAMABwALAA8AABMhFSERIRUhESEVIREhFSFAA4D8gAOA/IADgPyAA4D8gAMAgP8AgAFAgP8AgAAAAAAEAIkAKQN3A2AAKgBAAE0AYwAAAS4BByc3MD4BJicJAQ4BHgExFwcmBgcOARcWNjc+ASc3FwYWFx4BNzYmJwUOAQcOASMiJicmNjc+ATMyFhceAQc3IiY1NDYzMhYVFAYjBQ4BIyImJy4BJyY2Nz4BMzIWFx4BBwNgIlYpP8AkGAww/sD+wDAMGCTAPylWIjkNLy+SOCMgBD8/BCAjOJIvLw05/gECEg8RKRMIFAgQCB4RKRQIFAgJBAGfGyUlGxslJRsBMwgUCBMpEQ8SAgEECQgUCBQpER4IEAEiIyAEP8AsSFww/sABQDBcSCzAPwQgIziSLy8NOSJWKT8/KVYiOQ0vL5I4WRIkEBATBQgQQx4REgQIChoIlyUbGyUlGxsl8wgFExAQJBIIGgoIBBIRHkMQAAUAQAAAA4ADgAAcACcALAAwADcAAAE1NCYrATU0JisBIgYdASMiBhURFBY7ARUhNxEjATgBMTM4ATEVIzUHNSEVIQE1Mwc3IxUhESERAsATDaAmGoAaJqANExMN4AGAwMD+gICAgAGA/oACAGVlgMD/AAHAAkCgDRNAGiYmGkATDf4ADRPAwAGAAQBAQMBAQP3bZWWlwAHA/wAAAAQAQAAAA8ADgAAqADkASABXAAABIxEzNSEVMxEhETM1IRUzESMiBhURFBY7ATI2NREzERQWOwEyNjURNCYjASMiJjU0NjsBMhYVFAYjEyMiJjU0NjsBMhYVFAYjASMiJjU0NjsBMhYVFAYjA3g4QP7AQP8AQP7AQDgeKioe8B4qgCoe8B4qKh795LgPFRUPuA8VFQ/EQA0TEw1ADRMTDQE8uA8VFQ+4DxUVDwJAAQBAQP8AAQBAQP8AKh7+UB4qKh4BOP7IHioqHgGwHir+ABMNDRMTDQ0TAYATDQ0TEw0NE/6AEw0NExMNDRMABgCAAEADwANAAAMABwALABgAJQAyAAABIRUhFSEVIRUhFSEBFBYzMjY1NCYjIgYVERQWMzI2NTQmIyIGFREUFjMyNjU0JiMiBhUBgAJA/cACQP3AAkD9wP8AJRsbJSUbGyUlGxslJRsbJSUbGyUlGxslA0CAwIDAgALAGyUlGxslJRv+wBslJRsbJSUb/sAbJSUbGyUlGwAEAIAAAAPAA4AAAwAHAAsAJQAAASEVIRUhFSEVIRUhAzUjESMVMxEjFTMVBxUzFSMVMxUjFTMRIzUBgAJA/cACQP3AAkD9wEBAgEBAgICAgICAwIADQIDAgMCAAW6SAUBA/wBAMjySQEBAQAFAMgAABQBAAEADwAMAAAMABwALAA8AEgAAEyEVIQEhFSERIRUhASEVIREXB0ADgPyAAUACQP3AAkD9wP7AA4D8gODgAwCA/wCAAUCA/wCAAgCgoAAFAEAAQAPAAwAAAwAHAAsADwASAAATIRUhESEVIREhFSERIRUhAQcXQAOA/IACQP3AAkD9wAOA/IADgODgAwCA/wCAAUCA/wCAAgCgoAAAAAIAQACAA8ADAAAfAD8AAAEyHgIVFA4CIyIuAjUnND4CMxUiBgcOAQc+ATMhMh4CFRQOAiMiLgI1JzQ+AjMVIgYHDgEHPgEzAQAoRjQeHjRGKCdGNB4BPGiMTzdkJggNBwgPBwIAKEY0Hh40RignRjQeATxojE83ZCYIDQcIDwcCFyA3SiorSjcgIDdKKx1UlG9AdCwqCBAJAQEgN0oqK0o3ICA3SisdVJRvQHQsKggQCQEBAAEAcAAAAsADgAAOAAAlPgEuAQcVCQEVNh4BBgcCwBYkIoWT/rABULDMP09sAEughFME3gFQAVDZBHnE9ngAAAABAUAAAAOQA4AADgAAATUJATUmDgEWFy4BPgEXAkABUP6wk4UiJBZsTz/MsAKn2f6w/rDeBFOEoEt49sR5BAAAAwBAAAADnwOAADAAbQB/AAABJy4BIyIGDwEGFB8BNycmND8BPgEzMhYfARYUDwEOASMiJi8BBxceATMyNj8BNjQnAQcXHgEVFAYPAQ4BIyImLwEuATU0Nj8BPgEzMhYfATcnLgEjIgYPAQ4BFRQWHwEeATMyNj8BPgE1NCYvAQciJicmNDcBNjIXFhQHAQ4BIwOfhRApFhcpEKUhIQNEAwUFpQMHAgEHA4UFBaUDBwECBwMCRAIQKRcWKRClISH+iEQDAwICA6UDBwIBBwOFAwICA6UDBwECBwMCRAIQKRcWKRClEBEREIUQKRYXKRClEBEREAPHBw4GCwsBQAsgCwsL/sAGDgcC2oUQEREQpSFdIQJEAgUNBaUDAgIDhQUNBaUDAgIDA0QDEBEREKUhXSH+jUQCAwcCAQcDpQMCAgOFAwcBAgcDpQMCAgMDRAMQEREQpRApFxYpEIUQEREQpRApFhcpEAJtBgULIAsBQAsLCyAL/sAFBgAAAAAIAEAAAAPAA4AAMABtAH8AjgCdAK8AvgDNAAABJy4BIyIGDwEGFB8BNycmND8BPgEzMhYfARYUDwEOASMiJi8BBxceATMyNj8BNjQnAQcXHgEVFAYPAQ4BIyImLwEuATU0Nj8BPgEzMhYfATcnLgEjIgYPAQ4BFRQWHwEeATMyNj8BPgE1NCYvARciJi8BJjQ3NjIfARYUBw4BIwciJj0BNDYzMhYdARQGIwEjIiY1NDY7ATIWFRQGIwEyFh8BFhQHBiIvASY0Nz4BMzcyFh0BFAYjIiY9ATQ2MwEzMhYVFAYrASImNTQ2MwOfhRApFhcpEKUhIQNEAwUFpQMHAgEHA4UFBaUDBwECBwMCRAIQKRcWKRClISH+iEQDAwICA6UDBwIBBwOFAwICA6UDBwECBwMCRAIQKRcWKRClEBEREIUQKRYXKRClEBEREAP5Bw4GgAsLCyALgAsLBg4HwA0TEw0NExMNAUCADRMTDYANExMN/UAHDgaACwsLIAuACwsGDgfADRMTDQ0TEw3+wIANExMNgA0TEw0C2oUQEREQpSFdIQJEAgUNBaUDAgIDhQUNBaUDAgIDA0QDEBEREKUhXSH+jUQCAwcCAQcDpQMCAgOFAwcBAgcDpQMCAgMDRAMQEREQpRApFxYpEIUQEREQpRApFhcpEALtBgWACyALCwuACyALBQZ6Ew2ADRMTDYANEwFAEw0NExMNDRMBxgYFgAsgCwsLgAsgCwUGehMNgA0TEw2ADRP+wBMNDRMTDQ0TAAAAAgEAAAADAAOAAAUACwAAAREJAREhAScHESERAQABAAEA/gABwMDAAYADgPyAAQD/AAOA/SvAwAKV/WsAAwBAAEADwANAABAAJAAxAAABISIGFREUFjMhMjY1ETQmIxE4ATEDBwsBOAExETgBMSE4ATERARQWMzI2NTQmIyIGFQOA/QAaJiYaAwAaJiYawKDgwAMA/wA4KCg4OCgoOANAJhr9gBomJhoCgBom/UABQIABIP4gAoD9gAHgKDg4KCg4OCgAAAkAQABAA8ADQAAQABUAGgAfACQAKQAuADMANgAAASEiBhURFBYzITI2NRE0JiMBIzUzFREjNTMVESM1MxUBIREhETMjNTMVESM1MxURIzUzFSERJQOA/QAaJiYaAwAaJiYa/YCAgICAgIABwP6AAYDAgICAgICA/gABIANAJhr9gBomJhoCgBom/UCAgAEAgIABAICA/gACgP2AgIABAICAAQCAgP6AwAAAAAADAEAAAAPAA4AABAARADoAAAEzFSM1ATIWHQEHIzU3NSE1ISciDgIHDgMVFB4CFx4DMzI+Ajc+AzU0LgInLgMjAcCAgAEAGyXkXMD+wAGAwC1WUUkgIDAiEREiMCAgSVFWLS1WUUkgIDAiEREiMCAgSVFWLQEAgIABwCUbpppAgECAwBEiMCAgSVFWLS1WUUkgIDAiEREiMCAgSVFWLS1WUUkgIDAiEQACAGAAwAOgAsAABQALAAABJzcnCQEBBxcHFwEBoMDAQP8AAQABQEDAwEABAAEAwMBA/wD/AAIAQMDAQAEAAAAABQBOAAADsgNmAAoAFQApAD4AUwAAExc+ATcnDgMHJQceARc3LgMnAyImLwE1NDYzMhYdARceAQcOASMDIg4CFRQeAjMyPgI1NC4CIxEiLgI1ND4CMzIeAhUUDgIjTlEmckUeK05FOxcCVB5FciZRFztFTitCBAcDkhMNDRNuDAkGBQ8JYFCLaTw8aYtQUItpPDxpi1A8aU4tLU5pPDxpTi0tTmk8Ao8zPVsXWw4rNkIm11sXWz0zJkI2Kw79mgIBSdQNExMNrDcGGQwJCQIAPGmLUFCLaTw8aYtQUItpPP1gLU5pPDxpTi0tTmk8PGlOLQAAAAQAQACAA8ADFgAeADMAQABlAAATPgE3PgEzMhYXHgEXNS4BJy4DIyIOAgcOAQcVJSIOAgceAzMyPgI3LgMjFRQGIyImNTQ2MzIWFRcOASMiJicuASc+ATc+ATcOARUUFjMyNjU0JiceARceARcOAQdAIk0qRJZNTZZEKk0iGTQcJ1RWWS0tWVZUJxw0GQHARYBzYiYmYnOARUWAc2ImJmJzgEUlGxslJRsbJdgzbDk5bDMnRh0dRicKFAoICHBQUHAICAoUCidGHR1GJwH4Jj8YKCkpKBg/JnYVJRAXIxgMDBgjFxAlFXaIJENfOjpfQyQkQ186Ol9DJMAbJSUbGyUlG7kdHh4dFz0lJT0XBQsFEicVUHBwUBUnEgULBRc9JSU9FwACAOQAwAMcAwAAEQAcAAABLgErASIGBzgBMQMzNzMXMwMHNz4BMTAWFzEXIwKLEh47QDwdE5BxOuI6cZHWJwcdHQcnlgKkPh4gQP4gwMAB5KSIGQUFGYgACgBAAEADwAMAAAQACQAOABMAGAAdACIAJwAsADEAABMRIREhATUhFSEFFSE1IREVITUhIRUjNTMHMxUjNSEzFSM1PQEzFSMBMxUjNQU1MxUjQAOA/IABQAEA/wABAP8AAQD/AAEA/sDAwMDAwAJAwMDAwP3AwMACQMDAAwD9QALA/kCAgECAgAGAgICAgMCAgICAQICA/wCAgICAgAAAAAEAQAGAA8ACAAADAAATIRUhQAOA/IACAIAAAAADAEAAQAPgA4AABAANABoAADchFSE1ASMDIxMjNSEVEycHJzcnNxc3FwcXB0ACAP4AAsDdt4W43wJAooKCPoKCPoKCPoKCPsCAgAJA/gACAICA/UCCgj6Cgj6Cgj6Cgj4AAAAAAgAc/8ADgALAAAsAFwAAJRUzFSM1NzUjNTMVAyMHJyMJATM3FzMBAwCAwICAwNyIvLyIAQD/AIi8vIj/ADIyQJI8MkCSAlK8vP8A/wC8vAEAAAAAAgAcAMADgAPAAAsAFwAAARUzFSM1NzUjNTMVByMHJyMJATM3FzMBAwCAwICAwNyIvLyIAQD/AIi8vIj/AALyMkCSPDJAkm68vP8A/wC8vAEAAAAAAQBAAAADwAOAADQAACU1PgM1NC4CIyIOAhUUHgIXFSMnFSE1LgM1ND4CMzIeAhUUDgIHFSE1ByMCwDleRCVGeqNdXaN6RiVEXjnAQAFAJj8tGS9RbT4+bVEvGS0/JgFAQMCAJRdHWmo5UItpPDxpi1A5alpHFyVg4N8TO0tYMEJ1VzIyV3VCMFhLOxPf4GAABQBAAAADwAOAABgALgA7AEgAWQAAATIWFx4BFRQGBw4BIyImJy4BNTQ2Nz4BMzUiDgIVFB4CMzI+AjU0LgIjMQMUFjMyNjU0JiMiBhUhFBYzMjY1NCYjIgYVAyImJx4DMzI+AjcOASMCAEuHNTU4ODU1h0tLhzU1ODg1NYdLXaN6RkZ6o11do3pGRnqjXcAlGxslJRsbJQEAJRsbJSUbGyVATIMsCS1DUy8vU0MtCSyDTAM0ODU1h0tLhzU1ODg1NYdLS4c1NThMRnqjXV2jekZGeqNdXaN6Rv7AGyUlGxslJRsbJSUbGyUlG/7wMyssSzgfHzhLLCszAAAABABAAEADwANAAAQAGQAeACsAAAEhFSE1BSEiBhURFBY7ARUhNTMyNjURNCYjAyERIRETFAYjIiY1NDYzMhYVAQACAP4AAoD9ABomJhqAAgCAGiYmGsD+gAGAzhsTExsbExMbA0CAgMAmGv8AGibAwCYaAQAaJv4AAQD/AAGgExsbExMbGxMAAAQAQAAAA8ADgAAGAA0AFAAbAAABJzchETcXITcXESEXBxEXByERBychBycRISc3AeDAgP6ggMABAMCA/qCAwMCAAWCAwP8AwIABYIDAAkDAgP6ggMDAgAFggMD/AMCAAWCAwMCA/qCAwAAAAAYAQAAAA8ADgAATACIAJwA5AD4AQwAAATUjIgYVERQWFwEnBxMBMzUjETMBMxE0JisBIgYVETM1MxUDNTMVIwU1NCYjMjY9ATQmKwERMzI2NQMzFSM1FTMVIzUDwMAaJggH/tGOUuABoIDAwP1AQCYagBomQICAgIACABIaGhImGsDAGibAgICAgANAQCYa/sAMFQn+/JRG/uABwEABQP6AAYAaJiYa/oDAwAEAgIDAYBomJhpgGib+QCYaAUCAgMCAgAACAEAAQAPAAsAADAAVAAABIzUzNTMVMxUjFSM1BREhETMVITUzAcCAgICAgIACAPyAgAKAgAHAgICAgICAQP7AAUDAwAAAAAAOAEAAAAPAA4AAAwAHAAsAEQAVABkAHQAjACkALgAzADkAPQBBAAABMxUjETMVIxMzFSM3FSMVMxEhMxUjBzMVIxEzFSMDETM1MzUBMxEjFSMBESERIQEhESERAREzNTM1ATMVIyczFSMCAICAgIBAgIDAQID+QICAQICAgICAQEABgIBAQP2AA4D8gANA/QADAP1AQEABAICAwICAAkBA/sBAAQBAQMBAAQBAgEABwEABAP8AwED/AAEAwAFA/IADgPzAAwD9AAFA/wDAQAGAQEBAAAcAQAAAA8ADgAAIABEAFQAZAB0AIQAlAAABEyETMxMhEzMBAyEDIwMhAyMDMxUjNzMVIzczFSM3MxUjNzMVIwMwEP2AECAQAgAQIP2gEAKAECAQ/gAQIJCAgMCAgMCAgMCAgMCAgAOA/oABgP7AAUD8gAFA/sABAP8AAcBAQEBAQEBAQEAAAAAC/+AAAAQAA4AAJgAsAAABMh4CFRQOAiM1MjY3PgE1NCYnLgEjIgYHDgEHMwsBMz4DMxMVIREzFQJAXaN6RkZ6o11HgDIyNTUyMoBHR4AyJjIJuuDgpQtOdpdVwP8AgAOARnqjXV2jekZgNTIygEdHgDIyNTUyJl80/wABAFGNZzv+gIABQMAAAwEAAEADAANAABMAIAAtAAABPgE1NC4CKwERITI+AjU0JicnNDY7ATIWFRQGKwE1EyMiJj0BMzIWFRQGIwJxJCsjPVIu4AEgLlI9I1A/8RwUQyAtLSBzo3MUHKMgLS0gAdIcUy8rTDgh/QAhOEwrQmkXvhQcOCgoOJD+MBwUkDgoKDgAAQCAAEADQANAAAwAAAEVIwEzFSE1MwEjNSEDQJD/AJD+QJABAJABwANAQP2AQEACgEAAAAIAwABAAwADQAAEACEAADchFSE1AREUBgcOASMiJicuATURIxEUHgIzMj4CNREjwAJA/cABwBUUGD0iIj0YFBWALU5pPDxpTi2AgEBAAsD+gBctERUWFhURLRcBgP6ANV1GKChGXTUBgAAAAAEAQABAA8ADQAA+AAABIS4BIyImNTQ2MzIWFzMuAScuASMiBgcOARUUFhceARchFSEeARUUBiMiJicjHgEXHgEzMjY3PgE1NCYnMzUDwP72JV4zQ2JiQzhZDnEGKyMmYTU1YSYpLS0pAQMC/vYCASs5YkM4WQ5xBisjJmE1NWEmKS0PD8wBwBscQS0sQS8jJkUaHB8fHB9ULS5UHwECAUANNiIsQS8jJkUaHB8fHB9ULRszF0AAAAABAKAAQANAA0AAFAAAASIOAhUUHgIzETMRMxEzETM1IQGALlI9IyM9Ui6AQICA/kADQCM9Ui4uUj0j/sACgP2AAoCAAAIAQABAA4ADQAAUABcAAAEiDgIVFB4CMxEzETMRMxEzNSEBNycBwC5SPSMjPVIugECAgP5A/oDg4ANAIz1SLi5SPSP+wAKA/YACgID9AMDAAAAAAAIAYABAA8ADQAAUABcAAAEiDgIVFB4CMxEzETMRMxEzNSEBBxcBQC5SPSMjPVIugECAgP5AAoDg4ANAIz1SLi5SPSP+wAKA/YACgID+gMDAAAAAAAUAQAAABAADgAAKAA4AEgAZACIAAAEjNSchESEVIREnFRcjNQEXIzUlIRUzESERASE1MxEzFTMRA0DAwP6AAYACQMBlZf6AZWX+wAEAwP5AA0D+QICAwAKAQMD9QMABwMBbZWUBAGVlG8D+gAJA/QCAAYDA/sAAAA8BAACAA0ACwAADAAcACwAPABMAFwAbAB8AIwAnACsALwAzADcAOwAAATMVIwczFSMVMxUjFTMVIyczFSMVMxUjJzMVIwEzFSMVMxUjFTMVIxUzFSMnMxUjJzMVIyczFSMnMxUjAwBAQIBAQEBAQECAQEBAQIBAQAGAQEBAQEBAQECAQECAQECAQECAQEACwEBAQEBAQEDAQEBAQEABQEBAQEBAQEBAQEBAQEBAQAAABABAABIDwAOAAAUAHQA2AEMAAAEhJyEHIQMzEyETIS4DNTQ+AjMyHgIVFAYHFyc+ATU0JiMiBhUUFjMyNjcXHgE/ATYmJyUiJjU0NjMyFhUUBiMDoP5gIP6gQAOAeFgg/IBAAWQnQjAbK0pjODhjSisEBCOGDQ5wUFBwcFAbMhZvETMTBRMCFP7VM0lJMzNJSTMDQECA/gABwP2ADjNCUSw4Y0orK0pjOBAgEJJvFjIbUHBwUFBwDg2GFAITBRMzEVZJMzNJSTMzSQAABQBAAAADgAOAABsAJgArADAAQAAAATU0JisBNTQmKwEiBh0BIyIGFREUFjsBFSERIwE4ATEzOAExFSM1BzUhFSEBIREhEQEVMzczFSMVMzUjNTMXMzUCwBMNoCYagBomoA0TEw3gAkDA/oCAgIABgP6AAoD+QAHA/oAgIEAwoDBAICACQKANE0AaJiYaQBMN/gANE8ACQAEAQEDAQED9wAHA/kABgIBAwEBAwECAAAAE//gAIAQIA2AAJQBLAFgAawAAEzU0NjsBNSMiBh0BFAYrARUzMhYdARQWOwE1IyImPQE0Jic+ATUhNTQmKwE1MzIWHQEUFjsBFSMiBh0BFAYrATUzMjY9ATQ2Ny4BNScUBiMiJjU0NjMyFhUHIgYVFBYXDgEHFTA+AjU0JiPILiAaGktrLiAaGiAua0saGiAuHRoaHQJwLiAaGktrLiAaGiAua0saGiAuHRoaHdA9Kys9PSsrPWgrPS48EjUjQU5BPSsCQmggLmhrS2ggLmguIGhLa2guIGgmQxkZQyZoIC5oa0toIC5oLiBoS2toLiBoJkMZGUMmGSs9PSsrPT0rmj0rKjsDGRcDPgIlWlgrPQAAAAABAAAAAQAAEIJDv18PPPUACwQAAAAAANIwPf8AAAAA0jA9///g/8AECAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAQA/+D/+AQIAAEAAAAAAAAAAAAAAAAAAAA5BAAAAAAAAAAAAAAAAgAAAAQAAEAEAACABAAAAAQAAEAEAABABAAAQAQAAEAEAACJBAAAQAQAAEAEAACABAAAgAQAAEAEAABABAAAQAQAAHAEAAFABAAAQAQAAEAEAAEABAAAQAQAAEAEAABABAAAYAQAAE4EAABABAAA5AQAAEAEAABABAAAQAQAABwEAAAcBAAAQAQAAEAEAABABAAAQAQAAEAEAABABAAAQAQAAEAEAP/gBAABAAQAAIAEAADABAAAQAQAAKAEAABABAAAYAQAAEAEAAEABAAAQAQAAEAEAP/4AAAAAAAKABQAHgBsALABDgEwAVIBdAGWAjACfgL0A0ADeAOgA8gEIgRCBGIFIAZCBmAGpAb6B04HbgfoCHoIpgj2CQQJNglgCYoJ0gpQCpQKygssC1ALugv+DEIMhAyeDNQNMA1SDXwNpg3iDjoOoA74D4IAAQAAADkAzgAPAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAA0AAAABAAAAAAACAAcAlgABAAAAAAADAA0ASAABAAAAAAAEAA0AqwABAAAAAAAFAAsAJwABAAAAAAAGAA0AbwABAAAAAAAKABoA0gADAAEECQABABoADQADAAEECQACAA4AnQADAAEECQADABoAVQADAAEECQAEABoAuAADAAEECQAFABYAMgADAAEECQAGABoAfAADAAEECQAKADQA7HRpbnltY2Utc21hbGwAdABpAG4AeQBtAGMAZQAtAHMAbQBhAGwAbFZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMHRpbnltY2Utc21hbGwAdABpAG4AeQBtAGMAZQAtAHMAbQBhAGwAbHRpbnltY2Utc21hbGwAdABpAG4AeQBtAGMAZQAtAHMAbQBhAGwAbFJlZ3VsYXIAUgBlAGcAdQBsAGEAcnRpbnltY2Utc21hbGwAdABpAG4AeQBtAGMAZQAtAHMAbQBhAGwAbEZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="},function(e,t){e.exports="data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAERMAAsAAAAARAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxILnmNtYXAAAAFoAAABNAAAATTfZp/oZ2FzcAAAApwAAAAIAAAACAAAABBnbHlmAAACpAAAPJQAADyUfQqtPWhlYWQAAD84AAAANgAAADYLLxoRaGhlYQAAP3AAAAAkAAAAJAerBDZobXR4AAA/lAAAAfQAAAH06gIUgWxvY2EAAEGIAAAA/AAAAPzSZeJUbWF4cAAAQoQAAAAgAAAAIACNAJVuYW1lAABCpAAAAYYAAAGGo1QUBXBvc3QAAEQsAAAAIAAAACAAAwAAAAMD/AGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA7ngDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEARgAAABCAEAABQACAAEAIOAo4DXmC+YO5ivoAekI6QvpEekV6R3pKOkq6S3pNek96UHpYeqq6qzrNuun7GrszezU7WrtwO357nj//f//AAAAAAAg4ADgKuYA5g3mKugA6QDpC+kR6RTpHOkm6SrpLekw6TnpP+lh6qjqrOs166fsauzM7NTtau3A7fnueP/9//8AAf/jIAQgAxo5GjgaHRhJF0sXSRdEF0IXPBc0FzMXMRcvFywXKxcMFcYVxRU9FM0UCxOqE6QTDxK6EoISBAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAADAAD/wAQAA8AABAAIABEAAAEhESERITMRIwEhETMRIREzFwOA/IAEAP4AgIABgP0AQAJASzUDwPwAA4D/AP4AAwD+wAFANQADAED/wAPAA8AAEwAcADEAAAEnLgEjISIGFREUFjMhMjY1ETQmBx4BFyM1HgEXExQGIyEiJjURNDYzITIWFxUzHgEVA4eOGFAh/iAhLy8hAuAhLyFFAwQCowMGArUJB/0gBwkJBwHgBAgE/gEBAvmOGCEvIfygIS8vIQJgIVAWAgYDowIEA/y2BwkJBwNgBwkBAf4ECAQAAAIAAP/ABAADwAAvADcAAAE1Jy4BJzcnBy4BLwEjBw4BBycHFw4BDwEVFx4BFwcXNx4BHwEzNz4BNxc3Jz4BNycHIyc1NzMXBACfBhILaHGAEysXEKAQFysTgHFoCxIGn58GEgtocYATKxcQoBAXKxOAcWgLEgahgICAgICAAXCgEBcrE4BxaAsSBp+fBhILaHGAEysXEKAQFysTgHFoCxIGn58GEgtocYATKxcggICAgIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhESEVIREhFSERIRUhAAQA/AACgP2AAoD9gAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRchFSERIRUhAyEVIREhFSEABAD8AMACgP2AAoD9gMAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhBSEVIREhFSEBIRUhESEVIQAEAPwAAYACgP2AAoD9gP6ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFSEVIRUhFSEVIRUhFSEVIQAEAPwABAD8AAQA/AAEAPwABAD8AAOAgECAQIBAgECAAAAABABt/8ADkwOAADIAVgBiAIcAACUuASsBJxM+ATQmJwkBDgEUFhcTByMiBgcOARceATMyNjc+ASc3FwYWFx4BMzI2NzYmJwUOAQcOAQcOASMiJicuATU0Njc+ATc+ATc+ATMyFhceARUUBjciJjU0NjMyFhUUBgUOASMiJicuAScuAScuATU0Njc+ATMyFhceARceARceARUUBgcDeyJUKB1A/xgYGBj+gf6BGBgYGP9AHShUIj0OMxY7IChTIygiB0FBByIoI1MoIDsWMw49/eYGEQsLGA4MGQsMHQwMCAYFBhALCxkODBgMDB0MDAgGmiU1NSUlNTUBMgwdDAsZDA4YCwsRBgUGCAwMHQwMGAwOGQsLEAYFBggM+yIjQAEAGERIRBj+gAGAGERIRBj/AEAjIj2fMxYWIyIoYy5CQi5jKCIjFhYznz2JDRkKCxEGBQYIDAwdCwwYDA4YCwsRBgUGCAwMHQsMGac1JiU1NSUmNfwMCAYFBhELChkNDBkMCx0MDAgGBQYRCwsYDgwYDAsdDAAFAED/wAQAA8AAGwAmACoALQAzAAABNTQmKwE1NCYrASIGHQEjIgYVERQWMyEVITcRATgBMTM4ATEVIzUHNSEVEzUzNyMVIREhA0ATDeAmGoAaJuANExMNASABwMD9gICAwAIAgGUbwP7AAgACgKANE0AaJiYaQBMN/YANE8DAAgABAEBAwEBA/VtlQMACQAAGAAD/wAQAA8AAAwAHACkANwBFAFMAABMhFSElIRUhASMRIREhESERIyIGFREUFjMhMjY1ETMRFBYzITI2NRE0JgEjIiY1NDY7ATIWFRQGEyMiJjU0NjsBMhYVFAYBIyImNTQ2OwEyFhUUBkABgP6AAgABgP6AAXg4/wD/AP8AOB4qKh4BMB4qgCoeATAeKir9hvgPFRUP+A8VFbVADRMTDUANExMBb/gPFRUP+A8VFQPAQEBA/wABAP8AAQD/ACoe/dAeKioeAXj+iB4qKh4CMB4q/YATDQ0TEw0NEwHAEw0NExMNDRP+QBMNDRMTDQ0TAAAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAYAQP/ABAADwAADAAcACwARAB0AKQAAJSEVIREhFSERIRUhJxEjNSM1ExUzFSM1NzUjNTMVFREjNTM1IzUzNSM1AYACgP2AAoD9gAKA/YDAQEBAgMCAgMDAgICAgICAAgCAAgCAwP8AwED98jJAkjwyQJLu/sBAQEBAQAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAgAAAEAEAQMAAB4APQAAEzIeAhUUDgIjIi4CNSc0PgIzFSIGBw4BBz4BITIeAhUUDgIjIi4CNSc0PgIzFSIGBw4BBz4B4S5SPSMjPVIuLlI9IwFGeqNdQHUtCRAHCBICSS5SPSMjPVIuLlI9IwFGeqNdQHUtCRAHCBICACM9Ui4uUj0jIz1SLiBdo3pGgDAuCBMKAgEjPVIuLlI9IyM9Ui4gXaN6RoAwLggTCgIBAAABAED/wAL6A8AADQAABT4BLgEHFQkBFTYeAQIC+ismOKuo/oABgMnjRk9ATbaaZQT+AYABgPgFnOz+7QABAQb/wAPAA8AADgAAATUJATUmDgEWFyYCPgEXAkABgP6AqKs4JitpT0bjyQLI+P6A/oD+BGWatk1yARPsnAUAAwAu/8AD0gPAAA0AQAByAAABFjY3AT4BJyYGBwEOATceARUUBg8BDgEjIiYvAS4BNTQ2PwE+ATMyFhc3LgEjIgYPAQYUHwEeATMyNj8BPgEnBwEnLgEjIgYPAQ4BFzcuATU0Nj8BPgEzMhYfAR4BFRQGDwEOASMiJicHHgEzMjY/ATY0AUANJw4BPA4BDQ0nDv7EDgGqAwQKCaMKGA0NGAljCgkJCqMJGA0IDwdBFTEZHjkXoy4uYxc5Hh46F6MqBiNBAfVjFzkeHjoWpCoGI0EDBAoJowoYDQ0YCWMKCQkKowkYDQgPB0EVMRkeORejLgEADQEOATwOJw0NAQ7+xA4nEAcPCA0YCaMKCQkKYwkYDQ0YCaQJCgQDQRAQFhejLoItYxcXFxejKnUuQQISYxcXFxejKnUuQQcPCA0YCaMKCQkKYwkYDQ0YCaQJCgQDQRAQFhekLYIAAAAACAAA/8AEAAPAADIAZQBpAG0AcQB1AHkAfQAAAR4BFRQGDwEOASMiJi8BLgE1NDY/AT4BMzIWFzcuASMiBg8BBhQfAR4BMzI2PwE+AScHAScuASMiBg8BDgEXNy4BNTQ2PwE+ATMyFh8BHgEVFAYPAQ4BIyImJwceATMyNj8BNjQnBSc3FzczFSMFMxUjARcHJwczFSMBMxUjAd0DBAoJowoYDQ0YCWMKCQkKowkYDQgPB0EVMRkeORejLi5jFzkeHjoXoyoGI0EB9WMXOR4eOhakKgYjQQMECgmkCRgNDRgJYwoJCQqjCRgNCA8HQRUxGR45F6MuLv0XwC7AaUBA/oDAwAMXwC7AqUBAAQDAwAEdBw8IDRgJowoJCQpjCRgNDRgJpAkKBANBEBAWF6Qtgi1kFhcXFqQqdS5BAhJjFxcXF6MqdS5BBw8IDRgJowoJCQpjCRgNDRgJpAkKBANBEBAWF6Qtgi2GwC7A6cDAQP7XwC7AKcABwEAAAAACAMD/wANAA8AABAAJAAATEQkBEQMJAREhwAFAAUBA/wD/AAIAA8D8AAFA/sAEAPybAQD/AAMlAAQAAAAABAADQAADAAcAEwAYAAATESERAyERIQU0NjMyFhUUBiMiJhMhEwE3AAQAQPyAA4D/ADgoKDg4KCg4wP0AwAEAgANA/MADQP0AAsCgKDg4KCg4OP5IAgD+wGAAAAkAAABABAADQAADAAcACwAPABMAFwAbAB8AIgAAExEhEQEjNTM1IzUzNSM1MwEhESETIzUzNSM1MzUjNTMFESUABAD8wICAgICAgAJA/gACAMCAgICAgID9wAEAA0D9AAMA/UCAgICAgP2AAoD9gICAgICAgP6AwAAAAAAEAAD/wAQAA8AAAwAPADgATQAAATMVIwEyFh0BByM1NzUhNTciDgIHDgMVFB4CFx4DMzI+Ajc+AzU0LgInLgMjNTEyHgIVFA4CIyIuAjU0PgIBwICAAQAbJcCAwP7AwCpQS0QdHi0fEBAfLR4dREtQKipQS0QdHi0fEBAfLR4dREtQKmq7i1BQi7tqaruLUFCLuwEAgAJAJRvAgECAQICgEB8tHh1ES1AqKlBLRB0eLR8QEB8tHh1ES1AqKlBLRB0eLR8QYFCLu2pqu4tQUIu7amq7i1AAAAACAEAAwAPAAsAABQALAAAJAjMJASEjCQEzAQFA/wABAID/AAEAAQCAAQD/AIABAALA/wD/AAEAAQD/AP8AAQAABQA2AAADygNKABMAKwA2AEAASgAAASIOAhUUHgIzMj4CNTQuAhMOASMiJicuATU0Njc+ATMyFhceARUUBgEnDgMHFz4BNwU3LgMnBx4BBSMVFBYXMRc3JwIAUItpPDxpi1BQi2k8PGmLfClpOjppKSgsLCgpaTo6aSkoLCz+UislQzowE1YeYDwCLlYTMDpDJSs8YP6qQAcFoCiUAwA8aYtQUItpPDxpi1BQi2k8/bQoLCwoKWk6OmkpKCwsKClpOjppAhdWEzA6QyUrPGAeuislQzowE1YeYDbACA0EgDJ2AAAABAAAAIAEAAMgABMAHwBJAGwAAAEiDgIHHgMzMj4CNy4DBzIWFRQGIyImNTQ2AQ4BBw4BIyImJy4BJy4BJz4BNz4BNw4BFRQWMzI2NTQmJx4BFx4BFw4BEy4DIyIOAgcOAQcVPgE3PgMzMh4CFx4BFzUuAScCAE+Sg3AsLHCDkk9PkoNwLCxwg5KPGyUlGxslJQFhHj8gIkQjI0QiID8eL1UjI1UvGTIaDhFwUFBwEQ4aMhkvVSMjVSgpVVdaLi5aV1UpLFIlKmE1Jk1QUyoqU1BNJjVhKiVSLAKAJENfOjpfQyQkQ186Ol9DJIAlGxslJRsbJf7/DxgICAgICAgYDxhBKChBGA0UBxY2HVBwcFAdNhYHFA0YQSgoQQG1FR8VCwsVHxUWOSFtLEkbEx0TCgoTHRMbSSxtITkWAAIA0ACAAzADAAAIAAwAACU3IRczAyMDMxMzFyMBQjoBCDpywODAcppIOryAwMACgP2AAgDAAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAAAQAAAYAEAAIAAAMAABMhFSEABAD8AAIAgAAAAAQAAP/AA+ADwAADAAcACwAXAAA3IRUhEyEVIRsBFwMFJwcnNyc3FzcXBxcAAkD9wMACwP1AVc18xAIIgoI+goI+goI+goJAgAQAgP1AAxAg/RDAgoI+goI+goI+goIAAAIAHP/AA4ACwAALABcAACUVMxUjNTc1IzUzFQMjBycjCQEzNxczAQMAgMCAgMDciLy8iAEA/wCIvLyI/wAyMkCSPDJAkgJSvLz/AP8AvLwBAAAAAAIAHADAA4ADwAALABcAAAEVMxUjNTc1IzUzFQcjBycjCQEzNxczAQMAgMCAgMDciLy8iAEA/wCIvLyI/wAC8jJAkjwyQJJuvLz/AP8AvLwBAAAAAAEAAP/ABAADwAAzAAAlITcRITU+AzU0LgIjIg4CFRQeAhcVIREXITUuAzU0PgIzMh4CFRQOAgcCwAEAQP6AMVI8ITdggElJgGA3ITxSMf6AQAEARnZVL1CLu2pqu4tQL1V2RkCA/wDWFUhfcD5QjGc7O2eMUD5wX0gV1gEAgCEZU2yAR12jekZGeqNdR4BsUxkAAAAFAAD/wAQAA8AAEwAnADMAPwBTAAABIg4CFRQeAjMyPgI1NC4CAyIuAjU0PgIzMh4CFRQOAgMUBiMiJjU0NjMyFgUUBiMiJjU0NjMyFgEyPgI3DgMjIi4CJx4DAgBqu4tQUIu7amq7i1BQi7tqWZ51RER1nllZnnVERHWe2SUbGyUlGxslAYAlGxslJRsbJf8ANWFSQhQHOFVtPT1tVTgHFEJSYQPAUIu7amq7i1BQi7tqaruLUPxQRHWeWVmedUREdZ5ZWZ51RAJwGyUlGxslJRsbJSUbGyUl/pkUIi0YQG9RLy9Rb0AYLSIUAAQAAAAABAADgAADABcAGwAnAAABIRUhBSEiBhURFBY7AREhETMyNjURNCYBIREhJRQGIyImNTQ2MzIWAQACAP4AAsD8gBomJhrAAgDAGiYm/ub+gAGAAQ4bExMbGxMTGwOAgEAmGv7AGib/AAEAJhoBQBom/YABQOATGxsTExsbAAAAAAQAAP/ABAADwAAGAA0AFAAbAAABEScHJzcnBRcHJwcRIQE3ESE3JzcPARchERc3BACK1GzUiv521GzUigGAAfaK/oCK1GzY1Ir+gIrUA8D+gIrUbNSKitRs1IoBgPz2iv6AitRsbNSKAYCK1AAAAAAHAED/wAPAA8AADQARAB8AMAA0ADgAPgAAEzMVMxE0JisBIgYVETMRMxUjJTUjIgYVERQWOwE1IxEHNTQmKwERMzI2PQE0JiMyNgcjNTM1IzUzCQEDNxcBgIBAJhqAGiZAgIADQMAaJiYawMCAJhrAwBomEhoaEkCAgICAAQD+YOBSjgFgAsDAAYAaJiYa/oABgICAQCYa/sAaJkABQGBgGib+QCYaYBomJsaAQID+AP5AASBGlAEuAAAAAAIAAP/ABAACwAALABMAAAEjNTM1MxUzFSMVIyURIREzESERAcDAwIDAwIACQPwAgAMAAYCAwMCAwID+gAGA/wABAAAADgAA/8AEAAPAAAMABwAPABMAFwAfACMAJwAvADMANwA/AEMASAAAATMVIzczFSMlESM1MzUjNQUzFSM3MxUjJRUzFSMRMxUTMxUjNzMVIyURIzUzNSM1BTMVIzczFSMlFTMVIxEzFQEhESETMREhEQGAgIDAgIABQMCAQP5AgIDAgID+wECAwECAgMCAgAFAwIBA/kCAgMCAgP7AQIDAAoD8gAOAQPwAAwBAQEBA/wBAgEDAQEBAwIBAAQBA/sBAQEBA/wBAgEDAQEBAwIBAAQBAAkD8gAPA/AAEAAAAAAAHAAD/wAQAA8AAAwAHAAsADwATABsAIwAAEzMVIzczFSMlMxUjNzMVIyUzFSMDEyETMxMhEwEDIQMjAyEDAICAwMDAAQCAgMDAwAEAgIAQEP0AECAQAoAQ/UAQAwAQIBD9gBABwEBAQEBAQEBAQAJA/kABwP6AAYD8AAGA/oABQP7AAAAC/+AAAAQAA4AAJQArAAABMh4CFRQOAiM1MjY3PgE1NCYnLgEjIgYHDgEHMwsBMz4DARUhETMVAkBdo3pGRnqjXUeAMjI1NTIygEdHgDImMgm64OClC052lwEV/wCAA4BGeqNdXaN6RmA1MjKAR0eAMjI1NTImXzT/AAEAUY1nO/6AgAFAwAAAAwDAAAADQAOAABIAGwAkAAABPgE1NC4CIyERITI+AjU0JgEzMhYVFAYrARMjETMyFhUUBgLEHCAoRl01/sABgDVdRihE/oRlKjw8KWafn58sPj4B2yJULzVdRij8gChGXTVGdAFGSzU1S/6AAQBLNTVLAAABAIAAAAOAA4AACwAAARUjATMVITUzASM1A4CA/sCA/kCAAUCAA4BA/QBAQAMAQAACAMAAAANAA4AAGwAfAAABMxEUDgIjIi4CNREzERQWFx4BMzI2Nz4BNQEhFSECwIAyV3VCQnVXMoAbGBxJKChJHBgb/gACgP2AA4D+YDxpTi0tTmk8AaD+YB44FxgbGxgXOB7+oIAAAAIAAAAABAADgAA4ADwAAAEeARUUBgcOASMiJicuATUzFBYzMjY1NCYjIiYnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFyUhFSEC2zA1NTAscT4+cSwwNYByTk5yck4+cSwwNTUwLHE+PnEsMDWAck5OcnJOPnEs/SUEAPwAAbskYjU1YiQhJCQhJGI1NExMNDRMJCEkYjU1YiQhJCQhJGI1NExMNDRMJCEFQAAAAQCgAAADgAOAABMAAAEhFSMRIxEjESMRIi4CNTQ+AgGAAgCAgICALlI9IyM9UgOAgP0AAwD9AAHAIz1SLi5SPSMAAAACAEAAAAPAA4AAEwAWAAABIRUjESMRIxEjESIuAjU0PgIBDQEBwAIAgICAgC5SPSMjPVL+rgEA/wADgID9AAMA/QABwCM9Ui4uUj0j/oDg4AAAAAACACAAAAPAA4AAEwAWAAABIRUjESMRIxEjESIuAjU0PgIBLQEBAAIAgICAgC5SPSMjPVIC7v8AAQADgID9AAMA/QABwCM9Ui4uUj0j/MDg4AAAAAAFAAD/wAQAA8AACQAMAA8AFQAdAAABIzUnIREhESERJxcjARcjJSEVMxEhASE1MxEzFTMDQMDA/kABgAKAwGVl/oBlZf6AAUDA/gADgP4AwIDAAsBAwP0A/wACQGVlAWVlgMD+QP8AwAHAwAAPAQAAgANAAsAAAwAHAAsADwATABcAGwAfACMAJwArAC8AMwA3ADsAAAEzFSMHMxUjFTMVIxUzFSMnMxUjFTMVIyczFSMBMxUjFTMVIxUzFSMVMxUjJzMVIyczFSMnMxUjJzMVIwMAQECAQEBAQEBAgEBAQECAQEABgEBAQEBAQEBAgEBAgEBAgEBAgEBAAsBAQEBAQEBAwEBAQEBAAUBAQEBAQEBAQEBAQEBAQEAAAAEAgACAA4AC4AAFAAATCQEnASeAASAB4ID+oKABoP7gAeCA/qCgAAAEAAD/0gQAA4AABQAdADUAQQAAASEnIQchAzMTIRMhLgM1ND4CMzIeAhUUBgcXJz4BNTQmIyIGFRQWMzI2NxceAT8BNiYlIiY1NDYzMhYVFAYDoP5gIP6gQAOAOEst/ABAAeQnQjAbK0pjODhjSisEBGPGDQ5wUFBwcFAbMhavETMTBRMC/oEzSUkzM0lJA0BAgP4AAcD9gA4zQlEsOGNKKytKYzgQIBDSrxYyG1BwcFBQcA4NxhQCEwUTM6dJMzNJSTMzSQAAAAUAQP/ABAADwAAPACoANQA5AD0AAAEVMzczESMVMzUjETMXMzUnNTQmKwE1NCYrASIGHQEjIgYVERQWMyEVIREBOAExMzgBMRUjNQc1IRUBIREhAgAgIEAw4DBAICBAEw3gJhqAGibgDRMTDQEgAoD9gICAwAIAAQD+AAIAAcCAQP8AQEABAECAwKANE0AaJiYaQBMN/YANE8ACwAEAQEDAQED9QAJAAAMAAP/ABAADwAAeACIAJgAAAQMuAScuASMiBiM1PgE3MhYXHgEXHgEXGwEzAxUjNQERIREDIREhAeOTBw4FBA4HDA8CBxYJGCYMBQkFBQkCepZdxlf+HQQAQPyAA4ABQAFQExwHCAUDRgUDAgoMBQ4HChQM/t0Bc/4q4OACgPwABAD8QAOAAAADADD/9gN9AzoAAwAHACkAACUhESEHIREhAT4BMhYXHgEUBgcOAiYnFj4CNz4CJicuAgYHFwUTAnP9vQJDSf5MAbT+2UKlrKVCQkJCQi5tdns7LmBfWCU4PAYwNC10fn84Vv7aFlABjUf/AAJHQkJCQkKlrKVCLTwcBRMKAxwzJTmKjoU0LTAFJilWFwEnAAACAC3/wAOtA8AAKwBpAAAFJw4DIyIuAic4ATE8ATU8ATUxMDQ1MDQxPgM3JzcXOAExATgBMRcDOAExPAExLgMxMA4CBxc+ATc+ATcxHgEXHgMXMBQ5AhwBFRwBOQIUBgcXPgE1OAExPAE1PAE1A31aGkBKUStOimk+AQERHSUWwC22AjpjLQR4j3UlO0slRgUNBR88GBg8Hyk/LBgBBQVNDBEWWR4wIhM7ZolQAgICAgICAQMDJ09NSiPALbf9x2QBMAMEd+GwayA6UjFGBxIHJkIYGEImNGNeVycEAgICAgERHhFNH0ckAgICAgICAAAE//gAIAQIA2AAJQBLAFcAagAAEzU0NjsBNSMiBh0BFAYrARUzMhYdARQWOwE1IyImPQE0Jic+ATUhNTQmKwE1MzIWHQEUFjsBFSMiBh0BFAYrATUzMjY9ATQ2Ny4BNScUBiMiJjU0NjMyFgciBhUUFhcOAQcVMD4CNTQmI8guIBoaS2suIBoaIC5rSxoaIC4dGhodAnAuIBoaS2suIBoaIC5rSxoaIC4dGhod0D0rKz09Kys9aCs9LjwSNSNBTkE9KwJCaCAuaGtLaCAuaC4gaEtraC4gaCZDGRlDJmggLmhrS2ggLmguIGhLa2guIGgmQxkZQyYZKz09Kys9PcU9Kyo7AxkXAz4CJVpYKz0AAAcAAAAABAADgAADAAcACwAPABMAFwAbAAATESERARUhNQEVITUjFSE1BTUhFQEhFSEhNSEVAAQA/oD/AAEA/wBA/wACgAEA/IABAP8AAoABAAOA/IADgP2AwMACAMDAwMDAwMD+wMDAwAAAAAkAAAAABAADgAADAAcACwAPABMAFwAbAB8AIwAAExEhEQEVITUBFSE1IxUhNREhFSElIRUhETUhFQEhFSEhNSEVAAQA/oD/AAEA/wBA/wABAP8AAoABAP8AAQD8gAEA/wACgAEAA4D8gAOA/YDAwAIAwMDAwP8AwMDAAQDAwP7AwMDAAAgAAABABAADgAADAAcACwAPABMAFwAbAB8AABMRIREBITUhNSE1IQEhNSE1ITUhASE1ITUhNSE1ITUhAAQA/UD/AAEA/wABAAFA/wABAP8AAQABQP8AAQD/AAEA/IADgAOA/MADQP0AwEDA/kDAQMD+QMBAwEDAAAcAAAAABAADgAADAAcACwAPABMAFwAbAAATESERAREhEQEVITUjFSE1ESEVIQE1IRUBIRUhAAQA/YACQP7A/wBA/wABAP8AAoABAPyAAQD/AAOA/IADgPzAAcD+QALAwMDAwP8AwAEAwMD+wMAAAAAGAAAAAAQAA4AACwAPABMAFwAbAB8AACU1IzUzNTMVMxUjFQERIREBIREhASE1ITUhNSE1ITUhAUC2tla6uv5qBAD+gP3AAkABQP8AAQD/AAEA/wABAL22Wra2WrYCw/yAA4D8wALA/UDAQMBAwAAABgAAAAAEAAOAAAsADwATABcAGwAfAAABFTMVIxUjNSM1MzUlESERASE1ITUhNSE1ITUhASERIQLAtrZWurr9lgQA/UD/AAEA/wABAP8AAQACgP3AAkACg7ZatrZatv38gAOA/MDAQMBAwP1AAsAAAAYAAAAABAADgAALAA8AEwAXABsAHwAAASMVIzUjNTM1MxUzAREhEQEhNSEFITUhBSE1ITUhESECs5BGkJBGkP1NBAD9QP8AAQABQP8AAQABQP8AAQD8gAOAAf2QkEOQkAFA/IADgPzAwMDAwMA9AcMAAAAABgAAAAAEAAOAAAsADwATABcAGwAfAAABMzUzFTMVIxUjNSMBESERBSEVISUhFSEBIREhNSE1IQFNkEaQkEaQ/rMEAP2AAQD/AP7AAQD/AAOA/IADgP8AAQABQ5CQQ5CQAoD8gAOAgMDAwP4AAcM9wAAAAAAIAAAAAAQAA4AAAwAHAAsADwATABcAGwAnAAATESERBSEVIQMhNSE1ITUhNSE1IQEhESE1ITUhAwcnByc3JzcXNxcHAAQA/YABAP8AQP8AAQD/AAEA/wABAAKA/cACQP8AAQBgPYODPYODPYODPYMDgPyAA4CAwP4AwEDAQMD9QAHAQMD9nT2Dgz2Dgz2Dgz2DAAAAAwAAAAAEAAOAAAMACAAUAAATIREhExEhESEBBycHJzcnNxc3FwcABAD8AD0Dg/x9Au1gzc1gzc1gzc1gzQOA/IADAP1AAsD902DNzWDNzWDNzWDNAAAAAAcAAABABAADgAADAAcACwAPABMAFwAbAAATESERASE1ITUhNSE1ITUhASE1ITUhNSE1ITUhAAQA/oD/AAEA/wABAP8AAQABQP8AAQD/AAEA/wABAAOA/MADQP0AwEDAQMD9QMBAwEDAAAAAAAcAAABABAADgAADAAcACwAPABMAFwAbAAATESERASE1ITUhNSEBITUhNSE1IQEhNSE1ITUhAAQA/UD/AAEA/wABAAFA/wABAP8AAQABQP8AAQD/AAEAA4D8wANA/QDAQMD+QMBAwP5AwEDAAAMAAAAABAADgAAMABAAJAAAAQcXBycHJzcnNxc3FwERIREDIwczFSMXMxUhNSE3ITUhJyE1IQN2nKBNoJ1NoKNNo51J/IoEAEAWQFZaQBr8gAE2QP6KAXNA/s0DgAI9naBNoJ1KoKNNo51NAUP8gAOA/sBAwEDAwEDAQMAAAAAABQAAAAAEAAOAAAQACAAMACUAMQAAARcVBzUFFzUHAREhEQUhFScHNSEVJwc1IREhNRc3FSE1FzcVIREFBycHFwcXNxc3JzcBQEBAAUBAQAGA/AADwP8ADTP/ADMN/wABACMdAQAwEAEA/uCdo02jnEydoE2gnQHzQA1AjU1AikAB0PyAA4CAMw00Wlo0DTP9QHYjHXNzMBBTAsNqnKNNo51NnaBNoJ0AAgBA/4ADwAOAAA0AHQAAATUFJRUFEQMzGwEzAxEnNDc2MzIXFhUUBwYjIicmA8D+QP5AAUCAQMDAQIDgHBwoKBwcHBwoKBwcAsBAgIBAgP8A/kABwP5AAcABAOAoHBwcHCgoHBwcHAAKAAAAAAQAA4AAAwAHAAsADwATABcAGwAfACMAJwAAEzMVIzchFSEVMxUjNyEVIRUzFSM3IRUhBTMVIzchFSEVMxUjNyEVIQCAgMADQPzAgIDAAoD9gICAwAHA/kD9wICAwANA/MCAgMACgP2AA4CAgIBAgICAQICAgECAgIBAgICAAAADAAD/2gQAA6YACAAMADMAAAEHJwcXCQMDATclFw4BBw4BFTkGFBYXHgEzMjY3PgE1OQY0JicuAScCCkRWVlb+kAGwAgb+VFf++iMCQKoFDwkWFAsMCRsMDBoKCQ0UFgcRBAOTQ1ZWVv6Q/lACBgGz/PMBByMzSQUPDBgvEwwaCgoMCgwMGAwTLBsMDwUAAAAEAAD/4AQAA6AAAwAHAAsADwAAEyEVIRUhFSERIRUhESERIQAEAPwABAD8AAQA/AAEAPwAAQqAakACVsACKv8AAAAAAAMAKv/AA9YDrQAFABAAFQAACQEjNQEXNyc3NjIfARYUDwEBIRUhNQLj/gq6Afe5QLlDESsRbBERQ/0HA6z8VAJz/gq5Afe6PbpDERFtESsRQ/2AcHAAAAAJAAD/8wQAA5AAAwAJABUAIQBHAFYAaAB0AI8AABMhFSEBESMRIzUFFTMVIzU3NSM1MxUlESM1MzUjNTM1IzUBPgEzMhYXHgEdARQWFyMuAScOASMiJjU0Nj8BPgE1NCYjIgYHIxcOASMHDgEVFBYzMjY3NTczFT4BMzIWFRQGIyImJxUjERcUFjMyNjU0JiMiBiUuASMiBhUUFjMyNjcXDgEjIiY1NDYzMhYXIwAEAPwAATBDQwEThsmGhskBE8yJiYmJ/ekDNTUdKw4PCwIISgICAhEgFikwLjUmDAsUExMXA0OTBAwJGhMTEhERHAmAShEfEzA6PTAYHQ5HRx0WFh0bGBYdAYYCFxQYGxsYFBcCRwg/MDdCQzkwPgJDAeBAAfD+rQEQQ9o2Q5lAN0Oamv6tQ0NHQ0P9FiwoDgwMIBpwFAwKBwUHDgsrISInBwcCBwcJDQ4PMwIEBwQPCQwODxEj3XAMCkU3Ok0QExwBVtYgJycgISUnARATJSIkJRQVAy0zRzk8RzIuAAACAAD/wAQAA8AAGQAyAAABLgMjIg4CFTM0PgIzMh4CFwchEQcTFA4CIyIuAic3IRE3HgMzMj4CNQN6I1Vgajhqu4tQYEFxmFYuV09FHZYBYIYmQXGYVi5XT0Udlv6ghiNVYGo4aruLUAMaJj4rF1CLu2pWmHFBEyQzIJYBYIb+plaYcUETJDMglv6ghiY+KxdQi7tqAAAAAAMAAP/tBAADkAAgACgALAAAASc+AzczNSE1IxUhFSEOAQcuAScjHgEXBxc3FzI2MSUjAzM3MxczJTcXIwIqdx40KyMNiv65Xf66AgYYSDMhNhZcGkQr7UTpkAMkAQZd0F0z3TNd/rNNTZoBMHYiSU1QKF1dXV1DfzckTSw6ajDpQ+mQXe390I2N6crKAAAAAAgBQAAAAsADgAADAAcACwAPABMAFwAbAB8AAAEzFSMVMxUjJTMVIwUzFSMlMxUjFTMVIyUzFSMBMxUjAkCAgICA/wCAgAEAgID/AICAgIABAICA/wCAgAOAgICAgICAgICAgICAgAOAgAAAAAIAAAAABAADoQAFAA4AAAkCNQkBBxEhESERIREBBAD+AP4AAgACAID/AP8A/wABgAFyAY3+c6IBjf5zlP6AAQD/AAGAASAAAAUAAABAA/8DAAADAAcACwAPABMAAAE3EwcpAREhFzMVIwEhESEXMxUjAkDzzPP89AEA/wBAgIABAAEA/wBAgIACn1H9oVECwIBA/gACwIBAAAAAAAMAQP/AA4ADwAAIABcAHgAAAR4BFyERHgEXAxEhIgYVERQWMyEyNjURARUjNSMJAQNHFR8E/sEfRRW5/pAhLy8hAqAhL/7AwKABAAEAAvkVRR8BPwQfFf65AYAvIfygIS8vIQIw/oDAwAEA/wAAAAADAAD/wAQAA8AAEgAZAB0AAAERIREhNyEiBhURFBYzITI2NREDARUzATQmAScBFwMA/YABYID+ACg4OCgCwCg4IP2goAJgWP34MAHgMAGg/qACgIA4KP1AKDg4KAIAAaD9oKACYEhY/YAwAeAwAAAAAgAA/8AEAAOAABIAGQAAASEiBhURFBY7AREBITI2NRE0JgMhBzUjESEDoPzAKDg4KKABMwFtKDg4SP6FxcADAAOAOCj+ACg4/wABADgoAgAoOP3Ar68BwAAAAAABAEAAAAPAA2AAJgAAAS4BMTA2NzI2JzQ2LgEjIg4BFhUGFjMeATEwBgcOAxUhNC4CAm8RBkUKHRccCBpTWlpTGggcFx0KRQYRG3BxVQOAVXFwAQEDPlZAZBkMV15KSl5XDBlkQFY+AwQtRlowMFpGLQAAAAIAAP/AAoADgAAZACMAAAEjNTQmKwEiBh0BIyIGFREUFjMhMjY1ETQmJTQ2OwEyFh0BIQJQEHFPgE9xEBQcHBQCIBQcHP5cJhqAGib/AAIAwE9xcU/AHBT+IBQcHBQB4BQcwBomJhrAAAAAAAEAAP/AA8ADgAAjAAABMhYdASM1NCYrASIGHQEzMhYVERQGIyEiJjURNDYzITU0NjMDAE9xgCYagBomEBQcHBT94BQcHBQBkHFPA4BxT8DAGiYmGsAcFP4gFBwcFAHgFBzAT3EAAAAABgAAAAAEAAOAABcAGwAzADcATwBTAAABNTQmKwEiBh0BIxUzFRQWOwEyNj0BITUFNTMVBTQmKwEiBh0BIRUhFRQWOwEyNj0BMzUjBzUzFQU0JisBIgYdASMVMxUUFjsBMjY9ASE1IQc1MxUBwBwUoBQcwMAcFKAUHAJA/QCAAcAcFKAUHP3AAkAcFKAUHMDAwID+wBwUoBQcwMAcFKAUHAJA/cDAgANAEBQcHBQQgBAUHBwUEICAgICwFBwcFBCAEBQcHBQQgICAgLAUHBwUEIAQFBwcFBCAgICAAAMAQP/AA8ADwAADAA0AEQAAFyETISU1IRUhFTchFzUhIzUzwAKAQP0AAgD/AP7AQAMAQP6AgIBAAsDAgIDAQEDAQAAAAwGAAAACgAOAAAMABwALAAABIREhFSERIRUhESEBgAEA/wABAP8AAQD/AAOA/wBA/wBA/wAAAAADAA7/wAPyA8AADwAbACQAACUBLgEjIgYHAQYWMyEyNiclIiY1NDYzMhYVFAY3IwM0NjMyFhUD8v5LDR8RER8N/ksZJTMDZjMlGf4OGyUlGxslJRFYFCUbGyUsA2cXFhYX/JksQEAsFCUbGyUlGxslwAEAGyUlGwAEAAD/wAQAA8AAAwAPADgATQAAATMVIwEyFh0BByM1NzUhNTciDgIHDgMVFB4CFx4DMzI+Ajc+AzU0LgInLgMjNTEyHgIVFA4CIyIuAjU0PgIBwICAAQAbJcCAwP7AwCpQS0QdHi0fEBAfLR4dREtQKipQS0QdHi0fEBAfLR4dREtQKmq7i1BQi7tqaruLUFCLuwEAgAJAJRvAgECAQICgEB8tHh1ES1AqKlBLRB0eLR8QEB8tHh1ES1AqKlBLRB0eLR8QYFCLu2pqu4tQUIu7amq7i1AAAAADAAD/wAQAA8AAEwAnADMAAAEiDgIVFB4CMzI+AjU0LgIDIi4CNTQ+AjMyHgIVFA4CEyMVIzUjNTM1MxUzAgBqu4tQUIu7amq7i1BQi7tqUItpPDxpi1BQi2k8PGmLsMCAwMCAwAPAUIu7amq7i1BQi7tqaruLUPyAPGmLUFCLaTw8aYtQUItpPAFAwMCAwMAAAAAAAwAA/8AEAAPAABMAFwAhAAABIg4CFRQeAjMyPgI1NC4CBzMVIxMhNTMRIzUzETMCAGq7i1BQi7tqaruLUFCLu6qAgMD/AEBAwEADwFCLu2pqu4tQUIu7amq7i1DAgP4AQAEAQP7AAAADAAD/wAQAA8AACQANABEAACUBIQERASEBEQEDIzUzNSMRMwQA/uD+QP7gASABwAEg/uCggICAgOAC4P7g/kD+4AEgAcABIPzAgIABgAAAAAIAn//AA2EDwAAeADYAAAEuAycOAwcOAR4BFx4DMzI+Ajc+AiYnAw4BIyImJx4BMzI+Ajc+ASceARceAQcDYRlLXGo3N2pcSxkPEAIUFhlIWWU1NWVZSBkWFAIQD34hfEYpTiEKFAosVEo9FCIDDQsTBxEMIgHnRYJ3bC8vbHeCRStYWFYpLkw2HR02TC4pVlhYK/7iPksbGAIBGC0/J0CANRYqFDCCQQAAAAABAAABQAQAAkAADwAAExUUFjMhMjY9ATQmIyEiBgATDQPADRMTDfxADRMCIMANExMNwA0TEwAAAAEAAP/ABAADwAAjAAABIRE0JisBIgYVESEiBh0BFBYzIREUFjsBMjY1ESEyNj0BNCYD4P6gEw3ADRP+oA0TEw0BYBMNwA0TAWANExMCQAFgDRMTDf6gEw3ADRP+oA0TEw0BYBMNwA0TAAAAAAEAAACABAADQAAFAAATFwkBNwEAwAFAAUDA/gABQMABQP7AwAIAAAABAMD/wAOAA8AABQAAAQcJARcBAYDAAUD+wMACAAPAwP7A/sDAAgAAAQAAAEAEAAMAAAUAAAEnCQEHAQQAwP7A/sDAAgACQMD+wAFAwP4AAAEBAAFAAwACQAACAAAJAgMA/wD/AAFAAQD/AAABAQABQAMAAkAAAgAACQIBAAEAAQACQP8AAQAAAgEAAIADAALAAAIABQAACQIJAgEAAQABAP4AAQABAALA/wABAP7A/wABAAACAEAAAAPAA4AACQARAAABNxEhESEHIREhAREnASM1AScCwID9AAIAgP8AAgABAIP+nlsBY4MBgID+AAMAgP4AAwD+oIP+nVsBYoMAAQAgAEAD4ANAACMAAAEiDgIVIxc3IzQ+AjMyHgIVFA4CIxUyPgI1NC4CIwJgUItpPMD398ArSmQ5OWRKKytKZDlQi2k8PGmLUANAPGmLUPf3OWRKKytKZDk5ZEorbjxpi1BQi2k8AAABACAAQAPgA0AAIwAAATIeAhUzByczNC4CIyIOAhUUHgIzFSIuAjU0PgIzAaBQi2k8wPf3wCtKZDk5ZEorK0pkOVCLaTw8aYtQA0A8aYtQ9/c5ZEorK0pkOTlkSituPGmLUFCLaTwAAAIAAAAABAADwAACAAUAABMhERkBIQAEAPwAAkABgPxAAYAAAAIAAP/AA8ADwAACAAUAAAERISkBEQJAAYD8QAGAA8D8AAQAAAMAAP/YA+gDwAAiADYAQgAAJScuAQc+ATU0LgIjIg4CFRQeAjMyNjcGFh8BHgE3NiYBIi4CNTQ+AjMyHgIVFA4CEyMVIxUzFTM1MzUjA+DyEycQKzE8aYtQUItpPDxpi1BHgDIBEBHOG0sbGgT9gjVdRigoRl01NV1GKChGXQuAgICAgIBZzhEQATKAR1CLaTw8aYtQUItpPDErECcT8h4EGhtLAQIoRl01NV1GKChGXTU1XUYoAcCAgICAgAAAAAMAAP/YA+gDwAAiADYAOgAAJScuAQc+ATU0LgIjIg4CFRQeAjMyNjcGFh8BHgE3NiYBIi4CNTQ+AjMyHgIVFA4CAyEVIQPg8hMnECsxPGmLUFCLaTw8aYtQR4AyARARzhtLGxoE/YI1XUYoKEZdNTVdRigoRl31AYD+gFnOERABMoBHUItpPDxpi1BQi2k8MSsQJxPyHgQaG0sBAihGXTU1XUYoKEZdNTVdRigBQIAAAgAAAAAEAANAAAQATgAAASEJAgE1IyczNSMnMzUjJzM1IyczNSMnMzUjJzM1IyczNSMnMzUjJzM1ISchNSEnITUhJyE1ISc3MxUzFyMVMxchFSEXIRUhFyEVIRcBAwD+AP8AAgACAP4AAg8RHw4tOw5JWA5mdA6CkQ6frQ67yQ/Y5g70/v4PARH+4Q4BLf7FDgFJ/qgHi9TXEOf3EP75ARcQ/tkBNxD+uQFXCP6hA0D/AP3AAkD+dQMQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAIiwMQEBAQEBAQEAj+dQADAEAAQAPAAwAAAwAHAAsAABMhFSEVIRUhFSEVIUADgPyAA4D8gAOA/IADAMBAwEDAAAAACgAA/8AEAAPAAA0AGwApADcARgBUAGMAcgCGAJIAACUyFh0BFAYjIiY9ATQ2EyImPQE0NjMyFh0BFAYBMhYVFAYrASImNTQ2MwUUBisBIiY1NDY7ATIWBRcWFAcGIi8BJjQ3NjIXAScmNDc2Mh8BFhQHBiIlBiInJjQ/ATYyFxYUDwEBNjIXFhQPAQYiJyY0PwEBIg4CFRQeAjMyPgI1NC4CAyImNTQ2MzIWFRQGAgAbJSUbGyUlGxslJRsbJSUBpRslJRtAGyUlG/1AJRtAGyUlG0AbJQJ9LRMTEzUSLhISEzUT/YYtExMTNRIuEhITNQJnEzUTEhIuEjUTExMt/YYTNRMSEi4SNRMTEy0BPTVdRigoRl01NV1GKChGXTVCXl5CQl5egCUbQBslJRtAGyUCgCUbQBslJRtAGyX/ACUbGyUlGxslQBslJRsbJSX9LhI1ExMTLRM1ExISAcQuEjUTExMtEzUTEhISEhM1Ey0TExM1Ei7+PBISEzUTLRMTEzUSLgHiKEZdNTVdRigoRl01NV1GKP5gXkJCXl5CQl4AAAAAAQAzAAUDiAPAABoAAAEuASceAgYHDgMnHgEXHgE+ATc+AS4BJwLMLWAxLjYLISgocoeVSx5LLlzKv6Q1NRgzelwDgBogBjyNlZdFRmhBGAonQxo1GDN6XFzLv6M2AAAAAgAA/8AEAAPAABMAHgAAASIOAhUUHgIzMj4CNTQuAgE0PgIzESIuAgIAaruLUFCLu2pqu4tQUIu7/hY8aYtQUItpPAPAUIu7amq7i1BQi7tqaruLUP4AUItpPP0APGmLAAAAAAEAgwBDA30DPQALAAABJwkBBwkBFwkBNwEDfVr+3f7dWgEi/t5aASMBI1r+3gLjWv7eASJa/t3+3VoBIv7eWgEjAAAAAQCg/8ADYAPAAAUAAAU3CQEnAQKgwP7AAUDA/gBAwAFAAUDA/gAAAAEAAP/ABAADwAAoAAATERQWMzI2PQEBIyIGFRQWMyEyNjURNCYjIgYdAQEzMjY1NCYjISIGFQAlGxslAqXlGyUlGwGAGyUlGxsl/VvlGyUlG/6AGyUDgP6AGyUlG+X9WyUbGyUlGwGAGyUlG+UCpSUbGyUlGwAAAAMAAP/ABAADwAASABUAGAAAATcnByE1IxUjFTMRIRUzNTM1IwEhARcBEQNAwEDA/kCAwMACAIDAwP4AAUD+wEABQALAwEDAwMCA/gDAwIABgP7AQAFA/sAAAAAAAQAAAAEAAIDhI9VfDzz1AAsEAAAAAADUE+rqAAAAANQT6ur/4P+ABAgDwAAAAAgAAgAAAAAAAAABAAADwP/AAAAEAP/g//gECAABAAAAAAAAAAAAAAAAAAAAfQQAAAAAAAAAAAAAAAIAAAAEAAAABAAAQAQAAAAEAAAABAAAAAQAAAAEAAAABAAAbQQAAEAEAAAABAAAAAQAAEAEAAAABAAAAAQAAAAEAABABAABBgQAAC4EAAAABAAAwAQAAAAEAAAABAAAAAQAAEAEAAA2BAAAAAQAANAEAAAABAAAAAQAAAAEAAAcBAAAHAQAAAAEAAAABAAAAAQAAAAEAABABAAAAAQAAAAEAAAABAD/4AQAAMAEAACABAAAwAQAAAAEAACgBAAAQAQAACAEAAAABAABAAQAAIAEAAAABAAAQAQAAAAEAAAwBAAALQQA//gEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAEAEAAAABAAAAAQAAAAEAAAqBAAAAAQAAAAEAAAABAABQAQAAAAEAAAABAAAQAQAAAAEAAAABAAAQAQAAAAEAAAABAAAAAQAAEAEAAGABAAADgQAAAAEAAAABAAAAAQAAAAEAACfBAAAAAQAAAAEAAAABAAAwAQAAAAEAAEABAABAAQAAQAEAABABAAAIAQAACAEAAAABAAAAAQAAAAEAAAABAAAAAQAAEAEAAAABAAAMwQAAAAEAACDBAAAoAQAAAAEAAAAAAAAAAAKABQAHgBCAI4A6AEQATgBYgGIAlICmgMUA14DnAPKA/gEUARuBI4FPAX6BhYGRgaEBvAHEAeCCCAIPAiECJIIwgjsCRYJYAnWChgKUAquCtALQAuCC8YMAAwYDEwMpAzGDPANGg1QDagNvA4gDnQOuA8AD3gQABA2EHgQtBDsESQRXBGWEdASGhJGEnwSshLyE0YTehO8FAQUJhRSFRgVZBWsFeIWBhYwFmgWoBbOFwgXPhdyF+AYAhgeGFoYxhkQGUQZbBnCGd4aFBooGjwaUBpeGmwaghqoGtwbEBsiGzQblBvsHFwcdh1IHXgdqh3MHeAeHB5KAAEAAAB9AJMADwAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKR0aW55bWNlAHQAaQBuAHkAbQBjAGVWZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADB0aW55bWNlAHQAaQBuAHkAbQBjAGV0aW55bWNlAHQAaQBuAHkAbQBjAGVSZWd1bGFyAFIAZQBnAHUAbABhAHJ0aW55bWNlAHQAaQBuAHkAbQBjAGVGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},function(e,t,r){t=e.exports=r(0)()
t.push([e.i,".mce-tinymce .mce-container-body {\n  overflow: auto; }\n.mce-tinymce :focus {\n  outline: dotted 1px; }\n\n.mce-grid td.mce-grid-cell div:focus {\n  outline: thin dotted #333;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n  text-decoration: none;\n  outline-offset: 0px; }\n\n.mce-tinymce .mce-menu-item .mce-disabled .mce-text {\n  color: #2D3B45; }\n\n.mce-tinymce .mce-menu-item .mce-menu-shortcut {\n  color: #2D3B45; }\n\n.mce-tinymce .mce-menu-item:focus .mce-ico, .mce-tinymce .mce-menu-item:focus .mce-menu-shortcut, .mce-tinymce .mce-menu-item:focus .mce-text, .mce-tinymce .mce-menu-item:hover .mce-ico, .mce-tinymce .mce-menu-item:hover .mce-menu-shortcut, .mce-tinymce .mce-menu-item:hover .mce-text {\n  color: #2D3B45; }\n\n.mce-tinymce .mce-menu-item:focus .mce-caret, .mce-tinymce .mce-menu-item:hover .mce-caret {\n  border-left-color: #2D3B45; }\n\n.mce-statusbar .mce-container-body {\n  overflow: hidden; }\n\n.mce-toolbar .mce-btn {\n  background-color: transparent; }\n\n.mce-tinymce .mce-btn.mce-active:after {\n  content: ' ';\n  position: absolute;\n  display: block;\n  bottom: 0;\n  left: 50%;\n  width: 0;\n  height: 0;\n  margin-left: -4px;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid #2D3B45; }\n\n.mce-tinymce .mce-btn.mce-active:focus:after {\n  bottom: 1px;\n  border-bottom-color: #008EE2; }\n\n.mce-tinymce .mce-active.mce-menubtn:after {\n  display: none; }\n\n.mce-tinymce :focus {\n  outline: 2px solid #008EE2;\n  outline-offset: -2px; }\n",""])},function(e,t,r){t=e.exports=r(0)()
t.push([e.i,".mce-object{border:1px dotted #3A3A3A;background:#d5d5d5 url("+r(3)+") no-repeat center}.mce-pagebreak{cursor:default;display:block;border:0;width:100%;height:5px;border:1px dashed #666;margin-top:15px;page-break-before:always}@media print{.mce-pagebreak{border:0}}.mce-item-anchor{cursor:default;display:inline-block;-webkit-user-select:all;-webkit-user-modify:read-only;-moz-user-select:all;-moz-user-modify:read-only;user-select:all;user-modify:read-only;width:9px!important;height:9px!important;border:1px dotted #3A3A3A;background:#d5d5d5 url("+r(2)+") no-repeat center}.mce-nbsp,.mce-shy{background:#AAA}.mce-shy::after{content:'-'}hr{cursor:default}.mce-match-marker{background:#AAA;color:#fff}.mce-match-marker-selected{background:#39f;color:#fff}.mce-spellchecker-word{border-bottom:2px solid red;cursor:default}.mce-spellchecker-grammar{border-bottom:2px solid green;cursor:default}.mce-item-table,.mce-item-table td,.mce-item-table th,.mce-item-table caption{border:1px dashed #BBB}td.mce-item-selected,th.mce-item-selected{background-color:#39f!important}.mce-edit-focus{outline:1px dotted #333}",""])},function(e,t,r){t=e.exports=r(0)()
t.push([e.i,".mce-container,.mce-container *,.mce-widget,.mce-widget *,.mce-reset{margin:0;padding:0;border:0;outline:0;vertical-align:top;background:0 0;text-decoration:none;color:#333;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;text-shadow:none;float:none;position:static;width:auto;height:auto;white-space:nowrap;cursor:inherit;-webkit-tap-highlight-color:transparent;line-height:normal;font-weight:400;text-align:left;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;direction:ltr;max-width:none}.mce-widget button{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.mce-container [unselectable]{-moz-user-select:none;-webkit-user-select:none;-o-user-select:none;user-select:none}.mce-fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mce-fade.mce-in{opacity:1}.mce-tinymce{visibility:inherit!important;position:relative}.mce-fullscreen{border:0;padding:0;margin:0;overflow:hidden;height:100%;z-index:100}div.mce-fullscreen{position:fixed;top:0;left:0;width:100%;height:auto}.mce-tinymce{display:block}.mce-wordcount{position:absolute;top:0;right:0;padding:8px}div.mce-edit-area{background:#FFF;filter:none}.mce-statusbar{position:relative}.mce-statusbar .mce-container-body{position:relative}.mce-fullscreen .mce-resizehandle{display:none}.mce-charmap{border-collapse:collapse}.mce-charmap td{cursor:default;border:1px solid rgba(0,0,0,.2);width:20px;height:20px;line-height:20px;text-align:center;vertical-align:middle;padding:2px}.mce-charmap td div{text-align:center}.mce-charmap td:hover{background:#d9d9d9}.mce-grid td.mce-grid-cell div{border:1px solid #d6d6d6;width:15px;height:15px;margin:0;cursor:pointer}.mce-grid td.mce-grid-cell div:focus{border-color:#3498db}.mce-grid td.mce-grid-cell div[disabled]{cursor:not-allowed}.mce-grid{border-spacing:2px;border-collapse:separate}.mce-grid a{display:block;border:1px solid transparent}.mce-grid a:hover,.mce-grid a:focus{border-color:#3498db}.mce-grid-border{margin:0 4px}.mce-grid-border a{border-color:#d6d6d6;width:13px;height:13px}.mce-grid-border a:hover,.mce-grid-border a.mce-active{border-color:#3498db;background:#3498db}.mce-text-center{text-align:center}div.mce-tinymce-inline{width:100%}.mce-colorbtn-trans div{text-align:center;vertical-align:middle;font-weight:700;font-size:20px;line-height:16px;color:#707070}.mce-toolbar-grp{padding:2px 0}.mce-toolbar-grp .mce-flow-layout-item{margin-bottom:0}.mce-rtl .mce-wordcount{left:0;right:auto}.mce-croprect-container{position:absolute;top:0;left:0}.mce-croprect-handle{position:absolute;top:0;left:0;width:20px;height:20px;border:2px solid #fff}.mce-croprect-handle-nw{border-width:2px 0 0 2px;margin:-2px 0 0 -2px;cursor:nw-resize;top:100px;left:100px}.mce-croprect-handle-ne{border-width:2px 2px 0 0;margin:-2px 0 0 -20px;cursor:ne-resize;top:100px;left:200px}.mce-croprect-handle-sw{border-width:0 0 2px 2px;margin:-20px 2px 0 -2px;cursor:sw-resize;top:200px;left:100px}.mce-croprect-handle-se{border-width:0 2px 2px 0;margin:-20px 0 0 -20px;cursor:se-resize;top:200px;left:200px}.mce-croprect-handle-move{position:absolute;cursor:move;border:0}.mce-croprect-block{opacity:.3;filter:alpha(opacity=30);zoom:1;position:absolute;background:#000}.mce-imagepanel{overflow:auto;background:#000}.mce-imagepanel img{position:absolute}.mce-imagetool.mce-btn .mce-ico{display:block;width:20px;height:20px;text-align:center;line-height:20px;font-size:20px;padding:5px}.mce-container,.mce-container-body{display:block}.mce-autoscroll{overflow:hidden}.mce-scrollbar{position:absolute;width:7px;height:100%;top:2px;right:2px;opacity:.4;filter:alpha(opacity=40);zoom:1}.mce-scrollbar-h{top:auto;right:auto;left:2px;bottom:2px;width:100%;height:7px}.mce-scrollbar-thumb{position:absolute;background-color:#000;border:1px solid #888;border-color:rgba(85,85,85,.6);width:5px;height:100%}.mce-scrollbar-h .mce-scrollbar-thumb{width:100%;height:5px}.mce-scrollbar:hover,.mce-scrollbar.mce-active{background-color:#AAA;opacity:.6;filter:alpha(opacity=60);zoom:1}.mce-scroll{position:relative}.mce-panel{border:0 solid rgba(0,0,0,.2);background-color:#f0f0f0}.mce-floatpanel{position:absolute}.mce-floatpanel.mce-fixed{position:fixed}.mce-floatpanel .mce-arrow,.mce-floatpanel .mce-arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.mce-floatpanel .mce-arrow{border-width:11px}.mce-floatpanel .mce-arrow:after{border-width:10px;content:\"\"}.mce-floatpanel.mce-popover{filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);background:0 0;top:0;left:0;background:#fff;border:1px solid rgba(0,0,0,.2);border:1px solid rgba(0,0,0,.25)}.mce-floatpanel.mce-popover.mce-bottom{margin-top:10px;*margin-top:0}.mce-floatpanel.mce-popover.mce-bottom>.mce-arrow{left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:rgba(0,0,0,.2);border-bottom-color:rgba(0,0,0,.25);top:-11px}.mce-floatpanel.mce-popover.mce-bottom>.mce-arrow:after{top:1px;margin-left:-10px;border-top-width:0;border-bottom-color:#fff}.mce-floatpanel.mce-popover.mce-bottom.mce-start{margin-left:-22px}.mce-floatpanel.mce-popover.mce-bottom.mce-start>.mce-arrow{left:20px}.mce-floatpanel.mce-popover.mce-bottom.mce-end{margin-left:22px}.mce-floatpanel.mce-popover.mce-bottom.mce-end>.mce-arrow{right:10px;left:auto}.mce-fullscreen{border:0;padding:0;margin:0;overflow:hidden;height:100%}div.mce-fullscreen{position:fixed;top:0;left:0}#mce-modal-block{opacity:0;filter:alpha(opacity=0);zoom:1;position:fixed;left:0;top:0;width:100%;height:100%;background:#000}#mce-modal-block.mce-in{opacity:.3;filter:alpha(opacity=30);zoom:1}.mce-window-move{cursor:move}.mce-window{filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);background:0 0;background:#fff;position:fixed;top:0;left:0;opacity:0;-webkit-transition:opacity 150ms ease-in;transition:opacity 150ms ease-in}.mce-window.mce-in{opacity:1}.mce-window-head{padding:9px 15px;border-bottom:1px solid #c5c5c5;position:relative}.mce-window-head .mce-close{position:absolute;right:15px;top:9px;font-size:20px;font-weight:700;line-height:20px;color:#858585;cursor:pointer;height:20px;overflow:hidden}.mce-close:hover{color:#adadad}.mce-window-head .mce-title{line-height:20px;font-size:20px;font-weight:700;text-rendering:optimizelegibility;padding-right:10px}.mce-window .mce-container-body{display:block}.mce-foot{display:block;background-color:#fff;border-top:1px solid #c5c5c5}.mce-window-head .mce-dragh{position:absolute;top:0;left:0;cursor:move;width:90%;height:100%}.mce-window iframe{width:100%;height:100%}.mce-window-body .mce-listbox{border-color:#ccc}.mce-rtl .mce-window-head .mce-close{position:absolute;right:auto;left:15px}.mce-rtl .mce-window-head .mce-dragh{left:auto;right:0}.mce-rtl .mce-window-head .mce-title{direction:rtl;text-align:right}.mce-abs-layout{position:relative}body .mce-abs-layout-item,.mce-abs-end{position:absolute}.mce-abs-end{width:1px;height:1px}.mce-container-body.mce-abs-layout{overflow:hidden}.mce-tooltip{position:absolute;padding:5px;opacity:.8;filter:alpha(opacity=80);zoom:1}.mce-tooltip-inner{font-size:11px;background-color:#000;color:#fff;max-width:200px;padding:5px 8px 4px;text-align:center;white-space:normal}.mce-tooltip-arrow{position:absolute;width:0;height:0;line-height:0;border:5px dashed #000}.mce-tooltip-arrow-n{border-bottom-color:#000}.mce-tooltip-arrow-s{border-top-color:#000}.mce-tooltip-arrow-e{border-left-color:#000}.mce-tooltip-arrow-w{border-right-color:#000}.mce-tooltip-nw,.mce-tooltip-sw{margin-left:-14px}.mce-tooltip-n .mce-tooltip-arrow{top:0;left:50%;margin-left:-5px;border-bottom-style:solid;border-top:none;border-left-color:transparent;border-right-color:transparent}.mce-tooltip-nw .mce-tooltip-arrow{top:0;left:10px;border-bottom-style:solid;border-top:none;border-left-color:transparent;border-right-color:transparent}.mce-tooltip-ne .mce-tooltip-arrow{top:0;right:10px;border-bottom-style:solid;border-top:none;border-left-color:transparent;border-right-color:transparent}.mce-tooltip-s .mce-tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-top-style:solid;border-bottom:none;border-left-color:transparent;border-right-color:transparent}.mce-tooltip-sw .mce-tooltip-arrow{bottom:0;left:10px;border-top-style:solid;border-bottom:none;border-left-color:transparent;border-right-color:transparent}.mce-tooltip-se .mce-tooltip-arrow{bottom:0;right:10px;border-top-style:solid;border-bottom:none;border-left-color:transparent;border-right-color:transparent}.mce-tooltip-e .mce-tooltip-arrow{right:0;top:50%;margin-top:-5px;border-left-style:solid;border-right:none;border-top-color:transparent;border-bottom-color:transparent}.mce-tooltip-w .mce-tooltip-arrow{left:0;top:50%;margin-top:-5px;border-right-style:solid;border-left:none;border-top-color:transparent;border-bottom-color:transparent}.mce-btn{border:1px solid #b1b1b1;border-color:transparent;position:relative;text-shadow:0 1px 1px rgba(255,255,255,.75);display:inline-block;*display:inline;*zoom:1;background-color:#f0f0f0}.mce-btn:hover,.mce-btn:focus{color:#333;background-color:#e3e3e3;border-color:#ccc}.mce-btn.mce-disabled button,.mce-btn.mce-disabled:hover button{cursor:default;opacity:.4;filter:alpha(opacity=40);zoom:1}.mce-btn.mce-active,.mce-btn.mce-active:hover{background-color:#dbdbdb;border-color:#ccc}.mce-btn:active{background-color:#e0e0e0;border-color:#ccc}.mce-btn button{padding:4px 8px;font-size:14px;line-height:20px;*line-height:16px;cursor:pointer;color:#333;text-align:center;overflow:visible;-webkit-appearance:none}.mce-btn button::-moz-focus-inner{border:0;padding:0}.mce-btn i{text-shadow:1px 1px none}.mce-primary{min-width:50px;color:#fff;border:1px solid transparent;border-color:transparent;background-color:#2d8ac7}.mce-primary:hover,.mce-primary:focus{background-color:#257cb6;border-color:transparent}.mce-primary.mce-disabled button,.mce-primary.mce-disabled:hover button{cursor:default;opacity:.4;filter:alpha(opacity=40);zoom:1}.mce-primary.mce-active,.mce-primary.mce-active:hover,.mce-primary:not(.mce-disabled):active{background-color:#206ea1}.mce-primary button,.mce-primary button i{color:#fff;text-shadow:1px 1px none}.mce-btn-large button{padding:9px 14px;font-size:16px;line-height:normal}.mce-btn-large i{margin-top:2px}.mce-btn-small button{padding:1px 5px;font-size:12px;*padding-bottom:2px}.mce-btn-small i{line-height:20px;vertical-align:top;*line-height:18px}.mce-btn .mce-caret{margin-top:8px;margin-left:0}.mce-btn-small .mce-caret{margin-top:8px;margin-left:0}.mce-caret{display:inline-block;*display:inline;*zoom:1;width:0;height:0;vertical-align:top;border-top:4px solid #333;border-right:4px solid transparent;border-left:4px solid transparent;content:\"\"}.mce-disabled .mce-caret{border-top-color:#aaa}.mce-caret.mce-up{border-bottom:4px solid #333;border-top:0}.mce-btn-flat{border:0;background:0 0;filter:none}.mce-btn-flat:hover,.mce-btn-flat.mce-active,.mce-btn-flat:focus,.mce-btn-flat:active{border:0;background:#e6e6e6;filter:none}.mce-btn-has-text .mce-ico{padding-right:5px}.mce-rtl .mce-btn button{direction:rtl}.mce-btn-group .mce-btn{border-width:1px;margin:0;margin-left:2px}.mce-btn-group:not(:first-child){border-left:1px solid #d9d9d9;padding-left:3px;margin-left:3px}.mce-btn-group .mce-first{margin-left:0}.mce-btn-group .mce-btn.mce-flow-layout-item{margin:0}.mce-rtl .mce-btn-group .mce-btn{margin-left:0;margin-right:2px}.mce-rtl .mce-btn-group .mce-first{margin-right:0}.mce-rtl .mce-btn-group:not(:first-child){border-left:none;border-right:1px solid #d9d9d9;padding-right:4px;margin-right:4px}.mce-checkbox{cursor:pointer}i.mce-i-checkbox{margin:0 3px 0 0;border:1px solid #c5c5c5;background-color:#f0f0f0;text-indent:-10em;*font-size:0;*line-height:0;*text-indent:0;overflow:hidden}.mce-checked i.mce-i-checkbox{color:#333;font-size:16px;line-height:16px;text-indent:0}.mce-checkbox:focus i.mce-i-checkbox,.mce-checkbox.mce-focus i.mce-i-checkbox{border:1px solid rgba(82,168,236,.8)}.mce-checkbox.mce-disabled .mce-label,.mce-checkbox.mce-disabled i.mce-i-checkbox{color:#acacac}.mce-checkbox .mce-label{vertical-align:middle}.mce-rtl .mce-checkbox{direction:rtl;text-align:right}.mce-rtl i.mce-i-checkbox{margin:0 0 0 3px}.mce-combobox{display:inline-block;*display:inline;*zoom:1;*height:32px}.mce-combobox input{border:1px solid #c5c5c5;border-right-color:#c5c5c5;height:28px}.mce-combobox.mce-disabled input{color:#adadad}.mce-combobox .mce-btn{border:1px solid #c5c5c5;border-left:0}.mce-combobox button{padding-right:8px;padding-left:8px}.mce-combobox.mce-disabled .mce-btn button{cursor:default;opacity:.4;filter:alpha(opacity=40);zoom:1}.mce-colorbox i{border:1px solid #c5c5c5;width:14px;height:14px}.mce-colorbutton .mce-ico{position:relative}.mce-colorbutton-grid{margin:4px}.mce-colorbutton button{padding-right:6px;padding-left:6px}.mce-colorbutton .mce-preview{padding-right:3px;display:block;position:absolute;left:50%;top:50%;margin-left:-17px;margin-top:7px;background:gray;width:13px;height:2px;overflow:hidden}.mce-colorbutton.mce-btn-small .mce-preview{margin-left:-16px;padding-right:0;width:16px}.mce-colorbutton .mce-open{padding-left:4px;padding-right:4px;border-left:1px solid transparent}.mce-colorbutton:hover .mce-open{border-color:#ccc}.mce-colorbutton.mce-btn-small .mce-open{padding:0 3px}.mce-rtl .mce-colorbutton{direction:rtl}.mce-rtl .mce-colorbutton .mce-preview{margin-left:0;padding-right:0;padding-left:3px}.mce-rtl .mce-colorbutton.mce-btn-small .mce-preview{margin-left:0;padding-right:0;padding-left:2px}.mce-rtl .mce-colorbutton .mce-open{padding-left:4px;padding-right:4px;border-left:0}.mce-colorpicker{position:relative;width:250px;height:220px}.mce-colorpicker-sv{position:absolute;top:0;left:0;width:90%;height:100%;border:1px solid #c5c5c5;cursor:crosshair;overflow:hidden}.mce-colorpicker-h-chunk{width:100%}.mce-colorpicker-overlay1,.mce-colorpicker-overlay2{width:100%;height:100%;position:absolute;top:0;left:0}.mce-colorpicker-overlay1{filter:progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr='#ffffff', endColorstr='#00ffffff');-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(GradientType=1,startColorstr='#ffffff', endColorstr='#00ffffff')\";background:linear-gradient(to right,#fff,rgba(255,255,255,0))}.mce-colorpicker-overlay2{filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#00000000', endColorstr='#000000');-ms-filter:\"progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#00000000', endColorstr='#000000')\";background:linear-gradient(to bottom,rgba(0,0,0,0),#000)}.mce-colorpicker-selector1{background:0 0;position:absolute;width:12px;height:12px;margin:-8px 0 0 -8px;border:1px solid #000;border-radius:50%}.mce-colorpicker-selector2{position:absolute;width:10px;height:10px;border:1px solid #fff;border-radius:50%}.mce-colorpicker-h{position:absolute;top:0;right:0;width:6.5%;height:100%;border:1px solid #c5c5c5;cursor:crosshair}.mce-colorpicker-h-marker{margin-top:-4px;position:absolute;top:0;left:-1px;width:100%;border:1px solid #333;background:#fff;height:4px;z-index:100}.mce-path{display:inline-block;*display:inline;*zoom:1;padding:8px;white-space:normal}.mce-path .mce-txt{display:inline-block;padding-right:3px}.mce-path .mce-path-body{display:inline-block}.mce-path-item{display:inline-block;*display:inline;*zoom:1;cursor:pointer;color:#333}.mce-path-item:hover{text-decoration:underline}.mce-path-item:focus{background:#666;color:#fff}.mce-path .mce-divider{display:inline}.mce-disabled .mce-path-item{color:#aaa}.mce-rtl .mce-path{direction:rtl}.mce-fieldset{border:0 solid #9E9E9E}.mce-fieldset>.mce-container-body{margin-top:-15px}.mce-fieldset-title{margin-left:5px;padding:0 5px}.mce-fit-layout{display:inline-block;*display:inline;*zoom:1}.mce-fit-layout-item{position:absolute}.mce-flow-layout-item{display:inline-block;*display:inline;*zoom:1}.mce-flow-layout-item{margin:2px 0 2px 2px}.mce-flow-layout-item.mce-last{margin-right:2px}.mce-flow-layout{white-space:normal}.mce-tinymce-inline .mce-flow-layout{white-space:nowrap}.mce-rtl .mce-flow-layout{text-align:right;direction:rtl}.mce-rtl .mce-flow-layout-item{margin:2px 2px 2px 0}.mce-rtl .mce-flow-layout-item.mce-last{margin-left:2px}.mce-iframe{border:0 solid rgba(0,0,0,.2);width:100%;height:100%}.mce-label{display:inline-block;*display:inline;*zoom:1;text-shadow:0 1px 1px rgba(255,255,255,.75);overflow:hidden}.mce-label.mce-autoscroll{overflow:auto}.mce-label.mce-disabled{color:#aaa}.mce-label.mce-multiline{white-space:pre-wrap}.mce-label.mce-error{color:#a00}.mce-rtl .mce-label{text-align:right;direction:rtl}.mce-menubar .mce-menubtn{border-color:transparent;background:0 0;filter:none}.mce-menubar{border:1px solid rgba(217,217,217,.52)}.mce-menubar .mce-menubtn button span{color:#333}.mce-menubar .mce-caret{border-top-color:#333}.mce-menubar .mce-menubtn:hover,.mce-menubar .mce-menubtn.mce-active,.mce-menubar .mce-menubtn:focus{border-color:#ccc;background:#fff;filter:none}.mce-menubtn span{color:#333;margin-right:2px;line-height:20px;*line-height:16px}.mce-menubtn.mce-btn-small span{font-size:12px}.mce-menubtn.mce-fixed-width span{display:inline-block;overflow-x:hidden;text-overflow:ellipsis;width:90px}.mce-menubtn.mce-fixed-width.mce-btn-small span{width:70px}.mce-menubtn .mce-caret{*margin-top:6px}.mce-rtl .mce-menubtn button{direction:rtl;text-align:right}.mce-menu-item{display:block;padding:6px 15px 6px 12px;clear:both;font-weight:400;line-height:20px;color:#333;white-space:nowrap;cursor:pointer;line-height:normal;border-left:4px solid transparent;margin-bottom:1px}.mce-menu-item .mce-ico,.mce-menu-item .mce-text{color:#333}.mce-menu-item.mce-disabled .mce-text,.mce-menu-item.mce-disabled .mce-ico{color:#adadad}.mce-menu-item:hover .mce-text,.mce-menu-item.mce-selected .mce-text,.mce-menu-item:focus .mce-text{color:#fff}.mce-menu-item:hover .mce-ico,.mce-menu-item.mce-selected .mce-ico,.mce-menu-item:focus .mce-ico{color:#fff}.mce-menu-item.mce-disabled:hover{background:#ccc}.mce-menu-shortcut{display:inline-block;color:#adadad}.mce-menu-shortcut{display:inline-block;*display:inline;*zoom:1;padding:0 15px 0 20px}.mce-menu-item:hover .mce-menu-shortcut,.mce-menu-item.mce-selected .mce-menu-shortcut,.mce-menu-item:focus .mce-menu-shortcut{color:#fff}.mce-menu-item .mce-caret{margin-top:4px;*margin-top:3px;margin-right:6px;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:4px solid #333}.mce-menu-item.mce-selected .mce-caret,.mce-menu-item:focus .mce-caret,.mce-menu-item:hover .mce-caret{border-left-color:#fff}.mce-menu-align .mce-menu-shortcut{*margin-top:-2px}.mce-menu-align .mce-menu-shortcut,.mce-menu-align .mce-caret{position:absolute;right:0}.mce-menu-item.mce-active i{visibility:visible}.mce-menu-item-normal.mce-active{background-color:#3498db}.mce-menu-item-preview.mce-active{border-left:5px solid #aaa}.mce-menu-item-normal.mce-active .mce-text{color:#fff}.mce-menu-item-normal.mce-active:hover .mce-text,.mce-menu-item-normal.mce-active:hover .mce-ico{color:#fff}.mce-menu-item-normal.mce-active:focus .mce-text,.mce-menu-item-normal.mce-active:focus .mce-ico{color:#fff}.mce-menu-item:hover,.mce-menu-item.mce-selected,.mce-menu-item:focus{text-decoration:none;color:#fff;background-color:#2d8ac7}div.mce-menu .mce-menu-item-sep,.mce-menu-item-sep:hover{border:0;padding:0;height:1px;margin:9px 1px;overflow:hidden;background:0 0;border-bottom:1px solid rgba(0,0,0,.1);cursor:default;filter:none}.mce-menu.mce-rtl{direction:rtl}.mce-rtl .mce-menu-item{text-align:right;direction:rtl;padding:6px 12px 6px 15px}.mce-menu-align.mce-rtl .mce-menu-shortcut,.mce-menu-align.mce-rtl .mce-caret{right:auto;left:0}.mce-rtl .mce-menu-item .mce-caret{margin-left:6px;margin-right:0;border-right:4px solid #333;border-left:0}.mce-rtl .mce-menu-item.mce-selected .mce-caret,.mce-rtl .mce-menu-item:focus .mce-caret,.mce-rtl .mce-menu-item:hover .mce-caret{border-left-color:transparent;border-right-color:#fff}.mce-menu{position:absolute;left:0;top:0;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false);background:0 0;z-index:1000;padding:5px 0;margin:-1px 0 0;min-width:160px;background:#fff;border:1px solid #989898;border:1px solid rgba(0,0,0,.2);z-index:1002;max-height:400px;overflow:auto;overflow-x:hidden}.mce-menu i{display:none}.mce-menu-has-icons i{display:inline-block;*display:inline}.mce-menu-sub-tr-tl{margin:-6px 0 0 -1px}.mce-menu-sub-br-bl{margin:6px 0 0 -1px}.mce-menu-sub-tl-tr{margin:-6px 0 0 1px}.mce-menu-sub-bl-br{margin:6px 0 0 1px}.mce-listbox button{text-align:left;padding-right:20px;position:relative}.mce-listbox .mce-caret{position:absolute;margin-top:-2px;right:8px;top:50%}.mce-rtl .mce-listbox .mce-caret{right:auto;left:8px}.mce-rtl .mce-listbox button{padding-right:10px;padding-left:20px}.mce-container-body .mce-resizehandle{position:absolute;right:0;bottom:0;width:16px;height:16px;visibility:visible;cursor:s-resize;margin:0}.mce-container-body .mce-resizehandle-both{cursor:se-resize}i.mce-i-resize{color:#333}.mce-slider{border:1px solid #aaa;background:#eee;width:100px;height:10px;position:relative;display:block}.mce-slider.mce-vertical{width:10px;height:100px}.mce-slider-handle{border:1px solid #bbb;background:#ddd;display:block;width:13px;height:13px;position:absolute;top:0;left:0;margin-left:-1px;margin-top:-2px}.mce-spacer{visibility:hidden}.mce-splitbtn .mce-open{border-left:1px solid transparent}.mce-splitbtn:hover .mce-open{border-left-color:#ccc}.mce-splitbtn button{padding-right:6px;padding-left:6px}.mce-splitbtn .mce-open{padding-right:4px;padding-left:4px}.mce-splitbtn .mce-open.mce-active{background-color:#dbdbdb;outline:1px solid #ccc}.mce-splitbtn.mce-btn-small .mce-open{padding:0 3px}.mce-rtl .mce-splitbtn{direction:rtl;text-align:right}.mce-rtl .mce-splitbtn button{padding-right:4px;padding-left:4px}.mce-rtl .mce-splitbtn .mce-open{border-left:0}.mce-stack-layout-item{display:block}.mce-tabs{display:block;border-bottom:1px solid #c5c5c5}.mce-tabs,.mce-tabs+.mce-container-body{background:#fff}.mce-tab{display:inline-block;*display:inline;*zoom:1;border:1px solid #c5c5c5;border-width:0 1px 0 0;background:#e3e3e3;padding:8px;text-shadow:0 1px 1px rgba(255,255,255,.75);height:13px;cursor:pointer}.mce-tab:hover{background:#fdfdfd}.mce-tab.mce-active{background:#fdfdfd;border-bottom-color:transparent;margin-bottom:-1px;height:14px}.mce-rtl .mce-tabs{text-align:right;direction:rtl}.mce-rtl .mce-tab{border-width:0 0 0 1px}.mce-textbox{background:#fff;border:1px solid #c5c5c5;display:inline-block;-webkit-transition:border linear .2s,box-shadow linear .2s;transition:border linear .2s,box-shadow linear .2s;height:28px;resize:none;padding:0 4px;white-space:pre-wrap;*white-space:pre;color:#333}.mce-textbox:focus,.mce-textbox.mce-focus{border-color:#3498db}.mce-placeholder .mce-textbox{color:#aaa}.mce-textbox.mce-multiline{padding:4px}.mce-textbox.mce-disabled{color:#adadad}.mce-rtl .mce-textbox{text-align:right;direction:rtl}.mce-throbber{position:absolute;top:0;left:0;width:100%;height:100%;opacity:.6;filter:alpha(opacity=60);zoom:1;background:#fff url("+r(13)+") no-repeat center center}.mce-throbber-inline{position:static;height:50px}@font-face{font-family:tinymce;src:url("+r(9)+") format('woff');font-weight:400;font-style:normal}@font-face{font-family:tinymce-small;src:url("+r(8)+') format(\'woff\');font-weight:400;font-style:normal}.mce-ico{font-family:tinymce,Arial;font-style:normal;font-weight:400;font-variant:normal;font-size:16px;line-height:16px;speak:none;vertical-align:text-top;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;background:transparent center center;background-size:cover;width:16px;height:16px;color:#333}.mce-btn-small .mce-ico{font-family:tinymce-small,Arial}.mce-i-save:before{content:"\\E000"}.mce-i-newdocument:before{content:"\\E001"}.mce-i-fullpage:before{content:"\\E002"}.mce-i-alignleft:before{content:"\\E003"}.mce-i-aligncenter:before{content:"\\E004"}.mce-i-alignright:before{content:"\\E005"}.mce-i-alignjustify:before{content:"\\E006"}.mce-i-alignnone:before{content:"\\E003"}.mce-i-cut:before{content:"\\E007"}.mce-i-paste:before{content:"\\E008"}.mce-i-searchreplace:before{content:"\\E009"}.mce-i-bullist:before{content:"\\E00A"}.mce-i-numlist:before{content:"\\E00B"}.mce-i-indent:before{content:"\\E00C"}.mce-i-outdent:before{content:"\\E00D"}.mce-i-blockquote:before{content:"\\E00E"}.mce-i-undo:before{content:"\\E00F"}.mce-i-redo:before{content:"\\E010"}.mce-i-link:before{content:"\\E011"}.mce-i-unlink:before{content:"\\E012"}.mce-i-anchor:before{content:"\\E013"}.mce-i-image:before{content:"\\E014"}.mce-i-media:before{content:"\\E015"}.mce-i-help:before{content:"\\E016"}.mce-i-code:before{content:"\\E017"}.mce-i-insertdatetime:before{content:"\\E018"}.mce-i-preview:before{content:"\\E019"}.mce-i-forecolor:before{content:"\\E01A"}.mce-i-backcolor:before{content:"\\E01A"}.mce-i-table:before{content:"\\E01B"}.mce-i-hr:before{content:"\\E01C"}.mce-i-removeformat:before{content:"\\E01D"}.mce-i-subscript:before{content:"\\E01E"}.mce-i-superscript:before{content:"\\E01F"}.mce-i-charmap:before{content:"\\E020"}.mce-i-emoticons:before{content:"\\E021"}.mce-i-print:before{content:"\\E022"}.mce-i-fullscreen:before{content:"\\E023"}.mce-i-spellchecker:before{content:"\\E024"}.mce-i-nonbreaking:before{content:"\\E025"}.mce-i-template:before{content:"\\E026"}.mce-i-pagebreak:before{content:"\\E027"}.mce-i-restoredraft:before{content:"\\E028"}.mce-i-untitled:before{content:"\\E029"}.mce-i-bold:before{content:"\\E02A"}.mce-i-italic:before{content:"\\E02B"}.mce-i-underline:before{content:"\\E02C"}.mce-i-strikethrough:before{content:"\\E02D"}.mce-i-visualchars:before{content:"\\E02E"}.mce-i-visualblocks:before{content:"\\E02E"}.mce-i-ltr:before{content:"\\E02F"}.mce-i-rtl:before{content:"\\E030"}.mce-i-copy:before{content:"\\E031"}.mce-i-resize:before{content:"\\E032"}.mce-i-browse:before{content:"\\E034"}.mce-i-pastetext:before{content:"\\E035"}.mce-i-rotateleft:before{content:"\\EAA8"}.mce-i-rotateright:before{content:"\\EAA9"}.mce-i-crop:before{content:"\\EE78"}.mce-i-editimage:before{content:"\\E914"}.mce-i-options:before{content:"\\EC6A"}.mce-i-flipv:before{content:"\\EAAA"}.mce-i-fliph:before{content:"\\EAAC"}.mce-i-zoomin:before{content:"\\EB35"}.mce-i-zoomout:before{content:"\\EB36"}.mce-i-sun:before{content:"\\ECCC"}.mce-i-moon:before{content:"\\ECCD"}.mce-i-arrowleft:before{content:"\\EDC0"}.mce-i-arrowright:before{content:"\\EDB8"}.mce-i-drop:before{content:"\\E934"}.mce-i-contrast:before{content:"\\ECD4"}.mce-i-sharpen:before{content:"\\EBA7"}.mce-i-palette:before{content:"\\E92A"}.mce-i-resize2:before{content:"\\EDF9"}.mce-i-orientation:before{content:"\\E601"}.mce-i-invert:before{content:"\\E602"}.mce-i-gamma:before{content:"\\E600"}.mce-i-remove:before{content:"\\ED6A"}.mce-i-checkbox:before,.mce-i-selected:before{content:"\\E033"}.mce-i-selected{visibility:hidden}i.mce-i-backcolor{text-shadow:none;background:#bbb}\n\n/* mod */\n.mce-panel { background: transparent; border: 0; }\n.mce-panel.mce-window { background-color: #fff; }\n.mce-panel.mce-foot { border: 0 solid rgba(0,0,0,.2); }\n.mce-panel.mce-menu { border: 1px solid #cbcbcb; }\n.mce-toolbar .mce-btn { border: 0; }\n.mce-toolbar .mce-btn i { color: #555; }\n.mce-toolbar .mce-btn:hover i { color: #333; }\n.mce-primary { background: #6ba72b; }\n.mce-primary:hover { background: #68a029; }\n.mce-menu-item.mce-disabled * { color: #ddd !important; }\n.mce-edit-area { border: 0 solid #ddd; border-width: 1px !important; }\n.mce-i-tabledelete:before{content:"\\E60E"}\n.mce-i-tableinsertrowbefore:before{content:"\\E60A"}\n.mce-i-tableinsertrowafter:before{content:"\\E60B"}\n.mce-i-tabledeleterow:before{content:"\\E800"}\n.mce-i-tableinsertcolbefore:before{content:"\\E608"}\n.mce-i-tableinsertcolafter:before{content:"\\E609"}\n.mce-i-tabledeletecol:before{content:"\\E801"}\n.mce-tinymce-inline{background-color:#f0f0f0;border:solid 1px #d9d9d9}\n.mce-btn-group:not(:first-child) { border-left: 1px solid #d9d9d9; }\n.mce-arrow-up{margin-top:12px}\n.mce-arrow-down{margin-top:-12px}\n.mce-arrow:before,.mce-arrow:after{position:absolute;left:50%;display:block;width:0;height:0;border-style:solid;border-color:transparent;content:""}\n.mce-arrow.mce-arrow-up:before{top:-9px;border-bottom-color:rgba(0,0,0,0.2);border-width:0 9px 9px;margin-left:-9px}\n.mce-arrow.mce-arrow-down:before{bottom:-9px;border-top-color:rgba(0,0,0,0.2);border-width:9px 9px 0;margin-left:-9px}\n.mce-arrow.mce-arrow-up:after{top:-8px;border-bottom-color:#f0f0f0;border-width:0 8px 8px;margin-left:-8px}\n.mce-arrow.mce-arrow-down:after{bottom:-8px;border-top-color:#f0f0f0;border-width:8px 8px 0;margin-left:-8px}\n.mce-arrow.mce-arrow-left:before,.mce-arrow.mce-arrow-left:after{margin:0}\n.mce-arrow.mce-arrow-left:before{left:8px}\n.mce-arrow.mce-arrow-left:after{left:9px}\n.mce-arrow.mce-arrow-right:before,.mce-arrow.mce-arrow-right:after{left:auto;margin:0}\n.mce-arrow.mce-arrow-right:before{right:8px}\n.mce-arrow.mce-arrow-right:after{right:9px}\n.mce-arrow.mce-arrow-center.mce-arrow.mce-arrow-left:before{left:-9px;top:50%;border-right-color:rgba(0,0,0,0.2);border-width:9px 9px 9px 0;margin-top:-9px}\n.mce-arrow.mce-arrow-center.mce-arrow.mce-arrow-left:after{left:-8px;top:50%;border-right-color:#f0f0f0;border-width:8px 8px 8px 0;margin-top:-8px}\n.mce-arrow.mce-arrow-center.mce-arrow.mce-arrow-left{margin-left:12px}\n.mce-arrow.mce-arrow-center.mce-arrow.mce-arrow-right:before{right:-9px;top:50%;border-left-color:rgba(0,0,0,0.2);border-width:9px 0 9px 9px;margin-top:-9px}\n.mce-arrow.mce-arrow-center.mce-arrow.mce-arrow-right:after{right:-8px;top:50%;border-left-color:#f0f0f0;border-width:8px 0 8px 8px;margin-top:-8px}\n.mce-arrow.mce-arrow-center.mce-arrow.mce-arrow-right{margin-left:-14px}\n.mce-window-head{background-color:#fff}\n.mce-menu{background-color:#fff}\n.mce-menu-item:hover { background: #eee }\n.mce-menu-item:hover .mce-text{color:#000}\n.mce-grid-border a:hover, .mce-grid-border a.mce-active{border-color: #a1a1a1}\n.mce-menu-item-normal.mce-active .mce-text{color:#000}\n.mce-primary button .mce-txt{color:#fff}\n.mce-tab:focus {outline: 0.1em solid #3498db; outline-offset: -0.2em;}\n',""])},function(e,t){e.exports="data:image/gif;base64,R0lGODlhHwAfAPUAAP///wAAAOjo6NLS0ry8vK6urqKiotzc3Li4uJqamuTk5NjY2KqqqqCgoLCwsMzMzPb29qioqNTU1Obm5jY2NiYmJlBQUMTExHBwcJKSklZWVvr6+mhoaEZGRsbGxvj4+EhISDIyMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAHwAfAAAG/0CAcEgUDAgFA4BiwSQexKh0eEAkrldAZbvlOD5TqYKALWu5XIwnPFwwymY0GsRgAxrwuJwbCi8aAHlYZ3sVdwtRCm8JgVgODwoQAAIXGRpojQwKRGSDCRESYRsGHYZlBFR5AJt2a3kHQlZlERN2QxMRcAiTeaG2QxJ5RnAOv1EOcEdwUMZDD3BIcKzNq3BJcJLUABBwStrNBtjf3GUGBdLfCtadWMzUz6cDxN/IZQMCvdTBcAIAsli0jOHSJeSAqmlhNr0awo7RJ19TJORqdAXVEEVZyjyKtE3Bg3oZE2iK8oeiKkFZGiCaggelSTiA2LhxiZLBSjZjBL2siNBOFQ84LxHA+mYEiRJzBO7ZCQIAIfkECQoAAAAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfju9jf82YAIQxRCm14Ww4PChAAEAoPDlsAFRUgHkRiZAkREmoSEXiVlRgfQgeBaXRpo6MOQlZbERN0Qx4drRUcAAJmnrVDBrkVDwNjr8BDGxq5Z2MPyUQZuRgFY6rRABe5FgZjjdm8uRTh2d5b4NkQY0zX5QpjTc/lD2NOx+WSW0++2RJmUGJhmZVsQqgtCE6lqpXGjBchmt50+hQKEAEiht5gUcTIESR9GhlgE9IH0BiTkxrMmWIHDkose9SwcQlHDsOIk9ygiVbl5JgMLuV4HUmypMkTOkEAACH5BAkKAAAALAAAAAAfAB8AAAb/QIBwSBQMCAUDwFAgDATEqHR4QCSuVwD2ijhMpwrCFqsdJwiK73DBMGfdCcZCDWjAE2V347vY3/NmdXNECm14Ww4PChAAEAoPDltlDGlDYmQJERJqEhGHWARUgZVqaWZeAFZbERN0QxOeWwgAAmabrkMSZkZjDrhRkVtHYw+/RA9jSGOkxgpjSWOMxkIQY0rT0wbR2LQV3t4UBcvcF9/eFpdYxdgZ5hUYA73YGxruCbVjt78G7hXFqlhY/fLQwR0HIQdGuUrTz5eQdIc0cfIEwByGD0MKvcGSaFGjR8GyeAPhIUofQGNQSgrB4IsdOCqx7FHDBiYcOQshYjKDxliVDpRjunCjdSTJkiZP6AQBACH5BAkKAAAALAAAAAAfAB8AAAb/QIBwSBQMCAUDwFAgDATEqHR4QCSuVwD2ijhMpwrCFqsdJwiK73DBMGfdCcZCDWjAE2V347vY3/NmdXNECm14Ww4PChAAEAoPDltlDGlDYmQJERJqEhGHWARUgZVqaWZeAFZbERN0QxOeWwgAAmabrkMSZkZjDrhRkVtHYw+/RA9jSGOkxgpjSWOMxkIQY0rT0wbR2I3WBcvczltNxNzIW0693MFYT7bTumNQqlisv7BjswAHo64egFdQAbj0RtOXDQY6VAAUakihN1gSLaJ1IYOGChgXXqEUpQ9ASRlDYhT0xQ4cACJDhqDD5mRKjCAYuArjBmVKDP9+VRljMyMHDwcfuBlBooSCBQwJiqkJAgAh+QQJCgAAACwAAAAAHwAfAAAG/0CAcEgUDAgFA8BQIAwExKh0eEAkrlcA9oo4TKcKwharHScIiu9wwTBn3QnGQg1owBNld+O72N/zZnVzRApteFsODwoQABAKDw5bZQxpQ2JkCRESahIRh1gEVIGVamlmXgBWWxETdEMTnlsIAAJmm65DEmZGYw64UZFbR2MPv0QPY0hjpMYKY0ljjMZCEGNK09MG0diN1gXL3M5bTcTcyFtOvdzBWE+207pjUKpYrL+wY7MAB4EerqZjUAG4lKVCBwMbvnT6dCXUkEIFK0jUkOECFEeQJF2hFKUPAIkgQwIaI+hLiJAoR27Zo4YBCJQgVW4cpMYDBpgVZKL59cEBhw+U+QROQ4bBAoUlTZ7QCQIAIfkECQoAAAAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfju9jf82Z1c0QKbXhbDg8KEAAQCg8OW2UMaUNiZAkREmoSEYdYBFSBlWppZl4AVlsRE3RDE55bCAACZpuuQxJmRmMOuFGRW0djD79ED2NIY6TGCmNJY4zGQhBjStPTFBXb21DY1VsGFtzbF9gAzlsFGOQVGefIW2LtGhvYwVgDD+0V17+6Y6BwaNfBwy9YY2YBcMAPnStTY1B9YMdNiyZOngCFGuIBxDZAiRY1eoTvE6UoDEIAGrNSUoNBUuzAaYlljxo2M+HIeXiJpRsRNMaq+JSFCpsRJEqYOPH2JQgAIfkECQoAAAAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfjywjlzX9jdXNEHiAVFX8ODwoQABAKDw5bZQxpQh8YiIhaERJqEhF4WwRDDpubAJdqaWZeAByoFR0edEMTolsIAA+yFUq2QxJmAgmyGhvBRJNbA5qoGcpED2MEFrIX0kMKYwUUslDaj2PA4soGY47iEOQFY6vS3FtNYw/m1KQDYw7mzFhPZj5JGzYGipUtESYowzVmF4ADgOCBCZTgFQAxZBJ4AiXqT6ltbUZhWdToUSR/Ii1FWbDnDkUyDQhJsQPn5ZU9atjUhCPHVhgTNy/RSKsiqKFFbUaQKGHiJNyXIAAh+QQJCgAAACwAAAAAHwAfAAAG/0CAcEh8JDAWCsBQIAwExKhU+HFwKlgsIMHlIg7TqQeTLW+7XYIiPGSAymY0mrFgA0LwuLzbCC/6eVlnewkADXVECgxcAGUaGRdQEAoPDmhnDGtDBJcVHQYbYRIRhWgEQwd7AB52AGt7YAAIchETrUITpGgIAAJ7ErdDEnsCA3IOwUSWaAOcaA/JQ0amBXKa0QpyBQZyENFCEHIG39HcaN7f4WhM1uTZaE1y0N/TacZoyN/LXU+/0cNyoMxCUytYLjm8AKSS46rVKzmxADhjlCACMFGkBiU4NUQRxS4OHijwNqnSJS6ZovzRyJAQo0NhGrgs5bIPmwWLCLHsQsfhxBWTe9QkOzCwC8sv5Ho127akyRM7QQAAOwAAAAAAAAAAAA=="},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var n=r(5)
var a=r.n(n)
var o=r(7)
var i=r.n(o)
var u=r(4)
var s=r.n(u)
var l=r(6)
var c=r.n(l)
t["use"]=f
t["useCanvas"]=d
t["unuseCanvas"]=v
t["unuse"]=m
t["useInline"]=g
t["unuseInline"]=p
r.d(t,"contentStyle",function(){return A})
function f(){i.a.use()}function d(){i.a.use()
a.a.use()}function v(){i.a.unuse()
a.a.unuse()}function m(){i.a.unuse()}function g(){i.a.use()
c.a.use()}function p(){i.a.unuse()
c.a.unuse()}var A=s.a.toString()
t["default"]={use:f,unuse:m,useCanvas:d,unuseCanvas:v,useInline:g,unuseInline:p,contentStyle:A}}])},e.exports=n()
var n},WU1E:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){var t=e.transitions
return{duration:t.duration,timing:t.timing}}},"WYc/":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.openOrCloseNewPageForm=a
t.TOGGLE_NEWPAGE_FORM=void 0
var n="TOGGLE_NEWPAGE_FORM"
t.TOGGLE_NEWPAGE_FORM="TOGGLE_NEWPAGE_FORM"
function a(){return{type:n}}},WyC3:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=n(r("q1tI"))
var d=a(r("q3EI"))
var v=f.default.createElement("path",{d:"M960 0c529.468 0 960 430.645 960 960s-430.532 960-960 960C430.645 1920 0 1489.355 0 960S430.645 0 960 0zM451.765 1016.47h1016.47V903.53H451.765v112.94z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){(0,c.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(d.default,Object.assign({},this.props,{name:"IconMinimize",viewBox:"0 0 1920 1920"}),v)}}])
t.displayName="IconMinimize"
return t}(f.Component)
t.default=m
m.glyphName="minimize"
m.variant="Solid"
m.propTypes=(0,o.default)({},d.default.propTypes)},XmU4:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=a(r("17x9"))
var d=n(r("q1tI"))
var v=a(r("Imxt"))
var m=r("/7Jz")
var g=a(r("LUxv"))
var p=40
var A=38
var h=74
var b=75
var y=function(e){(0,c.default)(t,e)
function t(){var e
var r;(0,i.default)(this,t)
for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o]
r=(0,s.default)(this,(e=(0,l.default)(t)).call.apply(e,[this].concat(a)))
r.handleKeyDown=function(e){switch(e.keyCode){case p:case h:r.moveFocus(1)
break
case A:case b:r.moveFocus(-1)
break
default:return}e.stopPropagation()}
return r}(0,u.default)(t,[{key:"navigableNodes",value:function(){return Array.from(this.containerNode.querySelectorAll("button"))}},{key:"moveFocus",value:function(e){var t=this.navigableNodes()
var r=t.indexOf(window.document.activeElement)
var n=r+e
n<0?n=0:n>=t.length&&(n=t.length-1)
t[n].focus()}},{key:"render",value:function(){var e=this
var t={maxHeight:this.props.maxHeight}
return d.default.createElement("div",{className:(0,m.css)(g.default.container),ref:function(t){return e.containerNode=t},onKeyDown:this.handleKeyDown,style:t},d.default.createElement(v.default,this.props))}}])
t.displayName="FileTree"
return t}(d.Component)
t.default=y
y.propTypes=(0,o.default)({},v.default.propTypes,{maxHeight:f.default.string})},XmZK:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var a=n(r("RIqP"))
var o=n(r("KB5V"))
var i=false
var u={toArray:function(){return[]},contains:function(){return false},add:function(){},remove:function(){}}
function s(e){var t=(0,o.default)(e)
if(!t)return u
var r={toArray:function(){l()
return(0,a.default)(t.classList)}};["contains","add","remove"].forEach(function(e){r[e]=function(r){l()
return t.classList[e](r)}})
return r}function l(){if(!i){if(!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))){var e=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"classList")
Object.defineProperty(SVGElement.prototype,"classList",e)}i=true}}},"Y+p1":function(e,t,r){var n=r("wF/u")
function a(e,t){return n(e,t)}e.exports=a},YBdB:function(e,t,r){(function(e,t){(function(e,r){"use strict"
if(e.setImmediate)return
var n=1
var a={}
var o=false
var i=e.document
var u
function s(e){"function"!==typeof e&&(e=new Function(""+e))
var t=new Array(arguments.length-1)
for(var r=0;r<t.length;r++)t[r]=arguments[r+1]
var o={callback:e,args:t}
a[n]=o
u(n)
return n++}function l(e){delete a[e]}function c(e){var t=e.callback
var n=e.args
switch(n.length){case 0:t()
break
case 1:t(n[0])
break
case 2:t(n[0],n[1])
break
case 3:t(n[0],n[1],n[2])
break
default:t.apply(r,n)}}function f(e){if(o)setTimeout(f,0,e)
else{var t=a[e]
if(t){o=true
try{c(t)}finally{l(e)
o=false}}}}function d(){u=function(e){t.nextTick(function(){f(e)})}}function v(){if(e.postMessage&&!e.importScripts){var t=true
var r=e.onmessage
e.onmessage=function(){t=false}
e.postMessage("","*")
e.onmessage=r
return t}}function m(){var t="setImmediate$"+Math.random()+"$"
var r=function(r){r.source===e&&"string"===typeof r.data&&0===r.data.indexOf(t)&&f(+r.data.slice(t.length))}
e.addEventListener?e.addEventListener("message",r,false):e.attachEvent("onmessage",r)
u=function(r){e.postMessage(t+r,"*")}}function g(){var e=new MessageChannel
e.port1.onmessage=function(e){var t=e.data
f(t)}
u=function(t){e.port2.postMessage(t)}}function p(){var e=i.documentElement
u=function(t){var r=i.createElement("script")
r.onreadystatechange=function(){f(t)
r.onreadystatechange=null
e.removeChild(r)
r=null}
e.appendChild(r)}}function A(){u=function(e){setTimeout(f,0,e)}}var h=Object.getPrototypeOf&&Object.getPrototypeOf(e)
h=h&&h.setTimeout?h:e
"[object process]"==={}.toString.call(e.process)?d():v()?m():e.MessageChannel?g():i&&"onreadystatechange"in i.createElement("script")?p():A()
h.setImmediate=s
h.clearImmediate=l})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,r("yLpj"),r("8oxB"))},YYvL:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.startFlickrSearch=u
t.receiveFlickrResults=s
t.failFlickrSearch=l
t.openOrCloseFlickrForm=c
t.searchFlickr=f
t.TOGGLE_FLICKR_FORM=t.FAIL_FLICKR_SEARCH=t.RECEIVE_FLICKR_RESULTS=t.START_FLICKR_SEARCH=void 0
var n="START_FLICKR_SEARCH"
t.START_FLICKR_SEARCH="START_FLICKR_SEARCH"
var a="RECEIVE_FLICKR_RESULTS"
t.RECEIVE_FLICKR_RESULTS="RECEIVE_FLICKR_RESULTS"
var o="FAIL_FLICKR_SEARCH"
t.FAIL_FLICKR_SEARCH="FAIL_FLICKR_SEARCH"
var i="TOGGLE_FLICKR_FORM"
t.TOGGLE_FLICKR_FORM="TOGGLE_FLICKR_FORM"
function u(e){return{type:n,term:e}}function s(e){return{type:a,results:e}}function l(e){return{type:o,error:e}}function c(){return{type:i}}function f(e){return function(t,r){var n=r(),a=n.source,o=n.host,i=n.flickr
if(i&&!i.searching){t(u(e))
return a.searchFlickr(e,{host:o}).then(function(e){return t(s(e))}).catch(function(e){return t(l(e))})}}}},ZyLR:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var n=r("/7Jz")
var a=3
function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a
var r=document.createElement("div")
Object.assign(r.style,{width:e.width+2*t+"px",height:e.height+2*t+"px",left:e.left-t+"px",top:e.top-t+"px"})
r.className=(0,n.css)(i.indicator,i.enter)
document.body.appendChild(r)
r.className=(0,n.css)(i.indicator,i.enter,i.active)
var o=setTimeout(function(){r.className=(0,n.css)(i.indicator,i.leave)},900)
r.addEventListener("mouseover",function(){clearTimeout(o)
r.className=(0,n.css)(i.indicator,i.leaveFast)})
setTimeout(function(){return document.body.removeChild(r)},2e3)
return r}var i=n.StyleSheet.create({indicator:{border:"2px solid #870",backgroundColor:"#fd0",position:"absolute",display:"block",borderRadius:"5px",zIndex:999999},enter:{opacity:0},active:{transition:"opacity 0.4s",opacity:.8},leave:{transition:"opacity 0.6s",opacity:0},leaveFast:{transition:"opacity 0.2s",opacity:0}})},a6RQ:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var n={"ar-SA":"ar","da-DK":"da","de-DE":"de","en-US":"en","es-ES":"es","fa-IR":"fa","fr-FR":"fr","he-IL":"he","hy-AM":"hy","ja-JP":"ja","ko-KR":"ko","mi-NZ":"mi","nb-NO":"nb","nl-NL":"nl","pl-PL":"pl","pt-PT":"pt","ru-RU":"ru","sv-SE":"sv","tr-TR":"tr","zh-CN":"zh-Hans","zh-HK":"zh-Hant"}
var a=["ar","bg","cs","cy","da","da-x-k12","de","el","en","en-AU","en-AU-x-unimelb","en-GB","en-GB-x-lbs","en-GB-x-ukhe","es","fa","fa-IR","fr","fr-CA","he","ht","hu","hy","is","it","ja","ko","mi","nb","nb-x-k12","nl","nn","pl","pt","pt-BR","ro","ru","sq","sr","sv","sv-x-k12","tr","uk","vi","zh-Hans","zh-Hant"]
function o(e){if(e){if(a.indexOf(e)>=0)return e
if(n[e])return n[e]
if(e.match("-x-")){e=e.split("-x-")[0]
return o(e)}return"en"}return"en"}},a9nG:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=a
var n=r("9Pur")
function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case n.REQUEST_PAGE:return Object.assign({},e,{loading:true})
case n.RECEIVE_PAGE:return{links:e.links.concat(t.links),bookmark:t.bookmark,loading:false}
case n.FAIL_PAGE:var r={loading:false,error:t.error}
0==e.links.length&&(r.bookmark=null)
return Object.assign({},e,r)
default:return e}}},aB9U:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.fileEmbed=n
t.mimeClass=o
function n(e){var t=o(e)
var r=a(e)
return"image"===t?{type:"image"}:"video"===t?{type:"video",id:r}:"audio"===t?{type:"audio",id:r}:e.preview_url?{type:"scribd"}:{type:"file"}}function a(e){return e.media_entry_id||"maybe"}function o(e){if(e.mime_class)return e.mime_class
var t=i(e)
return{"text/html":"html","text/x-csharp":"code","text/xml":"code","text/css":"code",text:"text","text/plain":"text","application/rtf":"doc","text/rtf":"doc","application/vnd.oasis.opendocument.text":"doc","application/pdf":"pdf","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"doc","application/x-docx":"doc","application/msword":"doc","application/vnd.ms-powerpoint":"ppt","application/vnd.openxmlformats-officedocument.presentationml.presentation":"ppt","application/vnd.ms-excel":"xls","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xls","application/vnd.oasis.opendocument.spreadsheet":"xls","image/jpeg":"image","image/pjpeg":"image","image/png":"image","image/gif":"image","application/x-rar":"zip","application/x-rar-compressed":"zip","application/x-zip":"zip","application/x-zip-compressed":"zip","application/xml":"code","application/zip":"zip","audio/mp3":"audio","audio/mpeg":"audio","audio/basic":"audio","audio/mid":"audio","audio/3gpp":"audio","audio/x-aiff":"audio","audio/x-mpegurl":"audio","audio/x-pn-realaudio":"audio","audio/x-wav":"audio","video/mpeg":"video","video/quicktime":"video","video/x-la-asf":"video","video/x-ms-asf":"video","video/x-msvideo":"video","video/x-sgi-movie":"video","video/3gpp":"video","video/mp4":"video","application/x-shockwave-flash":"flash"}[t]||"file"}function i(e){return e["content-type"]||e.type}},aO0o:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=n(r("q1tI"))
var d=a(r("rgT7"))
var v=a(r("BAch"))
var m=function(e){(0,l.default)(t,e)
function t(){(0,o.default)(this,t)
return(0,u.default)(this,(0,s.default)(t).apply(this,arguments))}(0,i.default)(t,[{key:"collection",value:function(){var e=this.props.contextId
switch(this.props.contextType){case"course":return{links:[{href:"/courses/".concat(e,"/assignments"),title:(0,v.default)("Assignments")},{href:"/courses/".concat(e,"/pages"),title:(0,v.default)("Pages")},{href:"/courses/".concat(e,"/discussion_topics"),title:(0,v.default)("Discussions")},{href:"/courses/".concat(e,"/assignments/syllabus"),title:(0,v.default)("Syllabus")},{href:"/courses/".concat(e,"/announcements"),title:(0,v.default)("Announcements")},{href:"/courses/".concat(e,"/quizzes"),title:(0,v.default)("Quizzes")},{href:"/courses/".concat(e,"/files"),title:(0,v.default)("Files")},{href:"/courses/".concat(e,"/collaborations"),title:(0,v.default)("Collaborations")},{href:"/courses/".concat(e,"/grades"),title:(0,v.default)("Grades")},{href:"/courses/".concat(e,"/users"),title:(0,v.default)("People")},{href:"/courses/".concat(e,"/modules"),title:(0,v.default)("Modules")}]}
case"group":return{links:[{href:"/groups/".concat(e,"/pages"),title:(0,v.default)("Wiki Home")},{href:"/groups/".concat(e,"/discussion_topics"),title:(0,v.default)("Discussions Index")},{href:"/groups/".concat(e,"/announcements"),title:(0,v.default)("Announcement List")},{href:"/groups/".concat(e,"/files"),title:(0,v.default)("Files Index")},{href:"/groups/".concat(e,"/collaborations"),title:(0,v.default)("Collaborations")},{href:"/groups/".concat(e,"/users"),title:(0,v.default)("People")}]}
default:return{links:[{href:"/users/".concat(e,"/files"),title:(0,v.default)("Files Index")}]}}}},{key:"render",value:function(){return f.default.createElement(d.default,{collection:this.collection(),onLinkClick:this.props.onLinkClick})}}])
t.displayName="NavigationPanel"
return t}(f.Component)
m.propTypes={contextType:c.default.string.isRequired,contextId:c.default.string.isRequired,onLinkClick:c.default.func}
var g=m
t.default=g},aX7E:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var n=r("Tb6I")
var a=r("ANjH")
function o(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case n.HIDE_SIDEBAR:return true
case n.RESET_UI:case n.SHOW_SIDEBAR:return false
default:return e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case n.RESET_UI:return 0
case n.CHANGE_TAB:return t.index
default:return e}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case n.RESET_UI:case n.CHANGE_TAB:return""
case n.CHANGE_ACCORDION:return t.index
default:return e}}var s=(0,a.combineReducers)({hidden:o,selectedTabIndex:i,selectedAccordionIndex:u})
t.default=s},bA33:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=n(r("q1tI"))
var d=r("R7S1")
var v=a(r("kqqL"))
var m=a(r("+eFp"))
var g=a(r("BAch"))
var p=a(r("U93Q"))
var A=a(r("VMdx"))
var h=a(r("a6bM"))
var b=a(r("45EY"))
var y=a(r("WyC3"))
var w=r("/7Jz")
var E=function(e){(0,l.default)(t,e)
function t(){(0,o.default)(this,t)
return(0,u.default)(this,(0,s.default)(t).apply(this,arguments))}(0,i.default)(t,[{key:"toggleForm",value:function(e){e.preventDefault()
this.props.toggleFlickrForm()}},{key:"updateSearchTerm",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()
if(this.state&&this.state.searchTerm){var t=this.state.searchTerm.trim()
t.length>0&&this.props.flickrSearch(t)}}},{key:"flickrResultClick",value:function(e){this.props.onImageEmbed(e)}},{key:"flickrResultDrag",value:function(e,t){(0,v.default)(e,(0,d.renderImage)(t))}},{key:"renderFlickrResult",value:function(e){var t=this
return f.default.createElement("div",{key:"flickrPic_"+e.id,style:{float:"left",padding:"2px",cursor:"pointer"},onClick:function(){return t.flickrResultClick(e)}},f.default.createElement("img",{onDragStart:function(r){return t.flickrResultDrag(r,e)},src:e.href.replace(".jpg","_s.jpg"),title:"embed "+e.title,alt:e.title}))}},{key:"flickrSearchResults",value:function(){if(this.props.flickr.searching)return f.default.createElement(p.default,null)
if(this.props.flickr.searchResults)return f.default.createElement("div",{style:{maxHeight:"400px",overflowY:"auto"}},this.props.flickr.searchResults.map(this.renderFlickrResult,this))}},{key:"renderSubmitButton",value:function(){return this.props.flickr.searching?null:f.default.createElement("div",{className:(0,w.css)(x.searchButtonContainer)},f.default.createElement(A.default,{type:"submit"},(0,g.default)("Search")))}},{key:"renderForm",value:function(){if(this.props.flickr.formExpanded)return f.default.createElement("div",null,f.default.createElement("form",{onSubmit:this.handleSubmit.bind(this)},f.default.createElement("div",{className:(0,w.css)(x.titlebar)},f.default.createElement("span",null,"Flickr: Creative Commons")),f.default.createElement(h.default,{label:(0,g.default)("Search"),placeholder:(0,g.default)("enter search terms"),onChange:this.updateSearchTerm.bind(this)}),this.renderSubmitButton()),this.flickrSearchResults())
return null}},{key:"flickrLink",value:function(){var e=this.props.flickr.formExpanded?(0,g.default)("Close Flickr form"):(0,g.default)("Search Flickr")
var t=this.props.flickr.formExpanded?f.default.createElement(y.default,{className:(0,w.css)(x.icon)}):f.default.createElement(b.default,{className:(0,w.css)(x.icon)})
return f.default.createElement(A.default,{variant:"link","aria-label":(0,g.default)("Search Flickr"),"aria-expanded":this.props.flickr.formExpanded,onClick:this.toggleForm.bind(this)},t," "+e)}},{key:"render",value:function(){return f.default.createElement("div",{className:(0,w.css)(x.container)},this.flickrLink(),f.default.createElement(m.default,{transitionName:{enter:(0,w.css)(x.slideDownEnter),enterActive:(0,w.css)(x.slideDownEnter,x.slideDownEnterActive),leave:(0,w.css)(x.slideDownLeave),leaveActive:(0,w.css)(x.slideDownLeave,x.slideDownLeaveActive)},transitionEnterTimeout:500,transitionLeaveTimeout:300},this.renderForm()))}}])
t.displayName="FlickrSearch"
return t}(f.Component)
E.propTypes={flickrSearch:c.default.func.isRequired,toggleFlickrForm:c.default.func.isRequired,flickr:c.default.shape({searchResults:c.default.arrayOf(c.default.shape({id:c.default.string.isRequired,href:c.default.string.isRequired,title:c.default.string.isRequired})).isRequired,searching:c.default.bool.isRequired,formExpanded:c.default.bool.isRequired}).isRequired,onImageEmbed:c.default.func.isRequired}
var x=w.StyleSheet.create({slideDownEnter:{maxHeight:0,overflowY:"hidden"},slideDownEnterActive:{maxHeight:"1000px",transition:"max-height 500ms ease-in"},slideDownLeave:{maxHeight:"1000px",overflowY:"hidden"},slideDownLeaveActive:{maxHeight:0,transition:"max-height 300ms ease-in"},container:{marginTop:"12px"},searchButtonContainer:{marginTop:"5px"},titlebar:{marginTop:"10px",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:"18px"},icon:{verticalAlign:"middle"}})
var C=E
t.default=C},cKlk:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.get=o
t.RECEIVE_SESSION=void 0
var n="action.session.receive_session"
t.RECEIVE_SESSION="action.session.receive_session"
function a(e){return{type:n,data:e}}function o(e,t){var r=t(),n=r.source
return n.getSession().then(function(t){return e(a(t))})}},dQCo:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e,t,r){var n=t.createEvent("CustomEvent")
n.initCustomEvent("tinyRCE/initExternalTools",true,true,{ed:e,url:r})
t.dispatchEvent(n)}},ddib:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=n(r("BAch"))
var o=n(r("dKDz"))
function i(e,t){this.selectors={fontBtn:"div[aria-label='Font Sizes']",formatBtn:"div.mce-listbox.mce-last:not([aria-label])",fgColorBtn:"div[aria-label='Text color']",bgColorBtn:"div[aria-label='Background color']",recordBtn:"div[aria-label='Record/Upload Media']",menubar:".mce-menubar",statusbar:".mce-statusbar > .mce-container-body",editorIframe:".mce-edit-area iframe"}
this.editorElement=function(){return t.getElementById(e.editorContainer.id)}
this.find=function(e){return this.editorElement().querySelector(this.selectors[e])}
this.applyLabelToSelector=function(e,t){var r=this.find(e)
null!==r&&r.setAttribute("aria-label",t)}
this.addLabels=function(){this.applyLabelToSelector("fontBtn",(0,o.default)((0,a.default)("Font Size, press down to select")))
this.applyLabelToSelector("formatBtn",(0,o.default)((0,a.default)("Formatting, press down to select")))
this.applyLabelToSelector("fgColorBtn",(0,o.default)((0,a.default)("Text Color, press down to select")))
this.applyLabelToSelector("bgColorBtn",(0,o.default)((0,a.default)("Background Color, press down to select")))
this.find("editorIframe").setAttribute("title",(0,o.default)((0,a.default)("Rich Text Area. Press ALT+F8 for help")))
var r=t.querySelector('label[for="'.concat(e.id,'"]'))
r&&this.find("editorIframe").contentWindow.document.body.setAttribute("aria-label",r.textContent)}
this.accessibilizeMenubar=function(){var t=this.find("menubar")
if(null!==t){var r=t.querySelector(".mce-menubtn")
t.style.display="none"
e.addShortcut("Alt+F9","",function(){t.style.display=""
r.focus()})}}
this.removeStatusbarFromTabindex=function(){var e=this.find("statusbar")
null!==e&&e.setAttribute("tabindex",-1)}}},e5nI:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=n(r("q1tI"))
var f=r("17x9")
var d=r("/7Jz")
var v=a(r("LUxv"))
var m=a(r("IOtD"))
var g=function(e){(0,l.default)(t,e)
function t(){var e
var r;(0,o.default)(this,t)
for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i]
r=(0,u.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(a)))
r.handleSelect=function(){var e=r.props,t=e.onSelect,n=e.file
t&&t(n.id)}
return r}(0,i.default)(t,[{key:"icon",value:function(){this.props.file.type
return c.default.createElement(m.default,null)}},{key:"render",value:function(){var e=this.props.file.name
return c.default.createElement("button",{className:(0,d.css)(v.default.button,v.default.file),onClick:this.handleSelect},this.icon()," ",e)}}])
t.displayName="File"
return t}(c.Component)
t.default=g
g.propTypes={file:(0,f.shape)({id:f.number,name:f.string,type:f.string}).isRequired,onSelect:f.func}},eROu:function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.ThemeManager")
var t=tinymce.util.Tools.resolve("tinymce.EditorManager")
var r=tinymce.util.Tools.resolve("tinymce.util.Tools")
var n=function(e){return e.getParam("branding",true,"boolean")}
var a=function(e){return false!==o(e)}
var o=function(e){return e.getParam("menubar")}
var i=function(e){return e.getParam("statusbar",true,"boolean")}
var u=function(e){return e.getParam("toolbar_items_size")}
var s=function(e){return e.getParam("readonly",false,"boolean")}
var l=function(e){return e.getParam("fixed_toolbar_container")}
var c=function(e){return e.getParam("inline_toolbar_position_handler")}
var f=function(e){return e.getParam("menu")}
var d=function(e){return e.getParam("removed_menuitems","")}
var v=function(e){return e.getParam("min_width",100,"number")}
var m=function(e){return e.getParam("min_height",100,"number")}
var g=function(e){return e.getParam("max_width",65535,"number")}
var p=function(e){return e.getParam("max_height",65535,"number")}
var A=function(e){return false===e.settings.skin}
var h=function(e){return e.getParam("inline",false,"boolean")}
var b=function(e){var t=e.getParam("resize","vertical")
return false===t?"none":"both"===t?"both":"vertical"}
var y=function(e){var r=e.settings
var n=r.skin
var a=r.skin_url
if(false!==n){var o=n||"lightgray"
a=a?e.documentBaseURI.toAbsolute(a):t.baseURL+"/skins/"+o}return a}
var w=function(e,t){var r=[]
for(var n=1;n<10;n++){var a=e["toolbar"+n]
if(!a)break
r.push(a)}var o=e.toolbar?[e.toolbar]:[t]
return r.length>0?r:o}
var E=function(e){var t=e.getParam("toolbar")
var n="undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
return false===t?[]:r.isArray(t)?r.grep(t,function(e){return e.length>0}):w(e.settings,n)}
var x=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils")
var C=tinymce.util.Tools.resolve("tinymce.ui.Factory")
var k=tinymce.util.Tools.resolve("tinymce.util.I18n")
var B=function(e){return e.fire("SkinLoaded")}
var T=function(e){return e.fire("ResizeEditor")}
var R=function(e){return e.fire("BeforeRenderUI")}
var I={fireSkinLoaded:B,fireResizeEditor:T,fireBeforeRenderUI:R}
var S=function(e,t){return function(){var r=e.find(t)[0]
r&&r.focus(true)}}
var D=function(e,t){e.shortcuts.add("Alt+F9","",S(t,"menubar"))
e.shortcuts.add("Alt+F10,F10","",S(t,"toolbar"))
e.shortcuts.add("Alt+F11","",S(t,"elementpath"))
t.on("cancel",function(){e.focus()})}
var N={addKeys:D}
var M=tinymce.util.Tools.resolve("tinymce.geom.Rect")
var P=tinymce.util.Tools.resolve("tinymce.util.Delay")
var _=function(){var e=[]
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]}
var O=function(e){return function(){return e}}
var F=O(false)
var L=O(true)
var U=F
var Q=L
var z=function(){return j}
var j=function(){var e=function(e){return e.isNone()}
var t=function(e){return e()}
var r=function(e){return e}
var n=function(){}
var a=function(){return null}
var o=function(){return}
var i={fold:function(e,t){return e()},is:U,isSome:U,isNone:Q,getOr:r,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a,getOrUndefined:o,or:r,orThunk:t,map:z,ap:z,each:n,bind:z,flatten:z,exists:U,forall:Q,filter:z,equals:e,equals_:e,toArray:function(){return[]},toString:O("none()")}
Object.freeze&&Object.freeze(i)
return i}()
var H=function(e){var t=function(){return e}
var r=function(){return o}
var n=function(t){return H(t(e))}
var a=function(t){return t(e)}
var o={fold:function(t,r){return r(e)},is:function(t){return e===t},isSome:Q,isNone:U,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:n,ap:function(t){return t.fold(z,function(t){return H(t(e))})},each:function(t){t(e)},bind:a,flatten:t,exists:a,forall:a,filter:function(t){return t(e)?o:j},equals:function(t){return t.is(e)},equals_:function(t,r){return t.fold(U,function(t){return r(e,t)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o}
var W=function(e){return null===e||void 0===e?j:H(e)}
var V={some:H,none:z,from:W}
var G=function(e){var t=J(e)
if(t&&"static"!==x.DOM.getStyle(t,"position",true)){var r=x.DOM.getPos(t)
var n=t.scrollLeft-r.x
var a=t.scrollTop-r.y
return V.some({x:n,y:a})}return V.none()}
var Y=function(e,t){var r=x.DOM.select(e.settings.ui_container)[0]
t.getRoot().uiContainer=r}
var J=function(e){return e?e.getRoot().uiContainer:null}
var q=function(e,t){return t.uiContainer=J(e)}
var K={getUiContainerDelta:G,setUiContainer:Y,getUiContainer:J,inheritUiContainer:q}
var X=function(e,t,n){var a=[]
var o
if(!t)return
r.each(t.split(/[ ,]/),function(t){var r
var i=function(){var r=e.selection
t.settings.stateSelector&&r.selectorChanged(t.settings.stateSelector,function(e){t.active(e)},true)
t.settings.disabledStateSelector&&r.selectorChanged(t.settings.disabledStateSelector,function(e){t.disabled(e)})}
if("|"===t)o=null
else{if(!o){o={type:"buttongroup",items:[]}
a.push(o)}if(e.buttons[t]){r=t
t=e.buttons[r]
"function"===typeof t&&(t=t())
t.type=t.type||"button"
t.size=n
t=C.create(t)
o.items.push(t)
e.initialized?i():e.on("init",i)}}})
return{type:"toolbar",layout:"flow",items:a}}
var Z=function(e,t){var n=[]
var a=function(r){r&&n.push(X(e,r,t))}
r.each(E(e),function(e){a(e)})
if(n.length)return{type:"panel",layout:"stack",classes:"toolbar-grp",ariaRoot:true,ariaRemember:true,items:n}}
var $={createToolbar:X,createToolbars:Z}
var ee=x.DOM
var te=function(e){return{left:e.x,top:e.y,width:e.w,height:e.h,right:e.x+e.w,bottom:e.y+e.h}}
var re=function(e){r.each(e.contextToolbars,function(e){e.panel&&e.panel.hide()})}
var ne=function(e,t){e.moveTo(t.left,t.top)}
var ae=function(e,t,n){t=t?t.substr(0,2):""
r.each({t:"down",b:"up"},function(r,a){e.classes.toggle("arrow-"+r,n(a,t.substr(0,1)))})
r.each({l:"left",r:"right"},function(r,a){e.classes.toggle("arrow-"+r,n(a,t.substr(1,1)))})}
var oe=function(e,t,r,n,a,o){o=te({x:t,y:r,w:o.w,h:o.h})
e&&(o=e({elementRect:te(n),contentAreaRect:te(a),panelRect:o}))
return o}
var ie=function(e){var t
var n=function(){return e.contextToolbars||[]}
var a=function(t){var r,n,a
r=ee.getPos(e.getContentAreaContainer())
n=e.dom.getRect(t)
a=e.dom.getRoot()
if("BODY"===a.nodeName){n.x-=a.ownerDocument.documentElement.scrollLeft||a.scrollLeft
n.y-=a.ownerDocument.documentElement.scrollTop||a.scrollTop}n.x+=r.x
n.y+=r.y
return n}
var o=function(t,r){var n,o,i,u,s,l,f,d
var v=c(e)
if(e.removed)return
if(!t||!t.toolbar.panel){re(e)
return}f=["bc-tc","tc-bc","tl-bl","bl-tl","tr-br","br-tr"]
s=t.toolbar.panel
r&&s.show()
i=a(t.element)
o=ee.getRect(s.getEl())
u=ee.getRect(e.getContentAreaContainer()||e.getBody())
var m=K.getUiContainerDelta(s).getOr({x:0,y:0})
i.x+=m.x
i.y+=m.y
o.x+=m.x
o.y+=m.y
u.x+=m.x
u.y+=m.y
d=25
if("inline"!==ee.getStyle(t.element,"display",true)){var g=t.element.getBoundingClientRect()
i.w=g.width
i.h=g.height}e.inline||(u.w=e.getDoc().documentElement.offsetWidth)
e.selection.controlSelection.isResizable(t.element)&&i.w<d&&(i=M.inflate(i,0,8))
n=M.findBestRelativePosition(o,i,u,f)
i=M.clamp(i,u)
if(n){l=M.relativePosition(o,i,n)
ne(s,oe(v,l.x,l.y,i,u,o))}else{u.h+=o.h
i=M.intersect(u,i)
if(i){n=M.findBestRelativePosition(o,i,u,["bc-tc","bl-tl","br-tr"])
if(n){l=M.relativePosition(o,i,n)
ne(s,oe(v,l.x,l.y,i,u,o))}else ne(s,oe(v,i.x,i.y,i,u,o))}else s.hide()}ae(s,n,function(e,t){return e===t})}
var i=function(t){return function(){var r=function(){e.selection&&o(f(e.selection.getNode()),t)}
P.requestAnimationFrame(r)}}
var u=function(r){if(!t){var n=i(true)
var a=K.getUiContainer(r)
t=e.selection.getScrollContainer()||e.getWin()
ee.bind(t,"scroll",n)
ee.bind(a,"scroll",n)
e.on("remove",function(){ee.unbind(t,"scroll",n)
ee.unbind(a,"scroll",n)})}}
var s=function(t){var r
if(t.toolbar.panel){t.toolbar.panel.show()
o(t)
return}r=C.create({type:"floatpanel",role:"dialog",classes:"tinymce tinymce-inline arrow",ariaLabel:"Inline toolbar",layout:"flex",direction:"column",align:"stretch",autohide:false,autofix:true,fixed:true,border:1,items:$.createToolbar(e,t.toolbar.items),oncancel:function(){e.focus()}})
K.setUiContainer(e,r)
u(r)
t.toolbar.panel=r
r.renderTo().reflow()
o(t)}
var l=function(){r.each(n(),function(e){e.panel&&e.panel.hide()})}
var f=function(t){var r,a,o
var i=n()
o=e.$(t).parents().add(t)
for(r=o.length-1;r>=0;r--)for(a=i.length-1;a>=0;a--)if(i[a].predicate(o[r]))return{toolbar:i[a],element:o[r]}
return null}
e.on("click keyup setContent ObjectResized",function(t){if("setcontent"===t.type&&!t.selection)return
P.setEditorTimeout(e,function(){var t
t=f(e.selection.getNode())
if(t){l()
s(t)}else l()})})
e.on("blur hide contextmenu",l)
e.on("ObjectResizeStart",function(){var t=f(e.selection.getNode())
t&&t.toolbar.panel&&t.toolbar.panel.hide()})
e.on("ResizeEditor ResizeWindow",i(true))
e.on("nodeChange",i(false))
e.on("remove",function(){r.each(n(),function(e){e.panel&&e.panel.remove()})
e.contextToolbars={}})
e.shortcuts.add("ctrl+F9","",function(){var t=f(e.selection.getNode())
t&&t.toolbar.panel&&t.toolbar.panel.items()[0].focus()})}
var ue={addContextualToolbars:ie}
var se=function(e){if(null===e)return"null"
var t=typeof e
if("object"===t&&Array.prototype.isPrototypeOf(e))return"array"
if("object"===t&&String.prototype.isPrototypeOf(e))return"string"
return t}
var le=function(e){return function(t){return se(t)===e}}
var ce=le("function")
var fe=le("number")
var de=(ve=Array.prototype.indexOf,me=function(e,t){return ve.call(e,t)},ge=function(e,t){return Ce(e,t)},void 0===ve?ge:me)
var ve,me,ge
var pe=function(e,t){var r=de(e,t)
return-1===r?V.none():V.some(r)}
var Ae=function(e,t){return xe(e,t).isSome()}
var he=function(e,t){var r=e.length
var n=new Array(r)
for(var a=0;a<r;a++){var o=e[a]
n[a]=t(o,a,e)}return n}
var be=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
t(a,r,e)}}
var ye=function(e,t){var r=[]
for(var n=0,a=e.length;n<a;n++){var o=e[n]
t(o,n,e)&&r.push(o)}return r}
var we=function(e,t,r){be(e,function(e){r=t(r,e)})
return r}
var Ee=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
if(t(a,r,e))return V.some(a)}return V.none()}
var xe=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
if(t(a,r,e))return V.some(r)}return V.none()}
var Ce=function(e,t){for(var r=0,n=e.length;r<n;++r)if(e[r]===t)return r
return-1}
var ke=Array.prototype.push
var Be=function(e){var t=[]
for(var r=0,n=e.length;r<n;++r){if(!Array.prototype.isPrototypeOf(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e)
ke.apply(t,e[r])}return t}
Array.prototype.slice
ce(Array.from)&&Array.from
var Te={file:{title:"File",items:"newdocument restoredraft | preview | print"},edit:{title:"Edit",items:"undo redo | cut copy paste pastetext | selectall"},view:{title:"View",items:"code | visualaid visualchars visualblocks | spellchecker | preview fullscreen"},insert:{title:"Insert",items:"image link media template codesample inserttable | charmap hr | pagebreak nonbreaking anchor toc | insertdatetime"},format:{title:"Format",items:"bold italic underline strikethrough superscript subscript codeformat | blockformats align | removeformat"},tools:{title:"Tools",items:"spellchecker spellcheckerlanguage | a11ycheck code"},table:{title:"Table"},help:{title:"Help"}}
var Re=function(){return{name:"|",item:{text:"|"}}}
var Ie=function(e,t){var r=t?{name:e,item:t}:null
return"|"===e?Re():r}
var Se=function(e,t){return xe(e,function(e){return e.name===t}).isSome()}
var De=function(e){return e&&"|"===e.item.text}
var Ne=function(e,t){var r=ye(e,function(e){return false===t.hasOwnProperty(e.name)})
var n=ye(r,function(e,t,r){return!De(e)||!De(r[t-1])})
return ye(n,function(e,t,r){return!De(e)||t>0&&t<r.length-1})}
var Me=function(e,t,n,a){var o,i,u,s
if(t){i=t[a]
s=true}else i=Te[a]
if(i){o={text:i.title}
u=[]
r.each((i.items||"").split(/[ ,]/),function(t){var r=Ie(t,e[t])
r&&u.push(r)})
s||r.each(e,function(e,t){if(e.context===a&&!Se(u,t)){"before"===e.separator&&u.push(Re())
e.prependToContext?u.unshift(Ie(t,e)):u.push(Ie(t,e))
"after"===e.separator&&u.push(Re())}})
o.menu=he(Ne(u,n),function(e){return e.item})
if(!o.menu.length)return null}return o}
var Pe=function(e){var t
var r=[]
var n=f(e)
if(n)for(t in n)r.push(t)
else for(t in Te)r.push(t)
return r}
var _e=function(e){var t=[]
var n=Pe(e)
var a=r.makeMap(d(e).split(/[ ,]/))
var i=o(e)
var u="string"===typeof i?i.split(/[ ,]/):n
for(var s=0;s<u.length;s++){var l=u[s]
var c=Me(e.menuItems,f(e),a,l)
c&&t.push(c)}return t}
var Oe={createMenuButtons:_e}
var Fe=x.DOM
var Le=function(e){return{width:e.clientWidth,height:e.clientHeight}}
var Ue=function(e,t,r){var n,a,o,i
n=e.getContainer()
a=e.getContentAreaContainer().firstChild
o=Le(n)
i=Le(a)
if(null!==t){t=Math.max(v(e),t)
t=Math.min(g(e),t)
Fe.setStyle(n,"width",t+(o.width-i.width))
Fe.setStyle(a,"width",t)}r=Math.max(m(e),r)
r=Math.min(p(e),r)
Fe.setStyle(a,"height",r)
I.fireResizeEditor(e)}
var Qe=function(e,t,r){var n=e.getContentAreaContainer()
Ue(e,n.clientWidth+t,n.clientHeight+r)}
var ze={resizeTo:Ue,resizeBy:Qe}
var je=tinymce.util.Tools.resolve("tinymce.Env")
var He=function(e){return{element:function(){return e}}}
var We=function(e,t,r){var n=e.settings[r]
n&&n(He(t.getEl("body")))}
var Ve=function(e,t,n){r.each(n,function(r){var n=t.items().filter("#"+r.name)[0]
if(n&&n.visible()&&r.name!==e){We(r,n,"onhide")
n.visible(false)}})}
var Ge=function(e){e.items().each(function(e){e.active(false)})}
var Ye=function(e,t){return r.grep(e,function(e){return e.name===t})[0]}
var Je=function(e,t,r){return function(n){var a=n.control
var o=a.parents().filter("panel")[0]
var i=o.find("#"+t)[0]
var u=Ye(r,t)
Ve(t,o,r)
Ge(a.parent())
if(i&&i.visible()){We(u,i,"onhide")
i.hide()
a.active(false)}else{if(i){i.show()
We(u,i,"onshow")}else{i=C.create({type:"container",name:t,layout:"stack",classes:"sidebar-panel",html:""})
o.prepend(i)
We(u,i,"onrender")
We(u,i,"onshow")}a.active(true)}I.fireResizeEditor(e)}}
var qe=function(){return!je.ie||je.ie>=11}
var Ke=function(e){return!(!qe()||!e.sidebars)&&e.sidebars.length>0}
var Xe=function(e){var t=r.map(e.sidebars,function(t){var r=t.settings
return{type:"button",icon:r.icon,image:r.image,tooltip:r.tooltip,onclick:Je(e,t.name,e.sidebars)}})
return{type:"panel",name:"sidebar",layout:"stack",classes:"sidebar",items:[{type:"toolbar",layout:"stack",classes:"sidebar-toolbar",items:t}]}}
var Ze={hasSidebar:Ke,createSidebar:Xe}
var $e=function(e){var t=function(){e._skinLoaded=true
I.fireSkinLoaded(e)}
return function(){e.initialized?t():e.on("init",t)}}
var et={fireSkinLoaded:$e}
var tt=x.DOM
var rt=function(e){return function(t){e.find("*").disabled("readonly"===t.mode)}}
var nt=function(e){return{type:"panel",name:"iframe",layout:"stack",classes:"edit-area",border:e,html:""}}
var at=function(e){return{type:"panel",layout:"stack",classes:"edit-aria-container",border:"1 0 0 0",items:[nt("0"),Ze.createSidebar(e)]}}
var ot=function(e,t,r){var o,l,c
false===A(e)&&r.skinUiCss?tt.styleSheetLoader.load(r.skinUiCss,et.fireSkinLoaded(e)):et.fireSkinLoaded(e)()
o=t.panel=C.create({type:"panel",role:"application",classes:"tinymce",style:"visibility: hidden",layout:"stack",border:1,items:[{type:"container",classes:"top-part",items:[false===a(e)?null:{type:"menubar",border:"0 0 1 0",items:Oe.createMenuButtons(e)},$.createToolbars(e,u(e))]},Ze.hasSidebar(e)?at(e):nt("1 0 0 0")]})
K.setUiContainer(e,o)
"none"!==b(e)&&(l={type:"resizehandle",direction:b(e),onResizeStart:function(){var t=e.getContentAreaContainer().firstChild
c={width:t.clientWidth,height:t.clientHeight}},onResize:function(t){"both"===b(e)?ze.resizeTo(e,c.width+t.deltaX,c.height+t.deltaY):ze.resizeTo(e,null,c.height+t.deltaY)}})
if(i(e)){var f='<a href="https://www.tiny.cloud/?utm_campaign=editor_referral&amp;utm_medium=poweredby&amp;utm_source=tinymce" rel="noopener" target="_blank" role="presentation" tabindex="-1">Tiny</a>'
var d=k.translate(["Powered by {0}",f])
var v=n(e)?{type:"label",classes:"branding",html:" "+d}:null
o.add({type:"panel",name:"statusbar",classes:"statusbar",layout:"flow",border:"1 0 0 0",ariaRoot:true,items:[{type:"elementpath",editor:e},l,v]})}I.fireBeforeRenderUI(e)
e.on("SwitchMode",rt(o))
o.renderBefore(r.targetNode).reflow()
s(e)&&e.setMode("readonly")
r.width&&tt.setStyle(o.getEl(),"width",r.width)
e.on("remove",function(){o.remove()
o=null})
N.addKeys(e,o)
ue.addContextualToolbars(e)
return{iframeContainer:o.find("#iframe")[0].getEl(),editorContainer:o.getEl()}}
var it={render:ot}
var ut=tinymce.util.Tools.resolve("tinymce.dom.DomQuery")
var st=0
var lt={id:function(){return"mceu_"+st++},create:function(e,t,n){var a=document.createElement(e)
x.DOM.setAttribs(a,t)
"string"===typeof n?a.innerHTML=n:r.each(n,function(e){e.nodeType&&a.appendChild(e)})
return a},createFragment:function(e){return x.DOM.createFragment(e)},getWindowSize:function(){return x.DOM.getViewPort()},getSize:function(e){var t,r
if(e.getBoundingClientRect){var n=e.getBoundingClientRect()
t=Math.max(n.width||n.right-n.left,e.offsetWidth)
r=Math.max(n.height||n.bottom-n.bottom,e.offsetHeight)}else{t=e.offsetWidth
r=e.offsetHeight}return{width:t,height:r}},getPos:function(e,t){return x.DOM.getPos(e,t||lt.getContainer())},getContainer:function(){return je.container?je.container:document.body},getViewPort:function(e){return x.DOM.getViewPort(e)},get:function(e){return document.getElementById(e)},addClass:function(e,t){return x.DOM.addClass(e,t)},removeClass:function(e,t){return x.DOM.removeClass(e,t)},hasClass:function(e,t){return x.DOM.hasClass(e,t)},toggleClass:function(e,t,r){return x.DOM.toggleClass(e,t,r)},css:function(e,t,r){return x.DOM.setStyle(e,t,r)},getRuntimeStyle:function(e,t){return x.DOM.getStyle(e,t,true)},on:function(e,t,r,n){return x.DOM.bind(e,t,r,n)},off:function(e,t,r){return x.DOM.unbind(e,t,r)},fire:function(e,t,r){return x.DOM.fire(e,t,r)},innerHtml:function(e,t){x.DOM.setHTML(e,t)}}
var ct=function(e){return"static"===lt.getRuntimeStyle(e,"position")}
var ft=function(e){return e.state.get("fixed")}
function dt(e,t,r){var n,a,o,i,u,s,l,c,f,d
f=mt()
a=lt.getPos(t,K.getUiContainer(e))
o=a.x
i=a.y
if(ft(e)&&ct(document.body)){o-=f.x
i-=f.y}n=e.getEl()
d=lt.getSize(n)
u=d.width
s=d.height
d=lt.getSize(t)
l=d.width
c=d.height
r=(r||"").split("")
"b"===r[0]&&(i+=c)
"r"===r[1]&&(o+=l)
"c"===r[0]&&(i+=Math.round(c/2))
"c"===r[1]&&(o+=Math.round(l/2))
"b"===r[3]&&(i-=s)
"r"===r[4]&&(o-=u)
"c"===r[3]&&(i-=Math.round(s/2))
"c"===r[4]&&(o-=Math.round(u/2))
return{x:o,y:i,w:u,h:s}}var vt=function(e){return{x:0,y:0,w:e.scrollWidth-1,h:e.scrollHeight-1}}
var mt=function(){var e=window
var t=Math.max(e.pageXOffset,document.body.scrollLeft,document.documentElement.scrollLeft)
var r=Math.max(e.pageYOffset,document.body.scrollTop,document.documentElement.scrollTop)
var n=e.innerWidth||document.documentElement.clientWidth
var a=e.innerHeight||document.documentElement.clientHeight
return{x:t,y:r,w:n,h:a}}
var gt=function(e){var t=K.getUiContainer(e)
return t&&!ft(e)?vt(t):mt()}
var pt={testMoveRel:function(e,t){var r=gt(this)
for(var n=0;n<t.length;n++){var a=dt(this,e,t[n])
if(ft(this)){if(a.x>0&&a.x+a.w<r.w&&a.y>0&&a.y+a.h<r.h)return t[n]}else if(a.x>r.x&&a.x+a.w<r.w+r.x&&a.y>r.y&&a.y+a.h<r.h+r.y)return t[n]}return t[0]},moveRel:function(e,t){"string"!==typeof t&&(t=this.testMoveRel(e,t))
var r=dt(this,e,t)
return this.moveTo(r.x,r.y)},moveBy:function(e,t){var r=this,n=r.layoutRect()
r.moveTo(n.x+e,n.y+t)
return r},moveTo:function(e,t){var r=this
function n(e,t,r){if(e<0)return 0
if(e+r>t){e=t-r
return e<0?0:e}return e}if(r.settings.constrainToViewport){var a=gt(this)
var o=r.layoutRect()
e=n(e,a.w+a.x,o.w)
t=n(t,a.h+a.y,o.h)}var i=K.getUiContainer(r)
if(i&&ct(i)&&!ft(r)){e-=i.scrollLeft
t-=i.scrollTop}if(i){e+=1
t+=1}if(r.state.get("rendered"))r.layoutRect({x:e,y:t}).repaint()
else{r.settings.x=e
r.settings.y=t}r.fire("move",{x:e,y:t})
return r}}
var At=tinymce.util.Tools.resolve("tinymce.util.Class")
var ht=tinymce.util.Tools.resolve("tinymce.util.EventDispatcher")
var bt={parseBox:function(e){var t
var r=10
if(!e)return
if("number"===typeof e){e=e||0
return{top:e,left:e,bottom:e,right:e}}e=e.split(" ")
t=e.length
if(1===t)e[1]=e[2]=e[3]=e[0]
else if(2===t){e[2]=e[0]
e[3]=e[1]}else 3===t&&(e[3]=e[1])
return{top:parseInt(e[0],r)||0,right:parseInt(e[1],r)||0,bottom:parseInt(e[2],r)||0,left:parseInt(e[3],r)||0}},measureBox:function(e,t){function r(t){var r=e.ownerDocument.defaultView
if(r){var n=r.getComputedStyle(e,null)
if(n){t=t.replace(/[A-Z]/g,function(e){return"-"+e})
return n.getPropertyValue(t)}return null}return e.currentStyle[t]}function n(e){var t=parseFloat(r(e))
return isNaN(t)?0:t}return{top:n(t+"TopWidth"),right:n(t+"RightWidth"),bottom:n(t+"BottomWidth"),left:n(t+"LeftWidth")}}}
function yt(){}function wt(e){this.cls=[]
this.cls._map={}
this.onchange=e||yt
this.prefix=""}r.extend(wt.prototype,{add:function(e){if(e&&!this.contains(e)){this.cls._map[e]=true
this.cls.push(e)
this._change()}return this},remove:function(e){if(this.contains(e)){var t=void 0
for(t=0;t<this.cls.length;t++)if(this.cls[t]===e)break
this.cls.splice(t,1)
delete this.cls._map[e]
this._change()}return this},toggle:function(e,t){var r=this.contains(e)
if(r!==t){r?this.remove(e):this.add(e)
this._change()}return this},contains:function(e){return!!this.cls._map[e]},_change:function(){delete this.clsValue
this.onchange.call(this)}})
wt.prototype.toString=function(){var e
if(this.clsValue)return this.clsValue
e=""
for(var t=0;t<this.cls.length;t++){t>0&&(e+=" ")
e+=this.prefix+this.cls[t]}return e}
function Et(e){var t=[]
var r,n=e.length
while(n--){r=e[n]
if(!r.__checked){t.push(r)
r.__checked=1}}n=t.length
while(n--)delete t[n].__checked
return t}var xt=/^([\w\\*]+)?(?:#([\w\-\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i
var Ct=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
var kt=/^\s*|\s*$/g
var Bt
var Tt=At.extend({init:function(e){var t=this.match
function r(e){if(e){e=e.toLowerCase()
return function(t){return"*"===e||t.type===e}}}function n(e){if(e)return function(t){return t._name===e}}function a(e){if(e){e=e.split(".")
return function(t){var r=e.length
while(r--)if(!t.classes.contains(e[r]))return false
return true}}}function o(e,t,r){if(e)return function(n){var a=n[e]?n[e]():""
return t?"="===t?a===r:"*="===t?a.indexOf(r)>=0:"~="===t?(" "+a+" ").indexOf(" "+r+" ")>=0:"!="===t?a!==r:"^="===t?0===a.indexOf(r):"$="===t&&a.substr(a.length-r.length)===r:!!r}}function i(e){var r
if(e){e=/(?:not\((.+)\))|(.+)/i.exec(e)
if(!e[1]){e=e[2]
return function(t,r,n){return"first"===e?0===r:"last"===e?r===n-1:"even"===e?r%2===0:"odd"===e?r%2===1:!!t[e]&&t[e]()}}r=s(e[1],[])
return function(e){return!t(e,r)}}}function u(e,t,u){var s
function l(e){e&&t.push(e)}s=xt.exec(e.replace(kt,""))
l(r(s[1]))
l(n(s[2]))
l(a(s[3]))
l(o(s[4],s[5],s[6]))
l(i(s[7]))
t.pseudo=!!s[7]
t.direct=u
return t}function s(e,t){var r=[]
var n,a,o
do{Ct.exec("")
a=Ct.exec(e)
if(a){e=a[3]
r.push(a[1])
if(a[2]){n=a[3]
break}}}while(a)
n&&s(n,t)
e=[]
for(o=0;o<r.length;o++)">"!==r[o]&&e.push(u(r[o],[],">"===r[o-1]))
t.push(e)
return t}this._selectors=s(e,[])},match:function(e,t){var r,n,a,o,i,u,s,l,c,f,d,v,m
t=t||this._selectors
for(r=0,n=t.length;r<n;r++){i=t[r]
o=i.length
m=e
v=0
for(a=o-1;a>=0;a--){l=i[a]
while(m){if(l.pseudo){d=m.parent().items()
c=f=d.length
while(c--)if(d[c]===m)break}for(u=0,s=l.length;u<s;u++)if(!l[u](m,c,f)){u=s+1
break}if(u===s){v++
break}if(a===o-1)break
m=m.parent()}}if(v===o)return true}return false},find:function(e){var t,r,n=[]
var a=this._selectors
function o(e,t,r){var a,i,u,s,l
var c=t[r]
for(a=0,i=e.length;a<i;a++){l=e[a]
for(u=0,s=c.length;u<s;u++)if(!c[u](l,a,i)){u=s+1
break}if(u===s)r===t.length-1?n.push(l):l.items&&o(l.items(),t,r+1)
else if(c.direct)return
l.items&&o(l.items(),t,r)}}if(e.items){for(t=0,r=a.length;t<r;t++)o(e.items(),a[t],0)
r>1&&(n=Et(n))}Bt||(Bt=Tt.Collection)
return new Bt(n)}})
var Rt,It
var St=Array.prototype.push,Dt=Array.prototype.slice
It={length:0,init:function(e){e&&this.add(e)},add:function(e){var t=this
r.isArray(e)?St.apply(t,e):e instanceof Rt?t.add(e.toArray()):St.call(t,e)
return t},set:function(e){var t=this
var r=t.length
var n
t.length=0
t.add(e)
for(n=t.length;n<r;n++)delete t[n]
return t},filter:function(e){var t=this
var r,n
var a=[]
var o,i
if("string"===typeof e){e=new Tt(e)
i=function(t){return e.match(t)}}else i=e
for(r=0,n=t.length;r<n;r++){o=t[r]
i(o)&&a.push(o)}return new Rt(a)},slice:function(){return new Rt(Dt.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},each:function(e){r.each(this,e)
return this},toArray:function(){return r.toArray(this)},indexOf:function(e){var t=this
var r=t.length
while(r--)if(t[r]===e)break
return r},reverse:function(){return new Rt(r.toArray(this).reverse())},hasClass:function(e){return!!this[0]&&this[0].classes.contains(e)},prop:function(e,t){var r=this
var n
if(void 0!==t){r.each(function(r){r[e]&&r[e](t)})
return r}n=r[0]
if(n&&n[e])return n[e]()},exec:function(e){var t=this,n=r.toArray(arguments).slice(1)
t.each(function(t){t[e]&&t[e].apply(t,n)})
return t},remove:function(){var e=this.length
while(e--)this[e].remove()
return this},addClass:function(e){return this.each(function(t){t.classes.add(e)})},removeClass:function(e){return this.each(function(t){t.classes.remove(e)})}}
r.each("fire on off show hide append prepend before after reflow".split(" "),function(e){It[e]=function(){var t=r.toArray(arguments)
this.each(function(r){e in r&&r[e].apply(r,t)})
return this}})
r.each("text name disabled active selected checked visible parent value data".split(" "),function(e){It[e]=function(t){return this.prop(e,t)}})
Rt=At.extend(It)
Tt.Collection=Rt
var Nt=Rt
var Mt=function(e){this.create=e.create}
Mt.create=function(e,t){return new Mt({create:function(r,n){var a
var o=function(e){r.set(n,e.value)}
var i=function(r){e.set(t,r.value)}
r.on("change:"+n,i)
e.on("change:"+t,o)
a=r._bindings
if(!a){a=r._bindings=[]
r.on("destroy",function(){var e=a.length
while(e--)a[e]()})}a.push(function(){e.off("change:"+t,o)})
return e.get(t)}})}
var Pt=tinymce.util.Tools.resolve("tinymce.util.Observable")
function _t(e){return e.nodeType>0}function Ot(e,t){var n,a
if(e===t)return true
if(null===e||null===t)return e===t
if("object"!==typeof e||"object"!==typeof t)return e===t
if(r.isArray(t)){if(e.length!==t.length)return false
n=e.length
while(n--)if(!Ot(e[n],t[n]))return false}if(_t(e)||_t(t))return e===t
a={}
for(n in t){if(!Ot(e[n],t[n]))return false
a[n]=true}for(n in e)if(!a[n]&&!Ot(e[n],t[n]))return false
return true}var Ft=At.extend({Mixins:[Pt],init:function(e){var t,r
e=e||{}
for(t in e){r=e[t]
r instanceof Mt&&(e[t]=r.create(this,t))}this.data=e},set:function(e,t){var r,n
var a=this.data[e]
t instanceof Mt&&(t=t.create(this,e))
if("object"===typeof e){for(r in e)this.set(r,e[r])
return this}if(!Ot(a,t)){this.data[e]=t
n={target:this,name:e,value:t,oldValue:a}
this.fire("change:"+e,n)
this.fire("change",n)}return this},get:function(e){return this.data[e]},has:function(e){return e in this.data},bind:function(e){return Mt.create(this,e)},destroy:function(){this.fire("destroy")}})
var Lt,Ut={}
var Qt={add:function(e){var t=e.parent()
if(t){if(!t._layout||t._layout.isNative())return
Ut[t._id]||(Ut[t._id]=t)
if(!Lt){Lt=true
P.requestAnimationFrame(function(){var e,t
Lt=false
for(e in Ut){t=Ut[e]
t.state.get("rendered")&&t.reflow()}Ut={}},document.body)}}},remove:function(e){Ut[e._id]&&delete Ut[e._id]}}
var zt="onmousewheel"in document
var jt=false
var Ht="mce-"
var Wt,Vt=0
var Gt={Statics:{classPrefix:Ht},isRtl:function(){return Wt.rtl},classPrefix:Ht,init:function(e){var t=this
var n,a
function o(e){var r
e=e.split(" ")
for(r=0;r<e.length;r++)t.classes.add(e[r])}t.settings=e=r.extend({},t.Defaults,e)
t._id=e.id||"mceu_"+Vt++
t._aria={role:e.role}
t._elmCache={}
t.$=ut
t.state=new Ft({visible:true,active:false,disabled:false,value:""})
t.data=new Ft(e.data)
t.classes=new wt(function(){t.state.get("rendered")&&(t.getEl().className=this.toString())})
t.classes.prefix=t.classPrefix
n=e.classes
if(n){if(t.Defaults){a=t.Defaults.classes
a&&n!==a&&o(a)}o(n)}r.each("title text name visible disabled active value".split(" "),function(r){r in e&&t[r](e[r])})
t.on("click",function(){if(t.disabled())return false})
t.settings=e
t.borderBox=bt.parseBox(e.border)
t.paddingBox=bt.parseBox(e.padding)
t.marginBox=bt.parseBox(e.margin)
e.hidden&&t.hide()},Properties:"parent,name",getContainerElm:function(){var e=K.getUiContainer(this)
return e||lt.getContainer()},getParentCtrl:function(e){var t
var r=this.getRoot().controlIdLookup
while(e&&r){t=r[e.id]
if(t)break
e=e.parentNode}return t},initLayoutRect:function(){var e=this
var t=e.settings
var r,n
var a=e.getEl()
var o,i,u,s,l
var c,f,d
r=e.borderBox=e.borderBox||bt.measureBox(a,"border")
e.paddingBox=e.paddingBox||bt.measureBox(a,"padding")
e.marginBox=e.marginBox||bt.measureBox(a,"margin")
d=lt.getSize(a)
c=t.minWidth
f=t.minHeight
u=c||d.width
s=f||d.height
o=t.width
i=t.height
l=t.autoResize
l="undefined"!==typeof l?l:!o&&!i
o=o||u
i=i||s
var v=r.left+r.right
var m=r.top+r.bottom
var g=t.maxWidth||65535
var p=t.maxHeight||65535
e._layoutRect=n={x:t.x||0,y:t.y||0,w:o,h:i,deltaW:v,deltaH:m,contentW:o-v,contentH:i-m,innerW:o-v,innerH:i-m,startMinWidth:c||0,startMinHeight:f||0,minW:Math.min(u,g),minH:Math.min(s,p),maxW:g,maxH:p,autoResize:l,scrollW:0}
e._lastLayoutRect={}
return n},layoutRect:function(e){var t=this
var r,n,a,o,i,u=t._layoutRect
u||(u=t.initLayoutRect())
if(e){a=u.deltaW
o=u.deltaH
void 0!==e.x&&(u.x=e.x)
void 0!==e.y&&(u.y=e.y)
void 0!==e.minW&&(u.minW=e.minW)
void 0!==e.minH&&(u.minH=e.minH)
n=e.w
if(void 0!==n){n=n<u.minW?u.minW:n
n=n>u.maxW?u.maxW:n
u.w=n
u.innerW=n-a}n=e.h
if(void 0!==n){n=n<u.minH?u.minH:n
n=n>u.maxH?u.maxH:n
u.h=n
u.innerH=n-o}n=e.innerW
if(void 0!==n){n=n<u.minW-a?u.minW-a:n
n=n>u.maxW-a?u.maxW-a:n
u.innerW=n
u.w=n+a}n=e.innerH
if(void 0!==n){n=n<u.minH-o?u.minH-o:n
n=n>u.maxH-o?u.maxH-o:n
u.innerH=n
u.h=n+o}void 0!==e.contentW&&(u.contentW=e.contentW)
void 0!==e.contentH&&(u.contentH=e.contentH)
r=t._lastLayoutRect
if(r.x!==u.x||r.y!==u.y||r.w!==u.w||r.h!==u.h){i=Wt.repaintControls
if(i&&i.map&&!i.map[t._id]){i.push(t)
i.map[t._id]=true}r.x=u.x
r.y=u.y
r.w=u.w
r.h=u.h}return t}return u},repaint:function(){var e=this
var t,r,n,a,o
var i,u,s,l,c
l=document.createRange?function(e){return e}:Math.round
t=e.getEl().style
a=e._layoutRect
s=e._lastRepaintRect||{}
o=e.borderBox
i=o.left+o.right
u=o.top+o.bottom
if(a.x!==s.x){t.left=l(a.x)+"px"
s.x=a.x}if(a.y!==s.y){t.top=l(a.y)+"px"
s.y=a.y}if(a.w!==s.w){c=l(a.w-i)
t.width=(c>=0?c:0)+"px"
s.w=a.w}if(a.h!==s.h){c=l(a.h-u)
t.height=(c>=0?c:0)+"px"
s.h=a.h}if(e._hasBody&&a.innerW!==s.innerW){c=l(a.innerW)
n=e.getEl("body")
if(n){r=n.style
r.width=(c>=0?c:0)+"px"}s.innerW=a.innerW}if(e._hasBody&&a.innerH!==s.innerH){c=l(a.innerH)
n=n||e.getEl("body")
if(n){r=r||n.style
r.height=(c>=0?c:0)+"px"}s.innerH=a.innerH}e._lastRepaintRect=s
e.fire("repaint",{},false)},updateLayoutRect:function(){var e=this
e.parent()._lastRect=null
lt.css(e.getEl(),{width:"",height:""})
e._layoutRect=e._lastRepaintRect=e._lastLayoutRect=null
e.initLayoutRect()},on:function(e,t){var r=this
function n(e){var t,n
if("string"!==typeof e)return e
return function(a){t||r.parentsAndSelf().each(function(r){var a=r.settings.callbacks
if(a&&(t=a[e])){n=r
return false}})
if(!t){a.action=e
this.fire("execute",a)
return}return t.call(n,a)}}Yt(r).on(e,n(t))
return r},off:function(e,t){Yt(this).off(e,t)
return this},fire:function(e,t,r){var n=this
t=t||{}
t.control||(t.control=n)
t=Yt(n).fire(e,t)
if(false!==r&&n.parent){var a=n.parent()
while(a&&!t.isPropagationStopped()){a.fire(e,t,false)
a=a.parent()}}return t},hasEventListeners:function(e){return Yt(this).has(e)},parents:function(e){var t=this
var r,n=new Nt
for(r=t.parent();r;r=r.parent())n.add(r)
e&&(n=n.filter(e))
return n},parentsAndSelf:function(e){return new Nt(this).add(this.parents(e))},next:function(){var e=this.parent().items()
return e[e.indexOf(this)+1]},prev:function(){var e=this.parent().items()
return e[e.indexOf(this)-1]},innerHtml:function(e){this.$el.html(e)
return this},getEl:function(e){var t=e?this._id+"-"+e:this._id
this._elmCache[t]||(this._elmCache[t]=ut("#"+t)[0])
return this._elmCache[t]},show:function(){return this.visible(true)},hide:function(){return this.visible(false)},focus:function(){try{this.getEl().focus()}catch(e){}return this},blur:function(){this.getEl().blur()
return this},aria:function(e,t){var r=this,n=r.getEl(r.ariaTarget)
if("undefined"===typeof t)return r._aria[e]
r._aria[e]=t
r.state.get("rendered")&&n.setAttribute("role"===e?e:"aria-"+e,t)
return r},encode:function(e,t){false!==t&&(e=this.translate(e))
return(e||"").replace(/[&<>"]/g,function(e){return"&#"+e.charCodeAt(0)+";"})},translate:function(e){return Wt.translate?Wt.translate(e):e},before:function(e){var t=this,r=t.parent()
r&&r.insert(e,r.items().indexOf(t),true)
return t},after:function(e){var t=this,r=t.parent()
r&&r.insert(e,r.items().indexOf(t))
return t},remove:function(){var e=this
var t=e.getEl()
var r=e.parent()
var n,a
if(e.items){var o=e.items().toArray()
a=o.length
while(a--)o[a].remove()}if(r&&r.items){n=[]
r.items().each(function(t){t!==e&&n.push(t)})
r.items().set(n)
r._lastRect=null}e._eventsRoot&&e._eventsRoot===e&&ut(t).off()
var i=e.getRoot().controlIdLookup
i&&delete i[e._id]
t&&t.parentNode&&t.parentNode.removeChild(t)
e.state.set("rendered",false)
e.state.destroy()
e.fire("remove")
return e},renderBefore:function(e){ut(e).before(this.renderHtml())
this.postRender()
return this},renderTo:function(e){ut(e||this.getContainerElm()).append(this.renderHtml())
this.postRender()
return this},preRender:function(){},render:function(){},renderHtml:function(){return'<div id="'+this._id+'" class="'+this.classes+'"></div>'},postRender:function(){var e=this
var t=e.settings
var r,n,a,o,i
e.$el=ut(e.getEl())
e.state.set("rendered",true)
for(o in t)0===o.indexOf("on")&&e.on(o.substr(2),t[o])
if(e._eventsRoot){for(a=e.parent();!i&&a;a=a.parent())i=a._eventsRoot
if(i)for(o in i._nativeEvents)e._nativeEvents[o]=true}Jt(e)
if(t.style){r=e.getEl()
if(r){r.setAttribute("style",t.style)
r.style.cssText=t.style}}if(e.settings.border){n=e.borderBox
e.$el.css({"border-top-width":n.top,"border-right-width":n.right,"border-bottom-width":n.bottom,"border-left-width":n.left})}var u=e.getRoot()
u.controlIdLookup||(u.controlIdLookup={})
u.controlIdLookup[e._id]=e
for(var s in e._aria)e.aria(s,e._aria[s])
false===e.state.get("visible")&&(e.getEl().style.display="none")
e.bindStates()
e.state.on("change:visible",function(t){var r=t.value
var n
if(e.state.get("rendered")){e.getEl().style.display=false===r?"none":""
e.getEl().getBoundingClientRect()}n=e.parent()
n&&(n._lastRect=null)
e.fire(r?"show":"hide")
Qt.add(e)})
e.fire("postrender",{},false)},bindStates:function(){},scrollIntoView:function(e){function t(e,t){var r,n,a=e
r=n=0
while(a&&a!==t&&a.nodeType){r+=a.offsetLeft||0
n+=a.offsetTop||0
a=a.offsetParent}return{x:r,y:n}}var r=this.getEl(),n=r.parentNode
var a,o,i,u,s,l
var c=t(r,n)
a=c.x
o=c.y
i=r.offsetWidth
u=r.offsetHeight
s=n.clientWidth
l=n.clientHeight
if("end"===e){a-=s-i
o-=l-u}else if("center"===e){a-=s/2-i/2
o-=l/2-u/2}n.scrollLeft=a
n.scrollTop=o
return this},getRoot:function(){var e,t=this
var r=[]
while(t){if(t.rootControl){e=t.rootControl
break}r.push(t)
e=t
t=t.parent()}e||(e=this)
var n=r.length
while(n--)r[n].rootControl=e
return e},reflow:function(){Qt.remove(this)
var e=this.parent()
e&&e._layout&&!e._layout.isNative()&&e.reflow()
return this}}
r.each("text title visible disabled active value".split(" "),function(e){Gt[e]=function(t){if(0===arguments.length)return this.state.get(e)
"undefined"!==typeof t&&this.state.set(e,t)
return this}})
Wt=At.extend(Gt)
function Yt(e){e._eventDispatcher||(e._eventDispatcher=new ht({scope:e,toggleEvent:function(t,r){if(r&&ht.isNative(t)){e._nativeEvents||(e._nativeEvents={})
e._nativeEvents[t]=true
e.state.get("rendered")&&Jt(e)}}}))
return e._eventDispatcher}function Jt(e){var t,r,n,a,o,i
function u(t){var r=e.getParentCtrl(t.target)
r&&r.fire(t.type,t)}function s(){var e=a._lastHoverCtrl
if(e){e.fire("mouseleave",{target:e.getEl()})
e.parents().each(function(e){e.fire("mouseleave",{target:e.getEl()})})
a._lastHoverCtrl=null}}function l(t){var r,n,o,i=e.getParentCtrl(t.target),u=a._lastHoverCtrl,s=0
if(i!==u){a._lastHoverCtrl=i
n=i.parents().toArray().reverse()
n.push(i)
if(u){o=u.parents().toArray().reverse()
o.push(u)
for(s=0;s<o.length;s++)if(n[s]!==o[s])break
for(r=o.length-1;r>=s;r--){u=o[r]
u.fire("mouseleave",{target:u.getEl()})}}for(r=s;r<n.length;r++){i=n[r]
i.fire("mouseenter",{target:i.getEl()})}}}function c(t){t.preventDefault()
if("mousewheel"===t.type){t.deltaY=-.025*t.wheelDelta
t.wheelDeltaX&&(t.deltaX=-.025*t.wheelDeltaX)}else{t.deltaX=0
t.deltaY=t.detail}t=e.fire("wheel",t)}o=e._nativeEvents
if(o){n=e.parents().toArray()
n.unshift(e)
for(t=0,r=n.length;!a&&t<r;t++)a=n[t]._eventsRoot
a||(a=n[n.length-1]||e)
e._eventsRoot=a
for(r=t,t=0;t<r;t++)n[t]._eventsRoot=a
var f=a._delegates
f||(f=a._delegates={})
for(i in o){if(!o)return false
if("wheel"===i&&!jt){zt?ut(e.getEl()).on("mousewheel",c):ut(e.getEl()).on("DOMMouseScroll",c)
continue}if("mouseenter"===i||"mouseleave"===i){if(!a._hasMouseEnter){ut(a.getEl()).on("mouseleave",s).on("mouseover",l)
a._hasMouseEnter=1}}else if(!f[i]){ut(a.getEl()).on(i,u)
f[i]=true}o[i]=false}}}var qt=Wt
var Kt=function(e){return!!e.getAttribute("data-mce-tabstop")}
function Xt(e){var t=e.root
var r,n
function a(e){return e&&1===e.nodeType}try{r=document.activeElement}catch(e){r=document.body}n=t.getParentCtrl(r)
function o(e){e=e||r
if(a(e))return e.getAttribute("role")
return null}function i(e){var t,n=e||r
while(n=n.parentNode)if(t=o(n))return t}function u(e){var t=r
if(a(t))return t.getAttribute("aria-"+e)}function s(e){var t=e.tagName.toUpperCase()
return"INPUT"===t||"TEXTAREA"===t||"SELECT"===t}function l(e){if(s(e)&&!e.hidden)return true
if(Kt(e))return true
if(/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell|slider)$/.test(o(e)))return true
return false}function c(e){var r=[]
function n(e){if(1!==e.nodeType||"none"===e.style.display||e.disabled)return
l(e)&&r.push(e)
for(var t=0;t<e.childNodes.length;t++)n(e.childNodes[t])}n(e||t.getEl())
return r}function f(e){var t,r
e=e||n
r=e.parents().toArray()
r.unshift(e)
for(var a=0;a<r.length;a++){t=r[a]
if(t.settings.ariaRoot)break}return t}function d(e){var t=f(e)
var r=c(t.getEl())
t.settings.ariaRemember&&"lastAriaIndex"in t?v(t.lastAriaIndex,r):v(0,r)}function v(e,t){e<0?e=t.length-1:e>=t.length&&(e=0)
t[e]&&t[e].focus()
return e}function m(e,t){var n=-1
var a=f()
t=t||c(a.getEl())
for(var o=0;o<t.length;o++)t[o]===r&&(n=o)
n+=e
a.lastAriaIndex=v(n,t)}function g(){var e=i()
"tablist"===e?m(-1,c(r.parentNode)):n.parent().submenu?y():m(-1)}function p(){var e=o(),t=i()
"tablist"===t?m(1,c(r.parentNode)):"menuitem"===e&&"menu"===t&&u("haspopup")?w():m(1)}function A(){m(-1)}function h(){var e=o(),t=i()
"menuitem"===e&&"menubar"===t?w():"button"===e&&u("haspopup")?w({key:"down"}):m(1)}function b(e){var t=i()
if("tablist"===t){var r=c(n.getEl("body"))[0]
r&&r.focus()}else m(e.shiftKey?-1:1)}function y(){n.fire("cancel")}function w(e){e=e||{}
n.fire("click",{target:r,aria:e})}t.on("keydown",function(e){function t(e,t){if(s(r)||Kt(r))return
if("slider"===o(r))return
false!==t(e)&&e.preventDefault()}if(e.isDefaultPrevented())return
switch(e.keyCode){case 37:t(e,g)
break
case 39:t(e,p)
break
case 38:t(e,A)
break
case 40:t(e,h)
break
case 27:y()
break
case 14:case 13:case 32:t(e,w)
break
case 9:b(e)
e.preventDefault()}})
t.on("focusin",function(e){r=e.target
n=e.control})
return{focusFirst:d}}var Zt={}
var $t=qt.extend({init:function(e){var t=this
t._super(e)
e=t.settings
e.fixed&&t.state.set("fixed",true)
t._items=new Nt
t.isRtl()&&t.classes.add("rtl")
t.bodyClasses=new wt(function(){t.state.get("rendered")&&(t.getEl("body").className=this.toString())})
t.bodyClasses.prefix=t.classPrefix
t.classes.add("container")
t.bodyClasses.add("container-body")
e.containerCls&&t.classes.add(e.containerCls)
t._layout=C.create((e.layout||"")+"layout")
t.settings.items?t.add(t.settings.items):t.add(t.render())
t._hasBody=true},items:function(){return this._items},find:function(e){e=Zt[e]=Zt[e]||new Tt(e)
return e.find(this)},add:function(e){var t=this
t.items().add(t.create(e)).parent(t)
return t},focus:function(e){var t=this
var r,n,a
if(e){n=t.keyboardNav||t.parents().eq(-1)[0].keyboardNav
if(n){n.focusFirst(t)
return}}a=t.find("*")
t.statusbar&&a.add(t.statusbar.items())
a.each(function(e){if(e.settings.autofocus){r=null
return false}e.canFocus&&(r=r||e)})
r&&r.focus()
return t},replace:function(e,t){var r
var n=this.items()
var a=n.length
while(a--)if(n[a]===e){n[a]=t
break}if(a>=0){r=t.getEl()
r&&r.parentNode.removeChild(r)
r=e.getEl()
r&&r.parentNode.removeChild(r)}t.parent(this)},create:function(e){var t=this
var n
var a=[]
r.isArray(e)||(e=[e])
r.each(e,function(e){if(e){if(!(e instanceof qt)){"string"===typeof e&&(e={type:e})
n=r.extend({},t.settings.defaults,e)
e.type=n.type=n.type||e.type||t.settings.defaultType||(n.defaults?n.defaults.type:null)
e=C.create(n)}a.push(e)}})
return a},renderNew:function(){var e=this
e.items().each(function(t,r){var n
t.parent(e)
if(!t.state.get("rendered")){n=e.getEl("body")
n.hasChildNodes()&&r<=n.childNodes.length-1?ut(n.childNodes[r]).before(t.renderHtml()):ut(n).append(t.renderHtml())
t.postRender()
Qt.add(t)}})
e._layout.applyClasses(e.items().filter(":visible"))
e._lastRect=null
return e},append:function(e){return this.add(e).renderNew()},prepend:function(e){var t=this
t.items().set(t.create(e).concat(t.items().toArray()))
return t.renderNew()},insert:function(e,t,r){var n=this
var a,o,i
e=n.create(e)
a=n.items()
!r&&t<a.length-1&&(t+=1)
if(t>=0&&t<a.length){o=a.slice(0,t).toArray()
i=a.slice(t).toArray()
a.set(o.concat(e,i))}return n.renderNew()},fromJSON:function(e){var t=this
for(var r in e)t.find("#"+r).value(e[r])
return t},toJSON:function(){var e=this,t={}
e.find("*").each(function(e){var r=e.name(),n=e.value()
r&&"undefined"!==typeof n&&(t[r]=n)})
return t},renderHtml:function(){var e=this,t=e._layout,r=this.settings.role
e.preRender()
t.preRender(e)
return'<div id="'+e._id+'" class="'+e.classes+'"'+(r?' role="'+this.settings.role+'"':"")+'><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this
var t
e.items().exec("postRender")
e._super()
e._layout.postRender(e)
e.state.set("rendered",true)
e.settings.style&&e.$el.css(e.settings.style)
if(e.settings.border){t=e.borderBox
e.$el.css({"border-top-width":t.top,"border-right-width":t.right,"border-bottom-width":t.bottom,"border-left-width":t.left})}e.parent()||(e.keyboardNav=Xt({root:e}))
return e},initLayoutRect:function(){var e=this,t=e._super()
e._layout.recalc(e)
return t},recalc:function(){var e=this
var t=e._layoutRect
var r=e._lastRect
if(!r||r.w!==t.w||r.h!==t.h){e._layout.recalc(e)
t=e.layoutRect()
e._lastRect={x:t.x,y:t.y,w:t.w,h:t.h}
return true}},reflow:function(){var e
Qt.remove(this)
if(this.visible()){qt.repaintControls=[]
qt.repaintControls.map={}
this.recalc()
e=qt.repaintControls.length
while(e--)qt.repaintControls[e].repaint()
"flow"!==this.settings.layout&&"stack"!==this.settings.layout&&this.repaint()
qt.repaintControls=[]}return this}})
function er(e){var t,r,n,a
var o,i,u,s
var l=Math.max
t=e.documentElement
r=e.body
n=l(t.scrollWidth,r.scrollWidth)
a=l(t.clientWidth,r.clientWidth)
o=l(t.offsetWidth,r.offsetWidth)
i=l(t.scrollHeight,r.scrollHeight)
u=l(t.clientHeight,r.clientHeight)
s=l(t.offsetHeight,r.offsetHeight)
return{width:n<o?a:n,height:i<s?u:i}}function tr(e){var t,r
if(e.changedTouches){t="screenX screenY pageX pageY clientX clientY".split(" ")
for(r=0;r<t.length;r++)e[t[r]]=e.changedTouches[0][t[r]]}}function rr(e,t){var r
var n=t.document||document
var a
var o,i,u,s,l
t=t||{}
var c=n.getElementById(t.handle||e)
o=function(e){var o=er(n)
var f,d
tr(e)
e.preventDefault()
a=e.button
f=c
s=e.screenX
l=e.screenY
d=window.getComputedStyle?window.getComputedStyle(f,null).getPropertyValue("cursor"):f.runtimeStyle.cursor
r=ut("<div></div>").css({position:"absolute",top:0,left:0,width:o.width,height:o.height,zIndex:2147483647,opacity:1e-4,cursor:d}).appendTo(n.body)
ut(n).on("mousemove touchmove",u).on("mouseup touchend",i)
t.start(e)}
u=function(e){tr(e)
if(e.button!==a)return i(e)
e.deltaX=e.screenX-s
e.deltaY=e.screenY-l
e.preventDefault()
t.drag(e)}
i=function(e){tr(e)
ut(n).off("mousemove touchmove",u).off("mouseup touchend",i)
r.remove()
t.stop&&t.stop(e)}
this.destroy=function(){ut(c).off()}
ut(c).on("mousedown touchstart",o)}var nr={init:function(){var e=this
e.on("repaint",e.renderScroll)},renderScroll:function(){var e=this,t=2
function r(){var r,n,a
function o(a,o,i,u,s,l){var c,f,d
var v,m,g,p
var A,h
f=e.getEl("scroll"+a)
if(f){A=o.toLowerCase()
h=i.toLowerCase()
ut(e.getEl("absend")).css(A,e.layoutRect()[u]-1)
if(!s){ut(f).css("display","none")
return}ut(f).css("display","block")
c=e.getEl("body")
d=e.getEl("scroll"+a+"t")
v=c["client"+i]-2*t
v-=r&&n?f["client"+l]:0
m=c["scroll"+i]
g=v/m
p={}
p[A]=c["offset"+o]+t
p[h]=v
ut(f).css(p)
p={}
p[A]=c["scroll"+o]*g
p[h]=v*g
ut(d).css(p)}}a=e.getEl("body")
r=a.scrollWidth>a.clientWidth
n=a.scrollHeight>a.clientHeight
o("h","Left","Width","contentW",r,"Height")
o("v","Top","Height","contentH",n,"Width")}function n(){function r(r,n,a,o,i){var u
var s=e._id+"-scroll"+r,l=e.classPrefix
ut(e.getEl()).append('<div id="'+s+'" class="'+l+"scrollbar "+l+"scrollbar-"+r+'"><div id="'+s+'t" class="'+l+'scrollbar-thumb"></div></div>')
e.draghelper=new rr(s+"t",{start:function(){u=e.getEl("body")["scroll"+n]
ut("#"+s).addClass(l+"active")},drag:function(s){var l,c,f,d
var v=e.layoutRect()
c=v.contentW>v.innerW
f=v.contentH>v.innerH
d=e.getEl("body")["client"+a]-2*t
d-=c&&f?e.getEl("scroll"+r)["client"+i]:0
l=d/e.getEl("body")["scroll"+a]
e.getEl("body")["scroll"+n]=u+s["delta"+o]/l},stop:function(){ut("#"+s).removeClass(l+"active")}})}e.classes.add("scroll")
r("v","Top","Height","Y","Width")
r("h","Left","Width","X","Height")}if(e.settings.autoScroll){if(!e._hasScroll){e._hasScroll=true
n()
e.on("wheel",function(t){var n=e.getEl("body")
n.scrollLeft+=10*(t.deltaX||0)
n.scrollTop+=10*t.deltaY
r()})
ut(e.getEl("body")).on("scroll",r)}r()}}}
var ar=$t.extend({Defaults:{layout:"fit",containerCls:"panel"},Mixins:[nr],renderHtml:function(){var e=this
var t=e._layout
var r=e.settings.html
e.preRender()
t.preRender(e)
if("undefined"===typeof r)r='<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div>"
else{"function"===typeof r&&(r=r.call(e))
e._hasBody=false}return'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1" role="group">'+(e._preBodyHtml||"")+r+"</div>"}})
var or={resizeToContent:function(){this._layoutRect.autoResize=true
this._lastRect=null
this.reflow()},resizeTo:function(e,t){if(e<=1||t<=1){var r=lt.getWindowSize()
e=e<=1?e*r.w:e
t=t<=1?t*r.h:t}this._layoutRect.autoResize=false
return this.layoutRect({minW:e,minH:t,w:e,h:t}).reflow()},resizeBy:function(e,t){var r=this,n=r.layoutRect()
return r.resizeTo(n.w+e,n.h+t)}}
var ir,ur,sr
var lr=[]
var cr=[]
var fr
function dr(e,t){while(e){if(e===t)return true
e=e.parent()}}function vr(e){var t=lr.length
while(t--){var r=lr[t],n=r.getParentCtrl(e.target)
if(r.settings.autohide){if(n&&(dr(n,r)||r.parent()===n))continue
e=r.fire("autohide",{target:e.target})
e.isDefaultPrevented()||r.hide()}}}function mr(){if(!ir){ir=function(e){if(2===e.button)return
vr(e)}
ut(document).on("click touchstart",ir)}}function gr(){if(!ur){ur=function(){var e
e=lr.length
while(e--)Ar(lr[e])}
ut(window).on("scroll",ur)}}function pr(){if(!sr){var e=document.documentElement
var t=e.clientWidth,r=e.clientHeight
sr=function(){if(!document.all||t!==e.clientWidth||r!==e.clientHeight){t=e.clientWidth
r=e.clientHeight
br.hideAll()}}
ut(window).on("resize",sr)}}function Ar(e){var t=lt.getViewPort().y
function r(t,r){var n
for(var a=0;a<lr.length;a++)if(lr[a]!==e){n=lr[a].parent()
while(n&&(n=n.parent()))n===e&&lr[a].fixed(t).moveBy(0,r).repaint()}}if(e.settings.autofix)if(e.state.get("fixed")){if(e._autoFixY>t){e.fixed(false).layoutRect({y:e._autoFixY}).repaint()
r(false,e._autoFixY-t)}}else{e._autoFixY=e.layoutRect().y
if(e._autoFixY<t){e.fixed(true).layoutRect({y:0}).repaint()
r(true,t-e._autoFixY)}}}function hr(e,t){var r,n,a=br.zIndex||65535
if(e)cr.push(t)
else{r=cr.length
while(r--)cr[r]===t&&cr.splice(r,1)}if(cr.length)for(r=0;r<cr.length;r++){if(cr[r].modal){a++
n=cr[r]}cr[r].getEl().style.zIndex=a
cr[r].zIndex=a
a++}var o=ut("#"+t.classPrefix+"modal-block",t.getContainerElm())[0]
if(n)ut(o).css("z-index",n.zIndex-1)
else if(o){o.parentNode.removeChild(o)
fr=false}br.currentZIndex=a}var br=ar.extend({Mixins:[pt,or],init:function(e){var t=this
t._super(e)
t._eventsRoot=t
t.classes.add("floatpanel")
if(e.autohide){mr()
pr()
lr.push(t)}if(e.autofix){gr()
t.on("move",function(){Ar(this)})}t.on("postrender show",function(e){if(e.control===t){var r
var n=t.classPrefix
if(t.modal&&!fr){r=ut("#"+n+"modal-block",t.getContainerElm())
r[0]||(r=ut('<div id="'+n+'modal-block" class="'+n+"reset "+n+'fade"></div>').appendTo(t.getContainerElm()))
P.setTimeout(function(){r.addClass(n+"in")
ut(t.getEl()).addClass(n+"in")})
fr=true}hr(true,t)}})
t.on("show",function(){t.parents().each(function(e){if(e.state.get("fixed")){t.fixed(true)
return false}})})
if(e.popover){t._preBodyHtml='<div class="'+t.classPrefix+'arrow"></div>'
t.classes.add("popover").add("bottom").add(t.isRtl()?"end":"start")}t.aria("label",e.ariaLabel)
t.aria("labelledby",t._id)
t.aria("describedby",t.describedBy||t._id+"-none")},fixed:function(e){var t=this
if(t.state.get("fixed")!==e){if(t.state.get("rendered")){var r=lt.getViewPort()
e?t.layoutRect().y-=r.y:t.layoutRect().y+=r.y}t.classes.toggle("fixed",e)
t.state.set("fixed",e)}return t},show:function(){var e=this
var t
var r=e._super()
t=lr.length
while(t--)if(lr[t]===e)break;-1===t&&lr.push(e)
return r},hide:function(){yr(this)
hr(false,this)
return this._super()},hideAll:function(){br.hideAll()},close:function(){var e=this
if(!e.fire("close").isDefaultPrevented()){e.remove()
hr(false,e)}return e},remove:function(){yr(this)
this._super()},postRender:function(){var e=this
e.settings.bodyRole&&this.getEl("body").setAttribute("role",e.settings.bodyRole)
return e._super()}})
br.hideAll=function(){var e=lr.length
while(e--){var t=lr[e]
if(t&&t.settings.autohide){t.hide()
lr.splice(e,1)}}}
function yr(e){var t
t=lr.length
while(t--)lr[t]===e&&lr.splice(t,1)
t=cr.length
while(t--)cr[t]===e&&cr.splice(t,1)}var wr=function(e,t){return!!(e&&!t.settings.ui_container)}
var Er=function(e,t,r){var n,o
var i=x.DOM
var s=l(e)
s&&(o=i.select(s)[0])
var c=function(){if(n&&n.moveRel&&n.visible()&&!n._fixed){var t=e.selection.getScrollContainer(),r=e.getBody()
var a=0,o=0
if(t){var u=i.getPos(r),s=i.getPos(t)
a=Math.max(0,s.x-u.x)
o=Math.max(0,s.y-u.y)}n.fixed(false).moveRel(r,e.rtl?["tr-br","br-tr"]:["tl-bl","bl-tl","tr-br"]).moveBy(a,o)}}
var f=function(){if(n){n.show()
c()
i.addClass(e.getBody(),"mce-edit-focus")}}
var d=function(){if(n){n.hide()
br.hideAll()
i.removeClass(e.getBody(),"mce-edit-focus")}}
var v=function(){if(n){n.visible()||f()
return}n=t.panel=C.create({type:o?"panel":"floatpanel",role:"application",classes:"tinymce tinymce-inline",layout:"flex",direction:"column",align:"stretch",autohide:false,autofix:true,fixed:wr(o,e),border:1,items:[false===a(e)?null:{type:"menubar",border:"0 0 1 0",items:Oe.createMenuButtons(e)},$.createToolbars(e,u(e))]})
K.setUiContainer(e,n)
I.fireBeforeRenderUI(e)
o?n.renderTo(o).reflow():n.renderTo().reflow()
N.addKeys(e,n)
f()
ue.addContextualToolbars(e)
e.on("nodeChange",c)
e.on("ResizeWindow",c)
e.on("activate",f)
e.on("deactivate",d)
e.nodeChanged()}
e.settings.content_editable=true
e.on("focus",function(){false===A(e)&&r.skinUiCss?i.styleSheetLoader.load(r.skinUiCss,v,v):v()})
e.on("blur hide",d)
e.on("remove",function(){if(n){n.remove()
n=null}})
false===A(e)&&r.skinUiCss?i.styleSheetLoader.load(r.skinUiCss,et.fireSkinLoaded(e)):et.fireSkinLoaded(e)()
return{}}
var xr={render:Er}
function Cr(e,t){var r=this
var n
var a=qt.classPrefix
var o
r.show=function(i,u){function s(){if(n){ut(e).append('<div class="'+a+"throbber"+(t?" "+a+"throbber-inline":"")+'"></div>')
u&&u()}}r.hide()
n=true
i?o=P.setTimeout(s,i):s()
return r}
r.hide=function(){var t=e.lastChild
P.clearTimeout(o)
t&&-1!==t.className.indexOf("throbber")&&t.parentNode.removeChild(t)
n=false
return r}}var kr=function(e,t){var r
e.on("ProgressState",function(e){r=r||new Cr(t.panel.getEl("body"))
e.state?r.show(e.time):r.hide()})}
var Br={setup:kr}
var Tr=function(e,t,r){var n=y(e)
if(n){r.skinUiCss=n+"/skin.min.css"
e.contentCSS.push(n+"/content"+(e.inline?".inline":"")+".min.css")}Br.setup(e,t)
return h(e)?xr.render(e,t,r):it.render(e,t,r)}
var Rr={renderUI:Tr}
var Ir=qt.extend({Mixins:[pt],Defaults:{classes:"widget tooltip tooltip-n"},renderHtml:function(){var e=this,t=e.classPrefix
return'<div id="'+e._id+'" class="'+e.classes+'" role="presentation"><div class="'+t+'tooltip-arrow"></div><div class="'+t+'tooltip-inner">'+e.encode(e.state.get("text"))+"</div></div>"},bindStates:function(){var e=this
e.state.on("change:text",function(t){e.getEl().lastChild.innerHTML=e.encode(t.value)})
return e._super()},repaint:function(){var e=this
var t,r
t=e.getEl().style
r=e._layoutRect
t.left=r.x+"px"
t.top=r.y+"px"
t.zIndex=131070}})
var Sr=qt.extend({init:function(e){var t=this
t._super(e)
e=t.settings
t.canFocus=true
if(e.tooltip&&false!==Sr.tooltips){t.on("mouseenter",function(r){var n=t.tooltip().moveTo(-65535)
if(r.control===t){var a=n.text(e.tooltip).show().testMoveRel(t.getEl(),["bc-tc","bc-tl","bc-tr"])
n.classes.toggle("tooltip-n","bc-tc"===a)
n.classes.toggle("tooltip-nw","bc-tl"===a)
n.classes.toggle("tooltip-ne","bc-tr"===a)
n.moveRel(t.getEl(),a)}else n.hide()})
t.on("mouseleave mousedown click",function(){t.tooltip().remove()
t._tooltip=null})}t.aria("label",e.ariaLabel||e.tooltip)},tooltip:function(){if(!this._tooltip){this._tooltip=new Ir({type:"tooltip"})
K.inheritUiContainer(this,this._tooltip)
this._tooltip.renderTo()}return this._tooltip},postRender:function(){var e=this,t=e.settings
e._super()
if(!e.parent()&&(t.width||t.height)){e.initLayoutRect()
e.repaint()}t.autofocus&&e.focus()},bindStates:function(){var e=this
function t(t){e.aria("disabled",t)
e.classes.toggle("disabled",t)}function r(t){e.aria("pressed",t)
e.classes.toggle("active",t)}e.state.on("change:disabled",function(e){t(e.value)})
e.state.on("change:active",function(e){r(e.value)})
e.state.get("disabled")&&t(true)
e.state.get("active")&&r(true)
return e._super()},remove:function(){this._super()
if(this._tooltip){this._tooltip.remove()
this._tooltip=null}}})
var Dr=Sr.extend({Defaults:{value:0},init:function(e){var t=this
t._super(e)
t.classes.add("progress")
t.settings.filter||(t.settings.filter=function(e){return Math.round(e)})},renderHtml:function(){var e=this,t=e._id,r=this.classPrefix
return'<div id="'+t+'" class="'+e.classes+'"><div class="'+r+'bar-container"><div class="'+r+'bar"></div></div><div class="'+r+'text">0%</div></div>'},postRender:function(){var e=this
e._super()
e.value(e.settings.value)
return e},bindStates:function(){var e=this
function t(t){t=e.settings.filter(t)
e.getEl().lastChild.innerHTML=t+"%"
e.getEl().firstChild.firstChild.style.width=t+"%"}e.state.on("change:value",function(e){t(e.value)})
t(e.state.get("value"))
return e._super()}})
var Nr=function(e,t){e.getEl().lastChild.textContent=t+(e.progressBar?" "+e.progressBar.value()+"%":"")}
var Mr=qt.extend({Mixins:[pt],Defaults:{classes:"widget notification"},init:function(e){var t=this
t._super(e)
t.maxWidth=e.maxWidth
e.text&&t.text(e.text)
e.icon&&(t.icon=e.icon)
e.color&&(t.color=e.color)
e.type&&t.classes.add("notification-"+e.type)
if(e.timeout&&(e.timeout<0||e.timeout>0)&&!e.closeButton)t.closeButton=false
else{t.classes.add("has-close")
t.closeButton=true}e.progressBar&&(t.progressBar=new Dr)
t.on("click",function(e){-1!==e.target.className.indexOf(t.classPrefix+"close")&&t.close()})},renderHtml:function(){var e=this
var t=e.classPrefix
var r="",n="",a="",o=""
e.icon&&(r='<i class="'+t+"ico "+t+"i-"+e.icon+'"></i>')
o=' style="max-width: '+e.maxWidth+"px;"+(e.color?"background-color: "+e.color+';"':'"')
e.closeButton&&(n='<button type="button" class="'+t+'close" aria-hidden="true">×</button>')
e.progressBar&&(a=e.progressBar.renderHtml())
return'<div id="'+e._id+'" class="'+e.classes+'"'+o+' role="presentation">'+r+'<div class="'+t+'notification-inner">'+e.state.get("text")+"</div>"+a+n+'<div style="clip: rect(1px, 1px, 1px, 1px);height: 1px;overflow: hidden;position: absolute;width: 1px;" aria-live="assertive" aria-relevant="additions" aria-atomic="true"></div></div>'},postRender:function(){var e=this
P.setTimeout(function(){e.$el.addClass(e.classPrefix+"in")
Nr(e,e.state.get("text"))},100)
return e._super()},bindStates:function(){var e=this
e.state.on("change:text",function(t){e.getEl().firstChild.innerHTML=t.value
Nr(e,t.value)})
if(e.progressBar){e.progressBar.bindStates()
e.progressBar.state.on("change:value",function(t){Nr(e,e.state.get("text"))})}return e._super()},close:function(){var e=this
e.fire("close").isDefaultPrevented()||e.remove()
return e},repaint:function(){var e=this
var t,r
t=e.getEl().style
r=e._layoutRect
t.left=r.x+"px"
t.top=r.y+"px"
t.zIndex=65534}})
function Pr(e){var t=function(e){return e.inline?e.getElement():e.getContentAreaContainer()}
var n=function(){var r=t(e)
return lt.getSize(r).width}
var a=function(e){be(e,function(e){e.moveTo(0,0)})}
var o=function(r){if(r.length>0){var n=r.slice(0,1)[0]
var a=t(e)
n.moveRel(a,"tc-tc")
be(r,function(e,t){t>0&&e.moveRel(r[t-1].getEl(),"bc-tc")})}}
var i=function(e){a(e)
o(e)}
var u=function(e,t){var a=r.extend(e,{maxWidth:n()})
var o=new Mr(a)
o.args=a
a.timeout>0&&(o.timer=setTimeout(function(){o.close()
t()},a.timeout))
o.on("close",function(){t()})
o.renderTo()
return o}
var s=function(e){e.close()}
var l=function(e){return e.args}
return{open:u,close:s,reposition:i,getArgs:l}}var _r=[]
var Or=""
function Fr(e){var t="width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0"
var r,n=ut("meta[name=viewport]")[0]
if(false===je.overrideViewPort)return
if(!n){n=document.createElement("meta")
n.setAttribute("name","viewport")
document.getElementsByTagName("head")[0].appendChild(n)}r=n.getAttribute("content")
r&&"undefined"!==typeof Or&&(Or=r)
n.setAttribute("content",e?t:Or)}function Lr(e,t){Ur()&&false===t&&ut([document.documentElement,document.body]).removeClass(e+"fullscreen")}function Ur(){for(var e=0;e<_r.length;e++)if(_r[e]._fullscreen)return true
return false}function Qr(){if(!je.desktop){var e={w:window.innerWidth,h:window.innerHeight}
P.setInterval(function(){var t=window.innerWidth,r=window.innerHeight
if(e.w!==t||e.h!==r){e={w:t,h:r}
ut(window).trigger("resize")}},100)}function t(){var e
var t=lt.getWindowSize()
var r
for(e=0;e<_r.length;e++){r=_r[e].layoutRect()
_r[e].moveTo(_r[e].settings.x||Math.max(0,t.w/2-r.w/2),_r[e].settings.y||Math.max(0,t.h/2-r.h/2))}}ut(window).on("resize",t)}var zr=br.extend({modal:true,Defaults:{border:1,layout:"flex",containerCls:"panel",role:"dialog",callbacks:{submit:function(){this.fire("submit",{data:this.toJSON()})},close:function(){this.close()}}},init:function(e){var t=this
t._super(e)
t.isRtl()&&t.classes.add("rtl")
t.classes.add("window")
t.bodyClasses.add("window-body")
t.state.set("fixed",true)
if(e.buttons){t.statusbar=new ar({layout:"flex",border:"1 0 0 0",spacing:3,padding:10,align:"center",pack:t.isRtl()?"start":"end",defaults:{type:"button"},items:e.buttons})
t.statusbar.classes.add("foot")
t.statusbar.parent(t)}t.on("click",function(e){var r=t.classPrefix+"close";(lt.hasClass(e.target,r)||lt.hasClass(e.target.parentNode,r))&&t.close()})
t.on("cancel",function(){t.close()})
t.on("move",function(e){e.control===t&&br.hideAll()})
t.aria("describedby",t.describedBy||t._id+"-none")
t.aria("label",e.title)
t._fullscreen=false},recalc:function(){var e=this
var t=e.statusbar
var r,n,a,o
if(e._fullscreen){e.layoutRect(lt.getWindowSize())
e.layoutRect().contentH=e.layoutRect().innerH}e._super()
r=e.layoutRect()
if(e.settings.title&&!e._fullscreen){n=r.headerW
if(n>r.w){a=r.x-Math.max(0,n/2)
e.layoutRect({w:n,x:a})
o=true}}if(t){t.layoutRect({w:e.layoutRect().innerW}).recalc()
n=t.layoutRect().minW+r.deltaW
if(n>r.w){a=r.x-Math.max(0,n-r.w)
e.layoutRect({w:n,x:a})
o=true}}o&&e.recalc()},initLayoutRect:function(){var e=this
var t=e._super()
var r,n=0
if(e.settings.title&&!e._fullscreen){r=e.getEl("head")
var a=lt.getSize(r)
t.headerW=a.width
t.headerH=a.height
n+=t.headerH}e.statusbar&&(n+=e.statusbar.layoutRect().h)
t.deltaH+=n
t.minH+=n
t.h+=n
var o=lt.getWindowSize()
t.x=e.settings.x||Math.max(0,o.w/2-t.w/2)
t.y=e.settings.y||Math.max(0,o.h/2-t.h/2)
return t},renderHtml:function(){var e=this,t=e._layout,r=e._id,n=e.classPrefix
var a=e.settings
var o="",i="",u=a.html
e.preRender()
t.preRender(e)
a.title&&(o='<div id="'+r+'-head" class="'+n+'window-head"><div id="'+r+'-title" class="'+n+'title">'+e.encode(a.title)+'</div><div id="'+r+'-dragh" class="'+n+'dragh"></div><button type="button" class="'+n+'close" aria-hidden="true"><i class="mce-ico mce-i-remove"></i></button></div>')
a.url&&(u='<iframe src="'+a.url+'" tabindex="-1"></iframe>')
"undefined"===typeof u&&(u=t.renderHtml(e))
e.statusbar&&(i=e.statusbar.renderHtml())
return'<div id="'+r+'" class="'+e.classes+'" hidefocus="1"><div class="'+e.classPrefix+'reset" role="application">'+o+'<div id="'+r+'-body" class="'+e.bodyClasses+'">'+u+"</div>"+i+"</div></div>"},fullscreen:function(e){var t=this
var r=document.documentElement
var n
var a=t.classPrefix
var o
if(e!==t._fullscreen){ut(window).on("resize",function(){var e
if(t._fullscreen)if(n)t._timer||(t._timer=P.setTimeout(function(){var e=lt.getWindowSize()
t.moveTo(0,0).resizeTo(e.w,e.h)
t._timer=0},50))
else{e=(new Date).getTime()
var r=lt.getWindowSize()
t.moveTo(0,0).resizeTo(r.w,r.h);(new Date).getTime()-e>50&&(n=true)}})
o=t.layoutRect()
t._fullscreen=e
if(e){t._initial={x:o.x,y:o.y,w:o.w,h:o.h}
t.borderBox=bt.parseBox("0")
t.getEl("head").style.display="none"
o.deltaH-=o.headerH+2
ut([r,document.body]).addClass(a+"fullscreen")
t.classes.add("fullscreen")
var i=lt.getWindowSize()
t.moveTo(0,0).resizeTo(i.w,i.h)}else{t.borderBox=bt.parseBox(t.settings.border)
t.getEl("head").style.display=""
o.deltaH+=o.headerH
ut([r,document.body]).removeClass(a+"fullscreen")
t.classes.remove("fullscreen")
t.moveTo(t._initial.x,t._initial.y).resizeTo(t._initial.w,t._initial.h)}}return t.reflow()},postRender:function(){var e=this
var t
setTimeout(function(){e.classes.add("in")
e.fire("open")},0)
e._super()
e.statusbar&&e.statusbar.postRender()
e.focus()
this.dragHelper=new rr(e._id+"-dragh",{start:function(){t={x:e.layoutRect().x,y:e.layoutRect().y}},drag:function(r){e.moveTo(t.x+r.deltaX,t.y+r.deltaY)}})
e.on("submit",function(t){t.isDefaultPrevented()||e.close()})
_r.push(e)
Fr(true)},submit:function(){return this.fire("submit",{data:this.toJSON()})},remove:function(){var e=this
var t
e.dragHelper.destroy()
e._super()
e.statusbar&&this.statusbar.remove()
Lr(e.classPrefix,false)
t=_r.length
while(t--)_r[t]===e&&_r.splice(t,1)
Fr(_r.length>0)},getContentWindow:function(){var e=this.getEl().getElementsByTagName("iframe")[0]
return e?e.contentWindow:null}})
Qr()
var jr=zr.extend({init:function(e){e={border:1,padding:20,layout:"flex",pack:"center",align:"center",containerCls:"panel",autoScroll:true,buttons:{type:"button",text:"Ok",action:"ok"},items:{type:"label",multiline:true,maxWidth:500,maxHeight:200}}
this._super(e)},Statics:{OK:1,OK_CANCEL:2,YES_NO:3,YES_NO_CANCEL:4,msgBox:function(e){var t
var r=e.callback||function(){}
function n(e,t,n){return{type:"button",text:e,subtype:n?"primary":"",onClick:function(e){e.control.parents()[1].close()
r(t)}}}switch(e.buttons){case jr.OK_CANCEL:t=[n("Ok",true,true),n("Cancel",false)]
break
case jr.YES_NO:case jr.YES_NO_CANCEL:t=[n("Yes",1,true),n("No",0)]
e.buttons===jr.YES_NO_CANCEL&&t.push(n("Cancel",-1))
break
default:t=[n("Ok",true,true)]}return new zr({padding:20,x:e.x,y:e.y,minWidth:300,minHeight:100,layout:"flex",pack:"center",align:"center",buttons:t,title:e.title,role:"alertdialog",items:{type:"label",multiline:true,maxWidth:500,maxHeight:200,text:e.text},onPostRender:function(){this.aria("describedby",this.items()[0]._id)},onClose:e.onClose,onCancel:function(){r(false)}}).renderTo(document.body).reflow()},alert:function(e,t){"string"===typeof e&&(e={text:e})
e.callback=t
return jr.msgBox(e)},confirm:function(e,t){"string"===typeof e&&(e={text:e})
e.callback=t
e.buttons=jr.OK_CANCEL
return jr.msgBox(e)}}})
function Hr(e){var t=function(e,t,r){var n
e.title=e.title||" "
e.url=e.url||e.file
if(e.url){e.width=parseInt(e.width||320,10)
e.height=parseInt(e.height||240,10)}e.body&&(e.items={defaults:e.defaults,type:e.bodyType||"form",items:e.body,data:e.data,callbacks:e.commands})
e.url||e.buttons||(e.buttons=[{text:"Ok",subtype:"primary",onclick:function(){n.find("form")[0].submit()}},{text:"Cancel",onclick:function(){n.close()}}])
n=new zr(e)
n.on("close",function(){r(n)})
e.data&&n.on("postRender",function(){this.find("*").each(function(t){var r=t.name()
r in e.data&&t.value(e.data[r])})})
n.features=e||{}
n.params=t||{}
n=n.renderTo(document.body).reflow()
return n}
var r=function(e,t,r){var n
n=jr.alert(e,function(){t()})
n.on("close",function(){r(n)})
return n}
var n=function(e,t,r){var n
n=jr.confirm(e,function(e){t(e)})
n.on("close",function(){r(n)})
return n}
var a=function(e){e.close()}
var o=function(e){return e.params}
var i=function(e,t){e.params=t}
return{open:t,alert:r,confirm:n,close:a,getParams:o,setParams:i}}var Wr=function(e){var t=function(t){return Rr.renderUI(e,this,t)}
var r=function(t,r){return ze.resizeTo(e,t,r)}
var n=function(t,r){return ze.resizeBy(e,t,r)}
var a=function(){return Pr(e)}
var o=function(){return Hr(e)}
return{renderUI:t,resizeTo:r,resizeBy:n,getNotificationManagerImpl:a,getWindowManagerImpl:o}}
var Vr={get:Wr}
var Gr=At.extend({Defaults:{firstControlClass:"first",lastControlClass:"last"},init:function(e){this.settings=r.extend({},this.Defaults,e)},preRender:function(e){e.bodyClasses.add(this.settings.containerClass)},applyClasses:function(e){var t=this
var r=t.settings
var n,a,o,i
n=r.firstControlClass
a=r.lastControlClass
e.each(function(e){e.classes.remove(n).remove(a).add(r.controlClass)
if(e.visible()){o||(o=e)
i=e}})
o&&o.classes.add(n)
i&&i.classes.add(a)},renderHtml:function(e){var t=this
var r=""
t.applyClasses(e.items())
e.items().each(function(e){r+=e.renderHtml()})
return r},recalc:function(){},postRender:function(){},isNative:function(){return false}})
var Yr=Gr.extend({Defaults:{containerClass:"abs-layout",controlClass:"abs-layout-item"},recalc:function(e){e.items().filter(":visible").each(function(e){var t=e.settings
e.layoutRect({x:t.x,y:t.y,w:t.w,h:t.h})
e.recalc&&e.recalc()})},renderHtml:function(e){return'<div id="'+e._id+'-absend" class="'+e.classPrefix+'abs-end"></div>'+this._super(e)}})
var Jr=Sr.extend({Defaults:{classes:"widget btn",role:"button"},init:function(e){var t=this
var r
t._super(e)
e=t.settings
r=t.settings.size
t.on("click mousedown",function(e){e.preventDefault()})
t.on("touchstart",function(e){t.fire("click",e)
e.preventDefault()})
e.subtype&&t.classes.add(e.subtype)
r&&t.classes.add("btn-"+r)
e.icon&&t.icon(e.icon)},icon:function(e){if(!arguments.length)return this.state.get("icon")
this.state.set("icon",e)
return this},repaint:function(){var e=this.getEl().firstChild
var t
if(e){t=e.style
t.width=t.height="100%"}this._super()},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix
var n,a=e.state.get("icon")
var o=e.state.get("text")
var i=""
var u
var s=e.settings
n=s.image
if(n){a="none"
"string"!==typeof n&&(n=window.getSelection?n[0]:n[1])
n=" style=\"background-image: url('"+n+"')\""}else n=""
if(o){e.classes.add("btn-has-text")
i='<span class="'+r+'txt">'+e.encode(o)+"</span>"}a=a?r+"ico "+r+"i-"+a:""
u="boolean"===typeof s.active?' aria-pressed="'+s.active+'"':""
return'<div id="'+t+'" class="'+e.classes+'" tabindex="-1"'+u+'><button id="'+t+'-button" role="presentation" type="button" tabindex="-1">'+(a?'<i class="'+a+'"'+n+"></i>":"")+i+"</button></div>"},bindStates:function(){var e=this,t=e.$,r=e.classPrefix+"txt"
function n(n){var a=t("span."+r,e.getEl())
if(n){if(!a[0]){t("button:first",e.getEl()).append('<span class="'+r+'"></span>')
a=t("span."+r,e.getEl())}a.html(e.encode(n))}else a.remove()
e.classes.toggle("btn-has-text",!!n)}e.state.on("change:text",function(e){n(e.value)})
e.state.on("change:icon",function(t){var r=t.value
var a=e.classPrefix
e.settings.icon=r
r=r?a+"ico "+a+"i-"+e.settings.icon:""
var o=e.getEl().firstChild
var i=o.getElementsByTagName("i")[0]
if(r){if(!i||i!==o.firstChild){i=document.createElement("i")
o.insertBefore(i,o.firstChild)}i.className=r}else i&&o.removeChild(i)
n(e.state.get("text"))})
return e._super()}})
var qr=Jr.extend({init:function(e){var t=this
e=r.extend({text:"Browse...",multiple:false,accept:null},e)
t._super(e)
t.classes.add("browsebutton")
e.multiple&&t.classes.add("multiple")},postRender:function(){var e=this
var t=lt.create("input",{type:"file",id:e._id+"-browse",accept:e.settings.accept})
e._super()
ut(t).on("change",function(t){var r=t.target.files
e.value=function(){return r.length?e.settings.multiple?r:r[0]:null}
t.preventDefault()
r.length&&e.fire("change",t)})
ut(t).on("click",function(e){e.stopPropagation()})
ut(e.getEl("button")).on("click",function(e){e.stopPropagation()
t.click()})
e.getEl().appendChild(t)},remove:function(){ut(this.getEl("button")).off()
ut(this.getEl("input")).off()
this._super()}})
var Kr=$t.extend({Defaults:{defaultType:"button",role:"group"},renderHtml:function(){var e=this,t=e._layout
e.classes.add("btn-group")
e.preRender()
t.preRender(e)
return'<div id="'+e._id+'" class="'+e.classes+'"><div id="'+e._id+'-body">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})
var Xr=Sr.extend({Defaults:{classes:"checkbox",role:"checkbox",checked:false},init:function(e){var t=this
t._super(e)
t.on("click mousedown",function(e){e.preventDefault()})
t.on("click",function(e){e.preventDefault()
t.disabled()||t.checked(!t.checked())})
t.checked(t.settings.checked)},checked:function(e){if(!arguments.length)return this.state.get("checked")
this.state.set("checked",e)
return this},value:function(e){if(!arguments.length)return this.checked()
return this.checked(e)},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix
return'<div id="'+t+'" class="'+e.classes+'" unselectable="on" aria-labelledby="'+t+'-al" tabindex="-1"><i class="'+r+"ico "+r+'i-checkbox"></i><span id="'+t+'-al" class="'+r+'label">'+e.encode(e.state.get("text"))+"</span></div>"},bindStates:function(){var e=this
function t(t){e.classes.toggle("checked",t)
e.aria("checked",t)}e.state.on("change:text",function(t){e.getEl("al").firstChild.data=e.translate(t.value)})
e.state.on("change:checked change:value",function(r){e.fire("change")
t(r.value)})
e.state.on("change:icon",function(t){var r=t.value
var n=e.classPrefix
if("undefined"===typeof r)return e.settings.icon
e.settings.icon=r
r=r?n+"ico "+n+"i-"+e.settings.icon:""
var a=e.getEl().firstChild
var o=a.getElementsByTagName("i")[0]
if(r){if(!o||o!==a.firstChild){o=document.createElement("i")
a.insertBefore(o,a.firstChild)}o.className=r}else o&&a.removeChild(o)})
e.state.get("checked")&&t(true)
return e._super()}})
var Zr=tinymce.util.Tools.resolve("tinymce.util.VK")
var $r=Sr.extend({init:function(e){var t=this
t._super(e)
e=t.settings
t.classes.add("combobox")
t.subinput=true
t.ariaTarget="inp"
e.menu=e.menu||e.values
e.menu&&(e.icon="caret")
t.on("click",function(r){var n=r.target
var a=t.getEl()
if(!ut.contains(a,n)&&n!==a)return
while(n&&n!==a){if(n.id&&-1!==n.id.indexOf("-open")){t.fire("action")
if(e.menu){t.showMenu()
r.aria&&t.menu.items()[0].focus()}}n=n.parentNode}})
t.on("keydown",function(e){var r
if(13===e.keyCode&&"INPUT"===e.target.nodeName){e.preventDefault()
t.parents().reverse().each(function(e){if(e.toJSON){r=e
return false}})
t.fire("submit",{data:r.toJSON()})}})
t.on("keyup",function(e){if("INPUT"===e.target.nodeName){var r=t.state.get("value")
var n=e.target.value
if(n!==r){t.state.set("value",n)
t.fire("autocomplete",e)}}})
t.on("mouseover",function(e){var r=t.tooltip().moveTo(-65535)
if(t.statusLevel()&&-1!==e.target.className.indexOf(t.classPrefix+"status")){var n=t.statusMessage()||"Ok"
var a=r.text(n).show().testMoveRel(e.target,["bc-tc","bc-tl","bc-tr"])
r.classes.toggle("tooltip-n","bc-tc"===a)
r.classes.toggle("tooltip-nw","bc-tl"===a)
r.classes.toggle("tooltip-ne","bc-tr"===a)
r.moveRel(e.target,a)}})},statusLevel:function(e){arguments.length>0&&this.state.set("statusLevel",e)
return this.state.get("statusLevel")},statusMessage:function(e){arguments.length>0&&this.state.set("statusMessage",e)
return this.state.get("statusMessage")},showMenu:function(){var e=this
var t=e.settings
var r
if(!e.menu){r=t.menu||[]
r.length?r={type:"menu",items:r}:r.type=r.type||"menu"
e.menu=C.create(r).parent(e).renderTo(e.getContainerElm())
e.fire("createmenu")
e.menu.reflow()
e.menu.on("cancel",function(t){t.control===e.menu&&e.focus()})
e.menu.on("show hide",function(t){t.control.items().each(function(t){t.active(t.value()===e.value())})}).fire("show")
e.menu.on("select",function(t){e.value(t.control.value())})
e.on("focusin",function(t){"INPUT"===t.target.tagName.toUpperCase()&&e.menu.hide()})
e.aria("expanded",true)}e.menu.show()
e.menu.layoutRect({w:e.layoutRect().w})
e.menu.moveRel(e.getEl(),e.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"])},focus:function(){this.getEl("inp").focus()},repaint:function(){var e=this,t=e.getEl(),r=e.getEl("open"),n=e.layoutRect()
var a,o,i=0
var u=t.firstChild
e.statusLevel()&&"none"!==e.statusLevel()&&(i=parseInt(lt.getRuntimeStyle(u,"padding-right"),10)-parseInt(lt.getRuntimeStyle(u,"padding-left"),10))
a=r?n.w-lt.getSize(r).width-10:n.w-10
var s=document
s.all&&(!s.documentMode||s.documentMode<=8)&&(o=e.layoutRect().h-2+"px")
ut(u).css({width:a-i,lineHeight:o})
e._super()
return e},postRender:function(){var e=this
ut(this.getEl("inp")).on("change",function(t){e.state.set("value",t.target.value)
e.fire("change",t)})
return e._super()},renderHtml:function(){var e=this,t=e._id,r=e.settings,n=e.classPrefix
var a=e.state.get("value")||""
var o,i,u="",s="",l=""
"spellcheck"in r&&(s+=' spellcheck="'+r.spellcheck+'"')
r.maxLength&&(s+=' maxlength="'+r.maxLength+'"')
r.size&&(s+=' size="'+r.size+'"')
r.subtype&&(s+=' type="'+r.subtype+'"')
l='<i id="'+t+'-status" class="mce-status mce-ico" style="display: none"></i>'
e.disabled()&&(s+=' disabled="disabled"')
o=r.icon
o&&"caret"!==o&&(o=n+"ico "+n+"i-"+r.icon)
i=e.state.get("text")
if(o||i){u='<div id="'+t+'-open" class="'+n+"btn "+n+'open" tabIndex="-1" role="button"><button id="'+t+'-action" type="button" hidefocus="1" tabindex="-1">'+("caret"!==o?'<i class="'+o+'"></i>':'<i class="'+n+'caret"></i>')+(i?(o?" ":"")+i:"")+"</button></div>"
e.classes.add("has-open")}return'<div id="'+t+'" class="'+e.classes+'"><input id="'+t+'-inp" class="'+n+'textbox" value="'+e.encode(a,false)+'" hidefocus="1"'+s+' placeholder="'+e.encode(r.placeholder)+'" />'+l+u+"</div>"},value:function(e){if(arguments.length){this.state.set("value",e)
return this}this.state.get("rendered")&&this.state.set("value",this.getEl("inp").value)
return this.state.get("value")},showAutoComplete:function(e,t){var n=this
if(0===e.length){n.hideMenu()
return}var a=function(e,t){return function(){n.fire("selectitem",{title:t,value:e})}}
n.menu?n.menu.items().remove():n.menu=C.create({type:"menu",classes:"combobox-menu",layout:"flow"}).parent(n).renderTo()
r.each(e,function(e){n.menu.add({text:e.title,url:e.previewUrl,match:t,classes:"menu-item-ellipsis",onclick:a(e.value,e.title)})})
n.menu.renderNew()
n.hideMenu()
n.menu.on("cancel",function(e){if(e.control.parent()===n.menu){e.stopPropagation()
n.focus()
n.hideMenu()}})
n.menu.on("select",function(){n.focus()})
var o=n.layoutRect().w
n.menu.layoutRect({w:o,minW:0,maxW:o})
n.menu.repaint()
n.menu.reflow()
n.menu.show()
n.menu.moveRel(n.getEl(),n.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"])},hideMenu:function(){this.menu&&this.menu.hide()},bindStates:function(){var e=this
e.state.on("change:value",function(t){e.getEl("inp").value!==t.value&&(e.getEl("inp").value=t.value)})
e.state.on("change:disabled",function(t){e.getEl("inp").disabled=t.value})
e.state.on("change:statusLevel",function(t){var r=e.getEl("status")
var n=e.classPrefix,a=t.value
lt.css(r,"display","none"===a?"none":"")
lt.toggleClass(r,n+"i-checkmark","ok"===a)
lt.toggleClass(r,n+"i-warning","warn"===a)
lt.toggleClass(r,n+"i-error","error"===a)
e.classes.toggle("has-status","none"!==a)
e.repaint()})
lt.on(e.getEl("status"),"mouseleave",function(){e.tooltip().hide()})
e.on("cancel",function(t){if(e.menu&&e.menu.visible()){t.stopPropagation()
e.hideMenu()}})
var t=function(e,t){t&&t.items().length>0&&t.items().eq(e)[0].focus()}
e.on("keydown",function(r){var n=r.keyCode
if("INPUT"===r.target.nodeName)if(n===Zr.DOWN){r.preventDefault()
e.fire("autocomplete")
t(0,e.menu)}else if(n===Zr.UP){r.preventDefault()
t(-1,e.menu)}})
return e._super()},remove:function(){ut(this.getEl("inp")).off()
this.menu&&this.menu.remove()
this._super()}})
var en=$r.extend({init:function(e){var t=this
e.spellcheck=false
e.onaction&&(e.icon="none")
t._super(e)
t.classes.add("colorbox")
t.on("change keyup postrender",function(){t.repaintColor(t.value())})},repaintColor:function(e){var t=this.getEl("open")
var r=t?t.getElementsByTagName("i")[0]:null
if(r)try{r.style.background=e}catch(e){}},bindStates:function(){var e=this
e.state.on("change:value",function(t){e.state.get("rendered")&&e.repaintColor(t.value)})
return e._super()}})
var tn=Jr.extend({showPanel:function(){var e=this,t=e.settings
e.classes.add("opened")
if(e.panel)e.panel.show()
else{var r=t.panel
r.type&&(r={layout:"grid",items:r})
r.role=r.role||"dialog"
r.popover=true
r.autohide=true
r.ariaRoot=true
e.panel=new br(r).on("hide",function(){e.classes.remove("opened")}).on("cancel",function(t){t.stopPropagation()
e.focus()
e.hidePanel()}).parent(e).renderTo(e.getContainerElm())
e.panel.fire("show")
e.panel.reflow()}var n=["bc-tc","bc-tl","bc-tr"]
var a=["bc-tc","bc-tr","bc-tl","tc-bc","tc-br","tc-bl"]
var o=e.panel.testMoveRel(e.getEl(),t.popoverAlign||(e.isRtl()?n:a))
e.panel.classes.toggle("start","l"===o.substr(-1))
e.panel.classes.toggle("end","r"===o.substr(-1))
var i="t"===o.substr(0,1)
e.panel.classes.toggle("bottom",!i)
e.panel.classes.toggle("top",i)
e.panel.moveRel(e.getEl(),o)},hidePanel:function(){var e=this
e.panel&&e.panel.hide()},postRender:function(){var e=this
e.aria("haspopup",true)
e.on("click",function(t){if(t.control===e)if(e.panel&&e.panel.visible())e.hidePanel()
else{e.showPanel()
e.panel.focus(!!t.aria)}})
return e._super()},remove:function(){if(this.panel){this.panel.remove()
this.panel=null}return this._super()}})
var rn=x.DOM
var nn=tn.extend({init:function(e){this._super(e)
this.classes.add("splitbtn")
this.classes.add("colorbutton")},color:function(e){if(e){this._color=e
this.getEl("preview").style.backgroundColor=e
return this}return this._color},resetColor:function(){this._color=null
this.getEl("preview").style.backgroundColor=null
return this},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix,n=e.state.get("text")
var a=e.settings.icon?r+"ico "+r+"i-"+e.settings.icon:""
var o=e.settings.image?" style=\"background-image: url('"+e.settings.image+"')\"":""
var i=""
if(n){e.classes.add("btn-has-text")
i='<span class="'+r+'txt">'+e.encode(n)+"</span>"}return'<div id="'+t+'" class="'+e.classes+'" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">'+(a?'<i class="'+a+'"'+o+"></i>":"")+'<span id="'+t+'-preview" class="'+r+'preview"></span>'+i+'</button><button type="button" class="'+r+'open" hidefocus="1" tabindex="-1"> <i class="'+r+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick
e.on("click",function(r){if(r.aria&&"down"===r.aria.key)return
if(r.control===e&&!rn.getParent(r.target,"."+e.classPrefix+"open")){r.stopImmediatePropagation()
t.call(e,r)}})
delete e.settings.onclick
return e._super()}})
var an=tinymce.util.Tools.resolve("tinymce.util.Color")
var on=Sr.extend({Defaults:{classes:"widget colorpicker"},init:function(e){this._super(e)},postRender:function(){var e=this
var t=e.color()
var r,n,a,o,i
n=e.getEl("h")
a=e.getEl("hp")
o=e.getEl("sv")
i=e.getEl("svp")
function u(e,t){var r=lt.getPos(e)
var n,a
n=t.pageX-r.x
a=t.pageY-r.y
n=Math.max(0,Math.min(n/e.clientWidth,1))
a=Math.max(0,Math.min(a/e.clientHeight,1))
return{x:n,y:a}}function s(t,r){var n=(360-t.h)/360
lt.css(a,{top:100*n+"%"})
r||lt.css(i,{left:t.s+"%",top:100-t.v+"%"})
o.style.background=an({s:100,v:100,h:t.h}).toHex()
e.color().parse({s:t.s,v:t.v,h:t.h})}function l(t){var n
n=u(o,t)
r.s=100*n.x
r.v=100*(1-n.y)
s(r)
e.fire("change")}function c(a){var o
o=u(n,a)
r=t.toHsv()
r.h=360*(1-o.y)
s(r,true)
e.fire("change")}e._repaint=function(){r=t.toHsv()
s(r)}
e._super()
e._svdraghelper=new rr(e._id+"-sv",{start:l,drag:l})
e._hdraghelper=new rr(e._id+"-h",{start:c,drag:c})
e._repaint()},rgb:function(){return this.color().toRgb()},value:function(e){var t=this
if(!arguments.length)return t.color().toHex()
t.color().parse(e)
t._rendered&&t._repaint()},color:function(){this._color||(this._color=an())
return this._color},renderHtml:function(){var e=this
var t=e._id
var r=e.classPrefix
var n
var a="#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000"
function o(){var e,t,n,o,i=""
n="filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr="
o=a.split(",")
for(e=0,t=o.length-1;e<t;e++)i+='<div class="'+r+'colorpicker-h-chunk" style="height:'+100/t+"%;"+n+o[e]+",endColorstr="+o[e+1]+");-ms-"+n+o[e]+",endColorstr="+o[e+1]+')"></div>'
return i}var i="background: -ms-linear-gradient(top,"+a+");background: linear-gradient(to bottom,"+a+");"
n='<div id="'+t+'-h" class="'+r+'colorpicker-h" style="'+i+'">'+o()+'<div id="'+t+'-hp" class="'+r+'colorpicker-h-marker"></div></div>'
return'<div id="'+t+'" class="'+e.classes+'"><div id="'+t+'-sv" class="'+r+'colorpicker-sv"><div class="'+r+'colorpicker-overlay1"><div class="'+r+'colorpicker-overlay2"><div id="'+t+'-svp" class="'+r+'colorpicker-selector1"><div class="'+r+'colorpicker-selector2"></div></div></div></div></div>'+n+"</div>"}})
var un=Sr.extend({init:function(e){var t=this
e=r.extend({height:100,text:"Drop an image here",multiple:false,accept:null},e)
t._super(e)
t.classes.add("dropzone")
e.multiple&&t.classes.add("multiple")},renderHtml:function(){var e=this
var t,r
var n=e.settings
t={id:e._id,hidefocus:"1"}
r=lt.create("div",t,"<span>"+this.translate(n.text)+"</span>")
n.height&&lt.css(r,"height",n.height+"px")
n.width&&lt.css(r,"width",n.width+"px")
r.className=e.classes
return r.outerHTML},postRender:function(){var e=this
var t=function(t){t.preventDefault()
e.classes.toggle("dragenter")
e.getEl().className=e.classes}
var n=function(t){var n=e.settings.accept
if("string"!==typeof n)return t
var a=new RegExp("("+n.split(/\s*,\s*/).join("|")+")$","i")
return r.grep(t,function(e){return a.test(e.name)})}
e._super()
e.$el.on("dragover",function(e){e.preventDefault()})
e.$el.on("dragenter",t)
e.$el.on("dragleave",t)
e.$el.on("drop",function(t){t.preventDefault()
if(e.state.get("disabled"))return
var r=n(t.dataTransfer.files)
e.value=function(){return r.length?e.settings.multiple?r:r[0]:null}
r.length&&e.fire("change",t)})},remove:function(){this.$el.off()
this._super()}})
var sn=Sr.extend({init:function(e){var t=this
e.delimiter||(e.delimiter="»")
t._super(e)
t.classes.add("path")
t.canFocus=true
t.on("click",function(e){var r
var n=e.target;(r=n.getAttribute("data-index"))&&t.fire("select",{value:t.row()[r],index:r})})
t.row(t.settings.row)},focus:function(){var e=this
e.getEl().firstChild.focus()
return e},row:function(e){if(!arguments.length)return this.state.get("row")
this.state.set("row",e)
return this},renderHtml:function(){var e=this
return'<div id="'+e._id+'" class="'+e.classes+'">'+e._getDataPathHtml(e.state.get("row"))+"</div>"},bindStates:function(){var e=this
e.state.on("change:row",function(t){e.innerHtml(e._getDataPathHtml(t.value))})
return e._super()},_getDataPathHtml:function(e){var t=this
var r=e||[]
var n,a,o=""
var i=t.classPrefix
for(n=0,a=r.length;n<a;n++)o+=(n>0?'<div class="'+i+'divider" aria-hidden="true"> '+t.settings.delimiter+" </div>":"")+'<div role="button" class="'+i+"path-item"+(n===a-1?" "+i+"last":"")+'" data-index="'+n+'" tabindex="-1" id="'+t._id+"-"+n+'" aria-level="'+(n+1)+'">'+r[n].name+"</div>"
o||(o='<div class="'+i+'path-item"> </div>')
return o}})
var ln=sn.extend({postRender:function(){var e=this,t=e.settings.editor
function r(e){if(1===e.nodeType){if("BR"===e.nodeName||!!e.getAttribute("data-mce-bogus"))return true
if("bookmark"===e.getAttribute("data-mce-type"))return true}return false}if(false!==t.settings.elementpath){e.on("select",function(e){t.focus()
t.selection.select(this.row()[e.index].element)
t.nodeChanged()})
t.on("nodeChange",function(n){var a=[]
var o=n.parents
var i=o.length
while(i--)if(1===o[i].nodeType&&!r(o[i])){var u=t.fire("ResolveName",{name:o[i].nodeName.toLowerCase(),target:o[i]})
u.isDefaultPrevented()||a.push({name:u.name,element:o[i]})
if(u.isPropagationStopped())break}e.row(a)})}return e._super()}})
var cn=$t.extend({Defaults:{layout:"flex",align:"center",defaults:{flex:1}},renderHtml:function(){var e=this,t=e._layout,r=e.classPrefix
e.classes.add("formitem")
t.preRender(e)
return'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<div id="'+e._id+'-title" class="'+r+'title">'+e.settings.title+"</div>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})
var fn=$t.extend({Defaults:{containerCls:"form",layout:"flex",direction:"column",align:"stretch",flex:1,padding:15,labelGap:30,spacing:10,callbacks:{submit:function(){this.submit()}}},preRender:function(){var e=this,t=e.items()
e.settings.formItemDefaults||(e.settings.formItemDefaults={layout:"flex",autoResize:"overflow",defaults:{flex:1}})
t.each(function(t){var n
var a=t.settings.label
if(a){n=new cn(r.extend({items:{type:"label",id:t._id+"-l",text:a,flex:0,forId:t._id,disabled:t.disabled()}},e.settings.formItemDefaults))
n.type="formitem"
t.aria("labelledby",t._id+"-l")
"undefined"===typeof t.settings.flex&&(t.settings.flex=1)
e.replace(t,n)
n.add(t)}})},submit:function(){return this.fire("submit",{data:this.toJSON()})},postRender:function(){var e=this
e._super()
e.fromJSON(e.settings.data)},bindStates:function(){var e=this
e._super()
function t(){var t=0
var r=[]
var n,a,o
if(false===e.settings.labelGapCalc)return
o="children"===e.settings.labelGapCalc?e.find("formitem"):e.items()
o.filter("formitem").each(function(e){var n=e.items()[0],a=n.getEl().clientWidth
t=a>t?a:t
r.push(n)})
a=e.settings.labelGap||0
n=r.length
while(n--)r[n].settings.minWidth=t+a}e.on("show",t)
t()}})
var dn=fn.extend({Defaults:{containerCls:"fieldset",layout:"flex",direction:"column",align:"stretch",flex:1,padding:"25 15 5 15",labelGap:30,spacing:10,border:1},renderHtml:function(){var e=this,t=e._layout,r=e.classPrefix
e.preRender()
t.preRender(e)
return'<fieldset id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<legend id="'+e._id+'-title" class="'+r+'fieldset-title">'+e.settings.title+"</legend>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></fieldset>"}})
var vn=0
var mn=function(e){var t=new Date
var r=t.getTime()
var n=Math.floor(1e9*Math.random())
vn++
return e+"_"+n+vn+String(r)}
var gn=function(e,t){var r=t||document
var n=r.createElement("div")
n.innerHTML=e
if(!n.hasChildNodes()||n.childNodes.length>1){console.error("HTML does not have a single root node",e)
throw"HTML must have a single root node"}return hn(n.childNodes[0])}
var pn=function(e,t){var r=t||document
var n=r.createElement(e)
return hn(n)}
var An=function(e,t){var r=t||document
var n=r.createTextNode(e)
return hn(n)}
var hn=function(e){if(null===e||void 0===e)throw new Error("Node cannot be null or undefined")
return{dom:O(e)}}
var bn=function(e,t,r){var n=e.dom()
return V.from(n.elementFromPoint(t,r)).map(hn)}
var yn={fromHtml:gn,fromTag:pn,fromText:An,fromDom:hn,fromPoint:bn}
var wn=function(e){var t=false
var r
return function(){var n=[]
for(var a=0;a<arguments.length;a++)n[a]=arguments[a]
if(!t){t=true
r=e.apply(null,n)}return r}}
Node.ATTRIBUTE_NODE
Node.CDATA_SECTION_NODE
Node.COMMENT_NODE
var En=Node.DOCUMENT_NODE
Node.DOCUMENT_TYPE_NODE
Node.DOCUMENT_FRAGMENT_NODE
var xn=Node.ELEMENT_NODE
Node.TEXT_NODE
Node.PROCESSING_INSTRUCTION_NODE
Node.ENTITY_REFERENCE_NODE
Node.ENTITY_NODE
Node.NOTATION_NODE
var Cn=function(){var e=[]
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(){var t=[]
for(var r=0;r<arguments.length;r++)t[r]=arguments[r]
if(e.length!==t.length)throw new Error('Wrong number of arguments to struct. Expected "['+e.length+']", got '+t.length+" arguments")
var n={}
be(e,function(e,r){n[e]=O(t[r])})
return n}}
"undefined"!==typeof window?window:Function("return this;")()
var kn=function(e,t){for(var r=0;r<e.length;r++){var n=e[r]
if(n.test(t))return n}return}
var Bn=function(e,t){var r=kn(e,t)
if(!r)return{major:0,minor:0}
var n=function(e){return Number(t.replace(r,"$"+e))}
return In(n(1),n(2))}
var Tn=function(e,t){var r=String(t).toLowerCase()
if(0===e.length)return Rn()
return Bn(e,r)}
var Rn=function(){return In(0,0)}
var In=function(e,t){return{major:e,minor:t}}
var Sn={nu:In,detect:Tn,unknown:Rn}
var Dn="Edge"
var Nn="Chrome"
var Mn="IE"
var Pn="Opera"
var _n="Firefox"
var On="Safari"
var Fn=function(e,t){return function(){return t===e}}
var Ln=function(){return Un({current:void 0,version:Sn.unknown()})}
var Un=function(e){var t=e.current
var r=e.version
return{current:t,version:r,isEdge:Fn(Dn,t),isChrome:Fn(Nn,t),isIE:Fn(Mn,t),isOpera:Fn(Pn,t),isFirefox:Fn(_n,t),isSafari:Fn(On,t)}}
var Qn={unknown:Ln,nu:Un,edge:O(Dn),chrome:O(Nn),ie:O(Mn),opera:O(Pn),firefox:O(_n),safari:O(On)}
var zn="Windows"
var jn="iOS"
var Hn="Android"
var Wn="Linux"
var Vn="OSX"
var Gn="Solaris"
var Yn="FreeBSD"
var Jn=function(e,t){return function(){return t===e}}
var qn=function(){return Kn({current:void 0,version:Sn.unknown()})}
var Kn=function(e){var t=e.current
var r=e.version
return{current:t,version:r,isWindows:Jn(zn,t),isiOS:Jn(jn,t),isAndroid:Jn(Hn,t),isOSX:Jn(Vn,t),isLinux:Jn(Wn,t),isSolaris:Jn(Gn,t),isFreeBSD:Jn(Yn,t)}}
var Xn={unknown:qn,nu:Kn,windows:O(zn),ios:O(jn),android:O(Hn),linux:O(Wn),osx:O(Vn),solaris:O(Gn),freebsd:O(Yn)}
var Zn=function(e,t,r){var n=e.isiOS()&&true===/ipad/i.test(r)
var a=e.isiOS()&&!n
var o=e.isAndroid()&&3===e.version.major
var i=e.isAndroid()&&4===e.version.major
var u=n||o||i&&true===/mobile/i.test(r)
var s=e.isiOS()||e.isAndroid()
var l=s&&!u
var c=t.isSafari()&&e.isiOS()&&false===/safari/i.test(r)
return{isiPad:O(n),isiPhone:O(a),isTablet:O(u),isPhone:O(l),isTouch:O(s),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:O(c)}}
var $n=function(e,t){var r=String(t).toLowerCase()
return Ee(e,function(e){return e.search(r)})}
var ea=function(e,t){return $n(e,t).map(function(e){var r=Sn.detect(e.versionRegexes,t)
return{current:e.name,version:r}})}
var ta=function(e,t){return $n(e,t).map(function(e){var r=Sn.detect(e.versionRegexes,t)
return{current:e.name,version:r}})}
var ra={detectBrowser:ea,detectOs:ta}
var na=function(e,t){return-1!==e.indexOf(t)}
var aa=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/
var oa=function(e){return function(t){return na(t,e)}}
var ia=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){var t=na(e,"edge/")&&na(e,"chrome")&&na(e,"safari")&&na(e,"applewebkit")
return t}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,aa],search:function(e){return na(e,"chrome")&&!na(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return na(e,"msie")||na(e,"trident")}},{name:"Opera",versionRegexes:[aa,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:oa("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:oa("firefox")},{name:"Safari",versionRegexes:[aa,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(na(e,"safari")||na(e,"mobile/"))&&na(e,"applewebkit")}}]
var ua=[{name:"Windows",search:oa("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return na(e,"iphone")||na(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:oa("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:oa("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:oa("linux"),versionRegexes:[]},{name:"Solaris",search:oa("sunos"),versionRegexes:[]},{name:"FreeBSD",search:oa("freebsd"),versionRegexes:[]}]
var sa={browsers:O(ia),oses:O(ua)}
var la=function(e){var t=sa.browsers()
var r=sa.oses()
var n=ra.detectBrowser(t,e).fold(Qn.unknown,Qn.nu)
var a=ra.detectOs(r,e).fold(Xn.unknown,Xn.nu)
var o=Zn(a,n,e)
return{browser:n,os:a,deviceType:o}}
var ca={detect:la}
var fa=wn(function(){var e=navigator.userAgent
return ca.detect(e)})
var da={detect:fa}
var va=xn
var ma=En
var ga=function(e){return e.nodeType!==va&&e.nodeType!==ma||0===e.childElementCount}
var pa=function(e,t){var r=void 0===t?document:t.dom()
return ga(r)?[]:he(r.querySelectorAll(e),yn.fromDom)}
var Aa=function(e,t){var r=void 0===t?document:t.dom()
return ga(r)?V.none():V.from(r.querySelector(e)).map(yn.fromDom)}
var ha=da.detect().browser
ha.isIE()
Cn("element","offset")
var ba=function(e,t){return pa(t,e)}
var ya=r.trim
var wa=function(e){return function(t){if(t&&1===t.nodeType){if(t.contentEditable===e)return true
if(t.getAttribute("data-mce-contenteditable")===e)return true}return false}}
var Ea=wa("true")
var xa=wa("false")
var Ca=function(e,t,r,n,a){return{type:e,title:t,url:r,level:n,attach:a}}
var ka=function(e){while(e=e.parentNode){var t=e.contentEditable
if(t&&"inherit"!==t)return Ea(e)}return false}
var Ba=function(e,t){return he(ba(yn.fromDom(t),e),function(e){return e.dom()})}
var Ta=function(e){return e.innerText||e.textContent}
var Ra=function(e){return e.id?e.id:mn("h")}
var Ia=function(e){return e&&"A"===e.nodeName&&(e.id||e.name)}
var Sa=function(e){return Ia(e)&&Na(e)}
var Da=function(e){return e&&/^(H[1-6])$/.test(e.nodeName)}
var Na=function(e){return ka(e)&&!xa(e)}
var Ma=function(e){return Da(e)&&Na(e)}
var Pa=function(e){return Da(e)?parseInt(e.nodeName.substr(1),10):0}
var _a=function(e){var t=Ra(e)
var r=function(){e.id=t}
return Ca("header",Ta(e),"#"+t,Pa(e),r)}
var Oa=function(e){var t=e.id||e.name
var r=Ta(e)
return Ca("anchor",r||"#"+t,"#"+t,0,_)}
var Fa=function(e){return he(ye(e,Ma),_a)}
var La=function(e){return he(ye(e,Sa),Oa)}
var Ua=function(e){var t=Ba("h1,h2,h3,h4,h5,h6,a:not([href])",e)
return t}
var Qa=function(e){return ya(e.title).length>0}
var za=function(e){var t=Ua(e)
return ye(Fa(t).concat(La(t)),Qa)}
var ja={find:za}
var Ha=function(){return window.tinymce?window.tinymce.activeEditor:t.activeEditor}
var Wa={}
var Va=5
var Ga=function(){Wa={}}
var Ya=function(e){return{title:e.title,value:{title:{raw:e.title},url:e.url,attach:e.attach}}}
var Ja=function(e){return r.map(e,Ya)}
var qa=function(e,t){return{title:e,value:{title:e,url:t,attach:_}}}
var Ka=function(e,t){var r=Ae(t,function(t){return t.url===e})
return!r}
var Xa=function(e,t,r){var n=t in e?e[t]:r
return false===n?null:n}
var Za=function(e,t,n,a){var o={title:"-"}
var i=function(e){var a=e.hasOwnProperty(n)?e[n]:[]
var o=ye(a,function(e){return Ka(e,t)})
return r.map(o,function(e){return{title:e,value:{title:e,url:e,attach:_}}})}
var u=function(e){var r=ye(t,function(t){return t.type===e})
return Ja(r)}
var s=function(){var e=u("anchor")
var t=Xa(a,"anchor_top","#top")
var r=Xa(a,"anchor_bottom","#bottom")
null!==t&&e.unshift(qa("<top>",t))
null!==r&&e.push(qa("<bottom>",r))
return e}
var l=function(e){return we(e,function(e,t){var r=0===e.length||0===t.length
return r?e.concat(t):e.concat(o,t)},[])}
if(false===a.typeahead_urls)return[]
return"file"===n?l([eo(e,i(Wa)),eo(e,u("header")),eo(e,s())]):eo(e,i(Wa))}
var $a=function(e,t){var r=Wa[t]
if(!/^https?/.test(e))return
r?pe(r,e).isNone()&&(Wa[t]=r.slice(0,Va).concat(e)):Wa[t]=[e]}
var eo=function(e,t){var n=e.toLowerCase()
var a=r.grep(t,function(e){return-1!==e.title.toLowerCase().indexOf(n)})
return 1===a.length&&a[0].title===e?[]:a}
var to=function(e){var t=e.title
return t.raw?t.raw:t}
var ro=function(e,t,r,n){var a=function(a){var o=ja.find(r)
var i=Za(a,o,n,t)
e.showAutoComplete(i,a)}
e.on("autocomplete",function(){a(e.value())})
e.on("selectitem",function(t){var r=t.value
e.value(r.url)
var a=to(r)
"image"===n?e.fire("change",{meta:{alt:a,attach:r.attach}}):e.fire("change",{meta:{text:a,attach:r.attach}})
e.focus()})
e.on("click",function(t){0===e.value().length&&"INPUT"===t.target.nodeName&&a("")})
e.on("PostRender",function(){e.getRoot().on("submit",function(t){t.isDefaultPrevented()||$a(e.value(),n)})})}
var no=function(e){var t=e.status,r=e.message
return"valid"===t?{status:"ok",message:r}:"unknown"===t?{status:"warn",message:r}:"invalid"===t?{status:"warn",message:r}:{status:"none",message:""}}
var ao=function(e,t,r){var n=t.filepicker_validator_handler
if(n){var a=function(t){if(0===t.length){e.statusLevel("none")
return}n({url:t,type:r},function(t){var r=no(t)
e.statusMessage(r.message)
e.statusLevel(r.status)})}
e.state.on("change:value",function(e){a(e.value)})}}
var oo=$r.extend({Statics:{clearHistory:Ga},init:function(e){var t=this,n=Ha(),a=n.settings
var o,i,u
var s=e.filetype
e.spellcheck=false
u=a.file_picker_types||a.file_browser_callback_types
u&&(u=r.makeMap(u,/[, ]/))
if(!u||u[s]){i=a.file_picker_callback
if(!i||u&&!u[s]){i=a.file_browser_callback
!i||u&&!u[s]||(o=function(){i(t.getEl("inp").id,t.value(),s,window)})}else o=function(){var e=t.fire("beforecall").meta
e=r.extend({filetype:s},e)
i.call(n,function(e,r){t.value(e).fire("change",{meta:r})},t.value(),e)}}if(o){e.icon="browse"
e.onaction=o}t._super(e)
t.classes.add("filepicker")
ro(t,a,n.getBody(),s)
ao(t,a,s)}})
var io=Yr.extend({recalc:function(e){var t=e.layoutRect(),r=e.paddingBox
e.items().filter(":visible").each(function(e){e.layoutRect({x:r.left,y:r.top,w:t.innerW-r.right-r.left,h:t.innerH-r.top-r.bottom})
e.recalc&&e.recalc()})}})
var uo=Yr.extend({recalc:function(e){var t,r,n,a,o,i,u,s,l,c,f,d
var v,m,g,p
var A=[]
var h,b,y,w,E,x
var C,k,B,T,R,I,S,D
var N,M,P,_,O,F
var L,U
var Q=Math.max,z=Math.min
n=e.items().filter(":visible")
a=e.layoutRect()
o=e.paddingBox
i=e.settings
d=e.isRtl()?i.direction||"row-reversed":i.direction
u=i.align
s=e.isRtl()?i.pack||"end":i.pack
l=i.spacing||0
if("row-reversed"===d||"column-reverse"===d){n=n.set(n.toArray().reverse())
d=d.split("-")[0]}if("column"===d){B="y"
C="h"
k="minH"
T="maxH"
I="innerH"
R="top"
S="deltaH"
D="contentH"
O="left"
P="w"
N="x"
M="innerW"
_="minW"
F="right"
L="deltaW"
U="contentW"}else{B="x"
C="w"
k="minW"
T="maxW"
I="innerW"
R="left"
S="deltaW"
D="contentW"
O="top"
P="h"
N="y"
M="innerH"
_="minH"
F="bottom"
L="deltaH"
U="contentH"}f=a[I]-o[R]-o[R]
x=c=0
for(t=0,r=n.length;t<r;t++){v=n[t]
m=v.layoutRect()
g=v.settings
p=g.flex
f-=t<r-1?l:0
if(p>0){c+=p
m[T]&&A.push(v)
m.flex=p}f-=m[k]
h=o[O]+m[_]+o[F]
h>x&&(x=h)}w={}
w[k]=f<0?a[k]-f+a[S]:a[I]-f+a[S]
w[_]=x+a[L]
w[D]=a[I]-f
w[U]=x
w.minW=z(w.minW,a.maxW)
w.minH=z(w.minH,a.maxH)
w.minW=Q(w.minW,a.startMinWidth)
w.minH=Q(w.minH,a.startMinHeight)
if(a.autoResize&&(w.minW!==a.minW||w.minH!==a.minH)){w.w=w.minW
w.h=w.minH
e.layoutRect(w)
this.recalc(e)
if(null===e._lastRect){var j=e.parent()
if(j){j._lastRect=null
j.recalc()}}return}y=f/c
for(t=0,r=A.length;t<r;t++){v=A[t]
m=v.layoutRect()
b=m[T]
h=m[k]+m.flex*y
if(h>b){f-=m[T]-m[k]
c-=m.flex
m.flex=0
m.maxFlexSize=b}else m.maxFlexSize=0}y=f/c
E=o[R]
w={}
if(0===c)if("end"===s)E=f+o[R]
else if("center"===s){E=Math.round(a[I]/2-(a[I]-f)/2)+o[R]
E<0&&(E=o[R])}else if("justify"===s){E=o[R]
l=Math.floor(f/(n.length-1))}w[N]=o[O]
for(t=0,r=n.length;t<r;t++){v=n[t]
m=v.layoutRect()
h=m.maxFlexSize||m[k]
if("center"===u)w[N]=Math.round(a[M]/2-m[P]/2)
else if("stretch"===u){w[P]=Q(m[_]||0,a[M]-o[O]-o[F])
w[N]=o[O]}else"end"===u&&(w[N]=a[M]-m[P]-o.top)
m.flex>0&&(h+=m.flex*y)
w[C]=h
w[B]=E
v.layoutRect(w)
v.recalc&&v.recalc()
E+=h+l}}})
var so=Gr.extend({Defaults:{containerClass:"flow-layout",controlClass:"flow-layout-item",endClass:"break"},recalc:function(e){e.items().filter(":visible").each(function(e){e.recalc&&e.recalc()})},isNative:function(){return true}})
var lo=function(e,t){return Aa(t,e)}
var co=function(e,t){return function(){e.execCommand("mceToggleFormat",false,t)}}
var fo=function(e,t,r){var n=function(e){r(e,t)}
e.formatter?e.formatter.formatChanged(t,n):e.on("init",function(){e.formatter.formatChanged(t,n)})}
var vo=function(e,t){return function(r){fo(e,t,function(e){r.control.active(e)})}}
var mo=function(e){var t=["alignleft","aligncenter","alignright","alignjustify"]
var n="alignleft"
var a=[{text:"Left",icon:"alignleft",onclick:co(e,"alignleft")},{text:"Center",icon:"aligncenter",onclick:co(e,"aligncenter")},{text:"Right",icon:"alignright",onclick:co(e,"alignright")},{text:"Justify",icon:"alignjustify",onclick:co(e,"alignjustify")}]
e.addMenuItem("align",{text:"Align",menu:a})
e.addButton("align",{type:"menubutton",icon:n,menu:a,onShowMenu:function(n){var a=n.control.menu
r.each(t,function(t,r){a.items().eq(r).each(function(r){return r.active(e.formatter.match(t))})})},onPostRender:function(a){var o=a.control
r.each(t,function(t,r){fo(e,t,function(e){o.icon(n)
e&&o.icon(t)})})}})
r.each({alignleft:["Align left","JustifyLeft"],aligncenter:["Align center","JustifyCenter"],alignright:["Align right","JustifyRight"],alignjustify:["Justify","JustifyFull"],alignnone:["No alignment","JustifyNone"]},function(t,r){e.addButton(r,{active:false,tooltip:t[0],cmd:t[1],onPostRender:vo(e,r)})})}
var go={register:mo}
var po=function(e){return e?e.split(",")[0]:""}
var Ao=function(e,t){var n=t?t.toLowerCase():""
var a
r.each(e,function(e){e.value.toLowerCase()===n&&(a=e.value)})
r.each(e,function(e){a||po(e.value).toLowerCase()!==po(n).toLowerCase()||(a=e.value)})
return a}
var ho=function(e,t){return function(){var r=this
r.state.set("value",null)
e.on("init nodeChange",function(n){var a=e.queryCommandValue("FontName")
var o=Ao(t,a)
r.value(o||null)
!o&&a&&r.text(po(a))})}}
var bo=function(e){e=e.replace(/;$/,"").split(";")
var t=e.length
while(t--)e[t]=e[t].split("=")
return e}
var yo=function(e){var t="Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats"
var n=bo(e.settings.font_formats||t)
return r.map(n,function(e){return{text:{raw:e[0]},value:e[1],textStyle:-1===e[1].indexOf("dings")?"font-family:"+e[1]:""}})}
var wo=function(e){e.addButton("fontselect",function(){var t=yo(e)
return{type:"listbox",text:"Font Family",tooltip:"Font Family",values:t,fixedWidth:true,onPostRender:ho(e,t),onselect:function(t){t.control.settings.value&&e.execCommand("FontName",false,t.control.settings.value)}}})}
var Eo=function(e){wo(e)}
var xo={register:Eo}
var Co=function(e,t){var r=Math.pow(10,t)
return Math.round(e*r)/r}
var ko=function(e,t){if(/[0-9.]+px$/.test(e))return Co(72*parseInt(e,10)/96,t||0)+"pt"
return e}
var Bo=function(e,t,n){var a
r.each(e,function(e){e.value===n?a=n:e.value===t&&(a=t)})
return a}
var To=function(e,t){return function(){var r=this
e.on("init nodeChange",function(n){var a,o,i,u
a=e.queryCommandValue("FontSize")
if(a)for(i=3;!u&&i>=0;i--){o=ko(a,i)
u=Bo(t,o,a)}r.value(u||null)
u||r.text(o)})}}
var Ro=function(e){var t="8pt 10pt 12pt 14pt 18pt 24pt 36pt"
var n=e.settings.fontsize_formats||t
return r.map(n.split(" "),function(e){var t=e,r=e
var n=e.split("=")
if(n.length>1){t=n[0]
r=n[1]}return{text:t,value:r}})}
var Io=function(e){e.addButton("fontsizeselect",function(){var t=Ro(e)
return{type:"listbox",text:"Font Sizes",tooltip:"Font Sizes",values:t,fixedWidth:true,onPostRender:To(e,t),onclick:function(t){t.control.settings.value&&e.execCommand("FontSize",false,t.control.settings.value)}}})}
var So=function(e){Io(e)}
var Do={register:So}
var No=function(e,t){var n=t.length
r.each(t,function(t){t.menu&&(t.hidden=0===No(e,t.menu))
var r=t.format
r&&(t.hidden=!e.formatter.canApply(r))
t.hidden&&n--})
return n}
var Mo=function(e,t){var r=t.items().length
t.items().each(function(t){t.menu&&t.visible(Mo(e,t.menu)>0)
!t.menu&&t.settings.menu&&t.visible(No(e,t.settings.menu)>0)
var n=t.settings.format
n&&t.visible(e.formatter.canApply(n))
t.visible()||r--})
return r}
var Po=function(e){var t=0
var n=[]
var a=[{title:"Headings",items:[{title:"Heading 1",format:"h1"},{title:"Heading 2",format:"h2"},{title:"Heading 3",format:"h3"},{title:"Heading 4",format:"h4"},{title:"Heading 5",format:"h5"},{title:"Heading 6",format:"h6"}]},{title:"Inline",items:[{title:"Bold",icon:"bold",format:"bold"},{title:"Italic",icon:"italic",format:"italic"},{title:"Underline",icon:"underline",format:"underline"},{title:"Strikethrough",icon:"strikethrough",format:"strikethrough"},{title:"Superscript",icon:"superscript",format:"superscript"},{title:"Subscript",icon:"subscript",format:"subscript"},{title:"Code",icon:"code",format:"code"}]},{title:"Blocks",items:[{title:"Paragraph",format:"p"},{title:"Blockquote",format:"blockquote"},{title:"Div",format:"div"},{title:"Pre",format:"pre"}]},{title:"Alignment",items:[{title:"Left",icon:"alignleft",format:"alignleft"},{title:"Center",icon:"aligncenter",format:"aligncenter"},{title:"Right",icon:"alignright",format:"alignright"},{title:"Justify",icon:"alignjustify",format:"alignjustify"}]}]
var o=function(e){var a=[]
if(!e)return
r.each(e,function(e){var r={text:e.title,icon:e.icon}
if(e.items)r.menu=o(e.items)
else{var i=e.format||"custom"+t++
if(!e.format){e.name=i
n.push(e)}r.format=i
r.cmd=e.cmd}a.push(r)})
return a}
var i=function(){var t
t=e.settings.style_formats_merge?e.settings.style_formats?o(a.concat(e.settings.style_formats)):o(a):o(e.settings.style_formats||a)
return t}
e.on("init",function(){r.each(n,function(t){e.formatter.register(t.name,t)})})
return{type:"menu",items:i(),onPostRender:function(t){e.fire("renderFormatsMenu",{control:t.control})},itemDefaults:{preview:true,textStyle:function(){if(this.settings.format)return e.formatter.getCssText(this.settings.format)},onPostRender:function(){var t=this
t.parent().on("show",function(){var r,n
r=t.settings.format
if(r){t.disabled(!e.formatter.canApply(r))
t.active(e.formatter.match(r))}n=t.settings.cmd
n&&t.active(e.queryCommandState(n))})},onclick:function(){this.settings.format&&co(e,this.settings.format)()
this.settings.cmd&&e.execCommand(this.settings.cmd)}}}}
var _o=function(e,t){e.addMenuItem("formats",{text:"Formats",menu:t})}
var Oo=function(e,t){e.addButton("styleselect",{type:"menubutton",text:"Formats",menu:t,onShowMenu:function(){e.settings.style_formats_autohide&&Mo(e,this.menu)}})}
var Fo=function(e){var t=Po(e)
_o(e,t)
Oo(e,t)}
var Lo={register:Fo}
var Uo="Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre"
var Qo=function(e){e=e.replace(/;$/,"").split(";")
var t=e.length
while(t--)e[t]=e[t].split("=")
return e}
var zo=function(e,t,n){return function(){var a=this
e.on("nodeChange",function(o){var i=e.formatter
var u=null
r.each(o.parents,function(e){r.each(t,function(t){n?i.matchNode(e,n,{value:t.value})&&(u=t.value):i.matchNode(e,t.value)&&(u=t.value)
if(u)return false})
if(u)return false})
a.value(u)})}}
var jo=function(e,t){return function(){var n=[]
r.each(t,function(t){n.push({text:t[0],value:t[1],textStyle:function(){return e.formatter.getCssText(t[1])}})})
return{type:"listbox",text:t[0][0],values:n,fixedWidth:true,onselect:function(t){if(t.control){var r=t.control.value()
co(e,r)()}},onPostRender:zo(e,n)}}}
var Ho=function(e,t){return r.map(t,function(t){return{text:t[0],onclick:co(e,t[1]),textStyle:function(){return e.formatter.getCssText(t[1])}}})}
var Wo=function(e){var t=Qo(e.settings.block_formats||Uo)
e.addMenuItem("blockformats",{text:"Blocks",menu:Ho(e,t)})
e.addButton("formatselect",jo(e,t))}
var Vo={register:Wo}
var Go=function(e,t){var n,a
if("string"===typeof t)a=t.split(" ")
else if(r.isArray(t))return Be(r.map(t,function(t){return Go(e,t)}))
n=r.grep(a,function(t){return"|"===t||t in e.menuItems})
return r.map(n,function(t){return"|"===t?{text:"-"}:e.menuItems[t]})}
var Yo=function(e){return e&&"-"===e.text}
var Jo=function(e){var t=ye(e,function(e,t,r){return!Yo(e)||!Yo(r[t-1])})
return ye(t,function(e,t,r){return!Yo(e)||t>0&&t<r.length-1})}
var qo=function(e,t){var n=[{text:"-"}]
var a=r.grep(e.menuItems,function(e){return e.context===t})
r.each(a,function(e){"before"===e.separator&&n.push({text:"|"})
e.prependToContext?n.unshift(e):n.push(e)
"after"===e.separator&&n.push({text:"|"})})
return n}
var Ko=function(e){var t=e.settings.insert_button_items
return Jo(t?Go(e,t):qo(e,"insert"))}
var Xo=function(e){e.addButton("insert",{type:"menubutton",icon:"insert",menu:[],oncreatemenu:function(){this.menu.add(Ko(e))
this.menu.renderNew()}})}
var Zo=function(e){Xo(e)}
var $o={register:Zo}
var ei=function(e){r.each({bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript"},function(t,r){e.addButton(r,{active:false,tooltip:t,onPostRender:vo(e,r),onclick:co(e,r)})})}
var ti=function(e){r.each({outdent:["Decrease indent","Outdent"],indent:["Increase indent","Indent"],cut:["Cut","Cut"],copy:["Copy","Copy"],paste:["Paste","Paste"],help:["Help","mceHelp"],selectall:["Select all","SelectAll"],visualaid:["Visual aids","mceToggleVisualAid"],newdocument:["New document","mceNewDocument"],removeformat:["Clear formatting","RemoveFormat"],remove:["Remove","Delete"]},function(t,r){e.addButton(r,{tooltip:t[0],cmd:t[1]})})}
var ri=function(e){r.each({blockquote:["Blockquote","mceBlockQuote"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"]},function(t,r){e.addButton(r,{active:false,tooltip:t[0],cmd:t[1],onPostRender:vo(e,r)})})}
var ni=function(e){ei(e)
ti(e)
ri(e)}
var ai=function(e){r.each({bold:["Bold","Bold","Meta+B"],italic:["Italic","Italic","Meta+I"],underline:["Underline","Underline","Meta+U"],strikethrough:["Strikethrough","Strikethrough"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],removeformat:["Clear formatting","RemoveFormat"],newdocument:["New document","mceNewDocument"],cut:["Cut","Cut","Meta+X"],copy:["Copy","Copy","Meta+C"],paste:["Paste","Paste","Meta+V"],selectall:["Select all","SelectAll","Meta+A"]},function(t,r){e.addMenuItem(r,{text:t[0],icon:r,shortcut:t[2],cmd:t[1]})})
e.addMenuItem("codeformat",{text:"Code",icon:"code",onclick:co(e,"code")})}
var oi=function(e){ni(e)
ai(e)}
var ii={register:oi}
var ui=function(e,t){return function(){var r=this
var n=function(){var r="redo"===t?"hasRedo":"hasUndo"
return!!e.undoManager&&e.undoManager[r]()}
r.disabled(!n())
e.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode",function(){r.disabled(e.readonly||!n())})}}
var si=function(e){e.addMenuItem("undo",{text:"Undo",icon:"undo",shortcut:"Meta+Z",onPostRender:ui(e,"undo"),cmd:"undo"})
e.addMenuItem("redo",{text:"Redo",icon:"redo",shortcut:"Meta+Y",onPostRender:ui(e,"redo"),cmd:"redo"})}
var li=function(e){e.addButton("undo",{tooltip:"Undo",onPostRender:ui(e,"undo"),cmd:"undo"})
e.addButton("redo",{tooltip:"Redo",onPostRender:ui(e,"redo"),cmd:"redo"})}
var ci=function(e){si(e)
li(e)}
var fi={register:ci}
var di=function(e){return function(){var t=this
e.on("VisualAid",function(e){t.active(e.hasVisual)})
t.active(e.hasVisual)}}
var vi=function(e){e.addMenuItem("visualaid",{text:"Visual aids",selectable:true,onPostRender:di(e),cmd:"mceToggleVisualAid"})}
var mi=function(e){vi(e)}
var gi={register:mi}
var pi=function(){Sr.tooltips=!je.iOS
qt.translate=function(e){return t.translate(e)}}
var Ai=function(e){e.settings.ui_container&&(je.container=lo(yn.fromDom(document.body),e.settings.ui_container).fold(O(null),function(e){return e.dom()}))}
var hi=function(e){e.rtl&&(qt.rtl=true)}
var bi=function(e){e.on("mousedown progressstate",function(){br.hideAll()})}
var yi=function(e){hi(e)
bi(e)
Ai(e)
pi()
Vo.register(e)
go.register(e)
ii.register(e)
fi.register(e)
Do.register(e)
xo.register(e)
Lo.register(e)
gi.register(e)
$o.register(e)}
var wi={setup:yi}
var Ei=Yr.extend({recalc:function(e){var t,r,n,a,o,i,u,s,l,c,f,d,v,m,g,p,A,h,b,y,w,E,x
var C=[]
var k=[]
var B,T,R,I,S,D
t=e.settings
a=e.items().filter(":visible")
o=e.layoutRect()
n=t.columns||Math.ceil(Math.sqrt(a.length))
r=Math.ceil(a.length/n)
h=t.spacingH||t.spacing||0
b=t.spacingV||t.spacing||0
y=t.alignH||t.align
w=t.alignV||t.align
p=e.paddingBox
S="reverseRows"in t?t.reverseRows:e.isRtl()
y&&"string"===typeof y&&(y=[y])
w&&"string"===typeof w&&(w=[w])
for(f=0;f<n;f++)C.push(0)
for(d=0;d<r;d++)k.push(0)
for(d=0;d<r;d++)for(f=0;f<n;f++){c=a[d*n+f]
if(!c)break
l=c.layoutRect()
B=l.minW
T=l.minH
C[f]=B>C[f]?B:C[f]
k[d]=T>k[d]?T:k[d]}R=o.innerW-p.left-p.right
for(E=0,f=0;f<n;f++){E+=C[f]+(f>0?h:0)
R-=(f>0?h:0)+C[f]}I=o.innerH-p.top-p.bottom
for(x=0,d=0;d<r;d++){x+=k[d]+(d>0?b:0)
I-=(d>0?b:0)+k[d]}E+=p.left+p.right
x+=p.top+p.bottom
s={}
s.minW=E+(o.w-o.innerW)
s.minH=x+(o.h-o.innerH)
s.contentW=s.minW-o.deltaW
s.contentH=s.minH-o.deltaH
s.minW=Math.min(s.minW,o.maxW)
s.minH=Math.min(s.minH,o.maxH)
s.minW=Math.max(s.minW,o.startMinWidth)
s.minH=Math.max(s.minH,o.startMinHeight)
if(o.autoResize&&(s.minW!==o.minW||s.minH!==o.minH)){s.w=s.minW
s.h=s.minH
e.layoutRect(s)
this.recalc(e)
if(null===e._lastRect){var N=e.parent()
if(N){N._lastRect=null
N.recalc()}}return}if(o.autoResize){s=e.layoutRect(s)
s.contentW=s.minW-o.deltaW
s.contentH=s.minH-o.deltaH}var M
M="start"===t.packV?0:I>0?Math.floor(I/r):0
var P=0
var _=t.flexWidths
if(_)for(f=0;f<_.length;f++)P+=_[f]
else P=n
var O=R/P
for(f=0;f<n;f++)C[f]+=_?_[f]*O:O
m=p.top
for(d=0;d<r;d++){v=p.left
u=k[d]+M
for(f=0;f<n;f++){D=S?d*n+n-1-f:d*n+f
c=a[D]
if(!c)break
g=c.settings
l=c.layoutRect()
i=Math.max(C[f],l.startMinWidth)
l.x=v
l.y=m
A=g.alignH||(y?y[f]||y[0]:null)
"center"===A?l.x=v+i/2-l.w/2:"right"===A?l.x=v+i-l.w:"stretch"===A&&(l.w=i)
A=g.alignV||(w?w[f]||w[0]:null)
"center"===A?l.y=m+u/2-l.h/2:"bottom"===A?l.y=m+u-l.h:"stretch"===A&&(l.h=u)
c.layoutRect(l)
v+=i+h
c.recalc&&c.recalc()}m+=u+b}}})
var xi=Sr.extend({renderHtml:function(){var e=this
e.classes.add("iframe")
e.canFocus=false
return'<iframe id="'+e._id+'" class="'+e.classes+'" tabindex="-1" src="'+(e.settings.url||"javascript:''")+'" frameborder="0"></iframe>'},src:function(e){this.getEl().src=e},html:function(e,t){var r=this,n=this.getEl().contentWindow.document.body
if(n){n.innerHTML=e
t&&t()}else P.setTimeout(function(){r.html(e)})
return this}})
var Ci=Sr.extend({init:function(e){var t=this
t._super(e)
t.classes.add("widget").add("infobox")
t.canFocus=false},severity:function(e){this.classes.remove("error")
this.classes.remove("warning")
this.classes.remove("success")
this.classes.add(e)},help:function(e){this.state.set("help",e)},renderHtml:function(){var e=this,t=e.classPrefix
return'<div id="'+e._id+'" class="'+e.classes+'"><div id="'+e._id+'-body">'+e.encode(e.state.get("text"))+'<button role="button" tabindex="-1"><i class="'+t+"ico "+t+'i-help"></i></button></div></div>'},bindStates:function(){var e=this
e.state.on("change:text",function(t){e.getEl("body").firstChild.data=e.encode(t.value)
e.state.get("rendered")&&e.updateLayoutRect()})
e.state.on("change:help",function(t){e.classes.toggle("has-help",t.value)
e.state.get("rendered")&&e.updateLayoutRect()})
return e._super()}})
var ki=Sr.extend({init:function(e){var t=this
t._super(e)
t.classes.add("widget").add("label")
t.canFocus=false
e.multiline&&t.classes.add("autoscroll")
e.strong&&t.classes.add("strong")},initLayoutRect:function(){var e=this,t=e._super()
if(e.settings.multiline){var r=lt.getSize(e.getEl())
if(r.width>t.maxW){t.minW=t.maxW
e.classes.add("multiline")}e.getEl().style.width=t.minW+"px"
t.startMinH=t.h=t.minH=Math.min(t.maxH,lt.getSize(e.getEl()).height)}return t},repaint:function(){var e=this
e.settings.multiline||(e.getEl().style.lineHeight=e.layoutRect().h+"px")
return e._super()},severity:function(e){this.classes.remove("error")
this.classes.remove("warning")
this.classes.remove("success")
this.classes.add(e)},renderHtml:function(){var e=this
var t,r,n=e.settings.forId
var a=e.settings.html?e.settings.html:e.encode(e.state.get("text"))
if(!n&&(r=e.settings.forName)){t=e.getRoot().find("#"+r)[0]
t&&(n=t._id)}if(n)return'<label id="'+e._id+'" class="'+e.classes+'"'+(n?' for="'+n+'"':"")+">"+a+"</label>"
return'<span id="'+e._id+'" class="'+e.classes+'">'+a+"</span>"},bindStates:function(){var e=this
e.state.on("change:text",function(t){e.innerHtml(e.encode(t.value))
e.state.get("rendered")&&e.updateLayoutRect()})
return e._super()}})
var Bi=$t.extend({Defaults:{role:"toolbar",layout:"flow"},init:function(e){var t=this
t._super(e)
t.classes.add("toolbar")},postRender:function(){var e=this
e.items().each(function(e){e.classes.add("toolbar-item")})
return e._super()}})
var Ti=Bi.extend({Defaults:{role:"menubar",containerCls:"menubar",ariaRoot:true,defaults:{type:"menubutton"}}})
function Ri(e,t){while(e){if(t===e)return true
e=e.parentNode}return false}var Ii=Jr.extend({init:function(e){var t=this
t._renderOpen=true
t._super(e)
e=t.settings
t.classes.add("menubtn")
e.fixedWidth&&t.classes.add("fixed-width")
t.aria("haspopup",true)
t.state.set("menu",e.menu||t.render())},showMenu:function(e){var t=this
var r
if(t.menu&&t.menu.visible()&&false!==e)return t.hideMenu()
if(!t.menu){r=t.state.get("menu")||[]
t.classes.add("opened")
if(r.length)r={type:"menu",animate:true,items:r}
else{r.type=r.type||"menu"
r.animate=true}r.renderTo?t.menu=r.parent(t).show().renderTo():t.menu=C.create(r).parent(t).renderTo()
t.fire("createmenu")
t.menu.reflow()
t.menu.on("cancel",function(e){if(e.control.parent()===t.menu){e.stopPropagation()
t.focus()
t.hideMenu()}})
t.menu.on("select",function(){t.focus()})
t.menu.on("show hide",function(e){"hide"===e.type&&e.control.parent()===t&&t.classes.remove("opened-under")
if(e.control===t.menu){t.activeMenu("show"===e.type)
t.classes.toggle("opened","show"===e.type)}t.aria("expanded","show"===e.type)}).fire("show")}t.menu.show()
t.menu.layoutRect({w:t.layoutRect().w})
t.menu.repaint()
t.menu.moveRel(t.getEl(),t.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"])
var n=t.menu.layoutRect()
var a=t.$el.offset().top+t.layoutRect().h
a>n.y&&a<n.y+n.h&&t.classes.add("opened-under")
t.fire("showmenu")},hideMenu:function(){var e=this
if(e.menu){e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()})
e.menu.hide()}},activeMenu:function(e){this.classes.toggle("active",e)},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix
var n,a=e.settings.icon
var o=e.state.get("text")
var i=""
n=e.settings.image
if(n){a="none"
"string"!==typeof n&&(n=window.getSelection?n[0]:n[1])
n=" style=\"background-image: url('"+n+"')\""}else n=""
if(o){e.classes.add("btn-has-text")
i='<span class="'+r+'txt">'+e.encode(o)+"</span>"}a=e.settings.icon?r+"ico "+r+"i-"+a:""
e.aria("role",e.parent()instanceof Ti?"menuitem":"button")
return'<div id="'+t+'" class="'+e.classes+'" tabindex="-1" aria-labelledby="'+t+'"><button id="'+t+'-open" role="presentation" type="button" tabindex="-1">'+(a?'<i class="'+a+'"'+n+"></i>":"")+i+' <i class="'+r+'caret"></i></button></div>'},postRender:function(){var e=this
e.on("click",function(t){if(t.control===e&&Ri(t.target,e.getEl())){e.focus()
e.showMenu(!t.aria)
t.aria&&e.menu.items().filter(":visible")[0].focus()}})
e.on("mouseenter",function(t){var r=t.control
var n=e.parent()
var a
if(r&&n&&r instanceof Ii&&r.parent()===n){n.items().filter("MenuButton").each(function(e){if(e.hideMenu&&e!==r){e.menu&&e.menu.visible()&&(a=true)
e.hideMenu()}})
if(a){r.focus()
r.showMenu()}}})
return e._super()},bindStates:function(){var e=this
e.state.on("change:menu",function(){e.menu&&e.menu.remove()
e.menu=null})
return e._super()},remove:function(){this._super()
this.menu&&this.menu.remove()}})
var Si=br.extend({Defaults:{defaultType:"menuitem",border:1,layout:"stack",role:"application",bodyRole:"menu",ariaRoot:true},init:function(e){var t=this
e.autohide=true
e.constrainToViewport=true
if("function"===typeof e.items){e.itemsFactory=e.items
e.items=[]}if(e.itemDefaults){var n=e.items
var a=n.length
while(a--)n[a]=r.extend({},e.itemDefaults,n[a])}t._super(e)
t.classes.add("menu")
e.animate&&11!==je.ie&&t.classes.add("animate")},repaint:function(){this.classes.toggle("menu-align",true)
this._super()
this.getEl().style.height=""
this.getEl("body").style.height=""
return this},cancel:function(){var e=this
e.hideAll()
e.fire("select")},load:function(){var e=this
var t,r
function n(){if(e.throbber){e.throbber.hide()
e.throbber=null}}r=e.settings.itemsFactory
if(!r)return
if(!e.throbber){e.throbber=new Cr(e.getEl("body"),true)
if(0===e.items().length){e.throbber.show()
e.fire("loading")}else e.throbber.show(100,function(){e.items().remove()
e.fire("loading")})
e.on("hide close",n)}e.requestTime=t=(new Date).getTime()
e.settings.itemsFactory(function(r){if(0===r.length){e.hide()
return}if(e.requestTime!==t)return
e.getEl().style.width=""
e.getEl("body").style.width=""
n()
e.items().remove()
e.getEl("body").innerHTML=""
e.add(r)
e.renderNew()
e.fire("loaded")})},hideAll:function(){var e=this
this.find("menuitem").exec("hideMenu")
return e._super()},preRender:function(){var e=this
e.items().each(function(t){var r=t.settings
if(r.icon||r.image||r.selectable){e._hasIcons=true
return false}})
e.settings.itemsFactory&&e.on("postrender",function(){e.settings.itemsFactory&&e.load()})
e.on("show hide",function(t){t.control===e&&("show"===t.type?P.setTimeout(function(){e.classes.add("in")},0):e.classes.remove("in"))})
return e._super()}})
var Di=Ii.extend({init:function(e){var t=this
var r,n,a,o
function i(r){for(var o=0;o<r.length;o++){n=r[o].selected||e.value===r[o].value
if(n){a=a||r[o].text
t.state.set("value",r[o].value)
return true}if(r[o].menu&&i(r[o].menu))return true}}t._super(e)
e=t.settings
t._values=r=e.values
if(r){"undefined"!==typeof e.value&&i(r)
if(!n&&r.length>0){a=r[0].text
t.state.set("value",r[0].value)}t.state.set("menu",r)}t.state.set("text",e.text||a)
t.classes.add("listbox")
t.on("select",function(r){var n=r.control
o&&(r.lastControl=o)
e.multiple?n.active(!n.active()):t.value(r.control.value())
o=n})},value:function(e){if(0===arguments.length)return this.state.get("value")
if("undefined"===typeof e)return this
function t(r){return Ae(r,function(r){return r.menu?t(r.menu):r.value===e})}this.settings.values?t(this.settings.values)?this.state.set("value",e):null===e&&this.state.set("value",null):this.state.set("value",e)
return this},bindStates:function(){var e=this
function t(e,t){e instanceof Si&&e.items().each(function(e){e.hasMenus()||e.active(e.value()===t)})}function r(e,t){var n
if(!e)return
for(var a=0;a<e.length;a++){if(e[a].value===t)return e[a]
if(e[a].menu){n=r(e[a].menu,t)
if(n)return n}}}e.on("show",function(r){t(r.control,e.value())})
e.state.on("change:value",function(t){var n=r(e.state.get("menu"),t.value)
n?e.text(n.text):e.text(e.settings.text)})
return e._super()}})
var Ni=function(e,t){var r=e._textStyle
if(r){var n=e.getEl("text")
n.setAttribute("style",r)
if(t){n.style.color=""
n.style.backgroundColor=""}}}
var Mi=Sr.extend({Defaults:{border:0,role:"menuitem"},init:function(e){var t=this
var r
t._super(e)
e=t.settings
t.classes.add("menu-item")
e.menu&&t.classes.add("menu-item-expand")
e.preview&&t.classes.add("menu-item-preview")
r=t.state.get("text")
if("-"===r||"|"===r){t.classes.add("menu-item-sep")
t.aria("role","separator")
t.state.set("text","-")}if(e.selectable){t.aria("role","menuitemcheckbox")
t.classes.add("menu-item-checkbox")
e.icon="selected"}e.preview||e.selectable||t.classes.add("menu-item-normal")
t.on("mousedown",function(e){e.preventDefault()})
e.menu&&!e.ariaHideMenu&&t.aria("haspopup",true)},hasMenus:function(){return!!this.settings.menu},showMenu:function(){var e=this
var t=e.settings
var r
var n=e.parent()
n.items().each(function(t){t!==e&&t.hideMenu()})
if(t.menu){r=e.menu
if(r)r.show()
else{r=t.menu
r.length?r={type:"menu",items:r}:r.type=r.type||"menu"
n.settings.itemDefaults&&(r.itemDefaults=n.settings.itemDefaults)
r=e.menu=C.create(r).parent(e).renderTo()
r.reflow()
r.on("cancel",function(t){t.stopPropagation()
e.focus()
r.hide()})
r.on("show hide",function(e){e.control.items&&e.control.items().each(function(e){e.active(e.settings.selected)})}).fire("show")
r.on("hide",function(t){t.control===r&&e.classes.remove("selected")})
r.submenu=true}r._parentMenu=n
r.classes.add("menu-sub")
var a=r.testMoveRel(e.getEl(),e.isRtl()?["tl-tr","bl-br","tr-tl","br-bl"]:["tr-tl","br-bl","tl-tr","bl-br"])
r.moveRel(e.getEl(),a)
r.rel=a
a="menu-sub-"+a
r.classes.remove(r._lastRel).add(a)
r._lastRel=a
e.classes.add("selected")
e.aria("expanded",true)}},hideMenu:function(){var e=this
if(e.menu){e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()})
e.menu.hide()
e.aria("expanded",false)}return e},renderHtml:function(){var e=this
var t=e._id
var r=e.settings
var n=e.classPrefix
var a=e.state.get("text")
var o=e.settings.icon,i="",u=r.shortcut
var s=e.encode(r.url),l=""
function c(e){var t,r,n={}
n=je.mac?{alt:"&#x2325;",ctrl:"&#x2318;",shift:"&#x21E7;",meta:"&#x2318;"}:{meta:"Ctrl"}
e=e.split("+")
for(t=0;t<e.length;t++){r=n[e[t].toLowerCase()]
r&&(e[t]=r)}return e.join("+")}function f(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function d(e){var t=r.match||""
return t?e.replace(new RegExp(f(t),"gi"),function(e){return"!mce~match["+e+"]mce~match!"}):e}function v(e){return e.replace(new RegExp(f("!mce~match["),"g"),"<b>").replace(new RegExp(f("]mce~match!"),"g"),"</b>")}o&&e.parent().classes.add("menu-has-icons")
r.image&&(i=" style=\"background-image: url('"+r.image+"')\"")
u&&(u=c(u))
o=n+"ico "+n+"i-"+(e.settings.icon||"none")
l="-"!==a?'<i class="'+o+'"'+i+"></i> ":""
a=v(e.encode(d(a)))
s=v(e.encode(d(s)))
return'<div id="'+t+'" class="'+e.classes+'" tabindex="-1">'+l+("-"!==a?'<span id="'+t+'-text" class="'+n+'text">'+a+"</span>":"")+(u?'<div id="'+t+'-shortcut" class="'+n+'menu-shortcut">'+u+"</div>":"")+(r.menu?'<div class="'+n+'caret"></div>':"")+(s?'<div class="'+n+'menu-item-link">'+s+"</div>":"")+"</div>"},postRender:function(){var e=this,t=e.settings
var r=t.textStyle
"function"===typeof r&&(r=r.call(this))
if(r){var n=e.getEl("text")
if(n){n.setAttribute("style",r)
e._textStyle=r}}e.on("mouseenter click",function(r){if(r.control===e)if(t.menu||"click"!==r.type){e.showMenu()
r.aria&&e.menu.focus(true)}else{e.fire("select")
P.requestAnimationFrame(function(){e.parent().hideAll()})}})
e._super()
return e},hover:function(){var e=this
e.parent().items().each(function(e){e.classes.remove("selected")})
e.classes.toggle("selected",true)
return e},active:function(e){Ni(this,e)
"undefined"!==typeof e&&this.aria("checked",e)
return this._super(e)},remove:function(){this._super()
this.menu&&this.menu.remove()}})
var Pi=Xr.extend({Defaults:{classes:"radio",role:"radio"}})
var _i=Sr.extend({renderHtml:function(){var e=this,t=e.classPrefix
e.classes.add("resizehandle")
"both"===e.settings.direction&&e.classes.add("resizehandle-both")
e.canFocus=false
return'<div id="'+e._id+'" class="'+e.classes+'"><i class="'+t+"ico "+t+'i-resize"></i></div>'},postRender:function(){var e=this
e._super()
e.resizeDragHelper=new rr(this._id,{start:function(){e.fire("ResizeStart")},drag:function(t){"both"!==e.settings.direction&&(t.deltaX=0)
e.fire("Resize",t)},stop:function(){e.fire("ResizeEnd")}})},remove:function(){this.resizeDragHelper&&this.resizeDragHelper.destroy()
return this._super()}})
function Oi(e){var t=""
if(e)for(var r=0;r<e.length;r++)t+='<option value="'+e[r]+'">'+e[r]+"</option>"
return t}var Fi=Sr.extend({Defaults:{classes:"selectbox",role:"selectbox",options:[]},init:function(e){var t=this
t._super(e)
t.settings.size&&(t.size=t.settings.size)
t.settings.options&&(t._options=t.settings.options)
t.on("keydown",function(e){var r
if(13===e.keyCode){e.preventDefault()
t.parents().reverse().each(function(e){if(e.toJSON){r=e
return false}})
t.fire("submit",{data:r.toJSON()})}})},options:function(e){if(!arguments.length)return this.state.get("options")
this.state.set("options",e)
return this},renderHtml:function(){var e=this
var t,r=""
t=Oi(e._options)
e.size&&(r=' size = "'+e.size+'"')
return'<select id="'+e._id+'" class="'+e.classes+'"'+r+">"+t+"</select>"},bindStates:function(){var e=this
e.state.on("change:options",function(t){e.getEl().innerHTML=Oi(t.value)})
return e._super()}})
function Li(e,t,r){e<t&&(e=t)
e>r&&(e=r)
return e}function Ui(e,t,r){e.setAttribute("aria-"+t,r)}function Qi(e,t){var r,n,a,o,i,u
if("v"===e.settings.orientation){o="top"
a="height"
n="h"}else{o="left"
a="width"
n="w"}u=e.getEl("handle")
r=(e.layoutRect()[n]||100)-lt.getSize(u)[a]
i=r*((t-e._minValue)/(e._maxValue-e._minValue))+"px"
u.style[o]=i
u.style.height=e.layoutRect().h+"px"
Ui(u,"valuenow",t)
Ui(u,"valuetext",""+e.settings.previewFilter(t))
Ui(u,"valuemin",e._minValue)
Ui(u,"valuemax",e._maxValue)}var zi=Sr.extend({init:function(e){var t=this
e.previewFilter||(e.previewFilter=function(e){return Math.round(100*e)/100})
t._super(e)
t.classes.add("slider")
"v"===e.orientation&&t.classes.add("vertical")
t._minValue=fe(e.minValue)?e.minValue:0
t._maxValue=fe(e.maxValue)?e.maxValue:100
t._initValue=t.state.get("value")},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix
return'<div id="'+t+'" class="'+e.classes+'"><div id="'+t+'-handle" class="'+r+'slider-handle" role="slider" tabindex="-1"></div></div>'},reset:function(){this.value(this._initValue).repaint()},postRender:function(){var e=this
var t,r,n,a,o,i
function u(e,t,r){return(r+e)/(t-e)}function s(e,t,r){return r*(t-e)-e}function l(t,r){function n(n){var a
a=e.value()
a=s(t,r,u(t,r,a)+.05*n)
a=Li(a,t,r)
e.value(a)
e.fire("dragstart",{value:a})
e.fire("drag",{value:a})
e.fire("dragend",{value:a})}e.on("keydown",function(e){switch(e.keyCode){case 37:case 38:n(-1)
break
case 39:case 40:n(1)}})}function c(t,r,u){var s,l,c,f,d
e._dragHelper=new rr(e._id,{handle:e._id+"-handle",start:function(t){s=t[n]
l=parseInt(e.getEl("handle").style[a],10)
c=(e.layoutRect()[i]||100)-lt.getSize(u)[o]
e.fire("dragstart",{value:d})},drag:function(o){var i=o[n]-s
f=Li(l+i,0,c)
u.style[a]=f+"px"
d=t+f/c*(r-t)
e.value(d)
e.tooltip().text(""+e.settings.previewFilter(d)).show().moveRel(u,"bc tc")
e.fire("drag",{value:d})},stop:function(){e.tooltip().hide()
e.fire("dragend",{value:d})}})}t=e._minValue
r=e._maxValue
if("v"===e.settings.orientation){n="screenY"
a="top"
o="height"
i="h"}else{n="screenX"
a="left"
o="width"
i="w"}e._super()
l(t,r)
c(t,r,e.getEl("handle"))},repaint:function(){this._super()
Qi(this,this.value())},bindStates:function(){var e=this
e.state.on("change:value",function(t){Qi(e,t.value)})
return e._super()}})
var ji=Sr.extend({renderHtml:function(){var e=this
e.classes.add("spacer")
e.canFocus=false
return'<div id="'+e._id+'" class="'+e.classes+'"></div>'}})
var Hi=Ii.extend({Defaults:{classes:"widget btn splitbtn",role:"button"},repaint:function(){var e=this
var t=e.getEl()
var r=e.layoutRect()
var n,a
e._super()
n=t.firstChild
a=t.lastChild
ut(n).css({width:r.w-lt.getSize(a).width,height:r.h-2})
ut(a).css({height:r.h-2})
return e},activeMenu:function(e){var t=this
ut(t.getEl().lastChild).toggleClass(t.classPrefix+"active",e)},renderHtml:function(){var e=this
var t=e._id
var r=e.classPrefix
var n
var a=e.state.get("icon")
var o=e.state.get("text")
var i=e.settings
var u,s=""
n=i.image
if(n){a="none"
"string"!==typeof n&&(n=window.getSelection?n[0]:n[1])
n=" style=\"background-image: url('"+n+"')\""}else n=""
a=i.icon?r+"ico "+r+"i-"+a:""
if(o){e.classes.add("btn-has-text")
s='<span class="'+r+'txt">'+e.encode(o)+"</span>"}u="boolean"===typeof i.active?' aria-pressed="'+i.active+'"':""
return'<div id="'+t+'" class="'+e.classes+'" role="button"'+u+' tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">'+(a?'<i class="'+a+'"'+n+"></i>":"")+s+'</button><button type="button" class="'+r+'open" hidefocus="1" tabindex="-1">'+(e._menuBtnText?(a?" ":"")+e._menuBtnText:"")+' <i class="'+r+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick
e.on("click",function(e){var r=e.target
if(e.control===this)while(r){if(e.aria&&"down"!==e.aria.key||"BUTTON"===r.nodeName&&-1===r.className.indexOf("open")){e.stopImmediatePropagation()
t&&t.call(this,e)
return}r=r.parentNode}})
delete e.settings.onclick
return e._super()}})
var Wi=so.extend({Defaults:{containerClass:"stack-layout",controlClass:"stack-layout-item",endClass:"break"},isNative:function(){return true}})
var Vi=ar.extend({Defaults:{layout:"absolute",defaults:{type:"panel"}},activateTab:function(e){var t
if(this.activeTabId){t=this.getEl(this.activeTabId)
ut(t).removeClass(this.classPrefix+"active")
t.setAttribute("aria-selected","false")}this.activeTabId="t"+e
t=this.getEl("t"+e)
t.setAttribute("aria-selected","true")
ut(t).addClass(this.classPrefix+"active")
this.items()[e].show().fire("showtab")
this.reflow()
this.items().each(function(t,r){e!==r&&t.hide()})},renderHtml:function(){var e=this
var t=e._layout
var r=""
var n=e.classPrefix
e.preRender()
t.preRender(e)
e.items().each(function(t,a){var o=e._id+"-t"+a
t.aria("role","tabpanel")
t.aria("labelledby",o)
r+='<div id="'+o+'" class="'+n+'tab" unselectable="on" role="tab" aria-controls="'+t._id+'" aria-selected="false" tabIndex="-1">'+e.encode(t.settings.title)+"</div>"})
return'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1"><div id="'+e._id+'-head" class="'+n+'tabs" role="tablist">'+r+'</div><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this
e._super()
e.settings.activeTab=e.settings.activeTab||0
e.activateTab(e.settings.activeTab)
this.on("click",function(t){var r=t.target.parentNode
if(r&&r.id===e._id+"-head"){var n=r.childNodes.length
while(n--)r.childNodes[n]===t.target&&e.activateTab(n)}})},initLayoutRect:function(){var e=this
var t,r,n
r=lt.getSize(e.getEl("head")).width
r=r<0?0:r
n=0
e.items().each(function(e){r=Math.max(r,e.layoutRect().minW)
n=Math.max(n,e.layoutRect().minH)})
e.items().each(function(e){e.settings.x=0
e.settings.y=0
e.settings.w=r
e.settings.h=n
e.layoutRect({x:0,y:0,w:r,h:n})})
var a=lt.getSize(e.getEl("head")).height
e.settings.minWidth=r
e.settings.minHeight=n+a
t=e._super()
t.deltaH+=a
t.innerH=t.h-t.deltaH
return t}})
var Gi=Sr.extend({init:function(e){var t=this
t._super(e)
t.classes.add("textbox")
if(e.multiline)t.classes.add("multiline")
else{t.on("keydown",function(e){var r
if(13===e.keyCode){e.preventDefault()
t.parents().reverse().each(function(e){if(e.toJSON){r=e
return false}})
t.fire("submit",{data:r.toJSON()})}})
t.on("keyup",function(e){t.state.set("value",e.target.value)})}},repaint:function(){var e=this
var t,r,n,a,o,i=0
t=e.getEl().style
r=e._layoutRect
o=e._lastRepaintRect||{}
var u=document
!e.settings.multiline&&u.all&&(!u.documentMode||u.documentMode<=8)&&(t.lineHeight=r.h-i+"px")
n=e.borderBox
a=n.left+n.right+8
i=n.top+n.bottom+(e.settings.multiline?8:0)
if(r.x!==o.x){t.left=r.x+"px"
o.x=r.x}if(r.y!==o.y){t.top=r.y+"px"
o.y=r.y}if(r.w!==o.w){t.width=r.w-a+"px"
o.w=r.w}if(r.h!==o.h){t.height=r.h-i+"px"
o.h=r.h}e._lastRepaintRect=o
e.fire("repaint",{},false)
return e},renderHtml:function(){var e=this
var t=e.settings
var n,a
n={id:e._id,hidefocus:"1"}
r.each(["rows","spellcheck","maxLength","size","readonly","min","max","step","list","pattern","placeholder","required","multiple"],function(e){n[e]=t[e]})
e.disabled()&&(n.disabled="disabled")
t.subtype&&(n.type=t.subtype)
a=lt.create(t.multiline?"textarea":"input",n)
a.value=e.state.get("value")
a.className=e.classes.toString()
return a.outerHTML},value:function(e){if(arguments.length){this.state.set("value",e)
return this}this.state.get("rendered")&&this.state.set("value",this.getEl().value)
return this.state.get("value")},postRender:function(){var e=this
e.getEl().value=e.state.get("value")
e._super()
e.$el.on("change",function(t){e.state.set("value",t.target.value)
e.fire("change",t)})},bindStates:function(){var e=this
e.state.on("change:value",function(t){e.getEl().value!==t.value&&(e.getEl().value=t.value)})
e.state.on("change:disabled",function(t){e.getEl().disabled=t.value})
return e._super()},remove:function(){this.$el.off()
this._super()}})
var Yi=function(){return{Selector:Tt,Collection:Nt,ReflowQueue:Qt,Control:qt,Factory:C,KeyboardNavigation:Xt,Container:$t,DragHelper:rr,Scrollable:nr,Panel:ar,Movable:pt,Resizable:or,FloatPanel:br,Window:zr,MessageBox:jr,Tooltip:Ir,Widget:Sr,Progress:Dr,Notification:Mr,Layout:Gr,AbsoluteLayout:Yr,Button:Jr,ButtonGroup:Kr,Checkbox:Xr,ComboBox:$r,ColorBox:en,PanelButton:tn,ColorButton:nn,ColorPicker:on,Path:sn,ElementPath:ln,FormItem:cn,Form:fn,FieldSet:dn,FilePicker:oo,FitLayout:io,FlexLayout:uo,FlowLayout:so,FormatControls:wi,GridLayout:Ei,Iframe:xi,InfoBox:Ci,Label:ki,Toolbar:Bi,MenuBar:Ti,MenuButton:Ii,MenuItem:Mi,Throbber:Cr,Menu:Si,ListBox:Di,Radio:Pi,ResizeHandle:_i,SelectBox:Fi,Slider:zi,Spacer:ji,SplitButton:Hi,StackLayout:Wi,TabPanel:Vi,TextBox:Gi,DropZone:un,BrowseButton:qr}}
var Ji=function(e){e.ui?r.each(Yi(),function(t,r){e.ui[r]=t}):e.ui=Yi()}
var qi=function(){r.each(Yi(),function(e,t){C.add(t,e)})}
var Ki={appendTo:Ji,registerToFactory:qi}
Ki.registerToFactory()
Ki.appendTo(window.tinymce?window.tinymce:{})
e.add("modern",function(e){wi.setup(e)
return Vr.get(e)})}()},eet3:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=n(r("q1tI"))
var d=a(r("BAch"))
var v=a(r("r1tT"))
var m=a(r("4PjY"))
var g=a(r("bA33"))
var p=function(e){(0,l.default)(t,e)
function t(){(0,o.default)(this,t)
return(0,u.default)(this,(0,s.default)(t).apply(this,arguments))}(0,i.default)(t,[{key:"instructions",value:function(){return f.default.createElement("p",null,(0,d.default)("Click any image to embed the image in the page."))}},{key:"renderUploadForm",value:function(){if(this.props.withUploadForm)return f.default.createElement(v.default,{fetchFolders:this.props.fetchFolders,upload:this.props.upload,toggleUploadForm:this.props.toggleUploadForm,startUpload:this.props.startUpload,onImageEmbed:this.props.onImageEmbed,usageRightsRequired:this.props.usageRightsRequired,messages:{expand:(0,d.default)("Upload a new image"),expandScreenreader:(0,d.default)("Image Upload Form"),collapse:(0,d.default)("Cancel image upload"),collapseScreenreader:(0,d.default)("Image Upload Form")},showAltTextForm:true})
return null}},{key:"renderFlickrSearchForm",value:function(){return f.default.createElement(g.default,{flickrSearch:this.props.flickrSearch,toggleFlickrForm:this.props.toggleFlickrForm,flickr:this.props.flickr,onImageEmbed:this.props.onImageEmbed})}},{key:"renderImageUploadsList",value:function(){return f.default.createElement(m.default,{images:this.props.images,fetchImages:this.props.fetchImages,onImageEmbed:this.props.onImageEmbed})}},{key:"render",value:function(){return f.default.createElement("div",null,this.instructions(),this.renderFlickrSearchForm(),this.renderUploadForm(),this.renderImageUploadsList())}}])
t.displayName="ImagesPanel"
return t}(f.Component)
p.propTypes={withUploadForm:c.default.bool,upload:v.default.propTypes.upload,images:m.default.propTypes.images,fetchImages:m.default.propTypes.fetchImages,fetchFolders:v.default.propTypes.fetchFolders,startUpload:v.default.propTypes.startUpload,flickr:g.default.propTypes.flickr,flickrSearch:g.default.propTypes.flickrSearch,toggleFlickrForm:g.default.propTypes.toggleFlickrForm,toggleUploadForm:v.default.propTypes.toggleUploadForm,onImageEmbed:m.default.propTypes.onImageEmbed,usageRightsRequired:c.default.bool}
p.defaultProps={withUploadForm:false}
var A=p
t.default=A},f86t:function(e,t,r){"use strict"
var n=r("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("ZJ40"))
var o=r("d0Ab")
var i=(0,a.default)("5.0.0",null,(0,a.changedPackageWarning)("ui-core","ui-tabs"))(o.Tab)
t.default=i},"fE+E":function(e,t){!function(){"use strict"
var e=function(t){var r=t
var n=function(){return r}
var a=function(e){r=e}
var o=function(){return e(n())}
return{get:n,set:a,clone:o}}
var t=tinymce.util.Tools.resolve("tinymce.PluginManager")
var r=function(e){if(/(^|[ ,])powerpaste([, ]|$)/.test(e.settings.plugins)&&t.get("powerpaste")){"undefined"!==typeof window.console&&window.console.log&&window.console.log("PowerPaste is incompatible with Paste plugin! Remove 'paste' from the 'plugins' option.")
return true}return false}
var n={hasProPlugin:r}
var a=function(e,t){return{clipboard:e,quirks:t}}
var o={get:a}
var i=function(e,t,r,n){return e.fire("PastePreProcess",{content:t,internal:r,wordContent:n})}
var u=function(e,t,r,n){return e.fire("PastePostProcess",{node:t,internal:r,wordContent:n})}
var s=function(e,t){return e.fire("PastePlainTextToggle",{state:t})}
var l=function(e,t){return e.fire("paste",{ieFake:t})}
var c={firePastePreProcess:i,firePastePostProcess:u,firePastePlainTextToggle:s,firePaste:l}
var f=function(e){return e.getParam("paste_plaintext_inform",true)}
var d=function(e){return e.getParam("paste_block_drop",false)}
var v=function(e){return e.getParam("paste_data_images",false)}
var m=function(e){return e.getParam("paste_filter_drop",true)}
var g=function(e){return e.getParam("paste_preprocess")}
var p=function(e){return e.getParam("paste_postprocess")}
var A=function(e){return e.getParam("paste_webkit_styles")}
var h=function(e){return e.getParam("paste_remove_styles_if_webkit",true)}
var b=function(e){return e.getParam("paste_merge_formats",true)}
var y=function(e){return e.getParam("smart_paste",true)}
var w=function(e){return e.getParam("paste_as_text",false)}
var E=function(e){return e.getParam("paste_retain_style_properties")}
var x=function(e){var t="-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody"
return e.getParam("paste_word_valid_elements",t)}
var C=function(e){return e.getParam("paste_convert_word_fake_lists",true)}
var k=function(e){return e.getParam("paste_enable_default_filters",true)}
var B={shouldPlainTextInform:f,shouldBlockDrop:d,shouldPasteDataImages:v,shouldFilterDrop:m,getPreProcess:g,getPostProcess:p,getWebkitStyles:A,shouldRemoveWebKitStyles:h,shouldMergeFormats:b,isSmartPasteEnabled:y,isPasteAsTextEnabled:w,getRetainStyleProps:E,getWordValidElements:x,shouldConvertWordFakeLists:C,shouldUseDefaultFilters:k}
var T=function(e,t){return false===t.get()&&B.shouldPlainTextInform(e)}
var R=function(e,t){e.notificationManager.open({text:e.translate(t),type:"info"})}
var I=function(e,t,r){if("text"===t.pasteFormat.get()){t.pasteFormat.set("html")
c.firePastePlainTextToggle(e,false)}else{t.pasteFormat.set("text")
c.firePastePlainTextToggle(e,true)
if(T(e,r)){R(e,"Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.")
r.set(true)}}e.focus()}
var S={togglePlainTextPaste:I}
var D=function(e,t,r){e.addCommand("mceTogglePlainTextPaste",function(){S.togglePlainTextPaste(e,t,r)})
e.addCommand("mceInsertClipboardContent",function(e,r){r.content&&t.pasteHtml(r.content,r.internal)
r.text&&t.pasteText(r.text)})}
var N={register:D}
var M=tinymce.util.Tools.resolve("tinymce.Env")
var P=tinymce.util.Tools.resolve("tinymce.util.Delay")
var _=tinymce.util.Tools.resolve("tinymce.util.Tools")
var O=tinymce.util.Tools.resolve("tinymce.util.VK")
var F="x-tinymce/html"
var L="\x3c!-- "+F+" --\x3e"
var U=function(e){return L+e}
var Q=function(e){return e.replace(L,"")}
var z=function(e){return-1!==e.indexOf(L)}
var j={mark:U,unmark:Q,isMarked:z,internalHtmlMime:function(){return F}}
var H=tinymce.util.Tools.resolve("tinymce.html.Entities")
var W=function(e){return!/<(?:\/?(?!(?:div|p|br|span)>)\w+|(?:(?!(?:span style="white-space:\s?pre;?">)|br\s?\/>))\w+\s[^>]+)>/i.test(e)}
var V=function(e){return e.replace(/\r?\n/g,"<br>")}
var G=function(e,t){var r
var n=[]
var a="<"+e
if("object"===typeof t){for(r in t)t.hasOwnProperty(r)&&n.push(r+'="'+H.encodeAllRaw(t[r])+'"')
n.length&&(a+=" "+n.join(" "))}return a+">"}
var Y=function(e,t,r){var n=e.split(/\n\n/)
var a=G(t,r)
var o="</"+t+">"
var i=_.map(n,function(e){return e.split(/\n/).join("<br />")})
var u=function(e){return a+e+o}
return 1===i.length?i[0]:_.map(i,u).join("")}
var J=function(e,t,r){return t?Y(e,t,r):V(e)}
var q={isPlainText:W,convert:J,toBRs:V,toBlockElements:Y}
var K=tinymce.util.Tools.resolve("tinymce.html.DomParser")
var X=tinymce.util.Tools.resolve("tinymce.html.Node")
var Z=tinymce.util.Tools.resolve("tinymce.html.Schema")
var $=tinymce.util.Tools.resolve("tinymce.html.Serializer")
function ee(e,t){_.each(t,function(t){e=t.constructor===RegExp?e.replace(t,""):e.replace(t[0],t[1])})
return e}function te(e){var t=Z()
var r=K({},t)
var n=""
var a=t.getShortEndedElements()
var o=_.makeMap("script noscript style textarea video audio iframe object"," ")
var i=t.getBlockElements()
function u(e){var t=e.name,r=e
if("br"===t){n+="\n"
return}if("wbr"===t)return
a[t]&&(n+=" ")
if(o[t]){n+=" "
return}3===e.type&&(n+=e.value)
if(!e.shortEnded&&(e=e.firstChild))do{u(e)}while(e=e.next)
if(i[t]&&r.next){n+="\n"
"p"===t&&(n+="\n")}}e=ee(e,[/<!\[[^\]]+\]>/g])
u(r.parse(e))
return n}function re(e){function t(e,t,r){if(!t&&!r)return" "
return" "}e=ee(e,[/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/gi,/<!--StartFragment-->|<!--EndFragment-->/g,[/( ?)<span class="Apple-converted-space">\u00a0<\/span>( ?)/g,t],/<br class="Apple-interchange-newline">/g,/<br>$/i])
return e}function ne(e){var t=0
return function(){return e+t++}}var ae=function(){return-1!==navigator.userAgent.indexOf(" Edge/")}
var oe={filter:ee,innerText:te,trimHtml:re,createIdGenerator:ne,isMsEdge:ae}
function ie(e){return/<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(e)||/class="OutlineElement/.test(e)||/id="?docs\-internal\-guid\-/.test(e)}function ue(e){var t,r
r=[/^[IVXLMCD]{1,2}\.[ \u00a0]/,/^[ivxlmcd]{1,2}\.[ \u00a0]/,/^[a-z]{1,2}[\.\)][ \u00a0]/,/^[A-Z]{1,2}[\.\)][ \u00a0]/,/^[0-9]+\.[ \u00a0]/,/^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/,/^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/]
e=e.replace(/^[\u00a0 ]+/,"")
_.each(r,function(r){if(r.test(e)){t=true
return false}})
return t}function se(e){return/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(e)}function le(e){var t,r,n=1
function a(e){var t=""
if(3===e.type)return e.value
if(e=e.firstChild)do{t+=a(e)}while(e=e.next)
return t}function o(e,t){if(3===e.type&&t.test(e.value)){e.value=e.value.replace(t,"")
return false}if(e=e.firstChild)do{if(!o(e,t))return false}while(e=e.next)
return true}function i(e){if(e._listIgnore){e.remove()
return}if(e=e.firstChild)do{i(e)}while(e=e.next)}function u(e,a,u){var s=e._listLevel||n
if(s!==n)if(s<n)t&&(t=t.parent.parent)
else{r=t
t=null}if(t&&t.name===a)t.append(e)
else{r=r||t
t=new X(a,1)
u>1&&t.attr("start",""+u)
e.wrap(t)}e.name="li"
s>n&&r&&r.lastChild.append(t)
n=s
i(e)
o(e,/^\u00a0+/)
o(e,/^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/)
o(e,/^\u00a0+/)}var s=[]
var l=e.firstChild
while("undefined"!==typeof l&&null!==l){s.push(l)
l=l.walk()
if(null!==l)while("undefined"!==typeof l&&l.parent!==e)l=l.walk()}for(var c=0;c<s.length;c++){e=s[c]
if("p"===e.name&&e.firstChild){var f=a(e)
if(se(f)){u(e,"ul")
continue}if(ue(f)){var d=/([0-9]+)\./.exec(f)
var v=1
d&&(v=parseInt(d[1],10))
u(e,"ol",v)
continue}if(e._listLevel){u(e,"ul",1)
continue}t=null}else{r=t
t=null}}}function ce(e,t,r,n){var a,o={}
var i=e.dom.parseStyle(n)
_.each(i,function(i,u){switch(u){case"mso-list":a=/\w+ \w+([0-9]+)/i.exec(n)
a&&(r._listLevel=parseInt(a[1],10))
if(/Ignore/i.test(i)&&r.firstChild){r._listIgnore=true
r.firstChild._listIgnore=true}break
case"horiz-align":u="text-align"
break
case"vert-align":u="vertical-align"
break
case"font-color":case"mso-foreground":u="color"
break
case"mso-background":case"mso-highlight":u="background"
break
case"font-weight":case"font-style":"normal"!==i&&(o[u]=i)
return
case"mso-element":if(/^(comment|comment-list)$/i.test(i)){r.remove()
return}}if(0===u.indexOf("mso-comment")){r.remove()
return}if(0===u.indexOf("mso-"))return;("all"===B.getRetainStyleProps(e)||t&&t[u])&&(o[u]=i)})
if(/(bold)/i.test(o["font-weight"])){delete o["font-weight"]
r.wrap(new X("b",1))}if(/(italic)/i.test(o["font-style"])){delete o["font-style"]
r.wrap(new X("i",1))}o=e.dom.serializeStyle(o,r.name)
if(o)return o
return null}var fe=function(e,t){var r,n
r=B.getRetainStyleProps(e)
r&&(n=_.makeMap(r.split(/[, ]/)))
t=oe.filter(t,[/<br class="?Apple-interchange-newline"?>/gi,/<b[^>]+id="?docs-internal-[^>]*>/gi,/<!--[\s\S]+?-->/gi,/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi,[/<(\/?)s>/gi,"<$1strike>"],[/&nbsp;/gi," "],[/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi,function(e,t){return t.length>0?t.replace(/./," ").slice(Math.floor(t.length/2)).split("").join(" "):""}]])
var a=B.getWordValidElements(e)
var o=Z({valid_elements:a,valid_children:"-li[p]"})
_.each(o.elements,function(e){if(!e.attributes.class){e.attributes.class={}
e.attributesOrder.push("class")}if(!e.attributes.style){e.attributes.style={}
e.attributesOrder.push("style")}})
var i=K({},o)
i.addAttributeFilter("style",function(t){var r,a=t.length
while(a--){r=t[a]
r.attr("style",ce(e,n,r,r.attr("style")))
"span"===r.name&&r.parent&&!r.attributes.length&&r.unwrap()}})
i.addAttributeFilter("class",function(e){var t,r,n=e.length
while(n--){t=e[n]
r=t.attr("class");/^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(r)&&t.remove()
t.attr("class",null)}})
i.addNodeFilter("del",function(e){var t=e.length
while(t--)e[t].remove()})
i.addNodeFilter("a",function(e){var t,r,n,a=e.length
while(a--){t=e[a]
r=t.attr("href")
n=t.attr("name")
if(r&&-1!==r.indexOf("#_msocom_")){t.remove()
continue}if(r&&0===r.indexOf("file://")){r=r.split("#")[1]
r&&(r="#"+r)}if(r||n){if(n&&!/^_?(?:toc|edn|ftn)/i.test(n)){t.unwrap()
continue}t.attr({href:r,name:n})}else t.unwrap()}})
var u=i.parse(t)
B.shouldConvertWordFakeLists(e)&&le(u)
t=$({validate:e.settings.validate},o).serialize(u)
return t}
var de=function(e,t){return B.shouldUseDefaultFilters(e)?fe(e,t):t}
var ve={preProcess:de,isWordContent:ie}
var me=function(e,t){return{content:e,cancelled:t}}
var ge=function(e,t,r,n){var a=e.dom.create("div",{style:"display:none"},t)
var o=c.firePastePostProcess(e,a,r,n)
return me(o.node.innerHTML,o.isDefaultPrevented())}
var pe=function(e,t,r,n){var a=c.firePastePreProcess(e,t,r,n)
return e.hasEventListeners("PastePostProcess")&&!a.isDefaultPrevented()?ge(e,a.content,r,n):me(a.content,a.isDefaultPrevented())}
var Ae=function(e,t,r){var n=ve.isWordContent(t)
var a=n?ve.preProcess(e,t):t
return pe(e,a,r,n)}
var he={process:Ae}
var be=function(e,t){var r=e.dom.create("body",{},t)
_.each(r.querySelectorAll("meta"),function(e){return e.parentNode.removeChild(e)})
return r.innerHTML}
var ye=function(e,t){e.insertContent(be(e,t),{merge:B.shouldMergeFormats(e),paste:true})
return true}
var we=function(e){return/^https?:\/\/[\w\?\-\/+=.&%@~#]+$/i.test(e)}
var Ee=function(e){return we(e)&&/.(gif|jpe?g|png)$/.test(e)}
var xe=function(e,t,r){e.undoManager.extra(function(){r(e,t)},function(){e.insertContent('<img src="'+t+'">')})
return true}
var Ce=function(e,t,r){e.undoManager.extra(function(){r(e,t)},function(){e.execCommand("mceInsertLink",false,t)})
return true}
var ke=function(e,t,r){return!(false!==e.selection.isCollapsed()||!we(t))&&Ce(e,t,r)}
var Be=function(e,t,r){return!!Ee(t)&&xe(e,t,r)}
var Te=function(e,t){_.each([ke,Be,ye],function(r){return true!==r(e,t,ye)})}
var Re=function(e,t){false===B.isSmartPasteEnabled(e)?ye(e,t):Te(e,t)}
var Ie={isImageUrl:Ee,isAbsoluteUrl:we,insertContent:Re}
var Se=function(e){return function(){return e}}
function De(e){var t=[]
for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
return function(){var r=[]
for(var n=0;n<arguments.length;n++)r[n]=arguments[n]
var a=t.concat(r)
return e.apply(null,a)}}var Ne=Se(false)
var Me=Se(true)
var Pe=Ne
var _e=Me
var Oe=function(){return Fe}
var Fe=function(){var e=function(e){return e.isNone()}
var t=function(e){return e()}
var r=function(e){return e}
var n=function(){}
var a=function(){return null}
var o=function(){return}
var i={fold:function(e,t){return e()},is:Pe,isSome:Pe,isNone:_e,getOr:r,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:a,getOrUndefined:o,or:r,orThunk:t,map:Oe,ap:Oe,each:n,bind:Oe,flatten:Oe,exists:Pe,forall:_e,filter:Oe,equals:e,equals_:e,toArray:function(){return[]},toString:Se("none()")}
Object.freeze&&Object.freeze(i)
return i}()
var Le=function(e){var t=function(){return e}
var r=function(){return o}
var n=function(t){return Le(t(e))}
var a=function(t){return t(e)}
var o={fold:function(t,r){return r(e)},is:function(t){return e===t},isSome:_e,isNone:Pe,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:n,ap:function(t){return t.fold(Oe,function(t){return Le(t(e))})},each:function(t){t(e)},bind:a,flatten:t,exists:a,forall:a,filter:function(t){return t(e)?o:Fe},equals:function(t){return t.is(e)},equals_:function(t,r){return t.fold(Pe,function(t){return r(e,t)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o}
var Ue=function(e){return null===e||void 0===e?Fe:Le(e)}
var Qe={some:Le,none:Oe,from:Ue}
var ze=function(e){if(null===e)return"null"
var t=typeof e
if("object"===t&&Array.prototype.isPrototypeOf(e))return"array"
if("object"===t&&String.prototype.isPrototypeOf(e))return"string"
return t}
var je=function(e){return function(t){return ze(t)===e}}
var He=je("function")
var We=function(e,t){var r=e.length
var n=new Array(r)
for(var a=0;a<r;a++){var o=e[a]
n[a]=t(o,a,e)}return n}
var Ve=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
t(a,r,e)}}
var Ge=function(e,t){var r=[]
for(var n=0,a=e.length;n<a;n++){var o=e[n]
t(o,n,e)&&r.push(o)}return r}
var Ye=Array.prototype.slice
var Je=He(Array.from)?Array.from:function(e){return Ye.call(e)}
var qe=function(e){var t=Qe.none()
var r=[]
var n=function(e){return qe(function(t){a(function(r){t(e(r))})})}
var a=function(e){i()?s(e):r.push(e)}
var o=function(e){t=Qe.some(e)
u(r)
r=[]}
var i=function(){return t.isSome()}
var u=function(e){Ve(e,s)}
var s=function(e){t.each(function(t){setTimeout(function(){e(t)},0)})}
e(o)
return{get:a,map:n,isReady:i}}
var Ke=function(e){return qe(function(t){t(e)})}
var Xe={nu:qe,pure:Ke}
var Ze=function(e){return function(){var t=[]
for(var r=0;r<arguments.length;r++)t[r]=arguments[r]
var n=this
setTimeout(function(){e.apply(n,t)},0)}}
var $e=function(e){var t=function(t){e(Ze(t))}
var r=function(e){return $e(function(r){t(function(t){var n=e(t)
r(n)})})}
var n=function(e){return $e(function(r){t(function(t){e(t).get(r)})})}
var a=function(e){return $e(function(r){t(function(t){e.get(r)})})}
var o=function(){return Xe.nu(t)}
var i=function(){var e=null
return $e(function(t){null===e&&(e=o())
e.get(t)})}
return{map:r,bind:n,anonBind:a,toLazy:o,toCached:i,get:t}}
var et=function(e){return $e(function(t){t(e)})}
var tt={nu:$e,pure:et}
var rt=function(e,t){return t(function(t){var r=[]
var n=0
var a=function(a){return function(o){r[a]=o
n++
n>=e.length&&t(r)}}
0===e.length?t([]):Ve(e,function(e,t){e.get(a(t))})})}
var nt=function(e){return rt(e,tt.nu)}
var at=function(e,t){var r=We(e,t)
return nt(r)}
var ot=function(e,t,r){var n=r||j.isMarked(t)
var a=he.process(e,j.unmark(t),n)
false===a.cancelled&&Ie.insertContent(e,a.content)}
var it=function(e,t){t=e.dom.encode(t).replace(/\r\n/g,"\n")
t=q.convert(t,e.settings.forced_root_block,e.settings.forced_root_block_attrs)
ot(e,t,false)}
var ut=function(e){var t={}
var r="data:text/mce-internal,"
if(e){if(e.getData){var n=e.getData("Text")
n&&n.length>0&&-1===n.indexOf(r)&&(t["text/plain"]=n)}if(e.types)for(var a=0;a<e.types.length;a++){var o=e.types[a]
try{t[o]=e.getData(o)}catch(e){t[o]=""}}}return t}
var st=function(e,t){var r=ut(t.clipboardData||e.getDoc().dataTransfer)
return oe.isMsEdge()?_.extend(r,{"text/html":""}):r}
var lt=function(e,t){return t in e&&e[t].length>0}
var ct=function(e){return lt(e,"text/html")||lt(e,"text/plain")}
var ft=function(e){var t
t=e.indexOf(",")
if(-1!==t)return e.substr(t+1)
return null}
var dt=function(e,t){return!e.images_dataimg_filter||e.images_dataimg_filter(t)}
var vt=function(e,t){var r=t.match(/([\s\S]+?)\.(?:jpeg|jpg|png|gif)$/i)
return r?e.dom.encode(r[1]):null}
var mt=oe.createIdGenerator("mceclip")
var gt=function(e,t){var r=ft(t.uri)
var n=mt()
var a=e.settings.images_reuse_filename&&t.blob.name?vt(e,t.blob.name):n
var o=new Image
o.src=t.uri
if(dt(e.settings,o)){var i=e.editorUpload.blobCache
var u=void 0,s=void 0
s=i.findFirst(function(e){return e.base64()===r})
if(s)u=s
else{u=i.create(n,t.blob,r,a)
i.add(u)}ot(e,'<img src="'+u.blobUri()+'">',false)}else ot(e,'<img src="'+t.uri+'">',false)}
var pt=function(e){return"paste"===e.type}
var At=function(e){return at(e,function(e){return tt.nu(function(t){var r=e.getAsFile?e.getAsFile():e
var n=new window.FileReader
n.onload=function(){t({blob:r,uri:n.result})}
n.readAsDataURL(r)})})}
var ht=function(e){var t=e.items?We(Je(e.items),function(e){return e.getAsFile()}):[]
var r=e.files?Je(e.files):[]
var n=Ge(t.length>0?t:r,function(e){return/^image\/(jpeg|png|gif|bmp)$/.test(e.type)})
return n}
var bt=function(e,t,r){var n=pt(t)?t.clipboardData:t.dataTransfer
if(e.settings.paste_data_images&&n){var a=ht(n)
if(a.length>0){t.preventDefault()
At(a).get(function(t){r&&e.selection.setRng(r)
Ve(t,function(t){gt(e,t)})})
return true}}return false}
var yt=function(e){var t=e.clipboardData
return-1!==navigator.userAgent.indexOf("Android")&&t&&t.items&&0===t.items.length}
var wt=function(e){return O.metaKeyPressed(e)&&86===e.keyCode||e.shiftKey&&45===e.keyCode}
var Et=function(e,t,r){var n=0
var a
e.on("keydown",function(r){function o(e){wt(e)&&!e.isDefaultPrevented()&&t.remove()}if(wt(r)&&!r.isDefaultPrevented()){a=r.shiftKey&&86===r.keyCode
if(a&&M.webkit&&-1!==navigator.userAgent.indexOf("Version/"))return
r.stopImmediatePropagation()
n=(new Date).getTime()
if(M.ie&&a){r.preventDefault()
c.firePaste(e,true)
return}t.remove()
t.create()
e.once("keyup",o)
e.once("paste",function(){e.off("keyup",o)})}})
function o(r,n,a,o){var i,u
if(lt(r,"text/html"))i=r["text/html"]
else{i=t.getHtml()
o=o||j.isMarked(i)
t.isDefaultContent(i)&&(a=true)}i=oe.trimHtml(i)
t.remove()
u=false===o&&q.isPlainText(i)
i.length&&!u||(a=true)
a&&(i=lt(r,"text/plain")&&u?r["text/plain"]:oe.innerText(i))
if(t.isDefaultContent(i)){n||e.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.")
return}a?it(e,i):ot(e,i,o)}var i=function(){return t.getLastRng()||e.selection.getRng()}
e.on("paste",function(u){var s=(new Date).getTime()
var l=st(e,u)
var c=(new Date).getTime()-s
var f=(new Date).getTime()-n-c<1e3
var d="text"===r.get()||a
var v=lt(l,j.internalHtmlMime())
a=false
if(u.isDefaultPrevented()||yt(u)){t.remove()
return}if(!ct(l)&&bt(e,u,i())){t.remove()
return}f||u.preventDefault()
if(M.ie&&(!f||u.ieFake)&&!lt(l,"text/html")){t.create()
e.dom.bind(t.getEl(),"paste",function(e){e.stopPropagation()})
e.getDoc().execCommand("Paste",false,null)
l["text/html"]=t.getHtml()}if(lt(l,"text/html")){u.preventDefault()
v||(v=j.isMarked(l["text/html"]))
o(l,f,d,v)}else P.setEditorTimeout(e,function(){o(l,f,d,v)},0)})}
var xt=function(e,t,r){Et(e,t,r)
var n
e.parser.addNodeFilter("img",function(t,r,a){var o=function(e){return e.data&&true===e.data.paste}
var i=function(e){e.attr("data-mce-object")||n===M.transparentSrc||e.remove()}
var u=function(e){return 0===e.indexOf("webkit-fake-url")}
var s=function(e){return 0===e.indexOf("data:")}
if(!e.settings.paste_data_images&&o(a)){var l=t.length
while(l--){n=t[l].attributes.map.src
if(!n)continue
u(n)?i(t[l]):!e.settings.allow_html_data_urls&&s(n)&&i(t[l])}}})}
var Ct=function(e){return M.ie&&e.inline?document.body:e.getBody()}
var kt=function(e){return Ct(e)!==e.getBody()}
var Bt=function(e,t,r){kt(e)&&e.dom.bind(t,"paste keyup",function(t){Pt(e,r)||e.fire("paste")})}
var Tt=function(e,t,r){var n=e.dom,a=e.getBody()
var o
t.set(e.selection.getRng())
o=e.dom.add(Ct(e),"div",{id:"mcepastebin",class:"mce-pastebin",contentEditable:true,"data-mce-bogus":"all",style:"position: fixed; top: 50%; width: 10px; height: 10px; overflow: hidden; opacity: 0"},r);(M.ie||M.gecko)&&n.setStyle(o,"left","rtl"===n.getStyle(a,"direction",true)?65535:-65535)
n.bind(o,"beforedeactivate focusin focusout",function(e){e.stopPropagation()})
Bt(e,o,r)
o.focus()
e.selection.select(o,true)}
var Rt=function(e,t){if(It(e)){var r=void 0
var n=t.get()
while(r=e.dom.get("mcepastebin")){e.dom.remove(r)
e.dom.unbind(r)}n&&e.selection.setRng(n)}t.set(null)}
var It=function(e){return e.dom.get("mcepastebin")}
var St=function(e){var t,r,n,a,o
var i=function(t,r){t.appendChild(r)
e.dom.remove(r,true)}
r=_.grep(Ct(e).childNodes,function(e){return"mcepastebin"===e.id})
t=r.shift()
_.each(r,function(e){i(t,e)})
a=e.dom.select("div[id=mcepastebin]",t)
for(n=a.length-1;n>=0;n--){o=e.dom.create("div")
t.insertBefore(o,a[n])
i(o,a[n])}return t?t.innerHTML:""}
var Dt=function(e){return e.get()}
var Nt=function(e,t){return t===e}
var Mt=function(e){return e&&"mcepastebin"===e.id}
var Pt=function(e,t){var r=It(e)
return Mt(r)&&Nt(t,r.innerHTML)}
var _t=function(t){var r=e(null)
var n="%MCEPASTEBIN%"
return{create:function(){return Tt(t,r,n)},remove:function(){return Rt(t,r)},getEl:function(){return It(t)},getHtml:function(){return St(t)},getLastRng:function(){return Dt(r)},isDefault:function(){return Pt(t,n)},isDefaultContent:function(e){return Nt(n,e)}}}
var Ot=function(e,t){var r=_t(e)
e.on("preInit",function(){return xt(e,r,t)})
return{pasteFormat:t,pasteHtml:function(t,r){return ot(e,t,r)},pasteText:function(t){return it(e,t)},pasteImageData:function(t,r){return bt(e,t,r)},getDataTransferItems:ut,hasHtmlOrText:ct,hasContentType:lt}}
var Ft=function(){}
var Lt=function(e){return false===M.iOS&&void 0!==e&&"function"===typeof e.setData&&true!==oe.isMsEdge()}
var Ut=function(e,t,r){if(!Lt(e))return false
try{e.clearData()
e.setData("text/html",t)
e.setData("text/plain",r)
e.setData(j.internalHtmlMime(),t)
return true}catch(e){return false}}
var Qt=function(e,t,r,n){if(Ut(e.clipboardData,t.html,t.text)){e.preventDefault()
n()}else r(t.html,n)}
var zt=function(e){return function(t,r){var n=j.mark(t)
var a=e.dom.create("div",{contenteditable:"false","data-mce-bogus":"all"})
var o=e.dom.create("div",{contenteditable:"true"},n)
e.dom.setStyles(a,{position:"fixed",top:"0",left:"-3000px",width:"1000px",overflow:"hidden"})
a.appendChild(o)
e.dom.add(e.getBody(),a)
var i=e.selection.getRng()
o.focus()
var u=e.dom.createRng()
u.selectNodeContents(o)
e.selection.setRng(u)
setTimeout(function(){e.selection.setRng(i)
a.parentNode.removeChild(a)
r()},0)}}
var jt=function(e){return{html:e.selection.getContent({contextual:true}),text:e.selection.getContent({format:"text"})}}
var Ht=function(e){return!!e.dom.getParent(e.selection.getStart(),"td[data-mce-selected],th[data-mce-selected]",e.getBody())}
var Wt=function(e){return!e.selection.isCollapsed()||Ht(e)}
var Vt=function(e){return function(t){Wt(e)&&Qt(t,jt(e),zt(e),function(){setTimeout(function(){e.execCommand("Delete")},0)})}}
var Gt=function(e){return function(t){Wt(e)&&Qt(t,jt(e),zt(e),Ft)}}
var Yt=function(e){e.on("cut",Vt(e))
e.on("copy",Gt(e))}
var Jt={register:Yt}
var qt=tinymce.util.Tools.resolve("tinymce.dom.RangeUtils")
var Kt=function(e,t){return qt.getCaretRangeFromPoint(t.clientX,t.clientY,e.getDoc())}
var Xt=function(e){var t=e["text/plain"]
return!!t&&0===t.indexOf("file://")}
var Zt=function(e,t){e.focus()
e.selection.setRng(t)}
var $t=function(e,t,r){B.shouldBlockDrop(e)&&e.on("dragend dragover draggesture dragdrop drop drag",function(e){e.preventDefault()
e.stopPropagation()})
B.shouldPasteDataImages(e)||e.on("drop",function(e){var t=e.dataTransfer
t&&t.files&&t.files.length>0&&e.preventDefault()})
e.on("drop",function(n){var a,o
o=Kt(e,n)
if(n.isDefaultPrevented()||r.get())return
a=t.getDataTransferItems(n.dataTransfer)
var i=t.hasContentType(a,j.internalHtmlMime())
if((!t.hasHtmlOrText(a)||Xt(a))&&t.pasteImageData(n,o))return
if(o&&B.shouldFilterDrop(e)){var u=a["mce-internal"]||a["text/html"]||a["text/plain"]
if(u){n.preventDefault()
P.setEditorTimeout(e,function(){e.undoManager.transact(function(){a["mce-internal"]&&e.execCommand("Delete")
Zt(e,o)
u=oe.trimHtml(u)
a["text/html"]?t.pasteHtml(u,i):t.pasteText(u)})})}}})
e.on("dragstart",function(e){r.set(true)})
e.on("dragover dragend",function(t){if(B.shouldPasteDataImages(e)&&false===r.get()){t.preventDefault()
Zt(e,Kt(e,t))}"dragend"===t.type&&r.set(false)})}
var er={setup:$t}
var tr=function(e){var t=e.plugins.paste
var r=B.getPreProcess(e)
r&&e.on("PastePreProcess",function(e){r.call(t,t,e)})
var n=B.getPostProcess(e)
n&&e.on("PastePostProcess",function(e){n.call(t,t,e)})}
var rr={setup:tr}
function nr(e,t){e.on("PastePreProcess",function(r){r.content=t(e,r.content,r.internal,r.wordContent)})}function ar(e,t){e.on("PastePostProcess",function(r){t(e,r.node)})}function or(e,t){if(!ve.isWordContent(t))return t
var r=[]
_.each(e.schema.getBlockElements(),function(e,t){r.push(t)})
var n=new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?("+r.join("|")+")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*","g")
t=oe.filter(t,[[n,"$1"]])
t=oe.filter(t,[[/<br><br>/g,"<BR><BR>"],[/<br>/g," "],[/<BR><BR>/g,"<br>"]])
return t}function ir(e,t,r,n){if(n||r)return t
var a=B.getWebkitStyles(e)
var o
if(false===B.shouldRemoveWebKitStyles(e)||"all"===a)return t
a&&(o=a.split(/[, ]/))
if(o){var i=e.dom,u=e.selection.getNode()
t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,function(e,t,r,n){var a=i.parseStyle(i.decode(r))
var s={}
if("none"===o)return t+n
for(var l=0;l<o.length;l++){var c=a[o[l]],f=i.getStyle(u,o[l],true)
if(/color/.test(o[l])){c=i.toHex(c)
f=i.toHex(f)}f!==c&&(s[o[l]]=c)}s=i.serializeStyle(s,"span")
if(s)return t+' style="'+s+'"'+n
return t+n})}else t=t.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi,"$1$3")
t=t.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi,function(e,t,r,n){return t+' style="'+r+'"'+n})
return t}function ur(e,t){e.$("a",t).find("font,u").each(function(t,r){e.dom.remove(r,true)})}var sr=function(e){M.webkit&&nr(e,ir)
if(M.ie){nr(e,or)
ar(e,ur)}}
var lr={setup:sr}
var cr=function(e,t,r){var n=r.control
n.active("text"===t.pasteFormat.get())
e.on("PastePlainTextToggle",function(e){n.active(e.state)})}
var fr=function(e,t){var r=De(cr,e,t)
e.addButton("pastetext",{active:false,icon:"pastetext",tooltip:"Paste as text",cmd:"mceTogglePlainTextPaste",onPostRender:r})
e.addMenuItem("pastetext",{text:"Paste as text",selectable:true,active:t.pasteFormat,cmd:"mceTogglePlainTextPaste",onPostRender:r})}
var dr={register:fr}
t.add("paste",function(t){if(false===n.hasProPlugin(t)){var r=e(false)
var a=e(false)
var i=e(B.isPasteAsTextEnabled(t)?"text":"html")
var u=Ot(t,i)
var s=lr.setup(t)
dr.register(t,u)
N.register(t,u,r)
rr.setup(t)
Jt.register(t)
er.setup(t,u,a)
return o.get(u,s)}})}()},fYVe:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=n(r("q1tI"))
var d=a(r("q3EI"))
var v=f.default.createElement("path",{d:"M1807.059 1637.706c0 31.172-25.412 56.47-56.47 56.47H169.411c-31.06 0-56.47-25.298-56.47-56.47V225.94h590.907L854.4 451.824H225.882v112.94H1807.06v1072.942zM990.269 451.824L764.385 113H0v1524.706c0 93.402 76.01 169.412 169.412 169.412h1581.176c93.403 0 169.412-76.01 169.412-169.412V451.824H990.268z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){(0,c.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(d.default,Object.assign({},this.props,{name:"IconFolder",viewBox:"0 0 1920 1920",bidirectional:true}),v)}}])
t.displayName="IconFolder"
return t}(f.Component)
t.default=m
m.glyphName="folder"
m.variant="Line"
m.propTypes=(0,o.default)({},d.default.propTypes)},gz2T:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("a1gu"))
var u=a(r("Nsbk"))
var s=a(r("W8MJ"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=a(r("q1tI"))
var d=a(r("i8i4"))
var v=a(r("koRW"))
var m=a(r("ddib"))
var g=n(r("54TC"))
var p=a(r("GrEC"))
var A=a(r("ZyLR"))
var h=a(r("hSMc"))
var b=new WeakMap
var y=function(e){(0,l.default)(t,e);(0,s.default)(t,null,[{key:"getByEditor",value:function(e){return b.get(e)}}])
function t(e){var r;(0,o.default)(this,t)
r=(0,i.default)(this,(0,u.default)(t).call(this,e))
r.handleTextareaChange=function(){r.isHidden()&&r.setCode(r.textareaValue())}
r.get_code=r.getCode
r.set_code=r.setCode
r.insert_code=r.insertCode
r.indicator=false
return r}(0,s.default)(t,[{key:"getCode",value:function(){return this.isHidden()?this.textareaValue():this.mceInstance().getContent()}},{key:"setCode",value:function(e){this.mceInstance().setContent(e)}},{key:"indicateEditor",value:function(e){var t=this.mceInstance()
this.indicator?this.indicator(t,e):this.isHidden()||(0,A.default)((0,p.default)(t,e))}},{key:"contentInserted",value:function(e){this.indicateEditor(e)
this.checkImageLoadError(e)}},{key:"checkImageLoadError",value:function(e){var t=this
if(!e||"IMG"!==e.tagName)return
if(!e.complete){e.onload=function(){return t.checkImageLoadError(e)}
return}setTimeout(function(){if(0===e.naturalWidth){e.style.border="1px solid #000"
e.style.padding="2px"}},0)}},{key:"insertCode",value:function(e){var t=this.mceInstance()
var r=g.insertContent(t,e)
this.contentInserted(r)}},{key:"insertImage",value:function(e){var t=this
var r=this.mceInstance()
var n=g.insertImage(r,e)
if(n&&n.complete)this.contentInserted(n)
else if(n){n.onload=function(){return t.contentInserted(n)}
n.onerror=function(){return t.checkImageLoadError(n)}}}},{key:"insertLink",value:function(e){var t=this.mceInstance()
var r=g.insertLink(t,e)
this.contentInserted(r)}},{key:"existingContentToLink",value:function(){var e=this.mceInstance()
return g.existingContentToLink(e)}},{key:"existingContentToLinkIsImg",value:function(){var e=this.mceInstance()
return g.existingContentToLinkIsImg(e)}},{key:"mceInstance",value:function(){var e=this
var t=this.props.tinymce.editors||[]
return t.filter(function(t){return t.id===e.props.textareaId})[0]}},{key:"onTinyMCEInstance",value:function(e){if("mceRemoveEditor"==e){var t=this.mceInstance()
t&&t.execCommand("mceNewDocument")}this.props.tinymce.execCommand(e,false,this.props.textareaId)}},{key:"destroy",value:function(){this._destroyCalled=true
this.onTinyMCEInstance("mceRemoveEditor")
this.unhandleTextareaChange()
this.props.handleUnmount&&this.props.handleUnmount()}},{key:"onRemove",value:function(){d.default.unmountComponentAtNode(d.default.findDOMNode(this.refs.rce))
h.default.detachEditor(this)
this.props.onRemove&&this.props.onRemove(this)}},{key:"getTextarea",value:function(){return document.getElementById(this.props.textareaId)}},{key:"textareaValue",value:function(){return this.getTextarea().value}},{key:"toggle",value:function(){this.isHidden()&&this.setCode(this.textareaValue())
this.onTinyMCEInstance("mceToggleEditor")}},{key:"focus",value:function(){this.onTinyMCEInstance("mceFocus")}},{key:"is_dirty",value:function(){var e=this.isHidden()?this.textareaValue():this.mceInstance().getContent()
return e!==this.cleanInitialContent()}},{key:"cleanInitialContent",value:function(){if(!this._cleanInitialContent){var e=window.document.createElement("div")
e.innerHTML=this.props.defaultContent
var t=this.mceInstance().serializer
this._cleanInitialContent=t.serialize(e,{getInner:true})}return this._cleanInitialContent}},{key:"isHidden",value:function(){return this.mceInstance().isHidden()}},{key:"onFocus",value:function(){h.default.focusEditor(this)
this.props.onFocus&&this.props.onFocus(this)}},{key:"call",value:function(e){if("exists?"===e)return true
for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return this[e].apply(this,r)}},{key:"annotateEditor",value:function(e,t){t.rceWrapper=this}},{key:"accessibilizeEditor",value:function(e,t){var r=new m.default(t,document)
r.addLabels()
r.accessibilizeMenubar()
r.removeStatusbarFromTabindex()}},{key:"componentWillUnmount",value:function(){this._destroyCalled||this.destroy()}},{key:"wrapOptions",value:function(){var e=this
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var r=t.setup
t.setup=function(t){b.set(t,e)
"function"===typeof r&&r(t)}
return t}},{key:"unhandleTextareaChange",value:function(){this._textareaEl&&this._textareaEl.removeEventListener("change",this.handleTextareaChange)}},{key:"registerTextareaChange",value:function(){var e=this.getTextarea()
if(this._textareaEl!==e){this.unhandleTextareaChange()
e.addEventListener("change",this.handleTextareaChange)
this._textareaEl=e}}},{key:"componentDidMount",value:function(){this.registerTextareaChange()}},{key:"componentDidUpdate",value:function(){this.registerTextareaChange()}},{key:"render",value:function(){return f.default.createElement(v.default,{ref:"rce",id:this.props.textareaId,tinymce:this.props.tinymce,className:this.props.textareaClassName,onPreInit:this.annotateEditor.bind(this),onInit:this.accessibilizeEditor.bind(this),onClick:this.onFocus.bind(this),onKeypress:this.onFocus.bind(this),onActivate:this.onFocus.bind(this),onRemove:this.onRemove.bind(this),content:this.props.defaultContent,config:this.wrapOptions(this.props.editorOptions)})}}])
t.displayName="RCEWrapper"
return t}(f.default.Component)
t.default=y
y.propTypes={defaultContent:c.default.string,language:c.default.string,tinymce:c.default.object,textareaId:c.default.string,textareaClassName:c.default.string,editorOptions:c.default.object,onFocus:c.default.func,onRemove:c.default.func,handleUnmount:c.default.func}},hIra:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=n(r("q1tI"))
var d=a(r("q3EI"))
var v=f.default.createElement("path",{d:"M994.034 1226.26c-18.796 27.296-49.269 27.3-68.067 0L574.893 716.424C556.096 689.128 567.713 667 600.852 667h718.297c33.133 0 44.757 22.125 25.959 49.424L994.034 1226.26z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){(0,c.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(d.default,Object.assign({},this.props,{name:"IconMiniArrowDown",viewBox:"0 0 1920 1920"}),v)}}])
t.displayName="IconMiniArrowDown"
return t}(f.Component)
t.default=m
m.glyphName="mini-arrow-down"
m.variant="Line"
m.propTypes=(0,o.default)({},d.default.propTypes)},hSMc:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var n=null
var a
var o={activeEditor:function(){return n},focusEditor:function(e){n=e},detachEditor:function(e){e===n&&(n=null)},getEditor:function(){return n},renderEditor:function(e){a()
null===n&&(n=e)},editorRendered:new Promise(function(e){a=e}),existingContentToLink:function(){if(n)return n.existingContentToLink()
return false},existingContentToLinkIsImg:function(){if(n)return n.existingContentToLinkIsImg()
return false},insertLink:function(e){if(n){var t=n.props.tinymce.get(n.props.textareaId),r=t.selection
e.selectionDetails={node:r.getNode(),range:r.getRng()}
n.insertLink(e)}else console.warn("clicked sidebar link without a focused editor")},insertImage:function(e){n?n.insertImage(e):console.warn("clicked sidebar image without a focused editor")},embedImage:function(e){o.existingContentToLink()&&!o.existingContentToLinkIsImg()?o.insertLink({title:e.display_name,href:e.href,embed:{type:"image"}}):o.insertImage(e)}}
var i=o
t.default=i},jkBh:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("lSNA"))
var o=n(r("MVZn"))
var i=r("OF0b")
var u=r("ANjH")
function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case i.START_FILE_UPLOAD:return true
case i.FAIL_FILE_UPLOAD:case i.COMPLETE_FILE_UPLOAD:case i.QUOTA_EXCEEDED_UPLOAD:return false
default:return e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case i.COMPLETE_FILE_UPLOAD:return{}
case i.QUOTA_EXCEEDED_UPLOAD:return(0,o.default)({},e,{type:t.type})
default:return e}}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case i.COMPLETE_FILE_UPLOAD:return false
case i.TOGGLE_UPLOAD_FORM:return!e
default:return e}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case i.RECEIVE_FOLDER:return(0,o.default)({},e,(0,a.default)({},t.id,{id:t.id,name:t.name,parentId:t.parentId}))
case i.FAIL_FOLDERS_LOAD:default:return e}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case i.RECEIVE_FOLDER:return null===t.parentId?t.id:e
default:return e}}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case i.PROCESSED_FOLDER_BATCH:var r=function(){var e=t.folders
var r={}
for(var n in e){var a=e[n]
r[a.id]=r[a.id]||[]
if(a.parentId){r[a.parentId]=r[a.parentId]||[]
r[a.parentId].push(a.id)}}for(var o in r){var i=r[o]
i.sort(function(t,r){return e[t].name.localeCompare(e[r].name)})}return{v:r}}()
if("object"===typeof r)return r.v
default:return e}}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case i.START_LOADING:return true
case i.STOP_LOADING:case i.FAIL_FOLDERS_LOAD:return false
default:return e}}var g=(0,u.combineReducers)({uploading:s,formExpanded:c,folders:f,rootFolderId:d,folderTree:v,error:l,loadingFolders:m})
t.default=g},jwaa:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lSNA"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=a(r("17x9"))
var d=n(r("q1tI"))
var v=a(r("d0Ab"))
var m=a(r("CcCu"))
var g=a(r("f86t"))
var p=a(r("qB+r"))
var A=a(r("qNDO"))
var h=a(r("sLj6"))
var b=a(r("eet3"))
var y=a(r("BAch"))
var w=a(r("r1tT"))
var E=function(e){(0,c.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,u.default)(t,[{key:"disableFilesPanel",value:function(){return 0===Object.keys(this.props.folders).length&&0===Object.keys(this.props.files).length}},{key:"render",value:function(){if(this.props.hidden)return d.default.createElement("div",{style:{display:"none"}})
var e=(0,y.default)({default:"Links",description:"Title of Sidebar tab containing links to course pages."})
var t=(0,y.default)({default:"Files",description:"Title of Sidebar tab containing uploaded files."})
var r=(0,y.default)({default:"Images",description:"Title of Sidebar tab containing uploaded images and image services."})
var n=[d.default.createElement(m.default,{title:e,key:"linksPanel"},d.default.createElement(A.default,{selectedIndex:this.props.selectedAccordionIndex,onChange:this.props.onChangeAccordion,fetchInitialPage:this.props.fetchInitialPage,fetchNextPage:this.props.fetchNextPage,contextType:this.props.contextType,contextId:this.props.contextId,collections:this.props.collections,onLinkClick:this.props.onLinkClick,toggleNewPageForm:this.props.toggleNewPageForm,newPageLinkExpanded:this.props.newPageLinkExpanded,canCreatePages:this.props.session.canCreatePages})),!this.props.filesTabDisabled&&d.default.createElement(m.default,{title:t,key:"filesPanel",disabled:this.disableFilesPanel()},d.default.createElement(h.default,{withUploadForm:this.props.canUploadFiles,files:this.props.files,folders:this.props.folders,fetchFolders:this.props.fetchFolders,rootFolderId:this.props.rootFolderId,startUpload:this.props.startUpload.bind(null,"files"),onLinkClick:this.props.onLinkClick,toggleFolder:this.props.toggleFolder,upload:this.props.upload,toggleUploadForm:this.props.toggleUploadForm,canUploadFiles:this.props.session.canUploadFiles,usageRightsRequired:this.props.session.usageRightsRequired})),d.default.createElement(m.default,{id:"ImagesSidebarPanel",key:"imagesPanel",title:r},d.default.createElement(b.default,{withUploadForm:this.props.canUploadFiles,upload:this.props.upload,images:this.props.images,startUpload:this.props.startUpload.bind(null,"images"),fetchFolders:this.props.fetchFolders,fetchImages:this.props.fetchImages,flickr:this.props.flickr,flickrSearch:this.props.flickrSearch,toggleUploadForm:this.props.toggleUploadForm,toggleFlickrForm:this.props.toggleFlickrForm,onImageEmbed:this.props.onImageEmbed,usageRightsRequired:this.props.session.usageRightsRequired}))].filter(Boolean)
return d.default.createElement(p.default,{theme:(0,o.default)({},g.default.theme,{fontSize:"0.8125rem"})},d.default.createElement(v.default,{selectedIndex:this.props.selectedTabIndex,onChange:this.props.onChangeTab,focus:true},n))}}])
t.displayName="Sidebar"
return t}(d.Component)
E.propTypes={hidden:f.default.bool,selectedTabIndex:f.default.number,onChangeTab:f.default.func,selectedAccordionIndex:f.default.string,onChangeAccordion:f.default.func,contextType:f.default.string.isRequired,contextId:f.default.string.isRequired,collections:f.default.object.isRequired,fetchInitialPage:f.default.func,fetchNextPage:f.default.func,onLinkClick:f.default.func,onImageEmbed:f.default.func,toggleFolder:h.default.propTypes.toggleFolder,files:h.default.propTypes.files,folders:h.default.propTypes.folders,rootFolderId:h.default.propTypes.rootFolderId,images:b.default.propTypes.images,flickr:b.default.propTypes.flickr,fetchImages:b.default.propTypes.fetchImages,fetchFolders:b.default.propTypes.fetchFolders,flickrSearch:b.default.propTypes.flickrSearch,canUploadFiles:b.default.propTypes.withUploadForm,filesTabDisabled:f.default.bool,toggleFlickrForm:b.default.propTypes.toggleFlickrForm,upload:w.default.propTypes.upload,startUpload:w.default.propTypes.startUpload,toggleUploadForm:w.default.propTypes.toggleUploadForm,session:f.default.shape({canUploadFiles:f.default.bool,usageRightsRequired:f.default.bool,useHighContrast:f.default.bool,canCreatePages:f.default.bool}),toggleNewPageForm:A.default.propTypes.toggleNewPageForm,newPageLinkExpanded:f.default.bool}
E.defaultProps={hidden:false,selectedTabIndex:0,selectedAccordionIndex:"",filesTabDisabled:false,canUploadFiles:false,files:{},folders:{}}
var x=E
t.default=x},k3wK:function(e,t,r){"use strict"
function n(e){if(void 0!==e){var t=e
"string"===typeof e&&(t=e.split(",").map(function(e){return e.replace(/\s/g,"")}))
return t}return e}var a=["instructure_embed"]
function o(e){if(void 0!==e){var t={}
Object.keys(e).forEach(function(r){e.hasOwnProperty(r)&&-1==a.indexOf(r)&&(t[r]=e[r])})
return t}return e}function i(e){var t=Object.assign({},e)
t.plugins=n(e.plugins)
t.external_plugins=o(e.external_plugins)
t.toolbar=e.toolbar
return t}e.exports=i},kHMh:function(e,t,r){"use strict"
var n=r("TqRt")
var a=r("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("HRht"))
var i=n(r("5WJX"))
r("eROu")
r("JOgE")
r("rmgI")
r("vn/0")
r("Q/zO")
r("NpmH")
r("Cc/A")
r("4tak")
r("JAFY")
r("6LCz")
r("fE+E")
r("lM69")
r("xtS7")
r("0SkP")
r("ILCH")
r("Qy3N")
r("sSTr")
r("U+tQ")
var u=i.default.ScriptLoader.add
i.default.ScriptLoader.add=function(e){"none"!==e&&u.apply(i.default.ScriptLoader,arguments)}
o.setFromTinymce(i.default)
var s=i.default
t.default=s},klMn:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=u
var a=n(r("MVZn"))
var o=n(r("6Mtf"))
function i(e){switch(e){case"course":case"courses":return"course"
case"group":case"groups":return"group"
case"user":case"users":return"user"
default:return}}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=e,r=t.source,n=t.jwt,u=t.refreshToken,s=t.host,l=t.contextType,c=t.contextId,f=t.collections,d=t.files,v=t.folders,m=t.upload,g=t.images,p=t.flickr,A=t.newPageLinkExpanded
l=i(l)
e=(0,a.default)({},e,{contextType:l})
void 0===r&&(r=new o.default({jwt:n,refreshToken:u,host:s}))
void 0===f&&(f={announcements:r.initializeCollection("announcements",e),assignments:r.initializeCollection("assignments",e),discussions:r.initializeCollection("discussions",e),modules:r.initializeCollection("modules",e),quizzes:r.initializeCollection("quizzes",e),wikiPages:r.initializeCollection("wikiPages",e)})
void 0===m&&(m=r.initializeUpload(e))
void 0===p&&(p=r.initializeFlickr(e))
void 0===g&&(g=r.initializeImages(e))
void 0===A&&(A=false)
return{source:r,jwt:n,host:s,contextType:l,contextId:c,collections:f,files:d,folders:v,upload:m,images:g,flickr:p,newPageLinkExpanded:A}}},koRW:function(e,t,r){"use strict"
e.exports=r("K2W/")},kqqL:function(e,t,r){"use strict"
var n=r("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var a=n(r("HRht"))
function o(e,t){var r="text/html"
var n=t
if(a.edge())e.dataTransfer.items.clear()
else if(a.ie()){r="Text"
n="data:text/mce-internal,rcs-sidebar,".concat(escape(t))}e.dataTransfer.setData(r,n)}},l294:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=c
var n=r("Tb6I")
var a=r("9Pur")
var o=r("sQ/i")
var i=r("OF0b")
var u=r("YYvL")
var s=r("xYFW")
var l=r("WYc/")
function c(e){return{onChangeTab:function(t){return e((0,n.changeTab)(t))},onChangeAccordion:function(t){return e((0,n.changeAccordion)(t))},fetchInitialPage:function(t){return e((0,a.fetchInitialPage)(t))},fetchNextPage:function(t){return e((0,a.fetchNextPage)(t))},toggleFolder:function(t){return e((0,s.toggle)(t))},fetchFolders:function(){return e((0,i.fetchFolders)())},fetchImages:function(t){return e((0,o.fetchImages)(t))},startUpload:function(t,r){return e((0,i.uploadPreflight)(t,r))},flickrSearch:function(t){return e((0,u.searchFlickr)(t))},toggleFlickrForm:function(){return e((0,u.openOrCloseFlickrForm)())},toggleUploadForm:function(){return e((0,i.openOrCloseUploadForm)())},toggleNewPageForm:function(){return e((0,l.openOrCloseNewPageForm)())}}}},lM69:function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
var t=function(){var e=[]
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]}
var r=function(e,t){return function(){var r=[]
for(var n=0;n<arguments.length;n++)r[n]=arguments[n]
return e(t.apply(null,r))}}
var n=function(e){return function(){return e}}
var a=function(e){return e}
function o(e){var t=[]
for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
return function(){var r=[]
for(var n=0;n<arguments.length;n++)r[n]=arguments[n]
var a=t.concat(r)
return e.apply(null,a)}}var i=function(e){return function(){var t=[]
for(var r=0;r<arguments.length;r++)t[r]=arguments[r]
return!e.apply(null,t)}}
var u=function(e){return function(){throw new Error(e)}}
var s=function(e){return e()}
var l=n(false)
var c=n(true)
var f=l
var d=c
var v=function(){return m}
var m=function(){var e=function(e){return e.isNone()}
var t=function(e){return e()}
var r=function(e){return e}
var a=function(){}
var o=function(){return null}
var i=function(){return}
var u={fold:function(e,t){return e()},is:f,isSome:f,isNone:d,getOr:r,getOrThunk:t,getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:o,getOrUndefined:i,or:r,orThunk:t,map:v,ap:v,each:a,bind:v,flatten:v,exists:f,forall:d,filter:v,equals:e,equals_:e,toArray:function(){return[]},toString:n("none()")}
Object.freeze&&Object.freeze(u)
return u}()
var g=function(e){var t=function(){return e}
var r=function(){return o}
var n=function(t){return g(t(e))}
var a=function(t){return t(e)}
var o={fold:function(t,r){return r(e)},is:function(t){return e===t},isSome:d,isNone:f,getOr:t,getOrThunk:t,getOrDie:t,getOrNull:t,getOrUndefined:t,or:r,orThunk:r,map:n,ap:function(t){return t.fold(v,function(t){return g(t(e))})},each:function(t){t(e)},bind:a,flatten:t,exists:a,forall:a,filter:function(t){return t(e)?o:m},equals:function(t){return t.is(e)},equals_:function(t,r){return t.fold(f,function(t){return r(e,t)})},toArray:function(){return[e]},toString:function(){return"some("+e+")"}}
return o}
var p=function(e){return null===e||void 0===e?m:g(e)}
var A={some:g,none:v,from:p}
var h=function(e){if(null===e)return"null"
var t=typeof e
if("object"===t&&Array.prototype.isPrototypeOf(e))return"array"
if("object"===t&&String.prototype.isPrototypeOf(e))return"string"
return t}
var b=function(e){return function(t){return h(t)===e}}
var y=b("string")
var w=b("array")
var E=b("boolean")
var x=b("function")
var C=b("number")
var k=(B=Array.prototype.indexOf,T=function(e,t){return B.call(e,t)},R=function(e,t){return U(e,t)},void 0===B?R:T)
var B,T,R
var I=function(e,t){return k(e,t)>-1}
var S=function(e,t){return L(e,t).isSome()}
var D=function(e,t){var r=e.length
var n=new Array(r)
for(var a=0;a<r;a++){var o=e[a]
n[a]=t(o,a,e)}return n}
var N=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
t(a,r,e)}}
var M=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r]
t(n,r,e)}}
var P=function(e,t){var r=[]
for(var n=0,a=e.length;n<a;n++){var o=e[n]
t(o,n,e)&&r.push(o)}return r}
var _=function(e,t,r){M(e,function(e){r=t(r,e)})
return r}
var O=function(e,t,r){N(e,function(e){r=t(r,e)})
return r}
var F=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
if(t(a,r,e))return A.some(a)}return A.none()}
var L=function(e,t){for(var r=0,n=e.length;r<n;r++){var a=e[r]
if(t(a,r,e))return A.some(r)}return A.none()}
var U=function(e,t){for(var r=0,n=e.length;r<n;++r)if(e[r]===t)return r
return-1}
var Q=Array.prototype.push
var z=function(e){var t=[]
for(var r=0,n=e.length;r<n;++r){if(!Array.prototype.isPrototypeOf(e[r]))throw new Error("Arr.flatten item "+r+" was not an array, input: "+e)
Q.apply(t,e[r])}return t}
var j=function(e,t){var r=D(e,t)
return z(r)}
var H=function(e,t){for(var r=0,n=e.length;r<n;++r){var a=e[r]
if(true!==t(a,r,e))return false}return true}
var W=Array.prototype.slice
var V=function(e){var t=W.call(e,0)
t.reverse()
return t}
var G=function(e){return 0===e.length?A.none():A.some(e[e.length-1])}
x(Array.from)&&Array.from
var Y=Object.keys
var J=function(e,t){var r=Y(e)
for(var n=0,a=r.length;n<a;n++){var o=r[n]
var i=e[o]
t(i,o,e)}}
var q=function(e,t){return K(e,function(e,r,n){return{k:r,v:t(e,r,n)}})}
var K=function(e,t){var r={}
J(e,function(n,a){var o=t(n,a,e)
r[o.k]=o.v})
return r}
var X=function(){var e=[]
for(var t=0;t<arguments.length;t++)e[t]=arguments[t]
return function(){var t=[]
for(var r=0;r<arguments.length;r++)t[r]=arguments[r]
if(e.length!==t.length)throw new Error('Wrong number of arguments to struct. Expected "['+e.length+']", got '+t.length+" arguments")
var a={}
N(e,function(e,r){a[e]=n(t[r])})
return a}}
var Z=function(e){return e.slice(0).sort()}
var $=function(e,t){throw new Error("All required keys ("+Z(e).join(", ")+") were not specified. Specified keys were: "+Z(t).join(", ")+".")}
var ee=function(e){throw new Error("Unsupported keys for object: "+Z(e).join(", "))}
var te=function(e,t){if(!w(t))throw new Error("The "+e+" fields must be an array. Was: "+t+".")
N(t,function(t){if(!y(t))throw new Error("The value "+t+" in the "+e+" fields was not a string.")})}
var re=function(e,t){throw new Error("All values need to be of type: "+t+". Keys ("+Z(e).join(", ")+") were not.")}
var ne=function(e){var t=Z(e)
var r=F(t,function(e,r){return r<t.length-1&&e===t[r+1]})
r.each(function(e){throw new Error("The field: "+e+" occurs more than once in the combined fields: ["+t.join(", ")+"].")})}
var ae=function(e,t){var r=e.concat(t)
if(0===r.length)throw new Error("You must specify at least one required or optional field.")
te("required",e)
te("optional",t)
ne(r)
return function(a){var o=Y(a)
var i=H(e,function(e){return I(o,e)})
i||$(e,o)
var u=P(o,function(e){return!I(r,e)})
u.length>0&&ee(u)
var s={}
N(e,function(e){s[e]=n(a[e])})
N(t,function(e){s[e]=n(Object.prototype.hasOwnProperty.call(a,e)?A.some(a[e]):A.none())})
return s}}
var oe=X("width","height")
var ie=X("rows","columns")
var ue=X("row","column")
var se=X("x","y")
var le=X("element","rowspan","colspan")
var ce=X("element","rowspan","colspan","isNew")
var fe=X("element","rowspan","colspan","row","column")
var de=X("element","cells","section")
var ve=X("element","isNew")
var me=X("element","cells","section","isNew")
var ge=X("cells","section")
var pe=X("details","section")
var Ae=X("startRow","startCol","finishRow","finishCol")
var he={dimensions:oe,grid:ie,address:ue,coords:se,extended:fe,detail:le,detailnew:ce,rowdata:de,elementnew:ve,rowdatanew:me,rowcells:ge,rowdetails:pe,bounds:Ae}
var be=function(e,t){var r=t||document
var n=r.createElement("div")
n.innerHTML=e
if(!n.hasChildNodes()||n.childNodes.length>1){console.error("HTML does not have a single root node",e)
throw"HTML must have a single root node"}return Ee(n.childNodes[0])}
var ye=function(e,t){var r=t||document
var n=r.createElement(e)
return Ee(n)}
var we=function(e,t){var r=t||document
var n=r.createTextNode(e)
return Ee(n)}
var Ee=function(e){if(null===e||void 0===e)throw new Error("Node cannot be null or undefined")
return{dom:n(e)}}
var xe=function(e,t,r){var n=e.dom()
return A.from(n.elementFromPoint(t,r)).map(Ee)}
var Ce={fromHtml:be,fromTag:ye,fromText:we,fromDom:Ee,fromPoint:xe}
Node.ATTRIBUTE_NODE
Node.CDATA_SECTION_NODE
var ke=Node.COMMENT_NODE
var Be=Node.DOCUMENT_NODE
Node.DOCUMENT_TYPE_NODE
Node.DOCUMENT_FRAGMENT_NODE
var Te=Node.ELEMENT_NODE
var Re=Node.TEXT_NODE
Node.PROCESSING_INSTRUCTION_NODE
Node.ENTITY_REFERENCE_NODE
Node.ENTITY_NODE
Node.NOTATION_NODE
var Ie=Te
var Se=Be
var De=function(e,t){var r=e.dom()
if(r.nodeType!==Ie)return false
if(void 0!==r.matches)return r.matches(t)
if(void 0!==r.msMatchesSelector)return r.msMatchesSelector(t)
if(void 0!==r.webkitMatchesSelector)return r.webkitMatchesSelector(t)
if(void 0!==r.mozMatchesSelector)return r.mozMatchesSelector(t)
throw new Error("Browser lacks native selectors")}
var Ne=function(e){return e.nodeType!==Ie&&e.nodeType!==Se||0===e.childElementCount}
var Me=function(e,t){var r=void 0===t?document:t.dom()
return Ne(r)?[]:D(r.querySelectorAll(e),Ce.fromDom)}
var Pe=function(e,t){var r=void 0===t?document:t.dom()
return Ne(r)?A.none():A.from(r.querySelector(e)).map(Ce.fromDom)}
var _e="undefined"!==typeof window?window:Function("return this;")()
var Oe=function(e,t){var r=void 0!==t&&null!==t?t:_e
for(var n=0;n<e.length&&void 0!==r&&null!==r;++n)r=r[e[n]]
return r}
var Fe=function(e,t){var r=e.split(".")
return Oe(r,t)}
var Le=function(e,t){return Fe(e,t)}
var Ue=function(e,t){var r=Le(e,t)
if(void 0===r||null===r)throw e+" not available on this browser"
return r}
var Qe={getOrDie:Ue}
var ze=function(){var e=Qe.getOrDie("Node")
return e}
var je=function(e,t,r){return 0!==(e.compareDocumentPosition(t)&r)}
var He=function(e,t){return je(e,t,ze().DOCUMENT_POSITION_PRECEDING)}
var We=function(e,t){return je(e,t,ze().DOCUMENT_POSITION_CONTAINED_BY)}
var Ve={documentPositionPreceding:He,documentPositionContainedBy:We}
var Ge=function(e){var t=false
var r
return function(){var n=[]
for(var a=0;a<arguments.length;a++)n[a]=arguments[a]
if(!t){t=true
r=e.apply(null,n)}return r}}
var Ye=function(e,t){for(var r=0;r<e.length;r++){var n=e[r]
if(n.test(t))return n}return}
var Je=function(e,t){var r=Ye(e,t)
if(!r)return{major:0,minor:0}
var n=function(e){return Number(t.replace(r,"$"+e))}
return Xe(n(1),n(2))}
var qe=function(e,t){var r=String(t).toLowerCase()
if(0===e.length)return Ke()
return Je(e,r)}
var Ke=function(){return Xe(0,0)}
var Xe=function(e,t){return{major:e,minor:t}}
var Ze={nu:Xe,detect:qe,unknown:Ke}
var $e="Edge"
var et="Chrome"
var tt="IE"
var rt="Opera"
var nt="Firefox"
var at="Safari"
var ot=function(e,t){return function(){return t===e}}
var it=function(){return ut({current:void 0,version:Ze.unknown()})}
var ut=function(e){var t=e.current
var r=e.version
return{current:t,version:r,isEdge:ot($e,t),isChrome:ot(et,t),isIE:ot(tt,t),isOpera:ot(rt,t),isFirefox:ot(nt,t),isSafari:ot(at,t)}}
var st={unknown:it,nu:ut,edge:n($e),chrome:n(et),ie:n(tt),opera:n(rt),firefox:n(nt),safari:n(at)}
var lt="Windows"
var ct="iOS"
var ft="Android"
var dt="Linux"
var vt="OSX"
var mt="Solaris"
var gt="FreeBSD"
var pt=function(e,t){return function(){return t===e}}
var At=function(){return ht({current:void 0,version:Ze.unknown()})}
var ht=function(e){var t=e.current
var r=e.version
return{current:t,version:r,isWindows:pt(lt,t),isiOS:pt(ct,t),isAndroid:pt(ft,t),isOSX:pt(vt,t),isLinux:pt(dt,t),isSolaris:pt(mt,t),isFreeBSD:pt(gt,t)}}
var bt={unknown:At,nu:ht,windows:n(lt),ios:n(ct),android:n(ft),linux:n(dt),osx:n(vt),solaris:n(mt),freebsd:n(gt)}
var yt=function(e,t,r){var a=e.isiOS()&&true===/ipad/i.test(r)
var o=e.isiOS()&&!a
var i=e.isAndroid()&&3===e.version.major
var u=e.isAndroid()&&4===e.version.major
var s=a||i||u&&true===/mobile/i.test(r)
var l=e.isiOS()||e.isAndroid()
var c=l&&!s
var f=t.isSafari()&&e.isiOS()&&false===/safari/i.test(r)
return{isiPad:n(a),isiPhone:n(o),isTablet:n(s),isPhone:n(c),isTouch:n(l),isAndroid:e.isAndroid,isiOS:e.isiOS,isWebView:n(f)}}
var wt=function(e,t){var r=String(t).toLowerCase()
return F(e,function(e){return e.search(r)})}
var Et=function(e,t){return wt(e,t).map(function(e){var r=Ze.detect(e.versionRegexes,t)
return{current:e.name,version:r}})}
var xt=function(e,t){return wt(e,t).map(function(e){var r=Ze.detect(e.versionRegexes,t)
return{current:e.name,version:r}})}
var Ct={detectBrowser:Et,detectOs:xt}
var kt=function(e,t,r){if(""===t)return true
if(e.length<t.length)return false
var n=e.substr(r,r+t.length)
return n===t}
var Bt=function(e,t){return-1!==e.indexOf(t)}
var Tt=function(e,t){return kt(e,t,e.length-t.length)}
var Rt=function(e){return e.replace(/^\s+|\s+$/g,"")}
var It=/.*?version\/\ ?([0-9]+)\.([0-9]+).*/
var St=function(e){return function(t){return Bt(t,e)}}
var Dt=[{name:"Edge",versionRegexes:[/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],search:function(e){var t=Bt(e,"edge/")&&Bt(e,"chrome")&&Bt(e,"safari")&&Bt(e,"applewebkit")
return t}},{name:"Chrome",versionRegexes:[/.*?chrome\/([0-9]+)\.([0-9]+).*/,It],search:function(e){return Bt(e,"chrome")&&!Bt(e,"chromeframe")}},{name:"IE",versionRegexes:[/.*?msie\ ?([0-9]+)\.([0-9]+).*/,/.*?rv:([0-9]+)\.([0-9]+).*/],search:function(e){return Bt(e,"msie")||Bt(e,"trident")}},{name:"Opera",versionRegexes:[It,/.*?opera\/([0-9]+)\.([0-9]+).*/],search:St("opera")},{name:"Firefox",versionRegexes:[/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],search:St("firefox")},{name:"Safari",versionRegexes:[It,/.*?cpu os ([0-9]+)_([0-9]+).*/],search:function(e){return(Bt(e,"safari")||Bt(e,"mobile/"))&&Bt(e,"applewebkit")}}]
var Nt=[{name:"Windows",search:St("win"),versionRegexes:[/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]},{name:"iOS",search:function(e){return Bt(e,"iphone")||Bt(e,"ipad")},versionRegexes:[/.*?version\/\ ?([0-9]+)\.([0-9]+).*/,/.*cpu os ([0-9]+)_([0-9]+).*/,/.*cpu iphone os ([0-9]+)_([0-9]+).*/]},{name:"Android",search:St("android"),versionRegexes:[/.*?android\ ?([0-9]+)\.([0-9]+).*/]},{name:"OSX",search:St("os x"),versionRegexes:[/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]},{name:"Linux",search:St("linux"),versionRegexes:[]},{name:"Solaris",search:St("sunos"),versionRegexes:[]},{name:"FreeBSD",search:St("freebsd"),versionRegexes:[]}]
var Mt={browsers:n(Dt),oses:n(Nt)}
var Pt=function(e){var t=Mt.browsers()
var r=Mt.oses()
var n=Ct.detectBrowser(t,e).fold(st.unknown,st.nu)
var a=Ct.detectOs(r,e).fold(bt.unknown,bt.nu)
var o=yt(a,n,e)
return{browser:n,os:a,deviceType:o}}
var _t={detect:Pt}
var Ot=Ge(function(){var e=navigator.userAgent
return _t.detect(e)})
var Ft={detect:Ot}
var Lt=function(e,t){return e.dom()===t.dom()}
var Ut=function(e,t){var r=e.dom(),n=t.dom()
return r!==n&&r.contains(n)}
var Qt=function(e,t){return Ve.documentPositionContainedBy(e.dom(),t.dom())}
var zt=Ft.detect().browser
var jt=zt.isIE()?Qt:Ut
var Ht=De
var Wt=function(e){return Ce.fromDom(e.dom().ownerDocument)}
var Vt=function(e){var t=e.dom()
var r=t.ownerDocument.defaultView
return Ce.fromDom(r)}
var Gt=function(e){var t=e.dom()
return A.from(t.parentNode).map(Ce.fromDom)}
var Yt=function(e,t){var r=x(t)?t:n(false)
var a=e.dom()
var o=[]
while(null!==a.parentNode&&void 0!==a.parentNode){var i=a.parentNode
var u=Ce.fromDom(i)
o.push(u)
if(true===r(u))break
a=i}return o}
var Jt=function(e){var t=e.dom()
return A.from(t.previousSibling).map(Ce.fromDom)}
var qt=function(e){var t=e.dom()
return A.from(t.nextSibling).map(Ce.fromDom)}
var Kt=function(e){var t=e.dom()
return D(t.childNodes,Ce.fromDom)}
var Xt=function(e,t){var r=e.dom().childNodes
return A.from(r[t]).map(Ce.fromDom)}
var Zt=function(e){return Xt(e,0)}
X("element","offset")
var $t=function(e,t){return er(e,t,n(true))}
var er=function(e,t,r){return j(Kt(e),function(e){return De(e,t)?r(e)?[e]:[]:er(e,t,r)})}
var tr={firstLayer:$t,filterFirstLayer:er}
var rr=function(e){var t=e.dom().nodeName
return t.toLowerCase()}
var nr=function(e){return e.dom().nodeType}
var ar=function(e){return function(t){return nr(t)===e}}
var or=function(e){return nr(e)===ke||"#comment"===rr(e)}
var ir=ar(Te)
var ur=ar(Re)
var sr=ar(Be)
var lr=function(e,t,r){if(!(y(r)||E(r)||C(r))){console.error("Invalid call to Attr.set. Key ",t,":: Value ",r,":: Element ",e)
throw new Error("Attribute value was not simple")}e.setAttribute(t,r+"")}
var cr=function(e,t,r){lr(e.dom(),t,r)}
var fr=function(e,t){var r=e.dom()
J(t,function(e,t){lr(r,t,e)})}
var dr=function(e,t){var r=e.dom().getAttribute(t)
return null===r?void 0:r}
var vr=function(e,t){var r=e.dom()
return!(!r||!r.hasAttribute)&&r.hasAttribute(t)}
var mr=function(e,t){e.dom().removeAttribute(t)}
var gr=function(e){return O(e.dom().attributes,function(e,t){e[t.name]=t.value
return e},{})}
var pr=function(e){var t=ur(e)?e.dom().parentNode:e.dom()
return void 0!==t&&null!==t&&t.ownerDocument.body.contains(t)}
var Ar=Ge(function(){return hr(Ce.fromDom(document))})
var hr=function(e){var t=e.dom().body
if(null===t||void 0===t)throw"Body is not available yet"
return Ce.fromDom(t)}
var br=function(e,t,r){return P(Yt(e,r),t)}
var yr=function(e,t){return P(Kt(e),t)}
var wr=function(e,t){var r=[]
N(Kt(e),function(e){t(e)&&(r=r.concat([e]))
r=r.concat(wr(e,t))})
return r}
var Er=function(e,t,r){return br(e,function(e){return De(e,t)},r)}
var xr=function(e,t){return yr(e,function(e){return De(e,t)})}
var Cr=function(e,t){return Me(t,e)}
function kr(e,t,r,n,a){return e(r,n)?A.some(r):x(a)&&a(r)?A.none():t(r,n,a)}var Br=function(e,t,r){var a=e.dom()
var o=x(r)?r:n(false)
while(a.parentNode){a=a.parentNode
var i=Ce.fromDom(a)
if(t(i))return A.some(i)
if(o(i))break}return A.none()}
var Tr=function(e,t,r){var n=function(e){return t(e)}
return kr(n,Br,e,t,r)}
var Rr=function(e,t){var n=F(e.dom().childNodes,r(t,Ce.fromDom))
return n.map(Ce.fromDom)}
var Ir=function(e,t){var r=function(e){for(var n=0;n<e.childNodes.length;n++){if(t(Ce.fromDom(e.childNodes[n])))return A.some(Ce.fromDom(e.childNodes[n]))
var a=r(e.childNodes[n])
if(a.isSome())return a}return A.none()}
return r(e.dom())}
var Sr=function(e,t,r){return Br(e,function(e){return De(e,t)},r)}
var Dr=function(e,t){return Rr(e,function(e){return De(e,t)})}
var Nr=function(e,t){return Pe(t,e)}
var Mr=function(e,t,r){return kr(De,Sr,e,t,r)}
var Pr=function(e,t,r){var a=void 0!==r?r:n(false)
if(a(t))return A.none()
if(I(e,rr(t)))return A.some(t)
var o=function(e){return De(e,"table")||a(e)}
return Sr(t,e.join(","),o)}
var _r=function(e,t){return Pr(["td","th"],e,t)}
var Or=function(e){return tr.firstLayer(e,"th,td")}
var Fr=function(e,t){return Pr(["caption","tr","tbody","tfoot","thead"],e,t)}
var Lr=function(e,t){return Gt(t).map(function(t){return xr(t,e)})}
var Ur=o(Lr,"th,td")
var Qr=o(Lr,"tr")
var zr=function(e){return Nr(e,"th,td")}
var jr=function(e,t){return Mr(e,"table",t)}
var Hr=function(e,t){return Pr(["tr"],e,t)}
var Wr=function(e){return tr.firstLayer(e,"tr")}
var Vr=function(e,t){return parseInt(dr(e,t),10)}
var Gr=function(e,t,r){var n=Vr(e,t)
var a=Vr(e,r)
return he.grid(n,a)}
var Yr={cell:_r,firstCell:zr,cells:Or,neighbourCells:Ur,table:jr,row:Hr,rows:Wr,notCell:Fr,neighbourRows:Qr,attr:Vr,grid:Gr}
var Jr=function(e){var t=Yr.rows(e)
return D(t,function(e){var t=e
var r=Gt(t)
var n=r.map(function(e){var t=rr(e)
return"tfoot"===t||"thead"===t||"tbody"===t?t:"tbody"}).getOr("tbody")
var a=D(Yr.cells(e),function(e){var t=vr(e,"rowspan")?parseInt(dr(e,"rowspan"),10):1
var r=vr(e,"colspan")?parseInt(dr(e,"colspan"),10):1
return he.detail(e,t,r)})
return he.rowdata(t,a,n)})}
var qr=function(e,t){return D(e,function(e){var r=D(Yr.cells(e),function(e){var t=vr(e,"rowspan")?parseInt(dr(e,"rowspan"),10):1
var r=vr(e,"colspan")?parseInt(dr(e,"colspan"),10):1
return he.detail(e,t,r)})
return he.rowdata(e,r,t.section())})}
var Kr={fromTable:Jr,fromPastedRows:qr}
var Xr=function(e,t){return e+","+t}
var Zr=function(e,t,r){var n=e.access()[Xr(t,r)]
return void 0!==n?A.some(n):A.none()}
var $r=function(e,t,r){var n=en(e,function(e){return r(t,e.element())})
return n.length>0?A.some(n[0]):A.none()}
var en=function(e,t){var r=j(e.all(),function(e){return e.cells()})
return P(r,t)}
var tn=function(e){var t={}
var r=[]
var a=e.length
var o=0
N(e,function(e,n){var a=[]
N(e.cells(),function(e,r){var i=0
while(void 0!==t[Xr(n,i)])i++
var u=he.extended(e.element(),e.rowspan(),e.colspan(),n,i)
for(var s=0;s<e.colspan();s++)for(var l=0;l<e.rowspan();l++){var c=n+l
var f=i+s
var d=Xr(c,f)
t[d]=u
o=Math.max(o,f+1)}a.push(u)})
r.push(he.rowdata(e.element(),a,e.section()))})
var i=he.grid(a,o)
return{grid:n(i),access:n(t),all:n(r)}}
var rn=function(e){var t=D(e.all(),function(e){return e.cells()})
return z(t)}
var nn={generate:tn,getAt:Zr,findItem:$r,filterItems:en,justCells:rn}
var an=function(e){return void 0!==e.style}
var on=function(e,t,r){if(!y(r)){console.error("Invalid call to CSS.set. Property ",t,":: Value ",r,":: Element ",e)
throw new Error("CSS value must be a string: "+r)}an(e)&&e.style.setProperty(t,r)}
var un=function(e,t){an(e)&&e.style.removeProperty(t)}
var sn=function(e,t,r){var n=e.dom()
on(n,t,r)}
var ln=function(e,t){var r=e.dom()
J(t,function(e,t){on(r,t,e)})}
var cn=function(e,t){var r=e.dom()
var n=window.getComputedStyle(r)
var a=n.getPropertyValue(t)
var o=""!==a||pr(e)?a:fn(r,t)
return null===o?void 0:o}
var fn=function(e,t){return an(e)?e.style.getPropertyValue(t):""}
var dn=function(e,t){var r=e.dom()
var n=fn(r,t)
return A.from(n).filter(function(e){return e.length>0})}
var vn=function(e,t){var r=e.dom()
un(r,t)
vr(e,"style")&&""===Rt(dr(e,"style"))&&mr(e,"style")}
var mn=function(e,t){var r=e.dom()
var n=t.dom()
an(r)&&an(n)&&(n.style.cssText=r.style.cssText)}
var gn=function(e,t){var r=Gt(e)
r.each(function(r){r.dom().insertBefore(t.dom(),e.dom())})}
var pn=function(e,t){var r=qt(e)
r.fold(function(){var r=Gt(e)
r.each(function(e){hn(e,t)})},function(e){gn(e,t)})}
var An=function(e,t){var r=Zt(e)
r.fold(function(){hn(e,t)},function(r){e.dom().insertBefore(t.dom(),r.dom())})}
var hn=function(e,t){e.dom().appendChild(t.dom())}
var bn=function(e,t){gn(e,t)
hn(t,e)}
var yn=function(e,t){N(t,function(t){gn(e,t)})}
var wn=function(e,t){N(t,function(r,n){var a=0===n?e:t[n-1]
pn(a,r)})}
var En=function(e,t){N(t,function(t){hn(e,t)})}
var xn=function(e){e.dom().textContent=""
N(Kt(e),function(e){Cn(e)})}
var Cn=function(e){var t=e.dom()
null!==t.parentNode&&t.parentNode.removeChild(t)}
var kn=function(e){var t=Kt(e)
t.length>0&&yn(e,t)
Cn(e)}
var Bn=X("minRow","minCol","maxRow","maxCol")
var Tn=function(e,t){var r=e.grid().columns()
var n=e.grid().rows()
var a=n
var o=r
var i=0
var u=0
J(e.access(),function(e){if(t(e)){var r=e.row()
var n=r+e.rowspan()-1
var s=e.column()
var l=s+e.colspan()-1
r<a?a=r:n>i&&(i=n)
s<o?o=s:l>u&&(u=l)}})
return Bn(a,o,i,u)}
var Rn=function(e,t,r){var n=e[r].element()
var a=Ce.fromTag("td")
hn(a,Ce.fromTag("br"))
var o=t?hn:An
o(n,a)}
var In=function(e,t,r,n){var a=t.grid().columns()
var o=t.grid().rows()
for(var i=0;i<o;i++){var u=false
for(var s=0;s<a;s++)if(!(i<r.minRow()||i>r.maxRow()||s<r.minCol()||s>r.maxCol())){var l=nn.getAt(t,i,s).filter(n).isNone()
l?Rn(e,u,i):u=true}}}
var Sn=function(e,t){var r=P(tr.firstLayer(e,"tr"),function(e){return 0===e.dom().childElementCount})
N(r,Cn)
t.minCol()!==t.maxCol()&&t.minRow()!==t.maxRow()||N(tr.firstLayer(e,"th,td"),function(e){mr(e,"rowspan")
mr(e,"colspan")})
mr(e,"width")
mr(e,"height")
vn(e,"width")
vn(e,"height")}
var Dn=function(e,t){var r=function(e){return De(e.element(),t)}
var n=Kr.fromTable(e)
var a=nn.generate(n)
var o=Tn(a,r)
var i="th:not("+t+"),td:not("+t+")"
var u=tr.filterFirstLayer(e,"th,td",function(e){return De(e,i)})
N(u,Cn)
In(n,a,o,r)
Sn(e,o)
return e}
var Nn={extract:Dn}
var Mn=function(e,t){return Ce.fromDom(e.dom().cloneNode(t))}
var Pn=function(e){return Mn(e,false)}
var _n=function(e){return Mn(e,true)}
var On=function(e,t){var r=Ce.fromTag(t)
var n=gr(e)
fr(r,n)
return r}
var Fn=function(e,t){var r=On(e,t)
var n=Kt(_n(e))
En(r,n)
return r}
function Ln(e,t){var r=function(r){if(!e(r))throw new Error("Can only get "+t+" value of a "+t+" node")
return i(r).getOr("")}
var n=function(e){try{return a(e)}catch(e){return A.none()}}
var a=function(t){return e(t)?A.from(t.dom().nodeValue):A.none()}
var o=Ft.detect().browser
var i=o.isIE()&&10===o.version.major?n:a
var u=function(r,n){if(!e(r))throw new Error("Can only set raw "+t+" value of a "+t+" node")
r.dom().nodeValue=n}
return{get:r,getOption:i,set:u}}var Un=Ln(ur,"text")
var Qn=function(e){return Un.get(e)}
var zn=function(e){return Un.getOption(e)}
var jn=function(e,t){Un.set(e,t)}
var Hn=function(e){return"img"===rr(e)?1:zn(e).fold(function(){return Kt(e).length},function(e){return e.length})}
var Wn=" "
var Vn=function(e){return zn(e).filter(function(e){return 0!==e.trim().length||e.indexOf(Wn)>-1}).isSome()}
var Gn=["img","br"]
var Yn=function(e){var t=Vn(e)
return t||I(Gn,rr(e))}
var Jn=function(e){return Ir(e,Yn)}
var qn=function(e){return Kn(e,Yn)}
var Kn=function(e,t){var r=function(e){var n=Kt(e)
for(var a=n.length-1;a>=0;a--){var o=n[a]
if(t(o))return A.some(o)
var i=r(o)
if(i.isSome())return i}return A.none()}
return r(e)}
var Xn=function(){var e=Ce.fromTag("td")
hn(e,Ce.fromTag("br"))
return e}
var Zn=function(e,t,r){var n=Fn(e,t)
J(r,function(e,t){null===e?mr(n,t):cr(n,t,e)})
return n}
var $n=function(e){return e}
var ea=function(e){return function(){return Ce.fromTag("tr",e.dom())}}
var ta=function(e,t,r){var n=Jn(e)
return n.map(function(n){var a=r.join(",")
var o=Er(n,a,function(t){return Lt(t,e)})
return _(o,function(e,t){var r=Pn(t)
mr(r,"contenteditable")
hn(e,r)
return r},t)}).getOr(t)}
var ra=function(e,t,r){var n=function(t){var n=Wt(t.element())
var a=Ce.fromTag(rr(t.element()),n.dom())
var o=r.getOr(["strong","em","b","i","span","font","h1","h2","h3","h4","h5","h6","p","div"])
var i=o.length>0?ta(t.element(),a,o):a
hn(i,Ce.fromTag("br"))
mn(t.element(),a)
vn(a,"height")
1!==t.colspan()&&vn(t.element(),"width")
e(t.element(),a)
return a}
return{row:ea(t),cell:n,replace:Zn,gap:Xn}}
var na=function(e){return{row:ea(e),cell:Xn,replace:$n,gap:Xn}}
var aa={cellOperations:ra,paste:na}
var oa=function(e,t){var r=t||document
var n=r.createElement("div")
n.innerHTML=e
return Kt(Ce.fromDom(n))}
var ia=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","li","table","thead","tbody","tfoot","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"]
function ua(){var e=function(e){return Ce.fromDom(e.dom().cloneNode(false))}
var t=function(e){if(!ir(e))return false
if("body"===rr(e))return true
return I(ia,rr(e))}
var r=function(e){if(!ir(e))return false
return I(["br","img","hr","input"],rr(e))}
var a=function(e,t){return e.dom().compareDocumentPosition(t.dom())}
var o=function(e,t){var r=gr(e)
fr(t,r)}
return{up:n({selector:Sr,closest:Mr,predicate:Br,all:Yt}),down:n({selector:Cr,predicate:wr}),styles:n({get:cn,getRaw:dn,set:sn,remove:vn}),attrs:n({get:dr,set:cr,remove:mr,copyTo:o}),insert:n({before:gn,after:pn,afterAll:wn,append:hn,appendAll:En,prepend:An,wrap:bn}),remove:n({unwrap:kn,remove:Cn}),create:n({nu:Ce.fromTag,clone:e,text:Ce.fromText}),query:n({comparePosition:a,prevSibling:Jt,nextSibling:qt}),property:n({children:Kt,name:rr,parent:Gt,isText:ur,isComment:or,isElement:ir,getText:Qn,setText:jn,isBoundary:t,isEmptyTag:r}),eq:Lt,is:Ht}}var sa=X("left","right")
var la=function(e,t,r){var a=e.property().children(t)
var i=L(a,o(e.eq,r))
return i.map(function(e){return{before:n(a.slice(0,e)),after:n(a.slice(e+1))}})}
var ca=function(e,t,r){return la(e,t,r).map(function(r){var n=e.create().clone(t)
e.insert().appendAll(n,r.after())
e.insert().after(t,n)
return sa(t,n)})}
var fa=function(e,t,r){return la(e,t,r).map(function(n){var a=e.create().clone(t)
e.insert().appendAll(a,n.before().concat([r]))
e.insert().appendAll(t,n.after())
e.insert().before(t,a)
return sa(a,t)})}
var da=function(e,t,r,n){var a=X("first","second","splits")
var o=function(t,i,u){var s=a(t,A.none(),u)
return r(t)?a(t,i,u):e.property().parent(t).bind(function(a){return n(e,a,t).map(function(e){var t=[{first:e.left,second:e.right}]
var n=r(a)?a:e.left()
return o(n,A.some(e.right()),u.concat(t))}).getOr(s)})}
return o(t,A.none(),[])}
var va={breakToLeft:fa,breakToRight:ca,breakPath:da}
var ma=function(e,t,r,n){var a=r[0]
var o=r.slice(1)
return n(e,t,a,o)}
var ga=function(e,t,r){return r.length>0?ma(e,t,r,pa):A.none()}
var pa=function(e,t,r,n){var a=t(e,r)
return _(n,function(r,n){var a=t(e,n)
return Aa(e,r,a)},a)}
var Aa=function(e,t,r){return t.bind(function(t){return r.filter(o(e.eq,t))})}
var ha={oneAll:ga}
var ba=function(e,t){return o(e.eq,t)}
var ya=function(e,t,r,n){var a=e.property().children(t)
if(e.eq(t,r[0]))return A.some([r[0]])
if(e.eq(t,n[0]))return A.some([n[0]])
var o=function(r){var n=V(r)
var o=L(n,ba(e,t)).getOr(-1)
var i=o<n.length-1?n[o+1]:n[o]
return L(a,ba(e,i))}
var i=o(r)
var u=o(n)
return i.bind(function(e){return u.map(function(t){var r=Math.min(e,t)
var n=Math.max(e,t)
return a.slice(r,n+1)})})}
var wa=function(e,t,r,a){var o=void 0!==a?a:n(false)
var i=[t].concat(e.up().all(t))
var u=[r].concat(e.up().all(r))
var s=function(e){var t=L(e,o)
return t.fold(function(){return e},function(t){return e.slice(0,t+1)})}
var l=s(i)
var c=s(u)
var f=F(l,function(t){return S(c,ba(e,t))})
return{firstpath:n(l),secondpath:n(c),shared:n(f)}}
var Ea=function(e,t,r){var n=wa(e,t,r)
return n.shared().bind(function(t){return ya(e,t,n.firstpath(),n.secondpath())})}
var xa={subset:Ea,ancestors:wa}
var Ca=function(e,t,r){return ha.oneAll(e,t,r)}
var ka=function(e,t,r){return xa.subset(e,t,r)}
var Ba=function(e,t,r,n){return xa.ancestors(e,t,r,n)}
var Ta=function(e,t,r){return va.breakToLeft(e,t,r)}
var Ra=function(e,t,r){return va.breakToRight(e,t,r)}
var Ia=function(e,t,r,n){return va.breakPath(e,t,r,n)}
var Sa={sharedOne:Ca,subset:ka,ancestors:Ba,breakToLeft:Ta,breakToRight:Ra,breakPath:Ia}
var Da=ua()
var Na=function(e,t){return Sa.sharedOne(Da,function(t,r){return e(r)},t)}
var Ma=function(e,t){return Sa.subset(Da,e,t)}
var Pa=function(e,t,r){return Sa.ancestors(Da,e,t,r)}
var _a=function(e,t){return Sa.breakToLeft(Da,e,t)}
var Oa=function(e,t){return Sa.breakToRight(Da,e,t)}
var Fa=function(e,t,r){return Sa.breakPath(Da,e,t,function(e,t,n){return r(t,n)})}
var La={sharedOne:Na,subset:Ma,ancestors:Pa,breakToLeft:_a,breakToRight:Oa,breakPath:Fa}
var Ua=function(e,t){var r=t.column()
var n=t.column()+t.colspan()-1
var a=t.row()
var o=t.row()+t.rowspan()-1
return r<=e.finishCol()&&n>=e.startCol()&&a<=e.finishRow()&&o>=e.startRow()}
var Qa=function(e,t){return t.column()>=e.startCol()&&t.column()+t.colspan()-1<=e.finishCol()&&t.row()>=e.startRow()&&t.row()+t.rowspan()-1<=e.finishRow()}
var za=function(e,t){var r=true
var n=o(Qa,t)
for(var a=t.startRow();a<=t.finishRow();a++)for(var i=t.startCol();i<=t.finishCol();i++)r=r&&nn.getAt(e,a,i).exists(n)
return r?A.some(t):A.none()}
var ja={inSelection:Ua,isWithin:Qa,isRectangular:za}
var Ha=function(e,t){return he.bounds(Math.min(e.row(),t.row()),Math.min(e.column(),t.column()),Math.max(e.row()+e.rowspan()-1,t.row()+t.rowspan()-1),Math.max(e.column()+e.colspan()-1,t.column()+t.colspan()-1))}
var Wa=function(e,t,r){var n=nn.findItem(e,t,Lt)
var a=nn.findItem(e,r,Lt)
return n.bind(function(e){return a.map(function(t){return Ha(e,t)})})}
var Va=function(e,t,r){return Wa(e,t,r).bind(function(t){return ja.isRectangular(e,t)})}
var Ga={getAnyBox:Wa,getBox:Va}
var Ya=function(e,t,r,n){return nn.findItem(e,t,Lt).bind(function(t){var a=r>0?t.row()+t.rowspan()-1:t.row()
var o=n>0?t.column()+t.colspan()-1:t.column()
var i=nn.getAt(e,a+r,o+n)
return i.map(function(e){return e.element()})})}
var Ja=function(e,t,r){return Ga.getAnyBox(e,t,r).map(function(t){var r=nn.filterItems(e,o(ja.inSelection,t))
return D(r,function(e){return e.element()})})}
var qa=function(e,t){var r=function(e,t){return jt(t,e)}
return nn.findItem(e,t,r).bind(function(e){return e.element()})}
var Ka={moveBy:Ya,intercepts:Ja,parentCell:qa}
var Xa=function(e,t,r){return Yr.table(e).bind(function(n){var a=to(n)
return Ka.moveBy(a,e,t,r)})}
var Za=function(e,t,r){var n=to(e)
return Ka.intercepts(n,t,r)}
var $a=function(e,t,r,n,a){var o=to(e)
var i=Lt(e,r)?t:Ka.parentCell(o,t)
var u=Lt(e,a)?n:Ka.parentCell(o,n)
return Ka.intercepts(o,i,u)}
var eo=function(e,t,r){var n=to(e)
return Ga.getBox(n,t,r)}
var to=function(e){var t=Kr.fromTable(e)
return nn.generate(t)}
var ro={moveBy:Xa,intercepts:Za,nestedIntercepts:$a,getBox:eo}
var no=function(e,t){return Sr(e,"table")}
var ao=ae(["boxes","start","finish"],[])
var oo=function(e,t,r){var n=function(e){return function(t){return r(t)||Lt(t,e)}}
return Lt(e,t)?A.some(ao({boxes:A.some([e]),start:e,finish:t})):no(e,r).bind(function(a){return no(t,r).bind(function(o){if(Lt(a,o))return A.some(ao({boxes:ro.intercepts(a,e,t),start:e,finish:t}))
if(jt(a,o)){var i=Er(t,"td,th",n(a))
var u=i.length>0?i[i.length-1]:t
return A.some(ao({boxes:ro.nestedIntercepts(a,e,a,t,o),start:e,finish:u}))}if(jt(o,a)){i=Er(e,"td,th",n(o))
var s=i.length>0?i[i.length-1]:e
return A.some(ao({boxes:ro.nestedIntercepts(o,e,a,t,o),start:e,finish:s}))}return La.ancestors(e,t).shared().bind(function(i){return Mr(i,"table",r).bind(function(r){var i=Er(t,"td,th",n(r))
var u=i.length>0?i[i.length-1]:t
var s=Er(e,"td,th",n(r))
var l=s.length>0?s[s.length-1]:e
return A.some(ao({boxes:ro.nestedIntercepts(r,e,a,t,o),start:l,finish:u}))})})})})}
var io=function(e,t){var r=Cr(e,t)
return r.length>0?A.some(r):A.none()}
var uo=function(e,t){return F(e,function(e){return De(e,t)})}
var so=function(e,t,r){return Nr(e,t).bind(function(t){return Nr(e,r).bind(function(e){return La.sharedOne(no,[t,e]).map(function(r){return{first:n(t),last:n(e),table:n(r)}})})})}
var lo=function(e,t){return Sr(e,"table").bind(function(r){return Nr(r,t).bind(function(t){return oo(t,e).bind(function(e){return e.boxes().map(function(t){return{boxes:n(t),start:n(e.start()),finish:n(e.finish())}})})})})}
var co=function(e,t,r,n,a){return uo(e,a).bind(function(e){return ro.moveBy(e,t,r).bind(function(e){return lo(e,n)})})}
var fo={identify:oo,retrieve:io,shiftSelection:co,getEdges:so}
var vo=function(e,t){return fo.retrieve(e,t)}
var mo=function(e,t,r){return fo.getEdges(e,t,r).bind(function(t){var r=function(t){return Lt(e,t)}
var n=Sr(t.first(),"thead,tfoot,tbody,table",r)
var a=Sr(t.last(),"thead,tfoot,tbody,table",r)
return n.bind(function(e){return a.bind(function(r){return Lt(e,r)?ro.getBox(t.table(),t.first(),t.last()):A.none()})})})}
var go={retrieve:vo,retrieveBox:mo}
var po="data-mce-selected"
var Ao="td["+po+"],th["+po+"]"
var ho="["+po+"]"
var bo="data-mce-first-selected"
var yo="td["+bo+"],th["+bo+"]"
var wo="data-mce-last-selected"
var Eo="td["+wo+"],th["+wo+"]"
var xo={selected:n(po),selectedSelector:n(Ao),attributeSelector:n(ho),firstSelected:n(bo),firstSelectedSelector:n(yo),lastSelected:n(wo),lastSelectedSelector:n(Eo)}
var Co=function(e){if(!w(e))throw new Error("cases must be an array")
if(0===e.length)throw new Error("there must be at least one case")
var t=[]
var r={}
N(e,function(n,a){var o=Y(n)
if(1!==o.length)throw new Error("one and only one name per case")
var i=o[0]
var u=n[i]
if(void 0!==r[i])throw new Error("duplicate key detected:"+i)
if("cata"===i)throw new Error("cannot have a case named cata (sorry)")
if(!w(u))throw new Error("case arguments must be an array")
t.push(i)
r[i]=function(){var r=arguments.length
if(r!==u.length)throw new Error("Wrong number of arguments to case "+i+". Expected "+u.length+" ("+u+"), got "+r)
var n=new Array(r)
for(var o=0;o<n.length;o++)n[o]=arguments[o]
var s=function(e){var r=Y(e)
if(t.length!==r.length)throw new Error("Wrong number of arguments to match. Expected: "+t.join(",")+"\nActual: "+r.join(","))
var a=H(t,function(e){return I(r,e)})
if(!a)throw new Error("Not all branches were specified when using match. Specified: "+r.join(", ")+"\nRequired: "+t.join(", "))
return e[i].apply(null,n)}
return{fold:function(){if(arguments.length!==e.length)throw new Error("Wrong number of arguments to fold. Expected "+e.length+", got "+arguments.length)
var t=arguments[a]
return t.apply(null,n)},match:s,log:function(e){console.log(e,{constructors:t,constructor:i,params:n})}}}})
return r}
var ko={generate:Co}
var Bo=ko.generate([{none:[]},{multiple:["elements"]},{single:["selection"]}])
var To=function(e,t,r,n){return e.fold(t,r,n)}
var Ro={cata:To,none:Bo.none,multiple:Bo.multiple,single:Bo.single}
var Io=function(e,t){return Ro.cata(t.get(),n([]),a,n([e]))}
var So=function(e,t){var r=function(e){return vr(e,"rowspan")&&parseInt(dr(e,"rowspan"),10)>1||vr(e,"colspan")&&parseInt(dr(e,"colspan"),10)>1}
var n=Io(e,t)
return n.length>0&&H(n,r)?A.some(n):A.none()}
var Do=function(e,t){return Ro.cata(t.get(),A.none,function(t,r){if(0===t.length)return A.none()
return go.retrieveBox(e,xo.firstSelectedSelector(),xo.lastSelectedSelector()).bind(function(e){return t.length>1?A.some({bounds:n(e),cells:n(t)}):A.none()})},A.none)}
var No={mergable:Do,unmergable:So,selection:Io}
var Mo=function(e){return{element:n(e),mergable:A.none,unmergable:A.none,selection:n([e])}}
var Po=function(e,t,r){return{element:n(r),mergable:n(No.mergable(t,e)),unmergable:n(No.unmergable(r,e)),selection:n(No.selection(r,e))}}
var _o=function(e){return Mo(e)}
var Oo=X("element","clipboard","generators")
var Fo=function(e,t,r,a,o){return{element:n(r),mergable:A.none,unmergable:A.none,selection:n(No.selection(r,e)),clipboard:n(a),generators:n(o)}}
var Lo={noMenu:Mo,forMenu:Po,notCell:_o,paste:Oo,pasteRows:Fo}
var Uo=function(e){return Yr.table(e[0]).map(_n).map(function(e){return[Nn.extract(e,xo.attributeSelector())]})}
var Qo=function(e,t){return D(t,function(t){return e.selection.serializer.serialize(t.dom(),{})}).join("")}
var zo=function(e){return D(e,function(e){return e.dom().innerText}).join("")}
var jo=function(e,r,n,a){e.on("BeforeGetContent",function(n){var a=function(t){n.preventDefault()
Uo(t).each(function(t){n.content="text"===n.format?zo(t):Qo(e,t)})}
true===n.selection&&Ro.cata(r.get(),t,a,t)})
e.on("BeforeSetContent",function(t){if(true===t.selection&&true===t.paste){var r=A.from(e.dom.getParent(e.selection.getStart(),"th,td"))
r.each(function(r){var o=Ce.fromDom(r)
var i=Yr.table(o)
i.bind(function(r){var i=P(oa(t.content),function(e){return"meta"!==rr(e)})
if(1===i.length&&"table"===rr(i[0])){t.preventDefault()
var u=Ce.fromDom(e.getDoc())
var s=aa.paste(u)
var l=Lo.paste(o,i[0],s)
n.pasteCells(r,l).each(function(t){e.selection.setRng(t)
e.focus()
a.clear(r)})}})})}})}
var Ho={registerEvents:jo}
function Wo(e,t){var r=function(t,r){if(!C(r)&&!r.match(/^[0-9]+$/))throw e+".set accepts only positive integer values. Value was "+r
var n=t.dom()
an(n)&&(n.style[e]=r+"px")}
var n=function(r){var n=t(r)
if(n<=0||null===n){var a=cn(r,e)
return parseFloat(a)||0}return n}
var a=n
var o=function(e,t){return O(t,function(t,r){var n=cn(e,r)
var a=void 0===n?0:parseInt(n,10)
return isNaN(a)?t:t+a},0)}
var i=function(e,t,r){var n=o(e,r)
var a=t>n?t-n:0
return a}
return{set:r,get:n,getOuter:a,aggregate:o,max:i}}var Vo=Wo("height",function(e){var t=e.dom()
return pr(e)?t.getBoundingClientRect().height:t.offsetHeight})
var Go=function(e){return Vo.get(e)}
var Yo=function(e){return Vo.getOuter(e)}
var Jo=Wo("width",function(e){return e.dom().offsetWidth})
var qo=function(e){return Jo.get(e)}
var Ko=function(e){return Jo.getOuter(e)}
var Xo=Ft.detect()
var Zo=function(){return Xo.browser.isIE()||Xo.browser.isEdge()}
var $o=function(e,t){var r=parseFloat(e)
return isNaN(r)?t:r}
var ei=function(e,t,r){return $o(cn(e,t),r)}
var ti=function(e){var t=ei(e,"padding-top",0)
var r=ei(e,"padding-bottom",0)
var n=ei(e,"border-top-width",0)
var a=ei(e,"border-bottom-width",0)
var o=e.dom().getBoundingClientRect().height
var i=cn(e,"box-sizing")
var u=n+a
return"border-box"===i?o:o-t-r-u}
var ri=function(e){return ei(e,"width",qo(e))}
var ni=function(e){return Zo()?ti(e):ei(e,"height",Go(e))}
var ai={getWidth:ri,getHeight:ni}
var oi=/(\d+(\.\d+)?)(\w|%)*/
var ii=/(\d+(\.\d+)?)%/
var ui=/(\d+(\.\d+)?)px|em/
var si=function(e,t){sn(e,"width",t+"px")}
var li=function(e,t){sn(e,"width",t+"%")}
var ci=function(e,t){sn(e,"height",t+"px")}
var fi=function(e){return dn(e,"height").getOrThunk(function(){return ai.getHeight(e)+"px"})}
var di=function(e,t,r,n){var a=Yr.table(e).map(function(e){var n=r(e)
return Math.floor(t/100*n)}).getOr(t)
n(e,a)
return a}
var vi=function(e,t,r,n){var a=parseInt(e,10)
return Tt(e,"%")&&"table"!==rr(t)?di(t,a,r,n):a}
var mi=function(e){var t=fi(e)
if(!t)return Go(e)
return vi(t,e,Go,ci)}
var gi=function(e,t,r){var n=r(e)
var a=pi(e,t)
return n/a}
var pi=function(e,t){return vr(e,t)?parseInt(dr(e,t),10):1}
var Ai=function(e){var t=dn(e,"width")
return t.fold(function(){return A.from(dr(e,"width"))},function(e){return A.some(e)})}
var hi=function(e,t){return e/t.pixelWidth()*100}
var bi=function(e,t,r){if(ii.test(t)){var n=ii.exec(t)
return parseFloat(n[1])}var a=qo(e)
return hi(a,r)}
var yi=function(e,t){var r=Ai(e)
return r.fold(function(){var r=qo(e)
return hi(r,t)},function(r){return bi(e,r,t)})}
var wi=function(e,t){return e/100*t.pixelWidth()}
var Ei=function(e,t,r){if(ui.test(t)){var n=ui.exec(t)
return parseInt(n[1],10)}if(ii.test(t)){var a=ii.exec(t)
var o=parseFloat(a[1])
return wi(o,r)}return qo(e)}
var xi=function(e,t){var r=Ai(e)
return r.fold(function(){return qo(e)},function(r){return Ei(e,r,t)})}
var Ci=function(e){return gi(e,"rowspan",mi)}
var ki=function(e){var t=Ai(e)
return t.bind(function(e){if(oi.test(e)){var t=oi.exec(e)
return A.some({width:n(t[1]),unit:n(t[3])})}return A.none()})}
var Bi=function(e,t,r){sn(e,"width",t+r)}
var Ti={percentageBasedSizeRegex:n(ii),pixelBasedSizeRegex:n(ui),setPixelWidth:si,setPercentageWidth:li,setHeight:ci,getPixelWidth:xi,getPercentageWidth:yi,getGenericWidth:ki,setGenericWidth:Bi,getHeight:Ci,getRawWidth:Ai}
var Ri=function(e,t){var r=Ti.getGenericWidth(e)
r.each(function(r){var n=r.width()/2
Ti.setGenericWidth(e,n,r.unit())
Ti.setGenericWidth(t,n,r.unit())})}
var Ii={halve:Ri}
var Si=function(e,t){var r=t||Ce.fromDom(document.documentElement)
return Br(e,o(Lt,r)).isSome()}
var Di=function(e){var t=e.dom()
if(t===t.window&&e instanceof Window)return e
return sr(e)?t.defaultView||t.parentWindow:null}
var Ni=function(e,t){var r=function(r,n){return Ni(e+r,t+n)}
return{left:n(e),top:n(t),translate:r}}
var Mi=Ni
var Pi=function(e){var t=e.getBoundingClientRect()
return Mi(t.left,t.top)}
var _i=function(e,t){return void 0!==e?e:void 0!==t?t:0}
var Oi=function(e){var t=e.dom().ownerDocument
var r=t.body
var n=Di(Ce.fromDom(t))
var a=t.documentElement
var o=_i(n.pageYOffset,a.scrollTop)
var i=_i(n.pageXOffset,a.scrollLeft)
var u=_i(a.clientTop,r.clientTop)
var s=_i(a.clientLeft,r.clientLeft)
return Fi(e).translate(i-s,o-u)}
var Fi=function(e){var t=e.dom()
var r=t.ownerDocument
var n=r.body
var a=Ce.fromDom(r.documentElement)
if(n===t)return Mi(n.offsetLeft,n.offsetTop)
if(!Si(e,a))return Mi(0,0)
return Pi(t)}
var Li=X("row","y")
var Ui=X("col","x")
var Qi=function(e){var t=Oi(e)
return t.left()+Ko(e)}
var zi=function(e){return Oi(e).left()}
var ji=function(e,t){return Ui(e,zi(t))}
var Hi=function(e,t){return Ui(e,Qi(t))}
var Wi=function(e){return Oi(e).top()}
var Vi=function(e,t){return Li(e,Wi(t))}
var Gi=function(e,t){return Li(e,Wi(t)+Yo(t))}
var Yi=function(e,t,r){if(0===r.length)return[]
var n=D(r.slice(1),function(t,r){return t.map(function(t){return e(r,t)})})
var a=r[r.length-1].map(function(e){return t(r.length-1,e)})
return n.concat([a])}
var Ji=function(e,t){return-e}
var qi={delta:a,positions:o(Yi,Vi,Gi),edge:Wi}
var Ki={delta:a,edge:zi,positions:o(Yi,ji,Hi)}
var Xi={delta:Ji,edge:Qi,positions:o(Yi,Hi,ji)}
var Zi={height:qi,rtl:Xi,ltr:Ki}
var $i={ltr:Zi.ltr,rtl:Zi.rtl}
function eu(e){var t=function(t){return e(t).isRtl()?$i.rtl:$i.ltr}
var r=function(e,r){return t(r).delta(e,r)}
var n=function(e,r){return t(r).positions(e,r)}
var a=function(e){return t(e).edge(e)}
return{delta:r,edge:a,positions:n}}var tu=function(e){var t=Kr.fromTable(e)
var r=nn.generate(t)
return r.grid()}
var ru={getGridSize:tu}
var nu=function(e){var t=e
var r=function(){return t}
var n=function(e){t=e}
var a=function(){return nu(r())}
return{get:r,set:n,clone:a}}
var au=function(e,t){return ou(e,t,{validate:x,label:"function"})}
var ou=function(e,t,r){if(0===t.length)throw new Error("You must specify at least one required field.")
te("required",t)
ne(t)
return function(n){var a=Y(n)
var o=H(t,function(e){return I(a,e)})
o||$(t,a)
e(t,a)
var i=P(t,function(e){return!r.validate(n[e],e)})
i.length>0&&re(i,r.label)
return n}}
var iu=function(e,t){var r=P(t,function(t){return!I(e,t)})
r.length>0&&ee(r)}
var uu=function(e){return au(iu,e)}
var su=function(e){var t=vr(e,"colspan")?parseInt(dr(e,"colspan"),10):1
var r=vr(e,"rowspan")?parseInt(dr(e,"rowspan"),10):1
return{element:n(e),colspan:n(t),rowspan:n(r)}}
var lu=function(e,t){du(e)
var r=nu(A.none())
var n=void 0!==t?t:su
var a=function(t){return e.cell(t)}
var o=function(e){var t=n(e)
return a(t)}
var i=function(e){var t=o(e)
r.get().isNone()&&r.set(A.some(t))
u=A.some({item:e,replacement:t})
return t}
var u=A.none()
var s=function(e,t){return u.fold(function(){return i(e)},function(r){return t(e,r.item)?r.replacement:i(e)})}
return{getOrInit:s,cursor:r.get}}
var cu=function(e,t){return function(r){var n=nu(A.none())
du(r)
var a=[]
var o=function(e,t){return F(a,function(r){return t(r.item,e)})}
var i=function(o){var i=r.replace(o,t,{scope:e})
a.push({item:o,sub:i})
n.get().isNone()&&n.set(A.some(i))
return i}
var u=function(e,t){return o(e,t).fold(function(){return i(e)},function(r){return t(e,r.item)?r.sub:i(e)})}
return{replaceOrInit:u,cursor:n.get}}}
var fu=function(e){du(e)
var t=nu(A.none())
var r=function(r){t.get().isNone()&&t.set(A.some(r))
return function(){var t=e.cell({element:n(r),colspan:n(1),rowspan:n(1)})
vn(t,"width")
vn(r,"width")
return t}}
return{combine:r,cursor:t.get}}
var du=uu(["cell","row","replace","gap"])
var vu={modification:lu,transform:cu,merging:fu}
var mu=["body","p","div","article","aside","figcaption","figure","footer","header","nav","section","ol","ul","table","thead","tfoot","tbody","caption","tr","td","th","h1","h2","h3","h4","h5","h6","blockquote","pre","address"]
var gu=function(e,t){var r=e.property().name(t)
return I(["ol","ul"],r)}
var pu=function(e,t){var r=e.property().name(t)
return I(mu,r)}
var Au=function(e,t){var r=e.property().name(t)
return I(["address","pre","p","h1","h2","h3","h4","h5","h6"],r)}
var hu=function(e,t){var r=e.property().name(t)
return I(["h1","h2","h3","h4","h5","h6"],r)}
var bu=function(e,t){return I(["div","li","td","th","blockquote","body","caption"],e.property().name(t))}
var yu=function(e,t){return I(["br","img","hr","input"],e.property().name(t))}
var wu=function(e,t){return"iframe"===e.property().name(t)}
var Eu=function(e,t){return!(pu(e,t)||yu(e,t))&&"li"!==e.property().name(t)}
var xu={isBlock:pu,isList:gu,isFormatting:Au,isHeading:hu,isContainer:bu,isEmptyTag:yu,isFrame:wu,isInline:Eu}
var Cu=ua()
var ku=function(e){return xu.isBlock(Cu,e)}
var Bu=function(e){return xu.isList(Cu,e)}
var Tu=function(e){return xu.isFormatting(Cu,e)}
var Ru=function(e){return xu.isHeading(Cu,e)}
var Iu=function(e){return xu.isContainer(Cu,e)}
var Su=function(e){return xu.isEmptyTag(Cu,e)}
var Du=function(e){return xu.isFrame(Cu,e)}
var Nu=function(e){return xu.isInline(Cu,e)}
var Mu={isBlock:ku,isList:Bu,isFormatting:Tu,isHeading:Ru,isContainer:Iu,isEmptyTag:Su,isFrame:Du,isInline:Nu}
var Pu=function(e){var t=function(e){return"br"===rr(e)}
var r=function(e){return H(e,function(e){return t(e)||ur(e)&&0===Qn(e).trim().length})}
var n=function(e){return"li"===rr(e)||Br(e,Mu.isList).isSome()}
var a=function(e){return qt(e).map(function(e){if(Mu.isBlock(e))return true
if(Mu.isEmptyTag(e))return"img"!==rr(e)}).getOr(false)}
var o=function(e){return qn(e).bind(function(r){var o=a(r)
return Gt(r).map(function(a){return true===o||n(a)||t(r)||Mu.isBlock(a)&&!Lt(e,a)?[]:[Ce.fromTag("br")]})}).getOr([])}
var i=function(){var t=j(e,function(e){var t=Kt(e)
return r(t)?[]:t.concat(o(e))})
return 0===t.length?[Ce.fromTag("br")]:t}
var u=i()
xn(e[0])
En(e[0],u)}
var _u={merge:Pu}
var Ou=Object.prototype.hasOwnProperty
var Fu=function(e,t){return t}
var Lu=function(e){return function(){var t=new Array(arguments.length)
for(var r=0;r<t.length;r++)t[r]=arguments[r]
if(0===t.length)throw new Error("Can't merge zero objects")
var n={}
for(var a=0;a<t.length;a++){var o=t[a]
for(var i in o)Ou.call(o,i)&&(n[i]=e(n[i],o[i]))}return n}}
var Uu=Lu(Fu)
var Qu=function(e){var t=[]
var r=function(e){t.push(e)}
for(var n=0;n<e.length;n++)e[n].each(r)
return t}
var zu=function(e,t){for(var r=0;r<e.length;r++){var n=t(e[r],r)
if(n.isSome())return n}return A.none()}
var ju=function(e,t,r){var n=e.cells()
var a=n.slice(0,t)
var o=n.slice(t)
var i=a.concat([r]).concat(o)
return Wu(e,i)}
var Hu=function(e,t,r){var n=e.cells()
n[t]=r}
var Wu=function(e,t){return he.rowcells(t,e.section())}
var Vu=function(e,t){var r=e.cells()
var n=D(r,t)
return he.rowcells(n,e.section())}
var Gu=function(e,t){return e.cells()[t]}
var Yu=function(e,t){return Gu(e,t).element()}
var Ju=function(e){return e.cells().length}
var qu={addCell:ju,setCells:Wu,mutateCell:Hu,getCell:Gu,getCellElement:Yu,mapCells:Vu,cellLength:Ju}
var Ku=function(e,t){return D(e,function(e){return qu.getCell(e,t)})}
var Xu=function(e,t){return e[t]}
var Zu=function(e,t){if(0===e.length)return 0
var r=e[0]
var n=L(e,function(e){return!t(r.element(),e.element())})
return n.fold(function(){return e.length},function(e){return e})}
var $u=function(e,t,r,a){var o=Xu(e,t).cells().slice(r)
var i=Zu(o,a)
var u=Ku(e,r).slice(t)
var s=Zu(u,a)
return{colspan:n(i),rowspan:n(s)}}
var es={subgrid:$u}
var ts=function(e,t){var r=D(e,function(e,t){return D(e.cells(),function(e,t){return false})})
var n=function(e,t,n,a){for(var o=e;o<e+n;o++)for(var i=t;i<t+a;i++)r[o][i]=true}
return D(e,function(a,o){var i=j(a.cells(),function(a,i){if(false===r[o][i]){var u=es.subgrid(e,o,i,t)
n(o,i,u.rowspan(),u.colspan())
return[he.detailnew(a.element(),u.rowspan(),u.colspan(),a.isNew())]}return[]})
return he.rowdetails(i,a.section())})}
var rs=function(e,t,r){var n=[]
for(var a=0;a<e.grid().rows();a++){var o=[]
for(var i=0;i<e.grid().columns();i++){var u=nn.getAt(e,a,i).map(function(e){return he.elementnew(e.element(),r)}).getOrThunk(function(){return he.elementnew(t.gap(),true)})
o.push(u)}var s=he.rowcells(o,e.all()[a].section())
n.push(s)}return n}
var ns={toDetails:ts,toGrid:rs}
var as=function(e,t,r,n){r===n?mr(e,t):cr(e,t,r)}
var os=function(e,t){var r=[]
var a=[]
var o=function(t,n){var o=Dr(e,n).getOrThunk(function(){var t=Ce.fromTag(n,Wt(e).dom())
hn(e,t)
return t})
xn(o)
var i=D(t,function(e){e.isNew()&&r.push(e.element())
var t=e.element()
xn(t)
N(e.cells(),function(e){e.isNew()&&a.push(e.element())
as(e.element(),"colspan",e.colspan(),1)
as(e.element(),"rowspan",e.rowspan(),1)
hn(t,e.element())})
return t})
En(o,i)}
var i=function(t){Dr(e,t).each(Cn)}
var u=function(e,t){e.length>0?o(e,t):i(t)}
var s=[]
var l=[]
var c=[]
N(t,function(e){switch(e.section()){case"thead":s.push(e)
break
case"tbody":l.push(e)
break
case"tfoot":c.push(e)}})
u(s,"thead")
u(l,"tbody")
u(c,"tfoot")
return{newRows:n(r),newCells:n(a)}}
var is=function(e){var t=D(e,function(e){var t=Pn(e.element())
N(e.cells(),function(e){var r=_n(e.element())
as(r,"colspan",e.colspan(),1)
as(r,"rowspan",e.rowspan(),1)
hn(t,r)})
return t})
return t}
var us={render:os,copy:is}
var ss=function(e,t){var r=[]
for(var n=0;n<e;n++)r.push(t(n))
return r}
var ls=function(e,t){var r=[]
for(var n=e;n<t;n++)r.push(n)
return r}
var cs=function(e,t){var r=[]
N(e,function(n,a){a<e.length-1&&!t(n,e[a+1])?r.push(n):a===e.length-1&&r.push(n)})
return r}
var fs=function(e,t){if(t<0||t>=e.length-1)return A.none()
var r=e[t].fold(function(){var r=V(e.slice(0,t))
return zu(r,function(e,t){return e.map(function(e){return{value:e,delta:t+1}})})},function(e){return A.some({value:e,delta:0})})
var n=e[t+1].fold(function(){var r=e.slice(t+1)
return zu(r,function(e,t){return e.map(function(e){return{value:e,delta:t+1}})})},function(e){return A.some({value:e,delta:1})})
return r.bind(function(e){return n.map(function(t){var r=t.delta+e.delta
return Math.abs(t.value-e.value)/r})})}
var ds={repeat:ss,range:ls,unique:cs,deduce:fs}
var vs=function(e){var t=e.grid()
var r=ds.range(0,t.columns())
var a=ds.range(0,t.rows())
return D(r,function(t){var r=function(){return j(a,function(r){return nn.getAt(e,r,t).filter(function(e){return e.column()===t}).fold(n([]),function(e){return[e]})})}
var o=function(e){return 1===e.colspan()}
var i=function(){return nn.getAt(e,0,t)}
return ms(r,o,i)})}
var ms=function(e,t,r){var n=e()
var a=F(n,t)
var o=a.orThunk(function(){return A.from(n[0]).orThunk(r)})
return o.map(function(e){return e.element()})}
var gs=function(e){var t=e.grid()
var r=ds.range(0,t.rows())
var a=ds.range(0,t.columns())
return D(r,function(t){var r=function(){return j(a,function(r){return nn.getAt(e,t,r).filter(function(e){return e.row()===t}).fold(n([]),function(e){return[e]})})}
var o=function(e){return 1===e.rowspan()}
var i=function(){return nn.getAt(e,t,0)}
return ms(r,o,i)})}
var ps={columns:vs,rows:gs}
var As=function(e,t,r,n,a){var o=Ce.fromTag("div")
ln(o,{position:"absolute",left:t-n/2+"px",top:r+"px",height:a+"px",width:n+"px"})
fr(o,{"data-column":e,role:"presentation"})
return o}
var hs=function(e,t,r,n,a){var o=Ce.fromTag("div")
ln(o,{position:"absolute",left:t+"px",top:r-a/2+"px",height:a+"px",width:n+"px"})
fr(o,{"data-row":e,role:"presentation"})
return o}
var bs={col:As,row:hs}
var ys=function(e){var t=e.replace(/\./g,"-")
var r=function(e){return t+"-"+e}
return{resolve:r}}
var ws=ys("ephox-snooker")
var Es={resolve:ws.resolve}
var xs=function(e,t){var r=dr(e,t)
return void 0===r||""===r?[]:r.split(" ")}
var Cs=function(e,t,r){var n=xs(e,t)
var a=n.concat([r])
cr(e,t,a.join(" "))
return true}
var ks=function(e,t,r){var n=P(xs(e,t),function(e){return e!==r})
n.length>0?cr(e,t,n.join(" ")):mr(e,t)
return false}
var Bs=function(e){return void 0!==e.dom().classList}
var Ts=function(e){return xs(e,"class")}
var Rs=function(e,t){return Cs(e,"class",t)}
var Is=function(e,t){return ks(e,"class",t)}
var Ss=function(e,t){Bs(e)?e.dom().classList.add(t):Rs(e,t)}
var Ds=function(e){var t=Bs(e)?e.dom().classList:Ts(e)
0===t.length&&mr(e,"class")}
var Ns=function(e,t){if(Bs(e)){var r=e.dom().classList
r.remove(t)}else Is(e,t)
Ds(e)}
var Ms=function(e,t){return Bs(e)&&e.dom().classList.contains(t)}
var Ps=Es.resolve("resizer-bar")
var _s=Es.resolve("resizer-rows")
var Os=Es.resolve("resizer-cols")
var Fs=7
var Ls=function(e){var t=Cr(e.parent(),"."+Ps)
N(t,Cn)}
var Us=function(e,t,r){var n=e.origin()
N(t,function(t,a){t.each(function(t){var a=r(n,t)
Ss(a,Ps)
hn(e.parent(),a)})})}
var Qs=function(e,t,r,n){Us(e,t,function(e,t){var a=bs.col(t.col(),t.x()-e.left(),r.top()-e.top(),Fs,n)
Ss(a,Os)
return a})}
var zs=function(e,t,r,n){Us(e,t,function(e,t){var a=bs.row(t.row(),r.left()-e.left(),t.y()-e.top(),n,Fs)
Ss(a,_s)
return a})}
var js=function(e,t,r,n,a,o){var i=Oi(t)
var u=r.length>0?a.positions(r,t):[]
zs(e,u,i,Ko(t))
var s=n.length>0?o.positions(n,t):[]
Qs(e,s,i,Yo(t))}
var Hs=function(e,t,r,n){Ls(e)
var a=Kr.fromTable(t)
var o=nn.generate(a)
var i=ps.rows(o)
var u=ps.columns(o)
js(e,t,i,u,r,n)}
var Ws=function(e,t){var r=Cr(e.parent(),"."+Ps)
N(r,t)}
var Vs=function(e){Ws(e,function(e){sn(e,"display","none")})}
var Gs=function(e){Ws(e,function(e){sn(e,"display","block")})}
var Ys=function(e){return Ms(e,_s)}
var Js=function(e){return Ms(e,Os)}
var qs={refresh:Hs,hide:Vs,show:Gs,destroy:Ls,isRowBar:Ys,isColBar:Js}
var Ks=function(e,t){return ns.toGrid(e,t,false)}
var Xs=function(e,t){var r=function(e){var r=zu(e,function(e){return Gt(e.element()).map(function(e){var t=Gt(e).isNone()
return he.elementnew(e,t)})})
return r.getOrThunk(function(){return he.elementnew(t.row(),true)})}
return D(e,function(e){var t=r(e.details())
return he.rowdatanew(t.element(),e.details(),e.section(),t.isNew())})}
var Zs=function(e,t){var r=ns.toDetails(e,Lt)
return Xs(r,t)}
var $s=function(e,t){var r=z(D(e.all(),function(e){return e.cells()}))
return F(r,function(e){return Lt(t,e.element())})}
var el=function(e,t,r,a,o){return function(i,u,s,l,c){var f=Kr.fromTable(u)
var d=nn.generate(f)
var v=t(d,s).map(function(t){var r=Ks(d,l)
var a=e(r,t,Lt,o(l))
var i=Zs(a.grid(),l)
return{grid:n(i),cursor:a.cursor}})
return v.fold(function(){return A.none()},function(e){var t=us.render(u,e.grid())
r(u,e.grid(),c)
a(u)
qs.refresh(i,u,Zi.height,c)
return A.some({cursor:e.cursor,newRows:t.newRows,newCells:t.newCells})})}}
var tl=function(e,t){return Yr.cell(t.element()).bind(function(t){return $s(e,t)})}
var rl=function(e,t){return Yr.cell(t.element()).bind(function(r){return $s(e,r).map(function(e){return Uu(e,{generators:t.generators,clipboard:t.clipboard})})})}
var nl=function(e,t){var r=D(t.selection(),function(t){return Yr.cell(t).bind(function(t){return $s(e,t)})})
var n=Qu(r)
return n.length>0?A.some(Uu({cells:n},{generators:t.generators,clipboard:t.clipboard})):A.none()}
var al=function(e,t){return t.mergable()}
var ol=function(e,t){return t.unmergable()}
var il=function(e,t){var r=D(t.selection(),function(t){return Yr.cell(t).bind(function(t){return $s(e,t)})})
var n=Qu(r)
return n.length>0?A.some(n):A.none()}
var ul={run:el,toDetailList:Zs,onCell:tl,onCells:il,onPaste:rl,onPasteRows:nl,onMergable:al,onUnmergable:ol}
var sl=function(e){var t=function(t){return e===t}
var r=function(t){return sl(e)}
var a=function(t){return sl(e)}
var o=function(t){return sl(t(e))}
var i=function(t){return sl(e)}
var u=function(t){t(e)}
var s=function(t){return t(e)}
var f=function(t,r){return r(e)}
var d=function(t){return t(e)}
var v=function(t){return t(e)}
var m=function(){return A.some(e)}
return{is:t,isValue:c,isError:l,getOr:n(e),getOrThunk:n(e),getOrDie:n(e),or:r,orThunk:a,fold:f,map:o,mapError:i,each:u,bind:s,exists:d,forall:v,toOption:m}}
var ll=function(e){var r=function(e){return e()}
var n=function(){return u(String(e))()}
var o=function(e){return e}
var i=function(e){return e()}
var s=function(t){return ll(e)}
var f=function(t){return ll(t(e))}
var d=function(t){return ll(e)}
var v=function(t,r){return t(e)}
return{is:l,isValue:l,isError:c,getOr:a,getOrThunk:r,getOrDie:n,or:o,orThunk:i,fold:v,map:s,mapError:f,each:t,bind:d,exists:l,forall:c,toOption:A.none}}
var cl={value:sl,error:ll}
var fl=function(e,t,r){if(e.row()>=t.length||e.column()>qu.cellLength(t[0]))return cl.error("invalid start address out of table bounds, row: "+e.row()+", column: "+e.column())
var a=t.slice(e.row())
var o=a[0].cells().slice(e.column())
var i=qu.cellLength(r[0])
var u=r.length
return cl.value({rowDelta:n(a.length-u),colDelta:n(o.length-i)})}
var dl=function(e,t){var r=qu.cellLength(e[0])
var a=qu.cellLength(t[0])
return{rowDelta:n(0),colDelta:n(r-a)}}
var vl=function(e,t){return D(e,function(){return he.elementnew(t.cell(),true)})}
var ml=function(e,t,r){return e.concat(ds.repeat(t,function(t){return qu.setCells(e[e.length-1],vl(e[e.length-1].cells(),r))}))}
var gl=function(e,t,r){return D(e,function(e){return qu.setCells(e,e.cells().concat(vl(ds.range(0,t),r)))})}
var pl=function(e,t,r){var n=t.colDelta()<0?gl:a
var o=t.rowDelta()<0?ml:a
var i=n(e,Math.abs(t.colDelta()),r)
var u=o(i,Math.abs(t.rowDelta()),r)
return u}
var Al={measure:fl,measureWidth:dl,tailor:pl}
var hl=function(e,t,r,n){if(0===e.length)return e
for(var a=t.startRow();a<=t.finishRow();a++)for(var o=t.startCol();o<=t.finishCol();o++)qu.mutateCell(e[a],o,he.elementnew(n(),false))
return e}
var bl=function(e,t,r,n){var a=true
for(var o=0;o<e.length;o++)for(var i=0;i<qu.cellLength(e[0]);i++){var u=qu.getCellElement(e[o],i)
var s=r(u,t)
true===s&&false===a?qu.mutateCell(e[o],i,he.elementnew(n(),true)):true===s&&(a=false)}return e}
var yl=function(e,t){return O(e,function(e,r){return S(e,function(e){return t(e.element(),r.element())})?e:e.concat([r])},[])}
var wl=function(e,t,r,n){if(t>0&&t<e.length){var a=e[t-1].cells()
var o=yl(a,r)
N(o,function(a){var o=A.none()
for(var i=t;i<e.length;i++)for(var u=0;u<qu.cellLength(e[0]);u++){var s=e[i].cells()[u]
var l=r(s.element(),a.element())
if(l){o.isNone()&&(o=A.some(n()))
o.each(function(t){qu.mutateCell(e[i],u,he.elementnew(t,true))})}}})}return e}
var El={merge:hl,unmerge:bl,splitRows:wl}
var xl=function(e,t,r,n){var a=qu.getCell(e[t],r)
var i=o(n,a.element())
var u=e[t]
return e.length>1&&qu.cellLength(u)>1&&(r>0&&i(qu.getCellElement(u,r-1))||r<u.length-1&&i(qu.getCellElement(u,r+1))||t>0&&i(qu.getCellElement(e[t-1],r))||t<e.length-1&&i(qu.getCellElement(e[t+1],r)))}
var Cl=function(e,t,r,n,a){var o=e.row()
var i=e.column()
var u=r.length
var s=qu.cellLength(r[0])
var l=o+u
var c=i+s
for(var f=o;f<l;f++)for(var d=i;d<c;d++){xl(t,f,d,a)&&El.unmerge(t,qu.getCellElement(t[f],d),a,n.cell)
var v=qu.getCellElement(r[f-o],d-i)
var m=n.replace(v)
qu.mutateCell(t[f],d,he.elementnew(m,true))}return t}
var kl=function(e,t,r,n,a){var o=Al.measure(e,t,r)
return o.map(function(o){var i=Al.tailor(t,o,n)
return Cl(e,i,r,n,a)})}
var Bl=function(e,t,r,n,a){El.splitRows(t,e,a,n.cell)
var o=Al.measureWidth(r,t)
var i=Al.tailor(r,o,n)
var u=Al.measureWidth(t,i)
var s=Al.tailor(t,u,n)
return s.slice(0,e).concat(i).concat(s.slice(e,s.length))}
var Tl={merge:kl,insert:Bl}
var Rl=function(e,t,r,n,a){var o=e.slice(0,t)
var i=e.slice(t)
var u=qu.mapCells(e[r],function(r,o){var i=t>0&&t<e.length&&n(qu.getCellElement(e[t-1],o),qu.getCellElement(e[t],o))
var u=i?qu.getCell(e[t],o):he.elementnew(a(r.element(),n),true)
return u})
return o.concat([u]).concat(i)}
var Il=function(e,t,r,n,a){return D(e,function(e){var o=t>0&&t<qu.cellLength(e)&&n(qu.getCellElement(e,t-1),qu.getCellElement(e,t))
var i=o?qu.getCell(e,t):he.elementnew(a(qu.getCellElement(e,r),n),true)
return qu.addCell(e,t,i)})}
var Sl=function(e,t,r,n,a){var o=r+1
return D(e,function(e,i){var u=i===t
var s=u?he.elementnew(a(qu.getCellElement(e,r),n),true):qu.getCell(e,r)
return qu.addCell(e,o,s)})}
var Dl=function(e,t,r,n,a){var o=t+1
var i=e.slice(0,o)
var u=e.slice(o)
var s=qu.mapCells(e[t],function(e,t){var o=t===r
return o?he.elementnew(a(e.element(),n),true):e})
return i.concat([s]).concat(u)}
var Nl=function(e,t,r){var n=D(e,function(e){var n=e.cells().slice(0,t).concat(e.cells().slice(r+1))
return he.rowcells(n,e.section())})
return P(n,function(e){return e.cells().length>0})}
var Ml=function(e,t,r){return e.slice(0,t).concat(e.slice(r+1))}
var Pl={insertRowAt:Rl,insertColumnAt:Il,splitCellIntoColumns:Sl,splitCellIntoRows:Dl,deleteRowsAt:Ml,deleteColumnsAt:Nl}
var _l=function(e,t,r,n){var a=function(e){return S(t,function(t){return r(e.element(),t.element())})}
return D(e,function(e){return qu.mapCells(e,function(e){return a(e)?he.elementnew(n(e.element(),r),true):e})})}
var Ol=function(e,t,r,n){return void 0!==qu.getCellElement(e[t],r)&&t>0&&n(qu.getCellElement(e[t-1],r),qu.getCellElement(e[t],r))}
var Fl=function(e,t,r){return t>0&&r(qu.getCellElement(e,t-1),qu.getCellElement(e,t))}
var Ll=function(e,t,r,n){var a=j(e,function(n,a){var o=Ol(e,a,t,r)||Fl(n,t,r)
return o?[]:[qu.getCell(n,t)]})
return _l(e,a,r,n)}
var Ul=function(e,t,r,n){var a=e[t]
var o=j(a.cells(),function(n,o){var i=Ol(e,t,o,r)||Fl(a,o,r)
return i?[]:[n]})
return _l(e,o,r,n)}
var Ql={replaceColumn:Ll,replaceRow:Ul}
var zl=function(){return Gl(function(e,t,r,n,a){return e()})}
var jl=function(e){return Gl(function(t,r,n,a,o){return r(e)})}
var Hl=function(e,t){return Gl(function(r,n,a,o,i){return a(e,t)})}
var Wl=function(e,t,r){return Gl(function(n,a,o,i,u){return i(e,t,r)})}
var Vl=function(e,t){return Gl(function(r,n,a,o,i){return i(e,t)})}
var Gl=function(e){return{fold:e}}
var Yl={none:zl,only:jl,left:Hl,middle:Wl,right:Vl}
var Jl=function(e,t){if(0===e.length)return Yl.none()
if(1===e.length)return Yl.only(0)
if(0===t)return Yl.left(0,1)
if(t===e.length-1)return Yl.right(t-1,t)
if(t>0&&t<e.length-1)return Yl.middle(t-1,t,t+1)
return Yl.none()}
var ql=function(e,t,r,a){var o=e.slice(0)
var i=Jl(e,t)
var u=function(e){return D(e,n(0))}
var s=n(u(o))
var l=function(e){return a.singleColumnWidth(o[e],r)}
var c=function(e,t){if(r>=0){var n=Math.max(a.minCellWidth(),o[t]-r)
return u(o.slice(0,e)).concat([r,n-o[t]]).concat(u(o.slice(t+1)))}var i=Math.max(a.minCellWidth(),o[e]+r)
var s=o[e]-i
return u(o.slice(0,e)).concat([i-o[e],s]).concat(u(o.slice(t+1)))}
var f=c
var d=function(e,t,r){return c(t,r)}
var v=function(e,t){if(r>=0)return u(o.slice(0,t)).concat([r])
var n=Math.max(a.minCellWidth(),o[t]+r)
return u(o.slice(0,t)).concat([n-o[t]])}
return i.fold(s,l,f,d,v)}
var Kl={determine:ql}
var Xl=function(e,t){return vr(e,t)&&parseInt(dr(e,t),10)>1}
var Zl=function(e){return Xl(e,"colspan")}
var $l=function(e){return Xl(e,"rowspan")}
var ec=function(e,t){return parseInt(cn(e,t),10)}
var tc={hasColspan:Zl,hasRowspan:$l,minWidth:n(10),minHeight:n(10),getInt:ec}
var rc=function(e,t,r){return dn(e,t).fold(function(){return r(e)+"px"},function(e){return e})}
var nc=function(e){return rc(e,"width",Ti.getPixelWidth)}
var ac=function(e){return rc(e,"height",Ti.getHeight)}
var oc=function(e,t,r,n,a){var o=ps.columns(e)
var u=D(o,function(e){return e.map(t.edge)})
return D(o,function(e,t){var o=e.filter(i(tc.hasColspan))
return o.fold(function(){var e=ds.deduce(u,t)
return n(e)},function(e){return r(e,a)})})}
var ic=function(e){return e.map(function(e){return e+"px"}).getOr("")}
var uc=function(e,t){return oc(e,t,nc,ic)}
var sc=function(e,t,r){return oc(e,t,Ti.getPercentageWidth,function(e){return e.fold(function(){return r.minCellWidth()},function(e){return e/r.pixelWidth()*100})},r)}
var lc=function(e,t,r){return oc(e,t,Ti.getPixelWidth,function(e){return e.getOrThunk(r.minCellWidth)},r)}
var cc=function(e,t,r,n){var a=ps.rows(e)
var o=D(a,function(e){return e.map(t.edge)})
return D(a,function(e,t){var a=e.filter(i(tc.hasRowspan))
return a.fold(function(){var e=ds.deduce(o,t)
return n(e)},function(e){return r(e)})})}
var fc=function(e,t){return cc(e,t,Ti.getHeight,function(e){return e.getOrThunk(tc.minHeight)})}
var dc=function(e,t){return cc(e,t,ac,ic)}
var vc={getRawWidths:uc,getPixelWidths:lc,getPercentageWidths:sc,getPixelHeights:fc,getRawHeights:dc}
var mc=function(e,t,r){var n=0
for(var a=e;a<t;a++)n+=void 0!==r[a]?r[a]:0
return n}
var gc=function(e,t){var r=nn.justCells(e)
return D(r,function(e){var r=mc(e.column(),e.column()+e.colspan(),t)
return{element:e.element,width:n(r),colspan:e.colspan}})}
var pc=function(e,t){var r=nn.justCells(e)
return D(r,function(e){var r=mc(e.row(),e.row()+e.rowspan(),t)
return{element:e.element,height:n(r),rowspan:e.rowspan}})}
var Ac=function(e,t){return D(e.all(),function(e,r){return{element:e.element,height:n(t[r])}})}
var hc={recalculateWidth:gc,recalculateHeight:pc,matchRowHeight:Ac}
var bc=function(e,t){var r=parseFloat(e)
var a=qo(t)
var o=function(e){return e/a*100}
var i=function(e,t){return[100-e]}
var u=function(){return tc.minWidth()/a*100}
var s=function(e,t,n){var a=r+n
Ti.setPercentageWidth(e,a)}
return{width:n(r),pixelWidth:n(a),getWidths:vc.getPercentageWidths,getCellDelta:o,singleColumnWidth:i,minCellWidth:u,setElementWidth:Ti.setPercentageWidth,setTableWidth:s}}
var yc=function(e){var t=parseInt(e,10)
var r=a
var o=function(e,t){var r=Math.max(tc.minWidth(),e+t)
return[r-e]}
var i=function(e,t,r){var n=_(t,function(e,t){return e+t},0)
Ti.setPixelWidth(e,n)}
return{width:n(t),pixelWidth:n(t),getWidths:vc.getPixelWidths,getCellDelta:r,singleColumnWidth:o,minCellWidth:tc.minWidth,setElementWidth:Ti.setPixelWidth,setTableWidth:i}}
var wc=function(e,t){if(Ti.percentageBasedSizeRegex().test(t)){var r=Ti.percentageBasedSizeRegex().exec(t)
return bc(r[1],e)}if(Ti.pixelBasedSizeRegex().test(t)){var n=Ti.pixelBasedSizeRegex().exec(t)
return yc(n[1])}var a=qo(e)
return yc(a)}
var Ec=function(e){var t=Ti.getRawWidth(e)
return t.fold(function(){var t=qo(e)
return yc(t)},function(t){return wc(e,t)})}
var xc={getTableSize:Ec}
var Cc=function(e){return nn.generate(e)}
var kc=function(e){return _(e,function(e,t){return e+t},0)}
var Bc=function(e){var t=Kr.fromTable(e)
return Cc(t)}
var Tc=function(e,t,r,n){var a=xc.getTableSize(e)
var o=a.getCellDelta(t)
var i=Bc(e)
var u=a.getWidths(i,n,a)
var s=Kl.determine(u,r,o,a)
var l=D(s,function(e,t){return e+u[t]})
var c=hc.recalculateWidth(i,l)
N(c,function(e){a.setElementWidth(e.element(),e.width())})
r===i.grid().columns()-1&&a.setTableWidth(e,l,o)}
var Rc=function(e,t,r,n){var a=Bc(e)
var o=vc.getPixelHeights(a,n)
var i=D(o,function(e,n){return r===n?Math.max(t+e,tc.minHeight()):e})
var u=hc.recalculateHeight(a,i)
var s=hc.matchRowHeight(a,i)
N(s,function(e){Ti.setHeight(e.element(),e.height())})
N(u,function(e){Ti.setHeight(e.element(),e.height())})
var l=kc(i)
Ti.setHeight(e,l)}
var Ic=function(e,t,r){var n=xc.getTableSize(e)
var a=Cc(t)
var o=n.getWidths(a,r,n)
var i=hc.recalculateWidth(a,o)
N(i,function(e){n.setElementWidth(e.element(),e.width())})
var u=_(o,function(e,t){return t+e},0)
i.length>0&&n.setElementWidth(e,u)}
var Sc={adjustWidth:Tc,adjustHeight:Rc,adjustWidthTo:Ic}
var Dc=function(e){var t=Yr.cells(e)
0===t.length&&Cn(e)}
var Nc=X("grid","cursor")
var Mc=function(e,t,r){return Pc(e,t,r).orThunk(function(){return Pc(e,0,0)})}
var Pc=function(e,t,r){return A.from(e[t]).bind(function(e){return A.from(e.cells()[r]).bind(function(e){return A.from(e.element())})})}
var _c=function(e,t,r){return Nc(e,Pc(e,t,r))}
var Oc=function(e){return O(e,function(e,t){return S(e,function(e){return e.row()===t.row()})?e:e.concat([t])},[]).sort(function(e,t){return e.row()-t.row()})}
var Fc=function(e){return O(e,function(e,t){return S(e,function(e){return e.column()===t.column()})?e:e.concat([t])},[]).sort(function(e,t){return e.column()-t.column()})}
var Lc=function(e,t,r,n){var a=t.row()
var o=t.row()
var i=Pl.insertRowAt(e,o,a,r,n.getOrInit)
return _c(i,o,t.column())}
var Uc=function(e,t,r,n){var a=t[0].row()
var o=t[0].row()
var i=Oc(t)
var u=O(i,function(e,t){return Pl.insertRowAt(e,o,a,r,n.getOrInit)},e)
return _c(u,o,t[0].column())}
var Qc=function(e,t,r,n){var a=t.row()
var o=t.row()+t.rowspan()
var i=Pl.insertRowAt(e,o,a,r,n.getOrInit)
return _c(i,o,t.column())}
var zc=function(e,t,r,n){var a=Oc(t)
var o=a[a.length-1].row()
var i=a[a.length-1].row()+a[a.length-1].rowspan()
var u=O(a,function(e,t){return Pl.insertRowAt(e,i,o,r,n.getOrInit)},e)
return _c(u,i,t[0].column())}
var jc=function(e,t,r,n){var a=t.column()
var o=t.column()
var i=Pl.insertColumnAt(e,o,a,r,n.getOrInit)
return _c(i,t.row(),o)}
var Hc=function(e,t,r,n){var a=Fc(t)
var o=a[0].column()
var i=a[0].column()
var u=O(a,function(e,t){return Pl.insertColumnAt(e,i,o,r,n.getOrInit)},e)
return _c(u,t[0].row(),i)}
var Wc=function(e,t,r,n){var a=t.column()
var o=t.column()+t.colspan()
var i=Pl.insertColumnAt(e,o,a,r,n.getOrInit)
return _c(i,t.row(),o)}
var Vc=function(e,t,r,n){var a=t[t.length-1].column()
var o=t[t.length-1].column()+t[t.length-1].colspan()
var i=Fc(t)
var u=O(i,function(e,t){return Pl.insertColumnAt(e,o,a,r,n.getOrInit)},e)
return _c(u,t[0].row(),o)}
var Gc=function(e,t,r,n){var a=Ql.replaceRow(e,t.row(),r,n.replaceOrInit)
return _c(a,t.row(),t.column())}
var Yc=function(e,t,r,n){var a=Ql.replaceColumn(e,t.column(),r,n.replaceOrInit)
return _c(a,t.row(),t.column())}
var Jc=function(e,t,r,n){var a=Ql.replaceRow(e,t.row(),r,n.replaceOrInit)
return _c(a,t.row(),t.column())}
var qc=function(e,t,r,n){var a=Ql.replaceColumn(e,t.column(),r,n.replaceOrInit)
return _c(a,t.row(),t.column())}
var Kc=function(e,t,r,n){var a=Pl.splitCellIntoColumns(e,t.row(),t.column(),r,n.getOrInit)
return _c(a,t.row(),t.column())}
var Xc=function(e,t,r,n){var a=Pl.splitCellIntoRows(e,t.row(),t.column(),r,n.getOrInit)
return _c(a,t.row(),t.column())}
var Zc=function(e,t,r,n){var a=Fc(t)
var o=Pl.deleteColumnsAt(e,a[0].column(),a[a.length-1].column())
var i=Mc(o,t[0].row(),t[0].column())
return Nc(o,i)}
var $c=function(e,t,r,n){var a=Oc(t)
var o=Pl.deleteRowsAt(e,a[0].row(),a[a.length-1].row())
var i=Mc(o,t[0].row(),t[0].column())
return Nc(o,i)}
var ef=function(e,t,r,a){var o=t.cells()
_u.merge(o)
var i=El.merge(e,t.bounds(),r,n(o[0]))
return Nc(i,A.from(o[0]))}
var tf=function(e,t,r,n){var a=_(t,function(e,t){return El.unmerge(e,t,r,n.combine(t))},e)
return Nc(a,A.from(t[0]))}
var rf=function(e,t,r,n){var a=function(e,t){var r=Kr.fromTable(e)
var n=nn.generate(r)
return ns.toGrid(n,t,true)}
var o=a(t.clipboard(),t.generators())
var i=he.address(t.row(),t.column())
var u=Tl.merge(i,e,o,t.generators(),r)
return u.fold(function(){return Nc(e,A.some(t.element()))},function(e){var r=Mc(e,t.row(),t.column())
return Nc(e,r)})}
var nf=function(e,t,r){var n=Kr.fromPastedRows(e,r)
var a=nn.generate(n)
return ns.toGrid(a,t,true)}
var af=function(e,t,r,n){var a=e[t.cells[0].row()]
var o=t.cells[0].row()
var i=nf(t.clipboard(),t.generators(),a)
var u=Tl.insert(o,e,i,t.generators(),r)
var s=Mc(u,t.cells[0].row(),t.cells[0].column())
return Nc(u,s)}
var of=function(e,t,r,n){var a=e[t.cells[0].row()]
var o=t.cells[t.cells.length-1].row()+t.cells[t.cells.length-1].rowspan()
var i=nf(t.clipboard(),t.generators(),a)
var u=Tl.insert(o,e,i,t.generators(),r)
var s=Mc(u,t.cells[0].row(),t.cells[0].column())
return Nc(u,s)}
var uf=Sc.adjustWidthTo
var sf={insertRowBefore:ul.run(Lc,ul.onCell,t,t,vu.modification),insertRowsBefore:ul.run(Uc,ul.onCells,t,t,vu.modification),insertRowAfter:ul.run(Qc,ul.onCell,t,t,vu.modification),insertRowsAfter:ul.run(zc,ul.onCells,t,t,vu.modification),insertColumnBefore:ul.run(jc,ul.onCell,uf,t,vu.modification),insertColumnsBefore:ul.run(Hc,ul.onCells,uf,t,vu.modification),insertColumnAfter:ul.run(Wc,ul.onCell,uf,t,vu.modification),insertColumnsAfter:ul.run(Vc,ul.onCells,uf,t,vu.modification),splitCellIntoColumns:ul.run(Kc,ul.onCell,t,t,vu.modification),splitCellIntoRows:ul.run(Xc,ul.onCell,t,t,vu.modification),eraseColumns:ul.run(Zc,ul.onCells,uf,Dc,vu.modification),eraseRows:ul.run($c,ul.onCells,t,Dc,vu.modification),makeColumnHeader:ul.run(Yc,ul.onCell,t,t,vu.transform("row","th")),unmakeColumnHeader:ul.run(qc,ul.onCell,t,t,vu.transform(null,"td")),makeRowHeader:ul.run(Gc,ul.onCell,t,t,vu.transform("col","th")),unmakeRowHeader:ul.run(Jc,ul.onCell,t,t,vu.transform(null,"td")),mergeCells:ul.run(ef,ul.onMergable,t,t,vu.merging),unmergeCells:ul.run(tf,ul.onUnmergable,t,t,vu.merging),pasteCells:ul.run(rf,ul.onPaste,uf,t,vu.modification),pasteRowsBefore:ul.run(af,ul.onPasteRows,t,t,vu.modification),pasteRowsAfter:ul.run(of,ul.onPasteRows,t,t,vu.modification)}
var lf=function(e){return Ce.fromDom(e.getBody())}
var cf=function(e){return e.getBoundingClientRect().width}
var ff=function(e){return e.getBoundingClientRect().height}
var df=function(e){return function(t){return Lt(t,lf(e))}}
var vf=function(e){return e?e.replace(/px$/,""):""}
var mf=function(e){/^[0-9]+$/.test(e)&&(e+="px")
return e}
var gf=function(e){var t=Cr(e,"td[data-mce-style],th[data-mce-style]")
mr(e,"data-mce-style")
N(t,function(e){mr(e,"data-mce-style")})}
var pf=function(e){return"rtl"===cn(e,"direction")?"rtl":"ltr"}
var Af={isRtl:n(false)}
var hf={isRtl:n(true)}
var bf=function(e){var t=pf(e)
return"rtl"===t?hf:Af}
var yf={directionAt:bf}
var wf=["tableprops","tabledelete","|","tableinsertrowbefore","tableinsertrowafter","tabledeleterow","|","tableinsertcolbefore","tableinsertcolafter","tabledeletecol"]
var Ef={"border-collapse":"collapse",width:"100%"}
var xf={border:"1"}
var Cf=function(e){return e.getParam("table_default_attributes",xf,"object")}
var kf=function(e){return e.getParam("table_default_styles",Ef,"object")}
var Bf=function(e){return e.getParam("table_resize_bars",true,"boolean")}
var Tf=function(e){return e.getParam("table_tab_navigation",true,"boolean")}
var Rf=function(e){return e.getParam("table_cell_advtab",true,"boolean")}
var If=function(e){return e.getParam("table_row_advtab",true,"boolean")}
var Sf=function(e){return e.getParam("table_advtab",true,"boolean")}
var Df=function(e){return e.getParam("table_appearance_options",true,"boolean")}
var Nf=function(e){return e.getParam("table_grid",true,"boolean")}
var Mf=function(e){return e.getParam("table_style_by_css",false,"boolean")}
var Pf=function(e){return e.getParam("table_cell_class_list",[],"array")}
var _f=function(e){return e.getParam("table_row_class_list",[],"array")}
var Of=function(e){return e.getParam("table_class_list",[],"array")}
var Ff=function(e){return e.getParam("color_picker_callback")}
var Lf=function(e){return false===e.getParam("table_responsive_width")}
var Uf=function(e){var t=e.getParam("table_clone_elements")
return y(t)?A.some(t.split(/[ ,]/)):Array.isArray(t)?A.some(t):A.none()}
var Qf=function(e){var t=e.getParam("object_resizing",true)
return"table"===t||t}
var zf=function(e){var t=e.getParam("table_toolbar",wf)
return""===t||false===t?[]:y(t)?t.split(/[ ,]/):w(t)?t:[]}
var jf=function(e,t){return e.fire("newrow",{node:t})}
var Hf=function(e,t){return e.fire("newcell",{node:t})}
var Wf=function(e,t,r,n){e.fire("ObjectResizeStart",{target:t,width:r,height:n})}
var Vf=function(e,t,r,n){e.fire("ObjectResized",{target:t,width:r,height:n})}
var Gf=function(e,r){var n=function(e){return"table"===rr(lf(e))}
var a=function(t){var r=ru.getGridSize(t)
return false===n(e)||r.rows()>1}
var o=function(t){var r=ru.getGridSize(t)
return false===n(e)||r.columns()>1}
var i=Uf(e)
var u=function(t,r,n,a){return function(o,u){gf(o)
var s=a()
var l=Ce.fromDom(e.getDoc())
var c=eu(yf.directionAt)
var f=aa.cellOperations(n,l,i)
return r(o)?t(s,o,u,f,c).bind(function(t){N(t.newRows(),function(t){jf(e,t.dom())})
N(t.newCells(),function(t){Hf(e,t.dom())})
return t.cursor().map(function(t){var r=e.dom.createRng()
r.setStart(t.dom(),0)
r.setEnd(t.dom(),0)
return r})}):A.none()}}
var s=u(sf.eraseRows,a,t,r)
var l=u(sf.eraseColumns,o,t,r)
var f=u(sf.insertRowsBefore,c,t,r)
var d=u(sf.insertRowsAfter,c,t,r)
var v=u(sf.insertColumnsBefore,c,Ii.halve,r)
var m=u(sf.insertColumnsAfter,c,Ii.halve,r)
var g=u(sf.mergeCells,c,t,r)
var p=u(sf.unmergeCells,c,t,r)
var h=u(sf.pasteRowsBefore,c,t,r)
var b=u(sf.pasteRowsAfter,c,t,r)
var y=u(sf.pasteCells,c,t,r)
return{deleteRow:s,deleteColumn:l,insertRowsBefore:f,insertRowsAfter:d,insertColumnsBefore:v,insertColumnsAfter:m,mergeCells:g,unmergeCells:p,pasteRowsBefore:h,pasteRowsAfter:b,pasteCells:y}}
var Yf=function(e,t,r){var n=Kr.fromTable(e)
var a=nn.generate(n)
var o=ul.onCells(a,t)
return o.map(function(e){var t=ns.toGrid(a,r,false)
var n=t.slice(e[0].row(),e[e.length-1].row()+e[e.length-1].rowspan())
var o=ul.toDetailList(n,r)
return us.copy(o)})}
var Jf={copyRows:Yf}
var qf=tinymce.util.Tools.resolve("tinymce.util.Tools")
var Kf=function(e,t,r){var n=e.select("td,th",t)
var a
var o=function(t,n){for(var a=0;a<n.length;a++){var o=e.getStyle(n[a],r)
"undefined"===typeof t&&(t=o)
if(t!==o)return""}return t}
a=o(a,n)
return a}
var Xf=function(e,t,r){r&&e.formatter.apply("align"+r,{},t)}
var Zf=function(e,t,r){r&&e.formatter.apply("valign"+r,{},t)}
var $f=function(e,t){qf.each("left center right".split(" "),function(r){e.formatter.remove("align"+r,{},t)})}
var ed=function(e,t){qf.each("top middle bottom".split(" "),function(r){e.formatter.remove("valign"+r,{},t)})}
var td={applyAlign:Xf,applyVAlign:Zf,unApplyAlign:$f,unApplyVAlign:ed,getTDTHOverallStyle:Kf}
var rd=function(e,t,r){var n=function(e,r){r=r||[]
qf.each(e,function(e){var a={text:e.text||e.title}
if(e.menu)a.menu=n(e.menu)
else{a.value=e.value
t&&t(a)}r.push(a)})
return r}
return n(e,r||[])}
function nd(e){return e.control.rootControl.find("#style")[0].getEl().isEqualNode(document.activeElement)}var ad=function(e,t){nd(t)?id(e,t):od(e,t)}
var od=function(e,t){var r=e.dom
var n=t.control.rootControl
var a=n.toJSON()
var o=r.parseStyle(a.style)
o["border-style"]=a.borderStyle
o["border-color"]=a.borderColor
o["background-color"]=a.backgroundColor
o.width=a.width?mf(a.width):""
o.height=a.height?mf(a.height):""
n.find("#style").value(r.serializeStyle(r.parseStyle(r.serializeStyle(o))))}
var id=function(e,t){var r=e.dom
var n=t.control.rootControl
var a=n.toJSON()
var o=r.parseStyle(a.style)
n.find("#borderStyle").value(o["border-style"]||"")
n.find("#borderColor").value(o["border-color"]||"")
n.find("#backgroundColor").value(o["background-color"]||"")
n.find("#width").value(o.width||"")
n.find("#height").value(o.height||"")}
var ud=function(e,t){var r=e.parseStyle(e.getAttrib(t,"style"))
var n={}
r["border-style"]&&(n.borderStyle=r["border-style"])
r["border-color"]&&(n.borderColor=r["border-color"])
r["background-color"]&&(n.backgroundColor=r["background-color"])
n.style=e.serializeStyle(r)
return n}
var sd=function(e){var t=function(){var t=Ff(e)
if(t)return function(r){return t.call(e,function(e){r.control.value(e).fire("change")},r.control.value())}}
return{title:"Advanced",type:"form",defaults:{onchange:o(od,e)},items:[{label:"Style",name:"style",type:"textbox",onchange:o(id,e)},{type:"form",padding:0,formItemDefaults:{layout:"grid",alignH:["start","right"]},defaults:{size:7},items:[{label:"Border style",type:"listbox",name:"borderStyle",width:90,onselect:o(od,e),values:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]},{label:"Border color",type:"colorbox",name:"borderColor",onaction:t()},{label:"Background color",type:"colorbox",name:"backgroundColor",onaction:t()}]}]}}
var ld={createStyleForm:sd,buildListItems:rd,updateStyleField:od,extractAdvancedStyles:ud,updateAdvancedFields:id,syncAdvancedStyleFields:ad}
var cd=function(e,t){delete e.dataset.mceStyle
e.style.cssText+=";"+t}
var fd=function(e,t){var r=e.dom
var n={width:r.getStyle(t,"width")||r.getAttrib(t,"width"),height:r.getStyle(t,"height")||r.getAttrib(t,"height"),scope:r.getAttrib(t,"scope"),class:r.getAttrib(t,"class"),type:t.nodeName.toLowerCase(),style:"",align:"",valign:""}
qf.each("left center right".split(" "),function(r){e.formatter.matchNode(t,"align"+r)&&(n.align=r)})
qf.each("top middle bottom".split(" "),function(r){e.formatter.matchNode(t,"valign"+r)&&(n.valign=r)})
Rf(e)&&qf.extend(n,ld.extractAdvancedStyles(r,t))
return n}
var dd=function(e,t,r){var n=e.dom
var a
function o(e,r,a){(1===t.length||a)&&n.setAttrib(e,r,a)}function i(e,r,a){(1===t.length||a)&&n.setStyle(e,r,a)}Rf(e)&&ld.syncAdvancedStyleFields(e,r)
a=r.control.rootControl.toJSON()
e.undoManager.transact(function(){qf.each(t,function(r){o(r,"scope",a.scope)
1===t.length?o(r,"style",a.style):cd(r,a.style)
o(r,"class",a.class)
i(r,"width",mf(a.width))
i(r,"height",mf(a.height))
a.type&&r.nodeName.toLowerCase()!==a.type&&(r=n.rename(r,a.type))
if(1===t.length){td.unApplyAlign(e,r)
td.unApplyVAlign(e,r)}a.align&&td.applyAlign(e,r,a.align)
a.valign&&td.applyVAlign(e,r,a.valign)})
e.focus()})}
var vd=function(e){var t,r,n,a=[]
a=e.dom.select("td[data-mce-selected],th[data-mce-selected]")
t=e.dom.getParent(e.selection.getStart(),"td,th")
!a.length&&t&&a.push(t)
t=t||a[0]
if(!t)return
r=a.length>1?{width:"",height:"",scope:"",class:"",align:"",valign:"",style:"",type:t.nodeName.toLowerCase()}:fd(e,t)
Pf(e).length>0&&(n={name:"class",type:"listbox",label:"Class",values:ld.buildListItems(Pf(e),function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({block:"td",classes:[t.value]})})})})
var i={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",layout:"grid",columns:2,labelGapCalc:false,padding:0,defaults:{type:"textbox",maxWidth:50},items:[{label:"Width",name:"width",onchange:o(ld.updateStyleField,e)},{label:"Height",name:"height",onchange:o(ld.updateStyleField,e)},{label:"Cell type",name:"type",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"Cell",value:"td"},{text:"Header cell",value:"th"}]},{label:"Scope",name:"scope",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Row",value:"row"},{text:"Column",value:"col"},{text:"Row group",value:"rowgroup"},{text:"Column group",value:"colgroup"}]},{label:"H Align",name:"align",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"V Align",name:"valign",type:"listbox",text:"None",minWidth:90,maxWidth:null,values:[{text:"None",value:""},{text:"Top",value:"top"},{text:"Middle",value:"middle"},{text:"Bottom",value:"bottom"}]}]},n]}
Rf(e)?e.windowManager.open({title:"Cell properties",bodyType:"tabpanel",data:r,body:[{title:"General",type:"form",items:i},ld.createStyleForm(e)],onsubmit:o(dd,e,a)}):e.windowManager.open({title:"Cell properties",data:r,body:i,onsubmit:o(dd,e,a)})}
var md={open:vd}
var gd=function(e,t){var r=e.dom
var n={height:r.getStyle(t,"height")||r.getAttrib(t,"height"),scope:r.getAttrib(t,"scope"),class:r.getAttrib(t,"class"),align:"",style:"",type:t.parentNode.nodeName.toLowerCase()}
qf.each("left center right".split(" "),function(r){e.formatter.matchNode(t,"align"+r)&&(n.align=r)})
If(e)&&qf.extend(n,ld.extractAdvancedStyles(r,t))
return n}
var pd=function(e,t,r){var n=e.getParent(t,"table")
var a=t.parentNode
var o=e.select(r,n)[0]
if(!o){o=e.create(r)
n.firstChild?"CAPTION"===n.firstChild.nodeName?e.insertAfter(o,n.firstChild):n.insertBefore(o,n.firstChild):n.appendChild(o)}o.appendChild(t)
a.hasChildNodes()||e.remove(a)}
function Ad(e,t,r,n){var a=e.dom
function o(e,r,n){(1===t.length||n)&&a.setAttrib(e,r,n)}function i(e,r,n){(1===t.length||n)&&a.setStyle(e,r,n)}If(e)&&ld.syncAdvancedStyleFields(e,n)
var u=n.control.rootControl.toJSON()
e.undoManager.transact(function(){qf.each(t,function(t){o(t,"scope",u.scope)
o(t,"style",u.style)
o(t,"class",u.class)
i(t,"height",mf(u.height))
u.type!==t.parentNode.nodeName.toLowerCase()&&pd(e.dom,t,u.type)
if(u.align!==r.align){td.unApplyAlign(e,t)
td.applyAlign(e,t,u.align)}})
e.focus()})}var hd=function(e){var t=e.dom
var r,n,a,i,u
var s=[]
var l
r=t.getParent(e.selection.getStart(),"table")
n=t.getParent(e.selection.getStart(),"td,th")
qf.each(r.rows,function(e){qf.each(e.cells,function(r){if(t.getAttrib(r,"data-mce-selected")||r===n){s.push(e)
return false}})})
a=s[0]
if(!a)return
u=s.length>1?{height:"",scope:"",style:"",class:"",align:"",type:a.parentNode.nodeName.toLowerCase()}:gd(e,a)
_f(e).length>0&&(i={name:"class",type:"listbox",label:"Class",values:ld.buildListItems(_f(e),function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({block:"tr",classes:[t.value]})})})})
l={type:"form",columns:2,padding:0,defaults:{type:"textbox"},items:[{type:"listbox",name:"type",label:"Row type",text:"Header",maxWidth:null,values:[{text:"Header",value:"thead"},{text:"Body",value:"tbody"},{text:"Footer",value:"tfoot"}]},{type:"listbox",name:"align",label:"Alignment",text:"None",maxWidth:null,values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},{label:"Height",name:"height"},i]}
If(e)?e.windowManager.open({title:"Row properties",data:u,bodyType:"tabpanel",body:[{title:"General",type:"form",items:l},ld.createStyleForm(e)],onsubmit:o(Ad,e,s,u)}):e.windowManager.open({title:"Row properties",data:u,body:l,onsubmit:o(Ad,e,s,u)})}
var bd={open:hd}
var yd=tinymce.util.Tools.resolve("tinymce.Env")
var wd={styles:{"border-collapse":"collapse",width:"100%"},attributes:{border:"1"},percentages:true}
var Ed=function(){return Ce.fromTag("table")}
var xd=function(){return Ce.fromTag("tbody")}
var Cd=function(){return Ce.fromTag("tr")}
var kd=function(){return Ce.fromTag("th")}
var Bd=function(){return Ce.fromTag("td")}
var Td=function(e,t,r,n,a){void 0===a&&(a=wd)
var o=Ed()
ln(o,a.styles)
fr(o,a.attributes)
var i=xd()
hn(o,i)
var u=[]
for(var s=0;s<e;s++){var l=Cd()
for(var c=0;c<t;c++){var f=s<r||c<n?kd():Bd()
c<n&&cr(f,"scope","row")
s<r&&cr(f,"scope","col")
hn(f,Ce.fromTag("br"))
a.percentages&&sn(f,"width",100/t+"%")
hn(l,f)}u.push(l)}En(i,u)
return o}
var Rd=function(e){return e.dom().innerHTML}
var Id=function(e){var t=Ce.fromTag("div")
var r=Ce.fromDom(e.dom().cloneNode(true))
hn(t,r)
return Rd(t)}
var Sd=function(e,t){e.selection.select(t.dom(),true)
e.selection.collapse(true)}
var Dd=function(e,t){Nr(t,"td,th").each(o(Sd,e))}
var Nd=function(e,t){N(Cr(t,"tr"),function(t){jf(e,t.dom())
N(Cr(t,"th,td"),function(t){Hf(e,t.dom())})})}
var Md=function(e){return y(e)&&-1!==e.indexOf("%")}
var Pd=function(e,t,r){var n=kf(e)
var a={styles:n,attributes:Cf(e),percentages:Md(n.width)&&!Lf(e)}
var o=Td(r,t,0,0,a)
cr(o,"data-mce-id","__mce")
var i=Id(o)
e.insertContent(i)
return Nr(lf(e),'table[data-mce-id="__mce"]').map(function(t){Lf(e)&&sn(t,"width",cn(t,"width"))
mr(t,"data-mce-id")
Nd(e,t)
Dd(e,t)
return t.dom()}).getOr(null)}
var _d={insert:Pd}
function Od(e,t,r,n){if("TD"===t.tagName||"TH"===t.tagName)e.setStyle(t,r,n)
else if(t.children)for(var a=0;a<t.children.length;a++)Od(e,t.children[a],r,n)}var Fd=function(e,t){var r=e.dom
var n={width:r.getStyle(t,"width")||r.getAttrib(t,"width"),height:r.getStyle(t,"height")||r.getAttrib(t,"height"),cellspacing:r.getStyle(t,"border-spacing")||r.getAttrib(t,"cellspacing"),cellpadding:r.getAttrib(t,"data-mce-cell-padding")||r.getAttrib(t,"cellpadding")||td.getTDTHOverallStyle(e.dom,t,"padding"),border:r.getAttrib(t,"data-mce-border")||r.getAttrib(t,"border")||td.getTDTHOverallStyle(e.dom,t,"border"),borderColor:r.getAttrib(t,"data-mce-border-color"),caption:!!r.select("caption",t)[0],class:r.getAttrib(t,"class")}
qf.each("left center right".split(" "),function(r){e.formatter.matchNode(t,"align"+r)&&(n.align=r)})
Sf(e)&&qf.extend(n,ld.extractAdvancedStyles(r,t))
return n}
var Ld=function(e,t,r){var n=e.dom
var a={}
var o={}
a.class=r.class
o.height=mf(r.height)
n.getAttrib(t,"width")&&!Mf(e)?a.width=vf(r.width):o.width=mf(r.width)
if(Mf(e)){o["border-width"]=mf(r.border)
o["border-spacing"]=mf(r.cellspacing)
qf.extend(a,{"data-mce-border-color":r.borderColor,"data-mce-cell-padding":r.cellpadding,"data-mce-border":r.border})}else qf.extend(a,{border:r.border,cellpadding:r.cellpadding,cellspacing:r.cellspacing})
if(Mf(e)&&t.children)for(var i=0;i<t.children.length;i++)Od(n,t.children[i],{"border-width":mf(r.border),"border-color":r.borderColor,padding:mf(r.cellpadding)})
r.style?qf.extend(o,n.parseStyle(r.style)):o=qf.extend({},n.parseStyle(n.getAttrib(t,"style")),o)
a.style=n.serializeStyle(o)
n.setAttribs(t,a)}
var Ud=function(e,t,r){var n=e.dom
var a
var o
Sf(e)&&ld.syncAdvancedStyleFields(e,r)
o=r.control.rootControl.toJSON()
false===o.class&&delete o.class
e.undoManager.transact(function(){t||(t=_d.insert(e,o.cols||1,o.rows||1))
Ld(e,t,o)
a=n.select("caption",t)[0]
a&&!o.caption&&n.remove(a)
if(!a&&o.caption){a=n.create("caption")
a.innerHTML=yd.ie?" ":'<br data-mce-bogus="1"/>'
t.insertBefore(a,t.firstChild)}td.unApplyAlign(e,t)
o.align&&td.applyAlign(e,t,o.align)
e.focus()
e.addVisual()})}
var Qd=function(e,t){var r=e.dom
var n,a,i,u,s,l={}
if(true===t){n=r.getParent(e.selection.getStart(),"table")
n&&(l=Fd(e,n))}else{a={label:"Cols",name:"cols"}
i={label:"Rows",name:"rows"}}if(Of(e).length>0){l.class&&(l.class=l.class.replace(/\s*mce\-item\-table\s*/g,""))
u={name:"class",type:"listbox",label:"Class",values:ld.buildListItems(Of(e),function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({block:"table",classes:[t.value]})})})}}s={type:"form",layout:"flex",direction:"column",labelGapCalc:"children",padding:0,items:[{type:"form",labelGapCalc:false,padding:0,layout:"grid",columns:2,defaults:{type:"textbox",maxWidth:50},items:Df(e)?[a,i,{label:"Width",name:"width",onchange:o(ld.updateStyleField,e)},{label:"Height",name:"height",onchange:o(ld.updateStyleField,e)},{label:"Cell spacing",name:"cellspacing"},{label:"Cell padding",name:"cellpadding"},{label:"Border",name:"border"},{label:"Caption",name:"caption",type:"checkbox"}]:[a,i,{label:"Width",name:"width",onchange:o(ld.updateStyleField,e)},{label:"Height",name:"height",onchange:o(ld.updateStyleField,e)}]},{label:"Alignment",name:"align",type:"listbox",text:"None",values:[{text:"None",value:""},{text:"Left",value:"left"},{text:"Center",value:"center"},{text:"Right",value:"right"}]},u]}
Sf(e)?e.windowManager.open({title:"Table properties",data:l,bodyType:"tabpanel",body:[{title:"General",type:"form",items:s},ld.createStyleForm(e)],onsubmit:o(Ud,e,n)}):e.windowManager.open({title:"Table properties",data:l,body:s,onsubmit:o(Ud,e,n)})}
var zd={open:Qd}
var jd=qf.each
var Hd=function(e,r,n,a,u){var s=df(e)
var l=function(){var t=Ce.fromDom(e.dom.getParent(e.selection.getStart(),"th,td"))
var r=Yr.table(t,s)
r.filter(i(s)).each(function(t){var r=Ce.fromText("")
pn(t,r)
Cn(t)
var n=e.dom.createRng()
n.setStart(r.dom(),0)
n.setEnd(r.dom(),0)
e.selection.setRng(n)})}
var c=function(){return Ce.fromDom(e.dom.getParent(e.selection.getStart(),"th,td"))}
var f=function(e){return Yr.table(e,s)}
var d=function(e){return{width:cf(e.dom()),height:cf(e.dom())}}
var v=function(e,t,r){var n=d(r)
if(t.width!==n.width||t.height!==n.height){Wf(e,r.dom(),t.width,t.height)
Vf(e,r.dom(),n.width,n.height)}}
var m=function(t){var r=c()
var o=f(r)
o.each(function(o){var i=Lo.forMenu(a,o,r)
var u=d(o)
t(o,i).each(function(t){v(e,u,o)
e.selection.setRng(t)
e.focus()
n.clear(o)
gf(o)})})}
var g=function(r){var n=c()
var o=f(n)
return o.bind(function(r){var o=Ce.fromDom(e.getDoc())
var i=Lo.forMenu(a,r,n)
var u=aa.cellOperations(t,o,A.none())
return Jf.copyRows(r,i,u)})}
var p=function(t){u.get().each(function(r){var o=D(r,function(e){return _n(e)})
var i=c()
var u=f(i)
u.bind(function(r){var u=Ce.fromDom(e.getDoc())
var s=aa.paste(u)
var l=Lo.pasteRows(a,r,i,o,s)
t(r,l).each(function(t){e.selection.setRng(t)
e.focus()
n.clear(r)})})})}
jd({mceTableSplitCells:function(){m(r.unmergeCells)},mceTableMergeCells:function(){m(r.mergeCells)},mceTableInsertRowBefore:function(){m(r.insertRowsBefore)},mceTableInsertRowAfter:function(){m(r.insertRowsAfter)},mceTableInsertColBefore:function(){m(r.insertColumnsBefore)},mceTableInsertColAfter:function(){m(r.insertColumnsAfter)},mceTableDeleteCol:function(){m(r.deleteColumn)},mceTableDeleteRow:function(){m(r.deleteRow)},mceTableCutRow:function(e){u.set(g())
m(r.deleteRow)},mceTableCopyRow:function(e){u.set(g())},mceTablePasteRowBefore:function(e){p(r.pasteRowsBefore)},mceTablePasteRowAfter:function(e){p(r.pasteRowsAfter)},mceTableDelete:l},function(t,r){e.addCommand(r,t)})
jd({mceInsertTable:o(zd.open,e),mceTableProps:o(zd.open,e,true),mceTableRowProps:o(bd.open,e),mceTableCellProps:o(md.open,e)},function(t,r){e.addCommand(r,function(e,r){t(r)})})}
var Wd={registerCommands:Hd}
var Vd=function(e){var t=A.from(e.dom().documentElement).map(Ce.fromDom).getOr(e)
return{parent:n(t),view:n(e),origin:n(Mi(0,0))}}
var Gd=function(e,t){var r=o(Oi,t)
return{parent:n(t),view:n(e),origin:r}}
var Yd=function(e,t){return{parent:n(t),view:n(e),origin:n(Mi(0,0))}}
var Jd={only:Vd,detached:Gd,body:Yd}
function qd(e){var t=X.apply(null,e)
var r=[]
var n=function(e){if(void 0===e)throw"Event bind error: undefined handler"
r.push(e)}
var a=function(e){r=P(r,function(t){return t!==e})}
var o=function(){var e=t.apply(null,arguments)
N(r,function(t){t(e)})}
return{bind:n,unbind:a,trigger:o}}var Kd=function(e){var t=q(e,function(e){return{bind:e.bind,unbind:e.unbind}})
var r=q(e,function(e){return e.trigger})
return{registry:t,trigger:r}}
var Xd={create:Kd}
var Zd=uu(["compare","extract","mutate","sink"])
var $d=uu(["element","start","stop","destroy"])
var ev=uu(["forceDrop","drop","move","delayDrop"])
var tv={mode:Zd,sink:$d,api:ev}
var rv=ys("ephox-dragster")
var nv={resolve:rv.resolve}
function av(e){var t=Uu({layerClass:nv.resolve("blocker")},e)
var r=Ce.fromTag("div")
cr(r,"role","presentation")
ln(r,{position:"fixed",left:"0px",top:"0px",width:"100%",height:"100%"})
Ss(r,nv.resolve("blocker"))
Ss(r,t.layerClass)
var n=function(){return r}
var a=function(){Cn(r)}
return{element:n,destroy:a}}var ov=function(e,t,r,a,o,i,u){return{target:n(e),x:n(t),y:n(r),stop:a,prevent:o,kill:i,raw:n(u)}}
var iv=function(e,t){return function(n){if(!e(n))return
var a=Ce.fromDom(n.target)
var o=function(){n.stopPropagation()}
var i=function(){n.preventDefault()}
var u=r(i,o)
var s=ov(a,n.clientX,n.clientY,o,i,u,n)
t(s)}}
var uv=function(e,t,r,n,a){var i=iv(r,n)
e.dom().addEventListener(t,i,a)
return{unbind:o(lv,e,t,i,a)}}
var sv=function(e,t,r,n){return uv(e,t,r,n,false)}
var lv=function(e,t,r,n){e.dom().removeEventListener(t,r,n)}
var cv=n(true)
var fv=function(e,t,r){return sv(e,t,cv,r)}
var dv=function(e,t){return Mi(t.left()-e.left(),t.top()-e.top())}
var vv=function(e){return A.some(Mi(e.x(),e.y()))}
var mv=function(e,t){e.mutate(t.left(),t.top())}
var gv=function(e,t){var r=av(t)
var n=fv(r.element(),"mousedown",e.forceDrop)
var a=fv(r.element(),"mouseup",e.drop)
var o=fv(r.element(),"mousemove",e.move)
var i=fv(r.element(),"mouseout",e.delayDrop)
var u=function(){r.destroy()
a.unbind()
o.unbind()
i.unbind()
n.unbind()}
var s=function(e){hn(e,r.element())}
var l=function(){Cn(r.element())}
return tv.sink({element:r.element,start:s,stop:l,destroy:u})}
var pv=tv.mode({compare:dv,extract:vv,sink:gv,mutate:mv})
function Av(){var e=A.none()
var t=function(){e=A.none()}
var r=function(t,r){var n=e.map(function(e){return t.compare(e,r)})
e=A.some(r)
return n}
var n=function(e,t){var n=t.extract(e)
n.each(function(e){var n=r(t,e)
n.each(function(e){a.trigger.move(e)})})}
var a=Xd.create({move:qd(["info"])})
return{onEvent:n,reset:t,events:a.registry}}function hv(e){var r=function(e,t){}
return{onEvent:r,reset:t}}function bv(){var e=hv()
var t=Av()
var r=e
var n=function(){r.reset()
r=t}
var a=function(){r.reset()
r=e}
var o=function(e,t){r.onEvent(e,t)}
var i=function(){return r===t}
return{on:n,off:a,isOn:i,onEvent:o,events:t.events}}var yv=function(e,t){var r=null
var n=function(){if(null!==r){clearTimeout(r)
r=null}}
var a=function(){var n=[]
for(var a=0;a<arguments.length;a++)n[a]=arguments[a]
null!==r&&clearTimeout(r)
r=setTimeout(function(){e.apply(null,n)
r=null},t)}
return{cancel:n,throttle:a}}
var wv=function(e,t,r){var n=false
var a=Xd.create({start:qd([]),stop:qd([])})
var o=bv()
var i=function(){v.stop()
if(o.isOn()){o.off()
a.trigger.stop()}}
var u=yv(i,200)
var s=function(e){v.start(e)
o.on()
a.trigger.start()}
var l=function(e,r){u.cancel()
o.onEvent(e,t)}
o.events.move.bind(function(r){t.mutate(e,r.info())})
var c=function(){n=true}
var f=function(){n=false}
var d=function(e){return function(){var t=Array.prototype.slice.call(arguments,0)
if(n)return e.apply(null,t)}}
var v=t.sink(tv.api({forceDrop:i,drop:d(i),move:d(l),delayDrop:d(u.throttle)}),r)
var m=function(){v.destroy()}
return{element:v.element,go:s,on:c,off:f,destroy:m,events:a.registry}}
var Ev={setup:wv}
var xv=function(e,t){var r=void 0!==t?t:{}
var n=void 0!==r.mode?r.mode:pv
return Ev.setup(e,n,t)}
var Cv={transform:xv}
function kv(){var e=Xd.create({drag:qd(["xDelta","yDelta"])})
var t=function(t,r){e.trigger.drag(t,r)}
return{mutate:t,events:e.registry}}function Bv(){var e=Xd.create({drag:qd(["xDelta","yDelta","target"])})
var t=A.none()
var r=kv()
r.events.drag.bind(function(r){t.each(function(t){e.trigger.drag(r.xDelta(),r.yDelta(),t)})})
var n=function(e){t=A.some(e)}
var a=function(){return t}
return{assign:n,get:a,mutate:r.mutate,events:e.registry}}var Tv=function(e,t,r){return Mr(e,t,r).isSome()}
var Rv=Es.resolve("resizer-bar-dragging")
function Iv(e,t,r){var n=Bv()
var a=Cv.transform(n,{})
var i=A.none()
var u=function(e,t){return A.from(dr(e,t))}
n.events.drag.bind(function(e){u(e.target(),"data-row").each(function(t){var r=tc.getInt(e.target(),"top")
sn(e.target(),"top",r+e.yDelta()+"px")})
u(e.target(),"data-column").each(function(t){var r=tc.getInt(e.target(),"left")
sn(e.target(),"left",r+e.xDelta()+"px")})})
var s=function(e,t){var r=tc.getInt(e,t)
var n=parseInt(dr(e,"data-initial-"+t),10)
return r-n}
a.events.stop.bind(function(){n.get().each(function(n){i.each(function(a){u(n,"data-row").each(function(e){var t=s(n,"top")
mr(n,"data-initial-top")
g.trigger.adjustHeight(a,t,parseInt(e,10))})
u(n,"data-column").each(function(e){var t=s(n,"left")
mr(n,"data-initial-left")
g.trigger.adjustWidth(a,t,parseInt(e,10))})
qs.refresh(e,a,r,t)})})})
var l=function(t,r){g.trigger.startAdjust()
n.assign(t)
cr(t,"data-initial-"+r,parseInt(cn(t,r),10))
Ss(t,Rv)
sn(t,"opacity","0.2")
a.go(e.parent())}
var c=fv(e.parent(),"mousedown",function(e){qs.isRowBar(e.target())&&l(e.target(),"top")
qs.isColBar(e.target())&&l(e.target(),"left")})
var f=function(t){return Lt(t,e.view())}
var d=fv(e.view(),"mouseover",function(n){if("table"===rr(n.target())||Tv(n.target(),"table",f)){i="table"===rr(n.target())?A.some(n.target()):Sr(n.target(),"table",f)
i.each(function(n){qs.refresh(e,n,r,t)})}else pr(n.target())&&qs.destroy(e)})
var v=function(){c.unbind()
d.unbind()
a.destroy()
qs.destroy(e)}
var m=function(n){qs.refresh(e,n,r,t)}
var g=Xd.create({adjustHeight:qd(["table","delta","row"]),adjustWidth:qd(["table","delta","column"]),startAdjust:qd([])})
return{destroy:v,refresh:m,on:a.on,off:a.off,hideBars:o(qs.hide,e),showBars:o(qs.show,e),events:g.registry}}function Sv(e,t){var r=Zi.height
var n=Iv(e,t,r)
var a=Xd.create({beforeResize:qd(["table"]),afterResize:qd(["table"]),startDrag:qd([])})
n.events.adjustHeight.bind(function(e){a.trigger.beforeResize(e.table())
var t=r.delta(e.delta(),e.table())
Sc.adjustHeight(e.table(),t,e.row(),r)
a.trigger.afterResize(e.table())})
n.events.startAdjust.bind(function(e){a.trigger.startDrag()})
n.events.adjustWidth.bind(function(e){a.trigger.beforeResize(e.table())
var r=t.delta(e.delta(),e.table())
Sc.adjustWidth(e.table(),r,e.column(),t)
a.trigger.afterResize(e.table())})
return{on:n.on,off:n.off,hideBars:n.hideBars,showBars:n.showBars,destroy:n.destroy,events:a.registry}}var Dv=function(){var e=Ce.fromTag("div")
ln(e,{position:"static",height:"0",width:"0",padding:"0",margin:"0",border:"0"})
hn(Ar(),e)
return e}
var Nv=function(e,t){return e.inline?Jd.body(lf(e),Dv()):Jd.only(Ce.fromDom(e.getDoc()))}
var Mv=function(e,t){e.inline&&Cn(t.parent())}
var Pv={get:Nv,remove:Mv}
var _v=function(e){var t=A.none()
var r=A.none()
var n=A.none()
var a=/(\d+(\.\d+)?)%/
var o,i
var u=function(e){return"TABLE"===e.nodeName}
var s=function(t){return e.dom.getStyle(t,"width")||e.dom.getAttrib(t,"width")}
var l=function(){return r}
var c=function(){return n.getOr(Jd.only(Ce.fromDom(e.getBody())))}
var f=function(){r.each(function(e){e.destroy()})
n.each(function(t){Pv.remove(e,t)})}
e.on("init",function(){var a=eu(yf.directionAt)
var o=Pv.get(e)
n=A.some(o)
if(Qf(e)&&Bf(e)){var i=Sv(o,a)
i.on()
i.events.startDrag.bind(function(r){t=A.some(e.selection.getRng())})
i.events.beforeResize.bind(function(t){var r=t.table().dom()
Wf(e,r,cf(r),ff(r))})
i.events.afterResize.bind(function(r){var n=r.table()
var a=n.dom()
gf(n)
t.each(function(t){e.selection.setRng(t)
e.focus()})
Vf(e,a,cf(a),ff(a))
e.undoManager.add()})
r=A.some(i)}})
e.on("ObjectResizeStart",function(e){var t=e.target
if(u(t)){o=e.width
i=s(t)}})
e.on("ObjectResized",function(t){var r=t.target
if(u(r)){var n=r
if(a.test(i)){var s=parseFloat(a.exec(i)[1])
var l=t.width*s/o
e.dom.setStyle(n,"width",l+"%")}else{var c=[]
qf.each(n.rows,function(t){qf.each(t.cells,function(t){var r=e.dom.getStyle(t,"width",true)
c.push({cell:t,width:r})})})
qf.each(c,function(t){e.dom.setStyle(t.cell,"width",t.width)
e.dom.setAttrib(t.cell,"width",null)})}}})
return{lazyResize:l,lazyWire:c,destroy:f}}
var Ov=function(e){return Qv(function(t,r,n,a){return t(e)})}
var Fv=function(e){return Qv(function(t,r,n,a){return r(e)})}
var Lv=function(e,t){return Qv(function(r,n,a,o){return a(e,t)})}
var Uv=function(e){return Qv(function(t,r,n,a){return a(e)})}
var Qv=function(e){return{fold:e}}
var zv={none:Ov,first:Fv,middle:Lv,last:Uv}
var jv=function(e,t){return Yr.table(e,t).bind(function(t){var r=Yr.cells(t)
var a=L(r,function(t){return Lt(e,t)})
return a.map(function(e){return{index:n(e),all:n(r)}})})}
var Hv=function(e,t){var r=jv(e,t)
return r.fold(function(){return zv.none(e)},function(t){return t.index()+1<t.all().length?zv.middle(e,t.all()[t.index()+1]):zv.last(e)})}
var Wv=function(e,t){var r=jv(e,t)
return r.fold(function(){return zv.none()},function(t){return t.index()-1>=0?zv.middle(e,t.all()[t.index()-1]):zv.first(e)})}
var Vv={next:Hv,prev:Wv}
var Gv=ko.generate([{before:["element"]},{on:["element","offset"]},{after:["element"]}])
var Yv=function(e,t,r,n){return e.fold(t,r,n)}
var Jv=function(e){return e.fold(a,a,a)}
var qv=Gv.before
var Kv=Gv.on
var Xv=Gv.after
var Zv={before:qv,on:Kv,after:Xv,cata:Yv,getStart:Jv}
var $v=ko.generate([{domRange:["rng"]},{relative:["startSitu","finishSitu"]},{exact:["start","soffset","finish","foffset"]}])
var em=X("start","soffset","finish","foffset")
var tm=function(e){return e.match({domRange:function(e){return Ce.fromDom(e.startContainer)},relative:function(e,t){return Zv.getStart(e)},exact:function(e,t,r,n){return e}})}
var rm=function(e){var t=tm(e)
return Vt(t)}
$v.domRange
var nm=$v.relative
var am=$v.exact
var om=function(e,t,r,n){var a=Wt(e)
var o=a.dom().createRange()
o.setStart(e.dom(),t)
o.setEnd(r.dom(),n)
return o}
var im=function(e,t,r,n){var a=om(e,t,r,n)
var o=Lt(e,r)&&t===n
return a.collapsed&&!o}
var um=function(e,t){var r=e.document.createRange()
sm(r,t)
return r}
var sm=function(e,t){e.selectNodeContents(t.dom())}
var lm=function(e,t){t.fold(function(t){e.setStartBefore(t.dom())},function(t,r){e.setStart(t.dom(),r)},function(t){e.setStartAfter(t.dom())})}
var cm=function(e,t){t.fold(function(t){e.setEndBefore(t.dom())},function(t,r){e.setEnd(t.dom(),r)},function(t){e.setEndAfter(t.dom())})}
var fm=function(e,t,r){var n=e.document.createRange()
lm(n,t)
cm(n,r)
return n}
var dm=function(e,t,r,n,a){var o=e.document.createRange()
o.setStart(t.dom(),r)
o.setEnd(n.dom(),a)
return o}
var vm=function(e){return{left:n(e.left),top:n(e.top),right:n(e.right),bottom:n(e.bottom),width:n(e.width),height:n(e.height)}}
var mm=function(e){var t=e.getClientRects()
var r=t.length>0?t[0]:e.getBoundingClientRect()
return r.width>0||r.height>0?A.some(r).map(vm):A.none()}
var gm=ko.generate([{ltr:["start","soffset","finish","foffset"]},{rtl:["start","soffset","finish","foffset"]}])
var pm=function(e,t,r){return t(Ce.fromDom(r.startContainer),r.startOffset,Ce.fromDom(r.endContainer),r.endOffset)}
var Am=function(e,t){return t.match({domRange:function(e){return{ltr:n(e),rtl:A.none}},relative:function(t,r){return{ltr:Ge(function(){return fm(e,t,r)}),rtl:Ge(function(){return A.some(fm(e,r,t))})}},exact:function(t,r,n,a){return{ltr:Ge(function(){return dm(e,t,r,n,a)}),rtl:Ge(function(){return A.some(dm(e,n,a,t,r))})}}})}
var hm=function(e,t){var r=t.ltr()
if(r.collapsed){var n=t.rtl().filter(function(e){return false===e.collapsed})
return n.map(function(e){return gm.rtl(Ce.fromDom(e.endContainer),e.endOffset,Ce.fromDom(e.startContainer),e.startOffset)}).getOrThunk(function(){return pm(e,gm.ltr,r)})}return pm(e,gm.ltr,r)}
var bm=function(e,t){var r=Am(e,t)
return hm(e,r)}
var ym=function(e,t){var r=bm(e,t)
return r.match({ltr:function(t,r,n,a){var o=e.document.createRange()
o.setStart(t.dom(),r)
o.setEnd(n.dom(),a)
return o},rtl:function(t,r,n,a){var o=e.document.createRange()
o.setStart(n.dom(),a)
o.setEnd(t.dom(),r)
return o}})}
gm.ltr
gm.rtl
var wm=function(e,t,r,n,a){if(0===a)return 0
if(t===n)return a-1
var o=n
for(var i=1;i<a;i++){var u=e(i)
var s=Math.abs(t-u.left)
if(r<=u.bottom){if(r<u.top||s>o)return i-1
o=s}}return 0}
var Em=function(e,t,r){return t>=e.left&&t<=e.right&&r>=e.top&&r<=e.bottom}
var xm=function(e,t,r,n,a){var o=function(r){var n=e.dom().createRange()
n.setStart(t.dom(),r)
n.collapse(true)
return n}
var i=function(e){var t=o(e)
return t.getBoundingClientRect()}
var u=Qn(t).length
var s=wm(i,r,n,a.right,u)
return o(s)}
var Cm=function(e,t,r,n){var a=e.dom().createRange()
a.selectNode(t.dom())
var o=a.getClientRects()
var i=zu(o,function(e){return Em(e,r,n)?A.some(e):A.none()})
return i.map(function(a){return xm(e,t,r,n,a)})}
var km=function(e,t,r,n){var a=e.dom().createRange()
var o=Kt(t)
return zu(o,function(t){a.selectNode(t.dom())
return Em(a.getBoundingClientRect(),r,n)?Bm(e,t,r,n):A.none()})}
var Bm=function(e,t,r,n){var a=ur(t)?Cm:km
return a(e,t,r,n)}
var Tm=function(e,t,r,n){var a=e.dom().createRange()
a.selectNode(t.dom())
var o=a.getBoundingClientRect()
var i=Math.max(o.left,Math.min(o.right,r))
var u=Math.max(o.top,Math.min(o.bottom,n))
return Bm(e,t,i,u)}
var Rm=true
var Im=false
var Sm=function(e,t){return t-e.left<e.right-t?Rm:Im}
var Dm=function(e,t,r){var n=e.dom().createRange()
n.selectNode(t.dom())
n.collapse(r)
return n}
var Nm=function(e,t,r){var n=e.dom().createRange()
n.selectNode(t.dom())
var a=n.getBoundingClientRect()
var o=Sm(a,r)
var i=o===Rm?Jn:qn
return i(t).map(function(t){return Dm(e,t,o)})}
var Mm=function(e,t,r){var n=t.dom().getBoundingClientRect()
var a=Sm(n,r)
return A.some(Dm(e,t,a))}
var Pm=function(e,t,r){var n=0===Kt(t).length?Mm:Nm
return n(e,t,r)}
var _m=function(e,t,r){return A.from(e.dom().caretPositionFromPoint(t,r)).bind(function(t){if(null===t.offsetNode)return A.none()
var r=e.dom().createRange()
r.setStart(t.offsetNode,t.offset)
r.collapse()
return A.some(r)})}
var Om=function(e,t,r){return A.from(e.dom().caretRangeFromPoint(t,r))}
var Fm=function(e,t,r,n){var a=e.dom().createRange()
a.selectNode(t.dom())
var o=a.getBoundingClientRect()
var i=Math.max(o.left,Math.min(o.right,r))
var u=Math.max(o.top,Math.min(o.bottom,n))
return Tm(e,t,i,u)}
var Lm=function(e,t,r){return Ce.fromPoint(e,t,r).bind(function(n){var a=function(){return Pm(e,n,t)}
return 0===Kt(n).length?a():Fm(e,n,t,r).orThunk(a)})}
var Um=document.caretPositionFromPoint?_m:document.caretRangeFromPoint?Om:Lm
var Qm=function(e,t,r){var n=Ce.fromDom(e.document)
return Um(n,t,r).map(function(e){return em(Ce.fromDom(e.startContainer),e.startOffset,Ce.fromDom(e.endContainer),e.endOffset)})}
var zm=function(e,t){var r=rr(e)
return"input"===r?Zv.after(e):I(["br","img"],r)?0===t?Zv.before(e):Zv.after(e):Zv.on(e,t)}
var jm=function(e,t){var r=e.fold(Zv.before,zm,Zv.after)
var n=t.fold(Zv.before,zm,Zv.after)
return nm(r,n)}
var Hm=function(e,t,r,n){var a=zm(e,t)
var o=zm(r,n)
return nm(a,o)}
var Wm=function(e){return e.match({domRange:function(e){var t=Ce.fromDom(e.startContainer)
var r=Ce.fromDom(e.endContainer)
return Hm(t,e.startOffset,r,e.endOffset)},relative:jm,exact:Hm})}
var Vm=function(e,t){A.from(e.getSelection()).each(function(e){e.removeAllRanges()
e.addRange(t)})}
var Gm=function(e,t,r,n,a){var o=dm(e,t,r,n,a)
Vm(e,o)}
var Ym=function(e,t,r,n,a,o){t.collapse(r.dom(),n)
t.extend(a.dom(),o)}
var Jm=function(e,t){return bm(e,t).match({ltr:function(t,r,n,a){Gm(e,t,r,n,a)},rtl:function(t,r,n,a){var o=e.getSelection()
if(o.setBaseAndExtent)o.setBaseAndExtent(t.dom(),r,n.dom(),a)
else if(o.extend)try{Ym(e,o,t,r,n,a)}catch(o){Gm(e,n,a,t,r)}else Gm(e,n,a,t,r)}})}
var qm=function(e,t,r,n,a){var o=Hm(t,r,n,a)
Jm(e,o)}
var Km=function(e,t,r){var n=jm(t,r)
Jm(e,n)}
var Xm=function(e){var t=rm(e).dom()
var r=function(e,r,n,a){return dm(t,e,r,n,a)}
var n=Wm(e)
return bm(t,n).match({ltr:r,rtl:r})}
var Zm=function(e){if(e.rangeCount>0){var t=e.getRangeAt(0)
var r=e.getRangeAt(e.rangeCount-1)
return A.some(em(Ce.fromDom(t.startContainer),t.startOffset,Ce.fromDom(r.endContainer),r.endOffset))}return A.none()}
var $m=function(e){var t=Ce.fromDom(e.anchorNode)
var r=Ce.fromDom(e.focusNode)
return im(t,e.anchorOffset,r,e.focusOffset)?A.some(em(Ce.fromDom(e.anchorNode),e.anchorOffset,Ce.fromDom(e.focusNode),e.focusOffset)):Zm(e)}
var eg=function(e,t){var r=um(e,t)
Vm(e,r)}
var tg=function(e){return A.from(e.getSelection()).filter(function(e){return e.rangeCount>0}).bind($m)}
var rg=function(e){return tg(e).map(function(e){return am(e.start(),e.soffset(),e.finish(),e.foffset())})}
var ng=function(e,t){var r=ym(e,t)
return mm(r)}
var ag=function(e,t,r){return Qm(e,t,r)}
var og=function(e){var t=e.getSelection()
t.removeAllRanges()}
var ig=tinymce.util.Tools.resolve("tinymce.util.VK")
var ug=function(e,t,r,n){return fg(e,t,Vv.next(r),n)}
var sg=function(e,t,r,n){return fg(e,t,Vv.prev(r),n)}
var lg=function(e,t){var r=am(t,0,t,0)
return Xm(r)}
var cg=function(e,t){var r=Cr(t,"tr")
return G(r).bind(function(t){return Nr(t,"td,th").map(function(t){return lg(e,t)})})}
var fg=function(e,t,r,n,a){return r.fold(A.none,A.none,function(t,r){return Jn(r).map(function(t){return lg(e,t)})},function(r){return Yr.table(r,t).bind(function(t){var a=Lo.noMenu(r)
e.undoManager.transact(function(){n.insertRowsAfter(t,a)})
return cg(e,t)})})}
var dg=["table","li","dl"]
var vg=function(e,t,r,n){if(e.keyCode===ig.TAB){var a=lf(t)
var o=function(e){var t=rr(e)
return Lt(e,a)||I(dg,t)}
var i=t.selection.getRng()
if(i.collapsed){var u=Ce.fromDom(i.startContainer)
Yr.cell(u,o).each(function(a){e.preventDefault()
var i=e.shiftKey?sg:ug
var u=i(t,o,a,r,n)
u.each(function(e){t.selection.setRng(e)})})}}}
var mg={handle:vg}
var gg=X("selection","kill")
var pg={response:gg}
var Ag=function(e){return function(t){return t===e}}
var hg=Ag(38)
var bg=Ag(40)
var yg=function(e){return e>=37&&e<=40}
var wg={ltr:{isBackward:Ag(37),isForward:Ag(39)},rtl:{isBackward:Ag(39),isForward:Ag(37)},isUp:hg,isDown:bg,isNavigation:yg}
var Eg=function(e,t){var r=ym(e,t)
return{start:n(Ce.fromDom(r.startContainer)),soffset:n(r.startOffset),finish:n(Ce.fromDom(r.endContainer)),foffset:n(r.endOffset)}}
var xg=function(e,t,r,a){return{start:n(Zv.on(e,t)),finish:n(Zv.on(r,a))}}
var Cg={convertToRange:Eg,makeSitus:xg}
Ft.detect().browser.isSafari()
var kg=function(e){var t=void 0!==e?e.dom():document
var r=t.body.scrollLeft||t.documentElement.scrollLeft
var n=t.body.scrollTop||t.documentElement.scrollTop
return Mi(r,n)}
var Bg=function(e,t,r){var n=void 0!==r?r.dom():document
var a=n.defaultView
a.scrollBy(e,t)}
function Tg(e){var t=function(t,r){return Ce.fromPoint(Ce.fromDom(e.document),t,r)}
var r=function(e){return e.dom().getBoundingClientRect()}
var a=function(t,r,n,a){var o=am(t,r,n,a)
return ng(e,o).map(function(e){return q(e,s)})}
var o=function(){return rg(e).map(function(t){return Cg.convertToRange(e,t)})}
var i=function(t){var r=nm(t.start(),t.finish())
return Cg.convertToRange(e,r)}
var u=function(t,r){return ag(e,t,r).map(function(e){return{start:n(Zv.on(e.start(),e.soffset())),finish:n(Zv.on(e.finish(),e.foffset()))}})}
var l=function(){og(e)}
var c=function(t){eg(e,t)}
var f=function(t){qm(e,t.start(),t.soffset(),t.finish(),t.foffset())}
var d=function(t,r){Km(e,t,r)}
var v=function(){return e.innerHeight}
var m=function(){var t=kg(Ce.fromDom(e.document))
return t.top()}
var g=function(t,r){Bg(t,r,Ce.fromDom(e.document))}
return{elementFromPoint:t,getRect:r,getRangedRect:a,getSelection:o,fromSitus:i,situsFromPoint:u,clearSelection:l,setSelection:f,setRelativeSelection:d,selectContents:c,getInnerHeight:v,getScrollY:m,scrollBy:g}}var Rg=function(e,t,r,n,a,o,i){return Lt(r,a)&&n===o?A.none():Mr(r,"td,th",t).bind(function(r){return Mr(a,"td,th",t).bind(function(n){return Ig(e,t,r,n,i)})})}
var Ig=function(e,t,r,n,a){return Lt(r,n)?A.none():fo.identify(r,n,t).bind(function(t){var n=t.boxes().getOr([])
if(n.length>0){a(e,n,t.start(),t.finish())
return A.some(pg.response(A.some(Cg.makeSitus(r,0,r,Hn(r))),true))}return A.none()})}
var Sg=function(e,t,r,n,a){var o=function(e){a.clear(r)
a.selectRange(r,e.boxes(),e.start(),e.finish())
return e.boxes()}
return fo.shiftSelection(n,e,t,a.firstSelectedSelector(),a.lastSelectedSelector()).map(o)}
var Dg={sync:Rg,detect:Ig,update:Sg}
var Ng=ae(["left","top","right","bottom"],[])
var Mg=function(e,t){return Ng({left:e.left(),top:e.top()+t,right:e.right(),bottom:e.bottom()+t})}
var Pg=function(e,t){return Ng({left:e.left(),top:e.top()-t,right:e.right(),bottom:e.bottom()-t})}
var _g=function(e,t){var r=e.bottom()-e.top()
return Ng({left:e.left(),top:t-r,right:e.right(),bottom:t})}
var Og=function(e,t){var r=e.bottom()-e.top()
return Ng({left:e.left(),top:t,right:e.right(),bottom:t+r})}
var Fg=function(e,t,r){return Ng({left:e.left()+t,top:e.top()+r,right:e.right()+t,bottom:e.bottom()+r})}
var Lg=function(e){return e.top()}
var Ug=function(e){return e.bottom()}
var Qg=function(e){return"("+e.left()+", "+e.top()+") -> ("+e.right()+", "+e.bottom()+")"}
var zg={nu:Ng,moveUp:Pg,moveDown:Mg,moveBottomTo:_g,moveTopTo:Og,getTop:Lg,getBottom:Ug,translate:Fg,toString:Qg}
var jg=function(e,t,r){if(r>=0&&r<Hn(t))return e.getRangedRect(t,r,t,r+1)
if(r>0)return e.getRangedRect(t,r-1,t,r)
return A.none()}
var Hg=function(e){return zg.nu({left:e.left,top:e.top,right:e.right,bottom:e.bottom})}
var Wg=function(e,t){return A.some(e.getRect(t))}
var Vg=function(e,t,r){return ir(t)?Wg(e,t).map(Hg):ur(t)?jg(e,t,r).map(Hg):A.none()}
var Gg=function(e,t){return ir(t)?Wg(e,t).map(Hg):ur(t)?e.getRangedRect(t,0,t,Hn(t)).map(Hg):A.none()}
var Yg={getBoxAt:Vg,getEntireBox:Gg}
var Jg=X("item","mode")
var qg=function(e,t,r,n){var a=void 0!==n?n:Kg
return e.property().parent(t).map(function(e){return Jg(e,a)})}
var Kg=function(e,t,r,n){var a=void 0!==n?n:Xg
return r.sibling(e,t).map(function(e){return Jg(e,a)})}
var Xg=function(e,t,r,n){var a=void 0!==n?n:Xg
var o=e.property().children(t)
var i=r.first(o)
return i.map(function(e){return Jg(e,a)})}
var Zg=[{current:qg,next:Kg,fallback:A.none()},{current:Kg,next:Xg,fallback:A.some(qg)},{current:Xg,next:Xg,fallback:A.some(Kg)}]
var $g=function(e,t,r,n,a){a=void 0!==a?a:Zg
var o=F(a,function(e){return e.current===r})
return o.bind(function(r){return r.current(e,t,n,r.next).orThunk(function(){return r.fallback.bind(function(r){return $g(e,t,r,n)})})})}
var ep={backtrack:qg,sidestep:Kg,advance:Xg,go:$g}
var tp=function(){var e=function(e,t){return e.query().prevSibling(t)}
var t=function(e){return e.length>0?A.some(e[e.length-1]):A.none()}
return{sibling:e,first:t}}
var rp=function(){var e=function(e,t){return e.query().nextSibling(t)}
var t=function(e){return e.length>0?A.some(e[0]):A.none()}
return{sibling:e,first:t}}
var np={left:tp,right:rp}
var ap=function(e,t,r,n,a,o){var i=ep.go(e,t,n,a)
return i.bind(function(t){return o(t.item())?A.none():r(t.item())?A.some(t.item()):ap(e,t.item(),r,t.mode(),a,o)})}
var op=function(e,t,r,n){return ap(e,t,r,ep.sidestep,np.left(),n)}
var ip=function(e,t,r,n){return ap(e,t,r,ep.sidestep,np.right(),n)}
var up={left:op,right:ip}
var sp=function(e,t){return 0===e.property().children(t).length}
var lp=function(e,t,r){return fp(e,t,o(sp,e),r)}
var cp=function(e,t,r){return dp(e,t,o(sp,e),r)}
var fp=function(e,t,r,n){return up.left(e,t,r,n)}
var dp=function(e,t,r,n){return up.right(e,t,r,n)}
var vp=function(){return{left:np.left,right:np.right}}
var mp=function(e,t,r,n,a){return ep.go(e,t,r,n,a)}
var gp={before:lp,after:cp,seekLeft:fp,seekRight:dp,walkers:vp,walk:mp,backtrack:ep.backtrack,sidestep:ep.sidestep,advance:ep.advance}
var pp=ua()
var Ap=function(e,t,r){return gp.gather(pp,e,t,r)}
var hp=function(e,t){return gp.before(pp,e,t)}
var bp=function(e,t){return gp.after(pp,e,t)}
var yp=function(e,t,r){return gp.seekLeft(pp,e,t,r)}
var wp=function(e,t,r){return gp.seekRight(pp,e,t,r)}
var Ep=function(){return gp.walkers()}
var xp=function(e,t,r,n){return gp.walk(pp,e,t,r,n)}
var Cp={gather:Ap,before:hp,after:bp,seekLeft:yp,seekRight:wp,walkers:Ep,walk:xp}
var kp=5
var Bp=100
var Tp=ko.generate([{none:[]},{retry:["caret"]}])
var Rp=function(e,t){return e.left()<t.left()||Math.abs(t.right()-e.left())<1||e.left()>t.right()}
var Ip=function(e,t,r){return Tr(t,Mu.isBlock).fold(n(false),function(t){return Yg.getEntireBox(e,t).exists(function(e){return Rp(r,e)})})}
var Sp=function(e,t,r,n,a){var o=zg.moveDown(a,kp)
return Math.abs(r.bottom()-n.bottom())<1?Tp.retry(o):r.top()>a.bottom()?Tp.retry(o):r.top()===a.bottom()?Tp.retry(zg.moveDown(a,1)):Ip(e,t,a)?Tp.retry(zg.translate(o,kp,0)):Tp.none()}
var Dp=function(e,t,r,n,a){var o=zg.moveUp(a,kp)
return Math.abs(r.top()-n.top())<1?Tp.retry(o):r.bottom()<a.top()?Tp.retry(o):r.bottom()===a.top()?Tp.retry(zg.moveUp(a,1)):Ip(e,t,a)?Tp.retry(zg.translate(o,kp,0)):Tp.none()}
var Np={point:zg.getTop,adjuster:Dp,move:zg.moveUp,gather:Cp.before}
var Mp={point:zg.getBottom,adjuster:Sp,move:zg.moveDown,gather:Cp.after}
var Pp=function(e,t,r){return e.elementFromPoint(t,r).filter(function(e){return"table"===rr(e)}).isSome()}
var _p=function(e,t,r,n,a){return Op(e,t,r,t.move(n,kp),a)}
var Op=function(e,t,r,n,a){if(0===a)return A.some(n)
if(Pp(e,n.left(),t.point(n)))return _p(e,t,r,n,a-1)
return e.situsFromPoint(n.left(),t.point(n)).bind(function(o){return o.start().fold(A.none,function(o,i){return Yg.getEntireBox(e,o,i).bind(function(i){return t.adjuster(e,o,i,r,n).fold(A.none,function(n){return Op(e,t,r,n,a-1)})}).orThunk(function(){return A.some(n)})},A.none)})}
var Fp=function(e,t){return e.situsFromPoint(t.left(),t.bottom()+kp)}
var Lp=function(e,t){return e.situsFromPoint(t.left(),t.top()-kp)}
var Up=function(e,t,r){return e.point(t)>r.getInnerHeight()?A.some(e.point(t)-r.getInnerHeight()):e.point(t)<0?A.some(-e.point(t)):A.none()}
var Qp=function(e,t,r){var n=e.move(r,kp)
var a=Op(t,e,r,n,Bp).getOr(n)
return Up(e,a,t).fold(function(){return t.situsFromPoint(a.left(),e.point(a))},function(r){t.scrollBy(0,r)
return t.situsFromPoint(a.left(),e.point(a)-r)})}
var zp={tryUp:o(Qp,Np),tryDown:o(Qp,Mp),ieTryUp:Lp,ieTryDown:Fp,getJumpSize:n(kp)}
var jp=ko.generate([{none:["message"]},{success:[]},{failedUp:["cell"]},{failedDown:["cell"]}])
var Hp=function(e,t,r){var n=e.getRect(t)
var a=e.getRect(r)
return a.right>n.left&&a.left<n.right}
var Wp=function(e,t,r,n,a,o,i){return Mr(n,"td,th",i).bind(function(r){return Mr(t,"td,th",i).map(function(t){return Lt(r,t)?Lt(n,r)&&Hn(r)===a?o(t):jp.none("in same cell"):La.sharedOne(Vp,[r,t]).fold(function(){return Hp(e,t,r)?jp.success():o(t)},function(e){return o(t)})})}).getOr(jp.none("default"))}
var Vp=function(e){return Mr(e,"tr")}
var Gp=function(e,t,r,n,a){return e.fold(t,r,n,a)}
var Yp={verify:Wp,cata:Gp,adt:jp}
var Jp=X("element","offset")
var qp=X("element","deltaOffset")
var Kp=X("element","start","finish")
var Xp=X("begin","end")
var Zp=X("element","text")
var $p={point:Jp,delta:qp,range:Kp,points:Xp,text:Zp}
X("ancestor","descendants","element","index")
var eA=X("parent","children","element","index")
var tA=function(e){return Gt(e).bind(function(t){var r=Kt(t)
return rA(r,e).map(function(n){return eA(t,r,e,n)})})}
var rA=function(e,t){return L(e,o(Lt,t))}
var nA=function(e){return"br"===rr(e)}
var aA=function(e,t,r){return t(e,r).bind(function(e){return ur(e)&&0===Qn(e).trim().length?aA(e,t,r):A.some(e)})}
var oA=function(e,t,r){return r.traverse(t).orThunk(function(){return aA(t,r.gather,e)}).map(r.relative)}
var iA=function(e,t){return Xt(e,t).filter(nA).orThunk(function(){return Xt(e,t-1).filter(nA)})}
var uA=function(e,t,r,n){return iA(t,r).bind(function(t){return n.traverse(t).fold(function(){return aA(t,n.gather,e).map(n.relative)},function(e){return tA(e).map(function(e){return Zv.on(e.parent(),e.index())})})})}
var sA=function(e,t,r,a){var o=nA(t)?oA(e,t,a):uA(e,t,r,a)
return o.map(function(e){return{start:n(e),finish:n(e)}})}
var lA=function(e){return Yp.cata(e,function(e){return A.none()},function(){return A.none()},function(e){return A.some($p.point(e,0))},function(e){return A.some($p.point(e,Hn(e)))})}
var cA={tryBr:sA,process:lA}
var fA=20
var dA=Ft.detect()
var vA=function(e,t,r){return e.getSelection().bind(function(n){return cA.tryBr(t,n.finish(),n.foffset(),r).fold(function(){return A.some($p.point(n.finish(),n.foffset()))},function(a){var o=e.fromSitus(a)
var i=Yp.verify(e,n.finish(),n.foffset(),o.finish(),o.foffset(),r.failure,t)
return cA.process(i)})})}
var mA=function(e,t,r,n,a,o){if(0===o)return A.none()
return AA(e,t,r,n,a).bind(function(i){var u=e.fromSitus(i)
var s=Yp.verify(e,r,n,u.finish(),u.foffset(),a.failure,t)
return Yp.cata(s,function(){return A.none()},function(){return A.some(i)},function(i){return Lt(r,i)&&0===n?gA(e,r,n,zg.moveUp,a):mA(e,t,i,0,a,o-1)},function(i){return Lt(r,i)&&n===Hn(i)?gA(e,r,n,zg.moveDown,a):mA(e,t,i,Hn(i),a,o-1)})})}
var gA=function(e,t,r,n,a){return Yg.getBoxAt(e,t,r).bind(function(t){return pA(e,a,n(t,zp.getJumpSize()))})}
var pA=function(e,t,r){return dA.browser.isChrome()||dA.browser.isSafari()||dA.browser.isFirefox()||dA.browser.isEdge()?t.otherRetry(e,r):dA.browser.isIE()?t.ieRetry(e,r):A.none()}
var AA=function(e,t,r,n,a){return Yg.getBoxAt(e,r,n).bind(function(t){return pA(e,a,t)})}
var hA=function(e,t,r){return vA(e,t,r).bind(function(n){return mA(e,t,n.element(),n.offset(),r,fA).map(e.fromSitus)})}
var bA={handle:hA}
var yA=function(e,t,r){return Br(e,t,r).isSome()}
var wA=Ft.detect()
var EA=function(e,t){return yA(e,function(e){return Gt(e).exists(function(e){return Lt(e,t)})})}
var xA=function(e,t,r,a,o){return Mr(a,"td,th",t).bind(function(a){return Mr(a,"table",t).bind(function(i){if(!EA(o,i))return A.none()
return bA.handle(e,t,r).bind(function(e){return Mr(e.finish(),"td,th",t).map(function(t){return{start:n(a),finish:n(t),range:n(e)}})})})})}
var CA=function(e,t,r,n,a,o){return wA.browser.isIE()?A.none():o(n,t).orThunk(function(){return xA(e,t,r,n,a).map(function(e){var t=e.range()
return pg.response(A.some(Cg.makeSitus(t.start(),t.soffset(),t.finish(),t.foffset())),true)})})}
var kA=function(e,t){return Mr(e,"tr",t).bind(function(e){return Mr(e,"table",t).bind(function(r){var n=Cr(r,"tr")
return Lt(e,n[0])?Cp.seekLeft(r,function(e){return qn(e).isSome()},t).map(function(e){var t=Hn(e)
return pg.response(A.some(Cg.makeSitus(e,t,e,t)),true)}):A.none()})})}
var BA=function(e,t){return Mr(e,"tr",t).bind(function(e){return Mr(e,"table",t).bind(function(r){var n=Cr(r,"tr")
return Lt(e,n[n.length-1])?Cp.seekRight(r,function(e){return Jn(e).isSome()},t).map(function(e){return pg.response(A.some(Cg.makeSitus(e,0,e,0)),true)}):A.none()})})}
var TA=function(e,t,r,n,a,o,i){return xA(e,r,n,a,o).bind(function(e){return Dg.detect(t,r,e.start(),e.finish(),i)})}
var RA={navigate:CA,select:TA,firstUpCheck:kA,lastDownCheck:BA}
var IA=function(e,t){return Mr(e,"td,th",t)}
function SA(e,t,r,n){var a=A.none()
var o=function(){a=A.none()}
var i=function(e){n.clear(t)
a=IA(e.target(),r)}
var u=function(o){a.each(function(a){n.clear(t)
IA(o.target(),r).each(function(o){fo.identify(a,o,r).each(function(r){var i=r.boxes().getOr([])
if(i.length>1||1===i.length&&!Lt(a,o)){n.selectRange(t,i,r.start(),r.finish())
e.selectContents(o)}})})})}
var s=function(){a.each(o)}
return{mousedown:i,mouseover:u,mouseup:s}}var DA={down:{traverse:qt,gather:Cp.after,relative:Zv.before,otherRetry:zp.tryDown,ieRetry:zp.ieTryDown,failure:Yp.adt.failedDown},up:{traverse:Jt,gather:Cp.before,relative:Zv.before,otherRetry:zp.tryUp,ieRetry:zp.ieTryUp,failure:Yp.adt.failedUp}}
var NA=X("rows","cols")
var MA=function(e,t,r,n){var a=Tg(e)
var o=SA(a,t,r,n)
return{mousedown:o.mousedown,mouseover:o.mouseover,mouseup:o.mouseup}}
var PA=function(e,t,r,n){var a=Tg(e)
var i=function(){n.clear(t)
return A.none()}
var u=function(e,u,s,l,c,f){var d=e.raw().which
var v=true===e.raw().shiftKey
var m=fo.retrieve(t,n.selectedSelector()).fold(function(){return wg.isDown(d)&&v?o(RA.select,a,t,r,DA.down,l,u,n.selectRange):wg.isUp(d)&&v?o(RA.select,a,t,r,DA.up,l,u,n.selectRange):wg.isDown(d)?o(RA.navigate,a,r,DA.down,l,u,RA.lastDownCheck):wg.isUp(d)?o(RA.navigate,a,r,DA.up,l,u,RA.firstUpCheck):A.none},function(e){var r=function(r){return function(){var o=zu(r,function(r){return Dg.update(r.rows(),r.cols(),t,e,n)})
return o.fold(function(){return fo.getEdges(t,n.firstSelectedSelector(),n.lastSelectedSelector()).map(function(e){var r=wg.isDown(d)||f.isForward(d)?Zv.after:Zv.before
a.setRelativeSelection(Zv.on(e.first(),0),r(e.table()))
n.clear(t)
return pg.response(A.none(),true)})},function(e){return A.some(pg.response(A.none(),true))})}}
return wg.isDown(d)&&v?r([NA(1,0)]):wg.isUp(d)&&v?r([NA(-1,0)]):f.isBackward(d)&&v?r([NA(0,-1),NA(-1,0)]):f.isForward(d)&&v?r([NA(0,1),NA(1,0)]):wg.isNavigation(d)&&false===v?i:A.none})
return m()}
var s=function(e,a,o,i,u){return fo.retrieve(t,n.selectedSelector()).fold(function(){var s=e.raw().which
var l=true===e.raw().shiftKey
if(false===l)return A.none()
return wg.isNavigation(s)?Dg.sync(t,r,a,o,i,u,n.selectRange):A.none()},A.none)}
return{keydown:u,keyup:s}}
var _A={mouse:MA,keyboard:PA}
var OA=function(e,t){N(t,function(t){Ns(e,t)})}
var FA=function(e){return function(t){Ss(t,e)}}
var LA=function(e){return function(t){OA(t,e)}}
var UA=function(e){var t=FA(e.selected())
var r=LA([e.selected(),e.lastSelected(),e.firstSelected()])
var n=function(t){var n=Cr(t,e.selectedSelector())
N(n,r)}
var a=function(r,a,o,i){n(r)
N(a,t)
Ss(o,e.firstSelected())
Ss(i,e.lastSelected())}
return{clear:n,selectRange:a,selectedSelector:e.selectedSelector,firstSelectedSelector:e.firstSelectedSelector,lastSelectedSelector:e.lastSelectedSelector}}
var QA=function(e){var t=function(t){mr(t,e.selected())
mr(t,e.firstSelected())
mr(t,e.lastSelected())}
var r=function(t){cr(t,e.selected(),"1")}
var n=function(r){var n=Cr(r,e.selectedSelector())
N(n,t)}
var a=function(t,a,o,i){n(t)
N(a,r)
cr(o,e.firstSelected(),"1")
cr(i,e.lastSelected(),"1")}
return{clear:n,selectRange:a,selectedSelector:e.selectedSelector,firstSelectedSelector:e.firstSelectedSelector,lastSelectedSelector:e.lastSelectedSelector}}
var zA={byClass:UA,byAttr:QA}
var jA=function(e){return false===Ms(Ce.fromDom(e.target),"ephox-snooker-resizer-bar")}
function HA(e,a){var o=ae(["mousedown","mouseover","mouseup","keyup","keydown"],[])
var i=A.none()
var u=zA.byAttr(xo)
e.on("init",function(s){var l=e.getWin()
var c=lf(e)
var f=df(e)
var d=function(){var r=e.selection
var n=Ce.fromDom(r.getStart())
var a=Ce.fromDom(r.getEnd())
var o=La.sharedOne(Yr.table,[n,a])
o.fold(function(){u.clear(c)},t)}
var v=_A.mouse(l,c,f,u)
var m=_A.keyboard(l,c,f,u)
var g=function(e){return true===e.raw().shiftKey}
var p=function(t,r){if(!g(t))return
r.kill()&&t.kill()
r.selection().each(function(t){var r=nm(t.start(),t.finish())
var n=ym(l,r)
e.selection.setRng(n)})}
var h=function(t){var r=w(t)
if(r.raw().shiftKey&&wg.isNavigation(r.raw().which)){var n=e.selection.getRng()
var a=Ce.fromDom(n.startContainer)
var o=Ce.fromDom(n.endContainer)
m.keyup(r,a,n.startOffset,o,n.endOffset).each(function(e){p(r,e)})}}
var b=function(t){var r=w(t)
a().each(function(e){e.hideBars()})
var n=e.selection.getRng()
var o=Ce.fromDom(e.selection.getStart())
var i=Ce.fromDom(n.startContainer)
var u=Ce.fromDom(n.endContainer)
var s=yf.directionAt(o).isRtl()?wg.rtl:wg.ltr
m.keydown(r,i,n.startOffset,u,n.endOffset,s).each(function(e){p(r,e)})
a().each(function(e){e.showBars()})}
var y=function(e){return e.hasOwnProperty("x")&&e.hasOwnProperty("y")}
var w=function(e){var t=Ce.fromDom(e.target)
var a=function(){e.stopPropagation()}
var o=function(){e.preventDefault()}
var i=r(o,a)
return{target:n(t),x:n(y(e)?e.x:null),y:n(y(e)?e.y:null),stop:a,prevent:o,kill:i,raw:n(e)}}
var E=function(e){return 0===e.button}
var x=function(e){if(void 0===e.buttons)return true
return 0!==(1&e.buttons)}
var C=function(e){E(e)&&jA(e)&&v.mousedown(w(e))}
var k=function(e){x(e)&&jA(e)&&v.mouseover(w(e))}
var B=function(e){E(e)&&jA(e)&&v.mouseup(w(e))}
e.on("mousedown",C)
e.on("mouseover",k)
e.on("mouseup",B)
e.on("keyup",h)
e.on("keydown",b)
e.on("nodechange",d)
i=A.some(o({mousedown:C,mouseover:k,mouseup:B,keyup:h,keydown:b}))})
var s=function(){i.each(function(e){})}
return{clear:u.clear,destroy:s}}var WA=function(e){var t=function(){var t=lf(e)
return go.retrieve(t,xo.selectedSelector()).fold(function(){return void 0===e.selection.getStart()?Ro.none():Ro.single(e.selection)},function(e){return Ro.multiple(e)})}
return{get:t}}
var VA=qf.each
var GA=function(e){var t=[]
VA("inserttable tableprops deletetable | cell row column".split(" "),function(r){"|"===r?t.push({text:"-"}):t.push(e.menuItems[r])})
e.addButton("table",{type:"menubutton",title:"Table",menu:t})
function r(t){return function(){e.execCommand(t)}}e.addButton("tableprops",{title:"Table properties",onclick:r("mceTableProps"),icon:"table"})
e.addButton("tabledelete",{title:"Delete table",onclick:r("mceTableDelete")})
e.addButton("tablecellprops",{title:"Cell properties",onclick:r("mceTableCellProps")})
e.addButton("tablemergecells",{title:"Merge cells",onclick:r("mceTableMergeCells")})
e.addButton("tablesplitcells",{title:"Split cell",onclick:r("mceTableSplitCells")})
e.addButton("tableinsertrowbefore",{title:"Insert row before",onclick:r("mceTableInsertRowBefore")})
e.addButton("tableinsertrowafter",{title:"Insert row after",onclick:r("mceTableInsertRowAfter")})
e.addButton("tabledeleterow",{title:"Delete row",onclick:r("mceTableDeleteRow")})
e.addButton("tablerowprops",{title:"Row properties",onclick:r("mceTableRowProps")})
e.addButton("tablecutrow",{title:"Cut row",onclick:r("mceTableCutRow")})
e.addButton("tablecopyrow",{title:"Copy row",onclick:r("mceTableCopyRow")})
e.addButton("tablepasterowbefore",{title:"Paste row before",onclick:r("mceTablePasteRowBefore")})
e.addButton("tablepasterowafter",{title:"Paste row after",onclick:r("mceTablePasteRowAfter")})
e.addButton("tableinsertcolbefore",{title:"Insert column before",onclick:r("mceTableInsertColBefore")})
e.addButton("tableinsertcolafter",{title:"Insert column after",onclick:r("mceTableInsertColAfter")})
e.addButton("tabledeletecol",{title:"Delete column",onclick:r("mceTableDeleteCol")})}
var YA=function(e){var t=function(t){var r=e.dom.is(t,"table")&&e.getBody().contains(t)
return r}
var r=zf(e)
r.length>0&&e.addContextToolbar(t,r.join(" "))}
var JA={addButtons:GA,addToolbars:YA}
var qA=function(e,t){var r=A.none()
var n=[]
var a=[]
var o=[]
var i=[]
var u=function(e){e.disabled(true)}
var s=function(e){e.disabled(false)}
var l=function(){var e=this
n.push(e)
r.fold(function(){u(e)},function(t){s(e)})}
var c=function(){var e=this
a.push(e)
r.fold(function(){u(e)},function(t){s(e)})}
var f=function(){var e=this
o.push(e)
r.fold(function(){u(e)},function(t){e.disabled(t.mergable().isNone())})}
var d=function(){var e=this
i.push(e)
r.fold(function(){u(e)},function(t){e.disabled(t.unmergable().isNone())})}
var v=function(){r.fold(function(){N(n,u)
N(a,u)
N(o,u)
N(i,u)},function(e){N(n,s)
N(a,s)
N(o,function(t){t.disabled(e.mergable().isNone())})
N(i,function(t){t.disabled(e.unmergable().isNone())})})}
e.on("init",function(){e.on("nodechange",function(n){var a=A.from(e.dom.getParent(e.selection.getStart(),"th,td"))
r=a.bind(function(e){var r=Ce.fromDom(e)
var n=Yr.table(r)
return n.map(function(e){return Lo.forMenu(t,e,r)})})
v()})})
var m=function(){var e=""
e='<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">'
for(var t=0;t<10;t++){e+="<tr>"
for(var r=0;r<10;r++)e+='<td role="gridcell" tabindex="-1"><a id="mcegrid'+(10*t+r)+'" href="#" data-mce-x="'+r+'" data-mce-y="'+t+'"></a></td>'
e+="</tr>"}e+="</table>"
e+='<div class="mce-text-center" role="presentation">1 x 1</div>'
return e}
var g=function(e,t,r,n){var a=n.getEl().getElementsByTagName("table")[0]
var o,i,u,s,l
var c=n.isRtl()||"tl-tr"===n.parent().rel
a.nextSibling.innerHTML=t+1+" x "+(r+1)
c&&(t=9-t)
for(i=0;i<10;i++)for(o=0;o<10;o++){s=a.rows[i].childNodes[o].firstChild
l=(c?o>=t:o<=t)&&i<=r
e.dom.toggleClass(s,"mce-active",l)
l&&(u=s)}return u.parentNode}
var p=false===Nf(e)?{text:"Table",icon:"table",context:"table",onclick:h("mceInsertTable")}:{text:"Table",icon:"table",context:"table",ariaHideMenu:true,onclick:function(t){if(t.aria){this.parent().hideAll()
t.stopImmediatePropagation()
e.execCommand("mceInsertTable")}},onshow:function(){g(e,0,0,this.menu.items()[0])},onhide:function(){var t=this.menu.items()[0].getEl().getElementsByTagName("a")
e.dom.removeClass(t,"mce-active")
e.dom.addClass(t[0],"mce-active")},menu:[{type:"container",html:m(),onPostRender:function(){this.lastX=this.lastY=0},onmousemove:function(t){var r=t.target
var n,a
if("A"===r.tagName.toUpperCase()){n=parseInt(r.getAttribute("data-mce-x"),10)
a=parseInt(r.getAttribute("data-mce-y"),10);(this.isRtl()||"tl-tr"===this.parent().rel)&&(n=9-n)
if(n!==this.lastX||a!==this.lastY){g(e,n,a,t.control)
this.lastX=n
this.lastY=a}}},onclick:function(t){var r=this
if("A"===t.target.tagName.toUpperCase()){t.preventDefault()
t.stopPropagation()
r.parent().cancel()
e.undoManager.transact(function(){_d.insert(e,r.lastX+1,r.lastY+1)})
e.addVisual()}}}]}
function h(t){return function(){e.execCommand(t)}}var b={text:"Table properties",context:"table",onPostRender:l,onclick:h("mceTableProps")}
var y={text:"Delete table",context:"table",onPostRender:l,cmd:"mceTableDelete"}
var w={text:"Row",context:"table",menu:[{text:"Insert row before",onclick:h("mceTableInsertRowBefore"),onPostRender:c},{text:"Insert row after",onclick:h("mceTableInsertRowAfter"),onPostRender:c},{text:"Delete row",onclick:h("mceTableDeleteRow"),onPostRender:c},{text:"Row properties",onclick:h("mceTableRowProps"),onPostRender:c},{text:"-"},{text:"Cut row",onclick:h("mceTableCutRow"),onPostRender:c},{text:"Copy row",onclick:h("mceTableCopyRow"),onPostRender:c},{text:"Paste row before",onclick:h("mceTablePasteRowBefore"),onPostRender:c},{text:"Paste row after",onclick:h("mceTablePasteRowAfter"),onPostRender:c}]}
var E={text:"Column",context:"table",menu:[{text:"Insert column before",onclick:h("mceTableInsertColBefore"),onPostRender:c},{text:"Insert column after",onclick:h("mceTableInsertColAfter"),onPostRender:c},{text:"Delete column",onclick:h("mceTableDeleteCol"),onPostRender:c}]}
var x={separator:"before",text:"Cell",context:"table",menu:[{text:"Cell properties",onclick:h("mceTableCellProps"),onPostRender:c},{text:"Merge cells",onclick:h("mceTableMergeCells"),onPostRender:f},{text:"Split cell",onclick:h("mceTableSplitCells"),onPostRender:d}]}
e.addMenuItem("inserttable",p)
e.addMenuItem("tableprops",b)
e.addMenuItem("deletetable",y)
e.addMenuItem("row",w)
e.addMenuItem("column",E)
e.addMenuItem("cell",x)}
var KA={addMenuItems:qA}
var XA=function(e){return e.get().fold(function(){return},function(e){return D(e,function(e){return e.dom()})})}
var ZA=function(e,t){var r=D(e,Ce.fromDom)
t.set(A.from(r))}
var $A=function(e,t){return{insertTable:function(t,r){return _d.insert(e,t,r)},setClipboardRows:function(e){return ZA(e,t)},getClipboardRows:function(){return XA(t)}}}
function eh(e){var t=_v(e)
var r=HA(e,t.lazyResize)
var n=Gf(e,t.lazyWire)
var a=WA(e)
var o=nu(A.none())
Wd.registerCommands(e,n,r,a,o)
Ho.registerEvents(e,a,n,r)
KA.addMenuItems(e,a)
JA.addButtons(e)
JA.addToolbars(e)
e.on("PreInit",function(){e.serializer.addTempAttr(xo.firstSelected())
e.serializer.addTempAttr(xo.lastSelected())})
Tf(e)&&e.on("keydown",function(r){mg.handle(r,e,n,t.lazyWire)})
e.on("remove",function(){t.destroy()
r.destroy()})
return $A(e,o)}e.add("table",eh)}()},mWgA:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=n(r("q1tI"))
var d=a(r("q3EI"))
var v=f.default.createElement("path",{d:"M1225.982 926.244c27.296 18.796 27.3 49.268 0 68.067l-509.835 351.074c-27.297 18.796-49.425 7.18-49.425-25.96V601.13c0-33.133 22.125-44.758 49.425-25.96l509.835 351.075z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){(0,c.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(d.default,Object.assign({},this.props,{name:"IconMiniArrowEnd",viewBox:"0 0 1920 1920",bidirectional:true}),v)}}])
t.displayName="IconMiniArrowEnd"
return t}(f.Component)
t.default=m
m.glyphName="mini-arrow-end"
m.variant="Line"
m.propTypes=(0,o.default)({},d.default.propTypes)},mq65:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var a=n(r("MVZn"))
var o=r("YYvL")
function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=arguments.length>1?arguments[1]:void 0
switch(t.type){case o.START_FLICKR_SEARCH:return(0,a.default)({},e,{searching:true,searchTerm:t.term})
case o.RECEIVE_FLICKR_RESULTS:return(0,a.default)({},e,{searching:false,searchResults:t.results})
case o.FAIL_FLICKR_SEARCH:return(0,a.default)({},e,{searching:false,searchTerm:"",searchResults:[]})
case o.TOGGLE_FLICKR_FORM:return(0,a.default)({},e,{formExpanded:!e.formExpanded})
default:return e}}},nBnu:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e,t){var r=t.createEvent("CustomEvent")
r.initCustomEvent("tinyRCE/initEquella",true,true,{ed:e})
t.dispatchEvent(r)}},oTko:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("A+Oa"))
var o=n(r("aX7E"))
var i=n(r("3ps1"))
var u=n(r("TdXa"))
var s=n(r("PGNS"))
var l=n(r("TCUh"))
var c=n(r("RO5r"))
var f=n(r("jkBh"))
var d=n(r("mq65"))
var v=n(r("NPeJ"))
var m=n(r("/cFM"))
var g=r("ANjH")
var p=(0,g.combineReducers)({ui:o.default,source:a.default,jwt:a.default,host:a.default,contextType:a.default,contextId:a.default,collections:i.default,files:u.default,folders:s.default,rootFolderId:l.default,images:c.default,upload:f.default,flickr:d.default,session:v.default,newPageLinkExpanded:m.default})
t.default=p},obhq:function(e,t,r){var n={"./ar":["groY",129],"./ar.js":["groY",129],"./bg":["koQx",130],"./bg.js":["koQx",130],"./cs":["8RIl",131],"./cs.js":["8RIl",131],"./cy":["BWer",132],"./cy.js":["BWer",132],"./da":["Fp8s",134],"./da-x-k12":["OMFF",133],"./da-x-k12.js":["OMFF",133],"./da.js":["Fp8s",134],"./de":["cexD",135],"./de.js":["cexD",135],"./el":["MbUt",136],"./el.js":["MbUt",136],"./en-AU":["EqCB",138],"./en-AU-x-unimelb":["1Fk8",137],"./en-AU-x-unimelb.js":["1Fk8",137],"./en-AU.js":["EqCB",138],"./en-GB":["DYoq",141],"./en-GB-x-lbs":["IWB8",139],"./en-GB-x-lbs.js":["IWB8",139],"./en-GB-x-ukhe":["7lw4",140],"./en-GB-x-ukhe.js":["7lw4",140],"./en-GB.js":["DYoq",141],"./es":["gIoa",142],"./es.js":["gIoa",142],"./fa":["uk/C",144],"./fa-IR":["cpOs",143],"./fa-IR.js":["cpOs",143],"./fa.js":["uk/C",144],"./fr":["1rYk",146],"./fr-CA":["vCDN",145],"./fr-CA.js":["vCDN",145],"./fr.js":["1rYk",146],"./he":["/Kb1",147],"./he.js":["/Kb1",147],"./ht":["4LCh",213],"./ht.js":["4LCh",213],"./hu":["J1aE",148],"./hu.js":["J1aE",148],"./hy":["D39C",149],"./hy.js":["D39C",149],"./is":["etMt",214],"./is.js":["etMt",214],"./it":["1+Sm",150],"./it.js":["1+Sm",150],"./ja":["Tjzb",151],"./ja.js":["Tjzb",151],"./ko":["h8rf",152],"./ko.js":["h8rf",152],"./mi":["K9OM",215],"./mi.js":["K9OM",215],"./nb":["fQ5I",154],"./nb-x-k12":["92S9",153],"./nb-x-k12.js":["92S9",153],"./nb.js":["fQ5I",154],"./nl":["DH4b",155],"./nl.js":["DH4b",155],"./nn":["XBVI",216],"./nn.js":["XBVI",216],"./pl":["jbsc",156],"./pl.js":["jbsc",156],"./pt":["GC3w",158],"./pt-BR":["ewbo",157],"./pt-BR.js":["ewbo",157],"./pt.js":["GC3w",158],"./ro":["Eoj2",159],"./ro.js":["Eoj2",159],"./ru":["4+R7",160],"./ru.js":["4+R7",160],"./sq":["A+lG",217],"./sq.js":["A+lG",217],"./sr":["XOK+",161],"./sr.js":["XOK+",161],"./sv":["B3Nz",163],"./sv-x-k12":["5N9L",162],"./sv-x-k12.js":["5N9L",162],"./sv.js":["B3Nz",163],"./tr":["jrJs",164],"./tr.js":["jrJs",164],"./uk":["GALa",165],"./uk.js":["GALa",165],"./vi":["446z",166],"./vi.js":["446z",166],"./zh-Hans":["17me",167],"./zh-Hans.js":["17me",167],"./zh-Hant":["eHKi",168],"./zh-Hant.js":["eHKi",168]}
function a(e){if(!r.o(n,e))return Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'")
t.code="MODULE_NOT_FOUND"
throw t})
var t=n[e],a=t[0]
return r.e(t[1]).then(function(){return r.t(a,7)})}a.keys=function(){return Object.keys(n)}
a.id="obhq"
e.exports=a},onOR:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.renderIntoDiv=d
var a=n(r("q1tI"))
var o=r("i8i4")
var i=r("/MKj")
var u=n(r("pm1X"))
var s=n(r("KRyp"))
var l=n(r("tmSs"))
var c=n(r("IUx4"))
var f=n(r("hSMc"))
function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var r=arguments.length>2?arguments[2]:void 0
var n=(0,s.default)(t)
t=(0,c.default)(t)
f.default.editorRendered.then(function(){(0,o.render)(a.default.createElement(i.Provider,{store:n},a.default.createElement(u.default,{onLinkClick:t.onLinkClick,onImageEmbed:t.onImageEmbed,canUploadFiles:t.canUploadFiles,filesTabDisabled:t.filesTabDisabled})),e)
r&&r(new l.default(n))})}},oyhc:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("lwsE"))
var o=n(r("W8MJ"))
var i=function(){function e(){(0,a.default)(this,e)}(0,o.default)(e,[{key:"getHackedTables",value:function(e){return e.hackedTables||[]}},{key:"setHackedTables",value:function(e,t){e.hackedTables=t}},{key:"cleanHackedTables",value:function(e){var t=this.getHackedTables(e)
var r=e.dom.select("table")
this.setHackedTables(e,t.filter(function(e){return r.indexOf(e)>-1}))}},{key:"isTableHacked",value:function(e,t){this.cleanHackedTables(e)
return this.getHackedTables(e).indexOf(t)>-1}},{key:"addHackedTable",value:function(e,t){this.getHackedTables(e).push(t)}},{key:"fixIframes",value:function(e){var t=e&&e.dom&&e.dom.select?e.dom.select("td"):[]
var r=[]
t.forEach(function(e){var t=[].slice.call(e.children).filter(function(e){return"SPAN"===e.tagName&&"iframe"===e.getAttribute("data-mce-object")})
if(t.length>0&&-1===r.indexOf(e)){e.innerHTML="<div>".concat(e.innerHTML,"</div>")
r.push(e)}})}},{key:"addMutationObserverToTables",value:function(e,t){var r=this
var n=e&&e.dom&&e.dom.select?e.dom.select("table").filter(function(t){return!r.isTableHacked(e,t)}):[]
if(n.length>0){var a=new t(function(){r.fixIframes(e)})
for(var o=n.length-1;o>=0;o--){var i=n[o]
a.observe(i,{childList:true,subtree:true})
this.addHackedTable(e,i)}}this.fixIframes(e)}},{key:"hookAddVisual",value:function(e,t){var r=this
var n=e.addVisual.bind(e)
e.addVisual=function(a){r.addMutationObserverToTables(e,t)
n(a)}.bind(e)
this.addMutationObserverToTables(e,t)}}])
return e}()
t.default=i},pA8t:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var n=r("xYFW")
var a=r("cKlk")
function o(e){e.dispatch(a.get)
e.dispatch(n.init)}},pm1X:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("jwaa"))
var o=n(r("l294"))
var i=r("/MKj")
function u(e){var t=e.ui,r=e.contextType,n=e.contextId,a=e.files,o=e.images,i=e.folders,u=e.rootFolderId,s=e.flickr,l=e.upload,c=e.session,f=e.newPageLinkExpanded
var d={}
for(var v in e.collections){var m=e.collections[v]
d[v]={links:m.links,lastError:m.error,isLoading:!!m.loading,hasMore:!!m.bookmark}}return Object.assign({},{contextType:r,contextId:n,collections:d,files:a,images:o,folders:i,rootFolderId:u,flickr:s,upload:l,session:c,newPageLinkExpanded:f},t)}var s=(0,i.connect)(u,o.default)(a.default)
t.default=s},qNDO:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("17x9"))
var i=n(r("q1tI"))
var u=a(r("4wjC"))
var s=a(r("XbQQ"))
var l=a(r("rgT7"))
var c=a(r("aO0o"))
var f=a(r("M6qK"))
var d=a(r("BAch"))
function v(e){var t=e.collection,r=e.children,n=e.onChange,a=e.selectedIndex,o=e.summary
return i.default.createElement(s.default,{as:"div",margin:"xx-small none"},i.default.createElement(u.default,{variant:"filled",summary:o,expanded:a===t,onToggle:function(e,r){return n(r?t:"")}},i.default.createElement("div",{style:{maxHeight:"20em",overflow:"auto"}},r)))}v.propTypes={collection:o.default.string.isRequired,children:o.default.node.isRequired,selectedIndex:o.default.string,summary:u.default.propTypes.summary}
function m(e){return i.default.createElement(v,e,i.default.createElement(l.default,{fetchInitialPage:e.fetchInitialPage&&function(){return e.fetchInitialPage(e.collection)},fetchNextPage:e.fetchNextPage&&function(){return e.fetchNextPage(e.collection)},collection:e.collections[e.collection],onLinkClick:e.onLinkClick,suppressRenderEmpty:e.suppressRenderEmpty}),e.renderNewPageLink&&i.default.createElement(f.default,{onLinkClick:e.onLinkClick,toggleNewPageForm:e.toggleNewPageForm,newPageLinkExpanded:e.newPageLinkExpanded,contextId:e.contextId,contextType:e.contextType}))}m.propTypes={collection:o.default.string.isRequired,renderNewPageLink:o.default.bool,suppressRenderEmpty:o.default.bool}
m.defaultProps={renderNewPageLink:false,suppressRenderEmpty:false}
function g(e){var t="course"===e.contextType
var r="group"===e.contextType
var n=t?(0,d.default)({default:"Course Navigation",description:"Title of Sidebar accordion tab containing links to course pages."}):r?(0,d.default)({default:"Group Navigation",description:"Title of Sidebar accordion tab containing links to group pages."}):""
return i.default.createElement("div",null,i.default.createElement("p",null,"course"===e.contextType?(0,d.default)("Link to other content in the course."):"group"===e.contextType?(0,d.default)("Link to other content in the group."):"",(0,d.default)("Click any page to insert a link to that page.")),i.default.createElement("div",null,(t||r)&&i.default.createElement(m,Object.assign({},e,{collection:"wikiPages",summary:(0,d.default)({default:"Pages",description:"Title of Sidebar accordion tab containing links to wiki pages."}),renderNewPageLink:false!==e.canCreatePages,suppressRenderEmpty:false!==e.canCreatePages})),t&&i.default.createElement(m,Object.assign({},e,{collection:"assignments",summary:(0,d.default)({default:"Assignments",description:"Title of Sidebar accordion tab containing links to assignments."})})),t&&i.default.createElement(m,Object.assign({},e,{collection:"quizzes",summary:(0,d.default)({default:"Quizzes",description:"Title of Sidebar accordion tab containing links to quizzes."})})),(t||r)&&i.default.createElement(m,Object.assign({},e,{collection:"announcements",summary:(0,d.default)({default:"Announcements",description:"Title of Sidebar accordion tab containing links to announcements."})})),(t||r)&&i.default.createElement(m,Object.assign({},e,{collection:"discussions",summary:(0,d.default)({default:"Discussions",description:"Title of Sidebar accordion tab containing links to discussions."})})),t&&i.default.createElement(m,Object.assign({},e,{collection:"modules",summary:(0,d.default)({default:"Modules",description:"Title of Sidebar accordion tab containing links to course modules."})})),i.default.createElement(v,Object.assign({},e,{collection:"navigation",summary:n}),i.default.createElement(c.default,{contextType:e.contextType,contextId:e.contextId,onLinkClick:e.onLinkClick}))))}g.propTypes={selectedIndex:o.default.string,onChange:o.default.func,contextType:o.default.string.isRequired,contextId:o.default.string.isRequired,collections:o.default.object.isRequired,fetchInitialPage:o.default.func,fetchNextPage:o.default.func,onLinkClick:o.default.func,toggleNewPageForm:f.default.propTypes.toggleNewPageForm,newPageLinkExpanded:o.default.bool,canCreatePages:o.default.bool}
g.defaultProps={selectedIndex:""}
var p=g
t.default=p},qbD8:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e,t){var r=t.createEvent("CustomEvent")
r.initCustomEvent("tinyRCE/initEquation",true,true,{ed:e})
t.dispatchEvent(r)}},r1tT:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=t.styles=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=a(r("17x9"))
var d=n(r("q1tI"))
var v=a(r("+eFp"))
var m=a(r("BAch"))
var g=a(r("qnOc"))
var p=a(r("CTAn"))
var A=a(r("VMdx"))
var h=a(r("h8gV"))
var b=a(r("yGSU"))
var y=a(r("WyC3"))
var w=a(r("U93Q"))
var E=a(r("7NWa"))
var x=a(r("6Hea"))
var C=r("/7Jz")
var k=function(e){(0,c.default)(t,e)
function t(e){var r;(0,i.default)(this,t)
r=(0,s.default)(this,(0,l.default)(t).call(this,e))
r.setAltResolved=function(e){r.setState((0,o.default)({},r.state,{altResolved:e}))}
r.state={file:{},altResolved:false}
return r}(0,u.default)(t,[{key:"componentWillMount",value:function(){this.props.fetchFolders&&this.props.fetchFolders()}},{key:"flattenFolderTreeDepthFirst",value:function(e,t,r,n){var a=this
if(!e)return[]
r=r||[]
n=n||0
r.push({folderId:e,depth:n})
if(!t[e])return r
t[e].forEach(function(e){a.flattenFolderTreeDepthFirst(e,t,r,n+1)})
return r}},{key:"parentFolderId",value:function(){var e=this.state.file.parentFolderId
if(e)return e
var t=Object.keys(this.props.upload.folders)[0]
var r=this.props.upload.folders[t]
if(r)return r.id
return null}},{key:"showForm",value:function(e){e.preventDefault()
this.props.toggleUploadForm()
this.setState({file:{}})}},{key:"handleUpload",value:function(e){e.preventDefault()
var t=(0,o.default)({},this.state.file)
this._usageRights&&(t.usageRights=this._usageRights.value())
this._altText&&(t.altText=this._altText.value())
this.props.startUpload(t)}},{key:"handleFolderChange",value:function(e){e.preventDefault()
this.setState({file:{parentFolderId:e.target.value,name:this.state.file.name,size:this.state.file.size,contentType:this.state.file.contentType,domObject:this.state.file.domObject}})}},{key:"handleFileClick",value:function(e){e.target.value=""
this.setState({file:{parentFolderId:this.parentFolderId()}})}},{key:"handleFileChange",value:function(e){var t=e.target.files[0]
var r={file:{}}
void 0!==t&&(r={file:{parentFolderId:this.parentFolderId(),name:t.name,size:t.size,contentType:t.type,domObject:t}})
this.setState(r)}},{key:"isImageSelected",value:function(e){return e&&e.name}},{key:"uploadLink",value:function(){var e=this.props.messages.expandScreenreader
var t=this.props.messages.expand
var r
if(this.props.upload.formExpanded){e=this.props.messages.collapseScreenreader
t=this.props.messages.collapse
r=d.default.createElement(y.default,{className:(0,C.css)(B.icon)})}else r=d.default.createElement(b.default,{className:(0,C.css)(B.icon)})
return d.default.createElement(A.default,{"aria-expanded":this.props.upload.formExpanded,variant:"link",onClick:this.showForm.bind(this)},d.default.createElement("span",{"aria-hidden":true},r," "+t),d.default.createElement(g.default,null,e))}},{key:"renderFolderOption",value:function(e){var t=e.folderId,r=e.depth
var n=this.props.upload.folders[t]
if(!n)return
var a=""
for(var o=0;o<r;o++)a+="  "
return d.default.createElement("option",{key:"folder_"+n.id,value:n.id},a,n.name)}},{key:"renderFolderSelect",value:function(){var e=(0,m.default)("Select a folder to upload your file into")
var t=(0,m.default)("Folder")
var r=d.default.createElement("span",null,d.default.createElement("span",{"aria-hidden":true},t),d.default.createElement(g.default,null,e))
var n=this.flattenFolderTreeDepthFirst(this.props.upload.rootFolderId,this.props.upload.folderTree)
return d.default.createElement(p.default,{label:r,onChange:this.handleFolderChange.bind(this),name:"folder_id"},this.props.upload.loadingFolders&&d.default.createElement("option",{key:"loading",value:"loading"},(0,m.default)("Loading folders...")),n.map(this.renderFolderOption,this))}},{key:"shouldDisableUpload",value:function(e,t){var r
r=e.showAltTextForm?!(t.file&&t.file.name&&t.altResolved):!(t.file&&t.file.name)
return r}},{key:"renderFormSubmit",value:function(){return this.props.upload.uploading?d.default.createElement(w.default,null):d.default.createElement("div",{className:(0,C.css)(B.uploadButtonContainer)},d.default.createElement(A.default,{type:"submit",disabled:this.shouldDisableUpload(this.props,this.state)},(0,m.default)("Upload")))}},{key:"renderForm",value:function(){var e=this
if(this.props.upload.formExpanded){var t=(0,m.default)("Select a file")
var r=this.props.upload.error&&"QUOTA_EXCEEDED_UPLOAD"===this.props.upload.error.type?(0,m.default)("This upload exceeds the file storage quota. Please speak to your system administrator."):null
return d.default.createElement("form",{onSubmit:this.handleUpload.bind(this),className:(0,C.css)(B.uploadForm),encType:"multipart/form-data"},d.default.createElement("div",null,d.default.createElement("div",{className:(0,C.css)(B.uploadLimit)},d.default.createElement("label",{htmlFor:"upload-form-file-input"},d.default.createElement(g.default,null,t)),r&&d.default.createElement(h.default,{variant:"error"},r),d.default.createElement("input",{className:(0,C.css)(B.uploadedData),type:"file",onChange:this.handleFileChange.bind(this),onClick:this.handleFileClick.bind(this),style:{width:"100%"}})),this.props.showAltTextForm&&this.isImageSelected(this.state.file)&&d.default.createElement(x.default,{ref:function(t){return e._altText=t},altResolved:this.setAltResolved}),this.renderFolderSelect(),this.props.usageRightsRequired&&d.default.createElement(E.default,{ref:function(t){return e._usageRights=t}})),this.renderFormSubmit())}return null}},{key:"render",value:function(){return d.default.createElement("div",{className:(0,C.css)(B.container)},this.uploadLink(),d.default.createElement(v.default,{transitionName:{enter:(0,C.css)(B.slideDownEnter),enterActive:(0,C.css)(B.slideDownEnter,B.slideDownEnterActive),leave:(0,C.css)(B.slideDownLeave),leaveActive:(0,C.css)(B.slideDownLeave,B.slideDownLeaveActive)},transitionEnterTimeout:500,transitionLeaveTimeout:300},this.renderForm()))}}])
t.displayName="UploadForm"
return t}(d.Component)
k.propTypes={upload:f.default.shape({loading:f.default.bool,folders:f.default.objectOf(f.default.shape({id:f.default.number,name:f.default.string,parentId:f.default.number})).isRequired,uploading:f.default.bool.isRequired,formExpanded:f.default.bool.isRequired,rootFolderId:f.default.number,folderTree:f.default.object.isRequired,error:f.default.shape({type:f.default.string})}).isRequired,toggleUploadForm:f.default.func.isRequired,fetchFolders:f.default.func.isRequired,startUpload:f.default.func.isRequired,usageRightsRequired:f.default.bool,messages:f.default.shape({expand:f.default.string.isRequired,expandScreenreader:f.default.string.isRequired,collapse:f.default.string.isRequired,collapseScreenreader:f.default.string.isRequired}).isRequired,showAltTextForm:f.default.bool.isRequired}
var B=C.StyleSheet.create({slideDownEnter:{maxHeight:0,overflowY:"hidden"},slideDownEnterActive:{maxHeight:"500px",transition:"max-height 500ms ease-in"},slideDownLeave:{maxHeight:"500px",overflowY:"hidden"},slideDownLeaveActive:{maxHeight:0,transition:"max-height 300ms ease-in"},container:{marginTop:"10px"},uploadForm:{marginTop:"6px",lineHeight:1.5,maxWidth:"100%"},uploadLimit:{fontSize:"11px",margin:"10px 0 1em",display:"block"},uploadButtonContainer:{marginTop:"0.5em"},uploadedData:{display:"block",marginBottom:"10px"},folderId:{marginBottom:"10px"},icon:{verticalAlign:"middle"}})
t.styles=B
var T=k
t.default=T},rMyL:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("GEYT"))
var o={INTERIM_DELAY:100,scrollIntoViewWDelay:function(e,t){setTimeout(function(){a.default.scrollIntoView(e,t)},this.INTERIM_DELAY)}}
t.default=o},rgT7:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=n(r("q1tI"))
var d=r("R7S1")
var v=a(r("kqqL"))
var m=a(r("BAch"))
var g=a(r("Vbms"))
var p=a(r("qnOc"))
var A=r("/7Jz")
var h=1
var b=function(e){(0,l.default)(t,e)
function t(e){var r;(0,o.default)(this,t)
r=(0,u.default)(this,(0,s.default)(t).call(this,e))
r.handleLinkClick=function(e,t){if(r.props.onLinkClick){e.preventDefault()
r.props.onLinkClick(t)}}
r.handleDragStart=function(e,t){(0,v.default)(e,(0,d.renderLink)(t))}
r.handleLoadMoreClick=function(e){e.preventDefault()
r.props.fetchNextPage&&r.props.fetchNextPage()}
r.describedByID="rce-LinkSet-describedBy-".concat(h++)
return r}(0,i.default)(t,[{key:"componentWillMount",value:function(){this.props.fetchInitialPage&&this.props.fetchInitialPage()}},{key:"hasLinks",value:function(){return this.props.collection.links.length>0}},{key:"isEmpty",value:function(){return!this.hasLinks()&&!this.props.collection.hasMore&&!this.props.collection.isLoading}},{key:"renderLink",value:function(e){var t=this
return f.default.createElement("li",{key:e.href,title:(0,m.default)("Click to insert a link to this item."),className:(0,A.css)(y.item)},f.default.createElement("a",{href:e.href,className:(0,A.css)(y.link),role:"button","aria-describedby":this.describedByID,onClick:function(r){return t.handleLinkClick(r,e)},onDragStart:function(r){return t.handleDragStart(r,e)}},e.title))}},{key:"renderLinks",value:function(){return f.default.createElement("div",null,f.default.createElement(p.default,{id:this.describedByID},(0,m.default)("Click to insert a link into the editor.")),f.default.createElement("ul",{className:(0,A.css)(y.list)},this.props.collection.links.map(this.renderLink,this)))}},{key:"renderEmptyIndicator",value:function(){return f.default.createElement("span",{className:"rcs-LinkSet-Empty"},(0,m.default)("No results."))}},{key:"renderLoadingError",value:function(){if(this.props.collection.lastError)return f.default.createElement("span",{className:"rcs-LinkSet-LoadFailed",role:"alert"},(0,m.default)("Loading failed..."))
return null}},{key:"render",value:function(){if(this.props.fetchNextPage){var e=this.props.collection.hasMore||false
var t=this.props.collection.isLoading||false
return f.default.createElement("div",null,f.default.createElement(g.default,{hasMore:e,isLoading:t,loadMore:this.props.fetchNextPage,focusSelector:"li>a"},this.hasLinks()&&this.renderLinks(),this.renderLoadingError()),this.isEmpty()&&!(this.props.suppressRenderEmpty||false)&&this.renderEmptyIndicator())}return f.default.createElement("div",null,this.hasLinks()?this.renderLinks():this.renderEmptyIndicator())}}])
t.displayName="LinkSet"
return t}(f.Component)
b.propTypes={collection:c.default.shape({links:c.default.array.isRequired,isLoading:c.default.bool,hasMore:c.default.bool,lastError:c.default.object}).isRequired,fetchInitialPage:c.default.func,fetchNextPage:c.default.func,onLinkClick:c.default.func,suppressRenderEmpty:c.default.bool}
var y=A.StyleSheet.create({list:{margin:0,padding:0,listStyle:"none"},item:{margin:0,padding:0,display:"block",backgroundPosition:"left center",backgroundRepeat:"no-repeat",width:"100%",":hover":{backgroundColor:"#eee"}},link:{display:"block",padding:"3px 5px",textAlign:"left"}})
var w=b
t.default=w},rmgI:function(e,t){!function(){"use strict"
var e=function(t){var r=t
var n=function(){return r}
var a=function(e){r=e}
var o=function(){return e(n())}
return{get:n,set:a,clone:o}}
var t=tinymce.util.Tools.resolve("tinymce.PluginManager")
var r=tinymce.util.Tools.resolve("tinymce.Env")
var n=tinymce.util.Tools.resolve("tinymce.util.Delay")
var a=function(e){return parseInt(e.getParam("autoresize_min_height",e.getElement().offsetHeight),10)}
var o=function(e){return parseInt(e.getParam("autoresize_max_height",0),10)}
var i=function(e){return e.getParam("autoresize_overflow_padding",1)}
var u=function(e){return e.getParam("autoresize_bottom_margin",50)}
var s=function(e){return e.getParam("autoresize_on_init",true)}
var l={getAutoResizeMinHeight:a,getAutoResizeMaxHeight:o,getAutoResizeOverflowPadding:i,getAutoResizeBottomMargin:u,shouldAutoResizeOnInit:s}
var c=function(e){return e.plugins.fullscreen&&e.plugins.fullscreen.isFullscreen()}
var f=function(e,t,r,a,o){n.setEditorTimeout(e,function(){v(e,t)
r--?f(e,t,r,a,o):o&&o()},a)}
var d=function(e,t){var r=e.getBody()
if(r){r.style.overflowY=t?"":"hidden"
t||(r.scrollTop=0)}}
var v=function(e,t){var n,a,o,i,u
var s,f,m,g,p,A
var h=e.dom
a=e.getDoc()
if(!a)return
if(c(e)){d(e,true)
return}o=a.body
i=l.getAutoResizeMinHeight(e)
s=h.getStyle(o,"margin-top",true)
f=h.getStyle(o,"margin-bottom",true)
m=h.getStyle(o,"padding-top",true)
g=h.getStyle(o,"padding-bottom",true)
p=h.getStyle(o,"border-top-width",true)
A=h.getStyle(o,"border-bottom-width",true)
u=o.offsetHeight+parseInt(s,10)+parseInt(f,10)+parseInt(m,10)+parseInt(g,10)+parseInt(p,10)+parseInt(A,10);(isNaN(u)||u<=0)&&(u=r.ie?o.scrollHeight:r.webkit&&0===o.clientHeight?0:o.offsetHeight)
u>l.getAutoResizeMinHeight(e)&&(i=u)
var b=l.getAutoResizeMaxHeight(e)
if(b&&u>b){i=b
d(e,true)}else d(e,false)
if(i!==t.get()){n=i-t.get()
h.setStyle(e.iframeElement,"height",i+"px")
t.set(i)
r.webkit&&n<0&&v(e,t)}}
var m=function(e,t){e.on("init",function(){var t,r
var n=e.dom
t=l.getAutoResizeOverflowPadding(e)
r=l.getAutoResizeBottomMargin(e)
false!==t&&n.setStyles(e.getBody(),{paddingLeft:t,paddingRight:t})
false!==r&&n.setStyles(e.getBody(),{paddingBottom:r})})
e.on("nodechange setcontent keyup FullscreenStateChanged",function(r){v(e,t)})
l.shouldAutoResizeOnInit(e)&&e.on("init",function(){f(e,t,20,100,function(){f(e,t,5,1e3)})})}
var g={setup:m,resize:v}
var p=function(e,t){e.addCommand("mceAutoResize",function(){g.resize(e,t)})}
var A={register:p}
t.add("autoresize",function(t){if(!t.inline){var r=e(0)
A.register(t,r)
g.setup(t,r)}})}()},sLj6:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("lwsE"))
var i=a(r("W8MJ"))
var u=a(r("a1gu"))
var s=a(r("Nsbk"))
var l=a(r("7W2i"))
var c=a(r("17x9"))
var f=n(r("q1tI"))
var d=a(r("XmU4"))
var v=a(r("BAch"))
var m=a(r("r1tT"))
var g=function(e){(0,l.default)(t,e)
function t(){var e
var r;(0,o.default)(this,t)
for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i]
r=(0,u.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(a)))
r.handleSelect=function(e){var t=r.props.files[e]
r.props.onLinkClick({title:t.name,href:t.url,embed:t.embed})}
return r}(0,i.default)(t,[{key:"renderUploadForm",value:function(){if(this.props.withUploadForm)return f.default.createElement(m.default,{fetchFolders:this.props.fetchFolders,upload:this.props.upload,toggleUploadForm:this.props.toggleUploadForm,startUpload:this.props.startUpload,usageRightsRequired:this.props.usageRightsRequired,messages:{expand:(0,v.default)("Upload a new file"),expandScreenreader:(0,v.default)("File Upload Form"),collapse:(0,v.default)("Cancel file upload"),collapseScreenreader:(0,v.default)("File Upload Form")},showAltTextForm:false})
return null}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("p",null,(0,v.default)("Click any file to insert a download link for that file.")),null!=this.props.rootFolderId&&f.default.createElement(d.default,{onSelect:this.handleSelect,onToggle:this.props.toggleFolder,files:this.props.files,folders:this.props.folders,folder:this.props.folders[this.props.rootFolderId],maxHeight:"37em"}),this.renderUploadForm())}}])
t.displayName="FilesPanel"
return t}(f.Component)
t.default=g
g.propTypes={withUploadForm:c.default.bool,files:c.default.objectOf(c.default.shape({id:c.default.number,name:c.default.string,type:c.default.string,url:c.default.string})),folders:c.default.objectOf(c.default.shape({id:c.default.number,name:c.default.string,filesUrl:c.default.string,foldersUrl:c.default.string})),rootFolderId:c.default.number,toggleFolder:c.default.func.isRequired,fetchFolders:m.default.propTypes.fetchFolders,startUpload:m.default.propTypes.startUpload,upload:m.default.propTypes.upload,toggleUploadForm:m.default.propTypes.toggleUploadForm,onLinkClick:c.default.func.isRequired,canUploadFiles:c.default.bool,usageRightsRequired:c.default.bool}},sMbP:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.renderIntoDiv=d
var a=n(r("q1tI"))
var o=r("i8i4")
var i=n(r("gz2T"))
var u=n(r("kHMh"))
var s=n(r("uywh"))
var l=n(r("BAch"))
var c=n(r("hSMc"))
var f=n(r("VxtD"))
l.default.setup({locale:"en",generateId:r("syYy"),missingTranslation:"ignore"})
function d(e,t,r){t.skin||f.default.useCanvas()
u.default.DOM.loadCSS=function(){}
t=(0,s.default)(t,u.default)
l.default.setup({locale:t.language})
var n=(0,o.render)(a.default.createElement(i.default,Object.assign({},t,{handleUnmount:function(){return(0,o.unmountComponentAtNode)(e)}})),e)
c.default.renderEditor(n)
r&&r(n)}},"sQ/i":function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.createAddImage=u
t.requestImages=s
t.receiveImages=l
t.failImagesLoad=c
t.fetchImages=f
t.FAIL_IMAGES_LOAD=t.RECEIVE_IMAGES=t.REQUEST_IMAGES=t.ADD_IMAGE=void 0
var n="action.images.add_image"
t.ADD_IMAGE="action.images.add_image"
var a="action.images.request_images"
t.REQUEST_IMAGES="action.images.request_images"
var o="action.images.receive_images"
t.RECEIVE_IMAGES="action.images.receive_images"
var i="action.images.fail_images_load"
t.FAIL_IMAGES_LOAD="action.images.fail_images_load"
function u(e){var t=e.id,r=e.filename,a=e.display_name,o=e.url,i=e.thumbnail_url
return{type:n,id:t,filename:r,display_name:a,preview_url:o,thumbnail_url:i}}function s(e){return{type:a,bookmark:e}}function l(e){return{type:o,imageRecords:e.images,bookmark:e.bookmark}}function c(e){return{type:i,error:e}}function f(e){return function(t,r){var n=e.calledFromRender
var a=r(),o=a.source,i=a.images,u=a.host,f=a.contextId,d=a.contextType
if(i.requested){if(!n&&i.hasMore){t(s(i.bookmark))
return o.fetchImages({bookmark:i.bookmark}).then(function(e){t(l(e))}).catch(function(e){t(c(e))})}return new Promise(function(e){e()})}t(s(i.bookmark))
return o.fetchImages({host:u,contextId:f,contextType:d}).then(function(e){t(l(e))}).catch(function(e){t(c(e))})}}},sSTr:function(e,t,r){"use strict"
var n=r("TqRt")
var a=n(r("dKDz"))
var o=n(r("TfMG"))
var i=n(r("BAch"))
tinymce.create("tinymce.plugins.InstructureRecord",{init:function(e){e.addCommand("instructureRecord",o.default.bind(this,e,document))
e.addButton("instructure_record",{title:(0,a.default)((0,i.default)({default:"Record/Upload Media",description:"Title for RCE button to insert or record media"})),cmd:"instructureRecord",icon:"video icon-video"})},getInfo:function(){return{longname:"InstructureRecord",author:"Brian Whitmer",authorurl:"http://www.instructure.com",infourl:"http://www.instructure.com",version:tinymce.majorVersion+"."+tinymce.minorVersion}}})
tinymce.PluginManager.add("instructure_record",tinymce.plugins.InstructureRecord)},tmSs:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("lwsE"))
var o=n(r("W8MJ"))
var i=r("Tb6I")
var u=function(){function e(t){(0,a.default)(this,e)
this.store=t}(0,o.default)(e,[{key:"show",value:function(){this.store.dispatch((0,i.showSidebar)())}},{key:"hide",value:function(){this.store.dispatch((0,i.hideSidebar)())}}])
return e}()
var s=u
t.default=s},uM7l:function(e,t,r){var n=r("OBhP")
var a=4
function o(e){return n(e,a)}e.exports=o},uSWO:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=n(r("lwsE"))
var o=n(r("W8MJ"))
var i=n(r("a1gu"))
var u=n(r("Nsbk"))
var s=n(r("PJYZ"))
var l=n(r("7W2i"))
var c=n(r("q1tI"))
var f=n(r("17x9"))
var d=n(r("XmZK"))
var v=n(r("lGJA"))
var m=n(r("4hSX"))
var g={EXITED:-2,EXITING:-1,ENTERING:1,ENTERED:2}
var p=function(e){(0,l.default)(t,e)
function t(){var e
var r;(0,a.default)(this,t)
for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l]
r=(0,i.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(o)))
r._timeouts=[]
r.state={transitioning:false}
r.startTransition=function(e,t){var n=r.props,a=n.transitionEnter,o=n.transitionExit
e?r.enter(a&&t?g.EXITED:null):r.exit(o&&t?g.ENTERED:null)}
r.transition=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
if(r._unmounted)return
var o=(0,d.default)((0,s.default)(r))
var i=r.getTransitionClassName(e)
var u=r.getTransitionClassName(t)
var l=r.props.transitionClassName
t&&a&&r.transitionEnabled(e)?o.add(l):o.remove(l)
u&&o.remove(u)
i&&o.add(i)
e&&t&&r.props.onTransition(e,t)
r._timeouts.push(setTimeout(function(){if(r._unmounted)return
"function"===typeof n&&n()},a))}
r.enter=function(e){if(r.state.transitioning||r._unmounted)return
var t=(0,s.default)(r),n=t.props
n.onEnter()
n.transitionEnter?r.setState({transitioning:true},function(){var t=function(){n.onEntering()
r.transition(g.ENTERED,g.ENTERING,function(){r.setState({transitioning:false},function(){n.onEntered()})})}
e?r.transition(e,null,function(){r.transition(g.ENTERING,e,t,n.enterDelay)}):t()}):r.setState({transitioning:false},function(){r.transition(g.ENTERED,g.EXITED)
n.onEntered()})}
r.exit=function(e){if(r.state.transitioning)return
var t=(0,s.default)(r),n=t.props
n.onExit()
n.transitionExit?r.setState({transitioning:true},function(){var t=function(){n.onExiting()
r.transition(g.EXITED,g.EXITING,function(){r.setState({transitioning:false},function(){n.onExited()})})}
e?r.transition(e,null,function(){r.transition(g.EXITING,e,t,n.exitDelay)}):t()}):r.setState({transitioning:false},function(){r.transition(g.EXITED,g.ENTERED)
n.onExited()})}
return r}(0,o.default)(t,[{key:"componentDidMount",value:function(){this.startTransition(this.props.in,this.props.transitionOnMount)}},{key:"componentWillReceiveProps",value:function(e,t){e.in!==this.props.in&&this.state.transitioning&&this.clearTransition(this.props.transitionClassName)}},{key:"componentDidUpdate",value:function(e,t){this.props.transitionClassName!==e.transitionClassName&&this.clearTransition(e.transitionClassName)
e.in!==this.props.in&&this.startTransition(this.props.in,true)}},{key:"componentWillUnmount",value:function(){this._timeouts.forEach(function(e){clearTimeout(e)})
this._unmounted=true}},{key:"clearTransition",value:function(e){var t=this
if(this._unmounted)return
this.setState({transitioning:false},function(){if(t._unmounted)return
var r=(0,d.default)(t)
Object.keys(g).forEach(function(e){r.remove(t.getTransitionClassName(e))})
r.remove(e)})}},{key:"transitionEnabled",value:function(e){var t=this.props
switch(e){case g.EXITED:case g.EXITING:return t.transitionExit
case g.ENTERED:case g.ENTERING:return t.transitionEnter
default:return false}}},{key:"getTransitionClassName",value:function(e){var t=this.props
switch(e){case g.EXITED:return t.exitedClassName
case g.ENTERING:return t.enteringClassName
case g.ENTERED:return t.enteredClassName
case g.EXITING:return t.exitingClassName
default:return null}}},{key:"renderChildren",value:function(){return(0,m.default)((0,v.default)(this.props.children),{"aria-hidden":!this.props.in||null})}},{key:"render",value:function(){return this.props.in||!this.props.unmountOnExit||this.state.transitioning?this.renderChildren():null}}])
t.displayName="BaseTransition"
return t}(c.default.Component)
t.default=p
p.propTypes={in:f.default.bool,unmountOnExit:f.default.bool,transitionOnMount:f.default.bool,transitionEnter:f.default.bool,transitionExit:f.default.bool,enterDelay:f.default.number,exitDelay:f.default.number,transitionClassName:f.default.string,exitedClassName:f.default.string,exitingClassName:f.default.string,enteredClassName:f.default.string,enteringClassName:f.default.string,onTransition:f.default.func,onEnter:f.default.func,onEntering:f.default.func,onEntered:f.default.func,onExit:f.default.func,onExiting:f.default.func,onExited:f.default.func,children:f.default.node,className:f.default.string}
p.defaultProps={in:false,component:"div",unmountOnExit:false,transitionOnMount:false,transitionEnter:true,transitionExit:true,enterDelay:300,exitDelay:300,onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},onTransition:function(e,t){},className:void 0,children:null,transitionClassName:void 0,exitedClassName:void 0,exitingClassName:void 0,enteredClassName:void 0,enteringClassName:void 0}
p.states=g},uywh:function(e,t,r){"use strict"
var n=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=c
var a=n(r("MVZn"))
var o=n(r("k3wK"))
var i=n(r("/2dx"))
var u=n(r("a6RQ"))
var s=n(r("KuFL"))
var l=r("VxtD")
function c(e,t,r){var n=e.editorOptions(t),c=(0,o.default)(n),f=(0,i.default)(e.mirroredAttrs,c,r)
e.language=(0,u.default)(e.language)
var d=(0,s.default)(e.language)
if(void 0!==d){f.language=d
f.language_url="none"}e.editorOptions.content_css&&(f.content_css=window.location.origin+e.editorOptions.content_css)
f.skin=false
f.content_style=l.contentStyle
f.branding=false
return(0,a.default)({},e,{editorOptions:f,tinymce:t})}},"vn/0":function(e,t){!function(){"use strict"
var e=tinymce.util.Tools.resolve("tinymce.PluginManager")
var t=tinymce.util.Tools.resolve("tinymce.util.VK")
var r=function(e){return"boolean"===typeof e.link_assume_external_targets&&e.link_assume_external_targets}
var n=function(e){return"boolean"===typeof e.link_context_toolbar&&e.link_context_toolbar}
var a=function(e){return e.link_list}
var o=function(e){return"string"===typeof e.default_link_target}
var i=function(e){return e.default_link_target}
var u=function(e){return e.target_list}
var s=function(e,t){e.settings.target_list=t}
var l=function(e){return false!==u(e)}
var c=function(e){return e.rel_list}
var f=function(e){return void 0!==c(e)}
var d=function(e){return e.link_class_list}
var v=function(e){return void 0!==d(e)}
var m=function(e){return false!==e.link_title}
var g=function(e){return"boolean"===typeof e.allow_unsafe_link_target&&e.allow_unsafe_link_target}
var p={assumeExternalTargets:r,hasContextToolbar:n,getLinkList:a,hasDefaultLinkTarget:o,getDefaultLinkTarget:i,getTargetList:u,setTargetList:s,shouldShowTargetList:l,getRelList:c,hasRelList:f,getLinkClassList:d,hasLinkClassList:v,shouldShowLinkTitle:m,allowUnsafeLinkTarget:g}
var A=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils")
var h=tinymce.util.Tools.resolve("tinymce.Env")
var b=function(e,t){document.body.appendChild(e)
e.dispatchEvent(t)
document.body.removeChild(e)}
var y=function(e){if(!h.ie||h.ie>10){var t=document.createElement("a")
t.target="_blank"
t.href=e
t.rel="noreferrer noopener"
var r=document.createEvent("MouseEvents")
r.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null)
b(t,r)}else{var n=window.open("","_blank")
if(n){n.opener=null
var a=n.document
a.open()
a.write('<meta http-equiv="refresh" content="0; url='+A.DOM.encode(e)+'">')
a.close()}}}
var w={open:y}
var E=tinymce.util.Tools.resolve("tinymce.util.Tools")
var x=function(e,t){var r=["noopener"]
var n=e?e.split(/\s+/):[]
var a=function(e){return E.trim(e.sort().join(" "))}
var o=function(e){e=i(e)
return e.length?e.concat(r):r}
var i=function(e){return e.filter(function(e){return-1===E.inArray(r,e)})}
n=t?o(n):i(n)
return n.length?a(n):null}
var C=function(e){return e.replace(/\uFEFF/g,"")}
var k=function(e,t){t=t||e.selection.getNode()
return S(t)?e.dom.select("a[href]",t)[0]:e.dom.getParent(t,"a[href]")}
var B=function(e,t){var r=t?t.innerText||t.textContent:e.getContent({format:"text"})
return C(r)}
var T=function(e){return e&&"A"===e.nodeName&&e.href}
var R=function(e){return E.grep(e,T).length>0}
var I=function(e){if(/</.test(e)&&(!/^<a [^>]+>[^<]+<\/a>$/.test(e)||-1===e.indexOf("href=")))return false
return true}
var S=function(e){return e&&"FIGURE"===e.nodeName&&/\bimage\b/i.test(e.className)}
var D=function(e,t){return function(r){e.undoManager.transact(function(){var n=e.selection.getNode()
var a=k(e,n)
var o={href:r.href,target:r.target?r.target:null,rel:r.rel?r.rel:null,class:r.class?r.class:null,title:r.title?r.title:null}
p.hasRelList(e.settings)||false!==p.allowUnsafeLinkTarget(e.settings)||(o.rel=x(o.rel,"_blank"===o.target))
if(r.href===t.href){t.attach()
t={}}if(a){e.focus()
r.hasOwnProperty("text")&&("innerText"in a?a.innerText=r.text:a.textContent=r.text)
e.dom.setAttribs(a,o)
e.selection.select(a)
e.undoManager.add()}else S(n)?P(e,n,o):r.hasOwnProperty("text")?e.insertContent(e.dom.createHTML("a",o,e.dom.encode(r.text))):e.execCommand("mceInsertLink",false,o)})}}
var N=function(e){return function(){e.undoManager.transact(function(){var t=e.selection.getNode()
S(t)?M(e,t):e.execCommand("unlink")})}}
var M=function(e,t){var r,n
n=e.dom.select("img",t)[0]
if(n){r=e.dom.getParents(n,"a[href]",t)[0]
if(r){r.parentNode.insertBefore(n,r)
e.dom.remove(r)}}}
var P=function(e,t,r){var n,a
a=e.dom.select("img",t)[0]
if(a){n=e.dom.create("a",r)
a.parentNode.insertBefore(n,a)
n.appendChild(a)}}
var _={link:D,unlink:N,isLink:T,hasLinks:R,isOnlyTextSelected:I,getAnchorElement:k,getAnchorText:B,toggleTargetRules:x}
var O=tinymce.util.Tools.resolve("tinymce.util.Delay")
var F=tinymce.util.Tools.resolve("tinymce.util.XHR")
var L={}
var U=function(e,t){var r=p.getLinkList(e.settings)
"string"===typeof r?F.send({url:r,success:function(r){t(e,JSON.parse(r))}}):"function"===typeof r?r(function(r){t(e,r)}):t(e,r)}
var Q=function(e,t,r){var n=function(e,r){r=r||[]
E.each(e,function(e){var a={text:e.text||e.title}
if(e.menu)a.menu=n(e.menu)
else{a.value=e.value
t&&t(a)}r.push(a)})
return r}
return n(e,r||[])}
var z=function(e,t,r){var n=e.selection.getRng()
O.setEditorTimeout(e,function(){e.windowManager.confirm(t,function(t){e.selection.setRng(n)
r(t)})})}
var j=function(e,t){var r={}
var n=e.selection
var a=e.dom
var o,i
var u,s,l,c,f,d,v,m,g
var A=function(e){var t=u.find("#text");(!t.value()||e.lastControl&&t.value()===e.lastControl.text())&&t.value(e.control.text())
u.find("#href").value(e.control.value())}
var h=function(t){var r=[]
E.each(e.dom.select("a:not([href])"),function(e){var n=e.name||e.id
n&&r.push({text:n,value:"#"+n,selected:-1!==t.indexOf("#"+n)})})
if(r.length){r.unshift({text:"None",value:""})
return{name:"anchor",type:"listbox",label:"Anchors",values:r,onselect:A}}}
var b=function(){i||!s||r.text||this.parent().parent().find("#text")[0].value(this.value())}
var y=function(t){var n=t.meta||{}
c&&c.value(e.convertURL(this.value(),"href"))
E.each(t.meta,function(e,t){var n=u.find("#"+t)
if("text"===t){if(0===i.length){n.value(e)
r.text=e}}else n.value(e)})
n.attach&&(L={href:this.value(),attach:n.attach})
n.text||b.call(this)}
var w=function(e){e.meta=u.toJSON()}
s=_.isOnlyTextSelected(n.getContent())
o=_.getAnchorElement(e)
r.text=i=_.getAnchorText(e.selection,o)
r.href=o?a.getAttrib(o,"href"):""
o?r.target=a.getAttrib(o,"target"):p.hasDefaultLinkTarget(e.settings)&&(r.target=p.getDefaultLinkTarget(e.settings));(g=a.getAttrib(o,"rel"))&&(r.rel=g);(g=a.getAttrib(o,"class"))&&(r.class=g);(g=a.getAttrib(o,"title"))&&(r.title=g)
s&&(l={name:"text",type:"textbox",size:40,label:"Text to display",onchange:function(){r.text=this.value()}})
t&&(c={type:"listbox",label:"Link list",values:Q(t,function(t){t.value=e.convertURL(t.value||t.url,"href")},[{text:"None",value:""}]),onselect:A,value:e.convertURL(r.href,"href"),onPostRender:function(){c=this}})
if(p.shouldShowTargetList(e.settings)){void 0===p.getTargetList(e.settings)&&p.setTargetList(e,[{text:"None",value:""},{text:"New window",value:"_blank"}])
d={name:"target",type:"listbox",label:"Target",values:Q(p.getTargetList(e.settings))}}p.hasRelList(e.settings)&&(f={name:"rel",type:"listbox",label:"Rel",values:Q(p.getRelList(e.settings),function(t){false===p.allowUnsafeLinkTarget(e.settings)&&(t.value=_.toggleTargetRules(t.value,"_blank"===r.target))})})
p.hasLinkClassList(e.settings)&&(v={name:"class",type:"listbox",label:"Class",values:Q(p.getLinkClassList(e.settings),function(t){t.value&&(t.textStyle=function(){return e.formatter.getCssText({inline:"a",classes:[t.value]})})})})
p.shouldShowLinkTitle(e.settings)&&(m={name:"title",type:"textbox",label:"Title",value:r.title})
u=e.windowManager.open({title:"Insert link",data:r,body:[{name:"href",type:"filepicker",filetype:"file",size:40,autofocus:true,label:"Url",onchange:y,onkeyup:b,onpaste:b,onbeforecall:w},l,m,h(r.href),c,f,d,v],onSubmit:function(t){var n=p.assumeExternalTargets(e.settings)
var a=_.link(e,L)
var o=_.unlink(e)
var u=E.extend({},r,t.data)
var l=u.href
if(!l){o()
return}s&&u.text!==i||delete u.text
if(l.indexOf("@")>0&&-1===l.indexOf("//")&&-1===l.indexOf("mailto:")){z(e,"The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?",function(e){e&&(u.href="mailto:"+l)
a(u)})
return}if(true===n&&!/^\w+:/i.test(l)||false===n&&/^\s*www[\.|\d\.]/i.test(l)){z(e,"The URL you entered seems to be an external link. Do you want to add the required http:// prefix?",function(e){e&&(u.href="http://"+l)
a(u)})
return}a(u)}})}
var H=function(e){U(e,j)}
var W={open:H}
var V=function(e,t){return e.dom.getParent(t,"a[href]")}
var G=function(e){return V(e,e.selection.getStart())}
var Y=function(e){var t=e.getAttribute("data-mce-href")
return t||e.getAttribute("href")}
var J=function(e){var t=e.plugins.contextmenu
return!!t&&t.isContextMenuVisible()}
var q=function(e){return true===e.altKey&&false===e.shiftKey&&false===e.ctrlKey&&false===e.metaKey}
var K=function(e,t){if(t){var r=Y(t)
if(/^#/.test(r)){var n=e.$(r)
n.length&&e.selection.scrollIntoView(n[0],true)}else w.open(t.href)}}
var X=function(e){return function(){W.open(e)}}
var Z=function(e){return function(){K(e,G(e))}}
var $=function(e){return function(t){var r,n,a
if(p.hasContextToolbar(e.settings)&&!J(e)&&_.isLink(t)){r=e.selection
n=r.getRng()
a=n.startContainer
if(3===a.nodeType&&r.isCollapsed()&&n.startOffset>0&&n.startOffset<a.data.length)return true}return false}}
var ee=function(e){e.on("click",function(r){var n=V(e,r.target)
if(n&&t.metaKeyPressed(r)){r.preventDefault()
K(e,n)}})
e.on("keydown",function(t){var r=G(e)
if(r&&13===t.keyCode&&q(t)){t.preventDefault()
K(e,r)}})}
var te=function(e){return function(){var t=this
e.on("nodechange",function(r){t.active(!e.readonly&&!!_.getAnchorElement(e,r.element))})}}
var re=function(e){return function(){var t=this
var r=function(e){_.hasLinks(e.parents)?t.show():t.hide()}
_.hasLinks(e.dom.getParents(e.selection.getStart()))||t.hide()
e.on("nodechange",r)
t.on("remove",function(){e.off("nodechange",r)})}}
var ne={openDialog:X,gotoSelectedLink:Z,leftClickedOnAHref:$,setupGotoLinks:ee,toggleActiveState:te,toggleViewLinkState:re}
var ae=function(e){e.addCommand("mceLink",ne.openDialog(e))}
var oe={register:ae}
var ie=function(e){e.addShortcut("Meta+K","",ne.openDialog(e))}
var ue={setup:ie}
var se=function(e){e.addButton("link",{active:false,icon:"link",tooltip:"Insert/edit link",onclick:ne.openDialog(e),onpostrender:ne.toggleActiveState(e)})
e.addButton("unlink",{active:false,icon:"unlink",tooltip:"Remove link",onclick:_.unlink(e),onpostrender:ne.toggleActiveState(e)})
e.addContextToolbar&&e.addButton("openlink",{icon:"newtab",tooltip:"Open link",onclick:ne.gotoSelectedLink(e)})}
var le=function(e){e.addMenuItem("openlink",{text:"Open link",icon:"newtab",onclick:ne.gotoSelectedLink(e),onPostRender:ne.toggleViewLinkState(e),prependToContext:true})
e.addMenuItem("link",{icon:"link",text:"Link",shortcut:"Meta+K",onclick:ne.openDialog(e),stateSelector:"a[href]",context:"insert",prependToContext:true})
e.addMenuItem("unlink",{icon:"unlink",text:"Remove link",onclick:_.unlink(e),stateSelector:"a[href]"})}
var ce=function(e){e.addContextToolbar&&e.addContextToolbar(ne.leftClickedOnAHref(e),"openlink | link unlink")}
var fe={setupButtons:se,setupMenuItems:le,setupContextToolbars:ce}
e.add("link",function(e){fe.setupButtons(e)
fe.setupMenuItems(e)
fe.setupContextToolbars(e)
ne.setupGotoLinks(e)
oe.register(e)
ue.setup(e)})}()},xYFW:function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.createToggle=d
t.createAddFile=v
t.createRequestFiles=m
t.createReceiveFiles=g
t.createInsertFile=p
t.requestFiles=A
t.createAddFolder=h
t.createRequestSubfolders=b
t.createReceiveSubfolders=y
t.requestSubfolders=w
t.toggle=E
t.createSetRoot=x
t.init=C
t.SET_ROOT=t.TOGGLE=t.REQUEST_SUBFOLDERS=t.REQUEST_FILES=t.RECEIVE_SUBFOLDERS=t.INSERT_FILE=t.RECEIVE_FILES=t.ADD_FOLDER=t.ADD_FILE=void 0
var n="action.files.add_file"
t.ADD_FILE="action.files.add_file"
var a="action.files.add_folder"
t.ADD_FOLDER="action.files.add_folder"
var o="action.files.receive_files"
t.RECEIVE_FILES="action.files.receive_files"
var i="action.files.insert_file"
t.INSERT_FILE="action.files.insert_file"
var u="action.files.receive_subfolders"
t.RECEIVE_SUBFOLDERS="action.files.receive_subfolders"
var s="action.files.request_files"
t.REQUEST_FILES="action.files.request_files"
var l="action.files.request_subfolders"
t.REQUEST_SUBFOLDERS="action.files.request_subfolders"
var c="action.files.toggle"
t.TOGGLE="action.files.toggle"
var f="action.files.set_root"
t.SET_ROOT="action.files.set_root"
function d(e){return{type:c,id:e}}function v(e){var t=e.id,r=e.name,a=e.url,o=e.type,i=e.embed
return{type:n,id:t,name:r,url:a,embed:i,fileType:o}}function m(e){return{type:s,id:e}}function g(e,t){return{type:o,id:e,fileIds:t.map(function(e){return e.id})}}function p(e,t){return{type:i,id:e,fileId:t}}function A(e,t){return function(r,n){var a=n(),o=a.source,i=a.folders
r(m(e))
return o.fetchFiles(t||i[e].filesUrl).then(function(t){var n=t.files,a=t.bookmark
r(n.map(v).concat(g(e,n)))
a&&r(A(e,a))})}}function h(e){return{type:a,id:e.id,name:e.name,parentId:e.parentId,filesUrl:e.filesUrl,foldersUrl:e.foldersUrl}}function b(e){return{type:l,id:e}}function y(e,t){return{type:u,id:e,folderIds:t.map(function(e){return e.id})}}function w(e,t){return function(r,n){var a=n(),o=a.source,i=a.folders
r(b(e))
return o.fetchPage(t||i[e].foldersUrl).then(function(t){var n=t.folders,a=t.bookmark
r(n.map(h).concat(y(e,n,a)))
a&&r(w(e,a))})}}function E(e){return function(t,r){t(d(e))
var n=r().folders[e]
if(!n.requested&&n.expanded){t(w(n.id))
t(A(n.id))}}}function x(e){return{type:f,id:e}}function C(e,t){var r=t()
return r.source.fetchRootFolder(r).then(function(t){var r=t.folders
var n=r[0]
if(n){e([h(n),x(n.id)])
e(E(n.id))}})}},xtS7:function(e,t,r){"use strict"
var n=r("TqRt")
var a=n(r("dKDz"))
var o=n(r("BAch"))
var i=n(r("qbD8"))
tinymce.create("tinymce.plugins.InstructureEquation",{init:function(e){e.addCommand("instructureEquation",i.default.bind(this,e,document))
e.addButton("instructure_equation",{title:(0,a.default)((0,o.default)({default:"Insert Math Equation",description:"Title for RCE button to insert a math equation"})),cmd:"instructureEquation",icon:"equation icon-equation",onPostRender:function(){var t=this
e.on("NodeChange",function(e){t.active("IMG"==e.nodeName&&"equation_image"==e.className)})}})}})
tinymce.PluginManager.add("instructure_equation",tinymce.plugins.InstructureEquation)},yGSU:function(e,t,r){"use strict"
var n=r("284h")
var a=r("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=a(r("MVZn"))
var i=a(r("lwsE"))
var u=a(r("W8MJ"))
var s=a(r("a1gu"))
var l=a(r("Nsbk"))
var c=a(r("7W2i"))
var f=n(r("q1tI"))
var d=a(r("q3EI"))
var v=f.default.createElement("path",{d:"M840 0v840H0v240h840v840h240v-840h840V840h-840V0z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var m=function(e){(0,c.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,s.default)(this,(0,l.default)(t).apply(this,arguments))}(0,u.default)(t,[{key:"render",value:function(){return f.default.createElement(d.default,Object.assign({},this.props,{name:"IconAdd",viewBox:"0 0 1920 1920"}),v)}}])
t.displayName="IconAdd"
return t}(f.Component)
t.default=m
m.glyphName="add"
m.variant="Solid"
m.propTypes=(0,o.default)({},d.default.propTypes)},zLVn:function(e,t,r){"use strict"
r.d(t,"a",function(){return n})
function n(e,t){if(null==e)return{}
var r={}
var n=Object.keys(e)
var a,o
for(o=0;o<n.length;o++){a=n[o]
if(t.indexOf(a)>=0)continue
r[a]=e[a]}return r}}}])

//# sourceMappingURL=canvas-rce-old-async-chunk-c-f33063e05f.js.map