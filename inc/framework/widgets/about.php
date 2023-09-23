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
				'title' => __('Logo', 'designmonks'),
				'desc'  => __('Upload your logo here.', 'designmonks'),
			),

			// School Name
			array(
				'id'    => 'school_name',
				'type'  => 'text',
				'title' => __('School Name', 'designmonks'),
				'desc'  => __('Enter your school name here.', 'designmonks'),
			),

			// Phone Number
			array(
				'id'    => 'phone_number',
				'type'  => 'text',
				'title' => __('Phone Number', 'designmonks'),
				'desc'  => __('Enter your phone number here.', 'designmonks'),
			),

			// Email Address
			array(
				'id'    => 'email_address',
				'type'  => 'text',
				'title' => __('Email Address', 'designmonks'),
				'desc'  => __('Enter your email address here.', 'designmonks'),
			),

			// Address
			array(
				'id'    => 'address',
				'type'  => 'text',
				'title' => __('Address', 'designmonks'),
				'desc'  => __('Enter your address here.', 'designmonks'),
			),

			// Social Media enable
			array(
				'id'      => 'show_social_icon',
				'type'    => 'switcher',
				'title'   => __('Show Social Icon', 'designmonks'),
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
                <div class="csf-about__widget-logo">
                    <img src="<?php echo $instance['logo']['url']; ?>" alt="logo" class="dm-footer__logo">

	                <?php if( ! empty( $instance['school_name'] )) : ?>
                        <h3 class="dm-footer__widget-title"><?php echo $instance['school_name']; ?></h3>
	                <?php endif; ?>
                </div>
            <?php endif; ?>



            <ul class="cnv-footer-contact-info">
                <?php if( ! empty( $instance['phone_number'] )) : ?>
                    <li><i class="fa-solid fa-phone-volume"></i> <?php echo $instance['phone_number']; ?></li>
                <?php endif; ?>

                <?php if( ! empty( $instance['email_address'] )) : ?>
                    <li><i class="fa-solid fa-envelope"></i> <?php echo $instance['email_address']; ?></li>
                <?php endif; ?>

                <?php if( ! empty( $instance['address'] )) : ?>
                    <li><i class="fa-solid fa-map-location-dot"></i> <?php echo $instance['address']; ?></li>
                <?php endif; ?>
            </ul>

            <?php if( $instance['show_social_icon'] ) : ?>
                <?php cnv_get_social_icon(); ?>
            <?php endif; ?>

			<?php

			echo $args['after_widget'];

		}
	}

}

