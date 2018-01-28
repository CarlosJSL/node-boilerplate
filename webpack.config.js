const webpack  = require('webpack');

module.exports = {
	entry: {
		filename: './server.js'
	},
	output: {
		filename: './build.js'
	},
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query:{
					presets: [
						['es2015']
					]
				}
			}
		]
	}

};