# Todo App with RedwoodSDK

RedwoodSDK アプリです。`vite-plus` も導入済みで、スタイルは Tailwind CSS、ORM は Drizzle、DB は SQLite ベースの Cloudflare D1 を使っています。

## Setup

```bash
pnpm install
pnpm db:migrate:local
pnpm dev
```

## Scripts

```bash
pnpm dev
pnpm check
pnpm db:generate
pnpm db:migrate:local
pnpm db:migrate:remote
```

## Notes

- `wrangler.jsonc` の `database_id` はプレースホルダーです。Cloudflare に本番用 D1 を作成したら置き換えてください。
- ローカル開発は `pnpm db:migrate:local` で `.wrangler` 配下のローカル SQLite に migration を適用できます。
- `vite-plus@0.1.12` は現時点では RedwoodSDK 1.0.2 の標準 build/dev と互換が崩れるため、通常運用は `pnpm dev` / `pnpm build` を使い、検証用に `pnpm vp:dev` / `pnpm vp:build` を残しています。
