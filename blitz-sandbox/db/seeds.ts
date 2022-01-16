// import db from "./index"

import db from "db"
import { SecurePassword } from "blitz"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  await db.post.deleteMany()
  await db.user.deleteMany()

  // user
  for (let i = 0; i < 10; i++) {
    const createdUser = await db.user.create({
      data: {
        email: `user${i}@example.com`,
        name: `user${i}`,
        hashedPassword: await SecurePassword.hash("password"),
      },
    })
    // post
    for (let p = 0; p < 10; p++) {
      await db.post.create({
        data: { title: `user${i}-title${p}`, body: `user${i}-body${p}`, userId: createdUser.id },
      })
    }
  }
}

export default seed
