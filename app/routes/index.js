import Router from 'koa-router';
import reactApp from '../controllers/reactRouterController';

let router = Router();

router.get('/*', reactApp);

export default router;