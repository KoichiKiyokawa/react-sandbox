"use client"

import { useRef } from "react"
import { createPostAction } from "../action"

export function Form() {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <form
      ref={ref}
      action={async () => {
        if (ref.current === null) return

        await createPostAction(new FormData(ref.current))
        ref.current.reset()
      }}
    >
      <label className="block">
        title
        <input name="title" className="text-black"></input>
      </label>

      <label className="block mt-4">
        content
        <input name="content" className="text-black"></input>
      </label>
      <button className="border p-2">submit</button>
    </form>
  )
}
