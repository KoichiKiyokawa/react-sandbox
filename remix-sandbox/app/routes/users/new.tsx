import { DataFunctionArgs, redirect } from "@remix-run/server-runtime"
import { useActionData } from "remix"
import { ActionData, UserForm } from "~/domains/user/components/UserForm"
import { userSchema } from "~/domains/user/schema"
import { db } from "~/utils/db.server"

export async function action({
  request,
}: DataFunctionArgs): Promise<ActionData | Response> {
  const form = await request.formData()
  const data = Object.fromEntries(form.entries())
  const result = userSchema.safeParse(data)
  if (!result.success)
    return { errors: result.error.issues.map((issue) => issue.message) }

  try {
    await db.user.create({
      data: { ...result.data, birthday: new Date(result.data.birthday) },
    })
    return redirect("/users")
  } catch (err) {
    console.error(err)
    return { errors: ["failed to create"] }
  }
}

export default function UserNew() {
  const actionData = useActionData()
  return (
    <main>
      <UserForm actionData={actionData} />
    </main>
  )
}
