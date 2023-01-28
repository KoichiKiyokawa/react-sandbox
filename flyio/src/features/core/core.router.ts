import { procedure, router } from "@/lib/trpc/server"
import { postRouter } from "@/features/post/post.router"

export const appRouter = router({
  healthcheck: procedure.query(() => "yay!"),

  post: postRouter,
})

export type AppRouter = typeof appRouter
