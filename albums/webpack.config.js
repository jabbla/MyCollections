var sourceRoot = './source/',
	distRoot = './dist/';


module.exports = {
	entry: sourceRoot+'js/main.js',
	output: {
		path: distRoot+'js/',
		filename: 'main.bundle.js',
	},
	module: {
		loaders: [
			{test:/\.css$/,loaders:['style','css']},
			{test:/\.(jpg||png)$/,loader:'url'},
			{test:/\.js$/,exclude: /(node_modules|bower_components)/,loader:'babel'},
			{test:/\.vue$/,loader:'vue'},
		]
	},

}