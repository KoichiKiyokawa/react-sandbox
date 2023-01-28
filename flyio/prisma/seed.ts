import { db } from "@/lib/db"
import { execSync } from "child_process"

export async function seed() {
  if (process.argv.includes("--reset")) {
    execSync("pnpm prisma migrate reset --force")
    execSync("pnpm prisma db push")
  }

  for (let i = 0; i < 10; i++) {
    const user = await db.user.create({
      data: { name: `user${i}`, email: `user${i}@example.com` },
    })
    for (let j = 0; j < 10; j++) {
      await db.post.create({
        data: {
          title: `post${i}-${j}`,
          content: `post${i}-${j}`,
          authorId: user.id,
        },
      })
    }
  }
}

seed()
