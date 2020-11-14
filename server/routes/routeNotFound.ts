import { RouterContext } from 'koa-router';
import { serverRenderer } from '@server/serverRenderer';

const routeNotFoundMiddleware = async (ctx: RouterContext<any, any>, next: () => Promise<any>) => {
    try {
        await next();

        if (ctx.status === 404) {
            ctx.throw(404);
        }
    } catch (err) {
        serverRenderer(ctx);
    }
}

export default routeNotFoundMiddleware;
