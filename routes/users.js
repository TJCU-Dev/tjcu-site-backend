const router = require('koa-router')(); // 路由中间件


router.get('/', (ctx, next)=>{
  ctx.body = '<h1>TJCU site</h1>';
});

export default router
