import User from '../model/user';

export default {
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
        'user': name,
        'password': password,
        'tel': tel,
        'xh': xh,
        'email': email,
        'portrait': portrait
      })
    }else{
      ctx.body = {
        stats: 0,
        msg: '用户已存在'
      }
    }

  },

}
