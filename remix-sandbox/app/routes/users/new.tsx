import { User } from "@prisma/client"
import { DataFunctionArgs, redirect } from "@remix-run/server-runtime"
import { FormEvent, useState } from "react"
import { useActionData, useParams, useNavigate, useSubmit } from "remix"
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
  const [data, setData] = useState<User | null>(null)
  const [mode, setMode] = useState<"create" | "confirm">("create")
  const submit = useSubmit()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setData(Object.fromEntries(formData.entries()) as any)
    setMode("confirm")
  }
  const onConfirm = () => {
    if (data === null) return

    const form = new FormData()
    for (const [key, value] of Object.entries(data)) {
      form.append(key, String(value))
    }
    submit(form, { method: "post" })
  }

  return (
    <main>
      {mode === "create" ? (
        <UserForm actionData={actionData} onSubmit={onSubmit} />
      ) : (
        // 確認画面
        <div>
          <p>name: {data?.name}</p>
          <p>email: {data?.email}</p>
          <p>birthday: {data?.birthday}</p>

          <button onClick={onConfirm}>confirm</button>
        </div>
      )}
    </main>
  )
}
