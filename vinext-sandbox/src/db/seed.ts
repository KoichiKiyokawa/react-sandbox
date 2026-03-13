import { config } from "dotenv";

config({ path: ".env.local" });

const { db } = await import("./index.js");
const { accounts, posts } = await import("./schema.js");

console.log("Seeding database...");

await db.delete(posts);
await db.delete(accounts);

const insertedAccounts = await db
  .insert(accounts)
  .values([
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
  ])
  .returning();

const [alice, bob] = insertedAccounts;

await db.insert(posts).values([
  {
    accountId: alice.id,
    title: "Aliceの最初の投稿",
    body: "こんにちは！Aliceです。初めての投稿です。",
  },
  {
    accountId: alice.id,
    title: "Drizzle ORMが便利すぎる",
    body: "Drizzle ORMを使ってみたら型安全でとても使いやすかったです。",
  },
  {
    accountId: alice.id,
    title: "Tursoでエッジデータベース",
    body: "TursoはエッジでSQLiteを使えるサービスです。Cloudflare Workersとの相性も抜群。",
  },
  {
    accountId: bob.id,
    title: "Bobのデビュー投稿",
    body: "はじめまして、Bobです。よろしくお願いします！",
  },
  {
    accountId: bob.id,
    title: "Next.jsとCloudflare Workersの組み合わせ",
    body: "vinextを使うとNext.jsアプリをCloudflare Workersにデプロイできて面白いですね。",
  },
]);

console.log("Seeding complete!");
process.exit(0);
