import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

for (let i = 1; i <= 10; i++) {
  await db.user.create({ data: { name: `User ${i}` } });
}
