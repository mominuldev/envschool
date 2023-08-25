<?php
/**
 * Displays footer site info
 *
 * @package CNV
 * @subpackage cnvschool
 * @since 1.0
 * @version 1.0
 */

?>

<div class="site-info">
	<div class="container">
		<div class="site-info-wrapper <?php echo has_nav_menu('footer') ? 'footer-social-wrap' : ''; ?>">
			<div class="copyright">
				<p>
					<?php
					$copy_text = cnv_option( 'copyright_text' );
					if ( ! empty( $copy_text ) ) {
						echo wp_kses_post( $copy_text );
					} else {
						echo sprintf( esc_html__( '&copy; %1$s %2$s - All Rights Reserved Made by %3$s', 'cnvschool' ), date( 'Y' ), get_bloginfo(
							'name' ), '<a href="' . esc_url( 'https://www.codenestventure.com/' ) . '">' . esc_attr( 'CodeNest Venture' ) . '</a>' );
					}
					?>
				</p>
			</div>

			<?php if (has_nav_menu('footer')) {
				wp_nav_menu(
					array(
						'theme_location' => 'footer',
						'menu_class'		 => 'site-footer-menu',
						'fallback_cb'		 => '',
					)
				);
			}  ?>
		</div>
		<!-- /.site-info-wrapper -->
	</div>
	<!-- /.container -->
</div>