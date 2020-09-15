// const Router = require('koa-router');
import Router from 'koa-router'
import demoController from '../api/demoController'
// const b = require('../api/b');
const router = new Router();
router.get('/demo', demoController.demo);
export default router;