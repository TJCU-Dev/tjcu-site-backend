import koa        from 'koa';
import Static     from 'koa-static';      // 静态目录中间件
import logger     from 'koa-logger';      // http请求日志中间件
import json       from 'koa-json';        // 打印json
import bodyparser from 'koa-bodyparser';  // 解析 http 提交数据
const  router = require('koa-router')();  // 路由中间件
const  app    = new koa();

// 载入路由文件
import users      from './routes/users'

// 加载配置中间件
app.use(json())
app.use(logger())
app.use(bodyparser())


// 加载路由
app.use(router.routes())
   .use(router.allowedMethods())
   .use(users.routes())


export default app
