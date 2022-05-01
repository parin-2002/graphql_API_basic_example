const course = require("./course.model");

const resolvers = {
  Query: {
    hello: () => {
      return "hello world";
    },
    getAllCourses: async () => {
      return await course.find();
    },
    getCourse: async (parent, args, context, info) => {
      const { id } = args;
      return await course.findById(id);
    },
  },

  Mutation: {
    addCourse: async (parent, args, context, info) => {
      const { courseName, price, author, description, email } = args.course;
      return await new course({
        courseName,
        price,
        author,
        description,
        email,
      }).save();
    },
    updateCourse: async (parent, args, context, info) => {
      const { id } = args;
      const { courseName, price, author, description, email } = args.update;
      return await course.findByIdAndUpdate(
        id,
        {
          courseName,
          price,
          author,
          description,
          email,
        },
        { new: true }
      );
    },
    deleteCourse: async (parent, args, context, info) => {
      const { id } = args;
      return await course.findByIdAndDelete(id);
    },
  },
};

module.exports = resolvers;
