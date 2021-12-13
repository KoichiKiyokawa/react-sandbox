import React from "react"
import { StepComponentProps } from "./type"

const Step1 = ({ data, setData, onNext }: StepComponentProps) => {
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNext()
  }

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

export default React.memo(Step1)
