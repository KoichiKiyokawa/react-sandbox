import { z } from "zod";

const commentFormSchema = z.object({
  id: z.string().uuid().optional(), // newとeditの両方に対応するためoptionalにする
  text: z.string().min(1).max(100),
});

export const postFormSchema = z.object({
  id: z.string().uuid().optional(),
  title: z
    .string({ required_error: "タイトルを入力してください" })
    .min(3, { message: "タイトルは3文字以上で入力してください" })
    .max(100, { message: "タイトルは100文字以下で入力してください" }),
  body: z.string().min(1).max(4000),
  comments: z.array(commentFormSchema),
});

export const createPostSchema = postFormSchema;

export const updatePostSchema = postFormSchema.extend({
  id: z.string().uuid(),
});
