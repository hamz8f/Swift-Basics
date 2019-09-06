(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[97],{"+Qka":function(e,t,a){var n=a("fmRc"),r=a("t2Dn"),i=a("cq/+"),o=a("T1AV"),s=a("GoyQ"),l=a("mTTR"),_=a("itsj")
function d(e,t,a,c,u){if(e===t)return
i(t,function(i,l){u||(u=new n)
if(s(i))o(e,t,l,a,d,c,u)
else{var f=c?c(_(e,l),i,l+"",e,t,u):void 0
void 0===f&&(f=i)
r(e,l,f)}},l)}e.exports=d},"+eFp":function(e,t,a){"use strict"
t.__esModule=true
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
var r=a("q1tI")
var i=f(r)
var o=a("17x9")
var s=f(o)
var l=a("UnXY")
var _=f(l)
var d=a("zB99")
var c=f(d)
var u=a("xfxO")
function f(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}u.nameShape.isRequired,s.default.bool,s.default.bool,s.default.bool,(0,u.transitionTimeout)("Appear"),(0,u.transitionTimeout)("Enter"),(0,u.transitionTimeout)("Leave")
var m={transitionAppear:false,transitionEnter:true,transitionLeave:true}
var g=function(e){p(t,e)
function t(){var a,n,r
h(this,t)
for(var o=arguments.length,s=Array(o),l=0;l<o;l++)s[l]=arguments[l]
return r=(a=(n=b(this,e.call.apply(e,[this].concat(s))),n),n._wrapChild=function(e){return i.default.createElement(c.default,{name:n.props.transitionName,appear:n.props.transitionAppear,enter:n.props.transitionEnter,leave:n.props.transitionLeave,appearTimeout:n.props.transitionAppearTimeout,enterTimeout:n.props.transitionEnterTimeout,leaveTimeout:n.props.transitionLeaveTimeout},e)},a),b(n,r)}t.prototype.render=function(){return i.default.createElement(_.default,n({},this.props,{childFactory:this._wrapChild}))}
return t}(i.default.Component)
g.displayName="CSSTransitionGroup"
g.propTypes={}
g.defaultProps=m
t.default=g
e.exports=t["default"]},"/7Jz":function(e,t,a){"use strict"
a.r(t)
var n=a("9kyW")
var r=a.n(n)
var i=a("IEa/")
var o=a.n(i)
var s=a("/CgH")
var l=a.n(s)
var _=a("wEkZ")
var d=a.n(_)
var c=a("pcPB")
var u=a.n(c)
var f=a("VcUl")
var h=a.n(f)
var b=a("k8dj")
var p=a.n(b)
var m=a("aS6o")
var g=a.n(m)
var v=a("3vXJ")
var k=a.n(v)
var y=a("ycuu")
var w=a.n(y)
var x=a("qhOH")
var z=a.n(x)
var j=a("Sc0N")
var O=a.n(j)
var T=a("siI/")
var S=a.n(T)
var C=a("xUnz")
var A=a.n(C)
var E=a("7oM+")
var M=a.n(E)
var L=a("ZiLf")
var P=a.n(L)
var R=a("MX5s")
var B=a.n(R)
function I(e){I="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
return I(e)}function F(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true}):e[t]=a
return e}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{}
var n=Object.keys(a)
"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))
n.forEach(function(t){F(e,t,a[t])})}return e}function q(e){return W(e)||D(e)||H()}function W(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t]
return a}}function D(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function H(){throw new TypeError("Invalid attempt to spread non-iterable instance")}var K=/([A-Z])/g
var G=function(e){return"-".concat(e.toLowerCase())}
var Z=function(e){var t=e.replace(K,G)
if("m"===t[0]&&"s"===t[1]&&"-"===t[2])return"-".concat(t)
return t}
var U={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridColumn:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true,fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true}
function V(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var X=["Webkit","ms","Moz","O"]
Object.keys(U).forEach(function(e){X.forEach(function(t){U[V(t,e)]=U[e]})})
var Q=function(e,t){return"number"===typeof t?U[e]?""+t:t+"px":""+t}
var Y=function(e,t){return ee(Q(e,t))}
var J=function(e,t){return r()(e).toString(36)}
var $=function(e){return J(JSON.stringify(e))}
var ee=function(e){return"!"===e[e.length-10]&&" !important"===e.slice(-11)?e:"".concat(e," !important")}
var te="undefined"!==typeof Map
var ae=function(){function e(){this.elements={}
this.keyOrder=[]}var t=e.prototype
t.forEach=function(e){for(var t=0;t<this.keyOrder.length;t++)e(this.elements[this.keyOrder[t]],this.keyOrder[t])}
t.set=function(t,a,n){if(this.elements.hasOwnProperty(t)){if(n){var r=this.keyOrder.indexOf(t)
this.keyOrder.splice(r,1)
this.keyOrder.push(t)}}else this.keyOrder.push(t)
if(null==a){this.elements[t]=a
return}if(te&&a instanceof Map||a instanceof e){var i=this.elements.hasOwnProperty(t)?this.elements[t]:new e
a.forEach(function(e,t){i.set(t,e,n)})
this.elements[t]=i
return}if(!Array.isArray(a)&&"object"===I(a)){var o=this.elements.hasOwnProperty(t)?this.elements[t]:new e
var s=Object.keys(a)
for(var l=0;l<s.length;l+=1)o.set(s[l],a[s[l]],n)
this.elements[t]=o
return}this.elements[t]=a}
t.get=function(e){return this.elements[e]}
t.has=function(e){return this.elements.hasOwnProperty(e)}
t.addStyleType=function(t){var a=this
if(te&&t instanceof Map||t instanceof e)t.forEach(function(e,t){a.set(t,e,true)})
else{var n=Object.keys(t)
for(var r=0;r<n.length;r++)this.set(n[r],t[n[r]],true)}}
return e}()
var ne=["Webkit"]
var re=["Moz"]
var ie=["ms"]
var oe=["Webkit","Moz"]
var se=["Webkit","ms"]
var le=["Webkit","Moz","ms"]
var _e={plugins:[d.a,u.a,h.a,p.a,g.a,k.a,w.a,z.a,O.a,S.a,A.a,M.a,P.a,B.a],prefixMap:{transform:se,transformOrigin:se,transformOriginX:se,transformOriginY:se,backfaceVisibility:ne,perspective:ne,perspectiveOrigin:ne,transformStyle:ne,transformOriginZ:ne,animation:ne,animationDelay:ne,animationDirection:ne,animationFillMode:ne,animationDuration:ne,animationIterationCount:ne,animationName:ne,animationPlayState:ne,animationTimingFunction:ne,appearance:oe,userSelect:le,fontKerning:ne,textEmphasisPosition:ne,textEmphasis:ne,textEmphasisStyle:ne,textEmphasisColor:ne,boxDecorationBreak:ne,clipPath:ne,maskImage:ne,maskMode:ne,maskRepeat:ne,maskPosition:ne,maskClip:ne,maskOrigin:ne,maskSize:ne,maskComposite:ne,mask:ne,maskBorderSource:ne,maskBorderMode:ne,maskBorderSlice:ne,maskBorderWidth:ne,maskBorderOutset:ne,maskBorderRepeat:ne,maskBorder:ne,maskType:ne,textDecorationStyle:oe,textDecorationSkip:oe,textDecorationLine:oe,textDecorationColor:oe,filter:ne,fontFeatureSettings:oe,breakAfter:le,breakBefore:le,breakInside:le,columnCount:oe,columnFill:oe,columnGap:oe,columnRule:oe,columnRuleColor:oe,columnRuleStyle:oe,columnRuleWidth:oe,columns:oe,columnSpan:oe,columnWidth:oe,writingMode:se,flex:se,flexBasis:ne,flexDirection:se,flexGrow:ne,flexFlow:se,flexShrink:ne,flexWrap:se,alignContent:ne,alignItems:ne,alignSelf:ne,justifyContent:ne,order:ne,transitionDelay:ne,transitionDuration:ne,transitionProperty:ne,transitionTimingFunction:ne,backdropFilter:ne,scrollSnapType:se,scrollSnapPointsX:se,scrollSnapPointsY:se,scrollSnapDestination:se,scrollSnapCoordinate:se,shapeImageThreshold:ne,shapeImageMargin:ne,shapeImageOutside:ne,hyphens:le,flowInto:se,flowFrom:se,regionFragment:se,textOrientation:ne,boxSizing:re,textAlignLast:re,tabSize:re,wrapFlow:ie,wrapThrough:ie,wrapMargin:ie,touchAction:ie,gridTemplateColumns:ie,gridTemplateRows:ie,gridTemplateAreas:ie,gridTemplate:ie,gridAutoColumns:ie,gridAutoRows:ie,gridAutoFlow:ie,grid:ie,gridRowStart:ie,gridColumnStart:ie,gridRowEnd:ie,gridRow:ie,gridColumn:ie,gridColumnEnd:ie,gridColumnGap:ie,gridRowGap:ie,gridArea:ie,gridGap:ie,textSizeAdjust:se,borderImage:ne,borderImageOutset:ne,borderImageRepeat:ne,borderImageSlice:ne,borderImageSource:ne,borderImageWidth:ne}}
var de=l()(_e)
var ce=[function(e,t,a){if(":"!==e[0])return null
return a(t+e)},function(e,t,a){if("@"!==e[0])return null
var n=a(t)
return["".concat(e,"{").concat(n.join(""),"}")]}]
var ue=function e(t,a,n,r,i){var o=new ae
for(var s=0;s<a.length;s++)o.addStyleType(a[s])
var l=new ae
var _=[]
o.forEach(function(a,o){var s=n.some(function(s){var l=s(o,t,function(t){return e(t,[a],n,r,i)})
if(null!=l){if(Array.isArray(l))_.push.apply(_,q(l))
else{console.warn("WARNING: Selector handlers should return an array of rules.Returning a string containing multiple rules is deprecated.",s)
_.push("@media all {".concat(l,"}"))}return true}})
s||l.set(o,a,true)})
var d=pe(t,l,r,i,n)
d&&_.unshift(d)
return _}
var fe=function(e,t,a){if(!t)return
var n=Object.keys(t)
for(var r=0;r<n.length;r++){var i=n[r]
e.has(i)&&e.set(i,t[i](e.get(i),a),false)}}
var he=function(e,t,a){return"".concat(Z(e),":").concat(a(e,t),";")}
var be=function(e,t){e[t]=true
return e}
var pe=function(e,t,a,n,r){fe(t,a,r)
var i=Object.keys(t.elements).reduce(be,Object.create(null))
var o=de(t.elements)
var s=Object.keys(o)
if(s.length!==t.keyOrder.length)for(var l=0;l<s.length;l++)if(!i[s[l]]){var _=void 0
_="W"===s[l][0]?s[l][6].toLowerCase()+s[l].slice(7):"o"===s[l][1]?s[l][3].toLowerCase()+s[l].slice(4):s[l][2].toLowerCase()+s[l].slice(3)
if(_&&i[_]){var d=t.keyOrder.indexOf(_)
t.keyOrder.splice(d,0,s[l])}else t.keyOrder.unshift(s[l])}var c=false===n?Q:Y
var u=[]
for(var f=0;f<t.keyOrder.length;f++){var h=t.keyOrder[f]
var b=o[h]
if(Array.isArray(b))for(var p=0;p<b.length;p++)u.push(he(h,b[p],c))
else u.push(he(h,b,c))}return u.length?"".concat(e,"{").concat(u.join(""),"}"):""}
var me=null
var ge=function(e){if(null==me){me=document.querySelector("style[data-aphrodite]")
if(null==me){var t=document.head||document.getElementsByTagName("head")[0]
me=document.createElement("style")
me.type="text/css"
me.setAttribute("data-aphrodite","")
t.appendChild(me)}}var a=me.styleSheet||me.sheet
if(a.insertRule){var n=a.cssRules.length
e.forEach(function(e){try{a.insertRule(e,n)
n+=1}catch(e){}})}else me.innerText=(me.innerText||"")+e.join("")}
var ve={fontFamily:function e(t){if(Array.isArray(t)){var a={}
t.forEach(function(t){a[e(t)]=true})
return Object.keys(a).join(",")}if("object"===I(t)){ze(t.src,"@font-face",[t],false)
return'"'.concat(t.fontFamily,'"')}return t},animationName:function e(t,a){if(Array.isArray(t))return t.map(function(t){return e(t,a)}).join(",")
if("object"===I(t)){var n="keyframe_".concat($(t))
var r="@keyframes ".concat(n,"{")
t instanceof ae?t.forEach(function(e,t){r+=ue(t,[e],a,ve,false).join("")}):Object.keys(t).forEach(function(e){r+=ue(e,[t[e]],a,ve,false).join("")})
r+="}"
xe(n,[r])
return n}return t}}
var ke={}
var ye=[]
var we=false
var xe=function(e,t){var a
if(ke[e])return
if(!we){if("undefined"===typeof document)throw new Error("Cannot automatically buffer without a document")
we=true
o()(Ce)}(a=ye).push.apply(a,q(t))
ke[e]=true}
var ze=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[]
if(ke[e])return
var i=ue(t,a,r,ve,n)
xe(e,i)}
var je=function(){ye=[]
ke={}
we=false
me=null}
var Oe=function(){if(we)throw new Error("Cannot buffer while already buffering")
we=true}
var Te=function(){we=false
var e=ye
ye=[]
return e}
var Se=function(){return Te().join("")}
var Ce=function(){var e=Te()
e.length>0&&ge(e)}
var Ae=function(){return Object.keys(ke)}
var Ee=function(e){e.forEach(function(e){ke[e]=true})}
var Me=function e(t,a,n,r){for(var i=0;i<t.length;i+=1)if(t[i])if(Array.isArray(t[i]))r+=e(t[i],a,n,r)
else{a.push(t[i]._name)
n.push(t[i]._definition)
r+=t[i]._len}return r}
var Le=function(e,t,a){var n=[]
var r=[]
var i=Me(t,n,r,0)
if(0===n.length)return""
var o
o=1===n.length?"_".concat(n[0]):"_".concat(J(n.join())).concat((i%36).toString(36))
ze(o,".".concat(o),r,e,a)
return o}
var Pe=function(e,t){return"".concat(t,"_").concat(J(e))}
var Re=function(){return J}
var Be=Re()
var Ie={create:function(e){var t={}
var a=Object.keys(e)
for(var n=0;n<a.length;n+=1){var r=a[n]
var i=e[r]
var o=JSON.stringify(i)
t[r]={_len:o.length,_name:Be(o,r),_definition:i}}return t},rehydrate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
Ee(e)}}
var Fe="undefined"!==typeof window?null:{renderStatic:function(e){je()
Oe()
var t=e()
var a=Se()
return{html:t,css:{content:a,renderedClassNames:Ae()}}}}
var Ne=null
function qe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ce
return{StyleSheet:N({},Ie,{extend:function(a){var n=a.map(function(e){return e.selectorHandler}).filter(function(e){return e})
return qe(e,t.concat(n))}}),StyleSheetServer:Fe,StyleSheetTestUtils:Ne,minify:function(e){Be=e?J:Pe},css:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r]
return Le(e,n,t)},flushToStyleTag:Ce,injectAndGetClassName:Le,defaultSelectorHandlers:ce}}a.d(t,"StyleSheet",function(){return He})
a.d(t,"StyleSheetServer",function(){return Ke})
a.d(t,"StyleSheetTestUtils",function(){return Ge})
a.d(t,"css",function(){return Ze})
a.d(t,"minify",function(){return Ue})
a.d(t,"flushToStyleTag",function(){return Ve})
a.d(t,"injectAndGetClassName",function(){return Xe})
a.d(t,"defaultSelectorHandlers",function(){return Qe})
var We=true
var De=qe(We)
var He=De.StyleSheet,Ke=De.StyleSheetServer,Ge=De.StyleSheetTestUtils,Ze=De.css,Ue=De.minify,Ve=De.flushToStyleTag,Xe=De.injectAndGetClassName,Qe=De.defaultSelectorHandlers},"/CgH":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=u
var n=a("buI2")
var r=c(n)
var i=a("zCBb")
var o=c(i)
var s=a("169X")
var l=c(s)
var _=a("W2jg")
var d=c(_)
function c(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.prefixMap,a=e.plugins
return function e(n){for(var i in n){var s=n[i]
if((0,d.default)(s))n[i]=e(s)
else if(Array.isArray(s)){var _=[]
for(var c=0,u=s.length;c<u;++c){var f=(0,o.default)(a,i,s[c],n,t);(0,l.default)(_,f||s[c])}_.length>0&&(n[i]=_)}else{var h=(0,o.default)(a,i,s,n,t)
h&&(n[i]=h)
n=(0,r.default)(t,i,n)}}return n}}},"/FUP":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.ReactCSS=t.loop=t.handleActive=t.handleHover=t.hover=void 0
var n=a("W3HW")
var r=b(n)
var i=a("lreK")
var o=b(i)
var s=a("KfSR")
var l=b(s)
var _=a("VYtm")
var d=b(_)
var c=a("XQvf")
var u=b(c)
var f=a("B5Mt")
var h=b(f)
function b(e){return e&&e.__esModule?e:{default:e}}t.hover=d.default
t.handleHover=d.default
t.handleActive=u.default
t.loop=h.default
var p=t.ReactCSS=function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n]
var i=(0,r.default)(a)
var s=(0,o.default)(e,i)
return(0,l.default)(s)}
t.default=p},"06uY":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i=a("V6RX")
var o=function(e){var t={H1:true,H2:true,H3:true,H4:true,H5:true,H6:true}
return e&&true===t[e.tagName]}
var s=function(e){var t=Array.prototype.slice.call(e.querySelectorAll("H1,H2,H3,H4,H5,H6"))
if(t.length>0)return t.reverse()[0]
if(o(e))return e
return}
var l=function(e){var t=[]
if(!e||!e.parentElement||!e.parentElement.children)return t
var a=e.parentElement.children
for(var n=0;n<a.length;n++){if(a[n]===e)break
t.unshift(a[n])}return t}
var _=function(e){var t=l(e)
var a
for(var n=0;n<t.length;n++){a=s(t[n])
if(a)break}return a}
var d=function e(t){var a
if(!t||"BODY"===t.tagName)return
if(o(t))return t
a=_(t)
a||(a=e(t.parentElement))
return a}
var c=function(e){var t=_(e)
t||(t=d(e.parentElement))
return t}
var u=function(e){return c(e)}
var f=function(e){var t=+e.tagName.substring(1)
var a={}
for(var n=t-1;n<=6;n++)a["H".concat(n)]=true
return a}
var h={id:"headings-sequence",test:function(e){var t={H2:true,H3:true,H4:true,H5:true,H6:true}
if(true!==t[e.tagName])return true
var a=f(e)
var n=u(e)
if(n)return a[n.tagName]
return true},data:function(e){return{action:"nothing"}},form:function(){return[{label:(0,r.default)("Action to take:"),dataKey:"action",options:[["nothing",(0,r.default)("Leave as is")],["elem",(0,r.default)("Fix heading hierarchy")],["modify",(0,r.default)("Remove heading style")]]}]},update:function(e,t){if(!t||!t.action||"nothing"===t.action)return e
switch(t.action){case"elem":var a=u(e)
var n=a?+a.tagName.substring(1):0
return(0,i.changeTag)(e,"H".concat(n+1))
case"modify":return(0,i.changeTag)(e,"p")}},message:function(){return(0,r.default)("Heading levels should not be skipped.")},why:function(){return(0,r.default)("Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should use the proper structure.")},link:"https://www.w3.org/TR/WCAG20-TECHS/G141.html",linkText:function(){return(0,r.default)("Learn more about organizing page headings")}}
t.default=h},"0zOW":function(e,t,a){"use strict"
a.r(t)
a.d(t,"Headers",function(){return d})
a.d(t,"Request",function(){return k})
a.d(t,"Response",function(){return x})
a.d(t,"DOMException",function(){return j})
a.d(t,"fetch",function(){return O})
var n={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{new Blob
return true}catch(e){return false}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self}
function r(e){return e&&DataView.prototype.isPrototypeOf(e)}if(n.arrayBuffer){var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"]
var o=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1}}function s(e){"string"!==typeof e&&(e=String(e))
if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name")
return e.toLowerCase()}function l(e){"string"!==typeof e&&(e=String(e))
return e}function _(e){var t={next:function(){var t=e.shift()
return{done:void 0===t,value:t}}}
n.iterable&&(t[Symbol.iterator]=function(){return t})
return t}function d(e){this.map={}
e instanceof d?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}d.prototype.append=function(e,t){e=s(e)
t=l(t)
var a=this.map[e]
this.map[e]=a?a+", "+t:t}
d.prototype["delete"]=function(e){delete this.map[s(e)]}
d.prototype.get=function(e){e=s(e)
return this.has(e)?this.map[e]:null}
d.prototype.has=function(e){return this.map.hasOwnProperty(s(e))}
d.prototype.set=function(e,t){this.map[s(e)]=l(t)}
d.prototype.forEach=function(e,t){for(var a in this.map)this.map.hasOwnProperty(a)&&e.call(t,this.map[a],a,this)}
d.prototype.keys=function(){var e=[]
this.forEach(function(t,a){e.push(a)})
return _(e)}
d.prototype.values=function(){var e=[]
this.forEach(function(t){e.push(t)})
return _(e)}
d.prototype.entries=function(){var e=[]
this.forEach(function(t,a){e.push([a,t])})
return _(e)}
n.iterable&&(d.prototype[Symbol.iterator]=d.prototype.entries)
function c(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"))
e.bodyUsed=true}function u(e){return new Promise(function(t,a){e.onload=function(){t(e.result)}
e.onerror=function(){a(e.error)}})}function f(e){var t=new FileReader
var a=u(t)
t.readAsArrayBuffer(e)
return a}function h(e){var t=new FileReader
var a=u(t)
t.readAsText(e)
return a}function b(e){var t=new Uint8Array(e)
var a=new Array(t.length)
for(var n=0;n<t.length;n++)a[n]=String.fromCharCode(t[n])
return a.join("")}function p(e){if(e.slice)return e.slice(0)
var t=new Uint8Array(e.byteLength)
t.set(new Uint8Array(e))
return t.buffer}function m(){this.bodyUsed=false
this._initBody=function(e){this._bodyInit=e
if(e)if("string"===typeof e)this._bodyText=e
else if(n.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e
else if(n.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e
else if(n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString()
else if(n.arrayBuffer&&n.blob&&r(e)){this._bodyArrayBuffer=p(e.buffer)
this._bodyInit=new Blob([this._bodyArrayBuffer])}else n.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||o(e))?this._bodyArrayBuffer=p(e):this._bodyText=e=Object.prototype.toString.call(e)
else this._bodyText=""
this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))}
if(n.blob){this.blob=function(){var e=c(this)
if(e)return e
if(this._bodyBlob)return Promise.resolve(this._bodyBlob)
if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]))
if(this._bodyFormData)throw new Error("could not read FormData body as blob")
return Promise.resolve(new Blob([this._bodyText]))}
this.arrayBuffer=function(){return this._bodyArrayBuffer?c(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}}this.text=function(){var e=c(this)
if(e)return e
if(this._bodyBlob)return h(this._bodyBlob)
if(this._bodyArrayBuffer)return Promise.resolve(b(this._bodyArrayBuffer))
if(this._bodyFormData)throw new Error("could not read FormData body as text")
return Promise.resolve(this._bodyText)}
n.formData&&(this.formData=function(){return this.text().then(y)})
this.json=function(){return this.text().then(JSON.parse)}
return this}var g=["DELETE","GET","HEAD","OPTIONS","POST","PUT"]
function v(e){var t=e.toUpperCase()
return g.indexOf(t)>-1?t:e}function k(e,t){t=t||{}
var a=t.body
if(e instanceof k){if(e.bodyUsed)throw new TypeError("Already read")
this.url=e.url
this.credentials=e.credentials
t.headers||(this.headers=new d(e.headers))
this.method=e.method
this.mode=e.mode
this.signal=e.signal
if(!a&&null!=e._bodyInit){a=e._bodyInit
e.bodyUsed=true}}else this.url=String(e)
this.credentials=t.credentials||this.credentials||"same-origin"
!t.headers&&this.headers||(this.headers=new d(t.headers))
this.method=v(t.method||this.method||"GET")
this.mode=t.mode||this.mode||null
this.signal=t.signal||this.signal
this.referrer=null
if(("GET"===this.method||"HEAD"===this.method)&&a)throw new TypeError("Body not allowed for GET or HEAD requests")
this._initBody(a)}k.prototype.clone=function(){return new k(this,{body:this._bodyInit})}
function y(e){var t=new FormData
e.trim().split("&").forEach(function(e){if(e){var a=e.split("=")
var n=a.shift().replace(/\+/g," ")
var r=a.join("=").replace(/\+/g," ")
t.append(decodeURIComponent(n),decodeURIComponent(r))}})
return t}function w(e){var t=new d
var a=e.replace(/\r?\n[\t ]+/g," ")
a.split(/\r?\n/).forEach(function(e){var a=e.split(":")
var n=a.shift().trim()
if(n){var r=a.join(":").trim()
t.append(n,r)}})
return t}m.call(k.prototype)
function x(e,t){t||(t={})
this.type="default"
this.status=void 0===t.status?200:t.status
this.ok=this.status>=200&&this.status<300
this.statusText="statusText"in t?t.statusText:"OK"
this.headers=new d(t.headers)
this.url=t.url||""
this._initBody(e)}m.call(x.prototype)
x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})}
x.error=function(){var e=new x(null,{status:0,statusText:""})
e.type="error"
return e}
var z=[301,302,303,307,308]
x.redirect=function(e,t){if(-1===z.indexOf(t))throw new RangeError("Invalid status code")
return new x(null,{status:t,headers:{location:e}})}
var j=self.DOMException
try{new j}catch(e){j=function(e,t){this.message=e
this.name=t
var a=Error(e)
this.stack=a.stack}
j.prototype=Object.create(Error.prototype)
j.prototype.constructor=j}function O(e,t){return new Promise(function(a,r){var i=new k(e,t)
if(i.signal&&i.signal.aborted)return r(new j("Aborted","AbortError"))
var o=new XMLHttpRequest
function s(){o.abort()}o.onload=function(){var e={status:o.status,statusText:o.statusText,headers:w(o.getAllResponseHeaders()||"")}
e.url="responseURL"in o?o.responseURL:e.headers.get("X-Request-URL")
var t="response"in o?o.response:o.responseText
a(new x(t,e))}
o.onerror=function(){r(new TypeError("Network request failed"))}
o.ontimeout=function(){r(new TypeError("Network request failed"))}
o.onabort=function(){r(new j("Aborted","AbortError"))}
o.open(i.method,i.url,true)
"include"===i.credentials?o.withCredentials=true:"omit"===i.credentials&&(o.withCredentials=false)
"responseType"in o&&n.blob&&(o.responseType="blob")
i.headers.forEach(function(e,t){o.setRequestHeader(t,e)})
if(i.signal){i.signal.addEventListener("abort",s)
o.onreadystatechange=function(){4===o.readyState&&i.signal.removeEventListener("abort",s)}}o.send("undefined"===typeof i._bodyInit?null:i._bodyInit)})}O.polyfill=true
if(!self.fetch){self.fetch=O
self.Headers=d
self.Request=k
self.Response=x}},"169X":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
function n(e,t){-1===e.indexOf(t)&&e.push(t)}function r(e,t){if(Array.isArray(t))for(var a=0,r=t.length;a<r;++a)n(e,t[a])
else n(e,t)}},"3WF5":function(e,t,a){var n=a("eUgh"),r=a("ut/Y"),i=a("l9OW"),o=a("Z0cm")
function s(e,t){var a=o(e)?n:i
return a(e,r(t,3))}e.exports=s},"3vXJ":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
var n={flex:["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex","flex"],"inline-flex":["-webkit-inline-box","-moz-inline-box","-ms-inline-flexbox","-webkit-inline-flex","inline-flex"]}
function r(e,t){if("display"===e&&n.hasOwnProperty(t))return n[t]}},"4qC0":function(e,t,a){var n=a("NykK"),r=a("Z0cm"),i=a("ExA7")
var o="[object String]"
function s(e){return"string"==typeof e||!r(e)&&i(e)&&n(e)==o}e.exports=s},"4x6V":function(e,t,a){"use strict"
var n=a("284h")
var r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=l
var i=r(a("LaeI"))
var o=n(a("qT11"))
var s=4
function l(e){if(!e||!e.tagName)return null
switch(e.tagName){case"IMG":return(0,i.default)("Image with filename {file}",{file:o.filename(e.src)})
case"TABLE":return(0,i.default)("Table starting with {start}",{start:o.firstWords(e.textContent,s)})
case"A":return(0,i.default)("Link with text starting with {start}",{start:o.firstWords(e.textContent,s)})
case"P":return(0,i.default)("Paragraph starting with {start}",{start:o.firstWords(e.textContent,s)})
case"TH":return(0,i.default)("Table header starting with {start}",{start:o.firstWords(e.textContent,s)})
case"H1":case"H2":case"H3":case"H4":case"H5":return(0,i.default)("Heading starting with {start}",{start:o.firstWords(e.textContent,s)})
default:return(0,i.default)("Element starting with {start}",{start:o.firstWords(e.textContent,s)})}}},"5WPf":function(e,t,a){"use strict"
var n=a("284h")
var r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=r(a("lSNA"))
var o=r(a("lwsE"))
var s=r(a("W8MJ"))
var l=r(a("a1gu"))
var _=r(a("Nsbk"))
var d=r(a("7W2i"))
var c=r(a("q1tI"))
var u=r(a("ZREj"))
var f=a("P92B")
var h=r(a("qnOc"))
var b=r(a("SJAx"))
var p=r(a("Lq5O"))
var m=r(a("XbQQ"))
var g=r(a("K7/I"))
var v=r(a("VMdx"))
var k=r(a("gi1z"))
var y=r(a("AdBD"))
var w=r(a("a6bM"))
var x=r(a("gdJC"))
var z=r(a("CTAn"))
var j=r(a("Wt5s"))
var O=r(a("1Lwk"))
var T=r(a("fPtD"))
var S=r(a("slAi"))
var C=n(a("Ui1M"))
var A=r(a("YTJb"))
var E=r(a("5gq/"))
var M=r(a("qB+r"))
var L=r(a("LmcI"))
var P=r(a("NwRt"))
var R=r(a("4x6V"))
var B=n(a("V6RX"))
var I=r(a("w6v+F"))
var F=r(a("LaeI"))
var N=a("uV+b")
var q=function(){}
var W=function(e){(0,d.default)(t,e)
function t(){var e
var a;(0,o.default)(this,t)
for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i]
a=(0,l.default)(this,(e=(0,_.default)(t)).call.apply(e,[this].concat(r)))
a.state={open:false,checking:false,errors:[],formState:{},formStateValid:false,errorIndex:0,config:{},showWhyPopover:false}
a.updateFormState=function(e){var t=e.target
var n=Object.assign({},a.state.formState)
"checkbox"===t.type?n[t.name]=t.checked:n[t.name]=t.value
a.setState({formState:n,formStateValid:a.formStateValid(n)})}
return a}(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this
this.props.editor.on("Remove",function(t){e.setState({open:false})})}},{key:"setConfig",value:function(e){this.setState({config:e})}},{key:"check",value:function(e){var t=this
"function"!==typeof e&&(e=q)
this.setState({open:true,checking:true,errors:[],errorIndex:0},function(){"function"===typeof t.state.config.beforeCheck?t.state.config.beforeCheck(t.props.editor,function(){t._check(function(){"function"===typeof t.state.config.afterCheck?t.state.config.afterCheck(t.props.editor,e):e()})}):"function"===typeof t.state.config.afterCheck?t._check(function(){t.state.config.afterCheck(t.props.editor,e)}):t._check(e)})}},{key:"_check",value:function(e){var t=this
var a=this.props.getBody()
var n=[]
a&&B.walk(a,function(e){var a=I.default.concat(t.props.additionalRules)
var r=true
var i=false
var o=void 0
try{var s=function(){var a=l.value
if(e.hasAttribute("data-ignore-a11y-check"))return"continue"
Promise.resolve(a.test(e,t.state.config)).then(function(t){t||n.push({node:e,rule:a})})}
for(var l,_=a[Symbol.iterator]();!(r=(l=_.next()).done);r=true){var d=s()
if("continue"===d)continue}}catch(e){i=true
o=e}finally{try{r||null==_.return||_.return()}finally{if(i)throw o}}},function(){t.setState({errorIndex:0,errors:n,checking:false},function(){t.selectCurrent()
e()})})}},{key:"firstError",value:function(){this.state.errors.length>0&&this.setErrorIndex(0)}},{key:"nextError",value:function(){var e=(this.state.errorIndex+1)%this.state.errors.length
this.setErrorIndex(e)}},{key:"prevError",value:function(){var e=this.state.errors.length
var t=(e+this.state.errorIndex-1)%e
this.setErrorIndex(t)}},{key:"setErrorIndex",value:function(e){var t=this
this.onLeaveError()
e>=this.state.errors.length&&(e=0)
this.setState({errorIndex:e},function(){return t.selectCurrent()})}},{key:"selectCurrent",value:function(){(0,N.clearIndicators)()
var e=this.errorNode()
if(e){this.getFormState()
B.select(this.props.editor,e)}else this.firstError()}},{key:"error",value:function(){return this.state.errors[this.state.errorIndex]}},{key:"errorNode",value:function(){var e=this.error()
return e&&e.node}},{key:"errorRootNode",value:function(){var e=this.errorRule()
var t=e&&e.rootNode&&e.rootNode(this.errorNode())
return t||this.errorNode()}},{key:"updateErrorNode",value:function(e){var t=this.error()
t&&(t.node=e)}},{key:"errorRule",value:function(){var e=this.error()
return e&&e.rule}},{key:"errorMessage",value:function(){var e=this.errorRule()
return e&&e.message()}},{key:"getFormState",value:function(){var e=this.errorRule()
var t=this.errorNode()
e&&t&&this.setState({formState:e.data(t),formStateValid:false})}},{key:"formStateValid",value:function(e){e=e||this.state.formState
var t=this.tempNode(true)
var a=this.errorRule()
if(!t||!a)return false
t=a.update(t,e)
this._tempNode===this._tempTestNode&&(this._tempNode=t)
this._tempTestNode=t
return a.test(t)}},{key:"fixIssue",value:function(){var e=this
var t=this.errorRule()
var a=this.errorNode()
if(t&&a){this.removeTempNode()
t.update(a,this.state.formState)
this.updateErrorNode(a)
this._closeButtonRef&&this._closeButtonRef.focus()
var n=this.state.errorIndex
this.check(function(){return e.setErrorIndex(n)})}}},{key:"newTempRootNode",value:function(e){var t=e.cloneNode(true)
var a=B.pathForNode(e,this.errorNode())
this._tempTestNode=B.nodeByPath(t,a)
return t}},{key:"tempNode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
if(!this._tempNode||e){var t=this.errorRootNode()
if(t){var a=this.newTempRootNode(t)
if(e&&this._tempNode){var n=this._tempNode.parentNode
n.insertBefore(a,this._tempNode)
n.removeChild(this._tempNode)}else{var r=t.parentNode
r.insertBefore(a,t)
r.removeChild(t)}this._tempNode=a}}return this._tempTestNode}},{key:"removeTempNode",value:function(){var e=this.errorRootNode()
if(this._tempNode&&e){var t=this._tempNode.parentNode
t.insertBefore(e,this._tempNode)
t.removeChild(this._tempNode)
this._tempNode=null
this._tempTestNode=null}}},{key:"onLeaveError",value:function(){this.removeTempNode()}},{key:"handleClose",value:function(){this.onLeaveError();(0,N.clearIndicators)()
this.setState({open:false})}},{key:"render",value:function(){var e=this
var t=this.errorRule()
var a=(0,F.default)("Issue { num }/{ total }",{num:this.state.errorIndex+1,total:this.state.errors.length})
return c.default.createElement(f.LiveAnnouncer,null,c.default.createElement(p.default,{"data-mce-component":true,label:(0,F.default)("Accessibility Checker"),open:this.state.open,onDismiss:function(){return e.handleClose()},placement:"end",contentRef:function(t){return e.trayElement=t}},c.default.createElement(b.default,{placement:"start",offset:"x-small",onClick:function(){return e.handleClose()},buttonRef:function(t){return e._closeButtonRef=t}},(0,F.default)("Close Accessibility Checker")),c.default.createElement(m.default,{as:"div",padding:"x-large large"},c.default.createElement(g.default,{level:"h3",as:"h2",margin:"medium 0"}," "+(0,F.default)("Accessibility Checker")),this.state.errors.length>0&&c.default.createElement(m.default,{as:"div"},c.default.createElement(f.LiveMessage,{"aria-live":"polite",message:"\n                  ".concat(a,"\n                  ").concat((0,R.default)(this.errorNode()),"\n                  ").concat(this.errorMessage(),"\n                ")}),c.default.createElement(m.default,{as:"div",margin:"large 0 medium 0"},c.default.createElement(j.default,{vAlign:"middle",hAlign:"space-between",colSpacing:"none"},c.default.createElement(O.default,null,c.default.createElement(T.default,null,c.default.createElement(A.default,{weight:"bold"},a)),c.default.createElement(T.default,{width:"auto"},c.default.createElement(C.default,{on:"click",show:this.state.showWhyPopover,shouldContainFocus:true,shouldReturnFocus:true},c.default.createElement(C.PopoverTrigger,null,c.default.createElement(v.default,{variant:"icon",icon:E.default,onDismiss:function(){e.setState({showWhyPopover:false})},onClick:function(){return e.setState({showWhyPopover:true})}},c.default.createElement(h.default,null,(0,F.default)("Why")))),c.default.createElement(C.PopoverContent,null,c.default.createElement(m.default,{padding:"medium",display:"block",width:"16rem"},c.default.createElement(b.default,{placement:"end",offset:"x-small",variant:"icon",onClick:function(){return e.setState({showWhyPopover:false})}},(0,F.default)("Close")),c.default.createElement(A.default,null,c.default.createElement("p",null,t.why()),c.default.createElement("p",null,t.link&&t.link.length&&c.default.createElement(M.default,{theme:(0,i.default)({},k.default.theme,{textDecoration:"underline"})},c.default.createElement(k.default,{href:t.link,target:"_blank"},t.linkText()))))))))))),c.default.createElement("form",{onSubmit:(0,u.default)(function(){return e.fixIssue()})},c.default.createElement(A.default,{as:"div"},this.errorMessage()),t.form().map(function(t){return c.default.createElement(m.default,{as:"div",key:t.dataKey,margin:"medium 0 0"},e.renderField(t))}),c.default.createElement(m.default,{as:"div",margin:"medium 0"},c.default.createElement(j.default,{vAlign:"middle",hAlign:"space-between",colSpacing:"none"},c.default.createElement(O.default,null,c.default.createElement(T.default,null,c.default.createElement(v.default,{onClick:function(){return e.prevError()},margin:"0 small 0 0","aria-label":"Previous"},(0,F.default)("Prev")),c.default.createElement(v.default,{onClick:function(){return e.nextError()}},(0,F.default)("Next"))),c.default.createElement(T.default,{width:"auto"},c.default.createElement(v.default,{type:"submit",variant:"primary",disabled:!this.state.formStateValid},(0,F.default)("Apply")))))))),0===this.state.errors.length&&!this.state.checking&&c.default.createElement(m.default,null,c.default.createElement(A.default,null,c.default.createElement("p",null,(0,F.default)("No accessibility issues were detected."))),c.default.createElement(P.default,null)),this.state.checking&&c.default.createElement("div",null,c.default.createElement(f.LiveMessage,{message:(0,F.default)("Checking for accessibility issues"),"aria-live":"polite"}),c.default.createElement(S.default,{title:(0,F.default)("Checking for accessibility issues"),margin:"medium auto"})))))}},{key:"renderField",value:function(e){var t=!!e.disabledIf&&e.disabledIf(this.state.formState)
switch(true){case!!e.options:return c.default.createElement(z.default,{label:e.label,name:e.dataKey,value:this.state.formState[e.dataKey],onChange:this.updateFormState,disabled:t},e.options.map(function(e){return c.default.createElement("option",{key:e[0],value:e[0]},e[1])}))
case e.checkbox:return c.default.createElement(y.default,{label:e.label,name:e.dataKey,checked:this.state.formState[e.dataKey],onChange:this.updateFormState,disabled:t})
case e.color:return c.default.createElement(L.default,{label:e.label,name:e.dataKey,value:this.state.formState[e.dataKey],onChange:this.updateFormState})
case e.textarea:return c.default.createElement(x.default,{label:e.label,name:e.dataKey,value:this.state.formState[e.dataKey],onChange:this.updateFormState,disabled:t})
default:return c.default.createElement(w.default,{label:e.label,name:e.dataKey,value:this.state.formState[e.dataKey],onChange:this.updateFormState,disabled:t})}}}])
t.displayName="Checker"
return t}(c.default.Component)
t.default=W
W.defaultProps={additionalRules:[]}},"5gq/":function(e,t,a){"use strict"
var n=a("284h")
var r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=r(a("MVZn"))
var o=r(a("lwsE"))
var s=r(a("W8MJ"))
var l=r(a("a1gu"))
var _=r(a("Nsbk"))
var d=r(a("7W2i"))
var c=n(a("q1tI"))
var u=r(a("q3EI"))
var f=c.default.createElement("path",{d:"M960 1807.059c-467.125 0-847.059-379.934-847.059-847.059 0-467.125 379.934-847.059 847.059-847.059 467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059M960 0C430.645 0 0 430.645 0 960s430.645 960 960 960 960-430.645 960-960S1489.355 0 960 0m89.336 350.355c114.862 29.703 208.264 123.106 237.968 237.967 23.378 90.466 10.729 183.303-35.464 261.459-45.515 77.026-121.186 133.948-207.586 156.084-13.779 3.502-27.783 14.796-27.783 31.85v91.708H903.529v-91.708c0-66.07 46.306-124.123 112.716-141.29 57.6-14.682 107.971-52.63 138.353-104.018 30.833-52.292 39.19-114.749 23.378-175.85-19.651-75.67-81.204-137.223-156.875-156.875-70.927-18.184-143.548-3.953-199.341 39.303-55.68 43.144-87.642 108.311-87.642 178.673H621.176c0-105.6 47.888-203.294 131.464-268.01 83.69-64.714 191.661-86.4 296.696-59.293zm-89.28 1004.94v-.114l56.471.113h-56.47zm0-112.942c-62.343 0-112.94 50.71-112.94 112.941 0 62.23 50.597 112.941 112.94 112.941 62.231 0 112.942-50.71 112.942-112.94 0-62.231-50.71-112.942-112.942-112.942z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){(0,d.default)(t,e)
function t(){(0,o.default)(this,t)
return(0,l.default)(this,(0,_.default)(t).apply(this,arguments))}(0,s.default)(t,[{key:"render",value:function(){return c.default.createElement(u.default,Object.assign({},this.props,{name:"IconQuestion",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconQuestion"
return t}(c.Component)
t.default=h
h.glyphName="question"
h.variant="Line"
h.propTypes=(0,i.default)({},u.default.propTypes)},"6DQo":function(e,t,a){"use strict"
var n=function(){}
false
e.exports=n},"7oM+":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e,t){if("position"===e&&"sticky"===t)return["-webkit-sticky","sticky"]}},"8E7O":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i=n(a("YDsC"))
var o=a("V6RX")
var s=n(a("IF+P"))
var l={id:"small-text-contrast",test:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var a=true==t.disableContrastCheck
var n=!(0,o.hasTextNode)(e)
if(a||n||(0,o.onlyContainsLink)(e)||i.default.isLargeText(e))return true
return(0,i.default)(e)},data:function(e){var t=window.getComputedStyle(e)
return{color:t.color}},form:function(){return[{label:(0,r.default)("Change text color"),dataKey:"color",color:true}]},update:function(e,t){e.style.color=t.color
var a=(0,o.splitStyleAttribute)(e.getAttribute("data-mce-style")||"")
t&&t.color&&t.color.indexOf("#")<0?a.color="#".concat((0,s.default)(t.color)):a.color=t.color
e.setAttribute("data-mce-style",(0,o.createStyleString)(a))
return e},message:function(){return(0,r.default)("Text smaller than 18pt (or bold 14pt) should display a minimum contrast ratio of 4.5:1.")},why:function(){return(0,r.default)("Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision.")},link:"https://www.w3.org/TR/WCAG20-TECHS/G17.html",linkText:function(){return(0,r.default)("Learn more about color contrast")}}
t.default=l},"8PcY":function(e,t,a){"use strict"
t.__esModule=true
t.getChildMapping=r
t.mergeChildMappings=i
var n=a("q1tI")
function r(e){if(!e)return e
var t={}
n.Children.map(e,function(e){return e}).forEach(function(e){t[e.key]=e})
return t}function i(e,t){e=e||{}
t=t||{}
function a(a){if(t.hasOwnProperty(a))return t[a]
return e[a]}var n={}
var r=[]
for(var i in e)if(t.hasOwnProperty(i)){if(r.length){n[i]=r
r=[]}}else r.push(i)
var o=void 0
var s={}
for(var l in t){if(n.hasOwnProperty(l))for(o=0;o<n[l].length;o++){var _=n[l][o]
s[n[l][o]]=a(_)}s[l]=a(l)}for(o=0;o<r.length;o++)s[r[o]]=a(r[o])
return s}},"9kyW":function(e,t,a){"use strict"
function n(e){var t=5381,a=e.length
while(a)t=33*t^e.charCodeAt(--a)
return t>>>0}e.exports=n},A5Jy:function(e,t,a){"use strict"
a.r(t)
var n=a("wawZ")
a.d(t,"default",function(){return n["a"]})},Ag8Z:function(e,t,a){var n=a("JC6p"),r=a("EwQA")
function i(e,t){return e&&n(e,r(t))}e.exports=i},AnK5:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.EditableInput=void 0
var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||false
n.configurable=true
"value"in n&&(n.writable=true)
Object.defineProperty(e,n.key,n)}}return function(t,a,n){a&&e(t.prototype,a)
n&&e(t,n)
return t}}()
var r=a("q1tI")
var i=l(r)
var o=a("/FUP")
var s=l(o)
function l(e){return e&&e.__esModule?e:{default:e}}function _(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:true,configurable:true,writable:true}):e[t]=a
return e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=1
var h=38
var b=40
var p=[h,b]
var m=function(e){return p.indexOf(e)>-1}
var g=function(e){return e+"%"}
var v=function(e){return Number(String(e).replace(/%/g,""))}
var k=function(e){return String(e).indexOf("%")>-1}
var y=t.EditableInput=function(e){u(t,e)
function t(e){d(this,t)
var a=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))
a.handleBlur=function(){a.state.blurValue&&a.setState({value:a.state.blurValue,blurValue:null})}
a.handleChange=function(e){a.setUpdatedValue(e.target.value,e)}
a.handleKeyDown=function(e){var t=v(e.target.value)
if(!isNaN(t)&&m(e.keyCode)){var n=a.getArrowOffset()
var r=e.keyCode===h?t+n:t-n
a.setUpdatedValue(r,e)}}
a.handleDrag=function(e){if(a.props.dragLabel){var t=Math.round(a.props.value+e.movementX)
t>=0&&t<=a.props.dragMax&&a.props.onChange&&a.props.onChange(a.getValueObjectWithLabel(t),e)}}
a.handleMouseDown=function(e){if(a.props.dragLabel){e.preventDefault()
a.handleDrag(e)
window.addEventListener("mousemove",a.handleDrag)
window.addEventListener("mouseup",a.handleMouseUp)}}
a.handleMouseUp=function(){a.unbindEventListeners()}
a.unbindEventListeners=function(){window.removeEventListener("mousemove",a.handleDrag)
window.removeEventListener("mouseup",a.handleMouseUp)}
a.state={value:String(e.value).toUpperCase(),blurValue:String(e.value).toUpperCase()}
return a}n(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.input
e.value!==this.state.value&&(t===document.activeElement?this.setState({blurValue:String(e.value).toUpperCase()}):this.setState({value:String(e.value).toUpperCase(),blurValue:!this.state.blurValue&&String(e.value).toUpperCase()}))}},{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"getValueObjectWithLabel",value:function(e){return _({},this.props.label,e)}},{key:"getArrowOffset",value:function(){return this.props.arrowOffset||f}},{key:"setUpdatedValue",value:function(e,t){var a=null!==this.props.label?this.getValueObjectWithLabel(e):e
this.props.onChange&&this.props.onChange(a,t)
var n=k(t.target.value)
this.setState({value:n?g(e):e})}},{key:"render",value:function(){var e=this
var t=(0,s.default)({default:{wrap:{position:"relative"}},"user-override":{wrap:this.props.style&&this.props.style.wrap?this.props.style.wrap:{},input:this.props.style&&this.props.style.input?this.props.style.input:{},label:this.props.style&&this.props.style.label?this.props.style.label:{}},"dragLabel-true":{label:{cursor:"ew-resize"}}},{"user-override":true},this.props)
return i.default.createElement("div",{style:t.wrap},i.default.createElement("input",{style:t.input,ref:function(t){return e.input=t},value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,onBlur:this.handleBlur,placeholder:this.props.placeholder,spellCheck:"false"}),this.props.label&&!this.props.hideLabel?i.default.createElement("span",{style:t.label,onMouseDown:this.handleMouseDown},this.props.label):null)}}])
return t}(r.PureComponent||r.Component)
t.default=y},B5Mt:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var n=function(e,t){var a={}
var n=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
a[e]=t}
0===e&&n("first-child")
e===t-1&&n("last-child");(0===e||e%2===0)&&n("even")
1===Math.abs(e%2)&&n("odd")
n("nth-child",e)
return a}
t.default=n},BKMn:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.PhotoshopPointerCircle=void 0
var n=a("q1tI")
var r=s(n)
var i=a("/FUP")
var o=s(i)
function s(e){return e&&e.__esModule?e:{default:e}}var l=t.PhotoshopPointerCircle=function(e){var t=e.hsl
var a=(0,o.default)({default:{picker:{width:"12px",height:"12px",borderRadius:"6px",boxShadow:"inset 0 0 0 1px #fff",transform:"translate(-6px, -6px)"}},"black-outline":{picker:{boxShadow:"inset 0 0 0 1px #000"}}},{"black-outline":t.l>.5})
return r.default.createElement("div",{style:a.picker})}
t.default=l},Ba7A:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Swatch=void 0
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
var r=a("q1tI")
var i=c(r)
var o=a("/FUP")
var s=c(o)
var l=a("japM")
var _=a("Nq3d")
var d=c(_)
function c(e){return e&&e.__esModule?e:{default:e}}var u=13
var f=t.Swatch=function(e){var t=e.color,a=e.style,r=e.onClick,o=void 0===r?function(){}:r,l=e.onHover,_=e.title,c=void 0===_?t:_,f=e.children,h=e.focus,b=e.focusStyle,p=void 0===b?{}:b
var m="transparent"===t
var g=(0,s.default)({default:{swatch:n({background:t,height:"100%",width:"100%",cursor:"pointer",position:"relative",outline:"none"},a,h?p:{})}})
var v=function(e){return o(t,e)}
var k=function(e){return e.keyCode===u&&o(t,e)}
var y=function(e){return l(t,e)}
var w={}
l&&(w.onMouseOver=y)
return i.default.createElement("div",n({style:g.swatch,onClick:v,title:c,tabIndex:0,onKeyDown:k},w),f,m&&i.default.createElement(d.default,{borderRadius:g.swatch.borderRadius,boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.1)"}))}
t.default=(0,l.handleFocus)(f)},BkRI:function(e,t,a){var n=a("OBhP")
var r=1,i=4
function o(e){return n(e,r|i)}e.exports=o},Bp9Y:function(e,t,a){"use strict"
t.__esModule=true
t.default=void 0
var n=!!("undefined"!==typeof window&&window.document&&window.document.createElement)
t.default=n
e.exports=t["default"]},DzJC:function(e,t,a){var n=a("sEfC"),r=a("GoyQ")
var i="Expected a function"
function o(e,t,a){var o=true,s=true
if("function"!=typeof e)throw new TypeError(i)
if(r(a)){o="leading"in a?!!a.leading:o
s="trailing"in a?!!a.trailing:s}return n(e,t,{leading:o,maxWait:t,trailing:s})}e.exports=o},E7N5:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i="[A-Z]+|[a-z]+|[0-9]+"
var o=["*","-"].map(function(e){return"\\"+e}).join("|")
var s=[".",")"].map(function(e){return"\\"+e}).join("|")
var l=new RegExp("^\\s*(?:(?:[".concat(o,"])|(?:(").concat(i,")[").concat(s,"]))\\s+"))
var _=function(e){return"P"===e.tagName&&l.test(e.textContent)}
var d=function e(t){if(t.nodeType===Node.TEXT_NODE){t.textContent=t.textContent.replace(l,"")
return true}var a=true
var n=false
var r=void 0
try{for(var i,o=t.childNodes[Symbol.iterator]();!(a=(i=o.next()).done);a=true){var s=i.value
var _=e(s)
if(_)return true}}catch(e){n=true
r=e}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return false}
var c=function(e,t){while(e.firstChild)t.appendChild(e.firstChild)}
var u=function(e){var t=[]
var a=e.firstChild
while(a){var n=t[t.length-1]
if("BR"===a.tagName){t.push(document.createElement("p"))
a=a.nextSibling
continue}n&&n.appendChild(a)
a=a.nextSibling}var r=e.nextSibling
t.forEach(function(t){e.parentNode.insertBefore(t,r)})}
var f={id:"list-structure",test:function(e){var t=_(e)
var a=!e.previousElementSibling||!_(e.previousElementSibling)
return!(t&&a)},data:function(e){var t=e.textContent.match(l)
return{orderedStart:t[1]?t[1]:null,formatAsList:false}},form:function(){return[{label:(0,r.default)("Format as a list"),checkbox:true,dataKey:"formatAsList"}]},update:function(e,t){var a=e.parentNode
if(t.formatAsList){var n=Boolean(t.orderedStart)
var r=document.createElement(n?"ol":"ul")
if(n){r.setAttribute("type",t.orderedStart)
r.setAttribute("start",t.orderedStart)}var i=e
while(i){if(!_(i))break
var o=Boolean(i.textContent.match(l)[1])
if(n!==o)break
u(i)
var s=document.createElement("li")
r.appendChild(s)
c(i,s)
var f=i.nextElementSibling
i!==e&&i.parentNode.removeChild(i)
i=f
d(s)}a.replaceChild(r,e)
return r}return e},rootNode:function(e){return e.parentNode},message:function(){return(0,r.default)("Lists should be formatted as lists.")},why:function(){return(0,r.default)("When markup is used that visually formats items as a list but does not indicate the list relationship, users may have difficulty in navigating the information.")},link:"https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/H48",linkText:function(){return(0,r.default)("Learn more about using lists")}}
t.default=f},EefQ:function(e,t,a){"use strict"
var n=a("284h")
var r=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=r(a("MVZn"))
var o=r(a("lwsE"))
var s=r(a("W8MJ"))
var l=r(a("a1gu"))
var _=r(a("Nsbk"))
var d=r(a("7W2i"))
var c=n(a("q1tI"))
var u=r(a("q3EI"))
var f=c.default.createElement("path",{d:"M1743.858 267.012L710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z",fillRule:"evenodd",stroke:"none",strokeWidth:"1"})
var h=function(e){(0,d.default)(t,e)
function t(){(0,o.default)(this,t)
return(0,l.default)(this,(0,_.default)(t).apply(this,arguments))}(0,s.default)(t,[{key:"render",value:function(){return c.default.createElement(u.default,Object.assign({},this.props,{name:"IconCheckMark",viewBox:"0 0 1920 1920"}),f)}}])
t.displayName="IconCheckMark"
return t}(c.Component)
t.default=h
h.glyphName="check-mark"
h.variant="Solid"
h.propTypes=(0,i.default)({},u.default.propTypes)},EwQA:function(e,t,a){var n=a("zZ0H")
function r(e){return"function"==typeof e?e:n}e.exports=r},FYFp:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("q1tI"))
var i=a("TM95")
var o=n(a("NZlj"))
var s=n(a("BKMn"))
function l(e){return r.default.createElement("div",null,r.default.createElement("div",{style:{position:"relative",height:150,marginTop:10}},r.default.createElement(i.Saturation,Object.assign({},e,{pointer:s.default}))),r.default.createElement("div",{style:{position:"relative",height:10,marginTop:10}},r.default.createElement(i.Hue,Object.assign({},e,{pointer:o.default}))),r.default.createElement("div",{style:{position:"relative",height:10,marginTop:10}},r.default.createElement(i.Alpha,Object.assign({},e,{pointer:o.default}))))}var _=(0,i.ColorWrap)(l)
t.default=_},FeGr:function(e,t,a){"use strict";(function(t){e.exports=a
function a(e){if(!n.length){r()
true}n[n.length]=e}var n=[]
var r
var i=0
var o=1024
function s(){while(i<n.length){var e=i
i+=1
n[e].call()
if(i>o){for(var t=0,a=n.length-i;t<a;t++)n[t]=n[t+i]
n.length-=i
i=0}}n.length=0
i=0
false}var l="undefined"!==typeof t?t:self
var _=l.MutationObserver||l.WebKitMutationObserver
r="function"===typeof _?d(s):c(s)
a.requestFlush=r
function d(e){var t=1
var a=new _(e)
var n=document.createTextNode("")
a.observe(n,{characterData:true})
return function(){t=-t
n.data=t}}function c(e){return function(){var t=setTimeout(n,0)
var a=setInterval(n,50)
function n(){clearTimeout(t)
clearInterval(a)
e()}}}a.makeRequestCallFromTimer=c}).call(this,a("yLpj"))},FkO2:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var n=t.type="@@redux-batch-middleware/BATCH"
t.batch=function(e){var t=e.dispatch
return function(e){return function(a){Array.isArray(a)?t({type:n,payload:a}):e(a)}}}
t.batching=function(e){return function t(a,r){return r.type===n?r.payload.reduce(t,a):e(a,r)}}},GEYT:function(e,t,a){var n=a("xEkU"),r="complete",i="canceled",o="skipped"
function s(e,t,a){if(f(e))e.scrollTo(t,a)
else{e.scrollLeft=t
e.scrollTop=a}}function l(e,t,a){var n,r,i,o,s,l=e.getBoundingClientRect(),_=a&&null!=a.left?a.left:.5,d=a&&null!=a.top?a.top:.5,c=_,u=d
if(f(t)){r=l.left+window.scrollX-window.innerWidth*c+Math.min(l.width,window.innerWidth)*c
i=l.top+window.scrollY-window.innerHeight*u+Math.min(l.height,window.innerHeight)*u
r=Math.max(Math.min(r,document.body.scrollWidth-window.innerWidth*c),0)
i=Math.max(Math.min(i,document.body.scrollHeight-window.innerHeight*u),0)
o=r-window.scrollX
s=i-window.scrollY}else{n=t.getBoundingClientRect()
var h=l.top-(n.top-t.scrollTop)
var b=l.left-(n.left-t.scrollLeft)
r=b+l.width*c-t.clientWidth*c
i=h+l.height*u-t.clientHeight*u
r=Math.max(Math.min(r,t.scrollWidth-t.clientWidth),0)
i=Math.max(Math.min(i,t.scrollHeight-t.clientHeight),0)
o=r-t.scrollLeft
s=i-t.scrollTop}return{x:r,y:i,differenceX:o,differenceY:s}}function _(e){n(function(){var t=e._scrollSettings
if(!t)return
var a=l(t.target,e,t.align),n=Date.now()-t.startTime,i=Math.min(1/t.time*n,1)
if(n>t.time+20||Math.abs(a.differenceY)<=1&&Math.abs(a.differenceX)<=1){s(e,a.x,a.y)
e._scrollSettings=null
return t.end(r)}var o=1-t.ease(i)
s(e,a.x-a.differenceX*o,a.y-a.differenceY*o)
_(e)})}function d(e){return f(e)?{top:0,left:0,right:window.innerWidth,bottom:window.innerHeight}:e.getBoundingClientRect?e.getBoundingClientRect():null}function c(e,t){var a=d(e)
var n=d(t)
return a&&n&&a.bottom<=n.bottom&&a.right<=n.right&&a.top>=n.top&&a.left>=n.left}function u(e,t,a,n){var r,s=!t._scrollSettings,l=t._scrollSettings,d=Date.now()
l&&l.end(i)
function u(e,a){t._scrollSettings=null
n(e)
t.removeEventListener("touchstart",r)}t._scrollSettings={startTime:l?l.startTime:Date.now(),target:e,time:a.time+(l?d-l.startTime:0),ease:a.ease,align:a.align,end:u}
r=u.bind(null,i)
t.addEventListener("touchstart",r)
if(s&&!c(e,t)){_(t)
return true}u(o)
return false}function f(e){return e===window}function h(e,t,a){if(!e)return
if("function"===typeof t){a=t
t=null}t||(t={})
t.time=isNaN(t.time)?1e3:t.time
t.ease=t.ease||function(e){return 1-Math.pow(1-e,e/2)}
var n=e.parentElement,r={traversed:0,validated:0,scrolled:0}
function i(e){r.validated-1||a&&a(e)}while(n){if((!t.validTarget||t.validTarget(n,r))&&(f(n)||(n.scrollHeight!==n.clientHeight||n.scrollWidth!==n.clientWidth)&&"hidden"!==getComputedStyle(n).overflow)){r.validated++
r.scrolled+=u(e,n,t,i)?1:0}r.traversed++
n=n.parentElement
if(!n)return
"BODY"===n.tagName&&(n=window)}}e.exports.scrollIntoView=h},HiWe:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}},HlQe:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Hue=void 0
var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||false
n.configurable=true
"value"in n&&(n.writable=true)
Object.defineProperty(e,n.key,n)}}return function(t,a,n){a&&e(t.prototype,a)
n&&e(t,n)
return t}}()
var r=a("q1tI")
var i=c(r)
var o=a("/FUP")
var s=c(o)
var l=a("srvI")
var _=d(l)
function d(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])
t.default=e
return t}function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=t.Hue=function(e){h(t,e)
function t(){var e
var a,n,r
u(this,t)
for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s]
return r=(a=(n=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n),n.handleChange=function(e){var t=_.calculateChange(e,n.props.direction,n.props.hsl,n.container)
t&&"function"===typeof n.props.onChange&&n.props.onChange(t,e)},n.handleMouseDown=function(e){n.handleChange(e)
window.addEventListener("mousemove",n.handleChange)
window.addEventListener("mouseup",n.handleMouseUp)},n.handleMouseUp=function(){n.unbindEventListeners()},a),f(n,r)}n(t,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"unbindEventListeners",value:function(){window.removeEventListener("mousemove",this.handleChange)
window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this
var t=this.props.direction,a=void 0===t?"horizontal":t
var n=(0,s.default)({default:{hue:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius,boxShadow:this.props.shadow},container:{padding:"0 2px",position:"relative",height:"100%",borderRadius:this.props.radius},pointer:{position:"absolute",left:100*this.props.hsl.h/360+"%"},slider:{marginTop:"1px",width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",transform:"translateX(-2px)"}},vertical:{pointer:{left:"0px",top:-100*this.props.hsl.h/360+100+"%"}}},{vertical:"vertical"===a})
return i.default.createElement("div",{style:n.hue},i.default.createElement("div",{className:"hue-"+a,style:n.container,ref:function(t){return e.container=t},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},i.default.createElement("style",null,"\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "),i.default.createElement("div",{style:n.pointer},this.props.pointer?i.default.createElement(this.props.pointer,this.props):i.default.createElement("div",{style:n.slider}))))}}])
return t}(r.PureComponent||r.Component)
t.default=b},"I+Bn":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i={id:"img-alt",test:function(e){if("IMG"!==e.tagName)return true
var t=e.getAttribute("alt")
var a=e.hasAttribute("data-decorative")
return t&&""!==t.replace(/\s/g,"")||a},data:function(e){var t=e.getAttribute("alt")
var a=e.hasAttribute("data-decorative")
return{alt:t||"",decorative:!t&&a}},form:function(){return[{label:(0,r.default)("Add alt text for the image"),dataKey:"alt",disabledIf:function(e){return e.decorative}},{label:(0,r.default)("Decorative image"),dataKey:"decorative",checkbox:true}]},update:function(e,t){if(t.decorative){e.setAttribute("alt","")
e.setAttribute("data-decorative","true")}else{e.setAttribute("alt",t.alt)
e.removeAttribute("data-decorative")}return e},message:function(){return(0,r.default)("Images should include an alt attribute describing the image content.")},why:function(){return(0,r.default)("Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image.")},link:"https://www.w3.org/TR/WCAG20-TECHS/H37.html",linkText:function(){return(0,r.default)("Learn more about using alt text for images")}}
t.default=i},"IEa/":function(e,t,a){"use strict"
var n=a("FeGr")
var r=[]
var i=[]
var o=n.makeRequestCallFromTimer(s)
function s(){if(i.length)throw i.shift()}e.exports=l
function l(e){var t
t=r.length?r.pop():new _
t.task=e
n(t)}function _(){this.task=null}_.prototype.call=function(){try{this.task.call()}catch(e){if(l.onerror)l.onerror(e)
else{i.push(e)
o()}}finally{this.task=null
r[r.length]=this}}},"IF+P":function(e,t,a){"use strict"
e.exports=function(e,t,a,n){var r=(e+(n||"")).toString().includes("%")
if("string"===typeof e){var i=e.match(/(0?\.?\d{1,3})%?\b/g).map(Number)
e=i[0]
t=i[1]
a=i[2]
n=i[3]}else void 0!==n&&(n=parseFloat(n))
if("number"!==typeof e||"number"!==typeof t||"number"!==typeof a||e>255||t>255||a>255)throw new TypeError("Expected three numbers below 256")
if("number"===typeof n){if(!r&&n>=0&&n<=1)n=Math.round(255*n)
else{if(!(r&&n>=0&&n<=100))throw new TypeError("Expected alpha value (".concat(n,") as a fraction or percentage"))
n=Math.round(255*n/100)}n=(256|n).toString(16).slice(1)}else n=""
return(a|t<<8|e<<16|1<<24).toString(16).slice(1)+n}},It9K:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){var t=e.colors,a=e.typography,n=e.borders,r=e.spacing,i=e.forms
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,borderWidth:n.widthSmall,borderStyle:n.style,borderColor:t.borderMedium,borderRadius:n.radiusMedium,iconColor:t.textDarkest,color:t.textDarkest,background:t.backgroundLightest,padding:r.small,focusOutlineWidth:n.widthMedium,focusOutlineStyle:n.style,focusOutlineColor:t.borderBrand,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:a.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:a.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:a.fontSizeLarge,largeHeight:i.inputHeightLarge}}n.canvas=function(e){return{color:e["ic-brand-font-color-dark"],iconColor:e["ic-brand-font-color-dark"],focusBorderColor:e["ic-brand-primary"],focusOutlineColor:e["ic-brand-primary"]}}},"K7/I":function(e,t,a){"use strict"
var n=a("TqRt")
var r=a("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=n(a("lSNA"))
var o=n(a("lwsE"))
var s=n(a("W8MJ"))
var l=n(a("a1gu"))
var _=n(a("Nsbk"))
var d=n(a("7W2i"))
var c=r(a("q1tI"))
var u=n(a("17x9"))
var f=n(a("TSYQ"))
var h=n(a("XbQQ"))
var b=n(a("J2CL"))
var p=a("IzEL")
var m=n(a("5WdN"))
var g=a("ZJ40")
var v=n(a("kibL"))
var k=a("2lwo")
var y=n(a("Zuoh"))
var w=n(a("WdG4"))
var x,z,j,O,T
var S={componentId:"fcKBR",template:function(e){return"\n\n.fcKBR_bGBk{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:".concat(e.fontFamily||"inherit",";line-height:").concat(e.lineHeight||"inherit",";margin:0;text-rendering:optimizeLegibility}\n\ninput.fcKBR_bGBk[type]{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:none;border:none;border-radius:0;box-shadow:none;box-sizing:border-box;color:inherit;display:block;height:auto;line-height:inherit;margin:-6px 0 0 0;outline:0;padding:0;text-align:start;width:100%}\n\n[dir=ltr] input.fcKBR_bGBk[type]{text-align:left}\n\n[dir=rtl] input.fcKBR_bGBk[type]{text-align:right}\n\ninput.fcKBR_bGBk[type]:focus{outline:none}\n\n.fcKBR_fIqS{font-size:").concat(e.h1FontSize||"inherit",";font-weight:").concat(e.h1FontWeight||"inherit","}\n\n.fcKBR_eABG{font-size:").concat(e.h2FontSize||"inherit",";font-weight:").concat(e.h2FontWeight||"inherit","}\n\n.fcKBR_dlZd{font-size:").concat(e.h3FontSize||"inherit",";font-weight:").concat(e.h3FontWeight||"inherit","}\n\n.fcKBR_bAmB{font-size:").concat(e.h4FontSize||"inherit",";font-weight:").concat(e.h4FontWeight||"inherit","}\n\n.fcKBR_eRZv{font-size:").concat(e.h5FontSize||"inherit",";font-weight:").concat(e.h5FontWeight||"inherit","}\n\n.fcKBR_dTMd{border-top:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-top:").concat(e.borderPadding||"inherit","}\n\n.fcKBR_evMo{border-bottom:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";padding-bottom:").concat(e.borderPadding||"inherit","}\n\n.fcKBR_fAVi{color:inherit}\n\n.fcKBR_qFsi{color:").concat(e.primaryColor||"inherit","}\n\n.fcKBR_bLsb{color:").concat(e.secondaryColor||"inherit","}\n\n.fcKBR_ezBQ{color:").concat(e.primaryInverseColor||"inherit","}\n\n.fcKBR_dlnd{color:").concat(e.secondaryInverseColor||"inherit","}\n\n.fcKBR_cJLh{color:").concat(e.successColor||"inherit","}\n\n.fcKBR_eHcp{color:").concat(e.warningColor||"inherit","}\n\n.fcKBR_fpfC{color:").concat(e.brandColor||"inherit","}\n\n.fcKBR_dwua{color:").concat(e.errorColor||"inherit","}\n\n.fcKBR_ZpoW{font-size:inherit;font-weight:inherit;line-height:inherit;margin:0}\n\n.fcKBR_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}")},root:"fcKBR_bGBk",h1:"fcKBR_fIqS",h2:"fcKBR_eABG",h3:"fcKBR_dlZd",h4:"fcKBR_bAmB",h5:"fcKBR_eRZv","border-top":"fcKBR_dTMd","border-bottom":"fcKBR_evMo","color-inherit":"fcKBR_fAVi","color-primary":"fcKBR_qFsi","color-secondary":"fcKBR_bLsb","color-primary-inverse":"fcKBR_ezBQ","color-secondary-inverse":"fcKBR_dlnd","color-success":"fcKBR_cJLh","color-warning":"fcKBR_eHcp","color-brand":"fcKBR_fpfC","color-error":"fcKBR_dwua",reset:"fcKBR_ZpoW",ellipsis:"fcKBR_bOQC"}
var C=(x=(0,y.default)(),z=(0,b.default)(w.default,S),x(j=z(j=(T=O=function(e){(0,d.default)(t,e)
function t(){(0,o.default)(this,t)
return(0,l.default)(this,(0,_.default)(t).apply(this,arguments))}(0,s.default)(t,[{key:"render",value:function(){var e
var a=this.props,n=a.border,r=a.children,o=a.color,s=a.level,l=a.ellipsis,_=a.margin,d=a.elementRef
var u=(0,v.default)(t,this.props,function(){return"reset"===s?"span":s})
var b=h.default.omitViewProps((0,k.omitProps)(this.props,t.propTypes),t)
return c.default.createElement(h.default,Object.assign({},b,{className:(0,f.default)((e={},(0,i.default)(e,S.root,true),(0,i.default)(e,S[s],true),(0,i.default)(e,S["color-".concat(o)],o),(0,i.default)(e,S["border-".concat(n)],"none"!==n),(0,i.default)(e,S.ellipsis,l),e)),as:u,margin:_,elementRef:d}),r)}}])
t.displayName="Heading"
return t}(c.Component),O.propTypes={border:u.default.oneOf(["none","top","bottom"]),children:p.childrenOrValue,color:(0,g.deprecatePropValues)(u.default.oneOf(["primary","secondary","primary-inverse","secondary-inverse","inherit"]),["success","warning","error","brand"]),level:u.default.oneOf(["h1","h2","h3","h4","h5","reset"]),as:u.default.elementType,ellipsis:u.default.bool,margin:m.default.spacing,elementRef:u.default.func},O.defaultProps={children:null,margin:void 0,elementRef:void 0,border:"none",color:"inherit",level:"h2",ellipsis:false},T))||j)||j)
t.default=C},KQAQ:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i=a("V6RX")
var o=125
var s={H1:true,H2:true,H3:true,H4:true,H5:true,H6:true}
var l={"max-heading-length":o,id:"paragraphs-for-headings",test:function(e){if(!s[e.tagName])return true
return e.textContent.length<=o},data:function(e){return{change:false}},form:function(){return[{label:(0,r.default)("Change heading tag to paragraph"),checkbox:true,dataKey:"change"}]},update:function(e,t){var a=e
t.change&&(a=(0,i.changeTag)(e,"p"))
return a},message:function(){return(0,r.default)("Headings should not contain more than 120 characters.")},why:function(){return(0,r.default)("Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should be concise within the proper structure.")},link:""}
t.default=l},KfSR:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.autoprefix=void 0
var n=a("Ag8Z")
var r=o(n)
var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
function o(e){return e&&e.__esModule?e:{default:e}}var s={borderRadius:function(e){return{msBorderRadius:e,MozBorderRadius:e,OBorderRadius:e,WebkitBorderRadius:e,borderRadius:e}},boxShadow:function(e){return{msBoxShadow:e,MozBoxShadow:e,OBoxShadow:e,WebkitBoxShadow:e,boxShadow:e}},userSelect:function(e){return{WebkitTouchCallout:e,KhtmlUserSelect:e,MozUserSelect:e,msUserSelect:e,WebkitUserSelect:e,userSelect:e}},flex:function(e){return{WebkitBoxFlex:e,MozBoxFlex:e,WebkitFlex:e,msFlex:e,flex:e}},flexBasis:function(e){return{WebkitFlexBasis:e,flexBasis:e}},justifyContent:function(e){return{WebkitJustifyContent:e,justifyContent:e}},transition:function(e){return{msTransition:e,MozTransition:e,OTransition:e,WebkitTransition:e,transition:e}},transform:function(e){return{msTransform:e,MozTransform:e,OTransform:e,WebkitTransform:e,transform:e}},absolute:function(e){var t=e&&e.split(" ")
return{position:"absolute",top:t&&t[0],right:t&&t[1],bottom:t&&t[2],left:t&&t[3]}},extend:function(e,t){var a=t[e]
if(a)return a
return{extend:e}}}
var l=t.autoprefix=function(e){var t={};(0,r.default)(e,function(e,a){var n={};(0,r.default)(e,function(e,t){var a=s[t]
a?n=i({},n,a(e)):n[t]=e})
t[a]=n})
return t}
t.default=l},LaeI:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("/HcR"))
var i=n(a("TDWj"))
var o=n(a("syYy"))
var s=r.default.namespace()
s.setup({translations:i.default,generateId:o.default})
var l=s
t.default=l},LmcI:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("lwsE"))
var i=n(a("W8MJ"))
var o=n(a("a1gu"))
var s=n(a("Nsbk"))
var l=n(a("7W2i"))
var _=n(a("q1tI"))
var d=n(a("i8i4"))
var c=n(a("YDsC"))
var u=n(a("a6bM"))
var f=n(a("XbQQ"))
var h=n(a("FYFp"))
var b=function(e){(0,l.default)(t,e)
function t(){var e
var a;(0,r.default)(this,t)
for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l]
a=(0,o.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(i)))
a.state={width:200}
a.handlePickerChange=function(e){a.props.onChange({target:{name:a.props.name,value:t.stringifyRGBA(e.rgb)}})}
return a}(0,i.default)(t,[{key:"componentDidMount",value:function(){this.setState({width:d.default.findDOMNode(this).offsetWidth})}},{key:"render",value:function(){return _.default.createElement(f.default,{as:"div"},_.default.createElement(u.default,this.props),_.default.createElement(h.default,{color:c.default.parseRGBA(this.props.value),onChange:this.handlePickerChange}))}}],[{key:"stringifyRGBA",value:function(e){if(1===e.a)return"rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,")")
return"rgba(".concat(e.r,", ").concat(e.g,", ").concat(e.b,", ").concat(e.a,")")}}])
t.displayName="ColorField"
return t}(_.default.Component)
t.default=b},LpSC:function(e,t,a){a("0zOW")
e.exports=self.fetch.bind(self)},Lq5O:function(e,t,a){"use strict"
var n=a("TqRt")
var r=a("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=n(a("lSNA"))
var o=n(a("QILm"))
var s=n(a("lwsE"))
var l=n(a("W8MJ"))
var _=n(a("a1gu"))
var d=n(a("Nsbk"))
var c=n(a("7W2i"))
var u=r(a("q1tI"))
var f=n(a("17x9"))
var h=n(a("TSYQ"))
var b=n(a("Jg1x"))
var p=n(a("SJAx"))
var m=a("2lwo")
var g=a("IzEL")
var v=n(a("eHKC"))
var k=n(a("ZJ40"))
var y=n(a("LqRq"))
var w=n(a("J2CL"))
var x=n(a("Zuoh"))
var z=n(a("K/zI"))
var j=a("6Rkx")
var O=n(a("BXe7"))
var T=n(a("gP9I"))
var S,C,A,E,M,L,P,R
var B={componentId:"bFgzf",template:function(e){return"\n\n.bFgzf_bGBk{background-color:".concat(e.background||"inherit",";box-sizing:border-box;max-height:100vh;max-width:100vw;overflow-x:hidden;overflow-y:auto;position:fixed;z-index:").concat(e.zIndex||"inherit","}\n\n.bFgzf_dHtp{border-color:").concat(e.borderColor||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:0}\n\n.bFgzf_fSpQ{box-shadow:").concat(e.boxShadow||"inherit","}\n\n.bFgzf_bgun,.bFgzf_dLYh{inset-inline-end:0;inset-inline-start:0}\n\n[dir=ltr] .bFgzf_bgun,[dir=ltr] .bFgzf_dLYh{left:0;right:0}\n\n[dir=rtl] .bFgzf_bgun,[dir=rtl] .bFgzf_dLYh{left:0;right:0}\n\n.bFgzf_bQpq,.bFgzf_bxia{bottom:0;top:0}\n\n.bFgzf_bQpq.bFgzf_dfBC,.bFgzf_bxia.bFgzf_dfBC{width:").concat(e.xSmallWidth||"inherit","}\n\n.bFgzf_bQpq.bFgzf_doqw,.bFgzf_bxia.bFgzf_doqw{width:").concat(e.smallWidth||"inherit","}\n\n.bFgzf_bQpq.bFgzf_cXTs,.bFgzf_bxia.bFgzf_cXTs{width:").concat(e.regularWidth||"inherit","}\n\n.bFgzf_bQpq.bFgzf_ycrn,.bFgzf_bxia.bFgzf_ycrn{width:").concat(e.mediumWidth||"inherit","}\n\n.bFgzf_bQpq.bFgzf_cMDj,.bFgzf_bxia.bFgzf_cMDj{width:").concat(e.largeWidth||"inherit","}\n\n.bFgzf_ehJX{bottom:0;left:0;right:0;top:0}\n\n.bFgzf_bxia{inset-inline-end:auto;inset-inline-start:0}\n\n[dir=ltr] .bFgzf_bxia{left:0;right:auto}\n\n[dir=rtl] .bFgzf_bxia{left:auto;right:0}\n\n.bFgzf_bxia.bFgzf_dHtp{border-inline-end-width:").concat(e.borderWidth||"inherit","}\n\n[dir=ltr] .bFgzf_bxia.bFgzf_dHtp{border-right-width:").concat(e.borderWidth||"inherit","}\n\n[dir=rtl] .bFgzf_bxia.bFgzf_dHtp{border-left-width:").concat(e.borderWidth||"inherit","}\n\n.bFgzf_bQpq{inset-inline-end:0;inset-inline-start:auto}\n\n[dir=ltr] .bFgzf_bQpq{left:auto;right:0}\n\n[dir=rtl] .bFgzf_bQpq{left:0;right:auto}\n\n.bFgzf_bQpq.bFgzf_dHtp{border-inline-start-width:").concat(e.borderWidth||"inherit","}\n\n[dir=ltr] .bFgzf_bQpq.bFgzf_dHtp{border-left-width:").concat(e.borderWidth||"inherit","}\n\n[dir=rtl] .bFgzf_bQpq.bFgzf_dHtp{border-right-width:").concat(e.borderWidth||"inherit","}\n\n.bFgzf_dLYh{top:0}\n\n.bFgzf_dLYh.bFgzf_dHtp{border-bottom-width:").concat(e.borderWidth||"inherit","}\n\n.bFgzf_bgun{bottom:0}\n\n.bFgzf_bgun.bFgzf_dHtp{border-top-width:").concat(e.borderWidth||"inherit","}")},root:"bFgzf_bGBk",border:"bFgzf_dHtp",shadow:"bFgzf_fSpQ","placement--bottom":"bFgzf_bgun","placement--top":"bFgzf_dLYh","placement--end":"bFgzf_bQpq","placement--start":"bFgzf_bxia","x-small":"bFgzf_dfBC",small:"bFgzf_doqw",regular:"bFgzf_cXTs",medium:"bFgzf_ycrn",large:"bFgzf_cMDj","placement--center":"bFgzf_ehJX"}
var I=(S=(0,x.default)(),C=(0,k.default)("3.0.0",{onRequestClose:"onDismiss",isOpen:"open",onReady:"onOpen",onAfterOpen:"onOpen",getDefaultFocusElement:"defaultFocusElement",trapFocus:"shouldContainFocus"}),A=(0,k.default)("5.0.0",{closeButtonLabel:true,closeButtonRef:true,closeButtonVariant:true,applicationElement:true}),E=(0,y.default)(),M=(0,w.default)(T.default,B),S(L=C(L=A(L=E(L=M(L=(R=P=function(e){(0,c.default)(t,e)
function t(){var e
var a;(0,s.default)(this,t)
for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i]
a=(0,_.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(r)))
a.state={transitioning:false}
a.handleTransitionComplete=function(){a.setState({transitioning:false})}
a.handlePortalOpen=function(e){a.DOMNode=e
e&&a.applyTheme(e)}
a.closeButtonRef=function(e){a._closeButton=e
"function"===typeof a.props.closeButtonRef&&a.props.closeButtonRef(e)}
return a}(0,l.default)(t,[{key:"componentDidUpdate",value:function(e){this.props.open!==e.open&&this.setState({transitioning:true})}},{key:"renderCloseButton",value:function(){return this.props.closeButtonLabel?u.default.createElement(p.default,{placement:"end"===this.props.placement?"start":"end",offset:"x-small",variant:this.props.closeButtonVariant,buttonRef:this.closeButtonRef,onClick:this.props.onDismiss},this.props.closeButtonLabel):null}},{key:"renderContent",value:function(){return u.default.createElement("div",null,this.renderCloseButton(),this.props.children)}},{key:"render",value:function(){var e
var a=this.props,n=a.label,r=(a.closeButtonLabel,a.children,a.size),s=(a.placement,a.open),l=(a.defaultFocusElement,a.contentRef),_=(a.closeButtonRef,a.shouldContainFocus),d=a.shouldReturnFocus,c=a.shouldCloseOnDocumentClick,f=a.onOpen,p=a.onClose,g=a.onDismiss,k=a.mountNode,y=a.insertAt,w=a.liveRegion,x=a.onEnter,j=a.onEntering,T=a.onEntered,S=a.onExit,C=a.onExiting,A=a.onExited,E=a.onTransition,M=(a.closeButtonVariant,a.border),L=a.shadow,P=(0,o.default)(a,["label","closeButtonLabel","children","size","placement","open","defaultFocusElement","contentRef","closeButtonRef","shouldContainFocus","shouldReturnFocus","shouldCloseOnDocumentClick","onOpen","onClose","onDismiss","mountNode","insertAt","liveRegion","onEnter","onEntering","onEntered","onExit","onExiting","onExited","onTransition","closeButtonVariant","border","shadow"])
var R=s||this.state.transitioning
return u.default.createElement(z.default,{open:R,onOpen:this.handlePortalOpen,insertAt:y,mountNode:k},R&&u.default.createElement(O.default,{in:s,type:this.transition,onTransition:E,onEnter:x,onEntering:j,onEntered:(0,v.default)(this.handleTransitionComplete,T,f),onExit:S,onExiting:C,onExited:(0,v.default)(this.handleTransitionComplete,A,p),transitionOnMount:true,transitionEnter:true,transitionExit:true},u.default.createElement("span",Object.assign({},(0,m.omitProps)(P,t.propTypes),{className:(0,h.default)((e={},(0,i.default)(e,B.root,true),(0,i.default)(e,B.border,M),(0,i.default)(e,B.shadow,L),(0,i.default)(e,B[r],true),(0,i.default)(e,B["placement--".concat(this.props.placement)],true),e)),ref:l}),this.state.transitioning?this.renderContent():u.default.createElement(b.default,{as:"div",label:n,defaultFocusElement:this.defaultFocusElement,open:true,shouldContainFocus:_,shouldReturnFocus:d,shouldCloseOnDocumentClick:c,shouldCloseOnEscape:true,liveRegion:w,onDismiss:g},this.renderContent()))))}},{key:"placement",get:function(){var e=this.props.placement
return this.rtl?(0,j.mirrorHorizontalPlacement)(e," "):e}},{key:"direction",get:function(){switch(this.placement){case"top":return"up"
case"bottom":return"down"
case"end":return"right"
default:return"left"}}},{key:"transition",get:function(){return"slide-".concat(this.direction)}},{key:"defaultFocusElement",get:function(){var e=this
return this.props.defaultFocusElement||function(){return e._closeButton}}},{key:"DOMNode",get:function(){return this._DOMNode},set:function(e){this._DOMNode=e}}])
t.displayName="Tray"
return t}(u.Component),P.propTypes={label:f.default.string.isRequired,closeButtonLabel:f.default.string,children:f.default.node,size:f.default.oneOf(["x-small","small","regular","medium","large"]),placement:f.default.oneOf(["top","bottom","start","end"]),open:f.default.bool,defaultFocusElement:f.default.oneOfType([f.default.element,f.default.func]),contentRef:f.default.func,closeButtonRef:f.default.func,shouldContainFocus:f.default.bool,shouldReturnFocus:f.default.bool,shouldCloseOnDocumentClick:f.default.bool,onOpen:f.default.func,onClose:f.default.func,onDismiss:f.default.func,mountNode:f.default.oneOfType([g.element,f.default.func]),insertAt:f.default.oneOf(["bottom","top"]),liveRegion:f.default.oneOfType([f.default.arrayOf(f.default.element),f.default.element,f.default.func]),onTransition:f.default.func,onEnter:f.default.func,onEntering:f.default.func,onEntered:f.default.func,onExit:f.default.func,onExiting:f.default.func,onExited:f.default.func,closeButtonVariant:f.default.oneOf(["icon","icon-inverse"]),border:f.default.bool,shadow:f.default.bool},P.defaultProps={open:false,onOpen:function(e){},onClose:function(e){},onDismiss:function(e){},onEnter:function(){},onEntering:function(){},onEntered:function(){},onExit:function(){},onExiting:function(){},onExited:function(){},mountNode:null,insertAt:"bottom",liveRegion:null,contentRef:function(e){},shouldCloseOnDocumentClick:false,shouldContainFocus:true,shouldReturnFocus:true,defaultFocusElement:null,size:"small",placement:"start",shadow:true,border:false,children:null,closeButtonLabel:void 0,closeButtonRef:void 0,closeButtonVariant:void 0,onTransition:void 0},R))||L)||L)||L)||L)||L)
var F=I
t.default=F},LsHQ:function(e,t,a){var n=a("EA7m"),r=a("mv/X")
function i(e){return n(function(t,a){var n=-1,i=a.length,o=i>1?a[i-1]:void 0,s=i>2?a[2]:void 0
o=e.length>3&&"function"==typeof o?(i--,o):void 0
if(s&&r(a[0],a[1],s)){o=i<3?void 0:o
i=1}t=Object(t)
while(++n<i){var l=a[n]
l&&e(t,l,n,o)}return t})}e.exports=i},Lwbf:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var n={}
var r=t.render=function(e,t,a,n){if("undefined"===typeof document&&!n)return null
var r=n?new n:document.createElement("canvas")
r.width=2*a
r.height=2*a
var i=r.getContext("2d")
if(!i)return null
i.fillStyle=e
i.fillRect(0,0,r.width,r.height)
i.fillStyle=t
i.fillRect(0,0,a,a)
i.translate(a,a)
i.fillRect(0,0,a,a)
return r.toDataURL()}
t.get=function(e,t,a,i){var o=e+"-"+t+"-"+a+(i?"-server":"")
if(n[o])return n[o]
var s=r(e,t,a,i)
n[o]=s
return s}},MAmL:function(e,t,a){"use strict"
a.r(t)
var n=/[A-Z]/g
var r=/^ms-/
var i={}
function o(e){return"-"+e.toLowerCase()}function s(e){if(i.hasOwnProperty(e))return i[e]
var t=e.replace(n,o)
return i[e]=r.test(t)?"-"+t:t}t["default"]=s},MX5s:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=f
var n=a("Rz+p")
var r=_(n)
var i=a("sUt/")
var o=_(i)
var s=a("HiWe")
var l=_(s)
function _(e){return e&&e.__esModule?e:{default:e}}var d={transition:true,transitionProperty:true,WebkitTransition:true,WebkitTransitionProperty:true,MozTransition:true,MozTransitionProperty:true}
var c={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"}
function u(e,t){if((0,o.default)(e))return e
var a=e.split(/,(?![^()]*(?:\([^()]*\))?\))/g)
for(var n=0,i=a.length;n<i;++n){var s=a[n]
var l=[s]
for(var _ in t){var d=(0,r.default)(_)
if(s.indexOf(d)>-1&&"order"!==d){var u=t[_]
for(var f=0,h=u.length;f<h;++f)l.unshift(s.replace(d,c[u[f]]+d))}}a[n]=l.join(",")}return a.join(",")}function f(e,t,a,n){if("string"===typeof t&&d.hasOwnProperty(e)){var r=u(t,n)
var i=r.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(e){return!/-moz-|-ms-/.test(e)}).join(",")
if(e.indexOf("Webkit")>-1)return i
var o=r.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(e){return!/-webkit-|-ms-/.test(e)}).join(",")
if(e.indexOf("Moz")>-1)return o
a["Webkit"+(0,l.default)(e)]=i
a["Moz"+(0,l.default)(e)]=o
return r}}},"NF/o":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
var n=a("v+mX")
function r(e){var t=e.colors,a=e.typography,r=e.borders,i=e.spacing
return{fontFamily:a.fontFamily,fontWeight:a.fontWeightNormal,color:t.textLink,textDecoration:"underline",focusOutlineWidth:r.widthMedium,focusOutlineColor:t.borderBrand,focusOutlineStyle:r.style,hoverColor:(0,n.darken)(t.textLink,10),hoverTextDecoration:"underline",colorInverse:t.textLight,focusInverseOutlineColor:t.borderLightest,focusInverseIconOutlineColor:t.borderLightest,iconSize:"1.125em",iconPlusTextMargin:i.xxSmall}}r["canvas-a11y"]=r["canvas-high-contrast"]=function(e){var t=e.colors
return{textDecoration:"underline",focusOutlineColor:t.borderBrand,focusInverseOutlineColor:t.borderLightest}}
r["canvas"]=function(e){return{color:e["ic-link-color"],focusOutlineColor:e["ic-brand-primary"],hoverColor:(0,n.darken)(e["ic-link-color"],10)}}},NZlj:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var r=n(a("q1tI"))
function i(){var e={width:"10px",height:"10px",border:"1px solid rgba(0, 0, 0, 0.6)",borderRadius:"6px",transform:"translate(-6px, -1px)",backgroundColor:"rgb(248, 248, 248)",boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.37)"}
return r.default.createElement("div",{style:e})}},Nq3d:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Checkboard=void 0
var n=a("q1tI")
var r=d(n)
var i=a("/FUP")
var o=d(i)
var s=a("Lwbf")
var l=_(s)
function _(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])
t.default=e
return t}function d(e){return e&&e.__esModule?e:{default:e}}var c=t.Checkboard=function(e){var t=e.white,a=e.grey,n=e.size,i=e.renderers,s=e.borderRadius,_=e.boxShadow
var d=(0,o.default)({default:{grid:{borderRadius:s,boxShadow:_,absolute:"0px 0px 0px 0px",background:"url("+l.get(t,a,n,i.canvas)+") center left"}}})
return r.default.createElement("div",{style:d.grid})}
c.defaultProps={size:8,white:"transparent",grey:"rgba(0,0,0,.08)",renderers:{}}
t.default=c},NvTu:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("RIqP"))
var i=n(a("LaeI"))
var o=function(e,t){if(!e||!t||"A"!==e.tagName||"A"!==t.tagName)return false
return e.getAttribute("href")===t.getAttribute("href")}
var s=function(e){return e.nodeType!==Node.TEXT_NODE||e.textContent.match(/\S/)}
var l=function(e){var t=e.firstElementChild
if(!t)return null
if((0,r.default)(e.childNodes).filter(s).length>1)return null
return t}
var _=function(e){var t=e
var a=l(t)
while(a){if("IMG"===a.tagName)return a
t=a
a=l(t)}return null}
var d=function(e){return e.replace(/\s+/g," ").trim()}
var c=function(e,t){var a=_(e)
var n=_(t)
return a&&!n&&d(a.getAttribute("alt"))===d(t.textContent)?a:n&&!a&&d(n.getAttribute("alt"))===d(e.textContent)?n:null}
var u={id:"adjacent-links",test:function(e){if("A"!=e.tagName)return true
return!o(e,e.nextElementSibling)},data:function(e){return{combine:false}},form:function(){return[{label:(0,i.default)("Merge links"),checkbox:true,dataKey:"combine"}]},update:function(e,t){var a=e.parentNode
if(t.combine){var n=e.nextElementSibling
var r=c(e,n)
if(r){r.setAttribute("data-decorative","true")
r.setAttribute("alt","")}a.removeChild(n)
e.innerHTML+=" ".concat(n.innerHTML)}return e},rootNode:function(e){return e.parentNode},message:function(){return(0,i.default)("Adjacent links with the same URL should be a single link.")},why:function(){return(0,i.default)("Keyboards navigate to links using the Tab key. Two adjacent links that direct to the same destination can be confusing to keyboard users.")},link:"https://www.w3.org/TR/WCAG20-TECHS/H2.html",linkText:function(){return(0,i.default)("Learn more about adjacent links")}}
t.default=u},NwRt:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var r=n(a("q1tI"))
function i(){return r.default.createElement("svg",{viewBox:"0 0 245 310",xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("g",{fill:"none",fillRule:"evenodd"},r.default.createElement("path",{d:"M166.886 39.098c1.975 25.644-22.325 55.153-31.764 55.89-8.258.645-37.972-24.727-39.947-50.37C93.2 18.972 108.168 3.644 127.97 2.12 147.774.6 164.91 13.455 166.887 39.1",fill:"#E24270"}),r.default.createElement("path",{d:"M166.886 39.098c1.975 25.644-22.325 55.153-31.764 55.89-8.258.645-37.972-24.727-39.947-50.37C93.2 18.972 108.168 3.644 127.97 2.12 147.774.6 164.91 13.455 166.887 39.1z",stroke:"#BB0049",strokeWidth:"3"}),r.default.createElement("path",{d:"M136.38 99s-4.393 25.27 16.675 79.635c21.835 56.343.905 87.365.905 87.365",stroke:"#808285",strokeWidth:"2"}),r.default.createElement("path",{d:"M134.786 96.263l-3.607 5.22c-.618.895.493 1.963 1.373 1.322l3.045-2.215 4.22 2.174c.804.414 1.576-.6.957-1.253l-5.04-5.32c-.268-.28-.73-.246-.95.073",fill:"#E24270"}),r.default.createElement("path",{d:"M134.786 96.263l-3.607 5.22c-.618.895.493 1.963 1.373 1.322l3.045-2.215 4.22 2.174c.804.414 1.576-.6.957-1.253l-5.04-5.32c-.268-.28-.73-.246-.95.073z",stroke:"#BB0049",strokeWidth:"3"}),r.default.createElement("path",{d:"M223.18 86.916c-3.846 20.83-28.086 39.36-35.276 38.015-6.292-1.174-23.187-27.46-19.34-48.29 3.845-20.827 18.185-29.973 33.267-27.136 15.083 2.838 25.196 16.583 21.35 37.412",fill:"#F7941D"}),r.default.createElement("path",{d:"M223.18 86.916c-3.846 20.83-28.086 39.36-35.276 38.015-6.292-1.174-23.187-27.46-19.34-48.29 3.845-20.827 18.185-29.973 33.267-27.136 15.083 2.838 25.196 16.583 21.35 37.412z",stroke:"#F15A29",strokeWidth:"3"}),r.default.createElement("path",{d:"M188.264 127s11.83 8.563-1.903 44.83c-43.046 113.684 27.63 102.178-5.446 114.17",stroke:"#808285",strokeWidth:"2"}),r.default.createElement("path",{d:"M189.094 124.174l-2.923 3.936c-.5.674.195 1.637.86 1.19l2.3-1.54 2.786 2.126c.53.405 1.148-.353.765-.938l-3.117-4.753c-.165-.25-.49-.262-.67-.02",fill:"#F7941D"}),r.default.createElement("path",{d:"M189.094 124.174l-2.923 3.936c-.5.674.195 1.637.86 1.19l2.3-1.54 2.786 2.126c.53.405 1.148-.353.765-.938l-3.117-4.753c-.165-.25-.49-.262-.67-.02z",stroke:"#F15A29",strokeWidth:"2"}),r.default.createElement("path",{fill:"#E24270",d:"M7.366 125L0 121.366 3.634 114 11 117.634"}),r.default.createElement("path",{fill:"#2BB673",d:"M205.793 189L201 181.793l7.206-4.793 4.794 7.206M38.793 227L34 219.794 41.206 215 46 222.207"}),r.default.createElement("path",{fill:"#C739AE",d:"M241.365 119L234 115.365l3.635-7.365 7.365 3.635"}),r.default.createElement("path",{d:"M59.82 132.916c3.846 20.828 28.086 39.36 35.277 38.015 6.29-1.174 23.187-27.46 19.34-48.29-3.845-20.827-18.186-29.973-33.268-27.136-15.083 2.838-25.196 16.583-21.35 37.412",fill:"#27AAE1"}),r.default.createElement("path",{d:"M59.82 132.916c3.846 20.828 28.086 39.36 35.277 38.015 6.29-1.174 23.187-27.46 19.34-48.29-3.845-20.827-18.186-29.973-33.268-27.136-15.083 2.838-25.196 16.583-21.35 37.412z",stroke:"#1B75BC",strokeWidth:"3"}),r.default.createElement("path",{d:"M95.578 173s-12.91 7.878.553 38.35c22.452 50.803-11.7 39.804 2.025 97.65",stroke:"#808285",strokeWidth:"2"}),r.default.createElement("path",{d:"M93.906 170.174l2.923 3.936c.5.674-.195 1.637-.86 1.19l-2.3-1.54-2.786 2.126c-.53.404-1.148-.353-.765-.938l3.117-4.753c.165-.25.49-.262.67-.02",fill:"#27AAE1"}),r.default.createElement("path",{d:"M93.906 170.174l2.923 3.936c.5.674-.195 1.637-.86 1.19l-2.3-1.54-2.786 2.126c-.53.404-1.148-.353-.765-.938l3.117-4.753c.165-.25.49-.262.67-.02z",stroke:"#1B75BC",strokeWidth:"2"})))}},OAow:function(e,t,a){var n=a("q1tI")
function r(){var e=""
try{e=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getStackAddendum()}catch(e){}return e}function i(e,t,a){if(!t&&false){var n=r()
if("function"!==typeof console[e])throw new Error("'".concat(e,"' is not a valid console method!"))
var i
for(var o=arguments.length,s=new Array(o>3?o-3:0),l=3;l<o;l++)s[l-3]=arguments[l];(i=console)[e].apply(i,["Warning: ".concat(a)].concat(s,[n]))}}t.error=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return i.apply(void 0,["error"].concat(t))}
t.warn=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return i.apply(void 0,["warn"].concat(t))}
t.info=function(){var e
return(e=console).info.apply(e,arguments)}
t.assert=function(){var e
return(e=console).assert.apply(e,arguments)}
t.debug=function(){var e
return(e=console).debug.apply(e,arguments)}
t.log=function(){var e
return(e=console).log.apply(e,arguments)}},"OS/W":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.getInstance=c
t.setLocale=u
var r=n(a("q1tI"))
var i=n(a("i8i4"))
var o=n(a("5WPf"))
var s=n(a("LaeI"))
var l
var _=[]
var d=document.createElement("div")
d.className="tinymce-a11y-checker-container"
document.body.appendChild(d)
tinymce.create("tinymce.plugins.AccessibilityChecker",{init:function(e){e.addCommand("openAccessibilityChecker",function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n]
i.default.render(r.default.createElement(o.default,{getBody:e.getBody.bind(e),editor:e}),d,function(){var e
l=this
_.forEach(function(e){return e(l)});(e=l).check.apply(e,a)})})
"4"===tinymce.majorVersion?e.addButton("check_a11y",{title:(0,s.default)("Check Accessibility"),cmd:"openAccessibilityChecker",icon:"a11y"}):e.ui.registry.addButton("check_a11y",{title:(0,s.default)("Check Accessibility"),onAction:function(t){return e.execCommand("openAccessibilityChecker")},icon:"a11y"})}})
tinymce.PluginManager.add("a11y_checker",tinymce.plugins.AccessibilityChecker)
function c(e){if(null!=l)return e(l)
_.push(e)}function u(e){var t=s.default.setup()
t.locale=e
s.default.setup(t)}},Ojt5:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Raised=void 0
var n=a("q1tI")
var r=c(n)
var i=a("17x9")
var o=c(i)
var s=a("/FUP")
var l=c(s)
var _=a("QkVN")
var d=c(_)
function c(e){return e&&e.__esModule?e:{default:e}}var u=t.Raised=function(e){var t=e.zDepth,a=e.radius,n=e.background,i=e.children,o=e.styles,s=void 0===o?{}:o
var _=(0,l.default)((0,d.default)({default:{wrap:{position:"relative",display:"inline-block"},content:{position:"relative"},bg:{absolute:"0px 0px 0px 0px",boxShadow:"0 "+t+"px "+4*t+"px rgba(0,0,0,.24)",borderRadius:a,background:n}},"zDepth-0":{bg:{boxShadow:"none"}},"zDepth-1":{bg:{boxShadow:"0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"}},"zDepth-2":{bg:{boxShadow:"0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"}},"zDepth-3":{bg:{boxShadow:"0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"}},"zDepth-4":{bg:{boxShadow:"0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"}},"zDepth-5":{bg:{boxShadow:"0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"}},square:{bg:{borderRadius:"0"}},circle:{bg:{borderRadius:"50%"}}},s),{"zDepth-1":1===t})
return r.default.createElement("div",{style:_.wrap},r.default.createElement("div",{style:_.bg}),r.default.createElement("div",{style:_.content},i))}
u.propTypes={background:o.default.string,zDepth:o.default.oneOf([0,1,2,3,4,5]),radius:o.default.number,styles:o.default.object}
u.defaultProps={background:"#fff",zDepth:1,radius:2,styles:{}}
t.default=u},P92B:function(e,t,a){"use strict"
a.r(t)
var n=a("17x9")
var r=a.n(n)
var i=a("q1tI")
var o=a.n(i)
var s={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,width:"1px",position:"absolute"}
var l=function(e){var t=e.message,a=e["aria-live"]
return o.a.createElement("div",{style:s,role:"log","aria-live":a},t||"")}
l.propTypes={}
var _=l
function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(e){u(t,e)
function t(){var a,n,r
d(this,t)
for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s]
return r=(a=(n=c(this,e.call.apply(e,[this].concat(o))),n),n.state={assertiveMessage1:"",assertiveMessage2:"",politeMessage1:"",politeMessage2:""},n.setAlternatePolite=false,n.setAlternateAssertive=false,a),c(n,r)}t.prototype.componentWillReceiveProps=function(e){var t=this.props,a=t.politeMessage,n=t.assertiveMessage
var r=e.politeMessage,i=e.assertiveMessage
if(a!==r){this.setState({politeMessage1:this.setAlternatePolite?"":r,politeMessage2:this.setAlternatePolite?r:""})
this.setAlternatePolite=!this.setAlternatePolite}if(n!==i){this.setState({assertiveMessage1:this.setAlternateAssertive?"":i,assertiveMessage2:this.setAlternateAssertive?i:""})
this.setAlternateAssertive=!this.setAlternateAssertive}}
t.prototype.render=function(){var e=this.state,t=e.assertiveMessage1,a=e.assertiveMessage2,n=e.politeMessage1,r=e.politeMessage2
return o.a.createElement("div",null,o.a.createElement(_,{"aria-live":"assertive",message:t}),o.a.createElement(_,{"aria-live":"assertive",message:a}),o.a.createElement(_,{"aria-live":"polite",message:n}),o.a.createElement(_,{"aria-live":"polite",message:r}))}
return t}(i["Component"])
f.propTypes={}
var h=f
var b,p
function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var k=(p=b=function(e){v(t,e)
function t(a){m(this,t)
var n=g(this,e.call(this,a))
n.state={announcePoliteMessage:"",announceAssertiveMessage:""}
n.announcePolite=n.announcePolite.bind(n)
n.announceAssertive=n.announceAssertive.bind(n)
return n}t.prototype.getChildContext=function(){return{announcePolite:this.announcePolite,announceAssertive:this.announceAssertive}}
t.prototype.announcePolite=function(e){this.setState({announcePoliteMessage:e})}
t.prototype.announceAssertive=function(e){this.setState({announceAssertiveMessage:e})}
t.prototype.render=function(){var e=this.state,t=e.announcePoliteMessage,a=e.announceAssertiveMessage
return o.a.createElement("div",null,o.a.createElement(h,{assertiveMessage:a,politeMessage:t}),this.props.children)}
return t}(i["Component"]),b.childContextTypes={announcePolite:r.a.func.isRequired,announceAssertive:r.a.func.isRequired},p)
var y=k
var w,x
function z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function O(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var T=(x=w=function(e){O(t,e)
function t(a){z(this,t)
var n=j(this,e.call(this,a))
n.announce=n.announce.bind(n)
return n}t.prototype.componentDidMount=function(){this.announce()}
t.prototype.componentDidUpdate=function(e){var t=this.props.message
t!==e.message&&this.announce()}
t.prototype.componentWillUnmount=function(){var e=this.props.clearOnUnmount
if(true===e||"true"===e){this.context.announceAssertive("")
this.context.announcePolite("")}}
t.prototype.announce=function(){var e=this.props,t=e.message,a=e["aria-live"]
"assertive"===a&&this.context.announceAssertive(t||"")
"polite"===a&&this.context.announcePolite(t||"")}
t.prototype.render=function(){return null}
return t}(i["Component"]),w.contextTypes={announcePolite:r.a.func.isRequired,announceAssertive:r.a.func.isRequired},x)
T.propTypes={}
var S=T
a.d(t,"LiveAnnouncer",function(){return y})
a.d(t,"LiveMessage",function(){return S})},PeFH:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var r=n(a("KB5V"))
var i=n(a("SuOk"))
var o=n(a("cOnk"))
function s(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["width"]
var n=(0,r.default)(e)
var s=(0,i.default)(n)
var l=false
var _
var d=function e(){if(l)return
var r=(0,i.default)(n)
var d={width:r.width,height:r.height}
a.some(function(e){return d[e]!=s[e]})&&"function"===typeof t&&t(d)
s=d
_=(0,o.default)(e)}
d()
return{remove:function(){l=true
_.cancel()}}}},QIyF:function(e,t,a){var n=a("Kz5y")
var r=function(){return n.Date.now()}
e.exports=r},QkVN:function(e,t,a){var n=a("+Qka"),r=a("LsHQ")
var i=r(function(e,t,a){n(e,t,a)})
e.exports=i},Qrca:function(e,t){e.exports=function(){var e=arguments.length
var t=[]
for(var a=0;a<e;a++)t[a]=arguments[a]
t=t.filter(function(e){return null!=e})
if(0===t.length)return
if(1===t.length)return t[0]
return t.reduce(function(e,t){return function(){e.apply(this,arguments)
t.apply(this,arguments)}})}},"Rz+p":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var n=a("MAmL")
var r=i(n)
function i(e){return e&&e.__esModule?e:{default:e}}function o(e){return(0,r.default)(e)}e.exports=t["default"]},Sc0N:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=l
var n=a("sUt/")
var r=i(n)
function i(e){return e&&e.__esModule?e:{default:e}}var o=["-webkit-","-moz-",""]
var s=/linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi
function l(e,t){if("string"===typeof t&&!(0,r.default)(t)&&s.test(t))return o.map(function(e){return t.replace(s,function(t){return e+t})})}},T1AV:function(e,t,a){var n=a("t2Dn"),r=a("5Tg0"),i=a("yP5f"),o=a("Q1l4"),s=a("+iFO"),l=a("03A+"),_=a("Z0cm"),d=a("3L66"),c=a("DSRE"),u=a("lSCD"),f=a("GoyQ"),h=a("YO3V"),b=a("c6wG"),p=a("itsj"),m=a("jeLo")
function g(e,t,a,g,v,k,y){var w=p(e,a),x=p(t,a),z=y.get(x)
if(z){n(e,a,z)
return}var j=k?k(w,x,a+"",e,t,y):void 0
var O=void 0===j
if(O){var T=_(x),S=!T&&c(x),C=!T&&!S&&b(x)
j=x
if(T||S||C)if(_(w))j=w
else if(d(w))j=o(w)
else if(S){O=false
j=r(x,true)}else if(C){O=false
j=i(x,true)}else j=[]
else if(h(x)||l(x)){j=w
l(w)?j=m(w):f(w)&&!u(w)||(j=s(x))}else O=false}if(O){y.set(x,j)
v(j,x,g,k,y)
y["delete"](x)}n(e,a,j)}e.exports=g},TDWj:function(e){e.exports=JSON.parse('{"ar":{"accessibility_checker_b3af1f6c":"المتحقق من إمكانية الوصول","action_to_take_b626a99a":"إجراء مقرر اتخاذه:","add_a_caption_2a915239":"إضافة تسمية توضيحية","add_alt_text_for_the_image_48cd88aa":"إضافة نص بديل للصورة","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"يجب أن تكون الروابط المتجاورة بنفس عنوان URL رابطًا فرديًا.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"يجب ألا يتضمن نص السمة البديلة أكثر من 120 حرفًا.","apply_781a2546":"تطبيق","change_alt_text_92654906":"تغيير النص البديل","change_heading_tag_to_paragraph_a61e3113":"تغيير علامة العنوان إلى فقرة","change_text_color_1aecb912":"تغيير لون النص","check_accessibility_3c78211c":"التحقق من إمكانية الوصول","checking_for_accessibility_issues_fac18c6d":"التحقق من مشاكل إمكانية الوصول","close_accessibility_checker_29d1c51e":"إغلاق المتحقق من إمكانية الوصول","close_d634289d":"إغلاق","column_e1ae5c64":"عمود","column_group_1c062368":"مجموعة العمود","decorative_image_fde98579":"صورة تزيين","element_starting_with_start_91bf4c3b":"عنصر يبدأ بـ { start }","fix_heading_hierarchy_f60884c4":"إصلاح هيكل العنوان","format_as_a_list_142210c3":"التنسيق في صورة قائمة","header_column_f27433cb":"عمود الرأس","header_row_and_column_ec5b9ec":"صف وعمود الرأس","header_row_f33eb169":"صف الرأس","heading_levels_should_not_be_skipped_3947c0e0":"يجب ألا يتم تجاوز مستويات العنوان.","heading_starting_with_start_42a3e7f9":"يبدأ العنوان بـ { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"يجب ألا تتضمن العناوين أكثر من 120 حرفًا.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"يجب ألا يتم استخدام أسماء ملفات الصور كسمة ببديلة لوصف محتوى الصورة.","image_with_filename_file_aacd7180":"صورة باسم الملف { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"يجب أن تتضمن الصور سمة بديلة تصف محتوى الصورة.","issue_num_total_f94536cf":"مشكلة { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"تنتقل لوحات المفاتيح إلى الروابط باستخدام المفتاح Tab. يمكن أن يسبب رابطان متجاوران يوجهان إلى نفس الوجهة في إرباك مستخدمي لوحة المفاتيح.","learn_more_about_adjacent_links_2cb9762c":"معرفة المزيد عن الارتباطات المتجاورة","learn_more_about_color_contrast_c019dfb9":"معرفة المزيد عن تباين اللون","learn_more_about_organizing_page_headings_8a7caa2e":"معرفة المزيد عن تنظيم عناوين الصفحات","learn_more_about_table_headers_5f5ee13":"معرفة المزيد عن رؤوس الجداول","learn_more_about_using_alt_text_for_images_5698df9a":"معرفة المزيد عن استخدام النص البديل للصور","learn_more_about_using_captions_with_tables_36fe496f":"معرفة المزيد عن استخدام التسميات التوضيحية مع الجداول","learn_more_about_using_filenames_as_alt_text_264286af":"معرفة المزيد عن استخدام أسماء الملفات كنصوص بديلة","learn_more_about_using_lists_4e6eb860":"معرفة المزيد عن استخدام القوائم","learn_more_about_using_scope_attributes_with_table_20df49aa":"معرفة المزيد عن استخدام سمات النطاق مع الجداول","leave_as_is_4facfe55":"ترك كما هو","link_with_text_starting_with_start_b3fcbe71":"رابط بنص يبدأ بـ { start }","lists_should_be_formatted_as_lists_f862de8d":"يجب تنسيق القوائم في صورة قوائم","merge_links_2478df96":"دمج الروابط","next_40e12421":"التالي","no_accessibility_issues_were_detected_f8d3c875":"لم يتم الكشف عن مشاكل إمكانية الوصول.","no_headers_9bc7dc7f":"بلا رؤوس","none_3b5e34d2":"بلا","paragraph_starting_with_start_a59923f8":"فقرة تبدأ بـ { start }","prev_f82cbc48":"السابق","remove_heading_style_5fdc8855":"إزالة نمط العنوان","row_fc0944a7":"صف","row_group_979f5528":"مجموعة الصف","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"لا يمكن لقارئات الشاشة تحديد المعروض في صورة بدون نص بديل وفي الغالب تكون أسماء الملفات سلسلة بلا معنى من الأرقام والأحرف التي لا تصف السياق أو المعنى.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"لا يمكن لقارئات الشاشة تحديد المعروض في صورة بدون نص بديل يصف محتوى الصورة ومعناها. يجب أن يكون النص البديل بسيطًا وموجزًا.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"لا يمكن لقارئات الشاشة تحديد المعروض في صورة بدون نص بديل يصف محتوى الصورة ومعناها.","screen_readers_cannot_interpret_tables_without_the_bd861652":"لا يمكن لقارئات الشاشة تفسير الجداول بدون بنية ملائمة. تزود رؤوس الجدول إرشادات ونطاقًا للمحتوى.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"لا يمكن لقارئات الشاشة تفسير الجداول بدون بنية ملائمة. تصف التسميات التوضيحية للجدول السياق والفهم العام للجدول.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"لا يمكن لقارئات الشاشة تفسير الجداول بدون بنية ملائمة. تزود رؤوس الجدول إرشادات ونظرة عامة على المحتوى.","set_header_scope_8c548f40":"تعيين نطاق الرأس","set_table_header_cfab13a0":"تعيين رأس الجدول","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"يتصفح المستخدمون الذين يتمتعون بالقدرة على الإبصار صفحات الويب بشكل سريع، بحثًا عن عناوين كبيرة أو بخط عريض. ويعتمد مستخدمو قارئة الشاشة على الرؤوس لفهم السياق. يجب أن توظف الرؤوس البنية الملائمة.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"يتصفح المستخدمون الذين يتمتعون بالقدرة على الإبصار صفحات الويب بشكل سريع، بحثًا عن عناوين كبيرة أو بخط عريض. ويعتمد مستخدمو قارئة الشاشة على الرؤوس لفهم السياق. يجب أن تكون الرؤوس موجزة في نطاق البنية الملائمة.","table_header_starting_with_start_ffcabba6":"يبدأ رأس الجدول بـ { start }","table_starting_with_start_e7232848":"يبدأ الجدول بـ { start }","tables_headers_should_specify_scope_5abf3a8e":"يجب أن تحدد رؤوس الجداول نطاقًا.","tables_should_include_a_caption_describing_the_con_e91e78fc":"يجب أن تتضمن الجداول تسمية توضيحية تصف محتويات الجدول.","tables_should_include_at_least_one_header_48779eac":"يجب أن تتضمن الجداول رأسًا واحدًا على الأقل.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"تصعب قراءة النص بدون درجة تباين كافية بين النص والخلفية، خاصةً لمن يعانون من ضعف الرؤية.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"يجب أن يعرض النص الأكبر من 18 نقطة (أو 14 نقطة بخط عريض) معدل تباين لا يقل عن 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"يجب أن يعرض النص الأصغر من 18 نقطة (أو 14 نقطة بخط عريض) معدل تباين لا يقل عن 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"عند استخدام العلامة التي تنسق العناصر في صورة قوائم  ولكنها لا تشير إلى علاقة القوائم، فقد يواجه المستخدمون صعوبة في التنقل بين المعلومات.","why_523b3d8c":"السبب"},"cy":{"accessibility_checker_b3af1f6c":"Gwiriwr Hygyrchedd","action_to_take_b626a99a":"Cam gweithredu i\'\'w gymryd:","add_a_caption_2a915239":"Ychwanegu capsiwn","add_alt_text_for_the_image_48cd88aa":"Ychwanegu testun amgen ar gyfer y ddelwedd","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Dylai dolenni cyfagos â’r un URL fod yn un ddolen.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Ni ddylai testun priodoli gynnwys mwy na 120 nod.","apply_781a2546":"Rhoi ar waith","change_alt_text_92654906":"Newid testun amgen","change_heading_tag_to_paragraph_a61e3113":"Newid tag y pennawd yn baragraff","change_text_color_1aecb912":"Newid lliw\'\'r testun","check_accessibility_3c78211c":"Gwirio Hygyrchedd","checking_for_accessibility_issues_fac18c6d":"Wrthi’n chwilio am broblemau o ran hygyrchedd","close_accessibility_checker_29d1c51e":"Cau\'\'r Gwiriwr Hygyrchedd","close_d634289d":"Cau","column_e1ae5c64":"Colofn","column_group_1c062368":"Grŵp y golofn","decorative_image_fde98579":"Delwedd addurniadol","element_starting_with_start_91bf4c3b":"Elfen yn dechrau gyda { start }","fix_heading_hierarchy_f60884c4":"Pennu hierarchaeth penawdau","format_as_a_list_142210c3":"Fformatio ar ffurf rhestr","header_column_f27433cb":"Colofn y pennawd","header_row_and_column_ec5b9ec":"Colofn a rhes y pennawd","header_row_f33eb169":"Rhes y pennawd","heading_levels_should_not_be_skipped_3947c0e0":"Ni ddylid anwybyddu lefelau penawdau.","heading_starting_with_start_42a3e7f9":"Pennawd yn dechrau gyda { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Ni ddylai penawdau gynnwys mwy na 120 nod.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Ni ddylid defnyddio enwau ffeiliau delweddau fel y nodwedd amgen wrth ddisgrifio cynnwys delweddau.","image_with_filename_file_aacd7180":"Delwedd â’r enw ffeil { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Dylai delweddau gynnwys nodwedd amgen sy’n disgrifio cynnwys y ddelwedd.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Mae bysellfyrddau’n symud i ddolenni drwy ddefnyddio’r fysell ‘Tab’. Gall dwy ddolen gyfagos â\'\'r un gyrchfan fod yn ddryslyd i ddefnyddwyr bysellfyrddau.","learn_more_about_adjacent_links_2cb9762c":"Dysgu mwy am ddolenni cyfagos","learn_more_about_color_contrast_c019dfb9":"Dysgu mwy am gyferbynnedd lliw","learn_more_about_organizing_page_headings_8a7caa2e":"Dysgu mwy am drefnu penawdau tudalennau","learn_more_about_table_headers_5f5ee13":"Dysgu mwy am benawdau tablau","learn_more_about_using_alt_text_for_images_5698df9a":"Dysgu mwy am ddefnyddio testun amgen ar gyfer delweddau","learn_more_about_using_captions_with_tables_36fe496f":"Dysgu mwy am ddefnyddio capsiynau gyda thablau","learn_more_about_using_filenames_as_alt_text_264286af":"Dysgu mwy am ddefnyddio enwau ffeiliau fel testun amgen","learn_more_about_using_lists_4e6eb860":"Dysgu mwy am ddefnyddio rhestrau","learn_more_about_using_scope_attributes_with_table_20df49aa":"Dysgu mwy am ddefnyddio priodoleddau cwmpas gyda thablau","leave_as_is_4facfe55":"Gadael fel y mae","link_with_text_starting_with_start_b3fcbe71":"Dolen â thestun yn dechrau gyda { start }","lists_should_be_formatted_as_lists_f862de8d":"Dylai rhestrau gael eu fformatio ar ffurf rhestrau.","merge_links_2478df96":"Cyfuno dolenni","next_40e12421":"Nesaf","no_accessibility_issues_were_detected_f8d3c875":"Heb ganfod problemau o ran hygyrchedd.","no_headers_9bc7dc7f":"Dim pennawd","none_3b5e34d2":"Dim","paragraph_starting_with_start_a59923f8":"Paragraff yn dechrau gyda { start }","prev_f82cbc48":"Blaenorol","remove_heading_style_5fdc8855":"Tynnu arddull y pennawd","row_fc0944a7":"Rhes","row_group_979f5528":"Grŵp y rhes","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Does dim modd defnyddio darllenwyr sgrin i bennu beth sy’n cael ei ddangos mewn delwedd heb destun amgen, dim ond rhesi o rifau a llythrennau diystyr yw enwau ffeiliau yn aml, ac nid ydynt yn disgrifio\'\'r cyd-destun na’r ystyr.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Does dim modd i ddarllenwyr sgrin bennu beth sy’n cael ei ddangos mewn delwedd heb destun amgen, sy’n disgrifio cynnwys ac ystyr y ddelwedd. Dylai’r testun amgen fod ym syml ac yn gryno.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Does dim modd i ddarllenwyr sgrin bennu beth sy’n cael ei ddangos mewn delwedd heb destun amgen, sy’n disgrifio cynnwys ac ystyr y ddelwedd.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Ni all darllenwyr sgrin ddehongli tablau heb y strwythur priodol. Mae penawdau tablau yn nodi cyfeiriad ac ystod y cynnwys.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Ni all darllenwyr sgrin ddehongli tablau heb y strwythur priodol. Mae capsiynau tablau’n disgrifio cyd-destun y tabl ac yn rhoi dealltwriaeth gyffredinol ohono.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Ni all darllenwyr sgrin ddehongli tablau heb y strwythur priodol. Mae penawdau tablau yn rhoi trosolwg o’r cynnwys a’i gyfeiriad.","set_header_scope_8c548f40":"Pennu ystod y pennawd","set_table_header_cfab13a0":"Pennu pennawd y tabl","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Mae defnyddwyr sy\'\'n gweld yn dda yn pori drwy dudalennau gwe yn gyflym, gan chwilio am benawdau mawr neu drwm. Mae defnyddwyr darllenwyr sgrin yn dibynnu ar benawdau i ddeall y cyd-destun. Dylai penawdau ddefnyddio\'\'r strwythur priodol.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Mae defnyddwyr sy\'\'n gweld yn dda yn pori drwy dudalennau gwe yn gyflym, gan chwilio am benawdau mawr neu drwm. Mae defnyddwyr darllenydd sgrin yn dibynnu ar benawdau i ddeall y cyd-destun. Dylai penawdau fod yn gryno yn unol â\'\'r strwythur priodol.","table_header_starting_with_start_ffcabba6":"Pennawd tabl yn dechrau gyda { start }","table_starting_with_start_e7232848":"Tabl yn dechrau gyda { start }","tables_headers_should_specify_scope_5abf3a8e":"Dylai penawdau tablau bennu’r ystod.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Dylai tablau gynnwys capsiwn sy’n disgrifio cynnwys y tabl.","tables_should_include_at_least_one_header_48779eac":"Dylai tablau gynnwys o leiaf un pennawd.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Mae’r testun yn anodd ei ddarllen heb gyferbynnedd digonol rhwng y testun a’r cefndir, yn enwedig i bobl sydd â golwg sâl.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Dylai testun mwy na 18pt (neu 14pt trwm) fod â chyferbyniad 3:1 o leiaf.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Dylai testun llai na 18pt (neu 14pt trwm) fod â chyferbyniad 4.5:1 o leiaf.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Pan fydd marcio’n cael ei ddefnyddio, sy’n fformatio eitemau’n weledol ar ffurf rhestr ond sydd ddim yn nodi perthynas y rhestr, mae’n bosib y bydd defnyddwyr yn cael trafferth i ddod o hyd i’r wybodaeth.","why_523b3d8c":"Pam"},"da-x-k12":{"accessibility_checker_b3af1f6c":"Tilgægelighedskontrol","action_to_take_b626a99a":"Handling, der skal tages:","add_a_caption_2a915239":"Tilføj billedtekst","add_alt_text_for_the_image_48cd88aa":"Tilføj alternativ tekst til billedet","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Tilstødende links med samme URL skal være et enkelt link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alternativ attributtekst må ikke indeholde mere end 120 tegn.","apply_781a2546":"Tildel","change_alt_text_92654906":"Skift alternativ tekst","change_heading_tag_to_paragraph_a61e3113":"Skift overskrift-tag til afsnit","change_text_color_1aecb912":"Skift tekstfarve","check_accessibility_3c78211c":"Kontroller tilgængelighed","checking_for_accessibility_issues_fac18c6d":"Kontrollerer tilgængelighedsproblemer","close_accessibility_checker_29d1c51e":"Luk tilgægelighedskontrol","close_d634289d":"Luk","column_e1ae5c64":"Kolonne","column_group_1c062368":"Kolonnegruppe","decorative_image_fde98579":"Dekorativt billede","element_starting_with_start_91bf4c3b":"Element begynder med { start }","fix_heading_hierarchy_f60884c4":"Ret overskriftshierarki","format_as_a_list_142210c3":"Listeformat","header_column_f27433cb":"Overskriftskolonne","header_row_and_column_ec5b9ec":"Overskriftsrække- og kolonne","header_row_f33eb169":"Overskriftsrække","heading_levels_should_not_be_skipped_3947c0e0":"Overskriftsniveauer bør ikke springes over.","heading_starting_with_start_42a3e7f9":"Overskrift, der starter med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Overskrifter må ikke indeholde mere end 120 tegn.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Billedfilnavne bør ikke bruges som den alternative attribut, der beskriver billedindholdet.","image_with_filename_file_aacd7180":"Billede med filnavn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Billeder skal indeholde en alternativ attribut, der beskriver billedindholdet.","issue_num_total_f94536cf":"Udstedelse { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastaturer navigerer til links ved hjælp af Tab-tasten. To tilstødende links, der fører til samme destination, kan være forvirrende for tastaturbrugere.","learn_more_about_adjacent_links_2cb9762c":"Få mere at vide om tilstødende links","learn_more_about_color_contrast_c019dfb9":"Få mere at vide om farvekontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Få mere at vide om at organisere sideoverskrifter","learn_more_about_table_headers_5f5ee13":"Få mere at vide om tabeloverskrifter","learn_more_about_using_alt_text_for_images_5698df9a":"Få mere at vide om at bruge alt-tekst til billeder","learn_more_about_using_captions_with_tables_36fe496f":"Få mere at vide om brug af billedtekster med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Få mere at vide om at bruge filnavne som alt-tekst","learn_more_about_using_lists_4e6eb860":"Få mere at vide om at bruge lister","learn_more_about_using_scope_attributes_with_table_20df49aa":"Få mere at vide om at bruge anvendelsesområde-attributter med tabeller","leave_as_is_4facfe55":"Lad det være, som det er","link_with_text_starting_with_start_b3fcbe71":"Link med tekst, der begynder med { start }","lists_should_be_formatted_as_lists_f862de8d":"Lister skal have listeformat.","merge_links_2478df96":"Sammenlæg links","next_40e12421":"Næste","no_accessibility_issues_were_detected_f8d3c875":"Der blev ikke fundet nogen tilgængelighedsproblemer.","no_headers_9bc7dc7f":"Ingen overskrifter","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Paragraf begynder med { start }","prev_f82cbc48":"Forrige","remove_heading_style_5fdc8855":"Fjern overskriftsstil","row_fc0944a7":"Række","row_group_979f5528":"Rækkegruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, og filnavne er ofte en meningsløs række tal og bogstaver, der ikke beskriver konteksten eller betydningen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, der beskriver billedets indhold og betydning. Alternativ tekst skal være enkel og kortfattet.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, der beskriver billedets indhold og betydning.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabeloverskrifter giver en ide om indholdet og dets omfang.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabelbetegnelser beskriver tabellens kontekst og generelle indhold.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabeloverskrifter giver en ide om indholdet og en oversigt over det.","set_header_scope_8c548f40":"Indstil overskriftens omfang","set_table_header_cfab13a0":"Indstil tabellens overskrift","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Brugere, der er i stand til at se, gennemser websider hurtigt og leder efter store overskrifter. Skærmlæsere er afhængige af overskrifter for kontekstuel forståelse. Overskrifter bør anvende den rigtige struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Brugere, der er i stand til at se, gennemser websider hurtigt og leder efter store overskrifter. Skærmlæsere er afhængige af overskrifter for kontekstuel forståelse. Overskrifter bør være kortfattede inden for den rigtige struktur.","table_header_starting_with_start_ffcabba6":"Tabeloverskrift, der starter med { start }","table_starting_with_start_e7232848":"Tabel, der starter med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabeloverskrifter skal angive omfang.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller skal indeholde en billedtekst, der beskriver tabellens indhold.","tables_should_include_at_least_one_header_48779eac":"Tabeller skal indeholde mindst et overskrift.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Tekst er vanskelig at læse uden tilstrækkelig kontrast mellem tekst og baggrund, især for personer med dårligt syn.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst større end 18pt (eller fed 14pt) skal have et kontrastforhold på mindst 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst mindre end 18pt (eller fed 14pt) skal have et kontrastforhold på mindst 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Når der anvendes fremhævelse, der visuelt formaterer elementer i listeform, men som ikke angiver listeforholdet, kan brugere have svært ved at navigere gennem oplysningerne.","why_523b3d8c":"Hvorfor"},"da":{"accessibility_checker_b3af1f6c":"Tilgægelighedskontrol","action_to_take_b626a99a":"Handling, der skal tages:","add_a_caption_2a915239":"Tilføj billedtekst","add_alt_text_for_the_image_48cd88aa":"Tilføj alternativ tekst til billedet","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Tilstødende links med samme URL skal være et enkelt link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alternativ attributtekst må ikke indeholde mere end 120 tegn.","apply_781a2546":"Tildel","change_alt_text_92654906":"Skift alternativ tekst","change_heading_tag_to_paragraph_a61e3113":"Skift overskrift-tag til afsnit","change_text_color_1aecb912":"Skift tekstfarve","check_accessibility_3c78211c":"Kontroller tilgængelighed","checking_for_accessibility_issues_fac18c6d":"Kontrollerer tilgængelighedsproblemer","close_accessibility_checker_29d1c51e":"Luk tilgægelighedskontrol","close_d634289d":"Luk","column_e1ae5c64":"Kolonne","column_group_1c062368":"Kolonnegruppe","decorative_image_fde98579":"Dekorativt billede","element_starting_with_start_91bf4c3b":"Element begynder med { start }","fix_heading_hierarchy_f60884c4":"Ret overskriftshierarki","format_as_a_list_142210c3":"Listeformat","header_column_f27433cb":"Overskriftskolonne","header_row_and_column_ec5b9ec":"Overskriftsrække- og kolonne","header_row_f33eb169":"Overskriftsrække","heading_levels_should_not_be_skipped_3947c0e0":"Overskriftsniveauer bør ikke springes over.","heading_starting_with_start_42a3e7f9":"Overskrift, der starter med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Overskrifter må ikke indeholde mere end 120 tegn.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Billedfilnavne bør ikke bruges som den alternative attribut, der beskriver billedindholdet.","image_with_filename_file_aacd7180":"Billede med filnavn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Billeder skal indeholde en alternativ attribut, der beskriver billedindholdet.","issue_num_total_f94536cf":"Udstedelse { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastaturer navigerer til links ved hjælp af Tab-tasten. To tilstødende links, der fører til samme destination, kan være forvirrende for tastaturbrugere.","learn_more_about_adjacent_links_2cb9762c":"Få mere at vide om tilstødende links","learn_more_about_color_contrast_c019dfb9":"Få mere at vide om farvekontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Få mere at vide om at organisere sideoverskrifter","learn_more_about_table_headers_5f5ee13":"Få mere at vide om tabeloverskrifter","learn_more_about_using_alt_text_for_images_5698df9a":"Få mere at vide om at bruge alt-tekst til billeder","learn_more_about_using_captions_with_tables_36fe496f":"Få mere at vide om brug af billedtekster med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Få mere at vide om at bruge filnavne som alt-tekst","learn_more_about_using_lists_4e6eb860":"Få mere at vide om at bruge lister","learn_more_about_using_scope_attributes_with_table_20df49aa":"Få mere at vide om at bruge anvendelsesområde-attributter med tabeller","leave_as_is_4facfe55":"Lad det være, som det er","link_with_text_starting_with_start_b3fcbe71":"Link med tekst, der begynder med { start }","lists_should_be_formatted_as_lists_f862de8d":"Lister skal have listeformat.","merge_links_2478df96":"Sammenlæg links","next_40e12421":"Næste","no_accessibility_issues_were_detected_f8d3c875":"Der blev ikke fundet nogen tilgængelighedsproblemer.","no_headers_9bc7dc7f":"Ingen overskrifter","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Paragraf begynder med { start }","prev_f82cbc48":"Forrige","remove_heading_style_5fdc8855":"Fjern overskriftsstil","row_fc0944a7":"Række","row_group_979f5528":"Rækkegruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, og filnavne er ofte en meningsløs række tal og bogstaver, der ikke beskriver konteksten eller betydningen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, der beskriver billedets indhold og betydning. Alternativ tekst skal være enkel og kortfattet.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skærmlæsere kan ikke bestemme, hvad der vises i et billede uden alternativ tekst, der beskriver billedets indhold og betydning.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabeloverskrifter giver en ide om indholdet og dets omfang.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabelbetegnelser beskriver tabellens kontekst og generelle indhold.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skærmlæsere kan ikke fortolke tabeller uden den rette struktur. Tabeloverskrifter giver en ide om indholdet og en oversigt over det.","set_header_scope_8c548f40":"Indstil overskriftens omfang","set_table_header_cfab13a0":"Indstil tabellens overskrift","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Brugere, der er i stand til at se, gennemser websider hurtigt og leder efter store overskrifter. Skærmlæsere er afhængige af overskrifter for kontekstuel forståelse. Overskrifter bør anvende den rigtige struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Brugere, der er i stand til at se, gennemser websider hurtigt og leder efter store overskrifter. Skærmlæsere er afhængige af overskrifter for kontekstuel forståelse. Overskrifter bør være kortfattede inden for den rigtige struktur.","table_header_starting_with_start_ffcabba6":"Tabeloverskrift, der starter med { start }","table_starting_with_start_e7232848":"Tabel, der starter med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabeloverskrifter skal angive omfang.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller skal indeholde en billedtekst, der beskriver tabellens indhold.","tables_should_include_at_least_one_header_48779eac":"Tabeller skal indeholde mindst et overskrift.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Tekst er vanskelig at læse uden tilstrækkelig kontrast mellem tekst og baggrund, især for personer med dårligt syn.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst større end 18pt (eller fed 14pt) skal have et kontrastforhold på mindst 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst mindre end 18pt (eller fed 14pt) skal have et kontrastforhold på mindst 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Når der anvendes fremhævelse, der visuelt formaterer elementer i listeform, men som ikke angiver listeforholdet, kan brugere have svært ved at navigere gennem oplysningerne.","why_523b3d8c":"Hvorfor"},"de":{"accessibility_checker_b3af1f6c":"Zugangskontrolle","action_to_take_b626a99a":"Auszuführende Tätigkeiten:","add_a_caption_2a915239":"Eine Beschriftung hinzufügen","add_alt_text_for_the_image_48cd88aa":"Alternativen Text für das Bild hinzufügen","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Nebenstehende Links mit dem gleichen URL sollten ein einziger Link sein.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Der alternative Text sollte nicht länger als 120 Zeichen sein.","apply_781a2546":"Anwenden","change_alt_text_92654906":"Alt. Text ändern","change_heading_tag_to_paragraph_a61e3113":"Überschrifts-Tag zu Absatz ändern","change_text_color_1aecb912":"Textfarbe ändern","check_accessibility_3c78211c":"Zugänglichkeit prüfen","checking_for_accessibility_issues_fac18c6d":"Zugangsprobleme werden überprüft","close_accessibility_checker_29d1c51e":"Zugangsprüfung schließen","close_d634289d":"Schließen","column_e1ae5c64":"Spalte","column_group_1c062368":"Spaltengruppe","decorative_image_fde98579":"Dekoratives Bild","element_starting_with_start_91bf4c3b":"Element beginnt mit { start }","fix_heading_hierarchy_f60884c4":"Feste Überschriftshierarchie","format_as_a_list_142210c3":"Format als Liste","header_column_f27433cb":"Überschrift Spalte","header_row_and_column_ec5b9ec":"Überschrift Zeile und Spalte","header_row_f33eb169":"Überschrift Zeile","heading_levels_should_not_be_skipped_3947c0e0":"Die Überschriftsebene darf nicht übersprungen werden.","heading_starting_with_start_42a3e7f9":"Überschrift beginnt mit { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Überschriften dürfen nicht länger als 120 Zeichen sein.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bilddateinamen dürfen für das Alt-Attribut zur Beschreibung des Bildinhalts nicht verwendet werden.","image_with_filename_file_aacd7180":"Bild mit dem Dateinamen { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder müssen ein Alt-Attribut zur Beschreibung des Bildinhalts haben.","issue_num_total_f94536cf":"Fehler { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastaturnavigation zu Links mithilfe der Tabulatortaste. Zwei benachbarte Links, die direkt zum gleichen Ziel führen, können für den Tastaturbenutzer verwirrend sein.","learn_more_about_adjacent_links_2cb9762c":"Weitere Informationen über nebenstehende Links","learn_more_about_color_contrast_c019dfb9":"Weitere Informationen über Farbkontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Weitere Informationen über das Organisieren der Seitenüberschriften","learn_more_about_table_headers_5f5ee13":"Weitere Informationen über Tabellenkopfzeilen","learn_more_about_using_alt_text_for_images_5698df9a":"Weitere Informationen zur Verwendung von alternativem Text für Bilder","learn_more_about_using_captions_with_tables_36fe496f":"Weitere Informationen zur Verwendung von Tabellenbeschriftungen","learn_more_about_using_filenames_as_alt_text_264286af":"Weitere Informationen zur Verwendung von Dateinamen als alternativen Text","learn_more_about_using_lists_4e6eb860":"Weitere Informationen zur Verwendung von Listen","learn_more_about_using_scope_attributes_with_table_20df49aa":"Weitere Informationen zur Verwendung von Bereichsattributen bei Tabellen","leave_as_is_4facfe55":"Lassen, wie es ist","link_with_text_starting_with_start_b3fcbe71":"Link mit Text, beginnend mit { start }","lists_should_be_formatted_as_lists_f862de8d":"Listen sollten als Listen formatiert werden.","merge_links_2478df96":"Links zusammenführen","next_40e12421":"Weiter","no_accessibility_issues_were_detected_f8d3c875":"Es wurden keine Zugangsprobleme festgestellt.","no_headers_9bc7dc7f":"Keine Header","none_3b5e34d2":"Keine","paragraph_starting_with_start_a59923f8":"Absatz, beginnend mit { start }","prev_f82cbc48":"Vorher","remove_heading_style_5fdc8855":"Überschriftsstil entfernen","row_fc0944a7":"Zeile","row_group_979f5528":"Zeilengruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Ohne alternativen Text kann ein Bildschirmbetrachter nicht bestimmen, was auf einem Bild gezeigt wird, zumal die Dateinamen oft sinnlose Zeichenfolgen aus Zahlen und Buchstaben sind, die weder den Kontext noch die Bedeutung erläutern.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Ohne alternativen Text, der den Kontext und die Bedeutung erläutert, kann ein Bildschirmbetrachter nicht bestimmen, was auf einem Bild gezeigt wird. Alternativer Text sollte einfach und präzise sein.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Ohne alternativen Text, der den Kontext und die Bedeutung erläutert, kann ein Bildschirmbetrachter nicht bestimmen, was auf einem Bild gezeigt wird.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Bildschirmbetrachter können Tabellen ohne die entsprechende Struktur nicht interpretieren. Tabellenüberschriften liefern die Richtung und den Anwendungsbereich des Inhalts.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Bildschirmbetrachter können Tabellen ohne die entsprechende Struktur nicht interpretieren. Tabellenbeschriftungen beschreiben den Kontext und die allgemeine Bedeutung der Tabelle.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Bildschirmbetrachter können Tabellen ohne die entsprechende Struktur nicht interpretieren. Tabellenüberschriften weisen die Richtung und geben eine Übersicht über den Inhalt.","set_header_scope_8c548f40":"Den Anwendungsbereich der Überschrift festlegen","set_table_header_cfab13a0":"Tabellenüberschrift festlegen","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Sehende Benutzer durchsuchen Webseiten schnell nach groß- oder fettgedruckten Überschriften. Benutzer von Bildschirmbetrachtern sind für ein kontextbezogenes Verständnis auf Überschriften angewiesen. Überschriften sollten die entsprechende Struktur verwenden.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Sehende Benutzer durchsuchen Webseiten schnell nach groß- oder fettgedruckten Überschriften. Benutzer von Bildschirmbetrachtern sind für ein kontextbezogenes Verständnis auf Überschriften angewiesen. Überschriften sollten die entsprechende Struktur knapp wiedergeben.","table_header_starting_with_start_ffcabba6":"Tabellenüberschriften, beginnend mit { start }","table_starting_with_start_e7232848":"Tabelle, beginnend mit { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabellenüberschriften sollten den Geltungsbereich angeben.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabellen sollten über eine Bildunterschrift verfügen, die den Inhalt der Tabelle beschreibt.","tables_should_include_at_least_one_header_48779eac":"Tabellen sollten mindestens eine Überschrift haben.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Der Text ist, insbesondere für Menschen mit Sehschwäche, schwer zu lesen, wenn der Kontrast zwischen Text und Hintergrund nicht ausreicht.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text, der größer als 18 Punkte ist (bei Fettdruck 14 Punkte), sollte einen Mindestkontrastverhältnis von 3:1 haben.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text, der kleiner als 18 Punkte ist (bei Fettdruck 14 Punkte), sollte einen Mindestkontrastverhältnis von 4,5:1 haben.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Wenn Markup verwendet wird, das die Elemente optisch als Liste formatiert, die Listenbeziehung jedoch nicht zeigt, haben Benutzer möglicherweise Schwierigkeiten, in diesen Informationen zu navigieren.","why_523b3d8c":"Warum?"},"en-AU":{"accessibility_checker_b3af1f6c":"Accessibility Checker","action_to_take_b626a99a":"Action to take:","add_a_caption_2a915239":"Add a caption","add_alt_text_for_the_image_48cd88aa":"Add alt text for the image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Adjacent links with the same URL should be a single link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attribute text should not contain more than 120 characters.","apply_781a2546":"Apply","change_alt_text_92654906":"Change alt text","change_heading_tag_to_paragraph_a61e3113":"Change heading tag to paragraph","change_text_color_1aecb912":"Change text colour","check_accessibility_3c78211c":"Check Accessibility","checking_for_accessibility_issues_fac18c6d":"Checking for accessibility issues","close_accessibility_checker_29d1c51e":"Close Accessibility Checker","close_d634289d":"Close","column_e1ae5c64":"Column","column_group_1c062368":"Column group","decorative_image_fde98579":"Decorative image","element_starting_with_start_91bf4c3b":"Element starting with { start }","fix_heading_hierarchy_f60884c4":"Fix heading hierarchy","format_as_a_list_142210c3":"Format as a list","header_column_f27433cb":"Header column","header_row_and_column_ec5b9ec":"Header row and column","header_row_f33eb169":"Header row","heading_levels_should_not_be_skipped_3947c0e0":"Heading levels should not be skipped.","heading_starting_with_start_42a3e7f9":"Heading starting with { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Headings should not contain more than 120 characters.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Image filenames should not be used as the alt attribute describing the image content.","image_with_filename_file_aacd7180":"Image with filename { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Images should include an alt attribute describing the image content.","issue_num_total_f94536cf":"Issue { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Keyboards navigate to links using the Tab key. Two adjacent links that direct to the same destination can be confusing to keyboard users.","learn_more_about_adjacent_links_2cb9762c":"Learn more about adjacent links","learn_more_about_color_contrast_c019dfb9":"Learn more about colour contrast","learn_more_about_organizing_page_headings_8a7caa2e":"Learn more about organising page headings","learn_more_about_table_headers_5f5ee13":"Learn more about table headers","learn_more_about_using_alt_text_for_images_5698df9a":"Learn more about using alt text for images","learn_more_about_using_captions_with_tables_36fe496f":"Learn more about using captions with tables","learn_more_about_using_filenames_as_alt_text_264286af":"Learn more about using filenames as alt text","learn_more_about_using_lists_4e6eb860":"Learn more about using lists","learn_more_about_using_scope_attributes_with_table_20df49aa":"Learn more about using scope attributes with tables","leave_as_is_4facfe55":"Leave as is","link_with_text_starting_with_start_b3fcbe71":"Link with text starting with { start }","lists_should_be_formatted_as_lists_f862de8d":"Lists should be formatted as lists.","merge_links_2478df96":"Merge links","next_40e12421":"Next","no_accessibility_issues_were_detected_f8d3c875":"No accessibility issues were detected.","no_headers_9bc7dc7f":"No headers","none_3b5e34d2":"None","paragraph_starting_with_start_a59923f8":"Paragraph starting with { start }","prev_f82cbc48":"Prev","remove_heading_style_5fdc8855":"Remove heading style","row_fc0944a7":"Row","row_group_979f5528":"Row group","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Screen readers cannot determine what is displayed in an image without alternative text, and filenames are often meaningless strings of numbers and letters that do not describe the context or meaning.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Screen readers cannot determine what is displayed in an image without alternative text which describes the content and meaning of the image. Alternative text should be simple and concise.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Screen readers cannot determine what is displayed in an image without alternative text that describes the content and meaning of the image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and content scope.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Screen readers cannot interpret tables without the proper structure. Table captions describe the context and general understanding of the table.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and overview of the content.","set_header_scope_8c548f40":"Set header scope","set_table_header_cfab13a0":"Set table header","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should use the proper structure.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should be concise within the proper structure.","table_header_starting_with_start_ffcabba6":"Table header starting with { start }","table_starting_with_start_e7232848":"Table starting with { start }","tables_headers_should_specify_scope_5abf3a8e":"Table headers should specify scope.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tables should include a caption describing the contents of the table.","tables_should_include_at_least_one_header_48779eac":"Tables should include at least one header.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text larger than 18pt (or bold 14pt) should display a minimum contrast ratio of 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text smaller than 18pt (or bold 14pt) should display a minimum contrast ratio of 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"When markup is used that visually formats items as a list but does not indicate the list relationship, users may have difficulty in navigating the information.","why_523b3d8c":"Why"},"en-GB":{"accessibility_checker_b3af1f6c":"Accessibility checker","action_to_take_b626a99a":"Action to take:","add_a_caption_2a915239":"Add a caption","add_alt_text_for_the_image_48cd88aa":"Add alt text for the image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Adjacent links with the same URL should be a single link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attribute text should not contain more than 120 characters.","apply_781a2546":"Apply","change_alt_text_92654906":"Change alt text","change_heading_tag_to_paragraph_a61e3113":"Change heading tag to paragraph","change_text_color_1aecb912":"Change text colour","check_accessibility_3c78211c":"Check accessibility","checking_for_accessibility_issues_fac18c6d":"Checking for accessibility issues","close_accessibility_checker_29d1c51e":"Close accessibility checker","close_d634289d":"Close","column_e1ae5c64":"Column","column_group_1c062368":"Column group","decorative_image_fde98579":"Decorative image","element_starting_with_start_91bf4c3b":"Element starting with { start }","fix_heading_hierarchy_f60884c4":"Fix heading hierarchy","format_as_a_list_142210c3":"Format as a list","header_column_f27433cb":"Header column","header_row_and_column_ec5b9ec":"Header row and column","header_row_f33eb169":"Header row","heading_levels_should_not_be_skipped_3947c0e0":"Heading levels should not be skipped.","heading_starting_with_start_42a3e7f9":"Heading starting with { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Headings should not contain more than 120 characters.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Image filenames should not be used as the alt attribute describing the image content.","image_with_filename_file_aacd7180":"Image with filename { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Images should include an alt attribute describing the image content.","issue_num_total_f94536cf":"Issue { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Keyboards navigate to links using the Tab key. Two adjacent links that direct to the same destination can be confusing to keyboard users.","learn_more_about_adjacent_links_2cb9762c":"Learn more about adjacent links","learn_more_about_color_contrast_c019dfb9":"Learn more about colour contrast","learn_more_about_organizing_page_headings_8a7caa2e":"Learn more about organising page headings","learn_more_about_table_headers_5f5ee13":"Learn more about table headers","learn_more_about_using_alt_text_for_images_5698df9a":"Learn more about using alt text for images","learn_more_about_using_captions_with_tables_36fe496f":"Learn more about using captions with tables","learn_more_about_using_filenames_as_alt_text_264286af":"Learn more about using filenames as alt text","learn_more_about_using_lists_4e6eb860":"Learn more about using lists","learn_more_about_using_scope_attributes_with_table_20df49aa":"Learn more about using scope attributes with tables","leave_as_is_4facfe55":"Leave as is","link_with_text_starting_with_start_b3fcbe71":"Link with text starting with { start }","lists_should_be_formatted_as_lists_f862de8d":"Lists should be formatted as lists.","merge_links_2478df96":"Merge links","next_40e12421":"Next","no_accessibility_issues_were_detected_f8d3c875":"No accessibility issues were detected.","no_headers_9bc7dc7f":"No headers","none_3b5e34d2":"None","paragraph_starting_with_start_a59923f8":"Paragraph starting with { start }","prev_f82cbc48":"Prev","remove_heading_style_5fdc8855":"Remove heading style","row_fc0944a7":"Row","row_group_979f5528":"Row group","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Screen readers cannot determine what is displayed in an image without alternative text, and filenames are often meaningless strings of numbers and letters that do not describe the context or meaning.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image. Alternative text should be simple and concise.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and content scope.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Screen readers cannot interpret tables without the proper structure. Table captions describe the context and general understanding of the table.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and overview of the content.","set_header_scope_8c548f40":"Set header scope","set_table_header_cfab13a0":"Set table header","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should use the proper structure.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should be concise within the proper structure.","table_header_starting_with_start_ffcabba6":"Table header starting with { start }","table_starting_with_start_e7232848":"Table starting with { start }","tables_headers_should_specify_scope_5abf3a8e":"Tables headers should specify scope.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tables should include a caption describing the contents of the table.","tables_should_include_at_least_one_header_48779eac":"Tables should include at least one header.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text larger than 18pt (or bold 14pt) should display a minimum contrast ratio of 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text smaller than 18pt (or bold 14pt) should display a minimum contrast ratio of 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"When mark-up is used, it visually formats items as a list but does not indicate the list relationship, users may have difficulty in navigating the information.","why_523b3d8c":"Why"},"en":{"accessibility_checker_b3af1f6c":"Accessibility Checker","action_to_take_b626a99a":"Action to take:","add_a_caption_2a915239":"Add a caption","add_alt_text_for_the_image_48cd88aa":"Add alt text for the image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Adjacent links with the same URL should be a single link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attribute text should not contain more than 120 characters.","apply_781a2546":"Apply","change_alt_text_92654906":"Change alt text","change_heading_tag_to_paragraph_a61e3113":"Change heading tag to paragraph","change_text_color_1aecb912":"Change text color","check_accessibility_3c78211c":"Check Accessibility","checking_for_accessibility_issues_fac18c6d":"Checking for accessibility issues","close_accessibility_checker_29d1c51e":"Close Accessibility Checker","close_d634289d":"Close","column_e1ae5c64":"Column","column_group_1c062368":"Column group","decorative_image_fde98579":"Decorative image","element_starting_with_start_91bf4c3b":"Element starting with { start }","fix_heading_hierarchy_f60884c4":"Fix heading hierarchy","format_as_a_list_142210c3":"Format as a list","header_column_f27433cb":"Header column","header_row_and_column_ec5b9ec":"Header row and column","header_row_f33eb169":"Header row","heading_levels_should_not_be_skipped_3947c0e0":"Heading levels should not be skipped.","heading_starting_with_start_42a3e7f9":"Heading starting with { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Headings should not contain more than 120 characters.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Image filenames should not be used as the alt attribute describing the image content.","image_with_filename_file_aacd7180":"Image with filename { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Images should include an alt attribute describing the image content.","issue_num_total_f94536cf":"Issue { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Keyboards navigate to links using the Tab key. Two adjacent links that direct to the same destination can be confusing to keyboard users.","learn_more_about_adjacent_links_2cb9762c":"Learn more about adjacent links","learn_more_about_color_contrast_c019dfb9":"Learn more about color contrast","learn_more_about_organizing_page_headings_8a7caa2e":"Learn more about organizing page headings","learn_more_about_table_headers_5f5ee13":"Learn more about table headers","learn_more_about_using_alt_text_for_images_5698df9a":"Learn more about using alt text for images","learn_more_about_using_captions_with_tables_36fe496f":"Learn more about using captions with tables","learn_more_about_using_filenames_as_alt_text_264286af":"Learn more about using filenames as alt text","learn_more_about_using_lists_4e6eb860":"Learn more about using lists","learn_more_about_using_scope_attributes_with_table_20df49aa":"Learn more about using scope attributes with tables","leave_as_is_4facfe55":"Leave as is","link_with_text_starting_with_start_b3fcbe71":"Link with text starting with { start }","lists_should_be_formatted_as_lists_f862de8d":"Lists should be formatted as lists.","merge_links_2478df96":"Merge links","next_40e12421":"Next","no_accessibility_issues_were_detected_f8d3c875":"No accessibility issues were detected.","no_headers_9bc7dc7f":"No headers","none_3b5e34d2":"None","paragraph_starting_with_start_a59923f8":"Paragraph starting with { start }","prev_f82cbc48":"Prev","remove_heading_style_5fdc8855":"Remove heading style","row_fc0944a7":"Row","row_group_979f5528":"Row group","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Screen readers cannot determine what is displayed in an image without alternative text, and filenames are often meaningless strings of numbers and letters that do not describe the context or meaning.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image. Alternative text should be simple and concise.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and content scope.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Screen readers cannot interpret tables without the proper structure. Table captions describe the context and general understanding of the table.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Screen readers cannot interpret tables without the proper structure. Table headers provide direction and overview of the content.","set_header_scope_8c548f40":"Set header scope","set_table_header_cfab13a0":"Set table header","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should use the proper structure.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Sighted users browse web pages quickly, looking for large or bolded headings. Screen reader users rely on headers for contextual understanding. Headers should be concise within the proper structure.","table_header_starting_with_start_ffcabba6":"Table header starting with { start }","table_starting_with_start_e7232848":"Table starting with { start }","tables_headers_should_specify_scope_5abf3a8e":"Tables headers should specify scope.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tables should include a caption describing the contents of the table.","tables_should_include_at_least_one_header_48779eac":"Tables should include at least one header.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text larger than 18pt (or bold 14pt) should display a minimum contrast ratio of 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text smaller than 18pt (or bold 14pt) should display a minimum contrast ratio of 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"When markup is used that visually formats items as a list but does not indicate the list relationship, users may have difficulty in navigating the information.","why_523b3d8c":"Why"},"es":{"accessibility_checker_b3af1f6c":"Verificador de accesibilidad","action_to_take_b626a99a":"Acción a tomar:","add_a_caption_2a915239":"Agregar un subtítulo","add_alt_text_for_the_image_48cd88aa":"Agregar texto alternativo para la imagen","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Los enlaces adyacentes con la misma URL deben ser un solo enlace.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"El texto del atributo alt no debe tener más de 120 caracteres.","apply_781a2546":"Aplicar","change_alt_text_92654906":"Texto alternativo de la imagen","change_heading_tag_to_paragraph_a61e3113":"Cambiar etiqueta del título a párrafo","change_text_color_1aecb912":"Cambiar color del texto","check_accessibility_3c78211c":"Cambiar accesibilidad","checking_for_accessibility_issues_fac18c6d":"Comprobando problemas de accesibilidad","close_accessibility_checker_29d1c51e":"Cerrar verificador de accesibilidad","close_d634289d":"Cerrar","column_e1ae5c64":"Columna","column_group_1c062368":"Grupo de columnas","decorative_image_fde98579":"Imagen decorativa","element_starting_with_start_91bf4c3b":"Elemento que comienza con { start }","fix_heading_hierarchy_f60884c4":"Fijar jerarquía de títulos","format_as_a_list_142210c3":"Formatear como lista","header_column_f27433cb":"Columna de encabezado","header_row_and_column_ec5b9ec":"Fila y columna de encabezado","header_row_f33eb169":"Fila de encabezado","heading_levels_should_not_be_skipped_3947c0e0":"Los niveles de los títulos no deben omitirse.","heading_starting_with_start_42a3e7f9":"Título que comienza con { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Los títulos no deben tener más de 120 caracteres.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Los nombres de archivo de las imágenes no deben usarse como el atributo alt que describe el contenido de la imagen.","image_with_filename_file_aacd7180":"Imagen con nombre de archivo { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Las imágenes deben incluir un atributo alt que describa el contenido de la imagen.","issue_num_total_f94536cf":"Problema { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Los teclados navegan por los enlaces mediante la tecla Tab. Dos enlaces adyacentes que dirigen al mismo destino pueden ser confusos para los usuarios del teclado.","learn_more_about_adjacent_links_2cb9762c":"Obtenga más información sobre los enlaces adyacentes","learn_more_about_color_contrast_c019dfb9":"Obtenga más información sobre el contraste de colores","learn_more_about_organizing_page_headings_8a7caa2e":"Obtenga más información sobre la organización de los títulos de página","learn_more_about_table_headers_5f5ee13":"Obtenga más información sobre los títulos de tablas","learn_more_about_using_alt_text_for_images_5698df9a":"Obtenga más información sobre texto alternativo para las imágenes","learn_more_about_using_captions_with_tables_36fe496f":"Obtenga más información sobre el uso de leyendas con tablas","learn_more_about_using_filenames_as_alt_text_264286af":"Obtenga más información sobre el uso de nombres de archivo como texto alternativo","learn_more_about_using_lists_4e6eb860":"Obtenga más información sobre el uso de listas","learn_more_about_using_scope_attributes_with_table_20df49aa":"Obtenga más información sobre el uso de atributos de alcance con tablas","leave_as_is_4facfe55":"Dejar sin cambios","link_with_text_starting_with_start_b3fcbe71":"Vincular con texto que comienza con { start }","lists_should_be_formatted_as_lists_f862de8d":"Las listas deben tener el formato de listas.","merge_links_2478df96":"Fusionar enlaces","next_40e12421":"Siguiente","no_accessibility_issues_were_detected_f8d3c875":"No se detectaron problemas de accesibilidad.","no_headers_9bc7dc7f":"Sin encabezados","none_3b5e34d2":"Ninguno","paragraph_starting_with_start_a59923f8":"Párrafo que comienza con { start }","prev_f82cbc48":"Previo","remove_heading_style_5fdc8855":"Eliminar estilo del título","row_fc0944a7":"Fila","row_group_979f5528":"Grupo de filas","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Los lectores de pantalla no pueden determinar lo que se muestra en una imagen sin texto alternativo, y los nombres de archivo con frecuencia son secuencias de números y letras sin sentido que no describen el contexto o significado.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Los lectores de pantalla no pueden determinar lo que se muestra en una imagen sin texto alternativo, el cual describe el contexto y el significado de la imagen. El texto alternativo debe ser simple y conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Los lectores de pantalla no pueden determinar lo que se muestra en una imagen sin texto alternativo, el cual describe el contexto y el significado de la imagen.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Los lectores de pantalla no pueden interpretar tablas sin la estructura apropiada. Los encabezados de tablas brindan orientación y el alcance del contenido.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Los lectores de pantalla no pueden interpretar tablas sin la estructura apropiada. Los subtítulos de las tablas describen el contexto y la comprensión general de la tabla.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Los lectores de pantalla no pueden interpretar tablas sin la estructura apropiada. Los encabezados de tablas brindan orientación y una descripción del contenido.","set_header_scope_8c548f40":"Establecer alcance del encabezado","set_table_header_cfab13a0":"Establecer encabezado de la tabla","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Los usuarios detectados navegan rápido por las páginas web, buscando títulos grandes o en negrita. Los usuarios del lector de pantalla solo utilizan los encabezados para una comprensión contextual. Los encabezados deben tener la estructura apropiada.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Los usuarios detectados navegan rápido por las páginas web, buscando títulos grandes o en negrita. Los usuarios del lector de pantalla solo utilizan los encabezados para una comprensión contextual. Los encabezados deben ser concisos dentro de la estructura apropiada.","table_header_starting_with_start_ffcabba6":"Encabezado de tabla que comienza con { start }","table_starting_with_start_e7232848":"Tabla que comienza con { start }","tables_headers_should_specify_scope_5abf3a8e":"Los encabezados de las tablas deben especificar el alcance.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Las tablas deben incluir un subtítulo que describa el contenido de la tabla.","tables_should_include_at_least_one_header_48779eac":"Las tablas deben incluir al menos un encabezado.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"El El texto es difícil de leer si no hay contraste suficiente entre el texto y el fondo, especialmente para aquellas personas con visión reducida.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"El texto de tamaño mayor de 18pt (o 14pt en negrita) debe mostrar una relación de contraste mínima de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"El texto de tamaño menor de 18pt (o 14pt en negrita) debe mostrar una relación de contraste mínima de 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Cuando se usa el marcado que formatea visualmente los elementos como una lista pero no indica la relación de la lista, los usuarios pueden tener dificultades para navegar por la información.","why_523b3d8c":"Por qué"},"fr-CA":{"accessibility_checker_b3af1f6c":"Vérificateur d\'\'accessibilité","action_to_take_b626a99a":"Mesures à prendre :","add_a_caption_2a915239":"Ajoutez une légende","add_alt_text_for_the_image_48cd88aa":"Ajouter texte alt pour l\'\'image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Liens adjacents avec la même URL devrait être une liaison unique.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Le texte alt ne peut pas être constitué de plus de 120 caractères.","apply_781a2546":"Appliquer","change_alt_text_92654906":"Modifier le texte alternatif (texte Alt)","change_heading_tag_to_paragraph_a61e3113":"Modifier la balise d’entête au paragraphe","change_text_color_1aecb912":"Modifier la couleur du texte","check_accessibility_3c78211c":"Vérifier l\'\'accessibilité","checking_for_accessibility_issues_fac18c6d":"Vérification des problèmes d\'\'accessibilité","close_accessibility_checker_29d1c51e":"Fermer le vérificateur d\'\'accessibilité","close_d634289d":"Fermer","column_e1ae5c64":"Colonne","column_group_1c062368":"Groupe de colonnes","decorative_image_fde98579":"Image décorative","element_starting_with_start_91bf4c3b":"Élément commençant par { start }","fix_heading_hierarchy_f60884c4":"Corriger la hiérarchie d’entête","format_as_a_list_142210c3":"Formater comme une liste","header_column_f27433cb":"Entête de colonne","header_row_and_column_ec5b9ec":"Ligne et colonne d\'\'entête","header_row_f33eb169":"Ligne d\'\'entête","heading_levels_should_not_be_skipped_3947c0e0":"Les niveaux d\'\'entête ne doivent pas être ignorés.","heading_starting_with_start_42a3e7f9":"Entête commençant par { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Les entêtes ne doivent pas contenir plus de 120 caractères.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Les fichiers d\'\'image ne doivent pas être utilisés comme l\'\'attribut alt décrivant le contenu de l\'\'image.","image_with_filename_file_aacd7180":"Image avec nom de fichier { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Les images doivent inclure un attribut alt décrivant le contenu de l\'\'image.","issue_num_total_f94536cf":"Problème { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Les claviers naviguent vers les liens à l\'\'aide de la touche de tabulation. Deux liens adjacents qui vous dirigent vers la même destination peuvent être source de confusion pour les utilisateurs de clavier.","learn_more_about_adjacent_links_2cb9762c":"En apprendre davantage  sur les liens adjacents","learn_more_about_color_contrast_c019dfb9":"En apprendre davantage sur les contraste des couleurs","learn_more_about_organizing_page_headings_8a7caa2e":"En apprendre davantage sur l\'\'organisation des en-têtes de page","learn_more_about_table_headers_5f5ee13":"En apprendre davantage sur les entêtes de tableau","learn_more_about_using_alt_text_for_images_5698df9a":"En apprendre davantage sur l\'\'utilisation du texte alt pour les images","learn_more_about_using_captions_with_tables_36fe496f":"En apprendre davantage sur l\'\'utilisation des légendes avec des tableaux","learn_more_about_using_filenames_as_alt_text_264286af":"En apprendre davantage sur l\'\'utilisation de nom de fichier en tant que texte alt","learn_more_about_using_lists_4e6eb860":"En apprendre davantage sur les listes","learn_more_about_using_scope_attributes_with_table_20df49aa":"En apprendre davantage sur l\'\'utilisation des attributs de portée avec les tableaux","leave_as_is_4facfe55":"Laisser comme tel","link_with_text_starting_with_start_b3fcbe71":"Lien avec texte commençant par { start }","lists_should_be_formatted_as_lists_f862de8d":"Les listes doivent être formatées comme une liste.","merge_links_2478df96":"Fusionner les liens","next_40e12421":"Suivant","no_accessibility_issues_were_detected_f8d3c875":"Aucun problème d\'\'accessibilité détecté.","no_headers_9bc7dc7f":"Aucun entête","none_3b5e34d2":"Aucun","paragraph_starting_with_start_a59923f8":"Paragraphe commençant par { start }","prev_f82cbc48":"Précédent","remove_heading_style_5fdc8855":"Retirer le style d’entête","row_fc0944a7":"Ligne","row_group_979f5528":"Groupe de ligne","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Les lecteurs d\'\'écran ne peuvent pas déterminer ce qui est affiché dans une image sans texte alternatif, et les noms de fichiers sont souvent des chaînes de chiffres et de lettres dénuées de sens qui ne décrivent pas le contexte ou le sens.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Les lecteurs d\'\'écran ne peuvent pas déterminer ce qui est affiché dans une image sans texte alternatif, qui décrit le contenu et la signification de l\'\'image. Le texte alternatif devrait être simple et concis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Les lecteurs d\'\'écran ne peuvent pas déterminer ce qui est affiché dans une image sans texte alternatif, qui décrit le contenu et la signification de l\'\'image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Les lecteurs d\'\'écran ne peuvent pas interpréter les tableaux sans la structure appropriée. Les entêtes de tableau fournissent une orientation et portée du contenu.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Les lecteurs d\'\'écran ne peuvent pas interpréter les tableaux sans la structure appropriée. Les légendes de tableau décrivent le contexte et la compréhension générale du tableau.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Les lecteurs d\'\'écran ne peuvent pas interpréter les tableaux sans la structure appropriée. Les entêtes de tableau fournissent une orientation et l’aperçu du contenu.","set_header_scope_8c548f40":"Définir la portée de l’entête","set_table_header_cfab13a0":"Définir l\'\'entête du tableau","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Les utilisateurs voyants parcourent rapidement les pages Web, à la recherche d’entêtes en gros caractères ou en caractères gras. Les utilisateurs de lecteurs d\'\'écran comptent sur les entêtes pour une compréhension contextuelle. Les entêtes devraient utiliser la structure appropriée.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Les utilisateurs voyants parcourent rapidement les pages Web, à la recherche d’entêtes en gros caractères ou en caractères gras. Les utilisateurs de lecteurs d\'\'écran comptent sur les entêtes pour une compréhension contextuelle. Les entêtes devraient être concis au sein de la structure appropriée.","table_header_starting_with_start_ffcabba6":"Entête de tableau commençant par { start }","table_starting_with_start_e7232848":"Tableau commençant par { start }","tables_headers_should_specify_scope_5abf3a8e":"Les entêtes de tableau doivent spécifier la portée.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Les tableaux devraient comporter une légende décrivant le contenu du tableau.","tables_should_include_at_least_one_header_48779eac":"Les tableaux doivent inclure au moins un entête.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Le texte est difficile à lire sans contraste suffisant entre le texte et l\'\'arrière-plan, en particulier pour ceux ayant une vision faible.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Un texte d\'\'une police supérieure à 18pt (ou 14pt gras) doit afficher un rapport de contraste minimum de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Un texte avec une police plus petite que 18pt (ou 14pt gras) doit afficher un rapport de contraste minimum de 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Lorsque le langage de balisage est utilisé pour formater visuellement les éléments sous forme de liste, mais n\'\'indique pas la relation de la liste, les utilisateurs peuvent avoir de la difficulté à naviguer dans l\'\'information.","why_523b3d8c":"Pourquoi"},"fr":{"accessibility_checker_b3af1f6c":"Vérificateur d’accessibilité","action_to_take_b626a99a":"Mesures à prendre :","add_a_caption_2a915239":"Ajouter une légende","add_alt_text_for_the_image_48cd88aa":"Ajouter un texte alternatif à l’image","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Les liens adjacents ayant la même URL devraient être rassemblés en un seul lien.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Le texte de l’attribut alt ne devrait pas contenir plus de 120 caractères.","apply_781a2546":"Appliquer","change_alt_text_92654906":"Modifier le texte alternatif","change_heading_tag_to_paragraph_a61e3113":"Transformer la balise en-tête en paragraphe","change_text_color_1aecb912":"Changer la couleur du texte","check_accessibility_3c78211c":"Vérifier l’accessibilité","checking_for_accessibility_issues_fac18c6d":"Vérification des éventuels problèmes d’accessibilité...","close_accessibility_checker_29d1c51e":"Fermer le vérificateur d’accessibilité","close_d634289d":"Fermer","column_e1ae5c64":"Colonne","column_group_1c062368":"Groupe de colonnes","decorative_image_fde98579":"Image décorative","element_starting_with_start_91bf4c3b":"Élément commençant par { start }","fix_heading_hierarchy_f60884c4":"Corriger la hiérarchie des en-têtes","format_as_a_list_142210c3":"Présenter sous forme de liste","header_column_f27433cb":"Colonne d’en-tête","header_row_and_column_ec5b9ec":"Rangée et colonne d’en-tête","header_row_f33eb169":"Rangée d’en-tête","heading_levels_should_not_be_skipped_3947c0e0":"Vous devez éviter de sauter certains niveaux d’en-tête.","heading_starting_with_start_42a3e7f9":"En-tête commençant par { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Les en-têtes ne devraient pas contenir plus de 120 caractères.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Les noms de fichiers des images ne devraient pas servir d’attribut alt décrivant le contenu de l’image.","image_with_filename_file_aacd7180":"Image ayant le nom de fichier { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Les images devraient contenir un attribut alt décrivant leur contenu.","issue_num_total_f94536cf":"Problème { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Au clavier, on navigue parmi les liens à l’aide de la touche tabulation. Lorsque deux liens adjacents renvoient à la même destination, cela peut porter à confusion pour les utilisateurs au clavier.","learn_more_about_adjacent_links_2cb9762c":"Apprenez-en davantage sur les liens adjacents","learn_more_about_color_contrast_c019dfb9":"Apprenez-en davantage sur le contraste couleur","learn_more_about_organizing_page_headings_8a7caa2e":"Apprenez-en davantage sur la façon d’organiser les en-têtes de page","learn_more_about_table_headers_5f5ee13":"Apprenez-en davantage sur les en-tête de tableaux","learn_more_about_using_alt_text_for_images_5698df9a":"Apprenez-en davantage sur l’utilisation de texte dans les images","learn_more_about_using_captions_with_tables_36fe496f":"Apprenez-en davantage sur l’utilisation de légendes dans les tableaux","learn_more_about_using_filenames_as_alt_text_264286af":"Apprenez-en davantage sur l’utilisation de noms de fichiers comme texte alternatif","learn_more_about_using_lists_4e6eb860":"Apprenez-en davantage sur l’utilisation des listes","learn_more_about_using_scope_attributes_with_table_20df49aa":"Apprenez-en davantage sur l’utilisation de l\'\'attribut Scope dans les tableaux","leave_as_is_4facfe55":"Laisser en l’état","link_with_text_starting_with_start_b3fcbe71":"Lien contenant du texte commençant par { start }","lists_should_be_formatted_as_lists_f862de8d":"Les listes doivent être présentées sous forme de listes.","merge_links_2478df96":"Fusionner les liens","next_40e12421":"Suivant","no_accessibility_issues_were_detected_f8d3c875":"Aucun problème d’accessibilité détecté.","no_headers_9bc7dc7f":"Pas d’en-têtes","none_3b5e34d2":"Aucun","paragraph_starting_with_start_a59923f8":"Paragraphe commençant par { start }","prev_f82cbc48":"Précédent","remove_heading_style_5fdc8855":"Supprimer le style « en-tête »","row_fc0944a7":"Rangée","row_group_979f5528":"Groupe de rangées","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Les lecteurs d’écran ne peuvent déterminer ce qui est visible sur une image sans texte alternatif, et les noms de fichiers sont souvent une suite de caractères sans signification qui ne décrivent pas correctement le contexte ou le sens.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Les lecteurs d’écran ne peuvent déterminer ce qui est visible sur une image sans texte alternatif, lequel décrit le contenu et la signification de l’image. Le texte alternatif doit rester simple et concis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Les lecteurs d’écran ne peuvent déterminer ce qui est visible sur une image sans texte alternatif, lequel décrit le contenu et la signification de l’image.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Les lecteurs d’écran ne peuvent interpréter les tableaux sans structure adaptée. Les en-têtes de tableau indiquent la direction et l’étendue du contenu.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Les lecteurs d’écran ne peuvent interpréter les tableaux sans structure adaptée. Les légendes décrivent le contexte et la compréhension globale à tirer du tableau.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Les lecteurs d’écran ne peuvent interpréter les tableaux sans structure adaptée. Les en-têtes de tableau indiquent la direction ainsi qu’une vue d’ensemble du contenu.","set_header_scope_8c548f40":"Paramétrer l’étendue de l’en-tête","set_table_header_cfab13a0":"Paramétrer un en-tête de tableau","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Les utilisateurs voyants naviguent rapidement entre les pages, à la recherche d’en-têtes en caractères grands et gras. Les lecteurs d’écrans utilisent les en-têtes pour une compréhension en contexte. Les en-têtes doivent utiliser une structure appropriée.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Les utilisateurs voyants naviguent rapidement entre les pages, à la recherche d’en-têtes en caractères grands et gras. Les lecteurs d’écrans utilisent les en-têtes pour une compréhension en contexte. Les en-têtes doivent faire preuve de concision au sein d’une structure appropriée.","table_header_starting_with_start_ffcabba6":"En-tête de tableau commençant par { start }","table_starting_with_start_e7232848":"Tableau commençant par { start }","tables_headers_should_specify_scope_5abf3a8e":"Les en-têtes de tableaux devraient indiquer une étendue.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Les tableaux devraient comprendre une légende décrivant leur contenu.","tables_should_include_at_least_one_header_48779eac":"Les tableaux devraient comprendre au moins un en-tête.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Le texte est difficile à lire sans un contraste suffisant entre le texte et l\'\'arrière-plan, surtout pour ceux qui ont une vue faible.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Les textes d’une taille supérieure à 18pt (ou 14pt en gras) devraient respecter un ratio de contraste d’au moins 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Les textes de moins de 18pt (ou 14pt en gras) devraient respecter un ratio de contraste d’au moins 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Lorsqu\'\'on utilise des balises qui formatent visuellement les éléments sous forme de liste, mais qui n\'\'indiquent pas la relation entre les listes, les utilisateurs peuvent avoir de la difficulté à naviguer dans l\'\'information.","why_523b3d8c":"Pourquoi"},"ht":{"accessibility_checker_b3af1f6c":"Verifikatè Aksesibilite","action_to_take_b626a99a":"Aksyon ki dwe fèt:","add_a_caption_2a915239":"Ajoute yon soutit","add_alt_text_for_the_image_48cd88aa":"Ajoute lòt tèks pou imaj la","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Lyen Adjasan ak menm URL yo dwe yon lyen inik.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Lòt atribi tèks yo pata dwe gen plis pase 120 karaktè.","apply_781a2546":"Aplike","change_alt_text_92654906":"Chanje tèks alt","change_heading_tag_to_paragraph_a61e3113":"Chanje etikèt antèt la an paragraf","change_text_color_1aecb912":"Chanje koulè tèks","check_accessibility_3c78211c":"Verifye Aksesibilite","checking_for_accessibility_issues_fac18c6d":"Pwoblèm verifikasyon Aksesibilite","close_accessibility_checker_29d1c51e":"Fèmen Verifikatè Aksesibilite","close_d634289d":"Fèmen","column_e1ae5c64":"Kolonn","column_group_1c062368":"Gwoup Kolonn","decorative_image_fde98579":"Imaj Dekoratif","element_starting_with_start_91bf4c3b":"Eleman kòmanse a { start }","fix_heading_hierarchy_f60884c4":"Fikse yerachi antèt","format_as_a_list_142210c3":"Fòmate tankou lis","header_column_f27433cb":"Kolonn antèt","header_row_and_column_ec5b9ec":"Ranje ak kolonn antèt","header_row_f33eb169":"Ranje antèt","heading_levels_should_not_be_skipped_3947c0e0":"Nivo antèt la pata dwe sote.","heading_starting_with_start_42a3e7f9":"Antèt kòmanse pa { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Antèt yo Atribi tèks alt pata dwe genyen plis pase 120 karaktè.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Non fichye imaj yo pata dwe itilize kòm atribi alt ki dekri kontni imaj la.","image_with_filename_file_aacd7180":"Imaj ak non fichye { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Imaj yo dwe gen yon atribi alt ki dekri kontni imaj la.","issue_num_total_f94536cf":"Pwoblèm { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Klavye navige nan lyen yo ak touch Tab la. De lyen adjasan ki dirije nan menm destinasyon an ka pèmèt moun k ap itilize klavye yo twompe yo.","learn_more_about_adjacent_links_2cb9762c":"Aprann plis sou lyen adjasan yo","learn_more_about_color_contrast_c019dfb9":"Aprann plis sou kontras koulè yo","learn_more_about_organizing_page_headings_8a7caa2e":"Aprann plis sou òganizasyon antèt paj","learn_more_about_table_headers_5f5ee13":"Aprann plis sou antèt tablo yo","learn_more_about_using_alt_text_for_images_5698df9a":"Aprann plis sou tèks alt pou imaj yo","learn_more_about_using_captions_with_tables_36fe496f":"Aprann plis sou itilizasyon lejand nan tablo yo","learn_more_about_using_filenames_as_alt_text_264286af":"Aprann plis sou itilizasyon non fichye yo tankou tèks alt","learn_more_about_using_lists_4e6eb860":"Aprann plis sou itilizasyon lis yo","learn_more_about_using_scope_attributes_with_table_20df49aa":"Aprann plis sou itilizasyon atribi pòte yo ak tablo yo","leave_as_is_4facfe55":"Kite tankou","link_with_text_starting_with_start_b3fcbe71":"Lyen ak tèks ki kòmanse pa { start }","lists_should_be_formatted_as_lists_f862de8d":"Lis yo dwe fòmate tankou lis.","merge_links_2478df96":"Fizyone lyen","next_40e12421":"Pwochen","no_accessibility_issues_were_detected_f8d3c875":"Nou pa t detekte okenn pwoblèm aksesibilite.","no_headers_9bc7dc7f":"Okenn antèt","none_3b5e34d2":"Okenn","paragraph_starting_with_start_a59923f8":"Paragraf kòmanse ak { start }","prev_f82cbc48":"Anvan","remove_heading_style_5fdc8855":"Elimine stil antèt","row_fc0944a7":"Ranje","row_group_979f5528":"Gwoup ranje","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Lektè ekran yo paka wè kisa ki afiche nan yon imaj san tèks altènatif, epi non fichye yo souvan se yon anchenman chif ak lèt ki pa dekri kontèks oswa sans.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Lektè ekran yo paka wè kisa ki afiche nan yon imaj san tèks altènatif, ki dekri kontni ak siyifikasyon imaj la. Tèks altènatif ta dwe senp e klè.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Lektè ekran yo paka wè kisa ki afiche nan yon imaj san tèks altènatif, ki dekri kontni ak siyifikasyon imaj la.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Lektè ekran yo paka entèrete tablo san estrikti ki apwopriye. Antèt tablo yo bay enstriksyon ak kapasite kontni an.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Lektè ekran yo paka entèrete tablo san estrikti ki apwopriye. Lejand tablo yo dekri kontèks ak konpreyansyon jeneral tablo a.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Lektè ekran yo paka entèrete tablo san estrikti ki apwopriye. Antèt tablo yo bay enstriksyon ak rezime kontni an.","set_header_scope_8c548f40":"Defini kapasite antèt","set_table_header_cfab13a0":"Defini antèt tablo","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Itilizatè prevwayan yo navige sou paj wèb yo byen vit, pou yo ka chèche antèt ki gwo oswa an gra. Itilizatè lektè ekran yo konte sou antèt yo pou konpreyansyon kontekstyèl. Antèt yo dwe itilize estrikti ki apwopriye.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Itilizatè prevwayan yo navige sou paj wèb yo byen vit, pou yo ka chèche antèt ki gwo oswa an gra. Itilizatè lektè ekran yo konte sou antèt yo pou konpreyansyon kontekstyèl. Antèt yo dwe klè nan estrikti ki apwopriye.","table_header_starting_with_start_ffcabba6":"Antèt tablo kòmanse a { start }","table_starting_with_start_e7232848":"Tablo kòmanse a { start }","tables_headers_should_specify_scope_5abf3a8e":"Antèt tablo yo dwe presize kapasite.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tablo yo dwe gen lejand ki dekri kontni tablo a.","tables_should_include_at_least_one_header_48779eac":"Tablo yo dwe gen omwen yon antèt.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Li difisil pou li tèks la si pa gen ase kontras ant tèks la ak fon an, espesyalman pou moun ki pa wè byen yo.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tèks ki pi gwo ke 18pt (oswa an gra 14pt) ta dwe afiche yon to kontras de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tèks ki pi piti ke 18pt (oswa an gra 14pt) ta dwe afiche yon to kontras de 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Lè yo itilize balizaj pou yo ka fòmate eleman yo vizyèlman tankou lis men ki pa di relasyon lis la, itilizatè yo ka rankontre difikilte pou navige nan enfómasyon yo. ","why_523b3d8c":"Poukisa"},"is":{"accessibility_checker_b3af1f6c":"Athugun á aðgangi","action_to_take_b626a99a":"Aðgerð sem grípa á til:","add_a_caption_2a915239":"Bæta við yfirskrift","add_alt_text_for_the_image_48cd88aa":"Bæta við öðrum texta fyrir myndina","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Samliggjandi tenglar með sömu vefslóð eiga að vera stakur tengill.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Annar texti ætti ekki að vera lengri en 120 stafir.","apply_781a2546":"Virkja","change_alt_text_92654906":"Breyta öðrum texta","change_heading_tag_to_paragraph_a61e3113":"Breyta tagi hauss í málsgrein","change_text_color_1aecb912":"Breyta lit á texta","check_accessibility_3c78211c":"Kanna aðgengileika","checking_for_accessibility_issues_fac18c6d":"Er að kanna vandamál varðandi aðgengileika","close_accessibility_checker_29d1c51e":"Loka Accessibility CheckerAthugun á aðgangi","close_d634289d":"Loka","column_e1ae5c64":"Dálkur","column_group_1c062368":"Dálkahópur","decorative_image_fde98579":"Skreytingarmynd","element_starting_with_start_91bf4c3b":"Atriði byrjar á { start }","fix_heading_hierarchy_f60884c4":"Lagfæra stigveldi hauss","format_as_a_list_142210c3":"Sníða sem lista","header_column_f27433cb":"Dálkur fyrir haus","header_row_and_column_ec5b9ec":"Röð og dálkur fyrir haus","header_row_f33eb169":"Röð fyrir haus","heading_levels_should_not_be_skipped_3947c0e0":"Ekki ætti að sleppa stigi hauss.","heading_starting_with_start_42a3e7f9":"Haus byrjar á { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Haus ætti ekki að innihalda fleiri en 120 stafi.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Ekki ætti að nota skrárheiti myndar sem annan texta til að lýsa innihaldi myndar.","image_with_filename_file_aacd7180":"Mynd með skrárheitinu { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Myndir ættu að fela í sér annan texta sem lýsir innihaldi myndarinnar.","issue_num_total_f94536cf":"Vandamál { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Nota dálklykil til að fara á tengla. Tveir samliggjandi tenglar sem vísa á sama ákvörðunarstað geta valdið ruglingi hjá þeim sem nota lyklaborð.","learn_more_about_adjacent_links_2cb9762c":"Fá að vita meira um samliggjandi tengla","learn_more_about_color_contrast_c019dfb9":"Fá að vita meira um litaandstæður","learn_more_about_organizing_page_headings_8a7caa2e":"Fá að vita meira um skipulag á síðuhausum","learn_more_about_table_headers_5f5ee13":"Fá að vita meira um töfluhausa","learn_more_about_using_alt_text_for_images_5698df9a":"Fá að vita meira um notkun baktexta fyrir myndir","learn_more_about_using_captions_with_tables_36fe496f":"Fá að vita meira um notkun skýringartexta með töflum","learn_more_about_using_filenames_as_alt_text_264286af":"Fá að vita meira um notkun skráaheita sem baktexta","learn_more_about_using_lists_4e6eb860":"Fá að vita meira um notkun lista","learn_more_about_using_scope_attributes_with_table_20df49aa":"Fá að vita meira um notkun umfangseiginda með töflum","leave_as_is_4facfe55":"Halda óbreyttu","link_with_text_starting_with_start_b3fcbe71":"Tengill með texta byrjar á { start }","lists_should_be_formatted_as_lists_f862de8d":"Lista ætti að sníða sem lista.","merge_links_2478df96":"Fella tengla saman","next_40e12421":"Næsti","no_accessibility_issues_were_detected_f8d3c875":"Engin vandamál fundust varðandi aðgengi .","no_headers_9bc7dc7f":"Engir hausar","none_3b5e34d2":"Enginn","paragraph_starting_with_start_a59923f8":"Málsgrein byrjar á { start }","prev_f82cbc48":"Fyrri","remove_heading_style_5fdc8855":"Fjarlægja stíl fyrirsagnar","row_fc0944a7":"Röð","row_group_979f5528":"Raðahópur","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skjálesarar geta ekki ákvarðað efni myndar án annars texta, og skrárheiti eru oft merkingarlausir strengir með tölustöfum og bókstöfum sem lýsa ekki innhaldinu eða merkingunni.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skjálesarar geta ekki ákvarðað efni myndar án annars texta sem lýsir innihaldi og merkingu myndarinnar. Annar texti ætti að vera einfaldur og hnitmiðaður.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skjálesarar geta ekki ákvarðað efni myndar án annars texta sem lýsir innihaldi og merkingu myndarinnar.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skjálesarar geta ekki túlkað töflur nema þær séu á réttu formi. Töfluhausar gefa upplýsingar um efni og innihald.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skjálesarar geta ekki túlkað töflur nema þær séu á réttu formi. Yfirskrift töflu lýsir innihaldi hennar og gefur almennar upplýsingar um töfluna.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skjálesarar geta ekki túlkað töflur nema þær séu á réttu formi. Töfluhausar gefa upplýsingar um efni og yfirlit yfir það sem fram kemur í töflunni.","set_header_scope_8c548f40":"Stilla gildissvið hauss","set_table_header_cfab13a0":"Stilla töfluhaus","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Notendur sem sjá fara hratt í gegnum vefsíður og leita að stórum eða feitletruðum hausum. Skjálesarar nýta sér hausa til að skilja samhengi. Hausar ættu að vera uppbyggðir á réttan hátt.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Notendur sem sjá fara hratt í gegnum vefsíður og leita að stórum eða feitletruðum hausum. Skjálesarar nýta sér hausa til að skilja samhengi. Hausar ættu að vera hnitmiðaðir og uppbyggðir á réttan hátt.","table_header_starting_with_start_ffcabba6":"Haus töflu byrjar á { start }","table_starting_with_start_e7232848":"Tafla byrjar á { start }","tables_headers_should_specify_scope_5abf3a8e":"Töfluhausar ættu að tiltaka gildissvið.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Töflur ættu að hafa yfirskrift sem lýsir innihaldi töflunnar.","tables_should_include_at_least_one_header_48779eac":"Töflur ættu að hafa að minnsta kosti einn haus.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Ef ekki eru nægileg birtuskil milli leturs og bakgrunns er erfitt að lesa texta, sérstaklega ef um er að ræða einstakling sem sér illa.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Hlutfall hámarks- og lágmarksbirtu fyrir letur sem er stærra en 18 punkta (14 punkta ef feitletrað) ætti að vera að lágmarki 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Hlutfall hámarks- og lágmarksbirtu fyrir letur sem er minna en 18 punkta (14 punkta ef feitletrað) ætti að vera að lágmarki 5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Þegar merkingar eru notaðar sem sníða atriði sjónrænt sem lista en sýna ekki lista-sambandið, gætu notendur átt í erfiðleikum við að átta sig á upplýsingunum.","why_523b3d8c":"Hvers vegna"},"it":{"accessibility_checker_b3af1f6c":"Verifica accessibilità","action_to_take_b626a99a":"Azione da intraprendere:","add_a_caption_2a915239":"Aggiungi una didascalia","add_alt_text_for_the_image_48cd88aa":"Aggiungi testo alternativo per l\'\'immagine","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"I link adiacenti con lo stesso URL devono essere un singolo link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Il testo alternativo degli attributi non deve contenere più di 120 caratteri.","apply_781a2546":"Applica","change_alt_text_92654906":"Cambia testo alternativo","change_heading_tag_to_paragraph_a61e3113":"Cambia tag di intestazione in paragrafo","change_text_color_1aecb912":"Cambia colore del testo","check_accessibility_3c78211c":"Verifica l\'\'accessibilità","checking_for_accessibility_issues_fac18c6d":"Verifica i problemi di accessibilità","close_accessibility_checker_29d1c51e":"Chiudi verifica accessibilità","close_d634289d":"Chiudi","column_e1ae5c64":"Colonna","column_group_1c062368":"Gruppo di colonne","decorative_image_fde98579":"Immagine decorativa","element_starting_with_start_91bf4c3b":"Elemento che inizia con { start }","fix_heading_hierarchy_f60884c4":"Correggi gerarchia intestazioni","format_as_a_list_142210c3":"Formatta come elenco","header_column_f27433cb":"Colonna intestazione","header_row_and_column_ec5b9ec":"Riga e colonna di intestazione","header_row_f33eb169":"Riga di intestazione","heading_levels_should_not_be_skipped_3947c0e0":"I livelli di intestazione non devono essere ignorati.","heading_starting_with_start_42a3e7f9":"Intestazione che inizia con { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Le intestazioni non devono contenere più di 120 caratteri.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"I nomi dei file immagine non devono essere utilizzati come attributo alternativo che descrive il contenuto dell\'\'immagine.","image_with_filename_file_aacd7180":"Immagine con nome file { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Le immagini devono includere un attributo alternativo che descrive il contenuto dell\'\'immagine.","issue_num_total_f94536cf":"Problema { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Le tastiere indirizzano ai link utilizzando il tasto TAB. Due link adiacenti che indirizzando alla stessa destinazione possono confondere gli utenti della tastiera.","learn_more_about_adjacent_links_2cb9762c":"Per saperne di più sui link adiacenti","learn_more_about_color_contrast_c019dfb9":"Per saperne di più sul contrasto di colore","learn_more_about_organizing_page_headings_8a7caa2e":"Per saperne di più sull\'\'organizzazione delle intestazioni di pagina","learn_more_about_table_headers_5f5ee13":"Per saperne di più sulle intestazioni delle tabelle","learn_more_about_using_alt_text_for_images_5698df9a":"Per saperne di più sull\'\'utilizzo di testo alternativo per le immagini","learn_more_about_using_captions_with_tables_36fe496f":"Per saperne di più sull\'\'uso delle didascalie con tabelle","learn_more_about_using_filenames_as_alt_text_264286af":"Per saperne di più sull\'\'utilizzo dei nomi dei file come testo alternativo","learn_more_about_using_lists_4e6eb860":"Per saperne di più sull\'\'uso degli elenchi","learn_more_about_using_scope_attributes_with_table_20df49aa":"Per saperne di più sull\'\'uso degli attributi dell\'\'ambito con le tabelle","leave_as_is_4facfe55":"Lascia così","link_with_text_starting_with_start_b3fcbe71":"Link al testo che inizia con { start }","lists_should_be_formatted_as_lists_f862de8d":"Gli elenchi devono essere formattati come elenchi.","merge_links_2478df96":"Unisci link","next_40e12421":"Successivo","no_accessibility_issues_were_detected_f8d3c875":"Nessun problema di accessibilità rilevato.","no_headers_9bc7dc7f":"Nessuna intestazione","none_3b5e34d2":"Nessuno","paragraph_starting_with_start_a59923f8":"Paragrafo che inizia con { start }","prev_f82cbc48":"Precedente","remove_heading_style_5fdc8855":"Rimuovi stile intestazione","row_fc0944a7":"Riga","row_group_979f5528":"Gruppo di righe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Gli screen reader non possono determinare cosa viene visualizzato in un\'\'immagine senza testo alternativo e i nomi file sono spesso stringhe di numeri e lettere senza senso che non descrivono il contesto o il significato.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Gli screen reader non possono determinare cosa viene visualizzato in un\'\'immagine senza testo alternativo, che descrive il contenuto e il significato dell\'\'immagine. Il testo alternativo deve essere semplice e conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Gli screen reader non possono determinare cosa viene visualizzato in un\'\'immagine senza testo alternativo, che descrive il contenuto e il significato dell\'\'immagine.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Gli screen reader non possono interpretare le tabelle senza la struttura corretta. Le intestazioni della tabella fornisco indicazioni e ambito del contenuto.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Gli screen reader non possono interpretare le tabelle senza la struttura corretta. Le didascalie della tabella descrivono il contesto e le informazioni generali della tabella.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Gli screen reader non possono interpretare le tabelle senza la struttura corretta. Le intestazioni della tabella forniscono indicazioni e panoramica del contenuto.","set_header_scope_8c548f40":"Imposta ambito di intestazione","set_table_header_cfab13a0":"Imposta intestazione tabella","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Gli utenti senza problemi di vista esplorano le pagine web velocemente, cercando intestazioni in grassetto o di grandi dimensioni. Gli utenti di screen reader si affidano alle intestazioni per la comprensione contestuale. Le intestazioni devono utilizzare la struttura appropriata.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Gli utenti senza problemi di vista esplorano le pagine web velocemente, cercando intestazioni in grassetto o di grandi dimensioni. Gli utenti di screen reader si affidano alle intestazioni per la comprensione contestuale. Le intestazioni devono essere concise nella struttura appropriata.","table_header_starting_with_start_ffcabba6":"Intestazione tabella che inizia con { start }","table_starting_with_start_e7232848":"Tabella che inizia con { start }","tables_headers_should_specify_scope_5abf3a8e":"Le intestazioni delle tabelle devono specificare l\'\'ambito.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Le tabelle devono includere una didascalia che descrive i contenuti della tabella.","tables_should_include_at_least_one_header_48779eac":"Le tabelle devono includere almeno un\'\'intestazione.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Il testo è difficile da leggere senza un contrasto sufficiente tra il testo e lo sfondo, specialmente per gli ipovedenti.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Il testo con dimensioni maggiori di 18 pt (o in grassetto 14 pt) deve visualizzare un rapporto di contrasto minimo pari a 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Il testo con dimensioni minori di 18 pt (o in grassetto 14 pt) deve visualizzare un rapporto di contrasto minimo pari a 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Quando viene utilizzato il markup che formatta visivamente gli elementi come elenco ma non indica la relazione tra gli elenchi, gli utenti potrebbero avere difficoltà a spostarsi tra le informazioni.","why_523b3d8c":"Perché"},"ja":{"accessibility_checker_b3af1f6c":"アクセシビリティチェッカー","action_to_take_b626a99a":"実行するアクション：","add_a_caption_2a915239":"キャプションを追加","add_alt_text_for_the_image_48cd88aa":"画像の代替テキストを追加する","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"同じURLを持つ隣接リンクは1つのリンクでなければなりません。","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"代替属性テキストは120文字を超えてはなりません。","apply_781a2546":"適用","change_alt_text_92654906":"代替テキストを変更","change_heading_tag_to_paragraph_a61e3113":"見出しタグを段落に変更する","change_text_color_1aecb912":"テキストの色を変更する","check_accessibility_3c78211c":"アクセシビリティをチェックする","checking_for_accessibility_issues_fac18c6d":"アクセシビリティ問題をチェック","close_accessibility_checker_29d1c51e":"アクセシビリティチェッカーを閉じる","close_d634289d":"閉じる","column_e1ae5c64":"列","column_group_1c062368":"列グループ","decorative_image_fde98579":"装飾の画像","element_starting_with_start_91bf4c3b":"{ start } で始まる要素","fix_heading_hierarchy_f60884c4":"見出しヒエアルキーを修正する","format_as_a_list_142210c3":"リスト形式","header_column_f27433cb":"ヘッダー列","header_row_and_column_ec5b9ec":"ヘッダーの行と列","header_row_f33eb169":"ヘッダー行","heading_levels_should_not_be_skipped_3947c0e0":"見出しレベルはスキップしないでください。","heading_starting_with_start_42a3e7f9":"{ start } で始まる見出し","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"見出しテキストは120文字を超えてはなりません。","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"画像ファイル名は、画像コンテンツを記述する alt 属性として使用しないでください。","image_with_filename_file_aacd7180":"ファイル名 { file } の画像","images_should_include_an_alt_attribute_describing__b86d6a86":"画像には、画像の内容を記述する alt 属性が含まれていなければなりません。","issue_num_total_f94536cf":"問題 { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"キーボードは Tab キーを使用してリンクにナビゲートします。同じ宛先に向かう2つの隣接リンクがあると、キーボードユーザーに混乱を招く可能性があります。","learn_more_about_adjacent_links_2cb9762c":"隣接リンクの詳細","learn_more_about_color_contrast_c019dfb9":"カラーコントラストの詳細","learn_more_about_organizing_page_headings_8a7caa2e":"ページヘッダーの整理の詳細","learn_more_about_table_headers_5f5ee13":"表ヘッダーの詳細","learn_more_about_using_alt_text_for_images_5698df9a":"代替テキストを画像に使用する方法の詳細","learn_more_about_using_captions_with_tables_36fe496f":"表でキャプションを使用する方法の詳細","learn_more_about_using_filenames_as_alt_text_264286af":"ファイル名を代替テキストに使用する方法の詳細","learn_more_about_using_lists_4e6eb860":"リスト使用の詳細","learn_more_about_using_scope_attributes_with_table_20df49aa":"表でスコープ属性を使用する方法の詳細","leave_as_is_4facfe55":"そのままにする","link_with_text_starting_with_start_b3fcbe71":"{ start } で始まるテキストとのリンク","lists_should_be_formatted_as_lists_f862de8d":"リストはリスト形式にしなければなりません。","merge_links_2478df96":"リンクをマージする","next_40e12421":"次","no_accessibility_issues_were_detected_f8d3c875":"アクセシビリティの問題は検出されませんでした。","no_headers_9bc7dc7f":"ヘッダーなし","none_3b5e34d2":"なし","paragraph_starting_with_start_a59923f8":"{ start } で始まる段落","prev_f82cbc48":"前へ","remove_heading_style_5fdc8855":"見出しスタイルを削除する","row_fc0944a7":"列","row_group_979f5528":"列グループ","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"スクリーンリーダーは、代替テキストなしでは画像に表示される内容を判別することはできません。また、ファイル名は、しばいば文脈や意味を記述しない無意味な数字や文字列であることがあります。","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"スクリーンリーダーは、画像の内容と意味を説明する代替テキストなしでは画像に表示される内容を判別することはできません。代替テキストは簡潔かつ簡潔でなければなりません。","screen_readers_cannot_determine_what_is_displayed__a57e6723":"スクリーンリーダーは、画像の内容と意味を説明する代替テキストなしでは画像に表示される内容を判別することはできません。","screen_readers_cannot_interpret_tables_without_the_bd861652":"スクリーンリーダーは、適切な構造なしでは表を解釈できません。表のヘッダーは、方向と内容の範囲を提供します。","screen_readers_cannot_interpret_tables_without_the_e62912d5":"スクリーンリーダーは、適切な構造なしでは表を解釈できません。表のキャプションは、表の文脈と一般的な理解を記述するものです。","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"スクリーンリーダーは、適切な構造なしでは表を解釈できません。表のヘッダーは、コンテンツの方向と概要を提供します。","set_header_scope_8c548f40":"ヘッダースコープを設定する","set_table_header_cfab13a0":"表のヘッダーを設定する","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"視認ユーザーは大きく太字の見出しを探し、Webページをすばやく参照します。スクリーンリーダーのユーザーは、文脈に基づいた理解を行う際にヘッダーに依存しています。ヘッダーは適切な構造を使用しなければなりません。","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"視認ユーザーは大きく太字の見出しを探し、Webページをすばやく参照します。スクリーンリーダーのユーザーは、文脈に基づいた理解を行う際にヘッダーに依存しています。ヘッダーは適切な構造内で簡潔でなければなりません。","table_header_starting_with_start_ffcabba6":"{ start } で始まる表ヘッダー","table_starting_with_start_e7232848":"{ start } で始まる表","tables_headers_should_specify_scope_5abf3a8e":"表のヘッダーは範囲を指定しなければなりません。","tables_should_include_a_caption_describing_the_con_e91e78fc":"表には、表の内容を説明するキャプションが含まれていなければなりません。","tables_should_include_at_least_one_header_48779eac":"表には、少なくとも1つのヘッダーが含まれていなければなりません。","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"テキストは、テキストと背景との間に十分なコントラストがなければ、特に視力の弱い人にとっては読みにくくなります。","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"18pt（または太字14pt）より大きいテキストは、3：1の最小コントラスト比で表示しなければなりません。","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"18pt（または太字14pt）より小きいテキストは、4.5：1の最小コントラスト比で表示しなければなりません。","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"アイテムをリスト形式に視覚的にフォーマットするマークアップが使用されますが、リストの関係を示唆するものではなく、ユーザが情報をナビゲートするのは難しいかもしれません。","why_523b3d8c":"理由"},"ko":{},"mi":{"accessibility_checker_b3af1f6c":"Kaitirotiro te whakaurutanga","action_to_take_b626a99a":"Mahi hei mahi:","add_a_caption_2a915239":"Tāpiri he tapanga","add_alt_text_for_the_image_48cd88aa":"Tāpiri kuputuhi alt mo te pakoko","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Ko ngā hononga hono ki te URL kotahi me kotahi te hononga.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Kia kaua te kuputuhi huanga Alt e nui atu i te 120 ngā reta.","apply_781a2546":"Tono","change_alt_text_92654906":"Huri kē alt kuputuhi","change_heading_tag_to_paragraph_a61e3113":"Hurihia te pane tūtohu ki te parawae","change_text_color_1aecb912":"Huria te tae o te kuputuhi","check_accessibility_3c78211c":"Āta titiro te whakaurutanga","checking_for_accessibility_issues_fac18c6d":"Āta titiro mo ngā take whakauru","close_accessibility_checker_29d1c51e":"Kati Kaitirotiro Whakaurutanga","close_d634289d":"Katia","column_e1ae5c64":"Pou","column_group_1c062368":"Rōpū pou","decorative_image_fde98579":"Whakapaipai āhua","element_starting_with_start_91bf4c3b":"Te tīmatanga o te kaupapa { start }","fix_heading_hierarchy_f60884c4":"Whakatikahia te hiranga o te pane","format_as_a_list_142210c3":"Whakahōputu hei rārangi","header_column_f27433cb":"Pane pou","header_row_and_column_ec5b9ec":"Pane rārangi me te pou","header_row_f33eb169":"Pane rārangi","heading_levels_should_not_be_skipped_3947c0e0":"Ko ngā taumata pane kaore e pekehia.","heading_starting_with_start_42a3e7f9":"Pane e tīmata ana me { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Kia kaua ngā pane e nui atu i te 120 ngā reta.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Kaua e whakamahia ngā kōnae ingoa ki te whakamahi i te alt huanga e whakātu ana i te ihirangi pakoko.","image_with_filename_file_aacd7180":"Āhua me te kōnae ingoa { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Ko ngā āhua me whakauru he alt huanga e whakāhua ana i te ihirangi āhua","issue_num_total_f94536cf":"Take { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Ka whakaterehia e ngā papa pātuhi ngā hononga ki te whakamahi i Ripa kī. Ngā hononga e rua e tata ana e tika ana ki te haerenga rite ka pōraruraru ki ngā papa pātuhi kaiwhakamahi.","learn_more_about_adjacent_links_2cb9762c":"Ako ano i ngā hono tata","learn_more_about_color_contrast_c019dfb9":"Ako anō i ngā tae whakarerekē","learn_more_about_organizing_page_headings_8a7caa2e":"Ako anō i ngā whakahaere ngā pane whārangi","learn_more_about_table_headers_5f5ee13":"Ako anō i ngā pane rārangi","learn_more_about_using_alt_text_for_images_5698df9a":"Ako anō i te mahi i ngā alt kuputuhi mo ngā āhua","learn_more_about_using_captions_with_tables_36fe496f":"Ako anō i te mahi i ngā kōrero me ngā rārangi","learn_more_about_using_filenames_as_alt_text_264286af":"Ako anō i te mahi i ngā ingoa kōnae i te alt kuputuhi","learn_more_about_using_lists_4e6eb860":"Ako anō i te mahi i ngā rārangi","learn_more_about_using_scope_attributes_with_table_20df49aa":"Ako anō i te mahi i ngā whānuitanga huanga me ngā rārangi","leave_as_is_4facfe55":"Waiho ki tēnei","link_with_text_starting_with_start_b3fcbe71":"Hono me te kuputuhi e tīmata ana me { start }","lists_should_be_formatted_as_lists_f862de8d":"Me whakaritehia ngā rārangi hei rārangi.","merge_links_2478df96":"Whakapiri ngā hononga","next_40e12421":"E haere ake nei","no_accessibility_issues_were_detected_f8d3c875":"Kaore he whakaurunga take i kitea.","no_headers_9bc7dc7f":"Kaore ngā pane","none_3b5e34d2":"Kaore","paragraph_starting_with_start_a59923f8":"Parawae e tīmata ana me { start }","prev_f82cbc48":"Mua","remove_heading_style_5fdc8855":"Tango pane kāhua","row_fc0944a7":"Rārangi","row_group_979f5528":"Rōpū rārangi","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Kaore e taea e ngā kaipānui mata te whakatau i ngā mea e whakātuhia ana i roto i te āhua me te kore kuputuhi rerekē, a, he maha ngā taura o ngā tau me ngā reta kaore i te whakāhua i te horopaki te tikanga rānei.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Kaore e taea e ngā kaipānui mata te whakatau i ngā mea e whakāturia ana i roto i te āhua me te kore kuputuhi rerekē, e whakātu ana i te ihirangi me te tikanga o te pakoko. Me ngāwari me te hāngai tōtika te kuputuhi rerekē.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Kaore e taea e ngā kaipānui mata te whakatau i ngā mea e whakāturia ana i roto i te āhua me te kore kuputuhi rerekē, e whakātu ana i te ihirangi me te tikanga o te pakoko.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Kaore e taea e ngā kaipānui mata ki te whakamāori i ngā papa kaore te hanganga tika. Ko ngā  pane ripanga e whakarato ana i te aronga me te kohinga ihirangi.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Kaore e taea e ngā kaipānui mata ki te whakamāori i ngā papa kaore te hanganga tika. Ko ngā panuku tapanga e whakaatu ana i te horopaki me te mātauranga whānui o te ripanga.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Kaore e taea e ngā kaipānui mata ki te whakamāori i ngā papa kaore te hanganga tika. Ko ngā pane ripanga whakarato ana i te ahunga me te tirohanga o te ihirangi.","set_header_scope_8c548f40":"Whakatau horopaki pane","set_table_header_cfab13a0":"Whakatau pane ripanga","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Ngā kaiwhakamahi e āhei ana ki te tiro pūtirotiro tere i te ngā whārangi tukutuku, me te rapu i ngā pane nui, maia rānei. Ka whakawhirinaki ngā kaiwhakamahi pānui mata ki ngā pane mo te māramatanga o te horopaki. Me whakamahi ngā pane i te hanganga tika.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Ngā kaiwhakamahi e āhei ana ki te tiro pūtirotiro tere i te ngā whārangi tukutuku, me te rapu i ngā pane nui, maia rānei. Ka whakawhirinaki ngā kaiwhakamahi pānui mata ki ngā pane mo te māramatanga o te horopaki. Me whai kiko ngā pane ki roto i te hanganga tika.","table_header_starting_with_start_ffcabba6":"Ka timata te pane ripanga mei te { start }","table_starting_with_start_e7232848":"Ripanga e timata ana me { start }","tables_headers_should_specify_scope_5abf3a8e":"Me tautuhi ngā pane ripanga ki te whakaputa te hōkai.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Me whakauru ngā ripanga ki tētahi tuhinga e whakaatu ana i ngā ihirangi o te ripanga.","tables_should_include_at_least_one_header_48779eac":"Me whakauru ngā ripanga i te iti rawa o te pane kotahi.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"He uaua te panui, kaore he rerekētanga i waenga i te tuhinga me te papamuri, ina koa mo te hunga e iti ana te kite.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Ko te kuputuhi nui ake i te 18pt (me te maia 14pt) me whakātu i te ōwehenga rerekē iti o te 3: 1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Ko te kuputuhi iti atu i te 18pt (me te maia 14pt) me whakātu i te ōwehenga rerekē iti o te 4.5: 1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Ina whakamahia te tohu tohu i ngā taonga tautuhi tirohanga hei rārangi, ēngari kaore e tohu i te hononga o te rārangi, he uaua ki ngā kaiwhakamahi te whakawhiti i ngā kōrero.","why_523b3d8c":"He aha"},"nb-x-k12":{"accessibility_checker_b3af1f6c":"Tilgjengelighetstester","action_to_take_b626a99a":"Handling å utføre:","add_a_caption_2a915239":"Legg til overskrift","add_alt_text_for_the_image_48cd88aa":"Legg til alternativ tekst for bildet","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Lenker ved siden av hverandre med samme URL bør være samme lenke.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt-attributter bør ikke inneholde mer enn 120 tegn.","apply_781a2546":"Bruk","change_alt_text_92654906":"Endre alternativ tekst","change_heading_tag_to_paragraph_a61e3113":"Endre titteltagg til setning","change_text_color_1aecb912":"Endre tekstfarge","check_accessibility_3c78211c":"Test tilgjengelighet","checking_for_accessibility_issues_fac18c6d":"Tester for tilgjengelighetsproblemer","close_accessibility_checker_29d1c51e":"Lukk tilgjengelighetstester","close_d634289d":"Lukk","column_e1ae5c64":"Kolonne","column_group_1c062368":"Kolonnegruppe","decorative_image_fde98579":"Dekorativt bilde","element_starting_with_start_91bf4c3b":"Element som starter med { start }","fix_heading_hierarchy_f60884c4":"Reparer tittelhierarki","format_as_a_list_142210c3":"Formater som liste","header_column_f27433cb":"Tittelkolonne","header_row_and_column_ec5b9ec":"Tittelrad og kolonne","header_row_f33eb169":"Tittelrad","heading_levels_should_not_be_skipped_3947c0e0":"Tittelnivåer bør ikke hoppes over","heading_starting_with_start_42a3e7f9":"Tittel som starter med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Titler bør ikke inneholde mer enn 120 tegn.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bildefilnavn bør ikke brukes som den alt-attributt som beskriver bildeinnholdet.","image_with_filename_file_aacd7180":"Bilde med filnavn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder burde inneholde en alt-attributt som beskriver bildeinnholdet.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastatur navigerer til lenker ved å bruke tabulatortasten. To lenker som viser til samme destinasjon kan være forvirrende for tastaturbrukere.","learn_more_about_adjacent_links_2cb9762c":"Lær mer om lenker ved siden av","learn_more_about_color_contrast_c019dfb9":"Lær mer om fargekontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Lær mer om hvordan organisere sideoverskrifter","learn_more_about_table_headers_5f5ee13":"Lær mer om tabelloverskrifter","learn_more_about_using_alt_text_for_images_5698df9a":"Lær mer om hvordan bruke alt tekst for bilder","learn_more_about_using_captions_with_tables_36fe496f":"Lær mer om hvordan bruke bildetekst med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Lær mer om hvordan bruke filnavn som alt tekst","learn_more_about_using_lists_4e6eb860":"Lær mer om hvordan bruke lister","learn_more_about_using_scope_attributes_with_table_20df49aa":"Lær mer om hvordan bruke omfangsatributter med tabeller","leave_as_is_4facfe55":"La det være","link_with_text_starting_with_start_b3fcbe71":"Lenke med tekst som starter med { start }","lists_should_be_formatted_as_lists_f862de8d":"Lister må formateres som lister.","merge_links_2478df96":"Slå sammen lenker","next_40e12421":"Neste","no_accessibility_issues_were_detected_f8d3c875":"Ingen tiljengelighetsproblemer ble oppdaget.","no_headers_9bc7dc7f":"Ingen titler","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Setning som starter med { start }","prev_f82cbc48":"Forrige","remove_heading_style_5fdc8855":"Fjern tittelstil","row_fc0944a7":"Rad","row_group_979f5528":"Radgruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst, og filnavn er ofte meningsløse strenger av bokstaver og siffer som ikke beskriver konteksten eller meningen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst som beskriver innholdet og meningen med bildet. Alternativ tekst bør være kort og konsis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst som beskriver innholdet og meningen med bildet.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelltitler gir rettledning og indikerer innholdsomfang.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelloverskrifter beskriver konteksten og den generelle forståelsen av tabellen.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelltitler gir rettledning og  oversikt over innholdet.","set_header_scope_8c548f40":"Sett tittelomfang","set_table_header_cfab13a0":"Sett tabelltittel","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Seende brukere surfer nettsider kjapt, og ser etter store eller uthevede titler. Brukere av skjermlesere er avhengige av titler for å forstå konteksten. Titler bør bruke korrekt struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Seende brukere surfer nettsider kjapt, og ser etter store eller uthevede titler. Brukere av skjermlesere er avhengige av titler for å forstå konteksten. Titler bør være konsise innenfor den korrekte strukturen.","table_header_starting_with_start_ffcabba6":"Tabelltittel starter med { start }","table_starting_with_start_e7232848":"Tabell starter med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabelltitler bør spesifisere omfang.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller bør inkludere en overskrift som beskriver innholdet i tabellen.","tables_should_include_at_least_one_header_48779eac":"Tabeller bør inkludere minst en tittel.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Teksten er vanskelig å lese uten tilstrekkelig kontrast mellom tekst og bakgrunn, spesielt for svaksynte.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst større enn 18pkt (eller tykk 14pkt) bør vises med en minimums kontrastrate på 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst mindre enn 18pkt (eller tykk 14pkt) bør vises med en minimums kontrastrate på 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Når det brukes markering som visuelt formaterer elementer som en liste men ikke indikerer et listeforhold kan brukere finne det vanskelig å navigere informasjonen.","why_523b3d8c":"Hvorfor"},"nb":{"accessibility_checker_b3af1f6c":"Tilgjengelighetstester","action_to_take_b626a99a":"Handling å utføre:","add_a_caption_2a915239":"Legg til overskrift","add_alt_text_for_the_image_48cd88aa":"Legg til alternativ tekst for bildet","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Lenker ved siden av hverandre med samme URL bør være samme lenke.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt-attributter bør ikke inneholde mer enn 120 tegn.","apply_781a2546":"Legg til","change_alt_text_92654906":"Endre alternativ tekst","change_heading_tag_to_paragraph_a61e3113":"Endre titteltagg til setning","change_text_color_1aecb912":"Endre tekstfarge","check_accessibility_3c78211c":"Test tilgjengelighet","checking_for_accessibility_issues_fac18c6d":"Tester for tilgjengelighetsproblemer","close_accessibility_checker_29d1c51e":"Lukk tilgjengelighetstester","close_d634289d":"Lukk","column_e1ae5c64":"Kolonne","column_group_1c062368":"Kolonnegruppe","decorative_image_fde98579":"Dekorativt bilde","element_starting_with_start_91bf4c3b":"Element som starter med { start }","fix_heading_hierarchy_f60884c4":"Reparer tittelhierarki","format_as_a_list_142210c3":"Formater som liste","header_column_f27433cb":"Tittelkolonne","header_row_and_column_ec5b9ec":"Tittelrad og kolonne","header_row_f33eb169":"Tittelrad","heading_levels_should_not_be_skipped_3947c0e0":"Tittelnivåer bør ikke hoppes over","heading_starting_with_start_42a3e7f9":"Tittel som starter med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Titler bør ikke inneholde mer enn 120 tegn.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bildefilnavn bør ikke brukes som den alt-attributt som beskriver bildeinnholdet.","image_with_filename_file_aacd7180":"Bilde med filnavn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder burde inneholde en alt-attributt som beskriver bildeinnholdet.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tastatur navigerer til lenker ved å bruke tabulatortasten. To lenker som viser til samme destinasjon kan være forvirrende for tastaturbrukere.","learn_more_about_adjacent_links_2cb9762c":"Lær mer om lenker ved siden av","learn_more_about_color_contrast_c019dfb9":"Lær mer om fargekontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Lær mer om hvordan organisere sideoverskrifter","learn_more_about_table_headers_5f5ee13":"Lær mer om tabelloverskrifter","learn_more_about_using_alt_text_for_images_5698df9a":"Lær mer om hvordan bruke alt tekst for bilder","learn_more_about_using_captions_with_tables_36fe496f":"Lær mer om hvordan bruke bildetekst med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Lær mer om hvordan bruke filnavn som alt tekst","learn_more_about_using_lists_4e6eb860":"Lær mer om hvordan bruke lister","learn_more_about_using_scope_attributes_with_table_20df49aa":"Lær mer om hvordan bruke omfangsatributter med tabeller","leave_as_is_4facfe55":"La det være","link_with_text_starting_with_start_b3fcbe71":"Lenke med tekst som starter med { start }","lists_should_be_formatted_as_lists_f862de8d":"Lister må formateres som lister.","merge_links_2478df96":"Slå sammen lenker","next_40e12421":"Neste","no_accessibility_issues_were_detected_f8d3c875":"Ingen tiljengelighetsproblemer ble oppdaget.","no_headers_9bc7dc7f":"Ingen titler","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Setning som starter med { start }","prev_f82cbc48":"Forrige","remove_heading_style_5fdc8855":"Fjern tittelstil","row_fc0944a7":"Rad","row_group_979f5528":"Radgruppe","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst, og filnavn er ofte meningsløse strenger av bokstaver og siffer som ikke beskriver konteksten eller meningen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst som beskriver innholdet og meningen med bildet. Alternativ tekst bør være kort og konsis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skjermlesere kan ikke avgjøre hva som vises i et bilde uten alternativ tekst som beskriver innholdet og meningen med bildet.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelltitler gir rettledning og indikerer innholdsomfang","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelloverskrifter beskriver konteksten og den generelle forståelsen av tabellen.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skjermlesere kan ikke tolke tabeller uten skikkelig struktur. Tabelltitler gir rettledning og  oversikt over innholdet.","set_header_scope_8c548f40":"Sett tittelomfang","set_table_header_cfab13a0":"Sett tabelltittel","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Seende brukere surfer nettsider kjapt, og ser etter store eller uthevede titler. Brukere av skjermlesere er avhengige av titler for å forstå konteksten. Titler bør bruke korrekt struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Seende brukere surfer nettsider kjapt, og ser etter store eller uthevede titler. Brukere av skjermlesere er avhengige av titler for å forstå konteksten. Titler bør være konsise innenfor den korrekte strukturen.","table_header_starting_with_start_ffcabba6":"Tabelltittel starter med { start }","table_starting_with_start_e7232848":"Tabell starter med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabelltitler bør spesifisere omfang.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller bør inkludere en overskrift som beskriver innholdet i tabellen.","tables_should_include_at_least_one_header_48779eac":"Tabeller bør inkludere minst en tittel.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Teksten er vanskelig å lese uten tilstrekkelig kontrast mellom tekst og bakgrunn, spesielt for svaksynte. ","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst større enn 18pkt (eller tykk 14pkt) bør vises med en minimums kontrastrate på 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst mindre enn 18pkt (eller tykk 14pkt) bør vises med en minimums kontrastrate på 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Når det brukes markering som visuellt formaterer elementer som en liste men ikke indikerer et listeforhold kan brukere finne det vanskelig å navigere informasjonen.","why_523b3d8c":"Hvorfor"},"nl":{"accessibility_checker_b3af1f6c":"Toegankelijkheidscontrole","action_to_take_b626a99a":"Te ondernemen actie:","add_a_caption_2a915239":"Ondertiteling toevoegen","add_alt_text_for_the_image_48cd88aa":"Alt-tekst toevoegen voor de afbeelding","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Aangrenzende koppelingen met dezelfde URL moeten één koppeling zijn.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt-tekst mag niet meer dan 120 tekens bevatten.","apply_781a2546":"Toepassen","change_alt_text_92654906":"Alt-tekst wijzigen","change_heading_tag_to_paragraph_a61e3113":"Koptekstlabel bij alinea","change_text_color_1aecb912":"Tekstkleur wijzigen","check_accessibility_3c78211c":"Toegankelijkheid controleren","checking_for_accessibility_issues_fac18c6d":"Controleren op toegankelijkheidsproblemen","close_accessibility_checker_29d1c51e":"Toegankelijkheidscontrole sluiten","close_d634289d":"Sluiten","column_e1ae5c64":"Kolom","column_group_1c062368":"Kolomgroep","decorative_image_fde98579":"Decoratieve afbeelding","element_starting_with_start_91bf4c3b":"Element dat begint met { start }","fix_heading_hierarchy_f60884c4":"Hiërarchie van kopteksten corrigeren","format_as_a_list_142210c3":"Opmaken als lijst","header_column_f27433cb":"Koptekstkolom","header_row_and_column_ec5b9ec":"Koptekstrij en -kolom","header_row_f33eb169":"Koptekstrij","heading_levels_should_not_be_skipped_3947c0e0":"Koptekstniveaus mogen niet worden overgeslagen.","heading_starting_with_start_42a3e7f9":"Koptekst die begint met { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Kopteksten mogen niet meer dan 120 tekens bevatten.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Namen van afbeeldingsbestanden mogen niet worden gebruikt als alt-kenmerk voor beschrijving van de inhoud van de afbeelding.","image_with_filename_file_aacd7180":"Afbeelding met bestandsnaam { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Afbeeldingen moeten een alt-kenmerk hebben dat de inhoud van de afbeelding beschrijft.","issue_num_total_f94536cf":"Probleem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Gebruik de Tab-toets op het toetsenbord om te navigeren naar koppelingen. Twee aangrenzende koppelingen die naar dezelfde bestemming leiden, kunnen verwarrend werken bij gebruik van het toetsenbord.","learn_more_about_adjacent_links_2cb9762c":"Meer informatie over aangrenzende links","learn_more_about_color_contrast_c019dfb9":"Meer informatie over kleurcontrast","learn_more_about_organizing_page_headings_8a7caa2e":"Meer informatie over ordenen van paginakopteksten","learn_more_about_table_headers_5f5ee13":"Meer informatie over tabelkopteksten","learn_more_about_using_alt_text_for_images_5698df9a":"Meer informatie over gebruik van alt-tekst voor afbeeldingen","learn_more_about_using_captions_with_tables_36fe496f":"Meer informatie over gebruik van ondertiteling met tabellen","learn_more_about_using_filenames_as_alt_text_264286af":"Meer informatie over gebruik van bestandsnamen als alt-tekst","learn_more_about_using_lists_4e6eb860":"Meer informatie over gebruik van lijsten","learn_more_about_using_scope_attributes_with_table_20df49aa":"Meer informatie over gebruik van bereikattributen met tabellen","leave_as_is_4facfe55":"Ongewijzigd laten","link_with_text_starting_with_start_b3fcbe71":"Koppeling maken naar tekst die begint met { start }","lists_should_be_formatted_as_lists_f862de8d":"Lijsten moeten als lijst worden opgemaakt.","merge_links_2478df96":"Koppelingen samenvoegen","next_40e12421":"Volgende","no_accessibility_issues_were_detected_f8d3c875":"Geen toegankelijkheidsproblemen gevonden.","no_headers_9bc7dc7f":"Geen kopteksten","none_3b5e34d2":"Geen","paragraph_starting_with_start_a59923f8":"Alinea die begint met { start }","prev_f82cbc48":"Vorige","remove_heading_style_5fdc8855":"Koptekststijl verwijderen","row_fc0944a7":"Rij","row_group_979f5528":"Rijgroep","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Schermlezers kunnen niet bepalen wat er wordt weergegeven in een afbeelding zonder alt-tekst en bestandsnamen zijn vaak betekenisloze tekenreeksen van cijfers en letters die niets over de inhoud of betekenis prijsgeven.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Schermlezers kunnen niet bepalen wat er wordt weergegeven in een afbeelding zonder alt-tekst, die de inhoud en betekenis van de afbeelding beschrijft. Alt-tekst moet eenvoudig en beknopt zijn.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Schermlezers kunnen niet bepalen wat er wordt weergegeven in een afbeelding zonder alt-tekst, die de inhoud en betekenis van de afbeelding beschrijft.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Schermlezers kunnen geen tabellen zonder de juiste structuur interpreteren. Tabelkoppen geven een aanduiding van de inhoud.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Schermlezers kunnen geen tabellen zonder de juiste structuur interpreteren. Tabelbijschriften geven de context en een algemeen beeld van de tabel.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Schermlezers kunnen geen tabellen zonder de juiste structuur interpreteren. Tabelkoppen geven een aanduiding van de inhoud.","set_header_scope_8c548f40":"Kopbeschrijving instellen","set_table_header_cfab13a0":"Tablekop instellen","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Slechtzienden bladeren snel door webpagina\'\'s, op zoek naar grote of vette koppen. Gebruikers van schermlezers zijn afhankelijk van koppen om een idee van de context te krijgen. Koppen moeten de juiste structuur hebben.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Slechtzienden bladeren snel door webpagina\'\'s, op zoek naar grote of vette koppen. Gebruikers van schermlezers zijn afhankelijk van koppen om een idee van de context te krijgen. Koppen moeten beknopt zijn en de juiste structuur hebben.","table_header_starting_with_start_ffcabba6":"Tabelkop die begint met { start }","table_starting_with_start_e7232848":"Tabel die begint met { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabelkoppen moeten de context aangeven.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabellen moeten een bijschrift bevatten dat de inhoud van de tabel aangeeft.","tables_should_include_at_least_one_header_48779eac":"Tabellen moeten minstens één kop hebben.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Tekst is moeilijk te lezen zonder voldoende contrast tussen de tekst en de achtergrond, met name voor slechtzienden.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Voor tekst groter dan 18pt (of vet 14pt) geldt een miinimum contrastverhouding van 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Voor tekst kleiner dan 18pt (of vet 14pt) geldt een miinimum contrastverhouding van 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Wanneer een markering is gebruikt die items visueel opmaakt als een lijst maar de lijstrelatie niet aangeeft, kan het voor gebruikers moeilijk zijn om door de informatie te navigeren.","why_523b3d8c":"Waarom"},"pl":{"accessibility_checker_b3af1f6c":"Kontrola dostępności","action_to_take_b626a99a":"Wymagane działanie:","add_a_caption_2a915239":"Dodaj napis","add_alt_text_for_the_image_48cd88aa":"Dodaj alternatywny tekst dla obrazka","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Sąsiadujące łącza o tym samym adresie URL powinny stanowić pojedyncze łącze.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alternatywny tekst nie może zawierać więcej niż 120 znaków.","apply_781a2546":"Zastosuj","change_alt_text_92654906":"Zmień alternatywny tekst","change_heading_tag_to_paragraph_a61e3113":"Zmień tag nagłówka na akapit","change_text_color_1aecb912":"Zmień kolor tekstu","check_accessibility_3c78211c":"Sprawdź dostępność","checking_for_accessibility_issues_fac18c6d":"Sprawdź problemy z dostępnością","close_accessibility_checker_29d1c51e":"Zamknij kontrolę dostępności","close_d634289d":"Zamknij","column_e1ae5c64":"Kolumna","column_group_1c062368":"Grupa kolumn","decorative_image_fde98579":"Obraz dekoracyjny","element_starting_with_start_91bf4c3b":"Element rozpoczynający się od { start }","fix_heading_hierarchy_f60884c4":"Przypnij hierarchię nagłówków","format_as_a_list_142210c3":"Formatuj jako listę","header_column_f27433cb":"Kolumna nagłówka","header_row_and_column_ec5b9ec":"Wiersz i kolumna nagłówka","header_row_f33eb169":"Wiersz nagłówka","heading_levels_should_not_be_skipped_3947c0e0":"Poziomów nagłówka nie można pomijać.","heading_starting_with_start_42a3e7f9":"Nagłówek rozpoczynający się od { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Nagłówki nie powinny zawierać więcej niż 120 znaków.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Nazw plików obrazu nie można używać jako alternatywnego atrybutu opisującego zawartość obrazu.","image_with_filename_file_aacd7180":"Plik obrazu z nazwą { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Obrazy powinny obejmować alternatywny atrybut opisujący zawartość obrazu.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Klawiatury pozwalają przejść do łączy za pomocą klawisza Tab. Dwa sąsiednie łącza prowadzącego do tej samej lokalizacji mogą wprowadzać użytkowników klawiatury w błąd.","learn_more_about_adjacent_links_2cb9762c":"Uzyskaj więcej informacji na temat sąsiadujących linków","learn_more_about_color_contrast_c019dfb9":"Uzyskaj więcej informacji na temat kontrastu barw","learn_more_about_organizing_page_headings_8a7caa2e":"Uzyskaj więcej informacji na temat organizacji nagłówków na stronie","learn_more_about_table_headers_5f5ee13":"Uzyskaj więcej informacji na temat nagłówków tabeli","learn_more_about_using_alt_text_for_images_5698df9a":"Uzyskaj więcej informacji na temat alternatywnego tekstu dla obrazów","learn_more_about_using_captions_with_tables_36fe496f":"Uzyskaj więcej informacji na temat napisów i tabel","learn_more_about_using_filenames_as_alt_text_264286af":"Uzyskaj więcej informacji na temat nazw plików jako alternatywnego tekstu","learn_more_about_using_lists_4e6eb860":"Uzyskaj więcej informacji na temat korzystania z list","learn_more_about_using_scope_attributes_with_table_20df49aa":"Uzyskaj więcej informacji na temat atrybutów zakresu i tabel","leave_as_is_4facfe55":"Pozostaw jako","link_with_text_starting_with_start_b3fcbe71":"Powiąż z tekstem, który się zaczyna od słów { start }","lists_should_be_formatted_as_lists_f862de8d":"Listy należy sformatować jako listy.","merge_links_2478df96":"Scal łącza","next_40e12421":"Następny","no_accessibility_issues_were_detected_f8d3c875":"Nie wykryto problemów z dostępnością.","no_headers_9bc7dc7f":"Brak nagłówków","none_3b5e34d2":"Brak","paragraph_starting_with_start_a59923f8":"Akapit rozpoczynający się od { start }","prev_f82cbc48":"Poprz","remove_heading_style_5fdc8855":"Usuń styl nagłówka","row_fc0944a7":"Wiersz","row_group_979f5528":"Grupa wierszy","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Czytniki ekranu nie mogą określić, co jest wyświetlone na obrazie bez alternatywnego tekstu, a nazwy plików są często pozbawionymi znaczenia ciągami cyfr i liter, które nie opisują kontekstu.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Czytniki ekranu nie mogą określić, co jest wyświetlone na obrazie bez alternatywnego tekstu, który opisywałby zawartość i znaczenie obrazu. Tekst alternatywny powinien być prosty i zwięzły.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Czytniki ekranu nie mogą określić, co jest wyświetlone na obrazie bez alternatywnego tekstu, który opisywałby zawartość i znaczenie obrazu.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Czytniki ekranu nie mogą interpretować tabel bez odpowiedniej struktury. Nagłówki tabel zapewniają wskazówki i wskazują na zakres zawartości.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Czytniki ekranu nie mogą interpretować tabel bez odpowiedniej struktury. Napisy w tabelach opisują kontekst i ogólne przesłanie tabeli.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Czytniki ekranu nie mogą interpretować tabel bez odpowiedniej struktury. Nagłówki tabeli zapewniają wskazówki i streszczenie zawartości.","set_header_scope_8c548f40":"Ustaw zakres nagłówka","set_table_header_cfab13a0":"Ustaw nagłówek tabeli","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Użytkownicy z dobrym wzrokiem szybciej przeglądają strony internetowe, odszukując duże lub zapisane pogrubioną czcionką nagłówki. Użytkownicy czytników ekranu polegają na nagłówkach dla zrozumienia kontekstu. Nagłówki muszą wykorzystywać odpowiednią strukturę.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Użytkownicy z dobrym wzrokiem szybciej przeglądają strony internetowe, odszukując duże lub zapisane pogrubioną czcionką nagłówki. Użytkownicy czytników ekranu polegają na nagłówkach dla zrozumienia kontekstu. Nagłówki w prawidłowej strukturze muszą być zwięzłe.","table_header_starting_with_start_ffcabba6":"Nagłówek tabeli rozpoczynający się od { start }","table_starting_with_start_e7232848":"Tabela rozpoczynająca się od { start }","tables_headers_should_specify_scope_5abf3a8e":"Nagłówki tabeli powinny określać zakres.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabele powinny obejmować opis zawartości tabeli.","tables_should_include_at_least_one_header_48779eac":"Tabele powinny zawierać co najmniej jeden nagłówek.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Tekst jest trudny do czytania bez wystarczającego kontrastu między tekstem i tłem, szczególnie w przypadku osób ze słabym wzrokiem.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Tekst o czcionce powyżej 18 pt (lub pogrubionej 14 pt) powinien korzystać ze współczynnika kontrastu co najmniej 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Tekst o czcionce poniżej 18 pt (lub pogrubionej 14 pt) powinien korzystać ze współczynnika kontrastu co najmniej 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Gdy używane jest oznaczenie, które wizualnie formatuje elementy jako listę, ale nie wskazuje na relacje w liście, użytkownicy mogą mieć problem z nawigowaniem po informacjach.","why_523b3d8c":"Dlaczego"},"pt-BR":{"accessibility_checker_b3af1f6c":"Verificador de acessibilidade:","action_to_take_b626a99a":"Ação a tomar:","add_a_caption_2a915239":"Adicionar legendas","add_alt_text_for_the_image_48cd88aa":"Adicionar texto alternativo para a imagem","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Links adjacentes com a mesma URL devem ser um único link.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Texto do atributo alternativo não deve ter mais de 120 caracteres.","apply_781a2546":"Aplicar","change_alt_text_92654906":"Alterar texto alternativo","change_heading_tag_to_paragraph_a61e3113":"Alterar tag do título para parágrafo","change_text_color_1aecb912":"Alterar cor do texto","check_accessibility_3c78211c":"Verificar acessibilidade","checking_for_accessibility_issues_fac18c6d":"Verificando problemas de acessibilidade","close_accessibility_checker_29d1c51e":"Fechar Verificador de acessibilidade","close_d634289d":"Fechar","column_e1ae5c64":"Coluna","column_group_1c062368":"Grupo de colunas","decorative_image_fde98579":"Imagem decorativa","element_starting_with_start_91bf4c3b":"Elemento começando com { start }","fix_heading_hierarchy_f60884c4":"Corrigir hierarquia de títulos","format_as_a_list_142210c3":"Formatar como uma lista","header_column_f27433cb":"Coluna do cabeçalho","header_row_and_column_ec5b9ec":"Linha e coluna do cabeçalho","header_row_f33eb169":"Linha do cabeçalho","heading_levels_should_not_be_skipped_3947c0e0":"Níveis de títulos não devem ser pulados.","heading_starting_with_start_42a3e7f9":"Título começando com { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Títulos não devem ter mais de 120 caracteres.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Nomes de arquivos da imagem não devem ser usados como atributo alternativo descrevendo o conteúdo da imagem.","image_with_filename_file_aacd7180":"Imagem com nome de arquivo { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Imagens devem incluir um atributo alternativo descrevendo o conteúdo da imagem.","issue_num_total_f94536cf":"Problema { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Teclados navegam para links usando a tecla Tab. Dois links adjacentes que direcionam para o mesmo destino podem ser confusos para usuários de teclado.","learn_more_about_adjacent_links_2cb9762c":"Saiba mais sobre links adjacentes","learn_more_about_color_contrast_c019dfb9":"Saiba mais sobre o contraste de cores","learn_more_about_organizing_page_headings_8a7caa2e":"Saiba mais sobre a organização de cabeçalhos da página","learn_more_about_table_headers_5f5ee13":"Saiba mais sobre cabeçalhos de tabelas","learn_more_about_using_alt_text_for_images_5698df9a":"Saiba mais sobre o uso de texto alternativo para imagens","learn_more_about_using_captions_with_tables_36fe496f":"Saiba mais sobre o uso de legendas com tabelas","learn_more_about_using_filenames_as_alt_text_264286af":"Saiba mais sobre o uso de nomes de arquivos como texto alternativo","learn_more_about_using_lists_4e6eb860":"Saiba mais sobre o uso de listas","learn_more_about_using_scope_attributes_with_table_20df49aa":"Saiba mais sobre o uso de atributos de escopo com tabelas","leave_as_is_4facfe55":"Deixar como está","link_with_text_starting_with_start_b3fcbe71":"Link com texto começando com { start }","lists_should_be_formatted_as_lists_f862de8d":"Listas devem ser formatadas como listas.","merge_links_2478df96":"Mesclar links","next_40e12421":"Próximo","no_accessibility_issues_were_detected_f8d3c875":"Sem problemas de acessibilidades detectados.","no_headers_9bc7dc7f":"Sem cabeçalhos","none_3b5e34d2":"Nenhum","paragraph_starting_with_start_a59923f8":"Parágrafo começando com { start }","prev_f82cbc48":"Ant","remove_heading_style_5fdc8855":"Remover estilo do título","row_fc0944a7":"Linha","row_group_979f5528":"Grupo de linhas","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Leitores de tela não podem determinar o que é exibido em uma imagem sem texto alternativo, e nomes de arquivos geralmente são strings sem significados de números e letras que não descrevem o contexto ou significado.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Leitores de tela não podem determinar o que é exibido em uma imagem sem texto alternativo, que descreve o conteúdo e significado da imagem. Texto alternativo deve ser simples e conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Leitores de tela não podem determinar o que é exibido em uma imagem sem texto alternativo, que descreve o conteúdo e significado da imagem.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Leitores de tela não podem interpretar tabelas sem a estrutura adequada. Cabeçalhos de tabelas fornecem direção e âmbito do conteúdo.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Leitores de tela não podem interpretar tabelas sem a estrutura adequada. Legendas de tabelas descrevem o contexto e entendimento geral da tabela.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Leitores de tela não podem interpretar tabelas sem a estrutura adequada. Cabeçalhos de tabelas fornecem direção e visão geral do conteúdo.","set_header_scope_8c548f40":"Definir âmbito do cabeçalho","set_table_header_cfab13a0":"Definir cabeçalho da tabela","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Deficientes visuais navegam rapidamente nas páginas web, buscando títulos grandes ou negritos. Usuários de leitores de tela dependem dos cabeçalhos para entendimento contextual. Os cabeçalhos devem usar a estrutura adequada.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Deficientes visuais navegam rapidamente nas páginas web, buscando títulos grandes ou negritos. Usuários de leitores de tela dependem dos cabeçalhos para entendimento contextual. Os cabeçalhos devem ser concisos dentro da estrutura adequada.","table_header_starting_with_start_ffcabba6":"Cabeçalho de tabela começando com { start }","table_starting_with_start_e7232848":"Tabela começando com { start }","tables_headers_should_specify_scope_5abf3a8e":"Cabeçalhos de tabela devem especificar o âmbito.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabelas devem incluir uma legenda descrevendo o conteúdo da tabela.","tables_should_include_at_least_one_header_48779eac":"Tabelas devem incluir pelo menos um cabeçalho.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Texto é difícil de ler sem contraste suficiente entre o texto e o plano de fundo, especialmente para aqueles com pouca visão.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Texto maior do que 18pt (ou negrito 14pt) deve exibir uma razão mínima de contraste de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Texto menor do que 18pt (ou negrito 14pt) deve exibir uma razão mínima de contraste de 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Quando marcação é usada, que visualmente formata itens como uma lista, mas não indica o relacionamento da lista, os usuários podem ter dificuldade em navegar pelas informações.","why_523b3d8c":"Por que"},"pt-PT":{"accessibility_checker_b3af1f6c":"Verificador de acessibilidade","action_to_take_b626a99a":"Ação a tomar:","add_a_caption_2a915239":"Adicionar uma legenda","add_alt_text_for_the_image_48cd88aa":"Adicionar texto alternativo para a imagem","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Ligações adjacentes com o mesmo URL devem ser uma única ligação.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"O texto do atributo Alt não deve conter mais de 120 caracteres.","apply_781a2546":"Aplicar","change_alt_text_92654906":"Alterar texto alternativo","change_heading_tag_to_paragraph_a61e3113":"Alterar a etiqueta de título para o parágrafo","change_text_color_1aecb912":"Mudar a cor do texto","check_accessibility_3c78211c":"Verificar Acessibilidade","checking_for_accessibility_issues_fac18c6d":"Verificar problemas de acessibilidade","close_accessibility_checker_29d1c51e":"Fechar Verificador de acessibilidade","column_e1ae5c64":"Coluna","column_group_1c062368":"Grupo de coluna","decorative_image_fde98579":"Imagem decorativa","element_starting_with_start_91bf4c3b":"Elemento a começar com { start }","fix_heading_hierarchy_f60884c4":"Fixar hierarquia","header_column_f27433cb":"Coluna de cabeçalho","header_row_and_column_ec5b9ec":"Cabeçalho linha e coluna","header_row_f33eb169":"Linha de cabeçalho","heading_levels_should_not_be_skipped_3947c0e0":"Os níveis de título não devem ser ignorados.","heading_starting_with_start_42a3e7f9":"Título começando com { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Os títulos não devem conter mais de 120 caracteres.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Os nomes dos arquivos de imagem não devem ser usados ​​como o atributo alt descrevendo o conteúdo da imagem.","image_with_filename_file_aacd7180":"Imagem com nome de ficheiro { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"As imagens devem incluir um atributo alt descrevendo o conteúdo da imagem.","issue_num_total_f94536cf":"Questão { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Os teclados navegam para ligações usando a tecla Tab. Dois links adjacentes que direcionam para o mesmo destino podem confundir os utilizadores de teclado.","learn_more_a79a7918":"Aprender mais","leave_as_is_4facfe55":"Deixe como está","link_with_text_starting_with_start_b3fcbe71":"Ligação com texto a começar com { start }","merge_links_2478df96":"Criar ligações","next_40e12421":"Próximo","no_accessibility_issues_were_detected_f8d3c875":"Não foram detectados problemas de acessibilidade.","no_headers_9bc7dc7f":"Sem cabeçalho","none_3b5e34d2":"Nenhum","paragraph_starting_with_start_a59923f8":"Parágrafo começando com { start }","prev_f82cbc48":"Voltar","remove_heading_style_5fdc8855":"Remova estilo de cabeçalho","row_fc0944a7":"Linha","row_group_979f5528":"Grupo de linhas","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, e os nomes dos ficheiros geralmente são sem sentido de sequências de números e letras que não descrevem o contexto ou o significado.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, que descreve o conteúdo e o significado da imagem. O texto alternativo deve ser simples e conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, que descreve o conteúdo e o significado da imagem.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. Os cabeçalhos de tabela fornecem escopo de direção e conteúdo.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. As legendas da tabela descrevem o contexto e a compreensão geral da tabela.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. Cabeçalhos de tabela fornecem orientação e visão geral do conteúdo.","set_header_scope_8c548f40":"Definir o alcance do cabeçalho","set_table_header_cfab13a0":"Definir cabeçalho da tabela","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Utilizadores vistos navegam nas páginas da Web rapidamente, procurando títulos em grande ou em negrito. Os utilizadores do leitor de ecrã dependem de cabeçalhos para a compreensão contextual. Os cabeçalhos devem usar a estrutura adequada.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Utilizadores vistos navegam nas páginas da Web rapidamente, procurando títulos em grande ou em negrito. Os utilizadores do leitor de ecrã dependem de cabeçalhos para a compreensão contextual. Os cabeçalhos devem ser concisos dentro da estrutura adequada.","table_header_starting_with_start_ffcabba6":"Cabeçalho da tabela começando com { start }","table_starting_with_start_e7232848":"Tabela começando com { start }","tables_headers_should_specify_scope_5abf3a8e":"Os cabeçalhos das tabelas devem especificar o escopo.","tables_should_include_a_caption_describing_the_con_e91e78fc":"As tabelas devem incluir uma legenda descrevendo o conteúdo da tabela.","tables_should_include_at_least_one_header_48779eac":"As tabelas devem incluir pelo menos um cabeçalho.","text_is_difficult_to_read_without_suffcient_contra_27b82183":"O texto é difícil de ler sem um suficiente contraste entre o texto e o fundo, especialmente para aqueles com baixa visão.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"O texto maior que 18pt (ou em negrito 14pt) deve exibir uma relação mínima de contraste de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"O texto menor que 18pt (ou em negrito 14pt) deve exibir uma relação de contraste mínima de 4.5:1.","why_523b3d8c":"Por quê"},"pt":{"accessibility_checker_b3af1f6c":"Verificador de acessibilidade","action_to_take_b626a99a":"Ação a tomar:","add_a_caption_2a915239":"Adicionar uma legenda","add_alt_text_for_the_image_48cd88aa":"Adicionar texto alternativo para a imagem","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Ligações adjacentes com o mesmo URL devem ser uma única ligação.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"O texto do atributo Alt não deve conter mais de 120 caracteres.","apply_781a2546":"Aplicar","change_alt_text_92654906":"Alterar texto alternativo","change_heading_tag_to_paragraph_a61e3113":"Alterar a etiqueta de título para o parágrafo","change_text_color_1aecb912":"Mudar a cor do texto","check_accessibility_3c78211c":"Verificar Acessibilidade","checking_for_accessibility_issues_fac18c6d":"Verificar problemas de acessibilidade","close_accessibility_checker_29d1c51e":"Fechar Verificador de acessibilidade","close_d634289d":"Fechar","column_e1ae5c64":"Coluna","column_group_1c062368":"Grupo de coluna","decorative_image_fde98579":"Imagem decorativa","element_starting_with_start_91bf4c3b":"Elemento a começar com { start }","fix_heading_hierarchy_f60884c4":"Fixar hierarquia","format_as_a_list_142210c3":"Formatar como uma lista","header_column_f27433cb":"Coluna de cabeçalho","header_row_and_column_ec5b9ec":"Cabeçalho linha e coluna","header_row_f33eb169":"Linha de cabeçalho","heading_levels_should_not_be_skipped_3947c0e0":"Os níveis de título não devem ser ignorados.","heading_starting_with_start_42a3e7f9":"Título começando com { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Os títulos não devem conter mais de 120 caracteres.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Os nomes dos arquivos de imagem não devem ser usados ​​como o atributo alt descrevendo o conteúdo da imagem.","image_with_filename_file_aacd7180":"Imagem com nome de ficheiro { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"As imagens devem incluir um atributo alt descrevendo o conteúdo da imagem.","issue_num_total_f94536cf":"Questão { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Os teclados navegam para ligações usando a tecla Tab. Dois links adjacentes que direcionam para o mesmo destino podem confundir os utilizadores de teclado.","learn_more_about_adjacent_links_2cb9762c":"Saiba mais sobre ligações adjacentes","learn_more_about_color_contrast_c019dfb9":"Saiba mais sobre o contraste de cores","learn_more_about_organizing_page_headings_8a7caa2e":"Saiba mais sobre como organizar títulos de página","learn_more_about_table_headers_5f5ee13":"Saiba mais sobre cabeçalhos de tabelas","learn_more_about_using_alt_text_for_images_5698df9a":"Saiba mais sobre como usar o texto alternativo para imagens","learn_more_about_using_captions_with_tables_36fe496f":"Saiba mais sobre como usar legendas com tabelas","learn_more_about_using_filenames_as_alt_text_264286af":"Saiba mais sobre como usar nomes de ficheiros como texto alternativo","learn_more_about_using_lists_4e6eb860":"Saiba mais sobre como usar listas","learn_more_about_using_scope_attributes_with_table_20df49aa":"Saiba mais sobre como usar atributos de escopo com tabelas","leave_as_is_4facfe55":"Deixe como está","link_with_text_starting_with_start_b3fcbe71":"Ligação com texto a começar com { start }","lists_should_be_formatted_as_lists_f862de8d":"As listas devem ser formatadas como listas.","merge_links_2478df96":"Criar ligações","next_40e12421":"Próximo","no_accessibility_issues_were_detected_f8d3c875":"Não foram detectados problemas de acessibilidade.","no_headers_9bc7dc7f":"Sem cabeçalho","none_3b5e34d2":"Nenhum","paragraph_starting_with_start_a59923f8":"Parágrafo começando com { start }","prev_f82cbc48":"Voltar","remove_heading_style_5fdc8855":"Remova estilo de cabeçalho","row_fc0944a7":"Linha","row_group_979f5528":"Grupo de linhas","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, e os nomes dos ficheiros geralmente são sem sentido de sequências de números e letras que não descrevem o contexto ou o significado.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, que descreve o conteúdo e o significado da imagem. O texto alternativo deve ser simples e conciso.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Os leitores de ecrã não podem determinar o que é exibido numa imagem sem texto alternativo, que descreve o conteúdo e o significado da imagem.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. Os cabeçalhos de tabela fornecem escopo de direção e conteúdo.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. As legendas da tabela descrevem o contexto e a compreensão geral da tabela.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Os leitores de ecrã não podem interpretar tabelas sem a estrutura adequada. Cabeçalhos de tabela fornecem orientação e visão geral do conteúdo.","set_header_scope_8c548f40":"Definir o alcance do cabeçalho","set_table_header_cfab13a0":"Definir cabeçalho da tabela","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Utilizadores vistos navegam nas páginas da Web rapidamente, procurando títulos em grande ou em negrito. Os utilizadores do leitor de ecrã dependem de cabeçalhos para a compreensão contextual. Os cabeçalhos devem usar a estrutura adequada.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Utilizadores vistos navegam nas páginas da Web rapidamente, procurando títulos em grande ou em negrito. Os utilizadores do leitor de ecrã dependem de cabeçalhos para a compreensão contextual. Os cabeçalhos devem ser concisos dentro da estrutura adequada.","table_header_starting_with_start_ffcabba6":"Cabeçalho da tabela começando com { start }","table_starting_with_start_e7232848":"Tabela começando com { start }","tables_headers_should_specify_scope_5abf3a8e":"Os cabeçalhos das tabelas devem especificar o escopo.","tables_should_include_a_caption_describing_the_con_e91e78fc":"As tabelas devem incluir uma legenda descrevendo o conteúdo da tabela.","tables_should_include_at_least_one_header_48779eac":"As tabelas devem incluir pelo menos um cabeçalho.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"O texto é difícil de ler sem contraste suficiente entre o texto e o fundo, especialmente para aqueles com baixa visão.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"O texto maior que 18pt (ou em negrito 14pt) deve exibir uma relação mínima de contraste de 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"O texto menor que 18pt (ou em negrito 14pt) deve exibir uma relação de contraste mínima de 4.5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Quando a marcação é usada para formatar itens visualmente como uma lista, mas não indica o relacionamento da lista, os utilizadores podem ter dificuldade em navegar pelas informações.","why_523b3d8c":"Por quê"},"ru":{"accessibility_checker_b3af1f6c":"Контроллер доступности","action_to_take_b626a99a":"Что необходимо сделать:","add_a_caption_2a915239":"Добавить надпись","add_alt_text_for_the_image_48cd88aa":"Добавить альтернативный текст для изображения","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Соседние ссылки с одним и тем же URL-адресом должны быть объединены в одну ссылку.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Альтернативный атрибутивный текст не должен содержать более 120 символов.","apply_781a2546":"Применить","change_alt_text_92654906":"Изменить альтернативный текст","change_heading_tag_to_paragraph_a61e3113":"Изменить тег заголовка параграфа","change_text_color_1aecb912":"Изменить цвет текста","check_accessibility_3c78211c":"Проверить доступность","checking_for_accessibility_issues_fac18c6d":"Проверка на отсутствие проблем, связанных с доступностью","close_accessibility_checker_29d1c51e":"Закрыть контроллер доступности","close_d634289d":"Закрыть","column_e1ae5c64":"Колонка","column_group_1c062368":"Группа колонок","decorative_image_fde98579":"Декоративное изображение","element_starting_with_start_91bf4c3b":"Элемент, начинающийся с { start }","fix_heading_hierarchy_f60884c4":"Исправить иерархию заголовков","format_as_a_list_142210c3":"Форматировать в виде списка","header_column_f27433cb":"Колонка заголовка","header_row_and_column_ec5b9ec":"Строка и колонка заголовка","header_row_f33eb169":"Строка заголовка","heading_levels_should_not_be_skipped_3947c0e0":"Уровни заголовков не должны пропускаться.","heading_starting_with_start_42a3e7f9":"Заголовок, начинающийся с { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Заголовки не должны содержать более 120 символов.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Имена файлов изображений не должны использоваться в качестве альтернативного атрибута с описанием содержимого изображения.","image_with_filename_file_aacd7180":"Изображение с именем файла { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Изображения должны содержать альтернативный атрибут с описанием содержимого изображения.","issue_num_total_f94536cf":"Проблема { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Клавиатуры используются для перехода по ссылкам с помощью клавиши Tab. Две соседние ссылки, ведущие в одно и то же место, могут запутывать пользователей клавиатур.","learn_more_about_adjacent_links_2cb9762c":"Узнать больше о соседних ссылках","learn_more_about_color_contrast_c019dfb9":"Узнать больше о цветовом контрасте","learn_more_about_organizing_page_headings_8a7caa2e":"Узнать больше об организации заголовков страниц","learn_more_about_table_headers_5f5ee13":"Узнать больше о заголовках таблиц","learn_more_about_using_alt_text_for_images_5698df9a":"Узнать больше об использовании замещающего текста для изображений","learn_more_about_using_captions_with_tables_36fe496f":"Узнать больше об использовании заголовков с таблицами","learn_more_about_using_filenames_as_alt_text_264286af":"Узнать больше об использовании имен файлов в качестве замещающего текста","learn_more_about_using_lists_4e6eb860":"Узнать больше об использовании списков","learn_more_about_using_scope_attributes_with_table_20df49aa":"Узнать больше об использовании базовых атрибутов с таблицами","leave_as_is_4facfe55":"Оставить как есть","link_with_text_starting_with_start_b3fcbe71":"Ссылка с текстом, начинающимся с { start }","lists_should_be_formatted_as_lists_f862de8d":"Списки должны быть отформатированы в виде списков.","merge_links_2478df96":"Объединить ссылки","next_40e12421":"Далее","no_accessibility_issues_were_detected_f8d3c875":"Проблем, связанных с доступностью, не обнаружено.","no_headers_9bc7dc7f":"Заголовки отсутствуют","none_3b5e34d2":"Нет","paragraph_starting_with_start_a59923f8":"Параграф, начинающийся с { start }","prev_f82cbc48":"Назад","remove_heading_style_5fdc8855":"Удалить стиль заголовка","row_fc0944a7":"Строка","row_group_979f5528":"Группа строк","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Экранные дикторы не могут определить, что отображено на изображении, без альтернативного текста, и при этом имена файлов зачастую представляют собой бессмысленные наборы цифр и букв, которые не несут в себе описания контекста или значения.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Экранные дикторы не могут определить, что отображено на изображении, без альтернативного текста, содержащего описание контекста и значения изображения. Альтернативный текст должен быть простым и сжатым.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Экранные дикторы не могут определить, что отображено на изображении, без альтернативного текста, содержащего описание контекста и значения изображения.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Экранные дикторы не могут интерпретировать таблицы без надлежащей структуры. Заголовки таблиц содержат направление и объем содержания.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Экранные дикторы не могут интерпретировать таблицы без надлежащей структуры. Надписи в таблицах содержат описание контекста и общее представление о таблице.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Экранные дикторы не могут интерпретировать таблицы без надлежащей структуры. Заголовки таблиц содержат направление и общее описание содержания.","set_header_scope_8c548f40":"Задать объем заголовка","set_table_header_cfab13a0":"Задать заголовок таблицы","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Зрячие пользователи быстро просматривают веб-страницы в поисках крупных или полужирных заголовков. Пользователи экранных дикторов полагаются на заголовки для контекстуального понимания. Заголовки должны иметь надлежащую структуру.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Зрячие пользователи быстро просматривают веб-страницы в поисках крупных или полужирных заголовков. Пользователи экранных дикторов полагаются на заголовки для контекстуального понимания. Заголовки должны быть сжатыми в рамках надлежащей структуры.","table_header_starting_with_start_ffcabba6":"Заголовок таблицы, начинающийся с { start }","table_starting_with_start_e7232848":"Таблица, начинающаяся с { start }","tables_headers_should_specify_scope_5abf3a8e":"Заголовки таблиц должны конкретизировать объем.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Таблицы должны содержать надпись с описанием содержимого таблицы.","tables_should_include_at_least_one_header_48779eac":"Таблицы должны содержать как минимум один заголовок.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Текст трудно поддается чтению без достаточной контрастности между текстом и фоном, особенно для тех, кто плохо видит.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Текст крупнее 18pt (или полужирный 14pt) должен отображаться с минимальным коэффициентом контрастности 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Текст мельче 18pt (или полужирный 14pt) должен отображаться с минимальным коэффициентом контрастности 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Когда используется разметка, которая визуально форматирует элементы в виде списка, но не указывает на отношение списка, пользователи могут испытывать трудности при просмотре информации.","why_523b3d8c":"Почему"},"sl":{"accessibility_checker_b3af1f6c":"Orodje za preverjanje dostopnosti","action_to_take_b626a99a":"Dejanje, ki ga je treba izvesti:","add_a_caption_2a915239":"Dodaj spremno besedilo","add_alt_text_for_the_image_48cd88aa":"Dodaj nadomestno besedilo za sliko","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Sosednje povezave z istim naslovom URL morajo biti ena sama povezava.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Nadomestno besedilo lastnosti ne sme vsebovati več kot 120 znakov.","apply_781a2546":"Uporabi","change_alt_text_92654906":"Spremeni nadomestno besedilo","change_heading_tag_to_paragraph_a61e3113":"Spremeni oznako naslova odstavka","change_text_color_1aecb912":"Spremeni barvo besedila","check_accessibility_3c78211c":"Preveri dostopnost","checking_for_accessibility_issues_fac18c6d":"Preverjanje težav z dostopnostjo","close_accessibility_checker_29d1c51e":"Zapri orodje za preverjanje dostopnosti","close_d634289d":"Zapri","column_e1ae5c64":"Stolpec","column_group_1c062368":"Skupina stolpcev","decorative_image_fde98579":"Dekorativna slika","element_starting_with_start_91bf4c3b":"Element, ki se začne s/z { start }","fix_heading_hierarchy_f60884c4":"Popravi hierarhijo naslovov","format_as_a_list_142210c3":"Oblikuj kot seznam","header_column_f27433cb":"Stolpec z glavo","header_row_and_column_ec5b9ec":"Vrstica in stolpec z glavo","header_row_f33eb169":"Vrstica z glavo","heading_levels_should_not_be_skipped_3947c0e0":"Ravni naslovov ni dovoljeno preskočiti.","heading_starting_with_start_42a3e7f9":"Naslov, ki se začne s/z { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Naslovi ne smejo vsebovati več kot 120 znakov.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Imen datotek slik ni dovoljeno uporabljati kot nadomestno lastnost za opis vsebine slike.","image_with_filename_file_aacd7180":"Slika z imenom datoteke { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Slike morajo vsebovati nadomestno lastnost, ki opisuje vsebino slike.","issue_num_total_f94536cf":"Težava { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Navigacija do povezav poteka s tabulatorkami. Dve sosednji povezavi, ki usmerjata na isti cilj, lahko zmedeta uporabnike tipkovnic.","learn_more_about_adjacent_links_2cb9762c":"Več o sosednjih povezavah","learn_more_about_color_contrast_c019dfb9":"Več o barvnem kontrastu","learn_more_about_organizing_page_headings_8a7caa2e":"Več o organiziranju naslovov strani","learn_more_about_table_headers_5f5ee13":"Več o glavah preglednic","learn_more_about_using_alt_text_for_images_5698df9a":"Več o uporabi nadomestnega besedila za slike","learn_more_about_using_captions_with_tables_36fe496f":"Več o uporabi napisov pri preglednicah","learn_more_about_using_filenames_as_alt_text_264286af":"Več o uporabi imen datotek kot nadomestno besedilo","learn_more_about_using_lists_4e6eb860":"Več o uporabi seznamov","learn_more_about_using_scope_attributes_with_table_20df49aa":"Več o uporabi atributov obsega pri preglednicah","leave_as_is_4facfe55":"Ne spreminjaj","link_with_text_starting_with_start_b3fcbe71":"Poveži z besedilom, ki se začne s/z { start }","lists_should_be_formatted_as_lists_f862de8d":"Seznami morajo biti oblikovani kot seznami.","merge_links_2478df96":"Spoji povezave","next_40e12421":"Naprej","no_accessibility_issues_were_detected_f8d3c875":"Ni zaznanih težav z dostopnostjo.","no_headers_9bc7dc7f":"Ni glav.","none_3b5e34d2":"Brez","paragraph_starting_with_start_a59923f8":"Odstavek, ki se začne s/z { start }","prev_f82cbc48":"Nazaj","remove_heading_style_5fdc8855":"Odstrani slog naslova","row_fc0944a7":"Vrstica","row_group_979f5528":"Skupina vrstic","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Brez nadomestnega besedila bralniki zaslonov ne morejo določiti, kaj je prikazano na sliki, imena datotek pa so pogosto nizi številk in črk brez smisla, ki ne opisujejo konteksta ali pomena.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Brez nadomestnega besedila, ki opisuje vsebino in pomen slike, bralniki zaslonov ne morejo določiti, kaj je prikazano na sliki. Nadomestno besedilo mora biti enostavno in jedrnato.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Brez nadomestnega besedila, ki opisuje vsebino in pomen slike, bralniki zaslonov ne morejo določiti, kaj je prikazano na sliki.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Bralniki zaslonov ne morejo tolmačiti preglednic brez pravilne zgradbe. Glave preglednic zagotavljajo smer in obseg vsebine.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Bralniki zaslonov ne morejo tolmačiti preglednic brez pravilne zgradbe. Spremno besedilo preglednic opisuje kontekst in splošno razumevanje preglednice.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Bralniki zaslonov ne morejo tolmačiti preglednic brez pravilne zgradbe. Glave preglednic zagotavljajo smeri in pregled vsebine.","set_header_scope_8c548f40":"Nastavi obseg glave","set_table_header_cfab13a0":"Nastavi glavo preglednice","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Slabovidni uporabniki hitro brskajo po spletnih straneh in iščejo velike ali krepko zapisane naslove. Uporabniki bralnikov zaslonov se za razumevanje konteksta zanašajo na glave. Pri glavah mora biti uporabljena pravilna zgradba.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Slabovidni uporabniki hitro brskajo po spletnih straneh in iščejo velike ali krepko zapisane naslove. Uporabniki bralnikov zaslonov se za razumevanje konteksta zanašajo na glave. Glave morajo biti jedrnate in imeti pravilno zgradbo.","table_header_starting_with_start_ffcabba6":"Glava preglednice, ki se začne s/z { start }","table_starting_with_start_e7232848":"Preglednica, ki se začne s/z { start }","tables_headers_should_specify_scope_5abf3a8e":"Pri glavah preglednic mora biti naveden obseg.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Preglednice morajo vsebovati spremno besedilo z opisom vsebine preglednice.","tables_should_include_at_least_one_header_48779eac":"Preglednice morajo vključevati vsaj eno glavo.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Brez zadostnega kontrasta med besedilom in ozadjem je branje težavno, še posebej za slabovidne.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Pri besedilu, ki je večje od 18 pik (če je krepko, pa od 14 pik), mora biti kontrastno razmerje najmanj 3 : 1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Pri besedilu, ki je manjše od 18 pik (če je krepko, pa od 14 pik), mora biti kontrastno razmerje najmanj 4,5 : 1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Če je uporabljeno označevanje, ki vizualno oblikuje elemente kot seznam, ne kaže pa razmerja seznama, imajo lahko uporabniki težave pri navigiranju po informacijah.","why_523b3d8c":"Zakaj"},"sv-x-k12":{"accessibility_checker_b3af1f6c":"Tillgänglighetskontrollör","action_to_take_b626a99a":"Åtgärd att vidta:","add_a_caption_2a915239":"Lägg till en bildtext","add_alt_text_for_the_image_48cd88aa":"Lägg till alt text för bilden","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Intilliggande länkar med samma webbadress ska vara en enda länk.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attributtext ska inte innehålla mer än 120 tecken.","apply_781a2546":"Tillämpa","change_alt_text_92654906":"Ändra alt text","change_heading_tag_to_paragraph_a61e3113":"Ändra rubrikmärkning till stycke","change_text_color_1aecb912":"Ändra textfärg","check_accessibility_3c78211c":"Kontrollera tillgänglighet","checking_for_accessibility_issues_fac18c6d":"Kontrollerar tillgänglighetsproblem","close_accessibility_checker_29d1c51e":"Stäng tillgänglighetskontrollen","close_d634289d":"Stäng","column_e1ae5c64":"Kolumn","column_group_1c062368":"Kolumngrupp","decorative_image_fde98579":"Dekorativ-bild","element_starting_with_start_91bf4c3b":"Element som börjar med { start }","fix_heading_hierarchy_f60884c4":"Fast rubrik hierarki","format_as_a_list_142210c3":"Formatera som lista","header_column_f27433cb":"Rubrikkolumn","header_row_and_column_ec5b9ec":"Rubrikrad och kolumn","header_row_f33eb169":"Rubrikrad","heading_levels_should_not_be_skipped_3947c0e0":"Rubriknivåer bör inte hoppas över.","heading_starting_with_start_42a3e7f9":"Rubriker börjar med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Rubrikerna får inte innehålla mer än 120 tecken.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bildfilnamn ska inte användas som alt attribut som beskriver bildinnehållet.","image_with_filename_file_aacd7180":"Bild med filnamn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder ska innehålla ett alt attribut som beskriver bildinnehållet.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tangentbord navigerar till länkar via Tab-tangenten. Två intilliggande länkar som leder till samma destination kan vara förvirrande för användare av tangentbord.","learn_more_about_adjacent_links_2cb9762c":"Läs mer om närliggande länkar","learn_more_about_color_contrast_c019dfb9":"Läs mer om färgkontras","learn_more_about_organizing_page_headings_8a7caa2e":"Läs mer om att ordna sidhuvuden","learn_more_about_table_headers_5f5ee13":"Läs mer om tabellrubriker","learn_more_about_using_alt_text_for_images_5698df9a":"Läs mer om att använda alternativtexter för bilder","learn_more_about_using_captions_with_tables_36fe496f":"Läs mer om att använda rubriker med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Läs mer om att använda filnamn som alternativtext","learn_more_about_using_lists_4e6eb860":"Läs mer om att använda listor","learn_more_about_using_scope_attributes_with_table_20df49aa":"Läs mer om att använda omfångsattribut med tabeller","leave_as_is_4facfe55":"Lämna som det är","link_with_text_starting_with_start_b3fcbe71":"Länk med text som börjar med { start }","lists_should_be_formatted_as_lists_f862de8d":"Listor ska formateras som listor.","merge_links_2478df96":"Sammanfoga länkar","next_40e12421":"Nästa","no_accessibility_issues_were_detected_f8d3c875":"Inga tillgänglighetsproblem upptäcktes.","no_headers_9bc7dc7f":"Inga rubriker","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Stycke som börjar med { start }","prev_f82cbc48":"Föregående","remove_heading_style_5fdc8855":"Ta bort rubrikstil","row_fc0944a7":"Rad","row_group_979f5528":"Radgrupp","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, och filnamn är ofta meningslösa strängar av siffror och bokstäver som inte beskriver sammanhanget eller betydelsen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, som beskriver innehållet och innebörden av bilden. Alternativ text ska vara enkel och koncis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, som beskriver innehållet och innebörden av bilden.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabellrubriker ger riktning och innehållsomfattning.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabelltexter beskriver sammanhanget och den allmänna förståelsen av tabellen.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabellrubriker tillhandahåller riktning och överblick över innehållet.","set_header_scope_8c548f40":"Ange huvudomfattning","set_table_header_cfab13a0":"Ange tabellrubrik","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Visade användare bläddrar snabbt på webbsidor och letar efter stora eller fetstil rubriker. Användare av skärmläsare använder sig av rubriker för kontextuell förståelse. Rubriker ska använda rätt struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Visade användare bläddrar snabbt på webbsidor och letar efter stora eller fetstil rubriker. Användare av skärmläsare använder sig av rubriker för kontextuell förståelse. Rubriker ska vara koncisa inom den korrekta strukturen.","table_header_starting_with_start_ffcabba6":"Tabellrubriker börjar med { start }","table_starting_with_start_e7232848":"Tabell börjar med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabellrubriker ska ange omfattning.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller ska innehålla en bildtext som beskriver innehållet i tabellen.","tables_should_include_at_least_one_header_48779eac":"Tabeller ska innehålla minst en rubrik.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Texten är svår att läsa utan tillräcklig kontrast mellan text och bakgrund, speciellt för de med nedsatt syn.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text som är större än 18pt (eller fetstil 14pt) ska visa ett minimum-kontrastförhållande på 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text som är mindre än 18pt (eller fet 14pt) ska visa ett lägsta kontrastförhållande på 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Om kodningen visuellt formaterar objekt som listor men inte visar listans relation kan användare få svårt att navigera i informationen.","why_523b3d8c":"Varför"},"sv":{"accessibility_checker_b3af1f6c":"Tillgänglighetskontrollör","action_to_take_b626a99a":"Åtgärd att vidta:","add_a_caption_2a915239":"Lägg till en bildtext","add_alt_text_for_the_image_48cd88aa":"Lägg till alt text för bilden","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"Intilliggande länkar med samma webbadress ska vara en enda länk.","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"Alt attributtext ska inte innehålla mer än 120 tecken.","apply_781a2546":"Tillämpa","change_alt_text_92654906":"Ändra alt text","change_heading_tag_to_paragraph_a61e3113":"Ändra rubrikmärkning till stycke","change_text_color_1aecb912":"Ändra textfärg","check_accessibility_3c78211c":"Kontrollera tillgänglighet","checking_for_accessibility_issues_fac18c6d":"Kontrollerar tillgänglighetsproblem","close_accessibility_checker_29d1c51e":"Stäng tillgänglighetskontrollen","close_d634289d":"Stäng","column_e1ae5c64":"Kolumn","column_group_1c062368":"Kolumngrupp","decorative_image_fde98579":"Dekorativ-bild","element_starting_with_start_91bf4c3b":"Element som börjar med { start }","fix_heading_hierarchy_f60884c4":"Fast rubrik hierarki","format_as_a_list_142210c3":"Formatera som lista","header_column_f27433cb":"Rubrikkolumn","header_row_and_column_ec5b9ec":"Rubrikrad och kolumn","header_row_f33eb169":"Rubrikrad","heading_levels_should_not_be_skipped_3947c0e0":"Rubriknivåer bör inte hoppas över.","heading_starting_with_start_42a3e7f9":"Rubriker börjar med { start }","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"Rubrikerna får inte innehålla mer än 120 tecken.","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"Bildfilnamn ska inte användas som alt attribut som beskriver bildinnehållet.","image_with_filename_file_aacd7180":"Bild med filnamn { file }","images_should_include_an_alt_attribute_describing__b86d6a86":"Bilder ska innehålla ett alt attribut som beskriver bildinnehållet.","issue_num_total_f94536cf":"Problem { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"Tangentbord navigerar till länkar via Tab-tangenten. Två intilliggande länkar som leder till samma destination kan vara förvirrande för användare av tangentbord.","learn_more_about_adjacent_links_2cb9762c":"Läs mer om närliggande länkar","learn_more_about_color_contrast_c019dfb9":"Läs mer om färgkontras","learn_more_about_organizing_page_headings_8a7caa2e":"Läs mer om att ordna sidhuvuden","learn_more_about_table_headers_5f5ee13":"Läs mer om tabellrubriker","learn_more_about_using_alt_text_for_images_5698df9a":"Läs mer om att använda alternativtexter för bilder","learn_more_about_using_captions_with_tables_36fe496f":"Läs mer om att använda rubriker med tabeller","learn_more_about_using_filenames_as_alt_text_264286af":"Läs mer om att använda filnamn som alternativtext","learn_more_about_using_lists_4e6eb860":"Läs mer om att använda listor","learn_more_about_using_scope_attributes_with_table_20df49aa":"Läs mer om att använda omfångsattribut med tabeller","leave_as_is_4facfe55":"Lämna som det är","link_with_text_starting_with_start_b3fcbe71":"Länk med text som börjar med { start }","lists_should_be_formatted_as_lists_f862de8d":"Listor ska formateras som listor.","merge_links_2478df96":"Sammanfoga länkar","next_40e12421":"Nästa","no_accessibility_issues_were_detected_f8d3c875":"Inga tillgänglighetsproblem upptäcktes.","no_headers_9bc7dc7f":"Inga rubriker","none_3b5e34d2":"Ingen","paragraph_starting_with_start_a59923f8":"Stycke som börjar med { start }","prev_f82cbc48":"Föregående","remove_heading_style_5fdc8855":"Ta bort rubrikstil","row_fc0944a7":"Rad","row_group_979f5528":"Radgrupp","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, och filnamn är ofta meningslösa strängar av siffror och bokstäver som inte beskriver sammanhanget eller betydelsen.","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, som beskriver innehållet och innebörden av bilden. Alternativ text ska vara enkel och koncis.","screen_readers_cannot_determine_what_is_displayed__a57e6723":"Skärmläsare kan inte bestämma vad som visas i en bild utan alternativ text, som beskriver innehållet och innebörden av bilden.","screen_readers_cannot_interpret_tables_without_the_bd861652":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabellrubriker ger riktning och innehållsomfattning.","screen_readers_cannot_interpret_tables_without_the_e62912d5":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabelltexter beskriver sammanhanget och den allmänna förståelsen av tabellen.","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"Skärmläsare kan inte tolka tabeller utan rätt struktur. Tabellrubriker tillhandahåller riktning och överblick över innehållet.","set_header_scope_8c548f40":"Ange huvudomfattning","set_table_header_cfab13a0":"Ange tabellrubrik","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"Visade användare bläddrar snabbt på webbsidor och letar efter stora eller fetstil rubriker. Användare av skärmläsare använder sig av rubriker för kontextuell förståelse. Rubriker ska använda rätt struktur.","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"Visade användare bläddrar snabbt på webbsidor och letar efter stora eller fetstil rubriker. Användare av skärmläsare använder sig av rubriker för kontextuell förståelse. Rubriker ska vara koncisa inom den korrekta strukturen.","table_header_starting_with_start_ffcabba6":"Tabellrubriker börjar med { start }","table_starting_with_start_e7232848":"Tabell börjar med { start }","tables_headers_should_specify_scope_5abf3a8e":"Tabellrubriker ska ange omfattning.","tables_should_include_a_caption_describing_the_con_e91e78fc":"Tabeller ska innehålla en bildtext som beskriver innehållet i tabellen.","tables_should_include_at_least_one_header_48779eac":"Tabeller ska innehålla minst en rubrik.","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"Texten är svår att läsa utan tillräcklig kontrast mellan text och bakgrund, speciellt för de med nedsatt syn.","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"Text som är större än 18pt (eller fetstil 14pt) ska visa ett minimum-kontrastförhållande på 3:1.","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"Text som är mindre än 18pt (eller fet 14pt) ska visa ett lägsta kontrastförhållande på 4,5:1.","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"Om kodningen visuellt formaterar objekt som listor men inte visar listans relation kan användare få svårt att navigera i informationen.","why_523b3d8c":"Varför"},"zh-HK":{"accessibility_checker_b3af1f6c":"可訪問性檢查器","action_to_take_b626a99a":"執行的動作：","add_a_caption_2a915239":"添加字幕","add_alt_text_for_the_image_48cd88aa":"為圖像添加替代文字","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"URL 相同的相鄰連結應為單一連結。","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"替代屬性文字不應包含多於 120 個字元。","apply_781a2546":"應用","change_alt_text_92654906":"變更替代文字","change_heading_tag_to_paragraph_a61e3113":"變更標題標籤為段落","change_text_color_1aecb912":"變更文字顏色","check_accessibility_3c78211c":"檢查可訪問性","checking_for_accessibility_issues_fac18c6d":"檢查可訪問性問題","close_accessibility_checker_29d1c51e":"關閉可訪問性檢查器","close_d634289d":"關閉","column_e1ae5c64":"欄","column_group_1c062368":"欄組","decorative_image_fde98579":"裝飾圖像","element_starting_with_start_91bf4c3b":"以 { start } 開始的元素","fix_heading_hierarchy_f60884c4":"固定標題階層","format_as_a_list_142210c3":"使用清單格式","header_column_f27433cb":"標題欄","header_row_and_column_ec5b9ec":"標題行與欄","header_row_f33eb169":"標題行","heading_levels_should_not_be_skipped_3947c0e0":"不應跳過標題層。","heading_starting_with_start_42a3e7f9":"以 { start } 開始的標題","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"標題不應包含多於 120 個字元。","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"圖像檔案名稱不應用作說明圖像內容的替代屬性。","image_with_filename_file_aacd7180":"檔案名稱為 { file } 的圖像","images_should_include_an_alt_attribute_describing__b86d6a86":"圖像應包括說明圖像內容的替代屬性。","issue_num_total_f94536cf":"問題 { num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"使用 Tab 鍵以鍵盤導航至連結。目的地相同的兩個相連連結可能對鍵盤使用者造成混亂。","learn_more_about_adjacent_links_2cb9762c":"了解更多有關相鄰連結","learn_more_about_color_contrast_c019dfb9":"了解更多有關顏色對比","learn_more_about_organizing_page_headings_8a7caa2e":"了解更多有關組織頁面標題","learn_more_about_table_headers_5f5ee13":"了解更多有關表格標題","learn_more_about_using_alt_text_for_images_5698df9a":"了解更多有關使用圖像的 alt 文字","learn_more_about_using_captions_with_tables_36fe496f":"了解更多有關使用表格的字幕","learn_more_about_using_filenames_as_alt_text_264286af":"了解更多有關使用檔案名稱作為 alt 文字","learn_more_about_using_lists_4e6eb860":"了解更多有關使用清單","learn_more_about_using_scope_attributes_with_table_20df49aa":"了解更多有關使用有表格的範圍屬性","leave_as_is_4facfe55":"不需變更","link_with_text_starting_with_start_b3fcbe71":"文字以 { start } 開始的連結","lists_should_be_formatted_as_lists_f862de8d":"列表應使用清單格式。","merge_links_2478df96":"合併連結","next_40e12421":"下一個","no_accessibility_issues_were_detected_f8d3c875":"並無偵察任何可訪問性問題","no_headers_9bc7dc7f":"無標題","none_3b5e34d2":"無","paragraph_starting_with_start_a59923f8":"以 { start } 開始的段落","prev_f82cbc48":"預覽","remove_heading_style_5fdc8855":"移除標題樣式","row_fc0944a7":"行","row_group_979f5528":"行組","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"沒有替代文字，屏幕閱讀器不能判斷圖像所顯示的是什麼，而檔案名稱一般都是無意義的數字與字母串，並不能說明內容或意義。","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"沒有說明圖像內容與意義的替代文字，屏幕閱讀器不能判斷圖像所顯示的是什麼。替代文字應為精簡。","screen_readers_cannot_determine_what_is_displayed__a57e6723":"沒有說明圖像內容與意義的替代文字，屏幕閱讀器不能判斷圖像所顯示的是什麼。","screen_readers_cannot_interpret_tables_without_the_bd861652":"沒有適當的結構，屏幕閱讀器不能解讀表格。表格標題能提供方向與內容範圍。","screen_readers_cannot_interpret_tables_without_the_e62912d5":"沒有適當的結構，屏幕閱讀器不能解讀表格。表格字幕說明表格的內容與一般理解。","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"沒有適當的結構，屏幕閱讀器不能解讀表格。表格標題能提供方向與內容概要。","set_header_scope_8c548f40":"設定標題範圍","set_table_header_cfab13a0":"設定表格標題","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"有視力的使用者能迅速瀏覽網頁，尋找大型或粗體標題。屏幕閱讀器使用者依靠標題理解內容背景。標題應使用適當的結構。","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"有視力的使用者能迅速瀏覽網頁，尋找大型或粗體標題。屏幕閱讀器使用者依靠標題理解內容背景。標題應使用適當的結構，並保持精簡。","table_header_starting_with_start_ffcabba6":"以 { start } 開始的表格標題","table_starting_with_start_e7232848":"以 { start } 開始的表格","tables_headers_should_specify_scope_5abf3a8e":"表格標題應指定範圍。","tables_should_include_a_caption_describing_the_con_e91e78fc":"表格應包括字幕說明表格內容。","tables_should_include_at_least_one_header_48779eac":"表格應包括最少一個標題。","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"文字與背景之間對比不足，難以閱讀文字，對於視力較差的人尤其如是。","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"大小為 18pt（或粗體 14pt）以上的文字的色彩比最少應達到 3:1。","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"大小為 18pt（或粗體 14pt）以下的文字的色彩比最少應達到 4.5:1。","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"如果使用標記使項目看起來像清單，但並未標示其清單關係，使用者瀏覽資訊時或會有困難。","why_523b3d8c":"為什麼"},"zh":{"accessibility_checker_b3af1f6c":"辅助功能检查器","action_to_take_b626a99a":"要执行的操作：","add_a_caption_2a915239":"添加说明","add_alt_text_for_the_image_48cd88aa":"为图像添加替换文本","adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c":"具有相同 URL 的相邻链接应该为一个单链接。","alt_attribute_text_should_not_contain_more_than_12_e21d4040":"替换属性文本不得超过 120 个字符。","apply_781a2546":"申请","change_alt_text_92654906":"更改替换文本","change_heading_tag_to_paragraph_a61e3113":"更改段落的标题标签","change_text_color_1aecb912":"更改文本颜色","check_accessibility_3c78211c":"检查辅助功能","checking_for_accessibility_issues_fac18c6d":"正在检查辅助功能问题","close_accessibility_checker_29d1c51e":"关闭辅助功能检查器","close_d634289d":"关闭","column_e1ae5c64":"列","column_group_1c062368":"列组","decorative_image_fde98579":"装饰图片","element_starting_with_start_91bf4c3b":"以{ start }开始的元素","fix_heading_hierarchy_f60884c4":"固定标题层次结构","format_as_a_list_142210c3":"使用列表格式","header_column_f27433cb":"标题列","header_row_and_column_ec5b9ec":"标题行和列","header_row_f33eb169":"标题行","heading_levels_should_not_be_skipped_3947c0e0":"不得跳过标题级别。","heading_starting_with_start_42a3e7f9":"以{ start }开始的标题","headings_should_not_contain_more_than_120_characte_3c0e0cb3":"标题不得超过 120 个字符。","image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780":"不得使用图像文件名作为描述图像内容的替换属性。","image_with_filename_file_aacd7180":"文件名为{ file }的图像","images_should_include_an_alt_attribute_describing__b86d6a86":"图像应包括一个描述图像内容的替换属性。","issue_num_total_f94536cf":"问题{ num }/{ total }","keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82":"键盘使用 Tab 键导航至链接。转至相同目的地的两个相邻链接可以对键盘用户造成混淆。","learn_more_about_adjacent_links_2cb9762c":"详细了解相邻链接","learn_more_about_color_contrast_c019dfb9":"详细了解色彩对比度","learn_more_about_organizing_page_headings_8a7caa2e":"详细了解组织页面标题","learn_more_about_table_headers_5f5ee13":"详细了解表标题","learn_more_about_using_alt_text_for_images_5698df9a":"详细了解为使用图片替换文本","learn_more_about_using_captions_with_tables_36fe496f":"详细了解将标题与表格一起使用","learn_more_about_using_filenames_as_alt_text_264286af":"详细了解使用文件名作为替换文本","learn_more_about_using_lists_4e6eb860":"详细了解使用列表","learn_more_about_using_scope_attributes_with_table_20df49aa":"详细了解将范围属性与表格一起使用","leave_as_is_4facfe55":"保持原状","link_with_text_starting_with_start_b3fcbe71":"具有以{ start }开始的文本的链接","lists_should_be_formatted_as_lists_f862de8d":"列表应使用列表格式。","merge_links_2478df96":"合并链接","next_40e12421":"下一步","no_accessibility_issues_were_detected_f8d3c875":"没有发现辅助功能问题。","no_headers_9bc7dc7f":"无标题","none_3b5e34d2":"无","paragraph_starting_with_start_a59923f8":"以{ start }开始的段落","prev_f82cbc48":"上一个","remove_heading_style_5fdc8855":"删除标题样式","row_fc0944a7":"行","row_group_979f5528":"行组","screen_readers_cannot_determine_what_is_displayed__6a5842ab":"如果没有替换文本，且文件名通常是不描述上下文或意义的无意义的数字和字母字符串，则屏幕读取器无法确定图像显示的内容。","screen_readers_cannot_determine_what_is_displayed__6f1ea667":"如果没有描述图像内容和意义的替换文本，则屏幕读取器无法确定图像显示的内容。替换文本应简单明了。","screen_readers_cannot_determine_what_is_displayed__a57e6723":"如果没有描述图像内容和意义的替换文本，则屏幕读取器无法确定图像显示的内容。","screen_readers_cannot_interpret_tables_without_the_bd861652":"屏幕读取器无法解读不具有正确结构的表格。表格标题提供说明和内容范围。","screen_readers_cannot_interpret_tables_without_the_e62912d5":"屏幕读取器无法解读不具有正确结构的表格。表格说明描述表格的上下文和对表格的一般理解。","screen_readers_cannot_interpret_tables_without_the_f0bdec0f":"屏幕读取器无法解读不具有正确结构的表格。表格标题提供说明和内容概述。","set_header_scope_8c548f40":"设置标题范围","set_table_header_cfab13a0":"设置表格标题","sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1":"视力好的用户快速浏览网页，查找大号字体或粗体标题。屏幕读取器用户依赖于标题了解上下文。标题应使用正确的结构。","sighted_users_browse_web_pages_quickly_looking_for_ade806f5":"视力好的用户快速浏览网页，查找大号字体或粗体标题。屏幕读取器用户依赖于标题了解上下文。标题应在正确的结构内保持简洁。","table_header_starting_with_start_ffcabba6":"以{ start }开始的表格标题","table_starting_with_start_e7232848":"以{ start }开始的表格","tables_headers_should_specify_scope_5abf3a8e":"表格标题应确定范围。","tables_should_include_a_caption_describing_the_con_e91e78fc":"表格应包括描述表格内容的说明。","tables_should_include_at_least_one_header_48779eac":"表格应包括至少一个标题。","text_is_difficult_to_read_without_sufficient_contr_69e62bd6":"文字和背景之间的对比度不足，因此文字阅读困难，尤其是对于视力较弱的人员而言。","text_larger_than_18pt_or_bold_14pt_should_display__5c364db6":"文字大于 18 磅（或粗体 14 磅）时显示的对比度应至少为 3:1。","text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b":"文字小于 18 磅（或粗体 14 磅）时显示的对比度应至少为 4.5:1。","when_markup_is_used_that_visually_formats_items_as_f941fc1b":"如果对使用列表格式显示的项目使用标记，但不指示列表关系，用户可能在浏览信息时会遇到困难。","why_523b3d8c":"原因"}}')},THLb:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.calculateChange=function(e,t,a,n,r){var i=r.clientWidth
var o=r.clientHeight
var s="number"===typeof e.pageX?e.pageX:e.touches[0].pageX
var l="number"===typeof e.pageY?e.pageY:e.touches[0].pageY
var _=s-(r.getBoundingClientRect().left+window.pageXOffset)
var d=l-(r.getBoundingClientRect().top+window.pageYOffset)
if("vertical"===a){var c=void 0
c=d<0?0:d>o?1:Math.round(100*d/o)/100
if(t.a!==c)return{h:t.h,s:t.s,l:t.l,a:c,source:"rgb"}}else{var u=void 0
u=_<0?0:_>i?1:Math.round(100*_/i)/100
if(n!==u)return{h:t.h,s:t.s,l:t.l,a:u,source:"rgb"}}return null}},TM95:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
var n=a("yOY4")
Object.defineProperty(t,"Alpha",{enumerable:true,get:function(){return c(n).default}})
var r=a("Nq3d")
Object.defineProperty(t,"Checkboard",{enumerable:true,get:function(){return c(r).default}})
var i=a("AnK5")
Object.defineProperty(t,"EditableInput",{enumerable:true,get:function(){return c(i).default}})
var o=a("HlQe")
Object.defineProperty(t,"Hue",{enumerable:true,get:function(){return c(o).default}})
var s=a("Ojt5")
Object.defineProperty(t,"Raised",{enumerable:true,get:function(){return c(s).default}})
var l=a("ccyi")
Object.defineProperty(t,"Saturation",{enumerable:true,get:function(){return c(l).default}})
var _=a("UGzO")
Object.defineProperty(t,"ColorWrap",{enumerable:true,get:function(){return c(_).default}})
var d=a("Ba7A")
Object.defineProperty(t,"Swatch",{enumerable:true,get:function(){return c(d).default}})
function c(e){return e&&e.__esModule?e:{default:e}}},UGzO:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.ColorWrap=void 0
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||false
n.configurable=true
"value"in n&&(n.writable=true)
Object.defineProperty(e,n.key,n)}}return function(t,a,n){a&&e(t.prototype,a)
n&&e(t,n)
return t}}()
var i=a("q1tI")
var o=c(i)
var s=a("sEfC")
var l=c(s)
var _=a("p8yl")
var d=c(_)
function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=t.ColorWrap=function(e){var t=function(t){h(a,t)
function a(e){u(this,a)
var t=f(this,(a.__proto__||Object.getPrototypeOf(a)).call(this))
t.handleChange=function(e,a){var n=d.default.simpleCheckForValidColor(e)
if(n){var r=d.default.toState(e,e.h||t.state.oldHue)
t.setState(r)
t.props.onChangeComplete&&t.debounce(t.props.onChangeComplete,r,a)
t.props.onChange&&t.props.onChange(r,a)}}
t.handleSwatchHover=function(e,a){var n=d.default.simpleCheckForValidColor(e)
if(n){var r=d.default.toState(e,e.h||t.state.oldHue)
t.props.onSwatchHover&&t.props.onSwatchHover(r,a)}}
t.state=n({},d.default.toState(e.color,0))
t.debounce=(0,l.default)(function(e,t,a){e(t,a)},100)
return t}r(a,[{key:"componentWillReceiveProps",value:function(e){this.setState(n({},d.default.toState(e.color,this.state.oldHue)))}},{key:"render",value:function(){var t={}
this.props.onSwatchHover&&(t.onSwatchHover=this.handleSwatchHover)
return o.default.createElement(e,n({},this.props,this.state,{onChange:this.handleChange},t))}}])
return a}(i.PureComponent||i.Component)
t.propTypes=n({},e.propTypes)
t.defaultProps=n({},e.defaultProps,{color:{h:250,s:.5,l:.2,a:1}})
return t}
t.default=b},Ui1M:function(e,t,a){"use strict"
var n=a("TqRt")
var r=a("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.PopoverContent=t.PopoverTrigger=t.default=void 0
var i=n(a("MVZn"))
var o=n(a("W8MJ"))
var s=n(a("lwsE"))
var l=n(a("a1gu"))
var _=n(a("Nsbk"))
var d=n(a("7W2i"))
a("dx2U")
var c=r(a("q1tI"))
var u=n(a("17x9"))
var f=n(a("3zPy"))
var h=n(a("0NqH"))
var b=n(a("XbQQ"))
var p=n(a("Jg1x"))
var m=n(a("LqRq"))
var g=n(a("SJAx"))
var v=r(a("4tjX"))
var k=a("IzEL")
var y=n(a("KB5V"))
var w=n(a("8dII"))
var x=r(a("q9F9"))
var z=n(a("CI6L"))
var j=n(a("eHKC"))
var O=n(a("cOnk"))
var T=n(a("4hSX"))
var S=n(a("xdG6"))
var C=n(a("t5Un"))
var A=n(a("h/+2"))
var E=a("2lwo")
var M=n(a("ZJ40"))
var L=n(a("A5Jy"))
var P=a("DfZk")
var R=a("6Rkx")
var B=n(a("5WdN"))
var I=n(a("Zuoh"))
var F,N,q,W,D,H,K,G,Z,U,V,X,Q,Y,J
var $=(F=(0,I.default)(),F(N=(W=q=function(e){(0,d.default)(t,e)
function t(){(0,s.default)(this,t)
return(0,l.default)(this,(0,_.default)(t).apply(this,arguments))}return t}(x.default),q.displayName="PopoverTrigger",W))||N)
t.PopoverTrigger=$
var ee=(D=(0,I.default)(),D(H=(G=K=function(e){(0,d.default)(t,e)
function t(){(0,s.default)(this,t)
return(0,l.default)(this,(0,_.default)(t).apply(this,arguments))}return t}(x.default),K.displayName="PopoverContent",G))||H)
t.PopoverContent=ee
var te=(Z=(0,I.default)(),U=(0,M.default)("3.0.0",{renderOffscreen:"shouldRenderOffscreen",rootClose:"shouldCloseOnDocumentClick"}),V=(0,M.default)("5.0.0",{closeButtonLabel:true,closeButtonRef:true,applicationElement:true}),X=(0,m.default)(),Z(Q=U(Q=V(Q=X(Q=(J=Y=function(e){(0,d.default)(t,e)
function t(e){var a;(0,s.default)(this,t)
a=(0,l.default)(this,(0,_.default)(t).call(this,e))
a.show=function(){"undefined"===typeof a.props.show&&a.setState({show:true})
"function"===typeof a.props.onToggle&&a.props.onToggle(true)}
a.hide=function(e,t){var n=a.props,r=n.onDismiss,i=n.onToggle,o=n.show
"undefined"===typeof o?a.setState(function(a){var n=a.show
n&&r(e,t)
return{show:false}}):o&&r(e,t)
i(false)}
a.toggle=function(){a.shown?a.hide():a.show()}
a.handleDialogDismiss=function(){var e
if(!a.props.shouldReturnFocus&&a.props.shouldFocusContentOnTriggerBlur){var t=(0,y.default)(a._trigger)
t&&"function"===typeof t.focus&&t.focus()}(e=a).hide.apply(e,arguments)}
a.handleDialogBlur=function(e){if(e.keyCode===f.default.codes.tab&&e.shiftKey&&a.props.shouldFocusContentOnTriggerBlur)return
a.hide(e)}
a.handleTriggerKeyDown=function(e){if(!a.props.shouldFocusContentOnTriggerBlur)return
if(e.keyCode===f.default.codes.tab&&!e.shiftKey){e.preventDefault()
a._raf.push((0,O.default)(function(){a._dialog&&a._dialog.focus()}))}}
a.handleTriggerBlur=function(e){a.props.on.indexOf("focus")>-1&&a._raf.push((0,O.default)(function(){(0,z.default)(a._view)||a.hide()}))}
a.handlePositionChanged=function(e){var t=e.placement
a.setState((0,i.default)({closeButtonPlacement:a.getCloseButtonPlacement(a.props),placement:t},a.computeOffsets(t)))}
a.state={placement:e.placement,offsetX:e.offsetX,offsetY:e.offsetY}
"undefined"===typeof e.show&&(a.state.show=e.defaultShow)
a._id=a.props.id||(0,L.default)("Popover")
a._raf=[]
return a}(0,o.default)(t,[{key:"componentWillMount",value:function(){var e=this
this._handleMouseOver=A.default.bind(null,function(){e.show()})
this._handleMouseOut=A.default.bind(null,function(){e.hide()})}},{key:"componentWillUnmount",value:function(){this._raf.forEach(function(e){return e.cancel()})
this._raf=[]}},{key:"shouldComponentUpdate",value:function(e,t){return!((0,S.default)(this.props,e)&&(0,S.default)(this.state,t))}},{key:"getCloseButtonPlacement",value:function(e){var t=e.placement.split(" ")
return t.indexOf("end")>=0?"start":"end"}},{key:"renderTrigger",value:function(){var e=this
var a=(0,x.pick)(t.Trigger,this.props.children)
if(a){var n=this.props,r=n.on,i=n.shouldContainFocus
var o
var s
var l
var _
var d
r.indexOf("click")>-1&&(o=function(){e.toggle()})
if(r.indexOf("hover")>-1){_=this._handleMouseOver
l=this._handleMouseOut}r.indexOf("focus")>-1&&(s=function(){e.show()})
d=i?this.shown?"true":"false":null
a=(0,T.default)(a,{ref:function(t){e._trigger=t},"aria-expanded":d,onKeyDown:(0,j.default)(this.handleTriggerKeyDown,this.props.onKeyDown),onClick:(0,j.default)(o,this.props.onClick),onBlur:(0,j.default)(this.handleTriggerBlur,this.props.onBlur),onFocus:(0,j.default)(s,this.props.onFocus),onMouseOut:(0,j.default)(l,this.props.onMouseOut),onMouseOver:(0,j.default)(_,this.props.onMouseOver)})}return a}},{key:"renderCloseButton",value:function(){var e=this
return this.props.closeButtonLabel?c.default.createElement(g.default,{placement:this.state.closeButtonPlacement,offset:"x-small",variant:"inverse"===this.props.variant?"icon-inverse":"icon",buttonRef:function(t){e._closeButton=t
"function"===typeof e.props.closeButtonRef&&e.props.closeButtonRef(t)},onClick:this.hide},this.props.closeButtonLabel):null}},{key:"renderContent",value:function(){var e=this
var a=(0,x.pick)(t.Content,this.props.children)
this.shown&&(a=c.default.createElement(p.default,Object.assign({},(0,E.pickProps)(this.props,p.default.propTypes),{ref:function(t){return e._dialog=t},display:"block",open:this.shown,onBlur:this.handleDialogBlur,onDismiss:this.handleDialogDismiss,defaultFocusElement:this.defaultFocusElement,shouldFocusOnOpen:!this.props.shouldFocusContentOnTriggerBlur}),a))
if(this.shown||this.props.shouldRenderOffscreen){var n
var r={ref:function(t){return e._view=t},elementRef:this.props.contentRef,background:this.props.variant,stacking:this.props.stacking,shadow:this.props.shadow,display:"block"}
var o=this.state.placement
if(this.props.withArrow){n=h.default
r=(0,i.default)({},r,{placement:this.rtl?(0,R.mirrorHorizontalPlacement)(o," "):o})}else{n=b.default
r=(0,i.default)({},r,{borderWidth:"small",borderRadius:"medium"})}return c.default.createElement(n,r,this.renderCloseButton(),a)}return null}},{key:"computeOffsets",value:function(e){var t=this.props,a=t.offsetX,n=t.offsetY
if(this.props.alignArrow&&this._view){var r=(0,P.parsePlacement)(e)[1]
var i=this._view.theme,o=i.arrowSize,s=i.arrowBorderWidth
var l=2*((0,C.default)(o)+(0,C.default)(s))
"start"===r?a=l:"end"===r?a=-l:"top"===r?n=l:"bottom"===r&&(n=-l)}return{offsetX:a,offsetY:n}}},{key:"render",value:function(){var e=this.positionProps
return this.props.positionTarget?c.default.createElement("span",null,this.renderTrigger(),c.default.createElement(v.default,e,c.default.createElement(v.PositionContent,null,this.renderContent()))):c.default.createElement(v.default,e,c.default.createElement(v.PositionTarget,null,this.renderTrigger()),c.default.createElement(v.PositionContent,null,this.renderContent()))}},{key:"placement",get:function(){var e=this.props.placement
this.rtl&&(e=(0,R.mirrorHorizontalPlacement)(e," "))
return!this.shown&&this.props.shouldRenderOffscreen?"offscreen":e}},{key:"shown",get:function(){return"undefined"===typeof this.props.show?this.state.show:this.props.show}},{key:"defaultFocusElement",get:function(){return this.props.defaultFocusElement}},{key:"positionProps",get:function(){return(0,i.default)({},(0,E.pickProps)(this.props,v.default.propTypes),{offsetX:this.state.offsetX,offsetY:this.state.offsetY,trackPosition:this.shown,placement:this.placement,onPositioned:(0,j.default)(this.handlePositionChanged,this.props.onShow),onPositionChanged:this.handlePositionChanged,target:this.props.positionTarget,id:this._id})}}])
t.displayName="Popover"
return t}(c.Component),Y.Trigger=$,Y.Content=ee,Y.propTypes={children:k.Children.oneOf([$,ee]),placement:w.default.placement,on:u.default.oneOfType([u.default.oneOf(["click","hover","focus"]),u.default.arrayOf(u.default.oneOf(["click","hover","focus"]))]),variant:u.default.oneOf(["default","inverse"]),shadow:B.default.shadow,stacking:B.default.stacking,defaultShow:u.default.bool,show:(0,k.controllable)(u.default.bool,"onToggle","defaultShow"),contentRef:u.default.func,onToggle:u.default.func,onClick:u.default.func,onFocus:u.default.func,onBlur:u.default.func,onKeyDown:u.default.func,onShow:u.default.func,onMouseOver:u.default.func,onMouseOut:u.default.func,onDismiss:u.default.func,withArrow:u.default.bool,closeButtonLabel:u.default.string,closeButtonRef:u.default.func,label:u.default.string,defaultFocusElement:u.default.oneOfType([u.default.element,u.default.func]),shouldRenderOffscreen:u.default.bool,shouldContainFocus:u.default.bool,shouldReturnFocus:u.default.bool,shouldCloseOnDocumentClick:u.default.bool,shouldCloseOnEscape:u.default.bool,offsetX:u.default.oneOfType([u.default.string,u.default.number]),offsetY:u.default.oneOfType([u.default.string,u.default.number]),onPositionChanged:u.default.func,onPositioned:u.default.func,trackPosition:u.default.bool,constrain:w.default.constrain,mountNode:w.default.mountNode,insertAt:u.default.oneOf(["bottom","top"]),liveRegion:u.default.oneOfType([u.default.arrayOf(u.default.element),u.default.element,u.default.func]),positionTarget:u.default.oneOfType([k.element,u.default.func]),alignArrow:u.default.bool,id:u.default.string,shouldFocusContentOnTriggerBlur:u.default.bool},Y.defaultProps={children:null,onToggle:function(e){},onClick:function(e){},onFocus:function(e){},onBlur:function(e){},onMouseOver:function(e){},onMouseOut:function(e){},onShow:function(e){},onDismiss:function(e,t){},placement:"bottom center",stacking:"topmost",shadow:"resting",offsetX:0,offsetY:0,variant:"default",on:["hover","focus"],contentRef:function(e){},defaultShow:false,withArrow:true,trackPosition:true,constrain:"window",onPositioned:function(e){},onPositionChanged:function(e){},shouldRenderOffscreen:false,shouldContainFocus:false,shouldReturnFocus:true,shouldCloseOnDocumentClick:true,shouldFocusContentOnTriggerBlur:false,shouldCloseOnEscape:true,defaultFocusElement:null,label:null,mountNode:null,insertAt:"bottom",liveRegion:null,positionTarget:null,alignArrow:false,id:void 0,show:void 0,closeButtonRef:void 0,closeButtonLabel:void 0,onKeyDown:void 0},J))||Q)||Q)||Q)||Q)
var ae=te
t.default=ae},UnXY:function(e,t,a){"use strict"
t.__esModule=true
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
var r=a("Qrca")
var i=u(r)
var o=a("q1tI")
var s=u(o)
var l=a("17x9")
var _=u(l)
var d=a("6DQo")
u(d)
var c=a("8PcY")
function u(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}_.default.any,_.default.func,_.default.node
var p={component:"span",childFactory:function(e){return e}}
var m=function(e){b(t,e)
function t(a,r){f(this,t)
var i=h(this,e.call(this,a,r))
i.performAppear=function(e,t){i.currentlyTransitioningKeys[e]=true
t.componentWillAppear?t.componentWillAppear(i._handleDoneAppearing.bind(i,e,t)):i._handleDoneAppearing(e,t)}
i._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear()
delete i.currentlyTransitioningKeys[e]
var a=(0,c.getChildMapping)(i.props.children)
a&&a.hasOwnProperty(e)||i.performLeave(e,t)}
i.performEnter=function(e,t){i.currentlyTransitioningKeys[e]=true
t.componentWillEnter?t.componentWillEnter(i._handleDoneEntering.bind(i,e,t)):i._handleDoneEntering(e,t)}
i._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter()
delete i.currentlyTransitioningKeys[e]
var a=(0,c.getChildMapping)(i.props.children)
a&&a.hasOwnProperty(e)||i.performLeave(e,t)}
i.performLeave=function(e,t){i.currentlyTransitioningKeys[e]=true
t.componentWillLeave?t.componentWillLeave(i._handleDoneLeaving.bind(i,e,t)):i._handleDoneLeaving(e,t)}
i._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave()
delete i.currentlyTransitioningKeys[e]
var a=(0,c.getChildMapping)(i.props.children)
a&&a.hasOwnProperty(e)?i.keysToEnter.push(e):i.setState(function(t){var a=n({},t.children)
delete a[e]
return{children:a}})}
i.childRefs=Object.create(null)
i.state={children:(0,c.getChildMapping)(a.children)}
return i}t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={}
this.keysToEnter=[]
this.keysToLeave=[]}
t.prototype.componentDidMount=function(){var e=this.state.children
for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])}
t.prototype.componentWillReceiveProps=function(e){var t=(0,c.getChildMapping)(e.children)
var a=this.state.children
this.setState({children:(0,c.mergeChildMappings)(a,t)})
for(var n in t){var r=a&&a.hasOwnProperty(n)
!t[n]||r||this.currentlyTransitioningKeys[n]||this.keysToEnter.push(n)}for(var i in a){var o=t&&t.hasOwnProperty(i)
!a[i]||o||this.currentlyTransitioningKeys[i]||this.keysToLeave.push(i)}}
t.prototype.componentDidUpdate=function(){var e=this
var t=this.keysToEnter
this.keysToEnter=[]
t.forEach(function(t){return e.performEnter(t,e.childRefs[t])})
var a=this.keysToLeave
this.keysToLeave=[]
a.forEach(function(t){return e.performLeave(t,e.childRefs[t])})}
t.prototype.render=function(){var e=this
var t=[]
var a=function(a){var n=e.state.children[a]
if(n){var r="string"!==typeof n.ref
var o=e.props.childFactory(n)
var l=function(t){e.childRefs[a]=t}
o===n&&r&&(l=(0,i.default)(n.ref,l))
t.push(s.default.cloneElement(o,{key:a,ref:l}))}}
for(var r in this.state.children)a(r)
var o=n({},this.props)
delete o.transitionLeave
delete o.transitionName
delete o.transitionAppear
delete o.transitionEnter
delete o.childFactory
delete o.transitionLeaveTimeout
delete o.transitionEnterTimeout
delete o.transitionAppearTimeout
delete o.component
return s.default.createElement(this.props.component,o,t)}
return t}(s.default.Component)
m.displayName="TransitionGroup"
m.propTypes={}
m.defaultProps=p
t.default=m
e.exports=t["default"]},V6RX:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.walk=l
t.select=_
t.prepend=d
t.changeTag=c
t.pathForNode=u
t.nodeByPath=f
t.onlyContainsLink=h
t.splitStyleAttribute=b
t.createStyleString=p
t.hasTextNode=m
var r=n(a("uV+b"))
var i=1
var o=25
var s=Array.prototype.indexOf
function l(e,t,a){var n=[{node:e,index:0}]
var r=function e(){var r=o
while(n.length>0&&r>0){var s=n.length-1
var l=n[s].node.childNodes[n[s].index]
if(l){n[s].index+=1
if(l.nodeType===i){t(l)
n.push({node:l,index:0})
r-=0}}else n.pop()}setTimeout(n.length>0?e:a,0)}
r()}function _(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.default
if(null==t)return
t.scrollIntoView()
a(e,t)}function d(e,t){e.childNodes.length>0?e.insertBefore(t,e.childNodes[0]):e.appendChild(t)}function c(e,t){var a=e.ownerDocument.createElement(t)
while(e.firstChild)a.appendChild(e.firstChild)
for(var n=e.attributes.length-1;n>=0;--n)a.attributes.setNamedItem(e.attributes[n].cloneNode())
e.parentNode.replaceChild(a,e)
return a}function u(e,t){var a=[]
var n=t
while(true){if(n==e)return a
var r=n.parentNode
if(null==r)return null
a.push(s.call(r.childNodes,n))
n=r}}function f(e,t){var a=e
var n
while(void 0!==(n=t.pop())){a=a.childNodes[n]
if(null==a)return null}return a}function h(e){var t=e.getElementsByTagName("a")
return!!t.length&&t[0].textContent===e.textContent}function b(e){var t=e.split(";")
return t.reduce(function(e,t){var a=t.split(":")
2===a.length&&(e[a[0].trim()]=a[1].trim())
return e},{})}function p(e){var t=Object.keys(e).map(function(t){return"".concat(t,":").concat(e[t])}).join(";")
t&&(t="".concat(t,";"))
return t}function m(e){var t=Array.from(e.childNodes)
return t.some(function(e){return e.nodeType===Node.TEXT_NODE})}},VOcB:function(e,t,a){"use strict"
function n(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=n(e.className,t):e.setAttribute("class",n(e.className&&e.className.baseVal||"",t))}},VVms:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.calculateChange=function(e,t,a){var n=a.getBoundingClientRect(),r=n.width,i=n.height
var o="number"===typeof e.pageX?e.pageX:e.touches[0].pageX
var s="number"===typeof e.pageY?e.pageY:e.touches[0].pageY
var l=o-(a.getBoundingClientRect().left+window.pageXOffset)
var _=s-(a.getBoundingClientRect().top+window.pageYOffset)
l<0?l=0:l>r?l=r:_<0?_=0:_>i&&(_=i)
var d=100*l/r
var c=-100*_/i+100
return{h:t.h,s:d,v:c,a:t.a,source:"rgb"}}},VYtm:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.hover=void 0
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
var r=a("q1tI")
var i=o(r)
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function _(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=t.hover=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span"
return function(a){_(r,a)
function r(){var a
var o,_,d
s(this,r)
for(var c=arguments.length,u=Array(c),f=0;f<c;f++)u[f]=arguments[f]
return d=(o=(_=l(this,(a=r.__proto__||Object.getPrototypeOf(r)).call.apply(a,[this].concat(u))),_),_.state={hover:false},_.handleMouseOver=function(){return _.setState({hover:true})},_.handleMouseOut=function(){return _.setState({hover:false})},_.render=function(){return i.default.createElement(t,{onMouseOver:_.handleMouseOver,onMouseOut:_.handleMouseOut},i.default.createElement(e,n({},_.props,_.state)))},o),l(_,d)}return r}(i.default.Component)}
t.default=d},VcUl:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var n=a("sUt/")
var r=i(n)
function i(e){return e&&e.__esModule?e:{default:e}}var o=["-webkit-",""]
function s(e,t){if("string"===typeof t&&!(0,r.default)(t)&&t.indexOf("cross-fade(")>-1)return o.map(function(e){return t.replace(/cross-fade\(/g,e+"cross-fade(")})}},W2jg:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){return e instanceof Object&&!Array.isArray(e)}},W3HW:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.flattenNames=void 0
var n=a("4qC0")
var r=c(n)
var i=a("Ag8Z")
var o=c(i)
var s=a("YO3V")
var l=c(s)
var _=a("3WF5")
var d=c(_)
function c(e){return e&&e.__esModule?e:{default:e}}var u=t.flattenNames=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
var a=[];(0,d.default)(t,function(t){Array.isArray(t)?e(t).map(function(e){return a.push(e)}):(0,l.default)(t)?(0,o.default)(t,function(e,t){true===e&&a.push(t)
a.push(t+"-"+e)}):(0,r.default)(t)&&a.push(t)})
return a}
t.default=u},WdG4:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){var t=e.borders,a=e.colors,n=e.spacing,r=e.typography
return{fontFamily:r.fontFamily,fontWeight:r.fontWeightNormal,lineHeight:r.lineHeightFit,h1FontSize:r.fontSizeXXLarge,h1FontWeight:r.fontWeightLight,h2FontSize:r.fontSizeXLarge,h2FontWeight:r.fontWeightNormal,h3FontSize:r.fontSizeLarge,h3FontWeight:r.fontWeightBold,h4FontSize:r.fontSizeMedium,h4FontWeight:r.fontWeightBold,h5FontSize:r.fontSizeSmall,h5FontWeight:r.fontWeightNormal,primaryInverseColor:a.textLightest,primaryColor:a.textDarkest,secondaryColor:a.textDark,secondaryInverseColor:a.textLight,brandColor:a.textBrand,warningColor:a.textWarning,errorColor:a.textDanger,successColor:a.textSuccess,borderPadding:n.xxxSmall,borderColor:a.borderMedium,borderWidth:t.widthSmall,borderStyle:t.style}}n.canvas=function(e){return{primaryColor:e["ic-brand-font-color-dark"],brandColor:e["ic-brand-primary"]}}},XQvf:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.active=void 0
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
var r=a("q1tI")
var i=o(r)
function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function _(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=t.active=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span"
return function(a){_(r,a)
function r(){var a
var o,_,d
s(this,r)
for(var c=arguments.length,u=Array(c),f=0;f<c;f++)u[f]=arguments[f]
return d=(o=(_=l(this,(a=r.__proto__||Object.getPrototypeOf(r)).call.apply(a,[this].concat(u))),_),_.state={active:false},_.handleMouseDown=function(){return _.setState({active:true})},_.handleMouseUp=function(){return _.setState({active:false})},_.render=function(){return i.default.createElement(t,{onMouseDown:_.handleMouseDown,onMouseUp:_.handleMouseUp},i.default.createElement(e,n({},_.props,_.state)))},o),l(_,d)}return r}(i.default.Component)}
t.default=d},YDsC:function(e,t){var a={r:0,g:0,b:0,a:0}
var n={r:255,g:255,b:255,a:1}
function r(e){var t=/rgba?\((\d+),\s(\d+),\s(\d+)(,\s([\d\.]+))?\)/
var n=t.exec(e)
if(!n)return a
return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10),a:parseFloat(n[5]||1)}}function i(e,t){var n=t.a+e.a*(1-t.a)
if(0===n)return a
return{r:(t.r*t.a+e.r*e.a*(1-t.a))/n,g:(t.g*t.a+e.g*e.a*(1-t.a))/n,b:(t.b*t.a+e.b*e.a*(1-t.a))/n,a:n}}function o(e){e.a<1&&(e=i(n,e))
var t=s(e.r)
var a=s(e.g)
var r=s(e.b)
return.2126*t+.7152*a+.0722*r}function s(e){var t=e/255
if(t<=.03928)return t/12.92
return Math.pow((t+.055)/1.055,2.4)}function l(e,t){var a=[o(e),o(t)]
a.sort(function(e,t){return t-e})
return(a[0]+.05)/(a[1]+.05)}function _(e){var t=[]
var a=e
while(null!=a){var o=r(window.getComputedStyle(a).backgroundColor)
o.a>0&&t.push(o)
if(1===o.a)break
a=a.parentElement}return t.reduceRight(i,n)}function d(e){var t=r(window.getComputedStyle(e).color)
var a=_(e)
var n=i(a,t)
return[n,a]}function c(e){var t=d(e)
return l(t[0],t[1])}function u(e){var t=window.getComputedStyle(e)
var a=parseFloat(t.fontSize)/1.333
var n=t.fontWeight
var r="bold"===n||parseInt(n,10)>=600
return r?a>=14:a>=18}function f(e){var t=c(e)
return u(e)?t>=3:t>=4.5}t=e.exports=f
t.isLargeText=u
t.contrastRatio=c
t.parseRGBA=r},ZREj:function(e,t){e.exports=function(e){return function(t){t.preventDefault()
return"function"===typeof e&&true===e.call(this,t)}}},ZiLf:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var n=["-webkit-","-moz-",""]
var r={maxHeight:true,maxWidth:true,width:true,height:true,columnWidth:true,minWidth:true,minHeight:true}
var i={"min-content":true,"max-content":true,"fill-available":true,"fit-content":true,"contain-floats":true}
function o(e,t){if(r.hasOwnProperty(e)&&i.hasOwnProperty(t))return n.map(function(e){return e+t})}},a6bM:function(e,t,a){"use strict"
var n=a("TqRt")
var r=a("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=n(a("lSNA"))
var o=n(a("lwsE"))
var s=n(a("W8MJ"))
var l=n(a("a1gu"))
var _=n(a("Nsbk"))
var d=n(a("7W2i"))
var c=r(a("q1tI"))
var u=n(a("17x9"))
var f=n(a("TSYQ"))
var h=a("IzEL")
var b=n(a("kVW1"))
var p=n(a("63N4"))
var m=n(a("Yz7K"))
var g=n(a("24wD"))
var v=n(a("J2CL"))
var k=n(a("Zuoh"))
var y=a("2lwo")
var w=n(a("It9K"))
var x,z,j,O,T
var S={componentId:"bwOAM",template:function(e){return"\n\n.bwOAM_byIz{display:block;position:relative}\n\n.bwOAM_dnnz{align-items:center;display:flex;fill:".concat(e.iconColor||"inherit",";height:100%;inset-inline-end:").concat(e.padding||"inherit",";inset-inline-start:auto;pointer-events:none;position:absolute;top:0}\n\n[dir=ltr] .bwOAM_dnnz{left:auto;right:").concat(e.padding||"inherit","}\n\n[dir=rtl] .bwOAM_dnnz{left:").concat(e.padding||"inherit",";right:auto}\n\n.bwOAM_cPAP{border:").concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit","*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.bwOAM_cwos,input[type].bwOAM_cwos{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border:").concat(e.borderWidth||"inherit"," ").concat(e.borderStyle||"inherit"," ").concat(e.borderColor||"inherit",";border-collapse:separate;border-image:none;border-radius:0;border-radius:").concat(e.borderRadius||"inherit",";border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;line-height:1;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;outline:none;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:0 ").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;transition:all 0.2s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;width:100%;word-spacing:normal;z-index:auto}\n\n.bwOAM_cwos::-ms-clear,input[type].bwOAM_cwos::-ms-clear{display:none}\n\n.bwOAM_cwos:focus,input[type].bwOAM_cwos:focus{box-shadow:none}\n\n.bwOAM_cwos:focus~.bwOAM_cPAP,input[type].bwOAM_cwos:focus~.bwOAM_cPAP{opacity:1;transform:scale(1)}\n\n.bwOAM_cwos[aria-invalid],.bwOAM_cwos[aria-invalid]:focus,.bwOAM_cwos[aria-invalid]~.bwOAM_cPAP,input[type].bwOAM_cwos[aria-invalid],input[type].bwOAM_cwos[aria-invalid]:focus,input[type].bwOAM_cwos[aria-invalid]~.bwOAM_cPAP{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.bwOAM_cwos:-ms-input-placeholder,input[type].bwOAM_cwos:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bwOAM_cwos::-ms-input-placeholder,input[type].bwOAM_cwos::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bwOAM_cwos::placeholder,input[type].bwOAM_cwos::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.bwOAM_cwos.bwOAM_ywdX,input[type].bwOAM_cwos.bwOAM_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.bwOAM_cwos.bwOAM_doqw,input[type].bwOAM_cwos.bwOAM_doqw{font-size:").concat(e.smallFontSize||"inherit",";height:").concat(e.smallHeight||"inherit","}\n\n.bwOAM_cwos.bwOAM_ycrn,input[type].bwOAM_cwos.bwOAM_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";height:").concat(e.mediumHeight||"inherit","}\n\n.bwOAM_cwos.bwOAM_cMDj,input[type].bwOAM_cwos.bwOAM_cMDj{font-size:").concat(e.largeFontSize||"inherit",";height:").concat(e.largeHeight||"inherit","}\n\n.bwOAM_cwos.bwOAM_Suqk,input[type].bwOAM_cwos.bwOAM_Suqk{-webkit-padding-end:calc(").concat(e.padding||"inherit","*2 + 1em);-webkit-padding-start:").concat(e.padding||"inherit",";padding-inline-end:calc(").concat(e.padding||"inherit","*2 + 1em);padding-inline-start:").concat(e.padding||"inherit","}\n\n[dir=ltr] .bwOAM_cwos.bwOAM_Suqk,[dir=ltr] input[type].bwOAM_cwos.bwOAM_Suqk{padding-left:").concat(e.padding||"inherit",";padding-right:calc(").concat(e.padding||"inherit","*2 + 1em)}\n\n[dir=rtl] .bwOAM_cwos.bwOAM_Suqk,[dir=rtl] input[type].bwOAM_cwos.bwOAM_Suqk{padding-left:calc(").concat(e.padding||"inherit","*2 + 1em);padding-right:").concat(e.padding||"inherit","}\n\n.bwOAM_cwos.bwOAM_EMjX,input[type].bwOAM_cwos.bwOAM_EMjX{text-align:start}\n\n[dir=ltr] .bwOAM_cwos.bwOAM_EMjX,[dir=ltr] input[type].bwOAM_cwos.bwOAM_EMjX{text-align:left}\n\n[dir=rtl] .bwOAM_cwos.bwOAM_EMjX,[dir=rtl] input[type].bwOAM_cwos.bwOAM_EMjX{text-align:right}\n\n.bwOAM_cwos.bwOAM_ImeN,[dir=ltr] .bwOAM_cwos.bwOAM_ImeN,[dir=ltr] input[type].bwOAM_cwos.bwOAM_ImeN,[dir=rtl] .bwOAM_cwos.bwOAM_ImeN,[dir=rtl] input[type].bwOAM_cwos.bwOAM_ImeN,input[type].bwOAM_cwos.bwOAM_ImeN{text-align:center}")},layout:"bwOAM_byIz",icon:"bwOAM_dnnz",outline:"bwOAM_cPAP",input:"bwOAM_cwos",disabled:"bwOAM_ywdX",small:"bwOAM_doqw",medium:"bwOAM_ycrn",large:"bwOAM_cMDj",hasIcon:"bwOAM_Suqk","textAlign--start":"bwOAM_EMjX","textAlign--center":"bwOAM_ImeN"}
var C=(x=(0,k.default)(),z=(0,v.default)(w.default,S),x(j=z(j=(T=O=function(e){(0,d.default)(t,e)
function t(e){var a;(0,o.default)(this,t)
a=(0,l.default)(this,(0,_.default)(t).call(this))
a.handleInputRef=function(e){a._input=e
a.props.inputRef(e)}
a._defaultId=(0,m.default)("TextInput")
a._messagesId=(0,m.default)("TextInput-messages")
return a}(0,s.default)(t,[{key:"focus",value:function(){this._input.focus()}},{key:"renderIcon",value:function(){var e=this.props.icon
return"function"===typeof e?c.default.createElement("span",{className:S.icon,"aria-hidden":"true"},c.default.createElement(e,null)):null}},{key:"render",value:function(){var e
var a=this.props,n=a.type,r=a.size,o=a.textAlign,s=a.placeholder,l=a.value,_=a.defaultValue,d=a.disabled,u=a.readOnly,h=a.required,p=a.width,m=a.icon
var g=(0,y.omitProps)(this.props,t.propTypes)
var v=(e={},(0,i.default)(e,S.input,true),(0,i.default)(e,S[r],r),(0,i.default)(e,S["textAlign--".concat(o)],o),(0,i.default)(e,S.hasIcon,m),(0,i.default)(e,S.disabled,d),e)
var k=p?{width:p}:null
var w=""
g["aria-describedby"]&&(w="".concat(g["aria-describedby"]))
this.hasMessages&&(w+=this._messagesId)
return c.default.createElement(b.default,Object.assign({},(0,y.pickProps)(this.props,b.default.propTypes),{id:this.id,messagesId:this._messagesId}),c.default.createElement("span",{className:S.layout},c.default.createElement("input",Object.assign({},g,{value:l,style:k,defaultValue:_,placeholder:s,ref:this.handleInputRef,type:n,id:this.id,required:h,"aria-required":h,"aria-invalid":this.invalid?"true":null,disabled:d||u,className:(0,f.default)(v),"aria-describedby":""!==w?w:null})),d||u?null:c.default.createElement("span",{className:S.outline,"aria-hidden":"true"}),this.renderIcon()))}},{key:"hasMessages",get:function(){return this.props.messages&&this.props.messages.length>0}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex(function(e){return"error"===e.type})>=0}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return(0,g.default)(this._input)}},{key:"value",get:function(){return this._input.value}}])
t.displayName="TextInput"
return t}(c.Component),O.propTypes={type:u.default.oneOf(["text","email","url","tel","search","password"]),label:u.default.node.isRequired,id:u.default.string,messages:u.default.arrayOf(p.default.message),size:u.default.oneOf(["small","medium","large"]),layout:u.default.oneOf(["stacked","inline"]),textAlign:u.default.oneOf(["start","center"]),width:u.default.string,inline:u.default.bool,placeholder:u.default.string,disabled:u.default.bool,readOnly:u.default.bool,required:u.default.bool,inputRef:u.default.func,defaultValue:u.default.string,value:(0,h.controllable)(u.default.string),icon:u.default.func},O.defaultProps={id:void 0,width:void 0,placeholder:void 0,required:false,defaultValue:void 0,value:void 0,icon:void 0,inline:false,type:"text",size:"medium",textAlign:"start",messages:[],disabled:false,readOnly:false,inputRef:function(e){},layout:"stacked"},T))||j)||j)
var A=C
t.default=A},aS6o:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var n=a("sUt/")
var r=i(n)
function i(e){return e&&e.__esModule?e:{default:e}}var o=["-webkit-",""]
function s(e,t){if("string"===typeof t&&!(0,r.default)(t)&&t.indexOf("filter(")>-1)return o.map(function(e){return t.replace(/filter\(/g,e+"filter(")})}},bNQv:function(e,t,a){var n=a("gFfm"),r=a("SKAX"),i=a("EwQA"),o=a("Z0cm")
function s(e,t){var a=o(e)?n:r
return a(e,i(t))}e.exports=s},bQgK:function(e,t,a){(function(t){(function(){var a,n,r,i,o,s
if("undefined"!==typeof performance&&null!==performance&&performance.now)e.exports=function(){return performance.now()}
else if("undefined"!==typeof t&&null!==t&&t.hrtime){e.exports=function(){return(a()-o)/1e6}
n=t.hrtime
a=function(){var e
e=n()
return 1e9*e[0]+e[1]}
i=a()
s=1e9*t.uptime()
o=i-s}else if(Date.now){e.exports=function(){return Date.now()-r}
r=Date.now()}else{e.exports=function(){return(new Date).getTime()-r}
r=(new Date).getTime()}}).call(this)}).call(this,a("8oxB"))},buI2:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
var n=a("HiWe")
var r=i(n)
function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t,a){if(e.hasOwnProperty(t)){var n={}
var i=e[t]
var o=(0,r.default)(t)
var s=Object.keys(a)
for(var l=0;l<s.length;l++){var _=s[l]
if(_===t)for(var d=0;d<i.length;d++)n[i[d]+o]=a[t]
n[_]=a[_]}return n}return a}},ccyi:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Saturation=void 0
var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||false
n.configurable=true
"value"in n&&(n.writable=true)
Object.defineProperty(e,n.key,n)}}return function(t,a,n){a&&e(t.prototype,a)
n&&e(t,n)
return t}}()
var r=a("q1tI")
var i=f(r)
var o=a("/FUP")
var s=f(o)
var l=a("DzJC")
var _=f(l)
var d=a("VVms")
var c=u(d)
function u(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])
t.default=e
return t}function f(e){return e&&e.__esModule?e:{default:e}}function h(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=t.Saturation=function(e){p(t,e)
function t(e){h(this,t)
var a=b(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))
a.handleChange=function(e){"function"===typeof a.props.onChange&&a.throttle(a.props.onChange,c.calculateChange(e,a.props.hsl,a.container),e)}
a.handleMouseDown=function(e){a.handleChange(e)
window.addEventListener("mousemove",a.handleChange)
window.addEventListener("mouseup",a.handleMouseUp)}
a.handleMouseUp=function(){a.unbindEventListeners()}
a.throttle=(0,_.default)(function(e,t,a){e(t,a)},50)
return a}n(t,[{key:"componentWillUnmount",value:function(){this.throttle.cancel()
this.unbindEventListeners()}},{key:"unbindEventListeners",value:function(){window.removeEventListener("mousemove",this.handleChange)
window.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var e=this
var t=this.props.style||{},a=t.color,n=t.white,r=t.black,o=t.pointer,l=t.circle
var _=(0,s.default)({default:{color:{absolute:"0px 0px 0px 0px",background:"hsl("+this.props.hsl.h+",100%, 50%)",borderRadius:this.props.radius},white:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},black:{absolute:"0px 0px 0px 0px",boxShadow:this.props.shadow,borderRadius:this.props.radius},pointer:{position:"absolute",top:-100*this.props.hsv.v+100+"%",left:100*this.props.hsv.s+"%",cursor:"default"},circle:{width:"4px",height:"4px",boxShadow:"0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",borderRadius:"50%",cursor:"hand",transform:"translate(-2px, -2px)"}},custom:{color:a,white:n,black:r,pointer:o,circle:l}},{custom:!!this.props.style})
return i.default.createElement("div",{style:_.color,ref:function(t){return e.container=t},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},i.default.createElement("style",null,"\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "),i.default.createElement("div",{style:_.white,className:"saturation-white"},i.default.createElement("div",{style:_.black,className:"saturation-black"}),i.default.createElement("div",{style:_.pointer},this.props.pointer?i.default.createElement(this.props.pointer,this.props):i.default.createElement("div",{style:_.circle}))))}}])
return t}(r.PureComponent||r.Component)
t.default=m},gP9I:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){var t=e.colors,a=e.breakpoints,n=e.shadows,r=e.stacking,i=e.borders
return{closeButtonOffset:"0",background:t.backgroundLightest,borderColor:t.borderMedium,borderWidth:i.widthSmall,borderStyle:i.style,boxShadow:n.depth3,xSmallWidth:a.xSmall,smallWidth:"20em",regularWidth:a.small,mediumWidth:a.medium,largeWidth:a.large,zIndex:r.topmost}}},gQ85:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
n(a("x1Tw"))
var i=/^\S+\.\S+$/
var o={id:"img-alt-filename",test:function(e){return!i.test(e.getAttribute("alt"))},data:function(e){var t=e.getAttribute("alt")
return{alt:t||""}},form:function(){return[{label:(0,r.default)("Change alt text"),dataKey:"alt"}]},update:function(e,t){e.setAttribute("alt",t.alt)
return e},message:function(){return(0,r.default)("Image filenames should not be used as the alt attribute describing the image content.")},why:function(){return(0,r.default)("Screen readers cannot determine what is displayed in an image without alternative text, and filenames are often meaningless strings of numbers and letters that do not describe the context or meaning.")},link:"https://www.w3.org/TR/WCAG20-TECHS/F30.html",linkText:function(){return(0,r.default)("Learn more about using filenames as alt text")}}
t.default=o},gUrQ:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i=["row","col","rowgroup","colgroup"]
var o={id:"table-header-scope",test:function(e){if("TH"!==e.tagName)return true
return-1!==i.indexOf(e.getAttribute("scope"))},data:function(e){return{scope:e.getAttribute("scope")||"none"}},form:function(){return[{label:(0,r.default)("Set header scope"),dataKey:"scope",options:[["none",(0,r.default)("None")],["row",(0,r.default)("Row")],["col",(0,r.default)("Column")],["rowgroup",(0,r.default)("Row group")],["colgroup",(0,r.default)("Column group")]]}]},update:function(e,t){"none"===t.header?e.removeAttribute("scope"):e.setAttribute("scope",t.scope)
return e},message:function(){return(0,r.default)("Tables headers should specify scope.")},why:function(){return(0,r.default)("Screen readers cannot interpret tables without the proper structure. Table headers provide direction and content scope.")},link:"https://www.w3.org/TR/WCAG20-TECHS/H63.html",linkText:function(){return(0,r.default)("Learn more about using scope attributes with tables")}}
t.default=o},gdJC:function(e,t,a){"use strict"
var n=a("TqRt")
var r=a("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=n(a("lSNA"))
var o=n(a("lwsE"))
var s=n(a("W8MJ"))
var l=n(a("a1gu"))
var _=n(a("Nsbk"))
var d=n(a("PJYZ"))
var c=n(a("7W2i"))
var u=r(a("q1tI"))
var f=n(a("17x9"))
var h=n(a("TSYQ"))
var b=a("IzEL")
var p=n(a("kVW1"))
var m=n(a("63N4"))
var g=n(a("Maij"))
var v=n(a("PeFH"))
var k=n(a("eHUd"))
var y=n(a("KB5V"))
var w=n(a("Yz7K"))
var x=n(a("24wD"))
var z=n(a("t5Un"))
var j=n(a("cOnk"))
var O=n(a("J2CL"))
var T=n(a("Zuoh"))
var S=a("2lwo")
var C=n(a("ipit"))
var A,E,M,L,P
var R={componentId:"chpSa",template:function(e){return"\n\n.chpSa_byIz{position:relative}\n\n.chpSa_cPAP{border:".concat(e.focusOutlineWidth||"inherit"," ").concat(e.focusOutlineStyle||"inherit"," ").concat(e.focusOutlineColor||"inherit",";border-radius:calc(").concat(e.borderRadius||"inherit","*1.5);bottom:-0.25rem;box-sizing:border-box;display:block;left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.95);transition:all 0.2s}\n\n.chpSa_blLZ{-moz-appearance:none;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-webkit-font-smoothing:antialiased;all:initial;animation:none 0s ease 0s 1 normal none running;appearance:none;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;background:").concat(e.background||"inherit",";border:medium none currentColor;border-bottom-color:").concat(e.borderBottomColor||"inherit",";border-collapse:separate;border-image:none;border-left-color:").concat(e.borderLeftColor||"inherit",";border-radius:0;border-radius:").concat(e.borderRadius||"inherit",";border-right-color:").concat(e.borderRightColor||"inherit",";border-spacing:0;border-style:").concat(e.borderStyle||"inherit",";border-top-color:").concat(e.borderTopColor||"inherit",";border-width:").concat(e.borderWidth||"inherit",";bottom:auto;box-shadow:none;box-sizing:content-box;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:#000;color:").concat(e.color||"inherit",";column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-span:1;column-width:auto;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;display:block;empty-cells:show;float:none;font-family:serif;font-family:").concat(e.fontFamily||"inherit",";font-size:medium;font-stretch:normal;font-style:normal;font-variant:normal;font-weight:400;font-weight:").concat(e.fontWeight||"inherit",";height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding:").concat(e.padding||"inherit",";page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align:start;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;white-space:pre-wrap;widows:2;width:auto;width:100%;word-spacing:normal;word-wrap:break-word;z-index:auto}\n\n[dir=ltr] .chpSa_blLZ{text-align:left}\n\n[dir=rtl] .chpSa_blLZ{text-align:right}\n\n.chpSa_blLZ:focus~.chpSa_cPAP{opacity:1;transform:scale(1)}\n\n.chpSa_blLZ[aria-invalid],.chpSa_blLZ[aria-invalid]:focus,.chpSa_blLZ[aria-invalid]:focus~.chpSa_cPAP{border-color:").concat(e.errorBorderColor||"inherit","}\n\n.chpSa_blLZ:-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ::-ms-input-placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ::placeholder{color:").concat(e.placeholderColor||"inherit","}\n\n.chpSa_blLZ.chpSa_ywdX{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.chpSa_doqw{font-size:").concat(e.smallFontSize||"inherit","}\n\n.chpSa_ycrn{font-size:").concat(e.mediumFontSize||"inherit","}\n\n.chpSa_cMDj{font-size:").concat(e.largeFontSize||"inherit","}")},layout:"chpSa_byIz",outline:"chpSa_cPAP",textarea:"chpSa_blLZ",disabled:"chpSa_ywdX",small:"chpSa_doqw",medium:"chpSa_ycrn",large:"chpSa_cMDj"}
var B=(A=(0,T.default)(),E=(0,O.default)(C.default,R),A(M=E(M=(P=L=function(e){(0,c.default)(t,e)
function t(){var e;(0,o.default)(this,t)
e=(0,l.default)(this,(0,_.default)(t).call(this))
e._textareaResize=function(t){var a=e._textarea.style.height
if(a!=e._height){e._manuallyResized=true
e._textarea.style.overflowY="auto"
e._container.style.minHeight=a}}
e.grow=function(t){if(!e._textarea||e._manuallyResized)return
var a=e._textarea.offsetHeight-e._textarea.clientHeight
var n=""
e._textarea.style.height="auto"
e._textarea.style.overflowY="hidden"
n=e._textarea.scrollHeight+a+"px"
var r=(0,z.default)(e.props.maxHeight,(0,y.default)((0,d.default)(e)))
if(e.props.maxHeight&&e._textarea.scrollHeight>r)e._textarea.style.overflowY="auto"
else if(e.props.height)if(""===e._textarea.value)n=e.props.height
else if((0,z.default)(e.props.height,(0,y.default)((0,d.default)(e)))>e._textarea.scrollHeight){e._textarea.style.overflowY="auto"
n=e.props.height}var i=(0,z.default)(n)>r
i||(e._container.style.minHeight=n)
e._height=n
e._textarea.style.height=n
e._textarea.scrollTop=e._textarea.scrollHeight}
e.handleChange=function(t){var a=e.props,n=a.onChange,r=a.value,i=a.disabled,o=a.readOnly
if(i||o){t.preventDefault()
return}"undefined"===typeof r&&e.autoGrow()
"function"===typeof n&&n(t)}
e.handleContainerRef=function(t){e._container=t}
e._defaultId=(0,w.default)("TextArea")
return e}(0,s.default)(t,[{key:"componentDidMount",value:function(){this.autoGrow()}},{key:"componentWillReceiveProps",value:function(e){this.autoGrow()}},{key:"componentWillUnmount",value:function(){this._listener&&this._listener.remove()
this._textareaResizeListener&&this._textareaResizeListener.remove()
this._request&&this._request.cancel()
this._debounced&&this._debounced.cancel()}},{key:"autoGrow",value:function(){if(this.props.autoGrow){this._debounced||(this._debounced=(0,k.default)(this.grow,200,{leading:false,trailing:true}))
this._listener||(this._listener=(0,g.default)(window,"resize",this._debounced))
this._textarea&&!this._textareaResizeListener&&(this._textareaResizeListener=(0,v.default)(this._textarea,this._textareaResize,["height"]))
this._request=(0,j.default)(this.grow)}}},{key:"focus",value:function(){this._textarea.focus()}},{key:"render",value:function(){var e,a=this
var n=this.props,r=n.autoGrow,o=n.placeholder,s=n.value,l=n.defaultValue,_=n.disabled,d=n.readOnly,c=n.required,f=n.width,b=n.height,m=n.maxHeight,g=n.textareaRef,v=n.resize,k=n.size
var y=(0,S.omitProps)(this.props,t.propTypes)
var w=(e={},(0,i.default)(e,R.textarea,true),(0,i.default)(e,R[k],true),(0,i.default)(e,R.disabled,_),e)
var x={width:f,resize:v,height:r?null:b,maxHeight:m}
var z=u.default.createElement("textarea",Object.assign({},y,{value:s,defaultValue:l,placeholder:o,ref:function(e){a._textarea=e
for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r]
g.apply(a,[e].concat(n))},style:x,id:this.id,required:c,"aria-required":c,"aria-invalid":this.invalid?"true":null,disabled:_||d,className:(0,h.default)(w),onChange:this.handleChange}))
return u.default.createElement(p.default,Object.assign({},(0,S.pickProps)(this.props,p.default.propTypes),{vAlign:"top",id:this.id,ref:function(e){a._node=e}}),u.default.createElement("div",{className:R.layout,style:{width:f,maxHeight:m},ref:this.handleContainerRef},z,_||d?null:u.default.createElement("span",{className:R.outline,"aria-hidden":"true"})))}},{key:"minHeight",get:function(){return this._textarea.style.minHeight}},{key:"invalid",get:function(){return this.props.messages&&this.props.messages.findIndex(function(e){return"error"===e.type})>=0}},{key:"id",get:function(){return this.props.id||this._defaultId}},{key:"focused",get:function(){return(0,x.default)(this._textarea)}},{key:"value",get:function(){return this._textarea.value}}])
t.displayName="TextArea"
return t}(u.Component),L.propTypes={label:f.default.node.isRequired,id:f.default.string,size:f.default.oneOf(["small","medium","large"]),layout:f.default.oneOf(["stacked","inline"]),autoGrow:f.default.bool,resize:f.default.oneOf(["none","both","horizontal","vertical"]),width:f.default.string,height:f.default.string,maxHeight:f.default.oneOfType([f.default.number,f.default.string]),messages:f.default.arrayOf(m.default.message),inline:f.default.bool,placeholder:f.default.string,disabled:f.default.bool,readOnly:f.default.bool,required:f.default.bool,textareaRef:f.default.func,defaultValue:f.default.string,value:(0,b.controllable)(f.default.string),onChange:f.default.func},L.defaultProps={size:"medium",autoGrow:true,resize:"none",inline:false,messages:[],disabled:false,readOnly:false,textareaRef:function(e){},layout:"stacked",id:void 0,value:void 0,defaultValue:void 0,onChange:void 0,required:false,placeholder:void 0,width:void 0,height:void 0,maxHeight:void 0},P))||M)||M)
var I=B
t.default=I},gi1z:function(e,t,a){"use strict"
var n=a("TqRt")
var r=a("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var i=n(a("MVZn"))
var o=n(a("lSNA"))
var s=n(a("lwsE"))
var l=n(a("W8MJ"))
var _=n(a("a1gu"))
var d=n(a("Nsbk"))
var c=n(a("7W2i"))
a("s0aN")
var u=r(a("q1tI"))
var f=n(a("17x9"))
var h=n(a("TSYQ"))
var b=n(a("XbQQ"))
var p=n(a("J2CL"))
var m=n(a("5WdN"))
var g=n(a("udPN"))
var v=n(a("kibL"))
var k=n(a("+mmM"))
var y=a("2lwo")
var w=n(a("24wD"))
var x=n(a("KB5V"))
var z=n(a("VaOI"))
var j=n(a("ZJ40"))
var O=n(a("Zuoh"))
var T=n(a("NF/o"))
var S,C,A,E,M,L
var P={componentId:"cIcZl",template:function(e){return"\n\n.cIcZl_bGBk,a.cIcZl_bGBk:link,a.cIcZl_bGBk:visited,button.cIcZl_bGBk{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";outline-color:transparent;outline-offset:0.25rem;outline-style:").concat(e.focusOutlineStyle||"inherit",";outline-width:").concat(e.focusOutlineWidth||"inherit",";transition:outline-color 0.2s;vertical-align:baseline}\n\n.cIcZl_bGBk:focus,a.cIcZl_bGBk:link:focus,a.cIcZl_bGBk:visited:focus,button.cIcZl_bGBk:focus{outline-color:").concat(e.focusOutlineColor||"inherit","}\n\n.cIcZl_bGBk[aria-disabled],a.cIcZl_bGBk:link[aria-disabled],a.cIcZl_bGBk:visited[aria-disabled],button.cIcZl_bGBk[aria-disabled]{cursor:not-allowed;opacity:0.5;pointer-events:none}\n\n.cIcZl_bGBk::-moz-focus-inner,a.cIcZl_bGBk:link::-moz-focus-inner,a.cIcZl_bGBk:visited::-moz-focus-inner,button.cIcZl_bGBk::-moz-focus-inner{border:0}\n\na.cIcZl_bGBk:link,a.cIcZl_bGBk:visited,button.cIcZl_bGBk{-webkit-text-decoration:").concat(e.textDecoration||"inherit",";color:").concat(e.color||"inherit",";cursor:pointer;text-decoration:").concat(e.textDecoration||"inherit","}\n\na.cIcZl_bGBk:link:focus,a.cIcZl_bGBk:visited:focus,button.cIcZl_bGBk:focus{color:").concat(e.color||"inherit","}\n\na.cIcZl_bGBk:link:active,a.cIcZl_bGBk:link:hover,a.cIcZl_bGBk:visited:active,a.cIcZl_bGBk:visited:hover,button.cIcZl_bGBk:active,button.cIcZl_bGBk:hover{-webkit-text-decoration:").concat(e.hoverTextDecoration||"inherit",";color:").concat(e.hoverColor||"inherit",";text-decoration:").concat(e.hoverTextDecoration||"inherit","}\n\n.cIcZl_bGBk.cIcZl_enfx,a.cIcZl_bGBk.cIcZl_enfx:link,a.cIcZl_bGBk.cIcZl_enfx:visited,button.cIcZl_bGBk.cIcZl_enfx{color:").concat(e.colorInverse||"inherit","}\n\n.cIcZl_bGBk.cIcZl_enfx:focus,a.cIcZl_bGBk.cIcZl_enfx:link:focus,a.cIcZl_bGBk.cIcZl_enfx:visited:focus,button.cIcZl_bGBk.cIcZl_enfx:focus{outline-color:").concat(e.focusInverseOutlineColor||"inherit","}\n\n.cIcZl_bGBk.cIcZl_enfx:active,.cIcZl_bGBk.cIcZl_enfx:focus,.cIcZl_bGBk.cIcZl_enfx:hover,a.cIcZl_bGBk.cIcZl_enfx:link:active,a.cIcZl_bGBk.cIcZl_enfx:link:focus,a.cIcZl_bGBk.cIcZl_enfx:link:hover,a.cIcZl_bGBk.cIcZl_enfx:visited:active,a.cIcZl_bGBk.cIcZl_enfx:visited:focus,a.cIcZl_bGBk.cIcZl_enfx:visited:hover,button.cIcZl_bGBk.cIcZl_enfx:active,button.cIcZl_bGBk.cIcZl_enfx:focus,button.cIcZl_bGBk.cIcZl_enfx:hover{color:").concat(e.colorInverse||"inherit","}\n\nbutton.cIcZl_bGBk{-moz-appearance:none;-moz-user-select:text;-ms-user-select:text;-webkit-appearance:none;-webkit-user-select:text;appearance:none;background:none;border:none;cursor:pointer;font-size:1em;margin:0;padding:0;text-align:inherit;user-select:text}\n\n[dir=ltr] button.cIcZl_bGBk,[dir=rtl] button.cIcZl_bGBk{text-align:inherit}\n\n.cIcZl_dnnz{box-sizing:border-box;font-size:").concat(e.iconSize||"inherit","}\n\n.cIcZl_ddMx .cIcZl_dnnz{-webkit-padding-end:").concat(e.iconPlusTextMargin||"inherit",";-webkit-padding-start:0;padding-inline-end:").concat(e.iconPlusTextMargin||"inherit",";padding-inline-start:0}\n\n[dir=ltr] .cIcZl_ddMx .cIcZl_dnnz{padding-left:0;padding-right:").concat(e.iconPlusTextMargin||"inherit","}\n\n[dir=rtl] .cIcZl_ddMx .cIcZl_dnnz{padding-left:").concat(e.iconPlusTextMargin||"inherit",";padding-right:0}\n\n.cIcZl_bkXt .cIcZl_dnnz{-webkit-padding-end:0;-webkit-padding-start:").concat(e.iconPlusTextMargin||"inherit",";padding-inline-end:0;padding-inline-start:").concat(e.iconPlusTextMargin||"inherit","}\n\n[dir=ltr] .cIcZl_bkXt .cIcZl_dnnz{padding-left:").concat(e.iconPlusTextMargin||"inherit",";padding-right:0}\n\n[dir=rtl] .cIcZl_bkXt .cIcZl_dnnz{padding-left:0;padding-right:").concat(e.iconPlusTextMargin||"inherit","}\n\n.cIcZl_FcDy.cIcZl_bkXt,.cIcZl_FcDy.cIcZl_ddMx{align-items:center}\n\n.cIcZl_bOQC{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n\nbutton.cIcZl_bOQC{width:100%}")},root:"cIcZl_bGBk",inverse:"cIcZl_enfx",icon:"cIcZl_dnnz","iconPlacement--start":"cIcZl_ddMx","iconPlacement--end":"cIcZl_bkXt",truncates:"cIcZl_FcDy",ellipsis:"cIcZl_bOQC"}
var R=(S=(0,O.default)(),C=(0,j.default)("5.40.0",{ellipsis:"<Link><TruncateText /></Link>"}),A=(0,p.default)(T.default,P),S(E=C(E=A(E=(L=M=function(e){(0,c.default)(t,e)
function t(){var e
var a;(0,s.default)(this,t)
for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i]
a=(0,_.default)(this,(e=(0,d.default)(t)).call.apply(e,[this].concat(r)))
a.handleClick=function(e){var t=a.props,n=t.disabled,r=t.onClick
if(n){e.preventDefault()
e.stopPropagation()}else"function"===typeof r&&r(e)}
return a}(0,l.default)(t,[{key:"focus",value:function(){(0,x.default)(this._link).focus()}},{key:"renderIcon",value:function(){var e=this.props.icon
this.props.display
return"function"===typeof this.props.icon?u.default.createElement("span",{className:P.icon},u.default.createElement(e,null)):e?u.default.createElement("span",{className:P.icon},e):null}},{key:"render",value:function(){var e,a=this
var n=this.props,r=n.disabled,s=n.children,l=n.onClick,_=n.variant,d=n.href,c=n.margin,f=n.ellipsis,p=n.icon,m=n.iconPlacement,g=n.linkRef,v=n.elementRef
var k=(e={},(0,o.default)(e,P.root,true),(0,o.default)(e,P.inverse,"inverse"===_),(0,o.default)(e,P["iconPlacement--".concat(m)],p&&this.hasVisibleChildren),(0,o.default)(e,P.truncates,this.containsTruncateText),(0,o.default)(e,P.ellipsis,f),e)
var w=l&&"button"!==this.element?"button":null
var x=l||"button"===this.element?"button":null
var z="button"!==w||r?null:"0"
var j=b.default.omitViewProps((0,y.omitProps)(this.props,t.propTypes),t)
var O=(0,i.default)({},j,{elementRef:function(e){a._link=e
"function"===typeof g&&g(e)
"function"===typeof v&&v(e)},as:this.element,display:this.display,margin:c,className:(0,h.default)(k),href:d,onClick:this.handleClick,"aria-disabled":r?"true":null,role:w,type:x,tabIndex:z})
return u.default.createElement(b.default,O,p&&"start"===m&&this.renderIcon(),s,p&&"end"===m&&this.renderIcon())}},{key:"display",get:function(){if(this.props.display)return this.props.display
if(this.props.ellipsis)return"block"
return this.props.icon?this.containsTruncateText?"flex":"inline-block":this.containsTruncateText?"block":"auto"}},{key:"hasVisibleChildren",get:function(){return(0,z.default)(this.props.children)}},{key:"element",get:function(){return(0,v.default)(t,this.props)}},{key:"focused",get:function(){return(0,w.default)(this._link)}},{key:"focusable",get:function(){return(0,g.default)(this._link)}},{key:"containsTruncateText",get:function(){var e=false
u.default.Children.forEach(this.props.children,function(t){t&&(0,k.default)(t,["TruncateText"])&&(e=true)})
!e||this.props.display
return e}}])
t.displayName="Link"
return t}(u.Component),M.propTypes={href:f.default.string,children:f.default.node.isRequired,variant:f.default.oneOf(["default","inverse"]),linkRef:f.default.func,elementRef:f.default.func,as:f.default.elementType,disabled:f.default.bool,onClick:f.default.func,ellipsis:f.default.bool,margin:m.default.spacing,icon:f.default.oneOfType([f.default.func,f.default.element]),iconPlacement:f.default.oneOf(["start","end"]),display:f.default.oneOf(["auto","block","inline-block","flex","inline-flex"])},M.defaultProps={href:void 0,elementRef:void 0,disabled:false,onClick:void 0,margin:void 0,icon:void 0,display:void 0,variant:"default",as:"button",linkRef:function(e){},iconPlacement:"start"},L))||E)||E)||E)
var B=R
t.default=B},ipit:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e){var t=e.colors,a=e.borders,n=e.spacing,r=e.typography,i=e.forms
return{fontFamily:r.fontFamily,fontWeight:r.fontWeightNormal,color:t.textDarkest,background:t.backgroundLightest,borderWidth:a.widthSmall,borderStyle:a.style,borderTopColor:t.borderMedium,borderRightColor:t.borderMedium,borderBottomColor:t.borderMedium,borderLeftColor:t.borderMedium,borderRadius:a.radiusMedium,padding:n.small,focusOutlineColor:t.borderBrand,focusOutlineWidth:a.widthMedium,focusOutlineStyle:a.style,errorBorderColor:t.borderDanger,errorOutlineColor:t.borderDanger,placeholderColor:t.textDark,smallFontSize:r.fontSizeSmall,smallHeight:i.inputHeightSmall,mediumFontSize:r.fontSizeMedium,mediumHeight:i.inputHeightMedium,largeFontSize:r.fontSizeLarge,largeHeight:i.inputHeightLarge}}n.canvas=function(e){return{color:e["ic-brand-font-color-dark"],focusOutlineColor:e["ic-brand-primary"]}}},itsj:function(e,t){function a(e,t){if("constructor"===t&&"function"===typeof e[t])return
if("__proto__"==t)return
return e[t]}e.exports=a},japM:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.handleFocus=void 0
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||false
n.configurable=true
"value"in n&&(n.writable=true)
Object.defineProperty(e,n.key,n)}}return function(t,a,n){a&&e(t.prototype,a)
n&&e(t,n)
return t}}()
var i=a("q1tI")
var o=s(i)
function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.handleFocus=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"span"
return function(a){d(i,a)
function i(){var e
var t,a,n
l(this,i)
for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s]
return n=(t=(a=_(this,(e=i.__proto__||Object.getPrototypeOf(i)).call.apply(e,[this].concat(o))),a),a.state={focus:false},a.handleFocus=function(){return a.setState({focus:true})},a.handleBlur=function(){return a.setState({focus:false})},t),_(a,n)}r(i,[{key:"render",value:function(){return o.default.createElement(t,{onFocus:this.handleFocus,onBlur:this.handleBlur},o.default.createElement(e,n({},this.props,this.state)))}}])
return i}(o.default.Component)}},jeLo:function(e,t,a){var n=a("juv8"),r=a("mTTR")
function i(e){return n(e,r(e))}e.exports=i},k8dj:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var n=["-webkit-","-moz-",""]
var r={"zoom-in":true,"zoom-out":true,grab:true,grabbing:true}
function i(e,t){if("cursor"===e&&r.hasOwnProperty(t))return n.map(function(e){return e+t})}},kvVq:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i=120
var o={"max-alt-length":i,id:"img-alt-length",test:function(e){if("IMG"!==e.tagName)return true
var t=e.getAttribute("alt")
return null==t||t.length<=i},data:function(e){var t=e.getAttribute("alt")
return{alt:t||""}},form:function(){return[{label:(0,r.default)("Change alt text"),dataKey:"alt",textarea:true}]},update:function(e,t){e.setAttribute("alt",t.alt)
return e},message:function(){return(0,r.default)("Alt attribute text should not contain more than 120 characters.")},why:function(){return(0,r.default)("Screen readers cannot determine what is displayed in an image without alternative text, which describes the content and meaning of the image. Alternative text should be simple and concise.")},link:""}
t.default=o},l9OW:function(e,t,a){var n=a("SKAX"),r=a("MMmD")
function i(e,t){var a=-1,i=r(e)?Array(e.length):[]
n(e,function(e,n,r){i[++a]=t(e,n,r)})
return i}e.exports=i},lreK:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.mergeClasses=void 0
var n=a("Ag8Z")
var r=l(n)
var i=a("BkRI")
var o=l(i)
var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
function l(e){return e&&e.__esModule?e:{default:e}}var _=t.mergeClasses=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
var a=e.default&&(0,o.default)(e.default)||{}
t.map(function(t){var n=e[t]
n&&(0,r.default)(n,function(e,t){a[t]||(a[t]={})
a[t]=s({},a[t],n[t])})
return t})
return a}
t.default=_},"mv/X":function(e,t,a){var n=a("ljhN"),r=a("MMmD"),i=a("wJg7"),o=a("GoyQ")
function s(e,t,a){if(!o(a))return false
var s=typeof t
if("number"==s?r(a)&&i(t,a.length):"string"==s&&t in a)return n(a[t],e)
return false}e.exports=s},p8yl:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.red=t.getContrastingColor=t.isValidHex=t.toState=t.simpleCheckForValidColor=void 0
var n=a("xkGU")
var r=s(n)
var i=a("Zss7")
var o=s(i)
function s(e){return e&&e.__esModule?e:{default:e}}t.simpleCheckForValidColor=function(e){var t=["r","g","b","a","h","s","l","v"]
var a=0
var n=0;(0,r.default)(t,function(t){if(e[t]){a+=1
isNaN(e[t])||(n+=1)
if("s"===t||"l"===t){var r=/^\d+%$/
r.test(e[t])&&(n+=1)}}})
return a===n&&e}
var l=t.toState=function(e,t){var a=e.hex?(0,o.default)(e.hex):(0,o.default)(e)
var n=a.toHsl()
var r=a.toHsv()
var i=a.toRgb()
var s=a.toHex()
if(0===n.s){n.h=t||0
r.h=t||0}var l="000000"===s&&0===i.a
return{hsl:n,hex:l?"transparent":"#"+s,rgb:i,hsv:r,oldHue:e.h||t||n.h,source:e.source}}
t.isValidHex=function(e){var t="#"===String(e).charAt(0)?1:0
return e.length!==4+t&&e.length<7+t&&(0,o.default)(e).isValid()}
t.getContrastingColor=function(e){if(!e)return"#fff"
var t=l(e)
if("transparent"===t.hex)return"rgba(0,0,0,0.4)"
var a=(299*t.rgb.r+587*t.rgb.g+114*t.rgb.b)/1e3
return a>=128?"#000":"#fff"}
t.red={hsl:{a:1,h:0,l:.5,s:1},hex:"#ff0000",rgb:{r:255,g:0,b:0,a:1},hsv:{h:0,s:1,v:1,a:1}}
t.default=t},pcPB:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var n=a("sUt/")
var r=i(n)
function i(e){return e&&e.__esModule?e:{default:e}}var o=["-webkit-","-moz-",""]
function s(e,t){if("string"===typeof t&&!(0,r.default)(t)&&t.indexOf("calc(")>-1)return o.map(function(e){return t.replace(/calc\(/g,e+"calc(")})}},"q5+k":function(e,t,a){"use strict"
var n=a("TqRt")
t.__esModule=true
t.default=void 0
var r=n(a("Bp9Y"))
var i=["","webkit","moz","o","ms"]
var o="clearTimeout"
var s=c
var l
var _=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"}
r.default&&i.some(function(e){var t=_(e,"request")
if(t in window){o=_(e,"cancel")
return s=function(e){return window[t](e)}}})
var d=(new Date).getTime()
function c(e){var t=(new Date).getTime(),a=Math.max(0,16-(t-d)),n=setTimeout(e,a)
d=t
return n}l=function(e){return s(e)}
l.cancel=function(e){window[o]&&"function"===typeof window[o]&&window[o](e)}
var u=l
t.default=u
e.exports=t["default"]},qT11:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.filename=n
t.firstWords=r
function n(e){var t=/([^\/]*?)(\?.*)?$/
var a=t.exec(e)
return a&&a[1]}function r(e,t){var a=/\w+/g
var n=[]
var r
while(t>0&&(r=a.exec(e))){--t
n.push(r[0])}var i=n.join(" ")
null!=r&&a.exec(e)&&(i+="…")
return i}},qhOH:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=i
var n={"space-around":"justify","space-between":"justify","flex-start":"start","flex-end":"end","wrap-reverse":"multiple",wrap:"multiple"}
var r={alignItems:"WebkitBoxAlign",justifyContent:"WebkitBoxPack",flexWrap:"WebkitBoxLines",flexGrow:"WebkitBoxFlex"}
function i(e,t,a){if("flexDirection"===e&&"string"===typeof t){t.indexOf("column")>-1?a.WebkitBoxOrient="vertical":a.WebkitBoxOrient="horizontal"
t.indexOf("reverse")>-1?a.WebkitBoxDirection="reverse":a.WebkitBoxDirection="normal"}r.hasOwnProperty(e)&&(a[r[e]]=n[t]||t)}},rwzw:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i=a("V6RX")
var o=Array.prototype.forEach
var s={id:"table-header",test:function(e){if("TABLE"!==e.tagName)return true
return e.querySelector("th")},data:function(e){return{header:"none"}},form:function(){return[{label:(0,r.default)("Set table header"),dataKey:"header",options:[["none",(0,r.default)("No headers")],["row",(0,r.default)("Header row")],["col",(0,r.default)("Header column")],["both",(0,r.default)("Header row and column")]]}]},update:function(e,t){o.call(e.querySelectorAll("th"),function(e){(0,i.changeTag)(e,"td")})
if("none"===t.header)return e
var a="row"===t.header||"both"===t.header
var n="col"===t.header||"both"===t.header
var r=e.querySelectorAll("tr")
for(var s=0;s<r.length;++s){if(0===s&&a){o.call(r[s].querySelectorAll("td"),function(e){var t=(0,i.changeTag)(e,"th")
t.setAttribute("scope","col")})
continue}if(!n)break
var l=r[s].querySelector("td")
if(l){var _=(0,i.changeTag)(l,"th")
_.setAttribute("scope","row")}}return e},message:function(){return(0,r.default)("Tables should include at least one header.")},why:function(){return(0,r.default)("Screen readers cannot interpret tables without the proper structure. Table headers provide direction and overview of the content.")},link:"https://www.w3.org/TR/WCAG20-TECHS/H43.html",linkText:function(){return(0,r.default)("Learn more about table headers")}}
t.default=s},s0aN:function(e,t,a){var n=a("q1tI")
function r(){var e=""
try{e=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getStackAddendum()}catch(e){}return e}function i(e,t,a){if(!t&&false){var n=r()
if("function"!==typeof console[e])throw new Error("'".concat(e,"' is not a valid console method!"))
var i
for(var o=arguments.length,s=new Array(o>3?o-3:0),l=3;l<o;l++)s[l-3]=arguments[l];(i=console)[e].apply(i,["Warning: ".concat(a)].concat(s,[n]))}}t.error=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return i.apply(void 0,["error"].concat(t))}
t.warn=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a]
return i.apply(void 0,["warn"].concat(t))}
t.info=function(){var e
return(e=console).info.apply(e,arguments)}
t.assert=function(){var e
return(e=console).assert.apply(e,arguments)}
t.debug=function(){var e
return(e=console).debug.apply(e,arguments)}
t.log=function(){var e
return(e=console).log.apply(e,arguments)}},sEfC:function(e,t,a){var n=a("GoyQ"),r=a("QIyF"),i=a("tLB3")
var o="Expected a function"
var s=Math.max,l=Math.min
function _(e,t,a){var _,d,c,u,f,h,b=0,p=false,m=false,g=true
if("function"!=typeof e)throw new TypeError(o)
t=i(t)||0
if(n(a)){p=!!a.leading
m="maxWait"in a
c=m?s(i(a.maxWait)||0,t):c
g="trailing"in a?!!a.trailing:g}function v(t){var a=_,n=d
_=d=void 0
b=t
u=e.apply(n,a)
return u}function k(e){b=e
f=setTimeout(x,t)
return p?v(e):u}function y(e){var a=e-h,n=e-b,r=t-a
return m?l(r,c-n):r}function w(e){var a=e-h,n=e-b
return void 0===h||a>=t||a<0||m&&n>=c}function x(){var e=r()
if(w(e))return z(e)
f=setTimeout(x,y(e))}function z(e){f=void 0
if(g&&_)return v(e)
_=d=void 0
return u}function j(){void 0!==f&&clearTimeout(f)
b=0
_=h=d=f=void 0}function O(){return void 0===f?u:z(r())}function T(){var e=r(),a=w(e)
_=arguments
d=this
h=e
if(a){if(void 0===f)return k(h)
if(m){clearTimeout(f)
f=setTimeout(x,t)
return v(h)}}void 0===f&&(f=setTimeout(x,t))
return u}T.cancel=j
T.flush=O
return T}e.exports=_},sOfH:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i=n(a("YDsC"))
var o=n(a("8E7O"))
var s=a("V6RX")
var l={id:"large-text-contrast",test:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var a=true==t.disableContrastCheck
var n=!(0,s.hasTextNode)(e)
if(a||n||(0,s.onlyContainsLink)(e)||!i.default.isLargeText(e))return true
return(0,i.default)(e)},data:o.default.data,form:o.default.form,update:o.default.update,message:function(){return(0,r.default)("Text larger than 18pt (or bold 14pt) should display a minimum contrast ratio of 3:1.")},why:function(){return(0,r.default)("Text is difficult to read without sufficient contrast between the text and the background, especially for those with low vision.")},link:"https://www.w3.org/TR/WCAG20-TECHS/G17.html",linkText:function(){return(0,r.default)("Learn more about color contrast")}}
t.default=l},"sUt/":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
var n=/-webkit-|-moz-|-ms-/
function r(e){return"string"===typeof e&&n.test(e)}e.exports=t["default"]},"siI/":function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var n=a("sUt/")
var r=i(n)
function i(e){return e&&e.__esModule?e:{default:e}}var o=["-webkit-",""]
function s(e,t){if("string"===typeof t&&!(0,r.default)(t)&&t.indexOf("image-set(")>-1)return o.map(function(e){return t.replace(/image-set\(/g,e+"image-set(")})}},srvI:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.calculateChange=function(e,t,a,n){var r=n.clientWidth
var i=n.clientHeight
var o="number"===typeof e.pageX?e.pageX:e.touches[0].pageX
var s="number"===typeof e.pageY?e.pageY:e.touches[0].pageY
var l=o-(n.getBoundingClientRect().left+window.pageXOffset)
var _=s-(n.getBoundingClientRect().top+window.pageYOffset)
if("vertical"===t){var d=void 0
if(_<0)d=359
else if(_>i)d=0
else{var c=-100*_/i+100
d=360*c/100}if(a.h!==d)return{h:d,s:a.s,l:a.l,a:a.a,source:"rgb"}}else{var u=void 0
if(l<0)u=0
else if(l>r)u=359
else{var f=100*l/r
u=360*f/100}if(a.h!==u)return{h:u,s:a.s,l:a.l,a:a.a,source:"rgb"}}return null}},t2Dn:function(e,t,a){var n=a("hypo"),r=a("ljhN")
function i(e,t,a){(void 0===a||r(e[t],a))&&(void 0!==a||t in e)||n(e,t,a)}e.exports=i},t6i0:function(e,t){function a(){var e=window.pageYOffset
if("number"==typeof e)return{top:e,left:window.pageXOffset}
return{top:document.documentElement.scrollTop,left:document.documentElement.scrollLeft}}function n(e){return parseInt(e,10)}e.exports=function(e){var t=e.getBoundingClientRect()
var r=a()
return{top:n(t.top+r.top),left:n(t.left+r.left),width:n(t.right-t.left),height:n(t.bottom-t.top)}}},tLB3:function(e,t,a){var n=a("GoyQ"),r=a("/9aa")
var i=NaN
var o=/^\s+|\s+$/g
var s=/^[-+]0x[0-9a-f]+$/i
var l=/^0b[01]+$/i
var _=/^0o[0-7]+$/i
var d=parseInt
function c(e){if("number"==typeof e)return e
if(r(e))return i
if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e
e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e
e=e.replace(o,"")
var a=l.test(e)
return a||_.test(e)?d(e.slice(2),a?2:8):s.test(e)?i:+e}e.exports=c},uKUS:function(e,t,a){"use strict"
var n=a("OS/W")
var r=a("DSFK")
var i=a("25BE")
var o=a("PYwp")
function s(e){return Object(r["a"])(e)||Object(i["a"])(e)||Object(o["a"])()}const l=()=>{}
function _(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l
const a=Array.from(e.dom.doc.styleSheets),n=s(a),r=(n[0],n.slice(1))
const i=window.ENV.url_for_high_contrast_tinymce_editor_css
r.forEach(e=>e.disabled=true)
let o=0
const _=()=>{o++}
const d=()=>{o===i.length?t():setTimeout(d,100)}
i.forEach(t=>{e.dom.styleSheetLoader.load(t,_)})
d()}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l
Array.from(e.dom.doc.styleSheets).forEach(e=>{window.ENV.url_for_high_contrast_tinymce_editor_css.includes(e.href)?e.ownerNode.parentElement.removeChild(e.ownerNode):e.disabled=false})
t()}Object(n["getInstance"])(e=>e.setConfig({beforeCheck:_,afterCheck:d}))
if(ENV&&ENV.LOCALE){let e=ENV.LOCALE
"zh-Hant"===e&&(e="zh-HK")
Object(n["setLocale"])(e)}},"uV+b":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.indicatorRegion=o
t.clearIndicators=s
t.default=l
var r=n(a("t6i0"))
var i=3
function o(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r.default
var n=arguments.length>3?arguments[3]:void 0
var i=a(e)
var o=n||t.getBoundingClientRect()
var s={top:o.top,left:o.left,width:o.right-o.left,height:o.bottom-o.top}
return{width:s.width,height:s.height,left:i.left+s.left,top:i.top+s.top}}function s(){Array.from(document.querySelectorAll(".a11y-checker-selection-indicator")).forEach(function(e){e.parentNode.removeChild(e)})}function l(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i
s()
var n=e.getContainer().querySelector("iframe")
var l=document.createElement("div")
l.className="a11y-checker-selection-indicator"
var _=o(n,t)
l.setAttribute("style","\n    border: 2px solid #000;\n    background-color: #008EE2;\n    position: absolute;\n    display: block;\n    borderRadius: 5px;\n    z-index: 9998;\n    left: ".concat(_.left-a,"px;\n    top: ").concat(_.top-a,"px;\n    width: ").concat(_.width+2*a,"px;\n    height: ").concat(_.height+2*a,"px;\n    opacity: 0.5;\n  "))
document.body.appendChild(l)
l.style.opacity=.8
l.style.transition="opacity 0.4s"
var d=function e(){var i=t.getBoundingClientRect()
var s=o(n,t,r.default,i)
var _=(0,r.default)(n)
l.style.left="".concat(s.left-a,"px")
l.style.top="".concat(s.top-a,"px")
l.style.display="block"
if(i.top<0){var d=s.height+i.top
d<0&&(l.style.display="none")
var c=s.height-d
l.style.height="".concat(d,"px")
l.style.marginTop="".concat(c,"px")}if(i.bottom>_.height){var u=s.height+(_.height-i.bottom)
u<0&&(l.style.display="none")
l.style.height="".concat(u,"px")}window.requestAnimationFrame(e)}
window.requestAnimationFrame(d)}},"w6v+F":function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("I+Bn"))
var i=n(a("gQ85"))
var o=n(a("xAJt"))
var s=n(a("rwzw"))
var l=n(a("gUrQ"))
var _=n(a("8E7O"))
var d=n(a("sOfH"))
var c=n(a("NvTu"))
var u=n(a("06uY"))
var f=n(a("kvVq"))
var h=n(a("KQAQ"))
var b=n(a("E7N5"))
var p=[r.default,i.default,o.default,s.default,l.default,_.default,d.default,c.default,u.default,f.default,h.default,b.default]
t.default=p},wEkZ:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e,t){if("string"===typeof t&&"text"===t)return["-webkit-text","text"]}},xAJt:function(e,t,a){"use strict"
var n=a("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var r=n(a("LaeI"))
var i=a("V6RX")
var o={id:"table-caption",test:function(e){if("TABLE"!==e.tagName)return true
var t=e.querySelector("caption")
return!!t&&""!==t.textContent.replace(/\s/g,"")},data:function(e){return{caption:""}},form:function(){return[{label:(0,r.default)("Add a caption"),dataKey:"caption"}]},update:function(e,t){var a=e.querySelector("caption")
if(!a){a=e.ownerDocument.createElement("caption");(0,i.prepend)(e,a)}a.textContent=t.caption
return e},message:function(){return(0,r.default)("Tables should include a caption describing the contents of the table.")},why:function(){return(0,r.default)("Screen readers cannot interpret tables without the proper structure. Table captions describe the context and general understanding of the table.")},link:"https://www.w3.org/TR/WCAG20-TECHS/H39.html",linkText:function(){return(0,r.default)("Learn more about using captions with tables")}}
t.default=o},xEkU:function(e,t,a){(function(t){var n=a("bQgK"),r="undefined"===typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",s=r["request"+o],l=r["cancel"+o]||r["cancelRequest"+o]
for(var _=0;!s&&_<i.length;_++){s=r[i[_]+"Request"+o]
l=r[i[_]+"Cancel"+o]||r[i[_]+"CancelRequest"+o]}if(!s||!l){var d=0,c=0,u=[],f=1e3/60
s=function(e){if(0===u.length){var t=n(),a=Math.max(0,f-(t-d))
d=a+t
setTimeout(function(){var e=u.slice(0)
u.length=0
for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(d)}catch(e){setTimeout(function(){throw e},0)}},Math.round(a))}u.push({handle:++c,callback:e,cancelled:false})
return c}
l=function(e){for(var t=0;t<u.length;t++)u[t].handle===e&&(u[t].cancelled=true)}}e.exports=function(e){return s.call(r,e)}
e.exports.cancel=function(){l.apply(r,arguments)}
e.exports.polyfill=function(e){e||(e=r)
e.requestAnimationFrame=s
e.cancelAnimationFrame=l}}).call(this,a("yLpj"))},xU8c:function(e,t,a){"use strict"
var n=a("TqRt")
t.__esModule=true
t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0
var r=n(a("Bp9Y"))
var i="transform"
t.transform=i
var o,s,l
t.animationEnd=l
t.transitionEnd=s
var _,d,c,u
t.transitionDelay=u
t.transitionTiming=c
t.transitionDuration=d
t.transitionProperty=_
var f,h,b,p
t.animationDelay=p
t.animationTiming=b
t.animationDuration=h
t.animationName=f
if(r.default){var m=v()
o=m.prefix
t.transitionEnd=s=m.transitionEnd
t.animationEnd=l=m.animationEnd
t.transform=i=o+"-"+i
t.transitionProperty=_=o+"-transition-property"
t.transitionDuration=d=o+"-transition-duration"
t.transitionDelay=u=o+"-transition-delay"
t.transitionTiming=c=o+"-transition-timing-function"
t.animationName=f=o+"-animation-name"
t.animationDuration=h=o+"-animation-duration"
t.animationTiming=b=o+"-animation-delay"
t.animationDelay=p=o+"-animation-timing-function"}var g={transform:i,end:s,property:_,timing:c,delay:u,duration:d}
t.default=g
function v(){var e=document.createElement("div").style
var t={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}}
var a=Object.keys(t)
var n,r
var i=""
for(var o=0;o<a.length;o++){var s=a[o]
if(s+"TransitionProperty"in e){i="-"+s.toLowerCase()
n=t[s]("TransitionEnd")
r=t[s]("AnimationEnd")
break}}!n&&"transitionProperty"in e&&(n="transitionend")
!r&&"animationName"in e&&(r="animationend")
e=null
return{animationEnd:r,transitionEnd:n,prefix:i}}},xUnz:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
var n={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]}
function r(e,t,a){if(Object.prototype.hasOwnProperty.call(n,e)){var r=n[e]
for(var i=0,o=r.length;i<o;++i)a[r[i]]=t}}},xfxO:function(e,t,a){"use strict"
t.__esModule=true
t.nameShape=void 0
t.transitionTimeout=s
var n=a("q1tI")
o(n)
var r=a("17x9")
var i=o(r)
function o(e){return e&&e.__esModule?e:{default:e}}function s(e){var t="transition"+e+"Timeout"
var a="transition"+e
return function(e){if(e[a]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.")
if("number"!==typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}}t.nameShape=i.default.oneOfType([i.default.string,i.default.shape({enter:i.default.string,leave:i.default.string,active:i.default.string}),i.default.shape({enter:i.default.string,enterActive:i.default.string,leave:i.default.string,leaveActive:i.default.string,appear:i.default.string,appearActive:i.default.string})])},xkGU:function(e,t,a){e.exports=a("bNQv")},yD6e:function(e,t,a){"use strict"
t.__esModule=true
t.default=n
function n(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}e.exports=t["default"]},yOY4:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.Alpha=void 0
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a]
n.enumerable=n.enumerable||false
n.configurable=true
"value"in n&&(n.writable=true)
Object.defineProperty(e,n.key,n)}}return function(t,a,n){a&&e(t.prototype,a)
n&&e(t,n)
return t}}()
var i=a("q1tI")
var o=h(i)
var s=a("/FUP")
var l=h(s)
var _=a("THLb")
var d=f(_)
var c=a("Nq3d")
var u=h(c)
function f(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])
t.default=e
return t}function h(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var g=t.Alpha=function(e){m(t,e)
function t(){var e
var a,n,r
b(this,t)
for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s]
return r=(a=(n=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n),n.handleChange=function(e){var t=d.calculateChange(e,n.props.hsl,n.props.direction,n.props.a,n.container)
t&&"function"===typeof n.props.onChange&&n.props.onChange(t,e)},n.handleMouseDown=function(e){n.handleChange(e)
window.addEventListener("mousemove",n.handleChange)
window.addEventListener("mouseup",n.handleMouseUp)},n.handleMouseUp=function(){n.unbindEventListeners()},n.unbindEventListeners=function(){window.removeEventListener("mousemove",n.handleChange)
window.removeEventListener("mouseup",n.handleMouseUp)},a),p(n,r)}r(t,[{key:"componentWillUnmount",value:function(){this.unbindEventListeners()}},{key:"render",value:function(){var e=this
var t=this.props.rgb
var a=(0,l.default)({default:{alpha:{absolute:"0px 0px 0px 0px",borderRadius:this.props.radius},checkboard:{absolute:"0px 0px 0px 0px",overflow:"hidden",borderRadius:this.props.radius},gradient:{absolute:"0px 0px 0px 0px",background:"linear-gradient(to right, rgba("+t.r+","+t.g+","+t.b+", 0) 0%,\n           rgba("+t.r+","+t.g+","+t.b+", 1) 100%)",boxShadow:this.props.shadow,borderRadius:this.props.radius},container:{position:"relative",height:"100%",margin:"0 3px"},pointer:{position:"absolute",left:100*t.a+"%"},slider:{width:"4px",borderRadius:"1px",height:"8px",boxShadow:"0 0 2px rgba(0, 0, 0, .6)",background:"#fff",marginTop:"1px",transform:"translateX(-2px)"}},vertical:{gradient:{background:"linear-gradient(to bottom, rgba("+t.r+","+t.g+","+t.b+", 0) 0%,\n           rgba("+t.r+","+t.g+","+t.b+", 1) 100%)"},pointer:{left:0,top:100*t.a+"%"}},overwrite:n({},this.props.style)},{vertical:"vertical"===this.props.direction,overwrite:true})
return o.default.createElement("div",{style:a.alpha},o.default.createElement("div",{style:a.checkboard},o.default.createElement(u.default,{renderers:this.props.renderers})),o.default.createElement("div",{style:a.gradient}),o.default.createElement("div",{style:a.container,ref:function(t){return e.container=t},onMouseDown:this.handleMouseDown,onTouchMove:this.handleChange,onTouchStart:this.handleChange},o.default.createElement("div",{style:a.pointer},this.props.pointer?o.default.createElement(this.props.pointer,this.props):o.default.createElement("div",{style:a.slider}))))}}])
return t}(i.PureComponent||i.Component)
t.default=g},ycFn:function(e,t,a){"use strict"
var n=a("TqRt")
t.__esModule=true
t.default=i
var r=n(a("yD6e"))
function i(e,t){e.classList?e.classList.add(t):(0,r.default)(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}e.exports=t["default"]},ycuu:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=s
var n={"space-around":"distribute","space-between":"justify","flex-start":"start","flex-end":"end"}
var r={alignContent:"msFlexLinePack",alignSelf:"msFlexItemAlign",alignItems:"msFlexAlign",justifyContent:"msFlexPack",order:"msFlexOrder",flexGrow:"msFlexPositive",flexShrink:"msFlexNegative",flexBasis:"msFlexPreferredSize"}
var i={auto:"1 1 auto",inherit:"inherit",initial:"0 1 auto",none:"0 0 auto",unset:"unset"}
var o=/^\d+(\.\d+)?$/
function s(e,t,a){Object.prototype.hasOwnProperty.call(r,e)&&(a[r[e]]=n[t]||t)
if("flex"===e){if(Object.prototype.hasOwnProperty.call(i,t)){a.msFlex=i[t]
return}if(o.test(t)){a.msFlex=t+" 1 0%"
return}var s=t.split(/\s/)
switch(s.length){case 1:a.msFlex="1 1 "+t
return
case 2:o.test(s[1])?a.msFlex=s[0]+" "+s[1]+" 0%":a.msFlex=s[0]+" 1 "+s[1]
return
default:a.msFlex=t}}}},zB99:function(e,t,a){"use strict"
t.__esModule=true
var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]
for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}
var r=a("ycFn")
var i=m(r)
var o=a("VOcB")
var s=m(o)
var l=a("q5+k")
var _=m(l)
var d=a("xU8c")
var c=a("q1tI")
var u=m(c)
var f=a("17x9")
var h=m(f)
var b=a("i8i4")
var p=a("xfxO")
function m(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function k(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})
t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=[]
d.transitionEnd&&y.push(d.transitionEnd)
d.animationEnd&&y.push(d.animationEnd)
function w(e,t){y.length?y.forEach(function(a){return e.addEventListener(a,t,false)}):setTimeout(t,0)
return function(){if(!y.length)return
y.forEach(function(a){return e.removeEventListener(a,t,false)})}}h.default.node,p.nameShape.isRequired,h.default.bool,h.default.bool,h.default.bool,h.default.number,h.default.number,h.default.number
var x=function(e){k(t,e)
function t(){var a,n,r
g(this,t)
for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s]
return r=(a=(n=v(this,e.call.apply(e,[this].concat(o))),n),n.componentWillAppear=function(e){n.props.appear?n.transition("appear",e,n.props.appearTimeout):e()},n.componentWillEnter=function(e){n.props.enter?n.transition("enter",e,n.props.enterTimeout):e()},n.componentWillLeave=function(e){n.props.leave?n.transition("leave",e,n.props.leaveTimeout):e()},a),v(n,r)}t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[]
this.transitionTimeouts=[]}
t.prototype.componentWillUnmount=function(){this.unmounted=true
this.timeout&&clearTimeout(this.timeout)
this.transitionTimeouts.forEach(function(e){clearTimeout(e)})
this.classNameAndNodeQueue.length=0}
t.prototype.transition=function(e,t,a){var n=(0,b.findDOMNode)(this)
if(!n){t&&t()
return}var r=this.props.name[e]||this.props.name+"-"+e
var o=this.props.name[e+"Active"]||r+"-active"
var l=null
var _=void 0;(0,i.default)(n,r)
this.queueClassAndNode(o,n)
var c=function(e){if(e&&e.target!==n)return
clearTimeout(l)
_&&_();(0,s.default)(n,r);(0,s.default)(n,o)
_&&_()
t&&t()}
if(a){l=setTimeout(c,a)
this.transitionTimeouts.push(l)}else d.transitionEnd&&(_=w(n,c))}
t.prototype.queueClassAndNode=function(e,t){var a=this
this.classNameAndNodeQueue.push({className:e,node:t})
this.rafHandle||(this.rafHandle=(0,_.default)(function(){return a.flushClassNameAndNodeQueue()}))}
t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach(function(e){e.node.scrollTop;(0,i.default)(e.node,e.className)})
this.classNameAndNodeQueue.length=0
this.rafHandle=null}
t.prototype.render=function(){var e=n({},this.props)
delete e.name
delete e.appear
delete e.enter
delete e.leave
delete e.appearTimeout
delete e.enterTimeout
delete e.leaveTimeout
delete e.children
return u.default.cloneElement(u.default.Children.only(this.props.children),e)}
return t}(u.default.Component)
x.displayName="CSSTransitionGroupChild"
x.propTypes={}
t.default=x
e.exports=t["default"]},zCBb:function(e,t,a){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=n
function n(e,t,a,n,r){for(var i=0,o=e.length;i<o;++i){var s=e[i](t,a,n,r)
if(s)return s}}}}])

//# sourceMappingURL=97-c-3eb88a9aea.js.map