var path = require('path');
var fs = require('fs');

// Create and entry dict
var entries = {}

// Create file name ignore list
var exclude = [
	'.DS_Store'
]

// JSX entrypoints
var folder_pool = [
	path.join(__dirname, 'todo', 'js')
]

for (var i = folder_pool.length - 1; i >= 0; i--) {
	var current_folder = folder_pool[i];
	
	// List all the files in the current folder
	var files = fs.readdirSync(path.join(current_folder));

	// Append all the keys to the dict
	for (var j= files.length - 1; j >= 0; j--) {
		var file = files[j];
		if (!exclude.includes(file)) {
			entries[file] = path.join(current_folder, file);
		}
	}
}

module.exports = {
	entry: entries,
	output: {
		path: path.join(__dirname, 'bundles'),
		filename: (pathData) => {
			var extension = pathData.chunk.name.split('.').pop();
			var name = pathData.chunk.name.replace('.' + extension, '');

			if (extension === 'jsx') {
				// eslint-disable-next-line
				var output_extension = 'js'
			}
			if (extension === 'css') {
				// eslint-disable-next-line
				var output_extension = 'css'
			}

			return name + '_bundle.' + output_extension
		}
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};