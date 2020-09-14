// const Koa = require('koa')
// import '@babel/polyfill';
import Koa from 'koa'
// const statics = require('koa-static')
import statics from 'koa-static'
// const path = require('path')
import path from 'path'
const app = new Koa();

// const router = require('./routes/routes');
// const helmet = require('koa-helmet')
import router from './routes/routes';
import helmet from 'koa-helmet'
app.use(statics(path.join(__dirname, '..', 'public')))
app.use(helmet())
app.use(router())

app.listen(4000, () => {
    console.log('running')
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