import { drizzle } from "drizzle-orm/d1"
import Database from "better-sqlite3"
import { drizzle as drizzleDev } from "drizzle-orm/better-sqlite3"

export const db =
  process.env.NODE_ENV === "development"
    ? drizzleDev(new Database("dev.db"))
    : drizzle(process.env.DB)

export type DB = typeof db
