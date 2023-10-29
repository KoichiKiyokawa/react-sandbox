"use client";

import RenderButton from "@/components/render/button";
import { useEffect, useRef } from "react";

export default function Home() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    buttonRef.current?.focus();
  }, []);

  return <RenderButton ref={buttonRef}>hoge</RenderButton>;
}
