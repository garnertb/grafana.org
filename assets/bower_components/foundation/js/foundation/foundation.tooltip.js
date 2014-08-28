!function(e,t,n){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.1.1",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,tip_template:function(e,t){return'<span data-selector="'+e+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,n){Foundation.inherit(this,"random_str"),this.bindings(t,n)},events:function(){var t=this,r=t.S;Modernizr.touch?r(n).off(".tooltip").on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip","["+this.attr_name()+"]:not(a)",function(n){var i=e.extend({},t.settings,t.data_options(r(this)));i.disable_for_touch||(n.preventDefault(),r(i.tooltip_class).hide(),t.showOrCreateTip(r(this)))}).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip",this.settings.tooltip_class,function(e){e.preventDefault(),r(this).fadeOut(150)}):r(n).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip","["+this.attr_name()+"]",function(e){var n=r(this);/enter|over/i.test(e.type)?this.timer=setTimeout(function(){t.showOrCreateTip(n)}.bind(this),t.settings.hover_delay):("mouseout"===e.type||"mouseleave"===e.type)&&(clearTimeout(this.timer),t.hide(n))})},showOrCreateTip:function(e){var t=this.getTip(e);return t&&t.length>0?this.show(e):this.create(e)},getTip:function(e){var t=this.selector(e),n=null;return t&&(n=this.S('span[data-selector="'+t+'"]'+this.settings.tooltip_class)),"object"==typeof n?n:!1},selector:function(e){var t=e.attr("id"),n=e.attr(this.attr_name())||e.attr("data-selector");return(t&&t.length<1||!t)&&"string"!=typeof n&&(n="tooltip"+this.random_str(6),e.attr("data-selector",n)),t&&t.length>0?t:n},create:function(t){var n=e(this.settings.tip_template(this.selector(t),e("<div></div>").html(t.attr("title")).html())),r=this.inheritable_classes(t);n.addClass(r).appendTo(this.settings.append_to),Modernizr.touch&&n.append('<span class="tap-to-close">'+this.settings.touch_close_text+"</span>"),t.removeAttr("title").attr("title",""),this.show(t)},reposition:function(e,t,n){var r,i,o,a,s;if(t.css("visibility","hidden").show(),r=e.data("width"),i=t.children(".nub"),o=i.outerHeight(),a=i.outerHeight(),this.small()?t.css({width:"100%"}):t.css({width:r?r:"auto"}),s=function(e,t,n,r,i){return e.css({top:t?t:"auto",bottom:r?r:"auto",left:i?i:"auto",right:n?n:"auto"}).end()},s(t,e.offset().top+e.outerHeight()+10,"auto","auto",e.offset().left),this.small())s(t,e.offset().top+e.outerHeight()+10,"auto","auto",12.5,this.S(this.scope).width()),t.addClass("tip-override"),s(i,-o,"auto","auto",e.offset().left+10);else{var l=e.offset().left;Foundation.rtl&&(l=e.offset().left+e.outerWidth()-t.outerWidth()),s(t,e.offset().top+e.outerHeight()+10,"auto","auto",l),t.removeClass("tip-override"),i.removeAttr("style"),n&&n.indexOf("tip-top")>-1?s(t,e.offset().top-t.outerHeight()-10,"auto","auto",l).removeClass("tip-override"):n&&n.indexOf("tip-left")>-1?s(t,e.offset().top+e.outerHeight()/2-t.outerHeight()/2,"auto","auto",e.offset().left-t.outerWidth()-o).removeClass("tip-override"):n&&n.indexOf("tip-right")>-1&&s(t,e.offset().top+e.outerHeight()/2-t.outerHeight()/2,"auto","auto",e.offset().left+e.outerWidth()+o).removeClass("tip-override")}t.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches},inheritable_classes:function(t){var n=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(this.settings.additional_inheritable_classes),r=t.attr("class"),i=r?e.map(r.split(" "),function(t){return-1!==e.inArray(t,n)?t:void 0}).join(" "):"";return e.trim(i)},show:function(e){var t=this.getTip(e);return this.reposition(e,t,e.attr("class")),t.fadeIn(150)},hide:function(e){var t=this.getTip(e);return t.fadeOut(150)},reload:function(){var t=e(this);return t.data("fndtn-tooltips")?t.foundationTooltips("destroy").foundationTooltips("init"):t.foundationTooltips("init")},off:function(){this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(t){e("["+this.attr_name()+"]").get(t).attr("title",e(this).text())}).remove()},reflow:function(){}}}(jQuery,this,this.document);