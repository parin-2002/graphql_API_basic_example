const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Course {
    id: ID
    courseName: String
    price: Int
    author: String
    description: String
    email: String
  }

  type Query {
    hello: String
    getAllCourses: [Course]
    getCourse(id: ID): Course
  }

  input courseInput {
    courseName: String
    price: Int
    author: String
    description: String
    email: String
  }

  type Mutation {
    addCourse(course: courseInput): Course
    updateCourse(id: ID, update: courseInput): Course
    deleteCourse(id: ID): Course
  }
`;

module.exports = typeDefs;
