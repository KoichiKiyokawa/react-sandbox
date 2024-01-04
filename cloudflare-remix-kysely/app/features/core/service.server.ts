import { AppLoadContext } from "@remix-run/cloudflare";
import { dbClient } from "~/lib/db.server";

export class BaseService {
  dbClient: ReturnType<typeof dbClient>;

  constructor(context: AppLoadContext) {
    this.dbClient = dbClient(context.env.DB);
  }
}
