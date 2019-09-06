(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[32],{"3LMm":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
function r(e){var t=e.colors,n=e.breakpoints
return{minimalBackground:t.backgroundLightest,small:n.small,medium:n.medium,large:n.large}}},CcCu:function(e,t,n){"use strict"
var r=n("TqRt")
var a=n("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=r(n("lSNA"))
var i=r(n("lwsE"))
var l=r(n("W8MJ"))
var d=r(n("a1gu"))
var s=r(n("Nsbk"))
var c=r(n("7W2i"))
var u=a(n("q1tI"))
var f=r(n("17x9"))
var p=r(n("TSYQ"))
var h=r(n("XbQQ"))
var v=r(n("Zuoh"))
var b=r(n("J2CL"))
var m=r(n("5WdN"))
var g=r(n("BXe7"))
var y=r(n("e+dA"))
var k,_,A,x,w
var C={componentId:"cDwzl",template:function(e){return"\n\n.cDwzl_caGd,.cDwzl_bGBk{box-sizing:border-box}\n\n.cDwzl_caGd{background:".concat(e.background||"inherit",";border-color:").concat(e.borderColor||"inherit",";border-style:").concat(e.borderStyle||"inherit",";border-width:").concat(e.borderWidth||"inherit",";color:").concat(e.color||"inherit",";width:100%}\n\n.cDwzl_cLQw{overflow:auto}\n\n.cDwzl_GKUc,.cDwzl_cAug{flex-basis:100%;min-width:1px}\n\n.cDwzl_GKUc .cDwzl_caGd,.cDwzl_cAug .cDwzl_caGd{border-bottom:none;border-left:none;border-right:none}")},content:"cDwzl_caGd",root:"cDwzl_bGBk",overflow:"cDwzl_cLQw",minimal:"cDwzl_GKUc",simple:"cDwzl_cAug"}
var T=(k=(0,v.default)(),_=(0,b.default)(y.default,C),k(A=_(A=(w=x=function(e){(0,c.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,d.default)(this,(0,s.default)(t).apply(this,arguments))}(0,l.default)(t,[{key:"renderContent",value:function(){var e
var t=(e={},(0,o.default)(e,C.content,true),(0,o.default)(e,C.overflow,this.props.maxHeight),e)
return u.default.createElement(h.default,{className:(0,p.default)(t),maxHeight:this.props.maxHeight,as:"div",padding:this.props.padding,textAlign:this.props.textAlign},this.props.children)}},{key:"render",value:function(){var e
var t=(e={},(0,o.default)(e,C.root,true),(0,o.default)(e,C[this.props.variant],true),e)
var n=!this.props.selected||!!this.props.disabled
return u.default.createElement("div",{className:(0,p.default)(t),role:"tabpanel",id:this.props.id,"aria-labelledby":this.props.labelledBy,"aria-hidden":n?"true":null},u.default.createElement(g.default,{type:"fade",in:!n,unmountOnExit:true,transitionExit:false},this.renderContent()))}}])
t.displayName="TabPanel"
return t}(u.Component),x.propTypes={title:f.default.node.isRequired,children:f.default.node,variant:f.default.oneOf(["simple","minimal"]),maxHeight:f.default.string,id:f.default.string,labelledBy:f.default.string,selected:f.default.bool,disabled:f.default.bool,padding:m.default.spacing,textAlign:f.default.oneOf(["start","center","end"]),tabRef:f.default.func},x.defaultProps={children:null,maxHeight:void 0,disabled:false,textAlign:void 0,id:null,variant:"simple",labelledBy:null,selected:false,padding:"small",tabRef:function(e){}},w))||A)||A)
t.default=T},OfN1:function(e,t,n){"use strict"
n.d(t,"a",function(){return o})
var r="getRandomVcryp0123456789bfhijklqsuvwxzABCDEFGHIJKLMNOPQSTUWXYZ"
var a=r.length-1
function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n="u".concat(l("",t-1))
return e&&false?"".concat(e,"__").concat(n):n}function i(e){var t=[]
while(0<e--)t.push(Math.floor(256*Math.random()))
return t}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12
var n=""
var o=i(t)
while(0<t--)n+=r[o[t]&a]
return n}},cfkA:function(e,t,n){"use strict"
n.r(t)
var r=n("OfN1")
n.d(t,"default",function(){return r["a"]})},d0Ab:function(e,t,n){"use strict"
var r=n("TqRt")
var a=n("284h")
Object.defineProperty(t,"__esModule",{value:true})
Object.defineProperty(t,"Tab",{enumerable:true,get:function(){return x.default}})
Object.defineProperty(t,"TabPanel",{enumerable:true,get:function(){return w.default}})
t.default=void 0
var o=r(n("lSNA"))
var i=r(n("lwsE"))
var l=r(n("W8MJ"))
var d=r(n("a1gu"))
var s=r(n("Nsbk"))
var c=r(n("7W2i"))
n("v2wi")
var u=a(n("q1tI"))
var f=r(n("17x9"))
var p=r(n("TSYQ"))
var h=r(n("3zPy"))
var v=r(n("XbQQ"))
var b=r(n("J2CL"))
var m=n("IzEL")
var g=r(n("5WdN"))
var y=r(n("+mmM"))
var k=r(n("4hSX"))
var _=r(n("cfkA"))
var A=r(n("Zuoh"))
var x=r(n("sJMe"))
var w=r(n("CcCu"))
var C=r(n("3LMm"))
var T,K,I,S,z
var D={componentId:"klzhG",template:function(e){return"\n\n.klzhG_GKUc,.klzhG_cAug{display:flex;flex-flow:row wrap}\n\n.klzhG_GKUc{background:".concat(e.minimalBackground||"inherit","}")},minimal:"klzhG_GKUc",simple:"klzhG_cAug"}
var X=(T=(0,A.default)(),K=(0,b.default)(C.default,D),T(I=K(I=(z=S=function(e){(0,c.default)(t,e)
function t(e){var n;(0,i.default)(this,t)
n=(0,d.default)(this,(0,s.default)(t).call(this))
n.handleClick=function(e,t){var r=n.getTab(e)
r.props.disabled||n.setSelected(e)}
n.handleEnter=function(e,t){if(t.keyCode!==h.default.codes.enter&&t.keyCode!==h.default.codes.return)return
var r=n.getTab(e)
r.props.disabled||n.setSelected(e)}
n.handleKeyDown=function(e,t){var r=n.selectedIndex
var a=false
if(t.keyCode===h.default.codes.up||t.keyCode===h.default.codes.left){r=n.getIndex(r,-1)
a=true}else if(t.keyCode===h.default.codes.down||t.keyCode===h.default.codes.right){r=n.getIndex(r,1)
a=true}a&&t.preventDefault()
n.setSelected(r)}
n.state={focus:e.focus}
"undefined"===typeof e.selectedIndex&&(n.state.selectedIndex=e.defaultSelectedIndex)
n._tabs=[]
n._panels=[]
n._srTabs=[]
return n}(0,l.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this.props,n=t.focus,r=t.selectedIndex
var a=e.focus,o=e.selectedIndex
a===n&&o===r||this.setState({focus:a})}},{key:"setSelected",value:function(e){var t=this
var n
this.isValidIndex(e),"[TabList] Invalid tab index: '".concat(e,"'.")
var r=function(){"undefined"!==typeof n&&"function"===typeof t.props.onChange&&t.props.onChange(e,n)}
if("undefined"===typeof this.props.selectedIndex)this.setState(function(t,a){n=t.selectedIndex
if(e!==n){r()
return{selectedIndex:e,focus:true}}return t})
else{n=this.props.selectedIndex
e!==n&&r()}}},{key:"getIndex",value:function(e,t){var n=this.tabs.length
var r=t<0?t+n:t
this.isValidIndex(e),"[Tablist] Invalid tab index: '".concat(e,"'")
var a=e
do{a=(a+r)%n}while(this.getTab(a).props.disabled)
return a}},{key:"isValidIndex",value:function(e){return e>=0&&e<this.tabs.length}},{key:"getTab",value:function(e){return this._tabs[e]}},{key:"createScreenReaderTab",value:function(e,t,n){var r=this
return(0,u.createElement)(x.default,{variant:"screenreader-only",ref:function(t){r._srTabs[e]=t},key:"sr-tab-".concat(t),id:"sr-tab-".concat(t),controls:"panel-".concat(t),index:e,selected:false,disabled:n.disabled,children:n.title,onKeyDown:this.handleEnter,onClick:this.handleClick})}},{key:"createTab",value:function(e,t,n,r){var a=this
var o=n&&this.state.focus
return(0,u.createElement)(x.default,{variant:this.props.variant,ref:function(t){a._tabs[e]=t
"function"===typeof r.tabRef&&r.tabRef(t)},key:"tab-".concat(t),id:"tab-".concat(t),controls:"panel-".concat(t),index:e,selected:n,focus:o,role:n?"tab":"presentation",disabled:r.disabled,children:r.title,onClick:this.handleClick,onKeyDown:this.handleKeyDown})}},{key:"clonePanel",value:function(e,t,n,r){var a=this
return(0,k.default)(r,{ref:function(t){a._panels[e]=t},id:"panel-".concat(t),labelledBy:"tab-".concat(t),selected:n,key:"panel-".concat(t),variant:this.props.variant,padding:r.props.padding||this.props.padding,textAlign:r.props.textAlign||this.props.textAlign})}},{key:"renderChildren",value:function(){var e=this
var t=[]
var n=this.tabIds
var r=this.tabs
var a=r.length
u.default.Children.forEach(this.props.children,function(o,i){if((0,y.default)(o,[w.default])){var l=!o.props.disabled&&e.selectedIndex===i
var d=n[i]
if(l)for(var s=0;s<i;s++)t.push(e.createScreenReaderTab(s,n[s],r[s].props))
t.push(e.createTab(i,d,l,o.props))
if(l)for(var c=i+1;c<a;c++)t.push(e.createScreenReaderTab(c,n[c],r[c].props))
t.push(e.clonePanel(i,d,l,o))}else t.push(o)})
this.state.focus&&(this.state.focus=false)
return t}},{key:"render",value:function(){return u.default.createElement(v.default,{className:(0,p.default)((0,o.default)({},D[this.props.variant],true)),maxWidth:this.theme[this.props.size],margin:this.props.margin,role:"tablist"},this.renderChildren())}},{key:"selectedIndex",get:function(){return"undefined"===typeof this.props.selectedIndex?this.state.selectedIndex:this.props.selectedIndex}},{key:"tabIds",get:function(){var e=this._tabIds||[]
var t=e.length-this.tabs.length
while(t++<0)e.push((0,_.default)("Tab"))
this._tabIds=e
return e}},{key:"tabs",get:function(){return u.default.Children.toArray(this.props.children).map(function(e){return(0,y.default)(e,[w.default])&&e})}}])
t.displayName="TabList"
return t}(u.Component),S.propTypes={children:m.Children.oneOf([w.default,null]),variant:f.default.oneOf(["simple","minimal"]),defaultSelectedIndex:f.default.number,selectedIndex:(0,m.controllable)(f.default.number,"onChange","defaultSelectedIndex"),onChange:f.default.func,focus:f.default.bool,size:f.default.oneOf(["small","medium","large"]),margin:g.default.spacing,padding:g.default.spacing,textAlign:f.default.oneOf(["start","center","end"])},S.defaultProps={variant:"simple",focus:false,defaultSelectedIndex:0,padding:void 0,textAlign:void 0,size:void 0,selectedIndex:void 0,onChange:void 0,margin:void 0,children:null},z))||I)||I)
t.default=X},"e+dA":function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
function r(e){var t=e.colors,n=e.borders
e.spacing
return{color:t.textDarkest,background:t.backgroundLightest,borderColor:t.borderMedium,borderWidth:n.widthSmall,borderStyle:n.style}}r.canvas=function(e){return{color:e["ic-brand-font-color-dark"]}}},iKFW:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=r
function r(e){var t=e.colors,n=e.typography
e.spacing
return{fontFamily:n.fontFamily,fontWeight:n.fontWeightNormal,lineHeight:n.lineHeightCondensed,fontSize:n.fontSizeMedium,simpleColor:t.textBrand,simpleSelectedBackground:t.backgroundLightest,simpleSelectedBorderColor:t.borderMedium,simpleSelectedColor:t.textDarkest,minimalColor:t.textDarkest,minimalHoverBorderColor:t.borderMedium,minimalSelectedBorderColor:t.borderBrand}}r.canvas=function(e){return{simpleColor:e["ic-brand-primary"],simpleSelectedColor:e["ic-brand-font-color-dark"],minimalColor:e["ic-brand-font-color-dark"],minimalSelectedBorderColor:e["ic-brand-primary"]}}},sJMe:function(e,t,n){"use strict"
var r=n("TqRt")
var a=n("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var o=r(n("lSNA"))
var i=r(n("lwsE"))
var l=r(n("W8MJ"))
var d=r(n("a1gu"))
var s=r(n("Nsbk"))
var c=r(n("7W2i"))
var u=a(n("q1tI"))
var f=r(n("17x9"))
var p=r(n("TSYQ"))
var h=r(n("Zuoh"))
var v=r(n("J2CL"))
var b=r(n("KB5V"))
var m=r(n("iKFW"))
var g,y,k,_,A
var x={componentId:"dXATK",template:function(e){return"\n\n.dXATK_bGBk{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;cursor:pointer;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";line-height:").concat(e.lineHeight||"inherit",";user-select:none}\n\n.dXATK_bGBk[aria-disabled],.dXATK_bGBk[aria-selected]{cursor:default}\n\n.dXATK_bGBk[aria-disabled]{opacity:0.5}\n\n.dXATK_bGBk:focus{outline:none}\n\n.dXATK_GKUc,.dXATK_cAug{order:-1;white-space:nowrap}\n\n.dXATK_cAug{border:0.0625rem solid transparent;border-top-left-radius:0.1875rem;border-top-right-radius:0.1875rem;box-sizing:border-box;color:").concat(e.simpleColor||"inherit",";margin-bottom:-0.0625rem;margin-right:0.2em;padding:0.7em 1em}\n\n.dXATK_cAug:first-of-type{margin-left:0}\n\n.dXATK_cAug:not([aria-selected]):not([aria-disabled]):hover,.dXATK_cAug[aria-selected]{background:").concat(e.simpleSelectedBackground||"inherit",";border-color:").concat(e.simpleSelectedBorderColor||"inherit","}\n\n.dXATK_cAug:hover,.dXATK_cAug[aria-disabled],.dXATK_cAug[aria-selected]{color:").concat(e.simpleSelectedColor||"inherit","}\n\n.dXATK_cAug[aria-selected]{border-bottom-color:").concat(e.simpleSelectedBackground||"inherit",";z-index:1}\n\n.dXATK_cAug:focus{text-decoration:underline}\n\n.dXATK_GKUc{color:").concat(e.minimalColor||"inherit",';line-height:1;padding:1rem 1.25rem;position:relative;z-index:1}\n\n.dXATK_GKUc:after{bottom:-0.0625rem;content:"";height:0.25rem;left:0;opacity:0;position:absolute;transform:translateZ(0) scaleX(0.01);transition:all 0.2s ease-out;width:100%}\n\n.dXATK_GKUc[aria-disabled]{font-weight:400}\n\n.dXATK_GKUc:not([aria-selected]):not([aria-disabled]):hover{border-bottom-color:').concat(e.minimalHoverBorderColor||"inherit","}\n\n.dXATK_GKUc[aria-selected]:after{background-color:").concat(e.minimalSelectedBorderColor||"inherit",";opacity:1;transform:translateZ(0) scaleX(1)}\n\n.dXATK_GKUc:focus{text-decoration:underline}\n\n.dXATK_bNyY{border:0;clip:rect(0 0 0 0);height:0.0625rem;margin:-0.0625rem;overflow:hidden;padding:0;position:absolute;width:0.0625rem}")},root:"dXATK_bGBk",minimal:"dXATK_GKUc",simple:"dXATK_cAug","screenreader-only":"dXATK_bNyY"}
var w=(g=(0,h.default)(),y=(0,v.default)(m.default,x),g(k=y(k=(A=_=function(e){(0,c.default)(t,e)
function t(){var e
var n;(0,i.default)(this,t)
for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o]
n=(0,d.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(a)))
n.handleClick=function(e){if(n.props.disabled)return
n.props.onClick(n.props.index,e)}
n.handleKeyDown=function(e){if(n.props.disabled)return
n.props.onKeyDown(n.props.index,e)}
return n}(0,l.default)(t,[{key:"syncNodeAttributes",value:function(e,t){if(t.selected){e.setAttribute("tabindex",0)
t.focus&&e.focus()}else t.disabled?e.removeAttribute("tabindex"):e.setAttribute("tabindex",-1)}},{key:"componentDidMount",value:function(){this.syncNodeAttributes((0,b.default)(this),this.props)}},{key:"componentDidUpdate",value:function(){this.syncNodeAttributes((0,b.default)(this),this.props)}},{key:"renderIcon",value:function(){return u.default.createElement("span",{className:x.icon,"aria-hidden":"true","aria-label":""})}},{key:"render",value:function(){var e
var t=(e={},(0,o.default)(e,x.root,true),(0,o.default)(e,x[this.props.variant],true),e)
var n="screenreader-only"!==this.props.variant&&this.renderIcon()
return u.default.createElement("div",{className:(0,p.default)(t),role:this.props.role,id:this.props.id,onClick:this.handleClick,onKeyDown:this.handleKeyDown,"aria-selected":this.props.selected?"true":null,"aria-disabled":this.props.disabled?"true":null,"aria-hidden":"presentation"===this.props.role?"true":null,"aria-controls":this.props.controls},n,this.props.children)}}])
t.displayName="Tab"
return t}(u.Component),_.propTypes={variant:f.default.oneOf(["simple","minimal","screenreader-only"]),id:f.default.string.isRequired,index:f.default.number.isRequired,controls:f.default.string.isRequired,disabled:f.default.bool,selected:f.default.bool,focus:f.default.bool,onClick:f.default.func,onKeyDown:f.default.func,role:f.default.string,children:f.default.node},_.defaultProps={children:null,variant:"simple",disabled:false,selected:false,focus:false,role:"tab",onClick:function(){},onKeyDown:function(){}},A))||k)||k)
t.default=w},v2wi:function(e,t,n){var r=n("q1tI")
function a(){var e=""
try{e=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getStackAddendum()}catch(e){}return e}function o(e,t,n){if(!t&&false){var r=a()
if("function"!==typeof console[e])throw new Error("'".concat(e,"' is not a valid console method!"))
var o
for(var i=arguments.length,l=new Array(i>3?i-3:0),d=3;d<i;d++)l[d-3]=arguments[d];(o=console)[e].apply(o,["Warning: ".concat(n)].concat(l,[r]))}}t.error=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return o.apply(void 0,["error"].concat(t))}
t.warn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return o.apply(void 0,["warn"].concat(t))}
t.info=function(){var e
return(e=console).info.apply(e,arguments)}
t.assert=function(){var e
return(e=console).assert.apply(e,arguments)}
t.debug=function(){var e
return(e=console).debug.apply(e,arguments)}
t.log=function(){var e
return(e=console).log.apply(e,arguments)}}}])

//# sourceMappingURL=32-c-265ae3bbe2.js.map