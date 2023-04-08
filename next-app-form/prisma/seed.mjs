import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

for (let i = 1; i <= 10; i++) {
  await db.post.create({
    data: { title: `Post ${i}`, content: `Content ${i}` },
  })
}
