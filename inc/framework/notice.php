<?php
// Control core classes for avoid errors
if ( class_exists( 'CSF' ) ) {

	//
	// Set a unique slug-like ID
	$prefix = 'notice_options';

	//
	// Create a metabox
	CSF::createMetabox( $prefix, array(
		'title'     => __( 'Notice Options', '_themename' ),
		'post_type' => 'notice',
	) );

	//
	// Create a section
	CSF::createSection( $prefix, array(
		'title'  => __( 'Notice Info', '_themename' ),
		'fields' => array(
			array(
				'id'      => 'notice_file',
				'type'    => 'media',
				'title'   => 'Media',
			),
		)
	) );
}
