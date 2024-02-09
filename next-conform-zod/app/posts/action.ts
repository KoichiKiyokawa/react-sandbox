"use server";

import { prisma } from "@/lib/prisma";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";
import { createPostSchema, updatePostSchema } from "./schema";

export async function createPost(_prev: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: createPostSchema });
  if (submission.status !== "success") {
    return submission.reply();
  }

  const { comments, ...post } = submission.value;
  await prisma.post.create({
    data: {
      ...post,
      Comment: { create: comments },
    },
  });

  redirect("/posts");
}
export async function updatePost(_prev: unknown, formData: FormData) {
  const submission = parseWithZod(formData, { schema: updatePostSchema });
  if (submission.status !== "success") {
    return submission.reply();
  }

  const { comments, ...post } = submission.value;

  const existingComments = await prisma.comment.findMany({
    where: { postId: post.id },
  });
  const creatingComments = comments.filter(
    (comment) => comment.id === undefined
  );
  const updatingComments = comments.filter(
    (comment) => comment.id !== undefined
  );
  const deletingComments = existingComments.filter((comment) =>
    comments.every((c) => c.id !== comment.id)
  );

  await prisma.$transaction([
    prisma.post.update({
      where: { id: post.id },
      data: post,
    }),
    ...creatingComments.map((comment) =>
      prisma.comment.create({
        data: { ...comment, postId: post.id },
      })
    ),
    ...updatingComments.map((comment) =>
      prisma.comment.update({ where: { id: comment.id }, data: comment })
    ),
    ...deletingComments.map((comment) =>
      prisma.comment.delete({ where: { id: comment.id } })
    ),
  ]);

  redirect("/posts");
}
