const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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


const UserSchema = new Schema({
  user: {
    type: String,
    unique: true
  },

  password: {
    type: String
  },

  tel: {
    type: String,
  },

  xh: {
    type: String,
  },

  sex: {
    type: String,
  },

  email: {
    type: String,
  },

  portrait: {
    type: String,
  },

  pwA: {
    type: String,
  },

  pwB: {
    type: String,
  }
})



UserSchema.plugin(require('../plugins/common.js'));
const User = mongoose.model('User', UserSchema);
export default User;
