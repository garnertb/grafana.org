define(["../core","../var/rnotwhite","../var/strundefined","../core/access","./support","../selector"],function(e,t,n,r,o){var i,a,s=e.expr.attrHandle;e.fn.extend({attr:function(t,n){return r(this,e.attr,t,n,arguments.length>1)},removeAttr:function(t){return this.each(function(){e.removeAttr(this,t)})}}),e.extend({attr:function(t,r,o){var s,c,u=t.nodeType;if(t&&3!==u&&8!==u&&2!==u)return typeof t.getAttribute===n?e.prop(t,r,o):(1===u&&e.isXMLDoc(t)||(r=r.toLowerCase(),s=e.attrHooks[r]||(e.expr.match.bool.test(r)?a:i)),void 0===o?s&&"get"in s&&null!==(c=s.get(t,r))?c:(c=e.find.attr(t,r),null==c?void 0:c):null!==o?s&&"set"in s&&void 0!==(c=s.set(t,o,r))?c:(t.setAttribute(r,o+""),o):(e.removeAttr(t,r),void 0))},removeAttr:function(n,r){var o,i,a=0,s=r&&r.match(t);if(s&&1===n.nodeType)for(;o=s[a++];)i=e.propFix[o]||o,e.expr.match.bool.test(o)&&(n[i]=!1),n.removeAttribute(o)},attrHooks:{type:{set:function(t,n){if(!o.radioValue&&"radio"===n&&e.nodeName(t,"input")){var r=t.value;return t.setAttribute("type",n),r&&(t.value=r),n}}}}}),a={set:function(t,n,r){return n===!1?e.removeAttr(t,r):t.setAttribute(r,r),r}},e.each(e.expr.match.bool.source.match(/\w+/g),function(t,n){var r=s[n]||e.find.attr;s[n]=function(e,t,n){var o,i;return n||(i=s[t],s[t]=o,o=null!=r(e,t,n)?t.toLowerCase():null,s[t]=i),o}})});