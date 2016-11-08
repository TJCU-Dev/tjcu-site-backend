import User from '../model/user';

export default {
/*
  ** 创建用户
  ** @user       {String}     用户名
  ** @password   {String}     密码
  ** @tel        {String}     手机号码
  ** @xh         {String}     学号
  ** @email      {String}     邮箱
  ** @portrait   {String}     头像
  **
*/
  create: async (ctx, next)=>{
    const body     = ctx.request.body
    const name     = body.user || ''
    const password = body.password || ''
    const tel      = body.tel || ''
    const xh       = body.xh || ''
    const email    = body.email || ''
    const portrait = body.portrait || ''
    const count    = await User.count({'user': name})

    if( count==0 ){
      ctx.body = await User.create({
        'user'    : name,
        'password': password,
        'tel'     : tel,
        'xh'      : xh,
        'email'   : email,
        'portrait': portrait
      })
    }else{
      ctx.body = {
        stats: 0,
        msg  : '用户已存在'
      }
    }

  },
  /*
   ** 修改用户信息
   ** @user       {String}     用户名
   ** @password   {String}     密码
   ** @tel        {String}     手机号码
   ** @xh         {String}     学号
   ** @email      {String}     邮箱
   ** @portrait   {String}     头像
   ** @pwA        {String}     教务密码
   ** @pwB        {String}     校园网密码
   ** @user       {String}     用户名
   */
  update: async (ctx, next)=>{
    const body     = ctx.request.body
    const name     = body.user || ''
    const password = body.password || ''
    const tel      = body.tel || ''
    const xh       = body.xh || ''
    const email    = body.email || ''
    const portrait = body.portrait || ''
    const pwA      = body.pwA || ''
    const pwB      = body.pwB || ''

    ctx.body = await User.findOneAndUpdate({'user': name},{
      'password': password,
      'tel'     : tel,
      'xh'      : xh,
      'email'   : email,
      'portrait': portrait,
      'pwA'     : pwA,
      'pwB'     : pwB,
    })
  },

  /*
    ** 获取指定用户信息
    ** @user       {String}     用户名
    ** @password   {String}     密码
    ** @tel        {String}     手机号码
    ** @xh         {String}     学号
    ** @email      {String}     邮箱
    ** @portrait   {String}     头像
    **
  */

  get: async (ctx, next)=>{
    const name = ctx.params.user
    ctx.body   = await User.findOne({'user': name}, 'user tel xh email portrait')
  },

  /*
    ** 获取用户列表
    ** @user       {String}     用户名
    ** @xh         {String}     学号
    ** @portrait   {String}     头像
    **
  */

  list: async (ctx, next)=>{
    const page  = ctx.params.page || 1
    const limit = 2
    const skip  = (page-1)*limit
    ctx.body   = await User.find({}, 'user xh portrait').skip(skip).limit(limit)
  },

  /*
    ** 登录
    ** @user       {String}     用户名
    ** @password   {String}     密码
    ** @tel        {String}     手机号码
    ** @xh         {String}     学号
    ** @email      {String}     邮箱
    ** @portrait   {String}     头像
    **
  */
  login: async (ctx, next)=>{
    const body     = ctx.request.body
    const name     = body.user || ''
    const password = body.password || ''
    const count = await User.count({
      'user'     : name,
      'password' : password
    })

    if(count==1) {
      ctx.body = ctx.session.user = await User.findOne({
        'user'     : name,
        'password' : password
      }, 'user tel xh email portrait')
    }else{
      ctx.body =  {
        stats: 0,
        msg  : '账户或密码错误'
      }
    }
  },

  /*
    ** 登出用户
    ** @user       {String}     用户名
    ** @password   {String}     密码
    ** @tel        {String}     手机号码
    ** @xh         {String}     学号
    ** @email      {String}     邮箱
    ** @portrait   {String}     头像
    **
  */
  logout: (ctx, next)=>{
    ctx.session = null;
  },


}
