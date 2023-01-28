import { signUpSchema } from "@/features/auth/schemas/sign-up.schema"
import { trpc } from "@/lib/trpc/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, PasswordInput, TextInput } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import type { z } from "zod"

export default function SignUp() {
  const router = useRouter()
  const mutation = trpc.auth.signUp.useMutation()
  const { register, formState, handleSubmit } = useForm<
    z.infer<typeof signUpSchema>
  >({
    resolver: zodResolver(signUpSchema),
  })
  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data, {
      onSuccess: () => {
        router.push("/")
      },
      onError: (err) => {
        alert(err.message)
      },
    })
  })

  return (
    <form onSubmit={onSubmit}>
      <TextInput label="user name" {...register("name")}></TextInput>
      <TextInput label="email" type="email" {...register("email")}></TextInput>
      <PasswordInput label="password" {...register("password")} />

      <Button type="submit" disabled={formState.isSubmitting}>
        Login
      </Button>

      <Link href="/login">Login</Link>
    </form>
  )
}
