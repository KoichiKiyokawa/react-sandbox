"use client";

import { Counter } from "@/components/ui/counter";
import Link from "next/link";

export default function HogePage() {
  return (
    <div>
      <h1>this is hoge page</h1>
      <Counter />
      <Link href="/">home</Link>
    </div>
  );
}
