<?php
// Control core classes for avoid errors
if( class_exists( 'CSF' ) ) {

	//
	// Create a widget 1
	//
	CSF::createWidget( 'about_widget', array(
		'title'       => 'About Widget',
		'classname'   => 'csf-about__widget',
		'description' => 'A description for widget example 1',
		'fields'      => array(

			// Image Field
			array(
				'id'    => 'logo',
				'type'  => 'media',
				'title' => __('Logo', 'cnv-school'),
				'desc'  => __('Upload your logo here.', 'cnv-school'),
			),

            // School Name
            array(
                'id'    => 'school_name',
                'type'  => 'text',
                'title' => __('School Name', 'cnv-school'),
                'desc'  => __('Enter school name here.', 'cnv-school'),
            ),

			// School Name
			array(
				'id'    => 'description',
				'type'  => 'text',
				'title' => __('Description', 'cnv-school'),
				'desc'  => __('Enter description here.', 'cnv-school'),
			),

			// Social Media enable
			array(
				'id'      => 'show_social_icon',
				'type'    => 'switcher',
				'title'   => __('Show Social Icon', 'cnv-school'),
			),
		)
	) );

	//
	// Front-end display of widget example 1
	// Attention: This function named considering above widget base id.
	//
	if( ! function_exists( 'about_widget' ) ) {
		function about_widget( $args, $instance ) {

			echo $args['before_widget'];

			if ( ! empty( $instance['title'] ) ) {
				echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
			}

			?>

            <?php if( ! empty( $instance['logo']['url'] )) : ?>
                <div class="cnv-about__widget-logo">
                    <img src="<?php echo $instance['logo']['url']; ?>" alt="logo" class="dm-footer__logo">

	                <?php if( ! empty( $instance['school_name'] )) : ?>
                        <h3 class="cnv-footer__widget-school-name"><?php echo $instance['school_name']; ?></h3>
	                <?php endif; ?>
                </div>
            <?php endif; ?>

			<?php if( ! empty( $instance['description'] )) : ?>
                <p class="cnv-footer__widget-description"><?php echo $instance['description']; ?></p>
			<?php endif; ?>

            <?php if( $instance['show_social_icon'] ) : ?>
                <?php cnv_get_social_icon(); ?>
            <?php endif; ?>

			<?php

			echo $args['after_widget'];

		}
	}
}

