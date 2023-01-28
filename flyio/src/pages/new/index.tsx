import { Post } from "@prisma/client"
import { useForm } from "react-hook-form"

export type FormProps = Pick<Post, "title" | "content">

export default function CreatePage() {
  const { register, handleSubmit, formState } = useForm<FormProps>()
  const onSubmit = handleSubmit(async (data) => {
    await fetch("/api/posts", { method: "post", body: JSON.stringify(data) })
  })

  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>title</span>
        <input {...register("title")} />
      </label>

      <label>
        <span>content</span>
        <textarea {...register("content")} />
      </label>

      <button disabled={formState.isSubmitting}>submit</button>
    </form>
  )
}
