/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var CNV = CNV || {};
(function ($) {
  /*!----------------------------------------------
      # This beautiful code written with heart
      # by Mominul Islam <hello@mominul.me>
      # In Dhaka, BD at the CodeNest Ventures workstation.
      ---------------------------------------------*/

  // USE STRICT
  "use strict";

  window.CNV = {
    init: function init() {
      // Header
      this.header = $('.header-fixed');
      this.body = $('body');
      this.wpadminbar = $('#wpadminbar');
      this.headerFixed = {
        initialOffset: parseInt(this.header.attr('data-fixed-initial-offset')) || 100,
        enabled: $('[data-header-fixed]').length,
        value: false,
        mobileEnabled: $('[data-mobile-header-fixed]').length,
        mobileValue: false
      };

      // Logos
      this.siteTitle = this.header.find('.site-title');
      this.logo = this.header.find('.main-logo');
      this.logoForOnepage = this.header.find('.for-onepage');
      this.logoForOnepageLight = this.logoForOnepage.find('.light');

      // Menus
      this.megaMenu = this.header.find('#mega-menu-wrap');
      this.mobileMenu = $('[data-mobile-menu-resolution]').data('mobile-menu-resolution');
      this.resize();
    },
    resize: function resize() {
      this.isDesktop = $(window).width() >= 991;
      this.isMobile = $(window).width() <= 991;
      this.isPad = $(window).width() <= 1024;
      this.isMobileMenu = $(window).width() <= CNV.mobileMenu;
    }
  };
  CNV.initialize = {
    init: function init() {
      CNV.initialize.general();
      CNV.initialize.sectionSwitch();
      CNV.initialize.contactFrom();
      CNV.initialize.handleMobileHeader();
    },
    /*========================================================*/
    /*=           Collection of snippet and tweaks           =*/
    /*========================================================*/

    general: function general() {
      //Popup Search
      $('#search-menu-wrapper').removeClass('toggled');
      $('#search-icon').on('click', function (e) {
        e.stopPropagation();
        $('#search-menu-wrapper').toggleClass('toggled');
        $("#popup-search").focus();
      });
      $('#search-menu-wrapper input').on('click', function (e) {
        e.stopPropagation();
      });
      $('#search-menu-wrapper, body').on('click', function () {
        $('#search-menu-wrapper').removeClass('toggled');
      });
      if ($('body').hasClass("admin-bar")) {
        $('body').addClass('header-position');
      }
      var $body = $('body');
      var $popup = $('.canvas-menu-wrapper');
      $("#page-open-main-menu").on('click', function (e) {
        e.preventDefault();
        $popup.addClass('open');
        $(".cnvschool-hamburger").addClass('active');
        $body.addClass('page-popup-open');
        $("html").addClass("no-scroll sidebar-open").height(window.innerHeight + "px");
      });
      $("#page-close-main-menu").on('click', function (e) {
        e.preventDefault();
        $('.mask-overlay').remove();
        $body.removeClass('page-popup-open');
        $popup.removeClass('open');
        $('.sub-menu, .sub-menu-wide').removeAttr('style');
        $("html").removeClass("no-scroll sidebar-open").height("auto");
        $(".cnvschool-hamburger").removeClass('active');
        $('.sub-menu, .sub-menu-wide').removeAttr('style');
        $('.has-submenu .menu-link').removeClass('active');
      });
      $('.mobile-menu-icon').on('click', function (event) {
        event.preventDefault();
        var mask = '<div class="mask-overlay">';
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.header-inner').addClass('menu-open');
        $('body').addClass('no-scroll');
        $(this).addClass('active');
      });

      // Close menu
      $('#site-content').on('click', '.close-menu', function (event) {
        event.preventDefault();
        $('.header-inner').removeClass('menu-open');
        $('.mobile-menu-icon').removeClass('active');
        $('body').removeClass('no-scroll');

        // Remove mask
        $('.mask-overlay').remove();
      });
      if ($("#wpadminbar").length && $(window).width() < 768) {
        $("#wpadminbar").css({
          position: "fixed",
          top: "0"
        });
      }

      /* Magnefic Popup */
      $('.play-button').each(function () {
        $('.play-button').magnificPopup({
          type: 'iframe'
        });
      });
      $('.cnvschool-team__expand-icon').on('click', function () {
        $(this).parent().toggleClass('active');
      });
      $('.canvas-nav .site-main-menu li a').on('click', function () {
        var $this = $(this);
        if ($this.parent().hasClass('open')) {
          $this.parent().children('.sub-menu').slideUp(400, function () {
            $this.parent().removeClass('open');
          });
        } else {
          $this.parent().parent().children('li.open').children('.sub-menu').slideUp(200);
          $this.parent().parent().children('li.open').children('a').removeClass('open');
          $this.parent().parent().children('li.open').removeClass('open');
          $this.parent().children('.sub-menu').slideDown(200, function () {
            $this.parent().addClass('open');
          });
        }
      });

      // const smoother = ScrollSmoother.create({
      //     wrapper: "#parallax-wrapper",
      //     content: "#parallax-content",
      //     smooth: 1,
      //     normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
      //     ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      //     effects: true,
      //     preventDefault: true
      // });

      // $('.cnvschool-team').tilt({
      //     scale: 1,
      // })
    },

    /*===========================================*/
    /*=           handle Mobile Header          =*/
    /*===========================================*/

    handleMobileHeader: function handleMobileHeader() {
      if (CNV.header && CNV.header.length) {
        if (CNV.isMobileMenu) {
          CNV.header.addClass('mobile-header');
          CNV.body.addClass('is-mobile-menu');
          setTimeout(function () {
            $('.main-nav').addClass('unhidden');
          }, 300);
        } else {
          CNV.header.removeClass('mobile-header');
          CNV.body.removeClass('is-mobile-menu');
          $('.main-nav').addClass('visible');
        }
      }
    },
    /*==========================================*/
    /*=           handle Fixed Header          =*/
    /*==========================================*/

    handleFixedHeader: function handleFixedHeader() {
      CNV.init();
      var fixed = CNV.headerFixed;
      if ($(document).scrollTop() > fixed.initialOffset) {
        if (!CNV.isMobileMenu && fixed.enabled && !fixed.value || CNV.isMobileMenu && fixed.mobileEnabled && !fixed.mobileValue) {
          if (CNV.isMobileMenu) {
            fixed.mobileValue = true;
          } else {
            fixed.value = true;
          }
          CNV.header.addClass('header-fixed no-transition');
        }
      } else if (fixed.value || fixed.mobileValue) {
        fixed.value = false;
        fixed.mobileValue = false;
        CNV.header.removeClass('header-fixed');
      }

      // Effect appearance
      if ($(document).scrollTop() > fixed.initialOffset + 50) {
        CNV.header.removeClass('no-transition').addClass('showed');
      } else {
        CNV.header.removeClass('showed').addClass('no-transition');
      }
    },
    /*==================================*/
    /*=           Progressbar          =*/
    /*==================================*/
    progressBar: function progressBar() {
      if ($('.skill-wrapper').length) {
        $('.skills').not('.active').each(function () {
          if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 1) {
            $(this).addClass('active');
            $(this).find('.skill').each(function () {
              var procent = $(this).attr('data-value');
              $(this).find('.active-line').css('width', procent + '%');
            });
          }
        });
      }
    },
    /*=====================================*/
    /*=           Section Switch          =*/
    /*=====================================*/

    sectionSwitch: function sectionSwitch() {
      $('.page-scroll, .site-header .menu li a, .canvas-nav .site-main-menu li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length > 0) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            $('html,body').animate({
              scrollTop: target.offset().top - 130
            }, 1000);
            return false;
          }
        }
      });
      $('[data-type="section-switch"], .gp-btn, .cnvschool-main-menu li a, .site-main-menu > li > a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length > 0) {
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    },
    /*==============================*/
    /*=           Countup          =*/
    /*==============================*/

    countUp: function countUp() {
      var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      };
      var counteEl = $('[data-counter]');
      if (counteEl) {
        counteEl.each(function () {
          var val = $(this).data('counter');
          var countup = new CountUp(this, 0, val, 0, 2.5, options);
          $(this).appear(function () {
            countup.start();
          }, {
            accX: 0,
            accY: 0
          });
        });
      }
    },
    /*=================================*/
    /*=           Contact Form         =*/
    /*=================================*/
    contactFrom: function contactFrom() {
      $('[data-cnvschool-form]').each(function () {
        var $this = $(this);
        $('.form-result', $this).css('display', 'none');
        $this.submit(function () {
          $('button[type="submit"]', $this).addClass('clicked');
          // Create a object and assign all fields name and value.
          var values = {};
          var security = $('.cnvschool-newsletter-security').data('security');
          values["nonce"] = security;
          $('[name]', $this).each(function () {
            var $this = $(this),
              $name = $this.attr('name'),
              $value = $this.val();
            values[$name] = $value;
          });

          // Make Request
          $.ajax({
            url: $this.attr('action'),
            type: 'POST',
            data: values,
            success: function success(data) {
              if (data.error == true) {
                $('.form-result', $this).addClass('alert-warning').removeClass('alert-success alert-danger').css('display', 'block');
              } else {
                $('.form-result', $this).addClass('alert-success').removeClass('alert-warning alert-danger').css('display', 'block');
              }
              $('.form-result > .content', $this).html(data.message);
              $('button[type="submit"]', $this).removeClass('clicked');
            },
            error: function error() {
              $('.form-result', $this).addClass('alert-danger').removeClass('alert-warning alert-success').css('display', 'block');
              $('.form-result > .content', $this).html('Sorry, an error occurred.');
              $('button[type="submit"]', $this).removeClass('clicked');
            }
          });
          return false;
        });
      });
    }
  };
  CNV.documentOnReady = {
    init: function init() {
      CNV.initialize.init();
    }
  };
  CNV.documentOnLoad = {
    init: function init() {
      CNV.init();
      CNV.initialize.handleMobileHeader();
      $("#preloader").fadeOut("slow");
    }
  };
  CNV.documentOnResize = {
    init: function init() {
      if ($("#wpadminbar").length && $(window).width() < 768) {
        $("#wpadminbar").css({
          position: "fixed",
          top: "0"
        });
      }
      CNV.resize();
      CNV.initialize.handleMobileHeader();
      CNV.initialize.handleFixedHeader();
    }
  };
  CNV.documentOnScroll = {
    init: function init() {
      CNV.initialize.handleFixedHeader();
      if ($(window).scrollTop() > 300) {
        $('.return-to-top').addClass('back-top');
      } else {
        $('.return-to-top').removeClass('back-top');
      }
    }
  };

  // Initialize Functions
  $(document).ready(CNV.documentOnReady.init);
  $(window).on('load', CNV.documentOnLoad.init);
  $(window).on('resize', CNV.documentOnResize.init);
  $(window).on('scroll', CNV.documentOnScroll.init);
})(jQuery);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mominul/Sites/school/wp-content/themes/cnvschool/src/js/app.js */"./src/js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDTlYiLCIkIiwid2luZG93IiwiaW5pdCIsImhlYWRlciIsImJvZHkiLCJ3cGFkbWluYmFyIiwiaGVhZGVyRml4ZWQiLCJpbml0aWFsT2Zmc2V0IiwicGFyc2VJbnQiLCJhdHRyIiwiZW5hYmxlZCIsImxlbmd0aCIsInZhbHVlIiwibW9iaWxlRW5hYmxlZCIsIm1vYmlsZVZhbHVlIiwic2l0ZVRpdGxlIiwiZmluZCIsImxvZ28iLCJsb2dvRm9yT25lcGFnZSIsImxvZ29Gb3JPbmVwYWdlTGlnaHQiLCJtZWdhTWVudSIsIm1vYmlsZU1lbnUiLCJkYXRhIiwicmVzaXplIiwiaXNEZXNrdG9wIiwid2lkdGgiLCJpc01vYmlsZSIsImlzUGFkIiwiaXNNb2JpbGVNZW51IiwiaW5pdGlhbGl6ZSIsImdlbmVyYWwiLCJzZWN0aW9uU3dpdGNoIiwiY29udGFjdEZyb20iLCJoYW5kbGVNb2JpbGVIZWFkZXIiLCJyZW1vdmVDbGFzcyIsIm9uIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZUNsYXNzIiwiZm9jdXMiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiJGJvZHkiLCIkcG9wdXAiLCJwcmV2ZW50RGVmYXVsdCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicmVtb3ZlIiwicmVtb3ZlQXR0ciIsImV2ZW50IiwibWFzayIsImhpZGUiLCJhcHBlbmRUbyIsImZhZGVJbiIsImNzcyIsInBvc2l0aW9uIiwidG9wIiwiZWFjaCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwicGFyZW50IiwiJHRoaXMiLCJjaGlsZHJlbiIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRml4ZWRIZWFkZXIiLCJmaXhlZCIsImRvY3VtZW50Iiwic2Nyb2xsVG9wIiwicHJvZ3Jlc3NCYXIiLCJub3QiLCJvZmZzZXQiLCJwcm9jZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJob3N0bmFtZSIsInRhcmdldCIsImhhc2giLCJzbGljZSIsImFuaW1hdGUiLCJjb3VudFVwIiwib3B0aW9ucyIsInVzZUVhc2luZyIsInVzZUdyb3VwaW5nIiwic2VwYXJhdG9yIiwiZGVjaW1hbCIsInByZWZpeCIsInN1ZmZpeCIsImNvdW50ZUVsIiwidmFsIiwiY291bnR1cCIsIkNvdW50VXAiLCJhcHBlYXIiLCJzdGFydCIsImFjY1giLCJhY2NZIiwic3VibWl0IiwidmFsdWVzIiwic2VjdXJpdHkiLCIkbmFtZSIsIiR2YWx1ZSIsImFqYXgiLCJ1cmwiLCJzdWNjZXNzIiwiZXJyb3IiLCJodG1sIiwibWVzc2FnZSIsImRvY3VtZW50T25SZWFkeSIsImRvY3VtZW50T25Mb2FkIiwiZmFkZU91dCIsImRvY3VtZW50T25SZXNpemUiLCJkb2N1bWVudE9uU2Nyb2xsIiwicmVhZHkiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FB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QUFHLENBQUNrSCxnQkFBZ0IsR0FBRztJQUNuQi9HLElBQUksRUFBRSxTQUFBQSxLQUFBLEVBQVk7TUFDZEgsR0FBRyxDQUFDOEIsVUFBVSxDQUFDcUMsaUJBQWlCLENBQUMsQ0FBQztNQUNsQyxJQUFJbEUsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ29FLFNBQVMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO1FBQzdCckUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUN5QyxRQUFRLENBQUMsVUFBVSxDQUFDO01BQzVDLENBQUMsTUFBTTtRQUNIekMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNrQyxXQUFXLENBQUMsVUFBVSxDQUFDO01BQy9DO0lBRUo7RUFDSixDQUFDOztFQUVEO0VBQ0FsQyxDQUFDLENBQUNvRSxRQUFRLENBQUMsQ0FBQzhDLEtBQUssQ0FBQ25ILEdBQUcsQ0FBQzhHLGVBQWUsQ0FBQzNHLElBQUksQ0FBQztFQUMzQ0YsQ0FBQyxDQUFDQyxNQUFNLENBQUMsQ0FBQ2tDLEVBQUUsQ0FBQyxNQUFNLEVBQUVwQyxHQUFHLENBQUMrRyxjQUFjLENBQUM1RyxJQUFJLENBQUM7RUFDN0NGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNrQyxFQUFFLENBQUMsUUFBUSxFQUFFcEMsR0FBRyxDQUFDaUgsZ0JBQWdCLENBQUM5RyxJQUFJLENBQUM7RUFDakRGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNrQyxFQUFFLENBQUMsUUFBUSxFQUFFcEMsR0FBRyxDQUFDa0gsZ0JBQWdCLENBQUMvRyxJQUFJLENBQUM7QUFFckQsQ0FBQyxFQUFFaUgsTUFBTSxDQUFDLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwidmFyIENOViA9IENOViB8fCB7fTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICMgVGhpcyBiZWF1dGlmdWwgY29kZSB3cml0dGVuIHdpdGggaGVhcnRcbiAgICAgICAgIyBieSBNb21pbnVsIElzbGFtIDxoZWxsb0Btb21pbnVsLm1lPlxuICAgICAgICAjIEluIERoYWthLCBCRCBhdCB0aGUgQ29kZU5lc3QgVmVudHVyZXMgd29ya3N0YXRpb24uXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvLyBVU0UgU1RSSUNUXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB3aW5kb3cuQ05WID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBIZWFkZXJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gJCgnLmhlYWRlci1maXhlZCcpO1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgdGhpcy53cGFkbWluYmFyID0gJCgnI3dwYWRtaW5iYXInKTtcblxuICAgICAgICAgICAgdGhpcy5oZWFkZXJGaXhlZCA9IHtcbiAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0OiBwYXJzZUludCh0aGlzLmhlYWRlci5hdHRyKCdkYXRhLWZpeGVkLWluaXRpYWwtb2Zmc2V0JykpIHx8IDEwMCxcblxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICQoJ1tkYXRhLWhlYWRlci1maXhlZF0nKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgbW9iaWxlRW5hYmxlZDogJCgnW2RhdGEtbW9iaWxlLWhlYWRlci1maXhlZF0nKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbW9iaWxlVmFsdWU6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBMb2dvc1xuICAgICAgICAgICAgdGhpcy5zaXRlVGl0bGUgPSB0aGlzLmhlYWRlci5maW5kKCcuc2l0ZS10aXRsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5oZWFkZXIuZmluZCgnLm1haW4tbG9nbycpO1xuICAgICAgICAgICAgdGhpcy5sb2dvRm9yT25lcGFnZSA9IHRoaXMuaGVhZGVyLmZpbmQoJy5mb3Itb25lcGFnZScpO1xuICAgICAgICAgICAgdGhpcy5sb2dvRm9yT25lcGFnZUxpZ2h0ID0gdGhpcy5sb2dvRm9yT25lcGFnZS5maW5kKCcubGlnaHQnKTtcblxuICAgICAgICAgICAgLy8gTWVudXNcbiAgICAgICAgICAgIHRoaXMubWVnYU1lbnUgPSB0aGlzLmhlYWRlci5maW5kKCcjbWVnYS1tZW51LXdyYXAnKTtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudSA9ICQoJ1tkYXRhLW1vYmlsZS1tZW51LXJlc29sdXRpb25dJykuZGF0YSgnbW9iaWxlLW1lbnUtcmVzb2x1dGlvbicpO1xuXG5cbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGVza3RvcCA9ICQod2luZG93KS53aWR0aCgpID49IDk5MTtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA5OTE7XG4gICAgICAgICAgICB0aGlzLmlzUGFkID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNDtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGVNZW51ID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gQ05WLm1vYmlsZU1lbnVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBDTlYuaW5pdGlhbGl6ZSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgQ05WLmluaXRpYWxpemUuZ2VuZXJhbCgpO1xuICAgICAgICAgICAgQ05WLmluaXRpYWxpemUuc2VjdGlvblN3aXRjaCgpO1xuICAgICAgICAgICAgQ05WLmluaXRpYWxpemUuY29udGFjdEZyb20oKTtcbiAgICAgICAgICAgIENOVi5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIENvbGxlY3Rpb24gb2Ygc25pcHBldCBhbmQgdHdlYWtzICAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgZ2VuZXJhbDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvL1BvcHVwIFNlYXJjaFxuICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXInKS5yZW1vdmVDbGFzcygndG9nZ2xlZCcpO1xuXG4gICAgICAgICAgICAkKCcjc2VhcmNoLWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXInKS50b2dnbGVDbGFzcygndG9nZ2xlZCcpO1xuICAgICAgICAgICAgICAgICQoXCIjcG9wdXAtc2VhcmNoXCIpLmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXIgaW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXIsIGJvZHknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnI3NlYXJjaC1tZW51LXdyYXBwZXInKS5yZW1vdmVDbGFzcygndG9nZ2xlZCcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoXCJhZG1pbi1iYXJcIikpIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hlYWRlci1wb3NpdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICB2YXIgJHBvcHVwID0gJCgnLmNhbnZhcy1tZW51LXdyYXBwZXInKTtcblxuICAgICAgICAgICAgJChcIiNwYWdlLW9wZW4tbWFpbi1tZW51XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoXCIuY252c2Nob29sLWhhbWJ1cmdlclwiKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJGJvZHkuYWRkQ2xhc3MoJ3BhZ2UtcG9wdXAtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKFwibm8tc2Nyb2xsIHNpZGViYXItb3BlblwiKS5oZWlnaHQod2luZG93LmlubmVySGVpZ2h0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiI3BhZ2UtY2xvc2UtbWFpbi1tZW51XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICQoJy5tYXNrLW92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAkYm9keS5yZW1vdmVDbGFzcygncGFnZS1wb3B1cC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJHBvcHVwLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLnN1Yi1tZW51LCAuc3ViLW1lbnUtd2lkZScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoXCJuby1zY3JvbGwgc2lkZWJhci1vcGVuXCIpLmhlaWdodChcImF1dG9cIik7XG4gICAgICAgICAgICAgICAgJChcIi5jbnZzY2hvb2wtaGFtYnVyZ2VyXCIpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcuc3ViLW1lbnUsIC5zdWItbWVudS13aWRlJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAkKCcuaGFzLXN1Ym1lbnUgLm1lbnUtbGluaycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcubW9iaWxlLW1lbnUtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbWFzayA9ICc8ZGl2IGNsYXNzPVwibWFzay1vdmVybGF5XCI+JztcbiAgICAgICAgICAgICAgICAkKG1hc2spLmhpZGUoKS5hcHBlbmRUbygnYm9keScpLmZhZGVJbignZmFzdCcpO1xuICAgICAgICAgICAgICAgICQoJy5oZWFkZXItaW5uZXInKS5hZGRDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCduby1zY3JvbGwnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gQ2xvc2UgbWVudVxuICAgICAgICAgICAgJCgnI3NpdGUtY29udGVudCcpLm9uKCdjbGljaycsICcuY2xvc2UtbWVudScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyLWlubmVyJykucmVtb3ZlQ2xhc3MoJ21lbnUtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJy5tb2JpbGUtbWVudS1pY29uJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbWFza1xuICAgICAgICAgICAgICAgICQoJy5tYXNrLW92ZXJsYXknKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIGlmICgkKFwiI3dwYWRtaW5iYXJcIikubGVuZ3RoICYmICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgJChcIiN3cGFkbWluYmFyXCIpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIwXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8qIE1hZ25lZmljIFBvcHVwICovXG4gICAgICAgICAgICAkKCcucGxheS1idXR0b24nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcucGxheS1idXR0b24nKS5tYWduaWZpY1BvcHVwKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2lmcmFtZSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY252c2Nob29sLXRlYW1fX2V4cGFuZC1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5jYW52YXMtbmF2IC5zaXRlLW1haW4tbWVudSBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0aGlzID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5wYXJlbnQoKS5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICR0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignLnN1Yi1tZW51JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGlkZVVwKDQwMCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignbGkub3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5zdWItbWVudScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVVcCgyMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICR0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKCdsaS5vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAkdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignbGkub3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICAkdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5zdWItbWVudScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVEb3duKDIwMCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnBhcmVudCgpLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBjb25zdCBzbW9vdGhlciA9IFNjcm9sbFNtb290aGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAvLyAgICAgd3JhcHBlcjogXCIjcGFyYWxsYXgtd3JhcHBlclwiLFxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6IFwiI3BhcmFsbGF4LWNvbnRlbnRcIixcbiAgICAgICAgICAgIC8vICAgICBzbW9vdGg6IDEsXG4gICAgICAgICAgICAvLyAgICAgbm9ybWFsaXplU2Nyb2xsOiB0cnVlLCAvLyBwcmV2ZW50cyBhZGRyZXNzIGJhciBmcm9tIHNob3dpbmcvaGlkaW5nIG9uIG1vc3QgZGV2aWNlcywgc29sdmVzIHZhcmlvdXMgb3RoZXIgYnJvd3NlciBpbmNvbnNpc3RlbmNpZXNcbiAgICAgICAgICAgIC8vICAgICBpZ25vcmVNb2JpbGVSZXNpemU6IHRydWUsIC8vIHNraXBzIFNjcm9sbFRyaWdnZXIucmVmcmVzaCgpIG9uIG1vYmlsZSByZXNpemVzIGZyb20gYWRkcmVzcyBiYXIgc2hvd2luZy9oaWRpbmdcbiAgICAgICAgICAgIC8vICAgICBlZmZlY3RzOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgIHByZXZlbnREZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgLy8gJCgnLmNudnNjaG9vbC10ZWFtJykudGlsdCh7XG4gICAgICAgICAgICAvLyAgICAgc2NhbGU6IDEsXG4gICAgICAgICAgICAvLyB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgaGFuZGxlIE1vYmlsZSBIZWFkZXIgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgaGFuZGxlTW9iaWxlSGVhZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmIChDTlYuaGVhZGVyICYmIENOVi5oZWFkZXIubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoQ05WLmlzTW9iaWxlTWVudSkge1xuICAgICAgICAgICAgICAgICAgICBDTlYuaGVhZGVyLmFkZENsYXNzKCdtb2JpbGUtaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIENOVi5ib2R5LmFkZENsYXNzKCdpcy1tb2JpbGUtbWVudScpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5tYWluLW5hdicpLmFkZENsYXNzKCd1bmhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIENOVi5oZWFkZXIucmVtb3ZlQ2xhc3MoJ21vYmlsZS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgQ05WLmJvZHkucmVtb3ZlQ2xhc3MoJ2lzLW1vYmlsZS1tZW51Jyk7XG4gICAgICAgICAgICAgICAgICAgICQoJy5tYWluLW5hdicpLmFkZENsYXNzKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBoYW5kbGUgRml4ZWQgSGVhZGVyICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgaGFuZGxlRml4ZWRIZWFkZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgQ05WLmluaXQoKTtcbiAgICAgICAgICAgIHZhciBmaXhlZCA9IENOVi5oZWFkZXJGaXhlZDtcblxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gZml4ZWQuaW5pdGlhbE9mZnNldCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCghQ05WLmlzTW9iaWxlTWVudSAmJiBmaXhlZC5lbmFibGVkICYmICFmaXhlZC52YWx1ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgKENOVi5pc01vYmlsZU1lbnUgJiYgZml4ZWQubW9iaWxlRW5hYmxlZCAmJiAhZml4ZWQubW9iaWxlVmFsdWUpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKENOVi5pc01vYmlsZU1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkLm1vYmlsZVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIENOVi5oZWFkZXIuYWRkQ2xhc3MoJ2hlYWRlci1maXhlZCBuby10cmFuc2l0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZml4ZWQudmFsdWUgfHwgZml4ZWQubW9iaWxlVmFsdWUpIHtcblxuICAgICAgICAgICAgICAgIGZpeGVkLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZml4ZWQubW9iaWxlVmFsdWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIENOVi5oZWFkZXIucmVtb3ZlQ2xhc3MoJ2hlYWRlci1maXhlZCcpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVmZmVjdCBhcHBlYXJhbmNlXG4gICAgICAgICAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiBmaXhlZC5pbml0aWFsT2Zmc2V0ICsgNTApIHtcbiAgICAgICAgICAgICAgICBDTlYuaGVhZGVyLnJlbW92ZUNsYXNzKCduby10cmFuc2l0aW9uJykuYWRkQ2xhc3MoJ3Nob3dlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBDTlYuaGVhZGVyLnJlbW92ZUNsYXNzKCdzaG93ZWQnKS5hZGRDbGFzcygnbm8tdHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgUHJvZ3Jlc3NiYXIgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIHByb2dyZXNzQmFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCgnLnNraWxsLXdyYXBwZXInKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkKCcuc2tpbGxzJykubm90KCcuYWN0aXZlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gJCh0aGlzKS5vZmZzZXQoKS50b3AgLSAkKHdpbmRvdykuaGVpZ2h0KCkgKiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLnNraWxsJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2NlbnQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5hY3RpdmUtbGluZScpLmNzcygnd2lkdGgnLCBwcm9jZW50ICsgJyUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBTZWN0aW9uIFN3aXRjaCAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBzZWN0aW9uU3dpdGNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcucGFnZS1zY3JvbGwsIC5zaXRlLWhlYWRlciAubWVudSBsaSBhLCAuY2FudmFzLW5hdiAuc2l0ZS1tYWluLW1lbnUgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wIC0gMTMwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCdbZGF0YS10eXBlPVwic2VjdGlvbi1zd2l0Y2hcIl0sIC5ncC1idG4sIC5jbnZzY2hvb2wtbWFpbi1tZW51IGxpIGEsIC5zaXRlLW1haW4tbWVudSA+IGxpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBDb3VudHVwICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgY291bnRVcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdXNlRWFzaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZUdyb3VwaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogJywnLFxuICAgICAgICAgICAgICAgIGRlY2ltYWw6ICcuJyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICcnLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogJydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBjb3VudGVFbCA9ICQoJ1tkYXRhLWNvdW50ZXJdJyk7XG5cbiAgICAgICAgICAgIGlmIChjb3VudGVFbCkge1xuICAgICAgICAgICAgICAgIGNvdW50ZUVsLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gJCh0aGlzKS5kYXRhKCdjb3VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50dXAgPSBuZXcgQ291bnRVcCh0aGlzLCAwLCB2YWwsIDAsIDIuNSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXBwZWFyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50dXAuc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjWDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY1k6IDBcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIENvbnRhY3QgRm9ybSAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIGNvbnRhY3RGcm9tOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCdbZGF0YS1jbnZzY2hvb2wtZm9ybV0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICQoJy5mb3JtLXJlc3VsdCcsICR0aGlzKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuXG4gICAgICAgICAgICAgICAgJHRoaXMuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nLCAkdGhpcykuYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgb2JqZWN0IGFuZCBhc3NpZ24gYWxsIGZpZWxkcyBuYW1lIGFuZCB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWN1cml0eSA9ICQoJy5jbnZzY2hvb2wtbmV3c2xldHRlci1zZWN1cml0eScpLmRhdGEoJ3NlY3VyaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tcIm5vbmNlXCJdID0gc2VjdXJpdHk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCgnW25hbWVdJywgJHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbmFtZSA9ICR0aGlzLmF0dHIoJ25hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdmFsdWUgPSAkdGhpcy52YWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc1skbmFtZV0gPSAkdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2UgUmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuYWRkQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcnKS5yZW1vdmVDbGFzcygnYWxlcnQtc3VjY2VzcyBhbGVydC1kYW5nZXInKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuYWRkQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MnKS5yZW1vdmVDbGFzcygnYWxlcnQtd2FybmluZyBhbGVydC1kYW5nZXInKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmVzdWx0ID4gLmNvbnRlbnQnLCAkdGhpcykuaHRtbChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJywgJHRoaXMpLnJlbW92ZUNsYXNzKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJlc3VsdCcsICR0aGlzKS5hZGRDbGFzcygnYWxlcnQtZGFuZ2VyJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcgYWxlcnQtc3VjY2VzcycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJlc3VsdCA+IC5jb250ZW50JywgJHRoaXMpLmh0bWwoJ1NvcnJ5LCBhbiBlcnJvciBvY2N1cnJlZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScsICR0aGlzKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBDTlYuZG9jdW1lbnRPblJlYWR5ID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBDTlYuaW5pdGlhbGl6ZS5pbml0KCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIENOVi5kb2N1bWVudE9uTG9hZCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgQ05WLmluaXQoKTtcbiAgICAgICAgICAgIENOVi5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICAgICAgJChcIiNwcmVsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIENOVi5kb2N1bWVudE9uUmVzaXplID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJChcIiN3cGFkbWluYmFyXCIpLmxlbmd0aCAmJiAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICQoXCIjd3BhZG1pbmJhclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIENOVi5yZXNpemUoKTtcbiAgICAgICAgICAgIENOVi5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICAgICAgQ05WLmluaXRpYWxpemUuaGFuZGxlRml4ZWRIZWFkZXIoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgQ05WLmRvY3VtZW50T25TY3JvbGwgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIENOVi5pbml0aWFsaXplLmhhbmRsZUZpeGVkSGVhZGVyKCk7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gMzAwKSB7XG4gICAgICAgICAgICAgICAgJCgnLnJldHVybi10by10b3AnKS5hZGRDbGFzcygnYmFjay10b3AnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnLnJldHVybi10by10b3AnKS5yZW1vdmVDbGFzcygnYmFjay10b3AnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICAvLyBJbml0aWFsaXplIEZ1bmN0aW9uc1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KENOVi5kb2N1bWVudE9uUmVhZHkuaW5pdCk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgQ05WLmRvY3VtZW50T25Mb2FkLmluaXQpO1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgQ05WLmRvY3VtZW50T25SZXNpemUuaW5pdCk7XG4gICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBDTlYuZG9jdW1lbnRPblNjcm9sbC5pbml0KTtcblxufSkoalF1ZXJ5KTtcblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=