<?php
// Control core classes for avoid errors
if( class_exists( 'CSF' ) ) {

	//
	// Create a widget 1
	//
	CSF::createWidget( 'contact_widget', array(
		'title'       => __('Contact Info', 'cnv-school'),
		'classname'   => 'cnv-contact__widget',
		'description' => 'A description for widget example 1',
		'fields'      => array(

			// School Name
			array(
				'id'    => 'description',
				'type'  => 'text',
				'title' => __('Description', 'cnv-school'),
				'desc'  => __('Enter contact description here.', 'cnv-school'),
			),

			// Phone Number
			array(
				'id'    => 'phone_number',
				'type'  => 'text',
				'title' => __('Phone Number', 'cnv-school'),
				'desc'  => __('Enter your phone number here.', 'cnv-school'),
			),

			// Email Address
			array(
				'id'    => 'email_address',
				'type'  => 'text',
				'title' => __('Email Address', 'cnv-school'),
				'desc'  => __('Enter your email address here.', 'cnv-school'),
			),

			// Address
			array(
				'id'    => 'address',
				'type'  => 'text',
				'title' => __('Address', 'cnv-school'),
				'desc'  => __('Enter your address here.', 'cnv-school'),
			),

		)
	) );

	//
	// Front-end display of widget example 1
	// Attention: This function named considering above widget base id.
	//
	if( ! function_exists( 'contact_widget' ) ) {
		function contact_widget( $args, $instance ) {

			echo $args['before_widget'];

			if ( ! empty( $instance['title'] ) ) {
				echo $args['before_title'] . apply_filters( 'widget_title', $instance['title'] ) . $args['after_title'];
			}

			?>

            <?php if( ! empty( $instance['description'] )) : ?>
                <p class="cnv-footer-contact-description"><?php echo $instance['description']; ?></p>
            <?php endif; ?>

            <ul class="cnv-footer-contact-info">
	            <?php if( ! empty( $instance['address'] )) : ?>
                    <li><i class="fa-solid fa-map-location-dot"></i> <?php echo $instance['address']; ?></li>
	            <?php endif; ?>

                <?php if( ! empty( $instance['email_address'] )) : ?>
                    <li><i class="fa-solid fa-envelope"></i> <?php echo $instance['email_address']; ?></li>
                <?php endif; ?>

	            <?php if( ! empty( $instance['phone_number'] )) : ?>
                    <li><i class="fa-solid fa-phone-volume"></i> <?php echo $instance['phone_number']; ?></li>
	            <?php endif; ?>
            </ul>

			<?php

			echo $args['after_widget'];

		}
	}
}

