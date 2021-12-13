import React from "react"
import { StepComponentProps } from "./type"

export const Step1 = ({ data, setData, onNext }: StepComponentProps) => {
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
        step1
        <input
          name="step1"
          defaultValue={data.step1}
          onChange={handleFormChange}
        />
      </label>
      <button>next</button>
    </form>
  )
}
