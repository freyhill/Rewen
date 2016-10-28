/**
 * webpack development
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
         hot: true, //热替换1
    },
    entry: [
    'webpack/hot/dev-server', //热替换2
    'webpack-dev-server/client?http://0.0.0.0:4001', //热替换3
    './app/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
       
        new webpack.HotModuleReplacementPlugin(), //热替换4
        new webpack.NoErrorsPlugin(),
        
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
       /*new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })*/
    ],
    resolve: {
      modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
      extensions: ['', '.web.js', '.js', '.json'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,
                include: __dirname
            },
             {
                test:  /\.js$/   , 
                exclude:/node_modules/,
                loader: 'babel-loader',
                query:{presets:['es2015','react']} 
            },
            {
                test: /\.css$/,
                loaders: [
                    'style', 'css'
                ],
                include: __dirname
            },
            {
                test: /\.less?$/,
                loaders : [
                    'style-loader',
                    'css-loader',
                    'less-loader?{"sourceMap":true}'
                ],
                include: __dirname
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url',
                query: {limit: 10240}
            }

        ]
    }
};