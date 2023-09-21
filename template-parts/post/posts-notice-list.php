<?php
if (have_posts()) :
	while (have_posts()) : the_post();?>

<div class="cnv-notice">
	<?php
		$notice_meta = get_post_meta( get_the_ID(), 'notice_options', true );
	?>
	<h2 class="cnv-notice__title"><?php the_title(); ?></h2>
	<span class="cnv-notice__date"><?php echo get_the_date(); ?></span>
	<div class="cnv-notice__file">
		<a href="<?php echo $notice_meta['notice_file']['url']; ?>"><i class="fa-solid fa-download"></i><?php echo esc_html__('Download', 'cnvschool') ?></a>
	</div>
</div>

<?php
    endwhile;
endif;
