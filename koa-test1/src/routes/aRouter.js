import Router from 'koa-router'
import a from '../api/a'
// const b = require('../api/b');
const router = new Router();
router.get('/a', a);
export default router;