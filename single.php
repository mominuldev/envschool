<?php
/**
 * The template for displaying all single posts
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * @package cnvschool
 */

get_header();

$sidebar   = CNV_Theme_Helper::render_sidebars( 'single' );
$row_class = $sidebar['row_class'];
$column    = $sidebar['column'];
$sidebar_class = $sidebar['layout'] == 'none' ? 'no-sidebar' : '';

?>

    <div class="blog-single-content-area">
        <div class="container <?php echo esc_attr($sidebar_class);  ?>">
            <div class="blog-single-wrapper">
                <div class="row <?php echo apply_filters( 'cnv_row_class', $row_class ); ?>">
                    <div class="col-lg-<?php echo apply_filters( 'cnv_column_class', $column ); ?>">
						<?php while ( have_posts() ) :
							the_post();
							get_template_part( 'template-parts/post/single/post' );
						endwhile; // End of the loop.


						if ( cnv_option( 'single_post_nav' ) == true ) {
							CNV_Theme_Helper::cnv_post_nav();
						}

						if ( cnv_option( 'single_related_post' ) == true ) {
							CNV_Theme_Helper::related_post();
						}

						if ( comments_open() || get_comments_number() ) :
							comments_template();
						endif; ?>

                    </div><!-- /.col-md-8 -->
					<?php
					echo ( isset( $sidebar['content'] ) && ! empty( $sidebar['content'] ) ) ? $sidebar['content'] : '';
					?>
                </div><!-- /.row -->
            </div>
            <!-- /.blog-archive-wrapper -->
        </div><!-- /.container -->
    </div><!-- #primary -->

<?php
get_footer();