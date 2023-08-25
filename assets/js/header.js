;(function($, window, document) {
	"use strict";

	function menuArrows() {
		var mobW = $(".site-header").attr("data-mobile-menu-resolution");
		if (window.outerWidth < mobW || $(".site-header").hasClass(".mobile-header")) {
			if (!$(".site-header .menu-item-has-children i.ti-plus").length) {
				$(".site-header .menu-item-has-children").append('<i class="fas ti-plus"></i>');
				$(".site-header .menu-item-has-children i.ti-plus").addClass("hide-drop");
			}

			$(".site-header .menu-item-has-children i.ti-plus").on("click", function() {
				if (!$(this).hasClass("animation")) {
					$(this).parent().toggleClass("is-open");
					$(this).addClass("animation");
					$(this).parent().siblings().removeClass("is-open").find(".fas").removeClass("hide-drop").prev(".sub-menu").slideUp(250);
					if ($(this).hasClass("hide-drop")) {
						if ($(this).closest(".sub-menu").length) {
							$(this).removeClass("hide-drop").prev(".sub-menu").slideToggle(250)
						} else {
							$(".site-header .menu-item-has-children i").addClass("hide-drop").next(".sub-menu").hide(250);
							$(this).removeClass("hide-drop").prev(".sub-menu").slideToggle(250)
						}
					} else {
						$(this).addClass("hide-drop").prev(".sub-menu").hide(100).find(".site-header .menu-item-has-children a").addClass("hide-drop").prev(".sub-menu").hide(250)
					}
				}

				setTimeout(removeClass, 250);

				function removeClass() {
					$(".site-header .site-main-menu i.ti-plus").removeClass("animation")
				}
			})
		} else {
			$(".site-header .menu-item-has-children i.ti-plus").remove()
		}
	}

	$(".additional-nav").on("click", function(e) {
		e.preventDefault();
		$(".additional-menu-wrapper").addClass("menu-open");
		$(".menu-wrapper").addClass("additional-menu-open")
	});
	$(".additional-nav-close, .additional-menu-overlay").on("click", function() {
		$(".additional-menu-wrapper").removeClass("menu-open");
		$(".menu-wrapper").removeClass("additional-menu-open")
	});

	$(window).on("load resize", function() {
		menuArrows();
	});
})(jQuery, window, document);







//
// /* accordion menu plugin*/ ;
// (function ($, window, document, undefined) {
// 	var pluginName = "mobileMenu";
// 	var defaults = {
// 		speed: 400,
// 		showDelay: 0,
// 		hideDelay: 0,
// 		singleOpen: true,
// 		clickEffect: true,
// 		indicator: 'active',
// 		subMenu: 'sub-menu',
// 		subMenu2: 'sub-sub-menu',
// 		event: 'click touchstart' // click, touchstart
// 	};
//
// 	function Plugin(element, options) {
// 		this.element = element;
// 		this.settings = $.extend({}, defaults, options);
// 		this._defaults = defaults;
// 		this._name = pluginName;
// 		this.init();
// 	}
// 	$.extend(Plugin.prototype, {
// 		init: function () {
// 			this.openSubmenu();
// 			if (defaults.clickEffect) {
// 				this.addClickEffect();
// 			}
// 		},
// 		openSubmenu: function () {
// 			$(this.element).children("ul").find("li").bind(defaults.event, function (e) {
// 				e.stopPropagation();
// 				e.preventDefault();
// 				var $subMenus = $(this).children("." + defaults.subMenu);
// 				var $allSubMenus = $(this).find("." + defaults.subMenu);
// 				if ($subMenus.length > 0) {
// 					if ($subMenus.css("display") == "none") {
// 						$subMenus.slideDown(defaults.speed).siblings("a").addClass(defaults.indicator);
// 						if (defaults.singleOpen) {
// 							$(this).siblings().find("." + defaults.subMenu).slideUp(defaults.speed)
// 								.end().find("a").removeClass(defaults.indicator);
// 						}
// 						return false;
// 					} else {
// 						$(this).find("." + defaults.subMenu).delay(defaults.hideDelay).slideUp(defaults.speed);
// 					}
// 					if ($allSubMenus.siblings("a").hasClass(defaults.indicator)) {
// 						$allSubMenus.siblings("a").removeClass(defaults.indicator);
// 					}
// 				}
// 				window.location.href = $(this).children("a").attr("href");
// 			});
// 		},
// 		addClickEffect: function () {
// 			var ink, d, x, y;
// 			$(this.element).find(".menu li a").bind("click touchstart", function (e) {
// 				$(".ink").remove();
// 				if ($(this).children(".ink").length === 0) {
// 					$(this).prepend("<span class='ink'></span>");
// 				}
// 				ink = $(this).find(".ink");
// 				ink.removeClass("animate-ink");
// 				if (!ink.height() && !ink.width()) {
// 					d = Math.max($(this).outerWidth(), $(this).outerHeight());
// 					ink.css({
// 						height: d,
// 						width: d
// 					});
// 				}
// 				x = e.pageX - $(this).offset().left - ink.width() / 2;
// 				y = e.pageY - $(this).offset().top - ink.height() / 2;
// 				ink.css({
// 					top: y + 'px',
// 					left: x + 'px'
// 				}).addClass("animate-ink");
// 			});
// 		}
// 	});
// 	$.fn[pluginName] = function (options) {
// 		this.each(function () {
// 			if (!$.data(this, "plugin_" + pluginName)) {
// 				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
// 			}
// 		});
// 		return this;
// 	};
//
// 	$(".menu-wrapper").mobileMenu();
// 	$(".fullscreen-menu").mobileMenu();
//
// })(jQuery, window, document);