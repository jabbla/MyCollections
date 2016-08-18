module.exports = {
	entry: "./source/js/IfeAlbum.js",
	output: {
		path: __dirname,
		filename: "./dist/IfeAlbum.js"
	},
	watch:true,
	module: {
		loaders: [
			{test:/\.scss$/,loaders: ['style','css','sass']},
			{test:/\.css$/,loaders: ['style','css']},
		]
	}
}

