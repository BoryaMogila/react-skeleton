import Koa from 'koa'
import serve from 'koa-serve-static'
import mount from 'koa-mount'

import bodyparser from './helpers/bodyParser';
import router from './helpers/router';

let app = new Koa();

bodyparser(app);
app.use(mount('/public', serve('./public')));
router(app);
app.listen(4000, function () {
    console.log('listening at port %d', 4000);
});