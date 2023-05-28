import { userService } from "@/features/user/service"
import { DeleteButton } from "./components/delete-button"
import { Form } from "./components/form"

export default async function Home() {
  const users = await userService.findAll()

  return (
    <div>
      <Form />

      {users.map((user) => (
        <div key={user.id} className="p-2 border space-y-2">
          <p>{user.id}</p>
          <p>{user.name}</p>
          <DeleteButton userId={user.id} />
        </div>
      ))}
    </div>
  )
}
