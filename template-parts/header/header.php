<?php
/**
 * The Header Layout 1.
 * @since   1.0.0
 * @package cnvschool
 */

$meta = get_post_meta( get_the_ID(), 'cnv_page_options', true );

$container            = $transparent = '';
$is_fixed             = cnv_option( 'header_sticky' );
$mobile_is_fixed      = cnv_option( 'header_sticky_mobile' );
$mobile_menu          = cnv_option( 'mobile_resolution', '992' );
$fixed_initial_offset = cnv_option( 'sticky_offset' );
$header_color         = cnv_option( 'header_color' );
$transparent_menu     = cnv_option( 'transparent_menu' );
$sticky               = cnv_option( 'sticky_logo' );
$meta_transparent     = ! empty( $meta['meta_transparent_menu'] ) ? $meta['meta_transparent_menu'] : '';
$meta_header_color    = isset( $meta['meta_header_color'] ) ? $meta['meta_header_color'] : '';
$logo_contrast        = ! empty( $sticky['url'] ) ? $sticky['url'] : '';
$logo_contrast        = ! empty( $meta['meta_sticky_logo']['url'] ) ? $meta['meta_sticky_logo']['url'] : $logo_contrast;
$header_type          = isset( $meta['meta_header_type'] ) ? $meta['meta_header_type'] : '';
$mobile_logo          = cnv_option( 'mobile_logo' );
$mobile_retina_logo   = cnv_option( 'mobile_retina_logo' );

// Top Bar Options
$top_bar = cnv_option( 'topbar_switch' );

$header_classes = '';

if($is_fixed) {
	$header_classes .= ' header-fixed';
}

if ( $header_type == true || $header_type == 1 ) {

	if ( $meta_transparent ) {
		$header_classes .= ' header_transparent';
		$header_classes .= ' ' . $meta_header_color;
	}
} else {

	if ( $transparent_menu ) {
		$header_classes .= ' ' . $header_color;
		$header_classes .= ' header_transparent';
	}
}

?>

<header id="masthead" class="site-header header-1 header-width <?php echo esc_attr( $header_classes ); ?>" <?php if ( $is_fixed && ! empty( $logo_contrast ) ) {
	echo ' data-header-fixed="true"';
} ?> <?php if ( $mobile_is_fixed ) {
	echo ' data-mobile-header-fixed="true"';
} ?> <?php if ( $fixed_initial_offset ) {
	echo ' data-fixed-initial-offset="' . $fixed_initial_offset . '"';
} ?> data-mobile-menu-resolution="<?php echo esc_attr( $mobile_menu ) ?>">

    <?php if( $top_bar) {
        get_template_part( 'template-parts/header/top-bar' );
    } ?>

    <div class="container">
        <div class="header-inner">
            <nav id="site-navigation" class="main-nav">
                <div class="site-logo">
					<?php CNV_Theme_Helper::branding_logo(); ?>
                </div>

                <div class="cnvschool-hamburger" id="page-open-main-menu" tabindex="1">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>

                <div class="main-nav-container canvas-menu-wrapper" id="mega-menu-wrap">

                    <div class="mobile-menu-header">
                        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
							<?php if ( ! empty( $mobile_logo['url'] ) ) { ?>
                                <img <?php if ( ! empty( $mobile_retina_logo['url'] ) ) {
									echo 'srcset="' . esc_attr( $mobile_retina_logo['url'] ) . ' 2x"';
								} ?> src="<?php echo esc_url( $mobile_logo['url'] ); ?>"
                                     alt="<?php esc_attr( bloginfo( 'name' ) ); ?>" class="main-logo"/>
							<?php } else { ?>
                                <h3><?php bloginfo( 'name' ); ?></h3>
							<?php } ?>
                        </a>

                        <div class="close-menu page-close-main-menu" id="page-close-main-menu">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    <!-- /.mobile-menu-header -->

                    <div class="menu-wrapper">
						<?php if ( has_nav_menu( 'primary' ) ) {
							wp_nav_menu(
								array(
									'theme_location' => 'primary',
									'menu_class'     => 'site-main-menu',
									'fallback_cb'    => '',
									'depth'          => 3,
									'walker'         => new CNV_Main_Nav_Walker(),
								)
							);
						} else {
							echo '<ul class="add-menu clearfix"><li><a target="_blank" href="' . esc_url( admin_url( 'nav-menus.php' ) ) . '">' . esc_html__( 'Add Menu', 'cnvschool' ) . '</a></li></ul>';
						}

						?>
                        <!-- /.nav-right -->
                    </div>
                    <!-- /.main-menu -->
                </div><!-- #menu-wrapper -->
				<?php
				$search_btn  = cnv_option( 'header_search' );
				$nav_btn     = cnv_option( 'nav_btn' );
				$btn_link    = cnv_option( 'button_link' );
				$btn_text    = cnv_option( 'button_label' );
				$canvas_menu = cnv_option( 'canvas_menu' );

				if ( $search_btn == true || $nav_btn == true ): ?>
                    <div class="nav-right">
						<?php if ( $search_btn ) : ?>
                            <span class="search-btn" id="search-icon">
                                <i class="feather-search"></i>
                            </span>
						<?php endif;


						if ( $nav_btn && $btn_text ) :
							echo '<a href="' . $btn_link . '" class="cnv-btn nav-btnn btn-circle">' . $btn_text . '</a>';
						endif;
						?>
                    </div>
				<?php endif; ?>
            </nav><!-- #site-navigation -->
        </div><!-- /.header-inner -->
    </div><!-- /.container -->
</header><!-- #masthead -->
