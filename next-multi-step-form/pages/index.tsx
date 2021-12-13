import { useEffect, useState } from "react"
import { Confirmation } from "../components/Confirmation"
import { Step1 } from "../components/Step1"
import { Step2 } from "../components/Step2"
import { useRouter } from "next/router"
import { Data } from "../components/type"

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState({} as Data)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const stepComponents = [Step1, Step2, Confirmation]
  const CurrentStepComponent = stepComponents[currentStepIndex]

  useEffect(() => {
    setCurrentStepIndex(Number(router.query.step ?? 0))
  }, [router.query.step])

  const goBack = () => {
    setCurrentStepIndex(currentStepIndex - 1)
    router.push("?step=" + (currentStepIndex - 1))
  }

  const onNext = () => {
    if (currentStepIndex + 1 <= stepComponents.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
      router.push("?step=" + (currentStepIndex + 1))
    }
  }

  return (
    <>
      {currentStepIndex > 0 && <button onClick={goBack}>prev</button>}
      <CurrentStepComponent data={data} setData={setData} onNext={onNext} />
    </>
  )
}
