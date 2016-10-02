/// <reference path="./node_modules/@types/node/index.d.ts" />

import * as path from 'path';
import * as webpack from 'webpack';

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
		vendor: [
			'normalize.css',
			'react',
			'react-dom',
			'react-router',
		],
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
				loaders: [
					'style',
					'css?modules,camelCase,sourceMap,localIdentName=[local]',
					'sass?sourceMap',
				],
				include: [
					path.resolve('./style'),
					path.resolve('./node_modules/normalize.css'),
				],
			}
		],
	},

	/**
	 * Add additional plugins to the compiler.
	 *
	 * @type {array}
	 */
	plugins: [

		/**
		 * Make sure webpack shares the vendor chunk as shared,
		 * and dos not re-include it into the app chunk.
		 */
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity,
		}),

	],

	/**
	 * Choose a developer tool to enhance debugging.
	 *
	 * @type {string}
	 */
	devtool: 'source-map',

	/**
	 * Can be used to configure the behaviour of webpack-dev-server when
	 * the webpack config is passed to webpack-dev-server CLI.
	 *
	 * @type {object}
	 */
	devServer: {
		contentBase: path.resolve('./public'),
		host: '0.0.0.0',
		port: 8000,
		historyApiFallback: true,
		inline: true,
		https: false,
	},

};
