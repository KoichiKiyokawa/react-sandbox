import { db } from "src/utils/db.server"
import { toRange } from "rhodash"

async function reset() {
  await db.comment.deleteMany()
  await db.post.deleteMany()
}

async function seed() {
  for (let i = 1; i <= 10; i++) {
    await db.post.create({
      data: {
        title: `title${i}`,
        body: `body${i}`,
        comments: {
          create: toRange(1, 10).map((j) => ({
            text: `post-${i}-comment-${j}`,
          })),
        },
      },
    })
  }
}

;(async () => {
  await reset()
  await seed()
})()
