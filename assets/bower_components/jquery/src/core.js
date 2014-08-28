define(["./var/arr","./var/slice","./var/concat","./var/push","./var/indexOf","./var/class2type","./var/toString","./var/hasOwn","./var/support"],function(e,t,n,r,o,i,a,s,l){function u(e){var t=e.length,n=f.type(e);return"function"===n||f.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}var c=window.document,d="@VERSION",f=function(e,t){return new f.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,h=/^-ms-/,m=/-([\da-z])/gi,g=function(e,t){return t.toUpperCase()};return f.fn=f.prototype={jquery:d,constructor:f,selector:"",length:0,toArray:function(){return t.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:t.call(this)},pushStack:function(e){var t=f.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return f.each(this,e,t)},map:function(e){return this.pushStack(f.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(t.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:r,sort:e.sort,splice:e.splice},f.extend=f.fn.extend=function(){var e,t,n,r,o,i,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||f.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(u&&r&&(f.isPlainObject(r)||(o=f.isArray(r)))?(o?(o=!1,i=n&&f.isArray(n)?n:[]):i=n&&f.isPlainObject(n)?n:{},a[t]=f.extend(u,i,r)):void 0!==r&&(a[t]=r));return a},f.extend({expando:"jQuery"+(d+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===f.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!f.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){return"object"!==f.type(e)||e.nodeType||f.isWindow(e)?!1:e.constructor&&!s.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?i[a.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=f.trim(e),e&&(1===e.indexOf("use strict")?(t=c.createElement("script"),t.text=e,c.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(h,"ms-").replace(m,g)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,o=0,i=e.length,a=u(e);if(n){if(a)for(;i>o&&(r=t.apply(e[o],n),r!==!1);o++);else for(o in e)if(r=t.apply(e[o],n),r===!1)break}else if(a)for(;i>o&&(r=t.call(e[o],o,e[o]),r!==!1);o++);else for(o in e)if(r=t.call(e[o],o,e[o]),r===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(u(Object(e))?f.merge(n,"string"==typeof e?[e]:e):r.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:o.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,o=e.length;n>r;r++)e[o++]=t[r];return e.length=o,e},grep:function(e,t,n){for(var r,o=[],i=0,a=e.length,s=!n;a>i;i++)r=!t(e[i],i),r!==s&&o.push(e[i]);return o},map:function(e,t,r){var o,i=0,a=e.length,s=u(e),l=[];if(s)for(;a>i;i++)o=t(e[i],i,r),null!=o&&l.push(o);else for(i in e)o=t(e[i],i,r),null!=o&&l.push(o);return n.apply([],l)},guid:1,proxy:function(e,n){var r,o,i;return"string"==typeof n&&(r=e[n],n=e,e=r),f.isFunction(e)?(o=t.call(arguments,2),i=function(){return e.apply(n||this,o.concat(t.call(arguments)))},i.guid=e.guid=e.guid||f.guid++,i):void 0},now:Date.now,support:l}),f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){i["[object "+t+"]"]=t.toLowerCase()}),f});