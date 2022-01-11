import { db } from "src/utils/db.server"

async function reset() {
  await db.post.deleteMany()
}

async function seed() {
  for (let i = 1; i <= 10; i++) {
    await db.post.create({ data: { title: `title${i}`, body: `body${i}` } })
  }
}

;(async () => {
  await reset()
  await seed()
})()
