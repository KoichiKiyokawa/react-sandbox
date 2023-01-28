import { userNameSchema } from "@/features/user/schemas/user-name.schema"
import { z } from "zod"
import { loginSchema } from "./login.schema"

export const signUpSchema = loginSchema.merge(
  z.object({
    name: userNameSchema,
  })
)
