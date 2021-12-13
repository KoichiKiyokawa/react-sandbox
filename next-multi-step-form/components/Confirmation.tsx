import { Data } from "./type"

export const Confirmation = ({ data }: { data: Data }) => (
  <div>
    <h1>confirmation</h1>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
)
