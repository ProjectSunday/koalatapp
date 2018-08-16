const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    const config = {
        mode: 'development',
        entry: './src/index',
        output: {
            filename: 'bundle.js',
            path: resolve(__dirname, 'build'),
        },
        module: {
            rules: [
                { test: /\.js$/, exclude: /node_module/, loader: 'babel-loader' },
                { test: /\.scss$/, exclude: /node_module/, use: ['style-loader', 'css-loader', 'sass-loader'] },
                { test: /\.(png|jpg|gif|svg)$/, use: [{ loader: 'url-loader', options: { limit: 8192 } }] },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
                'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:3000/graphql'),
            }),
        ],
        resolve: {
            alias: {
                _Styles: resolve(__dirname, 'src/_Styles'),
                Actions: resolve(__dirname, 'src/Actions'),
                Components: resolve(__dirname, 'src/Components'),
                config: resolve(__dirname, 'config.js'),
                Store: resolve(__dirname, 'src/Store'),
                src: resolve(__dirname, 'src'),
            },
        },
        devServer: {
            historyApiFallback: true,
        },
        devtool: 'eval-source-map',
    };

    return config;
};
