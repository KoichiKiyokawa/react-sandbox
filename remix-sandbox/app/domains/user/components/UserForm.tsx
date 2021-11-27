import { zodResolver } from "@hookform/resolvers/zod"
import { User } from "@prisma/client"
import { useForm } from "react-hook-form"
import { userSchema } from "../schema"

export type ActionData = { errors: string[] }

export function UserForm({
  actionData,
  defaultValues,
}: {
  actionData?: ActionData
  defaultValues?: User
}) {
  const {
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<User>({
    defaultValues,
    resolver: zodResolver(userSchema),
    mode: "onTouched",
  })

  return (
    <form method="post">
      <label>
        name: <input {...register("name")} />
      </label>
      {errors.name && <p>{errors.name.message}</p>}
      <label>
        email: <input type="email" {...register("email")} />
      </label>
      {errors.email && <p>{errors.email.message}</p>}

      <label>
        birthday: <input type="date" {...register("birthday")} />
      </label>
      {errors.birthday && <p>{errors.birthday.message}</p>}

      <button disabled={isSubmitting || !isValid}>submit</button>

      <ul>
        {actionData?.errors.map((message, i) =>
          message ? <li key={i}>{message}</li> : null
        )}
      </ul>
    </form>
  )
}
