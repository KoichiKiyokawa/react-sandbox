import { db } from "../lib/db"

async function seed() {
  for (let i = 1; i <= 10; i++) {
    const name = `user${i}`
    await db.user.create({ data: { email: `${name}@example.com`, name } })
  }
}

seed()
