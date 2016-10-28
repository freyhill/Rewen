/**
 *  webpack production
 */
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: ['babel-polyfill', './app/index.js'],
    output: {
        path:"./dist/",
        filename: 'bundle.js'
    },
    
    plugins: [
       
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
     
     new webpack.optimize.UglifyJsPlugin({
              compress: {
                warnings: false
              } 
            }),
      new webpack.DefinePlugin({
          'process.env': {
            'DEBUG':true,
            'NODE_ENV': JSON.stringify('production')
          }
        }) 

    ],
    resolve: {
        root: [
           path.resolve('./'),  //设置跟目录

        ],

      
    },
    module:{
        loaders:[
           {test : /\.css$/  , loader :"style!css" }, //css
           {test : /\.scss$/ , loaders : ["style", "css", "sass"] }, //sass
           {test:  /\.js$/   , exclude:/node_modules/,loader: 'babel-loader',query:{presets:['es2015','react']} }, //exclude:/node_modules/ 这个必须加 不然webpack执行时报错

           {test : /\.(png|jpg|gif)$/ , loader:'url?limit=8192&name=images/[name].[ext]'}, //
           {test : /\.json$/ , loader:"json-loader"},
           {test : /\.html$/, loader:"mustache"}
         ]
    }  
    
};
