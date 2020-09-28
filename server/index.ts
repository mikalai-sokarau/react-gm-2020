import Koa from 'koa';
import router from './routes';
import KoaJson from 'koa-json';

const app = new Koa();
const port = process.env.NODE_PORT;

app.use(KoaJson());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => console.log(`Server is started at port: ${port}`));
