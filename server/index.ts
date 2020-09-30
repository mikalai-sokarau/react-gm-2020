import Koa from 'koa';
import cors from '@koa/cors';
import router from './routes';
import KoaJson from 'koa-json';

// TODO: add absolute paths support to server

const app = new Koa();
const port = process.env.NODE_PORT;

app.use(cors());
app.use(KoaJson());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => console.log(`Server is started at port: ${port}`));
