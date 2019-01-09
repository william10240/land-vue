const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')


module.exports={
    mode:'development',
    // mode:'production',
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                loader:[
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ]
            },
            {
                test: /\.(git|jpg|jpeg|png|webp|woff|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[name].[id].css"
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          })
    ]

}