const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const webpackConfig = merge(baseWebpackConfig,{
    devtool: 'eval-source-map',
    mode:'development',
    // 日志信息
    stats:{children:false}
})

module.exports = webpackConfig