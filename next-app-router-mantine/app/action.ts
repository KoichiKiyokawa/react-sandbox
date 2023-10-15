"use server";

import { db } from "@/lib/db";
import { userKey } from "./helper";
import { revalidatePath } from "next/cache";
import { flash } from "@/components/FlashNotification";
import { redirect } from "next/navigation";

export async function updateUser(formData: FormData) {
  const { id, ...data } = Object.fromEntries(formData.entries());
  await db.user.update({ data, where: { id: id as string } });
  revalidatePath("/");
}

export async function deleteUser(formData: FormData) {
  const id = formData.get(userKey("id"));
  if (id === null) throw Error();

  await db.user.delete({ where: { id: id as string } });
  revalidatePath("/");
}

export async function createUser(formData: FormData) {
  const name = formData.get(userKey("name")) as string;
  if (!name) return { error: { name: "Name is required" } };

  await db.user.create({ data: { name } });

  flash.set({ type: "success", title: "success", message: "User created!" });
  redirect("/");
}
