import { DB, db } from "@/db"
import { users } from "@/db/schema/user"
import { InferModel } from "drizzle-orm"

class UserService {
  constructor(private readonly db: DB) {}

  findAll() {
    return this.db.select().from(users).all()
  }

  create(data: InferModel<typeof users>) {
    return this.db.insert(users).values(data)
  }
}

export const userService = new UserService(db)

export const getUserServiceForTest = (db: DB) => new UserService(db)
