const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseInformationSchema = new Schema({
  课程号: String,
  学分: String,
  名称: String,
  学院: String,
  教师: String,
  地点: Array,
  星期: String,
  节次: String,
  楼: String,
  房间: String,
  周期: Array
});

CourseInformationSchema.plugin(require('../plugins/common.js'));
const CourseInformationModel = mongoose.model('CourseInformation', CourseInformationSchema);
export default CourseInformationModel;
