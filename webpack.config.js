const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },

    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })]
};
