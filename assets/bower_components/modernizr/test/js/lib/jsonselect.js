/*! Copyright (c) 2011, Lloyd Hilaiel, ISC License */
!function(e){function t(e){try{return JSON&&JSON.parse?JSON.parse(e):new Function("return "+e)()}catch(t){n("ijs")}}function n(e){throw new Error(u[e])}function i(e){return Array.isArray?Array.isArray(e):"[object Array]"===c.call(e)}function r(e){if(null===e)return"null";var t=typeof e;return"object"===t&&i(e)&&(t="array"),t}function o(e,t,n,i,o){var s,a=[],l=">"===t[0]?t[1]:t[0],c=!0;return l.type&&(c=c&&l.type===r(e)),l.id&&(c=c&&l.id===n),c&&l.pf&&(":nth-last-child"===l.pf?i=o-i:i++,0===l.a?c=l.b===i:(s=(i-l.b)%l.a,c=!s&&i*l.a+l.b>=0)),">"!==t[0]&&":root"!==t[0].pc&&a.push(t),c&&(">"===t[0]?t.length>2&&(c=!1,a.push(t.slice(2))):t.length>1&&(c=!1,a.push(t.slice(1)))),[c,a]}function s(e,t,n,r,a,l){var c,u,d=","===e[0]?e.slice(1):[e],f=[],p=!1,h=0,m=0,g=0;for(h=0;h<d.length;h++)for(u=o(t,d[h],r,a,l),u[0]&&(p=!0),m=0;m<u[1].length;m++)f.push(u[1][m]);if(f.length&&"object"==typeof t)if(f.length>=1&&f.unshift(","),i(t))for(h=0;h<t.length;h++)s(f,t[h],n,void 0,h,t.length);else{g=0;for(c in t)t.hasOwnProperty(c)&&g++;h=0;for(c in t)t.hasOwnProperty(c)&&s(f,t[c],n,c,h++,g)}p&&n&&n(t)}function a(e,t){var n=[];return s(e,t,function(e){n.push(e)}),n}function l(e){return{sel:m(e),match:function(e){return a(this.sel,e)},forEach:function(e,t){return s(this.sel,e,t)}}}var c=Object.prototype.toString,u={ijs:"invalid json string",mpc:"multiple pseudo classes (:xxx) not allowed",mepf:"malformed expression in pseudo-function",nmi:"multiple ids not allowed",se:"selector expected",sra:"string required after '.'",uc:"unrecognized char",ujs:"unclosed json string",upc:"unrecognized pseudo class"},d={psc:1,psf:2,typ:3,str:4},f=/^(?:([\r\n\t\ ]+)|([*.,>])|(string|boolean|null|array|object|number)|(:(?:root|first-child|last-child|only-child))|(:(?:nth-child|nth-last-child))|(:\w+)|(\"(?:[^\\]|\\[^\"])*\")|(\")|((?:[_a-zA-Z]|[^\0-\0177]|\\[^\r\n\f0-9a-fA-F])(?:[_a-zA-Z0-9\-]|[^\u0000-\u0177]|(?:\\[^\r\n\f0-9a-fA-F]))*))/,p=/^\s*\(\s*(?:([+\-]?)([0-9]*)n\s*(?:([+\-])\s*([0-9]))?|(odd|even)|([+\-]?[0-9]+))\s*\)/,h=function(e,i){i||(i=0);var r=f.exec(e.substr(i));if(!r)return void 0;i+=r[0].length;var o;return r[1]?o=[i," "]:r[2]?o=[i,r[0]]:r[3]?o=[i,d.typ,r[0]]:r[4]?o=[i,d.psc,r[0]]:r[5]?o=[i,d.psf,r[0]]:r[6]?n("upc"):r[7]?o=[i,d.str,t(r[0])]:r[8]?n("ujs"):r[9]&&(o=[i,d.str,r[0].replace(/\\([^\r\n\f0-9a-fA-F])/g,"$1")]),o},m=function(e){for(var t,n=[],i=0;;){var r=g(e,i);if(n.push(r[1]),r=h(e,i=r[0]),r&&" "===r[1]&&(r=h(e,i=r[0])),!r)break;">"===r[1]?(n.push(">"),i=r[0]):","===r[1]&&(void 0===t?t=[",",n]:t.push(n),n=[],i=r[0])}return t&&t.push(n),t?t:n},g=function(e,t){var i=t,r={},o=h(e,t);for(o&&" "===o[1]&&(i=t=o[0],o=h(e,t)),o&&o[1]===d.typ?(r.type=o[2],o=h(e,t=o[0])):o&&"*"===o[1]&&(o=h(e,t=o[0]));;){if(void 0===o)break;if("."===o[1])o=h(e,t=o[0]),o&&o[1]===d.str||n("sra"),r.id&&n("nmi"),r.id=o[2];else if(o[1]===d.psc)(r.pc||r.pf)&&n("mpc"),":first-child"===o[2]?(r.pf=":nth-child",r.a=0,r.b=1):":last-child"===o[2]?(r.pf=":nth-last-child",r.a=0,r.b=1):r.pc=o[2];else{if(o[1]!==d.psf)break;(r.pc||r.pf)&&n("mpc"),r.pf=o[2];var s=p.exec(e.substr(o[0]));s||n("mepf"),s[5]?(r.a=2,r.b="odd"===s[5]?1:0):s[6]?(r.a=0,r.b=parseInt(s[6],10)):(r.a=parseInt((s[1]?s[1]:"+")+(s[2]?s[2]:"1"),10),r.b=s[3]?parseInt(s[3]+s[4],10):0),o[0]+=s[0].length}o=h(e,t=o[0])}return i===t&&n("se"),[t,r]};e._lex=h,e._parse=m,e.match=function(e,t){return l(e).match(t)},e.forEach=function(e,t,n){return l(e).forEach(t,n)},e.compile=l}("undefined"==typeof exports?window.JSONSelect={}:exports);