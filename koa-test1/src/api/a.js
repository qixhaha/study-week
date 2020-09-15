/**
 * 路由的基础配置
 */

export default function (ctx) {
    console.log('进入路由a')
    ctx.body = {
        "message": "hello from a"
    }
}