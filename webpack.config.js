const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		bundle: path.resolve(__dirname, 'src/index.js'),
		someJs: path.resolve(__dirname, 'src/some.js'),
	},
	output: {
		clean: true,
		filename: '[name][contenthash].js',
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: '[name][ext]',
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				}
			},
			{
				test: /\.(png|jpeg|jpg)$/i,
				type: 'asset/resource',
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/template.html',
			title: 'Webpack app',
		}),
	],
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		compress: true,
		historyApiFallback: true,
		hot: true,
		open: true,
		port: 3000,
	},
}