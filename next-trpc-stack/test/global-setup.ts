import { execSync } from "child_process"

export async function setup() {
  process.env.TZ = "Asia/Tokyo"
  process.env.DATABASE_URL =
    "postgresql://postgres:postgres@localhost:5432/test"

  execSync("pnpm prisma migrate reset --force")
  execSync("pnpm prisma db push")
}
