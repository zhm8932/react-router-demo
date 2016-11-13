const path = require('path');
const webpack = require('webpack');

var PATHS={
    js:'src/js/entry/'
}

var config ={
    entry:{
        index1:path.join(__dirname,PATHS.js,'index1.js'),
        index:path.join(__dirname,PATHS.js,'index.jsx'),
    },
    output:{
        path:path.join(__dirname,'dist','js'),
        filename:'[name].js',
        // publicPath: '/dist/' //重点在这里
    },
    resolve:{
        extensions:["",".js",".jsx",".scss",".json"]
    },
    devServer: {
        hot:true,
        inline:true,
        stats: {colors: true}, //显示颜色
        port: 8080,//端口
        contentBase: 'dist',//指定静态文件的根目录
    },
    module:{
        loaders:[
            { test:/\.jsx?$/, exclude:/node_modules/, loader:'babel-loader?presets[]=es2015&presets[]=react'},
            // { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin('common','common.js'),
        new webpack.DllReferencePlugin({
            context:__dirname,
            manifest:require('./dist/vendors-mainfest.json')
        })
    ]
}

module.exports = config;