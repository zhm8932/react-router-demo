const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendors: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'dist','js'),
        filename: '[name].js',
        library: '[name]'
    },
    resolve:{
        extensions:["",".js",".jsx",".json"],
        alias:{}
    },
    plugins:[
        new webpack.DllPlugin({
            /**
             * path
             * 定义 manifest 文件生成的位置
             * [name]的部分由entry的名字替换
             */
            path: path.join(__dirname,'dist','[name]-mainfest.json'),
            /**
             * name
             * dll bundle 输出到那个全局变量上
             * 和 output.library 一样即可。
             */
            name: '[name]',
            context: __dirname
        })
    ]

}