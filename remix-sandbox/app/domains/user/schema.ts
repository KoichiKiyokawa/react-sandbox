import { User } from "@prisma/client";
import dayjs from "dayjs";
import { z, ZodSchema } from "zod";

export const userSchema: ZodSchema<
  Omit<User, "id" | "createdAt" | "updatedAt" | "birthday" | "likes"> & {
    birthday: string;
  }
> = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  birthday: z
    .string({ required_error: "誕生日は必須です" })
    .refine((date) => dayjs(date).isValid(), {
      message: "invalid date format",
    }),
});
