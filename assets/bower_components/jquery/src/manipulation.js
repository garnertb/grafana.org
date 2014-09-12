define(["./core","./var/concat","./var/push","./core/access","./manipulation/var/rcheckableType","./manipulation/support","./data/var/data_priv","./data/var/data_user","./core/init","./data/accepts","./traversing","./selector","./event"],function(t,e,n,i,s,r,o,a){function c(e,n){return t.nodeName(e,"table")&&t.nodeName(11!==n.nodeType?n:n.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function l(t){return t.type=(null!==t.getAttribute("type"))+"/"+t.type,t}function u(t){var e=x.exec(t.type);return e?t.type=e[1]:t.removeAttribute("type"),t}function d(t,e){for(var n=0,i=t.length;i>n;n++)o.set(t[n],"globalEval",!e||o.get(e[n],"globalEval"))}function f(e,n){var i,s,r,c,l,u,d,f;if(1===n.nodeType){if(o.hasData(e)&&(c=o.access(e),l=o.set(n,c),f=c.events)){delete l.handle,l.events={};for(r in f)for(i=0,s=f[r].length;s>i;i++)t.event.add(n,r,f[r][i])}a.hasData(e)&&(u=a.access(e),d=t.extend({},u),a.set(n,d))}}function h(e,n){var i=e.getElementsByTagName?e.getElementsByTagName(n||"*"):e.querySelectorAll?e.querySelectorAll(n||"*"):[];return void 0===n||n&&t.nodeName(e,n)?t.merge([e],i):i}function p(t,e){var n=e.nodeName.toLowerCase();"input"===n&&s.test(t.type)?e.checked=t.checked:("input"===n||"textarea"===n)&&(e.defaultValue=t.defaultValue)}var g=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/<([\w:]+)/,v=/<|&#?\w+;/,y=/<(?:script|style|link)/i,b=/checked\s*(?:[^=]|=\s*.checked.)/i,_=/^$|\/(?:java|ecma)script/i,x=/^true\/(.*)/,w=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,C={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};return C.optgroup=C.option,C.tbody=C.tfoot=C.colgroup=C.caption=C.thead,C.th=C.td,t.extend({clone:function(e,n,i){var s,o,a,c,l=e.cloneNode(!0),u=t.contains(e.ownerDocument,e);if(!(r.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||t.isXMLDoc(e)))for(c=h(l),a=h(e),s=0,o=a.length;o>s;s++)p(a[s],c[s]);if(n)if(i)for(a=a||h(e),c=c||h(l),s=0,o=a.length;o>s;s++)f(a[s],c[s]);else f(e,l);return c=h(l,"script"),c.length>0&&d(c,!u&&h(e,"script")),l},buildFragment:function(e,n,i,s){for(var r,o,a,c,l,u,f=n.createDocumentFragment(),p=[],y=0,b=e.length;b>y;y++)if(r=e[y],r||0===r)if("object"===t.type(r))t.merge(p,r.nodeType?[r]:r);else if(v.test(r)){for(o=o||f.appendChild(n.createElement("div")),a=(m.exec(r)||["",""])[1].toLowerCase(),c=C[a]||C._default,o.innerHTML=c[1]+r.replace(g,"<$1></$2>")+c[2],u=c[0];u--;)o=o.lastChild;t.merge(p,o.childNodes),o=f.firstChild,o.textContent=""}else p.push(n.createTextNode(r));for(f.textContent="",y=0;r=p[y++];)if((!s||-1===t.inArray(r,s))&&(l=t.contains(r.ownerDocument,r),o=h(f.appendChild(r),"script"),l&&d(o),i))for(u=0;r=o[u++];)_.test(r.type||"")&&i.push(r);return f},cleanData:function(e){for(var n,i,s,r,c,l,u=t.event.special,d=0;void 0!==(i=e[d]);d++){if(t.acceptData(i)&&(c=i[o.expando],c&&(n=o.cache[c]))){if(s=Object.keys(n.events||{}),s.length)for(l=0;void 0!==(r=s[l]);l++)u[r]?t.event.remove(i,r):t.removeEvent(i,r,n.handle);o.cache[c]&&delete o.cache[c]}delete a.cache[i[a.expando]]}}}),t.fn.extend({text:function(e){return i(this,function(e){return void 0===e?t.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=c(this,t);e.appendChild(t)}})},prepend:function(){return this.domManip(arguments,function(t){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var e=c(this,t);e.insertBefore(t,e.firstChild)}})},before:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return this.domManip(arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},remove:function(e,n){for(var i,s=e?t.filter(e,this):this,r=0;null!=(i=s[r]);r++)n||1!==i.nodeType||t.cleanData(h(i)),i.parentNode&&(n&&t.contains(i.ownerDocument,i)&&d(h(i,"script")),i.parentNode.removeChild(i));return this},empty:function(){for(var e,n=0;null!=(e=this[n]);n++)1===e.nodeType&&(t.cleanData(h(e,!1)),e.textContent="");return this},clone:function(e,n){return e=null==e?!1:e,n=null==n?e:n,this.map(function(){return t.clone(this,e,n)})},html:function(e){return i(this,function(e){var n=this[0]||{},i=0,s=this.length;if(void 0===e&&1===n.nodeType)return n.innerHTML;if("string"==typeof e&&!y.test(e)&&!C[(m.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(g,"<$1></$2>");try{for(;s>i;i++)n=this[i]||{},1===n.nodeType&&(t.cleanData(h(n,!1)),n.innerHTML=e);n=0}catch(r){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(n){e=this.parentNode,t.cleanData(h(this)),e&&e.replaceChild(n,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(t){return this.remove(t,!0)},domManip:function(n,i){n=e.apply([],n);var s,a,c,d,f,p,g=0,m=this.length,v=this,y=m-1,x=n[0],C=t.isFunction(x);if(C||m>1&&"string"==typeof x&&!r.checkClone&&b.test(x))return this.each(function(t){var e=v.eq(t);C&&(n[0]=x.call(this,t,e.html())),e.domManip(n,i)});if(m&&(s=t.buildFragment(n,this[0].ownerDocument,!1,this),a=s.firstChild,1===s.childNodes.length&&(s=a),a)){for(c=t.map(h(s,"script"),l),d=c.length;m>g;g++)f=s,g!==y&&(f=t.clone(f,!0,!0),d&&t.merge(c,h(f,"script"))),i.call(this[g],f,g);if(d)for(p=c[c.length-1].ownerDocument,t.map(c,u),g=0;d>g;g++)f=c[g],_.test(f.type||"")&&!o.access(f,"globalEval")&&t.contains(p,f)&&(f.src?t._evalUrl&&t._evalUrl(f.src):t.globalEval(f.textContent.replace(w,"")))}return this}}),t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,i){t.fn[e]=function(e){for(var s,r=[],o=t(e),a=o.length-1,c=0;a>=c;c++)s=c===a?this:this.clone(!0),t(o[c])[i](s),n.apply(r,s.get());return this.pushStack(r)}}),t});