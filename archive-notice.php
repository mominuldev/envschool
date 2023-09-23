
<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cnvschool
 */
get_header();
?>
<div class="notice-content-area">
    <div class="container">
        <div class="notice-list-wrapper">
            <div id='main-content' class="notice-lists">
                <?php  if ( have_posts() ) :
                get_template_part( 'template-parts/post/posts-notice-list');
                else :
                    get_template_part( 'template-parts/content', 'none' );
                endif;  ?>
            </div>
        </div>
        <!-- /.blog-archive-wrapper -->
    </div><!-- /.container -->
    <?php CNV_Theme_Helper::cnv_post_pagination(); ?>
</div><!-- .content-area -->

<?php
get_footer();
