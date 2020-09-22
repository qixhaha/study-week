import Koa from 'koa'
import statics from 'koa-static'
import path from 'path'
import compose from 'koa-compose'
import koaBody from 'koa-body'
import jsonUtil from 'koa-json'
import cors from '@koa/cors'
const app = new Koa()
// console.log('运行时环境变量',process.env.NODE_ENV)
import router from './routes/routes'
import helmet from 'koa-helmet'
import compress from 'koa-compress'
//是否是生产环境 因为生产环境的运行时都是production开发运行时时dev
const isDevMode = process.env.NODE_ENV === 'production' ? false : true
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '..', 'public')),
  cors(),
  jsonUtil({ pretty: false, param: 'pretty' }),
  helmet(),
  // router()
])
//生产环境压缩中间件
if (!isDevMode) {
  app.use(compress())
}
app.use(middleware)
app.use(router())
app.listen(3000, () => {
  console.log('启动成功')
})

// 'use strict';

// function test() {
//     new Promise()
// }
// test();
// const arr = [1, 2, 3, 4].map((item) => {
//     return item * item;
// })
// console.log(arr)

// class Apple {
//     constructor() {
//         this.name = Symbol('orange');
//         this.attrs = new Map();
//     }

//     hello() {
//         console.log('hello');
//     }
// }
