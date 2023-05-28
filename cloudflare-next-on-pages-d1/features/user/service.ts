import { DB, db } from "@/db"
import { users } from "@/db/schema/user"
import { InferModel, eq } from "drizzle-orm"

class UserService {
  constructor(private readonly db: DB) {}

  findAll() {
    return this.db.select().from(users).all()
  }

  create(data: Omit<InferModel<typeof users>, "id">) {
    return this.db
      .insert(users)
      .values({ ...data, id: crypto.randomUUID() })
      .run()
  }

  delete(id: string) {
    return this.db.delete(users).where(eq(users.id, id)).run()
  }
}

export const userService = new UserService(db)

export const getUserServiceForTest = (db: DB) => new UserService(db)
