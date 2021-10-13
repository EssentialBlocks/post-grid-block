<?php
/**
 * Plugin Name:     Post Grid Block
 * Description:     Display Posts or Pages by filtering with custom queries
 * Version:         1.0.0
 * Author:          WPDeveloper
 * Author URI:      https://wpdeveloper.net
 * License:         GPL-3.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     post-grid-block
 *
 * @package         post-grid-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */

require_once __DIR__ . '/includes/font-loader.php';
require_once __DIR__ . '/includes/post-meta.php';
require_once __DIR__ . '/lib/style-handler/style-handler.php';

function create_block_post_grid_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "button-group/button-group-block" block first.'
		);
	}
	$index_js = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'post-grid-block-editor',
		plugins_url( $index_js, __FILE__ ),
		array(
			'wp-blocks',
			'wp-i18n',
			'wp-element',
			'wp-block-editor',
			'wp-api-fetch',
		),
		$script_asset['version']
	);

	$editor_css = 'build/index.css';
	wp_register_style(
		'post-grid-block-editor-css',
		plugins_url($editor_css, __FILE__),
		array(),
		filemtime("$dir/$editor_css")
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'post-grid-block-frontend-css',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	if( ! WP_Block_Type_Registry::get_instance()->is_registered( 'essential-blocks/post-grid' ) ) {
		register_block_type(
			'post-grid-block/post-grid',
			array (
				'editor_script' => 'post-grid-block-editor',
				'editor_style'  => 'post-grid-block-editor-css',
				'style'  		=> 'post-grid-block-frontend-css',
				'render_callback' => 'render_block_eb_post_grid_block',
			)
		);
	}
}
add_action( 'init', 'create_block_post_grid_block_init' );

function render_block_eb_post_grid_block($attributes) {
	// echo "Hello";
}