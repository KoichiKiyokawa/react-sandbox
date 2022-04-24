import { objectType } from "nexus"

export const Post = objectType({
  name: "Post",
  definition(t) {
    t.nonNull.id("id")
    t.string("title")
    t.string("body")
    t.field("user", {
      type: "User",
      resolve(root, _args, ctx) {
        return ctx.db.post.findUnique({ where: { id: root.id } }).user()
      },
    })
  },
})
