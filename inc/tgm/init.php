<?php
/**
 * @see http://tgmpluginactivation.com/configuration/ for detailed documentation.
 *
 * @package    TGM-Plugin-Activation
 * @subpackage CNV
 * @version    2.6.1 for parent theme corid for publication on ThemeForest
 * @author     Thomas Griffin, Gary Jones, Juliette Reinders Folmer
 * @copyright  Copyright (c) 2011, Thomas Griffin
 * @license    http://opensource.org/licenses/gpl-2.0.php GPL v2 or later
 * @link       https://github.com/TGMPA/TGM-Plugin-Activation
 */

/**
 * Include the TGM_Plugin_Activation class.
 */

require get_parent_theme_file_path( '/inc/tgm/class-tgm-plugin-activation.php' );

add_action( 'tgmpa_register', 'cnv_register_required_plugins' );

/**
 * Register the required plugins for this theme.
 */
function cnv_register_required_plugins() {
	/*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(
		array(
			'name'     => __('CNV School Addon', 'gotox'),
			'slug'     => 'cnv-school-addon',
			'required' => true,
			'source'   => 'https://demo.codenestventures.com/cnv-plugins/cnv-school-addon.zip',
		),
		
		array(
			'name'     => esc_attr__( 'Codestar Framework', 'gotox' ),
			'slug'     => 'codestar-framework',
			'source'   => ( 'https://demo.codenestventures.com/cnv-plugins/codestar-framework.zip' ),
			'required' => true,
		),

		array(
			'name'     => esc_attr__( 'Elementor', 'gotox' ),
			'slug'     => 'elementor',
			'required' => true,
		),

		array(
			'name'     => __('Contact Form 7', 'gotox'),
			'slug'     => 'contact-form-7',
			'required' => false,
		),

	);

	/*
	 * Config for TGMPA
	 */
	$config = array(
		'id'           => 'gotox',
		'default_path' => '',
		'menu'         => 'gotox-install-plugins',
		'has_notices'  => true,
		'dismissable'  => true,
		'dismiss_msg'  => '',
		'is_automatic' => false,
		'message'      => '',
	);

	tgmpa( $plugins, $config );
}