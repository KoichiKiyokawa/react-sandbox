import { userService } from "@/features/user/service"
import { Form } from "./components/form"
import { revalidatePath } from "next/cache"

export default async function Home() {
  const users = await userService.findAll()

  const action = async ({ name }: { name: string }) => {
    "use server"

    await userService.create({ name })
    revalidatePath("/")
  }

  return (
    <div>
      <Form action={action} />

      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  )
}
