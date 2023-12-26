"use client";

import useSWR from "swr";

export default function Home() {
  const { data: users } = useSWR("/api/users", (key) =>
    fetch(key).then((r) => r.json() as Promise<User[]>)
  );

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
