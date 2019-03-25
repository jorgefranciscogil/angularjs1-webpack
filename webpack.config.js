const path = require('path');
const webpack = require('webpack');
const here = p => path.join(__dirname, p);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ENV = process.env.NODE_ENV || 'development';
const devMode = ENV !== 'production';

console.log('ENV ---->>', ENV, ' in ', here(''));

module.exports = {
    mode: ENV,
    devtool: 'inline-source-map',
    devServer : {
        port: 9000,
        writeToDisk: true/* ,
        hot: true */
    },
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            context: 'src',
                            name : '[path][name].[ext]',
                            limit: 100000
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
					{
						loader: 'url-loader',
						options: {
                            context: 'src',
							name: '[path][name].[ext]'
						}
					}
				]
            },
            { 
				test: /\.css$/, 
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
            { 
				test: /\.scss$/, 
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' }
				]
			},
            {
                test: /\.(html)$/, 
                use : [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: ['@babel/preset-env']
				  }
				}
			}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
			templateParameters: {
                title: 'Angularjs + Webpack',
                ngApp: 'my-angularjs-app'
			},
			template: 'ejs-loader!extract-loader!html-loader!./src/index.ejs'
		})/* ,
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin() */
    ],
    resolve: {
        modules: [path.resolve(__dirname, './src/app'), 'node_modules'],
        extensions: ['.js']/*,
        alias: {
          reducers: path.resolve(__dirname, './src/reducers')
        }*/
    }
};