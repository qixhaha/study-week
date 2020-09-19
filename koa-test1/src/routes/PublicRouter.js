import Router from 'koa-router'
import PublicController from '../api/PublicController'
const router = new Router();
router.get('/getCapcha', PublicController.getCapcha);
export default router;