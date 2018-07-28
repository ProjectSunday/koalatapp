const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
