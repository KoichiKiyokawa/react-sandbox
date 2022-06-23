import { ButtonHTMLAttributes, ReactNode } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary"
  children?: ReactNode
}

export const Hoge = ({ children, ...props }: Props) => {
  return <button {...props}>{children}</button>
}
