import { db } from "@/lib/db"
import Link from "next/link"

export default async function PostShow({
  params: { id },
}: {
  params: { id: string }
}) {
  const post = await db.post.findUnique({ where: { id } })

  if (post === null) return <div>Post not found</div>

  return (
    <div className="container mx-auto mt-4">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href={`/${id}/edit`} className="underline text-blue-500">
        edit
      </Link>
    </div>
  )
}
