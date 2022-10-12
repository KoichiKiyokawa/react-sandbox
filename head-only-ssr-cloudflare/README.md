# head-only-ssr-cloudflare

## Abstract
- Dynamic OGP
- Minimal server load
- Low latency

Example of response,
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
    <script type="module" crossorigin src="/assets/index.08ff9814.js"></script>
    <link rel="stylesheet" href="/assets/index.3fce1f81.css">

    <!-- Injected by server -->
    <meta name="description" content="{dynamic description}" />
    <meta property="og:title" content="{dynamic title}" />
    <meta property="og:description" content="{dynamic description}" />

  </head>
  <body>
    <div id="root"></div>
    
  </body>
</html>

```

## Tech Stack
- Cloudflare Workers
- TypeScript
- React
- Vite