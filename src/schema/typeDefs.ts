import { gql } from 'apollo-server'

export default gql`
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
    firstName: String
    lastName: String
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type Mutation {
    createUser(user: UserInput!): String!
  }
`
