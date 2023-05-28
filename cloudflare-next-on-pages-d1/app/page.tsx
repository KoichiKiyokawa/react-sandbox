import { userService } from "@/features/user/service"

export default async function Home() {
  const users = await userService.findAll()

  return <pre>{JSON.stringify(users, null, 2)}</pre>
}
