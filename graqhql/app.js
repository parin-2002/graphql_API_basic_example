var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

let data = [];

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`

 type Query{
    getCourse(id:ID): Course
    getAllCourse: [Course]
  }

  type Course{
    id: ID
    courseName: String
    category: String
    price: Int
    language: String
    email: String
    stack: Stack
    techingAssists:[techingAssists]
  }

  type techingAssists{
    id: ID
    firstName: String
    lastName:String
    experience: Int
  }

  enum Stack{
    WEB
    MOBILE
    OTHER
  }

  input CourseInput{
    id: ID
    courseName: String!
    category: String
    price: Int!
    language: String!
    email: String!
    stack: Stack
    techingAssists:[techingAssistsInput]
  }

  input techingAssistsInput{
    id: ID
    firstName: String!
    lastName:String!
    experience: Int
  }

  type Mutation{
    createCourse(input: CourseInput): Course
  }

`);

// The root provides a resolver function for each API endpoint
var root = {
  getCourse: ({ id }) => {
    let dd;
    data.forEach((one, index) => {
      if (one.id == id) {
        console.log(one);
        dd = one;
        return one;
      }
    });
    return dd;
  },
  createCourse: ({ input }) => {
    input.id = Math.floor(Math.random() * 100000000000);
    let id = data.push(input);
    return data[id - 1];
  },
  getAllCourse: () => {
    return data;
  },
};

var app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
