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

  window.RBT = {
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
      this.isMobileMenu = $(window).width() <= RBT.mobileMenu;
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
      if (RBT.header && RBT.header.length) {
        if (RBT.isMobileMenu) {
          RBT.header.addClass('mobile-header');
          RBT.body.addClass('is-mobile-menu');
          setTimeout(function () {
            $('.main-nav').addClass('unhidden');
          }, 300);
        } else {
          RBT.header.removeClass('mobile-header');
          RBT.body.removeClass('is-mobile-menu');
          $('.main-nav').addClass('visible');
        }
      }
    },
    /*==========================================*/
    /*=           handle Fixed Header          =*/
    /*==========================================*/

    handleFixedHeader: function handleFixedHeader() {
      RBT.init();
      var fixed = RBT.headerFixed;
      if ($(document).scrollTop() > fixed.initialOffset) {
        if (!RBT.isMobileMenu && fixed.enabled && !fixed.value || RBT.isMobileMenu && fixed.mobileEnabled && !fixed.mobileValue) {
          if (RBT.isMobileMenu) {
            fixed.mobileValue = true;
          } else {
            fixed.value = true;
          }
          RBT.header.addClass('header-fixed no-transition');
        }
      } else if (fixed.value || fixed.mobileValue) {
        fixed.value = false;
        fixed.mobileValue = false;
        RBT.header.removeClass('header-fixed');
      }

      // Effect appearance
      if ($(document).scrollTop() > fixed.initialOffset + 50) {
        RBT.header.removeClass('no-transition').addClass('showed');
      } else {
        RBT.header.removeClass('showed').addClass('no-transition');
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
      RBT.init();
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
      RBT.resize();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJQT0xMSVgiLCIkIiwid2luZG93IiwiUkJUIiwiaW5pdCIsImhlYWRlciIsImJvZHkiLCJ3cGFkbWluYmFyIiwiaGVhZGVyRml4ZWQiLCJpbml0aWFsT2Zmc2V0IiwicGFyc2VJbnQiLCJhdHRyIiwiZW5hYmxlZCIsImxlbmd0aCIsInZhbHVlIiwibW9iaWxlRW5hYmxlZCIsIm1vYmlsZVZhbHVlIiwic2l0ZVRpdGxlIiwiZmluZCIsImxvZ28iLCJsb2dvRm9yT25lcGFnZSIsImxvZ29Gb3JPbmVwYWdlTGlnaHQiLCJtZWdhTWVudSIsIm1vYmlsZU1lbnUiLCJkYXRhIiwicmVzaXplIiwiaXNEZXNrdG9wIiwid2lkdGgiLCJpc01vYmlsZSIsImlzUGFkIiwiaXNNb2JpbGVNZW51IiwiaW5pdGlhbGl6ZSIsImdlbmVyYWwiLCJzZWN0aW9uU3dpdGNoIiwiY29udGFjdEZyb20iLCJoYW5kbGVNb2JpbGVIZWFkZXIiLCJyZW1vdmVDbGFzcyIsIm9uIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInRvZ2dsZUNsYXNzIiwiZm9jdXMiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiJGJvZHkiLCIkcG9wdXAiLCJwcmV2ZW50RGVmYXVsdCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicmVtb3ZlIiwicmVtb3ZlQXR0ciIsImV2ZW50IiwibWFzayIsImhpZGUiLCJhcHBlbmRUbyIsImZhZGVJbiIsImNzcyIsInBvc2l0aW9uIiwidG9wIiwiZWFjaCIsIm1hZ25pZmljUG9wdXAiLCJ0eXBlIiwicGFyZW50IiwiJHRoaXMiLCJjaGlsZHJlbiIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRml4ZWRIZWFkZXIiLCJmaXhlZCIsImRvY3VtZW50Iiwic2Nyb2xsVG9wIiwicHJvZ3Jlc3NCYXIiLCJub3QiLCJvZmZzZXQiLCJwcm9jZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJob3N0bmFtZSIsInRhcmdldCIsImhhc2giLCJzbGljZSIsImFuaW1hdGUiLCJjb3VudFVwIiwib3B0aW9ucyIsInVzZUVhc2luZyIsInVzZUdyb3VwaW5nIiwic2VwYXJhdG9yIiwiZGVjaW1hbCIsInByZWZpeCIsInN1ZmZpeCIsImNvdW50ZUVsIiwidmFsIiwiY291bnR1cCIsIkNvdW50VXAiLCJhcHBlYXIiLCJzdGFydCIsImFjY1giLCJhY2NZIiwic3VibWl0IiwidmFsdWVzIiwic2VjdXJpdHkiLCIkbmFtZSIsIiR2YWx1ZSIsImFqYXgiLCJ1cmwiLCJzdWNjZXNzIiwiZXJyb3IiLCJodG1sIiwibWVzc2FnZSIsImRvY3VtZW50T25SZWFkeSIsImRvY3VtZW50T25Mb2FkIiwiZmFkZU91dCIsImRvY3VtZW50T25SZXNpemUiLCJkb2N1bWVudE9uU2Nyb2xsIiwicmVhZHkiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7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QztFQUVEcEUsTUFBTSxDQUFDbUgsZ0JBQWdCLEdBQUc7SUFDdEIvRyxJQUFJLEVBQUUsU0FBQUEsS0FBQSxFQUFZO01BQ2RKLE1BQU0sQ0FBQytCLFVBQVUsQ0FBQ3FDLGlCQUFpQixDQUFDLENBQUM7TUFDckMsSUFBSW5FLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNxRSxTQUFTLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUM3QnRFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDMEMsUUFBUSxDQUFDLFVBQVUsQ0FBQztNQUM1QyxDQUFDLE1BQU07UUFDSDFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDbUMsV0FBVyxDQUFDLFVBQVUsQ0FBQztNQUMvQztJQUVKO0VBQ0osQ0FBQzs7RUFFRDtFQUNBbkMsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDLENBQUM4QyxLQUFLLENBQUNwSCxNQUFNLENBQUMrRyxlQUFlLENBQUMzRyxJQUFJLENBQUM7RUFDOUNILENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNtQyxFQUFFLENBQUMsTUFBTSxFQUFFckMsTUFBTSxDQUFDZ0gsY0FBYyxDQUFDNUcsSUFBSSxDQUFDO0VBQ2hESCxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDbUMsRUFBRSxDQUFDLFFBQVEsRUFBRXJDLE1BQU0sQ0FBQ2tILGdCQUFnQixDQUFDOUcsSUFBSSxDQUFDO0VBQ3BESCxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDbUMsRUFBRSxDQUFDLFFBQVEsRUFBRXJDLE1BQU0sQ0FBQ21ILGdCQUFnQixDQUFDL0csSUFBSSxDQUFDO0FBRXhELENBQUMsRUFBRWlILE1BQU0sQ0FBQyxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBQT0xMSVggPSBQT0xMSVggfHwge307XG5cbihmdW5jdGlvbiAoJCkge1xuXG4gICAgLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAjIFRoaXMgYmVhdXRpZnVsIGNvZGUgd3JpdHRlbiB3aXRoIGhlYXJ0XG4gICAgICAgICMgYnkgTW9taW51bCBJc2xhbSA8aGVsbG9AbW9taW51bC5tZT5cbiAgICAgICAgIyBJbiBEaGFrYSwgQkQgYXQgdGhlIENvZGVOZXN0IFZlbnR1cmVzIHdvcmtzdGF0aW9uLlxuICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgLy8gVVNFIFNUUklDVFxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgd2luZG93LlJCVCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gSGVhZGVyXG4gICAgICAgICAgICB0aGlzLmhlYWRlciA9ICQoJy5oZWFkZXItZml4ZWQnKTtcbiAgICAgICAgICAgIHRoaXMuYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHRoaXMud3BhZG1pbmJhciA9ICQoJyN3cGFkbWluYmFyJyk7XG5cbiAgICAgICAgICAgIHRoaXMuaGVhZGVyRml4ZWQgPSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbE9mZnNldDogcGFyc2VJbnQodGhpcy5oZWFkZXIuYXR0cignZGF0YS1maXhlZC1pbml0aWFsLW9mZnNldCcpKSB8fCAxMDAsXG5cbiAgICAgICAgICAgICAgICBlbmFibGVkOiAkKCdbZGF0YS1oZWFkZXItZml4ZWRdJykubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgIG1vYmlsZUVuYWJsZWQ6ICQoJ1tkYXRhLW1vYmlsZS1oZWFkZXItZml4ZWRdJykubGVuZ3RoLFxuICAgICAgICAgICAgICAgIG1vYmlsZVZhbHVlOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gTG9nb3NcbiAgICAgICAgICAgIHRoaXMuc2l0ZVRpdGxlID0gdGhpcy5oZWFkZXIuZmluZCgnLnNpdGUtdGl0bGUnKTtcbiAgICAgICAgICAgIHRoaXMubG9nbyA9IHRoaXMuaGVhZGVyLmZpbmQoJy5tYWluLWxvZ28nKTtcbiAgICAgICAgICAgIHRoaXMubG9nb0Zvck9uZXBhZ2UgPSB0aGlzLmhlYWRlci5maW5kKCcuZm9yLW9uZXBhZ2UnKTtcbiAgICAgICAgICAgIHRoaXMubG9nb0Zvck9uZXBhZ2VMaWdodCA9IHRoaXMubG9nb0Zvck9uZXBhZ2UuZmluZCgnLmxpZ2h0Jyk7XG5cbiAgICAgICAgICAgIC8vIE1lbnVzXG4gICAgICAgICAgICB0aGlzLm1lZ2FNZW51ID0gdGhpcy5oZWFkZXIuZmluZCgnI21lZ2EtbWVudS13cmFwJyk7XG4gICAgICAgICAgICB0aGlzLm1vYmlsZU1lbnUgPSAkKCdbZGF0YS1tb2JpbGUtbWVudS1yZXNvbHV0aW9uXScpLmRhdGEoJ21vYmlsZS1tZW51LXJlc29sdXRpb24nKTtcblxuXG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5pc0Rlc2t0b3AgPSAkKHdpbmRvdykud2lkdGgoKSA+PSA5OTE7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gOTkxO1xuICAgICAgICAgICAgdGhpcy5pc1BhZCA9ICQod2luZG93KS53aWR0aCgpIDw9IDEwMjQ7XG4gICAgICAgICAgICB0aGlzLmlzTW9iaWxlTWVudSA9ICQod2luZG93KS53aWR0aCgpIDw9IFJCVC5tb2JpbGVNZW51XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUE9MTElYLmluaXRpYWxpemUgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFBPTExJWC5pbml0aWFsaXplLmdlbmVyYWwoKTtcbiAgICAgICAgICAgIFBPTExJWC5pbml0aWFsaXplLnNlY3Rpb25Td2l0Y2goKTtcbiAgICAgICAgICAgIFBPTExJWC5pbml0aWFsaXplLmNvbnRhY3RGcm9tKCk7XG4gICAgICAgICAgICBQT0xMSVguaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBDb2xsZWN0aW9uIG9mIHNuaXBwZXQgYW5kIHR3ZWFrcyAgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGdlbmVyYWw6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgLy9Qb3B1cCBTZWFyY2hcbiAgICAgICAgICAgICQoJyNzZWFyY2gtbWVudS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZWQnKTtcblxuICAgICAgICAgICAgJCgnI3NlYXJjaC1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICQoJyNzZWFyY2gtbWVudS13cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ3RvZ2dsZWQnKTtcbiAgICAgICAgICAgICAgICAkKFwiI3BvcHVwLXNlYXJjaFwiKS5mb2N1cygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJyNzZWFyY2gtbWVudS13cmFwcGVyIGlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJyNzZWFyY2gtbWVudS13cmFwcGVyLCBib2R5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJyNzZWFyY2gtbWVudS13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZWQnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKFwiYWRtaW4tYmFyXCIpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoZWFkZXItcG9zaXRpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgdmFyICRwb3B1cCA9ICQoJy5jYW52YXMtbWVudS13cmFwcGVyJyk7XG5cbiAgICAgICAgICAgICQoXCIjcGFnZS1vcGVuLW1haW4tbWVudVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAkcG9wdXAuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKFwiLnBvbGxpeC1oYW1idXJnZXJcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdwYWdlLXBvcHVwLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcyhcIm5vLXNjcm9sbCBzaWRlYmFyLW9wZW5cIikuaGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChcIiNwYWdlLWNsb3NlLW1haW4tbWVudVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAkKCcubWFzay1vdmVybGF5JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ3BhZ2UtcG9wdXAtb3BlbicpO1xuICAgICAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJy5zdWItbWVudSwgLnN1Yi1tZW51LXdpZGUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsIHNpZGViYXItb3BlblwiKS5oZWlnaHQoXCJhdXRvXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucG9sbGl4LWhhbWJ1cmdlclwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnN1Yi1tZW51LCAuc3ViLW1lbnUtd2lkZScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhhcy1zdWJtZW51IC5tZW51LWxpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLm1vYmlsZS1tZW51LWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1hc2sgPSAnPGRpdiBjbGFzcz1cIm1hc2stb3ZlcmxheVwiPic7XG4gICAgICAgICAgICAgICAgJChtYXNrKS5oaWRlKCkuYXBwZW5kVG8oJ2JvZHknKS5mYWRlSW4oJ2Zhc3QnKTtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyLWlubmVyJykuYWRkQ2xhc3MoJ21lbnUtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIC8vIENsb3NlIG1lbnVcbiAgICAgICAgICAgICQoJyNzaXRlLWNvbnRlbnQnKS5vbignY2xpY2snLCAnLmNsb3NlLW1lbnUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlci1pbm5lcicpLnJlbW92ZUNsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcubW9iaWxlLW1lbnUtaWNvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG1hc2tcbiAgICAgICAgICAgICAgICAkKCcubWFzay1vdmVybGF5JykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAoJChcIiN3cGFkbWluYmFyXCIpLmxlbmd0aCAmJiAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICQoXCIjd3BhZG1pbmJhclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvKiBNYWduZWZpYyBQb3B1cCAqL1xuICAgICAgICAgICAgJCgnLnBsYXktYnV0dG9uJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnBsYXktYnV0dG9uJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdpZnJhbWUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLnBvbGxpeC10ZWFtX19leHBhbmQtaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY2FudmFzLW5hdiAuc2l0ZS1tYWluLW1lbnUgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCAkdGhpcyA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJHRoaXMucGFyZW50KCkuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAkdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJy5zdWItbWVudScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpZGVVcCg0MDAsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJ2xpLm9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKCcuc3ViLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlVXAoMjAwKTtcblxuICAgICAgICAgICAgICAgICAgICAkdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAucGFyZW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbignbGkub3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJ2EnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oJ2xpLm9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoaWxkcmVuKCcuc3ViLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWRlRG93bigyMDAsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gY29uc3Qgc21vb3RoZXIgPSBTY3JvbGxTbW9vdGhlci5jcmVhdGUoe1xuICAgICAgICAgICAgLy8gICAgIHdyYXBwZXI6IFwiI3BhcmFsbGF4LXdyYXBwZXJcIixcbiAgICAgICAgICAgIC8vICAgICBjb250ZW50OiBcIiNwYXJhbGxheC1jb250ZW50XCIsXG4gICAgICAgICAgICAvLyAgICAgc21vb3RoOiAxLFxuICAgICAgICAgICAgLy8gICAgIG5vcm1hbGl6ZVNjcm9sbDogdHJ1ZSwgLy8gcHJldmVudHMgYWRkcmVzcyBiYXIgZnJvbSBzaG93aW5nL2hpZGluZyBvbiBtb3N0IGRldmljZXMsIHNvbHZlcyB2YXJpb3VzIG90aGVyIGJyb3dzZXIgaW5jb25zaXN0ZW5jaWVzXG4gICAgICAgICAgICAvLyAgICAgaWdub3JlTW9iaWxlUmVzaXplOiB0cnVlLCAvLyBza2lwcyBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKSBvbiBtb2JpbGUgcmVzaXplcyBmcm9tIGFkZHJlc3MgYmFyIHNob3dpbmcvaGlkaW5nXG4gICAgICAgICAgICAvLyAgICAgZWZmZWN0czogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICBwcmV2ZW50RGVmYXVsdDogdHJ1ZVxuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIC8vICQoJy5wb2xsaXgtdGVhbScpLnRpbHQoe1xuICAgICAgICAgICAgLy8gICAgIHNjYWxlOiAxLFxuICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIGhhbmRsZSBNb2JpbGUgSGVhZGVyICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGhhbmRsZU1vYmlsZUhlYWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoUkJULmhlYWRlciAmJiBSQlQuaGVhZGVyLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKFJCVC5pc01vYmlsZU1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgUkJULmhlYWRlci5hZGRDbGFzcygnbW9iaWxlLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBSQlQuYm9keS5hZGRDbGFzcygnaXMtbW9iaWxlLW1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubWFpbi1uYXYnKS5hZGRDbGFzcygndW5oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBSQlQuaGVhZGVyLnJlbW92ZUNsYXNzKCdtb2JpbGUtaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIFJCVC5ib2R5LnJlbW92ZUNsYXNzKCdpcy1tb2JpbGUtbWVudScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcubWFpbi1uYXYnKS5hZGRDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgaGFuZGxlIEZpeGVkIEhlYWRlciAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGhhbmRsZUZpeGVkSGVhZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIFJCVC5pbml0KCk7XG4gICAgICAgICAgICB2YXIgZml4ZWQgPSBSQlQuaGVhZGVyRml4ZWQ7XG5cbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IGZpeGVkLmluaXRpYWxPZmZzZXQpIHtcblxuICAgICAgICAgICAgICAgIGlmICgoIVJCVC5pc01vYmlsZU1lbnUgJiYgZml4ZWQuZW5hYmxlZCAmJiAhZml4ZWQudmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIChSQlQuaXNNb2JpbGVNZW51ICYmIGZpeGVkLm1vYmlsZUVuYWJsZWQgJiYgIWZpeGVkLm1vYmlsZVZhbHVlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChSQlQuaXNNb2JpbGVNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZC5tb2JpbGVWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZC52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBSQlQuaGVhZGVyLmFkZENsYXNzKCdoZWFkZXItZml4ZWQgbm8tdHJhbnNpdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpeGVkLnZhbHVlIHx8IGZpeGVkLm1vYmlsZVZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICBmaXhlZC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpeGVkLm1vYmlsZVZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBSQlQuaGVhZGVyLnJlbW92ZUNsYXNzKCdoZWFkZXItZml4ZWQnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFZmZlY3QgYXBwZWFyYW5jZVxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gZml4ZWQuaW5pdGlhbE9mZnNldCArIDUwKSB7XG4gICAgICAgICAgICAgICAgUkJULmhlYWRlci5yZW1vdmVDbGFzcygnbm8tdHJhbnNpdGlvbicpLmFkZENsYXNzKCdzaG93ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgUkJULmhlYWRlci5yZW1vdmVDbGFzcygnc2hvd2VkJykuYWRkQ2xhc3MoJ25vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIFByb2dyZXNzYmFyICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBwcm9ncmVzc0JhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQoJy5za2lsbC13cmFwcGVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnNraWxscycpLm5vdCgnLmFjdGl2ZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49ICQodGhpcykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLmhlaWdodCgpICogMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5za2lsbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZW50ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuYWN0aXZlLWxpbmUnKS5jc3MoJ3dpZHRoJywgcHJvY2VudCArICclJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgU2VjdGlvbiBTd2l0Y2ggICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgc2VjdGlvblN3aXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2Utc2Nyb2xsLCAuc2l0ZS1oZWFkZXIgLm1lbnUgbGkgYSwgLmNhbnZhcy1uYXYgLnNpdGUtbWFpbi1tZW51IGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEzMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtdHlwZT1cInNlY3Rpb24tc3dpdGNoXCJdLCAuZ3AtYnRuLCAucG9sbGl4LW1haW4tbWVudSBsaSBhLCAuc2l0ZS1tYWluLW1lbnUgPiBsaSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgQ291bnR1cCAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGNvdW50VXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHVzZUVhc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VHcm91cGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6ICcsJyxcbiAgICAgICAgICAgICAgICBkZWNpbWFsOiAnLicsXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnJyxcbiAgICAgICAgICAgICAgICBzdWZmaXg6ICcnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgY291bnRlRWwgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuXG4gICAgICAgICAgICBpZiAoY291bnRlRWwpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVFbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9ICQodGhpcykuZGF0YSgnY291bnRlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudHVwID0gbmV3IENvdW50VXAodGhpcywgMCwgdmFsLCAwLCAyLjUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVhcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHVwLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY1g6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NZOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBDb250YWN0IEZvcm0gICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBjb250YWN0RnJvbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtcG9sbGl4LWZvcm1dJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuICAgICAgICAgICAgICAgICR0aGlzLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJywgJHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG9iamVjdCBhbmQgYXNzaWduIGFsbCBmaWVsZHMgbmFtZSBhbmQgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSAkKCcucG9sbGl4LW5ld3NsZXR0ZXItc2VjdXJpdHknKS5kYXRhKCdzZWN1cml0eScpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbXCJub25jZVwiXSA9IHNlY3VyaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tuYW1lXScsICR0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5hbWUgPSAkdGhpcy5hdHRyKCduYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlID0gJHRoaXMudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbJG5hbWVdID0gJHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmVzdWx0JywgJHRoaXMpLmFkZENsYXNzKCdhbGVydC13YXJuaW5nJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGFuZ2VyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmVzdWx0JywgJHRoaXMpLmFkZENsYXNzKCdhbGVydC1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcgYWxlcnQtZGFuZ2VyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJlc3VsdCA+IC5jb250ZW50JywgJHRoaXMpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScsICR0aGlzKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuYWRkQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpLnJlbW92ZUNsYXNzKCdhbGVydC13YXJuaW5nIGFsZXJ0LXN1Y2Nlc3MnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQgPiAuY29udGVudCcsICR0aGlzKS5odG1sKCdTb3JyeSwgYW4gZXJyb3Igb2NjdXJyZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nLCAkdGhpcykucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUE9MTElYLmRvY3VtZW50T25SZWFkeSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgUE9MTElYLmluaXRpYWxpemUuaW5pdCgpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBQT0xMSVguZG9jdW1lbnRPbkxvYWQgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFJCVC5pbml0KCk7XG4gICAgICAgICAgICBQT0xMSVguaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgICAgICQoXCIjcHJlbG9hZGVyXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBQT0xMSVguZG9jdW1lbnRPblJlc2l6ZSA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQoXCIjd3BhZG1pbmJhclwiKS5sZW5ndGggJiYgJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3dwYWRtaW5iYXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjBcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSQlQucmVzaXplKCk7XG4gICAgICAgICAgICBQT0xMSVguaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgICAgIFBPTExJWC5pbml0aWFsaXplLmhhbmRsZUZpeGVkSGVhZGVyKCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIFBPTExJWC5kb2N1bWVudE9uU2Nyb2xsID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBQT0xMSVguaW5pdGlhbGl6ZS5oYW5kbGVGaXhlZEhlYWRlcigpO1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykuYWRkQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykucmVtb3ZlQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBGdW5jdGlvbnNcbiAgICAkKGRvY3VtZW50KS5yZWFkeShQT0xMSVguZG9jdW1lbnRPblJlYWR5LmluaXQpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIFBPTExJWC5kb2N1bWVudE9uTG9hZC5pbml0KTtcbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsIFBPTExJWC5kb2N1bWVudE9uUmVzaXplLmluaXQpO1xuICAgICQod2luZG93KS5vbignc2Nyb2xsJywgUE9MTElYLmRvY3VtZW50T25TY3JvbGwuaW5pdCk7XG5cbn0pKGpRdWVyeSk7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9