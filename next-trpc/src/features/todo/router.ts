import { createRouter } from "@/lib/trpc.server";
import { z } from "zod";

export const todoRouter = createRouter()
  .query("todos", {
    resolve({ ctx }) {
      return ctx.db.todo.findMany();
    },
  })
  .mutation("createTodo", {
    input: z.object({
      title: z.string().max(32),
      userId: z.string(),
    }),
    resolve({ ctx, input }) {
      return ctx.db.todo.create({
        data: { ...input, completed: false },
      });
    },
  });
