const path = require('path');
module.exports = {
    //安装webpack：npm i webpack webpack-cli 
    //定义编译的入口，如果没有配置文件，在输入命令行的时候要自带入口
    entry:'./src/index.js',
    //输出
    output:{
        //输出的文件在dist中
        path:path.resolve(__dirname,'dist'),
        //文件名是main1.js
        filename:'main.js'
    },
    //加载器
    module:{
        //定义要用什么loader
        rules:[
            {test: /\.css$/i,use: ['style-loader', 'css-loader'],},//执行顺序：从右到左，从下到上
            //cssloader将css样式变成一个commonjs模块，并到js之中
            //styleloader将js中的css添加到HTML之中
            {test: /\.less$/i,use: ['style-loader','css-loader','less-loader',],},//将less转换为css
            {test: /(\.ef)|(\.eft)|(\.efml)$/,use:['eft-loader'],}
            
        ],
    },
    //插件
    plugins:[

    ],
    //编译模式development或production
    mode:'development'
}