const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const course = model("courses", courseSchema);

module.exports = course;
