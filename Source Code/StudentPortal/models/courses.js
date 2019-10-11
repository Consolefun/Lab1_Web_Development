var mongoose = require('mongoose');

var CoursesSchema = new mongoose.Schema({
  CourseType: String,
  CourseName: String,

  updated_date: {type: Date, default: Date.now},
});

const Courses = mongoose.model('courses', CoursesSchema);
module.exports = Courses;
