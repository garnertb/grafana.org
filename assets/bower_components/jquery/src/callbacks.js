define(["./core","./var/rnotwhite"],function(t,e){function n(n){var r=i[n]={};return t.each(n.match(e)||[],function(t,e){r[e]=!0}),r}var i={};return t.Callbacks=function(e){e="string"==typeof e?i[e]||n(e):t.extend({},e);var r,o,s,a,l,c,u=[],d=!e.once&&[],f=function(t){for(r=e.memory&&t,o=!0,c=a||0,a=0,l=u.length,s=!0;u&&l>c;c++)if(u[c].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}s=!1,u&&(d?d.length&&f(d.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var n=u.length;!function i(n){t.each(n,function(n,r){var o=t.type(r);"function"===o?e.unique&&p.has(r)||u.push(r):r&&r.length&&"string"!==o&&i(r)})}(arguments),s?l=u.length:r&&(a=n,f(r))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),s&&(l>=i&&l--,c>=i&&c--)}),this},has:function(e){return e?t.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],l=0,this},disable:function(){return u=d=r=void 0,this},disabled:function(){return!u},lock:function(){return d=void 0,r||p.disable(),this},locked:function(){return!d},fireWith:function(t,e){return!u||o&&!d||(e=e||[],e=[t,e.slice?e.slice():e],s?d.push(e):f(e)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!o}};return p},t});