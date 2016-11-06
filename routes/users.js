const router = require('koa-router')(); // 路由中间件
import UserAction from '../action/user'


router.post('/user', UserAction.create)
      .put('/user', UserAction.update)


export default router
