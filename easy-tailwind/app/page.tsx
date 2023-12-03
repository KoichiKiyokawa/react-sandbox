import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Title } from "@/components/Title";
import { etw } from "easy-tailwind";
import Link from "next/link";

export default function Home() {
  return (
    <div className={etw("grid gap-4 max-w-xs mx-4 mt-4")}>
      <Title level={2}>button</Title>
      <Button variant="primary">primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="primary" disabled>
        primary
      </Button>

      <Title level={3}>style override</Title>
      <Button variant="primary" className="bg-red-400">
        button
      </Button>

      <Button variant="primary" asChild>
        <Link href="/hoge">hoge</Link>
      </Button>
      <Button variant="primary" disabled asChild>
        <Link href="/hoge">hoge</Link>
      </Button>

      <Title level={2}>input</Title>
      <Input />
      <Input asChild hasError>
        <div className="flex space-x-2 max-w-min">
          <input className="w-[4rem]" />
          <span>/</span>
          <input className="w-[2rem]" />
          <span>/</span>
          <input className="w-[2rem]" />
        </div>
      </Input>
    </div>
  );
}
