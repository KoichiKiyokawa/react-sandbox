import { db } from "@/lib/db"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

const omitPostContent = (content: string) =>
  content.length <= 10 ? content : `${content.slice(0, 10)}...`

export default async function Home() {
  const posts = await db.post.findMany()

  return (
    <div className="container mx-auto mt-4 space-y-4">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/${post.id}`}
          className="block border p-4 shadow-lg"
        >
          <h1>{post.title}</h1>
          <p>{omitPostContent(post.content)}</p>
        </Link>
      ))}
    </div>
  )
}
