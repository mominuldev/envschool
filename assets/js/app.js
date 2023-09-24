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

var CNVTHEME = CNVTHEME || {};
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
  CNVTHEME.initialize = {
    init: function init() {
      CNVTHEME.initialize.general();
      CNVTHEME.initialize.sectionSwitch();
      CNVTHEME.initialize.contactFrom();
      CNVTHEME.initialize.handleMobileHeader();
    },
    /*========================================================*/
    /*=           Collection of snippet and tweaks           =*/
    /*========================================================*/

    general: function general() {
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
      // $('.play-button').each(function () {
      //     $('.play-button').magnificPopup({
      //         type: 'iframe'
      //     });
      // });
      //
      $(document).ready(function () {
        $("#menu-primary-menu").aceResponsiveMenu({
          resizeWidth: '991',
          // Set the same in Media query
          animationSpeed: 'fast',
          //slow, medium, fast
          accoridonExpAll: false //Expands all the accordion menu on click
        });
      });
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
  CNVTHEME.documentOnReady = {
    init: function init() {
      CNVTHEME.initialize.init();
    }
  };
  CNVTHEME.documentOnLoad = {
    init: function init() {
      CNV.init();
      CNVTHEME.initialize.handleMobileHeader();
      $("#preloader").fadeOut("slow");
    }
  };
  CNVTHEME.documentOnResize = {
    init: function init() {
      if ($("#wpadminbar").length && $(window).width() < 768) {
        $("#wpadminbar").css({
          position: "fixed",
          top: "0"
        });
      }
      CNV.resize();
      CNVTHEME.initialize.handleMobileHeader();
      CNVTHEME.initialize.handleFixedHeader();
    }
  };
  CNVTHEME.documentOnScroll = {
    init: function init() {
      CNVTHEME.initialize.handleFixedHeader();
      if ($(window).scrollTop() > 300) {
        $('.return-to-top').addClass('back-top');
      } else {
        $('.return-to-top').removeClass('back-top');
      }
    }
  };

  // Initialize Functions
  $(document).ready(CNVTHEME.documentOnReady.init);
  $(window).on('load', CNVTHEME.documentOnLoad.init);
  $(window).on('resize', CNVTHEME.documentOnResize.init);
  $(window).on('scroll', CNVTHEME.documentOnScroll.init);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDTlZUSEVNRSIsIiQiLCJ3aW5kb3ciLCJDTlYiLCJpbml0IiwiaGVhZGVyIiwiYm9keSIsIndwYWRtaW5iYXIiLCJoZWFkZXJGaXhlZCIsImluaXRpYWxPZmZzZXQiLCJwYXJzZUludCIsImF0dHIiLCJlbmFibGVkIiwibGVuZ3RoIiwidmFsdWUiLCJtb2JpbGVFbmFibGVkIiwibW9iaWxlVmFsdWUiLCJzaXRlVGl0bGUiLCJmaW5kIiwibG9nbyIsImxvZ29Gb3JPbmVwYWdlIiwibG9nb0Zvck9uZXBhZ2VMaWdodCIsIm1lZ2FNZW51IiwibW9iaWxlTWVudSIsImRhdGEiLCJyZXNpemUiLCJpc0Rlc2t0b3AiLCJ3aWR0aCIsImlzTW9iaWxlIiwiaXNQYWQiLCJpc01vYmlsZU1lbnUiLCJpbml0aWFsaXplIiwiZ2VuZXJhbCIsInNlY3Rpb25Td2l0Y2giLCJjb250YWN0RnJvbSIsImhhbmRsZU1vYmlsZUhlYWRlciIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCIkYm9keSIsIiRwb3B1cCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJldmVudCIsIm1hc2siLCJoaWRlIiwiYXBwZW5kVG8iLCJmYWRlSW4iLCJjc3MiLCJwb3NpdGlvbiIsInRvcCIsImRvY3VtZW50IiwicmVhZHkiLCJhY2VSZXNwb25zaXZlTWVudSIsInJlc2l6ZVdpZHRoIiwiYW5pbWF0aW9uU3BlZWQiLCJhY2Nvcmlkb25FeHBBbGwiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRml4ZWRIZWFkZXIiLCJmaXhlZCIsInNjcm9sbFRvcCIsInByb2dyZXNzQmFyIiwibm90IiwiZWFjaCIsIm9mZnNldCIsInByb2NlbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhvc3RuYW1lIiwidGFyZ2V0IiwiaGFzaCIsInNsaWNlIiwiYW5pbWF0ZSIsImNvdW50VXAiLCJvcHRpb25zIiwidXNlRWFzaW5nIiwidXNlR3JvdXBpbmciLCJzZXBhcmF0b3IiLCJkZWNpbWFsIiwicHJlZml4Iiwic3VmZml4IiwiY291bnRlRWwiLCJ2YWwiLCJjb3VudHVwIiwiQ291bnRVcCIsImFwcGVhciIsInN0YXJ0IiwiYWNjWCIsImFjY1kiLCIkdGhpcyIsInN1Ym1pdCIsInZhbHVlcyIsInNlY3VyaXR5IiwiJG5hbWUiLCIkdmFsdWUiLCJhamF4IiwidXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsImh0bWwiLCJtZXNzYWdlIiwiZG9jdW1lbnRPblJlYWR5IiwiZG9jdW1lbnRPbkxvYWQiLCJmYWRlT3V0IiwiZG9jdW1lbnRPblJlc2l6ZSIsImRvY3VtZW50T25TY3JvbGwiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7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QU0sQ0FBQyxDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciBDTlZUSEVNRSA9IENOVlRIRU1FIHx8IHt9O1xuXG4oZnVuY3Rpb24gKCQpIHtcblxuICAgIC8qIS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgIyBUaGlzIGJlYXV0aWZ1bCBjb2RlIHdyaXR0ZW4gd2l0aCBoZWFydFxuICAgICAgICAjIGJ5IE1vbWludWwgSXNsYW0gPGhlbGxvQG1vbWludWwubWU+XG4gICAgICAgICMgSW4gRGhha2EsIEJEIGF0IHRoZSBDb2RlTmVzdCBWZW50dXJlcyB3b3Jrc3RhdGlvbi5cbiAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAgIC8vIFVTRSBTVFJJQ1RcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHdpbmRvdy5DTlYgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEhlYWRlclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSAkKCcuaGVhZGVyLWZpeGVkJyk7XG4gICAgICAgICAgICB0aGlzLmJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICB0aGlzLndwYWRtaW5iYXIgPSAkKCcjd3BhZG1pbmJhcicpO1xuXG4gICAgICAgICAgICB0aGlzLmhlYWRlckZpeGVkID0ge1xuICAgICAgICAgICAgICAgIGluaXRpYWxPZmZzZXQ6IHBhcnNlSW50KHRoaXMuaGVhZGVyLmF0dHIoJ2RhdGEtZml4ZWQtaW5pdGlhbC1vZmZzZXQnKSkgfHwgMTAwLFxuXG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJCgnW2RhdGEtaGVhZGVyLWZpeGVkXScpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG5cbiAgICAgICAgICAgICAgICBtb2JpbGVFbmFibGVkOiAkKCdbZGF0YS1tb2JpbGUtaGVhZGVyLWZpeGVkXScpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBtb2JpbGVWYWx1ZTogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIExvZ29zXG4gICAgICAgICAgICB0aGlzLnNpdGVUaXRsZSA9IHRoaXMuaGVhZGVyLmZpbmQoJy5zaXRlLXRpdGxlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ28gPSB0aGlzLmhlYWRlci5maW5kKCcubWFpbi1sb2dvJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ29Gb3JPbmVwYWdlID0gdGhpcy5oZWFkZXIuZmluZCgnLmZvci1vbmVwYWdlJyk7XG4gICAgICAgICAgICB0aGlzLmxvZ29Gb3JPbmVwYWdlTGlnaHQgPSB0aGlzLmxvZ29Gb3JPbmVwYWdlLmZpbmQoJy5saWdodCcpO1xuXG4gICAgICAgICAgICAvLyBNZW51c1xuICAgICAgICAgICAgdGhpcy5tZWdhTWVudSA9IHRoaXMuaGVhZGVyLmZpbmQoJyNtZWdhLW1lbnUtd3JhcCcpO1xuICAgICAgICAgICAgdGhpcy5tb2JpbGVNZW51ID0gJCgnW2RhdGEtbW9iaWxlLW1lbnUtcmVzb2x1dGlvbl0nKS5kYXRhKCdtb2JpbGUtbWVudS1yZXNvbHV0aW9uJyk7XG5cblxuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEZXNrdG9wID0gJCh3aW5kb3cpLndpZHRoKCkgPj0gOTkxO1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9ICQod2luZG93KS53aWR0aCgpIDw9IDk5MTtcbiAgICAgICAgICAgIHRoaXMuaXNQYWQgPSAkKHdpbmRvdykud2lkdGgoKSA8PSAxMDI0O1xuICAgICAgICAgICAgdGhpcy5pc01vYmlsZU1lbnUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSBDTlYubW9iaWxlTWVudVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIENOVlRIRU1FLmluaXRpYWxpemUgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIENOVlRIRU1FLmluaXRpYWxpemUuZ2VuZXJhbCgpO1xuICAgICAgICAgICAgQ05WVEhFTUUuaW5pdGlhbGl6ZS5zZWN0aW9uU3dpdGNoKCk7XG4gICAgICAgICAgICBDTlZUSEVNRS5pbml0aWFsaXplLmNvbnRhY3RGcm9tKCk7XG4gICAgICAgICAgICBDTlZUSEVNRS5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIENvbGxlY3Rpb24gb2Ygc25pcHBldCBhbmQgdHdlYWtzICAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgZ2VuZXJhbDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKFwiYWRtaW4tYmFyXCIpKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdoZWFkZXItcG9zaXRpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgdmFyICRwb3B1cCA9ICQoJy5jYW52YXMtbWVudS13cmFwcGVyJyk7XG5cbiAgICAgICAgICAgICQoXCIjcGFnZS1vcGVuLW1haW4tbWVudVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAkcG9wdXAuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKFwiLmNudnNjaG9vbC1oYW1idXJnZXJcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdwYWdlLXBvcHVwLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcyhcIm5vLXNjcm9sbCBzaWRlYmFyLW9wZW5cIikuaGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodCArIFwicHhcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChcIiNwYWdlLWNsb3NlLW1haW4tbWVudVwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAkKCcubWFzay1vdmVybGF5JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ3BhZ2UtcG9wdXAtb3BlbicpO1xuICAgICAgICAgICAgICAgICRwb3B1cC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJy5zdWItbWVudSwgLnN1Yi1tZW51LXdpZGUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICQoXCJodG1sXCIpLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsIHNpZGViYXItb3BlblwiKS5oZWlnaHQoXCJhdXRvXCIpO1xuICAgICAgICAgICAgICAgICQoXCIuY252c2Nob29sLWhhbWJ1cmdlclwiKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnLnN1Yi1tZW51LCAuc3ViLW1lbnUtd2lkZScpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhhcy1zdWJtZW51IC5tZW51LWxpbmsnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLm1vYmlsZS1tZW51LWljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG1hc2sgPSAnPGRpdiBjbGFzcz1cIm1hc2stb3ZlcmxheVwiPic7XG4gICAgICAgICAgICAgICAgJChtYXNrKS5oaWRlKCkuYXBwZW5kVG8oJ2JvZHknKS5mYWRlSW4oJ2Zhc3QnKTtcbiAgICAgICAgICAgICAgICAkKCcuaGVhZGVyLWlubmVyJykuYWRkQ2xhc3MoJ21lbnUtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIC8vIENsb3NlIG1lbnVcbiAgICAgICAgICAgICQoJyNzaXRlLWNvbnRlbnQnKS5vbignY2xpY2snLCAnLmNsb3NlLW1lbnUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlci1pbm5lcicpLnJlbW92ZUNsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcubW9iaWxlLW1lbnUtaWNvbicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLXNjcm9sbCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG1hc2tcbiAgICAgICAgICAgICAgICAkKCcubWFzay1vdmVybGF5JykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpZiAoJChcIiN3cGFkbWluYmFyXCIpLmxlbmd0aCAmJiAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICQoXCIjd3BhZG1pbmJhclwiKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IFwiMFwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvKiBNYWduZWZpYyBQb3B1cCAqL1xuICAgICAgICAgICAgLy8gJCgnLnBsYXktYnV0dG9uJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAgICAgJCgnLnBsYXktYnV0dG9uJykubWFnbmlmaWNQb3B1cCh7XG4gICAgICAgICAgICAvLyAgICAgICAgIHR5cGU6ICdpZnJhbWUnXG4gICAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIiNtZW51LXByaW1hcnktbWVudVwiKS5hY2VSZXNwb25zaXZlTWVudSh7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZVdpZHRoOiAnOTkxJywgLy8gU2V0IHRoZSBzYW1lIGluIE1lZGlhIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvblNwZWVkOiAnZmFzdCcsIC8vc2xvdywgbWVkaXVtLCBmYXN0XG4gICAgICAgICAgICAgICAgICAgIGFjY29yaWRvbkV4cEFsbDogZmFsc2UgLy9FeHBhbmRzIGFsbCB0aGUgYWNjb3JkaW9uIG1lbnUgb24gY2xpY2tcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIGhhbmRsZSBNb2JpbGUgSGVhZGVyICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGhhbmRsZU1vYmlsZUhlYWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoQ05WLmhlYWRlciAmJiBDTlYuaGVhZGVyLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKENOVi5pc01vYmlsZU1lbnUpIHtcbiAgICAgICAgICAgICAgICAgICAgQ05WLmhlYWRlci5hZGRDbGFzcygnbW9iaWxlLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBDTlYuYm9keS5hZGRDbGFzcygnaXMtbW9iaWxlLW1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcubWFpbi1uYXYnKS5hZGRDbGFzcygndW5oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDTlYuaGVhZGVyLnJlbW92ZUNsYXNzKCdtb2JpbGUtaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIENOVi5ib2R5LnJlbW92ZUNsYXNzKCdpcy1tb2JpbGUtbWVudScpO1xuICAgICAgICAgICAgICAgICAgICAkKCcubWFpbi1uYXYnKS5hZGRDbGFzcygndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgaGFuZGxlIEZpeGVkIEhlYWRlciAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGhhbmRsZUZpeGVkSGVhZGVyOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIENOVi5pbml0KCk7XG4gICAgICAgICAgICB2YXIgZml4ZWQgPSBDTlYuaGVhZGVyRml4ZWQ7XG5cbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IGZpeGVkLmluaXRpYWxPZmZzZXQpIHtcblxuICAgICAgICAgICAgICAgIGlmICgoIUNOVi5pc01vYmlsZU1lbnUgJiYgZml4ZWQuZW5hYmxlZCAmJiAhZml4ZWQudmFsdWUpIHx8XG4gICAgICAgICAgICAgICAgICAgIChDTlYuaXNNb2JpbGVNZW51ICYmIGZpeGVkLm1vYmlsZUVuYWJsZWQgJiYgIWZpeGVkLm1vYmlsZVZhbHVlKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChDTlYuaXNNb2JpbGVNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZC5tb2JpbGVWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXhlZC52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBDTlYuaGVhZGVyLmFkZENsYXNzKCdoZWFkZXItZml4ZWQgbm8tdHJhbnNpdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpeGVkLnZhbHVlIHx8IGZpeGVkLm1vYmlsZVZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICBmaXhlZC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZpeGVkLm1vYmlsZVZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBDTlYuaGVhZGVyLnJlbW92ZUNsYXNzKCdoZWFkZXItZml4ZWQnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFZmZlY3QgYXBwZWFyYW5jZVxuICAgICAgICAgICAgaWYgKCQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpID4gZml4ZWQuaW5pdGlhbE9mZnNldCArIDUwKSB7XG4gICAgICAgICAgICAgICAgQ05WLmhlYWRlci5yZW1vdmVDbGFzcygnbm8tdHJhbnNpdGlvbicpLmFkZENsYXNzKCdzaG93ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ05WLmhlYWRlci5yZW1vdmVDbGFzcygnc2hvd2VkJykuYWRkQ2xhc3MoJ25vLXRyYW5zaXRpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIFByb2dyZXNzYmFyICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBwcm9ncmVzc0JhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCQoJy5za2lsbC13cmFwcGVyJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJCgnLnNraWxscycpLm5vdCgnLmFjdGl2ZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID49ICQodGhpcykub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLmhlaWdodCgpICogMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5za2lsbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9jZW50ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuYWN0aXZlLWxpbmUnKS5jc3MoJ3dpZHRoJywgcHJvY2VudCArICclJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgU2VjdGlvbiBTd2l0Y2ggICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiAgICAgICAgc2VjdGlvblN3aXRjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2Utc2Nyb2xsLCAuc2l0ZS1oZWFkZXIgLm1lbnUgbGkgYSwgLmNhbnZhcy1uYXYgLnNpdGUtbWFpbi1tZW51IGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIDEzMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtdHlwZT1cInNlY3Rpb24tc3dpdGNoXCJdLCAuZ3AtYnRuLCAuY252c2Nob29sLW1haW4tbWVudSBsaSBhLCAuc2l0ZS1tYWluLW1lbnUgPiBsaSA+IGEnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgQ291bnR1cCAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGNvdW50VXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHVzZUVhc2luZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VHcm91cGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3I6ICcsJyxcbiAgICAgICAgICAgICAgICBkZWNpbWFsOiAnLicsXG4gICAgICAgICAgICAgICAgcHJlZml4OiAnJyxcbiAgICAgICAgICAgICAgICBzdWZmaXg6ICcnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgY291bnRlRWwgPSAkKCdbZGF0YS1jb3VudGVyXScpO1xuXG4gICAgICAgICAgICBpZiAoY291bnRlRWwpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVFbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9ICQodGhpcykuZGF0YSgnY291bnRlcicpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb3VudHVwID0gbmV3IENvdW50VXAodGhpcywgMCwgdmFsLCAwLCAyLjUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFwcGVhcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHVwLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY1g6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NZOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBDb250YWN0IEZvcm0gICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICBjb250YWN0RnJvbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtY252c2Nob29sLWZvcm1dJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuICAgICAgICAgICAgICAgICR0aGlzLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJywgJHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG9iamVjdCBhbmQgYXNzaWduIGFsbCBmaWVsZHMgbmFtZSBhbmQgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSAkKCcuY252c2Nob29sLW5ld3NsZXR0ZXItc2VjdXJpdHknKS5kYXRhKCdzZWN1cml0eScpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbXCJub25jZVwiXSA9IHNlY3VyaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tuYW1lXScsICR0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5hbWUgPSAkdGhpcy5hdHRyKCduYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlID0gJHRoaXMudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbJG5hbWVdID0gJHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmVzdWx0JywgJHRoaXMpLmFkZENsYXNzKCdhbGVydC13YXJuaW5nJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGFuZ2VyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmVzdWx0JywgJHRoaXMpLmFkZENsYXNzKCdhbGVydC1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcgYWxlcnQtZGFuZ2VyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJlc3VsdCA+IC5jb250ZW50JywgJHRoaXMpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScsICR0aGlzKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuYWRkQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpLnJlbW92ZUNsYXNzKCdhbGVydC13YXJuaW5nIGFsZXJ0LXN1Y2Nlc3MnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQgPiAuY29udGVudCcsICR0aGlzKS5odG1sKCdTb3JyeSwgYW4gZXJyb3Igb2NjdXJyZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nLCAkdGhpcykucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQ05WVEhFTUUuZG9jdW1lbnRPblJlYWR5ID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBDTlZUSEVNRS5pbml0aWFsaXplLmluaXQoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgQ05WVEhFTUUuZG9jdW1lbnRPbkxvYWQgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIENOVi5pbml0KCk7XG4gICAgICAgICAgICBDTlZUSEVNRS5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICAgICAgJChcIiNwcmVsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIENOVlRIRU1FLmRvY3VtZW50T25SZXNpemUgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKFwiI3dwYWRtaW5iYXJcIikubGVuZ3RoICYmICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgJChcIiN3cGFkbWluYmFyXCIpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIwXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ05WLnJlc2l6ZSgpO1xuICAgICAgICAgICAgQ05WVEhFTUUuaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgICAgIENOVlRIRU1FLmluaXRpYWxpemUuaGFuZGxlRml4ZWRIZWFkZXIoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgQ05WVEhFTUUuZG9jdW1lbnRPblNjcm9sbCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgQ05WVEhFTUUuaW5pdGlhbGl6ZS5oYW5kbGVGaXhlZEhlYWRlcigpO1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykuYWRkQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykucmVtb3ZlQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgRnVuY3Rpb25zXG4gICAgJChkb2N1bWVudCkucmVhZHkoQ05WVEhFTUUuZG9jdW1lbnRPblJlYWR5LmluaXQpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIENOVlRIRU1FLmRvY3VtZW50T25Mb2FkLmluaXQpO1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgQ05WVEhFTUUuZG9jdW1lbnRPblJlc2l6ZS5pbml0KTtcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIENOVlRIRU1FLmRvY3VtZW50T25TY3JvbGwuaW5pdCk7XG5cbn0pKGpRdWVyeSk7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9