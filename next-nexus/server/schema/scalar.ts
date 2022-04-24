import { scalarType } from "nexus"

export const DateScalar = scalarType({
  name: "Date",
  asNexusMethod: "date",
  description: "Date custom scalar type",
  parseValue(value) {
    return new Date(value as string)
  },
  serialize(value) {
    return (value as Date).toISOString()
  },
})
