<?php
// Control core classes for avoid errors
if ( class_exists( 'CSF' ) ) {

	//
	// Set a unique slug-like ID
	$prefix = 'project_options';

	//
	// Create a metabox
	CSF::createMetabox( $prefix, array(
		'title'     => __( 'Project Options', '_themename' ),
		'post_type' => 'gallery',
	) );

	//
	// Create a section
	CSF::createSection( $prefix, array(
		'title'  => __('Gallery Info', '_themename'),
		'fields' => array(
			array(
				'id'      => 'project_info',
				'type'    => 'repeater',
				'title'   => __( 'Info List', '_themename' ),
				'fields'  => array(
					array(
						'id'    => 'title',
						'type'  => 'text',
						'title' => __( 'Title', '_themename' ),
					),

					array(
						'id'    => 'info',
						'type'  => 'text',
						'title' => __( 'Info', '_themename' ),
					),

				),
				'default' => array(
					array(
						'title' => __( 'Client', '_themename' ),
						'info'  => __( 'Ritarexar Dimandi (UK)', '_themename' ),
					),
					array(
						'title' => __( 'Date', '_themename' ),
						'info'  => __( '24 January 2022', '_themename' ),
					),
					array(
						'title' => __( 'Category', '_themename' ),
						'info'  => __( 'Web Design', '_themename' ),
					),

					array(
						'title' => __( 'Website', '_themename' ),
						'info'  => __( 'www.ritarexar.com', '_themename' ),
					)
				)
			)
		)
	) );
}
