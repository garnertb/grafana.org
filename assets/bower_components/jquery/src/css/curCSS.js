define(["../core","./var/rnumnonpx","./var/rmargin","./var/getStyles","../selector"],function(t,e,n,i){function s(s,a,r){var o,l,c,u,d=s.style;return r=r||i(s),r&&(u=r.getPropertyValue(a)||r[a]),r&&(""!==u||t.contains(s.ownerDocument,s)||(u=t.style(s,a)),e.test(u)&&n.test(a)&&(o=d.width,l=d.minWidth,c=d.maxWidth,d.minWidth=d.maxWidth=d.width=u,u=r.width,d.width=o,d.minWidth=l,d.maxWidth=c)),void 0!==u?u+"":u}return s});