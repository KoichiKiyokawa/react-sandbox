import { db } from "@/lib/db";
import { procedure, router } from "@/lib/trpc/server";
import { z } from "zod";
import { createPostSchema } from "./schema/create-post.schema";
import { updatePostSchema } from "./schema/update-post.schema";

export const postRouter = router({
  list: procedure.query(() => {
    return db.post.findMany({ orderBy: { createdAt: "desc" } });
  }),
  show: procedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => db.post.findUnique({ where: { id: input.id } })),
  create: procedure.input(createPostSchema).mutation(async ({ input }) => {
    return db.post.create({ data: { ...input, authorId: 1 } });
  }),
  update: procedure
    .input(z.object({ id: z.number(), data: updatePostSchema }))
    .mutation(async ({ input }) => {
      return db.post.update({ where: { id: input.id }, data: input.data });
    }),
  delete: procedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => db.post.delete({ where: { id: input.id } })),
});
