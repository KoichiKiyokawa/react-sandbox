"use client"

export type FormValue = {
  name: string
}

export const Form = ({
  action,
}: {
  action: (v: FormValue) => Promise<void>
}) => {
  return (
    <form
      action={async (formData) => {
        const name = formData.get("name") as string | null
        if (name === null) throw new Error("name is null")

        await action({ name })
        document.forms[0].reset()
      }}
    >
      <input type="text" name="name" className="text-black" />
      <button className="border ml-4">submit</button>
    </form>
  )
}
