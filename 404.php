<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package cnvschool
 * by CodeNest Ventures
 */
get_header();

$image = cnv_option('error_image');
$error_title = cnv_option('error_title');
$error_content = cnv_option('error_description');

$default_image = get_template_directory_uri() . '/assets/images/404.png';

if (!empty($image['url'])) {
	$image = $image['url'];
} else {
	$image = $default_image;
}
?>

<section class="error_page d-flex align-items-center">
	<div class="container">
		<div class="error_page_wrapper text-center">
			<?php if (!empty($image)) : ?>
				<div class="error-image">
					<img src="<?php echo esc_url($image) ?>" alt="<?php echo esc_attr(bloginfo('name')); ?>">
				</div>
			<?php endif; ?>

			<div class="error-page-content">
				<div class="error-info">
					<?php if (!empty($error_title)) : ?>
						<h1 class="error-title"><?php echo esc_html($error_title); ?></h1>
					<?php else :
						echo '<h2 class="error-title">' . esc_html__('Oops, Page Not Found!', 'cnvschool') . '</h2>';
					endif; ?>

					<?php if (!empty($error_content)) : ?>
						<p class="error-info"><?php echo esc_html($error_content); ?></p>
					<?php else :
						echo '<p class="error-info">' .'Sorry, We couldn\'t find the page that you\'re looking for. Please check the address and try again.' . '</p>';
					endif; ?>
					<a href="<?php echo esc_url(home_url('/')); ?>" class="cnvschool-back-btn">
                        <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.50781 6.47575L22.077 6.47575C24.374 6.47575 26.2361 8.33781 26.2361 10.6348L26.2361 13.3212C26.2361 15.6182 24.374 17.4802 22.077 17.4802L6.71767 17.4802" stroke="black" stroke-width="2.08134" stroke-linejoin="round"/>
                            <path d="M6.33594 1.58503C4.54243 3.49505 3.53688 4.56591 1.74337 6.47593L6.33594 11.3668" stroke="black" stroke-width="2.08134" stroke-linejoin="round"/>
                        </svg>

                        <?php echo esc_html__('Go Home', 'cnvschool') ?>
                    </a>
				</div>
			</div>

		</div>
	</div>
</section>

<?php
get_footer();

