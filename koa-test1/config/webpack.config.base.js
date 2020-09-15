//使用cross-env设置环境变量

const path = require('path');
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack  = require('webpack')
// node命令执行时所在的文件夹目录
const projectRoot = process.cwd()
const webpackConfig = {
    target: 'node',
    // mode: "development",
    entry: {
        server: path.join(projectRoot, 'src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(projectRoot, './dist')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: [path.join(projectRoot, 'node_modules')]
        }]
    },
    // 不打包node_modules依赖中的node安装包但是可以使用commonjs引入
    ///相当于cdn引入的方式
    externals: [nodeExternals()],
    plugins: [
        new CleanWebpackPlugin(),
         // 这块设置是为了在src目录中可以（项目中使用这个环境变量，cross_env设置的是在node中使用的环境变量）
         // node环境变量决定全局的环境变量
        new webpack.DefinePlugin({
            "process.env.NODE_ENV":(process.env.NODE_ENV === 'production'||process.env.NODE_ENV === 'prod')?"'production'":"'development'"
        })
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