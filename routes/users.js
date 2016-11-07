const router = require('koa-router')(); // 路由中间件
import UserAction from '../action/user'


router.post('/user', UserAction.create)
      .put('/user', UserAction.update)
      .get('/user/:user', UserAction.get)
      .post(['/user/list', '/user/list/:page'], UserAction.list)


export default router
