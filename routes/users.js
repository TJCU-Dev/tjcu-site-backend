const router = require('koa-router')(); // 路由中间件
import UserAction from '../action/user'
import UserMw     from '../middleware/user'

/*
  ** 路由列表
  ** @POST  /user             {Object}       创建用户
  ** @put   /user             {Object}       更新用户信息
  ** @get   /user/:user       {params.user}  获取指定用户信息
  ** @post  /user/list/:page  {params.page}  获取用户列表
  **
*/


router.post('/user', UserAction.create)
      .put('/user', UserMw.check, UserAction.update)
      .get('/user/:user', UserMw.check, UserAction.get)
      .post(['/user/list', '/user/list/:page'], UserMw.check, UserAction.list)
      .post('/login', UserAction.login)
      .post('/logout', UserMw.check, UserAction.logout)



export default router
