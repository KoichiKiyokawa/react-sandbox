import { useCallback, useEffect, useMemo, useState } from "react"
import { Confirmation } from "../components/Confirmation"
import Step1 from "../components/Step1"
import Step2 from "../components/Step2"
import { useRouter } from "next/router"
import { Data } from "../components/type"

const stepComponents = [Step1, Step2, Confirmation]

export default function Home() {
  const router = useRouter()
  const [data, setData] = useState({} as Data)
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const CurrentStepComponent = useMemo(
    () => stepComponents[currentStepIndex],
    [currentStepIndex]
  )

  useEffect(() => {
    const stepQuery = Number(router.query.step ?? 0)
    if (Object.keys(data).length === 0 && stepQuery > 0) {
      router.push("?step=0")
    } else {
      setCurrentStepIndex(stepQuery)
    }
  }, [data, router])

  const goBack = useCallback(() => {
    setCurrentStepIndex(currentStepIndex - 1)
    router.push("?step=" + (currentStepIndex - 1))
  }, [currentStepIndex, router])

  const onNext = useCallback(() => {
    if (currentStepIndex + 1 <= stepComponents.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
      router.push("?step=" + (currentStepIndex + 1))
    }
  }, [currentStepIndex, router])

  return (
    <>
      {currentStepIndex > 0 && <button onClick={goBack}>prev</button>}
      <CurrentStepComponent data={data} setData={setData} onNext={onNext} />
    </>
  )
}
