import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/d1"

// if (process.env.NODE_ENV === "development") {
//   process.env.DB = new Database("dev.db") as unknown as D1Database
// }

export const db = drizzle(process.env.DB)

export type DB = typeof db
