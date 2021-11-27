import { User } from "@prisma/client"
import {
  DataFunctionArgs,
  LoaderFunction,
  redirect,
} from "@remix-run/server-runtime"
import dayjs from "dayjs"

import { useActionData, useLoaderData } from "remix"
import { ActionData, UserForm } from "~/domains/user/components/UserForm"
import { userSchema } from "~/domains/user/schema"
import { db } from "~/utils/db.server"

export const loader: LoaderFunction = async ({ params }) => {
  const user = await db.user.findUnique({ where: { id: params.id } })
  if (!user) return new Response("not found", { status: 404 })
  return { ...user, birthday: dayjs(user.birthday).format("YYYY-MM-DD") }
}

export async function action({
  params,
  request,
}: DataFunctionArgs): Promise<ActionData | Response> {
  const form = await request.formData()
  const data = Object.fromEntries(form.entries())
  const result = userSchema.safeParse(data)

  if (!result.success)
    return { errors: result.error.issues.map((issue) => issue.message) }

  try {
    await db.user.update({
      where: { id: params.id },
      data: { ...result.data, birthday: new Date(result.data.birthday) },
    })
    return redirect(`/users/${params.id}`)
  } catch {
    return { errors: ["failed to save"] }
  }
}

export default function UserEdit() {
  const user = useLoaderData<User>()
  const actionData = useActionData<ActionData | undefined>()

  return (
    <main>
      <h1>Edit User</h1>
      <UserForm defaultValues={user} actionData={actionData} />
    </main>
  )
}
