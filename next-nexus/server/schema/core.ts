import { makeSchema } from "nexus"
import { resolve } from "path"
import * as UserTypes from "./user"
import * as PostTypes from "./post"
import { DateScalar } from "./scalar"

export const schema = makeSchema({
  types: [UserTypes, PostTypes, DateScalar],
  outputs: {
    typegen: resolve("generated/types.d.ts"),
  },
  contextType: { module: resolve("server/context.ts"), export: "Context" },
})
