<?php

/**
 * Plugin Name:       Fancy Buttons
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       fancy-buttons
 *
 * @package           create-block
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
}
add_action('wp_enqueue_scripts', 'enqueue_plugin_files');

function admin_enqueue_plugin_files() {
	//wp_enqueue_style('remix-icon-css', 'https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css', array(), null);
	wp_enqueue_script('fancy-buttons', plugin_dir_url(__FILE__) . 'js/fancy-buttons.js');
}
add_action('admin_enqueue_scripts', 'admin_enqueue_plugin_files');
