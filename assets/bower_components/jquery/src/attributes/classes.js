define(["../core","../var/rnotwhite","../var/strundefined","../data/var/data_priv","../core/init"],function(e,t,n,i){var o=/[\t\r\n\f]/g;e.fn.extend({addClass:function(n){var i,r,s,a,u,l,c="string"==typeof n&&n,f=0,d=this.length;if(e.isFunction(n))return this.each(function(t){e(this).addClass(n.call(this,t,this.className))});if(c)for(i=(n||"").match(t)||[];d>f;f++)if(r=this[f],s=1===r.nodeType&&(r.className?(" "+r.className+" ").replace(o," "):" ")){for(u=0;a=i[u++];)s.indexOf(" "+a+" ")<0&&(s+=a+" ");l=e.trim(s),r.className!==l&&(r.className=l)}return this},removeClass:function(n){var i,r,s,a,u,l,c=0===arguments.length||"string"==typeof n&&n,f=0,d=this.length;if(e.isFunction(n))return this.each(function(t){e(this).removeClass(n.call(this,t,this.className))});if(c)for(i=(n||"").match(t)||[];d>f;f++)if(r=this[f],s=1===r.nodeType&&(r.className?(" "+r.className+" ").replace(o," "):"")){for(u=0;a=i[u++];)for(;s.indexOf(" "+a+" ")>=0;)s=s.replace(" "+a+" "," ");l=n?e.trim(s):"",r.className!==l&&(r.className=l)}return this},toggleClass:function(o,r){var s=typeof o;return"boolean"==typeof r&&"string"===s?r?this.addClass(o):this.removeClass(o):e.isFunction(o)?this.each(function(t){e(this).toggleClass(o.call(this,t,this.className,r),r)}):this.each(function(){if("string"===s)for(var r,a=0,u=e(this),l=o.match(t)||[];r=l[a++];)u.hasClass(r)?u.removeClass(r):u.addClass(r);else(s===n||"boolean"===s)&&(this.className&&i.set(this,"__className__",this.className),this.className=this.className||o===!1?"":i.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(o," ").indexOf(t)>=0)return!0;return!1}})});