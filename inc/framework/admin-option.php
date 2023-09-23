<?php
// Control core classes for avoid errors
if ( class_exists( 'CSF' ) ) {

	// Set a unique slug-like ID
	$prefix = 'cnv_framework';

	// Create options
	CSF::createOptions( $prefix, array(
		'menu_title'      => esc_html__( 'Theme Option', 'cnvschool' ),
		'menu_slug'       => 'cnvschool-theme-option',
		'framework_title' => esc_html__( 'Theme Settings', 'cnvschool' ),
		'theme'           => 'dark',
		'sticky_header'   => 'true',
		'menu_position' => 50,
	) );

	// General Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'General', 'cnvschool' ),
		'icon'   => 'fa fa-building-o',
		'fields' => array(
			array(
				'id'    => 'preloader_switch',
				'type'  => 'switcher',
				'title' => esc_html__( 'Enable Preloader', 'cnvschool' ),
			),
			array(
				'id'         => 'preloader-type',
				'type'       => 'select',
				'title'      => esc_html__( 'Preloader type', 'cnvschool' ),
				'options'    => array(
					'text'   => esc_html__( 'Animated Text', 'cnvschool' ),
					'css'    => esc_html__( 'CSS', 'cnvschool' ),
					'images' => esc_html__( 'Media', 'cnvschool' )
				),
				'dependency' => array( 'preloader_switch', '==', true ),
			),
			array(
				'id'         => 'preloader-images',
				'type'       => 'media',
				'title'      => esc_html__( 'Preloader Image', 'cnvschool' ),
				'add_title'  => esc_html__( 'Upload Your Image', 'cnvschool' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|images' ),
			),
			array(
				'id'         => 'preloader',
				'type'       => 'select',
				'title'      => esc_html__( 'Preloader Style', 'cnvschool' ),
				'class'      => 'chosen',
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|css' ),
				'options'    => array(
					'ball-pulse-3'                 => esc_html__( 'Ball Pulse', 'cnvschool' ),
					'ball-grid-pulse-9'            => esc_html__( 'Ball Grid Pulse', 'cnvschool' ),
					'ball-clip-rotate-1'           => esc_html__( 'Ball Clip Rotate', 'cnvschool' ),
					'ball-clip-rotate-pulse-2'     => esc_html__( 'Ball Clip Rotate Pulse', 'cnvschool' ),
					'ball-clip-rotate-multiple-2'  => esc_html__( 'Ball Clip Rotate Multiple', 'cnvschool' ),
					'ball-pulse-rise-6'            => esc_html__( 'Ball Pulse Rise', 'cnvschool' ),
					'ball-pulse-sync-3'            => esc_html__( 'Ball Pulse Sync', 'cnvschool' ),
					'ball-beat-3'                  => esc_html__( 'Ball Beat', 'cnvschool' ),
					'ball-grid-beat-9'             => esc_html__( 'Ball Gird Beat', 'cnvschool' ),
					'ball-rotate-1'                => esc_html__( 'Ball Rotate', 'cnvschool' ),
					'ball-zig-zag-2'               => esc_html__( 'Ball Zig-Zag', 'cnvschool' ),
					'ball-zig-zag-deflect-2'       => esc_html__( 'Ball-Zig-Zag Deflect', 'cnvschool' ),
					'ball-triangle-path-3'         => esc_html__( 'Ball Triangle Path', 'cnvschool' ),
					'ball-scale-1'                 => esc_html__( 'Ball Scale', 'cnvschool' ),
					'ball-scale-ripple-1'          => esc_html__( 'Ball Scale Ripple', 'cnvschool' ),
					'ball-scale-multiple-3'        => esc_html__( 'Ball Scale Multiple', 'cnvschool' ),
					'ball-scale-ripple-multiple-3' => esc_html__( 'Ball Scale Ripple Multiple', 'cnvschool' ),
					'ball-spin-fade-loader-8'      => esc_html__( 'Ball Spin Fade Loader', 'cnvschool' ),
					'square-spin-1'                => esc_html__( 'Square Spin', 'cnvschool' ),
					'cube-transition-2'            => esc_html__( 'Cube Transition', 'cnvschool' ),
					'line-scale-5'                 => esc_html__( 'Line Scale', 'cnvschool' ),
					'line-scale-party-4'           => esc_html__( 'Line Scale Party', 'cnvschool' ),
					'line-scale-pulse-out-5'       => esc_html__( 'Line Scale Pulse Out', 'cnvschool' ),
					'line-scale-pulse-out-rapid-5' => esc_html__( 'Line Scale Pulse Out Rapid', 'cnvschool' ),
					'line-spin-fade-loader-8'      => esc_html__( 'Line Spin Fade Loader', 'cnvschool' ),
					'triangle-skew-spin-1'         => esc_html__( 'Triangle Skew Spin', 'cnvschool' ),
					'pacman-5'                     => esc_html__( 'Pacman', 'cnvschool' ),
					'semi-circle-spin-5'           => esc_html__( 'Semi Circle Spin', 'cnvschool' ),
				),
			),

			array(
				'id'         => 'preloader_text',
				'type'       => 'text',
				'title'      => esc_html__( 'Preloader Text', 'cnvschool' ),
				'default'    => esc_html__( 'CNV', 'cnvschool' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|text' ),
			),

			array(
				'id'         => 'preloader_color',
				'title'      => esc_html__( 'Preloader background', 'cnvschool' ),
				'type'       => 'color',
				'default'    => '#fff',
				'dependency' => array( 'preloader_switch', '==', 'true' ),
			),

			array(
				'id'         => 'preloader_text_color',
				'title'      => esc_html__( 'Text Color', 'cnvschool' ),
				'type'       => 'color',
				'output'     => array( '.loading span:after' ),
				'dependency' => array( 'preloader_switch|preloader-type', '==', 'true|text' ),
			),


			array(
				'id'      => 'back_to_top',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Display Back To Top Button', 'cnvschool' ),
				'default' => true
			),
			array(
				'id'      => 'smooth_scroll',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Enable/Disable Smooth Scroll', 'cnvschool' ),
				'default' => false
			),

			array(
				'id'    => 'back_to_top_switch',
				'type'  => 'switcher',
				'title' => esc_html__( 'Show Back To Top Preloader', 'cnvschool' ),
			),

			// Button Style

			array(
				'id'     => 'back_button_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Color', 'cnvschool' ),
				'des'    => esc_html__( 'Choose button color', 'cnvschool' ),
				'output' => array(
					'color' => '.return-to-top',
				)
			),

			array(
				'id'     => 'back_button_bg_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button BG Color', 'cnvschool' ),
				'des'    => esc_html__( 'Choose button background color', 'cnvschool' ),
				'output' => array(
					'background' => '.return-to-top',
				)
			),

			array(
				'id'     => 'button_bg_hover_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Hover BG Color', 'cnvschool' ),
				'des'    => esc_html__( 'Choose button hover background color', 'cnvschool' ),
				'output' => array(
					'background' => '.return-to-top:hover:after',
				)
			),

			array(
				'id'       => 'custom-css',
				'type'     => 'code_editor',
				'title'    => 'CSS Editor',
				'settings' => array(
					'theme' => 'mbo',
					'mode'  => 'css',
				),
				'default'  => '.element{ color: #ffbc00; }',
			)
		)
	) );

	// Header Setting
	CSF::createSection( $prefix, array(
		'id'    => 'header_section',
		'title' => esc_html__( 'Header', 'cnvschool' ),
		'icon'  => 'fa fa-home',
	) );

	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Settings', 'cnvschool' ),
		'fields' => array(

			// Header Style
			array(
				'id'      => 'header_layout',
				'type'    => 'select',
				'title'   => esc_html__( 'Header Style', 'cnvschool' ),
				'desc'    => esc_html__( 'Select header style', 'cnvschool' ),
				'options' => array(
					'default' => __('Header Default', 'cnvschool'),
					'canvas' => __('Header Canvas', 'cnvschool')
				)
			),

			array(
				'id'      => 'header_sticky',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Header Sticky', 'cnvschool' ),
				'default' => false,
			),

			array(
				'id'      => 'transparent_menu',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Transparent Menu', 'cnvschool' ),
				'default' => false,
				'desc'    => esc_html__( 'Enable transparent menu', 'cnvschool' ),
				'dependency' => array( 'header_layout', '==', 'default' ),
			),

			array(
				'id'         => 'header_color',
				'type'       => 'button_set',
				'title'      => __( 'Transparent Header Color', 'cnvschool' ),
				'options'    => array(
					'header_dark'  => __( 'Dark (For light background)', 'cnvschool' ),
					'header_light' => __( 'Light (For dark Background)', 'cnvschool' ),
				),
				'default'    => 'header_light',
				'dependency' => array( 'transparent_menu', '==', 'true' ),
			),

			array(
				'type'    => 'text',
				'title'   => esc_html__( 'Responsive Menu', 'cnvschool' ),
				'id'      => 'mobile_resolution',
				'default' => '992',
				'desc'    => esc_html__( 'Responsive Menu Resolution', 'cnvschool' ),
				'dependency' => array( 'header_layout', '==', 'default' ),
			),

			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Header Nav Right', 'cnvschool' ),
			),

			array(
				'id'      => 'header_search',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Search On/Off', 'cnvschool' ),
				'default' => false,
			),

			// Canvas Menu
			array(
				'id'      => 'canvas_menu',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Canvas Menu On/Off', 'cnvschool' ),
				'default' => false,
			),

			array(
				'id'      => 'nav_btn',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Button On/Off', 'cnvschool' ),
				'default' => false,
			),

			array(
				'id'      => 'button_label',
				'type'    => 'text',
				'title'   => esc_html__( 'Button Label', 'cnvschool' ),
				'default' => __( 'Let’s Talk', 'cnvschool' ),
				'dependency' => array( 'nav_btn', '==', 'true' ),
			),

			array(
				'id'      => 'button_link',
				'type'    => 'text',
				'title'   => esc_html__( 'Button Link', 'cnvschool' ),
				'default' => '#',
				'dependency' => array( 'nav_btn', '==', 'true' ),
			),

			// Button Style
			array(
				'id'     => 'button_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Color', 'cnvschool' ),
				'des'    => esc_html__( 'Choose button color', 'cnvschool' ),
				'output' => array(
					'color' => '.site-header .cnvschool-btn',
				)
			),

			array(
				'id'     => 'button_bg_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button BG Color', 'cnvschool' ),
				'des'    => esc_html__( 'Choose button background color', 'cnvschool' ),
				'output' => array(
					'background-color' => '.site-header .cnvschool-btn',
				)
			),

			array(
				'id'     => 'button_border',
				'type'   => 'border',
				'title'  => __( 'Button Border', 'cnvschool' ),
				'output' => array( '.site-header .cnvschool-btn' ),
			),

			array(
				'id'     => 'btn-border-radius',
				'type'   => 'number',
				'title'  => __( 'Button Border Radius', 'cnvschool' ),
				'unit'   => 'px',
				'output' => [
					'border-radius' => '.site-header .cnvschool-btn',
				],
			),

			array(
				'id'     => 'button_hover_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Hover Color', 'cnvschool' ),
				'des'    => esc_html__( 'Choose button color', 'cnvschool' ),
				'output' => array(
					'color' => '.site-header .cnvschool-btn:hover',
				)
			),

			array(
				'id'     => 'button_hover_bg_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Button Hover BG Color', 'cnvschool' ),
				'des'    => esc_html__( 'Choose button background color', 'cnvschool' ),
				'output' => array(
					'background-color' => '.site-header .cnvschool-btn:hover',
				)
			),

			array(
				'id'     => 'button_button_hover',
				'type'   => 'border',
				'title'  => __( 'Button Hover Border', 'cnvschool' ),
				'output' => array( '.site-header .cnvschool-btn:hover' ),
			),

			// Header Nav menu style
			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Header Menu Style', 'cnvschool' ),
			),

			array(
				'id'     => 'menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'cnvschool' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'cnvschool' ),
				'output' => array(
					'color' => '
					.site-header:not(.mobile-header):not(.showed) .site-main-menu > li > a',

				)
			),

			array(
				'id'     => 'menu_color_hover',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Hover Color', 'cnvschool' ),
				'desc'   => esc_html__( 'You can change menu text hover color.', 'cnvschool' ),
				'output' => array(
					'color' => '
					.site-header:not(.mobile-header):not(.showed) .site-main-menu > li > a:hover',

				)
			),
			array(
				'id'     => 'menu_color_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Text Color', 'cnvschool' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'cnvschool' ),
				'output' => '.site-header:not(.mobile-header) .site-main-menu li.menu-item-has-children .sub-menu li a:not(.cnvschool-btn-link)'
			),

			array(
				'id'               => 'menu_color_hover_dropdown',
				'type'             => 'color',
				'title'            => esc_html__( 'Menu Dropdown Text Hover Color', 'cnvschool' ),
				'desc'             => esc_html__( 'You can change menu text hover color.', 'cnvschool' ),
				'output'           => array(
					'color' => '.site-header:not(.mobile-header) .site-main-menu li.menu-item-has-children .sub-menu li a:not(.cnvschool-btn-link):hover',
				),
				'output_important' => true
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Sticky Menu Style', 'cnvschool' ),
			),

			array(
				'id'     => 'sticky_menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'cnvschool' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'cnvschool' ),
				'output' => '.site-header.header-fixed.showed .site-main-menu li a, .site-header.mobile-header.showed .site-main-menu li a'
			),

			array(
				'id'        => 'sticky_menu_color_hover',
				'type'      => 'color',
				'title'     => esc_html__( 'Menu Text Hover Color', 'cnvschool' ),
				'desc'      => esc_html__( 'You can change menu text hover color.', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
				'output'    => array(
					'color' => '.site-header.header-fixed.showed .site-main-menu li a:hover, .site-header.mobile-header.showed .site-main-menu li a:hover',

				)
			),
		),

	) );

	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Logo', 'cnvschool' ),
		'fields' => array(

			array(
				'id'        => 'main_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Logo', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
				'desc'      => esc_html__( 'Upload your Logo for the header', 'cnvschool' ),
			),

			array(
				'id'        => 'transparent_main_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Transparent Header Logo', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
				'desc'      => esc_html__( 'Upload your Logo for the header', 'cnvschool' ),
			),

			array(
				'id'        => 'retina_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Retina Logo Upload @2x', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
				'desc'      => esc_html__( 'Upload your Retina Logo. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'cnvschool' ),
			),

			array(
				'id'        => 'sticky_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Sticky Logo', 'cnvschool' ),
				'desc'      => esc_html__( 'Upload logo for Header Sticky and Inner Page.', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
			),

			array(
				'id'        => 'retina_logo_sticky',
				'type'      => 'media',
				'title'     => esc_html__( 'Sticky Retina Logo @2x', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
				'desc'      => esc_html__( 'Upload Retina logo for sticky header. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'cnvschool' ),
			),

			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Sidebar Menu Logo', 'cnvschool' ),
			),

			array(
				'id'        => 'sidebar_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Sidebar Menu Logo', 'cnvschool' ),
				'desc'      => esc_html__( 'Upload logo for mobile menu.', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
			),


			array(
				'type'    => 'heading',
				'content' => esc_html__( 'Mobile Logo', 'cnvschool' ),
			),

			array(
				'id'        => 'mobile_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Mobile Logo', 'cnvschool' ),
				'desc'      => esc_html__( 'Upload logo for mobile menu.', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
			),

			array(
				'id'        => 'mobile_retina_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Mobile Retina Logo @2x', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
				'desc'      => esc_html__( 'Upload Retina logo for  mobile menu. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'cnvschool' ),
			),
		),

	) );

	// Offcanvas Sidebar
	CSF::createSection( $prefix, array(
		'parent' => 'header_section', // The slug id of the parent section
		'title'  => __( 'Offcanvas Sidebar', 'cnvschool' ),
		'fields' => array(

			array(
				'id'        => 'offcanvas_sidebar_logo',
				'type'      => 'media',
				'title'     => esc_html__( 'Logo', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
				'desc'      => esc_html__( 'Upload your Logo for the off canvas sidebar', 'cnvschool' ),
			),


			// Description textarea field
			array(
				'id'    => 'offcanvas_sidebar_description',
				'type'  => 'textarea',
				'title' => esc_html__( 'Description Textarea', 'cnvschool' ),
				'desc'  => esc_html__( 'Enter your description', 'cnvschool' ),
				'default' => esc_html__( 'CNV is a experience Agency & our Team provide digital solution', 'cnvschool' ),
			),

			// Contact Info Title
			array(
				'id'    => 'offcanvas_sidebar_contact_info_title',
				'type'  => 'text',
				'title' => esc_html__( 'Contact Info Title', 'cnvschool' ),
				'desc'  => esc_html__( 'Enter your contact info title', 'cnvschool' ),
				'default' => esc_html__( 'Contact us', 'cnvschool' ),
			),

			// Repeatable field groups for contact info
			array(
				'id'          => 'offcanvas_sidebar_contact_info',
				'type'        => 'group',
				'title'       => esc_html__( 'Contact Info', 'cnvschool' ),
				'button_title'=> esc_html__( 'Add New', 'cnvschool' ),
				'accordion_title'=> esc_html__( 'Add New Contact Info', 'cnvschool' ),
				'fields'      => array(
					array(
						'id'    => 'contact_info_text',
						'type'  => 'text',
						'title' => esc_html__( 'Text', 'cnvschool' ),
					),
				),
				'default'     => array(
					array(
						'contact_info_text' => esc_html__( 'Melbone st, Australia, Ny 12099', 'cnvschool' ),
					),
					array(
						'contact_info_text' => esc_html__( '+01 800 123 400 55', 'cnvschool' ),
					),
					array(
						'contact_info_text' => esc_html__( 'pollexmail@gmail.com', 'cnvschool' ),
					),

				),
			),

			// Newsletter Form in on offcanvas sidebar switcher field

			array(
				'id'      => 'offcanvas_sidebar_newsletter_form_switcher',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Newsletter Form', 'cnvschool' ),
				'default' => true,
			),

			// Newsletter Title
			array(
				'id'    => 'offcanvas_sidebar_newsletter_info_title',
				'type'  => 'text',
				'title' => esc_html__( 'Newsletter Title', 'cnvschool' ),
				'desc'  => esc_html__( 'Enter your newsletter info title', 'cnvschool' ),
				'default' => esc_html__( 'Get Update', 'cnvschool' ),
				'dependency' => array( 'offcanvas_sidebar_newsletter_form_switcher', '==', 'true' ),
			),

		)

	) );

	//Footer Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Footer', 'cnvschool' ),
		'icon'   => 'fa fa-support',
		'fields' => array(

			array(
				'id'      => 'footer_style',
				'type'    => 'select',
				'title'   => __( 'Select Footer Style', 'cnvschool' ),
				'options' => CNV_Theme_Helper::get_footers_types(),
			),

			array(
				'id'      => 'footer_color',
				'type'    => 'button_set',
				'title'   => __( 'Switch Footer Dark or Light', 'cnvschool' ),
				'options' => array(
					'footer_dark'  => __( 'Dark', 'cnvschool' ),
					'footer_light' => __( 'Light', 'cnvschool' ),
				),
				'default' => 'footer_dark',
			),

			array(
				'id'      => 'footer_social',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Footer Social Show/Hide', 'cnvschool' ),
				'default' => true,
			),

			array(
				'id'          => 'footer_padding_top',
				'type'        => 'spacing',
				'title'       => __( 'Padding Top/Bottom', 'cnvschool' ),
				'output'      => '.site-footer .footer-wrapper',
				'output_mode' => 'padding', //
				'left'        => false,
				'right'       => false,
				'default'     => array(
					'unit' => 'px',
				),
			),

			array(
				'id'    => 'copyright_text',
				'type'  => 'textarea',
				'title' => esc_html__( 'Copyright Text', 'cnvschool' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Footer Style', 'cnvschool' ),
			),

			array(
				'id'          => 'footer_bg_color',
				'type'        => 'color',
				'title'       => esc_html__( 'Footer Background Color', 'cnvschool' ),
				'output'      => '.site-footer',
				'output_mode' => 'background',
			),

			array(
				'id'     => 'footer-widget',
				'type'   => 'color',
				'title'  => esc_html__( 'Widget Title Color', 'cnvschool' ),
				'output' => '.site-footer .widget-title',
			),

			array(
				'id'                    => 'footer_bg_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'cnvschool' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'cnvschool' ),
				'output'                => '.site-footer',
				'background_gradient'   => true,
				'background_origin'     => true,
				'background_clip'       => true,
				'background_blend_mode' => true,
				'default'               => array(
					'background-gradient-direction' => 'to right',
					'background-size'               => 'cover',
					'background-position'           => 'center center',
					'background-repeat'             => 'no-repeat',
				),
			),

			array(
				'id'     => 'footer-link',
				'type'   => 'color',
				'title'  => esc_html__( 'Link Color', 'cnvschool' ),
				'output' => '.site-footer .widget ul li a',
			),
			array(
				'id'     => 'footer-link-hover',
				'type'   => 'color',
				'title'  => esc_html__( 'Link Color Hover', 'cnvschool' ),
				'output' => array(
					'background' => '.site-footer .widget_nav_menu .menu li a:after',
					'color'      => '.site-footer .widget ul li a:hover',
				)
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Social Link', 'cnvschool' ),
			),

			array(
				'id'     => 'footer-social-link',
				'type'   => 'color',
				'title'  => esc_html__( 'Icon Color', 'cnvschool' ),
				'output' => '.site-footer .widget .footer-social-link li a',
			),
			array(
				'id'     => 'footer-social-link-border',
				'type'   => 'color',
				'title'  => esc_html__( 'Border Color', 'cnvschool' ),
				'output' => array(
					'border-color' => '.site-footer .widget .footer-social-link li a'
				)
			),
			array(
				'id'     => 'footer-link-hover-bg',
				'type'   => 'color',
				'title'  => esc_html__( 'Hover Background Color', 'cnvschool' ),
				'output' => array(
					'background'   => '.site-footer .widget .footer-social-link li a:hover',
					'border-color' => '.site-footer .widget .footer-social-link li a:hover'
				)
			),
			array(
				'id'               => 'footer-link-hover-icon',
				'type'             => 'color',
				'title'            => esc_html__( 'Hover Icon Color', 'cnvschool' ),
				'output'           => '.site-footer .widget .footer-social-link li a:hover',
				'output_important' => true
			),
		)
	) );

	//Page Header
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Page Header', 'cnvschool' ),
		'icon'   => 'fa fa-picture-o',
		'fields' => array(

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Page Header Settings', 'cnvschool' ),
			),
			array(
				'id'      => 'page_header',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Page Header Enable', 'cnvschool' ),
				'default' => true,
			),

			array(
				'id'     => 'header-background',
				'type'   => 'color',
				'title'  => 'Background Color',
				'output' => [
					'background' => '.page-header',
				]
			),

			array(
				'id'      => 'banner_height',
				'type'    => 'slider',
				'title'   => __( 'Banner Height', 'cnvschool' ),
				'min'     => 250,
				'max'     => 550,
				'step'    => 1,
				'unit'    => 'px',
				'default' => 350,
				'output'  => [
					'min-height' => '.page-header',
				]
			),

			array(
				'id'    => 'page_header_default_title',
				'type'  => 'text',
				'title' => esc_html__( 'Default Title', 'cnvschool' ),
				'desc'  => esc_html__( 'Set the default title for the page header', 'cnvschool' ),
			),
			array(
				'id'     => 'custom_title_typography',
				'type'   => 'typography',
				'title'  => esc_html__( 'Title Typography', 'cnvschool' ),
				'output' => array(
					'color' => '.page-banner .page-title-wrapper .page-title, .page-banner .saaspik_breadcrumbs li a',
				),
			),
			array(
				'id'                    => 'page_header_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'cnvschool' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'cnvschool' ),
				'output'                => '.page-header',
				'background_gradient'   => true,
				'background_origin'     => true,
				'background_clip'       => true,
				'background_blend_mode' => true,
				'default'               => array(
					'background-gradient-direction' => 'to right',
					'background-size'               => 'cover',
					'background-position'           => 'center center',
					'background-repeat'             => 'no-repeat',
				),
			),
		)
	) );

	// Blog Setting
	CSF::createSection( $prefix, array(
		'id'    => 'blog_section',
		'title' => esc_html__( 'Blog', 'cnvschool' ),
		'icon'   => 'fa fa-file-text-o',
	) );

	// Blog Archive
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Archive', 'cnvschool' ),
		'parent' => 'blog_section',
		'fields' => array(

			array(
				'id'         => 'blog-masonry-column',
				'type'       => 'image_select',
				'title'      => esc_html__( 'Columns', 'cnvschool' ),
				'desc'       => esc_html__( 'Display number of post per row', 'cnvschool' ),
				'radio'      => true,
				'options'    => array(
					'6' => CNV_THEME_URI . '/assets/images/layout/2cols.png',
					'4' => CNV_THEME_URI . '/assets/images/layout/3cols.png',
				),
				'default'    => '6',
				'dependency' => array( 'blog-style_masonry', '==', true ),
			),

			array(
				'id'      => 'blog_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'cnvschool' ),
				'radio'   => true,
				'options' => array(
					'left'       => CNV_THEME_URI . '/assets/images/layout/left-sidebar.png',
					'no-sidebar' => CNV_THEME_URI . '/assets/images/layout/no-sidebar.png',
					'right'      => CNV_THEME_URI . '/assets/images/layout/right-sidebar.png',
				),
				'default' => 'right',
			),

			array(
				'id'       => 'blog_sidebar_def_width',
				'type'     => 'button_set',
				'title'    => esc_html__( 'Blog Archive Sidebar Width', 'cnvschool' ),
				'options'  => array(
					'9' => '25%',
					'8' => '33%',
				),
				'default'  => '8',
				'required' => array( 'blog_sidebar_layout', '!=', 'none' ),
			),

			array(
				'id'       => 'blog_sidebar_gap',
				'type'     => 'select',
				'title'    => esc_html__( 'Blog Archive Sidebar Side Gap', 'cnvschool' ),
				'options'  => array(
					'def' => 'Default',
					'0'   => '0',
					'15'  => '15',
					'20'  => '20',
					'25'  => '25',
					'30'  => '30',
					'35'  => '35',
					'40'  => '40',
					'45'  => '45',
					'50'  => '50',
				),
				'default'  => '15',
				'required' => array( 'blog_sidebar_layout', '!=', 'none' ),
			),


			array(
				'id'      => 'blog_list_meta_author',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta author?', 'cnvschool' ),
				'default' => false,
			),

			array(
				'id'      => 'blog_list_meta_comments',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta comments?', 'cnvschool' ),
				'default' => false,
			),
			array(
				'id'      => 'blog_list_meta_categories',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta categories?', 'cnvschool' ),
				'default' => false,
			),
			array(
				'id'      => 'blog_list_meta_date',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta date?', 'cnvschool' ),
				'default' => false,
			),



		)
	) );

	//	Blog Single
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Single', 'cnvschool' ),
		'parent' => 'blog_section',
		'fields' => array(


			array(
				'id'      => 'single_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'cnvschool' ),
				'radio'   => true,
				'options' => array(
					'left'       => CNV_THEME_URI . '/assets/images/layout/left-sidebar.png',
					'no-sidebar' => CNV_THEME_URI . '/assets/images/layout/no-sidebar.png',
					'right'      => CNV_THEME_URI . '/assets/images/layout/right-sidebar.png',
				),
				'default' => 'right',
			),

			array(
				'id'       => 'single_sidebar_def_width',
				'type'     => 'button_set',
				'title'    => esc_html__( 'Sidebar Width', 'cnvschool' ),
				'options'  => array(
					'9' => '25%',
					'8' => '33%',
				),
				'default'  => '8',
				'required' => array( 'single_sidebar_layout', '!=', 'none' ),
			),

			array(
				'id'       => 'blog_sidebar_gap',
				'type'     => 'select',
				'title'    => esc_html__( 'Blog Sidebar Side Gap', 'cnvschool' ),
				'options'  => array(
					'def' => 'Default',
					'0'   => '0',
					'15'  => '15',
					'20'  => '20',
					'25'  => '25',
					'30'  => '30',
					'35'  => '35',
					'40'  => '40',
					'45'  => '45',
					'50'  => '50',
				),
				'default'  => '15',
				'required' => array( 'single_sidebar_layout', '!=', 'none' ),
			),

			array(
				'id'      => 'author_info',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Display Author Bio Box', 'cnvschool' ),
				'default' => false
			),

			array(
				'id'      => 'share_post',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Share On Post', 'cnvschool' ),
				'default' => false
			),

			array(
				'id'      => 'blog_list_meta_author',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta author?', 'cnvschool' ),
				'default' => false,
			),
			array(
				'id'      => 'blog_list_meta_comments',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta comments?', 'cnvschool' ),
				'default' => false,
			),
			array(
				'id'      => 'blog_list_meta_categories',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide post-meta categories?', 'cnvschool' ),
				'default' => false,
			),

			array(
				'id'      => 'single_post_nav',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide Post Navigation?', 'cnvschool' ),
				'default' => false,
			),

			array(
				'id'      => 'single_related_post',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Hide Related Post?', 'cnvschool' ),
				'default' => false,
			),

			array(
				'id'      => 'related_title',
				'type'    => 'text',
				'title'   => esc_html__( 'Related Post Title', 'cnvschool' ),
				'default' => __( 'Related Posts', 'cnvschool' ),
			),

		)
	) );

	// Page Layout Setting
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Page', 'cnvschool' ),
		'icon'   => 'fa fa-file-text-o',
		'fields' => array(

			array(
				'id'      => 'page_sidebar_layout',
				'type'    => 'image_select',
				'title'   => esc_html__( 'Layout', 'cnvschool' ),
				'radio'   => true,
				'options' => array(
					'left'       => CNV_THEME_URI . '/assets/images/layout/left-sidebar.png',
					'no-sidebar' => CNV_THEME_URI . '/assets/images/layout/no-sidebar.png',
					'right'      => CNV_THEME_URI . '/assets/images/layout/right-sidebar.png',
				),
				'default' => 'no-sidebar',
			),
		)
	) );

	// Portfolio Setting
	CSF::createSection( $prefix, array(
		'title'  => __( 'Project', 'cnvschool' ),
		'fields' => array(

			// A Switcher field
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Page Header', 'cnvschool' ),
			),

			array(
				'id'      => 'wc-enable-page-title',
				'type'    => 'switcher',
				'title'   => esc_html__( 'Enable Page Header', 'cnvschool' ),
				'default' => true
			),

			array(
				'type'    => 'text',
				'title'   => esc_html__( 'Page Title', 'cnvschool' ),
				'id'      => 'project-page-title',
				'default' => __( 'Case Details', 'cnvschool' ),
			),

			// Page Header Background
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Page Header Background', 'cnvschool' ),
			),

			array(
				'id'      => 'project-page-header-bg',
				'type'    => 'background',
				'title'   => esc_html__( 'Page Header Background', 'cnvschool' ),
				'default' => array(
					'image'      => '',
					'repeat'     => 'no-repeat',
					'position'   => 'center center',
					'attachment' => 'fixed',
					'size'       => 'cover',
					'color'      => '#DDE6EB',
				),
				'output'  => array( '.single-project-details-banner' ),
			),


		)
	) );


	//Social Link
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Social Link', 'cnvschool' ),
		'icon'   => 'fa fa-globe',
		'desc'   => esc_html__( 'This social profiles will display in your whole site.', 'cnvschool' ),
		'fields' => array(

			array(
				'id'           => 'social_links',
				'type'         => 'group',
				'title'        => esc_html__( 'Social links', 'cnvschool' ),
				'desc'         => esc_html__( 'This social profiles will display in your whole site.', 'cnvschool' ),
				'button_title' => esc_html__( 'Add New', 'cnvschool' ),
				'fields'       => array(

					array(
						'id'    => 'name',
						'type'  => 'text',
						'title' => esc_html__( 'Name', 'cnvschool' ),
					),
					array(
						'id'    => 'url',
						'type'  => 'text',
						'title' => esc_html__( 'Url', 'cnvschool' )
					),
					array(
						'id'    => 'icon',
						'type'  => 'icon',
						'title' => esc_html__( 'Icon', 'cnvschool' )
					)

				),

				'default' => array(
					array(
						'name' => esc_html__( 'Facebook', 'cnvschool' ),
						'url'  => esc_url( 'http://facebook.com' ),
						'icon' => 'fab fa-facebook-f'
					),

					array(
						'name' => esc_html__( 'Twitter', 'cnvschool' ),
						'url'  => esc_url( 'http://twitter.com' ),
						'icon' => 'fab fa-twitter'
					),

					array(
						'name' => esc_html__( 'Dribbble', 'cnvschool' ),
						'url'  => esc_url( 'http://dribbble.com' ),
						'icon' => 'fab fa-dribbble'
					)

				),
				array(
					'type'    => 'notice',
					'class'   => 'info',
					'content' => esc_html__( 'This social profiles will display in your whole site.', 'cnvschool' ),
				),
			),
		)
	) );

	//Error Page
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( '404 Page', 'cnvschool' ),
		'icon'   => 'fa fa-exclamation',
		'fields' => array(

			array(
				'id'        => 'error_image',
				'type'      => 'media',
				'title'     => esc_html__( 'Image', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
			),

			array(
				'type'    => 'text',
				'title'   => esc_html__( 'Error Title', 'cnvschool' ),
				'id'      => 'error_title',
				'default' => esc_html__( 'The page you’ re looking for fly away', 'cnvschool' ),
			),

			array(
				'type'    => 'textarea',
				'title'   => esc_html__( 'Description', 'cnvschool' ),
				'id'      => 'error_description',
				'default' => esc_html__( 'Tell us what you are looking for:', 'cnvschool' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( ' Style', 'cnvschool' ),
			),

			array(
				'id'                    => 'error_bg_image',
				'type'                  => 'background',
				'title'                 => esc_html__( 'Header Background', 'cnvschool' ),
				'desc'                  => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'cnvschool' ),
				'output'                => '.error_page',
				'background_gradient'   => true,
				'background_origin'     => true,
				'background_clip'       => true,
				'background_blend_mode' => true,
				'default'               => array(
					'background-gradient-direction' => 'to right',
					'background-size'               => 'cover',
					'background-position'           => 'center center',
					'background-repeat'             => 'no-repeat',
				),
			),

			array(
				'id'     => 'error-text',
				'type'   => 'color',
				'title'  => esc_html__( 'Error Text Color', 'cnvschool' ),
				'output' => '.error_page .error-page-content .error-text',
			),

			array(
				'id'     => 'error-heading',
				'type'   => 'color',
				'title'  => esc_html__( 'Heading Color', 'cnvschool' ),
				'output' => '.error_page .error-page-content .error-title',
			),

			array(
				'id'     => 'error-content',
				'type'   => 'color',
				'title'  => esc_html__( 'Content Color', 'cnvschool' ),
				'output' => '.error_page .error-page-content p',
			),

		)
	) );

	//Typography
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Typography', 'cnvschool' ),
		'icon'   => 'fa fa-font',
		'fields' => array(
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Body Font Settings', 'cnvschool' ),
			),

			array(
				'id'      => 'body-font',
				'type'    => 'typography',
				'title'   => esc_html__( 'Body', 'cnvschool' ),
				'output'  => 'body',
				'default' => array(
					'unit' => 'px',
					'type' => 'google',
				),
			),
			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Heading Font Settings', 'cnvschool' ),
			),
			array(
				'id'      => 'heading-h1',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H1', 'cnvschool' ),
				'output'  => 'h1',
				'default' => array(
					'font-size' => '40',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),
			array(
				'id'      => 'heading-h2',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H2', 'cnvschool' ),
				'output'  => 'h2',
				'default' => array(
					'font-size' => '32',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),
			array(
				'id'      => 'heading-h3',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H3', 'cnvschool' ),
				'output'  => 'h3',
				'default' => array(
					'font-size' => '28',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),
			array(
				'id'      => 'heading-h4',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H4', 'cnvschool' ),
				'output'  => 'h4',
				'default' => array(
					'font-size' => '24',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),
			array(
				'id'      => 'heading-h5',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H5', 'cnvschool' ),
				'output'  => 'h5',
				'default' => array(
					'font-size' => '20',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),

			array(
				'id'      => 'heading-h6',
				'type'    => 'typography',
				'title'   => esc_html__( 'Heading H6', 'cnvschool' ),
				'output'  => 'h6',
				'default' => array(
					'font-size' => '16',
					'unit'      => 'px',
					'type'      => 'google',
				),
			),

		)
	) );

	//Color Scheme
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Color Scheme', 'cnvschool' ),
		'icon'   => 'fa fa-star',
		'icon'   => 'fa fa-paint-brush',
		'fields' => array(

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'General Color', 'cnvschool' ),
			),

			array(
				'id'     => 'body-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Body Color', 'cnvschool' ),
				'output' => 'body'
			),

			array(
				'id'     => 'main_heading-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Heading Color', 'cnvschool' ),
				'output' => 'h1,h2,h3,h4,h5,h6, .blog-content .entry-title a',
			),

			array(
				'id'     => 'main_primary-color',
				'type'   => 'color',
				'title'  => esc_html__( 'Primary Color', 'cnvschool' ),
				'desc'   => esc_html__( 'Main Color Scheme', 'cnvschool' ),
				'output' => array(
					'color' => 'a:hover, a:focus, a:active, .cnvschool-btn:hover, .cnvschool-btn.btn-outline, .play-button:hover, .play-button:hover i, .cnvschool-icon-box__title a:hover, #cnvschool-tabs-nav li.active .tab-name,
					.post-meta li i, .post-meta li a:hover,.post-grid .blog-content .author-simple a:hover, .site-footer.footer_light .site-info .copyright p a:hover, .cnvschool-faq-list i,
					.cnvschool-process-box.style-one .cnvschool-process_step, .section-heading .subtitle, .cnvschool-pricing__title, .cnvschool-faq-list__number, .banner.banner--two .banner__btns .banner-btn.btn-outline,
					.cnvschool-vision-wrapper .slider-control > div, .cnvschool-icon-box__icon-container, .cnvschool-process-box.style-two .icon-container, .cnvschool-process-box.style-two .cnvschool-process_step,
					button, input[type=button], input[type=reset], input[type=submit]:hover, .content-tab-contents .read-more-link, .cnvschool-process-box.style-three .icon-container, .cnvschool-countdown__number,
					.cnvschool-icon-box__button:not(.cnvschool-btn):hover, .blog-post-list .post-meta-wrapper .post-meta i, .blog-post-list .post-meta-wrapper .post-meta a:hover,.blog-post-list .post-meta-wrapper .post-meta a:hover,
					.widget ul li a:hover, .blog-post-list .entry-title a:hover, .post-single .post-meta li .author a:hover, .single-post-nav:hover .post-title, .related-post .post-footer-meta li a:hover,
					.related-post .post-footer-meta li i, .comment-form #submit:hover, .faq_content .card.active .card-header .btn, .faq_content .card-header .btn:after, .job-info-items li i, .footer-social-link li a:hover,
					.footer-social-link li a:hover, .site-footer .site-info .copyright p a:hover',

					'background-color' => '.cnvschool-btn, .cnvschool-btn.btn-outline:hover, .cnvschool-view-stacked .cnvschool-icon-box__icon-container, .cnvschool-pricing__feature-list li .bullet,
					.banner.banner--two .banner__btns .banner-btn.btn-outline:hover, .site-footer.footer_light .footer-social-link li a:hover, .banner__newsletter-form .newsletter-submit,
					.cnvschool-vision-wrapper .slider-control > div:hover, .cnvschool-pricing-list__feature li i, button, input[type=button], input[type=reset], input[type=submit],
					#content-tabs-nav li.active a, .cnvschool-process-box.style-three:hover .icon-container, .wp-block-search .wp-block-search__button, .blog-post-list .meta-category-wrapper a,
					.blog-post-list .meta-category-wrapper a:hover, .sidebar .widget-title:after, .sidebar h2:after, .sidebar h3:after, .sidebar h4:after, .sidebar h5:after, .sidebar h6:after,
					.wp-block-tag-cloud a:hover, .tagcloud a:hover, .single-post-nav:hover i, .comment-form #submit, .single-post-header-bg .cnvschool-blog-meta-category,
					.cnvschool-process-box.style-one:hover .icon-container',

					'border-color' => '.cnvschool-btn, .cnvschool-btn.btn-outline, .cnvschool-btn.btn-outline:hover, .banner.banner--two .banner__btns .banner-btn.btn-outline, .site-footer.footer_light .footer-social-link li a:hover,
					 button, input[type=button], input[type=reset], input[type=submit], #content-tabs-nav li.active a, .cnvschool-process-box.style-three:hover .icon-container, .single-post-nav:hover i,
					.process-box-wrapper .row .col-lg-3:not(:nth-child(4)) .cnvschool-process-box.style-three:after, .newsletter-form .newsletter-submit, input:not([type=checkbox]):not([type=submit]):focus, textarea:focus,
					.comment-form #submit, .comment-form #submit:hover, .single-post-header-bg .cnvschool-blog-meta-category, blockquote, .wp-block-quote,
					.cnvschool-process-box.style-one:hover .icon-container',

					'border-left-color' => '.blockquote, .wp-block-quote',
					'stroke'            => '.border-wrap .st17'
				),
			),

			array(
				'id'     => 'link-color',
				'type'   => 'link_color',
				'title'  => 'Link Color',
				'color'  => true,
				'hover'  => true,
				'focus'  => true,
				'output' => '.post .author a, .product .author a,
				.post .blog-content .read-more, .post .blog-content .post-meta li a:hover,
				.product .blog-content .read-more'
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Section Background Color', 'cnvschool' ),
			),

			array(
				'id'      => 'gradient_on_off',
				'type'    => 'button_set',
				'title'   => esc_html__( 'Use Theme Gradient?', 'cnvschool' ),
				'options' => array(
					'on'  => esc_html__( 'On', 'cnvschool' ),
					'off' => esc_html__( 'Off', 'cnvschool' ),
				),
				'default' => 'on'
			),

			array(
				'id'                    => 'section_background',
				'type'                  => 'background',
				'title'                 => 'Background Gradient Color',
				'background_color'      => true,
				'background_gradient'   => true,
				'background_image'      => false,
				'background_position'   => false,
				'background_repeat'     => false,
				'background_attachment' => false,
				'background_size'       => false,
				'background_origin'     => false,
				'background_clip'       => false,
				'background_blend-mode' => false,
				'default'               => array(
					'background-gradient-direction' => 'to left',
				),
				'output'                => '.job, .section-bg, .bg-angle, .banner.banner-one, .newsletter, .newsletter-two',
				'output_important'      => true,
				'dependency'            => array( 'gradient_on_off', '==', 'on' ),
			),

			array(
				'id'               => 'section-bg-color',
				'type'             => 'color',
				'title'            => esc_html__( 'Background Color', 'cnvschool' ),
				'output'           => array(
					'background' => '.job, .section-bg, .bg-angle, .newsletter, .newsletter-two'
				),
				'output_important' => true,
			),
		)
	) );

	//Backup
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Backup', 'cnvschool' ),
		'icon'   => 'fa fa-download',
		'fields' => array(
			array(
				'type' => 'backup',
			),
		)
	) );
}