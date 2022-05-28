import { ApolloServer } from 'apollo-server'
import { ApolloServerConfigType } from './types'
import { PORT } from './consts'
import { typeDefs, resolvers } from './schema'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const serverConfig: ApolloServerConfigType = {
  port: PORT,
}

server.listen(serverConfig).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
