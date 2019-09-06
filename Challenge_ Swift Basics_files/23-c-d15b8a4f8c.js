(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[23],{"/MKj":function(e,t,r){"use strict"
r.r(t)
var n=r("dI71")
var o=r("q1tI")
var i=r("17x9")
var u=r.n(i)
var s=u.a.shape({trySubscribe:u.a.func.isRequired,tryUnsubscribe:u.a.func.isRequired,notifyNestedSubs:u.a.func.isRequired,isSubscribed:u.a.func.isRequired})
var a=u.a.shape({subscribe:u.a.func.isRequired,dispatch:u.a.func.isRequired,getState:u.a.func.isRequired})
function c(e){var t
void 0===e&&(e="store")
var r=e+"Subscription"
var i=function(t){Object(n["a"])(u,t)
var i=u.prototype
i.getChildContext=function(){var t
return t={},t[e]=this[e],t[r]=null,t}
function u(r,n){var o
o=t.call(this,r,n)||this
o[e]=r.store
return o}i.render=function(){return o["Children"].only(this.props.children)}
return u}(o["Component"])
false
i.propTypes={store:a.isRequired,children:u.a.element.isRequired}
i.childContextTypes=(t={},t[e]=a.isRequired,t[r]=s,t)
return i}var p=c()
var f=r("JX7q")
var d=r("wx14")
var l=r("zLVn")
var h=r("2mql")
var v=r.n(h)
var b=r("QLaP")
var y=r.n(b)
var m=r("TOwV")
var w=null
var O={notify:function(){}}
function g(){var e=[]
var t=[]
return{clear:function(){t=w
e=w},notify:function(){var r=e=t
for(var n=0;n<r.length;n++)r[n]()},get:function(){return t},subscribe:function(r){var n=true
t===e&&(t=e.slice())
t.push(r)
return function(){if(!n||e===w)return
n=false
t===e&&(t=e.slice())
t.splice(t.indexOf(r),1)}}}}var P=function(){function e(e,t,r){this.store=e
this.parentSub=t
this.onStateChange=r
this.unsubscribe=null
this.listeners=O}var t=e.prototype
t.addNestedSub=function(e){this.trySubscribe()
return this.listeners.subscribe(e)}
t.notifyNestedSubs=function(){this.listeners.notify()}
t.isSubscribed=function(){return Boolean(this.unsubscribe)}
t.trySubscribe=function(){if(!this.unsubscribe){this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange)
this.listeners=g()}}
t.tryUnsubscribe=function(){if(this.unsubscribe){this.unsubscribe()
this.unsubscribe=null
this.listeners.clear()
this.listeners=O}}
return e}()
var S=0
var E={}
function C(){}function j(e,t){var r={run:function(n){try{var o=e(t.getState(),n)
if(o!==r.props||r.error){r.shouldComponentUpdate=true
r.props=o
r.error=null}}catch(e){r.shouldComponentUpdate=true
r.error=e}}}
return r}function N(e,t){var r,i
void 0===t&&(t={})
var u=t,c=u.getDisplayName,p=void 0===c?function(e){return"ConnectAdvanced("+e+")"}:c,h=u.methodName,b=void 0===h?"connectAdvanced":h,w=u.renderCountProp,O=void 0===w?void 0:w,g=u.shouldHandleStateChanges,N=void 0===g||g,T=u.storeKey,x=void 0===T?"store":T,I=u.withRef,q=void 0!==I&&I,R=Object(l["a"])(u,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"])
var D=x+"Subscription"
var A=S++
var M=(r={},r[x]=a,r[D]=s,r)
var U=(i={},i[D]=s,i)
return function(t){y()(Object(m["isValidElementType"])(t),"You must pass a component to the function returned by "+b+". Instead received "+JSON.stringify(t))
var r=t.displayName||t.name||"Component"
var i=p(r)
var u=Object(d["a"])({},R,{getDisplayName:p,methodName:b,renderCountProp:O,shouldHandleStateChanges:N,storeKey:x,withRef:q,displayName:i,wrappedComponentName:r,WrappedComponent:t})
var s=function(r){Object(n["a"])(s,r)
function s(e,t){var n
n=r.call(this,e,t)||this
n.version=A
n.state={}
n.renderCount=0
n.store=e[x]||t[x]
n.propsMode=Boolean(e[x])
n.setWrappedInstance=n.setWrappedInstance.bind(Object(f["a"])(Object(f["a"])(n)))
y()(n.store,'Could not find "'+x+'" in either the context or props of "'+i+'". Either wrap the root component in a <Provider>, or explicitly pass "'+x+'" as a prop to "'+i+'".')
n.initSelector()
n.initSubscription()
return n}var a=s.prototype
a.getChildContext=function(){var e
var t=this.propsMode?null:this.subscription
return e={},e[D]=t||this.context[D],e}
a.componentDidMount=function(){if(!N)return
this.subscription.trySubscribe()
this.selector.run(this.props)
this.selector.shouldComponentUpdate&&this.forceUpdate()}
a.componentWillReceiveProps=function(e){this.selector.run(e)}
a.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate}
a.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe()
this.subscription=null
this.notifyNestedSubs=C
this.store=null
this.selector.run=C
this.selector.shouldComponentUpdate=false}
a.getWrappedInstance=function(){y()(q,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+b+"() call.")
return this.wrappedInstance}
a.setWrappedInstance=function(e){this.wrappedInstance=e}
a.initSelector=function(){var t=e(this.store.dispatch,u)
this.selector=j(t,this.store)
this.selector.run(this.props)}
a.initSubscription=function(){if(!N)return
var e=(this.propsMode?this.props:this.context)[D]
this.subscription=new P(this.store,e,this.onStateChange.bind(this))
this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}
a.onStateChange=function(){this.selector.run(this.props)
if(this.selector.shouldComponentUpdate){this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate
this.setState(E)}else this.notifyNestedSubs()}
a.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0
this.notifyNestedSubs()}
a.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()}
a.addExtraProps=function(e){if(!q&&!O&&!(this.propsMode&&this.subscription))return e
var t=Object(d["a"])({},e)
q&&(t.ref=this.setWrappedInstance)
O&&(t[O]=this.renderCount++)
this.propsMode&&this.subscription&&(t[D]=this.subscription)
return t}
a.render=function(){var e=this.selector
e.shouldComponentUpdate=false
if(e.error)throw e.error
return Object(o["createElement"])(t,this.addExtraProps(e.props))}
return s}(o["Component"])
s.WrappedComponent=t
s.displayName=i
s.childContextTypes=U
s.contextTypes=M
s.propTypes=M
false
return v()(s,t)}}var T=Object.prototype.hasOwnProperty
function x(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function I(e,t){if(x(e,t))return true
if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return false
var r=Object.keys(e)
var n=Object.keys(t)
if(r.length!==n.length)return false
for(var o=0;o<r.length;o++)if(!T.call(t,r[o])||!x(e[r[o]],t[r[o]]))return false
return true}var q=r("ANjH")
function R(e){return function(t,r){var n=e(t,r)
function o(){return n}o.dependsOnOwnProps=false
return o}}function D(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function A(e,t){return function(t,r){r.displayName
var n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e)}
n.dependsOnOwnProps=true
n.mapToProps=function(t,r){n.mapToProps=e
n.dependsOnOwnProps=D(e)
var o=n(t,r)
if("function"===typeof o){n.mapToProps=o
n.dependsOnOwnProps=D(o)
o=n(t,r)}false
return o}
return n}}function M(e){return"function"===typeof e?A(e,"mapDispatchToProps"):void 0}function U(e){return e?void 0:R(function(e){return{dispatch:e}})}function _(e){return e&&"object"===typeof e?R(function(t){return Object(q["bindActionCreators"])(e,t)}):void 0}var k=[M,U,_]
function W(e){return"function"===typeof e?A(e,"mapStateToProps"):void 0}function B(e){return e?void 0:R(function(){return{}})}var H=[W,B]
function K(e,t,r){return Object(d["a"])({},r,e,t)}function F(e){return function(t,r){r.displayName
var n=r.pure,o=r.areMergedPropsEqual
var i=false
var u
return function(t,r,s){var a=e(t,r,s)
if(i)n&&o(a,u)||(u=a)
else{i=true
u=a
false}return u}}}function L(e){return"function"===typeof e?F(e):void 0}function J(e){return e?void 0:function(){return K}}var Y=[L,J]
function V(e,t,r,n){return function(o,i){return r(e(o,i),t(n,i),i)}}function z(e,t,r,n,o){var i=o.areStatesEqual,u=o.areOwnPropsEqual,s=o.areStatePropsEqual
var a=false
var c
var p
var f
var d
var l
function h(o,i){c=o
p=i
f=e(c,p)
d=t(n,p)
l=r(f,d,p)
a=true
return l}function v(){f=e(c,p)
t.dependsOnOwnProps&&(d=t(n,p))
l=r(f,d,p)
return l}function b(){e.dependsOnOwnProps&&(f=e(c,p))
t.dependsOnOwnProps&&(d=t(n,p))
l=r(f,d,p)
return l}function y(){var t=e(c,p)
var n=!s(t,f)
f=t
n&&(l=r(f,d,p))
return l}function m(e,t){var r=!u(t,p)
var n=!i(e,c)
c=e
p=t
if(r&&n)return v()
if(r)return b()
if(n)return y()
return l}return function(e,t){return a?m(e,t):h(e,t)}}function X(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,i=Object(l["a"])(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"])
var u=r(e,i)
var s=n(e,i)
var a=o(e,i)
false
var c=i.pure?z:V
return c(u,s,a,e,i)}function G(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e)
if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function Q(e,t){return e===t}function Z(e){var t=void 0===e?{}:e,r=t.connectHOC,n=void 0===r?N:r,o=t.mapStateToPropsFactories,i=void 0===o?H:o,u=t.mapDispatchToPropsFactories,s=void 0===u?k:u,a=t.mergePropsFactories,c=void 0===a?Y:a,p=t.selectorFactory,f=void 0===p?X:p
return function(e,t,r,o){void 0===o&&(o={})
var u=o,a=u.pure,p=void 0===a||a,h=u.areStatesEqual,v=void 0===h?Q:h,b=u.areOwnPropsEqual,y=void 0===b?I:b,m=u.areStatePropsEqual,w=void 0===m?I:m,O=u.areMergedPropsEqual,g=void 0===O?I:O,P=Object(l["a"])(u,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"])
var S=G(e,i,"mapStateToProps")
var E=G(t,s,"mapDispatchToProps")
var C=G(r,c,"mergeProps")
return n(f,Object(d["a"])({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:S,initMapDispatchToProps:E,initMergeProps:C,pure:p,areStatesEqual:v,areOwnPropsEqual:y,areStatePropsEqual:w,areMergedPropsEqual:g},P))}}var $=Z()
r.d(t,"Provider",function(){return p})
r.d(t,"createProvider",function(){return c})
r.d(t,"connectAdvanced",function(){return N})
r.d(t,"connect",function(){return $})},ANjH:function(e,t,r){"use strict"
r.r(t)
r.d(t,"__DO_NOT_USE__ActionTypes",function(){return i})
r.d(t,"applyMiddleware",function(){return y})
r.d(t,"bindActionCreators",function(){return d})
r.d(t,"combineReducers",function(){return p})
r.d(t,"compose",function(){return b})
r.d(t,"createStore",function(){return s})
var n=r("bCCX")
var o=function(){return Math.random().toString(36).substring(7).split("").join(".")}
var i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}}
function u(e){if("object"!==typeof e||null===e)return false
var t=e
while(null!==Object.getPrototypeOf(t))t=Object.getPrototypeOf(t)
return Object.getPrototypeOf(e)===t}function s(e,t,r){var o
if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.")
if("function"===typeof t&&"undefined"===typeof r){r=t
t=void 0}if("undefined"!==typeof r){if("function"!==typeof r)throw new Error("Expected the enhancer to be a function.")
return r(s)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.")
var a=e
var c=t
var p=[]
var f=p
var d=false
function l(){f===p&&(f=p.slice())}function h(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.")
return c}function v(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.")
if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.")
var t=true
l()
f.push(e)
return function(){if(!t)return
if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.")
t=false
l()
var r=f.indexOf(e)
f.splice(r,1)}}function b(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.")
if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')
if(d)throw new Error("Reducers may not dispatch actions.")
try{d=true
c=a(c,e)}finally{d=false}var t=p=f
for(var r=0;r<t.length;r++){var n=t[r]
n()}return e}function y(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.")
a=e
b({type:i.REPLACE})}function m(){var e
var t=v
return e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.")
function r(){e.next&&e.next(h())}r()
var n=t(r)
return{unsubscribe:n}}},e[n["default"]]=function(){return this},e}b({type:i.INIT})
return o={dispatch:b,subscribe:v,getState:h,replaceReducer:y},o[n["default"]]=m,o}function a(e,t){var r=t&&t.type
var n=r&&'action "'+String(r)+'"'||"an action"
return"Given "+n+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function c(e){Object.keys(e).forEach(function(t){var r=e[t]
var n=r(void 0,{type:i.INIT})
if("undefined"===typeof n)throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.")
if("undefined"===typeof r(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function p(e){var t=Object.keys(e)
var r={}
for(var n=0;n<t.length;n++){var o=t[n]
false
"function"===typeof e[o]&&(r[o]=e[o])}var i=Object.keys(r)
false
var u
try{c(r)}catch(e){u=e}return function(e,t){void 0===e&&(e={})
if(u)throw u
var n=false
var o={}
for(var s=0;s<i.length;s++){var c=i[s]
var p=r[c]
var f=e[c]
var d=p(f,t)
if("undefined"===typeof d){var l=a(c,t)
throw new Error(l)}o[c]=d
n=n||d!==f}return n?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function d(e,t){if("function"===typeof e)return f(e,t)
if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?')
var r={}
for(var n in e){var o=e[n]
"function"===typeof o&&(r[n]=f(o,t))}return r}function l(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r
return e}function h(e,t){var r=Object.keys(e)
Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(e))
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?h(r,true).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
if(0===t.length)return function(e){return e}
if(1===t.length)return t[0]
return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function y(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
return function(e){return function(){var r=e.apply(void 0,arguments)
var n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")}
var o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}}
var i=t.map(function(e){return e(o)})
n=b.apply(void 0,i)(r.dispatch)
return v({},r,{dispatch:n})}}}false},dI71:function(e,t,r){"use strict"
r.d(t,"a",function(){return n})
function n(e,t){e.prototype=Object.create(t.prototype)
e.prototype.constructor=e
e.__proto__=t}},sINF:function(e,t,r){"use strict"
r.r(t)
function n(e){return function(t){var r=t.dispatch,n=t.getState
return function(t){return function(o){if("function"===typeof o)return o(r,n,e)
return t(o)}}}}var o=n()
o.withExtraArgument=n
t["default"]=o},wx14:function(e,t,r){"use strict"
r.d(t,"a",function(){return n})
function n(){n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]
for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}
return n.apply(this,arguments)}}}])

//# sourceMappingURL=23-c-d15b8a4f8c.js.map