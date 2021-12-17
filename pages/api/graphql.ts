import { ApolloServer, gql } from 'apollo-server-micro'
import { NextApiRequest, NextApiResponse } from 'next'

const typeDefs = gql`
  type User {
    id: ID
  }

  type Query {
    getUser: User
  }
`

const resolvers = {
  Query: {
    getUser: () => {
      return {
        id: 'Foo',
      }
    },
  },
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
})

const startServer = apolloServer.start()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
