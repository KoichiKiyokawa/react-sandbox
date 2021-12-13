import React from "react"
import { StepComponentProps } from "./type"

const Step2 = ({ data, setData, onNext }: StepComponentProps) => {
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

export default React.memo(Step2)
