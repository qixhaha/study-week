// const Router = require('koa-router');
import Router from 'koa-router'
import b from '../api/b'
// const b = require('../api/b');
const router = new Router();
router.get('/b', b);
export default router;