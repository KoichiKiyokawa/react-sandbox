"use client";

import { Counter } from "@/components/ui/counter";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>this is top page</h1>
      <Counter />
      <Link href="/hoge">hoge</Link>
      <Link href="/about">about</Link>
    </div>
  );
}
