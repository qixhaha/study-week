const path = require('path');
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
console.log('webpack')
debugger
const webpackConfig = {
    target: 'node',
    mode: "development",
    entry: {
        server: path.join(__dirname, 'src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: [path.join(__dirname, 'node_modules')]
        }]
    },
    devtool: 'eval-source-map',
    // 不打包node_modules依赖中的node安装包但是可以使用commonjs引入
    ///相当于cdn引入的方式
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin()
    ],
    // 启用的node模块
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true
    }

}

module.exports = webpackConfig