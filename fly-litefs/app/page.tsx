import { db } from "@/lib/db"
import Image from "next/image"
import bigImage from "@/public/big.jpg"
import { cookies } from "next/headers"

export default async function Home() {
  cookies() // to disable static render
  const posts = await db.post.findMany()

  return (
    <div>
      <Image src={bigImage} alt="wallpaper" placeholder="blur" />
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}
