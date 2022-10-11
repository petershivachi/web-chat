const { createServer } = require('graphql-yoga');

const messages = [];

const typeDefs = `
type Messsage {
  id: ID!
  user: String!
  content: String!
}

type Query {
  messages: [Message!]
}

type Mutation {
  postMessage(user: String, content: String!): ID!
}
`

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (parent, { user, content }) => {
      const id = messages.length;

      messages.push({
        id, user, content
      })
    }
  }
}

const app = createServer({ typeDefs, resolvers });
app.start(({ port }) => {
  console.log(`Server started on port: ${port}`)
});