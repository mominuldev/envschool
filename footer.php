<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package cnvschool
 */


$meta               = get_post_meta( get_the_ID(), 'cnv_page_options', true );
$meta_footer_option = isset( $meta['meta_footer_type'] ) ? $meta['meta_footer_type'] : '';

$f_style = cnv_option('footer_style');
$footer_style = '';

$meta_footer = isset($meta['meta_footer_style']) ? $meta['meta_footer_style'] : '';

if ( $meta_footer_option == true || $meta_footer_option == 1 ) {
	$footer_style .= $meta_footer;
} else {
	$footer_style .= $f_style;
}

$d1 = DateTime::createFromFormat('m/d/Y',  '');
$d1 = new DateTime;

$d1->getTimestamp();


if ( $footer_style && ( get_post( $footer_style ) ) && in_array( 'elementor/elementor.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ) { ?>
	</main><!-- /#site-main -->
	</div><!-- /#site-content -->
	<?php $elementor_instance = Elementor\Plugin::instance(); ?>
	<footer id="cnvschool-footer" class="cnvschool-footer <?php echo esc_attr( get_post( $footer_style )->post_name ); ?>">
		<?php echo CNV_Theme_Helper::cnv_render_footer( $footer_style ); ?>
	</footer>
<?php } else {
	if ( ! is_404() ) {
		get_template_part( 'template-parts/footer/footer-one' );
	}
}

do_action( 'cnv_after_footer');

wp_footer(); ?>

</body>
</html>
