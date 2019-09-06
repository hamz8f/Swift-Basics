(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[15],{"8Umg":function(e,t,n){var o=n("q1tI")
function r(){var e=""
try{e=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getStackAddendum()}catch(e){}return e}function a(e,t,n){if(!t&&false){var o=r()
if("function"!==typeof console[e])throw new Error("'".concat(e,"' is not a valid console method!"))
var a
for(var u=arguments.length,i=new Array(u>3?u-3:0),l=3;l<u;l++)i[l-3]=arguments[l];(a=console)[e].apply(a,["Warning: ".concat(n)].concat(i,[o]))}}t.error=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return a.apply(void 0,["error"].concat(t))}
t.warn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return a.apply(void 0,["warn"].concat(t))}
t.info=function(){var e
return(e=console).info.apply(e,arguments)}
t.assert=function(){var e
return(e=console).assert.apply(e,arguments)}
t.debug=function(){var e
return(e=console).debug.apply(e,arguments)}
t.log=function(){var e
return(e=console).log.apply(e,arguments)}},"8gEM":function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
Object.defineProperty(t,"FocusableView",{enumerable:true,get:function(){return v.default}})
t.default=void 0
var r=o(n("lwsE"))
var a=o(n("W8MJ"))
var u=o(n("a1gu"))
var i=o(n("Nsbk"))
var l=o(n("7W2i"))
n("8Umg")
var s=n("q1tI")
var d=o(n("17x9"))
var f=o(n("Maij"))
var c=o(n("CI6L"))
var h=o(n("GAgy"))
var p=o(n("3XUm"))
var v=o(n("XtFW"))
var m=function(e){(0,l.default)(t,e)
function t(){var e
var n;(0,r.default)(this,t)
for(var o=arguments.length,a=new Array(o),l=0;l<o;l++)a[l]=arguments[l]
n=(0,u.default)(this,(e=(0,i.default)(t)).call.apply(e,[this].concat(a)))
n._listeners=[]
n._inputModeListener=null
n.state={focused:false,focusable:false}
n.handleFocus=function(e){n.setState({focused:true})}
n.handleBlur=function(e){n.setState({focused:false})}
return n}(0,a.default)(t,[{key:"componentDidMount",value:function(){var e=this.focusable,t=this.focused
this.addEventListeners(e)
this.setState({focusable:e,focused:t})}},{key:"componentDidUpdate",value:function(e,t){var n=this.props,o=n.render,r=n.children
if(t.focusable!==this.focusable)if(this.state.focused){this.focusable.focus()
this.updateFocusable(true)}else this.updateFocusable()
e.children===r&&e.render===o||this.updateFocusable()}},{key:"componentWillUnmount",value:function(){this.removeEventListeners()}},{key:"updateFocusable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.focused
var t=this.focusable
if(t!==this.state.focusable){this.removeEventListeners()
this.setState({focusable:t,focused:e})
this.addEventListeners(t)}else this.setState({focused:e})}},{key:"addEventListeners",value:function(e){if(e){this._listeners.push((0,f.default)(e,"focus",this.handleFocus,true))
this._listeners.push((0,f.default)(e,"blur",this.handleBlur,true))}}},{key:"removeEventListeners",value:function(){this._listeners.forEach(function(e){return e.remove()})
this._listeners=[]}},{key:"focus",value:function(){var e=this.focusable
e&&e.focus()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.render,o=void 0===n?t:n
var r=this.state,a=r.focusable,u=r.focused
var i=this.focusVisible
return"function"===typeof o?o({focused:u,focusable:a,focusVisible:i}):null}},{key:"focused",get:function(){return(0,c.default)(this)}},{key:"focusable",get:function(){var e=(0,p.default)(this,true)||[]
var t=e&&e.length||0
"[Focusable] Exactly one tabbable child is required (".concat(t," found).")
var n=!!e&&e[0]
return!(!n||"function"!==typeof n.focus)&&n}},{key:"focusVisible",get:function(){var e=this.state,n=e.focusable,o=e.focused
if(o&&h.default.isKeyboardMode())return true
if(!n||!o)return false
var r=n.tagName,a=n.type,u=n.readOnly,i=n.isContentEditable
if("INPUT"==r&&t.inputTypes[a]&&!u)return true
if("TEXTAREA"==r&&!u)return true
if(i)return true
return false}}])
t.displayName="Focusable"
return t}(s.Component)
m.propTypes={children:d.default.func,render:d.default.func}
m.defaultProps={children:null,render:void 0}
m.inputTypes={text:true,search:true,url:true,tel:true,email:true,password:true,number:true,date:true,month:true,week:true,time:true,datetime:true,"datetime-local":true}
var b=m
t.default=b},A5Jy:function(e,t,n){"use strict"
n.r(t)
var o=n("wawZ")
n.d(t,"default",function(){return o["a"]})},AYmh:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
function o(e){var t=e.typography,n=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,smallFontSize:t.fontSizeXSmall,smallPadding:n.xxSmall,mediumFontSize:t.fontSizeSmall,mediumPadding:n.xSmall,largeFontSize:t.fontSizeMedium,largePadding:n.small}}},GAgy:function(e,t,n){"use strict"
var o=n("TqRt")
Object.defineProperty(t,"__esModule",{value:true})
t.default=t.MODES=void 0
var r=o(n("lwsE"))
var a=o(n("W8MJ"))
var u=o(n("Maij"))
var i=o(n("8HMx"))
var l={keyboard:"keyboard",pointer:"pointer"}
t.MODES=l
var s=function(){function e(){var t=this;(0,r.default)(this,e)
this._listeners=[]
this._initialized=false
this._mode=l.keyboard
this.onInitialPointerMove=function(e){if("html"===e.target.nodeName.toLowerCase())return
t._mode=l.pointer
t._listeners.forEach(function(e){return e.remove()})}
this.onKeyDown=function(){t._mode=l.keyboard}
this.onPointerDown=function(){t._mode=l.pointer}
this.init=function(){if(!i.default||t._initialized)return;(0,u.default)(document,"keydown",t.onKeyDown,true);(0,u.default)(document,"mousedown",t.onPointerDown,true);(0,u.default)(document,"pointerdown",t.onPointerDown,true);(0,u.default)(document,"touchstart",t.onPointerDown,true)
t.addInitialPointerMoveListeners()
t._initialized=true}
this.init()}(0,a.default)(e,[{key:"addInitialPointerMoveListeners",value:function(){this._listeners.push((0,u.default)(document,"mousemove",this.onInitialPointerMove,true))
this._listeners.push((0,u.default)(document,"mousedown",this.onInitialPointerMove,true))
this._listeners.push((0,u.default)(document,"mouseup",this.onInitialPointerMove,true))
this._listeners.push((0,u.default)(document,"pointermove",this.onInitialPointerMove,true))
this._listeners.push((0,u.default)(document,"pointerdown",this.onInitialPointerMove,true))
this._listeners.push((0,u.default)(document,"pointerup",this.onInitialPointerMove,true))
this._listeners.push((0,u.default)(document,"touchmove",this.onInitialPointerMove,true))
this._listeners.push((0,u.default)(document,"touchstart",this.onInitialPointerMove,true))
this._listeners.push((0,u.default)(document,"touchend",this.onInitialPointerMove,true))}},{key:"isKeyboardMode",value:function(){this.init()
return this._mode===l.keyboard}},{key:"mode",get:function(){this.init()
return this._mode}}])
return e}()
var d=new s
t.default=d},Ui1M:function(e,t,n){"use strict"
var o=n("TqRt")
var r=n("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.PopoverContent=t.PopoverTrigger=t.default=void 0
var a=o(n("MVZn"))
var u=o(n("W8MJ"))
var i=o(n("lwsE"))
var l=o(n("a1gu"))
var s=o(n("Nsbk"))
var d=o(n("7W2i"))
n("dx2U")
var f=r(n("q1tI"))
var c=o(n("17x9"))
var h=o(n("3zPy"))
var p=o(n("0NqH"))
var v=o(n("XbQQ"))
var m=o(n("Jg1x"))
var b=o(n("LqRq"))
var g=o(n("SJAx"))
var y=r(n("4tjX"))
var w=n("IzEL")
var _=o(n("KB5V"))
var k=o(n("8dII"))
var E=r(n("q9F9"))
var C=o(n("CI6L"))
var O=o(n("eHKC"))
var P=o(n("cOnk"))
var T=o(n("4hSX"))
var A=o(n("xdG6"))
var M=o(n("t5Un"))
var B=o(n("h/+2"))
var G=n("2lwo")
var F=o(n("ZJ40"))
var R=o(n("A5Jy"))
var x=n("DfZk")
var S=n("6Rkx")
var I=o(n("5WdN"))
var D=o(n("Zuoh"))
var N,z,L,W,J,X,j,q,K,U,Y,V,Z,Q,H
var $=(N=(0,D.default)(),N(z=(W=L=function(e){(0,d.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return t}(E.default),L.displayName="PopoverTrigger",W))||z)
t.PopoverTrigger=$
var ee=(J=(0,D.default)(),J(X=(q=j=function(e){(0,d.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,l.default)(this,(0,s.default)(t).apply(this,arguments))}return t}(E.default),j.displayName="PopoverContent",q))||X)
t.PopoverContent=ee
var te=(K=(0,D.default)(),U=(0,F.default)("3.0.0",{renderOffscreen:"shouldRenderOffscreen",rootClose:"shouldCloseOnDocumentClick"}),Y=(0,F.default)("5.0.0",{closeButtonLabel:true,closeButtonRef:true,applicationElement:true}),V=(0,b.default)(),K(Z=U(Z=Y(Z=V(Z=(H=Q=function(e){(0,d.default)(t,e)
function t(e){var n;(0,i.default)(this,t)
n=(0,l.default)(this,(0,s.default)(t).call(this,e))
n.show=function(){"undefined"===typeof n.props.show&&n.setState({show:true})
"function"===typeof n.props.onToggle&&n.props.onToggle(true)}
n.hide=function(e,t){var o=n.props,r=o.onDismiss,a=o.onToggle,u=o.show
"undefined"===typeof u?n.setState(function(n){var o=n.show
o&&r(e,t)
return{show:false}}):u&&r(e,t)
a(false)}
n.toggle=function(){n.shown?n.hide():n.show()}
n.handleDialogDismiss=function(){var e
if(!n.props.shouldReturnFocus&&n.props.shouldFocusContentOnTriggerBlur){var t=(0,_.default)(n._trigger)
t&&"function"===typeof t.focus&&t.focus()}(e=n).hide.apply(e,arguments)}
n.handleDialogBlur=function(e){if(e.keyCode===h.default.codes.tab&&e.shiftKey&&n.props.shouldFocusContentOnTriggerBlur)return
n.hide(e)}
n.handleTriggerKeyDown=function(e){if(!n.props.shouldFocusContentOnTriggerBlur)return
if(e.keyCode===h.default.codes.tab&&!e.shiftKey){e.preventDefault()
n._raf.push((0,P.default)(function(){n._dialog&&n._dialog.focus()}))}}
n.handleTriggerBlur=function(e){n.props.on.indexOf("focus")>-1&&n._raf.push((0,P.default)(function(){(0,C.default)(n._view)||n.hide()}))}
n.handlePositionChanged=function(e){var t=e.placement
n.setState((0,a.default)({closeButtonPlacement:n.getCloseButtonPlacement(n.props),placement:t},n.computeOffsets(t)))}
n.state={placement:e.placement,offsetX:e.offsetX,offsetY:e.offsetY}
"undefined"===typeof e.show&&(n.state.show=e.defaultShow)
n._id=n.props.id||(0,R.default)("Popover")
n._raf=[]
return n}(0,u.default)(t,[{key:"componentWillMount",value:function(){var e=this
this._handleMouseOver=B.default.bind(null,function(){e.show()})
this._handleMouseOut=B.default.bind(null,function(){e.hide()})}},{key:"componentWillUnmount",value:function(){this._raf.forEach(function(e){return e.cancel()})
this._raf=[]}},{key:"shouldComponentUpdate",value:function(e,t){return!((0,A.default)(this.props,e)&&(0,A.default)(this.state,t))}},{key:"getCloseButtonPlacement",value:function(e){var t=e.placement.split(" ")
return t.indexOf("end")>=0?"start":"end"}},{key:"renderTrigger",value:function(){var e=this
var n=(0,E.pick)(t.Trigger,this.props.children)
if(n){var o=this.props,r=o.on,a=o.shouldContainFocus
var u
var i
var l
var s
var d
r.indexOf("click")>-1&&(u=function(){e.toggle()})
if(r.indexOf("hover")>-1){s=this._handleMouseOver
l=this._handleMouseOut}r.indexOf("focus")>-1&&(i=function(){e.show()})
d=a?this.shown?"true":"false":null
n=(0,T.default)(n,{ref:function(t){e._trigger=t},"aria-expanded":d,onKeyDown:(0,O.default)(this.handleTriggerKeyDown,this.props.onKeyDown),onClick:(0,O.default)(u,this.props.onClick),onBlur:(0,O.default)(this.handleTriggerBlur,this.props.onBlur),onFocus:(0,O.default)(i,this.props.onFocus),onMouseOut:(0,O.default)(l,this.props.onMouseOut),onMouseOver:(0,O.default)(s,this.props.onMouseOver)})}return n}},{key:"renderCloseButton",value:function(){var e=this
return this.props.closeButtonLabel?f.default.createElement(g.default,{placement:this.state.closeButtonPlacement,offset:"x-small",variant:"inverse"===this.props.variant?"icon-inverse":"icon",buttonRef:function(t){e._closeButton=t
"function"===typeof e.props.closeButtonRef&&e.props.closeButtonRef(t)},onClick:this.hide},this.props.closeButtonLabel):null}},{key:"renderContent",value:function(){var e=this
var n=(0,E.pick)(t.Content,this.props.children)
this.shown&&(n=f.default.createElement(m.default,Object.assign({},(0,G.pickProps)(this.props,m.default.propTypes),{ref:function(t){return e._dialog=t},display:"block",open:this.shown,onBlur:this.handleDialogBlur,onDismiss:this.handleDialogDismiss,defaultFocusElement:this.defaultFocusElement,shouldFocusOnOpen:!this.props.shouldFocusContentOnTriggerBlur}),n))
if(this.shown||this.props.shouldRenderOffscreen){var o
var r={ref:function(t){return e._view=t},elementRef:this.props.contentRef,background:this.props.variant,stacking:this.props.stacking,shadow:this.props.shadow,display:"block"}
var u=this.state.placement
if(this.props.withArrow){o=p.default
r=(0,a.default)({},r,{placement:this.rtl?(0,S.mirrorHorizontalPlacement)(u," "):u})}else{o=v.default
r=(0,a.default)({},r,{borderWidth:"small",borderRadius:"medium"})}return f.default.createElement(o,r,this.renderCloseButton(),n)}return null}},{key:"computeOffsets",value:function(e){var t=this.props,n=t.offsetX,o=t.offsetY
if(this.props.alignArrow&&this._view){var r=(0,x.parsePlacement)(e)[1]
var a=this._view.theme,u=a.arrowSize,i=a.arrowBorderWidth
var l=2*((0,M.default)(u)+(0,M.default)(i))
"start"===r?n=l:"end"===r?n=-l:"top"===r?o=l:"bottom"===r&&(o=-l)}return{offsetX:n,offsetY:o}}},{key:"render",value:function(){var e=this.positionProps
return this.props.positionTarget?f.default.createElement("span",null,this.renderTrigger(),f.default.createElement(y.default,e,f.default.createElement(y.PositionContent,null,this.renderContent()))):f.default.createElement(y.default,e,f.default.createElement(y.PositionTarget,null,this.renderTrigger()),f.default.createElement(y.PositionContent,null,this.renderContent()))}},{key:"placement",get:function(){var e=this.props.placement
this.rtl&&(e=(0,S.mirrorHorizontalPlacement)(e," "))
return!this.shown&&this.props.shouldRenderOffscreen?"offscreen":e}},{key:"shown",get:function(){return"undefined"===typeof this.props.show?this.state.show:this.props.show}},{key:"defaultFocusElement",get:function(){return this.props.defaultFocusElement}},{key:"positionProps",get:function(){return(0,a.default)({},(0,G.pickProps)(this.props,y.default.propTypes),{offsetX:this.state.offsetX,offsetY:this.state.offsetY,trackPosition:this.shown,placement:this.placement,onPositioned:(0,O.default)(this.handlePositionChanged,this.props.onShow),onPositionChanged:this.handlePositionChanged,target:this.props.positionTarget,id:this._id})}}])
t.displayName="Popover"
return t}(f.Component),Q.Trigger=$,Q.Content=ee,Q.propTypes={children:w.Children.oneOf([$,ee]),placement:k.default.placement,on:c.default.oneOfType([c.default.oneOf(["click","hover","focus"]),c.default.arrayOf(c.default.oneOf(["click","hover","focus"]))]),variant:c.default.oneOf(["default","inverse"]),shadow:I.default.shadow,stacking:I.default.stacking,defaultShow:c.default.bool,show:(0,w.controllable)(c.default.bool,"onToggle","defaultShow"),contentRef:c.default.func,onToggle:c.default.func,onClick:c.default.func,onFocus:c.default.func,onBlur:c.default.func,onKeyDown:c.default.func,onShow:c.default.func,onMouseOver:c.default.func,onMouseOut:c.default.func,onDismiss:c.default.func,withArrow:c.default.bool,closeButtonLabel:c.default.string,closeButtonRef:c.default.func,label:c.default.string,defaultFocusElement:c.default.oneOfType([c.default.element,c.default.func]),shouldRenderOffscreen:c.default.bool,shouldContainFocus:c.default.bool,shouldReturnFocus:c.default.bool,shouldCloseOnDocumentClick:c.default.bool,shouldCloseOnEscape:c.default.bool,offsetX:c.default.oneOfType([c.default.string,c.default.number]),offsetY:c.default.oneOfType([c.default.string,c.default.number]),onPositionChanged:c.default.func,onPositioned:c.default.func,trackPosition:c.default.bool,constrain:k.default.constrain,mountNode:k.default.mountNode,insertAt:c.default.oneOf(["bottom","top"]),liveRegion:c.default.oneOfType([c.default.arrayOf(c.default.element),c.default.element,c.default.func]),positionTarget:c.default.oneOfType([w.element,c.default.func]),alignArrow:c.default.bool,id:c.default.string,shouldFocusContentOnTriggerBlur:c.default.bool},Q.defaultProps={children:null,onToggle:function(e){},onClick:function(e){},onFocus:function(e){},onBlur:function(e){},onMouseOver:function(e){},onMouseOut:function(e){},onShow:function(e){},onDismiss:function(e,t){},placement:"bottom center",stacking:"topmost",shadow:"resting",offsetX:0,offsetY:0,variant:"default",on:["hover","focus"],contentRef:function(e){},defaultShow:false,withArrow:true,trackPosition:true,constrain:"window",onPositioned:function(e){},onPositionChanged:function(e){},shouldRenderOffscreen:false,shouldContainFocus:false,shouldReturnFocus:true,shouldCloseOnDocumentClick:true,shouldFocusContentOnTriggerBlur:false,shouldCloseOnEscape:true,defaultFocusElement:null,label:null,mountNode:null,insertAt:"bottom",liveRegion:null,positionTarget:null,alignArrow:false,id:void 0,show:void 0,closeButtonRef:void 0,closeButtonLabel:void 0,onKeyDown:void 0},H))||Z)||Z)||Z)||Z)
var ne=te
t.default=ne},X9ng:function(e,t,n){"use strict"
var o=n("TqRt")
var r=n("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=o(n("lSNA"))
var u=o(n("MVZn"))
var i=o(n("lwsE"))
var l=o(n("W8MJ"))
var s=o(n("a1gu"))
var d=o(n("Nsbk"))
var f=o(n("7W2i"))
var c=r(n("q1tI"))
var h=o(n("17x9"))
var p=o(n("TSYQ"))
var v=o(n("8gEM"))
var m=o(n("kibL"))
var b=o(n("8dII"))
var g=n("2lwo")
var y=o(n("lGJA"))
var w=o(n("ZJ40"))
var _=o(n("A5Jy"))
var k=o(n("J2CL"))
var E=o(n("Zuoh"))
var C=r(n("Ui1M"))
var O=o(n("AYmh"))
var P,T,A,M,B,G
var F={componentId:"cxCug",template:function(e){return"\n\n.cxCug_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-weight:").concat(e.fontWeight||"inherit","}\n\n.cxCug_doqw{font-size:").concat(e.smallFontSize||"inherit",";padding:").concat(e.smallPadding||"inherit","}\n\n.cxCug_ycrn{font-size:").concat(e.mediumFontSize||"inherit",";padding:").concat(e.mediumPadding||"inherit","}\n\n.cxCug_cMDj{font-size:").concat(e.largeFontSize||"inherit",";padding:").concat(e.largePadding||"inherit","}")},root:"cxCug_bGBk",small:"cxCug_doqw",medium:"cxCug_ycrn",large:"cxCug_cMDj"}
var R=(P=(0,E.default)(),T=(0,w.default)("5.42",{size:true}),A=(0,k.default)(O.default,F),P(M=T(M=A(M=(G=B=function(e){(0,f.default)(t,e)
function t(e){var n;(0,i.default)(this,t)
n=(0,s.default)(this,(0,d.default)(t).call(this))
n._id=(0,_.default)("Tooltip")
return n}(0,l.default)(t,[{key:"renderTrigger",value:function(e){var n=this.props,o=n.children,r=n.as
var a={"aria-describedby":this._id}
if(r){var i=(0,m.default)(t,this.props)
var l=(0,g.omitProps)(this.props,t.propTypes)
return c.default.createElement(i,Object.assign({},l,a),o)}return"function"===typeof o?o({focused:e,getTriggerProps:function(e){return(0,u.default)({},a,e)}}):(0,y.default)(this.props.children,a)}},{key:"render",value:function(){var e=this
var t=this.props.size||"small"
return c.default.createElement(v.default,{render:function(n){var o
var r=n.focused
return c.default.createElement(C.default,{on:e.props.on,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:e.props.placement,variant:e.props.variant,mountNode:e.props.mountNode,constrain:e.props.constrain,shadow:"none"},c.default.createElement(C.PopoverTrigger,null,e.renderTrigger(r)),c.default.createElement(C.PopoverContent,null,c.default.createElement("span",{id:e._id,className:(0,p.default)((o={},(0,a.default)(o,F.root,true),(0,a.default)(o,F[t],t),o)),role:"tooltip"},e.props.tip)))}})}}])
t.displayName="Tooltip"
return t}(c.Component),B.propTypes={children:h.default.oneOfType([h.default.node,h.default.func]).isRequired,tip:h.default.node.isRequired,as:h.default.elementType,on:h.default.oneOfType([h.default.oneOf(["click","hover","focus"]),h.default.arrayOf(h.default.oneOf(["click","hover","focus"]))]),variant:h.default.oneOf(["default","inverse"]),placement:b.default.placement,size:h.default.oneOf(["small","medium","large"]),mountNode:b.default.mountNode,constrain:b.default.constrain},B.defaultProps={on:void 0,variant:"default",placement:"top",mountNode:null,constrain:"window"},G))||M)||M)||M)
t.default=R},XtFW:function(e,t,n){"use strict"
var o=n("TqRt")
var r=n("284h")
Object.defineProperty(t,"__esModule",{value:true})
t.default=void 0
var a=o(n("lSNA"))
var u=o(n("QILm"))
var i=o(n("lwsE"))
var l=o(n("W8MJ"))
var s=o(n("a1gu"))
var d=o(n("Nsbk"))
var f=o(n("7W2i"))
var c=r(n("q1tI"))
var h=o(n("17x9"))
var p=o(n("TSYQ"))
var v=o(n("XbQQ"))
var m=o(n("J2CL"))
var b=o(n("5WdN"))
var g=n("2lwo")
var y=o(n("oyAC"))
var w,_,k,E
var C={componentId:"bAGdE",template:function(e){return"\n\n.bAGdE_bGBk,.bAGdE_bGBk[type=button],.bAGdE_bGBk[type=reset],.bAGdE_bGBk[type=submit]{-moz-appearance:none;-webkit-appearance:none;appearance:none}\n\n.bAGdE_bGBk{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;background:transparent;border:none;box-sizing:border-box;direction:inherit;font-family:".concat(e.fontFamily||"inherit",";margin:0;max-width:100%;outline:none;overflow:visible;position:relative;text-align:inherit;text-decoration:none;touch-action:manipulation;user-select:none}\n\n[dir=ltr] .bAGdE_bGBk,[dir=rtl] .bAGdE_bGBk{text-align:inherit}\n\n.bAGdE_bGBk.bAGdE_cKJj:before,.bAGdE_bGBk.bAGdE_cMUw:before{border-style:solid;border-width:").concat(e.borderWidth||"inherit",';bottom:-0.25rem;content:"";left:-0.25rem;opacity:0;pointer-events:none;position:absolute;right:-0.25rem;top:-0.25rem;transform:scale(0.01);transition:all 0.2s}\n\n.bAGdE_bGBk.bAGdE_bXiG:before{border-color:').concat(e.borderColorPrimary||"inherit","}\n\n.bAGdE_bGBk.bAGdE_ddvR:before{border-color:").concat(e.borderColorError||"inherit","}\n\n.bAGdE_bGBk.bAGdE_enfx:before{border-color:").concat(e.borderColorInverse||"inherit","}\n\n.bAGdE_bGBk.bAGdE_cMUw:before{border-radius:calc(").concat(e.borderRadiusRectangular||"inherit"," + 0.125rem)}\n\n.bAGdE_bGBk.bAGdE_cKJj:before{border-radius:").concat(e.borderRadiusCircular||"inherit","}\n\n.bAGdE_bGBk.bAGdE_cVYB:before,.bAGdE_bGBk:focus:before{opacity:1;transform:scale(1)}")},root:"bAGdE_bGBk",circular:"bAGdE_cKJj",rectangular:"bAGdE_cMUw",primary:"bAGdE_bXiG",error:"bAGdE_ddvR",inverse:"bAGdE_enfx",focused:"bAGdE_cVYB"}
var O=(w=(0,m.default)(y.default,C),w(_=(E=k=function(e){(0,f.default)(t,e)
function t(){(0,i.default)(this,t)
return(0,s.default)(this,(0,d.default)(t).apply(this,arguments))}(0,l.default)(t,[{key:"render",value:function(){var e
var n=this.props,o=n.as,r=n.children,i=n.color,l=n.cursor,s=n.display,d=n.elementRef,f=n.focused,h=n.href,m=n.margin,b=n.onClick,y=n.role,w=n.shape,_=n.className,k=n.to,E=n.width,O=n.tabIndex,P=(0,u.default)(n,["as","children","color","cursor","display","elementRef","focused","href","margin","onClick","role","shape","className","to","width","tabIndex"])
var T=v.default.omitViewProps((0,g.omitProps)(P,t.propTypes),t)
return c.default.createElement(v.default,Object.assign({},T,{display:s,as:o,cursor:l,href:h,to:k,margin:m,width:E,elementRef:d,className:(0,p.default)((e={},(0,a.default)(e,_,_),(0,a.default)(e,C.root,true),(0,a.default)(e,C[i],true),(0,a.default)(e,C[w],true),(0,a.default)(e,C.focused,f),e)),role:y||b?y:null,tabIndex:b&&!y?O||"0":O,onClick:b}),r)}}])
t.displayName="FocusableView"
return t}(c.Component),k.propTypes={children:h.default.node,focused:h.default.bool,shape:h.default.oneOf(["circular","rectangular"]),color:h.default.oneOf(["primary","error","inverse"]),elementRef:h.default.func,as:h.default.elementType,href:h.default.string,display:h.default.oneOf(["auto","block","inline-block","flex","inline-flex"]),margin:b.default.spacing,cursor:h.default.string,width:h.default.oneOfType([h.default.string,h.default.number]),role:h.default.string,onClick:h.default.func,tabIndex:h.default.oneOfType([h.default.string,h.default.number])},k.defaultProps={children:null,href:void 0,width:void 0,margin:void 0,onClick:void 0,focused:false,shape:"rectangular",color:"primary",display:"inline-block",as:"button",elementRef:function(e){},cursor:"auto",role:null,tabIndex:null},E))||_)
t.default=O},oyAC:function(e,t,n){"use strict"
Object.defineProperty(t,"__esModule",{value:true})
t.default=o
function o(e){var t=e.borders,n=e.colors,o=e.typography
return{fontFamily:o.fontFamily,borderWidth:t.widthMedium,borderRadiusRectangular:t.radiusMedium,borderRadiusCircular:"999rem",borderColorPrimary:n.borderBrand,borderColorError:n.borderDanger,borderColorInverse:n.borderLightest}}}}])

//# sourceMappingURL=15-c-94f27ede2a.js.map