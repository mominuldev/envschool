<?php
$phone   = cnv_option( 'phone' );
$email   = cnv_option( 'email' );
$eiin = cnv_option( 'eiin_number' );
$show_social = cnv_option( 'show_social_link' );

?>

<div class="cnv-header-topbar">
	<div class="container">
		<div class="cnv-header-topbar__wrapper">
			<div class="cnv-header-topbar__left">
				<?php if ( $phone ) : ?>
					<div class="cnv-header-topbar__item">
						<a href="tel:<?php echo esc_attr( $phone ); ?>">
							<i class="fa fa-phone"></i>
							<?php echo esc_html( $phone ); ?>
						</a>
					</div>
				<?php endif; ?>

				<?php if ( $email ) : ?>
					<div class="cnv-header-topbar__item">
						<a href="mailto:<?php echo esc_attr( $email ); ?>">
							<i class="fa fa-envelope"></i>
							<?php echo esc_html( $email ); ?>
						</a>
					</div>
				<?php endif; ?>
			</div>

			<div class="cnv-header-topbar__right">
				<?php if ( $eiin ) : ?>
					<div class="cnv-header-topbar__item">
                        <span class="cnv-header-topbar__title"><?php echo esc_html__('EIIN:') ?></span>
						<?php echo esc_html( $eiin ); ?>

					</div>
				<?php endif; ?>

				<?php if ( $show_social ) : ?>
					<div class="cnv-header-topbar__item">
                        <span class="cnv-header-topbar__title"><?php echo esc_html__('Follow US:') ?></span>
						<?php cnv_get_social_icon(); ?>
					</div>
				<?php endif; ?>
		</div>
	</div>
</div>
</div>
