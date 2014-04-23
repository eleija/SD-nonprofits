<?php
/*
Template Name: Home
*/

get_header(); ?>

    <!-- Slider -->
<div class="hero_slider">

	<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('home_slider') ) : ?>
        <img class="scale" src="<?php echo of_get_option( 'home_static_image'); ?>" alt="" />
	<?php endif; //  home_slider ?>

</div> <!-- end .hero_slider -->

<div class="main_content_wrap">

  <div class="row home_top_bg">

  <div class="home_top_wrap clearfix">

    <?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('home_widgets_top') ) : ?>

      <!-- This is just placeholder content. Not functional. Add widgets in WP. -->
      <div class="home_widgets_top medium-4 columns">
        <div class="textwidget">
          <div class="icon_hover">
          <i class="fa fa-refresh fa-3x"></i>

          <h3>OUR PROCESS</h3>

          <p>Aptent praesentium penatibus, fames debitis optio fames</p>

          <a href="#">See how we work</a>
          </div>
        </div>
      </div>
      
      <div class="home_widgets_top medium-4 columns">      
        <div class="textwidget">
          <div class="icon_hover">
          <i class="fa fa-calendar fa-3x"></i>

          <h3>OUR EVENTS</h3>

          <p>Aptent praesentium penatibus, fames debitis optio fames</p>

          <a href="#">Come join the fun </a>

          </div>
        </div>
      </div>

      <div class="home_widgets_top medium-4 columns">      
        <div class="textwidget">
          <div class="icon_hover">

          <i class="fa fa-users fa-3x"></i>

          <h3>OUR TEAM</h3>

          <p>Aptent praesentium penatibus, fames debitis optio fames</p>

          <a href="#">Meet your advocators</a>

          </div>
        </div>
      </div>

    <?php endif; // home_widgets_top ?>

  </div><!-- .home_top_wrap -->

  </div><!-- .home_top_bg .row -->

  <div class="row home_widgets_section">

  <div class="hideme clearfix">
  <div class="large-12 columns">

      <div class="row">

  		  <!-- Home Widget Left -->
      	<div class="large-7 columns home_text_widget_left">

  		<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('home_left') ) : ?>
  	        <h3>Who We are. Our mission.</h3>
  	        <img src="<?php echo get_stylesheet_directory_uri() ?>/img/heart.png" class="alignleft" alt="Heart">
  	        <p>Add your own content here with a widget by going to:</p> 
  	        <p><i>Appearance > Widgets > Home Left</i></p>
  	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nostrud exercitation ullamco laboris nisi commodo.</p>
  		<?php endif; //  home_left ?>

     	   </div><!-- .home_text_widget_left -->

  		<!-- Home Widget Right -->
      	<div class="large-4 large-offset-1 columns home_text_widget_right">

  		<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('home_right') ) : ?>
  	        <img src="<?php echo get_stylesheet_directory_uri() ?>/img/goal_temp.png" alt="Goal widget">
  		<?php endif; //  home_right ?>

      	</div><!-- .home_text_widget_right -->

      </div><!-- .row -->
  </div><!-- .large-12 -->
  </div><!-- .hideme -->

  </div><!-- .row .home_widgets_section -->

  <?php if ( of_get_option('home_events_area_show') ) { ?>

  <!-- Upcoming Events -->
  <div class="hideme clearfix">

    <div class="row home_events_wrap">

    <div class="large-12 columns">

    <div class="row">

  	<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('home_events') ); ?>

    </div><!-- .row -->
    </div><!-- .large-12 -->

  </div><!-- .row .home_events_wrap -->

  <?php } // end check for home events area show ?>

  </div><!-- .hideme -->

  <?php if ( of_get_option('home_news_area_show') ) { ?>


  <div class="hideme clearfix">
  <div class="home_latest_news">

      <div class="row">

        <div class="large-12 columns">
          <h3><?php echo of_get_option('home_news_title'); ?></h3>
        </div><!-- .large-12 -->

      </div><!-- .row -->

      	<?php 
        $home_blog_num_select = of_get_option('home_blog_num_select') ;
        $formats = new WP_Query( array( // Display most recent standard posts
      		'posts_per_page' => $home_blog_num_select,
      		'paged' => get_query_var('paged'),
      		'tax_query' => array(
      		  	array(
      		  	'taxonomy' => 'post_format',
      			  'field'    => 'slug',
      		  	'terms'    => array( 
                            'post-format-link', 
                            'post-format-aside', 
                            'post-format-gallery', 
                            'post-format-status', 
                            'post-format-quote', 
                            'post-format-chat', 
                            'post-format-image' ),
      		    'operator' => 'NOT IN',
      		  ))
          )
        );
      	if( $formats->have_posts() ) : while( $formats->have_posts() ) : $formats->the_post(); ?>

      <div class="row home_post">

        <div class="large-3 columns">
          <hr>
    		<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
        </div><!-- .large-3 -->

        <div class="large-9 columns">
    		<?php the_excerpt(); ?>
        </div><!-- .large-9 -->

      </div><!-- .row -->

  <?php endwhile; endif; wp_reset_postdata(); // end most recent standard post ?>

  </div><!-- .home_latest_news -->

    <div class="row">
      <div class="small-12 columns">
        <a href="<?php echo of_get_option('home_news_link'); ?>" class="button tiny radius round right"><?php _e('View all news','rescue'); ?></a>
      </div><!-- .small-12 -->

    </div><!-- .row -->
  </div><!-- .hideme -->

  <?php } // end check for latest news area show ?>

  <?php if ( of_get_option('home_gallery_area_show') ) { //check if we want to show the home gallery section ?>

  <div class="hideme clearfix home_image_gallery">
    <div class="row ">

      <?php // Checking for Rescue Portfolio Plugin
      include_once( ABSPATH . 'wp-admin/includes/plugin.php' );

      if ( is_plugin_active( 'rescue-portfolio/index.php' ) or is_plugin_active( 'rescue-portfolio-master/index.php' ) ) : ?>

      <div class="small-12 columns">
        <h3><?php echo of_get_option( 'home_gallery_title' ); ?></h3>
      </div><!-- .small-12 -->

      <ul class="small-block-grid-1 medium-block-grid-3 large-block-grid-3">

          <?php
              // Query Our Database
              $wpbp = new WP_Query(array( 'post_type' => 'portfolio', 'posts_per_page' =>'3' ) ); 

              // Begin The Loop
              if ($wpbp->have_posts()) : while ($wpbp->have_posts()) : $wpbp->the_post(); 

              // Get The Taxonomy 'Filter' Categories
              $terms = get_the_terms( get_the_ID(), 'filter' ); 

              // Get the image URL
              $thumb = get_post_thumbnail_id();
              $img_url = wp_get_attachment_url( $thumb,'full'); //get img URL
          ?>
                <li>
                  
                    <?php 
                      // Check if wordpress supports featured images, and if so output the thumbnail
                      if ( (function_exists('has_post_thumbnail')) && (has_post_thumbnail()) ) : 
                    ?>
                      
                      <?php // Output the featured image ?>
                      <a href="<?php echo $img_url ?>" class="fancybox image_hover" rel="gallery_group" title="<?php echo get_the_title(); ?>"><?php the_post_thumbnail('portfolio', array('class'=>'rescue_port_image')); ?></a>                 
                                        
                    <?php endif; ?> 
                    
                </li>
            
            <?php //$count++; // Increase the count by 1 ?>   
            <?php endwhile; endif; // END the Wordpress Loop ?>
            <?php wp_reset_query(); // Reset the Query Loop?>

      </ul><!-- .small-block-grid-2 medium-block-grid-3 large-block-grid-3 -->

    </div><!-- .row .home_image_gallery -->

    <div class="row">

      <div class="medium-12 columns home_gallery_button">
        <a href="<?php echo of_get_option( 'home_gallery_link'); ?>" class="button tiny radius round right"><?php _e('View All Images','rescue'); ?></a>
      </div><!-- .medium-12 .home_gallery_button -->
      
    </div><!-- .row -->

  </div><!-- .hideme -->

    <?php endif; // end our plugin check ?>

  <?php } // end check for home gallery area show ?>

</div><!-- .main_content_wrap -->

<?php get_footer(); ?>