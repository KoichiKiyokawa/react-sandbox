import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import bcrypt from "bcryptjs";

const db = new PrismaClient();

async function seed() {
  await Promise.all(
    Array.from({ length: 10 }, (_, i) =>
      db.user.create({
        data: {
          name: `User ${i}`,
          email: `user${i}@example.com`,
          passwordHash: bcrypt.hashSync("password"),
          birthday: dayjs().subtract(i, "day").toDate(),
        },
      })
    )
  );
}

seed();
