<?php
if ( have_posts() ) :
	while ( have_posts() ) : the_post(); ?>
        <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div class="cnv-gallery">
                <div class="cnv-gallery__img">
                    <a href="<?php the_permalink(); ?>">
						<?php the_post_thumbnail( 'medium' ); ?>
                    </a>
                </div>
                <div class="cnv-gallery__content">
                    <a href="<?php echo esc_url( the_permalink() ) ?>">
                        <h3 class="cnv-gallery__title"><?php the_title(); ?></h3>
                    </a>
                </div>

            </div>
        </div>
	<?php
	endwhile;
endif;
