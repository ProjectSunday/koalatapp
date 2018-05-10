const { resolve } = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_module/, loader: 'babel-loader' }
        ]
    }
}