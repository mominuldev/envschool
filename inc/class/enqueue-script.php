<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @class        CNV_Enqueue_Script
 * @version      1.0
 * @category     Class
 * @author       CodeNest Ventures
 */
class CNV_Enqueue_Script {

	public $settings;
	protected static $instance = null;
	private $gtdu;
	private $use_minify;

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public function register_script() {
		$this->gtdu       = get_template_directory_uri();
		$this->use_minify = cnv_option( 'use_minify' ) ? '.min' : '';
		// Register action
		add_action( 'wp_enqueue_scripts', array( $this, 'css_reg' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'js_reg' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_css_reg' ) );
	}

	/* Register CSS */
	public function css_reg() {

		wp_enqueue_style( 'cnv-style_main', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );

		/* Bootstrap CSS */
		wp_enqueue_style( 'bootstrap', $this->gtdu . '/assets/css/bootstrap.min.css' );
		wp_enqueue_style( 'font-awesome-five', $this->gtdu . '/assets/css/all.min.css', array(), '5.15.4' );
		wp_enqueue_style( 'feather', $this->gtdu . '/assets/css/feather.css' );
		wp_enqueue_style( 'magnific-popup', $this->gtdu . '/assets/css/magnific-popup.css' );
		wp_enqueue_style( 'animate', $this->gtdu . '/assets/css/animate.css' );
		wp_enqueue_style( 'preloder', $this->gtdu . '/assets/css/loader.min.css' );

		// Font Include
		wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap', [], null );

		// Main CSS
		wp_enqueue_style( 'cnv-style', $this->gtdu . '/assets/css/app.css' );


		if ( is_rtl() ) {
			wp_enqueue_style( 'cnv-rtl-style', get_parent_theme_file_uri( '/assets/css/app-rtl.css' ), array(), wp_get_theme()->get( 'Version' ), 'all' );
		}

		// Preloader CSS
		$preloader_opt       = cnv_option( 'preloader' );
		$preloader_color_opt = cnv_option( 'preloader_color' );


		if ( ! empty( $preloader_opt ) ) {
			$color = ( ! empty( $preloader_color_opt ) ) ? $preloader_color_opt : 'rgba(150,41,230,0.97)';

			$preloader_css = '
                #preloader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background-color: ' . esc_attr( $color ) . ';
                    z-index: 9999999;
                }

                #loader {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }';

			wp_add_inline_style( 'cnv-style', $preloader_css );
		}

	}

	/* Register JS */
	public function js_reg() {
		$smooth_scroll = cnv_option( 'smooth_scroll' );

		wp_enqueue_script( 'bootstrap', $this->gtdu . '/assets/js/bootstrap.min.js', array( 'jquery' ), '4.3.1', true );
		wp_enqueue_script( 'wow', $this->gtdu . '/assets/js/wow.min.js', array( 'jquery' ), '3.1.12', true );
		wp_enqueue_script( 'appear', $this->gtdu . '/assets/js/jquery.appear.js', array( 'jquery' ), '3.1.12', true );
		wp_enqueue_script( 'swiper', $this->gtdu . '/assets/js/swiper.min.js', array( 'jquery' ), '3.1.12', true );
		wp_enqueue_script( 'magnefic-popup', $this->gtdu . '/assets/js/jquery.magnific-popup.min.js', array( 'jquery' ), '3.1.12', true );
		wp_enqueue_script( 'header', $this->gtdu . '/assets/js/header.js', array( 'jquery' ), '3.1.12', true );
		wp_register_script( 'isotope', $this->gtdu . '/assets/js/isotope.pkgd.min.js', array( 'jquery' ), '3.1.12', true );
		wp_enqueue_script( 'cnv-theme', $this->gtdu . '/assets/js/app.js', array( 'jquery' ), false, true );

		if ( $smooth_scroll ) {
			wp_enqueue_script( 'smoothscroll', $this->gtdu . '/assets/js/smoothscroll.min.js', array( 'jquery' ), '3.1.12', true );
		}
		
		//Comment Reply
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}

	public function admin_css_reg() {
		wp_enqueue_style( 'admin-font-awesome-five', $this->gtdu . '/assets/css/all.min.css' );
	}

}

if ( ! function_exists( 'cnv_enqueue_script' ) ) {
	function cnv_enqueue_script() {
		return CNV_Enqueue_Script::instance();
	}
}

cnv_enqueue_script()->register_script();


