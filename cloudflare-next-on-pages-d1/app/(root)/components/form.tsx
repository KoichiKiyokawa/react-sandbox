"use client"

import { FormEventHandler, useTransition } from "react"
import { createUser } from "../../action"

export type FormValue = {
  name: string
}

export const Form = () => {
  const [isPending, startTransition] = useTransition()
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const name = new FormData(e.currentTarget).get("name") as string
    if (!name) {
      alert("name is required")
      return
    }

    startTransition(() => {
      createUser({ name })
    })
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" className="text-black" />
      <button className="border ml-4 disabled:opacity-20" disabled={isPending}>
        submit
      </button>
    </form>
  )
}
