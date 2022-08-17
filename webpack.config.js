const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, 'src/app.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5002,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Titre',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html')
        }),
    ],

}