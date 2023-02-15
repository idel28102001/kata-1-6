const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all",
        },
        minimizer: [],
    }
    if (isProd) {
        const plugins = [
            new CssMinimizerPlugin(),
            new TerserWebpackPlugin(),
        ];
        config.minimizer.push(...plugins)
    }
    return config;
};
const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
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
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[name][ext][query]'
    },
    resolve: {
        extensions: ['.js', '.json', '.css', '.scss'],
        alias: {
            "@": path.resolve(__dirname, 'src'),
            "@style": path.resolve(__dirname, 'src/styles/sass'),
        },
    },
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseInlineTagWhitespace: isProd,
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: filename('css')
            }
        ),
        new CssMinimizerPlugin(),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'),
        },
        compress: true,
        port: 4200,
        open: true,
        hot: isDev,
    },
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
            {
                test: /\.html/,
                use: ['html-loader'],
            }
        ],
    },
}