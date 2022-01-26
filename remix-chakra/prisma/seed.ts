import dayjs from "dayjs"
import { db } from "~/utils/db.server"
;(async () => {
  await db.post.deleteMany()
  await db.user.deleteMany()

  for (let i = 0; i <= 10; i++) {
    const user = await db.user.create({
      data: {
        name: `user${i}`,
        birthday: dayjs().subtract(i, "year").toDate(),
      },
    })
    for (let j = 1; j <= 5; j++) {
      await db.post.create({
        data: { title: `title${j}`, body: `body${j}`, userId: user.id },
      })
    }
  }
})()
