import { User } from "./type";

const inMemoryDB: User[] = [
  { id: "1", name: "user1", email: "user1@example.com" },
  { id: "2", name: "user2", email: "user2@example.com" },
];

export async function findAll(): Promise<User[]> {
  return structuredClone(inMemoryDB);
}

export async function find(id: string) {
  const users = await findAll();
  return users.find((user) => user.id === id);
}

export async function create(data: Omit<User, "id">) {
  inMemoryDB.push({ ...data, id: String(inMemoryDB.length + 1) });
}
