import { prisma } from "@/lib/prisma";
import { PostForm } from "../../form";
import { notFound } from "next/navigation";
import { updatePost } from "../../action";

export default async function PostEditPage({
  params,
}: {
  params: { id: string };
}) {
  const result = await prisma.post.findUnique({
    where: { id: params.id },
    include: { Comment: true },
  });
  if (result === null) notFound();

  const { Comment: comments, ...post } = result;

  return <PostForm action={updatePost} initialData={{ ...post, comments }} />;
}
