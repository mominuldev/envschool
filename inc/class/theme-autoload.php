<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
/**
* CNV Theme Autoload
*
*
* @class        CNV_Theme_Autoload
* @version      1.0
* @category     Class
* @author       CodeNest Ventures
*/

if (!class_exists('CNV_Theme_Autoload')) {
    class CNV_Theme_Autoload{

        private static $instance = null;
        public static function get_instance( ) {
            if ( null == self::$instance ) {
                self::$instance = new self( );
            }

            return self::$instance;
        }

        public function __construct () {

        	#Theme Helper
            $this->theme_helper();

            #Theme Enqueue Script
            $this->enqueue_script();

            #Theme Support
            $this->theme_support();

            #Theme option
            $this->theme_option();

            #Customize theme
            $this->walker_comment();

            #TGM init
            $this->tgm_register();

            #Mega Menu
            $this->menu();
        }

		public function enqueue_script(){
            require_once CNV_THEME_DIR . '/inc/class/enqueue-script.php';
        }

        public function theme_helper(){
            require_once CNV_THEME_DIR . '/inc/class/theme-helper.php';
        }

        public function theme_support(){
            require_once CNV_THEME_DIR . '/inc/class/theme-support.php';
        }

        public function theme_option() {
	        require_once CNV_THEME_DIR . '/inc/framework/admin-option.php';
	        require_once CNV_THEME_DIR . '/inc/framework/meta-option.php';
	        require_once CNV_THEME_DIR . '/inc/framework/gallery.php';
	        require_once CNV_THEME_DIR . '/inc/framework/notice.php';
	        require_once CNV_THEME_DIR . '/inc/framework/menu.php';

			// Widgets
	        require_once CNV_THEME_DIR . '/inc/framework/widgets/about.php';
	        require_once CNV_THEME_DIR . '/inc/framework/widgets/contact-info.php';
        }

        public function walker_comment(){
            require_once CNV_THEME_DIR . '/inc/class/walker-comment.php';
        }

        public function tgm_register(){
             require_once CNV_THEME_DIR . '/inc/tgm/init.php';
        }

        public function menu(){
             require_once CNV_THEME_DIR . '/inc/class/menus.php';
        }

    }
    new CNV_Theme_Autoload();
}
