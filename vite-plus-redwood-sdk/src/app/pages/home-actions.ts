"use server";

import { eq } from "drizzle-orm";

import { getDb } from "@/db";
import { todos } from "@/db/schema";

const asString = (value: FormDataEntryValue | null) =>
  typeof value === "string" ? value : "";

const asId = (value: FormDataEntryValue | null) => {
  const id = Number(asString(value));
  return Number.isInteger(id) && id > 0 ? id : null;
};

export const createTodo = async (formData: FormData) => {
  const title = asString(formData.get("title")).trim();

  if (!title) {
    return;
  }

  const db = getDb();

  await db.insert(todos).values({
    title,
    completed: false,
    updatedAt: new Date().toISOString(),
  });
};

export const toggleTodo = async (formData: FormData) => {
  const id = asId(formData.get("id"));

  if (!id) {
    return;
  }

  const db = getDb();
  const [todo] = await db.select().from(todos).where(eq(todos.id, id)).limit(1);

  if (!todo) {
    return;
  }

  await db
    .update(todos)
    .set({
      completed: !todo.completed,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(todos.id, id));
};

export const deleteTodo = async (formData: FormData) => {
  const id = asId(formData.get("id"));

  if (!id) {
    return;
  }

  const db = getDb();
  await db.delete(todos).where(eq(todos.id, id));
};
