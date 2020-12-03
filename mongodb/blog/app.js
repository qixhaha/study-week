const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
let Article = require('./models/article')
const app = express()
mongoose.connect('mongodb://localhost/nodejs-blog')
let db = mongoose.connection
db.once('open', () => {
  console.log('Connected to Mongodb')
})
db.on('error', function (err) {
  console.log(err)
})
// 设置模板文件夹
app.set('views', path.join(__dirname, 'views'))
// 设置渲染引擎是啥
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  // let articles = [
  //   {
  //     id: 1,
  //     title: 'Title One',
  //     author: 'hfpp2012',
  //   },
  //   {
  //     id: 2,
  //     title: 'Title Two',
  //     author: 'hfpp2012',
  //   },
  //   {
  //     id: 3,
  //     title: 'Title Three',
  //     author: 'hfpp2012',
  //   },
  // ]
  // res.send('hello world')
  Article.find({}, (err, articles) => {
    res.render('index', {
      articles,
    })
  })
})
app.listen(5000, () => {
  console.log('Server started on port 5000...')
})
