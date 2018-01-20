var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: 'process.env.NODE_ENV' === 'development'
})
module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        extensions: ['.jsx', '.js', '.scss'],
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.js|.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react', 'stage-1']
                }
            }
        }, {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }, {
                    loader: 'postcss-loader'
                }],
                // 在开发环境使用 style-loader
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        extractSass,
        // 加入 html 模板任务
        new HtmlWebpackPlugin({
            // 模板文件
            template: 'src/index.html',
            // 打包后文件名称，会自动放到 output 指定的 dist 目录
            filename: 'index.html'
        })
    ],
    devServer: {
        compress: true,
        disableHostCheck: true,
        publicPath: '',
        host: '127.0.0.1',
        port: '8080'
    }
}