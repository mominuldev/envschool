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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJDTlZUSEVNRSIsIiQiLCJ3aW5kb3ciLCJDTlYiLCJpbml0IiwiaGVhZGVyIiwiYm9keSIsIndwYWRtaW5iYXIiLCJoZWFkZXJGaXhlZCIsImluaXRpYWxPZmZzZXQiLCJwYXJzZUludCIsImF0dHIiLCJlbmFibGVkIiwibGVuZ3RoIiwidmFsdWUiLCJtb2JpbGVFbmFibGVkIiwibW9iaWxlVmFsdWUiLCJzaXRlVGl0bGUiLCJmaW5kIiwibG9nbyIsImxvZ29Gb3JPbmVwYWdlIiwibG9nb0Zvck9uZXBhZ2VMaWdodCIsIm1lZ2FNZW51IiwibW9iaWxlTWVudSIsImRhdGEiLCJyZXNpemUiLCJpc0Rlc2t0b3AiLCJ3aWR0aCIsImlzTW9iaWxlIiwiaXNQYWQiLCJpc01vYmlsZU1lbnUiLCJpbml0aWFsaXplIiwiZ2VuZXJhbCIsInNlY3Rpb25Td2l0Y2giLCJjb250YWN0RnJvbSIsImhhbmRsZU1vYmlsZUhlYWRlciIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCIkYm9keSIsIiRwb3B1cCIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJyZW1vdmUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJldmVudCIsIm1hc2siLCJoaWRlIiwiYXBwZW5kVG8iLCJmYWRlSW4iLCJjc3MiLCJwb3NpdGlvbiIsInRvcCIsImRvY3VtZW50IiwicmVhZHkiLCJhY2VSZXNwb25zaXZlTWVudSIsInJlc2l6ZVdpZHRoIiwiYW5pbWF0aW9uU3BlZWQiLCJhY2Nvcmlkb25FeHBBbGwiLCJzZXRUaW1lb3V0IiwiaGFuZGxlRml4ZWRIZWFkZXIiLCJmaXhlZCIsInNjcm9sbFRvcCIsInByb2dyZXNzQmFyIiwibm90IiwiZWFjaCIsIm9mZnNldCIsInByb2NlbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhvc3RuYW1lIiwidGFyZ2V0IiwiaGFzaCIsInNsaWNlIiwiYW5pbWF0ZSIsImNvdW50VXAiLCJvcHRpb25zIiwidXNlRWFzaW5nIiwidXNlR3JvdXBpbmciLCJzZXBhcmF0b3IiLCJkZWNpbWFsIiwicHJlZml4Iiwic3VmZml4IiwiY291bnRlRWwiLCJ2YWwiLCJjb3VudHVwIiwiQ291bnRVcCIsImFwcGVhciIsInN0YXJ0IiwiYWNjWCIsImFjY1kiLCIkdGhpcyIsInN1Ym1pdCIsInZhbHVlcyIsInNlY3VyaXR5IiwiJG5hbWUiLCIkdmFsdWUiLCJhamF4IiwidXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJlcnJvciIsImh0bWwiLCJtZXNzYWdlIiwiZG9jdW1lbnRPblJlYWR5IiwiZG9jdW1lbnRPbkxvYWQiLCJmYWRlT3V0IiwiZG9jdW1lbnRPblJlc2l6ZSIsImRvY3VtZW50T25TY3JvbGwiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7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QUFNLENBQUMsQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJ2YXIgQ05WVEhFTUUgPSBDTlZUSEVNRSB8fCB7fTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICMgVGhpcyBiZWF1dGlmdWwgY29kZSB3cml0dGVuIHdpdGggaGVhcnRcbiAgICAgICAgIyBieSBNb21pbnVsIElzbGFtIDxoZWxsb0Btb21pbnVsLm1lPlxuICAgICAgICAjIEluIERoYWthLCBCRCBhdCB0aGUgQ29kZU5lc3QgVmVudHVyZXMgd29ya3N0YXRpb24uXG4gICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICAvLyBVU0UgU1RSSUNUXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB3aW5kb3cuQ05WID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBIZWFkZXJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gJCgnLmhlYWRlci1maXhlZCcpO1xuICAgICAgICAgICAgdGhpcy5ib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgdGhpcy53cGFkbWluYmFyID0gJCgnI3dwYWRtaW5iYXInKTtcblxuICAgICAgICAgICAgdGhpcy5oZWFkZXJGaXhlZCA9IHtcbiAgICAgICAgICAgICAgICBpbml0aWFsT2Zmc2V0OiBwYXJzZUludCh0aGlzLmhlYWRlci5hdHRyKCdkYXRhLWZpeGVkLWluaXRpYWwtb2Zmc2V0JykpIHx8IDEwMCxcblxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICQoJ1tkYXRhLWhlYWRlci1maXhlZF0nKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgbW9iaWxlRW5hYmxlZDogJCgnW2RhdGEtbW9iaWxlLWhlYWRlci1maXhlZF0nKS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbW9iaWxlVmFsdWU6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBMb2dvc1xuICAgICAgICAgICAgdGhpcy5zaXRlVGl0bGUgPSB0aGlzLmhlYWRlci5maW5kKCcuc2l0ZS10aXRsZScpO1xuICAgICAgICAgICAgdGhpcy5sb2dvID0gdGhpcy5oZWFkZXIuZmluZCgnLm1haW4tbG9nbycpO1xuICAgICAgICAgICAgdGhpcy5sb2dvRm9yT25lcGFnZSA9IHRoaXMuaGVhZGVyLmZpbmQoJy5mb3Itb25lcGFnZScpO1xuICAgICAgICAgICAgdGhpcy5sb2dvRm9yT25lcGFnZUxpZ2h0ID0gdGhpcy5sb2dvRm9yT25lcGFnZS5maW5kKCcubGlnaHQnKTtcblxuICAgICAgICAgICAgLy8gTWVudXNcbiAgICAgICAgICAgIHRoaXMubWVnYU1lbnUgPSB0aGlzLmhlYWRlci5maW5kKCcjbWVnYS1tZW51LXdyYXAnKTtcbiAgICAgICAgICAgIHRoaXMubW9iaWxlTWVudSA9ICQoJ1tkYXRhLW1vYmlsZS1tZW51LXJlc29sdXRpb25dJykuZGF0YSgnbW9iaWxlLW1lbnUtcmVzb2x1dGlvbicpO1xuXG5cbiAgICAgICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGVza3RvcCA9ICQod2luZG93KS53aWR0aCgpID49IDk5MTtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA5OTE7XG4gICAgICAgICAgICB0aGlzLmlzUGFkID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNDtcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGVNZW51ID0gJCh3aW5kb3cpLndpZHRoKCkgPD0gQ05WLm1vYmlsZU1lbnVcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBDTlZUSEVNRS5pbml0aWFsaXplID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBDTlZUSEVNRS5pbml0aWFsaXplLmdlbmVyYWwoKTtcbiAgICAgICAgICAgIENOVlRIRU1FLmluaXRpYWxpemUuc2VjdGlvblN3aXRjaCgpO1xuICAgICAgICAgICAgQ05WVEhFTUUuaW5pdGlhbGl6ZS5jb250YWN0RnJvbSgpO1xuICAgICAgICAgICAgQ05WVEhFTUUuaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBDb2xsZWN0aW9uIG9mIHNuaXBwZXQgYW5kIHR3ZWFrcyAgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIGdlbmVyYWw6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcyhcImFkbWluLWJhclwiKSkge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaGVhZGVyLXBvc2l0aW9uJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIHZhciAkcG9wdXAgPSAkKCcuY2FudmFzLW1lbnUtd3JhcHBlcicpO1xuXG4gICAgICAgICAgICAkKFwiI3BhZ2Utb3Blbi1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcIi5jbnZzY2hvb2wtaGFtYnVyZ2VyXCIpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygncGFnZS1wb3B1cC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoXCJuby1zY3JvbGwgc2lkZWJhci1vcGVuXCIpLmhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQgKyBcInB4XCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIjcGFnZS1jbG9zZS1tYWluLW1lbnVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdwYWdlLXBvcHVwLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcuc3ViLW1lbnUsIC5zdWItbWVudS13aWRlJykucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbCBzaWRlYmFyLW9wZW5cIikuaGVpZ2h0KFwiYXV0b1wiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmNudnNjaG9vbC1oYW1idXJnZXJcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJy5zdWItbWVudSwgLnN1Yi1tZW51LXdpZGUnKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICQoJy5oYXMtc3VibWVudSAubWVudS1saW5rJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5tb2JpbGUtbWVudS1pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtYXNrID0gJzxkaXYgY2xhc3M9XCJtYXNrLW92ZXJsYXlcIj4nO1xuICAgICAgICAgICAgICAgICQobWFzaykuaGlkZSgpLmFwcGVuZFRvKCdib2R5JykuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgICAgICAgICAgJCgnLmhlYWRlci1pbm5lcicpLmFkZENsYXNzKCdtZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyBDbG9zZSBtZW51XG4gICAgICAgICAgICAkKCcjc2l0ZS1jb250ZW50Jykub24oJ2NsaWNrJywgJy5jbG9zZS1tZW51JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICQoJy5oZWFkZXItaW5uZXInKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLm1vYmlsZS1tZW51LWljb24nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCduby1zY3JvbGwnKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBtYXNrXG4gICAgICAgICAgICAgICAgJCgnLm1hc2stb3ZlcmxheScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaWYgKCQoXCIjd3BhZG1pbmJhclwiKS5sZW5ndGggJiYgJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3dwYWRtaW5iYXJcIikuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjBcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLyogTWFnbmVmaWMgUG9wdXAgKi9cbiAgICAgICAgICAgIC8vICQoJy5wbGF5LWJ1dHRvbicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgICQoJy5wbGF5LWJ1dHRvbicpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgLy8gICAgICAgICB0eXBlOiAnaWZyYW1lJ1xuICAgICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCIjbWVudS1wcmltYXJ5LW1lbnVcIikuYWNlUmVzcG9uc2l2ZU1lbnUoe1xuICAgICAgICAgICAgICAgICAgICByZXNpemVXaWR0aDogJzk5MScsIC8vIFNldCB0aGUgc2FtZSBpbiBNZWRpYSBxdWVyeVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25TcGVlZDogJ2Zhc3QnLCAvL3Nsb3csIG1lZGl1bSwgZmFzdFxuICAgICAgICAgICAgICAgICAgICBhY2Nvcmlkb25FeHBBbGw6IGZhbHNlIC8vRXhwYW5kcyBhbGwgdGhlIGFjY29yZGlvbiBtZW51IG9uIGNsaWNrXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBoYW5kbGUgTW9iaWxlIEhlYWRlciAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBoYW5kbGVNb2JpbGVIZWFkZXI6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYgKENOVi5oZWFkZXIgJiYgQ05WLmhlYWRlci5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIGlmIChDTlYuaXNNb2JpbGVNZW51KSB7XG4gICAgICAgICAgICAgICAgICAgIENOVi5oZWFkZXIuYWRkQ2xhc3MoJ21vYmlsZS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgQ05WLmJvZHkuYWRkQ2xhc3MoJ2lzLW1vYmlsZS1tZW51Jyk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2JykuYWRkQ2xhc3MoJ3VuaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ05WLmhlYWRlci5yZW1vdmVDbGFzcygnbW9iaWxlLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBDTlYuYm9keS5yZW1vdmVDbGFzcygnaXMtbW9iaWxlLW1lbnUnKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2JykuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIGhhbmRsZSBGaXhlZCBIZWFkZXIgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBoYW5kbGVGaXhlZEhlYWRlcjogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBDTlYuaW5pdCgpO1xuICAgICAgICAgICAgdmFyIGZpeGVkID0gQ05WLmhlYWRlckZpeGVkO1xuXG4gICAgICAgICAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiBmaXhlZC5pbml0aWFsT2Zmc2V0KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoKCFDTlYuaXNNb2JpbGVNZW51ICYmIGZpeGVkLmVuYWJsZWQgJiYgIWZpeGVkLnZhbHVlKSB8fFxuICAgICAgICAgICAgICAgICAgICAoQ05WLmlzTW9iaWxlTWVudSAmJiBmaXhlZC5tb2JpbGVFbmFibGVkICYmICFmaXhlZC5tb2JpbGVWYWx1ZSkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQ05WLmlzTW9iaWxlTWVudSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQubW9iaWxlVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWQudmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgQ05WLmhlYWRlci5hZGRDbGFzcygnaGVhZGVyLWZpeGVkIG5vLXRyYW5zaXRpb24nKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaXhlZC52YWx1ZSB8fCBmaXhlZC5tb2JpbGVWYWx1ZSkge1xuXG4gICAgICAgICAgICAgICAgZml4ZWQudmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmaXhlZC5tb2JpbGVWYWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgQ05WLmhlYWRlci5yZW1vdmVDbGFzcygnaGVhZGVyLWZpeGVkJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWZmZWN0IGFwcGVhcmFuY2VcbiAgICAgICAgICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IGZpeGVkLmluaXRpYWxPZmZzZXQgKyA1MCkge1xuICAgICAgICAgICAgICAgIENOVi5oZWFkZXIucmVtb3ZlQ2xhc3MoJ25vLXRyYW5zaXRpb24nKS5hZGRDbGFzcygnc2hvd2VkJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIENOVi5oZWFkZXIucmVtb3ZlQ2xhc3MoJ3Nob3dlZCcpLmFkZENsYXNzKCduby10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgLyo9ICAgICAgICAgICBQcm9ncmVzc2JhciAgICAgICAgICA9Ki9cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKCcuc2tpbGwtd3JhcHBlcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICQoJy5za2lsbHMnKS5ub3QoJy5hY3RpdmUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSAkKHRoaXMpLm9mZnNldCgpLnRvcCAtICQod2luZG93KS5oZWlnaHQoKSAqIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcuc2tpbGwnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvY2VudCA9ICQodGhpcykuYXR0cignZGF0YS12YWx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLmFjdGl2ZS1saW5lJykuY3NzKCd3aWR0aCcsIHByb2NlbnQgKyAnJScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIFNlY3Rpb24gU3dpdGNoICAgICAgICAgID0qL1xuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4gICAgICAgIHNlY3Rpb25Td2l0Y2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5wYWdlLXNjcm9sbCwgLnNpdGUtaGVhZGVyIC5tZW51IGxpIGEsIC5jYW52YXMtbmF2IC5zaXRlLW1haW4tbWVudSBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgLSAxMzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJ1tkYXRhLXR5cGU9XCJzZWN0aW9uLXN3aXRjaFwiXSwgLmdwLWJ0biwgLmNudnNjaG9vbC1tYWluLW1lbnUgbGkgYSwgLnNpdGUtbWFpbi1tZW51ID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuICAgICAgICAvKj0gICAgICAgICAgIENvdW50dXAgICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBjb3VudFVwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB1c2VFYXNpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlR3JvdXBpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiAnLCcsXG4gICAgICAgICAgICAgICAgZGVjaW1hbDogJy4nLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJycsXG4gICAgICAgICAgICAgICAgc3VmZml4OiAnJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIGNvdW50ZUVsID0gJCgnW2RhdGEtY291bnRlcl0nKTtcblxuICAgICAgICAgICAgaWYgKGNvdW50ZUVsKSB7XG4gICAgICAgICAgICAgICAgY291bnRlRWwuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSAkKHRoaXMpLmRhdGEoJ2NvdW50ZXInKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgY291bnR1cCA9IG5ldyBDb3VudFVwKHRoaXMsIDAsIHZhbCwgMCwgMi41LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hcHBlYXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnR1cC5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NYOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjWTogMFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4gICAgICAgIC8qPSAgICAgICAgICAgQ29udGFjdCBGb3JtICAgICAgICAgPSovXG4gICAgICAgIC8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgICAgICBjb250YWN0RnJvbTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtY252c2Nob29sLWZvcm1dJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcblxuICAgICAgICAgICAgICAgICR0aGlzLnN1Ym1pdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJywgJHRoaXMpLmFkZENsYXNzKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG9iamVjdCBhbmQgYXNzaWduIGFsbCBmaWVsZHMgbmFtZSBhbmQgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSAkKCcuY252c2Nob29sLW5ld3NsZXR0ZXItc2VjdXJpdHknKS5kYXRhKCdzZWN1cml0eScpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbXCJub25jZVwiXSA9IHNlY3VyaXR5O1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ1tuYW1lXScsICR0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5hbWUgPSAkdGhpcy5hdHRyKCduYW1lJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHZhbHVlID0gJHRoaXMudmFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbJG5hbWVdID0gJHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBNYWtlIFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJHRoaXMuYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB2YWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmVzdWx0JywgJHRoaXMpLmFkZENsYXNzKCdhbGVydC13YXJuaW5nJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXN1Y2Nlc3MgYWxlcnQtZGFuZ2VyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZvcm0tcmVzdWx0JywgJHRoaXMpLmFkZENsYXNzKCdhbGVydC1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2FsZXJ0LXdhcm5pbmcgYWxlcnQtZGFuZ2VyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5mb3JtLXJlc3VsdCA+IC5jb250ZW50JywgJHRoaXMpLmh0bWwoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScsICR0aGlzKS5yZW1vdmVDbGFzcygnY2xpY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQnLCAkdGhpcykuYWRkQ2xhc3MoJ2FsZXJ0LWRhbmdlcicpLnJlbW92ZUNsYXNzKCdhbGVydC13YXJuaW5nIGFsZXJ0LXN1Y2Nlc3MnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcuZm9ybS1yZXN1bHQgPiAuY29udGVudCcsICR0aGlzKS5odG1sKCdTb3JyeSwgYW4gZXJyb3Igb2NjdXJyZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nLCAkdGhpcykucmVtb3ZlQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQ05WVEhFTUUuZG9jdW1lbnRPblJlYWR5ID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBDTlZUSEVNRS5pbml0aWFsaXplLmluaXQoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgQ05WVEhFTUUuZG9jdW1lbnRPbkxvYWQgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIENOVi5pbml0KCk7XG4gICAgICAgICAgICBDTlZUSEVNRS5pbml0aWFsaXplLmhhbmRsZU1vYmlsZUhlYWRlcigpO1xuICAgICAgICAgICAgJChcIiNwcmVsb2FkZXJcIikuZmFkZU91dChcInNsb3dcIik7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIENOVlRIRU1FLmRvY3VtZW50T25SZXNpemUgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKFwiI3dwYWRtaW5iYXJcIikubGVuZ3RoICYmICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgJChcIiN3cGFkbWluYmFyXCIpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCIwXCJcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQ05WLnJlc2l6ZSgpO1xuICAgICAgICAgICAgQ05WVEhFTUUuaW5pdGlhbGl6ZS5oYW5kbGVNb2JpbGVIZWFkZXIoKTtcbiAgICAgICAgICAgIENOVlRIRU1FLmluaXRpYWxpemUuaGFuZGxlRml4ZWRIZWFkZXIoKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgQ05WVEhFTUUuZG9jdW1lbnRPblNjcm9sbCA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgQ05WVEhFTUUuaW5pdGlhbGl6ZS5oYW5kbGVGaXhlZEhlYWRlcigpO1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+IDMwMCkge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykuYWRkQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJy5yZXR1cm4tdG8tdG9wJykucmVtb3ZlQ2xhc3MoJ2JhY2stdG9wJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgRnVuY3Rpb25zXG4gICAgJChkb2N1bWVudCkucmVhZHkoQ05WVEhFTUUuZG9jdW1lbnRPblJlYWR5LmluaXQpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIENOVlRIRU1FLmRvY3VtZW50T25Mb2FkLmluaXQpO1xuICAgICQod2luZG93KS5vbigncmVzaXplJywgQ05WVEhFTUUuZG9jdW1lbnRPblJlc2l6ZS5pbml0KTtcbiAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIENOVlRIRU1FLmRvY3VtZW50T25TY3JvbGwuaW5pdCk7XG5cbn0pKGpRdWVyeSk7XG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9