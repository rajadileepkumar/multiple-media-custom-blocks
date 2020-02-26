<?php 
 /* Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */


defined( 'ABSPATH' ) || exit;
function media_card_right_image_register_block() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'media-card-right-image-esnext',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'media-card-image/media-card-right-esnext', array(
		'editor_script' => 'media-card-right-image-esnext',
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'media-card-right-image-esnext', 'gutenberg-examples' );
  }

}
add_action( 'init', 'media_card_right_image_register_block' );
?>