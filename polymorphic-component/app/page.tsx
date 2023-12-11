"use client"

import RenderButton from "@/components/render/button"
import AsChildButton from "@/components/as-child/button"
import { useEffect, useRef } from "react"

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    buttonRef.current?.focus()
  }, [])

  return (
    <div>
      {/* invalid: a should not be in a button tag */}
      <button>
        <a href="https://example.com">a</a>
      </button>
      <RenderButton ref={buttonRef}>hoge</RenderButton>
      <AsChildButton disabled>as child</AsChildButton>
      <AsChildButton asChild disabled>
        <a href="https://example.com">as child</a>
      </AsChildButton>
    </div>
  )
}
