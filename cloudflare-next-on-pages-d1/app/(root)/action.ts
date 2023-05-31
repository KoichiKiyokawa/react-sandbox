"use server"

import { userService } from "@/features/user/service"
import { revalidatePath } from "next/cache"

const onSuccess = () => revalidatePath("/")

export async function createUser(
  data: Parameters<typeof userService.create>[0]
) {
  await userService.create(data)
  onSuccess()
}

export async function deleteUser(id: string) {
  await userService.delete(id)
  onSuccess()
}
