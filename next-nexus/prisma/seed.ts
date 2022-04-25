import { PrismaClient } from "@prisma/client"

const db = new PrismaClient()

async function seed() {
  for (let userIndex = 0; userIndex < 10; userIndex++) {
    const user = await db.user.create({
      data: {
        name: `user${userIndex}`,
        email: `user${userIndex}@example.com`,
        birthday: new Date(2000, 1 - 1, userIndex + 1),
      },
    })

    for (let postIndex = 0; postIndex < 100; postIndex++) {
      await db.post.create({
        data: {
          title: `user${userIndex}-title${postIndex}`,
          body: `user${userIndex}-body${postIndex}`,
          userId: user.id,
        },
      })
    }
  }
}

seed()

export {}
