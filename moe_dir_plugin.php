<?php 
/*
Plugin Name: AIT Directory Sorter
Plugin URI: http://moeloubani.com/ait-directory-sorting-plugin
Description: A plugin that adds a sort box to allow alphabetical sorting in searches.
Version: 1.0
Author: Moe Loubani
Author URI: http://moeloubani.com
*/

function moe_add_js() {
	wp_enqueue_script(
		'moe_plug_js',
		plugins_url( '/js/script.js' , __FILE__ ),
		array( 'jquery' )
	);
}

add_action( 'wp_enqueue_scripts', 'moe_add_js' );

function moe_pre_posts($query) {
	if($query->is_main_query() && !$query->is_admin) {
		if (isset($_GET['ml_order'])) {
			if($_GET['ml_order'] == 'alpha') {
					$query->set('orderby','title');
					$query->set('order', 'ASC');
				}
			else {
					$query->set('orderby', 'date');
				}
			}
	}
}
add_filter('pre_get_posts', 'moe_pre_posts', 100);
