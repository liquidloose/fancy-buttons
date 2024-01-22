<?php

/**
 * Plugin Name:       Fancy Buttons
 * Description:       A Gutenberg block that helps you make a back-to-top buttons
 * Requires at least: 6.1
 * Requires PHP:      8.0.26
 * Version:           1.0.0
 * Author:            Ronald Lussier
 * Author URI:		  https://rlussier.net
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fancy-buttons
 *
 * @package           fancy-buttons
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_fancy_buttons_block_init() {
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'create_block_fancy_buttons_block_init');

function enqueue_plugin_files() {
	//wp_enqueue_style('remix-icon-css', 'https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css', array(), null);
	wp_enqueue_script('fancy-buttons', plugin_dir_url(__FILE__) . 'js/fancy-buttons.js');
	wp_enqueue_style('front-end-hide', plugin_dir_url(__FILE__) . 'css/fancy-buttons.css');
}
add_action('wp_enqueue_scripts', 'enqueue_plugin_files');
