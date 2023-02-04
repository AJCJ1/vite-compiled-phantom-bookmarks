(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Tp={exports:{}},fn={},mn={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),v0=Symbol.for("react.portal"),_0=Symbol.for("react.fragment"),x0=Symbol.for("react.strict_mode"),y0=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),M0=Symbol.for("react.context"),w0=Symbol.for("react.forward_ref"),E0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),C0=Symbol.for("react.lazy"),Zf=Symbol.iterator;function b0(n){return n===null||typeof n!="object"?null:(n=Zf&&n[Zf]||n["@@iterator"],typeof n=="function"?n:null)}var Cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bp=Object.assign,Ap={};function ds(n,e,t){this.props=n,this.context=e,this.refs=Ap,this.updater=t||Cp}ds.prototype.isReactComponent={};ds.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ds.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Lp(){}Lp.prototype=ds.prototype;function Gc(n,e,t){this.props=n,this.context=e,this.refs=Ap,this.updater=t||Cp}var Wc=Gc.prototype=new Lp;Wc.constructor=Gc;bp(Wc,ds.prototype);Wc.isPureReactComponent=!0;var Jf=Array.isArray,Pp=Object.prototype.hasOwnProperty,Hc={current:null},Rp={key:!0,ref:!0,__self:!0,__source:!0};function Dp(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Pp.call(e,i)&&!Rp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Eo,type:n,key:s,ref:o,props:r,_owner:Hc.current}}function A0(n,e){return{$$typeof:Eo,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Xc(n){return typeof n=="object"&&n!==null&&n.$$typeof===Eo}function L0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Qf=/\/+/g;function Pl(n,e){return typeof n=="object"&&n!==null&&n.key!=null?L0(""+n.key):e.toString(36)}function _a(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Eo:case v0:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Pl(o,0):i,Jf(r)?(t="",n!=null&&(t=n.replace(Qf,"$&/")+"/"),_a(r,e,t,"",function(u){return u})):r!=null&&(Xc(r)&&(r=A0(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qf,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jf(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Pl(s,a);o+=_a(s,e,t,l,r)}else if(l=b0(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Pl(s,a++),o+=_a(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Io(n,e,t){if(n==null)return n;var i=[],r=0;return _a(n,i,"","",function(s){return e.call(t,s,r++)}),i}function P0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Vt={current:null},xa={transition:null},R0={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:xa,ReactCurrentOwner:Hc};Fe.Children={map:Io,forEach:function(n,e,t){Io(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Io(n,function(){e++}),e},toArray:function(n){return Io(n,function(e){return e})||[]},only:function(n){if(!Xc(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Fe.Component=ds;Fe.Fragment=_0;Fe.Profiler=y0;Fe.PureComponent=Gc;Fe.StrictMode=x0;Fe.Suspense=E0;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R0;Fe.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=bp({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hc.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Pp.call(e,l)&&!Rp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Eo,type:n.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(n){return n={$$typeof:M0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:S0,_context:n},n.Consumer=n};Fe.createElement=Dp;Fe.createFactory=function(n){var e=Dp.bind(null,n);return e.type=n,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(n){return{$$typeof:w0,render:n}};Fe.isValidElement=Xc;Fe.lazy=function(n){return{$$typeof:C0,_payload:{_status:-1,_result:n},_init:P0}};Fe.memo=function(n,e){return{$$typeof:T0,type:n,compare:e===void 0?null:e}};Fe.startTransition=function(n){var e=xa.transition;xa.transition={};try{n()}finally{xa.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(n,e){return Vt.current.useCallback(n,e)};Fe.useContext=function(n){return Vt.current.useContext(n)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(n){return Vt.current.useDeferredValue(n)};Fe.useEffect=function(n,e){return Vt.current.useEffect(n,e)};Fe.useId=function(){return Vt.current.useId()};Fe.useImperativeHandle=function(n,e,t){return Vt.current.useImperativeHandle(n,e,t)};Fe.useInsertionEffect=function(n,e){return Vt.current.useInsertionEffect(n,e)};Fe.useLayoutEffect=function(n,e){return Vt.current.useLayoutEffect(n,e)};Fe.useMemo=function(n,e){return Vt.current.useMemo(n,e)};Fe.useReducer=function(n,e,t){return Vt.current.useReducer(n,e,t)};Fe.useRef=function(n){return Vt.current.useRef(n)};Fe.useState=function(n){return Vt.current.useState(n)};Fe.useSyncExternalStore=function(n,e,t){return Vt.current.useSyncExternalStore(n,e,t)};Fe.useTransition=function(){return Vt.current.useTransition()};Fe.version="18.2.0";(function(n){n.exports=Fe})(mn);var Ip={exports:{}},Np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(R,U){var G=R.length;R.push(U);e:for(;0<G;){var ie=G-1>>>1,z=R[ie];if(0<r(z,U))R[ie]=U,R[G]=z,G=ie;else break e}}function t(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var U=R[0],G=R.pop();if(G!==U){R[0]=G;e:for(var ie=0,z=R.length,q=z>>>1;ie<q;){var re=2*(ie+1)-1,oe=R[re],O=re+1,ve=R[O];if(0>r(oe,G))O<z&&0>r(ve,oe)?(R[ie]=ve,R[O]=G,ie=O):(R[ie]=oe,R[re]=G,ie=re);else if(O<z&&0>r(ve,G))R[ie]=ve,R[O]=G,ie=O;else break e}}return U}function r(R,U){var G=R.sortIndex-U.sortIndex;return G!==0?G:R.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,x=!1,h=!1,p=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var U=t(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=R)i(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=t(u)}}function y(R){if(h=!1,v(R),!x)if(t(l)!==null)x=!0,J(M);else{var U=t(u);U!==null&&Q(y,U.startTime-R)}}function M(R,U){x=!1,h&&(h=!1,g(S),S=-1),m=!0;var G=f;try{for(v(U),d=t(l);d!==null&&(!(d.expirationTime>U)||R&&!V());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var z=ie(d.expirationTime<=U);U=n.unstable_now(),typeof z=="function"?d.callback=z:d===t(l)&&i(l),v(U)}else i(l);d=t(l)}if(d!==null)var q=!0;else{var re=t(u);re!==null&&Q(y,re.startTime-U),q=!1}return q}finally{d=null,f=G,m=!1}}var b=!1,A=null,S=-1,C=5,L=-1;function V(){return!(n.unstable_now()-L<C)}function K(){if(A!==null){var R=n.unstable_now();L=R;var U=!0;try{U=A(!0,R)}finally{U?k():(b=!1,A=null)}}else b=!1}var k;if(typeof _=="function")k=function(){_(K)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,X=I.port2;I.port1.onmessage=K,k=function(){X.postMessage(null)}}else k=function(){p(K,0)};function J(R){A=R,b||(b=!0,k())}function Q(R,U){S=p(function(){R(n.unstable_now())},U)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(R){R.callback=null},n.unstable_continueExecution=function(){x||m||(x=!0,J(M))},n.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<R?Math.floor(1e3/R):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(R){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var G=f;f=U;try{return R()}finally{f=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(R,U){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=f;f=R;try{return U()}finally{f=G}},n.unstable_scheduleCallback=function(R,U,G){var ie=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ie+G:ie):G=ie,R){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=G+z,R={id:c++,callback:U,priorityLevel:R,startTime:G,expirationTime:z,sortIndex:-1},G>ie?(R.sortIndex=G,e(u,R),t(l)===null&&R===t(u)&&(h?(g(S),S=-1):h=!0,Q(y,G-ie))):(R.sortIndex=z,e(l,R),x||m||(x=!0,J(M))),R},n.unstable_shouldYield=V,n.unstable_wrapCallback=function(R){var U=f;return function(){var G=f;f=U;try{return R.apply(this,arguments)}finally{f=G}}}})(Np);(function(n){n.exports=Np})(Ip);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp=mn.exports,cn=Ip.exports;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zp=new Set,eo={};function mr(n,e){ts(n,e),ts(n+"Capture",e)}function ts(n,e){for(eo[n]=e,n=0;n<e.length;n++)zp.add(e[n])}var si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,D0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kf={},ed={};function I0(n){return Bu.call(ed,n)?!0:Bu.call(Kf,n)?!1:D0.test(n)?ed[n]=!0:(Kf[n]=!0,!1)}function N0(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function k0(n,e,t,i){if(e===null||typeof e>"u"||N0(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){bt[n]=new Gt(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];bt[e]=new Gt(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){bt[n]=new Gt(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){bt[n]=new Gt(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){bt[n]=new Gt(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){bt[n]=new Gt(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){bt[n]=new Gt(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){bt[n]=new Gt(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){bt[n]=new Gt(n,5,!1,n.toLowerCase(),null,!1,!1)});var jc=/[\-:]([a-z])/g;function qc(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(jc,qc);bt[e]=new Gt(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(jc,qc);bt[e]=new Gt(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(jc,qc);bt[e]=new Gt(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){bt[n]=new Gt(n,1,!1,n.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){bt[n]=new Gt(n,1,!1,n.toLowerCase(),null,!0,!0)});function $c(n,e,t,i){var r=bt.hasOwnProperty(e)?bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k0(e,t,r,i)&&(t=null),i||r===null?I0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ui=kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,No=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),Yc=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),Op=Symbol.for("react.context"),Zc=Symbol.for("react.forward_ref"),Gu=Symbol.for("react.suspense"),Wu=Symbol.for("react.suspense_list"),Jc=Symbol.for("react.memo"),gi=Symbol.for("react.lazy"),Up=Symbol.for("react.offscreen"),td=Symbol.iterator;function xs(n){return n===null||typeof n!="object"?null:(n=td&&n[td]||n["@@iterator"],typeof n=="function"?n:null)}var ot=Object.assign,Rl;function ks(n){if(Rl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Rl=e&&e[1]||""}return`
`+Rl+n}var Dl=!1;function Il(n,e){if(!n||Dl)return"";Dl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Dl=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ks(n):""}function z0(n){switch(n.tag){case 5:return ks(n.type);case 16:return ks("Lazy");case 13:return ks("Suspense");case 19:return ks("SuspenseList");case 0:case 2:case 15:return n=Il(n.type,!1),n;case 11:return n=Il(n.type.render,!1),n;case 1:return n=Il(n.type,!0),n;default:return""}}function Hu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Nr:return"Fragment";case Ir:return"Portal";case Vu:return"Profiler";case Yc:return"StrictMode";case Gu:return"Suspense";case Wu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Op:return(n.displayName||"Context")+".Consumer";case Fp:return(n._context.displayName||"Context")+".Provider";case Zc:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Jc:return e=n.displayName||null,e!==null?e:Hu(n.type)||"Memo";case gi:e=n._payload,n=n._init;try{return Hu(n(e))}catch{}}return null}function F0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hu(e);case 8:return e===Yc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Di(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Bp(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function O0(n){var e=Bp(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ko(n){n._valueTracker||(n._valueTracker=O0(n))}function Vp(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Bp(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Da(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xu(n,e){var t=e.checked;return ot({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:n._wrapperState.initialChecked})}function nd(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Di(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gp(n,e){e=e.checked,e!=null&&$c(n,"checked",e,!1)}function ju(n,e){Gp(n,e);var t=Di(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?qu(n,e.type,t):e.hasOwnProperty("defaultValue")&&qu(n,e.type,Di(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function id(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function qu(n,e,t){(e!=="number"||Da(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var zs=Array.isArray;function qr(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Di(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function $u(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return ot({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(zs(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Di(t)}}function Wp(n,e){var t=Di(e.value),i=Di(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function sd(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Hp(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yu(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Hp(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var zo,Xp=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zo.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function to(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Gs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},U0=["Webkit","ms","Moz","O"];Object.keys(Gs).forEach(function(n){U0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Gs[e]=Gs[n]})});function jp(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Gs.hasOwnProperty(n)&&Gs[n]?(""+e).trim():e+"px"}function qp(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=jp(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var B0=ot({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(n,e){if(e){if(B0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Ju(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qu=null;function Qc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ku=null,$r=null,Yr=null;function od(n){if(n=bo(n)){if(typeof Ku!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=ul(e),Ku(n.stateNode,n.type,e))}}function $p(n){$r?Yr?Yr.push(n):Yr=[n]:$r=n}function Yp(){if($r){var n=$r,e=Yr;if(Yr=$r=null,od(n),e)for(n=0;n<e.length;n++)od(e[n])}}function Zp(n,e){return n(e)}function Jp(){}var Nl=!1;function Qp(n,e,t){if(Nl)return n(e,t);Nl=!0;try{return Zp(n,e,t)}finally{Nl=!1,($r!==null||Yr!==null)&&(Jp(),Yp())}}function no(n,e){var t=n.stateNode;if(t===null)return null;var i=ul(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var ec=!1;if(si)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){ec=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{ec=!1}function V0(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ws=!1,Ia=null,Na=!1,tc=null,G0={onError:function(n){Ws=!0,Ia=n}};function W0(n,e,t,i,r,s,o,a,l){Ws=!1,Ia=null,V0.apply(G0,arguments)}function H0(n,e,t,i,r,s,o,a,l){if(W0.apply(this,arguments),Ws){if(Ws){var u=Ia;Ws=!1,Ia=null}else throw Error(ee(198));Na||(Na=!0,tc=u)}}function gr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Kp(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ad(n){if(gr(n)!==n)throw Error(ee(188))}function X0(n){var e=n.alternate;if(!e){if(e=gr(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return ad(r),n;if(s===i)return ad(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function em(n){return n=X0(n),n!==null?tm(n):null}function tm(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=tm(n);if(e!==null)return e;n=n.sibling}return null}var nm=cn.unstable_scheduleCallback,ld=cn.unstable_cancelCallback,j0=cn.unstable_shouldYield,q0=cn.unstable_requestPaint,lt=cn.unstable_now,$0=cn.unstable_getCurrentPriorityLevel,Kc=cn.unstable_ImmediatePriority,im=cn.unstable_UserBlockingPriority,ka=cn.unstable_NormalPriority,Y0=cn.unstable_LowPriority,rm=cn.unstable_IdlePriority,sl=null,Vn=null;function Z0(n){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(sl,n,void 0,(n.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:K0,J0=Math.log,Q0=Math.LN2;function K0(n){return n>>>=0,n===0?32:31-(J0(n)/Q0|0)|0}var Fo=64,Oo=4194304;function Fs(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function za(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Fs(a):(s&=o,s!==0&&(i=Fs(s)))}else o=t&~r,o!==0?i=Fs(o):s!==0&&(i=Fs(s));if(i===0)return 0;if(e!==0&&e!==i&&(e&r)===0&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if((i&4)!==0&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-In(e),r=1<<t,i|=n[t],e&=~r;return i}function ev(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tv(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-In(s),a=1<<o,l=r[o];l===-1?((a&t)===0||(a&i)!==0)&&(r[o]=ev(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function nc(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function sm(){var n=Fo;return Fo<<=1,(Fo&4194240)===0&&(Fo=64),n}function kl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function To(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-In(e),n[e]=t}function nv(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-In(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ef(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-In(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var je=0;function om(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var am,tf,lm,um,cm,ic=!1,Uo=[],wi=null,Ei=null,Ti=null,io=new Map,ro=new Map,_i=[],iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(n,e){switch(n){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Ei=null;break;case"mouseover":case"mouseout":Ti=null;break;case"pointerover":case"pointerout":io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(e.pointerId)}}function Ss(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=bo(e),e!==null&&tf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function rv(n,e,t,i,r){switch(e){case"focusin":return wi=Ss(wi,n,e,t,i,r),!0;case"dragenter":return Ei=Ss(Ei,n,e,t,i,r),!0;case"mouseover":return Ti=Ss(Ti,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return io.set(s,Ss(io.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ro.set(s,Ss(ro.get(s)||null,n,e,t,i,r)),!0}return!1}function fm(n){var e=Zi(n.target);if(e!==null){var t=gr(e);if(t!==null){if(e=t.tag,e===13){if(e=Kp(t),e!==null){n.blockedOn=e,cm(n.priority,function(){lm(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ya(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=rc(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Qu=i,t.target.dispatchEvent(i),Qu=null}else return e=bo(t),e!==null&&tf(e),n.blockedOn=t,!1;e.shift()}return!0}function cd(n,e,t){ya(n)&&t.delete(e)}function sv(){ic=!1,wi!==null&&ya(wi)&&(wi=null),Ei!==null&&ya(Ei)&&(Ei=null),Ti!==null&&ya(Ti)&&(Ti=null),io.forEach(cd),ro.forEach(cd)}function Ms(n,e){n.blockedOn===e&&(n.blockedOn=null,ic||(ic=!0,cn.unstable_scheduleCallback(cn.unstable_NormalPriority,sv)))}function so(n){function e(r){return Ms(r,n)}if(0<Uo.length){Ms(Uo[0],n);for(var t=1;t<Uo.length;t++){var i=Uo[t];i.blockedOn===n&&(i.blockedOn=null)}}for(wi!==null&&Ms(wi,n),Ei!==null&&Ms(Ei,n),Ti!==null&&Ms(Ti,n),io.forEach(e),ro.forEach(e),t=0;t<_i.length;t++)i=_i[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<_i.length&&(t=_i[0],t.blockedOn===null);)fm(t),t.blockedOn===null&&_i.shift()}var Zr=ui.ReactCurrentBatchConfig,Fa=!0;function ov(n,e,t,i){var r=je,s=Zr.transition;Zr.transition=null;try{je=1,nf(n,e,t,i)}finally{je=r,Zr.transition=s}}function av(n,e,t,i){var r=je,s=Zr.transition;Zr.transition=null;try{je=4,nf(n,e,t,i)}finally{je=r,Zr.transition=s}}function nf(n,e,t,i){if(Fa){var r=rc(n,e,t,i);if(r===null)Xl(n,e,i,Oa,t),ud(n,i);else if(rv(r,n,e,t,i))i.stopPropagation();else if(ud(n,i),e&4&&-1<iv.indexOf(n)){for(;r!==null;){var s=bo(r);if(s!==null&&am(s),s=rc(n,e,t,i),s===null&&Xl(n,e,i,Oa,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xl(n,e,i,null,t)}}var Oa=null;function rc(n,e,t,i){if(Oa=null,n=Qc(i),n=Zi(n),n!==null)if(e=gr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Kp(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Oa=n,null}function dm(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($0()){case Kc:return 1;case im:return 4;case ka:case Y0:return 16;case rm:return 536870912;default:return 16}default:return 16}}var yi=null,rf=null,Sa=null;function hm(){if(Sa)return Sa;var n,e=rf,t=e.length,i,r="value"in yi?yi.value:yi.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Sa=r.slice(n,1<i?1-i:void 0)}function Ma(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Bo(){return!0}function fd(){return!1}function dn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bo:fd,this.isPropagationStopped=fd,this}return ot(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=dn(hs),Co=ot({},hs,{view:0,detail:0}),lv=dn(Co),zl,Fl,ws,ol=ot({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ws&&(ws&&n.type==="mousemove"?(zl=n.screenX-ws.screenX,Fl=n.screenY-ws.screenY):Fl=zl=0,ws=n),zl)},movementY:function(n){return"movementY"in n?n.movementY:Fl}}),dd=dn(ol),uv=ot({},ol,{dataTransfer:0}),cv=dn(uv),fv=ot({},Co,{relatedTarget:0}),Ol=dn(fv),dv=ot({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=dn(dv),pv=ot({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),mv=dn(pv),gv=ot({},hs,{data:0}),hd=dn(gv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yv(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=xv[n])?!!e[n]:!1}function of(){return yv}var Sv=ot({},Co,{key:function(n){if(n.key){var e=vv[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_v[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(n){return n.type==="keypress"?Ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Mv=dn(Sv),wv=ot({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pd=dn(wv),Ev=ot({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),Tv=dn(Ev),Cv=ot({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=dn(Cv),Av=ot({},ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Lv=dn(Av),Pv=[9,13,27,32],af=si&&"CompositionEvent"in window,Hs=null;si&&"documentMode"in document&&(Hs=document.documentMode);var Rv=si&&"TextEvent"in window&&!Hs,pm=si&&(!af||Hs&&8<Hs&&11>=Hs),md=String.fromCharCode(32),gd=!1;function mm(n,e){switch(n){case"keyup":return Pv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var kr=!1;function Dv(n,e){switch(n){case"compositionend":return gm(e);case"keypress":return e.which!==32?null:(gd=!0,md);case"textInput":return n=e.data,n===md&&gd?null:n;default:return null}}function Iv(n,e){if(kr)return n==="compositionend"||!af&&mm(n,e)?(n=hm(),Sa=rf=yi=null,kr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pm&&e.locale!=="ko"?null:e.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Nv[n.type]:e==="textarea"}function vm(n,e,t,i){$p(i),e=Ua(e,"onChange"),0<e.length&&(t=new sf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Xs=null,oo=null;function kv(n){Am(n,0)}function al(n){var e=Or(n);if(Vp(e))return n}function zv(n,e){if(n==="change")return e}var _m=!1;if(si){var Ul;if(si){var Bl="oninput"in document;if(!Bl){var _d=document.createElement("div");_d.setAttribute("oninput","return;"),Bl=typeof _d.oninput=="function"}Ul=Bl}else Ul=!1;_m=Ul&&(!document.documentMode||9<document.documentMode)}function xd(){Xs&&(Xs.detachEvent("onpropertychange",xm),oo=Xs=null)}function xm(n){if(n.propertyName==="value"&&al(oo)){var e=[];vm(e,oo,n,Qc(n)),Qp(kv,e)}}function Fv(n,e,t){n==="focusin"?(xd(),Xs=e,oo=t,Xs.attachEvent("onpropertychange",xm)):n==="focusout"&&xd()}function Ov(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return al(oo)}function Uv(n,e){if(n==="click")return al(e)}function Bv(n,e){if(n==="input"||n==="change")return al(e)}function Vv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var kn=typeof Object.is=="function"?Object.is:Vv;function ao(n,e){if(kn(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Bu.call(e,r)||!kn(n[r],e[r]))return!1}return!0}function yd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sd(n,e){var t=yd(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=yd(t)}}function ym(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?ym(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Sm(){for(var n=window,e=Da();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Da(n.document)}return e}function lf(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Gv(n){var e=Sm(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&ym(t.ownerDocument.documentElement,t)){if(i!==null&&lf(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Sd(t,s);var o=Sd(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Wv=si&&"documentMode"in document&&11>=document.documentMode,zr=null,sc=null,js=null,oc=!1;function Md(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;oc||zr==null||zr!==Da(i)||(i=zr,"selectionStart"in i&&lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),js&&ao(js,i)||(js=i,i=Ua(sc,"onSelect"),0<i.length&&(e=new sf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=zr)))}function Vo(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Fr={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},Vl={},Mm={};si&&(Mm=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function ll(n){if(Vl[n])return Vl[n];if(!Fr[n])return n;var e=Fr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Mm)return Vl[n]=e[t];return n}var wm=ll("animationend"),Em=ll("animationiteration"),Tm=ll("animationstart"),Cm=ll("transitionend"),bm=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(n,e){bm.set(n,e),mr(e,[n])}for(var Gl=0;Gl<wd.length;Gl++){var Wl=wd[Gl],Hv=Wl.toLowerCase(),Xv=Wl[0].toUpperCase()+Wl.slice(1);ki(Hv,"on"+Xv)}ki(wm,"onAnimationEnd");ki(Em,"onAnimationIteration");ki(Tm,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(Cm,"onTransitionEnd");ts("onMouseEnter",["mouseout","mouseover"]);ts("onMouseLeave",["mouseout","mouseover"]);ts("onPointerEnter",["pointerout","pointerover"]);ts("onPointerLeave",["pointerout","pointerover"]);mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Os));function Ed(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,H0(i,e,void 0,n),n.currentTarget=null}function Am(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ed(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ed(r,a,u),s=l}}}if(Na)throw n=tc,Na=!1,tc=null,n}function Ze(n,e){var t=e[fc];t===void 0&&(t=e[fc]=new Set);var i=n+"__bubble";t.has(i)||(Lm(e,n,2,!1),t.add(i))}function Hl(n,e,t){var i=0;e&&(i|=4),Lm(t,n,i,e)}var Go="_reactListening"+Math.random().toString(36).slice(2);function lo(n){if(!n[Go]){n[Go]=!0,zp.forEach(function(t){t!=="selectionchange"&&(jv.has(t)||Hl(t,!1,n),Hl(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Go]||(e[Go]=!0,Hl("selectionchange",!1,e))}}function Lm(n,e,t,i){switch(dm(e)){case 1:var r=ov;break;case 4:r=av;break;default:r=nf}t=r.bind(null,e,t,n),r=void 0,!ec||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Xl(n,e,t,i,r){var s=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zi(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Qp(function(){var u=s,c=Qc(t),d=[];e:{var f=bm.get(n);if(f!==void 0){var m=sf,x=n;switch(n){case"keypress":if(Ma(t)===0)break e;case"keydown":case"keyup":m=Mv;break;case"focusin":x="focus",m=Ol;break;case"focusout":x="blur",m=Ol;break;case"beforeblur":case"afterblur":m=Ol;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Tv;break;case wm:case Em:case Tm:m=hv;break;case Cm:m=bv;break;case"scroll":m=lv;break;case"wheel":m=Lv;break;case"copy":case"cut":case"paste":m=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=pd}var h=(e&4)!==0,p=!h&&n==="scroll",g=h?f!==null?f+"Capture":null:f;h=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,g!==null&&(y=no(_,g),y!=null&&h.push(uo(_,y,v)))),p)break;_=_.return}0<h.length&&(f=new m(f,x,null,t,c),d.push({event:f,listeners:h}))}}if((e&7)===0){e:{if(f=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",f&&t!==Qu&&(x=t.relatedTarget||t.fromElement)&&(Zi(x)||x[oi]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=t.relatedTarget||t.toElement,m=u,x=x?Zi(x):null,x!==null&&(p=gr(x),x!==p||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(h=dd,y="onMouseLeave",g="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(h=pd,y="onPointerLeave",g="onPointerEnter",_="pointer"),p=m==null?f:Or(m),v=x==null?f:Or(x),f=new h(y,_+"leave",m,t,c),f.target=p,f.relatedTarget=v,y=null,Zi(c)===u&&(h=new h(g,_+"enter",x,t,c),h.target=v,h.relatedTarget=p,y=h),p=y,m&&x)t:{for(h=m,g=x,_=0,v=h;v;v=vr(v))_++;for(v=0,y=g;y;y=vr(y))v++;for(;0<_-v;)h=vr(h),_--;for(;0<v-_;)g=vr(g),v--;for(;_--;){if(h===g||g!==null&&h===g.alternate)break t;h=vr(h),g=vr(g)}h=null}else h=null;m!==null&&Td(d,f,m,h,!1),x!==null&&p!==null&&Td(d,p,x,h,!0)}}e:{if(f=u?Or(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var M=zv;else if(vd(f))if(_m)M=Bv;else{M=Ov;var b=Fv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(M=Uv);if(M&&(M=M(n,u))){vm(d,M,t,c);break e}b&&b(n,f,u),n==="focusout"&&(b=f._wrapperState)&&b.controlled&&f.type==="number"&&qu(f,"number",f.value)}switch(b=u?Or(u):window,n){case"focusin":(vd(b)||b.contentEditable==="true")&&(zr=b,sc=u,js=null);break;case"focusout":js=sc=zr=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,Md(d,t,c);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":Md(d,t,c)}var A;if(af)e:{switch(n){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else kr?mm(n,t)&&(S="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(S="onCompositionStart");S&&(pm&&t.locale!=="ko"&&(kr||S!=="onCompositionStart"?S==="onCompositionEnd"&&kr&&(A=hm()):(yi=c,rf="value"in yi?yi.value:yi.textContent,kr=!0)),b=Ua(u,S),0<b.length&&(S=new hd(S,n,null,t,c),d.push({event:S,listeners:b}),A?S.data=A:(A=gm(t),A!==null&&(S.data=A)))),(A=Rv?Dv(n,t):Iv(n,t))&&(u=Ua(u,"onBeforeInput"),0<u.length&&(c=new hd("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=A))}Am(d,e)})}function uo(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ua(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=no(n,t),s!=null&&i.unshift(uo(n,s,r)),s=no(n,e),s!=null&&i.push(uo(n,s,r))),n=n.return}return i}function vr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Td(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=no(t,s),l!=null&&o.unshift(uo(t,l,a))):r||(l=no(t,s),l!=null&&o.push(uo(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var qv=/\r\n?/g,$v=/\u0000|\uFFFD/g;function Cd(n){return(typeof n=="string"?n:""+n).replace(qv,`
`).replace($v,"")}function Wo(n,e,t){if(e=Cd(e),Cd(n)!==e&&t)throw Error(ee(425))}function Ba(){}var ac=null,lc=null;function uc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cc=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,bd=typeof Promise=="function"?Promise:void 0,Zv=typeof queueMicrotask=="function"?queueMicrotask:typeof bd<"u"?function(n){return bd.resolve(null).then(n).catch(Jv)}:cc;function Jv(n){setTimeout(function(){throw n})}function jl(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),so(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);so(e)}function Ci(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ad(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ps=Math.random().toString(36).slice(2),Bn="__reactFiber$"+ps,co="__reactProps$"+ps,oi="__reactContainer$"+ps,fc="__reactEvents$"+ps,Qv="__reactListeners$"+ps,Kv="__reactHandles$"+ps;function Zi(n){var e=n[Bn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[oi]||t[Bn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ad(n);n!==null;){if(t=n[Bn])return t;n=Ad(n)}return e}n=t,t=n.parentNode}return null}function bo(n){return n=n[Bn]||n[oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Or(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function ul(n){return n[co]||null}var dc=[],Ur=-1;function zi(n){return{current:n}}function Qe(n){0>Ur||(n.current=dc[Ur],dc[Ur]=null,Ur--)}function $e(n,e){Ur++,dc[Ur]=n.current,n.current=e}var Ii={},It=zi(Ii),jt=zi(!1),sr=Ii;function ns(n,e){var t=n.type.contextTypes;if(!t)return Ii;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function qt(n){return n=n.childContextTypes,n!=null}function Va(){Qe(jt),Qe(It)}function Ld(n,e,t){if(It.current!==Ii)throw Error(ee(168));$e(It,e),$e(jt,t)}function Pm(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,F0(n)||"Unknown",r));return ot({},t,i)}function Ga(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ii,sr=It.current,$e(It,n),$e(jt,jt.current),!0}function Pd(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=Pm(n,e,sr),i.__reactInternalMemoizedMergedChildContext=n,Qe(jt),Qe(It),$e(It,n)):Qe(jt),$e(jt,t)}var Kn=null,cl=!1,ql=!1;function Rm(n){Kn===null?Kn=[n]:Kn.push(n)}function e_(n){cl=!0,Rm(n)}function Fi(){if(!ql&&Kn!==null){ql=!0;var n=0,e=je;try{var t=Kn;for(je=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Kn=null,cl=!1}catch(r){throw Kn!==null&&(Kn=Kn.slice(n+1)),nm(Kc,Fi),r}finally{je=e,ql=!1}}return null}var Br=[],Vr=0,Wa=null,Ha=0,gn=[],vn=0,or=null,ti=1,ni="";function Xi(n,e){Br[Vr++]=Ha,Br[Vr++]=Wa,Wa=n,Ha=e}function Dm(n,e,t){gn[vn++]=ti,gn[vn++]=ni,gn[vn++]=or,or=n;var i=ti;n=ni;var r=32-In(i)-1;i&=~(1<<r),t+=1;var s=32-In(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-In(e)+r|t<<r|i,ni=s+n}else ti=1<<s|t<<r|i,ni=n}function uf(n){n.return!==null&&(Xi(n,1),Dm(n,1,0))}function cf(n){for(;n===Wa;)Wa=Br[--Vr],Br[Vr]=null,Ha=Br[--Vr],Br[Vr]=null;for(;n===or;)or=gn[--vn],gn[vn]=null,ni=gn[--vn],gn[vn]=null,ti=gn[--vn],gn[vn]=null}var an=null,sn=null,tt=!1,Pn=null;function Im(n,e){var t=xn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Rd(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,an=n,sn=Ci(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,an=n,sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=or!==null?{id:ti,overflow:ni}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=xn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,an=n,sn=null,!0):!1;default:return!1}}function hc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function pc(n){if(tt){var e=sn;if(e){var t=e;if(!Rd(n,e)){if(hc(n))throw Error(ee(418));e=Ci(t.nextSibling);var i=an;e&&Rd(n,e)?Im(i,t):(n.flags=n.flags&-4097|2,tt=!1,an=n)}}else{if(hc(n))throw Error(ee(418));n.flags=n.flags&-4097|2,tt=!1,an=n}}}function Dd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;an=n}function Ho(n){if(n!==an)return!1;if(!tt)return Dd(n),tt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!uc(n.type,n.memoizedProps)),e&&(e=sn)){if(hc(n))throw Nm(),Error(ee(418));for(;e;)Im(n,e),e=Ci(e.nextSibling)}if(Dd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){sn=Ci(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}sn=null}}else sn=an?Ci(n.stateNode.nextSibling):null;return!0}function Nm(){for(var n=sn;n;)n=Ci(n.nextSibling)}function is(){sn=an=null,tt=!1}function ff(n){Pn===null?Pn=[n]:Pn.push(n)}var t_=ui.ReactCurrentBatchConfig;function An(n,e){if(n&&n.defaultProps){e=ot({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Xa=zi(null),ja=null,Gr=null,df=null;function hf(){df=Gr=ja=null}function pf(n){var e=Xa.current;Qe(Xa),n._currentValue=e}function mc(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Jr(n,e){ja=n,df=Gr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&e)!==0&&(Ht=!0),n.firstContext=null)}function Mn(n){var e=n._currentValue;if(df!==n)if(n={context:n,memoizedValue:e,next:null},Gr===null){if(ja===null)throw Error(ee(308));Gr=n,ja.dependencies={lanes:0,firstContext:n}}else Gr=Gr.next=n;return e}var Ji=null;function mf(n){Ji===null?Ji=[n]:Ji.push(n)}function km(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,mf(e)):(t.next=r.next,r.next=t),e.interleaved=t,ai(n,i)}function ai(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var vi=!1;function gf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zm(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ii(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function bi(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,(Ve&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ai(n,t)}return r=i.interleaved,r===null?(e.next=e,mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,ai(n,t)}function wa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ef(n,t)}}function Id(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function qa(n,e,t,i){var r=n.updateQueue;vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,h=a;switch(f=e,m=t,h.tag){case 1:if(x=h.payload,typeof x=="function"){d=x.call(m,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=h.payload,f=typeof x=="function"?x.call(m,d,f):x,f==null)break e;d=ot({},d,f);break e;case 2:vi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);lr|=o,n.lanes=o,n.memoizedState=d}}function Nd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Fm=new kp.Component().refs;function gc(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:ot({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var fl={isMounted:function(n){return(n=n._reactInternals)?gr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Bt(),r=Li(n),s=ii(i,r);s.payload=e,t!=null&&(s.callback=t),e=bi(n,s,r),e!==null&&(Nn(e,n,r,i),wa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Bt(),r=Li(n),s=ii(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=bi(n,s,r),e!==null&&(Nn(e,n,r,i),wa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Bt(),i=Li(n),r=ii(t,i);r.tag=2,e!=null&&(r.callback=e),e=bi(n,r,i),e!==null&&(Nn(e,n,i,t),wa(e,n,i))}};function kd(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(t,i)||!ao(r,s):!0}function Om(n,e,t){var i=!1,r=Ii,s=e.contextType;return typeof s=="object"&&s!==null?s=Mn(s):(r=qt(e)?sr:It.current,i=e.contextTypes,s=(i=i!=null)?ns(n,r):Ii),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fl,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function zd(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&fl.enqueueReplaceState(e,e.state,null)}function vc(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Fm,gf(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Mn(s):(s=qt(e)?sr:It.current,r.context=ns(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gc(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fl.enqueueReplaceState(r,r.state,null),qa(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Fm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function Xo(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Fd(n){var e=n._init;return e(n._payload)}function Um(n){function e(g,_){if(n){var v=g.deletions;v===null?(g.deletions=[_],g.flags|=16):v.push(_)}}function t(g,_){if(!n)return null;for(;_!==null;)e(g,_),_=_.sibling;return null}function i(g,_){for(g=new Map;_!==null;)_.key!==null?g.set(_.key,_):g.set(_.index,_),_=_.sibling;return g}function r(g,_){return g=Pi(g,_),g.index=0,g.sibling=null,g}function s(g,_,v){return g.index=v,n?(v=g.alternate,v!==null?(v=v.index,v<_?(g.flags|=2,_):v):(g.flags|=2,_)):(g.flags|=1048576,_)}function o(g){return n&&g.alternate===null&&(g.flags|=2),g}function a(g,_,v,y){return _===null||_.tag!==6?(_=eu(v,g.mode,y),_.return=g,_):(_=r(_,v),_.return=g,_)}function l(g,_,v,y){var M=v.type;return M===Nr?c(g,_,v.props.children,y,v.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gi&&Fd(M)===_.type)?(y=r(_,v.props),y.ref=Es(g,_,v),y.return=g,y):(y=La(v.type,v.key,v.props,null,g.mode,y),y.ref=Es(g,_,v),y.return=g,y)}function u(g,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=tu(v,g.mode,y),_.return=g,_):(_=r(_,v.children||[]),_.return=g,_)}function c(g,_,v,y,M){return _===null||_.tag!==7?(_=nr(v,g.mode,y,M),_.return=g,_):(_=r(_,v),_.return=g,_)}function d(g,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=eu(""+_,g.mode,v),_.return=g,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case No:return v=La(_.type,_.key,_.props,null,g.mode,v),v.ref=Es(g,null,_),v.return=g,v;case Ir:return _=tu(_,g.mode,v),_.return=g,_;case gi:var y=_._init;return d(g,y(_._payload),v)}if(zs(_)||xs(_))return _=nr(_,g.mode,v,null),_.return=g,_;Xo(g,_)}return null}function f(g,_,v,y){var M=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:a(g,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case No:return v.key===M?l(g,_,v,y):null;case Ir:return v.key===M?u(g,_,v,y):null;case gi:return M=v._init,f(g,_,M(v._payload),y)}if(zs(v)||xs(v))return M!==null?null:c(g,_,v,y,null);Xo(g,v)}return null}function m(g,_,v,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return g=g.get(v)||null,a(_,g,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case No:return g=g.get(y.key===null?v:y.key)||null,l(_,g,y,M);case Ir:return g=g.get(y.key===null?v:y.key)||null,u(_,g,y,M);case gi:var b=y._init;return m(g,_,v,b(y._payload),M)}if(zs(y)||xs(y))return g=g.get(v)||null,c(_,g,y,M,null);Xo(_,y)}return null}function x(g,_,v,y){for(var M=null,b=null,A=_,S=_=0,C=null;A!==null&&S<v.length;S++){A.index>S?(C=A,A=null):C=A.sibling;var L=f(g,A,v[S],y);if(L===null){A===null&&(A=C);break}n&&A&&L.alternate===null&&e(g,A),_=s(L,_,S),b===null?M=L:b.sibling=L,b=L,A=C}if(S===v.length)return t(g,A),tt&&Xi(g,S),M;if(A===null){for(;S<v.length;S++)A=d(g,v[S],y),A!==null&&(_=s(A,_,S),b===null?M=A:b.sibling=A,b=A);return tt&&Xi(g,S),M}for(A=i(g,A);S<v.length;S++)C=m(A,g,S,v[S],y),C!==null&&(n&&C.alternate!==null&&A.delete(C.key===null?S:C.key),_=s(C,_,S),b===null?M=C:b.sibling=C,b=C);return n&&A.forEach(function(V){return e(g,V)}),tt&&Xi(g,S),M}function h(g,_,v,y){var M=xs(v);if(typeof M!="function")throw Error(ee(150));if(v=M.call(v),v==null)throw Error(ee(151));for(var b=M=null,A=_,S=_=0,C=null,L=v.next();A!==null&&!L.done;S++,L=v.next()){A.index>S?(C=A,A=null):C=A.sibling;var V=f(g,A,L.value,y);if(V===null){A===null&&(A=C);break}n&&A&&V.alternate===null&&e(g,A),_=s(V,_,S),b===null?M=V:b.sibling=V,b=V,A=C}if(L.done)return t(g,A),tt&&Xi(g,S),M;if(A===null){for(;!L.done;S++,L=v.next())L=d(g,L.value,y),L!==null&&(_=s(L,_,S),b===null?M=L:b.sibling=L,b=L);return tt&&Xi(g,S),M}for(A=i(g,A);!L.done;S++,L=v.next())L=m(A,g,S,L.value,y),L!==null&&(n&&L.alternate!==null&&A.delete(L.key===null?S:L.key),_=s(L,_,S),b===null?M=L:b.sibling=L,b=L);return n&&A.forEach(function(K){return e(g,K)}),tt&&Xi(g,S),M}function p(g,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Nr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case No:e:{for(var M=v.key,b=_;b!==null;){if(b.key===M){if(M=v.type,M===Nr){if(b.tag===7){t(g,b.sibling),_=r(b,v.props.children),_.return=g,g=_;break e}}else if(b.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===gi&&Fd(M)===b.type){t(g,b.sibling),_=r(b,v.props),_.ref=Es(g,b,v),_.return=g,g=_;break e}t(g,b);break}else e(g,b);b=b.sibling}v.type===Nr?(_=nr(v.props.children,g.mode,y,v.key),_.return=g,g=_):(y=La(v.type,v.key,v.props,null,g.mode,y),y.ref=Es(g,_,v),y.return=g,g=y)}return o(g);case Ir:e:{for(b=v.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(g,_.sibling),_=r(_,v.children||[]),_.return=g,g=_;break e}else{t(g,_);break}else e(g,_);_=_.sibling}_=tu(v,g.mode,y),_.return=g,g=_}return o(g);case gi:return b=v._init,p(g,_,b(v._payload),y)}if(zs(v))return x(g,_,v,y);if(xs(v))return h(g,_,v,y);Xo(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(g,_.sibling),_=r(_,v),_.return=g,g=_):(t(g,_),_=eu(v,g.mode,y),_.return=g,g=_),o(g)):t(g,_)}return p}var rs=Um(!0),Bm=Um(!1),Ao={},Gn=zi(Ao),fo=zi(Ao),ho=zi(Ao);function Qi(n){if(n===Ao)throw Error(ee(174));return n}function vf(n,e){switch($e(ho,e),$e(fo,n),$e(Gn,Ao),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yu(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Yu(e,n)}Qe(Gn),$e(Gn,e)}function ss(){Qe(Gn),Qe(fo),Qe(ho)}function Vm(n){Qi(ho.current);var e=Qi(Gn.current),t=Yu(e,n.type);e!==t&&($e(fo,n),$e(Gn,t))}function _f(n){fo.current===n&&(Qe(Gn),Qe(fo))}var it=zi(0);function $a(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $l=[];function xf(){for(var n=0;n<$l.length;n++)$l[n]._workInProgressVersionPrimary=null;$l.length=0}var Ea=ui.ReactCurrentDispatcher,Yl=ui.ReactCurrentBatchConfig,ar=0,st=null,mt=null,wt=null,Ya=!1,qs=!1,po=0,n_=0;function Lt(){throw Error(ee(321))}function yf(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!kn(n[t],e[t]))return!1;return!0}function Sf(n,e,t,i,r,s){if(ar=s,st=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ea.current=n===null||n.memoizedState===null?o_:a_,n=t(i,r),qs){s=0;do{if(qs=!1,po=0,25<=s)throw Error(ee(301));s+=1,wt=mt=null,e.updateQueue=null,Ea.current=l_,n=t(i,r)}while(qs)}if(Ea.current=Za,e=mt!==null&&mt.next!==null,ar=0,wt=mt=st=null,Ya=!1,e)throw Error(ee(300));return n}function Mf(){var n=po!==0;return po=0,n}function Fn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?st.memoizedState=wt=n:wt=wt.next=n,wt}function wn(){if(mt===null){var n=st.alternate;n=n!==null?n.memoizedState:null}else n=mt.next;var e=wt===null?st.memoizedState:wt.next;if(e!==null)wt=e,mt=n;else{if(n===null)throw Error(ee(310));mt=n,n={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},wt===null?st.memoizedState=wt=n:wt=wt.next=n}return wt}function mo(n,e){return typeof e=="function"?e(n):e}function Zl(n){var e=wn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=mt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ar&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,st.lanes|=c,lr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,kn(i,e.memoizedState)||(Ht=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,st.lanes|=s,lr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Jl(n){var e=wn(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);kn(s,e.memoizedState)||(Ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Gm(){}function Wm(n,e){var t=st,i=wn(),r=e(),s=!kn(i.memoizedState,r);if(s&&(i.memoizedState=r,Ht=!0),i=i.queue,wf(jm.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||wt!==null&&wt.memoizedState.tag&1){if(t.flags|=2048,go(9,Xm.bind(null,t,i,r,e),void 0,null),Et===null)throw Error(ee(349));(ar&30)!==0||Hm(t,e,r)}return r}function Hm(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Xm(n,e,t,i){e.value=t,e.getSnapshot=i,qm(e)&&$m(n)}function jm(n,e,t){return t(function(){qm(e)&&$m(n)})}function qm(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!kn(n,t)}catch{return!0}}function $m(n){var e=ai(n,1);e!==null&&Nn(e,n,1,-1)}function Od(n){var e=Fn();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:n},e.queue=n,n=n.dispatch=s_.bind(null,st,n),[e.memoizedState,n]}function go(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=st.updateQueue,e===null?(e={lastEffect:null,stores:null},st.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Ym(){return wn().memoizedState}function Ta(n,e,t,i){var r=Fn();st.flags|=n,r.memoizedState=go(1|e,t,void 0,i===void 0?null:i)}function dl(n,e,t,i){var r=wn();i=i===void 0?null:i;var s=void 0;if(mt!==null){var o=mt.memoizedState;if(s=o.destroy,i!==null&&yf(i,o.deps)){r.memoizedState=go(e,t,s,i);return}}st.flags|=n,r.memoizedState=go(1|e,t,s,i)}function Ud(n,e){return Ta(8390656,8,n,e)}function wf(n,e){return dl(2048,8,n,e)}function Zm(n,e){return dl(4,2,n,e)}function Jm(n,e){return dl(4,4,n,e)}function Qm(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Km(n,e,t){return t=t!=null?t.concat([n]):null,dl(4,4,Qm.bind(null,e,n),t)}function Ef(){}function eg(n,e){var t=wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function tg(n,e){var t=wn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&yf(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function ng(n,e,t){return(ar&21)===0?(n.baseState&&(n.baseState=!1,Ht=!0),n.memoizedState=t):(kn(t,e)||(t=sm(),st.lanes|=t,lr|=t,n.baseState=!0),e)}function i_(n,e){var t=je;je=t!==0&&4>t?t:4,n(!0);var i=Yl.transition;Yl.transition={};try{n(!1),e()}finally{je=t,Yl.transition=i}}function ig(){return wn().memoizedState}function r_(n,e,t){var i=Li(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},rg(n))sg(e,t);else if(t=km(n,e,t,i),t!==null){var r=Bt();Nn(t,n,i,r),og(t,e,i)}}function s_(n,e,t){var i=Li(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(rg(n))sg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,kn(a,o)){var l=e.interleaved;l===null?(r.next=r,mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=km(n,e,r,i),t!==null&&(r=Bt(),Nn(t,n,i,r),og(t,e,i))}}function rg(n){var e=n.alternate;return n===st||e!==null&&e===st}function sg(n,e){qs=Ya=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function og(n,e,t){if((t&4194240)!==0){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ef(n,t)}}var Za={readContext:Mn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},o_={readContext:Mn,useCallback:function(n,e){return Fn().memoizedState=[n,e===void 0?null:e],n},useContext:Mn,useEffect:Ud,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Ta(4194308,4,Qm.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Ta(4194308,4,n,e)},useInsertionEffect:function(n,e){return Ta(4,2,n,e)},useMemo:function(n,e){var t=Fn();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=Fn();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=r_.bind(null,st,n),[i.memoizedState,n]},useRef:function(n){var e=Fn();return n={current:n},e.memoizedState=n},useState:Od,useDebugValue:Ef,useDeferredValue:function(n){return Fn().memoizedState=n},useTransition:function(){var n=Od(!1),e=n[0];return n=i_.bind(null,n[1]),Fn().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=st,r=Fn();if(tt){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),Et===null)throw Error(ee(349));(ar&30)!==0||Hm(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Ud(jm.bind(null,i,s,n),[n]),i.flags|=2048,go(9,Xm.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=Fn(),e=Et.identifierPrefix;if(tt){var t=ni,i=ti;t=(i&~(1<<32-In(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=po++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=n_++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},a_={readContext:Mn,useCallback:eg,useContext:Mn,useEffect:wf,useImperativeHandle:Km,useInsertionEffect:Zm,useLayoutEffect:Jm,useMemo:tg,useReducer:Zl,useRef:Ym,useState:function(){return Zl(mo)},useDebugValue:Ef,useDeferredValue:function(n){var e=wn();return ng(e,mt.memoizedState,n)},useTransition:function(){var n=Zl(mo)[0],e=wn().memoizedState;return[n,e]},useMutableSource:Gm,useSyncExternalStore:Wm,useId:ig,unstable_isNewReconciler:!1},l_={readContext:Mn,useCallback:eg,useContext:Mn,useEffect:wf,useImperativeHandle:Km,useInsertionEffect:Zm,useLayoutEffect:Jm,useMemo:tg,useReducer:Jl,useRef:Ym,useState:function(){return Jl(mo)},useDebugValue:Ef,useDeferredValue:function(n){var e=wn();return mt===null?e.memoizedState=n:ng(e,mt.memoizedState,n)},useTransition:function(){var n=Jl(mo)[0],e=wn().memoizedState;return[n,e]},useMutableSource:Gm,useSyncExternalStore:Wm,useId:ig,unstable_isNewReconciler:!1};function os(n,e){try{var t="",i=e;do t+=z0(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Ql(n,e,t){return{value:n,source:null,stack:t!=null?t:null,digest:e!=null?e:null}}function _c(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var u_=typeof WeakMap=="function"?WeakMap:Map;function ag(n,e,t){t=ii(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Qa||(Qa=!0,Ac=i),_c(n,e)},t}function lg(n,e,t){t=ii(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){_c(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){_c(n,e),typeof i!="function"&&(Ai===null?Ai=new Set([this]):Ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Bd(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new u_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=w_.bind(null,n,e,t),e.then(n,n))}function Vd(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Gd(n,e,t,i,r){return(n.mode&1)===0?(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=ii(-1,1),e.tag=2,bi(t,e,1))),t.lanes|=1),n):(n.flags|=65536,n.lanes=r,n)}var c_=ui.ReactCurrentOwner,Ht=!1;function Ft(n,e,t,i){e.child=n===null?Bm(e,null,t,i):rs(e,n.child,t,i)}function Wd(n,e,t,i,r){t=t.render;var s=e.ref;return Jr(e,r),i=Sf(n,e,t,i,s,r),t=Mf(),n!==null&&!Ht?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(tt&&t&&uf(e),e.flags|=1,Ft(n,e,i,r),e.child)}function Hd(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,ug(n,e,s,i,r)):(n=La(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,(n.lanes&r)===0){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ao,t(o,i)&&n.ref===e.ref)return li(n,e,r)}return e.flags|=1,n=Pi(s,i),n.ref=e.ref,n.return=e,e.child=n}function ug(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ao(s,i)&&n.ref===e.ref)if(Ht=!1,e.pendingProps=i=s,(n.lanes&r)!==0)(n.flags&131072)!==0&&(Ht=!0);else return e.lanes=n.lanes,li(n,e,r)}return xc(n,e,t,i,r)}function cg(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(Hr,tn),tn|=t;else{if((t&1073741824)===0)return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,$e(Hr,tn),tn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,$e(Hr,tn),tn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,$e(Hr,tn),tn|=i;return Ft(n,e,r,t),e.child}function fg(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function xc(n,e,t,i,r){var s=qt(t)?sr:It.current;return s=ns(e,s),Jr(e,r),t=Sf(n,e,t,i,s,r),i=Mf(),n!==null&&!Ht?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,li(n,e,r)):(tt&&i&&uf(e),e.flags|=1,Ft(n,e,t,r),e.child)}function Xd(n,e,t,i,r){if(qt(t)){var s=!0;Ga(e)}else s=!1;if(Jr(e,r),e.stateNode===null)Ca(n,e),Om(e,t,i),vc(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Mn(u):(u=qt(t)?sr:It.current,u=ns(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&zd(e,o,i,u),vi=!1;var f=e.memoizedState;o.state=f,qa(e,i,o,r),l=e.memoizedState,a!==i||f!==l||jt.current||vi?(typeof c=="function"&&(gc(e,t,c,i),l=e.memoizedState),(a=vi||kd(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,zm(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:An(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Mn(l):(l=qt(t)?sr:It.current,l=ns(e,l));var m=t.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&zd(e,o,i,l),vi=!1,f=e.memoizedState,o.state=f,qa(e,i,o,r);var x=e.memoizedState;a!==d||f!==x||jt.current||vi?(typeof m=="function"&&(gc(e,t,m,i),x=e.memoizedState),(u=vi||kd(e,t,u,i,f,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return yc(n,e,t,i,s,r)}function yc(n,e,t,i,r,s){fg(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Pd(e,t,!1),li(n,e,s);i=e.stateNode,c_.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=rs(e,n.child,null,s),e.child=rs(e,null,a,s)):Ft(n,e,a,s),e.memoizedState=i.state,r&&Pd(e,t,!0),e.child}function dg(n){var e=n.stateNode;e.pendingContext?Ld(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Ld(n,e.context,!1),vf(n,e.containerInfo)}function jd(n,e,t,i,r){return is(),ff(r),e.flags|=256,Ft(n,e,t,i),e.child}var Sc={dehydrated:null,treeContext:null,retryLane:0};function Mc(n){return{baseLanes:n,cachePool:null,transitions:null}}function hg(n,e,t){var i=e.pendingProps,r=it.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),$e(it,r&1),n===null)return pc(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((e.mode&1)===0?e.lanes=1:n.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},(i&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ml(o,i,0,null),n=nr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Mc(t),e.memoizedState=Sc,n):Tf(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return f_(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return(o&1)===0&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pi(a,s):(s=nr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Mc(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Sc,i}return s=n.child,n=s.sibling,i=Pi(s,{mode:"visible",children:i.children}),(e.mode&1)===0&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Tf(n,e){return e=ml({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function jo(n,e,t,i){return i!==null&&ff(i),rs(e,n.child,null,t),n=Tf(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function f_(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Ql(Error(ee(422))),jo(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ml({mode:"visible",children:i.children},r,0,null),s=nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,(e.mode&1)!==0&&rs(e,n.child,null,o),e.child.memoizedState=Mc(o),e.memoizedState=Sc,s);if((e.mode&1)===0)return jo(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Ql(s,i,void 0),jo(n,e,o,i)}if(a=(o&n.childLanes)!==0,Ht||a){if(i=Et,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=(r&(i.suspendedLanes|o))!==0?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ai(n,r),Nn(i,n,r,-1))}return Rf(),i=Ql(Error(ee(421))),jo(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=E_.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,sn=Ci(r.nextSibling),an=e,tt=!0,Pn=null,n!==null&&(gn[vn++]=ti,gn[vn++]=ni,gn[vn++]=or,ti=n.id,ni=n.overflow,or=e),e=Tf(e,i.children),e.flags|=4096,e)}function qd(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),mc(n.return,e,t)}function Kl(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function pg(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Ft(n,e,i.children,t),i=it.current,(i&2)!==0)i=i&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qd(n,t,e);else if(n.tag===19)qd(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if($e(it,i),(e.mode&1)===0)e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&$a(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Kl(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&$a(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Kl(e,!0,t,null,s);break;case"together":Kl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ca(n,e){(e.mode&1)===0&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function li(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),lr|=e.lanes,(t&e.childLanes)===0)return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=Pi(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Pi(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function d_(n,e,t){switch(e.tag){case 3:dg(e),is();break;case 5:Vm(e);break;case 1:qt(e.type)&&Ga(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;$e(Xa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?($e(it,it.current&1),e.flags|=128,null):(t&e.child.childLanes)!==0?hg(n,e,t):($e(it,it.current&1),n=li(n,e,t),n!==null?n.sibling:null);$e(it,it.current&1);break;case 19:if(i=(t&e.childLanes)!==0,(n.flags&128)!==0){if(i)return pg(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$e(it,it.current),i)break;return null;case 22:case 23:return e.lanes=0,cg(n,e,t)}return li(n,e,t)}var mg,wc,gg,vg;mg=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};wc=function(){};gg=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Qi(Gn.current);var s=null;switch(t){case"input":r=Xu(n,r),i=Xu(n,i),s=[];break;case"select":r=ot({},r,{value:void 0}),i=ot({},i,{value:void 0}),s=[];break;case"textarea":r=$u(n,r),i=$u(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ba)}Zu(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(eo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(eo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ze("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};vg=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ts(n,e){if(!tt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Pt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function h_(n,e,t){var i=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return qt(e.type)&&Va(),Pt(e),null;case 3:return i=e.stateNode,ss(),Qe(jt),Qe(It),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ho(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Pn!==null&&(Rc(Pn),Pn=null))),wc(n,e),Pt(e),null;case 5:_f(e);var r=Qi(ho.current);if(t=e.type,n!==null&&e.stateNode!=null)gg(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Pt(e),null}if(n=Qi(Gn.current),Ho(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Bn]=e,i[co]=s,n=(e.mode&1)!==0,t){case"dialog":Ze("cancel",i),Ze("close",i);break;case"iframe":case"object":case"embed":Ze("load",i);break;case"video":case"audio":for(r=0;r<Os.length;r++)Ze(Os[r],i);break;case"source":Ze("error",i);break;case"img":case"image":case"link":Ze("error",i),Ze("load",i);break;case"details":Ze("toggle",i);break;case"input":nd(i,s),Ze("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ze("invalid",i);break;case"textarea":rd(i,s),Ze("invalid",i)}Zu(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wo(i.textContent,a,n),r=["children",""+a]):eo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ze("scroll",i)}switch(t){case"input":ko(i),id(i,s,!0);break;case"textarea":ko(i),sd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ba)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Hp(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Bn]=e,n[co]=i,mg(n,e,!1,!1),e.stateNode=n;e:{switch(o=Ju(t,i),t){case"dialog":Ze("cancel",n),Ze("close",n),r=i;break;case"iframe":case"object":case"embed":Ze("load",n),r=i;break;case"video":case"audio":for(r=0;r<Os.length;r++)Ze(Os[r],n);r=i;break;case"source":Ze("error",n),r=i;break;case"img":case"image":case"link":Ze("error",n),Ze("load",n),r=i;break;case"details":Ze("toggle",n),r=i;break;case"input":nd(n,i),r=Xu(n,i),Ze("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=ot({},i,{value:void 0}),Ze("invalid",n);break;case"textarea":rd(n,i),r=$u(n,i),Ze("invalid",n);break;default:r=i}Zu(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qp(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xp(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&to(n,l):typeof l=="number"&&to(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ze("scroll",n):l!=null&&$c(n,s,l,o))}switch(t){case"input":ko(n),id(n,i,!1);break;case"textarea":ko(n),sd(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Di(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?qr(n,!!i.multiple,s,!1):i.defaultValue!=null&&qr(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ba)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(n&&e.stateNode!=null)vg(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=Qi(ho.current),Qi(Gn.current),Ho(e)){if(i=e.stateNode,t=e.memoizedProps,i[Bn]=e,(s=i.nodeValue!==t)&&(n=an,n!==null))switch(n.tag){case 3:Wo(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Wo(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Bn]=e,e.stateNode=i}return Pt(e),null;case 13:if(Qe(it),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tt&&sn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Nm(),is(),e.flags|=98560,s=!1;else if(s=Ho(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Bn]=e}else is(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Pt(e),s=!1}else Pn!==null&&(Rc(Pn),Pn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,(e.mode&1)!==0&&(n===null||(it.current&1)!==0?gt===0&&(gt=3):Rf())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return ss(),wc(n,e),n===null&&lo(e.stateNode.containerInfo),Pt(e),null;case 10:return pf(e.type._context),Pt(e),null;case 17:return qt(e.type)&&Va(),Pt(e),null;case 19:if(Qe(it),s=e.memoizedState,s===null)return Pt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ts(s,!1);else{if(gt!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(o=$a(n),o!==null){for(e.flags|=128,Ts(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return $e(it,it.current&1|2),e.child}n=n.sibling}s.tail!==null&&lt()>as&&(e.flags|=128,i=!0,Ts(s,!1),e.lanes=4194304)}else{if(!i)if(n=$a(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ts(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!tt)return Pt(e),null}else 2*lt()-s.renderingStartTime>as&&t!==1073741824&&(e.flags|=128,i=!0,Ts(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=lt(),e.sibling=null,t=it.current,$e(it,i?t&1|2:t&1),e):(Pt(e),null);case 22:case 23:return Pf(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&(e.mode&1)!==0?(tn&1073741824)!==0&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function p_(n,e){switch(cf(e),e.tag){case 1:return qt(e.type)&&Va(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ss(),Qe(jt),Qe(It),xf(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 5:return _f(e),null;case 13:if(Qe(it),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));is()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Qe(it),null;case 4:return ss(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var qo=!1,Dt=!1,m_=typeof WeakSet=="function"?WeakSet:Set,me=null;function Wr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){at(n,e,i)}else t.current=null}function Ec(n,e,t){try{t()}catch(i){at(n,e,i)}}var $d=!1;function g_(n,e){if(ac=Fa,n=Sm(),lf(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var m;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(lc={focusedElem:n,selectionRange:t},Fa=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var x=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var h=x.memoizedProps,p=x.memoizedState,g=e.stateNode,_=g.getSnapshotBeforeUpdate(e.elementType===e.type?h:An(e.type,h),p);g.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){at(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return x=$d,$d=!1,x}function $s(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ec(e,t,s)}r=r.next}while(r!==i)}}function hl(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Tc(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function _g(n){var e=n.alternate;e!==null&&(n.alternate=null,_g(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Bn],delete e[co],delete e[fc],delete e[Qv],delete e[Kv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xg(n){return n.tag===5||n.tag===3||n.tag===4}function Yd(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xg(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ba));else if(i!==4&&(n=n.child,n!==null))for(Cc(n,e,t),n=n.sibling;n!==null;)Cc(n,e,t),n=n.sibling}function bc(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(bc(n,e,t),n=n.sibling;n!==null;)bc(n,e,t),n=n.sibling}var Tt=null,Ln=!1;function fi(n,e,t){for(t=t.child;t!==null;)yg(n,e,t),t=t.sibling}function yg(n,e,t){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(sl,t)}catch{}switch(t.tag){case 5:Dt||Wr(t,e);case 6:var i=Tt,r=Ln;Tt=null,fi(n,e,t),Tt=i,Ln=r,Tt!==null&&(Ln?(n=Tt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Tt.removeChild(t.stateNode));break;case 18:Tt!==null&&(Ln?(n=Tt,t=t.stateNode,n.nodeType===8?jl(n.parentNode,t):n.nodeType===1&&jl(n,t),so(n)):jl(Tt,t.stateNode));break;case 4:i=Tt,r=Ln,Tt=t.stateNode.containerInfo,Ln=!0,fi(n,e,t),Tt=i,Ln=r;break;case 0:case 11:case 14:case 15:if(!Dt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Ec(t,e,o),r=r.next}while(r!==i)}fi(n,e,t);break;case 1:if(!Dt&&(Wr(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){at(t,e,a)}fi(n,e,t);break;case 21:fi(n,e,t);break;case 22:t.mode&1?(Dt=(i=Dt)||t.memoizedState!==null,fi(n,e,t),Dt=i):fi(n,e,t);break;default:fi(n,e,t)}}function Zd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new m_),e.forEach(function(i){var r=T_.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function En(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Tt=a.stateNode,Ln=!1;break e;case 3:Tt=a.stateNode.containerInfo,Ln=!0;break e;case 4:Tt=a.stateNode.containerInfo,Ln=!0;break e}a=a.return}if(Tt===null)throw Error(ee(160));yg(s,o,r),Tt=null,Ln=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){at(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sg(e,n),e=e.sibling}function Sg(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(En(e,n),zn(n),i&4){try{$s(3,n,n.return),hl(3,n)}catch(h){at(n,n.return,h)}try{$s(5,n,n.return)}catch(h){at(n,n.return,h)}}break;case 1:En(e,n),zn(n),i&512&&t!==null&&Wr(t,t.return);break;case 5:if(En(e,n),zn(n),i&512&&t!==null&&Wr(t,t.return),n.flags&32){var r=n.stateNode;try{to(r,"")}catch(h){at(n,n.return,h)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gp(r,s),Ju(a,o);var u=Ju(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?qp(r,d):c==="dangerouslySetInnerHTML"?Xp(r,d):c==="children"?to(r,d):$c(r,c,d,u)}switch(a){case"input":ju(r,s);break;case"textarea":Wp(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?qr(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?qr(r,!!s.multiple,s.defaultValue,!0):qr(r,!!s.multiple,s.multiple?[]:"",!1))}r[co]=s}catch(h){at(n,n.return,h)}}break;case 6:if(En(e,n),zn(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(h){at(n,n.return,h)}}break;case 3:if(En(e,n),zn(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(h){at(n,n.return,h)}break;case 4:En(e,n),zn(n);break;case 13:En(e,n),zn(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Af=lt())),i&4&&Zd(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Dt=(u=Dt)||c,En(e,n),Dt=u):En(e,n),zn(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&(n.mode&1)!==0)for(me=n,c=n.child;c!==null;){for(d=me=c;me!==null;){switch(f=me,m=f.child,f.tag){case 0:case 11:case 14:case 15:$s(4,f,f.return);break;case 1:Wr(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(h){at(i,t,h)}}break;case 5:Wr(f,f.return);break;case 22:if(f.memoizedState!==null){Qd(d);continue}}m!==null?(m.return=f,me=m):Qd(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jp("display",o))}catch(h){at(n,n.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){at(n,n.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:En(e,n),zn(n),i&4&&Zd(n);break;case 21:break;default:En(e,n),zn(n)}}function zn(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(xg(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(to(r,""),i.flags&=-33);var s=Yd(n);bc(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Yd(n);Cc(n,a,o);break;default:throw Error(ee(161))}}catch(l){at(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function v_(n,e,t){me=n,Mg(n)}function Mg(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Dt;a=qo;var u=Dt;if(qo=o,(Dt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Kd(r):l!==null?(l.return=o,me=l):Kd(r);for(;s!==null;)me=s,Mg(s),s=s.sibling;me=r,qo=a,Dt=u}Jd(n)}else(r.subtreeFlags&8772)!==0&&s!==null?(s.return=r,me=s):Jd(n)}}function Jd(n){for(;me!==null;){var e=me;if((e.flags&8772)!==0){var t=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Dt||hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Dt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:An(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Nd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Nd(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&so(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Dt||e.flags&512&&Tc(e)}catch(f){at(e,e.return,f)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function Qd(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function Kd(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{hl(4,e)}catch(l){at(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){at(e,r,l)}}var s=e.return;try{Tc(e)}catch(l){at(e,s,l)}break;case 5:var o=e.return;try{Tc(e)}catch(l){at(e,o,l)}}}catch(l){at(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var __=Math.ceil,Ja=ui.ReactCurrentDispatcher,Cf=ui.ReactCurrentOwner,yn=ui.ReactCurrentBatchConfig,Ve=0,Et=null,ht=null,Ct=0,tn=0,Hr=zi(0),gt=0,vo=null,lr=0,pl=0,bf=0,Ys=null,Wt=null,Af=0,as=1/0,Qn=null,Qa=!1,Ac=null,Ai=null,$o=!1,Si=null,Ka=0,Zs=0,Lc=null,ba=-1,Aa=0;function Bt(){return(Ve&6)!==0?lt():ba!==-1?ba:ba=lt()}function Li(n){return(n.mode&1)===0?1:(Ve&2)!==0&&Ct!==0?Ct&-Ct:t_.transition!==null?(Aa===0&&(Aa=sm()),Aa):(n=je,n!==0||(n=window.event,n=n===void 0?16:dm(n.type)),n)}function Nn(n,e,t,i){if(50<Zs)throw Zs=0,Lc=null,Error(ee(185));To(n,t,i),((Ve&2)===0||n!==Et)&&(n===Et&&((Ve&2)===0&&(pl|=t),gt===4&&xi(n,Ct)),$t(n,i),t===1&&Ve===0&&(e.mode&1)===0&&(as=lt()+500,cl&&Fi()))}function $t(n,e){var t=n.callbackNode;tv(n,e);var i=za(n,n===Et?Ct:0);if(i===0)t!==null&&ld(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&ld(t),e===1)n.tag===0?e_(eh.bind(null,n)):Rm(eh.bind(null,n)),Zv(function(){(Ve&6)===0&&Fi()}),t=null;else{switch(om(i)){case 1:t=Kc;break;case 4:t=im;break;case 16:t=ka;break;case 536870912:t=rm;break;default:t=ka}t=Pg(t,wg.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function wg(n,e){if(ba=-1,Aa=0,(Ve&6)!==0)throw Error(ee(327));var t=n.callbackNode;if(Qr()&&n.callbackNode!==t)return null;var i=za(n,n===Et?Ct:0);if(i===0)return null;if((i&30)!==0||(i&n.expiredLanes)!==0||e)e=el(n,i);else{e=i;var r=Ve;Ve|=2;var s=Tg();(Et!==n||Ct!==e)&&(Qn=null,as=lt()+500,tr(n,e));do try{S_();break}catch(a){Eg(n,a)}while(1);hf(),Ja.current=s,Ve=r,ht!==null?e=0:(Et=null,Ct=0,e=gt)}if(e!==0){if(e===2&&(r=nc(n),r!==0&&(i=r,e=Pc(n,r))),e===1)throw t=vo,tr(n,0),xi(n,i),$t(n,lt()),t;if(e===6)xi(n,i);else{if(r=n.current.alternate,(i&30)===0&&!x_(r)&&(e=el(n,i),e===2&&(s=nc(n),s!==0&&(i=s,e=Pc(n,s))),e===1))throw t=vo,tr(n,0),xi(n,i),$t(n,lt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:ji(n,Wt,Qn);break;case 3:if(xi(n,i),(i&130023424)===i&&(e=Af+500-lt(),10<e)){if(za(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Bt(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=cc(ji.bind(null,n,Wt,Qn),e);break}ji(n,Wt,Qn);break;case 4:if(xi(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-In(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*__(i/1960))-i,10<i){n.timeoutHandle=cc(ji.bind(null,n,Wt,Qn),i);break}ji(n,Wt,Qn);break;case 5:ji(n,Wt,Qn);break;default:throw Error(ee(329))}}}return $t(n,lt()),n.callbackNode===t?wg.bind(null,n):null}function Pc(n,e){var t=Ys;return n.current.memoizedState.isDehydrated&&(tr(n,e).flags|=256),n=el(n,e),n!==2&&(e=Wt,Wt=t,e!==null&&Rc(e)),n}function Rc(n){Wt===null?Wt=n:Wt.push.apply(Wt,n)}function x_(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!kn(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xi(n,e){for(e&=~bf,e&=~pl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-In(e),i=1<<t;n[t]=-1,e&=~i}}function eh(n){if((Ve&6)!==0)throw Error(ee(327));Qr();var e=za(n,0);if((e&1)===0)return $t(n,lt()),null;var t=el(n,e);if(n.tag!==0&&t===2){var i=nc(n);i!==0&&(e=i,t=Pc(n,i))}if(t===1)throw t=vo,tr(n,0),xi(n,e),$t(n,lt()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ji(n,Wt,Qn),$t(n,lt()),null}function Lf(n,e){var t=Ve;Ve|=1;try{return n(e)}finally{Ve=t,Ve===0&&(as=lt()+500,cl&&Fi())}}function ur(n){Si!==null&&Si.tag===0&&(Ve&6)===0&&Qr();var e=Ve;Ve|=1;var t=yn.transition,i=je;try{if(yn.transition=null,je=1,n)return n()}finally{je=i,yn.transition=t,Ve=e,(Ve&6)===0&&Fi()}}function Pf(){tn=Hr.current,Qe(Hr)}function tr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,Yv(t)),ht!==null)for(t=ht.return;t!==null;){var i=t;switch(cf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Va();break;case 3:ss(),Qe(jt),Qe(It),xf();break;case 5:_f(i);break;case 4:ss();break;case 13:Qe(it);break;case 19:Qe(it);break;case 10:pf(i.type._context);break;case 22:case 23:Pf()}t=t.return}if(Et=n,ht=n=Pi(n.current,null),Ct=tn=e,gt=0,vo=null,bf=pl=lr=0,Wt=Ys=null,Ji!==null){for(e=0;e<Ji.length;e++)if(t=Ji[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Ji=null}return n}function Eg(n,e){do{var t=ht;try{if(hf(),Ea.current=Za,Ya){for(var i=st.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ya=!1}if(ar=0,wt=mt=st=null,qs=!1,po=0,Cf.current=null,t===null||t.return===null){gt=1,vo=e,ht=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Vd(o);if(m!==null){m.flags&=-257,Gd(m,o,a,s,e),m.mode&1&&Bd(s,u,e),e=m,l=u;var x=e.updateQueue;if(x===null){var h=new Set;h.add(l),e.updateQueue=h}else x.add(l);break e}else{if((e&1)===0){Bd(s,u,e),Rf();break e}l=Error(ee(426))}}else if(tt&&a.mode&1){var p=Vd(o);if(p!==null){(p.flags&65536)===0&&(p.flags|=256),Gd(p,o,a,s,e),ff(os(l,a));break e}}s=l=os(l,a),gt!==4&&(gt=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=ag(s,l,e);Id(s,g);break e;case 1:a=l;var _=s.type,v=s.stateNode;if((s.flags&128)===0&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ai===null||!Ai.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=lg(s,a,e);Id(s,y);break e}}s=s.return}while(s!==null)}bg(t)}catch(M){e=M,ht===t&&t!==null&&(ht=t=t.return);continue}break}while(1)}function Tg(){var n=Ja.current;return Ja.current=Za,n===null?Za:n}function Rf(){(gt===0||gt===3||gt===2)&&(gt=4),Et===null||(lr&268435455)===0&&(pl&268435455)===0||xi(Et,Ct)}function el(n,e){var t=Ve;Ve|=2;var i=Tg();(Et!==n||Ct!==e)&&(Qn=null,tr(n,e));do try{y_();break}catch(r){Eg(n,r)}while(1);if(hf(),Ve=t,Ja.current=i,ht!==null)throw Error(ee(261));return Et=null,Ct=0,gt}function y_(){for(;ht!==null;)Cg(ht)}function S_(){for(;ht!==null&&!j0();)Cg(ht)}function Cg(n){var e=Lg(n.alternate,n,tn);n.memoizedProps=n.pendingProps,e===null?bg(n):ht=e,Cf.current=null}function bg(n){var e=n;do{var t=e.alternate;if(n=e.return,(e.flags&32768)===0){if(t=h_(t,e,tn),t!==null){ht=t;return}}else{if(t=p_(t,e),t!==null){t.flags&=32767,ht=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gt=6,ht=null;return}}if(e=e.sibling,e!==null){ht=e;return}ht=e=n}while(e!==null);gt===0&&(gt=5)}function ji(n,e,t){var i=je,r=yn.transition;try{yn.transition=null,je=1,M_(n,e,t,i)}finally{yn.transition=r,je=i}return null}function M_(n,e,t,i){do Qr();while(Si!==null);if((Ve&6)!==0)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(nv(n,s),n===Et&&(ht=Et=null,Ct=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||$o||($o=!0,Pg(ka,function(){return Qr(),null})),s=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||s){s=yn.transition,yn.transition=null;var o=je;je=1;var a=Ve;Ve|=4,Cf.current=null,g_(n,t),Sg(t,n),Gv(lc),Fa=!!ac,lc=ac=null,n.current=t,v_(t),q0(),Ve=a,je=o,yn.transition=s}else n.current=t;if($o&&($o=!1,Si=n,Ka=r),s=n.pendingLanes,s===0&&(Ai=null),Z0(t.stateNode),$t(n,lt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qa)throw Qa=!1,n=Ac,Ac=null,n;return(Ka&1)!==0&&n.tag!==0&&Qr(),s=n.pendingLanes,(s&1)!==0?n===Lc?Zs++:(Zs=0,Lc=n):Zs=0,Fi(),null}function Qr(){if(Si!==null){var n=om(Ka),e=yn.transition,t=je;try{if(yn.transition=null,je=16>n?16:n,Si===null)var i=!1;else{if(n=Si,Si=null,Ka=0,(Ve&6)!==0)throw Error(ee(331));var r=Ve;for(Ve|=4,me=n.current;me!==null;){var s=me,o=s.child;if((me.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var c=me;switch(c.tag){case 0:case 11:case 15:$s(8,c,s)}var d=c.child;if(d!==null)d.return=c,me=d;else for(;me!==null;){c=me;var f=c.sibling,m=c.return;if(_g(c),c===u){me=null;break}if(f!==null){f.return=m,me=f;break}me=m}}}var x=s.alternate;if(x!==null){var h=x.child;if(h!==null){x.child=null;do{var p=h.sibling;h.sibling=null,h=p}while(h!==null)}}me=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:$s(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,me=g;break e}me=s.return}}var _=n.current;for(me=_;me!==null;){o=me;var v=o.child;if((o.subtreeFlags&2064)!==0&&v!==null)v.return=o,me=v;else e:for(o=_;me!==null;){if(a=me,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:hl(9,a)}}catch(M){at(a,a.return,M)}if(a===o){me=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,me=y;break e}me=a.return}}if(Ve=r,Fi(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(sl,n)}catch{}i=!0}return i}finally{je=t,yn.transition=e}}return!1}function th(n,e,t){e=os(t,e),e=ag(n,e,1),n=bi(n,e,1),e=Bt(),n!==null&&(To(n,1,e),$t(n,e))}function at(n,e,t){if(n.tag===3)th(n,n,t);else for(;e!==null;){if(e.tag===3){th(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ai===null||!Ai.has(i))){n=os(t,n),n=lg(e,n,1),e=bi(e,n,1),n=Bt(),e!==null&&(To(e,1,n),$t(e,n));break}}e=e.return}}function w_(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Bt(),n.pingedLanes|=n.suspendedLanes&t,Et===n&&(Ct&t)===t&&(gt===4||gt===3&&(Ct&130023424)===Ct&&500>lt()-Af?tr(n,0):bf|=t),$t(n,e)}function Ag(n,e){e===0&&((n.mode&1)===0?e=1:(e=Oo,Oo<<=1,(Oo&130023424)===0&&(Oo=4194304)));var t=Bt();n=ai(n,e),n!==null&&(To(n,e,t),$t(n,t))}function E_(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Ag(n,t)}function T_(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Ag(n,t)}var Lg;Lg=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||jt.current)Ht=!0;else{if((n.lanes&t)===0&&(e.flags&128)===0)return Ht=!1,d_(n,e,t);Ht=(n.flags&131072)!==0}else Ht=!1,tt&&(e.flags&1048576)!==0&&Dm(e,Ha,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ca(n,e),n=e.pendingProps;var r=ns(e,It.current);Jr(e,t),r=Sf(null,e,i,n,r,t);var s=Mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qt(i)?(s=!0,Ga(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gf(e),r.updater=fl,e.stateNode=r,r._reactInternals=e,vc(e,i,n,t),e=yc(null,e,i,!0,s,t)):(e.tag=0,tt&&s&&uf(e),Ft(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Ca(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=b_(i),n=An(i,n),r){case 0:e=xc(null,e,i,n,t);break e;case 1:e=Xd(null,e,i,n,t);break e;case 11:e=Wd(null,e,i,n,t);break e;case 14:e=Hd(null,e,i,An(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),xc(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),Xd(n,e,i,r,t);case 3:e:{if(dg(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,zm(n,e),qa(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=os(Error(ee(423)),e),e=jd(n,e,i,t,r);break e}else if(i!==r){r=os(Error(ee(424)),e),e=jd(n,e,i,t,r);break e}else for(sn=Ci(e.stateNode.containerInfo.firstChild),an=e,tt=!0,Pn=null,t=Bm(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(is(),i===r){e=li(n,e,t);break e}Ft(n,e,i,t)}e=e.child}return e;case 5:return Vm(e),n===null&&pc(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,uc(i,r)?o=null:s!==null&&uc(i,s)&&(e.flags|=32),fg(n,e),Ft(n,e,o,t),e.child;case 6:return n===null&&pc(e),null;case 13:return hg(n,e,t);case 4:return vf(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=rs(e,null,i,t):Ft(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),Wd(n,e,i,r,t);case 7:return Ft(n,e,e.pendingProps,t),e.child;case 8:return Ft(n,e,e.pendingProps.children,t),e.child;case 12:return Ft(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,$e(Xa,i._currentValue),i._currentValue=o,s!==null)if(kn(s.value,o)){if(s.children===r.children&&!jt.current){e=li(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ii(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),mc(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),mc(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ft(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Jr(e,t),r=Mn(r),i=i(r),e.flags|=1,Ft(n,e,i,t),e.child;case 14:return i=e.type,r=An(i,e.pendingProps),r=An(i.type,r),Hd(n,e,i,r,t);case 15:return ug(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:An(i,r),Ca(n,e),e.tag=1,qt(i)?(n=!0,Ga(e)):n=!1,Jr(e,t),Om(e,i,r),vc(e,i,r,t),yc(null,e,i,!0,n,t);case 19:return pg(n,e,t);case 22:return cg(n,e,t)}throw Error(ee(156,e.tag))};function Pg(n,e){return nm(n,e)}function C_(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(n,e,t,i){return new C_(n,e,t,i)}function Df(n){return n=n.prototype,!(!n||!n.isReactComponent)}function b_(n){if(typeof n=="function")return Df(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Zc)return 11;if(n===Jc)return 14}return 2}function Pi(n,e){var t=n.alternate;return t===null?(t=xn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function La(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Df(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Nr:return nr(t.children,r,s,e);case Yc:o=8,r|=8;break;case Vu:return n=xn(12,t,e,r|2),n.elementType=Vu,n.lanes=s,n;case Gu:return n=xn(13,t,e,r),n.elementType=Gu,n.lanes=s,n;case Wu:return n=xn(19,t,e,r),n.elementType=Wu,n.lanes=s,n;case Up:return ml(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Fp:o=10;break e;case Op:o=9;break e;case Zc:o=11;break e;case Jc:o=14;break e;case gi:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=xn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function nr(n,e,t,i){return n=xn(7,n,i,e),n.lanes=t,n}function ml(n,e,t,i){return n=xn(22,n,i,e),n.elementType=Up,n.lanes=t,n.stateNode={isHidden:!1},n}function eu(n,e,t){return n=xn(6,n,null,e),n.lanes=t,n}function tu(n,e,t){return e=xn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function A_(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function If(n,e,t,i,r,s,o,a,l){return n=new A_(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),n}function L_(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Rg(n){if(!n)return Ii;n=n._reactInternals;e:{if(gr(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(qt(t))return Pm(n,t,e)}return e}function Dg(n,e,t,i,r,s,o,a,l){return n=If(t,i,!0,n,r,s,o,a,l),n.context=Rg(null),t=n.current,i=Bt(),r=Li(t),s=ii(i,r),s.callback=e!=null?e:null,bi(t,s,r),n.current.lanes=r,To(n,r,i),$t(n,i),n}function gl(n,e,t,i){var r=e.current,s=Bt(),o=Li(r);return t=Rg(t),e.context===null?e.context=t:e.pendingContext=t,e=ii(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=bi(r,e,o),n!==null&&(Nn(n,r,o,s),wa(n,r,o)),o}function tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function nh(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Nf(n,e){nh(n,e),(n=n.alternate)&&nh(n,e)}function P_(){return null}var Ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function kf(n){this._internalRoot=n}vl.prototype.render=kf.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));gl(n,e,null,null)};vl.prototype.unmount=kf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ur(function(){gl(null,n,null,null)}),e[oi]=null}};function vl(n){this._internalRoot=n}vl.prototype.unstable_scheduleHydration=function(n){if(n){var e=um();n={blockedOn:null,target:n,priority:e};for(var t=0;t<_i.length&&e!==0&&e<_i[t].priority;t++);_i.splice(t,0,n),t===0&&fm(n)}};function zf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function ih(){}function R_(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=tl(o);s.call(u)}}var o=Dg(e,i,n,0,null,!1,!1,"",ih);return n._reactRootContainer=o,n[oi]=o.current,lo(n.nodeType===8?n.parentNode:n),ur(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=tl(l);a.call(u)}}var l=If(n,0,!1,null,null,!1,!1,"",ih);return n._reactRootContainer=l,n[oi]=l.current,lo(n.nodeType===8?n.parentNode:n),ur(function(){gl(e,l,t,i)}),l}function xl(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tl(o);a.call(l)}}gl(e,o,n,r)}else o=R_(t,e,n,r,i);return tl(o)}am=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Fs(e.pendingLanes);t!==0&&(ef(e,t|1),$t(e,lt()),(Ve&6)===0&&(as=lt()+500,Fi()))}break;case 13:ur(function(){var i=ai(n,1);if(i!==null){var r=Bt();Nn(i,n,1,r)}}),Nf(n,1)}};tf=function(n){if(n.tag===13){var e=ai(n,134217728);if(e!==null){var t=Bt();Nn(e,n,134217728,t)}Nf(n,134217728)}};lm=function(n){if(n.tag===13){var e=Li(n),t=ai(n,e);if(t!==null){var i=Bt();Nn(t,n,e,i)}Nf(n,e)}};um=function(){return je};cm=function(n,e){var t=je;try{return je=n,e()}finally{je=t}};Ku=function(n,e,t){switch(e){case"input":if(ju(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=ul(i);if(!r)throw Error(ee(90));Vp(i),ju(i,r)}}}break;case"textarea":Wp(n,t);break;case"select":e=t.value,e!=null&&qr(n,!!t.multiple,e,!1)}};Zp=Lf;Jp=ur;var D_={usingClientEntryPoint:!1,Events:[bo,Or,ul,$p,Yp,Lf]},Cs={findFiberByHostInstance:Zi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},I_={bundleType:Cs.bundleType,version:Cs.version,rendererPackageName:Cs.rendererPackageName,rendererConfig:Cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=em(n),n===null?null:n.stateNode},findFiberByHostInstance:Cs.findFiberByHostInstance||P_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{sl=Yo.inject(I_),Vn=Yo}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_;fn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zf(e))throw Error(ee(200));return L_(n,e,null,t)};fn.createRoot=function(n,e){if(!zf(n))throw Error(ee(299));var t=!1,i="",r=Ig;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=If(n,1,!1,null,null,t,!1,i,r),n[oi]=e.current,lo(n.nodeType===8?n.parentNode:n),new kf(e)};fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=em(e),n=n===null?null:n.stateNode,n};fn.flushSync=function(n){return ur(n)};fn.hydrate=function(n,e,t){if(!_l(e))throw Error(ee(200));return xl(null,n,e,!0,t)};fn.hydrateRoot=function(n,e,t){if(!zf(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Ig;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Dg(e,null,n,1,t!=null?t:null,r,!1,s,o),n[oi]=e.current,lo(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new vl(e)};fn.render=function(n,e,t){if(!_l(e))throw Error(ee(200));return xl(null,n,e,!1,t)};fn.unmountComponentAtNode=function(n){if(!_l(n))throw Error(ee(40));return n._reactRootContainer?(ur(function(){xl(null,null,n,!1,function(){n._reactRootContainer=null,n[oi]=null})}),!0):!1};fn.unstable_batchedUpdates=Lf;fn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!_l(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return xl(n,e,t,!1,i)};fn.version="18.2.0-next-9e3b772b8-20220608";(function(n){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}e(),n.exports=fn})(Tp);var Ng,rh=Tp.exports;Ng=rh.createRoot,rh.hydrateRoot;var yl={exports:{}},Sl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_=mn.exports,k_=Symbol.for("react.element"),z_=Symbol.for("react.fragment"),F_=Object.prototype.hasOwnProperty,O_=N_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U_={key:!0,ref:!0,__self:!0,__source:!0};function kg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)F_.call(e,i)&&!U_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:k_,type:n,key:s,ref:o,props:r,_owner:O_.current}}Sl.Fragment=z_;Sl.jsx=kg;Sl.jsxs=kg;(function(n){n.exports=Sl})(yl);const B_=yl.exports.Fragment,ke=yl.exports.jsx,Xt=yl.exports.jsxs,V_=({name:n,url:e,id:t,onEdit:i,onDelete:r})=>ke("div",{className:"bookmark-item",children:Xt("div",{className:"bookmark-center-left",children:[ke("a",{href:e,target:"_blank",rel:"noreferrer",children:n}),Xt("div",{className:"bookmark-btns",children:[ke("button",{className:"list-btn",onClick:()=>r(t),children:"Delete"}),ke("button",{className:"list-btn",onClick:()=>i(t),children:"Edit"})]})]})}),G_=({currentBookmarks:n,handleEditBookmark:e,handleDeleteBookmark:t})=>ke("div",{className:"list-main",children:Xt("div",{className:"list-container",children:[n&&n.map((i,r)=>ke(V_,{className:"link",name:i.name,url:i.url,id:r,onEdit:()=>e(i,r),onDelete:()=>t(r)},r)),!localStorage.bookmarks&&ke("h2",{children:"No Bookmarks yet, why not add one?"})]})}),W_=({bookmarks:n,currentPage:e,setCurrentPage:t})=>{const r=[];for(let s=1;s<=Math.ceil(n.length/20);s++)r.push(s);return Xt("div",{className:"pagination-main",children:[ke("button",{className:"pagination-btn",disabled:e===1,onClick:()=>t(e-1),children:"<"}),r.map(s=>ke("button",{onClick:()=>t(s),className:e===s?"page-active page-number":"page-number",children:s},s)),ke("button",{className:"pagination-btn",disabled:e===r.length,onClick:()=>t(e+1),children:">"})]})},H_=async n=>{const e="https://cors-anywhere.herokuapp.com/";try{const t=await fetch(e+n,{method:"HEAD"});if(t.status>=200&&t.status<=299)return!0;alert(`This website responded with error code: ${t.status} check it exists and try again`)}catch(t){alert(`problem trying to fetch the site${t}`)}return!1},X_=async(n,e)=>{const t=new RegExp("^(https://|http://)(www\\.)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i"),i=new RegExp(/^[a-zA-Z0-9\s]+$/);if(t.test(n)&&i.test(e)){if(await H_(n))return!0}else i.test(e)?t.test(n)||alert("URL must look like: https://www.example.com"):alert("Name must be alphanumerical (max 15 characters from a-z/A-Z and 0-9)");return!1},j_=()=>Xt("div",{className:"modal-main",children:[ke("h2",{className:"modal-text",children:"Checking if this website exists..."}),Xt("svg",{xmlns:"http://www.w3.org/2000/svg",width:"3rem",height:"5rem",className:"phntm-logo-modal",children:[ke("defs",{}),ke("path",{fill:"#00fdc7",d:"M12.52 7.45c-.12 1.18 2 1.7 1.9 0-.05-1.17-1.94-1.4-1.9 0M16.21 6.49s0 .25 0 .13c.14.55.35 1 1 1.12a.93.93 0 0 0 1.13-.67c.2-1.14-2-2-2.11-.58"}),ke("path",{fill:"#00fdc7",d:"M30.34,34.26s.32,2.65.41,6.11c.06,2,0,3.93-.07,5.67a33,33,0,0,1-.77,5.63c-1.41,5.9-2,7.51-2,7.56s-.2.78-.67-.56c0,0-1.52-3.32-2.86-6.77-.77-2-1.42-3.82-1.95-5.51A40.31,40.31,0,0,1,21.1,41a1.21,1.21,0,0,0-.05-.18,1.06,1.06,0,0,0-1-.69h0c-.81,0-1.15.85-1.28,1.18-.24.6-1.15,3.61-1.9,6.18-.61,2.08-1.65,5.76-1.86,7-.16,1-.46,2.31-.79,1.37a81.14,81.14,0,0,1-3.48-7.82A54.12,54.12,0,0,1,9,42.84a14.26,14.26,0,0,1-.6-4.16.91.91,0,0,0-.67-.92.94.94,0,0,0-1,.48s-.26.53-.62,1.09-.73.39-.82.06a26.6,26.6,0,0,1-.48-2.69,58.8,58.8,0,0,1-.46-7.29v-.05a15.06,15.06,0,0,1,.76-4.79A18.91,18.91,0,0,1,7.28,20a20.83,20.83,0,0,1,4.44-4.88,1,1,0,0,0,.17-.18l.12-.17a2.06,2.06,0,0,0,.38-.69,1.66,1.66,0,0,0-.08-1v0s-.41-1-.75-2.27a7.47,7.47,0,0,1-.42-3.38A4.46,4.46,0,0,1,14.76,4a5,5,0,0,1,1.12-.14h0a3.12,3.12,0,0,1,2.18.85,8.46,8.46,0,0,1,2,3.74.91.91,0,0,0,.49.56A17.93,17.93,0,0,1,24,11.18a22.15,22.15,0,0,1,3.14,2.89,20.38,20.38,0,0,1,2.94,4.22A30,30,0,0,1,32,23a50.06,50.06,0,0,1,1.48,5.78,25.26,25.26,0,0,1,.53,5,6.07,6.07,0,0,1-.21,1.57c-.05.49-.61,0-1.05-.6S32,33.71,32,33.71a.9.9,0,0,0-.78-.45.69.69,0,0,0-.28.05.88.88,0,0,0-.61.95m5.14-5.85a45.35,45.35,0,0,0-3.54-11.07,22.46,22.46,0,0,0-3.24-4.65,24.44,24.44,0,0,0-3.42-3.15,22.83,22.83,0,0,0-3.39-2.16,9.58,9.58,0,0,0-2.44-4.16,5.1,5.1,0,0,0-3.57-1.4,7,7,0,0,0-1.6.19,7.2,7.2,0,0,0-3.39,1.76A6,6,0,0,0,9.12,6.89a9.65,9.65,0,0,0,.45,4.39c.29,1,.61,1.93.74,2.29v0a22.84,22.84,0,0,0-4.78,5.32,20.91,20.91,0,0,0-2.4,5.14,17.33,17.33,0,0,0-.82,5.39,58.93,58.93,0,0,0,.58,8.23,20.36,20.36,0,0,0,.63,2.94,4.56,4.56,0,0,0,.46,1,1.57,1.57,0,0,0,1.33.82,2.12,2.12,0,0,0,1.4-.6,44.91,44.91,0,0,0,2.14,6.91,80.89,80.89,0,0,0,3.59,8.07c.22.41.9,1.67,2.12,1.67.55,0,1.34-.26,1.91-1.52a8.79,8.79,0,0,0,.6-2.17c.24-1.42,1.76-6.68,2.78-10a78,78,0,0,0,2.64,7.85c1.37,3.51,2.66,6.31,2.91,6.81l.06.11a7.62,7.62,0,0,0,.76,1.34,2.12,2.12,0,0,0,1.71.91,1.9,1.9,0,0,0,1.74-1.24,4.7,4.7,0,0,0,.24-.75c.12-.37.71-2.24,2-7.68a46.45,46.45,0,0,0,.9-11.86c0-.88-.06-1.78-.12-2.68a2,2,0,0,0,1,.29,1.59,1.59,0,0,0,.83-.22c1-.56,1.47-1.81,1.52-3.81a26.53,26.53,0,0,0-.57-5.46"})]})]}),q_=()=>{const[n,e]=mn.exports.useState([]),[t,i]=mn.exports.useState(""),[r,s]=mn.exports.useState(""),[o,a]=mn.exports.useState(!1),[l,u]=mn.exports.useState(null),[c,d]=mn.exports.useState(1),[f,m]=mn.exports.useState(!1),x=20,h=c*x,p=h-x,g=n.slice(p,h);mn.exports.useEffect(()=>{const A=JSON.parse(localStorage.getItem("bookmarks"))||[];e(A)},[]);const _=()=>{e([...n,{name:t,url:r}]),localStorage.setItem("bookmarks",JSON.stringify([...n,{name:t,url:r}]))},v=(A,S)=>{const C=(c-1)*x+S;a(!0),u(C),i(A.name),s(A.url)},y=()=>{const A=[...n];A[l]={name:t,url:r},e(A),localStorage.setItem("bookmarks",JSON.stringify(A)),a(!1)};return Xt("div",{children:[ke("h2",{children:"Add a bookmark: "}),ke("form",{className:"form-main",onSubmit:async A=>{A.preventDefault(),m(!0),await X_(r,t)&&(o?y():_(),i(""),s("")),m(!1)},children:Xt("div",{className:"form-container",children:[ke("input",{className:"input-field",type:"text",placeholder:"Name",maxLength:"15",value:t,onChange:A=>i(A.target.value)}),ke("input",{className:"input-field",type:"text",placeholder:"URL",value:r,onChange:A=>s(A.target.value)}),ke("button",{className:"submit-btn",type:"submit",children:o?"Update Bookmark":"Add Bookmark"})]})}),ke(W_,{bookmarks:n,currentPage:c,setCurrentPage:d}),ke("h2",{children:"Your bookmarks: "}),ke("button",{className:"delete-all-btn",onClick:()=>{window.confirm("Are you sure you want to delete all bookmarks?")&&(e([]),localStorage.setItem("bookmarks",JSON.stringify([])))},children:"Delete All Bookmarks"}),ke(G_,{currentBookmarks:g,handleEditBookmark:v,handleDeleteBookmark:A=>{const S=[...n],C=p+A;S.splice(C,1),e(S),localStorage.setItem("bookmarks",JSON.stringify(S))}}),f&&ke(j_,{})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ff="149",$_=0,sh=1,Y_=2,zg=1,Z_=2,Us=3,Ni=0,ln=1,Mi=2,Ri=0,Kr=1,oh=2,ah=3,lh=4,J_=5,Dr=100,Q_=101,K_=102,uh=103,ch=104,ex=200,tx=201,nx=202,ix=203,Fg=204,Og=205,rx=206,sx=207,ox=208,ax=209,lx=210,ux=0,cx=1,fx=2,Dc=3,dx=4,hx=5,px=6,mx=7,Of=0,gx=1,vx=2,ri=0,_x=1,xx=2,yx=3,Sx=4,Mx=5,Ug=300,ls=301,us=302,Ic=303,Nc=304,Ml=306,kc=1e3,Rn=1001,zc=1002,Ot=1003,fh=1004,nu=1005,_n=1006,wx=1007,_o=1008,cr=1009,Ex=1010,Tx=1011,Bg=1012,Cx=1013,Ki=1014,er=1015,xo=1016,bx=1017,Ax=1018,es=1020,Lx=1021,Dn=1023,Px=1024,Rx=1025,ir=1026,cs=1027,Dx=1028,Ix=1029,Nx=1030,kx=1031,zx=1033,iu=33776,ru=33777,su=33778,ou=33779,dh=35840,hh=35841,ph=35842,mh=35843,Fx=36196,gh=37492,vh=37496,_h=37808,xh=37809,yh=37810,Sh=37811,Mh=37812,wh=37813,Eh=37814,Th=37815,Ch=37816,bh=37817,Ah=37818,Lh=37819,Ph=37820,Rh=37821,au=36492,Ox=36283,Dh=36284,Ih=36285,Nh=36286,fr=3e3,Je=3001,Ux=3200,Bx=3201,Vg=0,Vx=1,On="srgb",yo="srgb-linear",lu=7680,Gx=519,kh=35044,zh="300 es",Fc=1035;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uu=Math.PI/180,Fh=180/Math.PI;function gs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[i&255]+Rt[i>>8&255]+Rt[i>>16&255]+Rt[i>>24&255]).toLowerCase()}function Ut(n,e,t){return Math.max(e,Math.min(t,n))}function Wx(n,e){return(n%e+e)%e}function cu(n,e,t){return(1-t)*n+t*e}function Oh(n){return(n&n-1)===0&&n!==0}function Oc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zo(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class on{constructor(){on.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],m=i[5],x=i[8],h=r[0],p=r[3],g=r[6],_=r[1],v=r[4],y=r[7],M=r[2],b=r[5],A=r[8];return s[0]=o*h+a*_+l*M,s[3]=o*p+a*v+l*b,s[6]=o*g+a*y+l*A,s[1]=u*h+c*_+d*M,s[4]=u*p+c*v+d*b,s[7]=u*g+c*y+d*A,s[2]=f*h+m*_+x*M,s[5]=f*p+m*v+x*b,s[8]=f*g+m*y+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,m=u*s-o*l,x=t*d+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/x;return e[0]=d*h,e[1]=(r*u-c*i)*h,e[2]=(a*i-r*o)*h,e[3]=f*h,e[4]=(c*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=m*h,e[7]=(i*l-u*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fu.makeScale(e,t)),this}rotate(e){return this.premultiply(fu.makeRotation(-e)),this}translate(e,t){return this.premultiply(fu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fu=new on;function Gg(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const du={[On]:{[yo]:rr},[yo]:{[On]:Pa}},kt={legacyMode:!0,get workingColorSpace(){return yo},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(du[e]&&du[e][t]!==void 0){const i=du[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Wg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pt={r:0,g:0,b:0},Tn={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function hu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Qo(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=kt.workingColorSpace){return this.r=e,this.g=t,this.b=i,kt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=kt.workingColorSpace){if(e=Wx(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hu(o,s,e+1/3),this.g=hu(o,s,e),this.b=hu(o,s,e-1/3)}return kt.toWorkingColorSpace(this,r),this}setStyle(e,t=On){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,kt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,kt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,kt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,kt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=On){const i=Wg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return kt.fromWorkingColorSpace(Qo(this,pt),e),Ut(pt.r*255,0,255)<<16^Ut(pt.g*255,0,255)<<8^Ut(pt.b*255,0,255)<<0}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.fromWorkingColorSpace(Qo(this,pt),t);const i=pt.r,r=pt.g,s=pt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=kt.workingColorSpace){return kt.fromWorkingColorSpace(Qo(this,pt),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=On){return kt.fromWorkingColorSpace(Qo(this,pt),e),e!==On?`color(${e} ${pt.r} ${pt.g} ${pt.b})`:`rgb(${pt.r*255|0},${pt.g*255|0},${pt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Tn),Tn.h+=e,Tn.s+=t,Tn.l+=i,this.setHSL(Tn.h,Tn.s,Tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(Jo);const i=cu(Tn.h,Jo.h,t),r=cu(Tn.s,Jo.s,t),s=cu(Tn.l,Jo.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}qe.NAMES=Wg;let _r;class Hg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_r===void 0&&(_r=nl("canvas")),_r.width=e.width,_r.height=e.height;const i=_r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_r}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nl("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(rr(t[i]/255)*255):t[i]=rr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Xg{constructor(e=null){this.isSource=!0,this.uuid=gs(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(pu(r[o].image)):s.push(pu(r[o]))}else s=pu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function pu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Hg.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hx=0;class un extends ms{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=Rn,r=Rn,s=_n,o=_o,a=Dn,l=cr,u=un.DEFAULT_ANISOTROPY,c=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=gs(),this.name="",this.source=new Xg(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new on,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Ug;un.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],m=l[5],x=l[9],h=l[2],p=l[6],g=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-h)<.01&&Math.abs(x-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+h)<.1&&Math.abs(x+p)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(m+1)/2,M=(g+1)/2,b=(c+f)/4,A=(d+h)/4,S=(x+p)/4;return v>y&&v>M?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=b/i,s=A/i):y>M?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=S/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=A/s,r=S/s),this.set(i,r,s,t),this}let _=Math.sqrt((p-x)*(p-x)+(d-h)*(d-h)+(f-c)*(f-c));return Math.abs(_)<.001&&(_=1),this.x=(p-x)/_,this.y=(d-h)/_,this.z=(f-c)/_,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dr extends ms{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:_n,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jg extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xx extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],m=s[o+1],x=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=x,e[t+3]=h;return}if(d!==h||l!==f||u!==m||c!==x){let p=1-a;const g=l*f+u*m+c*x+d*h,_=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const M=Math.sqrt(v),b=Math.atan2(M,g*_);p=Math.sin(p*b)/M,a=Math.sin(a*b)/M}const y=a*_;if(l=l*p+f*y,u=u*p+m*y,c=c*p+x*y,d=d*p+h*y,p===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=M,u*=M,c*=M,d*=M}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],m=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*m-u*f,e[t+1]=l*x+c*f+u*d-a*m,e[t+2]=u*x+c*m+a*f-l*d,e[t+3]=c*x-a*d-l*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"YXZ":this._x=f*c*d+u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"ZXY":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d-f*m*x;break;case"ZYX":this._x=f*c*d-u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d+f*m*x;break;case"YZX":this._x=f*c*d+u*m*x,this._y=u*m*d+f*c*x,this._z=u*c*x-f*m*d,this._w=u*c*d-f*m*x;break;case"XZY":this._x=f*c*d-u*m*x,this._y=u*m*d-f*c*x,this._z=u*c*x+f*m*d,this._w=u*c*d+f*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,f=-s*t-o*i-a*r;return this.x=u*l+f*-s+c*-a-d*-o,this.y=c*l+f*-o+d*-s-u*-a,this.z=d*l+f*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return mu.copy(this).projectOnVector(e),this.sub(mu)}reflect(e){return this.sub(mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mu=new D,Uh=new Lo;class Po{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],d=e[l+1],f=e[l+2];c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),d=e.getY(l),f=e.getZ(l);c<t&&(t=c),d<i&&(i=d),f<r&&(r=f),c>s&&(s=c),d>o&&(o=d),f>a&&(a=f)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Gi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Gi)}else i.boundingBox===null&&i.computeBoundingBox(),gu.copy(i.boundingBox),gu.applyMatrix4(e.matrixWorld),this.union(gu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Ko.subVectors(this.max,bs),xr.subVectors(e.a,bs),yr.subVectors(e.b,bs),Sr.subVectors(e.c,bs),di.subVectors(yr,xr),hi.subVectors(Sr,yr),Wi.subVectors(xr,Sr);let t=[0,-di.z,di.y,0,-hi.z,hi.y,0,-Wi.z,Wi.y,di.z,0,-di.x,hi.z,0,-hi.x,Wi.z,0,-Wi.x,-di.y,di.x,0,-hi.y,hi.x,0,-Wi.y,Wi.x,0];return!vu(t,xr,yr,Sr,Ko)||(t=[1,0,0,0,1,0,0,0,1],!vu(t,xr,yr,Sr,Ko))?!1:(ea.crossVectors(di,hi),t=[ea.x,ea.y,ea.z],vu(t,xr,yr,Sr,Ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Gi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new D,new D,new D,new D,new D,new D,new D,new D],Gi=new D,gu=new Po,xr=new D,yr=new D,Sr=new D,di=new D,hi=new D,Wi=new D,bs=new D,Ko=new D,ea=new D,Hi=new D;function vu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hi.fromArray(n,s);const a=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=e.dot(Hi),u=t.dot(Hi),c=i.dot(Hi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const jx=new Po,As=new D,_u=new D;class Uf{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(As,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(_u)),this.expandByPoint(As.copy(e.center).sub(_u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new D,xu=new D,ta=new D,pi=new D,yu=new D,na=new D,Su=new D;class qx{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.direction).multiplyScalar(t).add(this.origin),$n.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xu.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(xu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ta),a=pi.dot(this.direction),l=-pi.dot(ta),u=pi.lengthSq(),c=Math.abs(1-o*o);let d,f,m,x;if(c>0)if(d=o*l-a,f=o*a-l,x=s*c,d>=0)if(f>=-x)if(f<=x){const h=1/c;d*=h,f*=h,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;else f<=-x?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u):f<=x?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(ta).multiplyScalar(f).add(xu),m}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,i,r,s){yu.subVectors(t,e),na.subVectors(i,e),Su.crossVectors(yu,na);let o=this.direction.dot(Su),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(na.crossVectors(pi,na));if(l<0)return null;const u=a*this.direction.dot(yu.cross(pi));if(u<0||l+u>o)return null;const c=-a*pi.dot(Su);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,d,f,m,x,h,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=d,g[14]=f,g[3]=m,g[7]=x,g[11]=h,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,m=o*d,x=a*c,h=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=m+x*u,t[5]=f-h*u,t[9]=-a*l,t[2]=h-f*u,t[6]=x+m*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,m=l*d,x=u*c,h=u*d;t[0]=f+h*a,t[4]=x*a-m,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=m*a-x,t[6]=h+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,m=l*d,x=u*c,h=u*d;t[0]=f-h*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*c,t[9]=h-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,m=o*d,x=a*c,h=a*d;t[0]=l*c,t[4]=x*u-m,t[8]=f*u+h,t[1]=l*d,t[5]=h*u+f,t[9]=m*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*u,x=a*l,h=a*u;t[0]=l*c,t[4]=h-f*d,t[8]=x*d+m,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=m*d+x,t[10]=f-h*d}else if(e.order==="XZY"){const f=o*l,m=o*u,x=a*l,h=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+h,t[5]=o*c,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*c,t[10]=h*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($x,e,Yx)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),mi.crossVectors(i,Kt),mi.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),mi.crossVectors(i,Kt)),mi.normalize(),ia.crossVectors(Kt,mi),r[0]=mi.x,r[4]=ia.x,r[8]=Kt.x,r[1]=mi.y,r[5]=ia.y,r[9]=Kt.y,r[2]=mi.z,r[6]=ia.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],m=i[13],x=i[2],h=i[6],p=i[10],g=i[14],_=i[3],v=i[7],y=i[11],M=i[15],b=r[0],A=r[4],S=r[8],C=r[12],L=r[1],V=r[5],K=r[9],k=r[13],I=r[2],X=r[6],J=r[10],Q=r[14],R=r[3],U=r[7],G=r[11],ie=r[15];return s[0]=o*b+a*L+l*I+u*R,s[4]=o*A+a*V+l*X+u*U,s[8]=o*S+a*K+l*J+u*G,s[12]=o*C+a*k+l*Q+u*ie,s[1]=c*b+d*L+f*I+m*R,s[5]=c*A+d*V+f*X+m*U,s[9]=c*S+d*K+f*J+m*G,s[13]=c*C+d*k+f*Q+m*ie,s[2]=x*b+h*L+p*I+g*R,s[6]=x*A+h*V+p*X+g*U,s[10]=x*S+h*K+p*J+g*G,s[14]=x*C+h*k+p*Q+g*ie,s[3]=_*b+v*L+y*I+M*R,s[7]=_*A+v*V+y*X+M*U,s[11]=_*S+v*K+y*J+M*G,s[15]=_*C+v*k+y*Q+M*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],m=e[14],x=e[3],h=e[7],p=e[11],g=e[15];return x*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*m-i*l*m)+h*(+t*l*m-t*u*f+s*o*f-r*o*m+r*u*c-s*l*c)+p*(+t*u*d-t*a*m-s*o*d+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],m=e[11],x=e[12],h=e[13],p=e[14],g=e[15],_=d*p*u-h*f*u+h*l*m-a*p*m-d*l*g+a*f*g,v=x*f*u-c*p*u-x*l*m+o*p*m+c*l*g-o*f*g,y=c*h*u-x*d*u+x*a*m-o*h*m-c*a*g+o*d*g,M=x*d*l-c*h*l-x*a*f+o*h*f+c*a*p-o*d*p,b=t*_+i*v+r*y+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(h*f*s-d*p*s-h*r*m+i*p*m+d*r*g-i*f*g)*A,e[2]=(a*p*s-h*l*s+h*r*u-i*p*u-a*r*g+i*l*g)*A,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*m-i*l*m)*A,e[4]=v*A,e[5]=(c*p*s-x*f*s+x*r*m-t*p*m-c*r*g+t*f*g)*A,e[6]=(x*l*s-o*p*s-x*r*u+t*p*u+o*r*g-t*l*g)*A,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*m+t*l*m)*A,e[8]=y*A,e[9]=(x*d*s-c*h*s-x*i*m+t*h*m+c*i*g-t*d*g)*A,e[10]=(o*h*s-x*a*s+x*i*u-t*h*u-o*i*g+t*a*g)*A,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*m-t*a*m)*A,e[12]=M*A,e[13]=(c*h*r-x*d*r+x*i*f-t*h*f-c*i*p+t*d*p)*A,e[14]=(x*a*r-o*h*r-x*i*l+t*h*l+o*i*p-t*a*p)*A,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,m=s*c,x=s*d,h=o*c,p=o*d,g=a*d,_=l*u,v=l*c,y=l*d,M=i.x,b=i.y,A=i.z;return r[0]=(1-(h+g))*M,r[1]=(m+y)*M,r[2]=(x-v)*M,r[3]=0,r[4]=(m-y)*b,r[5]=(1-(f+g))*b,r[6]=(p+_)*b,r[7]=0,r[8]=(x+v)*A,r[9]=(p-_)*A,r[10]=(1-(f+h))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const u=1/s,c=1/o,d=1/a;return Cn.elements[0]*=u,Cn.elements[1]*=u,Cn.elements[2]*=u,Cn.elements[4]*=c,Cn.elements[5]*=c,Cn.elements[6]*=c,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),d=(i+r)/(i-r),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),d=(t+e)*l,f=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Mr=new D,Cn=new ut,$x=new D(0,0,0),Yx=new D(1,1,1),mi=new D,ia=new D,Kt=new D,Bh=new ut,Vh=new Lo;class wl{constructor(e=0,t=0,i=0,r=wl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wl.DEFAULT_ORDER="XYZ";class qg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zx=0;const Gh=new D,wr=new Lo,Yn=new ut,ra=new D,Ls=new D,Jx=new D,Qx=new Lo,Wh=new D(1,0,0),Hh=new D(0,1,0),Xh=new D(0,0,1),Kx={type:"added"},jh={type:"removed"};class Yt extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new D,t=new wl,i=new Lo,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new on}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Hh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Hh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ra.copy(e):ra.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ls,ra,this.up):Yn.lookAt(ra,Ls,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Yn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Kx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(jh)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,e,Jx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new D(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new D,Zn=new D,Mu=new D,Jn=new D,Er=new D,Tr=new D,qh=new D,wu=new D,Eu=new D,Tu=new D;class ei{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),Zn.subVectors(i,t),Mu.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(Zn),l=bn.dot(Mu),u=Zn.dot(Zn),c=Zn.dot(Mu),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(u*l-a*c)*f,x=(o*c-a*l)*f;return s.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Jn),Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getUV(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Jn),l.set(0,0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),Zn.subVectors(e,t),bn.cross(Zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return ei.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Er.subVectors(r,i),Tr.subVectors(s,i),wu.subVectors(e,i);const l=Er.dot(wu),u=Tr.dot(wu);if(l<=0&&u<=0)return t.copy(i);Eu.subVectors(e,r);const c=Er.dot(Eu),d=Tr.dot(Eu);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Er,o);Tu.subVectors(e,s);const m=Er.dot(Tu),x=Tr.dot(Tu);if(x>=0&&m<=x)return t.copy(s);const h=m*u-l*x;if(h<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Tr,a);const p=c*x-m*d;if(p<=0&&d-c>=0&&m-x>=0)return qh.subVectors(s,r),a=(d-c)/(d-c+(m-x)),t.copy(r).addScaledVector(qh,a);const g=1/(p+h+f);return o=h*g,a=f*g,t.copy(i).addScaledVector(Er,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ey=0;class Ro extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=Kr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Fg,this.blendDst=Og,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lu,this.stencilZFail=lu,this.stencilZPass=lu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class il extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new D,sa=new fe;class Wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class $g extends Wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Yg extends Wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sn extends Wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ty=0;const pn=new ut,Cu=new Yt,Cr=new D,en=new Po,Ps=new Po,Mt=new D;class ci extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gg(e)?Yg:$g)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new on().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(en.min,Ps.min),en.expandByPoint(Mt),Mt.addVectors(en.max,Ps.max),en.expandByPoint(Mt)):(en.expandByPoint(Ps.min),en.expandByPoint(Ps.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Mt.fromBufferAttribute(a,u),l&&(Cr.fromBufferAttribute(e,u),Mt.add(Cr)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let L=0;L<a;L++)u[L]=new D,c[L]=new D;const d=new D,f=new D,m=new D,x=new fe,h=new fe,p=new fe,g=new D,_=new D;function v(L,V,K){d.fromArray(r,L*3),f.fromArray(r,V*3),m.fromArray(r,K*3),x.fromArray(o,L*2),h.fromArray(o,V*2),p.fromArray(o,K*2),f.sub(d),m.sub(d),h.sub(x),p.sub(x);const k=1/(h.x*p.y-p.x*h.y);!isFinite(k)||(g.copy(f).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(k),_.copy(m).multiplyScalar(h.x).addScaledVector(f,-p.x).multiplyScalar(k),u[L].add(g),u[V].add(g),u[K].add(g),c[L].add(_),c[V].add(_),c[K].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let L=0,V=y.length;L<V;++L){const K=y[L],k=K.start,I=K.count;for(let X=k,J=k+I;X<J;X+=3)v(i[X+0],i[X+1],i[X+2])}const M=new D,b=new D,A=new D,S=new D;function C(L){A.fromArray(s,L*3),S.copy(A);const V=u[L];M.copy(V),M.sub(A.multiplyScalar(A.dot(V))).normalize(),b.crossVectors(S,V);const k=b.dot(c[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=k}for(let L=0,V=y.length;L<V;++L){const K=y[L],k=K.start,I=K.count;for(let X=k,J=k+I;X<J;X+=3)C(i[X+0]),C(i[X+1]),C(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,d=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),h=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,h),u.fromBufferAttribute(i,p),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(h,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let m=0,x=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*c;for(let g=0;g<c;g++)f[x++]=u[m++]}return new Wn(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const m=u[d];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,m=d.length;f<m;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const $h=new ut,br=new qx,bu=new Uf,Rs=new D,Ds=new D,Is=new D,Au=new D,oa=new D,aa=new fe,la=new fe,ua=new fe,Lu=new D,ca=new D;class rn extends Yt{constructor(e=new ci,t=new il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){oa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Au.fromBufferAttribute(d,e),o?oa.addScaledVector(Au,c):oa.addScaledVector(Au.sub(t),c))}t.add(oa)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),bu.copy(i.boundingSphere),bu.applyMatrix4(s),e.ray.intersectsSphere(bu)===!1)||($h.copy(s).invert(),br.copy(e.ray).applyMatrix4($h),i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,d=i.groups,f=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(a.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,y=_;v<y;v+=3){const M=a.getX(v),b=a.getX(v+1),A=a.getX(v+2);o=fa(this,p,e,br,u,c,M,b,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=a.getX(h),_=a.getX(h+1),v=a.getX(h+2);o=fa(this,r,e,br,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,x=d.length;m<x;m++){const h=d[m],p=r[h.materialIndex],g=Math.max(h.start,f.start),_=Math.min(l.count,Math.min(h.start+h.count,f.start+f.count));for(let v=g,y=_;v<y;v+=3){const M=v,b=v+1,A=v+2;o=fa(this,p,e,br,u,c,M,b,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let h=m,p=x;h<p;h+=3){const g=h,_=h+1,v=h+2;o=fa(this,r,e,br,u,c,g,_,v),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function ny(n,e,t,i,r,s,o,a){let l;if(e.side===ln?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;ca.copy(a),ca.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ca);return u<t.near||u>t.far?null:{distance:u,point:ca.clone(),object:n}}function fa(n,e,t,i,r,s,o,a,l){n.getVertexPosition(o,Rs),n.getVertexPosition(a,Ds),n.getVertexPosition(l,Is);const u=ny(n,e,t,i,Rs,Ds,Is,Lu);if(u){r&&(aa.fromBufferAttribute(r,o),la.fromBufferAttribute(r,a),ua.fromBufferAttribute(r,l),u.uv=ei.getUV(Lu,Rs,Ds,Is,aa,la,ua,new fe)),s&&(aa.fromBufferAttribute(s,o),la.fromBufferAttribute(s,a),ua.fromBufferAttribute(s,l),u.uv2=ei.getUV(Lu,Rs,Ds,Is,aa,la,ua,new fe));const c={a:o,b:a,c:l,normal:new D,materialIndex:0};ei.getNormal(Rs,Ds,Is,c.normal),u.face=c}return u}class Do extends ci{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,m=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(u,3)),this.setAttribute("normal",new Sn(c,3)),this.setAttribute("uv",new Sn(d,2));function x(h,p,g,_,v,y,M,b,A,S,C){const L=y/A,V=M/S,K=y/2,k=M/2,I=b/2,X=A+1,J=S+1;let Q=0,R=0;const U=new D;for(let G=0;G<J;G++){const ie=G*V-k;for(let z=0;z<X;z++){const q=z*L-K;U[h]=q*_,U[p]=ie*v,U[g]=I,u.push(U.x,U.y,U.z),U[h]=0,U[p]=0,U[g]=b>0?1:-1,c.push(U.x,U.y,U.z),d.push(z/A),d.push(1-G/S),Q+=1}}for(let G=0;G<S;G++)for(let ie=0;ie<A;ie++){const z=f+ie+X*G,q=f+ie+X*(G+1),re=f+(ie+1)+X*(G+1),oe=f+(ie+1)+X*G;l.push(z,q,oe),l.push(q,re,oe),R+=6}a.addGroup(m,R,C),m+=R,f+=Q}}static fromJSON(e){return new Do(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(n){const e={};for(let t=0;t<n.length;t++){const i=fs(n[t]);for(const r in i)e[r]=i[r]}return e}function iy(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zg(n){return n.getRenderTarget()===null&&n.outputEncoding===Je?On:yo}const ry={clone:fs,merge:zt};var sy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sy,this.fragmentShader=oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=iy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jg extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends Jg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fh*2*Math.atan(Math.tan(uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ar=-90,Lr=1;class ay extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new nn(Ar,Lr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new nn(Ar,Lr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new nn(Ar,Lr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new nn(Ar,Lr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new nn(Ar,Lr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new nn(Ar,Lr,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=ri,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class Qg extends un{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ly extends dr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Do(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:Ri});s.uniforms.tEquirect.value=t;const o=new rn(r,s),a=t.minFilter;return t.minFilter===_o&&(t.minFilter=_n),new ay(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Pu=new D,uy=new D,cy=new on;class qi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Pu.subVectors(i,t).cross(uy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cy.getNormalMatrix(e),r=this.coplanarPoint(Pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new Uf,da=new D;class Bf{constructor(e=new qi,t=new qi,i=new qi,r=new qi,s=new qi,o=new qi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],d=i[7],f=i[8],m=i[9],x=i[10],h=i[11],p=i[12],g=i[13],_=i[14],v=i[15];return t[0].setComponents(a-r,d-l,h-f,v-p).normalize(),t[1].setComponents(a+r,d+l,h+f,v+p).normalize(),t[2].setComponents(a+s,d+u,h+m,v+g).normalize(),t[3].setComponents(a-s,d-u,h-m,v-g).normalize(),t[4].setComponents(a-o,d-c,h-x,v-_).normalize(),t[5].setComponents(a+o,d+c,h+x,v+_).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(da.x=r.normal.x>0?e.max.x:e.min.x,da.y=r.normal.y>0?e.max.y:e.min.y,da.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kg(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fy(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,f=u.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,d,f),u.onUploadCallback();let x;if(d instanceof Float32Array)x=5126;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)x=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=5123;else if(d instanceof Int16Array)x=5122;else if(d instanceof Uint32Array)x=5125;else if(d instanceof Int32Array)x=5124;else if(d instanceof Int8Array)x=5120;else if(d instanceof Uint8Array)x=5121;else if(d instanceof Uint8ClampedArray)x=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const f=c.array,m=c.updateRange;n.bindBuffer(d,u),m.count===-1?n.bufferSubData(d,0,f):(t?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=i.get(u);(!f||f.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class Vf extends ci{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,m=[],x=[],h=[],p=[];for(let g=0;g<c;g++){const _=g*f-o;for(let v=0;v<u;v++){const y=v*d-s;x.push(y,-_,0),h.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const v=_+u*g,y=_+u*(g+1),M=_+1+u*(g+1),b=_+1+u*g;m.push(v,y,b),m.push(y,M,b)}this.setIndex(m),this.setAttribute("position",new Sn(x,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(p,2))}static fromJSON(e){return new Vf(e.width,e.height,e.widthSegments,e.heightSegments)}}var dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,my=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_y="vec3 transformed = vec3( position );",xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yy=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Sy=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,My=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Py=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ry=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Dy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Iy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uy=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
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
}`,Zy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,t1=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,n1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,a1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,l1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,u1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,p1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,m1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,w1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,T1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,C1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,R1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,D1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,I1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,N1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,j1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,q1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z1=`#ifdef USE_SKINNING
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
#endif`,J1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,K1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,nS=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,iS=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,rS=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,sS=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,oS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,aS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,lS=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,vS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,_S=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,xS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,MS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,bS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,LS=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,RS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,IS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,kS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,FS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,US=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,GS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:dy,alphamap_pars_fragment:hy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:gy,aomap_pars_fragment:vy,begin_vertex:_y,beginnormal_vertex:xy,bsdfs:yy,iridescence_fragment:Sy,bumpmap_pars_fragment:My,clipping_planes_fragment:wy,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:Ty,clipping_planes_vertex:Cy,color_fragment:by,color_pars_fragment:Ay,color_pars_vertex:Ly,color_vertex:Py,common:Ry,cube_uv_reflection_fragment:Dy,defaultnormal_vertex:Iy,displacementmap_pars_vertex:Ny,displacementmap_vertex:ky,emissivemap_fragment:zy,emissivemap_pars_fragment:Fy,encodings_fragment:Oy,encodings_pars_fragment:Uy,envmap_fragment:By,envmap_common_pars_fragment:Vy,envmap_pars_fragment:Gy,envmap_pars_vertex:Wy,envmap_physical_pars_fragment:t1,envmap_vertex:Hy,fog_vertex:Xy,fog_pars_vertex:jy,fog_fragment:qy,fog_pars_fragment:$y,gradientmap_pars_fragment:Yy,lightmap_fragment:Zy,lightmap_pars_fragment:Jy,lights_lambert_fragment:Qy,lights_lambert_pars_fragment:Ky,lights_pars_begin:e1,lights_toon_fragment:n1,lights_toon_pars_fragment:i1,lights_phong_fragment:r1,lights_phong_pars_fragment:s1,lights_physical_fragment:o1,lights_physical_pars_fragment:a1,lights_fragment_begin:l1,lights_fragment_maps:u1,lights_fragment_end:c1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:h1,logdepthbuf_vertex:p1,map_fragment:m1,map_pars_fragment:g1,map_particle_fragment:v1,map_particle_pars_fragment:_1,metalnessmap_fragment:x1,metalnessmap_pars_fragment:y1,morphcolor_vertex:S1,morphnormal_vertex:M1,morphtarget_pars_vertex:w1,morphtarget_vertex:E1,normal_fragment_begin:T1,normal_fragment_maps:C1,normal_pars_fragment:b1,normal_pars_vertex:A1,normal_vertex:L1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:R1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:I1,iridescence_pars_fragment:N1,output_fragment:k1,packing:z1,premultiplied_alpha_fragment:F1,project_vertex:O1,dithering_fragment:U1,dithering_pars_fragment:B1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:G1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:H1,shadowmap_vertex:X1,shadowmask_pars_fragment:j1,skinbase_vertex:q1,skinning_pars_vertex:$1,skinning_vertex:Y1,skinnormal_vertex:Z1,specularmap_fragment:J1,specularmap_pars_fragment:Q1,tonemapping_fragment:K1,tonemapping_pars_fragment:eS,transmission_fragment:tS,transmission_pars_fragment:nS,uv_pars_fragment:iS,uv_pars_vertex:rS,uv_vertex:sS,uv2_pars_fragment:oS,uv2_pars_vertex:aS,uv2_vertex:lS,worldpos_vertex:uS,background_vert:cS,background_frag:fS,backgroundCube_vert:dS,backgroundCube_frag:hS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:vS,distanceRGBA_vert:_S,distanceRGBA_frag:xS,equirect_vert:yS,equirect_frag:SS,linedashed_vert:MS,linedashed_frag:wS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:CS,meshlambert_frag:bS,meshmatcap_vert:AS,meshmatcap_frag:LS,meshnormal_vert:PS,meshnormal_frag:RS,meshphong_vert:DS,meshphong_frag:IS,meshphysical_vert:NS,meshphysical_frag:kS,meshtoon_vert:zS,meshtoon_frag:FS,points_vert:OS,points_frag:US,shadow_vert:BS,shadow_frag:VS,sprite_vert:GS,sprite_frag:WS},le={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new on},uv2Transform:{value:new on},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new on}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new on}}},Un={basic:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:zt([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:zt([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:zt([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new on},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:zt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:zt([le.lights,le.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};Un.physical={uniforms:zt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const ha={r:0,b:0,g:0};function HS(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,d=null,f=0,m=null;function x(p,g){let _=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const y=n.xr,M=y.getSession&&y.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?h(a,l):v&&v.isColor&&(h(v,1),_=!0),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Ml)?(c===void 0&&(c=new rn(new Do(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:fs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==Je,(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new rn(new Vf(2,2),new hr({name:"BackgroundMaterial",uniforms:fs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=v.encoding!==Je,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function h(p,g){p.getRGB(ha,Zg(n)),i.buffers.color.setClear(ha.r,ha.g,ha.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(p,g=1){a.set(p),l=g,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,h(a,l)},render:x}}function XS(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let u=l,c=!1;function d(I,X,J,Q,R){let U=!1;if(o){const G=h(Q,J,X);u!==G&&(u=G,m(u.object)),U=g(I,Q,J,R),U&&_(I,Q,J,R)}else{const G=X.wireframe===!0;(u.geometry!==Q.id||u.program!==J.id||u.wireframe!==G)&&(u.geometry=Q.id,u.program=J.id,u.wireframe=G,U=!0)}R!==null&&t.update(R,34963),(U||c)&&(c=!1,S(I,X,J,Q),R!==null&&n.bindBuffer(34963,t.get(R).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function h(I,X,J){const Q=J.wireframe===!0;let R=a[I.id];R===void 0&&(R={},a[I.id]=R);let U=R[X.id];U===void 0&&(U={},R[X.id]=U);let G=U[Q];return G===void 0&&(G=p(f()),U[Q]=G),G}function p(I){const X=[],J=[],Q=[];for(let R=0;R<r;R++)X[R]=0,J[R]=0,Q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:J,attributeDivisors:Q,object:I,attributes:{},index:null}}function g(I,X,J,Q){const R=u.attributes,U=X.attributes;let G=0;const ie=J.getAttributes();for(const z in ie)if(ie[z].location>=0){const re=R[z];let oe=U[z];if(oe===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(oe=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(oe=I.instanceColor)),re===void 0||re.attribute!==oe||oe&&re.data!==oe.data)return!0;G++}return u.attributesNum!==G||u.index!==Q}function _(I,X,J,Q){const R={},U=X.attributes;let G=0;const ie=J.getAttributes();for(const z in ie)if(ie[z].location>=0){let re=U[z];re===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(re=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(re=I.instanceColor));const oe={};oe.attribute=re,re&&re.data&&(oe.data=re.data),R[z]=oe,G++}u.attributes=R,u.attributesNum=G,u.index=Q}function v(){const I=u.newAttributes;for(let X=0,J=I.length;X<J;X++)I[X]=0}function y(I){M(I,0)}function M(I,X){const J=u.newAttributes,Q=u.enabledAttributes,R=u.attributeDivisors;J[I]=1,Q[I]===0&&(n.enableVertexAttribArray(I),Q[I]=1),R[I]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,X),R[I]=X)}function b(){const I=u.newAttributes,X=u.enabledAttributes;for(let J=0,Q=X.length;J<Q;J++)X[J]!==I[J]&&(n.disableVertexAttribArray(J),X[J]=0)}function A(I,X,J,Q,R,U){i.isWebGL2===!0&&(J===5124||J===5125)?n.vertexAttribIPointer(I,X,J,R,U):n.vertexAttribPointer(I,X,J,Q,R,U)}function S(I,X,J,Q){if(i.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const R=Q.attributes,U=J.getAttributes(),G=X.defaultAttributeValues;for(const ie in U){const z=U[ie];if(z.location>=0){let q=R[ie];if(q===void 0&&(ie==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),ie==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){const re=q.normalized,oe=q.itemSize,O=t.get(q);if(O===void 0)continue;const ve=O.buffer,ge=O.type,ye=O.bytesPerElement;if(q.isInterleavedBufferAttribute){const ue=q.data,ze=ue.stride,Z=q.offset;if(ue.isInstancedInterleavedBuffer){for(let Y=0;Y<z.locationSize;Y++)M(z.location+Y,ue.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Y=0;Y<z.locationSize;Y++)y(z.location+Y);n.bindBuffer(34962,ve);for(let Y=0;Y<z.locationSize;Y++)A(z.location+Y,oe/z.locationSize,ge,re,ze*ye,(Z+oe/z.locationSize*Y)*ye)}else{if(q.isInstancedBufferAttribute){for(let ue=0;ue<z.locationSize;ue++)M(z.location+ue,q.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ue=0;ue<z.locationSize;ue++)y(z.location+ue);n.bindBuffer(34962,ve);for(let ue=0;ue<z.locationSize;ue++)A(z.location+ue,oe/z.locationSize,ge,re,oe*ye,oe/z.locationSize*ue*ye)}}else if(G!==void 0){const re=G[ie];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(z.location,re);break;case 3:n.vertexAttrib3fv(z.location,re);break;case 4:n.vertexAttrib4fv(z.location,re);break;default:n.vertexAttrib1fv(z.location,re)}}}}b()}function C(){K();for(const I in a){const X=a[I];for(const J in X){const Q=X[J];for(const R in Q)x(Q[R].object),delete Q[R];delete X[J]}delete a[I]}}function L(I){if(a[I.id]===void 0)return;const X=a[I.id];for(const J in X){const Q=X[J];for(const R in Q)x(Q[R].object),delete Q[R];delete X[J]}delete a[I.id]}function V(I){for(const X in a){const J=a[X];if(J[I.id]===void 0)continue;const Q=J[I.id];for(const R in Q)x(Q[R].object),delete Q[R];delete J[I.id]}}function K(){k(),c=!0,u!==l&&(u=l,m(u.object))}function k(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:L,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function jS(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function qS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),f=n.getParameter(35660),m=n.getParameter(3379),x=n.getParameter(34076),h=n.getParameter(34921),p=n.getParameter(36347),g=n.getParameter(36348),_=n.getParameter(36349),v=f>0,y=o||e.has("OES_texture_float"),M=v&&y,b=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:b}}function $S(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new qi,a=new on,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,m){const x=d.clippingPlanes,h=d.clipIntersection,p=d.clipShadows,g=n.get(d);if(!r||x===null||x.length===0||s&&!p)s?c(null):u();else{const _=s?0:i,v=_*4;let y=g.clippingState||null;l.value=y,y=c(x,f,v,m);for(let M=0;M!==v;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,m,x){const h=d!==null?d.length:0;let p=null;if(h!==0){if(p=l.value,x!==!0||p===null){const g=m+h*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=m;v!==h;++v,y+=4)o.copy(d[v]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function YS(n){let e=new WeakMap;function t(o,a){return a===Ic?o.mapping=ls:a===Nc&&(o.mapping=us),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ic||a===Nc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new ly(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ZS extends Jg{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xr=4,Yh=[.125,.215,.35,.446,.526,.582],Yi=20,Ru=new ZS,Zh=new qe;let Du=null;const $i=(1+Math.sqrt(5))/2,Rr=1/$i,Jh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,$i,Rr),new D(0,$i,-Rr),new D(Rr,0,$i),new D(-Rr,0,$i),new D($i,Rr,0),new D(-$i,Rr,0)];class Qh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Du=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Du),e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Du=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:xo,format:Dn,encoding:fr,depthBuffer:!1},r=Kh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JS(s)),this._blurMaterial=QS(s,e,t)}return r}_compileMaterial(e){const t=new rn(this._lodPlanes[0],e);this._renderer.compile(t,Ru)}_sceneToCubeUV(e,t,i,r){const a=new nn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(Zh),c.toneMapping=ri,c.autoClear=!1;const m=new il({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),x=new rn(new Do,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Zh),h=!0);for(let g=0;g<6;g++){const _=g%3;_===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):_===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const v=this._cubeSize;pa(r,_*v,g>2?v:0,v,v),c.setRenderTarget(r),h&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ls||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;pa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ru)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jh[(r-1)%Jh.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new rn(this._lodPlanes[r],u),f=u.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Yi-1),h=s/x,p=isFinite(s)?1+Math.floor(c*h):Yi;p>Yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yi}`);const g=[];let _=0;for(let A=0;A<Yi;++A){const S=A/h,C=Math.exp(-S*S/2);g.push(C),A===0?_+=C:A<p&&(_+=2*C)}for(let A=0;A<g.length;A++)g[A]=g[A]/_;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=x,f.mipInt.value=v-i;const y=this._sizeLods[r],M=3*y*(r>v-Xr?r-v+Xr:0),b=4*(this._cubeSize-y);pa(t,M,b,3*y,2*y),l.setRenderTarget(t),l.render(d,Ru)}}function JS(n){const e=[],t=[],i=[];let r=n;const s=n-Xr+1+Yh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Xr?l=Yh[o-n+Xr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],m=6,x=6,h=3,p=2,g=1,_=new Float32Array(h*x*m),v=new Float32Array(p*x*m),y=new Float32Array(g*x*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,S=b>2?0:-1,C=[A,S,0,A+2/3,S,0,A+2/3,S+1,0,A,S,0,A+2/3,S+1,0,A,S+1,0];_.set(C,h*x*b),v.set(f,p*x*b);const L=[b,b,b,b,b,b];y.set(L,g*x*b)}const M=new ci;M.setAttribute("position",new Wn(_,h)),M.setAttribute("uv",new Wn(v,p)),M.setAttribute("faceIndex",new Wn(y,g)),e.push(M),r>Xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kh(n,e,t){const i=new dr(n,e,t);return i.texture.mapping=Ml,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function QS(n,e,t){const i=new Float32Array(Yi),r=new D(0,1,0);return new hr({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ep(){return new hr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function tp(){return new hr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Ic||l===Nc,c=l===ls||l===us;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Qh(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Qh(n));const f=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function eM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tM(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)e.update(f[x],34962);const m=d.morphAttributes;for(const x in m){const h=m[x];for(let p=0,g=h.length;p<g;p++)e.update(h[p],34962)}}function u(d){const f=[],m=d.index,x=d.attributes.position;let h=0;if(m!==null){const _=m.array;h=m.version;for(let v=0,y=_.length;v<y;v+=3){const M=_[v+0],b=_[v+1],A=_[v+2];f.push(M,b,b,A,A,M)}}else{const _=x.array;h=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const M=v+0,b=v+1,A=v+2;f.push(M,b,b,A,A,M)}}const p=new(Gg(f)?Yg:$g)(f,1);p.version=h;const g=s.get(d);g&&e.remove(g),s.set(d,p)}function c(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function nM(n,e,t,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,l;function u(f){a=f.type,l=f.bytesPerElement}function c(f,m){n.drawElements(s,m,a,f*l),t.update(m,s,1)}function d(f,m,x){if(x===0)return;let h,p;if(r)h=n,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,f*l,x),t.update(m,s,x)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function iM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rM(n,e){return n[0]-e[0]}function sM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function oM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new nt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d,f){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=h!==void 0?h.length:0;let g=s.get(c);if(g===void 0||g.count!==p){let J=function(){I.dispose(),s.delete(c),c.removeEventListener("dispose",J)};var x=J;g!==void 0&&g.texture.dispose();const y=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let L=0;y===!0&&(L=1),M===!0&&(L=2),b===!0&&(L=3);let V=c.attributes.position.count*L,K=1;V>e.maxTextureSize&&(K=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const k=new Float32Array(V*K*4*p),I=new jg(k,V,K,p);I.type=er,I.needsUpdate=!0;const X=L*4;for(let Q=0;Q<p;Q++){const R=A[Q],U=S[Q],G=C[Q],ie=V*K*4*Q;for(let z=0;z<R.count;z++){const q=z*X;y===!0&&(o.fromBufferAttribute(R,z),k[ie+q+0]=o.x,k[ie+q+1]=o.y,k[ie+q+2]=o.z,k[ie+q+3]=0),M===!0&&(o.fromBufferAttribute(U,z),k[ie+q+4]=o.x,k[ie+q+5]=o.y,k[ie+q+6]=o.z,k[ie+q+7]=0),b===!0&&(o.fromBufferAttribute(G,z),k[ie+q+8]=o.x,k[ie+q+9]=o.y,k[ie+q+10]=o.z,k[ie+q+11]=G.itemSize===4?o.w:1)}}g={count:p,texture:I,size:new fe(V,K)},s.set(c,g),c.addEventListener("dispose",J)}let _=0;for(let y=0;y<m.length;y++)_+=m[y];const v=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",m),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const h=m===void 0?0:m.length;let p=i[c.id];if(p===void 0||p.length!==h){p=[];for(let M=0;M<h;M++)p[M]=[M,0];i[c.id]=p}for(let M=0;M<h;M++){const b=p[M];b[0]=M,b[1]=m[M]}p.sort(sM);for(let M=0;M<8;M++)M<h&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(rM);const g=c.morphAttributes.position,_=c.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const b=a[M],A=b[0],S=b[1];A!==Number.MAX_SAFE_INTEGER&&S?(g&&c.getAttribute("morphTarget"+M)!==g[A]&&c.setAttribute("morphTarget"+M,g[A]),_&&c.getAttribute("morphNormal"+M)!==_[A]&&c.setAttribute("morphNormal"+M,_[A]),r[M]=S,v+=S):(g&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),_&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const y=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function aM(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const e0=new un,t0=new jg,n0=new Xx,i0=new Qg,np=[],ip=[],rp=new Float32Array(16),sp=new Float32Array(9),op=new Float32Array(4);function vs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=np[r];if(s===void 0&&(s=new Float32Array(r),np[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function _t(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function El(n,e){let t=ip[e];t===void 0&&(t=new Int32Array(e),ip[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2fv(this.addr,e),_t(t,e)}}function cM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;n.uniform3fv(this.addr,e),_t(t,e)}}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4fv(this.addr,e),_t(t,e)}}function dM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,i))return;op.set(i),n.uniformMatrix2fv(this.addr,!1,op),_t(t,i)}}function hM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,i))return;sp.set(i),n.uniformMatrix3fv(this.addr,!1,sp),_t(t,i)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,i))return;rp.set(i),n.uniformMatrix4fv(this.addr,!1,rp),_t(t,i)}}function mM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2iv(this.addr,e),_t(t,e)}}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3iv(this.addr,e),_t(t,e)}}function _M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4iv(this.addr,e),_t(t,e)}}function xM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;n.uniform2uiv(this.addr,e),_t(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;n.uniform3uiv(this.addr,e),_t(t,e)}}function MM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;n.uniform4uiv(this.addr,e),_t(t,e)}}function wM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||e0,r)}function EM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||n0,r)}function TM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||i0,r)}function CM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||t0,r)}function bM(n){switch(n){case 5126:return lM;case 35664:return uM;case 35665:return cM;case 35666:return fM;case 35674:return dM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return vM;case 35669:case 35673:return _M;case 5125:return xM;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return EM;case 35680:case 36300:case 36308:case 36293:return TM;case 36289:case 36303:case 36311:case 36292:return CM}}function AM(n,e){n.uniform1fv(this.addr,e)}function LM(n,e){const t=vs(e,this.size,2);n.uniform2fv(this.addr,t)}function PM(n,e){const t=vs(e,this.size,3);n.uniform3fv(this.addr,t)}function RM(n,e){const t=vs(e,this.size,4);n.uniform4fv(this.addr,t)}function DM(n,e){const t=vs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function IM(n,e){const t=vs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NM(n,e){const t=vs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kM(n,e){n.uniform1iv(this.addr,e)}function zM(n,e){n.uniform2iv(this.addr,e)}function FM(n,e){n.uniform3iv(this.addr,e)}function OM(n,e){n.uniform4iv(this.addr,e)}function UM(n,e){n.uniform1uiv(this.addr,e)}function BM(n,e){n.uniform2uiv(this.addr,e)}function VM(n,e){n.uniform3uiv(this.addr,e)}function GM(n,e){n.uniform4uiv(this.addr,e)}function WM(n,e,t){const i=this.cache,r=e.length,s=El(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||e0,s[o])}function HM(n,e,t){const i=this.cache,r=e.length,s=El(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||n0,s[o])}function XM(n,e,t){const i=this.cache,r=e.length,s=El(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||i0,s[o])}function jM(n,e,t){const i=this.cache,r=e.length,s=El(t,r);vt(i,s)||(n.uniform1iv(this.addr,s),_t(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||t0,s[o])}function qM(n){switch(n){case 5126:return AM;case 35664:return LM;case 35665:return PM;case 35666:return RM;case 35674:return DM;case 35675:return IM;case 35676:return NM;case 5124:case 35670:return kM;case 35667:case 35671:return zM;case 35668:case 35672:return FM;case 35669:case 35673:return OM;case 5125:return UM;case 36294:return BM;case 36295:return VM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return XM;case 36289:case 36303:case 36311:case 36292:return jM}}class $M{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=bM(t.type)}}class YM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=qM(t.type)}}class ZM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Iu=/(\w+)(\])?(\[|\.)?/g;function ap(n,e){n.seq.push(e),n.map[e.id]=e}function JM(n,e,t){const i=n.name,r=i.length;for(Iu.lastIndex=0;;){const s=Iu.exec(i),o=Iu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){ap(t,u===void 0?new $M(a,n,e):new YM(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new ZM(a),ap(t,d)),t=d}}}class Ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);JM(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function lp(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let QM=0;function KM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function ew(n){switch(n){case fr:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function up(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+KM(n.getShaderSource(e),o)}else return r}function tw(n,e){const t=ew(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function nw(n,e){let t;switch(e){case _x:t="Linear";break;case xx:t="Reinhard";break;case yx:t="OptimizedCineon";break;case Sx:t="ACESFilmic";break;case Mx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function iw(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function rw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sw(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Bs(n){return n!==""}function cp(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ow=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(n){return n.replace(ow,aw)}function aw(n,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Uc(t)}const lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dp(n){return n.replace(lw,uw)}function uw(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zg?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Z_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Us&&(e="SHADOWMAP_TYPE_VSM"),e}function fw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case us:e="ENVMAP_TYPE_CUBE";break;case Ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case us:e="ENVMAP_MODE_REFRACTION";break}return e}function hw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Of:e="ENVMAP_BLENDING_MULTIPLY";break;case gx:e="ENVMAP_BLENDING_MIX";break;case vx:e="ENVMAP_BLENDING_ADD";break}return e}function pw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function mw(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=cw(t),u=fw(t),c=dw(t),d=hw(t),f=pw(t),m=t.isWebGL2?"":iw(t),x=rw(s),h=r.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[x].filter(Bs).join(`
`),p.length>0&&(p+=`
`),g=[m,x].filter(Bs).join(`
`),g.length>0&&(g+=`
`)):(p=[hp(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),g=[m,hp(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?De.tonemapping_pars_fragment:"",t.toneMapping!==ri?nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,tw("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),o=Uc(o),o=cp(o,t),o=fp(o,t),a=Uc(a),a=cp(a,t),a=fp(a,t),o=dp(o),a=dp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=_+p+o,y=_+g+a,M=lp(r,35633,v),b=lp(r,35632,y);if(r.attachShader(h,M),r.attachShader(h,b),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const C=r.getProgramInfoLog(h).trim(),L=r.getShaderInfoLog(M).trim(),V=r.getShaderInfoLog(b).trim();let K=!0,k=!0;if(r.getProgramParameter(h,35714)===!1){K=!1;const I=up(r,M,"vertex"),X=up(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+C+`
`+I+`
`+X)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(L===""||V==="")&&(k=!1);k&&(this.diagnostics={runnable:K,programLog:C,vertexShader:{log:L,prefix:p},fragmentShader:{log:V,prefix:g}})}r.deleteShader(M),r.deleteShader(b);let A;this.getUniforms=function(){return A===void 0&&(A=new Ra(r,h)),A};let S;return this.getAttributes=function(){return S===void 0&&(S=sw(r,h)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=QM++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=b,this}let gw=0;class vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _w(e),t.set(e,i)),i}}class _w{constructor(e){this.id=gw++,this.code=e,this.usedTimes=0}}function xw(n,e,t,i,r,s,o){const a=new qg,l=new vw,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(S,C,L,V,K){const k=V.fog,I=K.geometry,X=S.isMeshStandardMaterial?V.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),Q=!!J&&J.mapping===Ml?J.image.height:null,R=x[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const U=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,G=U!==void 0?U.length:0;let ie=0;I.morphAttributes.position!==void 0&&(ie=1),I.morphAttributes.normal!==void 0&&(ie=2),I.morphAttributes.color!==void 0&&(ie=3);let z,q,re,oe;if(R){const ze=Un[R];z=ze.vertexShader,q=ze.fragmentShader}else z=S.vertexShader,q=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),oe=l.getFragmentShaderID(S);const O=n.getRenderTarget(),ve=S.alphaTest>0,ge=S.clearcoat>0,ye=S.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:S.type,vertexShader:z,fragmentShader:q,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:oe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:O===null?n.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:fr,map:!!S.map,matcap:!!S.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:Q,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Vx,tangentSpaceNormalMap:S.normalMapType===Vg,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Je,clearcoat:ge,clearcoatMap:ge&&!!S.clearcoatMap,clearcoatRoughnessMap:ge&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!S.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!S.iridescenceMap,iridescenceThicknessMap:ye&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Kr,alphaMap:!!S.alphaMap,alphaTest:ve,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!I.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!k,useFog:S.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:ri,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Mi,flipSided:S.side===ln,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)C.push(L),C.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(g(C,S),_(C,S),C.push(n.outputEncoding)),C.push(S.customProgramCacheKey),C.join()}function g(S,C){S.push(C.precision),S.push(C.outputEncoding),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.combine),S.push(C.vertexUvs),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function _(S,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.iridescence&&a.enable(18),C.iridescenceMap&&a.enable(19),C.iridescenceThicknessMap&&a.enable(20),C.displacementMap&&a.enable(21),C.specularMap&&a.enable(22),C.roughnessMap&&a.enable(23),C.metalnessMap&&a.enable(24),C.gradientMap&&a.enable(25),C.alphaMap&&a.enable(26),C.alphaTest&&a.enable(27),C.vertexColors&&a.enable(28),C.vertexAlphas&&a.enable(29),C.vertexUvs&&a.enable(30),C.vertexTangents&&a.enable(31),C.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.skinning&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),S.push(a.mask)}function v(S){const C=x[S.type];let L;if(C){const V=Un[C];L=ry.clone(V.uniforms)}else L=S.uniforms;return L}function y(S,C){let L;for(let V=0,K=u.length;V<K;V++){const k=u[V];if(k.cacheKey===C){L=k,++L.usedTimes;break}}return L===void 0&&(L=new mw(n,C,S,s),u.push(L)),L}function M(S){if(--S.usedTimes===0){const C=u.indexOf(S);u[C]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function A(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:b,programs:u,dispose:A}}function yw(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Sw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function pp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function mp(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,m,x,h,p){let g=n[e];return g===void 0?(g={id:d.id,object:d,geometry:f,material:m,groupOrder:x,renderOrder:d.renderOrder,z:h,group:p},n[e]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=m,g.groupOrder=x,g.renderOrder=d.renderOrder,g.z=h,g.group=p),e++,g}function a(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(d,f,m,x,h,p){const g=o(d,f,m,x,h,p);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,f){t.length>1&&t.sort(d||Sw),i.length>1&&i.sort(f||pp),r.length>1&&r.sort(f||pp)}function c(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Mw(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new mp,n.set(i,[o])):r>=s.length?(o=new mp,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ww(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new qe};break;case"SpotLight":t={position:new D,direction:new D,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Ew(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Tw=0;function Cw(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bw(n,e){const t=new ww,i=Ew(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new D);const s=new D,o=new ut,a=new ut;function l(c,d){let f=0,m=0,x=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let h=0,p=0,g=0,_=0,v=0,y=0,M=0,b=0,A=0,S=0;c.sort(Cw);const C=d!==!0?Math.PI:1;for(let V=0,K=c.length;V<K;V++){const k=c[V],I=k.color,X=k.intensity,J=k.distance,Q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=I.r*X*C,m+=I.g*X*C,x+=I.b*X*C;else if(k.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(k.sh.coefficients[R],X);else if(k.isDirectionalLight){const R=t.get(k);if(R.color.copy(k.color).multiplyScalar(k.intensity*C),k.castShadow){const U=k.shadow,G=i.get(k);G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,r.directionalShadow[h]=G,r.directionalShadowMap[h]=Q,r.directionalShadowMatrix[h]=k.shadow.matrix,y++}r.directional[h]=R,h++}else if(k.isSpotLight){const R=t.get(k);R.position.setFromMatrixPosition(k.matrixWorld),R.color.copy(I).multiplyScalar(X*C),R.distance=J,R.coneCos=Math.cos(k.angle),R.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),R.decay=k.decay,r.spot[g]=R;const U=k.shadow;if(k.map&&(r.spotLightMap[A]=k.map,A++,U.updateMatrices(k),k.castShadow&&S++),r.spotLightMatrix[g]=U.matrix,k.castShadow){const G=i.get(k);G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,r.spotShadow[g]=G,r.spotShadowMap[g]=Q,b++}g++}else if(k.isRectAreaLight){const R=t.get(k);R.color.copy(I).multiplyScalar(X),R.halfWidth.set(k.width*.5,0,0),R.halfHeight.set(0,k.height*.5,0),r.rectArea[_]=R,_++}else if(k.isPointLight){const R=t.get(k);if(R.color.copy(k.color).multiplyScalar(k.intensity*C),R.distance=k.distance,R.decay=k.decay,k.castShadow){const U=k.shadow,G=i.get(k);G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,G.shadowCameraNear=U.camera.near,G.shadowCameraFar=U.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=Q,r.pointShadowMatrix[p]=k.shadow.matrix,M++}r.point[p]=R,p++}else if(k.isHemisphereLight){const R=t.get(k);R.skyColor.copy(k.color).multiplyScalar(X*C),R.groundColor.copy(k.groundColor).multiplyScalar(X*C),r.hemi[v]=R,v++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=x;const L=r.hash;(L.directionalLength!==h||L.pointLength!==p||L.spotLength!==g||L.rectAreaLength!==_||L.hemiLength!==v||L.numDirectionalShadows!==y||L.numPointShadows!==M||L.numSpotShadows!==b||L.numSpotMaps!==A)&&(r.directional.length=h,r.spot.length=g,r.rectArea.length=_,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=b+A-S,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=S,L.directionalLength=h,L.pointLength=p,L.spotLength=g,L.rectAreaLength=_,L.hemiLength=v,L.numDirectionalShadows=y,L.numPointShadows=M,L.numSpotShadows=b,L.numSpotMaps=A,r.version=Tw++)}function u(c,d){let f=0,m=0,x=0,h=0,p=0;const g=d.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),f++}else if(y.isSpotLight){const M=r.spot[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),x++}else if(y.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),o.copy(y.matrixWorld),o.premultiply(g),a.extractRotation(o),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(y.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),m++}else if(y.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),p++}}}return{setup:l,setupView:u,state:r}}function gp(n,e){const t=new bw(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Aw(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new gp(n,e),t.set(s,[l])):o>=a.length?(l=new gp(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Lw extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pw extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iw(n,e,t){let i=new Bf;const r=new fe,s=new fe,o=new nt,a=new Lw({depthPacking:Bx}),l=new Pw,u={},c=t.maxTextureSize,d={[Ni]:ln,[ln]:Ni,[Mi]:Mi},f=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Rw,fragmentShader:Dw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new ci;x.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new rn(x,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zg,this.render=function(y,M,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const A=n.getRenderTarget(),S=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Ri),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let V=0,K=y.length;V<K;V++){const k=y[V],I=k.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const X=I.getFrameExtents();if(r.multiply(X),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/X.x),r.x=s.x*X.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/X.y),r.y=s.y*X.y,I.mapSize.y=s.y)),I.map===null){const Q=this.type!==Us?{minFilter:Ot,magFilter:Ot}:{};I.map=new dr(r.x,r.y,Q),I.map.texture.name=k.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const J=I.getViewportCount();for(let Q=0;Q<J;Q++){const R=I.getViewport(Q);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),L.viewport(o),I.updateMatrices(k,Q),i=I.getFrustum(),v(M,b,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===Us&&g(I,b),I.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(A,S,C)};function g(y,M){const b=e.update(h);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new dr(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(M,null,b,f,h,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(M,null,b,m,h,null)}function _(y,M,b,A,S,C){let L=null;const V=b.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(V!==void 0)L=V;else if(L=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const K=L.uuid,k=M.uuid;let I=u[K];I===void 0&&(I={},u[K]=I);let X=I[k];X===void 0&&(X=L.clone(),I[k]=X),L=X}return L.visible=M.visible,L.wireframe=M.wireframe,C===Us?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:d[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,b.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(b.matrixWorld),L.nearDistance=A,L.farDistance=S),L}function v(y,M,b,A,S){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&S===Us)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,y.matrixWorld);const V=e.update(y),K=y.material;if(Array.isArray(K)){const k=V.groups;for(let I=0,X=k.length;I<X;I++){const J=k[I],Q=K[J.materialIndex];if(Q&&Q.visible){const R=_(y,Q,A,b.near,b.far,S);n.renderBufferDirect(b,null,V,R,y,J)}}}else if(K.visible){const k=_(y,K,A,b.near,b.far,S);n.renderBufferDirect(b,null,V,k,y,null)}}const L=y.children;for(let V=0,K=L.length;V<K;V++)v(L[V],M,b,A,S)}}function Nw(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const W=new nt;let te=null;const pe=new nt(0,0,0,0);return{setMask:function(Se){te!==Se&&!P&&(n.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){P=Se},setClear:function(Se,He,yt,At,Oi){Oi===!0&&(Se*=At,He*=At,yt*=At),W.set(Se,He,yt,At),pe.equals(W)===!1&&(n.clearColor(Se,He,yt,At),pe.copy(W))},reset:function(){P=!1,te=null,pe.set(-1,0,0,0)}}}function s(){let P=!1,W=null,te=null,pe=null;return{setTest:function(Se){Se?ve(2929):ge(2929)},setMask:function(Se){W!==Se&&!P&&(n.depthMask(Se),W=Se)},setFunc:function(Se){if(te!==Se){switch(Se){case ux:n.depthFunc(512);break;case cx:n.depthFunc(519);break;case fx:n.depthFunc(513);break;case Dc:n.depthFunc(515);break;case dx:n.depthFunc(514);break;case hx:n.depthFunc(518);break;case px:n.depthFunc(516);break;case mx:n.depthFunc(517);break;default:n.depthFunc(515)}te=Se}},setLocked:function(Se){P=Se},setClear:function(Se){pe!==Se&&(n.clearDepth(Se),pe=Se)},reset:function(){P=!1,W=null,te=null,pe=null}}}function o(){let P=!1,W=null,te=null,pe=null,Se=null,He=null,yt=null,At=null,Oi=null;return{setTest:function(et){P||(et?ve(2960):ge(2960))},setMask:function(et){W!==et&&!P&&(n.stencilMask(et),W=et)},setFunc:function(et,Xn,hn){(te!==et||pe!==Xn||Se!==hn)&&(n.stencilFunc(et,Xn,hn),te=et,pe=Xn,Se=hn)},setOp:function(et,Xn,hn){(He!==et||yt!==Xn||At!==hn)&&(n.stencilOp(et,Xn,hn),He=et,yt=Xn,At=hn)},setLocked:function(et){P=et},setClear:function(et){Oi!==et&&(n.clearStencil(et),Oi=et)},reset:function(){P=!1,W=null,te=null,pe=null,Se=null,He=null,yt=null,At=null,Oi=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let f={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,y=null,M=null,b=null,A=null,S=null,C=!1,L=null,V=null,K=null,k=null,I=null;const X=n.getParameter(35661);let J=!1,Q=0;const R=n.getParameter(7938);R.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(R)[1]),J=Q>=1):R.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),J=Q>=2);let U=null,G={};const ie=n.getParameter(3088),z=n.getParameter(2978),q=new nt().fromArray(ie),re=new nt().fromArray(z);function oe(P,W,te){const pe=new Uint8Array(4),Se=n.createTexture();n.bindTexture(P,Se),n.texParameteri(P,10241,9728),n.texParameteri(P,10240,9728);for(let He=0;He<te;He++)n.texImage2D(W+He,0,6408,1,1,0,6408,5121,pe);return Se}const O={};O[3553]=oe(3553,3553,1),O[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ve(2929),l.setFunc(Dc),ce(!1),Pe(sh),ve(2884),ae(Ri);function ve(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function ge(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function ye(P,W){return m[P]!==W?(n.bindFramebuffer(P,W),m[P]=W,i&&(P===36009&&(m[36160]=W),P===36160&&(m[36009]=W)),!0):!1}function ue(P,W){let te=h,pe=!1;if(P)if(te=x.get(W),te===void 0&&(te=[],x.set(W,te)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(te.length!==Se.length||te[0]!==36064){for(let He=0,yt=Se.length;He<yt;He++)te[He]=36064+He;te.length=Se.length,pe=!0}}else te[0]!==36064&&(te[0]=36064,pe=!0);else te[0]!==1029&&(te[0]=1029,pe=!0);pe&&(t.isWebGL2?n.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function ze(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const Z={[Dr]:32774,[Q_]:32778,[K_]:32779};if(i)Z[uh]=32775,Z[ch]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Z[uh]=P.MIN_EXT,Z[ch]=P.MAX_EXT)}const Y={[ex]:0,[tx]:1,[nx]:768,[Fg]:770,[lx]:776,[ox]:774,[rx]:772,[ix]:769,[Og]:771,[ax]:775,[sx]:773};function ae(P,W,te,pe,Se,He,yt,At){if(P===Ri){g===!0&&(ge(3042),g=!1);return}if(g===!1&&(ve(3042),g=!0),P!==J_){if(P!==_||At!==C){if((v!==Dr||b!==Dr)&&(n.blendEquation(32774),v=Dr,b=Dr),At)switch(P){case Kr:n.blendFuncSeparate(1,771,1,771);break;case oh:n.blendFunc(1,1);break;case ah:n.blendFuncSeparate(0,769,0,1);break;case lh:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Kr:n.blendFuncSeparate(770,771,1,771);break;case oh:n.blendFunc(770,1);break;case ah:n.blendFuncSeparate(0,769,0,1);break;case lh:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,M=null,A=null,S=null,_=P,C=At}return}Se=Se||W,He=He||te,yt=yt||pe,(W!==v||Se!==b)&&(n.blendEquationSeparate(Z[W],Z[Se]),v=W,b=Se),(te!==y||pe!==M||He!==A||yt!==S)&&(n.blendFuncSeparate(Y[te],Y[pe],Y[He],Y[yt]),y=te,M=pe,A=He,S=yt),_=P,C=!1}function _e(P,W){P.side===Mi?ge(2884):ve(2884);let te=P.side===ln;W&&(te=!te),ce(te),P.blending===Kr&&P.transparent===!1?ae(Ri):ae(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const pe=P.stencilWrite;u.setTest(pe),pe&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ve(32926):ge(32926)}function ce(P){L!==P&&(P?n.frontFace(2304):n.frontFace(2305),L=P)}function Pe(P){P!==$_?(ve(2884),P!==V&&(P===sh?n.cullFace(1029):P===Y_?n.cullFace(1028):n.cullFace(1032))):ge(2884),V=P}function Ce(P){P!==K&&(J&&n.lineWidth(P),K=P)}function Me(P,W,te){P?(ve(32823),(k!==W||I!==te)&&(n.polygonOffset(W,te),k=W,I=te)):ge(32823)}function Ye(P){P?ve(3089):ge(3089)}function Xe(P){P===void 0&&(P=33984+X-1),U!==P&&(n.activeTexture(P),U=P)}function T(P,W,te){te===void 0&&(U===null?te=33984+X-1:te=U);let pe=G[te];pe===void 0&&(pe={type:void 0,texture:void 0},G[te]=pe),(pe.type!==P||pe.texture!==W)&&(U!==te&&(n.activeTexture(te),U=te),n.bindTexture(P,W||O[P]),pe.type=P,pe.texture=W)}function w(){const P=G[U];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(P){q.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),q.copy(P))}function Ee(P){re.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),re.copy(P))}function Ge(P,W){let te=d.get(W);te===void 0&&(te=new WeakMap,d.set(W,te));let pe=te.get(P);pe===void 0&&(pe=n.getUniformBlockIndex(W,P.name),te.set(P,pe))}function Ke(P,W){const pe=d.get(W).get(P);c.get(W)!==pe&&(n.uniformBlockBinding(W,pe,P.__bindingPointIndex),c.set(W,pe))}function xt(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},U=null,G={},m={},x=new WeakMap,h=[],p=null,g=!1,_=null,v=null,y=null,M=null,b=null,A=null,S=null,C=!1,L=null,V=null,K=null,k=null,I=null,q.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:ve,disable:ge,bindFramebuffer:ye,drawBuffers:ue,useProgram:ze,setBlending:ae,setMaterial:_e,setFlipSided:ce,setCullFace:Pe,setLineWidth:Ce,setPolygonOffset:Me,setScissorTest:Ye,activeTexture:Xe,bindTexture:T,unbindTexture:w,compressedTexImage2D:B,compressedTexImage3D:ne,texImage2D:Ae,texImage3D:xe,updateUBOMapping:Ge,uniformBlockBinding:Ke,texStorage2D:$,texStorage3D:we,texSubImage2D:se,texSubImage3D:de,compressedTexSubImage2D:Le,compressedTexSubImage3D:he,scissor:be,viewport:Ee,reset:xt}}function kw(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,w){return g?new OffscreenCanvas(T,w):nl("canvas")}function v(T,w,B,ne){let se=1;if((T.width>ne||T.height>ne)&&(se=ne/Math.max(T.width,T.height)),se<1||w===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const de=w?Oc:Math.floor,Le=de(se*T.width),he=de(se*T.height);h===void 0&&(h=_(Le,he));const $=B?_(Le,he):h;return $.width=Le,$.height=he,$.getContext("2d").drawImage(T,0,0,Le,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Le+"x"+he+")."),$}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return Oh(T.width)&&Oh(T.height)}function M(T){return a?!1:T.wrapS!==Rn||T.wrapT!==Rn||T.minFilter!==Ot&&T.minFilter!==_n}function b(T,w){return T.generateMipmaps&&w&&T.minFilter!==Ot&&T.minFilter!==_n}function A(T){n.generateMipmap(T)}function S(T,w,B,ne,se=!1){if(a===!1)return w;if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de=w;return w===6403&&(B===5126&&(de=33326),B===5131&&(de=33325),B===5121&&(de=33321)),w===33319&&(B===5126&&(de=33328),B===5131&&(de=33327),B===5121&&(de=33323)),w===6408&&(B===5126&&(de=34836),B===5131&&(de=34842),B===5121&&(de=ne===Je&&se===!1?35907:32856),B===32819&&(de=32854),B===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function C(T,w,B){return b(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==Ot&&T.minFilter!==_n?Math.log2(Math.max(w.width,w.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?w.mipmaps.length:1}function L(T){return T===Ot||T===fh||T===nu?9728:9729}function V(T){const w=T.target;w.removeEventListener("dispose",V),k(w),w.isVideoTexture&&x.delete(w)}function K(T){const w=T.target;w.removeEventListener("dispose",K),X(w)}function k(T){const w=i.get(T);if(w.__webglInit===void 0)return;const B=T.source,ne=p.get(B);if(ne){const se=ne[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&I(T),Object.keys(ne).length===0&&p.delete(B)}i.remove(T)}function I(T){const w=i.get(T);n.deleteTexture(w.__webglTexture);const B=T.source,ne=p.get(B);delete ne[w.__cacheKey],o.memory.textures--}function X(T){const w=T.texture,B=i.get(T),ne=i.get(w);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)n.deleteFramebuffer(B.__webglFramebuffer[se]),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[se]);else{if(n.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let se=0;se<B.__webglColorRenderbuffer.length;se++)B.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[se]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let se=0,de=w.length;se<de;se++){const Le=i.get(w[se]);Le.__webglTexture&&(n.deleteTexture(Le.__webglTexture),o.memory.textures--),i.remove(w[se])}i.remove(w),i.remove(T)}let J=0;function Q(){J=0}function R(){const T=J;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),J+=1,T}function U(T){const w=[];return w.push(T.wrapS),w.push(T.wrapT),w.push(T.wrapR||0),w.push(T.magFilter),w.push(T.minFilter),w.push(T.anisotropy),w.push(T.internalFormat),w.push(T.format),w.push(T.type),w.push(T.generateMipmaps),w.push(T.premultiplyAlpha),w.push(T.flipY),w.push(T.unpackAlignment),w.push(T.encoding),w.join()}function G(T,w){const B=i.get(T);if(T.isVideoTexture&&Ye(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(B,T,w);return}}t.bindTexture(3553,B.__webglTexture,33984+w)}function ie(T,w){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ge(B,T,w);return}t.bindTexture(35866,B.__webglTexture,33984+w)}function z(T,w){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ge(B,T,w);return}t.bindTexture(32879,B.__webglTexture,33984+w)}function q(T,w){const B=i.get(T);if(T.version>0&&B.__version!==T.version){ye(B,T,w);return}t.bindTexture(34067,B.__webglTexture,33984+w)}const re={[kc]:10497,[Rn]:33071,[zc]:33648},oe={[Ot]:9728,[fh]:9984,[nu]:9986,[_n]:9729,[wx]:9985,[_o]:9987};function O(T,w,B){if(B?(n.texParameteri(T,10242,re[w.wrapS]),n.texParameteri(T,10243,re[w.wrapT]),(T===32879||T===35866)&&n.texParameteri(T,32882,re[w.wrapR]),n.texParameteri(T,10240,oe[w.magFilter]),n.texParameteri(T,10241,oe[w.minFilter])):(n.texParameteri(T,10242,33071),n.texParameteri(T,10243,33071),(T===32879||T===35866)&&n.texParameteri(T,32882,33071),(w.wrapS!==Rn||w.wrapT!==Rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(T,10240,L(w.magFilter)),n.texParameteri(T,10241,L(w.minFilter)),w.minFilter!==Ot&&w.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ot||w.minFilter!==nu&&w.minFilter!==_o||w.type===er&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===xo&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(T,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function ve(T,w){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,w.addEventListener("dispose",V));const ne=w.source;let se=p.get(ne);se===void 0&&(se={},p.set(ne,se));const de=U(w);if(de!==T.__cacheKey){se[de]===void 0&&(se[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),se[de].usedTimes++;const Le=se[T.__cacheKey];Le!==void 0&&(se[T.__cacheKey].usedTimes--,Le.usedTimes===0&&I(w)),T.__cacheKey=de,T.__webglTexture=se[de].texture}return B}function ge(T,w,B){let ne=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=35866),w.isData3DTexture&&(ne=32879);const se=ve(T,w),de=w.source;t.bindTexture(ne,T.__webglTexture,33984+B);const Le=i.get(de);if(de.version!==Le.__version||se===!0){t.activeTexture(33984+B),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const he=M(w)&&y(w.image)===!1;let $=v(w.image,he,!1,c);$=Xe(w,$);const we=y($)||a,Ae=s.convert(w.format,w.encoding);let xe=s.convert(w.type),be=S(w.internalFormat,Ae,xe,w.encoding,w.isVideoTexture);O(ne,w,we);let Ee;const Ge=w.mipmaps,Ke=a&&w.isVideoTexture!==!0,xt=Le.__version===void 0||se===!0,P=C(w,$,we);if(w.isDepthTexture)be=6402,a?w.type===er?be=36012:w.type===Ki?be=33190:w.type===es?be=35056:be=33189:w.type===er&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ir&&be===6402&&w.type!==Bg&&w.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ki,xe=s.convert(w.type)),w.format===cs&&be===6402&&(be=34041,w.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=es,xe=s.convert(w.type))),xt&&(Ke?t.texStorage2D(3553,1,be,$.width,$.height):t.texImage2D(3553,0,be,$.width,$.height,0,Ae,xe,null));else if(w.isDataTexture)if(Ge.length>0&&we){Ke&&xt&&t.texStorage2D(3553,P,be,Ge[0].width,Ge[0].height);for(let W=0,te=Ge.length;W<te;W++)Ee=Ge[W],Ke?t.texSubImage2D(3553,W,0,0,Ee.width,Ee.height,Ae,xe,Ee.data):t.texImage2D(3553,W,be,Ee.width,Ee.height,0,Ae,xe,Ee.data);w.generateMipmaps=!1}else Ke?(xt&&t.texStorage2D(3553,P,be,$.width,$.height),t.texSubImage2D(3553,0,0,0,$.width,$.height,Ae,xe,$.data)):t.texImage2D(3553,0,be,$.width,$.height,0,Ae,xe,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ke&&xt&&t.texStorage3D(35866,P,be,Ge[0].width,Ge[0].height,$.depth);for(let W=0,te=Ge.length;W<te;W++)Ee=Ge[W],w.format!==Dn?Ae!==null?Ke?t.compressedTexSubImage3D(35866,W,0,0,0,Ee.width,Ee.height,$.depth,Ae,Ee.data,0,0):t.compressedTexImage3D(35866,W,be,Ee.width,Ee.height,$.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage3D(35866,W,0,0,0,Ee.width,Ee.height,$.depth,Ae,xe,Ee.data):t.texImage3D(35866,W,be,Ee.width,Ee.height,$.depth,0,Ae,xe,Ee.data)}else{Ke&&xt&&t.texStorage2D(3553,P,be,Ge[0].width,Ge[0].height);for(let W=0,te=Ge.length;W<te;W++)Ee=Ge[W],w.format!==Dn?Ae!==null?Ke?t.compressedTexSubImage2D(3553,W,0,0,Ee.width,Ee.height,Ae,Ee.data):t.compressedTexImage2D(3553,W,be,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?t.texSubImage2D(3553,W,0,0,Ee.width,Ee.height,Ae,xe,Ee.data):t.texImage2D(3553,W,be,Ee.width,Ee.height,0,Ae,xe,Ee.data)}else if(w.isDataArrayTexture)Ke?(xt&&t.texStorage3D(35866,P,be,$.width,$.height,$.depth),t.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,Ae,xe,$.data)):t.texImage3D(35866,0,be,$.width,$.height,$.depth,0,Ae,xe,$.data);else if(w.isData3DTexture)Ke?(xt&&t.texStorage3D(32879,P,be,$.width,$.height,$.depth),t.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,Ae,xe,$.data)):t.texImage3D(32879,0,be,$.width,$.height,$.depth,0,Ae,xe,$.data);else if(w.isFramebufferTexture){if(xt)if(Ke)t.texStorage2D(3553,P,be,$.width,$.height);else{let W=$.width,te=$.height;for(let pe=0;pe<P;pe++)t.texImage2D(3553,pe,be,W,te,0,Ae,xe,null),W>>=1,te>>=1}}else if(Ge.length>0&&we){Ke&&xt&&t.texStorage2D(3553,P,be,Ge[0].width,Ge[0].height);for(let W=0,te=Ge.length;W<te;W++)Ee=Ge[W],Ke?t.texSubImage2D(3553,W,0,0,Ae,xe,Ee):t.texImage2D(3553,W,be,Ae,xe,Ee);w.generateMipmaps=!1}else Ke?(xt&&t.texStorage2D(3553,P,be,$.width,$.height),t.texSubImage2D(3553,0,0,0,Ae,xe,$)):t.texImage2D(3553,0,be,Ae,xe,$);b(w,we)&&A(ne),Le.__version=de.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ye(T,w,B){if(w.image.length!==6)return;const ne=ve(T,w),se=w.source;t.bindTexture(34067,T.__webglTexture,33984+B);const de=i.get(se);if(se.version!==de.__version||ne===!0){t.activeTexture(33984+B),n.pixelStorei(37440,w.flipY),n.pixelStorei(37441,w.premultiplyAlpha),n.pixelStorei(3317,w.unpackAlignment),n.pixelStorei(37443,0);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,$=[];for(let W=0;W<6;W++)!Le&&!he?$[W]=v(w.image[W],!1,!0,u):$[W]=he?w.image[W].image:w.image[W],$[W]=Xe(w,$[W]);const we=$[0],Ae=y(we)||a,xe=s.convert(w.format,w.encoding),be=s.convert(w.type),Ee=S(w.internalFormat,xe,be,w.encoding),Ge=a&&w.isVideoTexture!==!0,Ke=de.__version===void 0||ne===!0;let xt=C(w,we,Ae);O(34067,w,Ae);let P;if(Le){Ge&&Ke&&t.texStorage2D(34067,xt,Ee,we.width,we.height);for(let W=0;W<6;W++){P=$[W].mipmaps;for(let te=0;te<P.length;te++){const pe=P[te];w.format!==Dn?xe!==null?Ge?t.compressedTexSubImage2D(34069+W,te,0,0,pe.width,pe.height,xe,pe.data):t.compressedTexImage2D(34069+W,te,Ee,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+W,te,0,0,pe.width,pe.height,xe,be,pe.data):t.texImage2D(34069+W,te,Ee,pe.width,pe.height,0,xe,be,pe.data)}}}else{P=w.mipmaps,Ge&&Ke&&(P.length>0&&xt++,t.texStorage2D(34067,xt,Ee,$[0].width,$[0].height));for(let W=0;W<6;W++)if(he){Ge?t.texSubImage2D(34069+W,0,0,0,$[W].width,$[W].height,xe,be,$[W].data):t.texImage2D(34069+W,0,Ee,$[W].width,$[W].height,0,xe,be,$[W].data);for(let te=0;te<P.length;te++){const Se=P[te].image[W].image;Ge?t.texSubImage2D(34069+W,te+1,0,0,Se.width,Se.height,xe,be,Se.data):t.texImage2D(34069+W,te+1,Ee,Se.width,Se.height,0,xe,be,Se.data)}}else{Ge?t.texSubImage2D(34069+W,0,0,0,xe,be,$[W]):t.texImage2D(34069+W,0,Ee,xe,be,$[W]);for(let te=0;te<P.length;te++){const pe=P[te];Ge?t.texSubImage2D(34069+W,te+1,0,0,xe,be,pe.image[W]):t.texImage2D(34069+W,te+1,Ee,xe,be,pe.image[W])}}}b(w,Ae)&&A(34067),de.__version=se.version,w.onUpdate&&w.onUpdate(w)}T.__version=w.version}function ue(T,w,B,ne,se){const de=s.convert(B.format,B.encoding),Le=s.convert(B.type),he=S(B.internalFormat,de,Le,B.encoding);i.get(w).__hasExternalTextures||(se===32879||se===35866?t.texImage3D(se,0,he,w.width,w.height,w.depth,0,de,Le,null):t.texImage2D(se,0,he,w.width,w.height,0,de,Le,null)),t.bindFramebuffer(36160,T),Me(w)?f.framebufferTexture2DMultisampleEXT(36160,ne,se,i.get(B).__webglTexture,0,Ce(w)):(se===3553||se>=34069&&se<=34074)&&n.framebufferTexture2D(36160,ne,se,i.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(T,w,B){if(n.bindRenderbuffer(36161,T),w.depthBuffer&&!w.stencilBuffer){let ne=33189;if(B||Me(w)){const se=w.depthTexture;se&&se.isDepthTexture&&(se.type===er?ne=36012:se.type===Ki&&(ne=33190));const de=Ce(w);Me(w)?f.renderbufferStorageMultisampleEXT(36161,de,ne,w.width,w.height):n.renderbufferStorageMultisample(36161,de,ne,w.width,w.height)}else n.renderbufferStorage(36161,ne,w.width,w.height);n.framebufferRenderbuffer(36160,36096,36161,T)}else if(w.depthBuffer&&w.stencilBuffer){const ne=Ce(w);B&&Me(w)===!1?n.renderbufferStorageMultisample(36161,ne,35056,w.width,w.height):Me(w)?f.renderbufferStorageMultisampleEXT(36161,ne,35056,w.width,w.height):n.renderbufferStorage(36161,34041,w.width,w.height),n.framebufferRenderbuffer(36160,33306,36161,T)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let se=0;se<ne.length;se++){const de=ne[se],Le=s.convert(de.format,de.encoding),he=s.convert(de.type),$=S(de.internalFormat,Le,he,de.encoding),we=Ce(w);B&&Me(w)===!1?n.renderbufferStorageMultisample(36161,we,$,w.width,w.height):Me(w)?f.renderbufferStorageMultisampleEXT(36161,we,$,w.width,w.height):n.renderbufferStorage(36161,$,w.width,w.height)}}n.bindRenderbuffer(36161,null)}function Z(T,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,se=Ce(w);if(w.depthTexture.format===ir)Me(w)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ne,0,se):n.framebufferTexture2D(36160,36096,3553,ne,0);else if(w.depthTexture.format===cs)Me(w)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ne,0,se):n.framebufferTexture2D(36160,33306,3553,ne,0);else throw new Error("Unknown depthTexture format")}function Y(T){const w=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Z(w.__webglFramebuffer,T)}else if(B){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=n.createRenderbuffer(),ze(w.__webglDepthbuffer[ne],T,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),ze(w.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function ae(T,w,B){const ne=i.get(T);w!==void 0&&ue(ne.__webglFramebuffer,T,T.texture,36064,3553),B!==void 0&&Y(T)}function _e(T){const w=T.texture,B=i.get(T),ne=i.get(w);T.addEventListener("dispose",K),T.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=w.version,o.memory.textures++);const se=T.isWebGLCubeRenderTarget===!0,de=T.isWebGLMultipleRenderTargets===!0,Le=y(T)||a;if(se){B.__webglFramebuffer=[];for(let he=0;he<6;he++)B.__webglFramebuffer[he]=n.createFramebuffer()}else{if(B.__webglFramebuffer=n.createFramebuffer(),de)if(r.drawBuffers){const he=T.texture;for(let $=0,we=he.length;$<we;$++){const Ae=i.get(he[$]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Me(T)===!1){const he=de?w:[w];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let $=0;$<he.length;$++){const we=he[$];B.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(36161,B.__webglColorRenderbuffer[$]);const Ae=s.convert(we.format,we.encoding),xe=s.convert(we.type),be=S(we.internalFormat,Ae,xe,we.encoding,T.isXRRenderTarget===!0),Ee=Ce(T);n.renderbufferStorageMultisample(36161,Ee,be,T.width,T.height),n.framebufferRenderbuffer(36160,36064+$,36161,B.__webglColorRenderbuffer[$])}n.bindRenderbuffer(36161,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(se){t.bindTexture(34067,ne.__webglTexture),O(34067,w,Le);for(let he=0;he<6;he++)ue(B.__webglFramebuffer[he],T,w,36064,34069+he);b(w,Le)&&A(34067),t.unbindTexture()}else if(de){const he=T.texture;for(let $=0,we=he.length;$<we;$++){const Ae=he[$],xe=i.get(Ae);t.bindTexture(3553,xe.__webglTexture),O(3553,Ae,Le),ue(B.__webglFramebuffer,T,Ae,36064+$,3553),b(Ae,Le)&&A(3553)}t.unbindTexture()}else{let he=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?he=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),O(he,w,Le),ue(B.__webglFramebuffer,T,w,36064,he),b(w,Le)&&A(he),t.unbindTexture()}T.depthBuffer&&Y(T)}function ce(T){const w=y(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0,se=B.length;ne<se;ne++){const de=B[ne];if(b(de,w)){const Le=T.isWebGLCubeRenderTarget?34067:3553,he=i.get(de).__webglTexture;t.bindTexture(Le,he),A(Le),t.unbindTexture()}}}function Pe(T){if(a&&T.samples>0&&Me(T)===!1){const w=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,ne=T.height;let se=16384;const de=[],Le=T.stencilBuffer?33306:36096,he=i.get(T),$=T.isWebGLMultipleRenderTargets===!0;if($)for(let we=0;we<w.length;we++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let we=0;we<w.length;we++){de.push(36064+we),T.depthBuffer&&de.push(Le);const Ae=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ae===!1&&(T.depthBuffer&&(se|=256),T.stencilBuffer&&(se|=1024)),$&&n.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[we]),Ae===!0&&(n.invalidateFramebuffer(36008,[Le]),n.invalidateFramebuffer(36009,[Le])),$){const xe=i.get(w[we]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,xe,0)}n.blitFramebuffer(0,0,B,ne,0,0,B,ne,se,9728),m&&n.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),$)for(let we=0;we<w.length;we++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+we,36161,he.__webglColorRenderbuffer[we]);const Ae=i.get(w[we]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+we,3553,Ae,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function Ce(T){return Math.min(d,T.samples)}function Me(T){const w=i.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(T){const w=o.render.frame;x.get(T)!==w&&(x.set(T,w),T.update())}function Xe(T,w){const B=T.encoding,ne=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Fc||B!==fr&&(B===Je?a===!1?e.has("EXT_sRGB")===!0&&ne===Dn?(T.format=Fc,T.minFilter=_n,T.generateMipmaps=!1):w=Hg.sRGBToLinear(w):(ne!==Dn||se!==cr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),w}this.allocateTextureUnit=R,this.resetTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=ie,this.setTexture3D=z,this.setTextureCube=q,this.rebindTextures=ae,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Me}function zw(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===cr)return 5121;if(s===bx)return 32819;if(s===Ax)return 32820;if(s===Ex)return 5120;if(s===Tx)return 5122;if(s===Bg)return 5123;if(s===Cx)return 5124;if(s===Ki)return 5125;if(s===er)return 5126;if(s===xo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Lx)return 6406;if(s===Dn)return 6408;if(s===Px)return 6409;if(s===Rx)return 6410;if(s===ir)return 6402;if(s===cs)return 34041;if(s===Fc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Dx)return 6403;if(s===Ix)return 36244;if(s===Nx)return 33319;if(s===kx)return 33320;if(s===zx)return 36249;if(s===iu||s===ru||s===su||s===ou)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===iu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===iu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ru)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===su)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ou)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dh||s===hh||s===ph||s===mh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===dh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ph)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===mh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Fx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gh||s===vh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===gh)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_h||s===xh||s===yh||s===Sh||s===Mh||s===wh||s===Eh||s===Th||s===Ch||s===bh||s===Ah||s===Lh||s===Ph||s===Rh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===_h)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===xh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===yh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Eh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Th)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ah)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ph)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rh)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===au)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===au)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ox||s===Dh||s===Ih||s===Nh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===au)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Dh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ih)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===es?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Fw extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vs extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ow={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,i),g=this._getHandJoint(u,h);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=p.radius),g.visible=p!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ow)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Uw extends un{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ir,c!==ir&&c!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ir&&(i=Ki),i===void 0&&c===cs&&(i=es),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ot,this.minFilter=l!==void 0?l:Ot,this.flipY=!1,this.generateMipmaps=!1}}class Bw extends ms{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,m=null,x=null;const h=t.getContextAttributes();let p=null,g=null;const _=[],v=[],y=new Set,M=new Map,b=new nn;b.layers.enable(1),b.viewport=new nt;const A=new nn;A.layers.enable(2),A.viewport=new nt;const S=[b,A],C=new Fw;C.layers.enable(1),C.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=_[z];return q===void 0&&(q=new Nu,_[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=_[z];return q===void 0&&(q=new Nu,_[z]=q),q.getGripSpace()},this.getHand=function(z){let q=_[z];return q===void 0&&(q=new Nu,_[z]=q),q.getHandSpace()};function K(z){const q=v.indexOf(z.inputSource);if(q===-1)return;const re=_[q];re!==void 0&&re.dispatchEvent({type:z.type,data:z.inputSource})}function k(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",I);for(let z=0;z<_.length;z++){const q=v[z];q!==null&&(v[z]=null,_[z].disconnect(q))}L=null,V=null,e.setRenderTarget(p),m=null,f=null,d=null,r=null,g=null,ie.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",k),r.addEventListener("inputsourceschange",I),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:m}),g=new dr(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:cr,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let q=null,re=null,oe=null;h.depth&&(oe=h.stencil?35056:33190,q=h.stencil?cs:ir,re=h.stencil?es:Ki);const O={colorFormat:32856,depthFormat:oe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(O),r.updateRenderState({layers:[f]}),g=new dr(f.textureWidth,f.textureHeight,{format:Dn,type:cr,depthTexture:new Uw(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const ve=e.properties.get(g);ve.__ignoreDepthValues=f.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function I(z){for(let q=0;q<z.removed.length;q++){const re=z.removed[q],oe=v.indexOf(re);oe>=0&&(v[oe]=null,_[oe].disconnect(re))}for(let q=0;q<z.added.length;q++){const re=z.added[q];let oe=v.indexOf(re);if(oe===-1){for(let ve=0;ve<_.length;ve++)if(ve>=v.length){v.push(re),oe=ve;break}else if(v[ve]===null){v[ve]=re,oe=ve;break}if(oe===-1)break}const O=_[oe];O&&O.connect(re)}}const X=new D,J=new D;function Q(z,q,re){X.setFromMatrixPosition(q.matrixWorld),J.setFromMatrixPosition(re.matrixWorld);const oe=X.distanceTo(J),O=q.projectionMatrix.elements,ve=re.projectionMatrix.elements,ge=O[14]/(O[10]-1),ye=O[14]/(O[10]+1),ue=(O[9]+1)/O[5],ze=(O[9]-1)/O[5],Z=(O[8]-1)/O[0],Y=(ve[8]+1)/ve[0],ae=ge*Z,_e=ge*Y,ce=oe/(-Z+Y),Pe=ce*-Z;q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Pe),z.translateZ(ce),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Ce=ge+ce,Me=ye+ce,Ye=ae-Pe,Xe=_e+(oe-Pe),T=ue*ye/Me*Ce,w=ze*ye/Me*Ce;z.projectionMatrix.makePerspective(Ye,Xe,T,w,Ce,Me)}function R(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;C.near=A.near=b.near=z.near,C.far=A.far=b.far=z.far,(L!==C.near||V!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),L=C.near,V=C.far);const q=z.parent,re=C.cameras;R(C,q);for(let O=0;O<re.length;O++)R(re[O],q);C.matrixWorld.decompose(C.position,C.quaternion,C.scale),z.matrix.copy(C.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const oe=z.children;for(let O=0,ve=oe.length;O<ve;O++)oe[O].updateMatrixWorld(!0);re.length===2?Q(C,b,A):C.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.getPlanes=function(){return y};let U=null;function G(z,q){if(c=q.getViewerPose(u||o),x=q,c!==null){const re=c.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let oe=!1;re.length!==C.cameras.length&&(C.cameras.length=0,oe=!0);for(let O=0;O<re.length;O++){const ve=re[O];let ge=null;if(m!==null)ge=m.getViewport(ve);else{const ue=d.getViewSubImage(f,ve);ge=ue.viewport,O===0&&(e.setRenderTargetTextures(g,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(g))}let ye=S[O];ye===void 0&&(ye=new nn,ye.layers.enable(O),ye.viewport=new nt,S[O]=ye),ye.matrix.fromArray(ve.transform.matrix),ye.projectionMatrix.fromArray(ve.projectionMatrix),ye.viewport.set(ge.x,ge.y,ge.width,ge.height),O===0&&C.matrix.copy(ye.matrix),oe===!0&&C.cameras.push(ye)}}for(let re=0;re<_.length;re++){const oe=v[re],O=_[re];oe!==null&&O!==void 0&&O.update(oe,q,u||o)}if(U&&U(z,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let re=null;for(const oe of y)q.detectedPlanes.has(oe)||(re===null&&(re=[]),re.push(oe));if(re!==null)for(const oe of re)y.delete(oe),M.delete(oe),i.dispatchEvent({type:"planeremoved",data:oe});for(const oe of q.detectedPlanes)if(!y.has(oe))y.add(oe),M.set(oe,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:oe});else{const O=M.get(oe);oe.lastChangedTime>O&&(M.set(oe,oe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:oe}))}}x=null}const ie=new Kg;ie.setAnimationLoop(G),this.setAnimationLoop=function(z){U=z},this.dispose=function(){}}}function Vw(n,e){function t(h,p){p.color.getRGB(h.fogColor.value,Zg(n)),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function i(h,p,g,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),c(h,p)):p.isMeshPhongMaterial?(r(h,p),u(h,p)):p.isMeshStandardMaterial?(r(h,p),d(h,p),p.isMeshPhysicalMaterial&&f(h,p,v)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),x(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,g,_):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===ln&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===ln&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const g=e.get(p).envMap;if(g&&(h.envMap.value=g,h.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const y=n.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*y}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix));let v;p.aoMap?v=p.aoMap:p.lightMap&&(v=p.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uv2Transform.value.copy(v.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,g,_){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*g,h.scale.value=_*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let g;p.map?g=p.map:p.alphaMap&&(g=p.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),h.uvTransform.value.copy(g.matrix))}function u(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function c(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function d(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function f(h,p,g){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ln&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function x(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Gw(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(x(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",p));const M=v.program;i.updateUBOMapping(_,M);const b=e.render.frame;s[_.id]!==b&&(f(_),s[_.id]=b)}function c(_){const v=d();_.__bindingPointIndex=v;const y=n.createBuffer(),M=_.__size,b=_.usage;return n.bindBuffer(35345,y),n.bufferData(35345,M,b),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const v=r[_.id],y=_.uniforms,M=_.__cache;n.bindBuffer(35345,v);for(let b=0,A=y.length;b<A;b++){const S=y[b];if(m(S,b,M)===!0){const C=S.__offset,L=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let K=0;K<L.length;K++){const k=L[K],I=h(k);typeof k=="number"?(S.__data[0]=k,n.bufferSubData(35345,C+V,S.__data)):k.isMatrix3?(S.__data[0]=k.elements[0],S.__data[1]=k.elements[1],S.__data[2]=k.elements[2],S.__data[3]=k.elements[0],S.__data[4]=k.elements[3],S.__data[5]=k.elements[4],S.__data[6]=k.elements[5],S.__data[7]=k.elements[0],S.__data[8]=k.elements[6],S.__data[9]=k.elements[7],S.__data[10]=k.elements[8],S.__data[11]=k.elements[0]):(k.toArray(S.__data,V),V+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,C,S.__data)}}n.bindBuffer(35345,null)}function m(_,v,y){const M=_.value;if(y[v]===void 0){if(typeof M=="number")y[v]=M;else{const b=Array.isArray(M)?M:[M],A=[];for(let S=0;S<b.length;S++)A.push(b[S].clone());y[v]=A}return!0}else if(typeof M=="number"){if(y[v]!==M)return y[v]=M,!0}else{const b=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(M)?M:[M];for(let S=0;S<b.length;S++){const C=b[S];if(C.equals(A[S])===!1)return C.copy(A[S]),!0}}return!1}function x(_){const v=_.uniforms;let y=0;const M=16;let b=0;for(let A=0,S=v.length;A<S;A++){const C=v[A],L={boundary:0,storage:0},V=Array.isArray(C.value)?C.value:[C.value];for(let K=0,k=V.length;K<k;K++){const I=V[K],X=h(I);L.boundary+=X.boundary,L.storage+=X.storage}if(C.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,A>0){b=y%M;const K=M-b;b!==0&&K-L.boundary<0&&(y+=M-b,C.__offset=y)}y+=L.storage}return b=y%M,b>0&&(y+=M-b),_.__size=y,_.__cache={},this}function h(_){const v={boundary:0,storage:0};return typeof _=="number"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function g(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function Ww(){const n=nl("canvas");return n.style.display="block",n}function r0(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:Ww(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",u=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=n.alpha!==void 0?n.alpha:!1;let d=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fr,this.physicallyCorrectLights=!1,this.toneMapping=ri,this.toneMappingExposure=1;const h=this;let p=!1,g=0,_=0,v=null,y=-1,M=null;const b=new nt,A=new nt;let S=null,C=e.width,L=e.height,V=1,K=null,k=null;const I=new nt(0,0,C,L),X=new nt(0,0,C,L);let J=!1;const Q=new Bf;let R=!1,U=!1,G=null;const ie=new ut,z=new fe,q=new D,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return v===null?V:1}let O=t;function ve(E,F){for(let H=0;H<E.length;H++){const N=E[H],j=e.getContext(N,F);if(j!==null)return j}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ff}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),O===null){const F=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&F.shift(),O=ve(F,E),O===null)throw ve(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ge,ye,ue,ze,Z,Y,ae,_e,ce,Pe,Ce,Me,Ye,Xe,T,w,B,ne,se,de,Le,he,$,we;function Ae(){ge=new eM(O),ye=new qS(O,ge,n),ge.init(ye),he=new zw(O,ge,ye),ue=new Nw(O,ge,ye),ze=new iM,Z=new yw,Y=new kw(O,ge,ue,Z,ye,he,ze),ae=new YS(h),_e=new KS(h),ce=new fy(O,ye),$=new XS(O,ge,ce,ye),Pe=new tM(O,ce,ze,$),Ce=new aM(O,Pe,ce,ze),se=new oM(O,ye,Y),w=new $S(Z),Me=new xw(h,ae,_e,ge,ye,$,w),Ye=new Vw(h,Z),Xe=new Mw,T=new Aw(ge,ye),ne=new HS(h,ae,_e,ue,Ce,c,o),B=new Iw(h,Ce,ye),we=new Gw(O,ze,ye,ue),de=new jS(O,ge,ze,ye),Le=new nM(O,ge,ze,ye),ze.programs=Me.programs,h.capabilities=ye,h.extensions=ge,h.properties=Z,h.renderLists=Xe,h.shadowMap=B,h.state=ue,h.info=ze}Ae();const xe=new Bw(h,O);this.xr=xe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=ge.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ge.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(C,L,!1))},this.getSize=function(E){return E.set(C,L)},this.setSize=function(E,F,H){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=E,L=F,e.width=Math.floor(E*V),e.height=Math.floor(F*V),H!==!1&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(C*V,L*V).floor()},this.setDrawingBufferSize=function(E,F,H){C=E,L=F,V=H,e.width=Math.floor(E*H),e.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,F,H,N){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,F,H,N),ue.viewport(b.copy(I).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(X)},this.setScissor=function(E,F,H,N){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,F,H,N),ue.scissor(A.copy(X).multiplyScalar(V).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(E){ue.setScissorTest(J=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){k=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,F=!0,H=!0){let N=0;E&&(N|=16384),F&&(N|=256),H&&(N|=1024),O.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),Xe.dispose(),T.dispose(),Z.dispose(),ae.dispose(),_e.dispose(),Ce.dispose(),$.dispose(),we.dispose(),Me.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",pe),xe.removeEventListener("sessionend",Se),G&&(G.dispose(),G=null),He.stop()};function be(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=ze.autoReset,F=B.enabled,H=B.autoUpdate,N=B.needsUpdate,j=B.type;Ae(),ze.autoReset=E,B.enabled=F,B.autoUpdate=H,B.needsUpdate=N,B.type=j}function Ge(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ke(E){const F=E.target;F.removeEventListener("dispose",Ke),xt(F)}function xt(E){P(E),Z.remove(E)}function P(E){const F=Z.get(E).programs;F!==void 0&&(F.forEach(function(H){Me.releaseProgram(H)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,N,j,Te){F===null&&(F=re);const Re=j.isMesh&&j.matrixWorld.determinant()<0,Ie=h0(E,F,H,N,j);ue.setMaterial(N,Re);let Ne=H.index,We=1;N.wireframe===!0&&(Ne=Pe.getWireframeAttribute(H),We=2);const Oe=H.drawRange,Ue=H.attributes.position;let ct=Oe.start*We,Zt=(Oe.start+Oe.count)*We;Te!==null&&(ct=Math.max(ct,Te.start*We),Zt=Math.min(Zt,(Te.start+Te.count)*We)),Ne!==null?(ct=Math.max(ct,0),Zt=Math.min(Zt,Ne.count)):Ue!=null&&(ct=Math.max(ct,0),Zt=Math.min(Zt,Ue.count));const jn=Zt-ct;if(jn<0||jn===1/0)return;$.setup(j,N,Ie,H,Ne);let Ui,ft=de;if(Ne!==null&&(Ui=ce.get(Ne),ft=Le,ft.setIndex(Ui)),j.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*oe()),ft.setMode(1)):ft.setMode(4);else if(j.isLine){let Be=N.linewidth;Be===void 0&&(Be=1),ue.setLineWidth(Be*oe()),j.isLineSegments?ft.setMode(1):j.isLineLoop?ft.setMode(2):ft.setMode(3)}else j.isPoints?ft.setMode(0):j.isSprite&&ft.setMode(4);if(j.isInstancedMesh)ft.renderInstances(ct,jn,j.count);else if(H.isInstancedBufferGeometry){const Be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Cl=Math.min(H.instanceCount,Be);ft.renderInstances(ct,jn,Cl)}else ft.render(ct,jn)},this.compile=function(E,F){function H(N,j,Te){N.transparent===!0&&N.side===Mi&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,hn(N,j,Te),N.side=Ni,N.needsUpdate=!0,hn(N,j,Te),N.side=Mi):hn(N,j,Te)}f=T.get(E),f.init(),x.push(f),E.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights(h.physicallyCorrectLights),E.traverse(function(N){const j=N.material;if(j)if(Array.isArray(j))for(let Te=0;Te<j.length;Te++){const Re=j[Te];H(Re,E,N)}else H(j,E,N)}),x.pop(),f=null};let W=null;function te(E){W&&W(E)}function pe(){He.stop()}function Se(){He.start()}const He=new Kg;He.setAnimationLoop(te),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(E){W=E,xe.setAnimationLoop(E),E===null?He.stop():He.start()},xe.addEventListener("sessionstart",pe),xe.addEventListener("sessionend",Se),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(F),F=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,F,v),f=T.get(E,x.length),f.init(),x.push(f),ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q.setFromProjectionMatrix(ie),U=this.localClippingEnabled,R=w.init(this.clippingPlanes,U),d=Xe.get(E,m.length),d.init(),m.push(d),yt(E,F,0,h.sortObjects),d.finish(),h.sortObjects===!0&&d.sort(K,k),R===!0&&w.beginShadows();const H=f.state.shadowsArray;if(B.render(H,E,F),R===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(d,E),f.setupLights(h.physicallyCorrectLights),F.isArrayCamera){const N=F.cameras;for(let j=0,Te=N.length;j<Te;j++){const Re=N[j];At(d,E,Re,Re.viewport)}}else At(d,E,F);v!==null&&(Y.updateMultisampleRenderTarget(v),Y.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(h,E,F),$.resetDefaultState(),y=-1,M=null,x.pop(),x.length>0?f=x[x.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function yt(E,F,H,N){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Q.intersectsSprite(E)){N&&q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);const Re=Ce.update(E),Ie=E.material;Ie.visible&&d.push(E,Re,Ie,H,q.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==ze.render.frame&&(E.skeleton.update(),E.skeleton.frame=ze.render.frame),!E.frustumCulled||Q.intersectsObject(E))){N&&q.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ie);const Re=Ce.update(E),Ie=E.material;if(Array.isArray(Ie)){const Ne=Re.groups;for(let We=0,Oe=Ne.length;We<Oe;We++){const Ue=Ne[We],ct=Ie[Ue.materialIndex];ct&&ct.visible&&d.push(E,Re,ct,H,q.z,Ue)}}else Ie.visible&&d.push(E,Re,Ie,H,q.z,null)}}const Te=E.children;for(let Re=0,Ie=Te.length;Re<Ie;Re++)yt(Te[Re],F,H,N)}function At(E,F,H,N){const j=E.opaque,Te=E.transmissive,Re=E.transparent;f.setupLightsView(H),R===!0&&w.setGlobalState(h.clippingPlanes,H),Te.length>0&&Oi(j,F,H),N&&ue.viewport(b.copy(N)),j.length>0&&et(j,F,H),Te.length>0&&et(Te,F,H),Re.length>0&&et(Re,F,H),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Oi(E,F,H){const N=ye.isWebGL2;G===null&&(G=new dr(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?xo:cr,minFilter:_o,samples:N&&s===!0?4:0})),h.getDrawingBufferSize(z),N?G.setSize(z.x,z.y):G.setSize(Oc(z.x),Oc(z.y));const j=h.getRenderTarget();h.setRenderTarget(G),h.clear();const Te=h.toneMapping;h.toneMapping=ri,et(E,F,H),h.toneMapping=Te,Y.updateMultisampleRenderTarget(G),Y.updateRenderTargetMipmap(G),h.setRenderTarget(j)}function et(E,F,H){const N=F.isScene===!0?F.overrideMaterial:null;for(let j=0,Te=E.length;j<Te;j++){const Re=E[j],Ie=Re.object,Ne=Re.geometry,We=N===null?Re.material:N,Oe=Re.group;Ie.layers.test(H.layers)&&Xn(Ie,F,H,Ne,We,Oe)}}function Xn(E,F,H,N,j,Te){E.onBeforeRender(h,F,H,N,j,Te),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(h,F,H,N,E,Te),j.transparent===!0&&j.side===Mi&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,h.renderBufferDirect(H,F,N,j,E,Te),j.side=Ni,j.needsUpdate=!0,h.renderBufferDirect(H,F,N,j,E,Te),j.side=Mi):h.renderBufferDirect(H,F,N,j,E,Te),E.onAfterRender(h,F,H,N,j,Te)}function hn(E,F,H){F.isScene!==!0&&(F=re);const N=Z.get(E),j=f.state.lights,Te=f.state.shadowsArray,Re=j.state.version,Ie=Me.getParameters(E,j.state,Te,F,H),Ne=Me.getProgramCacheKey(Ie);let We=N.programs;N.environment=E.isMeshStandardMaterial?F.environment:null,N.fog=F.fog,N.envMap=(E.isMeshStandardMaterial?_e:ae).get(E.envMap||N.environment),We===void 0&&(E.addEventListener("dispose",Ke),We=new Map,N.programs=We);let Oe=We.get(Ne);if(Oe!==void 0){if(N.currentProgram===Oe&&N.lightsStateVersion===Re)return qf(E,Ie),Oe}else Ie.uniforms=Me.getUniforms(E),E.onBuild(H,Ie,h),E.onBeforeCompile(Ie,h),Oe=Me.acquireProgram(Ie,Ne),We.set(Ne,Oe),N.uniforms=Ie.uniforms;const Ue=N.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=w.uniform),qf(E,Ie),N.needsLights=m0(E),N.lightsStateVersion=Re,N.needsLights&&(Ue.ambientLightColor.value=j.state.ambient,Ue.lightProbe.value=j.state.probe,Ue.directionalLights.value=j.state.directional,Ue.directionalLightShadows.value=j.state.directionalShadow,Ue.spotLights.value=j.state.spot,Ue.spotLightShadows.value=j.state.spotShadow,Ue.rectAreaLights.value=j.state.rectArea,Ue.ltc_1.value=j.state.rectAreaLTC1,Ue.ltc_2.value=j.state.rectAreaLTC2,Ue.pointLights.value=j.state.point,Ue.pointLightShadows.value=j.state.pointShadow,Ue.hemisphereLights.value=j.state.hemi,Ue.directionalShadowMap.value=j.state.directionalShadowMap,Ue.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ue.spotShadowMap.value=j.state.spotShadowMap,Ue.spotLightMatrix.value=j.state.spotLightMatrix,Ue.spotLightMap.value=j.state.spotLightMap,Ue.pointShadowMap.value=j.state.pointShadowMap,Ue.pointShadowMatrix.value=j.state.pointShadowMatrix);const ct=Oe.getUniforms(),Zt=Ra.seqWithValue(ct.seq,Ue);return N.currentProgram=Oe,N.uniformsList=Zt,Oe}function qf(E,F){const H=Z.get(E);H.outputEncoding=F.outputEncoding,H.instancing=F.instancing,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function h0(E,F,H,N,j){F.isScene!==!0&&(F=re),Y.resetTextureUnits();const Te=F.fog,Re=N.isMeshStandardMaterial?F.environment:null,Ie=v===null?h.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:fr,Ne=(N.isMeshStandardMaterial?_e:ae).get(N.envMap||Re),We=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Oe=!!N.normalMap&&!!H.attributes.tangent,Ue=!!H.morphAttributes.position,ct=!!H.morphAttributes.normal,Zt=!!H.morphAttributes.color,jn=N.toneMapped?h.toneMapping:ri,Ui=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=Ui!==void 0?Ui.length:0,Be=Z.get(N),Cl=f.state.lights;if(R===!0&&(U===!0||E!==M)){const Jt=E===M&&N.id===y;w.setState(N,E,Jt)}let St=!1;N.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Cl.state.version||Be.outputEncoding!==Ie||j.isInstancedMesh&&Be.instancing===!1||!j.isInstancedMesh&&Be.instancing===!0||j.isSkinnedMesh&&Be.skinning===!1||!j.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ne||N.fog===!0&&Be.fog!==Te||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==w.numPlanes||Be.numIntersection!==w.numIntersection)||Be.vertexAlphas!==We||Be.vertexTangents!==Oe||Be.morphTargets!==Ue||Be.morphNormals!==ct||Be.morphColors!==Zt||Be.toneMapping!==jn||ye.isWebGL2===!0&&Be.morphTargetsCount!==ft)&&(St=!0):(St=!0,Be.__version=N.version);let Bi=Be.currentProgram;St===!0&&(Bi=hn(N,F,j));let $f=!1,_s=!1,bl=!1;const Nt=Bi.getUniforms(),Vi=Be.uniforms;if(ue.useProgram(Bi.program)&&($f=!0,_s=!0,bl=!0),N.id!==y&&(y=N.id,_s=!0),$f||M!==E){if(Nt.setValue(O,"projectionMatrix",E.projectionMatrix),ye.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,_s=!0,bl=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Jt=Nt.map.cameraPosition;Jt!==void 0&&Jt.setValue(O,q.setFromMatrixPosition(E.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||j.isSkinnedMesh)&&Nt.setValue(O,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){Nt.setOptional(O,j,"bindMatrix"),Nt.setOptional(O,j,"bindMatrixInverse");const Jt=j.skeleton;Jt&&(ye.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Nt.setValue(O,"boneTexture",Jt.boneTexture,Y),Nt.setValue(O,"boneTextureSize",Jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Al=H.morphAttributes;if((Al.position!==void 0||Al.normal!==void 0||Al.color!==void 0&&ye.isWebGL2===!0)&&se.update(j,H,N,Bi),(_s||Be.receiveShadow!==j.receiveShadow)&&(Be.receiveShadow=j.receiveShadow,Nt.setValue(O,"receiveShadow",j.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Vi.envMap.value=Ne,Vi.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),_s&&(Nt.setValue(O,"toneMappingExposure",h.toneMappingExposure),Be.needsLights&&p0(Vi,bl),Te&&N.fog===!0&&Ye.refreshFogUniforms(Vi,Te),Ye.refreshMaterialUniforms(Vi,N,V,L,G),Ra.upload(O,Be.uniformsList,Vi,Y)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ra.upload(O,Be.uniformsList,Vi,Y),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Nt.setValue(O,"center",j.center),Nt.setValue(O,"modelViewMatrix",j.modelViewMatrix),Nt.setValue(O,"normalMatrix",j.normalMatrix),Nt.setValue(O,"modelMatrix",j.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Jt=N.uniformsGroups;for(let Ll=0,g0=Jt.length;Ll<g0;Ll++)if(ye.isWebGL2){const Yf=Jt[Ll];we.update(Yf,Bi),we.bind(Yf,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function p0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function m0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,F,H){Z.get(E.texture).__webglTexture=F,Z.get(E.depthTexture).__webglTexture=H;const N=Z.get(E);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=H===void 0,N.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const H=Z.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,H=0){v=E,g=F,_=H;let N=!0,j=null,Te=!1,Re=!1;if(E){const Ne=Z.get(E);Ne.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),N=!1):Ne.__webglFramebuffer===void 0?Y.setupRenderTarget(E):Ne.__hasExternalTextures&&Y.rebindTextures(E,Z.get(E.texture).__webglTexture,Z.get(E.depthTexture).__webglTexture);const We=E.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);const Oe=Z.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=Oe[F],Te=!0):ye.isWebGL2&&E.samples>0&&Y.useMultisampledRTT(E)===!1?j=Z.get(E).__webglMultisampledFramebuffer:j=Oe,b.copy(E.viewport),A.copy(E.scissor),S=E.scissorTest}else b.copy(I).multiplyScalar(V).floor(),A.copy(X).multiplyScalar(V).floor(),S=J;if(ue.bindFramebuffer(36160,j)&&ye.drawBuffers&&N&&ue.drawBuffers(E,j),ue.viewport(b),ue.scissor(A),ue.setScissorTest(S),Te){const Ne=Z.get(E.texture);O.framebufferTexture2D(36160,36064,34069+F,Ne.__webglTexture,H)}else if(Re){const Ne=Z.get(E.texture),We=F||0;O.framebufferTextureLayer(36160,36064,Ne.__webglTexture,H||0,We)}y=-1},this.readRenderTargetPixels=function(E,F,H,N,j,Te,Re){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Z.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Ie=Ie[Re]),Ie){ue.bindFramebuffer(36160,Ie);try{const Ne=E.texture,We=Ne.format,Oe=Ne.type;if(We!==Dn&&he.convert(We)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Oe===xo&&(ge.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Oe!==cr&&he.convert(Oe)!==O.getParameter(35738)&&!(Oe===er&&(ye.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-N&&H>=0&&H<=E.height-j&&O.readPixels(F,H,N,j,he.convert(We),he.convert(Oe),Te)}finally{const Ne=v!==null?Z.get(v).__webglFramebuffer:null;ue.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(E,F,H=0){const N=Math.pow(2,-H),j=Math.floor(F.image.width*N),Te=Math.floor(F.image.height*N);Y.setTexture2D(F,0),O.copyTexSubImage2D(3553,H,0,0,E.x,E.y,j,Te),ue.unbindTexture()},this.copyTextureToTexture=function(E,F,H,N=0){const j=F.image.width,Te=F.image.height,Re=he.convert(H.format),Ie=he.convert(H.type);Y.setTexture2D(H,0),O.pixelStorei(37440,H.flipY),O.pixelStorei(37441,H.premultiplyAlpha),O.pixelStorei(3317,H.unpackAlignment),F.isDataTexture?O.texSubImage2D(3553,N,E.x,E.y,j,Te,Re,Ie,F.image.data):F.isCompressedTexture?O.compressedTexSubImage2D(3553,N,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,Re,F.mipmaps[0].data):O.texSubImage2D(3553,N,E.x,E.y,Re,Ie,F.image),N===0&&H.generateMipmaps&&O.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(E,F,H,N,j=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=E.max.x-E.min.x+1,Re=E.max.y-E.min.y+1,Ie=E.max.z-E.min.z+1,Ne=he.convert(N.format),We=he.convert(N.type);let Oe;if(N.isData3DTexture)Y.setTexture3D(N,0),Oe=32879;else if(N.isDataArrayTexture)Y.setTexture2DArray(N,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,N.flipY),O.pixelStorei(37441,N.premultiplyAlpha),O.pixelStorei(3317,N.unpackAlignment);const Ue=O.getParameter(3314),ct=O.getParameter(32878),Zt=O.getParameter(3316),jn=O.getParameter(3315),Ui=O.getParameter(32877),ft=H.isCompressedTexture?H.mipmaps[0]:H.image;O.pixelStorei(3314,ft.width),O.pixelStorei(32878,ft.height),O.pixelStorei(3316,E.min.x),O.pixelStorei(3315,E.min.y),O.pixelStorei(32877,E.min.z),H.isDataTexture||H.isData3DTexture?O.texSubImage3D(Oe,j,F.x,F.y,F.z,Te,Re,Ie,Ne,We,ft.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Oe,j,F.x,F.y,F.z,Te,Re,Ie,Ne,ft.data)):O.texSubImage3D(Oe,j,F.x,F.y,F.z,Te,Re,Ie,Ne,We,ft),O.pixelStorei(3314,Ue),O.pixelStorei(32878,ct),O.pixelStorei(3316,Zt),O.pixelStorei(3315,jn),O.pixelStorei(32877,Ui),j===0&&N.generateMipmaps&&O.generateMipmap(Oe),ue.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){g=0,_=0,v=null,ue.reset(),$.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Hw extends r0{}Hw.prototype.isWebGL1Renderer=!0;class Xw extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,m=(o-c)/f;return(r+m)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new fe:new D);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new D,r=[],s=[],o=[],a=new D,l=new ut;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new D)}s[0]=new D,o[0]=new D;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Ut(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(r[m],s[m])}if(t===!0){let m=Math.acos(Ut(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Wf extends Hn{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const i=t||new fe,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,m=u-this.aY;l=f*c-m*d+this.aX,u=f*d+m*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jw extends Wf{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hf(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,d){let f=(o-s)/u-(a-s)/(u+c)+(a-o)/c,m=(a-o)/c-(l-o)/(c+d)+(l-a)/d;f*=c,m*=c,r(o,a,f,m)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const ma=new D,ku=new Hf,zu=new Hf,Fu=new Hf;class qw extends Hn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new D){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(ma.subVectors(r[0],r[1]).add(r[0]),u=ma);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(ma.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=ma),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let x=Math.pow(u.distanceToSquared(d),m),h=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(c),m);h<1e-4&&(h=1),x<1e-4&&(x=h),p<1e-4&&(p=h),ku.initNonuniformCatmullRom(u.x,d.x,f.x,c.x,x,h,p),zu.initNonuniformCatmullRom(u.y,d.y,f.y,c.y,x,h,p),Fu.initNonuniformCatmullRom(u.z,d.z,f.z,c.z,x,h,p)}else this.curveType==="catmullrom"&&(ku.initCatmullRom(u.x,d.x,f.x,c.x,this.tension),zu.initCatmullRom(u.y,d.y,f.y,c.y,this.tension),Fu.initCatmullRom(u.z,d.z,f.z,c.z,this.tension));return i.set(ku.calc(l),zu.calc(l),Fu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new D().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vp(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function $w(n,e){const t=1-n;return t*t*e}function Yw(n,e){return 2*(1-n)*n*e}function Zw(n,e){return n*n*e}function Js(n,e,t,i){return $w(n,e)+Yw(n,t)+Zw(n,i)}function Jw(n,e){const t=1-n;return t*t*t*e}function Qw(n,e){const t=1-n;return 3*t*t*n*e}function Kw(n,e){return 3*(1-n)*n*n*e}function e2(n,e){return n*n*n*e}function Qs(n,e,t,i,r){return Jw(n,e)+Qw(n,t)+Kw(n,i)+e2(n,r)}class s0 extends Hn{constructor(e=new fe,t=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new fe){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Qs(e,r.x,s.x,o.x,a.x),Qs(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class t2 extends Hn{constructor(e=new D,t=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Qs(e,r.x,s.x,o.x,a.x),Qs(e,r.y,s.y,o.y,a.y),Qs(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xf extends Hn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new fe;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class n2 extends Hn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class o0 extends Hn{constructor(e=new fe,t=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new fe){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Js(e,r.x,s.x,o.x),Js(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class i2 extends Hn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Js(e,r.x,s.x,o.x),Js(e,r.y,s.y,o.y),Js(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a0 extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(vp(a,l.x,u.x,c.x,d.x),vp(a,l.y,u.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new fe().fromArray(r))}return this}}var l0=Object.freeze({__proto__:null,ArcCurve:jw,CatmullRomCurve3:qw,CubicBezierCurve:s0,CubicBezierCurve3:t2,EllipseCurve:Wf,LineCurve:Xf,LineCurve3:n2,QuadraticBezierCurve:o0,QuadraticBezierCurve3:i2,SplineCurve:a0});class r2 extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Xf(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new l0[r.type]().fromJSON(r))}return this}}class _p extends r2{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Xf(this.currentPoint.clone(),new fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new o0(this.currentPoint.clone(),new fe(e,t),new fe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new s0(this.currentPoint.clone(),new fe(e,t),new fe(i,r),new fe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new a0(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,t+c,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const u=new Wf(e,t,i,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class u0 extends _p{constructor(e){super(e),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new _p().fromJSON(r))}return this}}const s2={triangulate:function(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=c0(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,d,f,m;if(i&&(s=c2(n,e,s,t)),n.length>80*t){a=u=n[0],l=c=n[1];for(let x=t;x<r;x+=t)d=n[x],f=n[x+1],d<a&&(a=d),f<l&&(l=f),d>u&&(u=d),f>c&&(c=f);m=Math.max(u-a,c-l),m=m!==0?32767/m:0}return So(s,o,t,a,l,m,0),o}};function c0(n,e,t,i,r){let s,o;if(r===S2(n,e,t,i)>0)for(s=e;s<t;s+=i)o=xp(s,n[s],n[s+1],o);else for(s=t-i;s>=e;s-=i)o=xp(s,n[s],n[s+1],o);return o&&Tl(o,o.next)&&(wo(o),o=o.next),o}function pr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Tl(t,t.next)||rt(t.prev,t,t.next)===0)){if(wo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function So(n,e,t,i,r,s,o){if(!n)return;!o&&s&&m2(n,i,r,s);let a=n,l,u;for(;n.prev!==n.next;){if(l=n.prev,u=n.next,s?a2(n,i,r,s):o2(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(u.i/t|0),wo(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=l2(pr(n),e,t),So(n,e,t,i,r,s,2)):o===2&&u2(n,e,t,i,r,s):So(pr(n),e,t,i,r,s,1);break}}}function o2(n){const e=n.prev,t=n,i=n.next;if(rt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,d=a<l?a<u?a:u:l<u?l:u,f=r>s?r>o?r:o:s>o?s:o,m=a>l?a>u?a:u:l>u?l:u;let x=i.next;for(;x!==e;){if(x.x>=c&&x.x<=f&&x.y>=d&&x.y<=m&&jr(r,a,s,l,o,u,x.x,x.y)&&rt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function a2(n,e,t,i){const r=n.prev,s=n,o=n.next;if(rt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,d=s.y,f=o.y,m=a<l?a<u?a:u:l<u?l:u,x=c<d?c<f?c:f:d<f?d:f,h=a>l?a>u?a:u:l>u?l:u,p=c>d?c>f?c:f:d>f?d:f,g=Bc(m,x,e,t,i),_=Bc(h,p,e,t,i);let v=n.prevZ,y=n.nextZ;for(;v&&v.z>=g&&y&&y.z<=_;){if(v.x>=m&&v.x<=h&&v.y>=x&&v.y<=p&&v!==r&&v!==o&&jr(a,c,l,d,u,f,v.x,v.y)&&rt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=m&&y.x<=h&&y.y>=x&&y.y<=p&&y!==r&&y!==o&&jr(a,c,l,d,u,f,y.x,y.y)&&rt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=m&&v.x<=h&&v.y>=x&&v.y<=p&&v!==r&&v!==o&&jr(a,c,l,d,u,f,v.x,v.y)&&rt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=_;){if(y.x>=m&&y.x<=h&&y.y>=x&&y.y<=p&&y!==r&&y!==o&&jr(a,c,l,d,u,f,y.x,y.y)&&rt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function l2(n,e,t){let i=n;do{const r=i.prev,s=i.next.next;!Tl(r,s)&&f0(r,i,i.next,s)&&Mo(r,s)&&Mo(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),wo(i),wo(i.next),i=n=s),i=i.next}while(i!==n);return pr(i)}function u2(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_2(o,a)){let l=d0(o,a);o=pr(o,o.next),l=pr(l,l.next),So(o,e,t,i,r,s,0),So(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function c2(n,e,t,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,u=c0(n,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(v2(u));for(r.sort(f2),s=0;s<r.length;s++)t=d2(r[s],t);return t}function f2(n,e){return n.x-e.x}function d2(n,e){const t=h2(n,e);if(!t)return e;const i=d0(t,n);return pr(i,i.next),pr(t,t.next)}function h2(n,e){let t=e,i=-1/0,r;const s=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>i&&(i=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&jr(o<u?s:i,o,l,u,o<u?i:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),Mo(t,n)&&(d<c||d===c&&(t.x>r.x||t.x===r.x&&p2(r,t)))&&(r=t,c=d)),t=t.next;while(t!==a);return r}function p2(n,e){return rt(n.prev,n,e.prev)<0&&rt(e.next,n,n.next)<0}function m2(n,e,t,i){let r=n;do r.z===0&&(r.z=Bc(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,g2(r)}function g2(n){let e,t,i,r,s,o,a,l,u=1;do{for(t=n,n=null,s=null,o=0;t;){for(o++,i=t,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,u*=2}while(o>1);return n}function Bc(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function v2(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function jr(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function _2(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!x2(n,e)&&(Mo(n,e)&&Mo(e,n)&&y2(n,e)&&(rt(n.prev,n,e.prev)||rt(n,e.prev,e))||Tl(n,e)&&rt(n.prev,n,n.next)>0&&rt(e.prev,e,e.next)>0)}function rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Tl(n,e){return n.x===e.x&&n.y===e.y}function f0(n,e,t,i){const r=va(rt(n,e,t)),s=va(rt(n,e,i)),o=va(rt(t,i,n)),a=va(rt(t,i,e));return!!(r!==s&&o!==a||r===0&&ga(n,t,e)||s===0&&ga(n,i,e)||o===0&&ga(t,n,i)||a===0&&ga(t,e,i))}function ga(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function va(n){return n>0?1:n<0?-1:0}function x2(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&f0(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Mo(n,e){return rt(n.prev,n,n.next)<0?rt(n,e,n.next)>=0&&rt(n,n.prev,e)>=0:rt(n,e,n.prev)<0||rt(n,n.next,e)<0}function y2(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function d0(n,e){const t=new Vc(n.i,n.x,n.y),i=new Vc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function xp(n,e,t,i){const r=new Vc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function wo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vc(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S2(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class Ks{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Ks.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];yp(e),Sp(i,e);let o=e.length;t.forEach(yp);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Sp(i,t[l]);const a=s2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function yp(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Sp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class jf extends ci{constructor(e=new u0([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new Sn(r,3)),this.setAttribute("uv",new Sn(s,2)),this.computeVertexNormals();function o(a){const l=[],u=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,h=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:M2;let v,y=!1,M,b,A,S;g&&(v=g.getSpacedPoints(c),y=!0,f=!1,M=g.computeFrenetFrames(c,!1),b=new D,A=new D,S=new D),f||(p=0,m=0,x=0,h=0);const C=a.extractPoints(u);let L=C.shape;const V=C.holes;if(!Ks.isClockWise(L)){L=L.reverse();for(let Z=0,Y=V.length;Z<Y;Z++){const ae=V[Z];Ks.isClockWise(ae)&&(V[Z]=ae.reverse())}}const k=Ks.triangulateShape(L,V),I=L;for(let Z=0,Y=V.length;Z<Y;Z++){const ae=V[Z];L=L.concat(ae)}function X(Z,Y,ae){return Y||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().multiplyScalar(ae).add(Z)}const J=L.length,Q=k.length;function R(Z,Y,ae){let _e,ce,Pe;const Ce=Z.x-Y.x,Me=Z.y-Y.y,Ye=ae.x-Z.x,Xe=ae.y-Z.y,T=Ce*Ce+Me*Me,w=Ce*Xe-Me*Ye;if(Math.abs(w)>Number.EPSILON){const B=Math.sqrt(T),ne=Math.sqrt(Ye*Ye+Xe*Xe),se=Y.x-Me/B,de=Y.y+Ce/B,Le=ae.x-Xe/ne,he=ae.y+Ye/ne,$=((Le-se)*Xe-(he-de)*Ye)/(Ce*Xe-Me*Ye);_e=se+Ce*$-Z.x,ce=de+Me*$-Z.y;const we=_e*_e+ce*ce;if(we<=2)return new fe(_e,ce);Pe=Math.sqrt(we/2)}else{let B=!1;Ce>Number.EPSILON?Ye>Number.EPSILON&&(B=!0):Ce<-Number.EPSILON?Ye<-Number.EPSILON&&(B=!0):Math.sign(Me)===Math.sign(Xe)&&(B=!0),B?(_e=-Me,ce=Ce,Pe=Math.sqrt(T)):(_e=Ce,ce=Me,Pe=Math.sqrt(T/2))}return new fe(_e/Pe,ce/Pe)}const U=[];for(let Z=0,Y=I.length,ae=Y-1,_e=Z+1;Z<Y;Z++,ae++,_e++)ae===Y&&(ae=0),_e===Y&&(_e=0),U[Z]=R(I[Z],I[ae],I[_e]);const G=[];let ie,z=U.concat();for(let Z=0,Y=V.length;Z<Y;Z++){const ae=V[Z];ie=[];for(let _e=0,ce=ae.length,Pe=ce-1,Ce=_e+1;_e<ce;_e++,Pe++,Ce++)Pe===ce&&(Pe=0),Ce===ce&&(Ce=0),ie[_e]=R(ae[_e],ae[Pe],ae[Ce]);G.push(ie),z=z.concat(ie)}for(let Z=0;Z<p;Z++){const Y=Z/p,ae=m*Math.cos(Y*Math.PI/2),_e=x*Math.sin(Y*Math.PI/2)+h;for(let ce=0,Pe=I.length;ce<Pe;ce++){const Ce=X(I[ce],U[ce],_e);ve(Ce.x,Ce.y,-ae)}for(let ce=0,Pe=V.length;ce<Pe;ce++){const Ce=V[ce];ie=G[ce];for(let Me=0,Ye=Ce.length;Me<Ye;Me++){const Xe=X(Ce[Me],ie[Me],_e);ve(Xe.x,Xe.y,-ae)}}}const q=x+h;for(let Z=0;Z<J;Z++){const Y=f?X(L[Z],z[Z],q):L[Z];y?(A.copy(M.normals[0]).multiplyScalar(Y.x),b.copy(M.binormals[0]).multiplyScalar(Y.y),S.copy(v[0]).add(A).add(b),ve(S.x,S.y,S.z)):ve(Y.x,Y.y,0)}for(let Z=1;Z<=c;Z++)for(let Y=0;Y<J;Y++){const ae=f?X(L[Y],z[Y],q):L[Y];y?(A.copy(M.normals[Z]).multiplyScalar(ae.x),b.copy(M.binormals[Z]).multiplyScalar(ae.y),S.copy(v[Z]).add(A).add(b),ve(S.x,S.y,S.z)):ve(ae.x,ae.y,d/c*Z)}for(let Z=p-1;Z>=0;Z--){const Y=Z/p,ae=m*Math.cos(Y*Math.PI/2),_e=x*Math.sin(Y*Math.PI/2)+h;for(let ce=0,Pe=I.length;ce<Pe;ce++){const Ce=X(I[ce],U[ce],_e);ve(Ce.x,Ce.y,d+ae)}for(let ce=0,Pe=V.length;ce<Pe;ce++){const Ce=V[ce];ie=G[ce];for(let Me=0,Ye=Ce.length;Me<Ye;Me++){const Xe=X(Ce[Me],ie[Me],_e);y?ve(Xe.x,Xe.y+v[c-1].y,v[c-1].x+ae):ve(Xe.x,Xe.y,d+ae)}}}re(),oe();function re(){const Z=r.length/3;if(f){let Y=0,ae=J*Y;for(let _e=0;_e<Q;_e++){const ce=k[_e];ge(ce[2]+ae,ce[1]+ae,ce[0]+ae)}Y=c+p*2,ae=J*Y;for(let _e=0;_e<Q;_e++){const ce=k[_e];ge(ce[0]+ae,ce[1]+ae,ce[2]+ae)}}else{for(let Y=0;Y<Q;Y++){const ae=k[Y];ge(ae[2],ae[1],ae[0])}for(let Y=0;Y<Q;Y++){const ae=k[Y];ge(ae[0]+J*c,ae[1]+J*c,ae[2]+J*c)}}i.addGroup(Z,r.length/3-Z,0)}function oe(){const Z=r.length/3;let Y=0;O(I,Y),Y+=I.length;for(let ae=0,_e=V.length;ae<_e;ae++){const ce=V[ae];O(ce,Y),Y+=ce.length}i.addGroup(Z,r.length/3-Z,1)}function O(Z,Y){let ae=Z.length;for(;--ae>=0;){const _e=ae;let ce=ae-1;ce<0&&(ce=Z.length-1);for(let Pe=0,Ce=c+p*2;Pe<Ce;Pe++){const Me=J*Pe,Ye=J*(Pe+1),Xe=Y+_e+Me,T=Y+ce+Me,w=Y+ce+Ye,B=Y+_e+Ye;ye(Xe,T,w,B)}}}function ve(Z,Y,ae){l.push(Z),l.push(Y),l.push(ae)}function ge(Z,Y,ae){ue(Z),ue(Y),ue(ae);const _e=r.length/3,ce=_.generateTopUV(i,r,_e-3,_e-2,_e-1);ze(ce[0]),ze(ce[1]),ze(ce[2])}function ye(Z,Y,ae,_e){ue(Z),ue(Y),ue(_e),ue(Y),ue(ae),ue(_e);const ce=r.length/3,Pe=_.generateSideWallUV(i,r,ce-6,ce-3,ce-2,ce-1);ze(Pe[0]),ze(Pe[1]),ze(Pe[3]),ze(Pe[1]),ze(Pe[2]),ze(Pe[3])}function ue(Z){r.push(l[Z*3+0]),r.push(l[Z*3+1]),r.push(l[Z*3+2])}function ze(Z){s.push(Z.x),s.push(Z.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return w2(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new l0[r.type]().fromJSON(r)),new jf(i,e.options)}}const M2={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new fe(s,o),new fe(a,l),new fe(u,c)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],u=e[i*3],c=e[i*3+1],d=e[i*3+2],f=e[r*3],m=e[r*3+1],x=e[r*3+2],h=e[s*3],p=e[s*3+1],g=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new fe(o,1-l),new fe(u,1-d),new fe(f,1-x),new fe(h,1-g)]:[new fe(a,1-l),new fe(c,1-d),new fe(m,1-x),new fe(p,1-g)]}};function w2(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class rl extends ci{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new D,f=new D,m=[],x=[],h=[],p=[];for(let g=0;g<=i;g++){const _=[],v=g/i;let y=0;g==0&&o==0?y=.5/t:g==i&&l==Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){const b=M/t;d.x=-e*Math.cos(r+b*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+b*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),f.copy(d).normalize(),h.push(f.x,f.y,f.z),p.push(b+y,1-v),_.push(u++)}c.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){const v=c[g][_+1],y=c[g][_],M=c[g+1][_],b=c[g+1][_+1];(g!==0||o>0)&&m.push(v,y,b),(g!==i-1||l<Math.PI)&&m.push(y,M,b)}this.setIndex(m),this.setAttribute("position",new Sn(x,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(p,2))}static fromJSON(e){return new rl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class E2 extends Ro{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vg,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T2 extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ou=new ut,Mp=new D,wp=new D;class C2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bf,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mp),wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wp),t.updateMatrixWorld(),Ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ep=new ut,Ns=new D,Uu=new D;class b2 extends C2{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ns.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ns),Uu.copy(i.position),Uu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Uu),i.updateMatrixWorld(),r.makeTranslation(-Ns.x,-Ns.y,-Ns.z),Ep.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ep)}}class A2 extends T2{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new b2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ff}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ff);const L2=()=>{window.addEventListener("mousemove",K,!1);const n=new Xw;n.background=new qe(921102);const e=new nn(50,window.innerWidth/window.innerHeight,.1,1e3);e.position.y=10;const t=new r0({antialias:!0});t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement),window.addEventListener("resize",()=>{t.setSize(window.innerWidth,window.innerHeight),e.aspect=window.innerWidth/window.innerHeight,L=window.innerWidth/2,V=window.innerHeight/2,e.updateProjectionMatrix()});const i=new E2({color:64967,transparent:!1,opacity:8});var r=new u0,s=-5,o=-5,a=10,l=17,u=5;r.moveTo(s,o+u),r.lineTo(s,o+l-u),r.quadraticCurveTo(s,o+l,s+u,o+l),r.lineTo(s+a-u,o+l),r.quadraticCurveTo(s+a,o+l,s+a,o+l-u),r.lineTo(s+a,o+u),r.lineTo(s+a/2+a/3,2),r.lineTo(s+a/1.5,l-l),r.lineTo(s+a/2,2),r.lineTo(s+a/3,l-l),r.lineTo(s+a/6,2);var c={steps:1,depth:3,bevelEnabled:!1},d=new jf(r,c),f=new rn(d,i),m=new rl(1.8,32,32),x=new rl(1,32,32),h=new il({color:16053492}),p=new il({color:610758}),g=new rn(x,p);g.position.set(s+3.2,o+11.9,2.5);var _=new rn(x,p);_.position.set(s+7.2,o+11.9,2.5);var v=new rn(m,h);v.position.set(s+3,o+12,1.6);var y=new rn(m,h);y.position.set(s+7,o+12,1.6);var M=new Vs;M.add(f),M.add(v),M.add(y),M.add(_),M.add(g),n.add(M);var b=new A2(16777215,3,100);b.position.set(50,50,50),n.add(b),e.position.z=50;let A=new D,S=50,C=50,L=window.innerWidth/2,V=window.innerHeight/2+100;function K(I){S=I.clientX-L,C=I.clientY-V}function k(){requestAnimationFrame(k),A.x+=(S-A.x)*.3,A.y+=(-C-A.y)*.3,A.z=e.position.z,M.lookAt(A),t.render(n,e)}k()},P2=()=>{const[n,e]=mn.exports.useState(!0);return ke(B_,{children:n&&Xt("div",{className:"cors-modal",children:[ke("h2",{children:"This site uses Vanilla JavaScript for its logic."}),ke("h2",{children:"It needs a CORS proxy to check if websites actually exist."}),ke("h2",{children:"Please go to this URL to get permission to use the CORS policy:"}),Xt("h2",{children:[" ",ke("a",{className:"cors-link",target:"_blank",href:"https://cors-anywhere.herokuapp.com/corsdemo",rel:"noreferrer",children:"https://cors-anywhere.herokuapp.com/corsdemo"})]}),ke("button",{className:"cors-modal-button",onClick:()=>e(!1),children:"Click Here When You Are Ready."})]})})},R2=()=>Xt("div",{children:[ke(P2,{}),Xt("h1",{className:"title",children:[Xt("a",{href:"/",children:[Xt("svg",{xmlns:"http://www.w3.org/2000/svg",className:"phntm-logo",children:[ke("defs",{}),ke("path",{fill:"#0e0e0e",d:"M13.52 7.45c-.12 1.18 2 1.7 1.9 0-.05-1.17-1.94-1.4-1.9 0M16.21 6.49s0 .25 0 .13c.14.55.35 1 1 1.12a.93.93 0 0 0 1.13-.67c.2-1.14-2-2-2.11-.58"}),ke("path",{fill:"#0e0e0e",d:"M30.34,34.26s.32,2.65.41,6.11c.06,2,0,3.93-.07,5.67a33,33,0,0,1-.77,5.63c-1.41,5.9-2,7.51-2,7.56s-.2.78-.67-.56c0,0-1.52-3.32-2.86-6.77-.77-2-1.42-3.82-1.95-5.51A40.31,40.31,0,0,1,21.1,41a1.21,1.21,0,0,0-.05-.18,1.06,1.06,0,0,0-1-.69h0c-.81,0-1.15.85-1.28,1.18-.24.6-1.15,3.61-1.9,6.18-.61,2.08-1.65,5.76-1.86,7-.16,1-.46,2.31-.79,1.37a81.14,81.14,0,0,1-3.48-7.82A54.12,54.12,0,0,1,9,42.84a14.26,14.26,0,0,1-.6-4.16.91.91,0,0,0-.67-.92.94.94,0,0,0-1,.48s-.26.53-.62,1.09-.73.39-.82.06a26.6,26.6,0,0,1-.48-2.69,58.8,58.8,0,0,1-.46-7.29v-.05a15.06,15.06,0,0,1,.76-4.79A18.91,18.91,0,0,1,7.28,20a20.83,20.83,0,0,1,4.44-4.88,1,1,0,0,0,.17-.18l.12-.17a2.06,2.06,0,0,0,.38-.69,1.66,1.66,0,0,0-.08-1v0s-.41-1-.75-2.27a7.47,7.47,0,0,1-.42-3.38A4.46,4.46,0,0,1,14.76,4a5,5,0,0,1,1.12-.14h0a3.12,3.12,0,0,1,2.18.85,8.46,8.46,0,0,1,2,3.74.91.91,0,0,0,.49.56A17.93,17.93,0,0,1,24,11.18a22.15,22.15,0,0,1,3.14,2.89,20.38,20.38,0,0,1,2.94,4.22A30,30,0,0,1,32,23a50.06,50.06,0,0,1,1.48,5.78,25.26,25.26,0,0,1,.53,5,6.07,6.07,0,0,1-.21,1.57c-.05.49-.61,0-1.05-.6S32,33.71,32,33.71a.9.9,0,0,0-.78-.45.69.69,0,0,0-.28.05.88.88,0,0,0-.61.95m5.14-5.85a45.35,45.35,0,0,0-3.54-11.07,22.46,22.46,0,0,0-3.24-4.65,24.44,24.44,0,0,0-3.42-3.15,22.83,22.83,0,0,0-3.39-2.16,9.58,9.58,0,0,0-2.44-4.16,5.1,5.1,0,0,0-3.57-1.4,7,7,0,0,0-1.6.19,7.2,7.2,0,0,0-3.39,1.76A6,6,0,0,0,9.12,6.89a9.65,9.65,0,0,0,.45,4.39c.29,1,.61,1.93.74,2.29v0a22.84,22.84,0,0,0-4.78,5.32,20.91,20.91,0,0,0-2.4,5.14,17.33,17.33,0,0,0-.82,5.39,58.93,58.93,0,0,0,.58,8.23,20.36,20.36,0,0,0,.63,2.94,4.56,4.56,0,0,0,.46,1,1.57,1.57,0,0,0,1.33.82,2.12,2.12,0,0,0,1.4-.6,44.91,44.91,0,0,0,2.14,6.91,80.89,80.89,0,0,0,3.59,8.07c.22.41.9,1.67,2.12,1.67.55,0,1.34-.26,1.91-1.52a8.79,8.79,0,0,0,.6-2.17c.24-1.42,1.76-6.68,2.78-10a78,78,0,0,0,2.64,7.85c1.37,3.51,2.66,6.31,2.91,6.81l.06.11a7.62,7.62,0,0,0,.76,1.34,2.12,2.12,0,0,0,1.71.91,1.9,1.9,0,0,0,1.74-1.24,4.7,4.7,0,0,0,.24-.75c.12-.37.71-2.24,2-7.68a46.45,46.45,0,0,0,.9-11.86c0-.88-.06-1.78-.12-2.68a2,2,0,0,0,1,.29,1.59,1.59,0,0,0,.83-.22c1-.56,1.47-1.81,1.52-3.81a26.53,26.53,0,0,0-.57-5.46"})]})," "]}),"Phantom Bookmarks"]}),ke(q_,{}),ke(L2,{})]}),D2=document.getElementById("root"),I2=Ng(D2);I2.render(ke(R2,{}));
