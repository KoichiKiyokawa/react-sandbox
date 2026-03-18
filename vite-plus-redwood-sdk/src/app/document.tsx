import appStyles from "./app.css?url";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <html lang="ja">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="RedwoodSDK, Drizzle, and SQLite powered todo app."
      />
      <title>Todo Flow</title>
      <link rel="stylesheet" href={appStyles} />
      <link rel="modulepreload" href="/src/client.tsx" />
    </head>
    <body className="min-h-screen bg-stone-100 text-stone-900 antialiased">
      {children}
      <script>import("/src/client.tsx")</script>
    </body>
  </html>
);
