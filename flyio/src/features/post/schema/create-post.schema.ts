import { z } from "zod"

export const createPostSchema = z.object({
  title: z.string().min(1).max(32),
  content: z.string().min(1).max(10000),
})
