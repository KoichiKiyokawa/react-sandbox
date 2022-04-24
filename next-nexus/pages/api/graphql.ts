import { ApolloServer } from "apollo-server-micro"
import { context } from "../../server/context"
import { schema } from "../../server/schema/core"

const server = new ApolloServer({
  schema,
  context,
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({
  path: "/api/graphql",
})
