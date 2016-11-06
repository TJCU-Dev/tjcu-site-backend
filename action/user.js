import User from '../model/user';

export default {
/*
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
   *
   ** @user       {String}     用户名
   ** @password   {String}     密码
   ** @tel        {String}     手机号码
   ** @xh         {String}     学号
   ** @email      {String}     邮箱
   ** @portrait   {String}     头像
   ** @pwA        {String}     教务密码
   ** @pwB        {String}     校园网密码
   ** @user       {String}     用户名
   **
   *
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
      'user'    : name,
      'password': password,
      'tel'     : tel,
      'xh'      : xh,
      'email'   : email,
      'portrait': portrait,
      'pwA'     : pwA,
      'pwB'     : pwB,
    })
  },

}
