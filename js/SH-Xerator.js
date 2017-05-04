/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);


/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */

!function (a) { "use strict"; a.matchMedia = a.matchMedia || function (a) { var b, c = a.documentElement, d = c.firstElementChild || c.firstChild, e = a.createElement("body"), f = a.createElement("div"); return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f), function (a) { return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), { matches: b, media: a } } }(a.document) }(this), function (a) { "use strict"; function b() { v(!0) } var c = {}; a.respond = c, c.update = function () { }; var d = [], e = function () { var b = !1; try { b = new a.XMLHttpRequest } catch (c) { b = new a.ActiveXObject("Microsoft.XMLHTTP") } return function () { return b } }(), f = function (a, b) { var c = e(); c && (c.open("GET", a, !0), c.onreadystatechange = function () { 4 !== c.readyState || 200 !== c.status && 304 !== c.status || b(c.responseText) }, 4 !== c.readyState && c.send(null)) }, g = function (a) { return a.replace(c.regex.minmaxwh, "").match(c.regex.other) }; if (c.ajax = f, c.queue = d, c.unsupportedmq = g, c.regex = { media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi, keyframes: /@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi, comments: /\/\*[^*]*\*+([^/][^*]*\*+)*\//gi, urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, findStyles: /@media *([^\{]+)\{([\S\s]+?)$/, only: /(only\s+)?([a-zA-Z]+)\s?/, minw: /\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/, maxw: /\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/, minmaxwh: /\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi, other: /\([^\)]*\)/g }, c.mediaQueriesSupported = a.matchMedia && null !== a.matchMedia("only all") && a.matchMedia("only all").matches, !c.mediaQueriesSupported) { var h, i, j, k = a.document, l = k.documentElement, m = [], n = [], o = [], p = {}, q = 30, r = k.getElementsByTagName("head")[0] || l, s = k.getElementsByTagName("base")[0], t = r.getElementsByTagName("link"), u = function () { var a, b = k.createElement("div"), c = k.body, d = l.style.fontSize, e = c && c.style.fontSize, f = !1; return b.style.cssText = "position:absolute;font-size:1em;width:1em", c || (c = f = k.createElement("body"), c.style.background = "none"), l.style.fontSize = "100%", c.style.fontSize = "100%", c.appendChild(b), f && l.insertBefore(c, l.firstChild), a = b.offsetWidth, f ? l.removeChild(c) : c.removeChild(b), l.style.fontSize = d, e && (c.style.fontSize = e), a = j = parseFloat(a) }, v = function (b) { var c = "clientWidth", d = l[c], e = "CSS1Compat" === k.compatMode && d || k.body[c] || d, f = {}, g = t[t.length - 1], p = (new Date).getTime(); if (b && h && q > p - h) return a.clearTimeout(i), i = a.setTimeout(v, q), void 0; h = p; for (var s in m) if (m.hasOwnProperty(s)) { var w = m[s], x = w.minw, y = w.maxw, z = null === x, A = null === y, B = "em"; x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? j || u() : 1)), y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? j || u() : 1)), w.hasquery && (z && A || !(z || e >= x) || !(A || y >= e)) || (f[w.media] || (f[w.media] = []), f[w.media].push(n[w.rules])) } for (var C in o) o.hasOwnProperty(C) && o[C] && o[C].parentNode === r && r.removeChild(o[C]); o.length = 0; for (var D in f) if (f.hasOwnProperty(D)) { var E = k.createElement("style"), F = f[D].join("\n"); E.type = "text/css", E.media = D, r.insertBefore(E, g.nextSibling), E.styleSheet ? E.styleSheet.cssText = F : E.appendChild(k.createTextNode(F)), o.push(E) } }, w = function (a, b, d) { var e = a.replace(c.regex.comments, "").replace(c.regex.keyframes, "").match(c.regex.media), f = e && e.length || 0; b = b.substring(0, b.lastIndexOf("/")); var h = function (a) { return a.replace(c.regex.urls, "$1" + b + "$2$3") }, i = !f && d; b.length && (b += "/"), i && (f = 1); for (var j = 0; f > j; j++) { var k, l, o, p; i ? (k = d, n.push(h(a))) : (k = e[j].match(c.regex.findStyles) && RegExp.$1, n.push(RegExp.$2 && h(RegExp.$2))), o = k.split(","), p = o.length; for (var q = 0; p > q; q++) l = o[q], g(l) || m.push({ media: l.split("(")[0].match(c.regex.only) && RegExp.$2 || "all", rules: n.length - 1, hasquery: l.indexOf("(") > -1, minw: l.match(c.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""), maxw: l.match(c.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "") }) } v() }, x = function () { if (d.length) { var b = d.shift(); f(b.href, function (c) { w(c, b.href, b.media), p[b.href] = !0, a.setTimeout(function () { x() }, 0) }) } }, y = function () { for (var b = 0; b < t.length; b++) { var c = t[b], e = c.href, f = c.media, g = c.rel && "stylesheet" === c.rel.toLowerCase(); e && g && !p[e] && (c.styleSheet && c.styleSheet.rawCssText ? (w(c.styleSheet.rawCssText, e, f), p[e] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(e) && !s || e.replace(RegExp.$1, "").split("/")[0] === a.location.host) && ("//" === e.substring(0, 2) && (e = a.location.protocol + e), d.push({ href: e, media: f }))) } x() }; y(), c.update = y, c.getEmValue = u, a.addEventListener ? a.addEventListener("resize", b, !1) : a.attachEvent && a.attachEvent("onresize", b) } }(this);

var datosForm = new Object();
datosForm['/ProcedimientoXunta/XXXX/ComunicacionAnualDivision1/as'] = '27';

// Obtiene el objeto de la solicitud
var getObjetoSolicitud = function(){
    return datosForm["/ProcedimientoXunta/" + G_SEC_Objeto + "/Objeto/ListaPrincipal"];
}


//---------------------------------------------- //
//------------- VARIABLES GLOBALES ------------- //
//---------------------------------------------- //
//***** TODO: UNA VEZ PASADO TODO AL RUE HABRÁ QUE PONER LA URL CORRECTA ****
var global_urlFacadeWS = '/formularios/cumplimentacion/mapping/DSI/';
//var datosForm='';
var SELECCIONE = 'Seleccione';
//var PAIS_SPAIN = "0";
//var PROV_NO_OBLIG = "0";
//var NO_EXISTE_MIGRADO = "0";
//var global_migrado = false;
//var vistaDetalle = false;

//Lenguaje de la solicitud
var getLenguaje = function () {
    //return datosForm["/ProcedimientoXunta/" + GLOBAL_COD_PROC + "/Formulario/LenguajeSolicitud"];
	return "gl";
}

//Diccionario simple 
function Dictionary() {
    var dictionary = {};

    this.setData = function (key, val) { dictionary[key] = val; }
    this.getData = function (key) { return dictionary[key]; }
    this.hasKey = function (key) { return dictionary[key] != undefined; }
}

//Array de mensajes localizados
var loc = {
    "ErrJSON": {
        'id': 'ErrJSON',
        'es': 'Se ha producido un error durante la carga de un recurso. Inténtelo de nuevo. Si el problema persiste contacte con el administrador del sistema.',
        'gl': 'Produciuse un erro durante a carga dun recurso. Ténteo de novo. Se o problema persiste contacte co administrador do sistema.'
    },
    "ErrNifSolicitanteRepresentante": {
        'id': 'ErrNifSolicitanteRepresentante',
        'es': 'Debe constar el NIF de persona física del certificado utilizado en al menos uno de los campos marcados en rojo en el formulario',
        'gl': 'Debe constar o NIF de persoa física do certificado utilizado en al menos un dos campos marcados en bermello no formulario'
    }

};
//Obtiene el valor localizado del mensaje por su id.
function local(msgId){
    var lenguaje = getLenguaje();
    if (lenguaje != 'es') lenguaje = 'gl';
    return loc[msgId][lenguaje];
};

//---------------------------------------------- //
//------------- MANEJO COBMOS/JSON ------------- //
//---------------------------------------------- //
var vias   ={"data":[
     {"id":"ACCES","descripcion":"ACCESO"}
    ,{"id":"ALAM","descripcion":"ALAMEDA"}
    ,{"id":"ALDEA","descripcion":"ALDEA"}
    ,{"id":"ALTO","descripcion":"ALTO"}
    ,{"id":"APTOS","descripcion":"APARTAMENTOS"}
    ,{"id":"AUTO","descripcion":"AUTOESTRADA / AUTOPISTA"}
    ,{"id":"AVIA","descripcion":"AUTOVÍA"}
    ,{"id":"AVDA","descripcion":"AVENIDA"}
    ,{"id":"BDA","descripcion":"BAIXADA / BAJADA"}
    ,{"id":"BARRO","descripcion":"BARRIO"}
    ,{"id":"ACERA","descripcion":"BEIRARRÚA / ACERA"}
    ,{"id":"BLQUE","descripcion":"BLOQUE"}
    ,{"id":"BULEV","descripcion":"BULEVAR"}
    ,{"id":"CLLON","descripcion":"CALEXÓN / CALLEJON"}
    ,{"id":"CZADA","descripcion":"CALZADA"}
    ,{"id":"CAMI","descripcion":"CAMIÑO / CAMINO"}
    ,{"id":"CRA","descripcion":"CARREIRA / CARRERA"}
    ,{"id":"CRO","descripcion":"CARREIRO / CARRERO"}
    ,{"id":"CTRA","descripcion":"CARRETERA"}
    ,{"id":"CERRO","descripcion":"CERRO"}
    ,{"id":"CINT","descripcion":"CINTURÓN"}
    ,{"id":"CIRCU","descripcion":"CIRCUNVALACIÓN"}
    ,{"id":"C.N.","descripcion":"CMNO NOVO / NUEVO"}
    ,{"id":"C.V.","descripcion":"CMNO VELLO / VIEJO"}
    ,{"id":"CRRDA","descripcion":"CORREDOIRA / CORREDERA"}
    ,{"id":"COSTA","descripcion":"COSTA"}
    ,{"id":"ENTD","descripcion":"ENTRADA"}
    ,{"id":"ESCA","descripcion":"ESCALEIRA / ESCALERA"}
    ,{"id":"ESTDA","descripcion":"ESTRADA"}
    ,{"id":"EXPLA","descripcion":"EXPLANADA"}
    ,{"id":"FINCA","descripcion":"FINCA"}
    ,{"id":"GTA","descripcion":"GLORIETA"}
    ,{"id":"LUGAR","descripcion":"LUGAR"}
    ,{"id":"MALEC","descripcion":"MALECÓN"}
    ,{"id":"MIRAD","descripcion":"MIRADOR"}
    ,{"id":"MONTE","descripcion":"MONTE"}
    ,{"id":"PQUE","descripcion":"PARQUE"}
    ,{"id":"PASAI","descripcion":"PASAXE / PASAJE"}
    ,{"id":"PASEO","descripcion":"PASEO"}
    ,{"id":"PZTA","descripcion":"PLAZOLETA"}
    ,{"id":"POLIG","descripcion":"POLÍGONO"}
    ,{"id":"PNTE","descripcion":"PONTE / PUENTE"}
    ,{"id":"PLAYA","descripcion":"PRAIA / PLAYA"}
    ,{"id":"PLAZA","descripcion":"PRAZA / PLAZA"}
    ,{"id":"RCON","descripcion":"RECANTO / RINCON"}
    ,{"id":"RBRA","descripcion":"RIBEIRA / RIBERA"}
    ,{"id":"RONDA","descripcion":"RONDA"}
    ,{"id":"RTDA","descripcion":"ROTONDA"}
    ,{"id":"CALLE","descripcion":"RÚA / CALLE"}
    ,{"id":"SENDA","descripcion":"SENDA"}
    ,{"id":"TRVA","descripcion":"TRAVESÍA"}
    ,{"id":"URB","descripcion":"URBANIZACIÓN"}
    ,{"id":"VALLE","descripcion":"VAL / VALLE"}
    ,{"id":"VEGA","descripcion":"VEIGA / VEGA"}
    ,{"id":"VIA","descripcion":"VÍA"}
    ,{"id":"VCTO","descripcion":"VIADUCTO"}
    ,{"id":"JDIN","descripcion":"XARDÍN / JARDÍN"}
    ,{"id":"ZONA","descripcion":"ZONA"}
]};

var vias_es={"data":[
     {"id":"ACCES","descripcion":"ACCESO"}
    ,{"id":"ALAM","descripcion":"ALAMEDA"}
    ,{"id":"ALDEA","descripcion":"ALDEA"}
    ,{"id":"ALTO","descripcion":"ALTO"}
    ,{"id":"APTOS","descripcion":"APARTAMENTOS"}
    ,{"id":"AUTO","descripcion":"AUTOESTRADA / AUTOPISTA"}
    ,{"id":"AVIA","descripcion":"AUTOVÍA"}
    ,{"id":"AVDA","descripcion":"AVENIDA"}
    ,{"id":"BDA","descripcion":"BAIXADA / BAJADA"}
    ,{"id":"BARRO","descripcion":"BARRIO"}
    ,{"id":"ACERA","descripcion":"BEIRARRÚA / ACERA"}
    ,{"id":"BLQUE","descripcion":"BLOQUE"}
    ,{"id":"BULEV","descripcion":"BULEVAR"}
    ,{"id":"CLLON","descripcion":"CALEXÓN / CALLEJON"}
    ,{"id":"CZADA","descripcion":"CALZADA"}
    ,{"id":"CAMI","descripcion":"CAMIÑO / CAMINO"}
    ,{"id":"CRA","descripcion":"CARREIRA / CARRERA"}
    ,{"id":"CRO","descripcion":"CARREIRO / CARRERO"}
    ,{"id":"CTRA","descripcion":"CARRETERA"}
    ,{"id":"CERRO","descripcion":"CERRO"}
    ,{"id":"CINT","descripcion":"CINTURÓN"}
    ,{"id":"CIRCU","descripcion":"CIRCUNVALACIÓN"}
    ,{"id":"C.N.","descripcion":"CMNO NOVO / NUEVO"}
    ,{"id":"C.V.","descripcion":"CMNO VELLO / VIEJO"}
    ,{"id":"CRRDA","descripcion":"CORREDOIRA / CORREDERA"}
    ,{"id":"COSTA","descripcion":"COSTA"}
    ,{"id":"ENTD","descripcion":"ENTRADA"}
    ,{"id":"ESCA","descripcion":"ESCALEIRA / ESCALERA"}
    ,{"id":"ESTDA","descripcion":"ESTRADA"}
    ,{"id":"EXPLA","descripcion":"EXPLANADA"}
    ,{"id":"FINCA","descripcion":"FINCA"}
    ,{"id":"GTA","descripcion":"GLORIETA"}
    ,{"id":"LUGAR","descripcion":"LUGAR"}
    ,{"id":"MALEC","descripcion":"MALECÓN"}
    ,{"id":"MIRAD","descripcion":"MIRADOR"}
    ,{"id":"MONTE","descripcion":"MONTE"}
    ,{"id":"PQUE","descripcion":"PARQUE"}
    ,{"id":"PASAI","descripcion":"PASAXE / PASAJE"}
    ,{"id":"PASEO","descripcion":"PASEO"}
    ,{"id":"PZTA","descripcion":"PLAZOLETA"}
    ,{"id":"POLIG","descripcion":"POLÍGONO"}
    ,{"id":"PNTE","descripcion":"PONTE / PUENTE"}
    ,{"id":"PLAYA","descripcion":"PRAIA / PLAYA"}
    ,{"id":"PLAZA","descripcion":"PRAZA / PLAZA"}
    ,{"id":"RCON","descripcion":"RECANTO / RINCON"}
    ,{"id":"RBRA","descripcion":"RIBEIRA / RIBERA"}
    ,{"id":"RONDA","descripcion":"RONDA"}
    ,{"id":"RTDA","descripcion":"ROTONDA"}
    ,{"id":"CALLE","descripcion":"RÚA / CALLE"}
    ,{"id":"SENDA","descripcion":"SENDA"}
    ,{"id":"TRVA","descripcion":"TRAVESÍA"}
    ,{"id":"URB","descripcion":"URBANIZACIÓN"}
    ,{"id":"VALLE","descripcion":"VAL / VALLE"}
    ,{"id":"VEGA","descripcion":"VEIGA / VEGA"}
    ,{"id":"VIA","descripcion":"VÍA"}
    ,{"id":"VCTO","descripcion":"VIADUCTO"}
    ,{"id":"JDIN","descripcion":"XARDÍN / JARDÍN"}
    ,{"id":"ZONA","descripcion":"ZONA"}
]};

var cargarVias = function(combo, idSelec){
	$lang = $( 'html' )[0].lang;
		
		if ( $lang === 'gl' ){
			
					cargarComboVia(vias, combo, idSelec);
			
			}else{
			
			cargarComboVia(vias_es, combo, idSelec);
		}
};

function cargarComboVia(response, combo, idSelec) {
 	try {
        var html = '<option value="">' + SELECCIONE + '</option>';
        var len = response.data.length;
        var id_combo = $(combo).attr('id');
        for ( var i = 0; i < len; i++) {
            //if (response.data[i].id.length == 5){
            if (id_combo.indexOf('cmbConcello') >= 0 || id_combo.indexOf('cmbSubarea') >= 0 ) {
                //Municipio ou subareas
                html += '<option value="' + response.data[i].id.substring(2,5) + '">'
                + response.data[i].descripcion + '</option>';
								
            } else  if (id_combo.indexOf('cmbVia') >= 0 ){
							
                //Provincia ou área ou modulos
                html += '<option value="' + response.data[i].id + '">'
                + response.data[i].descripcion + '</option>';
								
            } else {
							
                //Provincia ou área ou modulos
                html += '<option value="' + response.data[i].id + '">'
                + response.data[i].descripcion + '</option>';
								
            }
            
        }
        html += '</option>';
        $(combo).html(html);
        
        //Marcar la provincia seleccionada
        if (idSelec != null && idSelec.length == 2){
            $(combo).val(parseInt(idSelec, 10));
        }
        else {
            $(combo).val(idSelec);
        }
        
        //Si es un combo con hidden asociado, se actualiza el valor de éste
        hidden =  $('#hiddens').find('*[name="'+$(combo).attr('name')+'"]');
        if (hidden != undefined && hidden != null){
            hidden.val(idSelec);
        }
    }
    catch(err) {
        console.log("ERROR cargarCombo : " + err.message);
    }
}

// Llamada síncrona a un json
function syncGetJSON(url, data, callback) {
    return $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: callback,
        data: data,
        async: false
    }).error(function (jqXHR, textStatus, errorThrown) {
        // TODO: SEDE: REVISAR
        alert(local(loc.ErrJSON.id) + '[' + textStatus + ',' + errorThrown + ']');
        //alert('Se ha producido un error durante la carga de un recurso: [' + textStatus + ',' + errorThrown + ']. Inténtelo de nuevo. Si el problema persiste contacte con el administrador del sistema.');
    });
}

//Función general para la carga de combos, recibiendo una respuesta json formada por id y descripción
function cargarCombo(response, combo, idSelec) {
	var html = '<option value="">' + SELECCIONE + '</option>';
	var len = response.length;
	for ( var i = 0; i < len; i++) {
			html += '<option value="' + response[i].Id + '">'
			+ response[i].Value + '</option>';
	}
	html += '</option>';
	$(combo).html(html);
	
	$(combo).val(idSelec);
	
	
	//Si es un combo con hidden asociado, se actualiza el valor de éste
	hidden =  $('#hiddens').find('*[name="'+$(combo).attr('name')+'"]');
	if (hidden != undefined && hidden != null){
		hidden.val(idSelec);
	}
}


//Diccionario simple 
function Dictionary() {
    var dictionary = {};

    this.setData = function (key, val) { dictionary[key] = val; }
    this.getData = function (key) { return dictionary[key]; }
    this.hasKey = function (key) { return dictionary[key] != undefined; }
}

//Carga un combo de países.
//Recibe el id del combo y el valor seleccionado del combo (opcional)
var cargarPaises = function (combo, idSelec) {
    syncGetJSON(global_urlFacadeWS + 'paises', {
        'idioma': getLenguaje()
    }, function (response) {
        cargarCombo(response.PaisesResult, combo, idSelec);
    });
};

var cachePaises = new Dictionary();
//Función para cargar un combo de provincias (con caché de datos). 
//Recibe el id del combo y el valor seleccionado del combo (opcional) 
var cargarPaisesConCache = function (combo, idSelec) {
    var data = cachePaises.getData(getLenguaje());

    if (data == null) {
        syncGetJSON(global_urlFacadeWS + 'paises', {
            'idioma': getLenguaje()
        }, function (response) {
            cargarCombo(response.PaisesResult, combo, idSelec);
            cachePaises.setData(getLenguaje(), response);
        });
    } else {
        cargarCombo(data.PaisesResult, combo, idSelec);
    }
};

var cachePaisesMundo = new Dictionary();
//Función para cargar un combo de provincias (con caché de datos). 
//Recibe el id del combo y el valor seleccionado del combo (opcional) 
var cargarPaisesMundo = function (combo, idSelec) {
    var data = cachePaisesMundo.getData(getLenguaje());

    if (data == null) {
        syncGetJSON(global_urlFacadeWS + 'paisesDelMundo', {
            'idioma': getLenguaje()
        }, function (response) {
            cargarCombo(response.PaisesDelMundoResult, combo, idSelec);
            cachePaisesMundo.setData(getLenguaje(), response);
        });
    } else {
        cargarCombo(data.PaisesDelMundoResult, combo, idSelec);
    }
};

//Función para cargar un combo de provincias.
//Recibe el id del combo y el valor seleccionado del combo (opcional)
var cargarProvincias = function (combo, idSelec) {
    syncGetJSON(global_urlFacadeWS + 'provincias', {
        'idioma': getLenguaje()
    }, function (response) {
        cargarCombo(response.ProvinciasResult, combo, idSelec);
    });
};

var cacheProvincias = new Dictionary();
//Función para cargar un combo de provincias (con caché de datos). 
//Recibe el id del combo y el valor seleccionado del combo (opcional) 
var cargarProvinciasConCache = function (combo, idSelec) {
    var data = cacheProvincias.getData(getLenguaje());

    if (data == null) {
        syncGetJSON(global_urlFacadeWS + 'provincias', {
            'idioma': getLenguaje()
        }, function (response) {
            cargarCombo(response.ProvinciasResult, combo, idSelec);
            cacheProvincias.setData(getLenguaje(), response);
        });
    } else {
        cargarCombo(data.ProvinciasResult, combo, idSelec);
    }
	
};

//Función para cargar un combo de municipios a partir de la provincia.
//Recibe el id del combo, el valor de la provincia y el valor seleccionado del combo (opcional)
var cargarMunicipios = function (combo, idProvincia, idSelec) {
    if (typeof idProvincia !== 'undefined' && idProvincia !== "") {

        syncGetJSON(global_urlFacadeWS + 'municipios', {
            'provincia': idProvincia,
            'idioma': getLenguaje()
        }, function (response) {
            cargarCombo(response.MunicipiosResult, combo, idSelec);
            $(combo).trigger('change');
        });
    }
};

    //Función que se ejecuta en un evento onchange del select de provincias.
    //Dentro del evento se le pasa el parámetro del select de municipios que debe recargar
    var evRecargarMunicipios = function (event) {
        var comboMunicipios = event.data.destino;
        var idProvincia = $(this).val();

        cargarMunicipios(comboMunicipios, idProvincia, '');
    };

    //Función que se ejecuta en un evento onchange del select de provincias.
    //Dentro del evento se le pasa el parámetro del select de municipios que debe recargar
    var evRecargarProvincias = function (event) {
        var comboProvincias = event.data.destino;

        if ($(this).val() == 108) { // Codigo INE de España

            //Se cargan las provincias en el caso de que el pais seleccionado sea España		
            var idProvinciaAux = event.data.provinciaAux;

            if (typeof idProvincia !== 'undefined' && idProvinciaAux != null) {
                cargarProvinciasConCache(comboProvincias, idProvinciaAux);
            } else {
                cargarProvinciasConCache(comboProvincias, '0');
            }
            //Se activa el combo de la provincia
            reactivarInput(comboProvincias);
        }
        else {
            desactivarInput(comboProvincias);
            $(comboProvincias).val('0');
        }
    };

    //Funcion que rellena el campo Hidden asociado al combo y lo coloca en el campo siguiente
    var copiaHiddenDeCombo = function () {
        //alert("I "+ $(this).find("option:selected").text());
        $(this).next().val($(this).find('option:selected').text());
    };

    // Copia el texto del combo indicado en el input indicado.
    var copiarComboAInput = function (idCombo, idInput) {
        var destino = $(idInput);
        var opcion = $(idCombo).find('option:selected');
        // Si hay una opción seleccionada cuyo valor no es "" pongo el texto en el control vinculado, si no vacío.
        var valor = "";
        if (opcion.length && opcion.val() != "")
            valor = opcion.text();

        if (destino.is(':disabled'))
            desactivarInput(destino, valor);
        else
            destino.val(valor);
    };
    // Hace que cuando cambie un combo se actualize el valor del input destino (por id).
    var evCopiarComboAInput = function (event) {
        copiarComboAInput(this, event.data.destino);
    };
    // Hace que cuando cambie un combo se actualize el valor del input destino (por id).
    var vincularComboAInput = function (idCombo, idInput, ignorarCopia) {
        // Fijar eventos de vincular a txt 
        $(idCombo).change({ destino: idInput }, evCopiarComboAInput);
        // Copiar valor actual
        if (!ignorarCopia) {
            copiarComboAInput(idCombo, idInput);
        }
    };

    // ---------------------------------------------- //
    // ------------- GESTIÓN DE CAMPOS -------------- //
    // ---------------------------------------------- //

    //Desactiva un grupo de radiobuttons
    var desactivarRadio = function (nombre) {
        var valor = $('input:radio[name*="' + nombre + '"]:checked').val();

        $('input:radio[name*="' + nombre + '"]').each(function (index) {
            $(this).attr('disabled', 'disabled');
        });

        addHidden("campos['" + nombre + "']", valor);
    };

    //Desmarca todos los elementos del radioButton
    var desmarcarRadio = function (nombre) {
        $('input:radio[name*="' + nombre + '"]').each(function (index) {
            $(this).attr('checked', false);
        });
    };

    //Desactiva un input recibiendo el propio elemento.
    //Válido para input, select y textArea
    //El parámetro fixedSelectValue se usa en los combos de carga dinámica, ya que en el momento de la genración de los
    //hiddens todavía no tienen asignado su valor.
    var desactivarInput = function (elemento, fixedSelectValue) {
        $(elemento).attr('disabled', 'disabled');
        $(elemento).addClass("deshabilitado");

        //Si es un campo fecha y tiene el datePicker, también se borra la imagen asociada
        if ($(elemento).hasClass("hasDatepicker")) {
            $(elemento).removeClass("hasDatepicker");
            $(elemento).next().remove();
        }

        //Las cnae/iae tiene un div buscador al lado
        if ($(elemento).hasClass("cnae") || $(elemento).hasClass("iae")) {
            $(elemento).next().remove();
        }


        //Si es un checkBox, sólo se guarda el valor si está checkeado
        if ($(elemento).prop('tagName').toUpperCase() == 'INPUT' && $(elemento).attr('type').toUpperCase() == 'CHECKBOX') {
            if ($(elemento).is(':checked')) {
                addHidden($(elemento).attr('name'), $(elemento).val());
            }
            else {
                addHidden($(elemento).attr('name'), '');
            }
        }
        else {
            if (fixedSelectValue != null) {
                addHidden($(elemento).attr('name'), fixedSelectValue);
            }
            else {
                addHidden($(elemento).attr('name'), $(elemento).val());
            }
        }

    };

    //Activa y restaura el valor anterior del input, borrando el hidden
    var reactivarInput = function (elemento) {
        hidden = $('#hiddens').find('*[name="' + $(elemento).attr('name') + '"]');
        $(elemento).removeClass("deshabilitado");

        $(elemento).removeAttr('disabled');
        if (hidden != null && hidden.length == 1) {
            //$(elemento).val(hidden.val());
            hidden.remove();
        }
    };

    //Asigna el valor que tenía este elemento al cargarse la página
    var asignarValorInicial = function (elemento) {
        //Recuperar el valor original a partir de la variable global del formulario		
        var nombre = parseaNombreCampo($(elemento).attr('name'));

        if ($(elemento).prop('tagName').toUpperCase() == 'INPUT' && $(elemento).attr('type').toUpperCase() == 'CHECKBOX') {
            //Los checks hay que marcarlos/desmarcarlos, en vez de asignarles valor
            if (datosForm[nombre] != null && datosForm[nombre] != "") {
                $(elemento).attr('checked', true);
            }
            else {
                $(elemento).removeAttr('checked');
            }
        }
        else
            $(elemento).val(datosForm[nombre]);
    };

    //Añade un hidden para un campo deshabilitado
    var addHidden = function (nombre, valor) {
        var hiddensBlock = $("#hiddens");


        var hidden = hiddensBlock.find('*[name="' + nombre + '"]');
        if (hidden != null && hidden != undefined) {
            hidden.remove();
        }

        $('<input>').attr({
            type: 'hidden',
            name: nombre,
            value: valor
        }).appendTo(hiddensBlock);
    };

    //Desactiva todos los select, input (text y checkBox) y textArea 
    var desactivarTodo = function (idForm, idsExcluidos) {
        var bFiltrarExcluidos = (idsExcluidos != null && idsExcluidos.length > 0);
        var bExcluir = false;

        //Inputs
        $('#' + idForm + ' :input').each(function (index) {
            bExcluir = false;

            //1 - Filtrado de ids excluidos de la desactivación
            if (bFiltrarExcluidos) {
                var idElemento = $(this).attr('id');

                for (var i = 0; i < idsExcluidos.length; i++) {
                    if (idElemento == idsExcluidos[i]) {
                        bExcluir = true;
                        break;
                    }
                }
            }


            //2 - Desactivar, si procediere
            if (bExcluir == false) {
                var tag = $(this).prop('tagName').toUpperCase();

                if (tag == "SELECT" || tag == "TEXTAREA") {
                    desactivarInput($(this));
                }
                else if (tag == "INPUT") {
                    var tipo = $(this).attr('type').toUpperCase();

                    if (tipo == "TEXT" || tipo == "CHECKBOX") {
                        desactivarInput($(this));
                    }
                }
            }
        });
    };


    //Rutina de evento que obliga a meter valores decimales con las siguientes restricciones:
    //- Las comas se sustituyen por puntos
    //- No se permite más de un punto/coma
    //- No se permiten más de dos importes decimales
    var controlarDecimal = function (event) {
        var key = event.which;
        var bValida = false;

        //Número
        if (key >= 48 && key <= 57) {
            //Es un número
            bValida = true;
            var pos = -1;
            var texto = $(this).val();

            var posPunto = texto.indexOf(".");

            //Cuando ya se metió una punto, se comprueba que no se metan más de dos decimales
            if (posPunto != -1) {
                //IE
                if (document.selection) {
                    rangoTexto = document.selection.createRange();
                    var contador = 0;
                    while (rangoTexto.move('character', -1)) {
                        contador++;
                    }
                    pos = contador;
                    // Chrome + FF
                } else if (this.selectionStart || this.selectionStart == '0') {
                    pos = this.selectionEnd;
                }

                //Controlar que el número que se está metiendo no forma parte de los decimales
                var nDecimales = texto.substring(posPunto + 1).length;
                if (nDecimales >= 2 && pos > posPunto) {
                    bValida = false;
                }
            }
        }
        else if (key == 46) {
            //Es una punto
            if ($(this).val().indexOf('.') == -1) {
                bValida = true;
            }
            else {
                bValida = false;
            }
        }
        else if (key == 44) {
            //Es un coma, se sustituye por una punto !!
            bValida = false;

            //Ver que no metan dos comas
            if ($(this).val().indexOf('.') == -1) {

                if (document.selection) {
                    // Determines the selected text. If no text selected,
                    // the location of the cursor in the text is returned
                    var range = document.selection.createRange();

                    // Place the comma on the location of the selection,
                    // and remove the data in the selection
                    range.text = '.';

                    // Chrome + FF
                } else if (this.selectionStart || this.selectionStart == '0') {
                    // Determines the start and end of the selection.
                    // If no text selected, they are the same and
                    // the location of the cursor in the text is returned
                    // Don't make it a $ obj, because selectionStart 
                    // and selectionEnd isn't known.
                    var start = this.selectionStart;
                    var end = this.selectionEnd;

                    // Place the comma on the location of the selection,
                    // and remove the data in the selection
                    $(this).val($(this).val().substring(0, start) + '.' + $(this).val().substring(end, $(this).val().length));

                    // Set the cursor back at the correct location in 
                    // the text
                    this.selectionStart = start + 1;
                    this.selectionEnd = start + 1;

                } else {
                    // if no selection could be determined, 
                    // place the comma at the end.
                    $(this).val($(this).val() + '.');
                }
            }
        }
        else if (key == 8 || (key >= 37 && key <= 45) || key == 45 || key == 46) {
            //Flechas, borrado
            bValida = true;
        }
        else if (key == 0) {
            //Otros caracteres no imprimibles
            bValida = true;
        }



        if (!bValida) {
            event.preventDefault();
            return false;
        }
        //event.returnValue = false;
        //return false;
    };

    //Rutina de evento que obliga a meter valores enteros con las siguientes restricciones:
    var controlarEntero = function (event) {
        var key = event.which;
        var bValida = false;

        //Número
        if (key >= 48 && key <= 57) {
            //Es un número
            bValida = true;
        }
        else if (key == 46 || key == 44) {
            // punto y com
            bValida = false;
        }
        else if (key == 8 || (key >= 37 && key <= 45) || key == 45 || key == 46) {
            //Flechas, borrado
            bValida = true;
        }
        else if (key == 0) {
            //Otros caracteres no imprimibles
            bValida = true;
        }

        if (!bValida) {
            event.preventDefault();
            return false;
        }
        //event.returnValue = false;
        //return false;
    };
	
	//Rutina de evento que obliga a meter valores de tipo teléfono con las siguientes restricciones:
    var controlarTelefono = function (event) {
        var key = event.which;
        var bValida = false;

        //Número
        if (key >= 48 && key <= 57) {
            //Es un número
            bValida = true;
        }
        else if (key == 8 || (key >= 37 && key <= 45) || key == 45 || key == 46) {
            //Flechas, borrado
            bValida = true;
        }

        if (!bValida) {
            event.preventDefault();
            return false;
        }
        //event.returnValue = false;
        //return false;
    };
	
	//Rutina de evento que obliga a meter valores de tipo código postal con las siguientes restricciones:
    var controlarCp = function (event) {
        var key = event.which;
        var bValida = false;

        //Número
        if (key >= 48 && key <= 57) {
            //Es un número
            bValida = true;
        }
        else if (key == 8 || (key >= 37 && key <= 45) || key == 45 || key == 46) {
            //Flechas, borrado
            bValida = true;
        }

        if (!bValida) {
            event.preventDefault();
            return false;
        }
        //event.returnValue = false;
        //return false;
    };
	
	//Rutina de evento que obliga a meter valores de tipo email con las siguientes restricciones:
    var controlarEmail = function (event) {
        var key = event.which;
        var bValida = false;

        //Número
        if (key >= 48 && key <= 57) {
            //Es un número
            bValida = true;
        }
		
		else if (key == 46) {
            //Es un punto
            if ($(this).val().indexOf('.') == -1) {
                bValida = true;
            }
            else {
                bValida = false;
            }
        }
        else if (key == 8 || (key >= 37 && key <= 45) || key == 45 || key == 46) {
            //Flechas, borrado
            bValida = true;
        }

		else if (key == 64 || key >= 94 && key <= 126 || key >= 65 && key <= 90 || key == 33 || key >= 35 && key <= 39 || key == 42 || key == 43 || key == 45 || key == 47 || key == 61 || key == 63) {
			//@ ^ _ ` A-Z { | } ~ a-z ! # $ % & ' * + - / = ?
			bValida = true;
		}

        if (!bValida) {
            event.preventDefault();
            return false;
        }
        //event.returnValue = false;
        //return false;
    };

    //Recibe el nombre completo del campo con la estructura campos['....'] y devuelve el contenido entre corchetes
    var parseaNombreCampo = function (nombre) {
        if (nombre == null || nombre == undefined)
            return null;
        var res = nombre.match(/campos\[\'(.*)\'\]/);
        return res[1];

    };

    var getIdEscape = function (id) {
        return id.replace(/(:|\.|\[|\]|,)/g, "\\$1");
    };

    //************************************************************************ //
    //**************************** CNAEs y CPAs ****************************** //
    //************************************************************************ //

    var escapeBusquedas = function (valor) {
        return valor.replace(/"/g, '&quot').replace('\'', '\\\'');
    };
    var unescapeBusquedas = function (valor) {
        return valor.replace(/&quot/g, '"');
    };

    //************************************************************************ //
    //******************************** CNAEs ********************************* //
    //************************************************************************ //

    //Buscador de CNAES/IAES
    var mostrarBuscador = function (tipo, idDescripcion, idCodigo) {
        //Preparar valores para la vuelta	
        if (idDescripcion != "") {
            $('#buscadorCnaeIae_returnText').val(idDescripcion);
        }
        $('#buscadorCnaeIae_returnCode').val(idCodigo);

        //Abrir el popup
        $('#buscadorCnaeIae').dialog({
            draggable: true,
            modal: true,
            dialogClass: 'fixed-dialog buscadorCnaeCpa-dialog',
            resizable: false,
            width: '700',
            minWidth: '700',
            minHeight: '150',
            show: {
                effect: "blind",
                duration: 1000
            },
            close: function (ev, ui) {
                //Al cerrar se limpian los campos de búsqueda y resultados
                $("#buscadorCnaeIae_codigo").val(''),
                $("#buscadorCnaeIae_descripcion").val('');

                $("#resultadosBuscadorCnaeIae").find("tr:gt(0)").remove();

                $('#resultadosBuscadorCnaeIae').parent().removeAttr('style');
            }
        });
    };

    //Realizar la búsqueda
    var buscarBuscadorIaeCnae = function () {
        var url = global_urlFacadeWS + 'cnaes';

        syncGetJSON(url,
            {
                idioma: getLenguaje(),
                codCNAE: $("#buscadorCnae_codigo").val(),
                desCNAE: $("#buscadorCnae_descripcion").val()
            },
            function (response) {
                //Borrar todas las filas excepto la primera
                $("#resultadosBuscadorCnaeIae").find("tr:gt(0)").remove();

                var data = response.SearchCNAEsResult;
                var len = data.length;
                if (len > 0) {
                    //Pintar los elementos en la tabla
                    var td1 = '';
                    var td2 = '';
                    var td3 = '';

                    for (var i = 0; i < len; i++) {
                        td1 = '<td> <input type="radio" name="radioSeleccionBuscadorCnaeIae" value="' + data[i].Id + '" tabindex="0" onclick="seleccionarBuscadorIaeCnae(\'' + data[i].Id + '\',\'' + escapeBusquedas(data[i].Value) + '\');return false;"/>';
                        td2 = '<td>' + data[i].Id + '</td>';
                        td3 = '<td>' + data[i].Value + '</td>';

                        $('#resultadosBuscadorCnaeIae').append('<tr>' + td1 + td2 + td3 + '</tr>');
                    }

                    //Calcular el alto máximo de los resultados antes de mostrar scroll
                    if (len >= 18) {
                        $('#resultadosBuscadorCnaeIae').parent().attr('style', 'height:300px;overflow-y:scroll;');
                    }
                    else if (len <= 2) {
                        $('#resultadosBuscadorCnaeIae').parent().attr('style', 'height:40px;');
                    }
                    else {
                        $('#resultadosBuscadorCnaeIae').parent().attr('style', 'height:' + (len * 18) + 'px;');
                    }

                }
                else {
                    //No ha habido resultados
                    $('#resultadosBuscadorCnaeIae').append('<tr> <td colspan="3">' + $('#buscadorCnaeIae_noResultados').val() + '</td></tr>');

                    $('#resultadosBuscadorCnaeIae').parent().removeAttr('style');
                }

            }
        );

    };

    //Seleccionar un elemento y cerrar el popup
    var seleccionarBuscadorIaeCnae = function (codigo, descripcion) {
        var idDescripcion = $('#buscadorCnaeIae_returnText').val();
        var idCodigo = $('#buscadorCnaeIae_returnCode').val();

        if (idDescripcion != "") {
            $(idDescripcion).val(unescapeBusquedas(descripcion));
        }
        $(idCodigo).val(codigo);

        cerrarBuscadorIaeCnae();
    };

    // Cierra el popup del buscador
    var cerrarBuscadorIaeCnae = function () {
        $('#buscadorCnaeIae').dialog('close');
    };

    // Borra la actual selección de CNAE
    var borrarIaeCnae = function () {
        seleccionarBuscadorIaeCnae('', '');
    };

    //----------------- DSI --------------
    // Vincula el buscador de CNAEs: El boton que lo muestra y los texbox de descripción y código.
    var vincularBuscadorCNAEs = function (idBoton, idDescripcion, idCodigo) {
        $(idBoton).click(function (event) {
            //var objeto = getObjetoSolicitud();
            mostrarBuscador('CNAE', idDescripcion, idCodigo);
            if (event != undefined && event != null)
                event.stopPropagation();
        });
    }

    //************************************************************************ //
    //******************************** CPAs ********************************** //
    //************************************************************************ //

    var mostrarBuscadorCpa = function (tipo, idDescripcion, idCodigo) {
        //Preparar valores para la vuelta	
        if (idDescripcion != "") {
            $('#buscadorCpa_returnText').val(idDescripcion);
        }
        $('#buscadorCpa_returnCode').val(idCodigo);

        //Abrir el popup
        $('#buscadorCpa').dialog({
            draggable: true,
            modal: true,
            dialogClass: 'fixed-dialog buscadorCnaeCpa-dialog',
            resizable: false,
            width: 'auto',
            maxWidth: '700',
            height: 'auto',
            fluid: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            close: function (ev, ui) {
                //Al cerrar se limpian los campos de búsqueda y resultados
                $("#buscadorCpa_codigo").val(''),
                $("#buscadorCpa_descripcion").val('');

                $("#resultadosBuscadorCpa").find("tr:gt(0)").remove();

                $('#resultadosBuscadorCpa').parent().removeAttr('style');
            }
        });



    };

    //Realizar la búsqueda
    var buscarBuscadorCpa = function () {

        var url = global_urlFacadeWS + 'cpas';
        
        syncGetJSON(url,
            {
                idioma: $("#buscadorCpa_idioma").val(),
                codCPA: $("#buscadorCpa_codigo").val(),
                desCPA: $("#buscadorCpa_descripcion").val(),
                mostrarRIA: true,
                mostrarResfor: true
            },
            function (response) {
                //Borrar todas las filas excepto la primera
                $("#resultadosBuscadorCpa").find("tr:gt(0)").remove();

                var data = response.SearchCPAsResult;
                var len = data.length;
                if (len > 0) {
                    //Pintar los elementos en la tabla
                    var td1 = '';
                    var td2 = '';
                    var td3 = '';

                    for (var i = 0; i < len; i++) {
                        td1 = '<td> <input type="radio" name="radioSeleccionBuscadorCpa" value="' + data[i].Id + '" tabindex="0" onclick="seleccionarBuscadorCpa(\'' + data[i].Id + '\',\'' + escapeBusquedas(data[i].Value) + '\');return false;"/>';
                        td2 = '<td>' + data[i].Id + '</td>';
                        td3 = '<td>' + data[i].Value + '</td>';

                        $('#resultadosBuscadorCpa').append('<tr>' + td1 + td2 + td3 + '</tr>');
                    }

                    //Calcular el alto máximo de los resultados antes de mostrar scroll
                    if (len >= 18) {
                        $('#resultadosBuscadorCpa').parent().attr('style', 'height:300px; overflow-y:scroll;');
                    }
                    else if (len <= 2) {
                        $('#resultadosBuscadorCpa').parent().attr('style', 'height:40px;');
                    }
                    else {
                        $('#resultadosBuscadorCpa').parent().attr('style', 'height:' + (len * 18) + 'px;');
                    }

                }
                else {
                    //No ha habido resultados
                    $('#resultadosBuscadorCpa').append('<tr> <td colspan="3">' + $('#buscadorCpa_noResultados').val() + '</td></tr>');

                    $('#resultadosBuscadorCpa').parent().removeAttr('style');
                }

            });
    };

    //Seleccionar un elemento y cerrar el popup
    var seleccionarBuscadorCpa = function (codigo, descripcion) {
        var idDescripcion = $('#buscadorCpa_returnText').val();
        var idCodigo = $('#buscadorCpa_returnCode').val();

        if (idDescripcion != "") {
            $(idDescripcion).val(unescapeBusquedas(descripcion));
        }
        $(idCodigo).val(codigo);

        cerrarBuscadorCpa();
    };

    // Cierra el popup del buscador
    var cerrarBuscadorCpa = function () {
        $('#buscadorCpa').dialog('close');
    };

    // Borra la actual selección de CPA
    var borrarCpa = function () {
        seleccionarBuscadorCpa('', '');
    };

    // Vincula el buscador de CPAS: El boton que lo muestra y los texbox de descripción y código.
    var vincularBuscadorCPAs = function (idBoton, idDescripcion, idCodigo) {
        $(idBoton).click(function (event) {
            //var objeto = getObjetoSolicitud();
            mostrarBuscadorCpa('CPA', idDescripcion, idCodigo);
            if (event != undefined && event != null)
                event.stopPropagation();
        });
    }

    //************************************************************************ //
    //******************************** IAEs ********************************** //
    //************************************************************************ //

    var mostrarBuscadorIae = function (tipo, idDescripcion, idCodigo) {
        //Preparar valores para la vuelta	
        if (idDescripcion != "") {
            $('#buscadorIae_returnText').val(idDescripcion);
        }
        $('#buscadorIae_returnCode').val(idCodigo);

        //Abrir el popup
        $('#buscadorIae').dialog({
            draggable: true,
            modal: true,
            dialogClass: 'fixed-dialog buscadorCnaeCpa-dialog',
            resizable: false,
            width: 'auto',
            maxWidth: '700',
            height: 'auto',
            fluid: true,
            show: {
                effect: "blind",
                duration: 1000
            },
            close: function (ev, ui) {
                //Al cerrar se limpian los campos de búsqueda y resultados
                $("#buscadorIae_codigo").val(''),
                $("#buscadorIae_descripcion").val('');

                $("#resultadosBuscadorIae").find("tr:gt(0)").remove();

                $('#resultadosBuscadorIae').parent().removeAttr('style');
            }
        });



    };

    //Realizar la búsqueda
    var buscarBuscadorIae = function () {

        var url = global_urlFacadeWS + 'IAE';

        syncGetJSON(url,
            {
                idioma: $("#buscadorIae_idioma").val(),
                codigo: $("#buscadorIae_codigo").val(),
                descripcion: $("#buscadorIae_descripcion").val()
            },
            function (response) {
                //Borrar todas las filas excepto la primera
                $("#resultadosBuscadorIae").find("tr:gt(0)").remove();

                var data = response.data;
                var len = data.length;
                if (len > 0) {
                    //Pintar los elementos en la tabla
                    var td1 = '';
                    var td2 = '';
                    var td3 = '';

                    for (var i = 0; i < len; i++) {
                        td1 = '<td> <input type="radio" name="radioSeleccionBuscadorIae" value="' + data[i].codigo + '" tabindex="0" onclick="seleccionarBuscadorIae(\'' + data[i].codigo + '\',\'' + escapeBusquedas(data[i].descripcion) + '\');return false;"/>';
                        td2 = '<td>' + data[i].codigo + '</td>';
                        td3 = '<td>' + data[i].descripcion + '</td>';

                        $('#resultadosBuscadorIae').append('<tr>' + td1 + td2 + td3 + '</tr>');
                    }

                    //Calcular el alto máximo de los resultados antes de mostrar scroll
                    if (len >= 18) {
                        $('#resultadosBuscadorIae').parent().attr('style', 'height:300px; overflow-y:scroll;');
                    }
                    else if (len <= 2) {
                        $('#resultadosBuscadorIae').parent().attr('style', 'height:40px;');
                    }
                    else {
                        $('#resultadosBuscadorIae').parent().attr('style', 'height:' + (len * 18) + 'px;');
                    }

                }
                else {
                    //No ha habido resultados
                    $('#resultadosBuscadorIae').append('<tr> <td colspan="3">' + $('#buscadorIae_noResultados').val() + '</td></tr>');

                    $('#resultadosBuscadorIae').parent().removeAttr('style');
                }

            });
    };

    //Seleccionar un elemento y cerrar el popup
    var seleccionarBuscadorIae = function (codigo, descripcion) {
        var idDescripcion = $('#buscadorIae_returnText').val();
        var idCodigo = $('#buscadorIae_returnCode').val();

        if (idDescripcion != "") {
            $(idDescripcion).val(unescapeBusquedas(descripcion));
        }
        $(idCodigo).val(codigo);

        cerrarBuscadorIae();
    };

    // Cierra el popup del buscador
    var cerrarBuscadorIae = function () {
        $('#buscadorIae').dialog('close');
    };

    // Borra la actual selección de Iae
    var borrarIae = function () {
        seleccionarBuscadorIae('', '');
    };

    // Vincula el buscador de IaeS: El boton que lo muestra y los texbox de descripción y código.
    var vincularBuscadorIaes = function (idBoton, idDescripcion, idCodigo) {
        $(idBoton).click(function (event) {
            //var objeto = getObjetoSolicitud();
            mostrarBuscadorIae('IAE', idDescripcion, idCodigo);
            if (event != undefined && event != null)
                event.stopPropagation();
        });
    }

    //************************************************************************ //
    //**************************** VALIDACIONES ****************************** //
    //************************************************************************ //
    var nifSolicitanteRepresentante = function () {
        var found = false;
        var nif = "";
        if (datosCert.personaJuridica)
            nif = datosCert.nifResponsable;
        else
            nif = datosCert.nif;
            

        //Solicitante
        $('[tipo=solicitante]').each(function () {
            if ($(this).val() == nif)
                found = true;
        });

        //Representante
        $('[tipo=representante]').each(function () {
            if ($(this).val() == nif)
                found = true;
        });

        return found;
    }

    var marcarNifsSolicitanteRepresentanteForm = function () {

        //Solicitante
        $('[tipo=solicitante]').each(function () {
            var id = getIdEscape($(this).attr("id"));
            $('#' + id).css("border-color", "red");
        });

        //Representante
        $('[tipo=representante]').each(function () {
            var id = getIdEscape($(this).attr("id"));
            $('#' + id).css("border-color", "red");
        });
    }


    //************************************************************************ //
    //***************************** PAGINACION ******************************* //
    //************************************************************************ //
    var Paginador = {
        min: 0,
        max: 0,
        ready: function () {
            var paginas = $('div.pagina');
            var paginadores = $('div.paginador');
            if (paginas.length == 0 || paginadores.length == 0) return;

            var i = 0;
            paginas.each(function () {
                i++;
                var pagina = $(this);
                pagina.attr('nPagina', i);
                paginadores.each(function () {
                    var descripcion = pagina.attr('descripcion');
                    if (!descripcion) descripcion = i;
                    $(this).find('select').append($('<option></option>').attr('value', i).text(descripcion));
                });
            });
            min = 1;
            max = i;

            paginadores.each(function () {
                $(this).find('select').change(Paginador.changed);
                $(this).show();
            });

            $('.btnPaginaAnterior').each(function () {
                $(this).click(Paginador.anterior);
            });
            $('.btnPaginaSiguiente').each(function () {
                $(this).click(Paginador.siguiente);
            });

            Paginador.pagina(1);
        },
        changed: function () {
            Paginador.pagina($(this).val());
        },
        pagina: function (value) {
            $('div.paginador').each(function () {
                $(this).find('select').val(value);
            });

            $('div.pagina[nPagina=' + value + ']').show();
            $('div.pagina[nPagina!=' + value + ']').hide();
        },
        siguiente: function () {
            var value = $('div.paginador').first().find('select').val();
            if (value < max) {
                value = parseInt(value) + 1;
            }
            Paginador.pagina(value);
        },
        anterior: function () {
            var value = $('div.paginador').first().find('select').val();
            if (value > min) {
                value = parseInt(value) - 1;
            }
            Paginador.pagina(value);
        }
    };
    //************************************************************************ //
    //******************************* READY ********************************** //
    //************************************************************************ //
    $(document).ready(function () {

        // Formato de controles según el atributo tipo    		
        $('[tipo*=entero]').bind("keypress", controlarEntero);
        $('[tipo*=decimal]').bind("keypress", controlarDecimal);
		$('[tipo*=telefono]').bind("keypress", controlarTelefono);
		$('[tipo*=cp]').bind("keypress", controlarCp);
		$('[tipo*=email]').bind("keypress", controlarEmail);

        // Campos de tipo Fecha	
        $('[tipo*=fecha]').each(function () {
            $(this).addClass("inputFecha fecha_dp");
        });

        // Fechas
        $('.fecha_dp').datepicker();

        // Carga de vias	
        $('[tipo*=via]').each(function () {
            cargarVias($(this), datosForm[parseaNombreCampo($(this).attr("name"))]);
        });

        // Carga de paises	
        $('[tipo*=paisMundo]').each(function () {
            cargarPaisesMundo($(this), datosForm[parseaNombreCampo($(this).attr("name"))]);
        });

        // Carga de provincias del form
        $('[tipo*=provincia]').each(function () {
            cargarProvinciasConCache($(this), datosForm[parseaNombreCampo($(this).attr("name"))]);
        });

        // Carga de municipios del form
        $('[tipo*=municipio]').each(function () {
            var provincia = $('[tipo=provincia][idmunicipio=' + getIdEscape($(this).attr("id")) + ']');
            cargarMunicipios($(this), provincia.val(), datosForm[parseaNombreCampo($(this).attr("name"))]);
            vincularComboAInput($(this), $(this).next('input[type=hidden]'), false);
        });

        // Change de los combos de provincia
        $('[tipo*=provincia]').each(function () {
            $(this).change({ destino: "#" + getIdEscape(($(this).attr("idmunicipio"))) }, evRecargarMunicipios);
        });

        // Change de los combos de paises del mundo. P ej. procedencia comunicación división I
        $('[tipo*=paisMundo]').each(function () {
            $(this).change({ destino: "#" + getIdEscape(($(this).attr("idProvinciaSpain"))), provinciaAux: datosForm[parseaNombreCampo($("#" + getIdEscape(($(this).attr("idProvinciaSpain")))).attr("name"))] }, evRecargarProvincias);
        });

        // Vincular buscadores CNAEs
        $('[tipo*=grupoCnae]').each(function () {
            var cnaeDesc;
            if ($(this).find($('[tipo=cnaeDesc]')).length > 0)
                cnaeDesc = '#' + getIdEscape($(this).find($('[tipo=cnaeDesc]'))[0].id);
            else
                cnaeDesc = "";
            vincularBuscadorCNAEs('#' + getIdEscape($(this).find($('[tipo=cnaeImg]'))[0].id), cnaeDesc, '#' + getIdEscape($(this).find($('[tipo=cnaeCod]'))[0].id));
        });

        // Vincular buscadores CPAs
        $('[tipo*=grupoCPA]').each(function () {
            var cnaeDesc;
            if ($(this).find($('[tipo=cpaDesc]')).length > 0)
                cpaDesc = '#' + getIdEscape($(this).find($('[tipo=cpaDesc]'))[0].id);
            else
                cpaDesc = "";
            vincularBuscadorCPAs('#' + getIdEscape($(this).find($('[tipo=cpaImg]'))[0].id), cpaDesc, '#' + getIdEscape($(this).find($('[tipo=cpaCod]'))[0].id));
        });

        // Vincular buscadores IAEs
        $('[tipo*=grupoIae]').each(function () {
            var cnaeDesc;
            if ($(this).find($('[tipo=iaeDesc]')).length > 0)
                cnaeDesc = '#' + getIdEscape($(this).find($('[tipo=iaeDesc]'))[0].id);
            else
                cnaeDesc = "";
            vincularBuscadorIaes('#' + getIdEscape($(this).find($('[tipo=iaeImg]'))[0].id), cnaeDesc, '#' + getIdEscape($(this).find($('[tipo=iaeCod]'))[0].id));
        });


        // Validación SES-Presentación (presentaciones telemáticas): NIF del Certificado presente en el Solicitante o Representante
        if (!esPresentacionPresencial) {
            $("#btn_presentarElect").click(function (event) {
                if (nifSolicitanteRepresentante() == false) {
                    marcarNifsSolicitanteRepresentanteForm();
                    alert(local(loc.ErrNifSolicitanteRepresentante.id));
                    if (event != undefined && event != null) {
                        event.stopPropagation();
                        event.preventDefault();
                    }
                    return false;
                }
            });
        }        

        Paginador.ready();
    });
/****************** CÓDIGO PERSONALIZADO *********************/
