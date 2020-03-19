const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
    jobTitle: String
  }

  type Query {
    getUsers(search: String, page: Int, limit: Int): [User]
  }
`;

module.exports = typeDefs;
