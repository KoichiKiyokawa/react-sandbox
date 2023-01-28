import { appRouter } from "@/features/core/core.router"
import bcrypt from "bcryptjs"
import { withTransactionalDB } from "test/utils"

test("login", async () => {
  await withTransactionalDB(async (db) => {
    const fakeNow = new Date(2000, 1, 1)
    const userId = 1
    const email = "user@example.com"
    const password = "password"
    await db.user.create({
      data: {
        id: userId,
        name: "user",
        email,
        passwordHash: await bcrypt.hash(password, 10),
        createdAt: fakeNow,
        updatedAt: fakeNow,
      },
    })
    const setCurrentUserId = vi.fn()
    const result = await appRouter
      .createCaller({ db, getCurrentUserId: vi.fn(), setCurrentUserId })
      .auth.login({ email, password })
    expect(result).toMatchInlineSnapshot(`
      {
        "createdAt": 2000-01-31T15:00:00.000Z,
        "email": "user@example.com",
        "id": 1,
        "name": "user",
        "updatedAt": 2000-01-31T15:00:00.000Z,
      }
    `)
    expect(setCurrentUserId).toHaveBeenCalledWith(userId)
  })
})
