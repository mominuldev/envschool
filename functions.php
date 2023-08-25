<?php
/**
 * CNV functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package cnvschool
 */

/**
 * Path Define
 */

define( 'CNV_THEME_DIR', get_template_directory() );
define( 'CNV_THEME_URI', get_template_directory_uri() );

// A Custom function for get an option
if ( ! function_exists( 'cnv_option' ) ) {
	function cnv_option( $option = '', $default = null ) {
		$options = get_option( 'cnv_framework' ); // Attention: Set your unique id of the framework

		return ( isset( $options[ $option ] ) ) ? $options[ $option ] : $default;
	}
}

/**
 * Implement the Custom Header feature.
 */
require CNV_THEME_DIR . '/inc/custom-header.php';

/**
 * Load All Classes.
 */
require_once CNV_THEME_DIR . '/inc/class/theme-autoload.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require CNV_THEME_DIR . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require CNV_THEME_DIR . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require CNV_THEME_DIR . '/inc/jetpack.php';
}

/**
 * Filter the categories archive widget to add a span around post count
 */
function cnv_cat_count_span( $links ) {
	$links = str_replace( '</a> (', ' <span class="post-count">', $links );
	$links = str_replace( ')', '</span></a>', $links );

	return $links;
}

add_filter( 'wp_list_categories', 'cnv_cat_count_span' );

/**
 * Filter the archives widget to add a span around post count
 */
function cnv_archive_count_span( $links ) {
	$links = str_replace( '</a>&nbsp;(', '<span class="post-count">', $links );
	$links = str_replace( ')', '</span></a>', $links );

	return $links;
}

add_filter( 'get_archives_link', 'cnv_archive_count_span' );

add_filter( 'get_archives_link', 'cnv_archive_count_span' );

if ( ! function_exists( 'cnv_reorder_comment_fields' ) ) {
	function cnv_reorder_comment_fields( $fields ) {
		$new_fields = array();

		$myorder = array( 'author', 'email', 'url', 'comment' );

		foreach ( $myorder as $key ) {
			$new_fields[ $key ] = isset( $fields[ $key ] ) ? $fields[ $key ] : '';
			unset( $fields[ $key ] );
		}

		if ( $fields ) {
			foreach ( $fields as $key => $val ) {
				$new_fields[ $key ] = $val;
			}
		}

		return $new_fields;
	}
}

add_filter( 'comment_form_fields', 'cnv_reorder_comment_fields' );

// Codestar Framework Welcome page disable
add_filter( 'csf_welcome_page', '__return_false' );