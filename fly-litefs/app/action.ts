"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createPostAction(formData: FormData) {
  const title = formData.get("title") as string
  const content = formData.get("content") as string
  await db.post.create({ data: { title, content } })
  revalidatePath("/")
}
