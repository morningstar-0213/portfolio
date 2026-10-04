(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function MM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vv={exports:{}},zc={},zv={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),EM=Symbol.for("react.portal"),TM=Symbol.for("react.fragment"),wM=Symbol.for("react.strict_mode"),AM=Symbol.for("react.profiler"),bM=Symbol.for("react.provider"),CM=Symbol.for("react.context"),RM=Symbol.for("react.forward_ref"),PM=Symbol.for("react.suspense"),LM=Symbol.for("react.memo"),DM=Symbol.for("react.lazy"),wm=Symbol.iterator;function NM(t){return t===null||typeof t!="object"?null:(t=wm&&t[wm]||t["@@iterator"],typeof t=="function"?t:null)}var Hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gv=Object.assign,Wv={};function mo(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||Hv}mo.prototype.isReactComponent={};mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xv(){}Xv.prototype=mo.prototype;function Fh(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||Hv}var Oh=Fh.prototype=new Xv;Oh.constructor=Fh;Gv(Oh,mo.prototype);Oh.isPureReactComponent=!0;var Am=Array.isArray,jv=Object.prototype.hasOwnProperty,kh={current:null},Yv={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jv.call(e,i)&&!Yv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:La,type:t,key:s,ref:o,props:r,_owner:kh.current}}function IM(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function UM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bm=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UM(""+t.key):e.toString(36)}function Ol(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case La:case EM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+_u(o,0):i,Am(r)?(n="",t!=null&&(n=t.replace(bm,"$&/")+"/"),Ol(r,e,n,"",function(c){return c})):r!=null&&(Bh(r)&&(r=IM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(bm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Am(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+_u(s,a);o+=Ol(s,e,n,l,r)}else if(l=NM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+_u(s,a++),o+=Ol(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var i=[],r=0;return Ol(t,i,"","",function(s){return e.call(n,s,r++)}),i}function FM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var hn={current:null},kl={transition:null},OM={ReactCurrentDispatcher:hn,ReactCurrentBatchConfig:kl,ReactCurrentOwner:kh};function $v(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!Bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=mo;Ye.Fragment=TM;Ye.Profiler=AM;Ye.PureComponent=Fh;Ye.StrictMode=wM;Ye.Suspense=PM;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OM;Ye.act=$v;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)jv.call(e,l)&&!Yv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:La,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:CM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bM,_context:t},t.Consumer=t};Ye.createElement=qv;Ye.createFactory=function(t){var e=qv.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:RM,render:t}};Ye.isValidElement=Bh;Ye.lazy=function(t){return{$$typeof:DM,_payload:{_status:-1,_result:t},_init:FM}};Ye.memo=function(t,e){return{$$typeof:LM,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=kl.transition;kl.transition={};try{t()}finally{kl.transition=e}};Ye.unstable_act=$v;Ye.useCallback=function(t,e){return hn.current.useCallback(t,e)};Ye.useContext=function(t){return hn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return hn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return hn.current.useEffect(t,e)};Ye.useId=function(){return hn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return hn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return hn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return hn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return hn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return hn.current.useReducer(t,e,n)};Ye.useRef=function(t){return hn.current.useRef(t)};Ye.useState=function(t){return hn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return hn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return hn.current.useTransition()};Ye.version="18.3.1";zv.exports=Ye;var re=zv.exports;const Hc=MM(re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kM=re,BM=Symbol.for("react.element"),VM=Symbol.for("react.fragment"),zM=Object.prototype.hasOwnProperty,HM=kM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GM={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)zM.call(e,i)&&!GM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:BM,type:t,key:s,ref:o,props:r,_owner:HM.current}}zc.Fragment=VM;zc.jsx=Kv;zc.jsxs=Kv;Vv.exports=zc;var L=Vv.exports,kf={},Zv={exports:{}},Nn={},Qv={exports:{}},Jv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,N){var z=D.length;D.push(N);e:for(;0<z;){var X=z-1>>>1,ae=D[X];if(0<r(ae,N))D[X]=N,D[z]=ae,z=X;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var N=D[0],z=D.pop();if(z!==N){D[0]=z;e:for(var X=0,ae=D.length,xe=ae>>>1;X<xe;){var Ue=2*(X+1)-1,Ce=D[Ue],Re=Ue+1,Z=D[Re];if(0>r(Ce,z))Re<ae&&0>r(Z,Ce)?(D[X]=Z,D[Re]=z,X=Re):(D[X]=Ce,D[Ue]=z,X=Ue);else if(Re<ae&&0>r(Z,z))D[X]=Z,D[Re]=z,X=Re;else break e}}return N}function r(D,N){var z=D.sortIndex-N.sortIndex;return z!==0?z:D.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,u=3,h=!1,m=!1,_=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var N=n(c);N!==null;){if(N.callback===null)i(c);else if(N.startTime<=D)i(c),N.sortIndex=N.expirationTime,e(l,N);else break;N=n(c)}}function S(D){if(_=!1,y(D),!m)if(n(l)!==null)m=!0,W(T);else{var N=n(c);N!==null&&O(S,N.startTime-D)}}function T(D,N){m=!1,_&&(_=!1,p(x),x=-1),h=!0;var z=u;try{for(y(N),d=n(l);d!==null&&(!(d.expirationTime>N)||D&&!U());){var X=d.callback;if(typeof X=="function"){d.callback=null,u=d.priorityLevel;var ae=X(d.expirationTime<=N);N=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&i(l),y(N)}else i(l);d=n(l)}if(d!==null)var xe=!0;else{var Ue=n(c);Ue!==null&&O(S,Ue.startTime-N),xe=!1}return xe}finally{d=null,u=z,h=!1}}var w=!1,b=null,x=-1,A=5,R=-1;function U(){return!(t.unstable_now()-R<A)}function H(){if(b!==null){var D=t.unstable_now();R=D;var N=!0;try{N=b(!0,D)}finally{N?B():(w=!1,b=null)}}else w=!1}var B;if(typeof v=="function")B=function(){v(H)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,V=P.port2;P.port1.onmessage=H,B=function(){V.postMessage(null)}}else B=function(){g(H,0)};function W(D){b=D,w||(w=!0,B())}function O(D,N){x=g(function(){D(t.unstable_now())},N)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,W(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return u},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(u){case 1:case 2:case 3:var N=3;break;default:N=u}var z=u;u=N;try{return D()}finally{u=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,N){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var z=u;u=D;try{return N()}finally{u=z}},t.unstable_scheduleCallback=function(D,N,z){var X=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?X+z:X):z=X,D){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=z+ae,D={id:f++,callback:N,priorityLevel:D,startTime:z,expirationTime:ae,sortIndex:-1},z>X?(D.sortIndex=z,e(c,D),n(l)===null&&D===n(c)&&(_?(p(x),x=-1):_=!0,O(S,z-X))):(D.sortIndex=ae,e(l,D),m||h||(m=!0,W(T))),D},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(D){var N=u;return function(){var z=u;u=N;try{return D.apply(this,arguments)}finally{u=z}}}})(Jv);Qv.exports=Jv;var WM=Qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XM=re,Ln=WM;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ex=new Set,sa={};function cs(t,e){io(t,e),io(t+"Capture",e)}function io(t,e){for(sa[t]=e,t=0;t<e.length;t++)ex.add(e[t])}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bf=Object.prototype.hasOwnProperty,jM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},Rm={};function YM(t){return Bf.call(Rm,t)?!0:Bf.call(Cm,t)?!1:jM.test(t)?Rm[t]=!0:(Cm[t]=!0,!1)}function qM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $M(t,e,n,i){if(e===null||typeof e>"u"||qM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vh=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vh,zh);qt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vh,zh);qt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vh,zh);qt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hh(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($M(e,n,r,i)&&(n=null),i||r===null?YM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ki=XM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),tx=Symbol.for("react.provider"),nx=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),zf=Symbol.for("react.suspense"),Hf=Symbol.for("react.suspense_list"),Xh=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),ix=Symbol.for("react.offscreen"),Pm=Symbol.iterator;function yo(t){return t===null||typeof t!="object"?null:(t=Pm&&t[Pm]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,yu;function Oo(t){if(yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yu=e&&e[1]||""}return`
`+yu+t}var Su=!1;function Mu(t,e){if(!t||Su)return"";Su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oo(t):""}function KM(t){switch(t.tag){case 5:return Oo(t.type);case 16:return Oo("Lazy");case 13:return Oo("Suspense");case 19:return Oo("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function Gf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Ds:return"Portal";case Vf:return"Profiler";case Gh:return"StrictMode";case zf:return"Suspense";case Hf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case nx:return(t.displayName||"Context")+".Consumer";case tx:return(t._context.displayName||"Context")+".Provider";case Wh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xh:return e=t.displayName||null,e!==null?e:Gf(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Gf(t(e))}catch{}}return null}function ZM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gf(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QM(t){var e=rx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=QM(t))}function sx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=rx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wf(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ox(t,e){e=e.checked,e!=null&&Hh(t,"checked",e,!1)}function Xf(t,e){ox(t,e);var n=wr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jf(t,e.type,n):e.hasOwnProperty("defaultValue")&&jf(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jf(t,e,n){(e!=="number"||ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function $s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Yf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ko(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function ax(t,e){var n=wr(e.value),i=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Im(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,cx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function oa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},JM=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){JM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function ux(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function fx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=ux(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var e1=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $f(t,e){if(e){if(e1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=null;function jh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qf=null,Ks=null,Zs=null;function Um(t){if(t=Ia(t)){if(typeof Qf!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Yc(e),Qf(t.stateNode,t.type,e))}}function dx(t){Ks?Zs?Zs.push(t):Zs=[t]:Ks=t}function hx(){if(Ks){var t=Ks,e=Zs;if(Zs=Ks=null,Um(t),e)for(t=0;t<e.length;t++)Um(e[t])}}function px(t,e){return t(e)}function mx(){}var Eu=!1;function gx(t,e,n){if(Eu)return t(e,n);Eu=!0;try{return px(t,e,n)}finally{Eu=!1,(Ks!==null||Zs!==null)&&(mx(),hx())}}function aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Yc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Jf=!1;if(Gi)try{var So={};Object.defineProperty(So,"passive",{get:function(){Jf=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{Jf=!1}function t1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var jo=!1,rc=null,sc=!1,ed=null,n1={onError:function(t){jo=!0,rc=t}};function i1(t,e,n,i,r,s,o,a,l){jo=!1,rc=null,t1.apply(n1,arguments)}function r1(t,e,n,i,r,s,o,a,l){if(i1.apply(this,arguments),jo){if(jo){var c=rc;jo=!1,rc=null}else throw Error(oe(198));sc||(sc=!0,ed=c)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function vx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fm(t){if(us(t)!==t)throw Error(oe(188))}function s1(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fm(r),t;if(s===i)return Fm(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function xx(t){return t=s1(t),t!==null?_x(t):null}function _x(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_x(t);if(e!==null)return e;t=t.sibling}return null}var yx=Ln.unstable_scheduleCallback,Om=Ln.unstable_cancelCallback,o1=Ln.unstable_shouldYield,a1=Ln.unstable_requestPaint,Rt=Ln.unstable_now,l1=Ln.unstable_getCurrentPriorityLevel,Yh=Ln.unstable_ImmediatePriority,Sx=Ln.unstable_UserBlockingPriority,oc=Ln.unstable_NormalPriority,c1=Ln.unstable_LowPriority,Mx=Ln.unstable_IdlePriority,Gc=null,xi=null;function u1(t){if(xi&&typeof xi.onCommitFiberRoot=="function")try{xi.onCommitFiberRoot(Gc,t,void 0,(t.current.flags&128)===128)}catch{}}var ni=Math.clz32?Math.clz32:h1,f1=Math.log,d1=Math.LN2;function h1(t){return t>>>=0,t===0?32:31-(f1(t)/d1|0)|0}var Ka=64,Za=4194304;function Bo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ac(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Bo(a):(s&=o,s!==0&&(i=Bo(s)))}else o=n&~r,o!==0?i=Bo(o):s!==0&&(i=Bo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ni(e),r=1<<n,i|=t[n],e&=~r;return i}function p1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ni(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=p1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function td(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ex(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function Tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ni(e),t[e]=n}function g1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ni(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function qh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ni(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function Tx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var wx,$h,Ax,bx,Cx,nd=!1,Qa=[],gr=null,vr=null,xr=null,la=new Map,ca=new Map,fr=[],v1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function km(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":la.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(e.pointerId)}}function Mo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ia(e),e!==null&&$h(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function x1(t,e,n,i,r){switch(e){case"focusin":return gr=Mo(gr,t,e,n,i,r),!0;case"dragenter":return vr=Mo(vr,t,e,n,i,r),!0;case"mouseover":return xr=Mo(xr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return la.set(s,Mo(la.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ca.set(s,Mo(ca.get(s)||null,t,e,n,i,r)),!0}return!1}function Rx(t){var e=Xr(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=vx(n),e!==null){t.blockedOn=e,Cx(t.priority,function(){Ax(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zf=i,n.target.dispatchEvent(i),Zf=null}else return e=Ia(n),e!==null&&$h(e),t.blockedOn=n,!1;e.shift()}return!0}function Bm(t,e,n){Bl(t)&&n.delete(e)}function _1(){nd=!1,gr!==null&&Bl(gr)&&(gr=null),vr!==null&&Bl(vr)&&(vr=null),xr!==null&&Bl(xr)&&(xr=null),la.forEach(Bm),ca.forEach(Bm)}function Eo(t,e){t.blockedOn===e&&(t.blockedOn=null,nd||(nd=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,_1)))}function ua(t){function e(r){return Eo(r,t)}if(0<Qa.length){Eo(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&Eo(gr,t),vr!==null&&Eo(vr,t),xr!==null&&Eo(xr,t),la.forEach(e),ca.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)Rx(n),n.blockedOn===null&&fr.shift()}var Qs=Ki.ReactCurrentBatchConfig,lc=!0;function y1(t,e,n,i){var r=at,s=Qs.transition;Qs.transition=null;try{at=1,Kh(t,e,n,i)}finally{at=r,Qs.transition=s}}function S1(t,e,n,i){var r=at,s=Qs.transition;Qs.transition=null;try{at=4,Kh(t,e,n,i)}finally{at=r,Qs.transition=s}}function Kh(t,e,n,i){if(lc){var r=id(t,e,n,i);if(r===null)Iu(t,e,i,cc,n),km(t,i);else if(x1(r,t,e,n,i))i.stopPropagation();else if(km(t,i),e&4&&-1<v1.indexOf(t)){for(;r!==null;){var s=Ia(r);if(s!==null&&wx(s),s=id(t,e,n,i),s===null&&Iu(t,e,i,cc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Iu(t,e,i,null,n)}}var cc=null;function id(t,e,n,i){if(cc=null,t=jh(i),t=Xr(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=vx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cc=t,null}function Px(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case Yh:return 1;case Sx:return 4;case oc:case c1:return 16;case Mx:return 536870912;default:return 16}default:return 16}}var pr=null,Zh=null,Vl=null;function Lx(){if(Vl)return Vl;var t,e=Zh,n=e.length,i,r="value"in pr?pr.value:pr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Vl=r.slice(t,1<i?1-i:void 0)}function zl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function Vm(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:Vm,this.isPropagationStopped=Vm,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=In(go),Na=At({},go,{view:0,detail:0}),M1=In(Na),wu,Au,To,Wc=At({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(wu=t.screenX-To.screenX,Au=t.screenY-To.screenY):Au=wu=0,To=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),zm=In(Wc),E1=At({},Wc,{dataTransfer:0}),T1=In(E1),w1=At({},Na,{relatedTarget:0}),bu=In(w1),A1=At({},go,{animationName:0,elapsedTime:0,pseudoElement:0}),b1=In(A1),C1=At({},go,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),R1=In(C1),P1=At({},go,{data:0}),Hm=In(P1),L1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=N1[t])?!!e[t]:!1}function Jh(){return I1}var U1=At({},Na,{key:function(t){if(t.key){var e=L1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?D1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jh,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),F1=In(U1),O1=At({},Wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gm=In(O1),k1=At({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jh}),B1=In(k1),V1=At({},go,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=In(V1),H1=At({},Wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G1=In(H1),W1=[9,13,27,32],ep=Gi&&"CompositionEvent"in window,Yo=null;Gi&&"documentMode"in document&&(Yo=document.documentMode);var X1=Gi&&"TextEvent"in window&&!Yo,Dx=Gi&&(!ep||Yo&&8<Yo&&11>=Yo),Wm=" ",Xm=!1;function Nx(t,e){switch(t){case"keyup":return W1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ix(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function j1(t,e){switch(t){case"compositionend":return Ix(e);case"keypress":return e.which!==32?null:(Xm=!0,Wm);case"textInput":return t=e.data,t===Wm&&Xm?null:t;default:return null}}function Y1(t,e){if(Is)return t==="compositionend"||!ep&&Nx(t,e)?(t=Lx(),Vl=Zh=pr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Dx&&e.locale!=="ko"?null:e.data;default:return null}}var q1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!q1[t.type]:e==="textarea"}function Ux(t,e,n,i){dx(i),e=uc(e,"onChange"),0<e.length&&(n=new Qh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var qo=null,fa=null;function $1(t){jx(t,0)}function Xc(t){var e=Os(t);if(sx(e))return t}function K1(t,e){if(t==="change")return e}var Fx=!1;if(Gi){var Cu;if(Gi){var Ru="oninput"in document;if(!Ru){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),Ru=typeof Ym.oninput=="function"}Cu=Ru}else Cu=!1;Fx=Cu&&(!document.documentMode||9<document.documentMode)}function qm(){qo&&(qo.detachEvent("onpropertychange",Ox),fa=qo=null)}function Ox(t){if(t.propertyName==="value"&&Xc(fa)){var e=[];Ux(e,fa,t,jh(t)),gx($1,e)}}function Z1(t,e,n){t==="focusin"?(qm(),qo=e,fa=n,qo.attachEvent("onpropertychange",Ox)):t==="focusout"&&qm()}function Q1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xc(fa)}function J1(t,e){if(t==="click")return Xc(e)}function eE(t,e){if(t==="input"||t==="change")return Xc(e)}function tE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oi=typeof Object.is=="function"?Object.is:tE;function da(t,e){if(oi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bf.call(e,r)||!oi(t[r],e[r]))return!1}return!0}function $m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Km(t,e){var n=$m(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$m(n)}}function kx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?kx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bx(){for(var t=window,e=ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ic(t.document)}return e}function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nE(t){var e=Bx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&kx(n.ownerDocument.documentElement,n)){if(i!==null&&tp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Km(n,s);var o=Km(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iE=Gi&&"documentMode"in document&&11>=document.documentMode,Us=null,rd=null,$o=null,sd=!1;function Zm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sd||Us==null||Us!==ic(i)||(i=Us,"selectionStart"in i&&tp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&da($o,i)||($o=i,i=uc(rd,"onSelect"),0<i.length&&(e=new Qh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Us)))}function el(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fs={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},Pu={},Vx={};Gi&&(Vx=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function jc(t){if(Pu[t])return Pu[t];if(!Fs[t])return t;var e=Fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vx)return Pu[t]=e[n];return t}var zx=jc("animationend"),Hx=jc("animationiteration"),Gx=jc("animationstart"),Wx=jc("transitionend"),Xx=new Map,Qm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(t,e){Xx.set(t,e),cs(e,[t])}for(var Lu=0;Lu<Qm.length;Lu++){var Du=Qm[Lu],rE=Du.toLowerCase(),sE=Du[0].toUpperCase()+Du.slice(1);Rr(rE,"on"+sE)}Rr(zx,"onAnimationEnd");Rr(Hx,"onAnimationIteration");Rr(Gx,"onAnimationStart");Rr("dblclick","onDoubleClick");Rr("focusin","onFocus");Rr("focusout","onBlur");Rr(Wx,"onTransitionEnd");io("onMouseEnter",["mouseout","mouseover"]);io("onMouseLeave",["mouseout","mouseover"]);io("onPointerEnter",["pointerout","pointerover"]);io("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function Jm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,r1(i,e,void 0,t),t.currentTarget=null}function jx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jm(r,a,c),s=l}}}if(sc)throw t=ed,sc=!1,ed=null,t}function gt(t,e){var n=e[ud];n===void 0&&(n=e[ud]=new Set);var i=t+"__bubble";n.has(i)||(Yx(e,t,2,!1),n.add(i))}function Nu(t,e,n){var i=0;e&&(i|=4),Yx(n,t,i,e)}var tl="_reactListening"+Math.random().toString(36).slice(2);function ha(t){if(!t[tl]){t[tl]=!0,ex.forEach(function(n){n!=="selectionchange"&&(oE.has(n)||Nu(n,!1,t),Nu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[tl]||(e[tl]=!0,Nu("selectionchange",!1,e))}}function Yx(t,e,n,i){switch(Px(e)){case 1:var r=y1;break;case 4:r=S1;break;default:r=Kh}n=r.bind(null,e,n,t),r=void 0,!Jf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Iu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}gx(function(){var c=s,f=jh(n),d=[];e:{var u=Xx.get(t);if(u!==void 0){var h=Qh,m=t;switch(t){case"keypress":if(zl(n)===0)break e;case"keydown":case"keyup":h=F1;break;case"focusin":m="focus",h=bu;break;case"focusout":m="blur",h=bu;break;case"beforeblur":case"afterblur":h=bu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=T1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=B1;break;case zx:case Hx:case Gx:h=b1;break;case Wx:h=z1;break;case"scroll":h=M1;break;case"wheel":h=G1;break;case"copy":case"cut":case"paste":h=R1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Gm}var _=(e&4)!==0,g=!_&&t==="scroll",p=_?u!==null?u+"Capture":null:u;_=[];for(var v=c,y;v!==null;){y=v;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,p!==null&&(S=aa(v,p),S!=null&&_.push(pa(v,S,y)))),g)break;v=v.return}0<_.length&&(u=new h(u,m,null,n,f),d.push({event:u,listeners:_}))}}if(!(e&7)){e:{if(u=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",u&&n!==Zf&&(m=n.relatedTarget||n.fromElement)&&(Xr(m)||m[Wi]))break e;if((h||u)&&(u=f.window===f?f:(u=f.ownerDocument)?u.defaultView||u.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=c,m=m?Xr(m):null,m!==null&&(g=us(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(h=null,m=c),h!==m)){if(_=zm,S="onMouseLeave",p="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Gm,S="onPointerLeave",p="onPointerEnter",v="pointer"),g=h==null?u:Os(h),y=m==null?u:Os(m),u=new _(S,v+"leave",h,n,f),u.target=g,u.relatedTarget=y,S=null,Xr(f)===c&&(_=new _(p,v+"enter",m,n,f),_.target=y,_.relatedTarget=g,S=_),g=S,h&&m)t:{for(_=h,p=m,v=0,y=_;y;y=gs(y))v++;for(y=0,S=p;S;S=gs(S))y++;for(;0<v-y;)_=gs(_),v--;for(;0<y-v;)p=gs(p),y--;for(;v--;){if(_===p||p!==null&&_===p.alternate)break t;_=gs(_),p=gs(p)}_=null}else _=null;h!==null&&eg(d,u,h,_,!1),m!==null&&g!==null&&eg(d,g,m,_,!0)}}e:{if(u=c?Os(c):window,h=u.nodeName&&u.nodeName.toLowerCase(),h==="select"||h==="input"&&u.type==="file")var T=K1;else if(jm(u))if(Fx)T=eE;else{T=Q1;var w=Z1}else(h=u.nodeName)&&h.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(T=J1);if(T&&(T=T(t,c))){Ux(d,T,n,f);break e}w&&w(t,u,c),t==="focusout"&&(w=u._wrapperState)&&w.controlled&&u.type==="number"&&jf(u,"number",u.value)}switch(w=c?Os(c):window,t){case"focusin":(jm(w)||w.contentEditable==="true")&&(Us=w,rd=c,$o=null);break;case"focusout":$o=rd=Us=null;break;case"mousedown":sd=!0;break;case"contextmenu":case"mouseup":case"dragend":sd=!1,Zm(d,n,f);break;case"selectionchange":if(iE)break;case"keydown":case"keyup":Zm(d,n,f)}var b;if(ep)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Is?Nx(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Dx&&n.locale!=="ko"&&(Is||x!=="onCompositionStart"?x==="onCompositionEnd"&&Is&&(b=Lx()):(pr=f,Zh="value"in pr?pr.value:pr.textContent,Is=!0)),w=uc(c,x),0<w.length&&(x=new Hm(x,t,null,n,f),d.push({event:x,listeners:w}),b?x.data=b:(b=Ix(n),b!==null&&(x.data=b)))),(b=X1?j1(t,n):Y1(t,n))&&(c=uc(c,"onBeforeInput"),0<c.length&&(f=new Hm("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=b))}jx(d,e)})}function pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function uc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=aa(t,n),s!=null&&i.unshift(pa(t,s,r)),s=aa(t,e),s!=null&&i.push(pa(t,s,r))),t=t.return}return i}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=aa(n,s),l!=null&&o.unshift(pa(n,l,a))):r||(l=aa(n,s),l!=null&&o.push(pa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aE=/\r\n?/g,lE=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(aE,`
`).replace(lE,"")}function nl(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(oe(425))}function fc(){}var od=null,ad=null;function ld(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cd=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(fE)}:cd;function fE(t){setTimeout(function(){throw t})}function Uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ua(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ua(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ig(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.random().toString(36).slice(2),mi="__reactFiber$"+vo,ma="__reactProps$"+vo,Wi="__reactContainer$"+vo,ud="__reactEvents$"+vo,dE="__reactListeners$"+vo,hE="__reactHandles$"+vo;function Xr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ig(t);t!==null;){if(n=t[mi])return n;t=ig(t)}return e}t=n,n=t.parentNode}return null}function Ia(t){return t=t[mi]||t[Wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Yc(t){return t[ma]||null}var fd=[],ks=-1;function Pr(t){return{current:t}}function vt(t){0>ks||(t.current=fd[ks],fd[ks]=null,ks--)}function dt(t,e){ks++,fd[ks]=t.current,t.current=e}var Ar={},sn=Pr(Ar),_n=Pr(!1),es=Ar;function ro(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function yn(t){return t=t.childContextTypes,t!=null}function dc(){vt(_n),vt(sn)}function rg(t,e,n){if(sn.current!==Ar)throw Error(oe(168));dt(sn,e),dt(_n,n)}function qx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,ZM(t)||"Unknown",r));return At({},n,i)}function hc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,es=sn.current,dt(sn,t),dt(_n,_n.current),!0}function sg(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=qx(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,vt(_n),vt(sn),dt(sn,t)):vt(_n),dt(_n,n)}var Li=null,qc=!1,Fu=!1;function $x(t){Li===null?Li=[t]:Li.push(t)}function pE(t){qc=!0,$x(t)}function Lr(){if(!Fu&&Li!==null){Fu=!0;var t=0,e=at;try{var n=Li;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Li=null,qc=!1}catch(r){throw Li!==null&&(Li=Li.slice(t+1)),yx(Yh,Lr),r}finally{at=e,Fu=!1}}return null}var Bs=[],Vs=0,pc=null,mc=0,Vn=[],zn=0,ts=null,Ni=1,Ii="";function Vr(t,e){Bs[Vs++]=mc,Bs[Vs++]=pc,pc=t,mc=e}function Kx(t,e,n){Vn[zn++]=Ni,Vn[zn++]=Ii,Vn[zn++]=ts,ts=t;var i=Ni;t=Ii;var r=32-ni(i)-1;i&=~(1<<r),n+=1;var s=32-ni(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ni=1<<32-ni(e)+r|n<<r|i,Ii=s+t}else Ni=1<<s|n<<r|i,Ii=t}function np(t){t.return!==null&&(Vr(t,1),Kx(t,1,0))}function ip(t){for(;t===pc;)pc=Bs[--Vs],Bs[Vs]=null,mc=Bs[--Vs],Bs[Vs]=null;for(;t===ts;)ts=Vn[--zn],Vn[zn]=null,Ii=Vn[--zn],Vn[zn]=null,Ni=Vn[--zn],Vn[zn]=null}var Pn=null,Rn=null,_t=!1,Jn=null;function Zx(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:Ni,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hd(t){if(_t){var e=Rn;if(e){var n=e;if(!og(t,e)){if(dd(t))throw Error(oe(418));e=_r(n.nextSibling);var i=Pn;e&&og(t,e)?Zx(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(dd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function il(t){if(t!==Pn)return!1;if(!_t)return ag(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ld(t.type,t.memoizedProps)),e&&(e=Rn)){if(dd(t))throw Qx(),Error(oe(418));for(;e;)Zx(t,e),e=_r(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?_r(t.stateNode.nextSibling):null;return!0}function Qx(){for(var t=Rn;t;)t=_r(t.nextSibling)}function so(){Rn=Pn=null,_t=!1}function rp(t){Jn===null?Jn=[t]:Jn.push(t)}var mE=Ki.ReactCurrentBatchConfig;function wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function rl(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lg(t){var e=t._init;return e(t._payload)}function Jx(t){function e(p,v){if(t){var y=p.deletions;y===null?(p.deletions=[v],p.flags|=16):y.push(v)}}function n(p,v){if(!t)return null;for(;v!==null;)e(p,v),v=v.sibling;return null}function i(p,v){for(p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function r(p,v){return p=Er(p,v),p.index=0,p.sibling=null,p}function s(p,v,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<v?(p.flags|=2,v):y):(p.flags|=2,v)):(p.flags|=1048576,v)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,v,y,S){return v===null||v.tag!==6?(v=Gu(y,p.mode,S),v.return=p,v):(v=r(v,y),v.return=p,v)}function l(p,v,y,S){var T=y.type;return T===Ns?f(p,v,y.props.children,S,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ar&&lg(T)===v.type)?(S=r(v,y.props),S.ref=wo(p,v,y),S.return=p,S):(S=ql(y.type,y.key,y.props,null,p.mode,S),S.ref=wo(p,v,y),S.return=p,S)}function c(p,v,y,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Wu(y,p.mode,S),v.return=p,v):(v=r(v,y.children||[]),v.return=p,v)}function f(p,v,y,S,T){return v===null||v.tag!==7?(v=Qr(y,p.mode,S,T),v.return=p,v):(v=r(v,y),v.return=p,v)}function d(p,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Gu(""+v,p.mode,y),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ya:return y=ql(v.type,v.key,v.props,null,p.mode,y),y.ref=wo(p,null,v),y.return=p,y;case Ds:return v=Wu(v,p.mode,y),v.return=p,v;case ar:var S=v._init;return d(p,S(v._payload),y)}if(ko(v)||yo(v))return v=Qr(v,p.mode,y,null),v.return=p,v;rl(p,v)}return null}function u(p,v,y,S){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(p,v,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ya:return y.key===T?l(p,v,y,S):null;case Ds:return y.key===T?c(p,v,y,S):null;case ar:return T=y._init,u(p,v,T(y._payload),S)}if(ko(y)||yo(y))return T!==null?null:f(p,v,y,S,null);rl(p,y)}return null}function h(p,v,y,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(y)||null,a(v,p,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return p=p.get(S.key===null?y:S.key)||null,l(v,p,S,T);case Ds:return p=p.get(S.key===null?y:S.key)||null,c(v,p,S,T);case ar:var w=S._init;return h(p,v,y,w(S._payload),T)}if(ko(S)||yo(S))return p=p.get(y)||null,f(v,p,S,T,null);rl(v,S)}return null}function m(p,v,y,S){for(var T=null,w=null,b=v,x=v=0,A=null;b!==null&&x<y.length;x++){b.index>x?(A=b,b=null):A=b.sibling;var R=u(p,b,y[x],S);if(R===null){b===null&&(b=A);break}t&&b&&R.alternate===null&&e(p,b),v=s(R,v,x),w===null?T=R:w.sibling=R,w=R,b=A}if(x===y.length)return n(p,b),_t&&Vr(p,x),T;if(b===null){for(;x<y.length;x++)b=d(p,y[x],S),b!==null&&(v=s(b,v,x),w===null?T=b:w.sibling=b,w=b);return _t&&Vr(p,x),T}for(b=i(p,b);x<y.length;x++)A=h(b,p,x,y[x],S),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?x:A.key),v=s(A,v,x),w===null?T=A:w.sibling=A,w=A);return t&&b.forEach(function(U){return e(p,U)}),_t&&Vr(p,x),T}function _(p,v,y,S){var T=yo(y);if(typeof T!="function")throw Error(oe(150));if(y=T.call(y),y==null)throw Error(oe(151));for(var w=T=null,b=v,x=v=0,A=null,R=y.next();b!==null&&!R.done;x++,R=y.next()){b.index>x?(A=b,b=null):A=b.sibling;var U=u(p,b,R.value,S);if(U===null){b===null&&(b=A);break}t&&b&&U.alternate===null&&e(p,b),v=s(U,v,x),w===null?T=U:w.sibling=U,w=U,b=A}if(R.done)return n(p,b),_t&&Vr(p,x),T;if(b===null){for(;!R.done;x++,R=y.next())R=d(p,R.value,S),R!==null&&(v=s(R,v,x),w===null?T=R:w.sibling=R,w=R);return _t&&Vr(p,x),T}for(b=i(p,b);!R.done;x++,R=y.next())R=h(b,p,x,R.value,S),R!==null&&(t&&R.alternate!==null&&b.delete(R.key===null?x:R.key),v=s(R,v,x),w===null?T=R:w.sibling=R,w=R);return t&&b.forEach(function(H){return e(p,H)}),_t&&Vr(p,x),T}function g(p,v,y,S){if(typeof y=="object"&&y!==null&&y.type===Ns&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ya:e:{for(var T=y.key,w=v;w!==null;){if(w.key===T){if(T=y.type,T===Ns){if(w.tag===7){n(p,w.sibling),v=r(w,y.props.children),v.return=p,p=v;break e}}else if(w.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ar&&lg(T)===w.type){n(p,w.sibling),v=r(w,y.props),v.ref=wo(p,w,y),v.return=p,p=v;break e}n(p,w);break}else e(p,w);w=w.sibling}y.type===Ns?(v=Qr(y.props.children,p.mode,S,y.key),v.return=p,p=v):(S=ql(y.type,y.key,y.props,null,p.mode,S),S.ref=wo(p,v,y),S.return=p,p=S)}return o(p);case Ds:e:{for(w=y.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(p,v.sibling),v=r(v,y.children||[]),v.return=p,p=v;break e}else{n(p,v);break}else e(p,v);v=v.sibling}v=Wu(y,p.mode,S),v.return=p,p=v}return o(p);case ar:return w=y._init,g(p,v,w(y._payload),S)}if(ko(y))return m(p,v,y,S);if(yo(y))return _(p,v,y,S);rl(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(p,v.sibling),v=r(v,y),v.return=p,p=v):(n(p,v),v=Gu(y,p.mode,S),v.return=p,p=v),o(p)):n(p,v)}return g}var oo=Jx(!0),e_=Jx(!1),gc=Pr(null),vc=null,zs=null,sp=null;function op(){sp=zs=vc=null}function ap(t){var e=gc.current;vt(gc),t._currentValue=e}function pd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Js(t,e){vc=t,sp=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function Wn(t){var e=t._currentValue;if(sp!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if(vc===null)throw Error(oe(308));zs=t,vc.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var jr=null;function lp(t){jr===null?jr=[t]:jr.push(t)}function t_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,lp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Xi(t,i)}function Xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var lr=!1;function cp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function yr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(t,n)}return r=i.interleaved,r===null?(e.next=e,lp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}function cg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xc(t,e,n,i){var r=t.updateQueue;lr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var u=a.lane,h=a.eventTime;if((i&u)===u){f!==null&&(f=f.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,_=a;switch(u=e,h=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(h,d,u);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,u=typeof m=="function"?m.call(h,d,u):m,u==null)break e;d=At({},d,u);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else h={eventTime:h,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=h,l=d):f=f.next=h,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=d}}function ug(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ua={},_i=Pr(Ua),ga=Pr(Ua),va=Pr(Ua);function Yr(t){if(t===Ua)throw Error(oe(174));return t}function up(t,e){switch(dt(va,e),dt(ga,t),dt(_i,Ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qf(e,t)}vt(_i),dt(_i,e)}function ao(){vt(_i),vt(ga),vt(va)}function i_(t){Yr(va.current);var e=Yr(_i.current),n=qf(e,t.type);e!==n&&(dt(ga,t),dt(_i,n))}function fp(t){ga.current===t&&(vt(_i),vt(ga))}var St=Pr(0);function _c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ou=[];function dp(){for(var t=0;t<Ou.length;t++)Ou[t]._workInProgressVersionPrimary=null;Ou.length=0}var Gl=Ki.ReactCurrentDispatcher,ku=Ki.ReactCurrentBatchConfig,ns=0,Tt=null,Ft=null,Gt=null,yc=!1,Ko=!1,xa=0,gE=0;function Zt(){throw Error(oe(321))}function hp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!oi(t[n],e[n]))return!1;return!0}function pp(t,e,n,i,r,s){if(ns=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gl.current=t===null||t.memoizedState===null?yE:SE,t=n(i,r),Ko){s=0;do{if(Ko=!1,xa=0,25<=s)throw Error(oe(301));s+=1,Gt=Ft=null,e.updateQueue=null,Gl.current=ME,t=n(i,r)}while(Ko)}if(Gl.current=Sc,e=Ft!==null&&Ft.next!==null,ns=0,Gt=Ft=Tt=null,yc=!1,e)throw Error(oe(300));return t}function mp(){var t=xa!==0;return xa=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Tt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Xn(){if(Ft===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Gt===null?Tt.memoizedState:Gt.next;if(e!==null)Gt=e,Ft=t;else{if(t===null)throw Error(oe(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Gt===null?Tt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function _a(t,e){return typeof e=="function"?e(t):e}function Bu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ns&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Tt.lanes|=f,is|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,oi(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);oi(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function r_(){}function s_(t,e){var n=Tt,i=Xn(),r=e(),s=!oi(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,gp(l_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,ya(9,a_.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(oe(349));ns&30||o_(n,e,r)}return r}function o_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a_(t,e,n,i){e.value=n,e.getSnapshot=i,c_(e)&&u_(t)}function l_(t,e,n){return n(function(){c_(e)&&u_(t)})}function c_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!oi(t,n)}catch{return!0}}function u_(t){var e=Xi(t,1);e!==null&&ii(e,t,1,-1)}function fg(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},e.queue=t,t=t.dispatch=_E.bind(null,Tt,t),[e.memoizedState,t]}function ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function f_(){return Xn().memoizedState}function Wl(t,e,n,i){var r=hi();Tt.flags|=t,r.memoizedState=ya(1|e,n,void 0,i===void 0?null:i)}function $c(t,e,n,i){var r=Xn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&hp(i,o.deps)){r.memoizedState=ya(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=ya(1|e,n,s,i)}function dg(t,e){return Wl(8390656,8,t,e)}function gp(t,e){return $c(2048,8,t,e)}function d_(t,e){return $c(4,2,t,e)}function h_(t,e){return $c(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,$c(4,4,p_.bind(null,e,t),n)}function vp(){}function g_(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function x_(t,e,n){return ns&21?(oi(n,e)||(n=Ex(),Tt.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function vE(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=ku.transition;ku.transition={};try{t(!1),e()}finally{at=n,ku.transition=i}}function __(){return Xn().memoizedState}function xE(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},y_(t))S_(e,n);else if(n=t_(t,e,n,i),n!==null){var r=un();ii(n,t,i,r),M_(n,e,i)}}function _E(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(y_(t))S_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,oi(a,o)){var l=e.interleaved;l===null?(r.next=r,lp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=t_(t,e,r,i),n!==null&&(r=un(),ii(n,t,i,r),M_(n,e,i))}}function y_(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function S_(t,e){Ko=yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function M_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,qh(t,n)}}var Sc={readContext:Wn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},yE={readContext:Wn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:Wn,useEffect:dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wl(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=xE.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:fg,useDebugValue:vp,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=fg(!1),e=t[0];return t=vE.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=hi();if(_t){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Wt===null)throw Error(oe(349));ns&30||o_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,dg(l_.bind(null,i,s,t),[t]),i.flags|=2048,ya(9,a_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Wt.identifierPrefix;if(_t){var n=Ii,i=Ni;n=(i&~(1<<32-ni(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SE={readContext:Wn,useCallback:g_,useContext:Wn,useEffect:gp,useImperativeHandle:m_,useInsertionEffect:d_,useLayoutEffect:h_,useMemo:v_,useReducer:Bu,useRef:f_,useState:function(){return Bu(_a)},useDebugValue:vp,useDeferredValue:function(t){var e=Xn();return x_(e,Ft.memoizedState,t)},useTransition:function(){var t=Bu(_a)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:__,unstable_isNewReconciler:!1},ME={readContext:Wn,useCallback:g_,useContext:Wn,useEffect:gp,useImperativeHandle:m_,useInsertionEffect:d_,useLayoutEffect:h_,useMemo:v_,useReducer:Vu,useRef:f_,useState:function(){return Vu(_a)},useDebugValue:vp,useDeferredValue:function(t){var e=Xn();return Ft===null?e.memoizedState=t:x_(e,Ft.memoizedState,t)},useTransition:function(){var t=Vu(_a)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:s_,useId:__,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function md(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Kc={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=un(),r=Mr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ii(e,t,r,i),Hl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=un(),r=Mr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=yr(t,s,r),e!==null&&(ii(e,t,r,i),Hl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=un(),i=Mr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=yr(t,r,i),e!==null&&(ii(e,t,i,n),Hl(e,t,i))}};function hg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!da(n,i)||!da(r,s):!0}function E_(t,e,n){var i=!1,r=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Wn(s):(r=yn(e)?es:sn.current,i=e.contextTypes,s=(i=i!=null)?ro(t,r):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Kc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Kc.enqueueReplaceState(e,e.state,null)}function gd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},cp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wn(s):(s=yn(e)?es:sn.current,r.context=ro(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(md(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Kc.enqueueReplaceState(r,r.state,null),xc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e){try{var n="",i=e;do n+=KM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var EE=typeof WeakMap=="function"?WeakMap:Map;function T_(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ec||(Ec=!0,bd=i),vd(t,e)},n}function w_(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vd(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new EE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=OE.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,yr(n,e,1))),n.lanes|=1),t)}var TE=Ki.ReactCurrentOwner,xn=!1;function cn(t,e,n,i){e.child=t===null?e_(e,null,n,i):oo(e,t.child,n,i)}function xg(t,e,n,i,r){n=n.render;var s=e.ref;return Js(e,r),i=pp(t,e,n,i,s,r),n=mp(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(_t&&n&&np(e),e.flags|=1,cn(t,e,i,r),e.child)}function _g(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!wp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A_(t,e,s,i,r)):(t=ql(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(o,i)&&t.ref===e.ref)return ji(t,e,r)}return e.flags|=1,t=Er(s,i),t.ref=e.ref,t.return=e,e.child=t}function A_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(da(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,ji(t,e,r)}return xd(t,e,n,i,r)}function b_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},dt(Gs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,dt(Gs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,dt(Gs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,dt(Gs,An),An|=i;return cn(t,e,r,n),e.child}function C_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xd(t,e,n,i,r){var s=yn(n)?es:sn.current;return s=ro(e,s),Js(e,r),n=pp(t,e,n,i,s,r),i=mp(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ji(t,e,r)):(_t&&i&&np(e),e.flags|=1,cn(t,e,n,r),e.child)}function yg(t,e,n,i,r){if(yn(n)){var s=!0;hc(e)}else s=!1;if(Js(e,r),e.stateNode===null)Xl(t,e),E_(e,n,i),gd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Wn(c):(c=yn(n)?es:sn.current,c=ro(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&pg(e,o,i,c),lr=!1;var u=e.memoizedState;o.state=u,xc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||_n.current||lr?(typeof f=="function"&&(md(e,n,f,i),l=e.memoizedState),(a=lr||hg(e,n,a,i,u,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,n_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Zn(e.type,a),o.props=c,d=e.pendingProps,u=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Wn(l):(l=yn(n)?es:sn.current,l=ro(e,l));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||u!==l)&&pg(e,o,i,l),lr=!1,u=e.memoizedState,o.state=u,xc(e,i,o,r);var m=e.memoizedState;a!==d||u!==m||_n.current||lr?(typeof h=="function"&&(md(e,n,h,i),m=e.memoizedState),(c=lr||hg(e,n,c,i,u,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&u===t.memoizedState||(e.flags|=1024),i=!1)}return _d(t,e,n,i,s,r)}function _d(t,e,n,i,r,s){C_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sg(e,n,!1),ji(t,e,s);i=e.stateNode,TE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=oo(e,t.child,null,s),e.child=oo(e,null,a,s)):cn(t,e,a,s),e.memoizedState=i.state,r&&sg(e,n,!0),e.child}function R_(t){var e=t.stateNode;e.pendingContext?rg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rg(t,e.context,!1),up(t,e.containerInfo)}function Sg(t,e,n,i,r){return so(),rp(r),e.flags|=256,cn(t,e,n,i),e.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function Sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function P_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),dt(St,r&1),t===null)return hd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jc(o,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sd(n),e.memoizedState=yd,t):xp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return wE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Er(a,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=yd,i}return s=t.child,t=s.sibling,i=Er(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function xp(t,e){return e=Jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,i){return i!==null&&rp(i),oo(e,t.child,null,n),t=xp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=zu(Error(oe(422))),sl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Jc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&oo(e,t.child,null,o),e.child.memoizedState=Sd(o),e.memoizedState=yd,s);if(!(e.mode&1))return sl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=zu(s,i,void 0),sl(t,e,o,i)}if(a=(o&t.childLanes)!==0,xn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(t,r),ii(i,t,r,-1))}return Tp(),i=zu(Error(oe(421))),sl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=kE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Rn=_r(r.nextSibling),Pn=e,_t=!0,Jn=null,t!==null&&(Vn[zn++]=Ni,Vn[zn++]=Ii,Vn[zn++]=ts,Ni=t.id,Ii=t.overflow,ts=e),e=xp(e,i.children),e.flags|=4096,e)}function Mg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),pd(t.return,e,n)}function Hu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function L_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(cn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,n,e);else if(t.tag===19)Mg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(dt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&_c(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&_c(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hu(e,!0,n,null,s);break;case"together":Hu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function AE(t,e,n){switch(e.tag){case 3:R_(e),so();break;case 5:i_(e);break;case 1:yn(e.type)&&hc(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;dt(gc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(dt(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?P_(t,e,n):(dt(St,St.current&1),t=ji(t,e,n),t!==null?t.sibling:null);dt(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return L_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),dt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,b_(t,e,n)}return ji(t,e,n)}var D_,Md,N_,I_;D_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};N_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Yr(_i.current);var s=null;switch(n){case"input":r=Wf(t,r),i=Wf(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Yf(t,r),i=Yf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=fc)}$f(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};I_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ao(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function bE(t,e,n){var i=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return yn(e.type)&&dc(),Qt(e),null;case 3:return i=e.stateNode,ao(),vt(_n),vt(sn),dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Jn!==null&&(Pd(Jn),Jn=null))),Md(t,e),Qt(e),null;case 5:fp(e);var r=Yr(va.current);if(n=e.type,t!==null&&e.stateNode!=null)N_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Qt(e),null}if(t=Yr(_i.current),il(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[ma]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Vo.length;r++)gt(Vo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Lm(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":Nm(i,s),gt("invalid",i)}$f(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&nl(i.textContent,a,t),r=["children",""+a]):sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":qa(i),Dm(i,s,!0);break;case"textarea":qa(i),Im(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[mi]=e,t[ma]=i,D_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kf(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Vo.length;r++)gt(Vo[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Lm(t,i),r=Wf(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),gt("invalid",t);break;case"textarea":Nm(t,i),r=Yf(t,i),gt("invalid",t);break;default:r=i}$f(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?fx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oa(t,l):typeof l=="number"&&oa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Hh(t,s,l,o))}switch(n){case"input":qa(t),Dm(t,i,!1);break;case"textarea":qa(t),Im(t);break;case"option":i.value!=null&&t.setAttribute("value",""+wr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$s(t,!!i.multiple,s,!1):i.defaultValue!=null&&$s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=fc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)I_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Yr(va.current),Yr(_i.current),il(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:nl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&nl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Qt(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Rn!==null&&e.mode&1&&!(e.flags&128))Qx(),so(),e.flags|=98560,s=!1;else if(s=il(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[mi]=e}else so(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Jn!==null&&(Pd(Jn),Jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ot===0&&(Ot=3):Tp())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return ao(),Md(t,e),t===null&&ha(e.stateNode.containerInfo),Qt(e),null;case 10:return ap(e.type._context),Qt(e),null;case 17:return yn(e.type)&&dc(),Qt(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ao(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_c(t),o!==null){for(e.flags|=128,Ao(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return dt(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Rt()>co&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304)}else{if(!i)if(t=_c(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Qt(e),null}else 2*Rt()-s.renderingStartTime>co&&n!==1073741824&&(e.flags|=128,i=!0,Ao(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Rt(),e.sibling=null,n=St.current,dt(St,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Ep(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function CE(t,e){switch(ip(e),e.tag){case 1:return yn(e.type)&&dc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),vt(_n),vt(sn),dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fp(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));so()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return ao(),null;case 10:return ap(e.type._context),null;case 22:case 23:return Ep(),null;case 24:return null;default:return null}}var ol=!1,nn=!1,RE=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Ed(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Eg=!1;function PE(t,e){if(od=lc,t=Bx(),tp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,u=null;t:for(;;){for(var h;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(h=d.firstChild)!==null;)u=d,d=h;for(;;){if(d===t)break t;if(u===n&&++c===r&&(a=o),u===s&&++f===i&&(l=o),(h=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ad={focusedElem:t,selectionRange:n},lc=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,g=m.memoizedState,p=e.stateNode,v=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Zn(e.type,_),g);p.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return m=Eg,Eg=!1,m}function Zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ed(e,n,s)}r=r.next}while(r!==i)}}function Zc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U_(t){var e=t.alternate;e!==null&&(t.alternate=null,U_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[ma],delete e[ud],delete e[dE],delete e[hE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F_(t){return t.tag===5||t.tag===3||t.tag===4}function Tg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=fc));else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var Xt=null,Qn=!1;function er(t,e,n){for(n=n.child;n!==null;)O_(t,e,n),n=n.sibling}function O_(t,e,n){if(xi&&typeof xi.onCommitFiberUnmount=="function")try{xi.onCommitFiberUnmount(Gc,n)}catch{}switch(n.tag){case 5:nn||Hs(n,e);case 6:var i=Xt,r=Qn;Xt=null,er(t,e,n),Xt=i,Qn=r,Xt!==null&&(Qn?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(Qn?(t=Xt,n=n.stateNode,t.nodeType===8?Uu(t.parentNode,n):t.nodeType===1&&Uu(t,n),ua(t)):Uu(Xt,n.stateNode));break;case 4:i=Xt,r=Qn,Xt=n.stateNode.containerInfo,Qn=!0,er(t,e,n),Xt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ed(n,e,o),r=r.next}while(r!==i)}er(t,e,n);break;case 1:if(!nn&&(Hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(nn=(i=nn)||n.memoizedState!==null,er(t,e,n),nn=i):er(t,e,n);break;default:er(t,e,n)}}function wg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RE),e.forEach(function(i){var r=BE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Yn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,Qn=!1;break e;case 3:Xt=a.stateNode.containerInfo,Qn=!0;break e;case 4:Xt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(Xt===null)throw Error(oe(160));O_(s,o,r),Xt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)k_(e,t),e=e.sibling}function k_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(e,t),ui(t),i&4){try{Zo(3,t,t.return),Zc(3,t)}catch(_){bt(t,t.return,_)}try{Zo(5,t,t.return)}catch(_){bt(t,t.return,_)}}break;case 1:Yn(e,t),ui(t),i&512&&n!==null&&Hs(n,n.return);break;case 5:if(Yn(e,t),ui(t),i&512&&n!==null&&Hs(n,n.return),t.flags&32){var r=t.stateNode;try{oa(r,"")}catch(_){bt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ox(r,s),Kf(a,o);var c=Kf(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?fx(r,d):f==="dangerouslySetInnerHTML"?cx(r,d):f==="children"?oa(r,d):Hh(r,f,d,c)}switch(a){case"input":Xf(r,s);break;case"textarea":ax(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?$s(r,!!s.multiple,h,!1):u!==!!s.multiple&&(s.defaultValue!=null?$s(r,!!s.multiple,s.defaultValue,!0):$s(r,!!s.multiple,s.multiple?[]:"",!1))}r[ma]=s}catch(_){bt(t,t.return,_)}}break;case 6:if(Yn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){bt(t,t.return,_)}}break;case 3:if(Yn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ua(e.containerInfo)}catch(_){bt(t,t.return,_)}break;case 4:Yn(e,t),ui(t);break;case 13:Yn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Sp=Rt())),i&4&&wg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(nn=(c=nn)||f,Yn(e,t),nn=c):Yn(e,t),ui(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Te=t,f=t.child;f!==null;){for(d=Te=f;Te!==null;){switch(u=Te,h=u.child,u.tag){case 0:case 11:case 14:case 15:Zo(4,u,u.return);break;case 1:Hs(u,u.return);var m=u.stateNode;if(typeof m.componentWillUnmount=="function"){i=u,n=u.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){bt(i,n,_)}}break;case 5:Hs(u,u.return);break;case 22:if(u.memoizedState!==null){bg(d);continue}}h!==null?(h.return=u,Te=h):bg(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ux("display",o))}catch(_){bt(t,t.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){bt(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Yn(e,t),ui(t),i&4&&wg(t);break;case 21:break;default:Yn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(F_(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(oa(r,""),i.flags&=-33);var s=Tg(t);Ad(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Tg(t);wd(t,a,o);break;default:throw Error(oe(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LE(t,e,n){Te=t,B_(t)}function B_(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ol;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=ol;var c=nn;if(ol=o,(nn=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?Cg(r):l!==null?(l.return=o,Te=l):Cg(r);for(;s!==null;)Te=s,B_(s),s=s.sibling;Te=r,ol=a,nn=c}Ag(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Ag(t)}}function Ag(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Zc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ug(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ug(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ua(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}nn||e.flags&512&&Td(e)}catch(u){bt(e,e.return,u)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function bg(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Cg(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Td(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{Td(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var DE=Math.ceil,Mc=Ki.ReactCurrentDispatcher,_p=Ki.ReactCurrentOwner,Gn=Ki.ReactCurrentBatchConfig,Qe=0,Wt=null,Ut=null,Yt=0,An=0,Gs=Pr(0),Ot=0,Sa=null,is=0,Qc=0,yp=0,Qo=null,vn=null,Sp=0,co=1/0,Pi=null,Ec=!1,bd=null,Sr=null,al=!1,mr=null,Tc=0,Jo=0,Cd=null,jl=-1,Yl=0;function un(){return Qe&6?Rt():jl!==-1?jl:jl=Rt()}function Mr(t){return t.mode&1?Qe&2&&Yt!==0?Yt&-Yt:mE.transition!==null?(Yl===0&&(Yl=Ex()),Yl):(t=at,t!==0||(t=window.event,t=t===void 0?16:Px(t.type)),t):1}function ii(t,e,n,i){if(50<Jo)throw Jo=0,Cd=null,Error(oe(185));Da(t,n,i),(!(Qe&2)||t!==Wt)&&(t===Wt&&(!(Qe&2)&&(Qc|=n),Ot===4&&dr(t,Yt)),Sn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(co=Rt()+500,qc&&Lr()))}function Sn(t,e){var n=t.callbackNode;m1(t,e);var i=ac(t,t===Wt?Yt:0);if(i===0)n!==null&&Om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Om(n),e===1)t.tag===0?pE(Rg.bind(null,t)):$x(Rg.bind(null,t)),uE(function(){!(Qe&6)&&Lr()}),n=null;else{switch(Tx(i)){case 1:n=Yh;break;case 4:n=Sx;break;case 16:n=oc;break;case 536870912:n=Mx;break;default:n=oc}n=Y_(n,V_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function V_(t,e){if(jl=-1,Yl=0,Qe&6)throw Error(oe(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=ac(t,t===Wt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wc(t,i);else{e=i;var r=Qe;Qe|=2;var s=H_();(Wt!==t||Yt!==e)&&(Pi=null,co=Rt()+500,Zr(t,e));do try{UE();break}catch(a){z_(t,a)}while(!0);op(),Mc.current=s,Qe=r,Ut!==null?e=0:(Wt=null,Yt=0,e=Ot)}if(e!==0){if(e===2&&(r=td(t),r!==0&&(i=r,e=Rd(t,r))),e===1)throw n=Sa,Zr(t,0),dr(t,i),Sn(t,Rt()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!NE(r)&&(e=wc(t,i),e===2&&(s=td(t),s!==0&&(i=s,e=Rd(t,s))),e===1))throw n=Sa,Zr(t,0),dr(t,i),Sn(t,Rt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:zr(t,vn,Pi);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=Sp+500-Rt(),10<e)){if(ac(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){un(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cd(zr.bind(null,t,vn,Pi),e);break}zr(t,vn,Pi);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ni(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Rt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*DE(i/1960))-i,10<i){t.timeoutHandle=cd(zr.bind(null,t,vn,Pi),i);break}zr(t,vn,Pi);break;case 5:zr(t,vn,Pi);break;default:throw Error(oe(329))}}}return Sn(t,Rt()),t.callbackNode===n?V_.bind(null,t):null}function Rd(t,e){var n=Qo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=wc(t,e),t!==2&&(e=vn,vn=n,e!==null&&Pd(e)),t}function Pd(t){vn===null?vn=t:vn.push.apply(vn,t)}function NE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!oi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~yp,e&=~Qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ni(e),i=1<<n;t[n]=-1,e&=~i}}function Rg(t){if(Qe&6)throw Error(oe(327));eo();var e=ac(t,0);if(!(e&1))return Sn(t,Rt()),null;var n=wc(t,e);if(t.tag!==0&&n===2){var i=td(t);i!==0&&(e=i,n=Rd(t,i))}if(n===1)throw n=Sa,Zr(t,0),dr(t,e),Sn(t,Rt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,vn,Pi),Sn(t,Rt()),null}function Mp(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(co=Rt()+500,qc&&Lr())}}function rs(t){mr!==null&&mr.tag===0&&!(Qe&6)&&eo();var e=Qe;Qe|=1;var n=Gn.transition,i=at;try{if(Gn.transition=null,at=1,t)return t()}finally{at=i,Gn.transition=n,Qe=e,!(Qe&6)&&Lr()}}function Ep(){An=Gs.current,vt(Gs)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cE(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(ip(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dc();break;case 3:ao(),vt(_n),vt(sn),dp();break;case 5:fp(i);break;case 4:ao();break;case 13:vt(St);break;case 19:vt(St);break;case 10:ap(i.type._context);break;case 22:case 23:Ep()}n=n.return}if(Wt=t,Ut=t=Er(t.current,null),Yt=An=e,Ot=0,Sa=null,yp=Qc=is=0,vn=Qo=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}jr=null}return t}function z_(t,e){do{var n=Ut;try{if(op(),Gl.current=Sc,yc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yc=!1}if(ns=0,Gt=Ft=Tt=null,Ko=!1,xa=0,_p.current=null,n===null||n.return===null){Ot=1,Sa=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var u=f.alternate;u?(f.updateQueue=u.updateQueue,f.memoizedState=u.memoizedState,f.lanes=u.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=gg(o);if(h!==null){h.flags&=-257,vg(h,o,a,s,e),h.mode&1&&mg(s,c,e),e=h,l=c;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){mg(s,c,e),Tp();break e}l=Error(oe(426))}}else if(_t&&a.mode&1){var g=gg(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),vg(g,o,a,s,e),rp(lo(l,a));break e}}s=l=lo(l,a),Ot!==4&&(Ot=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=T_(s,l,e);cg(s,p);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=w_(s,a,e);cg(s,S);break e}}s=s.return}while(s!==null)}W_(n)}catch(T){e=T,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function H_(){var t=Mc.current;return Mc.current=Sc,t===null?Sc:t}function Tp(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Wt===null||!(is&268435455)&&!(Qc&268435455)||dr(Wt,Yt)}function wc(t,e){var n=Qe;Qe|=2;var i=H_();(Wt!==t||Yt!==e)&&(Pi=null,Zr(t,e));do try{IE();break}catch(r){z_(t,r)}while(!0);if(op(),Qe=n,Mc.current=i,Ut!==null)throw Error(oe(261));return Wt=null,Yt=0,Ot}function IE(){for(;Ut!==null;)G_(Ut)}function UE(){for(;Ut!==null&&!o1();)G_(Ut)}function G_(t){var e=j_(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?W_(t):Ut=e,_p.current=null}function W_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CE(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Ut=null;return}}else if(n=bE(n,e,An),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Ot===0&&(Ot=5)}function zr(t,e,n){var i=at,r=Gn.transition;try{Gn.transition=null,at=1,FE(t,e,n,i)}finally{Gn.transition=r,at=i}return null}function FE(t,e,n,i){do eo();while(mr!==null);if(Qe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(g1(t,s),t===Wt&&(Ut=Wt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,Y_(oc,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=at;at=1;var a=Qe;Qe|=4,_p.current=null,PE(t,n),k_(n,t),nE(ad),lc=!!od,ad=od=null,t.current=n,LE(n),a1(),Qe=a,at=o,Gn.transition=s}else t.current=n;if(al&&(al=!1,mr=t,Tc=r),s=t.pendingLanes,s===0&&(Sr=null),u1(n.stateNode),Sn(t,Rt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ec)throw Ec=!1,t=bd,bd=null,t;return Tc&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===Cd?Jo++:(Jo=0,Cd=t):Jo=0,Lr(),null}function eo(){if(mr!==null){var t=Tx(Tc),e=Gn.transition,n=at;try{if(Gn.transition=null,at=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,Tc=0,Qe&6)throw Error(oe(331));var r=Qe;for(Qe|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var f=Te;switch(f.tag){case 0:case 11:case 15:Zo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Te=d;else for(;Te!==null;){f=Te;var u=f.sibling,h=f.return;if(U_(f),f===c){Te=null;break}if(u!==null){u.return=h,Te=u;break}Te=h}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var g=_.sibling;_.sibling=null,_=g}while(_!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,Te=p;break e}Te=s.return}}var v=t.current;for(Te=v;Te!==null;){o=Te;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Te=y;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zc(9,a)}}catch(T){bt(a,a.return,T)}if(a===o){Te=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Te=S;break e}Te=a.return}}if(Qe=r,Lr(),xi&&typeof xi.onPostCommitFiberRoot=="function")try{xi.onPostCommitFiberRoot(Gc,t)}catch{}i=!0}return i}finally{at=n,Gn.transition=e}}return!1}function Pg(t,e,n){e=lo(n,e),e=T_(t,e,1),t=yr(t,e,1),e=un(),t!==null&&(Da(t,1,e),Sn(t,e))}function bt(t,e,n){if(t.tag===3)Pg(t,t,n);else for(;e!==null;){if(e.tag===3){Pg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=lo(n,t),t=w_(e,t,1),e=yr(e,t,1),t=un(),e!==null&&(Da(e,1,t),Sn(e,t));break}}e=e.return}}function OE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=un(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(Yt&n)===n&&(Ot===4||Ot===3&&(Yt&130023424)===Yt&&500>Rt()-Sp?Zr(t,0):yp|=n),Sn(t,e)}function X_(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=un();t=Xi(t,e),t!==null&&(Da(t,e,n),Sn(t,n))}function kE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X_(t,n)}function BE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),X_(t,n)}var j_;j_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,AE(t,e,n);xn=!!(t.flags&131072)}else xn=!1,_t&&e.flags&1048576&&Kx(e,mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xl(t,e),t=e.pendingProps;var r=ro(e,sn.current);Js(e,n),r=pp(null,e,i,t,r,n);var s=mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cp(e),r.updater=Kc,e.stateNode=r,r._reactInternals=e,gd(e,i,t,n),e=_d(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&np(e),cn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=zE(i),t=Zn(i,t),r){case 0:e=xd(null,e,i,t,n);break e;case 1:e=yg(null,e,i,t,n);break e;case 11:e=xg(null,e,i,t,n);break e;case 14:e=_g(null,e,i,Zn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),xd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),yg(t,e,i,r,n);case 3:e:{if(R_(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,n_(t,e),xc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=lo(Error(oe(423)),e),e=Sg(t,e,i,n,r);break e}else if(i!==r){r=lo(Error(oe(424)),e),e=Sg(t,e,i,n,r);break e}else for(Rn=_r(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,Jn=null,n=e_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(so(),i===r){e=ji(t,e,n);break e}cn(t,e,i,n)}e=e.child}return e;case 5:return i_(e),t===null&&hd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ld(i,r)?o=null:s!==null&&ld(i,s)&&(e.flags|=32),C_(t,e),cn(t,e,o,n),e.child;case 6:return t===null&&hd(e),null;case 13:return P_(t,e,n);case 4:return up(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=oo(e,null,i,n):cn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),xg(t,e,i,r,n);case 7:return cn(t,e,e.pendingProps,n),e.child;case 8:return cn(t,e,e.pendingProps.children,n),e.child;case 12:return cn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,dt(gc,i._currentValue),i._currentValue=o,s!==null)if(oi(s.value,o)){if(s.children===r.children&&!_n.current){e=ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Oi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),pd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),pd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}cn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Js(e,n),r=Wn(r),i=i(r),e.flags|=1,cn(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),_g(t,e,i,r,n);case 15:return A_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Xl(t,e),e.tag=1,yn(i)?(t=!0,hc(e)):t=!1,Js(e,n),E_(e,i,r),gd(e,i,r,n),_d(null,e,i,!0,t,n);case 19:return L_(t,e,n);case 22:return b_(t,e,n)}throw Error(oe(156,e.tag))};function Y_(t,e){return yx(t,e)}function VE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new VE(t,e,n,i)}function wp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zE(t){if(typeof t=="function")return wp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wh)return 11;if(t===Xh)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ql(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")wp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Qr(n.children,r,s,e);case Gh:o=8,r|=8;break;case Vf:return t=Hn(12,n,e,r|2),t.elementType=Vf,t.lanes=s,t;case zf:return t=Hn(13,n,e,r),t.elementType=zf,t.lanes=s,t;case Hf:return t=Hn(19,n,e,r),t.elementType=Hf,t.lanes=s,t;case ix:return Jc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tx:o=10;break e;case nx:o=9;break e;case Wh:o=11;break e;case Xh:o=14;break e;case ar:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function Jc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=ix,t.lanes=n,t.stateNode={isHidden:!1},t}function Gu(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function Wu(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tu(0),this.expirationTimes=Tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ap(t,e,n,i,r,s,o,a,l){return t=new HE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(s),t}function GE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function q_(t){if(!t)return Ar;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(yn(n))return qx(t,n,e)}return e}function $_(t,e,n,i,r,s,o,a,l){return t=Ap(n,i,!0,t,r,s,o,a,l),t.context=q_(null),n=t.current,i=un(),r=Mr(n),s=Oi(i,r),s.callback=e??null,yr(n,s,r),t.current.lanes=r,Da(t,r,i),Sn(t,i),t}function eu(t,e,n,i){var r=e.current,s=un(),o=Mr(r);return n=q_(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=yr(r,e,o),t!==null&&(ii(t,r,o,s),Hl(t,r,o)),o}function Ac(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function bp(t,e){Lg(t,e),(t=t.alternate)&&Lg(t,e)}function WE(){return null}var K_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cp(t){this._internalRoot=t}tu.prototype.render=Cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));eu(t,e,null,null)};tu.prototype.unmount=Cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){eu(null,t,null,null)}),e[Wi]=null}};function tu(t){this._internalRoot=t}tu.prototype.unstable_scheduleHydration=function(t){if(t){var e=bx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&Rx(t)}};function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function XE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ac(o);s.call(c)}}var o=$_(e,i,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[Wi]=o.current,ha(t.nodeType===8?t.parentNode:t),rs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ac(l);a.call(c)}}var l=Ap(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=l,t[Wi]=l.current,ha(t.nodeType===8?t.parentNode:t),rs(function(){eu(e,l,n,i)}),l}function iu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ac(o);a.call(l)}}eu(e,o,t,r)}else o=XE(n,e,t,r,i);return Ac(o)}wx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Bo(e.pendingLanes);n!==0&&(qh(e,n|1),Sn(e,Rt()),!(Qe&6)&&(co=Rt()+500,Lr()))}break;case 13:rs(function(){var i=Xi(t,1);if(i!==null){var r=un();ii(i,t,1,r)}}),bp(t,1)}};$h=function(t){if(t.tag===13){var e=Xi(t,134217728);if(e!==null){var n=un();ii(e,t,134217728,n)}bp(t,134217728)}};Ax=function(t){if(t.tag===13){var e=Mr(t),n=Xi(t,e);if(n!==null){var i=un();ii(n,t,e,i)}bp(t,e)}};bx=function(){return at};Cx=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Qf=function(t,e,n){switch(e){case"input":if(Xf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yc(i);if(!r)throw Error(oe(90));sx(i),Xf(i,r)}}}break;case"textarea":ax(t,n);break;case"select":e=n.value,e!=null&&$s(t,!!n.multiple,e,!1)}};px=Mp;mx=rs;var jE={usingClientEntryPoint:!1,Events:[Ia,Os,Yc,dx,hx,Mp]},bo={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YE={bundleType:bo.bundleType,version:bo.version,rendererPackageName:bo.rendererPackageName,rendererConfig:bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xx(t),t===null?null:t.stateNode},findFiberByHostInstance:bo.findFiberByHostInstance||WE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Gc=ll.inject(YE),xi=ll}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jE;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rp(e))throw Error(oe(200));return GE(t,e,null,n)};Nn.createRoot=function(t,e){if(!Rp(t))throw Error(oe(299));var n=!1,i="",r=K_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ap(t,1,!1,null,null,n,!1,i,r),t[Wi]=e.current,ha(t.nodeType===8?t.parentNode:t),new Cp(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=xx(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return rs(t)};Nn.hydrate=function(t,e,n){if(!nu(e))throw Error(oe(200));return iu(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Rp(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=K_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$_(e,null,t,1,n??null,r,!1,s,o),t[Wi]=e.current,ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new tu(e)};Nn.render=function(t,e,n){if(!nu(e))throw Error(oe(200));return iu(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!nu(t))throw Error(oe(40));return t._reactRootContainer?(rs(function(){iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Wi]=null})}),!0):!1};Nn.unstable_batchedUpdates=Mp;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!nu(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return iu(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function Z_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z_)}catch(t){console.error(t)}}Z_(),Zv.exports=Nn;var qE=Zv.exports,Ng=qE;kf.createRoot=Ng.createRoot,kf.hydrateRoot=Ng.hydrateRoot;const Q_=re.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),ru=re.createContext({}),su=re.createContext(null),ou=typeof document<"u",Pp=ou?re.useLayoutEffect:re.useEffect,J_=re.createContext({strict:!1}),Lp=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),$E="framerAppearId",ey="data-"+Lp($E);function KE(t,e,n,i){const{visualElement:r}=re.useContext(ru),s=re.useContext(J_),o=re.useContext(su),a=re.useContext(Q_).reducedMotion,l=re.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const c=l.current;re.useInsertionEffect(()=>{c&&c.update(n,o)});const f=re.useRef(!!(n[ey]&&!window.HandoffComplete));return Pp(()=>{c&&(c.render(),f.current&&c.animationState&&c.animationState.animateChanges())}),re.useEffect(()=>{c&&(c.updateFeatures(),!f.current&&c.animationState&&c.animationState.animateChanges(),f.current&&(f.current=!1,window.HandoffComplete=!0))}),c}function Ws(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function ZE(t,e,n){return re.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ws(n)&&(n.current=i))},[e])}function Ma(t){return typeof t=="string"||Array.isArray(t)}function au(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Dp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Np=["initial",...Dp];function lu(t){return au(t.animate)||Np.some(e=>Ma(t[e]))}function ty(t){return!!(lu(t)||t.variants)}function QE(t,e){if(lu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ma(n)?n:void 0,animate:Ma(i)?i:void 0}}return t.inherit!==!1?e:{}}function JE(t){const{initial:e,animate:n}=QE(t,re.useContext(ru));return re.useMemo(()=>({initial:e,animate:n}),[Ig(e),Ig(n)])}function Ig(t){return Array.isArray(t)?t.join(" "):t}const Ug={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ea={};for(const t in Ug)Ea[t]={isEnabled:e=>Ug[t].some(n=>!!e[n])};function eT(t){for(const e in t)Ea[e]={...Ea[e],...t[e]}}const Ip=re.createContext({}),ny=re.createContext({}),tT=Symbol.for("motionComponentSymbol");function nT({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&eT(t);function s(a,l){let c;const f={...re.useContext(Q_),...a,layoutId:iT(a)},{isStatic:d}=f,u=JE(a),h=i(a,d);if(!d&&ou){u.visualElement=KE(r,h,f,e);const m=re.useContext(ny),_=re.useContext(J_).strict;u.visualElement&&(c=u.visualElement.loadFeatures(f,_,t,m))}return re.createElement(ru.Provider,{value:u},c&&u.visualElement?re.createElement(c,{visualElement:u.visualElement,...f}):null,n(r,a,ZE(h,u.visualElement,l),h,d,u.visualElement))}const o=re.forwardRef(s);return o[tT]=r,o}function iT({layoutId:t}){const e=re.useContext(Ip).id;return e&&t!==void 0?e+"-"+t:t}function rT(t){function e(i,r={}){return nT(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const sT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Up(t){return typeof t!="string"||t.includes("-")?!1:!!(sT.indexOf(t)>-1||/[A-Z]/.test(t))}const bc={};function oT(t){Object.assign(bc,t)}const Fa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],fs=new Set(Fa);function iy(t,{layout:e,layoutId:n}){return fs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!bc[t]||t==="opacity")}const En=t=>!!(t&&t.getVelocity),aT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lT=Fa.length;function cT(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<lT;o++){const a=Fa[o];if(t[a]!==void 0){const l=aT[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const ry=t=>e=>typeof e=="string"&&e.startsWith(t),sy=ry("--"),Ld=ry("var(--"),uT=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,fT=(t,e)=>e&&typeof t=="number"?e.transform(t):t,br=(t,e,n)=>Math.min(Math.max(n,t),e),ds={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},ea={...ds,transform:t=>br(0,1,t)},cl={...ds,default:1},ta=t=>Math.round(t*1e5)/1e5,cu=/(-)?([\d]*\.?[\d])+/g,oy=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,dT=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Oa(t){return typeof t=="string"}const ka=t=>({test:e=>Oa(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),or=ka("deg"),yi=ka("%"),Oe=ka("px"),hT=ka("vh"),pT=ka("vw"),Fg={...yi,parse:t=>yi.parse(t)/100,transform:t=>yi.transform(t*100)},Og={...ds,transform:Math.round},ay={borderWidth:Oe,borderTopWidth:Oe,borderRightWidth:Oe,borderBottomWidth:Oe,borderLeftWidth:Oe,borderRadius:Oe,radius:Oe,borderTopLeftRadius:Oe,borderTopRightRadius:Oe,borderBottomRightRadius:Oe,borderBottomLeftRadius:Oe,width:Oe,maxWidth:Oe,height:Oe,maxHeight:Oe,size:Oe,top:Oe,right:Oe,bottom:Oe,left:Oe,padding:Oe,paddingTop:Oe,paddingRight:Oe,paddingBottom:Oe,paddingLeft:Oe,margin:Oe,marginTop:Oe,marginRight:Oe,marginBottom:Oe,marginLeft:Oe,rotate:or,rotateX:or,rotateY:or,rotateZ:or,scale:cl,scaleX:cl,scaleY:cl,scaleZ:cl,skew:or,skewX:or,skewY:or,distance:Oe,translateX:Oe,translateY:Oe,translateZ:Oe,x:Oe,y:Oe,z:Oe,perspective:Oe,transformPerspective:Oe,opacity:ea,originX:Fg,originY:Fg,originZ:Oe,zIndex:Og,fillOpacity:ea,strokeOpacity:ea,numOctaves:Og};function Fp(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,c=!1,f=!0;for(const d in e){const u=e[d];if(sy(d)){s[d]=u;continue}const h=ay[d],m=fT(u,h);if(fs.has(d)){if(l=!0,o[d]=m,!f)continue;u!==(h.default||0)&&(f=!1)}else d.startsWith("origin")?(c=!0,a[d]=m):r[d]=m}if(e.transform||(l||i?r.transform=cT(t.transform,n,f,i):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:u="50%",originZ:h=0}=a;r.transformOrigin=`${d} ${u} ${h}`}}const Op=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ly(t,e,n){for(const i in e)!En(e[i])&&!iy(i,n)&&(t[i]=e[i])}function mT({transformTemplate:t},e,n){return re.useMemo(()=>{const i=Op();return Fp(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function gT(t,e,n){const i=t.style||{},r={};return ly(r,i,t),Object.assign(r,mT(t,e,n)),t.transformValues?t.transformValues(r):r}function vT(t,e,n){const i={},r=gT(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const xT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Cc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||xT.has(t)}let cy=t=>!Cc(t);function _T(t){t&&(cy=e=>e.startsWith("on")?!Cc(e):t(e))}try{_T(require("@emotion/is-prop-valid").default)}catch{}function yT(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(cy(r)||n===!0&&Cc(r)||!e&&!Cc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function kg(t,e,n){return typeof t=="string"?t:Oe.transform(e+n*t)}function ST(t,e,n){const i=kg(e,t.x,t.width),r=kg(n,t.y,t.height);return`${i} ${r}`}const MT={offset:"stroke-dashoffset",array:"stroke-dasharray"},ET={offset:"strokeDashoffset",array:"strokeDasharray"};function TT(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?MT:ET;t[s.offset]=Oe.transform(-i);const o=Oe.transform(e),a=Oe.transform(n);t[s.array]=`${o} ${a}`}function kp(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},f,d,u){if(Fp(t,c,f,u),d){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:m,dimensions:_}=t;h.transform&&(_&&(m.transform=h.transform),delete h.transform),_&&(r!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=ST(_,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&TT(h,o,a,l,!1)}const uy=()=>({...Op(),attrs:{}}),Bp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function wT(t,e,n,i){const r=re.useMemo(()=>{const s=uy();return kp(s,e,{enableHardwareAcceleration:!1},Bp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};ly(s,t.style,t),r.style={...s,...r.style}}return r}function AT(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Up(n)?wT:vT)(i,s,o,n),f={...yT(i,typeof n=="string",t),...l,ref:r},{children:d}=i,u=re.useMemo(()=>En(d)?d.get():d,[d]);return re.createElement(n,{...f,children:u})}}function fy(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const dy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function hy(t,e,n,i){fy(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(dy.has(r)?r:Lp(r),e.attrs[r])}function Vp(t,e){const{style:n}=t,i={};for(const r in n)(En(n[r])||e.style&&En(e.style[r])||iy(r,t))&&(i[r]=n[r]);return i}function py(t,e){const n=Vp(t,e);for(const i in t)if(En(t[i])||En(e[i])){const r=Fa.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;n[r]=t[i]}return n}function zp(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}function my(t){const e=re.useRef(null);return e.current===null&&(e.current=t()),e.current}const Rc=t=>Array.isArray(t),bT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),CT=t=>Rc(t)?t[t.length-1]||0:t;function $l(t){const e=En(t)?t.get():t;return bT(e)?e.toValue():e}function RT({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:PT(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const gy=t=>(e,n)=>{const i=re.useContext(ru),r=re.useContext(su),s=()=>RT(t,e,i,r);return n?s():my(s)};function PT(t,e,n,i){const r={},s=i(t,{});for(const u in s)r[u]=$l(s[u]);let{initial:o,animate:a}=t;const l=lu(t),c=ty(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const d=f?a:o;return d&&typeof d!="boolean"&&!au(d)&&(Array.isArray(d)?d:[d]).forEach(h=>{const m=zp(t,h);if(!m)return;const{transitionEnd:_,transition:g,...p}=m;for(const v in p){let y=p[v];if(Array.isArray(y)){const S=f?y.length-1:0;y=y[S]}y!==null&&(r[v]=y)}for(const v in _)r[v]=_[v]}),r}const Pt=t=>t;class Bg{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const n=this.order.indexOf(e);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function LT(t){let e=new Bg,n=new Bg,i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,c=!1,f=!1)=>{const d=f&&r,u=d?e:n;return c&&o.add(l),u.add(l)&&d&&r&&(i=e.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let c=0;c<i;c++){const f=e.order[c];f(l),o.has(f)&&(a.schedule(f),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const ul=["prepare","read","update","preRender","render","postRender"],DT=40;function NT(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=ul.reduce((d,u)=>(d[u]=LT(()=>n=!0),d),{}),o=d=>s[d].process(r),a=()=>{const d=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(d-r.timestamp,DT),1),r.timestamp=d,r.isProcessing=!0,ul.forEach(o),r.isProcessing=!1,n&&e&&(i=!1,t(a))},l=()=>{n=!0,i=!0,r.isProcessing||t(a)};return{schedule:ul.reduce((d,u)=>{const h=s[u];return d[u]=(m,_=!1,g=!1)=>(n||l(),h.schedule(m,_,g)),d},{}),cancel:d=>ul.forEach(u=>s[u].cancel(d)),state:r,steps:s}}const{schedule:ht,cancel:Yi,state:tn,steps:Xu}=NT(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0),IT={useVisualState:gy({scrapeMotionValuesFromProps:py,createRenderState:uy,onMount:(t,e,{renderState:n,latestValues:i})=>{ht.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ht.render(()=>{kp(n,i,{enableHardwareAcceleration:!1},Bp(e.tagName),t.transformTemplate),hy(e,n)})}})},UT={useVisualState:gy({scrapeMotionValuesFromProps:Vp,createRenderState:Op})};function FT(t,{forwardMotionProps:e=!1},n,i){return{...Up(t)?IT:UT,preloadedFeatures:n,useRender:AT(e),createVisualElement:i,Component:t}}function Ui(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const vy=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function uu(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const OT=t=>e=>vy(e)&&t(e,uu(e));function ki(t,e,n,i){return Ui(t,e,OT(n),i)}const kT=(t,e)=>n=>e(t(n)),Tr=(...t)=>t.reduce(kT);function xy(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const Vg=xy("dragHorizontal"),zg=xy("dragVertical");function _y(t){let e=!1;if(t==="y")e=zg();else if(t==="x")e=Vg();else{const n=Vg(),i=zg();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function yy(){const t=_y(!0);return t?(t(),!1):!0}class Dr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Hg(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||yy())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&ht.update(()=>a[i](s,o))};return ki(t.current,n,r,{passive:!t.getProps()[i]})}class BT extends Dr{mount(){this.unmount=Tr(Hg(this.node,!0),Hg(this.node,!1))}unmount(){}}class VT extends Dr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Tr(Ui(this.node.current,"focus",()=>this.onFocus()),Ui(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Sy=(t,e)=>e?t===e?!0:Sy(t,e.parentElement):!1;function ju(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,uu(n))}class zT extends Dr{constructor(){super(...arguments),this.removeStartListeners=Pt,this.removeEndListeners=Pt,this.removeAccessibleListeners=Pt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=ki(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:f,globalTapTarget:d}=this.node.getProps();ht.update(()=>{!d&&!Sy(this.node.current,a.target)?f&&f(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=ki(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Tr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||ju("up",(l,c)=>{const{onTap:f}=this.node.getProps();f&&ht.update(()=>f(l,c))})};this.removeEndListeners(),this.removeEndListeners=Ui(this.node.current,"keyup",o),ju("down",(a,l)=>{this.startPress(a,l)})},n=Ui(this.node.current,"keydown",e),i=()=>{this.isPressing&&ju("cancel",(s,o)=>this.cancelPress(s,o))},r=Ui(this.node.current,"blur",i);this.removeAccessibleListeners=Tr(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&ht.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!yy()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&ht.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=ki(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Ui(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Tr(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Dd=new WeakMap,Yu=new WeakMap,HT=t=>{const e=Dd.get(t.target);e&&e(t)},GT=t=>{t.forEach(HT)};function WT({root:t,...e}){const n=t||document;Yu.has(n)||Yu.set(n,{});const i=Yu.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(GT,{root:t,...e})),i[r]}function XT(t,e,n){const i=WT(e);return Dd.set(t,n),i.observe(t),()=>{Dd.delete(t),i.unobserve(t)}}const jT={some:0,all:1};class YT extends Dr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:jT[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:f,onViewportLeave:d}=this.node.getProps(),u=c?f:d;u&&u(l)};return XT(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(qT(e,n))&&this.startObserver()}unmount(){}}function qT({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const $T={inView:{Feature:YT},tap:{Feature:zT},focus:{Feature:VT},hover:{Feature:BT}};function My(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function KT(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function ZT(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function fu(t,e,n){const i=t.getProps();return zp(i,e,n!==void 0?n:i.custom,KT(t),ZT(t))}let Hp=Pt;const Jr=t=>t*1e3,Bi=t=>t/1e3,QT={current:!1},Ey=t=>Array.isArray(t)&&typeof t[0]=="number";function Ty(t){return!!(!t||typeof t=="string"&&wy[t]||Ey(t)||Array.isArray(t)&&t.every(Ty))}const zo=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,wy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zo([0,.65,.55,1]),circOut:zo([.55,0,1,.45]),backIn:zo([.31,.01,.66,-.59]),backOut:zo([.33,1.53,.69,.99])};function Ay(t){if(t)return Ey(t)?zo(t):Array.isArray(t)?t.map(Ay):wy[t]}function JT(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const f=Ay(a);return Array.isArray(f)&&(c.easing=f),t.animate(c,{delay:i,duration:r,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function ew(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const by=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,tw=1e-7,nw=12;function iw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=by(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>tw&&++a<nw);return o}function Ba(t,e,n,i){if(t===e&&n===i)return Pt;const r=s=>iw(s,0,1,t,n);return s=>s===0||s===1?s:by(r(s),e,i)}const rw=Ba(.42,0,1,1),sw=Ba(0,0,.58,1),Cy=Ba(.42,0,.58,1),ow=t=>Array.isArray(t)&&typeof t[0]!="number",Ry=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Py=t=>e=>1-t(1-e),Gp=t=>1-Math.sin(Math.acos(t)),Ly=Py(Gp),aw=Ry(Gp),Dy=Ba(.33,1.53,.69,.99),Wp=Py(Dy),lw=Ry(Wp),cw=t=>(t*=2)<1?.5*Wp(t):.5*(2-Math.pow(2,-10*(t-1))),uw={linear:Pt,easeIn:rw,easeInOut:Cy,easeOut:sw,circIn:Gp,circInOut:aw,circOut:Ly,backIn:Wp,backInOut:lw,backOut:Dy,anticipate:cw},Gg=t=>{if(Array.isArray(t)){Hp(t.length===4);const[e,n,i,r]=t;return Ba(e,n,i,r)}else if(typeof t=="string")return uw[t];return t},Xp=(t,e)=>n=>!!(Oa(n)&&dT.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Ny=(t,e,n)=>i=>{if(!Oa(i))return i;const[r,s,o,a]=i.match(cu);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},fw=t=>br(0,255,t),qu={...ds,transform:t=>Math.round(fw(t))},qr={test:Xp("rgb","red"),parse:Ny("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+qu.transform(t)+", "+qu.transform(e)+", "+qu.transform(n)+", "+ta(ea.transform(i))+")"};function dw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Nd={test:Xp("#"),parse:dw,transform:qr.transform},Xs={test:Xp("hsl","hue"),parse:Ny("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+yi.transform(ta(e))+", "+yi.transform(ta(n))+", "+ta(ea.transform(i))+")"},ln={test:t=>qr.test(t)||Nd.test(t)||Xs.test(t),parse:t=>qr.test(t)?qr.parse(t):Xs.test(t)?Xs.parse(t):Nd.parse(t),transform:t=>Oa(t)?t:t.hasOwnProperty("red")?qr.transform(t):Xs.transform(t)},Mt=(t,e,n)=>-n*t+n*e+t;function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function hw({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=$u(l,a,t+1/3),s=$u(l,a,t),o=$u(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const Ku=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},pw=[Nd,qr,Xs],mw=t=>pw.find(e=>e.test(t));function Wg(t){const e=mw(t);let n=e.parse(t);return e===Xs&&(n=hw(n)),n}const Iy=(t,e)=>{const n=Wg(t),i=Wg(e),r={...n};return s=>(r.red=Ku(n.red,i.red,s),r.green=Ku(n.green,i.green,s),r.blue=Ku(n.blue,i.blue,s),r.alpha=Mt(n.alpha,i.alpha,s),qr.transform(r))};function gw(t){var e,n;return isNaN(t)&&Oa(t)&&(((e=t.match(cu))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(oy))===null||n===void 0?void 0:n.length)||0)>0}const Uy={regex:uT,countKey:"Vars",token:"${v}",parse:Pt},Fy={regex:oy,countKey:"Colors",token:"${c}",parse:ln.parse},Oy={regex:cu,countKey:"Numbers",token:"${n}",parse:ds.parse};function Zu(t,{regex:e,countKey:n,token:i,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(r)))}function Pc(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Zu(n,Uy),Zu(n,Fy),Zu(n,Oy),n}function ky(t){return Pc(t).values}function By(t){const{values:e,numColors:n,numVars:i,tokenised:r}=Pc(t),s=e.length;return o=>{let a=r;for(let l=0;l<s;l++)l<i?a=a.replace(Uy.token,o[l]):l<i+n?a=a.replace(Fy.token,ln.transform(o[l])):a=a.replace(Oy.token,ta(o[l]));return a}}const vw=t=>typeof t=="number"?0:t;function xw(t){const e=ky(t);return By(t)(e.map(vw))}const Cr={test:gw,parse:ky,createTransformer:By,getAnimatableNone:xw},Vy=(t,e)=>n=>`${n>0?e:t}`;function zy(t,e){return typeof t=="number"?n=>Mt(t,e,n):ln.test(t)?Iy(t,e):t.startsWith("var(")?Vy(t,e):Gy(t,e)}const Hy=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>zy(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},_w=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=zy(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},Gy=(t,e)=>{const n=Cr.createTransformer(e),i=Pc(t),r=Pc(e);return i.numVars===r.numVars&&i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?Tr(Hy(i.values,r.values),n):Vy(t,e)},Ta=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Xg=(t,e)=>n=>Mt(t,e,n);function yw(t){return typeof t=="number"?Xg:typeof t=="string"?ln.test(t)?Iy:Gy:Array.isArray(t)?Hy:typeof t=="object"?_w:Xg}function Sw(t,e,n){const i=[],r=n||yw(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Pt:e;a=Tr(l,a)}i.push(a)}return i}function Wy(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Hp(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=Sw(e,i,r),a=o.length,l=c=>{let f=0;if(a>1)for(;f<t.length-2&&!(c<t[f+1]);f++);const d=Ta(t[f],t[f+1],c);return o[f](d)};return n?c=>l(br(t[0],t[s-1],c)):l}function Mw(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Ta(0,e,i);t.push(Mt(n,1,r))}}function Ew(t){const e=[0];return Mw(e,t.length-1),e}function Tw(t,e){return t.map(n=>n*e)}function ww(t,e){return t.map(()=>e||Cy).splice(0,t.length-1)}function Lc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=ow(i)?i.map(Gg):Gg(i),s={done:!1,value:e[0]},o=Tw(n&&n.length===e.length?n:Ew(e),t),a=Wy(o,e,{ease:Array.isArray(r)?r:ww(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function Xy(t,e){return e?t*(1e3/e):0}const Aw=5;function jy(t,e,n){const i=Math.max(e-Aw,0);return Xy(n-t(i),e-i)}const Qu=.001,bw=.01,Cw=10,Rw=.05,Pw=1;function Lw({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=br(Rw,Pw,o),t=br(bw,Cw,Bi(t)),o<1?(r=c=>{const f=c*o,d=f*t,u=f-n,h=Id(c,o),m=Math.exp(-d);return Qu-u/h*m},s=c=>{const d=c*o*t,u=d*n+n,h=Math.pow(o,2)*Math.pow(c,2)*t,m=Math.exp(-d),_=Id(Math.pow(c,2),o);return(-r(c)+Qu>0?-1:1)*((u-h)*m)/_}):(r=c=>{const f=Math.exp(-c*t),d=(c-n)*t+1;return-Qu+f*d},s=c=>{const f=Math.exp(-c*t),d=(n-c)*(t*t);return f*d});const a=5/t,l=Nw(r,s,a);if(t=Jr(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const Dw=12;function Nw(t,e,n){let i=n;for(let r=1;r<Dw;r++)i=i-t(i)/e(i);return i}function Id(t,e){return t*Math.sqrt(1-e*e)}const Iw=["duration","bounce"],Uw=["stiffness","damping","mass"];function jg(t,e){return e.some(n=>t[n]!==void 0)}function Fw(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!jg(t,Uw)&&jg(t,Iw)){const n=Lw(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function Yy({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:c,duration:f,velocity:d,isResolvedFromDuration:u}=Fw({...i,velocity:-Bi(i.velocity||0)}),h=d||0,m=l/(2*Math.sqrt(a*c)),_=s-r,g=Bi(Math.sqrt(a/c)),p=Math.abs(_)<5;n||(n=p?.01:2),e||(e=p?.005:.5);let v;if(m<1){const y=Id(g,m);v=S=>{const T=Math.exp(-m*g*S);return s-T*((h+m*g*_)/y*Math.sin(y*S)+_*Math.cos(y*S))}}else if(m===1)v=y=>s-Math.exp(-g*y)*(_+(h+g*_)*y);else{const y=g*Math.sqrt(m*m-1);v=S=>{const T=Math.exp(-m*g*S),w=Math.min(y*S,300);return s-T*((h+m*g*_)*Math.sinh(w)+y*_*Math.cosh(w))/y}}return{calculatedDuration:u&&f||null,next:y=>{const S=v(y);if(u)o.done=y>=f;else{let T=h;y!==0&&(m<1?T=jy(v,y,S):T=0);const w=Math.abs(T)<=n,b=Math.abs(s-S)<=e;o.done=w&&b}return o.value=o.done?s:S,o}}}function Yg({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:f}){const d=t[0],u={done:!1,value:d},h=x=>a!==void 0&&x<a||l!==void 0&&x>l,m=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let _=n*e;const g=d+_,p=o===void 0?g:o(g);p!==g&&(_=p-d);const v=x=>-_*Math.exp(-x/i),y=x=>p+v(x),S=x=>{const A=v(x),R=y(x);u.done=Math.abs(A)<=c,u.value=u.done?p:R};let T,w;const b=x=>{h(u.value)&&(T=x,w=Yy({keyframes:[u.value,m(u.value)],velocity:jy(y,x,u.value),damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return b(0),{calculatedDuration:null,next:x=>{let A=!1;return!w&&T===void 0&&(A=!0,S(x),b(x)),T!==void 0&&x>T?w.next(x-T):(!A&&S(x),u)}}}const Ow=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ht.update(e,!0),stop:()=>Yi(e),now:()=>tn.isProcessing?tn.timestamp:performance.now()}},qg=2e4;function $g(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<qg;)e+=n,i=t.next(e);return e>=qg?1/0:e}const kw={decay:Yg,inertia:Yg,tween:Lc,keyframes:Lc,spring:Yy};function Dc({autoplay:t=!0,delay:e=0,driver:n=Ow,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:f,onUpdate:d,...u}){let h=1,m=!1,_,g;const p=()=>{g=new Promise(X=>{_=X})};p();let v;const y=kw[r]||Lc;let S;y!==Lc&&typeof i[0]!="number"&&(S=Wy([0,100],i,{clamp:!1}),i=[0,100]);const T=y({...u,keyframes:i});let w;a==="mirror"&&(w=y({...u,keyframes:[...i].reverse(),velocity:-(u.velocity||0)}));let b="idle",x=null,A=null,R=null;T.calculatedDuration===null&&s&&(T.calculatedDuration=$g(T));const{calculatedDuration:U}=T;let H=1/0,B=1/0;U!==null&&(H=U+o,B=H*(s+1)-o);let P=0;const V=X=>{if(A===null)return;h>0&&(A=Math.min(A,X)),h<0&&(A=Math.min(X-B/h,A)),x!==null?P=x:P=Math.round(X-A)*h;const ae=P-e*(h>=0?1:-1),xe=h>=0?ae<0:ae>B;P=Math.max(ae,0),b==="finished"&&x===null&&(P=B);let Ue=P,Ce=T;if(s){const le=Math.min(P,B)/H;let ce=Math.floor(le),se=le%1;!se&&le>=1&&(se=1),se===1&&ce--,ce=Math.min(ce,s+1),!!(ce%2)&&(a==="reverse"?(se=1-se,o&&(se-=o/H)):a==="mirror"&&(Ce=w)),Ue=br(0,1,se)*H}const Re=xe?{done:!1,value:i[0]}:Ce.next(Ue);S&&(Re.value=S(Re.value));let{done:Z}=Re;!xe&&U!==null&&(Z=h>=0?P>=B:P<=0);const ee=x===null&&(b==="finished"||b==="running"&&Z);return d&&d(Re.value),ee&&D(),Re},W=()=>{v&&v.stop(),v=void 0},O=()=>{b="idle",W(),_(),p(),A=R=null},D=()=>{b="finished",f&&f(),W(),_()},N=()=>{if(m)return;v||(v=n(V));const X=v.now();l&&l(),x!==null?A=X-x:(!A||b==="finished")&&(A=X),b==="finished"&&p(),R=A,x=null,b="running",v.start()};t&&N();const z={then(X,ae){return g.then(X,ae)},get time(){return Bi(P)},set time(X){X=Jr(X),P=X,x!==null||!v||h===0?x=X:A=v.now()-X/h},get duration(){const X=T.calculatedDuration===null?$g(T):T.calculatedDuration;return Bi(X)},get speed(){return h},set speed(X){X===h||!v||(h=X,z.time=Bi(P))},get state(){return b},play:N,pause:()=>{b="paused",x=P},stop:()=>{m=!0,b!=="idle"&&(b="idle",c&&c(),O())},cancel:()=>{R!==null&&V(R),O()},complete:()=>{b="finished"},sample:X=>(A=0,V(X))};return z}function Bw(t){let e;return()=>(e===void 0&&(e=t()),e)}const Vw=Bw(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),zw=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),fl=10,Hw=2e4,Gw=(t,e)=>e.type==="spring"||t==="backgroundColor"||!Ty(e.ease);function Ww(t,e,{onUpdate:n,onComplete:i,...r}){if(!(Vw()&&zw.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l,c=!1;const f=()=>{l=new Promise(y=>{a=y})};f();let{keyframes:d,duration:u=300,ease:h,times:m}=r;if(Gw(e,r)){const y=Dc({...r,repeat:0,delay:0});let S={done:!1,value:d[0]};const T=[];let w=0;for(;!S.done&&w<Hw;)S=y.sample(w),T.push(S.value),w+=fl;m=void 0,d=T,u=w-fl,h="linear"}const _=JT(t.owner.current,e,d,{...r,duration:u,ease:h,times:m}),g=()=>{c=!1,_.cancel()},p=()=>{c=!0,ht.update(g),a(),f()};return _.onfinish=()=>{c||(t.set(ew(d,r)),i&&i(),p())},{then(y,S){return l.then(y,S)},attachTimeline(y){return _.timeline=y,_.onfinish=null,Pt},get time(){return Bi(_.currentTime||0)},set time(y){_.currentTime=Jr(y)},get speed(){return _.playbackRate},set speed(y){_.playbackRate=y},get duration(){return Bi(u)},play:()=>{o||(_.play(),Yi(g))},pause:()=>_.pause(),stop:()=>{if(o=!0,_.playState==="idle")return;const{currentTime:y}=_;if(y){const S=Dc({...r,autoplay:!1});t.setWithVelocity(S.sample(y-fl).value,S.sample(y).value,fl)}p()},complete:()=>{c||_.finish()},cancel:p}}function Xw({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Pt,pause:Pt,stop:Pt,then:s=>(s(),Promise.resolve()),cancel:Pt,complete:Pt});return e?Dc({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const jw={type:"spring",stiffness:500,damping:25,restSpeed:10},Yw=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),qw={type:"keyframes",duration:.8},$w={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Kw=(t,{keyframes:e})=>e.length>2?qw:fs.has(t)?t.startsWith("scale")?Yw(e[1]):jw:$w,Ud=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Cr.test(e)||e==="0")&&!e.startsWith("url(")),Zw=new Set(["brightness","contrast","saturate","opacity"]);function Qw(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(cu)||[];if(!i)return t;const r=n.replace(i,"");let s=Zw.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const Jw=/([a-z-]*)\(.*?\)/g,Fd={...Cr,getAnimatableNone:t=>{const e=t.match(Jw);return e?e.map(Qw).join(" "):t}},eA={...ay,color:ln,backgroundColor:ln,outlineColor:ln,fill:ln,stroke:ln,borderColor:ln,borderTopColor:ln,borderRightColor:ln,borderBottomColor:ln,borderLeftColor:ln,filter:Fd,WebkitFilter:Fd},jp=t=>eA[t];function qy(t,e){let n=jp(t);return n!==Fd&&(n=Cr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const $y=t=>/^0[^.\s]+$/.test(t);function tA(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||$y(t)}function nA(t,e,n,i){const r=Ud(e,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=i.from!==void 0?i.from:t.get();let a;const l=[];for(let c=0;c<s.length;c++)s[c]===null&&(s[c]=c===0?o:s[c-1]),tA(s[c])&&l.push(c),typeof s[c]=="string"&&s[c]!=="none"&&s[c]!=="0"&&(a=s[c]);if(r&&l.length&&a)for(let c=0;c<l.length;c++){const f=l[c];s[f]=qy(e,a)}return s}function iA({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...f}){return!!Object.keys(f).length}function Yp(t,e){return t[e]||t.default||t}const rA={skipAnimations:!1},qp=(t,e,n,i={})=>r=>{const s=Yp(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-Jr(o);const l=nA(e,t,n,s),c=l[0],f=l[l.length-1],d=Ud(t,c),u=Ud(t,f);let h={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:m=>{e.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(iA(s)||(h={...h,...Kw(t,h)}),h.duration&&(h.duration=Jr(h.duration)),h.repeatDelay&&(h.repeatDelay=Jr(h.repeatDelay)),!d||!u||QT.current||s.type===!1||rA.skipAnimations)return Xw(h);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const m=Ww(e,t,h);if(m)return m}return Dc(h)};function Nc(t){return!!(En(t)&&t.add)}const Ky=t=>/^\-?\d*\.?\d+$/.test(t);function $p(t,e){t.indexOf(e)===-1&&t.push(e)}function Kp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Zp{constructor(){this.subscriptions=[]}add(e){return $p(this.subscriptions,e),()=>Kp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const sA=t=>!isNaN(parseFloat(t));class oA{constructor(e,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:o}=tn;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,ht.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ht.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=sA(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Zp);const i=this.events[e].add(n);return e==="change"?()=>{i(),ht.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Xy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function uo(t,e){return new oA(t,e)}const Zy=t=>e=>e.test(t),aA={test:t=>t==="auto",parse:t=>t},Qy=[ds,Oe,yi,or,pT,hT,aA],Co=t=>Qy.find(Zy(t)),lA=[...Qy,ln,Cr],cA=t=>lA.find(Zy(t));function uA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,uo(n))}function fA(t,e){const n=fu(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=CT(s[o]);uA(t,o,a)}}function dA(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],c=e[l];let f=null;Array.isArray(c)&&(f=c[0]),f===null&&(f=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),f!=null&&(typeof f=="string"&&(Ky(f)||$y(f))?f=parseFloat(f):!cA(f)&&Cr.test(c)&&(f=qy(l,c)),t.addValue(l,uo(f,{owner:t})),n[l]===void 0&&(n[l]=f),f!==null&&t.setBaseTarget(l,f))}}function hA(t,e){return e?(e[t]||e.default||e).from:void 0}function pA(t,e,n){const i={};for(const r in t){const s=hA(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function mA({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function gA(t,e){const n=t.get();if(Array.isArray(e)){for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}else return n!==e}function Jy(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const c=[],f=r&&t.animationState&&t.animationState.getState()[r];for(const d in a){const u=t.getValue(d),h=a[d];if(!u||h===void 0||f&&mA(f,d))continue;const m={delay:n,elapsed:0,...Yp(s||{},d)};if(window.HandoffAppearAnimations){const p=t.getProps()[ey];if(p){const v=window.HandoffAppearAnimations(p,d,u,ht);v!==null&&(m.elapsed=v,m.isHandoff=!0)}}let _=!m.isHandoff&&!gA(u,h);if(m.type==="spring"&&(u.getVelocity()||m.velocity)&&(_=!1),u.animation&&(_=!1),_)continue;u.start(qp(d,u,h,t.shouldReduceMotion&&fs.has(d)?{type:!1}:m));const g=u.animation;Nc(l)&&(l.add(d),g.then(()=>l.remove(d))),c.push(g)}return o&&Promise.all(c).then(()=>{o&&fA(t,o)}),c}function Od(t,e,n={}){const i=fu(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(Jy(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=r;return vA(t,e,c+l,f,d,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,c]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>c())}else return Promise.all([s(),o(n.delay)])}function vA(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(xA).forEach((c,f)=>{c.notify("AnimationStart",e),o.push(Od(c,e,{...s,delay:n+l(f)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function xA(t,e){return t.sortNodePosition(e)}function _A(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Od(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Od(t,e,n);else{const r=typeof e=="function"?fu(t,e,n.custom):e;i=Promise.all(Jy(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const yA=[...Dp].reverse(),SA=Dp.length;function MA(t){return e=>Promise.all(e.map(({animation:n,options:i})=>_A(t,n,i)))}function EA(t){let e=MA(t);const n=wA();let i=!0;const r=(l,c)=>{const f=fu(t,c);if(f){const{transition:d,transitionEnd:u,...h}=f;l={...l,...h,...u}}return l};function s(l){e=l(t)}function o(l,c){const f=t.getProps(),d=t.getVariantContext(!0)||{},u=[],h=new Set;let m={},_=1/0;for(let p=0;p<SA;p++){const v=yA[p],y=n[v],S=f[v]!==void 0?f[v]:d[v],T=Ma(S),w=v===c?y.isActive:null;w===!1&&(_=p);let b=S===d[v]&&S!==f[v]&&T;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),y.protectedKeys={...m},!y.isActive&&w===null||!S&&!y.prevProp||au(S)||typeof S=="boolean")continue;let A=TA(y.prevProp,S)||v===c&&y.isActive&&!b&&T||p>_&&T,R=!1;const U=Array.isArray(S)?S:[S];let H=U.reduce(r,{});w===!1&&(H={});const{prevResolvedValues:B={}}=y,P={...B,...H},V=W=>{A=!0,h.has(W)&&(R=!0,h.delete(W)),y.needsAnimating[W]=!0};for(const W in P){const O=H[W],D=B[W];if(m.hasOwnProperty(W))continue;let N=!1;Rc(O)&&Rc(D)?N=!My(O,D):N=O!==D,N?O!==void 0?V(W):h.add(W):O!==void 0&&h.has(W)?V(W):y.protectedKeys[W]=!0}y.prevProp=S,y.prevResolvedValues=H,y.isActive&&(m={...m,...H}),i&&t.blockInitialAnimation&&(A=!1),A&&(!b||R)&&u.push(...U.map(W=>({animation:W,options:{type:v,...l}})))}if(h.size){const p={};h.forEach(v=>{const y=t.getBaseTarget(v);y!==void 0&&(p[v]=y)}),u.push({animation:p})}let g=!!u.length;return i&&(f.initial===!1||f.initial===f.animate)&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,g?e(u):Promise.resolve()}function a(l,c,f){var d;if(n[l].isActive===c)return Promise.resolve();(d=t.variantChildren)===null||d===void 0||d.forEach(h=>{var m;return(m=h.animationState)===null||m===void 0?void 0:m.setActive(l,c)}),n[l].isActive=c;const u=o(f,l);for(const h in n)n[h].protectedKeys={};return u}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function TA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!My(e,t):!1}function Ir(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function wA(){return{animate:Ir(!0),whileInView:Ir(),whileHover:Ir(),whileTap:Ir(),whileDrag:Ir(),whileFocus:Ir(),exit:Ir()}}class AA extends Dr{constructor(e){super(e),e.animationState||(e.animationState=EA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),au(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let bA=0;class CA extends Dr{constructor(){super(...arguments),this.id=bA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const RA={animation:{Feature:AA},exit:{Feature:CA}},Kg=(t,e)=>Math.abs(t-e);function PA(t,e){const n=Kg(t.x,e.x),i=Kg(t.y,e.y);return Math.sqrt(n**2+i**2)}class eS{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=ef(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,h=PA(d.offset,{x:0,y:0})>=3;if(!u&&!h)return;const{point:m}=d,{timestamp:_}=tn;this.history.push({...m,timestamp:_});const{onStart:g,onMove:p}=this.handlers;u||(g&&g(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,d)},this.handlePointerMove=(d,u)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Ju(u,this.transformPagePoint),ht.update(this.updatePoint,!0)},this.handlePointerUp=(d,u)=>{this.end();const{onEnd:h,onSessionEnd:m,resumeAnimation:_}=this.handlers;if(this.dragSnapToOrigin&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=ef(d.type==="pointercancel"?this.lastMoveEventInfo:Ju(u,this.transformPagePoint),this.history);this.startEvent&&h&&h(d,g),m&&m(d,g)},!vy(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=uu(e),a=Ju(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=tn;this.history=[{...l,timestamp:c}];const{onSessionStart:f}=n;f&&f(e,ef(a,this.history)),this.removeListeners=Tr(ki(this.contextWindow,"pointermove",this.handlePointerMove),ki(this.contextWindow,"pointerup",this.handlePointerUp),ki(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Yi(this.updatePoint)}}function Ju(t,e){return e?{point:e(t.point)}:t}function Zg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ef({point:t},e){return{point:t,delta:Zg(t,tS(e)),offset:Zg(t,LA(e)),velocity:DA(e,.1)}}function LA(t){return t[0]}function tS(t){return t[t.length-1]}function DA(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=tS(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Jr(e)));)n--;if(!i)return{x:0,y:0};const s=Bi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Dn(t){return t.max-t.min}function kd(t,e=0,n=.01){return Math.abs(t-e)<=n}function Qg(t,e,n,i=.5){t.origin=i,t.originPoint=Mt(e.min,e.max,t.origin),t.scale=Dn(n)/Dn(e),(kd(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Mt(n.min,n.max,t.origin)-t.originPoint,(kd(t.translate)||isNaN(t.translate))&&(t.translate=0)}function na(t,e,n,i){Qg(t.x,e.x,n.x,i?i.originX:void 0),Qg(t.y,e.y,n.y,i?i.originY:void 0)}function Jg(t,e,n){t.min=n.min+e.min,t.max=t.min+Dn(e)}function NA(t,e,n){Jg(t.x,e.x,n.x),Jg(t.y,e.y,n.y)}function e0(t,e,n){t.min=e.min-n.min,t.max=t.min+Dn(e)}function ia(t,e,n){e0(t.x,e.x,n.x),e0(t.y,e.y,n.y)}function IA(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Mt(n,t,i.max):Math.min(t,n)),t}function t0(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function UA(t,{top:e,left:n,bottom:i,right:r}){return{x:t0(t.x,n,r),y:t0(t.y,e,i)}}function n0(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function FA(t,e){return{x:n0(t.x,e.x),y:n0(t.y,e.y)}}function OA(t,e){let n=.5;const i=Dn(t),r=Dn(e);return r>i?n=Ta(e.min,e.max-i,t.min):i>r&&(n=Ta(t.min,t.max-r,e.min)),br(0,1,n)}function kA(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Bd=.35;function BA(t=Bd){return t===!1?t=0:t===!0&&(t=Bd),{x:i0(t,"left","right"),y:i0(t,"top","bottom")}}function i0(t,e,n){return{min:r0(t,e),max:r0(t,n)}}function r0(t,e){return typeof t=="number"?t:t[e]||0}const s0=()=>({translate:0,scale:1,origin:0,originPoint:0}),js=()=>({x:s0(),y:s0()}),o0=()=>({min:0,max:0}),It=()=>({x:o0(),y:o0()});function kn(t){return[t("x"),t("y")]}function nS({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function VA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function zA(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function tf(t){return t===void 0||t===1}function Vd({scale:t,scaleX:e,scaleY:n}){return!tf(t)||!tf(e)||!tf(n)}function Hr(t){return Vd(t)||iS(t)||t.z||t.rotate||t.rotateX||t.rotateY}function iS(t){return a0(t.x)||a0(t.y)}function a0(t){return t&&t!=="0%"}function Ic(t,e,n){const i=t-n,r=e*i;return n+r}function l0(t,e,n,i,r){return r!==void 0&&(t=Ic(t,r,i)),Ic(t,n,i)+e}function zd(t,e=0,n=1,i,r){t.min=l0(t.min,e,n,i,r),t.max=l0(t.max,e,n,i,r)}function rS(t,{x:e,y:n}){zd(t.x,e.translate,e.scale,e.originPoint),zd(t.y,n.translate,n.scale,n.originPoint)}function HA(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ys(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,rS(t,o)),i&&Hr(s.latestValues)&&Ys(t,s.latestValues))}e.x=c0(e.x),e.y=c0(e.y)}function c0(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function cr(t,e){t.min=t.min+e,t.max=t.max+e}function u0(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=Mt(t.min,t.max,s);zd(t,e[n],e[i],o,e.scale)}const GA=["x","scaleX","originX"],WA=["y","scaleY","originY"];function Ys(t,e){u0(t.x,e,GA),u0(t.y,e,WA)}function sS(t,e){return nS(zA(t.getBoundingClientRect(),e))}function XA(t,e,n){const i=sS(t,n),{scroll:r}=e;return r&&(cr(i.x,r.offset.x),cr(i.y,r.offset.y)),i}const oS=({current:t})=>t?t.ownerDocument.defaultView:null,jA=new WeakMap;class YA{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=It(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=f=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(uu(f,"page").point)},s=(f,d)=>{const{drag:u,dragPropagation:h,onDragStart:m}=this.getProps();if(u&&!h&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=_y(u),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),kn(g=>{let p=this.getAxisMotionValue(g).get()||0;if(yi.test(p)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[g];y&&(p=Dn(y)*(parseFloat(p)/100))}}this.originPoint[g]=p}),m&&ht.update(()=>m(f,d),!1,!0);const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},o=(f,d)=>{const{dragPropagation:u,dragDirectionLock:h,onDirectionLock:m,onDrag:_}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:g}=d;if(h&&this.currentDirection===null){this.currentDirection=qA(g),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",d.point,g),this.updateAxis("y",d.point,g),this.visualElement.render(),_&&_(f,d)},a=(f,d)=>this.stop(f,d),l=()=>kn(f=>{var d;return this.getAnimationState(f)==="paused"&&((d=this.getAxisMotionValue(f).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new eS(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:oS(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ht.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!dl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=IA(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ws(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=UA(r.layoutBox,n):this.constraints=!1,this.elastic=BA(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&kn(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=kA(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ws(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=XA(i,r.root,this.visualElement.getTransformPagePoint());let o=FA(r.layout.layoutBox,s);if(n){const a=n(VA(o));this.hasMutatedConstraints=!!a,a&&(o=nS(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=kn(f=>{if(!dl(f,n,this.currentDirection))return;let d=l&&l[f]||{};o&&(d={min:0,max:0});const u=r?200:1e6,h=r?40:1e7,m={type:"inertia",velocity:i?e[f]:0,bounceStiffness:u,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(f,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(qp(e,i,0,n))}stopAnimation(){kn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){kn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){kn(n=>{const{drag:i}=this.getProps();if(!dl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-Mt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ws(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};kn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=OA({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),kn(o=>{if(!dl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Mt(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;jA.set(this.visualElement,this);const e=this.visualElement.current,n=ki(e,"pointerdown",l=>{const{drag:c,dragListener:f=!0}=this.getProps();c&&f&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ws(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=Ui(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(kn(f=>{const d=this.getAxisMotionValue(f);d&&(this.originPoint[f]+=l[f].translate,d.set(d.get()+l[f].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Bd,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function dl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function qA(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class $A extends Dr{constructor(e){super(e),this.removeGroupControls=Pt,this.removeListeners=Pt,this.controls=new YA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const f0=t=>(e,n)=>{t&&ht.update(()=>t(e,n))};class KA extends Dr{constructor(){super(...arguments),this.removePointerDownListener=Pt}onPointerDown(e){this.session=new eS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:oS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:f0(e),onStart:f0(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ht.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=ki(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function ZA(){const t=re.useContext(su);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=re.useId();return re.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}const Kl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function d0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ro={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Oe.test(t))t=parseFloat(t);else return t;const n=d0(t,e.target.x),i=d0(t,e.target.y);return`${n}% ${i}%`}},QA={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Cr.parse(t);if(r.length>5)return i;const s=Cr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=Mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class JA extends Hc.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;oT(eb),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Kl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ht.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function aS(t){const[e,n]=ZA(),i=re.useContext(Ip);return Hc.createElement(JA,{...t,layoutGroup:i,switchLayoutGroup:re.useContext(ny),isPresent:e,safeToRemove:n})}const eb={borderRadius:{...Ro,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ro,borderTopRightRadius:Ro,borderBottomLeftRadius:Ro,borderBottomRightRadius:Ro,boxShadow:QA},lS=["TopLeft","TopRight","BottomLeft","BottomRight"],tb=lS.length,h0=t=>typeof t=="string"?parseFloat(t):t,p0=t=>typeof t=="number"||Oe.test(t);function nb(t,e,n,i,r,s){r?(t.opacity=Mt(0,n.opacity!==void 0?n.opacity:1,ib(i)),t.opacityExit=Mt(e.opacity!==void 0?e.opacity:1,0,rb(i))):s&&(t.opacity=Mt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<tb;o++){const a=`border${lS[o]}Radius`;let l=m0(e,a),c=m0(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||p0(l)===p0(c)?(t[a]=Math.max(Mt(h0(l),h0(c),i),0),(yi.test(c)||yi.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Mt(e.rotate||0,n.rotate||0,i))}function m0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const ib=cS(0,.5,Ly),rb=cS(.5,.95,Pt);function cS(t,e,n){return i=>i<t?0:i>e?1:n(Ta(t,e,i))}function g0(t,e){t.min=e.min,t.max=e.max}function Fn(t,e){g0(t.x,e.x),g0(t.y,e.y)}function v0(t,e,n,i,r){return t-=e,t=Ic(t,1/n,i),r!==void 0&&(t=Ic(t,1/r,i)),t}function sb(t,e=0,n=1,i=.5,r,s=t,o=t){if(yi.test(e)&&(e=parseFloat(e),e=Mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Mt(s.min,s.max,i);t===s&&(a-=e),t.min=v0(t.min,e,n,a,r),t.max=v0(t.max,e,n,a,r)}function x0(t,e,[n,i,r],s,o){sb(t,e[n],e[i],e[r],e.scale,s,o)}const ob=["x","scaleX","originX"],ab=["y","scaleY","originY"];function _0(t,e,n,i){x0(t.x,e,ob,n?n.x:void 0,i?i.x:void 0),x0(t.y,e,ab,n?n.y:void 0,i?i.y:void 0)}function y0(t){return t.translate===0&&t.scale===1}function uS(t){return y0(t.x)&&y0(t.y)}function lb(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function fS(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function S0(t){return Dn(t.x)/Dn(t.y)}class cb{constructor(){this.members=[]}add(e){$p(this.members,e),e.scheduleRender()}remove(e){if(Kp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function M0(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:c,rotateY:f}=n;l&&(i+=`rotate(${l}deg) `),c&&(i+=`rotateX(${c}deg) `),f&&(i+=`rotateY(${f}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const ub=(t,e)=>t.depth-e.depth;class fb{constructor(){this.children=[],this.isDirty=!1}add(e){$p(this.children,e),this.isDirty=!0}remove(e){Kp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ub),this.isDirty=!1,this.children.forEach(e)}}function db(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Yi(i),t(s-e))};return ht.read(i,!0),()=>Yi(i)}function hb(t){window.MotionDebug&&window.MotionDebug.record(t)}function pb(t){return t instanceof SVGElement&&t.tagName!=="svg"}function mb(t,e,n){const i=En(t)?t:uo(t);return i.start(qp("",i,e,n)),i.animation}const E0=["","X","Y","Z"],gb={visibility:"hidden"},T0=1e3;let vb=0;const Gr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function dS({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=vb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Gr.totalNodes=Gr.resolvedTargetDeltas=Gr.recalculatedProjection=0,this.nodes.forEach(yb),this.nodes.forEach(wb),this.nodes.forEach(Ab),this.nodes.forEach(Sb),hb(Gr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new fb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Zp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=pb(o),this.instance=o;const{layoutId:l,layout:c,visualElement:f}=this.options;if(f&&!f.current&&f.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const u=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=db(u,250),Kl.hasAnimatedSinceResize&&(Kl.hasAnimatedSinceResize=!1,this.nodes.forEach(A0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&f&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:u,hasRelativeTargetChanged:h,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||f.getDefaultTransition()||Lb,{onLayoutAnimationStart:g,onLayoutAnimationComplete:p}=f.getProps(),v=!this.targetLayout||!fS(this.targetLayout,m)||h,y=!u&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||u&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,y);const S={...Yp(_,"layout"),onPlay:g,onComplete:p};(f.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else u||A0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Yi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const d=this.path[f];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(w0);return}this.isUpdating||this.nodes.forEach(Eb),this.isUpdating=!1,this.nodes.forEach(Tb),this.nodes.forEach(xb),this.nodes.forEach(_b),this.clearAllSnapshots();const a=performance.now();tn.delta=br(0,1e3/60,a-tn.timestamp),tn.timestamp=a,tn.isProcessing=!0,Xu.update.process(tn),Xu.preRender.process(tn),Xu.render.process(tn),tn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(Mb),this.sharedNodes.forEach(Cb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=It(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!uS(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&(a||Hr(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Db(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return It();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(cr(a.x,l.offset.x),cr(a.y,l.offset.y)),a}removeElementScroll(o){const a=It();Fn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l],{scroll:f,options:d}=c;if(c!==this.root&&f&&d.layoutScroll){if(f.isRoot){Fn(a,o);const{scroll:u}=this.root;u&&(cr(a.x,-u.offset.x),cr(a.y,-u.offset.y))}cr(a.x,f.offset.x),cr(a.y,f.offset.y)}}return a}applyTransform(o,a=!1){const l=It();Fn(l,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&Ys(l,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Hr(f.latestValues)&&Ys(l,f.latestValues)}return Hr(this.latestValues)&&Ys(l,this.latestValues),l}removeTransform(o){const a=It();Fn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Hr(c.latestValues))continue;Vd(c.latestValues)&&c.updateSnapshot();const f=It(),d=c.measurePageBox();Fn(f,d),_0(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,f)}return Hr(this.latestValues)&&_0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:d,layoutId:u}=this.options;if(!(!this.layout||!(d||u))){if(this.resolvedRelativeTargetAt=tn.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=It(),this.relativeTargetOrigin=It(),ia(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),Fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=It(),this.targetWithTransforms=It()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),NA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Fn(this.target,this.layout.layoutBox),rS(this.target,this.targetDelta)):Fn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=It(),this.relativeTargetOrigin=It(),ia(this.relativeTargetOrigin,this.target,h.target),Fn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Gr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Vd(this.parent.latestValues)||iS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===tn.timestamp&&(c=!1),c)return;const{layout:f,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||d))return;Fn(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,h=this.treeScale.y;HA(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox);const{target:m}=a;if(!m){this.projectionTransform&&(this.projectionDelta=js(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=js(),this.projectionDeltaWithTransform=js());const _=this.projectionTransform;na(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=M0(this.projectionDelta,this.treeScale),(this.projectionTransform!==_||this.treeScale.x!==u||this.treeScale.y!==h)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Gr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},f={...this.latestValues},d=js();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const u=It(),h=l?l.source:void 0,m=this.layout?this.layout.source:void 0,_=h!==m,g=this.getStack(),p=!g||g.members.length<=1,v=!!(_&&!p&&this.options.crossfade===!0&&!this.path.some(Pb));this.animationProgress=0;let y;this.mixTargetDelta=S=>{const T=S/1e3;b0(d.x,o.x,T),b0(d.y,o.y,T),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ia(u,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Rb(this.relativeTarget,this.relativeTargetOrigin,u,T),y&&lb(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=It()),Fn(y,this.relativeTarget)),_&&(this.animationValues=f,nb(f,c,this.latestValues,T,v,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Yi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ht.update(()=>{Kl.hasAnimatedSinceResize=!0,this.currentAnimation=mb(0,T0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(T0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:f}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&hS(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||It();const d=Dn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const u=Dn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+u}Fn(a,l),Ys(a,f),na(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new cb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const c={};for(let f=0;f<E0.length;f++){const d="rotate"+E0[f];l[d]&&(c[d]=l[d],o.setStaticValue(d,0))}o.render();for(const f in c)o.setStaticValue(f,c[f]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return gb;const c={visibility:""},f=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=$l(o==null?void 0:o.pointerEvents)||"",c.transform=f?f(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=$l(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Hr(this.latestValues)&&(_.transform=f?f({},""):"none",this.hasProjected=!1),_}const u=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=M0(this.projectionDeltaWithTransform,this.treeScale,u),f&&(c.transform=f(u,c.transform));const{x:h,y:m}=this.projectionDelta;c.transformOrigin=`${h.origin*100}% ${m.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=u.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:c.opacity=d===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const _ in bc){if(u[_]===void 0)continue;const{correct:g,applyTo:p}=bc[_],v=c.transform==="none"?u[_]:g(u[_],d);if(p){const y=p.length;for(let S=0;S<y;S++)c[p[S]]=v}else c[_]=v}return this.options.layoutId&&(c.pointerEvents=d===this?$l(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(w0),this.root.sharedNodes.clear()}}}function xb(t){t.updateLayout()}function _b(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?kn(d=>{const u=o?n.measuredBox[d]:n.layoutBox[d],h=Dn(u);u.min=i[d].min,u.max=u.min+h}):hS(s,n.layoutBox,i)&&kn(d=>{const u=o?n.measuredBox[d]:n.layoutBox[d],h=Dn(i[d]);u.max=u.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+h)});const a=js();na(a,i,n.layoutBox);const l=js();o?na(l,t.applyTransform(r,!0),n.measuredBox):na(l,i,n.layoutBox);const c=!uS(a);let f=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:u,layout:h}=d;if(u&&h){const m=It();ia(m,n.layoutBox,u.layoutBox);const _=It();ia(_,i,h.layoutBox),fS(m,_)||(f=!0),d.options.layoutRoot&&(t.relativeTarget=_,t.relativeTargetOrigin=m,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function yb(t){Gr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Sb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Mb(t){t.clearSnapshot()}function w0(t){t.clearMeasurements()}function Eb(t){t.isLayoutDirty=!1}function Tb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function A0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function wb(t){t.resolveTargetDelta()}function Ab(t){t.calcProjection()}function bb(t){t.resetRotation()}function Cb(t){t.removeLeadSnapshot()}function b0(t,e,n){t.translate=Mt(e.translate,0,n),t.scale=Mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function C0(t,e,n,i){t.min=Mt(e.min,n.min,i),t.max=Mt(e.max,n.max,i)}function Rb(t,e,n,i){C0(t.x,e.x,n.x,i),C0(t.y,e.y,n.y,i)}function Pb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Lb={duration:.45,ease:[.4,0,.1,1]},R0=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),P0=R0("applewebkit/")&&!R0("chrome/")?Math.round:Pt;function L0(t){t.min=P0(t.min),t.max=P0(t.max)}function Db(t){L0(t.x),L0(t.y)}function hS(t,e,n){return t==="position"||t==="preserve-aspect"&&!kd(S0(e),S0(n),.2)}const Nb=dS({attachResizeListener:(t,e)=>Ui(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),nf={current:void 0},pS=dS({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!nf.current){const t=new Nb({});t.mount(window),t.setOptions({layoutScroll:!0}),nf.current=t}return nf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Ib={pan:{Feature:KA},drag:{Feature:$A,ProjectionNode:pS,MeasureLayout:aS}},Ub=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Fb(t){const e=Ub.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function Hd(t,e,n=1){const[i,r]=Fb(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Ky(o)?parseFloat(o):o}else return Ld(r)?Hd(r,e,n+1):r}function Ob(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!Ld(s))return;const o=Hd(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!Ld(s))continue;const o=Hd(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const kb=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),mS=t=>kb.has(t),Bb=t=>Object.keys(t).some(mS),D0=t=>t===ds||t===Oe,N0=(t,e)=>parseFloat(t.split(", ")[e]),I0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return N0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?N0(s[1],t):0}},Vb=new Set(["x","y","z"]),zb=Fa.filter(t=>!Vb.has(t));function Hb(t){const e=[];return zb.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const fo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:I0(4,13),y:I0(5,14)};fo.translateX=fo.x;fo.translateY=fo.y;const Gb=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(c=>{a[c]=fo[c](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(c=>{const f=e.getValue(c);f&&f.jump(a[c]),t[c]=fo[c](l,s)}),t},Wb=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(mS);let s=[],o=!1;const a=[];if(r.forEach(l=>{const c=t.getValue(l);if(!t.hasValue(l))return;let f=n[l],d=Co(f);const u=e[l];let h;if(Rc(u)){const m=u.length,_=u[0]===null?1:0;f=u[_],d=Co(f);for(let g=_;g<m&&u[g]!==null;g++)h?Hp(Co(u[g])===h):h=Co(u[g])}else h=Co(u);if(d!==h)if(D0(d)&&D0(h)){const m=c.get();typeof m=="string"&&c.set(parseFloat(m)),typeof u=="string"?e[l]=parseFloat(u):Array.isArray(u)&&h===Oe&&(e[l]=u.map(parseFloat))}else d!=null&&d.transform&&(h!=null&&h.transform)&&(f===0||u===0)?f===0?c.set(h.transform(f)):e[l]=d.transform(u):(o||(s=Hb(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],c.jump(u))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,c=Gb(e,t,a);return s.length&&s.forEach(([f,d])=>{t.getValue(f).set(d)}),t.render(),ou&&l!==null&&window.scrollTo({top:l}),{target:c,transitionEnd:i}}else return{target:e,transitionEnd:i}};function Xb(t,e,n,i){return Bb(e)?Wb(t,e,n,i):{target:e,transitionEnd:i}}const jb=(t,e,n,i)=>{const r=Ob(t,e,i);return e=r.target,i=r.transitionEnd,Xb(t,e,n,i)},Gd={current:null},gS={current:!1};function Yb(){if(gS.current=!0,!!ou)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Gd.current=t.matches;t.addListener(e),e()}else Gd.current=!1}function qb(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(En(s))t.addValue(r,s),Nc(i)&&i.add(r);else if(En(o))t.addValue(r,uo(s,{owner:t})),Nc(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,uo(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const U0=new WeakMap,vS=Object.keys(Ea),$b=vS.length,F0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Kb=Np.length;class Zb{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ht.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=lu(n),this.isVariantNode=ty(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...f}=this.scrapeMotionValuesFromProps(n,{});for(const d in f){const u=f[d];a[d]!==void 0&&En(u)&&(u.set(a[d],!1),Nc(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,U0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),gS.current||Yb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Gd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){U0.delete(this.current),this.projection&&this.projection.unmount(),Yi(this.notifyUpdate),Yi(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=fs.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&ht.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s){let o,a;for(let l=0;l<$b;l++){const c=vS[l],{isEnabled:f,Feature:d,ProjectionNode:u,MeasureLayout:h}=Ea[c];u&&(o=u),f(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),h&&(a=h))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:c,drag:f,dragConstraints:d,layoutScroll:u,layoutRoot:h}=n;this.projection.setOptions({layoutId:l,layout:c,alwaysMeasureLayout:!!f||d&&Ws(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:s,layoutScroll:u,layoutRoot:h})}return a}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):It()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<F0.length;i++){const r=F0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=qb(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<Kb;i++){const r=Np[i],s=this.props[r];(Ma(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=uo(n,{owner:this}),this.addValue(e,i)),i}readValue(e){var n;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(n=this.getBaseTargetFromProps(this.props,e))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=zp(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!En(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Zp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class xS extends Zb{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let o=pA(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),s){dA(this,i,o);const a=jb(this,i,o,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function Qb(t){return window.getComputedStyle(t)}class Jb extends xS{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,n){if(fs.has(n)){const i=jp(n);return i&&i.default||0}else{const i=Qb(e),r=(sy(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return sS(e,n)}build(e,n,i,r){Fp(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return Vp(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;En(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){fy(e,n,i,r)}}class eC extends xS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(fs.has(n)){const i=jp(n);return i&&i.default||0}return n=dy.has(n)?n:Lp(n),e.getAttribute(n)}measureInstanceViewportBox(){return It()}scrapeMotionValuesFromProps(e,n){return py(e,n)}build(e,n,i,r){kp(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){hy(e,n,i,r)}mount(e){this.isSVGTag=Bp(e.tagName),super.mount(e)}}const tC=(t,e)=>Up(t)?new eC(e,{enableHardwareAcceleration:!1}):new Jb(e,{enableHardwareAcceleration:!0}),nC={layout:{ProjectionNode:pS,MeasureLayout:aS}},iC={...RA,...$T,...Ib,...nC},Ht=rT((t,e)=>FT(t,e,iC,tC));function _S(){const t=re.useRef(!1);return Pp(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function rC(){const t=_S(),[e,n]=re.useState(0),i=re.useCallback(()=>{t.current&&n(e+1)},[e]);return[re.useCallback(()=>ht.postRender(i),[i]),e]}class sC extends re.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function oC({children:t,isPresent:e}){const n=re.useId(),i=re.useRef(null),r=re.useRef({width:0,height:0,top:0,left:0});return re.useInsertionEffect(()=>{const{width:s,height:o,top:a,left:l}=r.current;if(e||!i.current||!s||!o)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),re.createElement(sC,{isPresent:e,childRef:i,sizeRef:r},re.cloneElement(t,{ref:i}))}const rf=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=my(aC),l=re.useId(),c=re.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:f=>{a.set(f,!0);for(const d of a.values())if(!d)return;i&&i()},register:f=>(a.set(f,!1),()=>a.delete(f))}),s?void 0:[n]);return re.useMemo(()=>{a.forEach((f,d)=>a.set(d,!1))},[n]),re.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=re.createElement(oC,{isPresent:n},t)),re.createElement(su.Provider,{value:c},t)};function aC(){return new Map}function lC(t){return re.useEffect(()=>()=>t(),[])}const Wr=t=>t.key||"";function cC(t,e){t.forEach(n=>{const i=Wr(n);e.set(i,n)})}function uC(t){const e=[];return re.Children.forEach(t,n=>{re.isValidElement(n)&&e.push(n)}),e}const fC=({children:t,custom:e,initial:n=!0,onExitComplete:i,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=re.useContext(Ip).forceRender||rC()[0],l=_S(),c=uC(t);let f=c;const d=re.useRef(new Map).current,u=re.useRef(f),h=re.useRef(new Map).current,m=re.useRef(!0);if(Pp(()=>{m.current=!1,cC(c,h),u.current=f}),lC(()=>{m.current=!0,h.clear(),d.clear()}),m.current)return re.createElement(re.Fragment,null,f.map(v=>re.createElement(rf,{key:Wr(v),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},v)));f=[...f];const _=u.current.map(Wr),g=c.map(Wr),p=_.length;for(let v=0;v<p;v++){const y=_[v];g.indexOf(y)===-1&&!d.has(y)&&d.set(y,void 0)}return o==="wait"&&d.size&&(f=[]),d.forEach((v,y)=>{if(g.indexOf(y)!==-1)return;const S=h.get(y);if(!S)return;const T=_.indexOf(y);let w=v;if(!w){const b=()=>{d.delete(y);const x=Array.from(h.keys()).filter(A=>!g.includes(A));if(x.forEach(A=>h.delete(A)),u.current=c.filter(A=>{const R=Wr(A);return R===y||x.includes(R)}),!d.size){if(l.current===!1)return;a(),i&&i()}};w=re.createElement(rf,{key:Wr(S),isPresent:!1,onExitComplete:b,custom:e,presenceAffectsLayout:s,mode:o},S),d.set(y,w)}f.splice(T,0,w)}),f=f.map(v=>{const y=v.key;return d.has(y)?v:re.createElement(rf,{key:Wr(v),isPresent:!0,presenceAffectsLayout:s,mode:o},v)}),re.createElement(re.Fragment,null,d.size?f:f.map(v=>re.cloneElement(v)))};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),O0=t=>{const e=hC(t);return e.charAt(0).toUpperCase()+e.slice(1)},yS=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=re.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>re.createElement("svg",{ref:l,...pC,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:yS("lucide",r),...a},[...o.map(([c,f])=>re.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(t,e)=>{const n=re.forwardRef(({className:i,...r},s)=>re.createElement(mC,{ref:s,iconNode:e,className:yS(`lucide-${dC(O0(t))}`,`lucide-${t}`,i),...r}));return n.displayName=O0(t),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],vC=tt("award",gC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],_C=tt("chevron-down",xC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],SC=tt("chevron-right",yC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],EC=tt("circle-check-big",MC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],wC=tt("cpu",TC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],bC=tt("database",AC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],RC=tt("external-link",CC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],LC=tt("eye",PC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],NC=tt("file-text",DC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],UC=tt("fingerprint",IC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],SS=tt("globe",FC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],Wd=tt("instagram",OC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],MS=tt("key",kC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],VC=tt("lock-open",BC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],ES=tt("lock",zC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Xd=tt("mail",HC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],WC=tt("menu",GC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],jC=tt("message-square",XC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],TS=tt("network",YC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],$C=tt("radio",qC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],k0=tt("send",KC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],QC=tt("server",ZC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],wS=tt("shield-check",JC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eR=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],wa=tt("shield",eR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tR=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],nR=tt("smartphone",tR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],rR=tt("sparkles",iR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sR=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Qp=tt("terminal",sR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aR=tt("triangle-alert",oR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],B0=tt("twitter",lR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],uR=tt("wifi-off",cR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],AS=tt("wifi",fR);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bS=tt("x",dR),hR="/portfolio/assets/profile-Gs1-NbMH.jpg",pR={profile:{name:"Vishesh Ranjan",role:"Ethical Hacker & Security Specialist",tagline:"Building tools to break systems — so others can't. Offensive security research, red team operations & network defense.",statusBadge:"Timeline Active · Available for Engagements",stats:[{value:"18+",label:"Projects"},{value:"5+",label:"Certs"},{value:"3+",label:"Yrs Exp"}],socials:{twitter:"https://x.com/MORNINGSTAR0213",instagram:"https://instagram.com/morningstar0213",telegram:"https://t.me/morningstar_0213",email:"mailto:visheshranjan0213@gmail.com"}},certifications:[{id:"oscp",name:"OSCP",full:"Offensive Security Certified Professional",org:"OffSec",year:"2026",badgeColor:"from-emerald-500 to-teal-600",desc:"Hands-on penetration testing certification. 24-hour practical exam in a live vulnerable lab environment."},{id:"ccie",name:"CCIE",full:"CCIE Security / Enterprise",org:"Cisco",year:"2026",badgeColor:"from-teal-500 to-cyan-600",desc:"Expert-level network security certification. One of the most respected technical credentials worldwide."},{id:"ejpt",name:"eJPT",full:"eLearnSecurity Junior Penetration Tester",org:"INE Security",year:"2026",badgeColor:"from-emerald-400 to-green-600",desc:"Practical entry-level penetration testing certification with real-world simulated environments."},{id:"cyberops",name:"CyberOps",full:"Cisco Certified CyberOps Associate",org:"Cisco",year:"2025",badgeColor:"from-cyan-500 to-blue-600",desc:"SOC analyst skills — threat detection, incident response, and security monitoring operations."},{id:"ceh",name:"CEH",full:"Cisco Networking Academy Ethical Hacker",org:"Cisco",year:"2025",badgeColor:"from-teal-400 to-emerald-600",desc:"Industry-recognized ethical hacking methodology covering attack vectors and countermeasures."}],domains:[{title:"Penetration Testing",desc:"Full-scope network and application pentests using industry-standard methodologies.",tools:["Metasploit","Burp Suite","Nmap"]},{title:"Wireless Security",desc:"WPA/WPA2 auditing, evil twin attacks, EAPOL handshake analysis and deauth testing.",tools:["Aircrack-ng","Wireshark","Reaver"]},{title:"Web App Security",desc:"OWASP Top 10 exploitation — SQL injection, XSS, SSRF, and API security testing.",tools:["SQLMap","Nikto","ZAP"]},{title:"Cryptography",desc:"Designing and breaking encryption systems — AES-256, RSA, Diffie-Hellman and beyond.",tools:["OpenSSL","PyCrypto","Hashcat"]},{title:"Red Team Ops",desc:"Adversary simulation with C2 infrastructure, persistence, and lateral movement.",tools:["Cobalt Strike","Sliver","Empire"]},{title:"Malware Analysis",desc:"Static and dynamic analysis of malicious binaries, shellcode, and packed executables.",tools:["Ghidra","IDA Pro","x64dbg"]},{title:"OSINT & Recon",desc:"Comprehensive target intelligence gathering using open source data and tooling.",tools:["TheHarvester","Shodan","Maltego"]},{title:"Network Defense",desc:"IDS/IPS tuning, firewall hardening, traffic analysis and SOC incident response.",tools:["Snort","Zeek","Suricata"]}],arsenal:["Kali Linux","Parrot OS","Metasploit","Burp Suite Pro","Wireshark","Nmap","SQLMap","Hashcat","John the Ripper","Aircrack-ng","Ghidra","IDA Pro","Pwntools","Scapy","BloodHound","Responder","Impacket","CrackMapExec"],projects:[{id:1,title:"GoodFellas",category:"Secure Messaging",tagline:"More secure than Telegram",featured:!0,description:"An ultra-secure encrypted messaging platform with complete darknet anonymity and zero metadata retention.",highlights:["All traffic routed through Tor darknet for total IP anonymization","End-to-end encryption using AES-256 with perfect forward secrecy","Zero-knowledge architecture — even server admins cannot read messages","Decentralized node network preventing single points of failure","Ephemeral messaging with automated self-destruct timer","No metadata logging — IPs, timestamps, and identities completely omitted"],tech:["Tor Network","AES-256","Python","WebRTC","P2P","Zero-Knowledge"]},{id:2,title:"Phishing Framework",category:"Social Engineering",description:"Advanced phishing page generator for authorized security awareness training.",highlights:["Dynamic page cloning","HTTPS support with SSL","Real-time credential dashboard","Email template engine","Campaign tracking"],tech:["PHP","JavaScript","Let's Encrypt","SMTP"]},{id:3,title:"Network Jammer",category:"Wireless Security",description:"WiFi deauthentication and network disruption testing tool.",highlights:["Automated deauthentication attacks","Multi-protocol support (802.11 a/b/g/n/ac)","Selective client disconnection","Channel hopping"],tech:["Python","Scapy","Aircrack-ng","Packet Injection"]},{id:4,title:"Android RAT Suite",category:"Mobile Security",description:"Remote administration toolkit for Android security audits and penetration testing.",highlights:["Camera/mic/location surveillance","Keylogger & credential harvesting","SMS/call log extraction","Screen recording"],tech:["Java","Android SDK","WebSocket","ADB"]},{id:5,title:"Multi-Protocol Bruteforcer",category:"Password Attacks",description:"High-performance authentication test and password attack framework.",highlights:["SSH/FTP/HTTP/RDP/SMTP support","Multi-threaded architecture","Dictionary + rule mutations","Proxy rotation & bypass"],tech:["Python","Hydra","Threading","Socket Programming"]},{id:6,title:"Advanced Keylogger",category:"Surveillance & Audit",description:"Stealthy keystroke logging and monitoring system for security research.",highlights:["Kernel-level hook implementation","Clipboard & screenshot capture","Encrypted C2 transmission","Anti-debugging mechanisms"],tech:["C++","Windows API","AES Encryption","Registry"]},{id:7,title:"Message Encryptor",category:"Cryptography",description:"Military-grade encryption utility for secure data communications.",highlights:["AES-256, RSA-4096, ChaCha20 support","PKI key generation","PBKDF2 key derivation","File encryption + LZMA compression"],tech:["Python","PyCrypto","OpenSSL","AES-256"]},{id:8,title:"Web App Scanner",category:"Web Security",description:"Automated vulnerability scanner for web applications and REST APIs.",highlights:["OWASP Top 10 detection","SQL injection payloads","XSS detection (stored/DOM/reflected)","Automated crawling with JS execution"],tech:["Python","Selenium","BeautifulSoup","SQLMap"]},{id:9,title:"SQL Injection Toolkit",category:"Exploitation",description:"Advanced SQL injection discovery and data extraction framework.",highlights:["Boolean/time-based blind injection","Union-based extraction","WAF evasion tampers","Automated database schema dump"],tech:["Python","SQLAlchemy","Regex","Payload Crafting"]},{id:10,title:"Port & Service Scanner",category:"Network Recon",description:"Blazing fast asynchronous port scanner and service banner grabber.",highlights:["Async TCP SYN/Connect scanning","OS & service fingerprinting","NSE script equivalent checks","Subnet discovery with ARP"],tech:["Python","Asyncio","Raw Sockets","Scapy"]},{id:11,title:"Packet Sniffer & Analyzer",category:"Network Analysis",description:"Deep packet inspection and protocol decoding utility.",highlights:["Promiscuous mode capture","PCAP export and live dissection","DNS/HTTP cleartext analysis","Custom protocol parsers"],tech:["Python","Scapy","PyShark","Network Interfaces"]},{id:12,title:"Vulnerability Scanner",category:"Vulnerability Assessment",description:"Network-wide vulnerability identification and CVE matching engine.",highlights:["NVD / CVE API integration","Service version matching","Exploit-DB correlation","Automated HTML audit reports"],tech:["Python","REST API","NVD Feed","ReportLab"]},{id:13,title:"Digital Forensics Toolkit",category:"Incident Response",description:"Artifact extraction and memory forensics tool for post-incident audits.",highlights:["RAM dump parsing","Deleted file carving","Event log correlation","Browser history & registry analysis"],tech:["Python","Volatility","YARA","SQLite"]},{id:14,title:"Password Hash Cracker",category:"Password Auditing",description:"Multi-algorithm offline hash cracking engine with dictionary mutation.",highlights:["MD5/SHA-1/SHA-256/NTLM support","Rule-based password mutation","Markov chain attack mode","Wordlist generator utility"],tech:["Python","Hashlib","Multiprocessing","C Extensions"]},{id:15,title:"Steganography Tool",category:"Data Hiding",description:"Carrier-grade image steganography and secret payload extraction.",highlights:["LSB (Least Significant Bit) encoding","AES payload pre-encryption","Multi-format support (PNG/BMP/WAV)","Statistical steganalysis resistance"],tech:["Python","Pillow","NumPy","Cryptography"]},{id:16,title:"ARP Spoofer & Poisoner",category:"Network Attacks",description:"Targeted ARP cache poisoning utility for authorized traffic auditing.",highlights:["Bidirectional ARP poisoning","Automatic gateway recovery on exit","IP forwarding management","Passive host detection"],tech:["Python","Scapy","Linux Networking","Raw Sockets"]},{id:17,title:"MITM Proxy Framework",category:"Traffic Interception",description:"Man-in-the-middle attack framework for local network auditing.",highlights:["ARP cache poisoning","SSL stripping module","DNS spoofing redirect","Session hijacking dashboard"],tech:["Python","Scapy","Ettercap","SSLStrip"]},{id:18,title:"WPA/WPA2 Audit Tool",category:"Wireless Security",description:"Wireless security testing suite for key recovery and handshake analysis.",highlights:["4-way EAPOL handshake capture","GPU-accelerated cracking","WPS PIN vulnerability detection","PMKID attack implementation"],tech:["Python","Aircrack-ng","Hashcat","Reaver"]}],contacts:[{label:"Twitter / X",handle:"@MORNINGSTAR0213",sub:"Follow for security research & operational updates",href:"https://x.com/MORNINGSTAR0213",badge:"OFFENSIVE INTEL"},{label:"Instagram",handle:"@morningstar0213",sub:"DM for project code access, collaboration & consulting",href:"https://instagram.com/morningstar0213",badge:"CODE REPO ACCESS"},{label:"Telegram",handle:"@morningstar_0213",sub:"Direct encrypted communication & consultations",href:"https://t.me/morningstar_0213",badge:"ENCRYPTED DIRECT"},{label:"Email",handle:"visheshranjan0213@gmail.com",sub:"For penetration tests, engagements & professional audits",href:"mailto:visheshranjan0213@gmail.com",badge:"ENTERPRISE INQUIRY"}]};function mR(){return L.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 overflow-hidden","aria-hidden":"true",children:[L.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse 90% 70% at 50% 30%, #031c0c 0%, #011206 50%, #000703 100%)"}}),L.jsx(Ht.div,{animate:{rotate:360},transition:{duration:140,repeat:1/0,ease:"linear"},className:"absolute -top-32 -left-32 w-[520px] h-[520px] opacity-35 pointer-events-none",style:{background:"radial-gradient(circle, rgba(204,255,0,0.45) 0%, rgba(0,255,136,0.25) 30%, rgba(2,44,18,0.1) 60%, transparent 75%)",filter:"blur(30px)",willChange:"transform",transform:"translateZ(0)"}}),L.jsx(Ht.div,{animate:{rotate:-360},transition:{duration:180,repeat:1/0,ease:"linear"},className:"absolute top-[35%] -right-28 w-[600px] h-[600px] opacity-40 pointer-events-none",style:{background:"radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(204,255,0,0.5) 20%, rgba(0,255,136,0.3) 45%, rgba(0,40,15,0.1) 65%, transparent 80%)",filter:"blur(35px)",willChange:"transform",transform:"translateZ(0)"}}),L.jsx(Ht.div,{animate:{rotate:360},transition:{duration:200,repeat:1/0,ease:"linear"},className:"absolute top-[70%] -left-32 w-[550px] h-[550px] opacity-30 pointer-events-none",style:{background:"radial-gradient(circle, rgba(204,255,0,0.5) 0%, rgba(0,255,136,0.3) 35%, transparent 70%)",filter:"blur(40px)",willChange:"transform",transform:"translateZ(0)"}}),L.jsx("div",{className:"absolute inset-0 opacity-[0.035]",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`}})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="186",gR=0,V0=1,vR=2,Zl=1,xR=2,Ho=3,ss=0,Mn=1,Di=2,Vi=0,ra=1,jd=2,z0=3,H0=4,_R=5,Ls=100,yR=101,SR=102,MR=103,ER=104,TR=200,wR=201,AR=202,bR=203,CS=204,RS=205,CR=206,RR=207,PR=208,LR=209,DR=210,NR=211,IR=212,UR=213,FR=214,Yd=0,qd=1,$d=2,Aa=3,Kd=4,Zd=5,Qd=6,Jd=7,PS=0,OR=1,kR=2,Si=0,LS=1,DS=2,NS=3,IS=4,US=5,FS=6,OS=7,kS=300,os=301,ho=302,sf=303,of=304,du=306,eh=1e3,Fi=1001,th=1002,jt=1003,BR=1004,hl=1005,rn=1006,af=1007,$r=1008,Cn=1009,BS=1010,VS=1011,ba=1012,em=1013,Mi=1014,gi=1015,Ei=1016,tm=1017,nm=1018,Ca=1020,zS=35902,HS=35899,GS=1021,WS=1022,ti=1023,qi=1026,Kr=1027,XS=1028,im=1029,as=1030,rm=1031,sm=1033,Ql=33776,Jl=33777,ec=33778,tc=33779,nh=35840,ih=35841,rh=35842,sh=35843,oh=36196,ah=37492,lh=37496,ch=37488,uh=37489,Uc=37490,fh=37491,dh=37808,hh=37809,ph=37810,mh=37811,gh=37812,vh=37813,xh=37814,_h=37815,yh=37816,Sh=37817,Mh=37818,Eh=37819,Th=37820,wh=37821,Ah=36492,bh=36494,Ch=36495,Rh=36283,Ph=36284,Fc=36285,Lh=36286,VR=3200,G0=0,zR=1,hr="",Bn="srgb",Oc="srgb-linear",kc="linear",ot="srgb",lf=7680,HR=519,GR=512,WR=513,XR=514,om=515,jR=516,YR=517,am=518,qR=519,$R=35044,W0="300 es",vi=2e3,Ra=2001;function KR(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZR(){const t=Bc("canvas");return t.style.display="block",t}const X0={};function j0(...t){const e="THREE."+t.shift();console.log(e,...t)}function jS(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ke(...t){t=jS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function et(...t){t=jS(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function to(...t){const e=t.join(" ");e in X0||(X0[e]=!0,ke(...t))}function QR(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const JR={[Yd]:qd,[$d]:Qd,[Kd]:Jd,[Aa]:Zd,[qd]:Yd,[Qd]:$d,[Jd]:Kd,[Zd]:Aa};class hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cf=Math.PI/180,Dh=180/Math.PI;function Va(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function eP(t,e){return(t%e+e)%e}function uf(t,e,n){return(1-n)*t+n*e}function Po(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const um=class um{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};um.prototype.isVector2=!0;let Je=um;class xo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3],u=s[o+0],h=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==h||f!==m){let g=l*u+c*h+f*m+d*_;g<0&&(u=-u,h=-h,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);p=Math.sin(p*v)/y,a=Math.sin(a*v)/y,l=l*p+u*a,c=c*p+h*a,f=f*p+m*a,d=d*p+_*a}else{l=l*p+u*a,c=c*p+h*a,f=f*p+m*a,d=d*p+_*a;const v=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=v,c*=v,f*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],u=s[o+1],h=s[o+2],m=s[o+3];return e[n]=a*m+f*d+l*h-c*u,e[n+1]=l*m+f*u+c*d-a*h,e[n+2]=c*m+f*h+a*u-l*d,e[n+3]=f*m-a*d-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),u=l(i/2),h=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=u*f*d+c*h*m,this._y=c*h*d-u*f*m,this._z=c*f*m+u*h*d,this._w=c*f*d-u*h*m;break;case"YXZ":this._x=u*f*d+c*h*m,this._y=c*h*d-u*f*m,this._z=c*f*m-u*h*d,this._w=c*f*d+u*h*m;break;case"ZXY":this._x=u*f*d-c*h*m,this._y=c*h*d+u*f*m,this._z=c*f*m+u*h*d,this._w=c*f*d-u*h*m;break;case"ZYX":this._x=u*f*d-c*h*m,this._y=c*h*d+u*f*m,this._z=c*f*m-u*h*d,this._w=c*f*d+u*h*m;break;case"YZX":this._x=u*f*d+c*h*m,this._y=c*h*d+u*f*m,this._z=c*f*m-u*h*d,this._w=c*f*d-u*h*m;break;case"XZY":this._x=u*f*d-c*h*m,this._y=c*h*d-u*f*m,this._z=c*f*m+u*h*d,this._w=c*f*d+u*h*m;break;default:ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],u=i+a+d;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(f-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fm=class fm{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Y0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Y0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fm.prototype.isVector3=!0;let $=fm;const ff=new $,Y0=new xo,dm=class dm{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],u=i[2],h=i[5],m=i[8],_=r[0],g=r[3],p=r[6],v=r[1],y=r[4],S=r[7],T=r[2],w=r[5],b=r[8];return s[0]=o*_+a*v+l*T,s[3]=o*g+a*y+l*w,s[6]=o*p+a*S+l*b,s[1]=c*_+f*v+d*T,s[4]=c*g+f*y+d*w,s[7]=c*p+f*S+d*b,s[2]=u*_+h*v+m*T,s[5]=u*g+h*y+m*w,s[8]=u*p+h*S+m*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,u=a*l-f*s,h=c*s-o*l,m=n*d+i*u+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=d*_,e[1]=(r*c-f*i)*_,e[2]=(a*i-r*o)*_,e[3]=u*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return to("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(df.makeScale(e,n)),this}rotate(e){return to("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(df.makeRotation(-e)),this}translate(e,n){return to("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(df.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dm.prototype.isMatrix3=!0;let Be=dm;const df=new Be,q0=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$0=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tP(){const t={enabled:!0,workingColorSpace:Oc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=no(r.r),r.g=no(r.g),r.b=no(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hr?kc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return to("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return to("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Oc]:{primaries:e,whitePoint:i,transfer:kc,toXYZ:q0,fromXYZ:$0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:q0,fromXYZ:$0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const qe=tP();function zi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function no(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vs;class nP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=Bc("canvas")),vs.width=e.width,vs.height=e.height;const r=vs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zi(n[i]/255)*255):n[i]=zi(n[i]);return{data:n,width:e.width,height:e.height}}else return ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iP=0;class lm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:iP++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hf(r[o].image)):s.push(hf(r[o]))}else s=hf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function hf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?nP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ke("Texture: Unable to serialize Texture."),{})}let rP=0;const pf=new $;class fn extends hs{constructor(e=fn.DEFAULT_IMAGE,n=fn.DEFAULT_MAPPING,i=Fi,r=Fi,s=rn,o=$r,a=ti,l=Cn,c=fn.DEFAULT_ANISOTROPY,f=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rP++}),this.uuid=Va(),this.name="",this.source=new lm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pf).x}get height(){return this.source.getSize(pf).y}get depth(){return this.source.getSize(pf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ke(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eh:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eh:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=kS;fn.DEFAULT_ANISOTROPY=1;const hm=class hm{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],u=l[1],h=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(f-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,S=(h+1)/2,T=(p+1)/2,w=(f+u)/4,b=(d+_)/4,x=(m+g)/4;return y>S&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=b/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=b/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(u-f)*(u-f));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(u-f)/v,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hm.prototype.isVector4=!0;let Et=hm;class sP extends hs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new fn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new lm(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends sP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class YS extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oP extends fn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vc=class Vc{constructor(e,n,i,r,s,o,a,l,c,f,d,u,h,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,u,h,m,_,g)}set(e,n,i,r,s,o,a,l,c,f,d,u,h,m,_,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=u,p[3]=h,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=o*f,h=o*d,m=a*f,_=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=h+m*c,n[5]=u-_*c,n[9]=-a*l,n[2]=_-u*c,n[6]=m+h*c,n[10]=o*l}else if(e.order==="YXZ"){const u=l*f,h=l*d,m=c*f,_=c*d;n[0]=u+_*a,n[4]=m*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=h*a-m,n[6]=_+u*a,n[10]=o*l}else if(e.order==="ZXY"){const u=l*f,h=l*d,m=c*f,_=c*d;n[0]=u-_*a,n[4]=-o*d,n[8]=m+h*a,n[1]=h+m*a,n[5]=o*f,n[9]=_-u*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const u=o*f,h=o*d,m=a*f,_=a*d;n[0]=l*f,n[4]=m*c-h,n[8]=u*c+_,n[1]=l*d,n[5]=_*c+u,n[9]=h*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const u=o*l,h=o*c,m=a*l,_=a*c;n[0]=l*f,n[4]=_-u*d,n[8]=m*d+h,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=h*d+m,n[10]=u-_*d}else if(e.order==="XZY"){const u=o*l,h=o*c,m=a*l,_=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=u*d+_,n[5]=o*f,n[9]=h*d-m,n[2]=m*d-h,n[6]=a*f,n[10]=_*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aP,e,lP)}lookAt(e,n,i){const r=this.elements;return Tn.subVectors(e,n),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),tr.crossVectors(i,Tn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),tr.crossVectors(i,Tn)),tr.normalize(),pl.crossVectors(Tn,tr),r[0]=tr.x,r[4]=pl.x,r[8]=Tn.x,r[1]=tr.y,r[5]=pl.y,r[9]=Tn.y,r[2]=tr.z,r[6]=pl.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],u=i[9],h=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],y=i[7],S=i[11],T=i[15],w=r[0],b=r[4],x=r[8],A=r[12],R=r[1],U=r[5],H=r[9],B=r[13],P=r[2],V=r[6],W=r[10],O=r[14],D=r[3],N=r[7],z=r[11],X=r[15];return s[0]=o*w+a*R+l*P+c*D,s[4]=o*b+a*U+l*V+c*N,s[8]=o*x+a*H+l*W+c*z,s[12]=o*A+a*B+l*O+c*X,s[1]=f*w+d*R+u*P+h*D,s[5]=f*b+d*U+u*V+h*N,s[9]=f*x+d*H+u*W+h*z,s[13]=f*A+d*B+u*O+h*X,s[2]=m*w+_*R+g*P+p*D,s[6]=m*b+_*U+g*V+p*N,s[10]=m*x+_*H+g*W+p*z,s[14]=m*A+_*B+g*O+p*X,s[3]=v*w+y*R+S*P+T*D,s[7]=v*b+y*U+S*V+T*N,s[11]=v*x+y*H+S*W+T*z,s[15]=v*A+y*B+S*O+T*X,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],u=e[10],h=e[14],m=e[3],_=e[7],g=e[11],p=e[15],v=l*h-c*u,y=a*h-c*d,S=a*u-l*d,T=o*h-c*f,w=o*u-l*f,b=o*d-a*f;return n*(_*v-g*y+p*S)-i*(m*v-g*T+p*w)+r*(m*y-_*T+p*b)-s*(m*S-_*w+g*b)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],f=e[10];return n*(o*f-a*c)-i*(s*f-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],u=e[10],h=e[11],m=e[12],_=e[13],g=e[14],p=e[15],v=n*a-i*o,y=n*l-r*o,S=n*c-s*o,T=i*l-r*a,w=i*c-s*a,b=r*c-s*l,x=f*_-d*m,A=f*g-u*m,R=f*p-h*m,U=d*g-u*_,H=d*p-h*_,B=u*p-h*g,P=v*B-y*H+S*U+T*R-w*A+b*x;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/P;return e[0]=(a*B-l*H+c*U)*V,e[1]=(r*H-i*B-s*U)*V,e[2]=(_*b-g*w+p*T)*V,e[3]=(u*w-d*b-h*T)*V,e[4]=(l*R-o*B-c*A)*V,e[5]=(n*B-r*R+s*A)*V,e[6]=(g*S-m*b-p*y)*V,e[7]=(f*b-u*S+h*y)*V,e[8]=(o*H-a*R+c*x)*V,e[9]=(i*R-n*H-s*x)*V,e[10]=(m*w-_*S+p*v)*V,e[11]=(d*S-f*w-h*v)*V,e[12]=(a*A-o*U-l*x)*V,e[13]=(n*U-i*A+r*x)*V,e[14]=(_*y-m*T-g*v)*V,e[15]=(f*T-d*y+u*v)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,u=s*c,h=s*f,m=s*d,_=o*f,g=o*d,p=a*d,v=l*c,y=l*f,S=l*d,T=i.x,w=i.y,b=i.z;return r[0]=(1-(_+p))*T,r[1]=(h+S)*T,r[2]=(m-y)*T,r[3]=0,r[4]=(h-S)*w,r[5]=(1-(u+p))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(m+y)*b,r[9]=(g-v)*b,r[10]=(1-(u+_))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=xs.set(r[0],r[1],r[2]).length();const a=xs.set(r[4],r[5],r[6]).length(),l=xs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),qn.copy(this);const c=1/o,f=1/a,d=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=f,qn.elements[5]*=f,qn.elements[6]*=f,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,n.setFromRotationMatrix(qn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,f=2*s/(n-e),d=2*s/(i-r),u=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===vi)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ra)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=vi,l=!1){const c=this.elements,f=2/(n-e),d=2/(i-r),u=-(n+e)/(n-e),h=-(i+r)/(i-r);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===vi)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ra)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Vc.prototype.isMatrix4=!0;let wt=Vc;const xs=new $,qn=new wt,aP=new $(0,0,0),lP=new $(1,1,1),tr=new $,pl=new $,Tn=new $,K0=new wt,Z0=new xo;class ls{constructor(e=0,n=0,i=0,r=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],u=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return K0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(K0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Z0.setFromEuler(this),this.setFromQuaternion(Z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class qS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cP=0;const Q0=new $,_s=new xo,wi=new wt,ml=new $,Lo=new $,uP=new $,fP=new xo,J0=new $(1,0,0),ev=new $(0,1,0),tv=new $(0,0,1),nv={type:"added"},dP={type:"removed"},ys={type:"childadded",child:null},mf={type:"childremoved",child:null};class dn extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cP++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new $,n=new ls,i=new xo,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Be}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(J0,e)}rotateY(e){return this.rotateOnAxis(ev,e)}rotateZ(e){return this.rotateOnAxis(tv,e)}translateOnAxis(e,n){return Q0.copy(e).applyQuaternion(this.quaternion),this.position.add(Q0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(J0,e)}translateY(e){return this.translateOnAxis(ev,e)}translateZ(e){return this.translateOnAxis(tv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ml.copy(e):ml.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Lo,ml,this.up):wi.lookAt(ml,Lo,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(wi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nv),ys.child=e,this.dispatchEvent(ys),ys.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dP),mf.child=e,this.dispatchEvent(mf),mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nv),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,uP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,fP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),u=o(e.skeletons),h=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}dn.DEFAULT_UP=new $(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Go extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hP={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=f.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&u>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Go;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const $S={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},gl={h:0,s:0,l:0};function vf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=eP(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vf(o,s,e+1/3),this.g=vf(o,s,e),this.b=vf(o,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&ke("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ke("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=$S[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=no(e.r),this.g=no(e.g),this.b=no(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return qe.workingToColorSpace(en.copy(this),e),Math.round($e(en.r*255,0,255))*65536+Math.round($e(en.g*255,0,255))*256+Math.round($e(en.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Bn){qe.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+n,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(nr),e.getHSL(gl);const i=uf(nr.h,gl.h,n),r=uf(nr.s,gl.s,n),s=uf(nr.l,gl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Ze;Ze.NAMES=$S;class pP extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new $,Ai=new $,xf=new $,bi=new $,Ss=new $,Ms=new $,iv=new $,_f=new $,yf=new $,Sf=new $,Mf=new Et,Ef=new Et,Tf=new Et;class ei{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){$n.subVectors(r,n),Ai.subVectors(i,n),xf.subVectors(e,n);const o=$n.dot($n),a=$n.dot(Ai),l=$n.dot(xf),c=Ai.dot(Ai),f=Ai.dot(xf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const u=1/d,h=(c*l-a*f)*u,m=(o*f-a*l)*u;return s.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Mf.setScalar(0),Ef.setScalar(0),Tf.setScalar(0),Mf.fromBufferAttribute(e,n),Ef.fromBufferAttribute(e,i),Tf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Mf,s.x),o.addScaledVector(Ef,s.y),o.addScaledVector(Tf,s.z),o}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Ai.subVectors(e,n),$n.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ss.subVectors(r,i),Ms.subVectors(s,i),_f.subVectors(e,i);const l=Ss.dot(_f),c=Ms.dot(_f);if(l<=0&&c<=0)return n.copy(i);yf.subVectors(e,r);const f=Ss.dot(yf),d=Ms.dot(yf);if(f>=0&&d<=f)return n.copy(r);const u=l*d-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ss,o);Sf.subVectors(e,s);const h=Ss.dot(Sf),m=Ms.dot(Sf);if(m>=0&&h<=m)return n.copy(s);const _=h*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Ms,a);const g=f*m-h*d;if(g<=0&&d-f>=0&&h-m>=0)return iv.subVectors(s,r),a=(d-f)/(d-f+(h-m)),n.copy(r).addScaledVector(iv,a);const p=1/(g+_+u);return o=_*p,a=u*p,n.copy(i).addScaledVector(Ss,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class za{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vl.copy(i.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Do),xl.subVectors(this.max,Do),Es.subVectors(e.a,Do),Ts.subVectors(e.b,Do),ws.subVectors(e.c,Do),ir.subVectors(Ts,Es),rr.subVectors(ws,Ts),Ur.subVectors(Es,ws);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Ur.z,Ur.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Ur.z,0,-Ur.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Ur.y,Ur.x,0];return!wf(n,Es,Ts,ws,xl)||(n=[1,0,0,0,1,0,0,0,1],!wf(n,Es,Ts,ws,xl))?!1:(_l.crossVectors(ir,rr),n=[_l.x,_l.y,_l.z],wf(n,Es,Ts,ws,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ci=[new $,new $,new $,new $,new $,new $,new $,new $],Kn=new $,vl=new za,Es=new $,Ts=new $,ws=new $,ir=new $,rr=new $,Ur=new $,Do=new $,xl=new $,_l=new $,Fr=new $;function wf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Fr.fromArray(t,s);const a=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=n.dot(Fr),f=i.dot(Fr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Nt=new $,yl=new Je;let mP=0;class si extends hs{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mP++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=$R,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yl.fromBufferAttribute(this,n),yl.applyMatrix3(e),this.setXY(n,yl.x,yl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Po(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Po(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Po(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Po(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Po(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class KS extends si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ZS extends si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Hi extends si{constructor(e,n,i){super(new Float32Array(e),n,i)}}const gP=new za,No=new $,Af=new $;class hu{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const n=No.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(No,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Af)),this.expandByPoint(No.copy(e.center).sub(Af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vP=0;const On=new wt,bf=new dn,As=new $,wn=new za,Io=new za,zt=new $;class ai extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vP++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(KR(e)?ZS:KS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Hi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(wn.min,Io.min),wn.expandByPoint(zt),zt.addVectors(wn.max,Io.max),wn.expandByPoint(zt)):(wn.expandByPoint(Io.min),wn.expandByPoint(Io.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)zt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),zt.add(As)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new si(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new $,l[x]=new $;const c=new $,f=new $,d=new $,u=new Je,h=new Je,m=new Je,_=new $,g=new $;function p(x,A,R){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,R),u.fromBufferAttribute(s,x),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,R),f.sub(c),d.sub(c),h.sub(u),m.sub(u);const U=1/(h.x*m.y-m.x*h.y);isFinite(U)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(U),g.copy(d).multiplyScalar(h.x).addScaledVector(f,-m.x).multiplyScalar(U),a[x].add(_),a[A].add(_),a[R].add(_),l[x].add(g),l[A].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,A=v.length;x<A;++x){const R=v[x],U=R.start,H=R.count;for(let B=U,P=U+H;B<P;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new $,S=new $,T=new $,w=new $;function b(x){T.fromBufferAttribute(r,x),w.copy(T);const A=a[x];y.copy(A),y.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(w,A);const U=S.dot(l[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,U)}for(let x=0,A=v.length;x<A;++x){const R=v[x],U=R.start,H=R.count;for(let B=U,P=U+H;B<P;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,c=new $,f=new $,d=new $;if(e)for(let u=0,h=e.count;u<h;u+=3){const m=e.getX(u+0),_=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,h=n.count;u<h;u+=3)r.fromBufferAttribute(n,u+0),s.fromBufferAttribute(n,u+1),o.fromBufferAttribute(n,u+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,u=new c.constructor(l.length*f);let h=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*f;for(let p=0;p<f;p++)u[m++]=c[h++]}return new si(u,f,d)}if(this.index===null)return ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ai,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const u=c[f],h=e(u,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,u=c.length;d<u;d++){const h=c[d];f.push(h.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let u=0,h=d.length;u<h;u++)f.push(d[u].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cf=new $,xP=new $,_P=new Be;class ur{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cf.subVectors(i,n).cross(xP.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Cf),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||_P.getNormalMatrix(e),r=this.coplanarPoint(Cf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let yP=0;class Ha extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yP++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=ra,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=CS,this.blendDst=RS,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=HR,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lf,this.stencilZFail=lf,this.stencilZPass=lf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ke(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ke(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ur().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Je().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new $,Rf=new $,Sl=new $,Ml=new $;class QS{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Rf.copy(e).add(n).multiplyScalar(.5),Sl.copy(n).sub(e).normalize(),Ml.copy(this.origin).sub(Rf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Sl),a=Ml.dot(this.direction),l=-Ml.dot(Sl),c=Ml.lengthSq(),f=Math.abs(1-o*o);let d,u,h,m;if(f>0)if(d=o*l-a,u=o*a-l,m=s*f,d>=0)if(u>=-m)if(u<=m){const _=1/f;d*=_,u*=_,h=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),h=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),h=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),h=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),h=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Rf).addScaledVector(Sl,u),h}intersectSphere(e,n){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(s=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,d=e.x-o.x,u=e.y-o.y,h=e.z-o.z,m=n.x-o.x,_=n.y-o.y,g=n.z-o.z,p=i.x-o.x,v=i.y-o.y,y=i.z-o.z,S=Math.abs(l),T=Math.abs(c),w=Math.abs(f);let b,x,A,R,U,H,B,P,V,W,O,D;if(S>=T&&S>=w?(A=l,H=d,V=m,D=p,l>=0?(b=c,x=f,R=u,U=h,B=_,P=g,W=v,O=y):(b=f,x=c,R=h,U=u,B=g,P=_,W=y,O=v)):T>=w?(A=c,H=u,V=_,D=v,c>=0?(b=f,x=l,R=h,U=d,B=g,P=m,W=y,O=p):(b=l,x=f,R=d,U=h,B=m,P=g,W=p,O=y)):(A=f,H=h,V=g,D=y,f>=0?(b=l,x=c,R=d,U=u,B=m,P=_,W=p,O=v):(b=c,x=l,R=u,U=d,B=_,P=m,W=v,O=p)),A===0)return null;const N=b/A,z=x/A,X=1/A,ae=R-N*H,xe=U-z*H,Ue=B-N*V,Ce=P-z*V,Re=W-N*D,Z=O-z*D,ee=Re*Ce-Z*Ue,le=ae*Z-xe*Re,ce=Ue*xe-Ce*ae;if(r){if(ee<0||le<0||ce<0)return null}else if((ee<0||le<0||ce<0)&&(ee>0||le>0||ce>0))return null;const se=ee+le+ce;if(se===0)return null;const Le=X*(ee*H+le*V+ce*D);return(se>0?Le<0:Le>0)?null:this.at(Le/se,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class JS extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=PS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rv=new wt,Or=new QS,El=new hu,sv=new $,Tl=new $,wl=new $,Al=new $,Pf=new $,bl=new $,ov=new $,Cl=new $;class $i extends dn{constructor(e=new ai,n=new JS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(Pf.fromBufferAttribute(d,e),o?bl.addScaledVector(Pf,f):bl.addScaledVector(Pf.sub(n),f))}n.add(bl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(El.containsPoint(Or.origin)===!1&&(Or.intersectSphere(El,sv)===null||Or.origin.distanceToSquared(sv)>(e.far-e.near)**2))&&(rv.copy(s).invert(),Or.copy(e.ray).applyMatrix4(rv),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],v=Math.max(g.start,h.start),y=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let S=v,T=y;S<T;S+=3){const w=a.getX(S),b=a.getX(S+1),x=a.getX(S+2);r=Rl(this,p,e,i,c,f,d,w,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const v=a.getX(g),y=a.getX(g+1),S=a.getX(g+2);r=Rl(this,o,e,i,c,f,d,v,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[g.materialIndex],v=Math.max(g.start,h.start),y=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let S=v,T=y;S<T;S+=3){const w=S,b=S+1,x=S+2;r=Rl(this,p,e,i,c,f,d,w,b,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){const v=g,y=g+1,S=g+2;r=Rl(this,o,e,i,c,f,d,v,y,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function SP(t,e,n,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ss,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Cl);return c<n.near||c>n.far?null:{distance:c,point:Cl.clone(),object:t}}function Rl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Tl),t.getVertexPosition(l,wl),t.getVertexPosition(c,Al);const f=SP(t,e,n,i,Tl,wl,Al,ov);if(f){const d=new $;ei.getBarycoord(ov,Tl,wl,Al,d),r&&(f.uv=ei.getInterpolatedAttribute(r,a,l,c,d,new Je)),s&&(f.uv1=ei.getInterpolatedAttribute(s,a,l,c,d,new Je)),o&&(f.normal=ei.getInterpolatedAttribute(o,a,l,c,d,new $),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new $,materialIndex:0};ei.getNormal(Tl,wl,Al,u.normal),f.face=u,f.barycoord=d}return f}class MP extends fn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=jt,f=jt,d,u){super(null,o,a,l,c,f,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kr=new hu,EP=new Je(.5,.5),Pl=new $;class cm{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,o=new ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],d=s[5],u=s[6],h=s[7],m=s[8],_=s[9],g=s[10],p=s[11],v=s[12],y=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-o,h-f,p-m,T-v).normalize(),r[1].setComponents(c+o,h+f,p+m,T+v).normalize(),r[2].setComponents(c+a,h+d,p+_,T+y).normalize(),r[3].setComponents(c-a,h-d,p-_,T-y).normalize(),i)r[4].setComponents(l,u,g,S).normalize(),r[5].setComponents(c-l,h-u,p-g,T-S).normalize();else if(r[4].setComponents(c-l,h-u,p-g,T-S).normalize(),n===vi)r[5].setComponents(c+l,h+u,p+g,T+S).normalize();else if(n===Ra)r[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);const n=EP.distanceTo(e.center);return kr.radius=.7071067811865476+n,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pl.x=r.normal.x>0?e.max.x:e.min.x,Pl.y=r.normal.y>0?e.max.y:e.min.y,Pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eM extends Ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const av=new wt,Nh=new QS,Ll=new hu,Dl=new $;class TP extends dn{constructor(e=new ai,n=new eM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ll.copy(i.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;av.copy(r).invert(),Nh.copy(e.ray).applyMatrix4(av);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let m=u,_=h;m<_;m++){const g=c.getX(m);Dl.fromBufferAttribute(d,g),lv(Dl,g,l,r,e,n,this)}}else{const u=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let m=u,_=h;m<_;m++)Dl.fromBufferAttribute(d,m),lv(Dl,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lv(t,e,n,i,r,s,o){const a=Nh.distanceSqToPoint(t);if(a<n){const l=new $;Nh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tM extends fn{constructor(e=[],n=os,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pa extends fn{constructor(e,n,i=Mi,r,s,o,a=jt,l=jt,c,f=qi,d=1){if(f!==qi&&f!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:n,depth:d};super(u,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class wP extends Pa{constructor(e,n=Mi,i=os,r,s,o=jt,a=jt,l,c=qi){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nM extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ga extends ai{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let u=0,h=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hi(c,3)),this.setAttribute("normal",new Hi(f,3)),this.setAttribute("uv",new Hi(d,2));function m(_,g,p,v,y,S,T,w,b,x,A){const R=S/b,U=T/x,H=S/2,B=T/2,P=w/2,V=b+1,W=x+1;let O=0,D=0;const N=new $;for(let z=0;z<W;z++){const X=z*U-B;for(let ae=0;ae<V;ae++){const xe=ae*R-H;N[_]=xe*v,N[g]=X*y,N[p]=P,c.push(N.x,N.y,N.z),N[_]=0,N[g]=0,N[p]=w>0?1:-1,f.push(N.x,N.y,N.z),d.push(ae/b),d.push(1-z/x),O+=1}}for(let z=0;z<x;z++)for(let X=0;X<b;X++){const ae=u+X+V*z,xe=u+X+V*(z+1),Ue=u+(X+1)+V*(z+1),Ce=u+(X+1)+V*z;l.push(ae,xe,Ce),l.push(xe,Ue,Ce),D+=6}a.addGroup(h,D,A),h+=D,u+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pu extends ai{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,u=n/l,h=[],m=[],_=[],g=[];for(let p=0;p<f;p++){const v=p*u-o;for(let y=0;y<c;y++){const S=y*d-s;m.push(S,-v,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,S=v+c*(p+1),T=v+1+c*(p+1),w=v+1+c*p;h.push(y,S,w),h.push(S,T,w)}this.setIndex(h),this.setAttribute("position",new Hi(m,3)),this.setAttribute("normal",new Hi(_,3)),this.setAttribute("uv",new Hi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.width,e.height,e.widthSegments,e.heightSegments)}}function po(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(cv(r))r.isRenderTargetTexture?(ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(cv(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=po(t[n]);for(const r in i)e[r]=i[r]}return e}function cv(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function AP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function iM(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const bP={clone:po,merge:an};var CP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CP,this.fragmentShader=RP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=AP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new Je().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new wt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class PP extends Ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class LP extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DP extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class rM extends dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Lf=new wt,uv=new $,fv=new $;class NP{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cm,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;uv.setFromMatrixPosition(e.matrixWorld),n.position.copy(uv),fv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(fv),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Lf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Lf,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ra||e.reversedDepth?n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):n.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),n.multiply(Lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nl=new $,Il=new xo,fi=new $;class sM extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Nl,Il,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Il,fi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Nl,Il,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Nl,Il,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sr=new $,dv=new Je,hv=new Je;class bn extends sM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(cf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,dv,hv),n.subVectors(hv,dv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(cf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class IP extends NP{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}}class pv extends rM{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new IP}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class oM extends sM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UP extends rM{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const bs=-90,Cs=1;class FP extends dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(bs,Cs,e,n);r.layers=this.layers,this.add(r);const s=new bn(bs,Cs,e,n);s.layers=this.layers,this.add(s);const o=new bn(bs,Cs,e,n);o.layers=this.layers,this.add(o);const a=new bn(bs,Cs,e,n);a.layers=this.layers,this.add(a);const l=new bn(bs,Cs,e,n);l.layers=this.layers,this.add(l);const c=new bn(bs,Cs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(d,u,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class OP extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const pm=class pm{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};pm.prototype.isMatrix2=!0;let mv=pm;function gv(t,e,n,i){const r=kP(i);switch(n){case GS:return t*e;case XS:return t*e/r.components*r.byteLength;case im:return t*e/r.components*r.byteLength;case as:return t*e*2/r.components*r.byteLength;case rm:return t*e*2/r.components*r.byteLength;case WS:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case sm:return t*e*4/r.components*r.byteLength;case Ql:case Jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ec:case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:case sh:return Math.max(t,16)*Math.max(e,8)/4;case nh:case rh:return Math.max(t,8)*Math.max(e,8)/2;case oh:case ah:case ch:case uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lh:case Uc:case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case xh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case yh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ah:case bh:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Rh:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Fc:case Lh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kP(t){switch(t){case Cn:case BS:return{byteLength:1,components:1};case ba:case VS:case Ei:return{byteLength:2,components:1};case tm:case nm:return{byteLength:2,components:4};case Mi:case em:case gi:return{byteLength:4,components:1};case zS:case HS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function aM(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function BP(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,f),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((h,m)=>h.start-m.start);let u=0;for(let h=1;h<d.length;h++){const m=d[u],_=d[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let h=0,m=d.length;h<m;h++){const _=d[h];t.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var VP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,HP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$P=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,o2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,a2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,c2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,d2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g2="gl_FragColor = linearToOutputTexel( gl_FragColor );",v2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,y2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,D2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,N2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,z2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,G2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Y2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,K2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,c3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,u3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,g3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const V3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,K3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xL=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_L=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:VP,alphahash_pars_fragment:zP,alphamap_fragment:HP,alphamap_pars_fragment:GP,alphatest_fragment:WP,alphatest_pars_fragment:XP,aomap_fragment:jP,aomap_pars_fragment:YP,batching_pars_vertex:qP,batching_vertex:$P,begin_vertex:KP,beginnormal_vertex:ZP,bsdfs:QP,iridescence_fragment:JP,bumpmap_pars_fragment:e2,clipping_planes_fragment:t2,clipping_planes_pars_fragment:n2,clipping_planes_pars_vertex:i2,clipping_planes_vertex:r2,color_fragment:s2,color_pars_fragment:o2,color_pars_vertex:a2,color_vertex:l2,common:c2,cube_uv_reflection_fragment:u2,defaultnormal_vertex:f2,displacementmap_pars_vertex:d2,displacementmap_vertex:h2,emissivemap_fragment:p2,emissivemap_pars_fragment:m2,colorspace_fragment:g2,colorspace_pars_fragment:v2,envmap_fragment:x2,envmap_common_pars_fragment:_2,envmap_pars_fragment:y2,envmap_pars_vertex:S2,envmap_physical_pars_fragment:D2,envmap_vertex:M2,fog_vertex:E2,fog_pars_vertex:T2,fog_fragment:w2,fog_pars_fragment:A2,gradientmap_pars_fragment:b2,lightmap_pars_fragment:C2,lights_lambert_fragment:R2,lights_lambert_pars_fragment:P2,lights_pars_begin:L2,lights_toon_fragment:N2,lights_toon_pars_fragment:I2,lights_phong_fragment:U2,lights_phong_pars_fragment:F2,lights_physical_fragment:O2,lights_physical_pars_fragment:k2,lights_fragment_begin:B2,lights_fragment_maps:V2,lights_fragment_end:z2,lightprobes_pars_fragment:H2,logdepthbuf_fragment:G2,logdepthbuf_pars_fragment:W2,logdepthbuf_pars_vertex:X2,logdepthbuf_vertex:j2,map_fragment:Y2,map_pars_fragment:q2,map_particle_fragment:$2,map_particle_pars_fragment:K2,metalnessmap_fragment:Z2,metalnessmap_pars_fragment:Q2,morphinstance_vertex:J2,morphcolor_vertex:e3,morphnormal_vertex:t3,morphtarget_pars_vertex:n3,morphtarget_vertex:i3,normal_fragment_begin:r3,normal_fragment_maps:s3,normal_pars_fragment:o3,normal_pars_vertex:a3,normal_vertex:l3,normalmap_pars_fragment:c3,clearcoat_normal_fragment_begin:u3,clearcoat_normal_fragment_maps:f3,clearcoat_pars_fragment:d3,iridescence_pars_fragment:h3,opaque_fragment:p3,packing:m3,premultiplied_alpha_fragment:g3,project_vertex:v3,dithering_fragment:x3,dithering_pars_fragment:_3,roughnessmap_fragment:y3,roughnessmap_pars_fragment:S3,shadowmap_pars_fragment:M3,shadowmap_pars_vertex:E3,shadowmap_vertex:T3,shadowmask_pars_fragment:w3,skinbase_vertex:A3,skinning_pars_vertex:b3,skinning_vertex:C3,skinnormal_vertex:R3,specularmap_fragment:P3,specularmap_pars_fragment:L3,tonemapping_fragment:D3,tonemapping_pars_fragment:N3,transmission_fragment:I3,transmission_pars_fragment:U3,uv_pars_fragment:F3,uv_pars_vertex:O3,uv_vertex:k3,worldpos_vertex:B3,background_vert:V3,background_frag:z3,backgroundCube_vert:H3,backgroundCube_frag:G3,cube_vert:W3,cube_frag:X3,depth_vert:j3,depth_frag:Y3,distance_vert:q3,distance_frag:$3,equirect_vert:K3,equirect_frag:Z3,linedashed_vert:Q3,linedashed_frag:J3,meshbasic_vert:eL,meshbasic_frag:tL,meshlambert_vert:nL,meshlambert_frag:iL,meshmatcap_vert:rL,meshmatcap_frag:sL,meshnormal_vert:oL,meshnormal_frag:aL,meshphong_vert:lL,meshphong_frag:cL,meshphysical_vert:uL,meshphysical_frag:fL,meshtoon_vert:dL,meshtoon_frag:hL,points_vert:pL,points_frag:mL,shadow_vert:gL,shadow_frag:vL,sprite_vert:xL,sprite_frag:_L},ve={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},pi={basic:{uniforms:an([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:an([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:an([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:an([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:an([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:an([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:an([ve.points,ve.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:an([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:an([ve.common,ve.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:an([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:an([ve.sprite,ve.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:an([ve.common,ve.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:an([ve.lights,ve.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};pi.physical={uniforms:an([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ul={r:0,b:0,g:0},yL=new wt,lM=new Be;lM.set(-1,0,0,0,1,0,0,0,1);function SL(t,e,n,i,r,s){const o=new Ze(0);let a=r===!0?0:1,l,c,f=null,d=0,u=null;function h(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const S=v.backgroundBlurriness>0;y=e.get(y,S)}return y}function m(v){let y=!1;const S=h(v);S===null?g(o,a):S&&S.isColor&&(g(S,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,y){const S=h(y);S&&(S.isCubeTexture||S.mapping===du)?(c===void 0&&(c=new $i(new Ga(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:po(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yL.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lM),c.material.toneMapped=qe.getTransfer(S.colorSpace)!==ot,(f!==S||d!==S.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,u=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new $i(new pu(2,2),new Ti({name:"BackgroundMaterial",uniforms:po(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,d=S.version,u=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(Ul,iM(t)),n.buffers.color.setClear(Ul.r,Ul.g,Ul.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:_,dispose:p}}function ML(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(U,H,B,P,V){let W=!1;const O=d(U,P,B,H);s!==O&&(s=O,c(s.object)),W=h(U,P,B,V),W&&m(U,P,B,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(U,H,B,P),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(U){return t.bindVertexArray(U)}function f(U){return t.deleteVertexArray(U)}function d(U,H,B,P){const V=P.wireframe===!0;let W=i[H.id];W===void 0&&(W={},i[H.id]=W);const O=U.isInstancedMesh===!0?U.id:0;let D=W[O];D===void 0&&(D={},W[O]=D);let N=D[B.id];N===void 0&&(N={},D[B.id]=N);let z=N[V];return z===void 0&&(z=u(l()),N[V]=z),z}function u(U){const H=[],B=[],P=[];for(let V=0;V<n;V++)H[V]=0,B[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:P,object:U,attributes:{},index:null}}function h(U,H,B,P){const V=s.attributes,W=H.attributes;let O=0;const D=B.getAttributes();for(const N in D)if(D[N].location>=0){const X=V[N];let ae=W[N];if(ae===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(ae=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(ae=U.instanceColor)),X===void 0||X.attribute!==ae||ae&&X.data!==ae.data)return!0;O++}return s.attributesNum!==O||s.index!==P}function m(U,H,B,P){const V={},W=H.attributes;let O=0;const D=B.getAttributes();for(const N in D)if(D[N].location>=0){let X=W[N];X===void 0&&(N==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),N==="instanceColor"&&U.instanceColor&&(X=U.instanceColor));const ae={};ae.attribute=X,X&&X.data&&(ae.data=X.data),V[N]=ae,O++}s.attributes=V,s.attributesNum=O,s.index=P}function _(){const U=s.newAttributes;for(let H=0,B=U.length;H<B;H++)U[H]=0}function g(U){p(U,0)}function p(U,H){const B=s.newAttributes,P=s.enabledAttributes,V=s.attributeDivisors;B[U]=1,P[U]===0&&(t.enableVertexAttribArray(U),P[U]=1),V[U]!==H&&(t.vertexAttribDivisor(U,H),V[U]=H)}function v(){const U=s.newAttributes,H=s.enabledAttributes;for(let B=0,P=H.length;B<P;B++)H[B]!==U[B]&&(t.disableVertexAttribArray(B),H[B]=0)}function y(U,H,B,P,V,W,O){O===!0?t.vertexAttribIPointer(U,H,B,V,W):t.vertexAttribPointer(U,H,B,P,V,W)}function S(U,H,B,P){_();const V=P.attributes,W=B.getAttributes(),O=H.defaultAttributeValues;for(const D in W){const N=W[D];if(N.location>=0){let z=V[D];if(z===void 0&&(D==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),D==="instanceColor"&&U.instanceColor&&(z=U.instanceColor)),z!==void 0){const X=z.normalized,ae=z.itemSize,xe=e.get(z);if(xe===void 0)continue;const Ue=xe.buffer,Ce=xe.type,Re=xe.bytesPerElement,Z=Ce===t.INT||Ce===t.UNSIGNED_INT||z.gpuType===em;if(z.isInterleavedBufferAttribute){const ee=z.data,le=ee.stride,ce=z.offset;if(ee.isInstancedInterleavedBuffer){for(let se=0;se<N.locationSize;se++)p(N.location+se,ee.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<N.locationSize;se++)g(N.location+se);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let se=0;se<N.locationSize;se++)y(N.location+se,ae/N.locationSize,Ce,X,le*Re,(ce+ae/N.locationSize*se)*Re,Z)}else{if(z.isInstancedBufferAttribute){for(let ee=0;ee<N.locationSize;ee++)p(N.location+ee,z.meshPerAttribute);U.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ee=0;ee<N.locationSize;ee++)g(N.location+ee);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let ee=0;ee<N.locationSize;ee++)y(N.location+ee,ae/N.locationSize,Ce,X,ae*Re,ae/N.locationSize*ee*Re,Z)}}else if(O!==void 0){const X=O[D];if(X!==void 0)switch(X.length){case 2:t.vertexAttrib2fv(N.location,X);break;case 3:t.vertexAttrib3fv(N.location,X);break;case 4:t.vertexAttrib4fv(N.location,X);break;default:t.vertexAttrib1fv(N.location,X)}}}}v()}function T(){A();for(const U in i){const H=i[U];for(const B in H){const P=H[B];for(const V in P){const W=P[V];for(const O in W)f(W[O].object),delete W[O];delete P[V]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;const H=i[U.id];for(const B in H){const P=H[B];for(const V in P){const W=P[V];for(const O in W)f(W[O].object),delete W[O];delete P[V]}}delete i[U.id]}function b(U){for(const H in i){const B=i[H];for(const P in B){const V=B[P];if(V[U.id]===void 0)continue;const W=V[U.id];for(const O in W)f(W[O].object),delete W[O];delete V[U.id]}}}function x(U){for(const H in i){const B=i[H],P=U.isInstancedMesh===!0?U.id:0,V=B[P];if(V!==void 0){for(const W in V){const O=V[W];for(const D in O)f(O[D].object),delete O[D];delete V[W]}delete B[P],Object.keys(B).length===0&&delete i[H]}}}function A(){R(),o=!0,s!==r&&(s=r,c(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function EL(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,f){f!==0&&(t.drawArraysInstanced(i,l,c,f),n.update(c,i,f))}function a(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let u=0;for(let h=0;h<f;h++)u+=c[h];n.update(u,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function TL(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==ti&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const x=b===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Cn&&b!==gi&&!x&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(ke("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:S,maxSamples:T,samples:w}}function wL(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ur,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const h=d.length!==0||u||i!==0||r;return r=u,i=d.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){n=f(d,u,0)},this.setState=function(d,u,h){const m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,y=v*4;let S=p.clippingState||null;l.value=S,S=f(m,u,y,h);for(let T=0;T!==y;++T)S[T]=n[T];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,u,h,m){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=h+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,S=h;y!==_;++y,S+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}const qs=4,AL=6,bL=20,CL=256,Uo=new oM,vv=new Ze;let Df=null,Nf=0,If=0,Uf=!1;const RL=new $,Br=new $;class xv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=RL}=s;Df=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Df,Nf,If),this._renderer.xr.enabled=Uf,e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===os||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Df=this._renderer.getRenderTarget(),Nf=this._renderer.getActiveCubeFace(),If=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Ei,format:ti,colorSpace:Oc,depthBuffer:!1},r=_v(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_v(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=PL(s)),this._blurMaterial=DL(s,e,n),this._ggxMaterial=LL(s,e,n)}return r}_compileMaterial(e){const n=new $i(new ai,e);this._renderer.compile(n,Uo)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(vv),d.toneMapping=Si,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $i(new Ga,new JS({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let p=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(vv),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):S===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));const T=this._cubeSize;Rs(r,S*T,y>2?T:0,T,T),d.setRenderTarget(r),p&&d.render(_,l),d.render(e,l)}d.toneMapping=h,d.autoClear=u,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===os||e.mapping===ho;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Uo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-f*f),u=c*1.25,h=d*u,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-qs?i-m+qs:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-n,Rs(s,g,p,3*_,2*_),r.setRenderTarget(s),r.render(a,Uo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Rs(e,g,p,3*_,2*_),r.setRenderTarget(e),r.render(a,Uo)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],d=3*f*(r>this._lodMax-qs?r-this._lodMax+qs:0),u=4*(this._cubeSize-f);Rs(n,d,u,3*f,2*f),o.setRenderTarget(n),o.render(l,Uo)}}function PL(t){const e=[],n=[];let i=t;const r=t-qs+1+AL;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,h=3,m=new Float32Array(h*u*d),_=new Float32Array(h*u*d);for(let p=0;p<d;p++){const v=p%3*2/3-1,y=p>2?0:-1,S=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];m.set(S,h*u*p);for(let T=0;T<u;T++){const w=f[T*2]*2-1,b=f[T*2+1]*2-1;p===0?Br.set(1,b,w):p===1?Br.set(-w,1,-b):p===2?Br.set(-w,b,1):p===3?Br.set(-1,b,-w):p===4?Br.set(-w,-1,b):Br.set(w,b,-1),Br.toArray(_,(p*u+T)*h)}}const g=new ai;g.setAttribute("position",new si(m,h)),g.setAttribute("outputDirection",new si(_,h)),n.push(new $i(g,null)),i>qs&&i--}return{lodMeshes:n,sizeLods:e}}function _v(t,e,n){const i=new ri(t,e,n);return i.texture.mapping=du,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LL(t,e,n){return new Ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function DL(t,e,n){return new Ti({name:"SphericalGaussianBlur",defines:{SAMPLES:bL,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function yv(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Sv(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class cM extends ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tM(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ga(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Vi});s.uniforms.tEquirect.value=n;const o=new $i(r,s),a=n.minFilter;return n.minFilter===$r&&(n.minFilter=rn),new FP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function NL(t){let e=new WeakMap,n=new WeakMap,i=null;function r(u,h=!1){return u==null?null:h?o(u):s(u)}function s(u){if(u&&u.isTexture){const h=u.mapping;if(h===sf||h===of)if(e.has(u)){const m=e.get(u).texture;return a(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const _=new cM(m.height);return _.fromEquirectangularTexture(t,u),e.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const h=u.mapping,m=h===sf||h===of,_=h===os||h===ho;if(m||_){let g=n.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new xv(t)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),g.texture;if(g!==void 0)return g.texture;{const v=u.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new xv(t)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,n.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,h){return h===sf?u.mapping=os:h===of&&(u.mapping=ho),u}function l(u){let h=0;const m=6;for(let _=0;_<m;_++)u[_]!==void 0&&h++;return h===m}function c(u){const h=u.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(u){const h=u.target;h.removeEventListener("dispose",f);const m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function IL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&to("WebGLRenderer: "+i+" extension not supported."),r}}}function UL(t,e,n,i){const r={},s=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete r[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function a(d,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,n.memory.geometries++),u}function l(d){const u=d.attributes;for(const h in u)e.update(u[h],t.ARRAY_BUFFER)}function c(d){const u=[],h=d.index,m=d.attributes.position;let _=0;if(m===void 0)return;if(h!==null){const v=h.array;_=h.version;for(let y=0,S=v.length;y<S;y+=3){const T=v[y+0],w=v[y+1],b=v[y+2];u.push(T,w,w,b,b,T)}}else{const v=m.array;_=m.version;for(let y=0,S=v.length/3-1;y<S;y+=3){const T=y+0,w=y+1,b=y+2;u.push(T,w,w,b,b,T)}}const g=new(m.count>=65535?ZS:KS)(u,1);g.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,g)}function f(d){const u=s.get(d);if(u){const h=d.index;h!==null&&u.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function FL(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){t.drawElements(i,u,s,d*o),n.update(u,i,1)}function c(d,u,h){h!==0&&(t.drawElementsInstanced(i,u,s,d*o,h),n.update(u,i,h))}function f(d,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g];n.update(_,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function OL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kL(t,e,n){const i=new WeakMap,r=new Et;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let R=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",R)};var h=R;u!==void 0&&u.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let T=a.attributes.position.count*S,w=1;T>e.maxTextureSize&&(w=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const b=new Float32Array(T*w*4*d),x=new YS(b,T,w,d);x.type=gi,x.needsUpdate=!0;const A=S*4;for(let U=0;U<d;U++){const H=p[U],B=v[U],P=y[U],V=T*w*4*U;for(let W=0;W<H.count;W++){const O=W*A;m===!0&&(r.fromBufferAttribute(H,W),b[V+O+0]=r.x,b[V+O+1]=r.y,b[V+O+2]=r.z,b[V+O+3]=0),_===!0&&(r.fromBufferAttribute(B,W),b[V+O+4]=r.x,b[V+O+5]=r.y,b[V+O+6]=r.z,b[V+O+7]=0),g===!0&&(r.fromBufferAttribute(P,W),b[V+O+8]=r.x,b[V+O+9]=r.y,b[V+O+10]=r.z,b[V+O+11]=P.itemSize===4?r.w:1)}}u={count:d,texture:x,size:new Je(T,w)},i.set(a,u),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function BL(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==f&&(e.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return u}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const VL={[LS]:"LINEAR_TONE_MAPPING",[DS]:"REINHARD_TONE_MAPPING",[NS]:"CINEON_TONE_MAPPING",[IS]:"ACES_FILMIC_TONE_MAPPING",[FS]:"AGX_TONE_MAPPING",[OS]:"NEUTRAL_TONE_MAPPING",[US]:"CUSTOM_TONE_MAPPING"};function zL(t,e,n,i,r,s){const o=new ri(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new ai;c.setAttribute("position",new Hi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Hi([0,2,0,0,2,0],2));const f=new PP({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new $i(c,f),u=new oM(-1,1,1,-1,0,1);let h=null,m=null,_=!1,g,p=null,v=[],y=!1;this.setSize=function(S,T){o.setSize(S,T),a!==null&&a.setSize(S,T),l!==null&&l.setSize(S,T);for(let w=0;w<v.length;w++){const b=v[w];b.setSize&&b.setSize(S,T)}},this.setEffects=function(S){v=S,y=v.length>0&&v[0].isRenderPass===!0;const T=o.width,w=o.height;v.length>0&&a===null&&(a=new ri(T,w,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),l=new ri(T,w,{type:Ei,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<v.length;b++){const x=v[b];x.setSize&&x.setSize(T,w)}},this.begin=function(S,T){if(_||S.toneMapping===Si&&v.length===0)return!1;if(p=T,T!==null){const w=T.width,b=T.height;(o.width!==w||o.height!==b)&&this.setSize(w,b)}return y===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=Si,!0},this.hasRenderPass=function(){return y},this.end=function(S,T){S.toneMapping=g,_=!0;let w=o,b=a;for(let x=0;x<v.length;x++){const A=v[x];A.enabled!==!1&&(A.render(S,b,w,T),A.needsSwap!==!1&&(w=b,b=b===a?l:a))}if(h!==S.outputColorSpace||m!==S.toneMapping){h=S.outputColorSpace,m=S.toneMapping,f.defines={},qe.getTransfer(h)===ot&&(f.defines.SRGB_TRANSFER="");const x=VL[m];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(p),S.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}const uM=new fn,Ih=new Pa(1,1),fM=new YS,dM=new oP,hM=new tM,Mv=[],Ev=[],Tv=new Float32Array(16),wv=new Float32Array(9),Av=new Float32Array(4);function _o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Mv[r];if(s===void 0&&(s=new Float32Array(r),Mv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gu(t,e){let n=Ev[e];n===void 0&&(n=new Int32Array(e),Ev[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function HL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function GL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function WL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function XL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function jL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Av.set(i),t.uniformMatrix2fv(this.addr,!1,Av),Bt(n,i)}}function YL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;wv.set(i),t.uniformMatrix3fv(this.addr,!1,wv),Bt(n,i)}}function qL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(kt(n,i))return;Tv.set(i),t.uniformMatrix4fv(this.addr,!1,Tv),Bt(n,i)}}function $L(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function KL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function ZL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function QL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function JL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function tD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function nD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function iD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ih.compareFunction=n.isReversedDepthBuffer()?am:om,s=Ih):s=uM,n.setTexture2D(e||s,r)}function rD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dM,r)}function sD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||hM,r)}function oD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||fM,r)}function aD(t){switch(t){case 5126:return HL;case 35664:return GL;case 35665:return WL;case 35666:return XL;case 35674:return jL;case 35675:return YL;case 35676:return qL;case 5124:case 35670:return $L;case 35667:case 35671:return KL;case 35668:case 35672:return ZL;case 35669:case 35673:return QL;case 5125:return JL;case 36294:return eD;case 36295:return tD;case 36296:return nD;case 35678:case 36198:case 36298:case 36306:case 35682:return iD;case 35679:case 36299:case 36307:return rD;case 35680:case 36300:case 36308:case 36293:return sD;case 36289:case 36303:case 36311:case 36292:return oD}}function lD(t,e){t.uniform1fv(this.addr,e)}function cD(t,e){const n=_o(e,this.size,2);t.uniform2fv(this.addr,n)}function uD(t,e){const n=_o(e,this.size,3);t.uniform3fv(this.addr,n)}function fD(t,e){const n=_o(e,this.size,4);t.uniform4fv(this.addr,n)}function dD(t,e){const n=_o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hD(t,e){const n=_o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pD(t,e){const n=_o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mD(t,e){t.uniform1iv(this.addr,e)}function gD(t,e){t.uniform2iv(this.addr,e)}function vD(t,e){t.uniform3iv(this.addr,e)}function xD(t,e){t.uniform4iv(this.addr,e)}function _D(t,e){t.uniform1uiv(this.addr,e)}function yD(t,e){t.uniform2uiv(this.addr,e)}function SD(t,e){t.uniform3uiv(this.addr,e)}function MD(t,e){t.uniform4uiv(this.addr,e)}function ED(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Ih:o=uM;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function TD(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||dM,s[o])}function wD(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||hM,s[o])}function AD(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);kt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||fM,s[o])}function bD(t){switch(t){case 5126:return lD;case 35664:return cD;case 35665:return uD;case 35666:return fD;case 35674:return dD;case 35675:return hD;case 35676:return pD;case 5124:case 35670:return mD;case 35667:case 35671:return gD;case 35668:case 35672:return vD;case 35669:case 35673:return xD;case 5125:return _D;case 36294:return yD;case 36295:return SD;case 36296:return MD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return wD;case 36289:case 36303:case 36311:case 36292:return AD}}class CD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=aD(n.type)}}class RD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bD(n.type)}}class PD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ff=/(\w+)(\])?(\[|\.)?/g;function bv(t,e){t.seq.push(e),t.map[e.id]=e}function LD(t,e,n){const i=t.name,r=i.length;for(Ff.lastIndex=0;;){const s=Ff.exec(i),o=Ff.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){bv(n,c===void 0?new CD(a,t,e):new RD(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new PD(a),bv(n,d)),n=d}}}class nc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);LD(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const DD=37297;let ND=0;function ID(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Rv=new Be;function UD(t){qe._getMatrix(Rv,qe.workingColorSpace,t);const e=`mat3( ${Rv.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case kc:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return ke("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Pv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+ID(t.getShaderSource(e),a)}else return s}function FD(t,e){const n=UD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const OD={[LS]:"Linear",[DS]:"Reinhard",[NS]:"Cineon",[IS]:"ACESFilmic",[FS]:"AgX",[OS]:"Neutral",[US]:"Custom"};function kD(t,e){const n=OD[e];return n===void 0?(ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fl=new $;function BD(){qe.getLuminanceCoefficients(Fl);const t=Fl.x.toFixed(4),e=Fl.y.toFixed(4),n=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function zD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function HD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wo(t){return t!==""}function Lv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(t){return t.replace(GD,XD)}const WD=new Map;function XD(t,e){let n=Ge[e];if(n===void 0){const i=WD.get(e);if(i!==void 0)n=Ge[i],ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Uh(n)}const jD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nv(t){return t.replace(jD,YD)}function YD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Iv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qD={[Zl]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function $D(t){return qD[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KD={[os]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function ZD(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":KD[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const QD={[ho]:"ENVMAP_MODE_REFRACTION"};function JD(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":QD[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eN={[PS]:"ENVMAP_BLENDING_MULTIPLY",[OR]:"ENVMAP_BLENDING_MIX",[kR]:"ENVMAP_BLENDING_ADD"};function tN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":eN[t.combine]||"ENVMAP_BLENDING_NONE"}function nN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$D(n),c=ZD(n),f=JD(n),d=tN(n),u=nN(n),h=VD(n),m=zD(s),_=r.createProgram();let g,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Wo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(g=[Iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[Iv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Si?kD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,FD("linearToOutputTexel",n.outputColorSpace),BD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Uh(o),o=Lv(o,n),o=Dv(o,n),a=Uh(a),a=Lv(a,n),a=Dv(a,n),o=Nv(o),a=Nv(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===W0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===W0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+g+o,S=v+p+a,T=Cv(r,r.VERTEX_SHADER,y),w=Cv(r,r.FRAGMENT_SHADER,S);r.attachShader(_,T),r.attachShader(_,w),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function b(U){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(_)||"",B=r.getShaderInfoLog(T)||"",P=r.getShaderInfoLog(w)||"",V=H.trim(),W=B.trim(),O=P.trim();let D=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,T,w);else{const z=Pv(r,T,"vertex"),X=Pv(r,w,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+z+`
`+X)}else V!==""?ke("WebGLProgram: Program Info Log:",V):(W===""||O==="")&&(N=!1);N&&(U.diagnostics={runnable:D,programLog:V,vertexShader:{log:W,prefix:g},fragmentShader:{log:O,prefix:p}})}r.deleteShader(T),r.deleteShader(w),x=new nc(r,_),A=HD(r,_)}let x;this.getUniforms=function(){return x===void 0&&b(this),x};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(_,DD)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ND++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=w,this}let rN=0;class sN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new oN(e),n.set(e,i)),i}}class oN{constructor(e){this.id=rN++,this.code=e,this.usedTimes=0}}function aN(t){return t===as||t===Uc||t===Fc}function lN(t,e,n,i,r,s){const o=new qS,a=new sN,l=new Set,c=[],f=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,A,R,U,H,B){const P=U.fog,V=H.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,D=e.get(x.envMap||W,O),N=D&&D.mapping===du?D.image.height:null,z=h[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&ke("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const X=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ae=X!==void 0?X.length:0;let xe=0;V.morphAttributes.position!==void 0&&(xe=1),V.morphAttributes.normal!==void 0&&(xe=2),V.morphAttributes.color!==void 0&&(xe=3);let Ue,Ce,Re,Z;if(z){const ut=pi[z];Ue=ut.vertexShader,Ce=ut.fragmentShader}else{Ue=x.vertexShader,Ce=x.fragmentShader;const ut=a.getVertexShaderStage(x),it=a.getFragmentShaderStage(x);a.update(x,ut,it),Re=ut.id,Z=it.id}const ee=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),ce=H.isInstancedMesh===!0,se=H.isBatchedMesh===!0,Le=!!x.map,pt=!!x.matcap,Ve=!!D,We=!!x.aoMap,nt=!!x.lightMap,Xe=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Vt=!!x.displacementMap,mn=!!x.emissiveMap,yt=!!x.metalnessMap,Lt=!!x.roughnessMap,k=x.anisotropy>0,$t=x.clearcoat>0,st=x.dispersion>0,C=x.retroreflectivity>0,M=x.iridescence>0,G=x.sheen>0,q=x.transmission>0,Q=k&&!!x.anisotropyMap,ue=$t&&!!x.clearcoatMap,fe=$t&&!!x.clearcoatNormalMap,J=$t&&!!x.clearcoatRoughnessMap,ne=M&&!!x.iridescenceMap,de=M&&!!x.iridescenceThicknessMap,De=G&&!!x.sheenColorMap,ge=G&&!!x.sheenRoughnessMap,he=!!x.specularMap,Ne=!!x.specularColorMap,Fe=!!x.specularIntensityMap,ze=q&&!!x.transmissionMap,F=q&&!!x.thicknessMap,pe=!!x.gradientMap,te=!!x.alphaMap,me=x.alphaTest>0,Se=!!x.alphaHash,ie=!!x.extensions;let Ie=Si;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ie=t.toneMapping);const be={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:Ce,defines:x.defines,customVertexShaderID:Re,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:se,batchingColor:se&&H._colorsTexture!==null,instancing:ce,instancingColor:ce&&H.instanceColor!==null,instancingMorph:ce&&H.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:pt,envMap:Ve,envMapMode:Ve&&D.mapping,envMapCubeUVHeight:N,aoMap:We,lightMap:nt,bumpMap:Xe,normalMap:xt,displacementMap:Vt,emissiveMap:mn,normalMapObjectSpace:xt&&x.normalMapType===zR,normalMapTangentSpace:xt&&x.normalMapType===G0,packedNormalMap:xt&&x.normalMapType===G0&&aN(x.normalMap.format),metalnessMap:yt,roughnessMap:Lt,anisotropy:k,anisotropyMap:Q,clearcoat:$t,clearcoatMap:ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:J,dispersion:st,retroreflection:C,iridescence:M,iridescenceMap:ne,iridescenceThicknessMap:de,sheen:G,sheenColorMap:De,sheenRoughnessMap:ge,specularMap:he,specularColorMap:Ne,specularIntensityMap:Fe,transmission:q,transmissionMap:ze,thicknessMap:F,gradientMap:pe,opaque:x.transparent===!1&&x.blending===ra&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:me,alphaHash:Se,combine:x.combine,mapUv:Le&&m(x.map.channel),aoMapUv:We&&m(x.aoMap.channel),lightMapUv:nt&&m(x.lightMap.channel),bumpMapUv:Xe&&m(x.bumpMap.channel),normalMapUv:xt&&m(x.normalMap.channel),displacementMapUv:Vt&&m(x.displacementMap.channel),emissiveMapUv:mn&&m(x.emissiveMap.channel),metalnessMapUv:yt&&m(x.metalnessMap.channel),roughnessMapUv:Lt&&m(x.roughnessMap.channel),anisotropyMapUv:Q&&m(x.anisotropyMap.channel),clearcoatMapUv:ue&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(x.sheenRoughnessMap.channel),specularMapUv:he&&m(x.specularMap.channel),specularColorMapUv:Ne&&m(x.specularColorMap.channel),specularIntensityMapUv:Fe&&m(x.specularIntensityMap.channel),transmissionMapUv:ze&&m(x.transmissionMap.channel),thicknessMapUv:F&&m(x.thicknessMap.channel),alphaMapUv:te&&m(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(xt||k),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(Le||te),fog:!!P,useFog:x.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:le,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:xe,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===ot,decodeVideoTextureEmissive:mn&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Di,flipSided:x.side===Mn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)A.push(R),A.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(A,x),v(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numSunLights),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numSunLightShadows),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){const A=h[x.type];let R;if(A){const U=pi[A];R=bP.clone(U.uniforms)}else R=x.uniforms;return R}function S(x,A){let R=f.get(A);return R!==void 0?++R.usedTimes:(R=new iN(t,A,x,r),c.push(R),f.set(A,R)),R}function T(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function b(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:y,acquireProgram:S,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:b}}function cN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function uN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function a(u,h,m,_,g,p){let v=t[e];return v===void 0?(v={id:u.id,object:u,geometry:h,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:p},t[e]=v):(v.id=u.id,v.object=u,v.geometry=h,v.material=m,v.materialVariant=o(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=g,v.group=p),e++,v}function l(u,h,m,_,g,p,v){v.reversedDepth===!0&&(g=-g);const y=a(u,h,m,_,g,p);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):n.push(y)}function c(u,h,m,_,g,p){const v=a(u,h,m,_,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function f(u,h){n.length>1&&n.sort(u||uN),i.length>1&&i.sort(h||Uv),r.length>1&&r.sort(h||Uv)}function d(){for(let u=e,h=t.length;u<h;u++){const m=t[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:f}}function fN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Fv,t.set(i,[o])):r>=s.length?(o=new Fv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function dN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new $,color:new Ze};break;case"SpotLight":n={position:new $,direction:new $,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function hN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pN=0;function mN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gN(t){const e=new dN,n=hN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new wt,o=new wt;function a(c){let f=0,d=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let h=0,m=0,_=0,g=0,p=0,v=0,y=0,S=0,T=0,w=0,b=0,x=0,A=0,R=0;c.sort(mN);for(let H=0,B=c.length;H<B;H++){const P=c[H],V=P.color,W=P.intensity,O=P.distance;let D=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===as?D=P.shadow.map.texture:D=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=V.r*W,d+=V.g*W,u+=V.b*W;else if(P.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(P.sh.coefficients[N],W);R++}else if(P.isSunLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,X=n.get(P);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),i.sunShadow[m]=X,i.sunShadowMap[m]=D;const ae=z.getViewportCount();for(let xe=0;xe<ae;xe++)i.sunShadowMatrix[_+xe]=z.getMatrix(xe),i.sunShadowCascade[_+xe]=z._cascadeData[xe];_+=ae,m++}i.sun[h]=N,h++}else if(P.isDirectionalLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,X=n.get(P);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.directionalShadow[g]=X,i.directionalShadowMap[g]=D,i.directionalShadowMatrix[g]=P.shadow.matrix,T++}i.directional[g]=N,g++}else if(P.isSpotLight){const N=e.get(P);N.position.setFromMatrixPosition(P.matrixWorld),N.color.copy(V).multiplyScalar(W),N.distance=O,N.coneCos=Math.cos(P.angle),N.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),N.decay=P.decay,i.spot[v]=N;const z=P.shadow;if(P.map&&(i.spotLightMap[x]=P.map,x++,z.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[v]=z.matrix,P.castShadow){const X=n.get(P);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=D,b++}v++}else if(P.isRectAreaLight){const N=e.get(P);N.color.copy(V).multiplyScalar(W),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),i.rectArea[y]=N,y++}else if(P.isPointLight){const N=e.get(P);if(N.color.copy(P.color).multiplyScalar(P.intensity),N.distance=P.distance,N.decay=P.decay,P.castShadow){const z=P.shadow,X=n.get(P);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,i.pointShadow[p]=X,i.pointShadowMap[p]=D,i.pointShadowMatrix[p]=P.shadow.matrix,w++}i.point[p]=N,p++}else if(P.isHemisphereLight){const N=e.get(P);N.skyColor.copy(P.color).multiplyScalar(W),N.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[S]=N,S++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=u;const U=i.hash;(U.sunLength!==h||U.directionalLength!==g||U.pointLength!==p||U.spotLength!==v||U.rectAreaLength!==y||U.hemiLength!==S||U.numSunShadows!==m||U.numDirectionalShadows!==T||U.numPointShadows!==w||U.numSpotShadows!==b||U.numSpotMaps!==x||U.numLightProbes!==R)&&(i.sun.length=h,i.directional.length=g,i.spot.length=v,i.rectArea.length=y,i.point.length=p,i.hemi.length=S,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+x-A,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,U.sunLength=h,U.directionalLength=g,U.pointLength=p,U.spotLength=v,U.rectAreaLength=y,U.hemiLength=S,U.numSunShadows=m,U.numDirectionalShadows=T,U.numPointShadows=w,U.numSpotShadows=b,U.numSpotMaps=x,U.numLightProbes=R,i.version=pN++)}function l(c,f){let d=0,u=0,h=0,m=0,_=0,g=0;const p=f.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){const S=c[v];if(S.isSunLight){const T=i.sun[d];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),d++}else if(S.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),u++}else if(S.isSpotLight){const T=i.spot[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),o.identity(),s.copy(S.matrixWorld),s.premultiply(p),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const T=i.hemi[g];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function Ov(t){const e=new gN(t),n=[],i=[],r=[];function s(u){d.camera=u,n.length=0,i.length=0,r.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(n)}function f(u){e.setupView(n,u)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function vN(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Ov(t),e.set(r,[a])):s>=o.length?(a=new Ov(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const xN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_N=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yN=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],SN=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],kv=new wt,Fo=new $,Of=new $;function MN(t,e,n){let i=new cm;const r=new Je,s=new Je,o=new Et,a=new LP,l=new DP,c={},f=n.maxTextureSize,d={[ss]:Mn,[Mn]:ss,[Di]:Di},u=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:xN,fragmentShader:_N}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const m=new ai;m.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $i(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let p=this.type;this.render=function(w,b,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===xR&&(ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zl);const A=t.getRenderTarget(),R=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Vi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=p!==this.type;B&&b.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=w.length;P<V;P++){const W=w[P],O=W.shadow;if(O===void 0){ke("WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const D=O.getFrameExtents();r.multiply(D),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/D.x),r.x=s.x*D.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/D.y),r.y=s.y*D.y,O.mapSize.y=s.y));const N=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=N,O.map===null||B===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ho){if(W.isPointLight){ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new ri(r.x,r.y,{format:as,type:Ei,minFilter:rn,magFilter:rn,generateMipmaps:!1}),O.map.texture.name=W.name+".shadowMap",O.map.depthTexture=new Pa(r.x,r.y,gi),O.map.depthTexture.name=W.name+".shadowMapDepth",O.map.depthTexture.format=qi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=jt,O.map.depthTexture.magFilter=jt}else W.isPointLight?(O.map=new cM(r.x),O.map.depthTexture=new wP(r.x,Mi)):(O.map=new ri(r.x,r.y),O.map.depthTexture=new Pa(r.x,r.y,Mi)),O.map.depthTexture.name=W.name+".shadowMap",O.map.depthTexture.format=qi,this.type===Zl?(O.map.depthTexture.compareFunction=N?am:om,O.map.depthTexture.minFilter=rn,O.map.depthTexture.magFilter=rn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=jt,O.map.depthTexture.magFilter=jt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==r.x||O.map.height!==r.y)&&O.map.setSize(r.x,r.y);const z=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();W.isPointLight!==!0&&O.updateMatrices(W,x);for(let X=0;X<z;X++){const ae=O.getCamera(X);if(W.isPointLight){const xe=O.camera,Ue=O.matrix,Ce=W.distance||xe.far;Ce!==xe.far&&(xe.far=Ce,xe.updateProjectionMatrix()),Fo.setFromMatrixPosition(W.matrixWorld),xe.position.copy(Fo),Of.copy(xe.position),Of.add(yN[X]),xe.up.copy(SN[X]),xe.lookAt(Of),xe.updateMatrixWorld(),Ue.makeTranslation(-Fo.x,-Fo.y,-Fo.z),kv.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(kv,xe.coordinateSystem,xe.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,X),t.clear();else{X===0&&(t.setRenderTarget(O.map),t.clear());const xe=O.getViewport(X);o.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),H.viewport(o)}i=O.getFrustum(X),S(b,x,ae,W,this.type)}O.isPointLightShadow!==!0&&this.type===Ho&&v(O,x),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(A,R,U)};function v(w,b){const x=e.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null?w.mapPass=new ri(r.x,r.y,{format:as,type:Ei}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(b,null,x,u,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(b,null,x,h,_,null)}function y(w,b,x,A){let R=null;const U=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)R=U;else if(R=x.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const H=R.uuid,B=b.uuid;let P=c[H];P===void 0&&(P={},c[H]=P);let V=P[B];V===void 0&&(V=R.clone(),P[B]=V,b.addEventListener("dispose",T)),R=V}if(R.visible=b.visible,R.wireframe=b.wireframe,A===Ho?R.side=b.shadowSide!==null?b.shadowSide:b.side:R.side=b.shadowSide!==null?b.shadowSide:d[b.side],R.alphaMap=b.alphaMap,R.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,R.map=b.map,R.clipShadows=b.clipShadows,R.clippingPlanes=b.clippingPlanes,R.clipIntersection=b.clipIntersection,R.displacementMap=b.displacementMap,R.displacementScale=b.displacementScale,R.displacementBias=b.displacementBias,R.wireframeLinewidth=b.wireframeLinewidth,R.linewidth=b.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const H=t.properties.get(R);H.light=x}return R}function S(w,b,x,A,R){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Ho)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const B=e.update(w),P=w.material;if(Array.isArray(P)){const V=B.groups;for(let W=0,O=V.length;W<O;W++){const D=V[W],N=P[D.materialIndex];if(N&&N.visible){const z=y(w,N,A,R);w.onBeforeShadow(t,w,b,x,B,z,D),t.renderBufferDirect(x,null,B,z,w,D),w.onAfterShadow(t,w,b,x,B,z,D)}}}else if(P.visible){const V=y(w,P,A,R);w.onBeforeShadow(t,w,b,x,B,V,null),t.renderBufferDirect(x,null,B,V,w,null),w.onAfterShadow(t,w,b,x,B,V,null)}}const H=w.children;for(let B=0,P=H.length;B<P;B++)S(H[B],b,x,A,R)}function T(w){w.target.removeEventListener("dispose",T);for(const x in c){const A=c[x],R=w.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}function EN(t,e){function n(){let F=!1;const pe=new Et;let te=null;const me=new Et(0,0,0,0);return{setMask:function(Se){te!==Se&&!F&&(t.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){F=Se},setClear:function(Se,ie,Ie,be,ut){ut===!0&&(Se*=be,ie*=be,Ie*=be),pe.set(Se,ie,Ie,be),me.equals(pe)===!1&&(t.clearColor(Se,ie,Ie,be),me.copy(pe))},reset:function(){F=!1,te=null,me.set(-1,0,0,0)}}}function i(){let F=!1,pe=!1,te=null,me=null,Se=null;return{setReversed:function(ie){if(pe!==ie){const Ie=e.get("EXT_clip_control");ie?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),pe=ie;const be=Se;Se=null,this.setClear(be)}},getReversed:function(){return pe},setTest:function(ie){ie?ee(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(ie){te!==ie&&!F&&(t.depthMask(ie),te=ie)},setFunc:function(ie){if(pe&&(ie=JR[ie]),me!==ie){switch(ie){case Yd:t.depthFunc(t.NEVER);break;case qd:t.depthFunc(t.ALWAYS);break;case $d:t.depthFunc(t.LESS);break;case Aa:t.depthFunc(t.LEQUAL);break;case Kd:t.depthFunc(t.EQUAL);break;case Zd:t.depthFunc(t.GEQUAL);break;case Qd:t.depthFunc(t.GREATER);break;case Jd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=ie}},setLocked:function(ie){F=ie},setClear:function(ie){Se!==ie&&(Se=ie,pe&&(ie=1-ie),t.clearDepth(ie))},reset:function(){F=!1,te=null,me=null,Se=null,pe=!1}}}function r(){let F=!1,pe=null,te=null,me=null,Se=null,ie=null,Ie=null,be=null,ut=null;return{setTest:function(it){F||(it?ee(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(it){pe!==it&&!F&&(t.stencilMask(it),pe=it)},setFunc:function(it,jn,li){(te!==it||me!==jn||Se!==li)&&(t.stencilFunc(it,jn,li),te=it,me=jn,Se=li)},setOp:function(it,jn,li){(ie!==it||Ie!==jn||be!==li)&&(t.stencilOp(it,jn,li),ie=it,Ie=jn,be=li)},setLocked:function(it){F=it},setClear:function(it){ut!==it&&(t.clearStencil(it),ut=it)},reset:function(){F=!1,pe=null,te=null,me=null,Se=null,ie=null,Ie=null,be=null,ut=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},d={},u={},h=new WeakMap,m=[],_=null,g=!1,p=null,v=null,y=null,S=null,T=null,w=null,b=null,x=new Ze(0,0,0),A=0,R=!1,U=null,H=null,B=null,P=null,V=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,D=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=D>=1):N.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=D>=2);let z=null,X={};const ae=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),Ue=new Et().fromArray(ae),Ce=new Et().fromArray(xe);function Re(F,pe,te,me){const Se=new Uint8Array(4),ie=t.createTexture();t.bindTexture(F,ie),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<te;Ie++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(pe+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return ie}const Z={};Z[t.TEXTURE_2D]=Re(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=Re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=Re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=Re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(t.DEPTH_TEST),o.setFunc(Aa),Xe(!1),xt(V0),ee(t.CULL_FACE),We(Vi);function ee(F){f[F]!==!0&&(t.enable(F),f[F]=!0)}function le(F){f[F]!==!1&&(t.disable(F),f[F]=!1)}function ce(F,pe){return u[F]!==pe?(t.bindFramebuffer(F,pe),u[F]=pe,F===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=pe),F===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function se(F,pe){let te=m,me=!1;if(F){te=h.get(pe),te===void 0&&(te=[],h.set(pe,te));const Se=F.textures;if(te.length!==Se.length||te[0]!==t.COLOR_ATTACHMENT0){for(let ie=0,Ie=Se.length;ie<Ie;ie++)te[ie]=t.COLOR_ATTACHMENT0+ie;te.length=Se.length,me=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,me=!0);me&&t.drawBuffers(te)}function Le(F){return _!==F?(t.useProgram(F),_=F,!0):!1}const pt={[Ls]:t.FUNC_ADD,[yR]:t.FUNC_SUBTRACT,[SR]:t.FUNC_REVERSE_SUBTRACT};pt[MR]=t.MIN,pt[ER]=t.MAX;const Ve={[TR]:t.ZERO,[wR]:t.ONE,[AR]:t.SRC_COLOR,[CS]:t.SRC_ALPHA,[DR]:t.SRC_ALPHA_SATURATE,[PR]:t.DST_COLOR,[CR]:t.DST_ALPHA,[bR]:t.ONE_MINUS_SRC_COLOR,[RS]:t.ONE_MINUS_SRC_ALPHA,[LR]:t.ONE_MINUS_DST_COLOR,[RR]:t.ONE_MINUS_DST_ALPHA,[NR]:t.CONSTANT_COLOR,[IR]:t.ONE_MINUS_CONSTANT_COLOR,[UR]:t.CONSTANT_ALPHA,[FR]:t.ONE_MINUS_CONSTANT_ALPHA};function We(F,pe,te,me,Se,ie,Ie,be,ut,it){if(F===Vi){g===!0&&(le(t.BLEND),g=!1);return}if(g===!1&&(ee(t.BLEND),g=!0),F!==_R){if(F!==p||it!==R){if((v!==Ls||T!==Ls)&&(t.blendEquation(t.FUNC_ADD),v=Ls,T=Ls),it)switch(F){case ra:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jd:t.blendFunc(t.ONE,t.ONE);break;case z0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case H0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:et("WebGLState: Invalid blending: ",F);break}else switch(F){case ra:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case z0:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case H0:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",F);break}y=null,S=null,w=null,b=null,x.set(0,0,0),A=0,p=F,R=it}return}Se=Se||pe,ie=ie||te,Ie=Ie||me,(pe!==v||Se!==T)&&(t.blendEquationSeparate(pt[pe],pt[Se]),v=pe,T=Se),(te!==y||me!==S||ie!==w||Ie!==b)&&(t.blendFuncSeparate(Ve[te],Ve[me],Ve[ie],Ve[Ie]),y=te,S=me,w=ie,b=Ie),(be.equals(x)===!1||ut!==A)&&(t.blendColor(be.r,be.g,be.b,ut),x.copy(be),A=ut),p=F,R=!1}function nt(F,pe){F.side===Di?le(t.CULL_FACE):ee(t.CULL_FACE);let te=F.side===Mn;pe&&(te=!te),Xe(te),F.blending===ra&&F.transparent===!1?We(Vi):We(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const me=F.stencilWrite;a.setTest(me),me&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),mn(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(F){U!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),U=F)}function xt(F){F!==gR?(ee(t.CULL_FACE),F!==H&&(F===V0?t.cullFace(t.BACK):F===vR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),H=F}function Vt(F){F!==B&&(O&&t.lineWidth(F),B=F)}function mn(F,pe,te){F?(ee(t.POLYGON_OFFSET_FILL),(P!==pe||V!==te)&&(P=pe,V=te,o.getReversed()&&(pe=-pe),t.polygonOffset(pe,te))):le(t.POLYGON_OFFSET_FILL)}function yt(F){F?ee(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function Lt(F){F===void 0&&(F=t.TEXTURE0+W-1),z!==F&&(t.activeTexture(F),z=F)}function k(F,pe,te){te===void 0&&(z===null?te=t.TEXTURE0+W-1:te=z);let me=X[te];me===void 0&&(me={type:void 0,texture:void 0},X[te]=me),(me.type!==F||me.texture!==pe)&&(z!==te&&(t.activeTexture(te),z=te),t.bindTexture(F,pe||Z[F]),me.type=F,me.texture=pe)}function $t(){const F=X[z];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function st(){try{t.compressedTexImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function M(){try{t.texSubImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function G(){try{t.texSubImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function ue(){try{t.texStorage2D(...arguments)}catch(F){et("WebGLState:",F)}}function fe(){try{t.texStorage3D(...arguments)}catch(F){et("WebGLState:",F)}}function J(){try{t.texImage2D(...arguments)}catch(F){et("WebGLState:",F)}}function ne(){try{t.texImage3D(...arguments)}catch(F){et("WebGLState:",F)}}function de(F){return d[F]!==void 0?d[F]:t.getParameter(F)}function De(F,pe){d[F]!==pe&&(t.pixelStorei(F,pe),d[F]=pe)}function ge(F){Ue.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Ue.copy(F))}function he(F){Ce.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ce.copy(F))}function Ne(F,pe){let te=c.get(pe);te===void 0&&(te=new WeakMap,c.set(pe,te));let me=te.get(F);me===void 0&&(me=t.getUniformBlockIndex(pe,F.name),te.set(F,me))}function Fe(F,pe){const me=c.get(pe).get(F);l.get(pe)!==me&&(t.uniformBlockBinding(pe,me,F.__bindingPointIndex),l.set(pe,me))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},d={},z=null,X={},u={},h=new WeakMap,m=[],_=null,g=!1,p=null,v=null,y=null,S=null,T=null,w=null,b=null,x=new Ze(0,0,0),A=0,R=!1,U=null,H=null,B=null,P=null,V=null,Ue.set(0,0,t.canvas.width,t.canvas.height),Ce.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:le,bindFramebuffer:ce,drawBuffers:se,useProgram:Le,setBlending:We,setMaterial:nt,setFlipSided:Xe,setCullFace:xt,setLineWidth:Vt,setPolygonOffset:mn,setScissorTest:yt,activeTexture:Lt,bindTexture:k,unbindTexture:$t,compressedTexImage2D:st,compressedTexImage3D:C,texImage2D:J,texImage3D:ne,pixelStorei:De,getParameter:de,updateUBOMapping:Ne,uniformBlockBinding:Fe,texStorage2D:ue,texStorage3D:fe,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:ge,viewport:he,reset:ze}}function TN(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap,d=new Set;let u;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return m?new OffscreenCanvas(C,M):Bc("canvas")}function g(C,M,G){let q=1;const Q=st(C);if((Q.width>G||Q.height>G)&&(q=G/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ue=Math.floor(q*Q.width),fe=Math.floor(q*Q.height);u===void 0&&(u=_(ue,fe));const J=M?_(ue,fe):u;return J.width=ue,J.height=fe,J.getContext("2d").drawImage(C,0,0,ue,fe),ke("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ue+"x"+fe+")."),J}else return"data"in C&&ke("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function p(C){return C.generateMipmaps}function v(C){t.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(C,M,G,q,Q,ue=!1){if(C!==null){if(t[C]!==void 0)return t[C];ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=M;if(M===t.RED&&(G===t.FLOAT&&(J=t.R32F),G===t.HALF_FLOAT&&(J=t.R16F),G===t.UNSIGNED_BYTE&&(J=t.R8),G===t.UNSIGNED_SHORT&&fe&&(J=fe.R16_EXT),G===t.SHORT&&fe&&(J=fe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.R8UI),G===t.UNSIGNED_SHORT&&(J=t.R16UI),G===t.UNSIGNED_INT&&(J=t.R32UI),G===t.BYTE&&(J=t.R8I),G===t.SHORT&&(J=t.R16I),G===t.INT&&(J=t.R32I)),M===t.RG&&(G===t.FLOAT&&(J=t.RG32F),G===t.HALF_FLOAT&&(J=t.RG16F),G===t.UNSIGNED_BYTE&&(J=t.RG8),G===t.UNSIGNED_SHORT&&fe&&(J=fe.RG16_EXT),G===t.SHORT&&fe&&(J=fe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RG8UI),G===t.UNSIGNED_SHORT&&(J=t.RG16UI),G===t.UNSIGNED_INT&&(J=t.RG32UI),G===t.BYTE&&(J=t.RG8I),G===t.SHORT&&(J=t.RG16I),G===t.INT&&(J=t.RG32I)),M===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGB8UI),G===t.UNSIGNED_SHORT&&(J=t.RGB16UI),G===t.UNSIGNED_INT&&(J=t.RGB32UI),G===t.BYTE&&(J=t.RGB8I),G===t.SHORT&&(J=t.RGB16I),G===t.INT&&(J=t.RGB32I)),M===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),G===t.UNSIGNED_INT&&(J=t.RGBA32UI),G===t.BYTE&&(J=t.RGBA8I),G===t.SHORT&&(J=t.RGBA16I),G===t.INT&&(J=t.RGBA32I)),M===t.RGB&&(G===t.UNSIGNED_SHORT&&fe&&(J=fe.RGB16_EXT),G===t.SHORT&&fe&&(J=fe.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),M===t.RGBA){const ne=ue?kc:qe.getTransfer(Q);G===t.FLOAT&&(J=t.RGBA32F),G===t.HALF_FLOAT&&(J=t.RGBA16F),G===t.UNSIGNED_BYTE&&(J=ne===ot?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&fe&&(J=fe.RGBA16_EXT),G===t.SHORT&&fe&&(J=fe.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function T(C,M){let G;return C?M===null||M===Mi||M===Ca?G=t.DEPTH24_STENCIL8:M===gi?G=t.DEPTH32F_STENCIL8:M===ba&&(G=t.DEPTH24_STENCIL8,ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Mi||M===Ca?G=t.DEPTH_COMPONENT24:M===gi?G=t.DEPTH_COMPONENT32F:M===ba&&(G=t.DEPTH_COMPONENT16),G}function w(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==jt&&C.minFilter!==rn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){const M=C.target;M.removeEventListener("dispose",b),A(M),M.isVideoTexture&&f.delete(M),M.isHTMLTexture&&d.delete(M)}function x(C){const M=C.target;M.removeEventListener("dispose",x),U(M)}function A(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,q=h.get(G);if(q){const Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&R(C),Object.keys(q).length===0&&h.delete(G)}i.remove(C)}function R(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const G=C.source,q=h.get(G);delete q[M.__cacheKey],o.memory.textures--}function U(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let q=0,Q=G.length;q<Q;q++){const ue=i.get(G[q]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(G[q])}i.remove(C)}let H=0;function B(){H=0}function P(){return H}function V(C){H=C}function W(){const C=H;return C>=r.maxTextures&&ke("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),H+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function D(C,M){const G=i.get(C);if(C.isVideoTexture&&k(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const q=C.image;if(q===null)ke("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ke("WebGLRenderer: Texture marked for update but image is incomplete");else{le(G,C,M);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function N(C,M){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){le(G,C,M);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function z(C,M){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){le(G,C,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function X(C,M){const G=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){ce(G,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const ae={[eh]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[th]:t.MIRRORED_REPEAT},xe={[jt]:t.NEAREST,[BR]:t.NEAREST_MIPMAP_NEAREST,[hl]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[af]:t.LINEAR_MIPMAP_NEAREST,[$r]:t.LINEAR_MIPMAP_LINEAR},Ue={[GR]:t.NEVER,[qR]:t.ALWAYS,[WR]:t.LESS,[om]:t.LEQUAL,[XR]:t.EQUAL,[am]:t.GEQUAL,[jR]:t.GREATER,[YR]:t.NOTEQUAL};function Ce(C,M){if(M.type===gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===rn||M.magFilter===af||M.magFilter===hl||M.magFilter===$r||M.minFilter===rn||M.minFilter===af||M.minFilter===hl||M.minFilter===$r)&&ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,ae[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,ae[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,ae[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,xe[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ue[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jt||M.minFilter!==hl&&M.minFilter!==$r||M.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Re(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));const q=M.source;let Q=h.get(q);Q===void 0&&(Q={},h.set(q,Q));const ue=O(M);if(ue!==C.__cacheKey){Q[ue]===void 0&&(Q[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[ue].usedTimes++;const fe=Q[C.__cacheKey];fe!==void 0&&(Q[C.__cacheKey].usedTimes--,fe.usedTimes===0&&R(M)),C.__cacheKey=ue,C.__webglTexture=Q[ue].texture}return G}function Z(C,M,G){return Math.floor(Math.floor(C/G)/M)}function ee(C,M,G,q){const ue=C.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,G,q,M.data);else{ue.sort((De,ge)=>De.start-ge.start);let fe=0;for(let De=1;De<ue.length;De++){const ge=ue[fe],he=ue[De],Ne=ge.start+ge.count,Fe=Z(he.start,M.width,4),ze=Z(ge.start,M.width,4);he.start<=Ne+1&&Fe===ze&&Z(he.start+he.count-1,M.width,4)===Fe?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++fe,ue[fe]=he)}ue.length=fe+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),ne=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let De=0,ge=ue.length;De<ge;De++){const he=ue[De],Ne=Math.floor(he.start/4),Fe=Math.ceil(he.count/4),ze=Ne%M.width,F=Math.floor(Ne/M.width),pe=Fe,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,ze,F,pe,te,G,q,M.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ne),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function le(C,M,G){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const Q=Re(C,M),ue=M.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+G);const fe=i.get(ue);if(ue.version!==fe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const te=qe.getPrimaries(qe.workingColorSpace),me=M.colorSpace===hr?null:qe.getPrimaries(M.colorSpace),Se=M.colorSpace===hr||te===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=g(M.image,!1,r.maxTextureSize);ne=$t(M,ne);const de=s.convert(M.format,M.colorSpace),De=s.convert(M.type);let ge=S(M.internalFormat,de,De,M.normalized,M.colorSpace,M.isVideoTexture);Ce(q,M);let he;const Ne=M.mipmaps,Fe=M.isVideoTexture!==!0,ze=fe.__version===void 0||Q===!0,F=ue.dataReady,pe=w(M,ne);if(M.isDepthTexture)ge=T(M.format===Kr,M.type),ze&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,ge,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,ge,ne.width,ne.height,0,de,De,null));else if(M.isDataTexture)if(Ne.length>0){Fe&&ze&&n.texStorage2D(t.TEXTURE_2D,pe,ge,Ne[0].width,Ne[0].height);for(let te=0,me=Ne.length;te<me;te++)he=Ne[te],Fe?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,he.width,he.height,de,De,he.data):n.texImage2D(t.TEXTURE_2D,te,ge,he.width,he.height,0,de,De,he.data);M.generateMipmaps=!1}else Fe?(ze&&n.texStorage2D(t.TEXTURE_2D,pe,ge,ne.width,ne.height),F&&ee(M,ne,de,De)):n.texImage2D(t.TEXTURE_2D,0,ge,ne.width,ne.height,0,de,De,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ge,Ne[0].width,Ne[0].height,ne.depth);for(let te=0,me=Ne.length;te<me;te++)if(he=Ne[te],M.format!==ti)if(de!==null)if(Fe){if(F)if(M.layerUpdates.size>0){const Se=gv(he.width,he.height,M.format,M.type);for(const ie of M.layerUpdates){const Ie=he.data.subarray(ie*Se/he.data.BYTES_PER_ELEMENT,(ie+1)*Se/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,ie,he.width,he.height,1,de,Ie)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,de,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,ge,he.width,he.height,ne.depth,0,he.data,0,0);else ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,he.width,he.height,ne.depth,de,De,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,ge,he.width,he.height,ne.depth,0,de,De,he.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Fe&&ze&&n.texStorage2D(t.TEXTURE_2D,pe,ge,Ne[0].width,Ne[0].height);for(let te=0,me=Ne.length;te<me;te++)he=Ne[te],M.format!==ti?de!==null?Fe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,he.width,he.height,de,he.data):n.compressedTexImage2D(t.TEXTURE_2D,te,ge,he.width,he.height,0,he.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,he.width,he.height,de,De,he.data):n.texImage2D(t.TEXTURE_2D,te,ge,he.width,he.height,0,de,De,he.data)}else if(M.isDataArrayTexture)if(Fe){if(ze&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ge,ne.width,ne.height,ne.depth),F)if(M.layerUpdates.size>0){const te=gv(ne.width,ne.height,M.format,M.type);for(const me of M.layerUpdates){const Se=ne.data.subarray(me*te/ne.data.BYTES_PER_ELEMENT,(me+1)*te/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ne.width,ne.height,1,de,De,Se)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(M.isData3DTexture)Fe?(ze&&n.texStorage3D(t.TEXTURE_3D,pe,ge,ne.width,ne.height,ne.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(M.isFramebufferTexture){if(ze)if(Fe)n.texStorage2D(t.TEXTURE_2D,pe,ge,ne.width,ne.height);else{let te=ne.width,me=ne.height;for(let Se=0;Se<pe;Se++)n.texImage2D(t.TEXTURE_2D,Se,ge,te,me,0,de,De,null),te>>=1,me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(M),te.onpaint=me=>{const Se=me.changedElements;for(const ie of d)Se.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ne);else{const Se=t.RGBA,ie=t.RGBA,Ie=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Se,ie,Ie,ne)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Fe&&ze){const te=st(Ne[0]);n.texStorage2D(t.TEXTURE_2D,pe,ge,te.width,te.height)}for(let te=0,me=Ne.length;te<me;te++)he=Ne[te],Fe?F&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,de,De,he):n.texImage2D(t.TEXTURE_2D,te,ge,de,De,he);M.generateMipmaps=!1}else if(Fe){if(ze){const te=st(ne);n.texStorage2D(t.TEXTURE_2D,pe,ge,te.width,te.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,De,ne)}else n.texImage2D(t.TEXTURE_2D,0,ge,de,De,ne);p(M)&&v(q),fe.__version=ue.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ce(C,M,G){if(M.image.length!==6)return;const q=Re(C,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const ue=i.get(Q);if(Q.version!==ue.__version||q===!0){n.activeTexture(t.TEXTURE0+G);const fe=qe.getPrimaries(qe.workingColorSpace),J=M.colorSpace===hr?null:qe.getPrimaries(M.colorSpace),ne=M.colorSpace===hr||fe===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,De=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let ie=0;ie<6;ie++)!de&&!De?ge[ie]=g(M.image[ie],!0,r.maxCubemapSize):ge[ie]=De?M.image[ie].image:M.image[ie],ge[ie]=$t(M,ge[ie]);const he=ge[0],Ne=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type),ze=S(M.internalFormat,Ne,Fe,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,pe=ue.__version===void 0||q===!0,te=Q.dataReady;let me=w(M,he);Ce(t.TEXTURE_CUBE_MAP,M);let Se;if(de){F&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,ze,he.width,he.height);for(let ie=0;ie<6;ie++){Se=ge[ie].mipmaps;for(let Ie=0;Ie<Se.length;Ie++){const be=Se[Ie];M.format!==ti?Ne!==null?F?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,be.width,be.height,Ne,be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,ze,be.width,be.height,0,be.data):ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,0,0,be.width,be.height,Ne,Fe,be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie,ze,be.width,be.height,0,Ne,Fe,be.data)}}}else{if(Se=M.mipmaps,F&&pe){Se.length>0&&me++;const ie=st(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,ze,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(De){F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ge[ie].width,ge[ie].height,Ne,Fe,ge[ie].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,ge[ie].width,ge[ie].height,0,Ne,Fe,ge[ie].data);for(let Ie=0;Ie<Se.length;Ie++){const ut=Se[Ie].image[ie].image;F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,ut.width,ut.height,Ne,Fe,ut.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,ze,ut.width,ut.height,0,Ne,Fe,ut.data)}}else{F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ne,Fe,ge[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ze,Ne,Fe,ge[ie]);for(let Ie=0;Ie<Se.length;Ie++){const be=Se[Ie];F?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,0,0,Ne,Fe,be.image[ie]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ie+1,ze,Ne,Fe,be.image[ie])}}}p(M)&&v(t.TEXTURE_CUBE_MAP),ue.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function se(C,M,G,q,Q,ue){const fe=s.convert(G.format,G.colorSpace),J=s.convert(G.type),ne=S(G.internalFormat,fe,J,G.normalized,G.colorSpace),de=i.get(M),De=i.get(G);if(De.__renderTarget=M,!de.__hasExternalTextures){const ge=Math.max(1,M.width>>ue),he=Math.max(1,M.height>>ue);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ue,ne,ge,he,M.depth,0,fe,J,null):n.texImage2D(Q,ue,ne,ge,he,0,fe,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Lt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,De.__webglTexture,0,yt(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,De.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Le(C,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ue=T(M.stencilBuffer,Q),fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Lt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(M),ue,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(M),ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ue,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,C)}else{const q=M.textures;for(let Q=0;Q<q.length;Q++){const ue=q[Q],fe=s.convert(ue.format,ue.colorSpace),J=s.convert(ue.type),ne=S(ue.internalFormat,fe,J,ue.normalized,ue.colorSpace);Lt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(M),ne,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(M),ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pt(C,M,G){const q=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,M.depthTexture);const de=s.convert(M.depthTexture.format),De=s.convert(M.depthTexture.type);let ge;M.depthTexture.format===qi?ge=t.DEPTH_COMPONENT24:M.depthTexture.format===Kr&&(ge=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,M.width,M.height,0,de,De,null)}}else D(M.depthTexture,0);const ue=Q.__webglTexture,fe=yt(M),J=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,ne=M.depthTexture.format===Kr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===qi)Lt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,J,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,J,ue,0);else if(M.depthTexture.format===Kr)Lt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,J,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ne,J,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ve(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)pt(M.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?pt(M.__webglFramebuffer[0],C,0):pt(M.__webglFramebuffer,C,0)}else if(G){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),Le(M.__webglDepthbuffer[q],C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Le(M.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(C,M,G){const q=i.get(C);M!==void 0&&se(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ve(C)}function nt(C){const M=C.texture,G=i.get(C),q=i.get(M);C.addEventListener("dispose",x);const Q=C.textures,ue=C.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),ue){G.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[J]=[];for(let ne=0;ne<M.mipmaps.length;ne++)G.__webglFramebuffer[J][ne]=t.createFramebuffer()}else G.__webglFramebuffer[J]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)G.__webglFramebuffer[J]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(fe)for(let J=0,ne=Q.length;J<ne;J++){const de=i.get(Q[J]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Lt(C)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let J=0;J<Q.length;J++){const ne=Q[J];G.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[J]);const de=s.convert(ne.format,ne.colorSpace),De=s.convert(ne.type),ge=S(ne.internalFormat,de,De,ne.normalized,ne.colorSpace,C.isXRRenderTarget===!0),he=yt(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ge,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,G.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ce(t.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)se(G.__webglFramebuffer[J][ne],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ne);else se(G.__webglFramebuffer[J],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let J=0,ne=Q.length;J<ne;J++){const de=Q[J],De=i.get(de);let ge=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,De.__webglTexture),Ce(ge,de),se(G.__webglFramebuffer,C,de,t.COLOR_ATTACHMENT0+J,ge,0),p(de)&&v(ge)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,q.__webglTexture),Ce(J,M),M.mipmaps&&M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)se(G.__webglFramebuffer[ne],C,M,t.COLOR_ATTACHMENT0,J,ne);else se(G.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,J,0);p(M)&&v(J),n.unbindTexture()}C.depthBuffer&&Ve(C)}function Xe(C){const M=C.textures;for(let G=0,q=M.length;G<q;G++){const Q=M[G];if(p(Q)){const ue=y(C),fe=i.get(Q).__webglTexture;n.bindTexture(ue,fe),v(ue),n.unbindTexture()}}}const xt=[],Vt=[];function mn(C){if(C.samples>0){if(Lt(C)===!1){const M=C.textures,G=C.width,q=C.height;let Q=t.COLOR_BUFFER_BIT;const ue=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(C),J=M.length>1;if(J)for(let de=0;de<M.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ne=C.texture.mipmaps;ne&&ne.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<M.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const De=i.get(M[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,G,q,0,0,G,q,Q,t.NEAREST),l===!0&&(xt.length=0,Vt.length=0,xt.push(t.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(xt.push(ue),Vt.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Vt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let de=0;de<M.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const De=i.get(M[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function yt(C){return Math.min(r.maxSamples,C.samples)}function Lt(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function k(C){const M=o.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function $t(C,M){const G=C.colorSpace,q=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Oc&&G!==hr&&(qe.getTransfer(G)===ot?(q!==ti||Q!==Cn)&&ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",G)),M}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.getTextureUnits=P,this.setTextureUnits=V,this.setTexture2D=D,this.setTexture2DArray=N,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=We,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Lt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wN(t,e){function n(i,r=hr){let s;const o=qe.getTransfer(r);if(i===Cn)return t.UNSIGNED_BYTE;if(i===tm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===nm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===zS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===HS)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===BS)return t.BYTE;if(i===VS)return t.SHORT;if(i===ba)return t.UNSIGNED_SHORT;if(i===em)return t.INT;if(i===Mi)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===Ei)return t.HALF_FLOAT;if(i===GS)return t.ALPHA;if(i===WS)return t.RGB;if(i===ti)return t.RGBA;if(i===qi)return t.DEPTH_COMPONENT;if(i===Kr)return t.DEPTH_STENCIL;if(i===XS)return t.RED;if(i===im)return t.RED_INTEGER;if(i===as)return t.RG;if(i===rm)return t.RG_INTEGER;if(i===sm)return t.RGBA_INTEGER;if(i===Ql||i===Jl||i===ec||i===tc)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nh||i===ih||i===rh||i===sh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ih)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===oh||i===ah||i===lh||i===ch||i===uh||i===Uc||i===fh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===oh||i===ah)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===lh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ch)return s.COMPRESSED_R11_EAC;if(i===uh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Uc)return s.COMPRESSED_RG11_EAC;if(i===fh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===dh||i===hh||i===ph||i===mh||i===gh||i===vh||i===xh||i===_h||i===yh||i===Sh||i===Mh||i===Eh||i===Th||i===wh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===dh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_h)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Eh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Th)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wh)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ah||i===bh||i===Ch)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ah)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ch)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rh||i===Ph||i===Fc||i===Lh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Rh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ph)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ca?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const AN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new nM(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ti({vertexShader:AN,fragmentShader:bN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new $i(new pu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RN extends hs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,u=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",g=new CN,p={},v=n.getContextAttributes();let y=null,S=null;const T=[],w=[],b=new Je;let x=null,A=null;const R=new bn;R.viewport=new Et;const U=new bn;U.viewport=new Et;const H=[R,U],B=new OP;let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=T[Z];return ee===void 0&&(ee=new gf,T[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=T[Z];return ee===void 0&&(ee=new gf,T[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=T[Z];return ee===void 0&&(ee=new gf,T[Z]=ee),ee.getHandSpace()};function W(Z){const ee=w.indexOf(Z.inputSource);if(ee===-1)return;const le=T[ee];le!==void 0&&(le.update(Z.inputSource,Z.frame,c||o),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",D);for(let Z=0;Z<T.length;Z++){const ee=w[Z];ee!==null&&(w[Z]=null,T[Z].disconnect(ee))}P=null,V=null,g.reset();for(const Z in p)delete p[Z];if(e.setRenderTarget(y),h=null,u=null,d=null,r=null,S=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),A!==null){const Z=A.camera;Z.fov=A.fov,Z.zoom=A.zoom,Z.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",O),r.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,ce=null,se=null;v.depth&&(se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=v.stencil?Kr:qi,ce=v.stencil?Ca:Mi);const Le={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Le),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new ri(u.textureWidth,u.textureHeight,{format:ti,type:Cn,depthTexture:new Pa(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new ri(h.framebufferWidth,h.framebufferHeight,{format:ti,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(Z){for(let ee=0;ee<Z.removed.length;ee++){const le=Z.removed[ee],ce=w.indexOf(le);ce>=0&&(w[ce]=null,T[ce].disconnect(le))}for(let ee=0;ee<Z.added.length;ee++){const le=Z.added[ee];let ce=w.indexOf(le);if(ce===-1){for(let Le=0;Le<T.length;Le++)if(Le>=w.length){w.push(le),ce=Le;break}else if(w[Le]===null){w[Le]=le,ce=Le;break}if(ce===-1)break}const se=T[ce];se&&se.connect(le)}}const N=new $,z=new $;function X(Z,ee,le){N.setFromMatrixPosition(ee.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);const ce=N.distanceTo(z),se=ee.projectionMatrix.elements,Le=le.projectionMatrix.elements,pt=se[14]/(se[10]-1),Ve=se[14]/(se[10]+1),We=(se[9]+1)/se[5],nt=(se[9]-1)/se[5],Xe=(se[8]-1)/se[0],xt=(Le[8]+1)/Le[0],Vt=pt*Xe,mn=pt*xt,yt=ce/(-Xe+xt),Lt=yt*-Xe;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Lt),Z.translateZ(yt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),se[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const k=pt+yt,$t=Ve+yt,st=Vt-Lt,C=mn+(ce-Lt),M=We*Ve/$t*k,G=nt*Ve/$t*k;Z.projectionMatrix.makePerspective(st,C,M,G,k,$t),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ee=Z.near,le=Z.far;g.texture!==null&&(g.depthNear>0&&(ee=g.depthNear),g.depthFar>0&&(le=g.depthFar)),B.near=U.near=R.near=ee,B.far=U.far=R.far=le,(P!==B.near||V!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),P=B.near,V=B.far),B.layers.mask=Z.layers.mask|6,R.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;const ce=Z.parent,se=B.cameras;ae(B,ce);for(let Le=0;Le<se.length;Le++)ae(se[Le],ce);se.length===2?X(B,R,U):B.projectionMatrix.copy(R.projectionMatrix),A===null&&Z.isPerspectiveCamera&&(A={camera:Z,fov:Z.fov,zoom:Z.zoom}),xe(Z,B,ce)};function xe(Z,ee,le){le===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Dh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(Z){return p[Z]};let Ue=null;function Ce(Z,ee){if(f=ee.getViewerPose(c||o),m=ee,f!==null){const le=f.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let ce=!1;le.length!==B.cameras.length&&(B.cameras.length=0,ce=!0);for(let Ve=0;Ve<le.length;Ve++){const We=le[Ve];let nt=null;if(h!==null)nt=h.getViewport(We);else{const xt=d.getViewSubImage(u,We);nt=xt.viewport,Ve===0&&(e.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(S))}let Xe=H[Ve];Xe===void 0&&(Xe=new bn,Xe.layers.enable(Ve),Xe.viewport=new Et,H[Ve]=Xe),Xe.matrix.fromArray(We.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(We.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(nt.x,nt.y,nt.width,nt.height),Ve===0&&(B.matrix.copy(Xe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),ce===!0&&B.cameras.push(Xe)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const Ve=d.getDepthInformation(le[0]);Ve&&Ve.isValid&&Ve.texture&&g.init(Ve,r.renderState)}if(se&&se.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let Ve=0;Ve<le.length;Ve++){const We=le[Ve].camera;if(We){let nt=p[We];nt||(nt=new nM,p[We]=nt);const Xe=d.getCameraImage(We);nt.sourceTexture=Xe}}}}for(let le=0;le<T.length;le++){const ce=w[le],se=T[le];ce!==null&&se!==void 0&&se.update(ce,ee,c||o)}Ue&&Ue(Z,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),m=null}const Re=new aM;Re.setAnimationLoop(Ce),this.setAnimationLoop=function(Z){Ue=Z},this.dispose=function(){}}}const PN=new wt,pM=new Be;pM.set(-1,0,0,0,1,0,0,0,1);function LN(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,iM(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,v,y,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),d(g,p)):p.isMeshPhongMaterial?(s(g,p),f(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),u(g,p),p.isMeshPhysicalMaterial&&h(g,p,S)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,S=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(PN.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(pM),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=y*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,T){const w=T.program;i.uniformBlockBinding(S,w)}function c(S,T){let w=r[S.id];w===void 0&&(g(S),w=f(S),r[S.id]=w,S.addEventListener("dispose",v));const b=T.program;i.updateUBOMapping(S,b);const x=e.render.frame;s[S.id]!==x&&(u(S),s[S.id]=x)}function f(S){const T=d();S.__bindingPointIndex=T;const w=t.createBuffer(),b=S.__size,x=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,b,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const T=r[S.id],w=S.uniforms,b=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let x=0,A=w.length;x<A;x++){const R=w[x];if(Array.isArray(R))for(let U=0,H=R.length;U<H;U++)h(R[U],x,U,b);else h(R,x,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(S,T,w,b){if(_(S,T,w,b)===!0){const x=S.__offset,A=S.value;if(Array.isArray(A)){let R=0;for(let U=0;U<A.length;U++){const H=A[U],B=p(H);m(H,S.__data,R),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,S.__data)}}function m(S,T,w){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,w)}function _(S,T,w,b){const x=S.value,A=T+"_"+w;if(b[A]===void 0)return typeof x=="number"||typeof x=="boolean"?b[A]=x:ArrayBuffer.isView(x)?b[A]=x.slice():b[A]=x.clone(),!0;{const R=b[A];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return b[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(S){const T=S.uniforms;let w=0;const b=16;for(let A=0,R=T.length;A<R;A++){const U=Array.isArray(T[A])?T[A]:[T[A]];for(let H=0,B=U.length;H<B;H++){const P=U[H],V=Array.isArray(P.value)?P.value:[P.value];for(let W=0,O=V.length;W<O;W++){const D=V[W],N=p(D),z=w%b,X=z%N.boundary,ae=z+X;w+=X,ae!==0&&b-ae<N.storage&&(w+=b-ae),P.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=N.storage}}}const x=w%b;return x>0&&(w+=b-x),S.__size=w,S.__cache={},this}function p(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):ke("WebGLRenderer: Unsupported uniform value type.",S),T}function v(S){const T=S.target;T.removeEventListener("dispose",v);const w=o.indexOf(T.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function y(){for(const S in r)t.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}const NN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function IN(){return di===null&&(di=new MP(NN,16,16,as,Ei),di.name="DFG_LUT",di.minFilter=rn,di.magFilter=rn,di.wrapS=Fi,di.wrapT=Fi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class UN{constructor(e={}){const{canvas:n=ZR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Cn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const _=h,g=new Set([sm,rm,im]),p=new Set([Cn,Mi,ba,Ca,tm,nm]),v=new Uint32Array(4),y=new Int32Array(4),S=new $;let T=null,w=null;const b=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let U=!1,H=null,B=null,P=null,V=null;this._outputColorSpace=Bn;let W=0,O=0,D=null,N=-1,z=null;const X=new Et,ae=new Et;let xe=null;const Ue=new Ze(0);let Ce=0,Re=n.width,Z=n.height,ee=1,le=null,ce=null;const se=new Et(0,0,Re,Z),Le=new Et(0,0,Re,Z);let pt=!1;const Ve=new cm;let We=!1,nt=!1;const Xe=new wt,xt=new $,Vt=new Et,mn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Lt(){return D===null?ee:1}let k=i;function $t(E,I){return n.getContext(E,I)}let st,C,M,G,q,Q,ue,fe,J,ne,de,De,ge,he,Ne,Fe,ze,F,pe,te,me,Se,ie;try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jp}`),n.addEventListener("webglcontextlost",ut,!1),n.addEventListener("webglcontextrestored",it,!1),n.addEventListener("webglcontextcreationerror",jn,!1),k===null){const I="webgl2";if(k=$t(I,E),k===null)throw $t(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(E){throw n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",jn,!1),et("WebGLRenderer: "+E.message),E}function Ie(){st=new IL(k),st.init(),me=new wN(k,st),C=new TL(k,st,e,me),M=new EN(k,st),C.reversedDepthBuffer&&u&&M.buffers.depth.setReversed(!0),B=k.createFramebuffer(),P=k.createFramebuffer(),V=k.createFramebuffer(),G=new OL(k),q=new cN,Q=new TN(k,st,M,q,C,me,G),ue=new NL(R),fe=new BP(k),Se=new ML(k,fe),J=new UL(k,fe,G,Se),ne=new BL(k,J,fe,Se,G),F=new kL(k,C,Q),Ne=new wL(q),de=new lN(R,ue,st,C,Se,Ne),De=new LN(R,q),ge=new fN,he=new vN(st),ze=new SL(R,ue,M,ne,m,l),Fe=new MN(R,ne,C),ie=new DN(k,G,C,M),pe=new EL(k,st,G),te=new FL(k,st,G),G.programs=de.programs,R.capabilities=C,R.extensions=st,R.properties=q,R.renderLists=ge,R.shadowMap=Fe,R.state=M,R.info=G}_!==Cn&&(A=new zL(_,n.width,n.height,a,r,s));const be=new RN(R,k);this.xr=be,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(Re,Z,!1))},this.getSize=function(E){return E.set(Re,Z)},this.setSize=function(E,I,K=!0){if(be.isPresenting){ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=E,Z=I,n.width=Math.floor(E*ee),n.height=Math.floor(I*ee),K===!0&&(n.style.width=E+"px",n.style.height=I+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(Re*ee,Z*ee).floor()},this.setDrawingBufferSize=function(E,I,K){Re=E,Z=I,ee=K,n.width=Math.floor(E*K),n.height=Math.floor(I*K),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(_===Cn){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,I,K,j){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,I,K,j),M.viewport(X.copy(se).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(Le)},this.setScissor=function(E,I,K,j){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,I,K,j),M.scissor(ae.copy(Le).multiplyScalar(ee).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(E){M.setScissorTest(pt=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){ce=E},this.getClearColor=function(E){return E.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,K=!0){let j=0;if(E){let Y=!1;if(D!==null){const ye=D.texture.format;Y=g.has(ye)}if(Y){const ye=D.texture.type,Ee=p.has(ye),_e=ze.getClearColor(),we=ze.getClearAlpha(),Pe=_e.r,He=_e.g,je=_e.b;Ee?(v[0]=Pe,v[1]=He,v[2]=je,v[3]=we,k.clearBufferuiv(k.COLOR,0,v)):(y[0]=Pe,y[1]=He,y[2]=je,y[3]=we,k.clearBufferiv(k.COLOR,0,y))}else j|=k.COLOR_BUFFER_BIT}I&&(j|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),H=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ut,!1),n.removeEventListener("webglcontextrestored",it,!1),n.removeEventListener("webglcontextcreationerror",jn,!1),ze.dispose(),ge.dispose(),he.dispose(),q.dispose(),ue.dispose(),ne.dispose(),Se.dispose(),ie.dispose(),de.dispose(),be.dispose(),be.removeEventListener("sessionstart",gm),be.removeEventListener("sessionend",vm),Nr.stop()};function ut(E){E.preventDefault(),j0("WebGLRenderer: Context Lost."),U=!0}function it(){j0("WebGLRenderer: Context Restored."),U=!1;const E=G.autoReset,I=Fe.enabled,K=Fe.autoUpdate,j=Fe.needsUpdate,Y=Fe.type;Ie(),G.autoReset=E,Fe.enabled=I,Fe.autoUpdate=K,Fe.needsUpdate=j,Fe.type=Y}function jn(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function li(E){const I=E.target;I.removeEventListener("dispose",li),mM(I)}function mM(E){gM(E),q.remove(E)}function gM(E){const I=q.get(E).programs;I!==void 0&&(I.forEach(function(K){de.releaseProgram(K)}),E.isShaderMaterial&&de.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,K,j,Y,ye){I===null&&(I=mn);const Ee=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,_e=_M(E,I,K,j,Y);M.setMaterial(j,Ee);let we=K.index,Pe=1;if(j.wireframe===!0){if(we=J.getWireframeAttribute(K),we===void 0)return;Pe=2}const He=K.drawRange,je=K.attributes.position;let Ae=He.start*Pe,rt=(He.start+He.count)*Pe;ye!==null&&(Ae=Math.max(Ae,ye.start*Pe),rt=Math.min(rt,(ye.start+ye.count)*Pe)),we!==null?(Ae=Math.max(Ae,0),rt=Math.min(rt,we.count)):je!=null&&(Ae=Math.max(Ae,0),rt=Math.min(rt,je.count));const Dt=rt-Ae;if(Dt<0||Dt===1/0)return;Se.setup(Y,j,_e,K,we);let mt,ct=pe;if(we!==null&&(mt=fe.get(we),ct=te,ct.setIndex(mt)),Y.isMesh)j.wireframe===!0?(M.setLineWidth(j.wireframeLinewidth*Lt()),ct.setMode(k.LINES)):ct.setMode(k.TRIANGLES);else if(Y.isLine){let Kt=j.linewidth;Kt===void 0&&(Kt=1),M.setLineWidth(Kt*Lt()),Y.isLineSegments?ct.setMode(k.LINES):Y.isLineLoop?ct.setMode(k.LINE_LOOP):ct.setMode(k.LINE_STRIP)}else Y.isPoints?ct.setMode(k.POINTS):Y.isSprite&&ct.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(st.get("WEBGL_multi_draw"))ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Kt=Y._multiDrawStarts,Me=Y._multiDrawCounts,on=Y._multiDrawCount,Ke=we?fe.get(we).bytesPerElement:1,Un=q.get(j).currentProgram.getUniforms();for(let ci=0;ci<on;ci++)Un.setValue(k,"_gl_DrawID",ci),ct.render(Kt[ci]/Ke,Me[ci])}else if(Y.isInstancedMesh)ct.renderInstances(Ae,Dt,Y.count);else if(K.isInstancedBufferGeometry){const Kt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Me=Math.min(K.instanceCount,Kt);ct.renderInstances(Ae,Dt,Me)}else ct.render(Ae,Dt)};function mm(E,I,K,j){H!==null&&E.isNodeMaterial&&H.setObject(j,E),We===!0&&Ne.setState(E,K,!1),E.transparent===!0&&E.side===Di&&E.forceSinglePass===!1?(E.side=Mn,E.needsUpdate=!0,Xa(E,I,j),E.side=ss,E.needsUpdate=!0,Xa(E,I,j),E.side=Di):Xa(E,I,j)}this.compile=function(E,I,K=null){K===null&&(K=E),H!==null&&H.renderStart(E,I,K),w=he.get(K),w.init(I),x.push(w),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(I.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),E!==K&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(I.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),nt=this.localClippingEnabled,We=Ne.init(this.clippingPlanes,nt),We===!0&&Ne.setGlobalState(this.clippingPlanes,I),H!==null&&Fe.render(w.state.shadowsArray,K,I);const j=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const ye=Y.material;if(ye)if(Array.isArray(ye))for(let Ee=0;Ee<ye.length;Ee++){const _e=ye[Ee];mm(_e,K,I,Y),j.add(_e)}else mm(ye,K,I,Y),j.add(ye)}),w=x.pop(),H!==null&&H.renderEnd(),j},this.compileAsync=function(E,I,K=null){const j=this.compile(E,I,K);return new Promise(Y=>{function ye(){if(j.forEach(function(Ee){const we=q.get(Ee).currentProgram;(we===void 0||we.isReady())&&j.delete(Ee)}),j.size===0){Y(E);return}setTimeout(ye,10)}st.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let vu=null;function vM(E){vu&&vu(E)}function gm(){Nr.stop()}function vm(){Nr.start()}const Nr=new aM;Nr.setAnimationLoop(vM),typeof self<"u"&&Nr.setContext(self),this.setAnimationLoop=function(E){vu=E,be.setAnimationLoop(E),E===null?Nr.stop():Nr.start()},be.addEventListener("sessionstart",gm),be.addEventListener("sessionend",vm),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(E,I);const K=be.enabled===!0&&be.isPresenting===!0,j=A!==null&&(D===null||K)&&A.begin(R,D);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(I),I=be.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,I,D),w=he.get(E,x.length),w.init(I),w.state.textureUnits=Q.getTextureUnits(),x.push(w),Xe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ve.setFromProjectionMatrix(Xe,vi,I.reversedDepth),nt=this.localClippingEnabled,We=Ne.init(this.clippingPlanes,nt),T=ge.get(E,b.length),T.init(),b.push(T),be.enabled===!0&&be.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&xu(Ee,I,-1/0,R.sortObjects)}xu(E,I,0,R.sortObjects),T.finish(),H!==null&&H.updateLights(w.state.lightsArray),R.sortObjects===!0&&T.sort(le,ce),yt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,yt&&ze.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&Ne.beginShadows();const Y=w.state.shadowsArray;if(Fe.render(Y,E,I),We===!0&&Ne.endShadows(),(j&&A.hasRenderPass())===!1){const Ee=T.opaque,_e=T.transmissive;if(w.setupLights(),I.isArrayCamera){const we=I.cameras;if(_e.length>0)for(let Pe=0,He=we.length;Pe<He;Pe++){const je=we[Pe];_m(Ee,_e,E,je)}yt&&ze.render(E);for(let Pe=0,He=we.length;Pe<He;Pe++){const je=we[Pe];xm(T,E,je,je.viewport)}}else _e.length>0&&_m(Ee,_e,E,I),yt&&ze.render(E),xm(T,E,I)}D!==null&&O===0&&(Q.updateMultisampleRenderTarget(D),Q.updateRenderTargetMipmap(D)),j&&A.end(R),E.isScene===!0&&E.onAfterRender(R,E,I),Se.resetDefaultState(),N=-1,z=null,x.pop(),x.length>0?(w=x[x.length-1],Q.setTextureUnits(w.state.textureUnits),We===!0&&Ne.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?T=b[b.length-1]:T=null,H!==null&&H.renderEnd()};function xu(E,I,K,j){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Ve)){j&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Xe);const Ee=ne.update(E),_e=E.material;_e.visible&&T.push(E,Ee,_e,K,Vt.z,null,I)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Ve))){const Ee=ne.update(E),_e=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Vt.copy(Ee.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(Xe)),Array.isArray(_e)){const we=Ee.groups;for(let Pe=0,He=we.length;Pe<He;Pe++){const je=we[Pe],Ae=_e[je.materialIndex];Ae&&Ae.visible&&T.push(E,Ee,Ae,K,Vt.z,je,I)}}else _e.visible&&T.push(E,Ee,_e,K,Vt.z,null,I)}}const ye=E.children;for(let Ee=0,_e=ye.length;Ee<_e;Ee++)xu(ye[Ee],I,K,j)}function xm(E,I,K,j){const{opaque:Y,transmissive:ye,transparent:Ee}=E;w.setupLightsView(K),We===!0&&Ne.setGlobalState(R.clippingPlanes,K),j&&M.viewport(X.copy(j)),Y.length>0&&Wa(Y,I,K),ye.length>0&&Wa(ye,I,K),Ee.length>0&&Wa(Ee,I,K),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function _m(E,I,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[j.id]===void 0){const Ae=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[j.id]=new ri(1,1,{generateMipmaps:!0,type:Ae?Ei:Cn,minFilter:$r,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const ye=w.state.transmissionRenderTarget[j.id],Ee=j.viewport||X;ye.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);const _e=R.getRenderTarget(),we=R.getActiveCubeFace(),Pe=R.getActiveMipmapLevel();R.setRenderTarget(ye),R.getClearColor(Ue),Ce=R.getClearAlpha(),Ce<1&&R.setClearColor(16777215,.5),R.clear(),yt&&ze.render(K);const He=R.toneMapping;R.toneMapping=Si;const je=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),w.setupLightsView(j),We===!0&&Ne.setGlobalState(R.clippingPlanes,j),Wa(E,K,j),Q.updateMultisampleRenderTarget(ye),Q.updateRenderTargetMipmap(ye),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let rt=0,Dt=I.length;rt<Dt;rt++){const mt=I[rt],{object:ct,geometry:Kt,material:Me,group:on}=mt;if(Me.side===Di&&ct.layers.test(j.layers)){const Ke=Me.side;Me.side=Mn,Me.needsUpdate=!0,ym(ct,K,j,Kt,Me,on),Me.side=Ke,Me.needsUpdate=!0,Ae=!0}}Ae===!0&&(Q.updateMultisampleRenderTarget(ye),Q.updateRenderTargetMipmap(ye))}R.setRenderTarget(_e,we,Pe),R.setClearColor(Ue,Ce),je!==void 0&&(j.viewport=je),R.toneMapping=He}function Wa(E,I,K){const j=I.isScene===!0?I.overrideMaterial:null;for(let Y=0,ye=E.length;Y<ye;Y++){const Ee=E[Y],{object:_e,geometry:we,group:Pe}=Ee;let He=Ee.material;He.allowOverride===!0&&j!==null&&(He=j),_e.layers.test(K.layers)&&ym(_e,I,K,we,He,Pe)}}function ym(E,I,K,j,Y,ye){H!==null&&Y.isNodeMaterial&&H.setObject(E,Y),E.onBeforeRender(R,I,K,j,Y,ye),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(R,I,K,j,E,ye),Y.transparent===!0&&Y.side===Di&&Y.forceSinglePass===!1?(Y.side=Mn,Y.needsUpdate=!0,R.renderBufferDirect(K,I,j,Y,E,ye),Y.side=ss,Y.needsUpdate=!0,R.renderBufferDirect(K,I,j,Y,E,ye),Y.side=Di):R.renderBufferDirect(K,I,j,Y,E,ye),E.onAfterRender(R,I,K,j,Y,ye)}function Xa(E,I,K){I.isScene!==!0&&(I=mn);const j=q.get(E),Y=w.state.lights,ye=w.state.shadowsArray,Ee=Y.state.version,_e=de.getParameters(E,Y.state,ye,I,K,w.state.lightProbeGridArray),we=de.getProgramCacheKey(_e);let Pe=j.programs;j.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,j.fog=I.fog;const He=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;j.envMap=ue.get(E.envMap||j.environment,He),j.envMapRotation=j.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",li),Pe=new Map,j.programs=Pe);let je=Pe.get(we);if(je!==void 0){if(j.currentProgram===je&&j.lightsStateVersion===Ee)return Mm(E,_e),je}else _e.uniforms=de.getUniforms(E),H!==null&&E.isNodeMaterial&&H.build(E,K,_e),E.onBeforeCompile(_e,R),je=de.acquireProgram(_e,we),Pe.set(we,je),j.uniforms=_e.uniforms;const Ae=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=Ne.uniform),Mm(E,_e),j.needsLights=SM(E),j.lightsStateVersion=Ee,j.needsLights&&(Ae.ambientLightColor.value=Y.state.ambient,Ae.lightProbe.value=Y.state.probe,Ae.sunLights.value=Y.state.sun,Ae.sunLightShadows.value=Y.state.sunShadow,Ae.directionalLights.value=Y.state.directional,Ae.directionalLightShadows.value=Y.state.directionalShadow,Ae.spotLights.value=Y.state.spot,Ae.spotLightShadows.value=Y.state.spotShadow,Ae.rectAreaLights.value=Y.state.rectArea,Ae.ltc_1.value=Y.state.rectAreaLTC1,Ae.ltc_2.value=Y.state.rectAreaLTC2,Ae.pointLights.value=Y.state.point,Ae.pointLightShadows.value=Y.state.pointShadow,Ae.hemisphereLights.value=Y.state.hemi,Ae.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ae.sunShadowCascade.value=Y.state.sunShadowCascade,Ae.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ae.spotLightMatrix.value=Y.state.spotLightMatrix,Ae.spotLightMap.value=Y.state.spotLightMap,Ae.pointShadowMatrix.value=Y.state.pointShadowMatrix),j.lightProbeGrid=w.state.lightProbeGridArray.length>0,j.currentProgram=je,j.uniformsList=null,je}function Sm(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=nc.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Mm(E,I){const K=q.get(E);K.outputColorSpace=I.outputColorSpace,K.batching=I.batching,K.batchingColor=I.batchingColor,K.instancing=I.instancing,K.instancingColor=I.instancingColor,K.instancingMorph=I.instancingMorph,K.skinning=I.skinning,K.morphTargets=I.morphTargets,K.morphNormals=I.morphNormals,K.morphColors=I.morphColors,K.morphTargetsCount=I.morphTargetsCount,K.numClippingPlanes=I.numClippingPlanes,K.numIntersection=I.numClipIntersection,K.vertexAlphas=I.vertexAlphas,K.vertexTangents=I.vertexTangents,K.toneMapping=I.toneMapping}function xM(E,I){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let K=0,j=E.length;K<j;K++){const Y=E[K];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function _M(E,I,K,j,Y){I.isScene!==!0&&(I=mn),Q.resetTextureUnits();const ye=I.fog,Ee=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?I.environment:null,_e=D===null?R.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qe.workingColorSpace,we=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Pe=ue.get(j.envMap||Ee,we),He=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ae=!!K.morphAttributes.position,rt=!!K.morphAttributes.normal,Dt=!!K.morphAttributes.color;let mt=Si;j.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(mt=R.toneMapping);const ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Kt=ct!==void 0?ct.length:0,Me=q.get(j),on=w.state.lights;if(We===!0&&(nt===!0||E!==z)){const ft=E===z&&j.id===N;Ne.setState(j,E,ft)}let Ke=!1;j.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==on.state.version||Me.outputColorSpace!==_e||Y.isBatchedMesh&&Me.batching===!1||!Y.isBatchedMesh&&Me.batching===!0||Y.isBatchedMesh&&Me.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Me.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Me.instancing===!1||!Y.isInstancedMesh&&Me.instancing===!0||Y.isSkinnedMesh&&Me.skinning===!1||!Y.isSkinnedMesh&&Me.skinning===!0||Y.isInstancedMesh&&Me.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Me.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Me.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Me.instancingMorph===!1&&Y.morphTexture!==null||Me.envMap!==Pe||j.fog===!0&&Me.fog!==ye||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ne.numPlanes||Me.numIntersection!==Ne.numIntersection)||Me.vertexAlphas!==He||Me.vertexTangents!==je||Me.morphTargets!==Ae||Me.morphNormals!==rt||Me.morphColors!==Dt||Me.toneMapping!==mt||Me.morphTargetsCount!==Kt||!!Me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,Me.__version=j.version);let Un=Me.currentProgram;Ke===!0&&(Un=Xa(j,I,Y),H&&j.isNodeMaterial&&H.onUpdateProgram(j,Un,Me));let ci=!1,Zi=!1,ps=!1;const lt=Un.getUniforms(),Ct=Me.uniforms;if(M.useProgram(Un.program)&&(ci=!0,Zi=!0,ps=!0),j.id!==N&&(N=j.id,Zi=!0),Me.needsLights){const ft=xM(w.state.lightProbeGridArray,Y);Me.lightProbeGrid!==ft&&(Me.lightProbeGrid=ft,Zi=!0)}if(ci||z!==E){M.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(k,"projectionMatrix",E.projectionMatrix),lt.setValue(k,"viewMatrix",E.matrixWorldInverse);const Ji=lt.map.cameraPosition;Ji!==void 0&&Ji.setValue(k,xt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&lt.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&lt.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,Zi=!0,ps=!0)}if(Me.needsLights&&(on.state.sunShadowMap.length>0&&lt.setValue(k,"sunShadowMap",on.state.sunShadowMap,Q),on.state.directionalShadowMap.length>0&&lt.setValue(k,"directionalShadowMap",on.state.directionalShadowMap,Q),on.state.spotShadowMap.length>0&&lt.setValue(k,"spotShadowMap",on.state.spotShadowMap,Q),on.state.pointShadowMap.length>0&&lt.setValue(k,"pointShadowMap",on.state.pointShadowMap,Q)),Y.isSkinnedMesh){lt.setOptional(k,Y,"bindMatrix"),lt.setOptional(k,Y,"bindMatrixInverse");const ft=Y.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),lt.setValue(k,"boneTexture",ft.boneTexture,Q))}Y.isBatchedMesh&&(lt.setOptional(k,Y,"batchingTexture"),lt.setValue(k,"batchingTexture",Y._matricesTexture,Q),lt.setOptional(k,Y,"batchingIdTexture"),lt.setValue(k,"batchingIdTexture",Y._indirectTexture,Q),lt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&lt.setValue(k,"batchingColorTexture",Y._colorsTexture,Q));const Qi=K.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&F.update(Y,K,Un),(Zi||Me.receiveShadow!==Y.receiveShadow)&&(Me.receiveShadow=Y.receiveShadow,lt.setValue(k,"receiveShadow",Y.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&I.environment!==null&&(Ct.envMapIntensity.value=I.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=IN()),Zi){if(lt.setValue(k,"toneMappingExposure",R.toneMappingExposure),Me.needsLights&&yM(Ct,ps),ye&&j.fog===!0&&De.refreshFogUniforms(Ct,ye),De.refreshMaterialUniforms(Ct,j,ee,Z,w.state.transmissionRenderTarget[E.id]),Me.needsLights&&Me.lightProbeGrid){const ft=Me.lightProbeGrid;Ct.probesSH.value=ft.texture,Ct.probesMin.value.copy(ft.boundingBox.min),Ct.probesMax.value.copy(ft.boundingBox.max),Ct.probesResolution.value.copy(ft.resolution)}nc.upload(k,Sm(Me),Ct,Q)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(nc.upload(k,Sm(Me),Ct,Q),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&lt.setValue(k,"center",Y.center),lt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),lt.setValue(k,"normalMatrix",Y.normalMatrix),lt.setValue(k,"modelMatrix",Y.matrixWorld),j.uniformsGroups!==void 0){const ft=j.uniformsGroups;for(let Ji=0,ms=ft.length;Ji<ms;Ji++){const Tm=ft[Ji];ie.update(Tm,Un),ie.bind(Tm,Un)}}return Un}function yM(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.sunLights.needsUpdate=I,E.sunLightShadows.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function SM(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,I,K){const j=q.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=I,q.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const K=q.get(E);K.__webglFramebuffer=I,K.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(E,I=0,K=0){D=E,W=I,O=K;let j=null,Y=!1,ye=!1;if(E){const _e=q.get(E);if(_e.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(k.FRAMEBUFFER,_e.__webglFramebuffer),X.copy(E.viewport),ae.copy(E.scissor),xe=E.scissorTest,M.viewport(X),M.scissor(ae),M.setScissorTest(xe),N=-1;return}else if(_e.__webglFramebuffer===void 0)Q.setupRenderTarget(E);else if(_e.__hasExternalTextures)Q.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const He=E.depthTexture;if(_e.__boundDepthTexture!==He){if(He!==null&&q.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(E)}}const we=E.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);const Pe=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?j=Pe[I][K]:j=Pe[I],Y=!0):E.samples>0&&Q.useMultisampledRTT(E)===!1?j=q.get(E).__webglMultisampledFramebuffer:Array.isArray(Pe)?j=Pe[K]:j=Pe,X.copy(E.viewport),ae.copy(E.scissor),xe=E.scissorTest}else X.copy(se).multiplyScalar(ee).floor(),ae.copy(Le).multiplyScalar(ee).floor(),xe=pt;if(K!==0&&(j=B),M.bindFramebuffer(k.FRAMEBUFFER,j)&&M.drawBuffers(E,j),M.viewport(X),M.scissor(ae),M.setScissorTest(xe),Y){const _e=q.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+I,_e.__webglTexture,K)}else if(ye){const _e=I;for(let we=0;we<E.textures.length;we++){const Pe=q.get(E.textures[we]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+we,Pe.__webglTexture,K,_e)}}else if(E!==null&&K!==0){const _e=q.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_e.__webglTexture,K)}N=-1};function Em(E){const I=q.get(E);return(I.__readFormat!==E.format||I.__readType!==E.type)&&(I.__readFormat=E.format,I.__readType=E.type,I.__formatReadable=C.textureFormatReadable(E.format),I.__typeReadable=C.textureTypeReadable(E.type)),I}this.readRenderTargetPixels=function(E,I,K,j,Y,ye,Ee,_e=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we){M.bindFramebuffer(k.FRAMEBUFFER,we);try{const Pe=E.textures[_e],He=Pe.format,je=Pe.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);const Ae=Em(Pe);if(Ae.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-j&&K>=0&&K<=E.height-Y&&k.readPixels(I,K,j,Y,me.convert(He),me.convert(je),ye)}finally{const Pe=D!==null?q.get(D).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(E,I,K,j,Y,ye,Ee,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(we=we[Ee]),we)if(I>=0&&I<=E.width-j&&K>=0&&K<=E.height-Y){M.bindFramebuffer(k.FRAMEBUFFER,we);const Pe=E.textures[_e],He=Pe.format,je=Pe.type;E.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);const Ae=Em(Pe);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(I,K,j,Y,me.convert(He),me.convert(je),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Dt=D!==null?q.get(D).__webglFramebuffer:null;M.bindFramebuffer(k.FRAMEBUFFER,Dt);const mt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await QR(k,mt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,rt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(rt),k.deleteSync(mt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,K=0){const j=Math.pow(2,-K),Y=Math.floor(E.image.width*j),ye=Math.floor(E.image.height*j),Ee=I!==null?I.x:0,_e=I!==null?I.y:0;Q.setTexture2D(E,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,Ee,_e,Y,ye),M.unbindTexture()},this.copyTextureToTexture=function(E,I,K=null,j=null,Y=0,ye=0){let Ee,_e,we,Pe,He,je,Ae,rt,Dt;const mt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(K!==null)Ee=K.max.x-K.min.x,_e=K.max.y-K.min.y,we=K.isBox3?K.max.z-K.min.z:1,Pe=K.min.x,He=K.min.y,je=K.isBox3?K.min.z:0;else{const Ct=Math.pow(2,-Y);Ee=Math.floor(mt.width*Ct),_e=Math.floor(mt.height*Ct),E.isDataArrayTexture?we=mt.depth:E.isData3DTexture?we=Math.floor(mt.depth*Ct):we=1,Pe=0,He=0,je=0}j!==null?(Ae=j.x,rt=j.y,Dt=j.z):(Ae=0,rt=0,Dt=0);const ct=me.convert(I.format),Kt=me.convert(I.type);let Me;I.isData3DTexture?(Q.setTexture3D(I,0),Me=k.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Q.setTexture2DArray(I,0),Me=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(I,0),Me=k.TEXTURE_2D),M.activeTexture(k.TEXTURE0),M.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,I.flipY),M.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),M.pixelStorei(k.UNPACK_ALIGNMENT,I.unpackAlignment);const on=M.getParameter(k.UNPACK_ROW_LENGTH),Ke=M.getParameter(k.UNPACK_IMAGE_HEIGHT),Un=M.getParameter(k.UNPACK_SKIP_PIXELS),ci=M.getParameter(k.UNPACK_SKIP_ROWS),Zi=M.getParameter(k.UNPACK_SKIP_IMAGES);M.pixelStorei(k.UNPACK_ROW_LENGTH,mt.width),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt.height),M.pixelStorei(k.UNPACK_SKIP_PIXELS,Pe),M.pixelStorei(k.UNPACK_SKIP_ROWS,He),M.pixelStorei(k.UNPACK_SKIP_IMAGES,je);const ps=E.isDataArrayTexture||E.isData3DTexture,lt=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const Ct=q.get(E),Qi=q.get(I),ft=q.get(Ct.__renderTarget),Ji=q.get(Qi.__renderTarget);M.bindFramebuffer(k.READ_FRAMEBUFFER,ft.__webglFramebuffer),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let ms=0;ms<we;ms++)ps&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,q.get(E).__webglTexture,Y,je+ms),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,q.get(I).__webglTexture,ye,Dt+ms)),k.blitFramebuffer(Pe,He,Ee,_e,Ae,rt,Ee,_e,k.DEPTH_BUFFER_BIT,k.NEAREST);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||q.has(E)){const Ct=q.get(E),Qi=q.get(I);M.bindFramebuffer(k.READ_FRAMEBUFFER,P),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,V);for(let ft=0;ft<we;ft++)ps?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ct.__webglTexture,Y,je+ft):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ct.__webglTexture,Y),lt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Qi.__webglTexture,ye,Dt+ft):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Qi.__webglTexture,ye),Y!==0?k.blitFramebuffer(Pe,He,Ee,_e,Ae,rt,Ee,_e,k.COLOR_BUFFER_BIT,k.NEAREST):lt?k.copyTexSubImage3D(Me,ye,Ae,rt,Dt+ft,Pe,He,Ee,_e):k.copyTexSubImage2D(Me,ye,Ae,rt,Pe,He,Ee,_e);M.bindFramebuffer(k.READ_FRAMEBUFFER,null),M.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?k.texSubImage3D(Me,ye,Ae,rt,Dt,Ee,_e,we,ct,Kt,mt.data):I.isCompressedArrayTexture?k.compressedTexSubImage3D(Me,ye,Ae,rt,Dt,Ee,_e,we,ct,mt.data):k.texSubImage3D(Me,ye,Ae,rt,Dt,Ee,_e,we,ct,Kt,mt):E.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,Ae,rt,Ee,_e,ct,Kt,mt.data):E.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,Ae,rt,mt.width,mt.height,ct,mt.data):k.texSubImage2D(k.TEXTURE_2D,ye,Ae,rt,Ee,_e,ct,Kt,mt);M.pixelStorei(k.UNPACK_ROW_LENGTH,on),M.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ke),M.pixelStorei(k.UNPACK_SKIP_PIXELS,Un),M.pixelStorei(k.UNPACK_SKIP_ROWS,ci),M.pixelStorei(k.UNPACK_SKIP_IMAGES,Zi),ye===0&&I.generateMipmaps&&k.generateMipmap(Me),M.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&Q.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Q.setTextureCube(E,0):E.isData3DTexture?Q.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Q.setTexture2DArray(E,0):Q.setTexture2D(E,0),M.unbindTexture()},this.resetState=function(){W=0,O=0,D=null,M.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}function FN(){const t=re.useRef(null);return re.useEffect(()=>{const e=t.current;if(!e)return;const n=new UN({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),n.setSize(window.innerWidth,window.innerHeight);const i=new pP,r=new bn(45,window.innerWidth/window.innerHeight,.1,1e3);r.position.set(0,0,32);const s=new UP(139789,2.2);i.add(s);const o=new pv(13434624,3.5,90);o.position.set(0,0,10),i.add(o);const a=new pv(65416,3,100);a.position.set(0,-10,8),i.add(a);const l=new Go;i.add(l);const c=320,f=new Float32Array(c*3),d=new Float32Array(c*3),u=new Float32Array(c),h=54,m=46;for(let x=0;x<c;x++){f[x*3]=(Math.random()-.5)*h,f[x*3+1]=(Math.random()-.5)*m,f[x*3+2]=-14+Math.random()*24,u[x]=.015+Math.random()*.035;const A=Math.random(),R=new Ze;A>.8?R.set(16777215):A>.45?R.set(13434624):R.set(65416),d[x*3]=R.r,d[x*3+1]=R.g,d[x*3+2]=R.b}const _=new ai,g=new si(f,3);_.setAttribute("position",g),_.setAttribute("color",new si(d,3));const p=new eM({size:.3,vertexColors:!0,transparent:!0,opacity:.8,blending:jd,depthWrite:!1}),v=new TP(_,p);l.add(v);const y={x:0,y:0,targetX:0,targetY:0},S=x=>{y.targetX=x.clientX/window.innerWidth*2-1,y.targetY=-(x.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",S,{passive:!0});const T=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",T,{passive:!0});let w;const b=()=>{w=requestAnimationFrame(b),y.x+=(y.targetX-y.x)*.04,y.y+=(y.targetY-y.y)*.04;const x=Math.max(1,document.documentElement.scrollHeight-window.innerHeight),R=-2+window.scrollY/x*8+y.y*.8,U=y.x*1.4;r.position.y+=(R-r.position.y)*.05,r.position.x+=(U-r.position.x)*.05,r.lookAt(0,r.position.y,0);const H=f;for(let B=0;B<c;B++){const P=B*3+1;H[P]+=u[B],H[P]>m/2&&(H[P]=-m/2)}g.needsUpdate=!0,n.render(i,r)};return b(),()=>{cancelAnimationFrame(w),window.removeEventListener("mousemove",S),window.removeEventListener("resize",T),n.dispose()}},[]),L.jsx("aside",{"aria-label":"Cosmic Atmosphere Scene",className:"fixed inset-0 pointer-events-none z-0 overflow-hidden",children:L.jsx("canvas",{ref:t,className:"w-full h-full pointer-events-none opacity-85 transition-opacity duration-700"})})}function ON({containerRef:t}){const e=re.useRef(null),n=re.useRef([]),i=re.useRef({x:0,y:0,targetX:0,targetY:0});return re.useEffect(()=>{const r=s=>{i.current.targetX=(s.clientX/window.innerWidth-.5)*2,i.current.targetY=(s.clientY/window.innerHeight-.5)*2};return window.addEventListener("mousemove",r,{passive:!0}),()=>window.removeEventListener("mousemove",r)},[]),re.useEffect(()=>{const r=()=>{if(!t.current)return;const a=t.current.getBoundingClientRect(),l=window.scrollY+a.top,c=t.current.querySelectorAll("[data-tree-branch]"),f=[],d=window.innerWidth<768;c.forEach((u,h)=>{const m=u.getBoundingClientRect();if(m.width===0&&m.height===0)return;const _=u.getAttribute("data-tree-branch")||(h%2===0?"left":"right"),g=window.scrollY+m.top-l,p=_==="left"?m.right-a.left:m.left-a.left,v=g+Math.min(85,Math.max(30,m.height/2)),y=v+(d?22:38);f.push({id:u.id||`card-${h}`,side:_,x:p,worldY:v,worldTrunkY:y})}),n.current=f};r(),window.addEventListener("resize",r,{passive:!0});const s=new MutationObserver(()=>r());t.current&&s.observe(t.current,{childList:!0,subtree:!0});const o=setTimeout(r,200);return()=>{window.removeEventListener("resize",r),s.disconnect(),clearTimeout(o)}},[t]),re.useEffect(()=>{const r=e.current;if(!r)return;const s=r.getContext("2d",{alpha:!0});if(!s)return;let o,a=0;const l=()=>{a+=.028,i.current.x+=(i.current.targetX-i.current.x)*.05,i.current.y+=(i.current.targetY-i.current.y)*.05;const c=window.innerWidth,f=window.innerHeight;if((r.width!==c||r.height!==f)&&(r.width=c,r.height=f),s.clearRect(0,0,c,f),!t.current){o=requestAnimationFrame(l);return}const d=t.current.clientHeight,u=window.scrollY,h=c<768,m=c/2,_=B=>{const P=h?.45:1,V=Math.sin(B*75e-5)*(48*P),W=Math.cos(B*.002+a*.6)*(16*P),O=i.current.x*(18*P)*(1-Math.abs(B/d-.5));return m+V+W+O},g=B=>{const P=Math.max(0,Math.min(1,B/Math.max(1,d))),V=h?30:56;if(P<.14){const W=Math.pow((.14-P)/.14,1.6);return V+W*(h?95:230)}if(P>.86){const W=Math.pow((P-.86)/.14,1.8);return V+W*(h?75:170)}return V+Math.sin(P*Math.PI*5+a)*(h?4:9)},p=8,v=(B,P)=>{const V=_(P),W=g(P),O=B/p*Math.PI*2,D=.0034,N=Math.sin(P*D+O+a*.75)*(W*.44),z=Math.cos(P*D+O+a*.75);return{x:V+N,z}};if(u<900){const B=h?6:10,P=Math.min(650,d*.11),V=_(P);for(let W=0;W<B;W++){const O=W%2===0,D=Math.floor(W/2),N=h?65+D*28:140+D*70,z=O?V-N-Math.sin(a+W)*(h?10:20):V+N+Math.sin(a+W)*(h?10:20),X=30+D*(h?60:85)+Math.cos(a*.8+W)*15,ae=V+(O?h?-14:-30:h?14:30),Ue=P-D*(h?22:35)-u,Ce=X-u;if(Ue>f+100&&Ce>f+100)continue;const Re=ae+(O?h?-45:-90:h?45:90),Z=Ue-80,ee=z+(O?40:-40),le=Ce+50;s.beginPath(),s.strokeStyle="rgba(0, 255, 136, 0.22)",s.lineWidth=14-D*2,s.lineCap="round",s.moveTo(ae,Ue),s.bezierCurveTo(Re,Z,ee,le,z,Ce),s.stroke(),s.beginPath(),s.strokeStyle="rgba(204, 255, 0, 0.85)",s.lineWidth=4-D*.5,s.moveTo(ae,Ue),s.bezierCurveTo(Re,Z,ee,le,z,Ce),s.stroke(),s.beginPath(),s.strokeStyle="#ffffff",s.lineWidth=1.4,s.moveTo(ae,Ue),s.bezierCurveTo(Re,Z,ee,le,z,Ce),s.stroke();for(let se=1;se<=3;se++){const Le=se/4,pt=Math.pow(1-Le,3)*ae+3*Math.pow(1-Le,2)*Le*Re+3*(1-Le)*Math.pow(Le,2)*ee+Math.pow(Le,3)*z,Ve=Math.pow(1-Le,3)*Ue+3*Math.pow(1-Le,2)*Le*Z+3*(1-Le)*Math.pow(Le,2)*le+Math.pow(Le,3)*Ce,We=1+Math.sin(a*3+W*2+se)*.35;s.beginPath(),s.arc(pt,Ve,6*We,0,Math.PI*2),s.fillStyle=se%2===0?"rgba(204, 255, 0, 0.3)":"rgba(0, 255, 136, 0.3)",s.fill(),s.beginPath(),s.arc(pt,Ve,2.5*We,0,Math.PI*2),s.fillStyle=se%2===0?"#ccff00":"#00ff88",s.fill()}const ce=1+Math.sin(a*4+W)*.3;s.beginPath(),s.arc(z,Ce,8*ce,0,Math.PI*2),s.fillStyle="rgba(204, 255, 0, 0.35)",s.fill(),s.beginPath(),s.arc(z,Ce,3.5*ce,0,Math.PI*2),s.fillStyle="#ffffff",s.fill()}}const y=Math.max(d-650,d*.88);if(u+f>y-100){const B=h?3:6,P=_(y);for(let V=0;V<B;V++){const W=V%2===0,O=Math.floor(V/2),D=W?P-(h?25:80)-O*(h?18:60):P+(h?25:80)+O*(h?18:60),N=d-10+O*8,z=P+(W?-15:15),X=y-u,ae=N-u,xe=z+(W?-40:40),Ue=X+120,Ce=D,Re=ae-60;s.beginPath(),s.strokeStyle="rgba(0, 255, 136, 0.3)",s.lineWidth=h?6:12-O*2,s.lineCap="round",s.moveTo(z,X),s.bezierCurveTo(xe,Ue,Ce,Re,D,ae),s.stroke(),s.beginPath(),s.strokeStyle="rgba(204, 255, 0, 0.7)",s.lineWidth=h?2:3.5,s.moveTo(z,X),s.bezierCurveTo(xe,Ue,Ce,Re,D,ae),s.stroke()}}const S=26,T=Math.max(0,Math.floor((u-120)/S)),w=Math.min(Math.ceil(d/S),Math.ceil((u+f+120)/S));["back","front"].forEach(B=>{for(let P=0;P<p;P++){const V=Math.cos(a*.75+P/p*Math.PI*2);if(B==="back"&&V>.25||B==="front"&&V<=.25)continue;s.beginPath();let W=!1;for(let O=T;O<=w;O++){const D=O*S,N=D-u,{x:z}=v(P,D);W?s.lineTo(z,N):(s.moveTo(z,N),W=!0)}if(B==="back")s.strokeStyle=P%2===0?"rgba(0, 255, 136, 0.45)":"rgba(4, 66, 43, 0.75)",s.lineWidth=h?2.5:4.5,s.lineCap="round",s.stroke();else{s.strokeStyle=P%2===0?"rgba(204, 255, 0, 0.85)":"rgba(0, 255, 136, 0.8)",s.lineWidth=h?3.5:5.8,s.lineCap="round",s.stroke(),s.beginPath(),W=!1;for(let O=T;O<=w;O++){const D=O*S,N=D-u,{x:z}=v(P,D);W?s.lineTo(z,N):(s.moveTo(z,N),W=!0)}s.strokeStyle="#ffffff",s.lineWidth=h?1.2:1.8,s.stroke()}}});const x=h?240:180,A=Math.max(0,Math.floor((u-100)/x)),R=Math.ceil((u+f+100)/x);for(let B=A;B<=R;B++){const P=B*x+90;if(P>d)break;const V=P-u,W=g(P),O=_(P),D=a*1.2+B;s.beginPath();const N=O-W*.42,z=O+W*.42,X=V+Math.sin(D)*16;s.moveTo(N,V-6),s.quadraticCurveTo(O,X,z,V+6),s.strokeStyle="rgba(204, 255, 0, 0.45)",s.lineWidth=1.6,s.stroke()}const U=n.current,H=U.length;for(let B=0;B<H;B++){const P=U[B],V=P.worldY-u,W=P.worldTrunkY-u;if(V<-120||V>f+120)continue;const O=P.x,D=V;let N;if(P.side==="left"){let le=1/0;for(let ce=0;ce<p;ce++){const se=v(ce,P.worldTrunkY);se.x<le&&(le=se.x)}N=le}else{let le=-1/0;for(let ce=0;ce<p;ce++){const se=v(ce,P.worldTrunkY);se.x>le&&(le=se.x)}N=le}const z=W,X=O-N,ae=P.side==="left"?-1:1,xe=N+ae*Math.abs(X)*.28,Ue=z-32,Ce=O-ae*Math.abs(X)*.24,Re=D+14;s.beginPath(),s.strokeStyle="rgba(0, 255, 136, 0.32)",s.lineWidth=h?10:16,s.lineCap="round",s.moveTo(N,z),s.bezierCurveTo(xe,Ue,Ce,Re,O,D),s.stroke(),s.beginPath(),s.strokeStyle="rgba(204, 255, 0, 0.9)",s.lineWidth=h?3.5:5.5,s.moveTo(N,z),s.bezierCurveTo(xe,Ue,Ce,Re,O,D),s.stroke(),s.beginPath(),s.strokeStyle="#ffffff",s.lineWidth=h?1.4:2,s.moveTo(N,z),s.bezierCurveTo(xe,Ue,Ce,Re,O,D),s.stroke();const Z=h?2:4;for(let le=1;le<=Z;le++){const ce=le/(Z+1),se=Math.pow(1-ce,3)*N+3*Math.pow(1-ce,2)*ce*xe+3*(1-ce)*Math.pow(ce,2)*Ce+Math.pow(ce,3)*O,Le=Math.pow(1-ce,3)*z+3*Math.pow(1-ce,2)*ce*Ue+3*(1-ce)*Math.pow(ce,2)*Re+Math.pow(ce,3)*D,pt=(h?10:18)+le%2*12,Ve=(P.side==="left"?-1:1)*(.35+le%2*.4),We=se+Math.cos(Ve)*pt,nt=Le-Math.abs(Math.sin(Ve))*pt;s.beginPath(),s.strokeStyle="rgba(204, 255, 0, 0.75)",s.lineWidth=1.5,s.moveTo(se,Le),s.lineTo(We,nt),s.stroke();const Xe=1+Math.sin(a*4+B+le)*.3;s.beginPath(),s.arc(We,nt,4.5*Xe,0,Math.PI*2),s.fillStyle="rgba(0, 255, 136, 0.35)",s.fill(),s.beginPath(),s.arc(We,nt,2.2*Xe,0,Math.PI*2),s.fillStyle="#ccff00",s.fill()}const ee=1+Math.sin(a*4.5+B)*.3;s.beginPath(),s.arc(O,D,(h?12:18)*ee,0,Math.PI*2),s.fillStyle="rgba(0, 255, 136, 0.15)",s.fill(),s.beginPath(),s.arc(O,D,(h?7:11)*ee,0,Math.PI*2),s.strokeStyle="rgba(0, 255, 136, 0.6)",s.lineWidth=1.5,s.stroke(),s.beginPath(),s.arc(O,D,(h?5:7)*ee,0,Math.PI*2),s.fillStyle="#ccff00",s.fill(),s.beginPath(),s.arc(O,D,2.5,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),[0,.5].forEach(le=>{const ce=(a*.85+B*.24+le)%1,se=Math.pow(1-ce,3)*N+3*Math.pow(1-ce,2)*ce*xe+3*(1-ce)*Math.pow(ce,2)*Ce+Math.pow(ce,3)*O,Le=Math.pow(1-ce,3)*z+3*Math.pow(1-ce,2)*ce*Ue+3*(1-ce)*Math.pow(ce,2)*Re+Math.pow(ce,3)*D;s.beginPath(),s.arc(se,Le,7,0,Math.PI*2),s.fillStyle="rgba(204, 255, 0, 0.4)",s.fill(),s.beginPath(),s.arc(se,Le,3,0,Math.PI*2),s.fillStyle="#ffffff",s.fill()})}o=requestAnimationFrame(l)};return l(),()=>cancelAnimationFrame(o)},[t]),L.jsx("canvas",{ref:e,className:"fixed inset-0 pointer-events-none z-10 w-full h-full","aria-hidden":"true"})}const Bv=[{id:"01",key:"home",label:"Core",href:"#home"},{id:"02",key:"certs",label:"Certs",href:"#certs"},{id:"03",key:"expertise",label:"Skills",href:"#expertise"},{id:"04",key:"projects",label:"Projects",href:"#projects"},{id:"05",key:"contact",label:"Contact",href:"#contact"}];function kN(){const[t,e]=re.useState(!1),[n,i]=re.useState(!1);re.useEffect(()=>{const s=()=>e(window.scrollY>30);return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]);const r=s=>{i(!1);const o=document.querySelector(s);o&&o.scrollIntoView({behavior:"smooth"})};return L.jsxs("header",{className:`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 sm:px-12 transition-all duration-300 ${t?"bg-[#010c05]/90 backdrop-blur-xl border-b border-[#00ff88]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]":"bg-transparent"}`,children:[L.jsxs("button",{onClick:()=>r("#home"),className:"flex items-center gap-3 text-left group",children:[L.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-[#ccff00] to-[#00ff88] p-[1px] shadow-[0_0_15px_rgba(204,255,0,0.4)] group-hover:scale-105 transition-transform",children:L.jsx("div",{className:"w-full h-full bg-[#010c05] rounded-[7px] flex items-center justify-center",children:L.jsx("span",{className:"font-mono-display font-bold text-xs text-[#ccff00]",children:"VR"})})}),L.jsxs("div",{children:[L.jsxs("div",{className:"flex items-center gap-1.5 font-mono-display font-bold text-xs text-white tracking-wider group-hover:text-[#ccff00] transition-colors",children:[L.jsx("span",{children:"VISHESH RANJAN"}),L.jsx(wS,{size:13,className:"text-[#00ff88]"})]}),L.jsx("div",{className:"font-mono-display text-[9px] text-[#00ff88]/70 tracking-widest uppercase",children:"Offensive Security & Red Team"})]})]}),L.jsx("nav",{className:"hidden md:flex items-center gap-6",children:Bv.map(s=>L.jsxs("button",{onClick:()=>r(s.href),className:"font-mono-display text-xs text-slate-300 hover:text-[#ccff00] transition-colors flex items-center gap-1.5 py-1 tracking-widest uppercase",children:[L.jsx("span",{className:"text-[10px] text-[#00ff88]/60",children:s.id}),L.jsx("span",{children:s.label})]},s.key))}),L.jsx("button",{onClick:()=>i(!n),"aria-label":"Toggle navigation",className:"md:hidden p-2 rounded-xl bg-emerald-950/50 border border-emerald-500/30 text-emerald-300",children:n?L.jsx(bS,{size:18}):L.jsx(WC,{size:18})}),n&&L.jsx("div",{className:"fixed inset-0 top-16 bg-[#010c05]/98 backdrop-blur-2xl flex flex-col p-6 md:hidden border-b border-[#00ff88]/20 z-50",children:L.jsx("nav",{className:"flex flex-col divide-y divide-emerald-500/10",children:Bv.map(s=>L.jsxs("button",{onClick:()=>r(s.href),className:"flex items-center justify-between py-4 text-left font-mono-display",children:[L.jsxs("div",{className:"flex items-center gap-3",children:[L.jsx("span",{className:"text-xs text-[#00ff88]/60",children:s.id}),L.jsx("span",{className:"text-lg text-white font-semibold",children:s.label})]}),L.jsx("span",{className:"text-[#ccff00]",children:"→"})]},s.key))})})]})}function BN({project:t,onClose:e}){return t?L.jsx("div",{onClick:e,className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6",children:L.jsxs(Ht.div,{initial:{scale:.92,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},exit:{scale:.92,y:20,opacity:0},transition:{type:"spring",damping:25,stiffness:280},onClick:n=>n.stopPropagation(),className:"loki-card rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border-[#00ff88]/40 shadow-[0_0_60px_rgba(0,255,136,0.25)]",children:[L.jsxs("div",{className:"flex items-start justify-between mb-6",children:[L.jsxs("div",{children:[L.jsx("div",{className:"font-mono-display text-xs text-[#ccff00] tracking-widest uppercase mb-1",children:t.category}),L.jsx("h3",{className:"text-2xl sm:text-3xl font-bold text-white",children:t.title}),t.tagline&&L.jsxs("div",{className:"font-mono-display text-sm text-[#86efac] italic mt-1",children:["“",t.tagline,"”"]})]}),L.jsx("button",{onClick:e,className:"p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-slate-400 hover:text-white transition-colors",children:L.jsx(bS,{size:18})})]}),L.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed mb-6",children:t.description}),L.jsxs("a",{href:"https://instagram.com/morningstar0213",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30 hover:border-[#ccff00]/60 mb-6 group transition-all",children:[L.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(244,63,94,0.3)]",children:L.jsx(Wd,{size:20})}),L.jsxs("div",{className:"flex-1 min-w-0",children:[L.jsx("div",{className:"font-mono-display text-[10px] text-[#00ff88] tracking-widest uppercase",children:"Private Repository Access"}),L.jsxs("div",{className:"text-xs sm:text-sm text-slate-200 group-hover:text-white",children:["DM on Instagram ",L.jsx("span",{className:"font-mono-display text-[#ccff00] font-bold",children:"@morningstar0213"})," to request access to the source code."]})]})]}),L.jsxs("h4",{className:"font-mono-display text-xs tracking-widest text-[#ccff00] uppercase mb-3 flex items-center gap-1.5",children:[L.jsx(wa,{size:14,className:"text-[#00ff88]"})," Key Technical Capabilities"]}),L.jsx("ul",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6",children:t.highlights.map((n,i)=>L.jsxs("li",{className:"p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-slate-300 flex items-start gap-2",children:[L.jsx("span",{className:"text-[#00ff88] shrink-0 mt-0.5",children:"▸"}),L.jsx("span",{children:n})]},i))}),L.jsx("h4",{className:"font-mono-display text-xs tracking-widest text-[#ccff00] uppercase mb-3",children:"Technologies & Protocols"}),L.jsx("div",{className:"flex flex-wrap gap-2",children:t.tech.map(n=>L.jsx("span",{className:"font-mono-display text-xs px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[#86efac] shadow-[0_0_10px_rgba(0,255,136,0.15)]",children:n},n))})]})}):null}function Ps({children:t,className:e="",id:n,"data-tree-branch":i,onClick:r}){const s=re.useRef(null),[o,a]=re.useState({x:0,y:0}),[l,c]=re.useState({x:50,y:50,opacity:0}),f=u=>{if(!s.current)return;const h=s.current.getBoundingClientRect(),m=(u.clientX-h.left)/h.width,_=(u.clientY-h.top)/h.height,g=(.5-_)*16,p=(m-.5)*16;a({x:g,y:p}),c({x:m*100,y:_*100,opacity:.18})},d=()=>{a({x:0,y:0}),c(u=>({...u,opacity:0}))};return L.jsxs(Ht.div,{ref:s,id:n,"data-tree-branch":i,onClick:r,onMouseMove:f,onMouseLeave:d,style:{transformStyle:"preserve-3d"},animate:{rotateX:o.x,rotateY:o.y},transition:{type:"spring",damping:20,stiffness:220,mass:.6},className:`relative overflow-hidden loki-card rounded-3xl p-4 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.8)] border-[#00ff88]/30 hover:border-[#ccff00]/60 ${e}`,children:[L.jsx("div",{className:"pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl",style:{opacity:l.opacity,background:`radial-gradient(circle 320px at ${l.x}% ${l.y}%, rgba(204,255,0,0.4), transparent 70%)`}}),t]})}const VN={"Penetration Testing":wa,"Wireless Security":AS,"Web App Security":SS,Cryptography:MS,"Red Team Ops":ES,"Malware Analysis":Qp,"OSINT & Recon":LC,"Network Defense":TS},zN={GoodFellas:jC,"Phishing Framework":Xd,"Network Jammer":uR,"Android RAT Suite":nR,"Multi-Protocol Bruteforcer":MS,"Advanced Keylogger":Qp,"Message Encryptor":ES,"Web App Scanner":SS,"SQL Injection Toolkit":bC,"Port & Service Scanner":QC,"Packet Sniffer & Analyzer":$C,"Vulnerability Scanner":aR,"Digital Forensics Toolkit":UC,"Password Hash Cracker":VC,"Steganography Tool":NC,"ARP Spoofer & Poisoner":TS,"MITM Proxy Framework":wa,"WPA/WPA2 Audit Tool":AS};function HN(){const t=re.useRef(null),{profile:e,certifications:n,domains:i,arsenal:r,projects:s,contacts:o}=pR,[a,l]=re.useState(null),[c,f]=re.useState("All"),d=["All",...Array.from(new Set(s.map(h=>h.category)))],u=c==="All"?s:s.filter(h=>h.category===c);return L.jsxs("div",{ref:t,className:"relative min-h-screen bg-[#010c05] text-[#f0fdf4] selection:bg-[#ccff00] selection:text-black overflow-x-hidden",children:[L.jsx(mR,{}),L.jsx(FN,{}),L.jsx(ON,{containerRef:t}),L.jsx(kN,{}),L.jsxs("div",{className:"relative z-20 max-w-7xl mx-auto px-2.5 sm:px-8 py-20",style:{zoom:.8},children:[L.jsxs("section",{id:"home",className:"min-h-[85vh] flex flex-col justify-center items-center py-16",children:[L.jsx(Ht.div,{initial:{opacity:0,y:40,scale:.95},whileInView:{opacity:1,y:0,scale:1},viewport:{amount:.3},transition:{duration:.6},className:"w-full max-w-2xl",children:L.jsxs(Ps,{id:"hero-card","data-tree-branch":"left",className:"flex flex-col items-center text-center p-8 sm:p-10 border-[#00ff88]/40 shadow-[0_0_60px_rgba(0,0,0,0.85)]",children:[L.jsxs("div",{className:"section-badge mb-6 cursor-default",children:[L.jsx("span",{className:"w-2 h-2 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_10px_#ccff00]"}),L.jsx("span",{children:e.statusBadge})]}),L.jsxs("div",{className:"relative mb-6",children:[L.jsx(Ht.div,{className:"absolute -inset-4 rounded-full border-2 border-[#ccff00]/40 border-dashed",animate:{rotate:360},transition:{duration:16,repeat:1/0,ease:"linear"}}),L.jsx(Ht.div,{className:"absolute -inset-2 rounded-full border border-[#00ff88]/40",animate:{rotate:-360},transition:{duration:24,repeat:1/0,ease:"linear"}}),L.jsx("div",{className:"w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-2 ring-[#00ff88]/70 shadow-[0_0_40px_rgba(0,255,136,0.4)] bg-emerald-950/60",children:L.jsx("img",{src:hR,alt:e.name,className:"w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-300"})})]}),L.jsxs("h1",{className:"text-3xl sm:text-6xl font-bold tracking-tight text-white mb-2",children:["Vishesh"," ",L.jsx("span",{className:"text-gradient-electric drop-shadow-[0_0_35px_rgba(204,255,0,0.5)]",children:"Ranjan"})]}),L.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[L.jsx(Qp,{size:16,className:"text-[#ccff00]"}),L.jsx("span",{className:"font-mono-display text-xs sm:text-sm tracking-[0.2em] text-[#a3ff00] uppercase font-semibold",children:e.role})]}),L.jsx("p",{className:"text-slate-300 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed mb-6",children:e.tagline}),L.jsx("div",{className:"flex items-center gap-6 sm:gap-10 mb-8 px-6 py-3 rounded-2xl bg-emerald-950/50 border border-emerald-500/30",children:e.stats.map((h,m)=>L.jsxs(Hc.Fragment,{children:[L.jsxs("div",{className:"flex flex-col items-center",children:[L.jsx("span",{className:"font-mono-display text-xl sm:text-3xl font-bold text-gradient-electric",children:h.value}),L.jsx("span",{className:"font-mono-display text-[9px] tracking-widest text-slate-400 uppercase mt-0.5",children:h.label})]}),m<e.stats.length-1&&L.jsx("div",{className:"w-[1px] h-8 bg-emerald-500/25"})]},h.label))}),L.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-6",children:[L.jsx("a",{href:"#projects",onClick:h=>{var m;h.preventDefault(),(m=document.querySelector("#projects"))==null||m.scrollIntoView({behavior:"smooth"})},className:"px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-[#ccff00] via-[#00ff88] to-[#14b8a6] hover:from-[#a3ff00] hover:to-[#00ff88] shadow-[0_0_25px_rgba(204,255,0,0.45)] transition-all transform hover:-translate-y-0.5",children:"Explore 18 Projects"}),L.jsx("a",{href:"#contact",onClick:h=>{var m;h.preventDefault(),(m=document.querySelector("#contact"))==null||m.scrollIntoView({behavior:"smooth"})},className:"px-6 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-[#ccff00] border border-[#00ff88]/40 hover:border-[#ccff00] bg-emerald-950/40 hover:bg-emerald-900/40 transition-all transform hover:-translate-y-0.5",children:"Initiate Contact"})]}),L.jsx("div",{className:"flex items-center gap-3",children:[{icon:B0,href:e.socials.twitter,label:"Twitter"},{icon:Wd,href:e.socials.instagram,label:"Instagram"},{icon:k0,href:e.socials.telegram,label:"Telegram"},{icon:Xd,href:e.socials.email,label:"Email"}].map(({icon:h,href:m,label:_})=>L.jsx("a",{href:m,target:m.startsWith("mailto")?void 0:"_blank",rel:"noopener noreferrer","aria-label":_,className:"w-10 h-10 rounded-xl flex items-center justify-center bg-emerald-950/50 border border-emerald-500/25 text-[#00ff88] hover:text-white hover:border-[#ccff00] hover:bg-emerald-900/40 transition-all shadow-[0_0_15px_rgba(0,255,136,0.18)]",children:L.jsx(h,{size:16})},_))})]})}),L.jsxs(Ht.div,{animate:{y:[0,8,0]},transition:{duration:2.2,repeat:1/0},className:"mt-12 flex flex-col items-center gap-1 opacity-70",children:[L.jsx("span",{className:"font-mono-display text-[9px] tracking-widest text-[#ccff00] uppercase",children:"Follow The Timeline Branches"}),L.jsx(_C,{size:14,className:"text-[#00ff88]"})]})]}),L.jsxs("section",{id:"certs",className:"py-24",children:[L.jsxs(Ht.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{amount:.3},transition:{duration:.5},className:"text-center mb-16",children:[L.jsx("div",{className:"section-badge mb-3",children:"02 — Certifications & Credentials"}),L.jsxs("h2",{className:"text-3xl sm:text-5xl font-bold text-white mb-2",children:["Verified"," ",L.jsx("span",{className:"text-gradient-electric",children:"Timeline Credentials"})]}),L.jsx("p",{className:"text-slate-400 text-xs sm:text-sm max-w-md mx-auto",children:"Each certification physically anchored to dedicated branches extending from the central tree trunk."})]}),L.jsx("div",{className:"flex flex-col gap-16",children:n.map((h,m)=>{const _=m%2===0;return L.jsx("div",{className:`flex w-full ${_?"justify-start pr-[52%] sm:pr-[54%] md:pr-[58%] lg:pr-[60%]":"justify-end pl-[52%] sm:pl-[54%] md:pl-[58%] lg:pl-[60%]"}`,children:L.jsx(Ht.div,{initial:{opacity:0,x:_?-50:50,scale:.92},whileInView:{opacity:1,x:0,scale:1},exit:{opacity:0,scale:.9},viewport:{amount:.3,margin:"-5% 0px -15% 0px"},transition:{duration:.5},className:"w-full",children:L.jsxs(Ps,{id:`cert-${h.id}`,"data-tree-branch":_?"left":"right",className:"group",children:[L.jsxs("div",{className:"flex items-center justify-between mb-3.5",children:[L.jsx("span",{className:`font-mono-display text-xs font-bold px-3 py-1 rounded-full text-black bg-gradient-to-r ${h.badgeColor} shadow-[0_0_15px_rgba(204,255,0,0.35)]`,children:h.name}),L.jsxs("div",{className:"flex items-center gap-1 text-slate-400 font-mono-display text-xs",children:[L.jsx(vC,{size:13,className:"text-[#00ff88]"}),L.jsxs("span",{children:[h.org," · ",h.year]})]})]}),L.jsx("h3",{className:"text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#ccff00] transition-colors",children:h.full}),L.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed mb-4",children:h.desc}),L.jsxs("div",{className:"flex items-center gap-1.5 font-mono-display text-[10px] text-[#00ff88]",children:[L.jsx(EC,{size:12,className:"text-[#ccff00]"}),L.jsx("span",{children:"Timeline Anchor Verified"})]})]})})},h.id)})})]}),L.jsxs("section",{id:"expertise",className:"py-24",children:[L.jsxs(Ht.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{amount:.3},transition:{duration:.5},className:"text-center mb-16",children:[L.jsx("div",{className:"section-badge mb-3",children:"03 — Expertise & Specialization"}),L.jsxs("h2",{className:"text-3xl sm:text-5xl font-bold text-white mb-2",children:["Offensive & Defensive"," ",L.jsx("span",{className:"text-gradient-electric",children:"Specialization Matrix"})]}),L.jsx("p",{className:"text-slate-400 text-xs sm:text-sm max-w-md mx-auto",children:"Eight distinct security domains connected directly to the lateral branches of the tree."})]}),L.jsx("div",{className:"flex flex-col gap-16 mb-16",children:i.map((h,m)=>{const _=VN[h.title]||wa,g=m%2===0;return L.jsx("div",{className:`flex w-full ${g?"justify-start pr-[52%] sm:pr-[54%] md:pr-[58%] lg:pr-[60%]":"justify-end pl-[52%] sm:pl-[54%] md:pl-[58%] lg:pl-[60%]"}`,children:L.jsx(Ht.div,{initial:{opacity:0,x:g?-50:50,scale:.92},whileInView:{opacity:1,x:0,scale:1},exit:{opacity:0,scale:.9},viewport:{amount:.3,margin:"-5% 0px -15% 0px"},transition:{duration:.5},className:"w-full",children:L.jsxs(Ps,{id:`domain-${m}`,"data-tree-branch":g?"left":"right",className:"group",children:[L.jsxs("div",{className:"flex items-center gap-3.5 mb-3",children:[L.jsx("div",{className:"w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#ccff00] group-hover:scale-110 group-hover:border-[#ccff00]/60 transition-all shadow-[0_0_15px_rgba(204,255,0,0.2)]",children:L.jsx(_,{size:19})}),L.jsx("h3",{className:"font-bold text-white text-base group-hover:text-[#ccff00] transition-colors",children:h.title})]}),L.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed mb-4",children:h.desc}),L.jsx("div",{className:"flex flex-wrap gap-1.5 pt-3 border-t border-emerald-500/15",children:h.tools.map(p=>L.jsx("span",{className:"font-mono-display text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-[#a3ff00]",children:p},p))})]})})},h.title)})}),L.jsx("div",{className:"flex justify-center",children:L.jsx(Ht.div,{initial:{opacity:0,y:40,scale:.95},whileInView:{opacity:1,y:0,scale:1},viewport:{amount:.3},transition:{duration:.6},className:"w-full max-w-3xl",children:L.jsxs(Ps,{id:"arsenal-card","data-tree-branch":"left",className:"text-center p-6 sm:p-8",children:[L.jsxs("div",{className:"flex items-center justify-center gap-2 mb-6",children:[L.jsx(wC,{size:17,className:"text-[#ccff00]"}),L.jsx("h3",{className:"font-mono-display text-xs sm:text-sm tracking-widest text-[#a3ff00] uppercase font-bold",children:"Operational Arsenal & Tooling"})]}),L.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:r.map(h=>L.jsx("span",{className:"font-mono-display text-xs px-3.5 py-1.5 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-[#86efac] hover:border-[#ccff00] hover:text-white hover:bg-emerald-900/40 hover:shadow-[0_0_15px_rgba(204,255,0,0.3)] transition-all cursor-default",children:h},h))})]})})})]}),L.jsxs("section",{id:"projects",className:"py-24",children:[L.jsxs(Ht.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{amount:.3},transition:{duration:.5},className:"text-center mb-16",children:[L.jsx("div",{className:"section-badge mb-3",children:"04 — Security Projects & Tools"}),L.jsxs("h2",{className:"text-3xl sm:text-5xl font-bold text-white mb-2",children:["18 Security"," ",L.jsx("span",{className:"text-gradient-electric",children:"Architectures & Utilities"})]}),L.jsx("p",{className:"text-slate-400 text-xs sm:text-sm max-w-lg mx-auto mb-8",children:"Click any project card to inspect its full architecture and request private repository access."}),L.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto",children:d.map(h=>L.jsx("button",{onClick:()=>f(h),className:`font-mono-display text-[11px] px-3.5 py-1.5 rounded-full transition-all duration-200 ${c===h?"bg-gradient-to-r from-[#ccff00] to-[#00ff88] text-black font-bold shadow-[0_0_15px_rgba(204,255,0,0.4)]":"bg-emerald-950/40 text-slate-300 hover:text-white border border-emerald-500/20"}`,children:h},h))})]}),L.jsx("div",{className:"flex flex-col gap-16",children:u.map((h,m)=>{const _=zN[h.title]||wa,g=m%2===0;return L.jsx("div",{className:`flex w-full ${g?"justify-start pr-[52%] sm:pr-[54%] md:pr-[58%] lg:pr-[60%]":"justify-end pl-[52%] sm:pl-[54%] md:pl-[58%] lg:pr-[60%]"}`,children:L.jsx(Ht.div,{initial:{opacity:0,x:g?-50:50,scale:.92},whileInView:{opacity:1,x:0,scale:1},exit:{opacity:0,scale:.9},viewport:{amount:.25,margin:"-5% 0px -15% 0px"},transition:{duration:.5},className:"w-full",children:L.jsxs(Ps,{id:`project-${h.id}`,"data-tree-branch":g?"left":"right",onClick:()=>l(h),className:`cursor-pointer group ${h.featured?"border-[#ccff00]/70 shadow-[0_0_35px_rgba(204,255,0,0.3)]":""}`,children:[h.featured&&L.jsxs("div",{className:"absolute top-4 right-4 font-mono-display text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/50 flex items-center gap-1 shadow-[0_0_10px_rgba(204,255,0,0.3)]",children:[L.jsx(rR,{size:10}),L.jsx("span",{children:"FLAGSHIP"})]}),L.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[L.jsx("div",{className:"w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#ccff00] group-hover:scale-110 group-hover:border-[#ccff00]/60 transition-all shadow-[0_0_15px_rgba(204,255,0,0.2)]",children:L.jsx(_,{size:20})}),L.jsxs("div",{children:[L.jsx("div",{className:"font-mono-display text-[10px] text-[#00ff88] uppercase tracking-widest font-bold",children:h.category}),L.jsx("h3",{className:"font-bold text-white text-base sm:text-lg group-hover:text-[#ccff00] transition-colors",children:h.title})]})]}),h.tagline&&L.jsxs("div",{className:"font-mono-display text-xs text-[#a3ff00] italic mb-2",children:["“",h.tagline,"”"]}),L.jsx("p",{className:"text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3",children:h.description}),L.jsxs("div",{className:"flex flex-wrap gap-1.5 mb-3.5",children:[h.tech.slice(0,3).map(p=>L.jsx("span",{className:"font-mono-display text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/20 text-[#86efac]",children:p},p)),h.tech.length>3&&L.jsxs("span",{className:"font-mono-display text-[10px] px-1.5 py-0.5 rounded text-slate-400",children:["+",h.tech.length-3]})]}),L.jsxs("div",{className:"flex items-center gap-1 font-mono-display text-xs text-[#ccff00] group-hover:translate-x-1 transition-all",children:[L.jsx("span",{children:"Inspect architecture"}),L.jsx(SC,{size:13})]})]})})},h.id)})})]}),L.jsxs("section",{id:"contact",className:"py-24",children:[L.jsxs(Ht.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{amount:.3},transition:{duration:.5},className:"text-center mb-16",children:[L.jsx("div",{className:"section-badge mb-3",children:"05 — Cosmic Zenith / Transmission"}),L.jsxs("h2",{className:"text-3xl sm:text-5xl font-bold text-white mb-2",children:["Initialize"," ",L.jsx("span",{className:"text-gradient-electric",children:"Secure Transmission"})]}),L.jsx("p",{className:"text-slate-400 text-xs sm:text-sm max-w-md mx-auto",children:"Direct communication channels across the temporal timeline, anchored to the highest branches of the world tree."})]}),L.jsx("div",{className:"flex flex-col gap-16 mb-24",children:o.map((h,m)=>{const _=m%2===0;return L.jsx("div",{className:`flex w-full ${_?"justify-start pr-[52%] sm:pr-[54%] md:pr-[58%] lg:pr-[60%]":"justify-end pl-[52%] sm:pl-[54%] md:pl-[58%] lg:pl-[60%]"}`,children:L.jsx(Ht.div,{initial:{opacity:0,x:_?-50:50,scale:.92},whileInView:{opacity:1,x:0,scale:1},viewport:{amount:.3},transition:{duration:.5},className:"w-full",children:L.jsx(Ps,{id:`contact-${m}`,"data-tree-branch":_?"left":"right",className:"p-6",children:L.jsxs("a",{href:h.href,target:h.href.startsWith("mailto")?void 0:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 group",children:[L.jsx("div",{className:"w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-[#ccff00] group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-[#ccff00]/60 transition-all shadow-[0_0_15px_rgba(204,255,0,0.25)] shrink-0",children:h.label.includes("Twitter")?L.jsx(B0,{size:22}):h.label.includes("Instagram")?L.jsx(Wd,{size:22}):h.label.includes("Telegram")?L.jsx(k0,{size:22}):L.jsx(Xd,{size:22})}),L.jsxs("div",{className:"flex-1 min-w-0",children:[L.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[L.jsx("span",{className:"font-mono-display text-[10px] text-[#00ff88] tracking-wider uppercase font-semibold",children:h.label}),L.jsx("span",{className:"font-mono-display text-[9px] px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/20 text-[#ccff00]",children:h.badge})]}),L.jsx("div",{className:"text-white font-bold text-sm sm:text-base truncate group-hover:text-[#ccff00] transition-colors",children:h.handle}),L.jsx("div",{className:"text-slate-400 text-xs truncate",children:h.sub})]}),L.jsx(RC,{size:16,className:"text-slate-500 group-hover:text-[#ccff00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"})]})})})},h.label)})}),L.jsxs("div",{className:"text-center pt-8 border-t border-emerald-500/20",children:[L.jsxs("div",{className:"flex items-center justify-center gap-2 font-mono-display text-xs text-[#00ff88]/80 tracking-widest uppercase mb-2",children:[L.jsx(wS,{size:14,className:"text-[#ccff00]"}),L.jsx("span",{children:"Vishesh Ranjan · Timeline Edition"})]}),L.jsxs("p",{className:"text-slate-500 text-xs",children:["© ",new Date().getFullYear()," All timelines secured. Encrypted & Hardened."]})]})]})]}),L.jsx(fC,{children:a&&L.jsx(BN,{project:a,onClose:()=>l(null)})})]})}kf.createRoot(document.getElementById("root")).render(L.jsx(Hc.StrictMode,{children:L.jsx(HN,{})}));
