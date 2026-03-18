import { desc } from "drizzle-orm";

import { getDb } from "@/db";
import { todos } from "@/db/schema";

import { HomeClient } from "./home-client";

export const Home = async () => {
  const db = getDb();
  const items = await db.select().from(todos).orderBy(desc(todos.id));
  const completedCount = items.filter((todo) => todo.completed).length;

  return <HomeClient items={items} completedCount={completedCount} />;
};
