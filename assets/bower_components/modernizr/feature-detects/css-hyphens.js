!function(){function t(){try{var t=document.createElement("div"),e=document.createElement("span"),n=t.style,i=0,r=0,o=!1,s=document.body.firstElementChild||document.body.firstChild;return t.appendChild(e),e.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",document.body.insertBefore(t,s),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",i=e.offsetHeight,r=e.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+Modernizr._prefixes.join("hyphens:auto; "),o=e.offsetHeight!=i||e.offsetWidth!=r,document.body.removeChild(t),t.removeChild(e),o}catch(a){return!1}}function e(t,e){try{var n=document.createElement("div"),i=document.createElement("span"),r=n.style,o=0,s=!1,a=!1,l=!1,c=document.body.firstElementChild||document.body.firstChild;return r.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(i),document.body.insertBefore(n,c),i.innerHTML="mm",o=i.offsetHeight,i.innerHTML="m"+t+"m",a=i.offsetHeight>o,e?(i.innerHTML="m<br />m",o=i.offsetWidth,i.innerHTML="m"+t+"m",l=i.offsetWidth>o):l=!0,a===!0&&l===!0&&(s=!0),document.body.removeChild(n),n.removeChild(i),s}catch(u){return!1}}function n(t){try{var e,n=document.createElement("input"),i=document.createElement("div"),r="lebowski",o=!1,s=document.body.firstElementChild||document.body.firstChild;if(i.innerHTML=r+t+r,document.body.insertBefore(i,s),document.body.insertBefore(n,i),n.setSelectionRange?(n.focus(),n.setSelectionRange(0,0)):n.createTextRange&&(e=n.createTextRange(),e.collapse(!0),e.moveEnd("character",0),e.moveStart("character",0),e.select()),window.find)o=window.find(r+r);else try{e=window.self.document.body.createTextRange(),o=e.findText(r+r)}catch(a){o=!1}return document.body.removeChild(i),document.body.removeChild(n),o}catch(a){return!1}}return document.body?(Modernizr.addTest("csshyphens",function(){if(!Modernizr.testAllProps("hyphens"))return!1;try{return t()}catch(e){return!1}}),Modernizr.addTest("softhyphens",function(){try{return e("&#173;",!0)&&e("&#8203;",!1)}catch(t){return!1}}),Modernizr.addTest("softhyphensfind",function(){try{return n("&#173;")&&n("&#8203;")}catch(t){return!1}}),void 0):(window.console&&console.warn("document.body doesn't exist. Modernizr hyphens test needs it."),void 0)}();