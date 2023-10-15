"use server";

import { db } from "@/lib/db";
import { userKey } from "./helper";
import { revalidatePath } from "next/cache";

export async function updateUser(formData: FormData) {
  const { id, ...data } = Object.fromEntries(formData.entries());
  console.log({ id, data });
  await db.user.update({ data, where: { id: id as string } });
  revalidatePath("/");
}

export async function deleteUser(formData: FormData) {
  const id = formData.get(userKey("id"));
  if (id === null) throw Error();

  await db.user.delete({ where: { id: id as string } });
  revalidatePath("/");
}
