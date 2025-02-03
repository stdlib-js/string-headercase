// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).headercase=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=l.call(n,h,"$1e"),n=l.call(n,v,"e"),n=l.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),r.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,E=Array.isArray;function _(r){return r!=r}function S(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,s,l,p,g,d,b;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(n=r[s],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),c+=n.arg||"",f+=1}return c}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,o;for(t=[],o=0,n=x.exec(r);n;)(e=r.slice(o,x.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=x.lastIndex,n=x.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function k(r){var e,t;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var F,P=Object.prototype,$=P.toString,C=P.__defineGetter__,V=P.__defineSetter__,R=P.__lookupGetter__,I=P.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(R.call(r,e)||I.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&C&&C.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var B=F;function G(r,e,t){B(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"string"==typeof r}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return U&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function M(r,e){return null!=r&&W.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,D="function"==typeof z?z.toStringTag:"";var N=Z()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[D],e=M(r,D);try{r[D]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[D]=t:delete r[D],n}:function(r){return X.call(r)},q=String.prototype.valueOf;var H=Z();function J(r){return"object"==typeof r&&(r instanceof String||(H?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object String]"===N(r)))}function K(r){return L(r)||J(r)}function Q(r,e,t){return r.replace(e,t)}G(K,"isPrimitive",L),G(K,"isObject",J);var Y=Array.isArray?Array.isArray:function(r){return"[object Array]"===N(r)};var rr=/./;function er(r){return"boolean"==typeof r}var tr=Boolean,nr=Boolean.prototype.toString;var or=Z();function ir(r){return"object"==typeof r&&(r instanceof tr||(or?function(r){try{return nr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===N(r)))}function ar(r){return er(r)||ir(r)}G(ar,"isPrimitive",er),G(ar,"isObject",ir);var ur="object"==typeof self?self:null,cr="object"==typeof window?window:null,fr="object"==typeof global?global:null,sr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!er(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(sr)return sr;if(ur)return ur;if(cr)return cr;if(fr)return fr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=lr.document&&lr.document.childNodes,gr=Int8Array;function dr(){return/^\s*function\s*([^(]*)/i}var br=/^\s*function\s*([^(]*)/i;function yr(r){return null!==r&&"object"==typeof r}function vr(r){var e,t,n,o;if(("Object"===(t=N(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=br.exec(n.toString()))return e[1]}return yr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(dr,"REGEXP",br),G(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Y(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(yr));var hr="function"==typeof rr||"object"==typeof gr||"function"==typeof pr?function(r){return vr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?vr(r).toLowerCase():e};function wr(r){return"function"===hr(r)}var mr,jr=Object,Er=Object.getPrototypeOf;mr=wr(Object.getPrototypeOf)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===N(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=mr;var Sr=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Y(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!e||!M(r,"constructor")&&M(e,"constructor")&&wr(e.constructor)&&"[object Function]"===N(e.constructor)&&M(e,"isPrototypeOf")&&wr(e.isPrototypeOf)&&(e===Sr||function(r){var e;for(e in r)if(!M(r,e))return!1;return!0}(r)))}var xr="[\t\n\v\f\r              \u2028\u2029  　\ufeff]";function Tr(r){var e,t;if(arguments.length>0){if(t=function(r,e){return Or(e)?M(e,"flags")&&(r.flags=e.flags,!L(r.flags))?new TypeError(k("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):M(e,"capture")&&(r.capture=e.capture,!er(r.capture))?new TypeError(k("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",e))}(e={},r),t)throw t;return e.capture?new RegExp("("+xr+")",e.flags):new RegExp(xr,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}var Ar=Tr({capture:!0}),kr=Tr();G(Tr,"REGEXP",kr),G(Tr,"REGEXP_CAPTURE",Ar);var Fr=void 0!==String.prototype.trim,Pr=String.prototype.trim;var $r=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;var Cr=Fr&&""===Pr.call(" \n\t\r\n\f\v            \u2028\u2029  　\ufeff")&&"᠎"===Pr.call("᠎")?function(r){return Pr.call(r)}:function(r){return Q(r,$r,"$1")},Vr=/\s+/g,Rr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Ir=/([a-z0-9])([A-Z])/g;function Br(r){return r=Q(r,Rr," "),r=Q(r,Ir,"$1 $2"),Q(r=function(r){var e,t,n,o;for(e=!0,t="",o=0;o<r.length;o++)n=r.charAt(o),kr.test(n)?e=!0:e&&(n=n.toUpperCase(),e=!1),t+=n;return t}(r=function(r){return r.toLowerCase()}(r=Cr(r))),Vr,"-")}return function(r){if(!L(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("1gt3F",r));return Br(r)}}));
//# sourceMappingURL=index.js.map
