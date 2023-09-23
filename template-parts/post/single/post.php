<?php
/**
 * Single Post Layout One
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'post-single single-layout-two' ); ?>>
	<?php CNV_Theme_Helper::cnv_post_thumbnail( 'full' ); ?>

    <div class="meta-wrapper">
        <ul class="cnv-post__meta">
            <li class="cnv-post__author-avatar">
			    <?php CNV_Theme_Helper::cnv_posted_author_avatar(); ?>
            </li>
            <li class="cnv-post__author-name">
                <i class="fa-regular fa-clock"></i>
			    <?php CNV_Theme_Helper::cnv_posted_on(); ?>
            </li>
        </ul>
    </div>
    <!-- /.meta-wrapper -->

    <h2 class="single-post-title"><?php echo the_title(); ?></h2>

	<div class="entry-content">
		<?php the_content();
		// Page Break
		wp_link_pages( array(
		   'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'cnvschool' ),
		   'after'  => '</div>',
	    ) ); ?>

		<?php if(get_the_tag_list() ) : ?>
		<div class="entry-footer">
			<?php CNV_Theme_Helper::cnv_posted_tag(); ?>
		</div>
		<!-- /.entry-footer -->
		<?php endif; ?>

		<?php if ( cnv_option( 'author_info' ) ) {
			CNV_Theme_Helper::render_author_info();
		} ?>
	</div>
	<!-- /.entry-content -->

	<?php if ( cnv_option( 'share_post' ) ) {
		echo '<div class="share-link-wrapper">';
		    CNV_Theme_Helper::render_post_list_share();
		echo '</div>';
	} ?>
</article><!-- #post-<?php the_ID(); ?> -->
