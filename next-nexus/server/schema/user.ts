import { extendType, objectType } from "nexus"

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("id")
    t.string("email")
    t.string("name")
    t.date("birthday")
    t.field("posts", {
      type: "Post",
      resolve(root, _args, ctx) {
        return ctx.db.user.findUnique({ where: { id: root.id } })
      },
    })
  },
})

export const Query = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("users", {
      type: "User",
      resolve(_root, _args, ctx) {
        return ctx.db.user.findMany()
      },
    })
  },
})
