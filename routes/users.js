const router = require('koa-router')(); // 路由中间件
import UserAction from '../action/user'


/*
  ** 路由列表
  ** @POST  /user             {Object}       创建用户
  ** @put   /user             {Object}       更新用户信息
  ** @get   /user/:user       {params.user}  获取指定用户信息
  ** @post  /user/list/:page  {params.page}  获取用户列表
  **
*/


router.post('/user', UserAction.create)
      .put('/user', UserAction.update)
      .get('/user/:user', UserAction.get)
      .post(['/user/list', '/user/list/:page'], UserAction.list)
      .post('/login', UserAction.login)
      .post('/logout', UserAction.logout)



export default router
