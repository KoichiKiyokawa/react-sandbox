import React from "react"
import { StepComponentProps } from "./type"

export const Step2 = ({ data, setData, onNext }: StepComponentProps) => {
  const [form, setForm] = React.useState(data)
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNext()
  }

  React.useEffect(() => {
    return () => {
      console.log(form)
      setData((prev) => ({ ...prev, ...form }))
    }
  }, [form, setData])

  return (
    <form onSubmit={onSubmit}>
      <label>
        step2
        <input
          name="step2"
          defaultValue={data.step2}
          onChange={handleFormChange}
        />
      </label>
      <button>next</button>
    </form>
  )
}
