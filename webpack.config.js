const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

module.exports = {
    mode: 'none',
    entry: {
        home: path.resolve(__dirname, 'src/', 'home/', 'index.js'),
        contacts: path.resolve(__dirname, 'src/', 'contacts/', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/']),
        new HtmlWebpackPlugin({            
            chunks: ['home'],
            template: path.resolve(__dirname, 'src/', 'home/', 'index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            chunks: ['contacts']
        }),
        new MiniCssExtractPlugin(),
        new HtmlCriticalWebpackPlugin({
            base: path.resolve(__dirname, 'dist'),
            src: 'contacts.html',
            dest: 'contacts.html',
            inline: true,
            minify: true,
            extract: true,
            width: 375,
            height: 565,
            penthouse: {
              blockJSRequests: false,
            }
        }),
    ]
};