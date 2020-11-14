import KoaRouter from 'koa-router';
import nestedRouter from './routes';
import staticRouter from './static';

const router = new KoaRouter();

router.use('/api', nestedRouter.routes(), nestedRouter.allowedMethods());
router.use(staticRouter.routes(), staticRouter.allowedMethods());

export default router;
