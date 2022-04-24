import { PrismaClient } from "@prisma/client"

const db = new PrismaClient({ log: ["query", "info", "warn", "error"] })

export interface Context {
  db: PrismaClient
}

export const context = { db }
