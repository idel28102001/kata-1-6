const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const cssLoaders = extra => {
    const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];
    if (extra) loaders.push(extra);
    return loaders;
}

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
console.log(`IS DEV: ${isDev}`);
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            "@": path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseInlineTagWhitespace: isProd,
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader'),
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/,
                type: 'asset/resource',
            },
        ],
    },
}