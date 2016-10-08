// http://www.flaticon.com/
//
/// <reference path="./node_modules/@types/node/index.d.ts" />

import * as path from 'path';
import * as webpack from 'webpack';

const ReactStaticPlugin = require('react-static-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecachePlugin = require('sw-precache-webpack-plugin');

export default {

	/**
	 * The base directory (absolute path!) for resolving the entry option.
	 * If output.pathinfo is set, the included pathinfo is shortened to this directory.
	 *
	 * @type {string}
	 */
	context: path.resolve('./'),

	/**
	 * The entry point(s) for the bundle.
	 *
	 * @type {object}
	 */
	entry: {
		browser: path.resolve('./bootstrap/browser'),
	},

	/**
	 * The file output settings for the bundle.
	 *
	 * @type {object}
	 */
	output: {
		path: path.resolve('./.tmp'),
		filename: '[name].js',
		sourceMapFilename: '[name].map',
	},

	/**
	 * Options affecting the resolving of modules.
	 *
	 * @type {object}
	 */
	resolve: {
		modules: [
			path.resolve('./'),
			path.resolve('./node_modules'),
		],

		extensions: [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.scss',
			'.css',
			'.json',
			'.svg',
		],
	},

	/**
	 * Options affecting the normal modules (NormalModuleFactory).
	 *
	 * @type {object}
	 */
	module: {
		loaders: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts',
				include: [
					path.resolve('./app'),
					path.resolve('./bootstrap'),
				],
			},
			{
				test: /\.(css|scss)$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style',
					loader: [
						'css?modules,camelCase,sourceMap,localIdentName=[local]',
						'sass?sourceMap',
					],
				}),
				include: [
					path.resolve('./styles'),
					path.resolve('./node_modules/normalize.css'),
				],
			},
		],
	},

	/**
	 * Add additional plugins to the compiler.
	 *
	 * @type {array}
	 */
	plugins: [

		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),

		new ExtractTextPlugin({
			filename: 'styles.css',
            allChunks: true,
        }),

		new ReactStaticPlugin({
			routes: 'app/layouts/app',
			template: 'app/html',
		}),

		new SWPrecachePlugin({
			cacheId: 'bycedric',
			filename: 'service-worker.js',
			staticFileGlobs: [
				'*.{html,json,css}',
				'fonts/**/*',
				'images/**/*',
			],
		}),

	],

	/**
	 * Choose a developer tool to enhance debugging.
	 *
	 * @type {string}
	 */
	// devtool: 'source-map',

	/**
	 * Can be used to configure the behaviour of webpack-dev-server when
	 * the webpack config is passed to webpack-dev-server CLI.
	 *
	 * @type {object}
	 */
	devServer: {
		contentBase: path.resolve('./static'),
		host: '0.0.0.0',
		port: 8000,
		historyApiFallback: true,
		inline: true,
		https: false,
	},

};
