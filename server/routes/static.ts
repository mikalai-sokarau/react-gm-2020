import KoaRouter from 'koa-router';
import { serverRenderer } from '../serverRenderer';

const router = new KoaRouter();

router.get(['/', '/movie/:id', '/search/:text'], ctx => serverRenderer(ctx));

export default router;