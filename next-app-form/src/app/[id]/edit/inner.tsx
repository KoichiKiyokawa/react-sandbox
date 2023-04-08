"use client"

import { Post } from "@prisma/client"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function PostEditInner({ post }: { post: Post }) {
  const [form, setForm] = useState(post)
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const router = useRouter()
  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify(form),
    })

    router.refresh()
    router.push(`/${post.id}`)
  }

  return (
    <form onSubmit={onSubmit} className="container mx-auto mt-4">
      <label className="block">
        Title
        <input
          name="title"
          onChange={handleFormChange}
          defaultValue={post.title}
          className="block border mt-1 px-2 w-full"
        />
      </label>

      <label className="block mt-4">
        Content
        <textarea
          name="content"
          onChange={handleFormChange}
          defaultValue={post.content}
          className="block border mt-1 px-2 w-full h-[20vh]"
        />
      </label>

      <button className="px-4 py-2 mt-4 text-white bg-blue-500">submit</button>
    </form>
  )
}
