import { config } from "dotenv";
import type { Config } from "drizzle-kit";

config({ path: ".env.local" });

const url = process.env.TURSO_DATABASE_URL;
if (!url) throw new Error("TURSO_DATABASE_URL is not set");
const authToken = process.env.TURSO_AUTH_TOKEN;
const isLocal = url.startsWith("file:");

export default (isLocal
  ? {
      dialect: "sqlite",
      schema: "./src/db/schema.ts",
      out: "./drizzle",
      dbCredentials: { url },
    }
  : {
      dialect: "turso",
      schema: "./src/db/schema.ts",
      out: "./drizzle",
      dbCredentials: { url, authToken },
    }) satisfies Config;
