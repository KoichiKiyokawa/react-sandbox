import { db } from "@/lib/db"
import { PostEditInner } from "./inner"

export default async function PostEdit({
  params: { id },
}: {
  params: { id: string }
}) {
  const post = await db.post.findUnique({ where: { id } })
  if (post === null) return <div>Post not found</div>

  return <PostEditInner post={post} />
}
