import room from '../model/CourseInformation';

export default {
  test: async(ctx, next) => {
    ctx.body = await room.find({}).limit(20)
  },

  get: async(ctx, next) => {
    const body = ctx.request.body
    const jie = body.jie // 大节
    const lou = body.lou // 楼
    const week = body.week // 星期几
    const zhou = body.zhou
    console.log(body)
      ctx.body = await room.find({
        "星期": {
          "$in": week
        },
        "节次": {
          "$in": jie
        },
        "楼": {
          "$in": lou
        },
        "周期": zhou.toString()
      })

    console.log(ctx.body.length)
  }
}
