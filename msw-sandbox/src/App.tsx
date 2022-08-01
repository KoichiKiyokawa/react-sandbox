import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const queryClient = new QueryClient()
  const pagePathToModules = import.meta.glob("./**/pages/*.tsx", {})

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {Object.entries(pagePathToModules).map(([_path, mod]: any) => {
            const path = _path
              .replace(/^.*?pages/, "")
              .replace(/\[(.+)\]/, ":$1")
              .replace(/(index)?.tsx/, "")
            const PageComponent = lazy(mod)
            return (
              <Route
                key={path}
                path={path}
                element={
                  <Suspense fallback={<span>Loading...</span>}>
                    <PageComponent />
                  </Suspense>
                }
              />
            )
          })}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
