import { redirect } from "next/navigation"
import { EventHandler, FormEvent } from "react"
import { db } from "../../lib/db"

type Form = {
  name: string
  email: string
}

// TODO: mutating RFC has not been published
// cf) https://beta.nextjs.org/docs/data-fetching/mutating
export default async function NewUserPage() {
  const handleSubmit: EventHandler<FormEvent> = async (e) => {
    e.preventDefault()
    const form = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(form.entries()) as Form

    await db.user.create({ data })
    redirect("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        name
        <input name="name" />
      </label>

      <label>
        email
        <input name="email" />
      </label>
      <button>submit</button>
    </form>
  )
}
