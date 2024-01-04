import { Kysely } from "kysely";

import { D1Dialect } from "kysely-d1";
import type { DB } from "../../prisma/generated/types";

export const dbClient = (database: D1Database) =>
  new Kysely<DB>({
    dialect: new D1Dialect({ database }),
  });
