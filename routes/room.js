const router = require('koa-router')(); // 路由中间件
import RoomAction from '../action/room'

/*
  ** 路由列表
  ** @POST  /user             {Object}       创建用户
  ** @put   /user             {Object}       更新用户信息
  ** @get   /user/:user       {params.user}  获取指定用户信息
  ** @post  /user/list/:page  {params.page}  获取用户列表
  ** @post  /login            {params}       登录
  ** @post  /logout           {params}       登出
  **
*/


router.get('/room/test', RoomAction.test)
router.post('/room', RoomAction.get)


export default router
