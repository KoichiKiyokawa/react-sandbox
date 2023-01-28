import { db } from "@/lib/db"
import { Inter } from "@next/font/google"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

const inter = Inter({ subsets: ["latin"] })

export const getServerSideProps = (async () => {
  const posts = await db.post.findMany()

  return {
    props: { posts },
  }
}) satisfies GetServerSideProps

export default function Home({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <pre>{post.content}</pre>
        </div>
      ))}
    </main>
  )
}
