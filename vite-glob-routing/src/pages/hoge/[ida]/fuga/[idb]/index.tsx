import { useParams } from "react-router-dom"

const DoubleDynamic = () => {
  const { ida, idb } = useParams()

  return (
    <div>
      DoubleDynamic {ida} {idb}
    </div>
  )
}

export default DoubleDynamic
