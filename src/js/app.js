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
        init: function () {
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

        resize: function () {
            this.isDesktop = $(window).width() >= 991;
            this.isMobile = $(window).width() <= 991;
            this.isPad = $(window).width() <= 1024;
            this.isMobileMenu = $(window).width() <= CNV.mobileMenu
        }
    };

    CNV.initialize = {
        init: function () {
            CNV.initialize.general();
            CNV.initialize.sectionSwitch();
            CNV.initialize.contactFrom();
            CNV.initialize.handleMobileHeader();
        },

        /*========================================================*/
        /*=           Collection of snippet and tweaks           =*/
        /*========================================================*/

        general: function () {

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
                })
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
                const $this = $(this);

                if ($this.parent().hasClass('open')) {
                    $this
                        .parent()
                        .children('.sub-menu')
                        .slideUp(400, () => {
                            $this.parent().removeClass('open');
                        });
                } else {
                    $this
                        .parent()
                        .parent()
                        .children('li.open')
                        .children('.sub-menu')
                        .slideUp(200);

                    $this
                        .parent()
                        .parent()
                        .children('li.open')
                        .children('a')
                        .removeClass('open');

                    $this
                        .parent()
                        .parent()
                        .children('li.open')
                        .removeClass('open');

                    $this
                        .parent()
                        .children('.sub-menu')
                        .slideDown(200, () => {
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

        handleMobileHeader: function () {

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

        handleFixedHeader: function () {

            CNV.init();
            var fixed = CNV.headerFixed;

            if ($(document).scrollTop() > fixed.initialOffset) {

                if ((!CNV.isMobileMenu && fixed.enabled && !fixed.value) ||
                    (CNV.isMobileMenu && fixed.mobileEnabled && !fixed.mobileValue)) {

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
        progressBar: function () {
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

        sectionSwitch: function () {
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

        countUp: function () {
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
                    })
                });
            }
        },
        /*=================================*/
        /*=           Contact Form         =*/
        /*=================================*/
        contactFrom: function () {
            $('[data-cnvschool-form]').each(function () {
                var $this = $(this);
                $('.form-result', $this).css('display', 'none');

                $this.submit(function () {
                    $('button[type="submit"]', $this).addClass('clicked');
                    // Create a object and assign all fields name and value.
                    var values = {};
                    const security = $('.cnvschool-newsletter-security').data('security');
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
        init: function () {
            CNV.initialize.init();
        },
    };

    CNV.documentOnLoad = {
        init: function () {
            CNV.init();
            CNV.initialize.handleMobileHeader();
            $("#preloader").fadeOut("slow");
        },
    };

    CNV.documentOnResize = {
        init: function () {
            if ($("#wpadminbar").length && $(window).width() < 768) {
                $("#wpadminbar").css({
                    position: "fixed",
                    top: "0"
                })
            }
            CNV.resize();
            CNV.initialize.handleMobileHeader();
            CNV.initialize.handleFixedHeader();
        },
    };

    CNV.documentOnScroll = {
        init: function () {
            CNV.initialize.handleFixedHeader();
            if ($(window).scrollTop() > 300) {
                $('.return-to-top').addClass('back-top');
            } else {
                $('.return-to-top').removeClass('back-top');
            }

        },
    };

    // Initialize Functions
    $(document).ready(CNV.documentOnReady.init);
    $(window).on('load', CNV.documentOnLoad.init);
    $(window).on('resize', CNV.documentOnResize.init);
    $(window).on('scroll', CNV.documentOnScroll.init);

})(jQuery);



