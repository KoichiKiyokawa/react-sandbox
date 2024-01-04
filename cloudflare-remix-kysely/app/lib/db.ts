import Database from "better-sqlite3";
import { Kysely } from "kysely";

import { D1Dialect } from "kysely-d1";
import type { DB } from "../../prisma/generated/types";

export const db = new Kysely<DB>({
  dialect: async () =>
    process.env.NODE_ENV === "development"
      ? new Database("dev.db")
      : new D1Dialect({ database: process.env.DB }),
});
