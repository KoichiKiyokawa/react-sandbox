---
to: src/domains/<%= domain %>/components/<%= h.capitalize(name) %>/<%= h.capitalize(name) %>.stories.tsx
---
import { ComponentMeta } from "@storybook/react"
import { <%= h.capitalize(name) %> } from "."

export default {
  component: <%= h.capitalize(name) %>,
} as ComponentMeta<typeof <%= h.capitalize(name) %>>
