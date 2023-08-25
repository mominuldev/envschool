<?php

// Control core classes for avoid errors
if ( class_exists( 'CSF' ) ) {

	//
	// Set a unique slug-like ID
	$prefix = 'cnv_page_options';

	//
	// Create a metabox
	CSF::createMetabox( $prefix, array(
		'title'     => esc_html__( 'Page Option', 'cnvschool' ),
		'context'   => 'normal',
		'post_type' => array( 'page' ),
		'theme'     => 'dark',

	) );

	// Header Menu
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Header', 'cnvschool' ),
		'icon'   => 'fa fa-home',
		'fields' => array(

			array(
				'id'       => 'meta_header_type',
				'type'     => 'switcher',
				'title'    => __( 'Header Style', 'cnvschool' ),
				'text_on'  => __( 'Yes', 'cnvschool' ),
				'text_off' => __( 'No', 'cnvschool' ),
				'default'  => false
			),

			array(
				'id'      => 'meta_header_layout',
				'type'    => 'select',
				'title'   => esc_html__( 'Header Style', 'cnvschool' ),
				'desc'    => esc_html__( 'Select header style', 'cnvschool' ),
				'options' => array(
					'default' => __('Header Default', 'cnvschool'),
					'canvas' => __('Header Canvas', 'cnvschool')
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_transparent_menu',
				'type'       => 'switcher',
				'title'      => esc_html__( 'Transparent Menu', 'cnvschool' ),
				'default'    => true,
				'dependency' => array( 'meta_header_type|meta_header_layout', '==', 'true|default' ),
			),

			array(
				'id'         => 'meta_header_color',
				'type'       => 'button_set',
				'title'      => __( 'Transparent Header Color', 'cnvschool' ),
				'options'    => array(
					'header_dark'  => __( 'Dark (For light background)', 'cnvschool' ),
					'header_light' => __( 'Light (For dark Background)', 'cnvschool' ),
				),
				'default'    => 'header_dark',
				'dependency' => array( 'meta_header_type|meta_transparent_menu', '==', 'true|true' ),
			),

			array(
				'id'         => 'meta_main_logo',
				'type'       => 'media',
				'title'      => esc_html__( 'Logo Upload', 'cnvschool' ),
				'add_title'  => esc_html__( 'Upload', 'cnvschool' ),
				'desc'       => esc_html__( 'Upload logo for Header', 'cnvschool' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'retina_logo',
				'type'       => 'media',
				'title'      => esc_html__( 'Retina Logo Upload @2x', 'cnvschool' ),
				'add_title'  => esc_html__( 'Upload', 'cnvschool' ),
				'desc'       => esc_html__( 'Upload your Retina Logo. This should be your Logo in double size (If your logo is 100 x 20px, it should be 200 x 40px)', 'cnvschool' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_sticky_logo',
				'type'       => 'media',
				'title'      => esc_html__( 'Sticky Logo', 'cnvschool' ),
				'desc'       => esc_html__( 'Upload logo for Header Sticky and Inner Page.', 'cnvschool' ),
				'add_title'  => esc_html__( 'Upload', 'cnvschool' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),

			),

			array(
				'id'         => 'retina_logo_sticky',
				'type'       => 'media',
				'title'      => esc_html__( 'Sticky Retina Logo @2x', 'cnvschool' ),
				'desc'       => esc_html__( 'Upload Retina logo for Header Sticky.', 'cnvschool' ),
				'add_title'  => esc_html__( 'Upload', 'cnvschool' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Menu Style', 'cnvschool' ),
			),


			array(
				'id'     => 'menu_color',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Text Color', 'cnvschool' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'cnvschool' ),
				'output' => array(
					'color' => '
					.site-header .site-main-menu li > a,
					.menu-transperant .site-header .site-main-menu li > a,
					.site-header .header-inner .site-nav.nav-two .nav-right .nav-btn,
					.site-header.pix-header-fixed .header-inner .site-nav.nav-two .nav-right .nav-btn',

					'background' => '.site-header.pix-header-fixed .header-inner .site-nav.nav-two .nav-right .nav-btn:hover,.site-header .header-inner .site-nav.nav-two .nav-right .nav-btn:hover',

					'border-color' => '.site-header .header-inner .site-nav.nav-two .nav-right .nav-btn, .site-header .header-inner .site-nav.nav-two .nav-right .nav-btn:hover,
					.site-header.pix-header-fixed .header-inner .site-nav.nav-two .nav-right .nav-btn'
				),
				// 'output_important' => true
			),
			array(
				'id'        => 'menu_color_hover',
				'type'      => 'color',
				'title'     => esc_html__( 'Menu Text Hover Color', 'cnvschool' ),
				'desc'      => esc_html__( 'You can change menu text hover color.', 'cnvschool' ),
				'add_title' => esc_html__( 'Upload', 'cnvschool' ),
				'output'    => array(
					'color'      => '.site-header .site-main-menu li > a:hover, .site-header.header-six .site-main-menu li > a:hover,
					.menu-transperant .site-header .site-main-menu li > a:hover,
					.site-header.pix-header-fixed .header-inner .site-nav.nav-two .site-main-menu li a:hover',
					'background' => '.site-header .site-main-menu li > a.current_page:after'
				)
			),
			array(
				'id'     => 'menu_color_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Text Color', 'cnvschool' ),
				'desc'   => esc_html__( 'You can change menu text color.', 'cnvschool' ),
				'output' => '.site-header .site-main-menu li .sub-menu li a, .menu-transperant .site-header .site-main-menu li .sub-menu li a, .site-header .site-main-menu li > a'
			),

			array(
				'id'     => 'menu_color_hover_dropdown',
				'type'   => 'color',
				'title'  => esc_html__( 'Menu Dropdown Text Hover Color', 'cnvschool' ),
				'desc'   => esc_html__( 'You can change menu text hover color.', 'cnvschool' ),
				'output' => array(
					'color' => '.site-header.header-six .site-main-menu li .sub-menu li a:hover, .site-header.header-six .site-main-menu li .sub-menu li a.current_page,
					.site-header .site-main-menu li .sub-menu li a:hover,
					 .menu-transperant .site-header .site-main-menu li .sub-menu li a:hover,
					 .site-header .header-inner .site-nav.nav-two .site-main-menu li .sub-menu li a:hover,
					  .site-header .header-inner .site-nav.nav-two .site-main-menu li .sub-menu li a.current_page, .site-header .site-main-menu li.current-menu-parent .current_page_item > a',
				)
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Sticky Menu Style', 'cnvschool' ),
			),

			array(
				'id'               => 'sticky_menu_color',
				'type'             => 'color',
				'title'            => esc_html__( 'Menu Text Color', 'cnvschool' ),
				'desc'             => esc_html__( 'You can change menu text color.', 'cnvschool' ),
				'output_important' => true,
				'output'           => '.site-header.pix-header-fixed .site-main-menu li a, .site-header.pix-header-fixed .site-main-menu li .sub-menu li a'
			),

			array(
				'id'               => 'sticky_menu_color_hover',
				'type'             => 'color',
				'output_important' => true,
				'title'            => esc_html__( 'Menu Text Hover Color', 'cnvschool' ),
				'desc'             => esc_html__( 'You can change menu text hover color.', 'cnvschool' ),
				'add_title'        => esc_html__( 'Upload', 'cnvschool' ),
				'output'           => array(
					'color' => '
					.site-header.pix-header-fixed .site-main-menu li a:hover,
					.site-header.pix-header-fixed .site-main-menu li a.current_page,
					.site-header.pix-header-fixed .site-main-menu li .sub-menu li a:hover,
					.site-header.pix-header-fixed .site-main-menu li .sub-menu li a.current_page',

				)
			),

			array(
				'type'    => 'subheading',
				'content' => esc_html__( 'Header Button Style', 'cnvschool' ),
			),

			// Button Style
			array(
				'id'         => 'meta_button_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Button Color', 'cnvschool' ),
				'des'        => esc_html__( 'Choose button color', 'cnvschool' ),
				'output'     => array(
					'color' => '.site-header .cnvschool-btn',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_bg_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Button BG Color', 'cnvschool' ),
				'des'        => esc_html__( 'Choose button background color', 'cnvschool' ),
				'output'     => array(
					'background-color' => '.site-header .cnvschool-btn',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_border',
				'type'       => 'border',
				'title'      => __( 'Button Border', 'cnvschool' ),
				'output'     => array( '.site-header .cnvschool-btn' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'     => 'meta-btn-border-radius',
				'type'   => 'number',
				'title'  => __( 'Button Border Radius', 'cnvschool' ),
				'unit'   => 'px',
				'output' => [
					'border-radius' => '.site-header .cnvschool-btn',
				],
			),

			array(
				'id'         => 'meta_button_hover_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Button Color', 'cnvschool' ),
				'des'        => esc_html__( 'Choose button color', 'cnvschool' ),
				'output'     => array(
					'color' => '.site-header .cnvschool-btn:hover',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_hover_bg_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Button Hover BG Color', 'cnvschool' ),
				'des'        => esc_html__( 'Choose button background color', 'cnvschool' ),
				'output'     => array(
					'background-color' => '.site-header .cnvschool-btn:hover',
				),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_button_button_hover',
				'type'       => 'border',
				'title'      => __( 'Button Hover Border', 'cnvschool' ),
				'output'     => array( '.site-header .cnvschool-btn:hover' ),
				'dependency' => array( 'meta_header_type', '==', 'true' ),
			),

		)
	) );

	// Page Header
	CSF::createSection( $prefix, array(
		'title'  => 'Page Header',
		'icon'   => 'fa fa-picture-o',
		'fields' => array(

			array(
				'id'      => 'meta_page_header',
				'type'    => 'button_set',
				'title'   => esc_html__( 'Page Header Option', 'cnvschool' ),
				'options' => array(
					'default'  => esc_html__( 'Default', 'cnvschool' ),
					'enabled'  => esc_html__( 'Enabled', 'cnvschool' ),
					'disabled' => esc_html__( 'Disabled', 'cnvschool' ),
				),
				'default' => 'default'
			),


			array(
				'id'               => 'header_image',
				'type'             => 'background',
				'title'            => esc_html__( 'Header Image', 'cnvschool' ),
				'desc'             => esc_html__( 'Default: Featured image, if fail will get image from global settings.', 'cnvschool' ),
				'dependency'       => array( 'meta_page_header', '==', 'enabled' ),
				'output'           => '.page-header',
				'output_important' => true,
			),

			array(
				'id'         => 'custom_title',
				'type'       => 'text',
				'title'      => esc_html__( 'Custom Title', 'cnvschool' ),
				'desc'       => esc_html__( 'Set custom title for the page header. Default: The post title.', 'cnvschool' ),
				'dependency' => array( 'meta_page_header', '==', 'enabled' ),
			),
			array(
				'id'         => 'custom_title_typography',
				'type'       => 'typography',
				'title'      => esc_html__( 'Title Typography', 'cnvschool' ),
				'output'     => '.page-banner .page-title',
				'dependency' => array( 'page_header', '==', 'enabled' ),
			),
			array(
				'id'         => 'custom_title_color',
				'type'       => 'color',
				'title'      => esc_html__( 'Title Color', 'cnvschool' ),
				'output'     => '.page-banner .page-title',
				'dependency' => array( 'meta_page_header', '==', 'enabled' ),
			),

			array(
				'id'         => 'breadcrumbs',
				'type'       => 'switcher',
				'title'      => esc_html__( 'Header Breadcrumbs', 'cnvschool' ),
				'desc'       => esc_html__( 'Display breadcrumbs on the page header', 'cnvschool' ),
				'dependency' => array( 'meta_page_header', '==', 'enabled' ),
				'default'    => true,
			),

		),
	) );

	// Footer Menu
	CSF::createSection( $prefix, array(
		'title'  => esc_html__( 'Footer', 'cnvschool' ),
		'icon'   => 'fa fa-home',
		'fields' => array(

			array(
				'id'       => 'meta_footer_type',
				'type'     => 'switcher',
				'title'    => __( 'Footer Style', 'cnvschool' ),
				'text_on'  => __( 'Yes', 'cnvschool' ),
				'text_off' => __( 'No', 'cnvschool' ),
				'default'  => false
			),


			array(
				'id'         => 'meta_footer_style',
				'type'       => 'select',
				'title'      => __( 'Select Footer Style', 'cnvschool' ),
				'options'    => CNV_Theme_Helper::get_footers_types(),
				'dependency' => array( 'meta_footer_type', '==', 'true' ),
			),

			array(
				'id'         => 'meta_footer_color',
				'type'       => 'button_set',
				'title'      => __( 'Switch Footer Dark or Light', 'cnvschool' ),
				'options'    => array(
					'footer_dark'  => __( 'Dark', 'cnvschool' ),
					'footer_light' => __( 'Light', 'cnvschool' ),
				),
				'default'    => 'footer_dark',
				'dependency' => array( 'meta_footer_type', '==', 'true' ),
			),

			array(
				'id'          => 'meta_footer_padding_top',
				'type'        => 'spacing',
				'title'       => __( 'Padding Top', 'cnvschool' ),
				'output'      => '.site-footer .footer-wrapper',
				'output_mode' => 'padding', //
				'left'        => false,
				'right'       => false,
				'dependency'  => array( 'meta_footer_type', '==', 'true' ),
			),

			array(
				'id'               => 'meta_footer_bg',
				'type'             => 'color',
				'title'            => esc_html__( 'Footer Background', 'cnvschool' ),
				'desc'             => esc_html__( 'Choose footer background color', 'cnvschool' ),
				'output'           => [
					'background-color' => '.site-footer',
				],
				'dependency'       => array( 'meta_footer_type', '==', 'true' ),
				'output_important' => true,
			),

		)
	) );
}