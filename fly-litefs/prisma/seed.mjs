import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

for (let i = 0; i < 10; i++) {
  await prisma.post.create({
    data: { title: `Post ${i}`, content: `Content ${i}` },
  })
}
