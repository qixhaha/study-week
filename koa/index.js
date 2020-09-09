const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors')
const json = require('koa-json')
const router = new Router();
const app = new Koa();
const koaBody = require('koa-body');
app.use(koaBody())
app.use(cors())
app.use(json({ pretty: false, param: 'pretty' }))
router.prefix('/api')
router.post('/post', async (ctx) => {
    // console.log(ctx.request.header)
    let role = ctx.request.header.role;
    let { name, email } = ctx.request.body;
    console.log(name, email)
    if (!name || !email) {
        ctx.body = {
            code: 404,
            msg: "name与email不得为空"
        }
    } else if (!role || role != 'admin') {
        ctx.body = {
            code: 401,
            msg: 'unauthorized post'
        }
    } else {
        ctx.body = {
            code: 200,
            data: {
                name: 'imooc',
                email: "imooc@email.com"
            },
            msg: "上传成功"
        }
    }
})

app.use(router.routes()).use(router.allowedMethods());
// 以上为官方推荐方式，allowedMethods用在routes之后，作用是根据ctx.status设置response header.
app.listen(3000, err => {
    if (err) throw err;
    console.log('running')
})