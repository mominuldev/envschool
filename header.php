<?php
/**
 * header.php
 * The header for the theme.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<?php

if ( function_exists( 'wp_body_open' ) ) {
	wp_body_open();
}

do_action( 'cnv_after_body' ); ?>

<div id="site-content" class="site">
    <a class="skip-link screen-reader-text"
       href="#content"><?php esc_html_e( 'Skip to content', 'cnvschool' ); ?></a>
	<?php


	get_template_part( 'template-parts/popup-search' );

	$layout = '';
	$header_layout = cnv_option( 'header_layout', 'default' );
	$meta  = get_post_meta( get_the_ID(), 'cnv_page_options',  true );

	$meta_header_type = isset( $meta['meta_header_type'] ) ? $meta['meta_header_type'] : '';

	if ( $meta_header_type ) {
		$layout = $meta['meta_header_layout'];
	} else {
		$layout = $header_layout;
	}

	//Site Header
    get_template_part( 'template-parts/header/header' );


	get_template_part( 'template-parts/header/page-header' );

	?>

    <main id="main" class="site-main">
