import Koa from 'koa';
import path from 'path';
import cors from '@koa/cors';
import KoaJson from 'koa-json';
import KoaStatic from 'koa-static';
import router from '@server/routes';
import BodyParser from 'koa-bodyparser';

const app = new Koa();
const port = process.env.NODE_PORT;

app.use(cors());
app.use(KoaJson());
app.use(BodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(KoaStatic(path.resolve(__dirname, '../dist/dev')));

app.listen(port, () => console.log(`Server is started at port: ${port}`));
