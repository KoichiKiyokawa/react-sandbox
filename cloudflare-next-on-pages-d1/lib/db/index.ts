import { drizzle } from "drizzle-orm/d1"

interface Env {
  DB: D1Database
}

declare global {
  const env: Env
}

export const db = drizzle(env.DB)
