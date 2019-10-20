
const webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './js/bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
					use: [
						{
							loader: 'html-loader',
							options: { minimize: false }
						}
				]
			},
			{
		      test: /\.m?js$/,
		      exclude: /(node_modules|bower_components)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['@babel/preset-env']
		        }
		      }
		    },
		    {
		        test: /\.(sa|sc|c)ss$/,
		        use: [
		          {
		            loader: MiniCssExtractPlugin.loader,
		            
		          },
		          // Creates `style` nodes from JS strings
		          /*'style-loader',*/
		          // Translates CSS into CommonJS
		          'css-loader',
		          // Compiles Sass to CSS
		          'sass-loader',
		        ],
		    },
		    {
		      test: /\.(woff|woff2|ttf|otf|eot|svg)$/,
		      exclude: /node_modules/,
		      loader: 'url-loader',
		      options: {
		      	outputPath: '../dist/fonts/',
		        publicPath: 'fonts/',
		        name: '[name].[ext]',
		        limit: 1000
		      }
		    },
		   
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // all options are optional
	      filename: './css/[name].css'
	    }),
	    new CleanWebpackPlugin(),
	]
}
