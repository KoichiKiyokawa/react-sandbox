import { db } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { DrizzleD1Database } from "drizzle-orm/d1"

class UserService {
  constructor(private readonly db: DrizzleD1Database) {}

  findAll() {
    return this.db.select().from(users).all()
  }
}

export const userService = new UserService(db)

export const getUserServiceForTest = (db: DrizzleD1Database) =>
  new UserService(db)
