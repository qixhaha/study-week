const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const TerserWebpackPlugin = require('terser-webpack-plugin')
// console.log('编译时环境变量',process.env.NODE_ENV)
const webpackConfig = merge(baseWebpackConfig,{
    mode:'production',
    // 日志信息
    stats:{children:false},
    optimization:{
        minimizer:[
            new TerserWebpackPlugin({
                terserOptions:{
                    warnings:false,
                    compress:{
                        warnings:false,
                        // 是否注释掉console
                        drop_console:false,
                        dead_code:true,
                        drop_debugger:true
                    },
                    output:{
                        comments:false,
                        beautify:false
                    },
                    mangle:true
                },
                parallel:true,
                sourceMap:false
            })
        ]
    },
    // 提取公共文件或者依赖包
    // splitChunks:{
    //     cacheGroups:{
    //         commons:{
    //             name:'commons',
    //             chunks:'initial',
    //             minChunks:3,
    //             enforce:true
    //         }
    //     }
    // }

})

module.exports = webpackConfig