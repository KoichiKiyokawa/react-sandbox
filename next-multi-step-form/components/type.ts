import { Dispatch, SetStateAction } from "react"

export type Data = { step1: string; step2: string }

export type StepComponentProps = {
  data: Data
  setData: Dispatch<SetStateAction<Data>>
  onNext: () => void
}
