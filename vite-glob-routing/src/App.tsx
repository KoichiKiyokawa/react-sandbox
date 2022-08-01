import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const pagePathToModules = import.meta.glob("./**/pages/**/*.tsx", {})

  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(pagePathToModules).map(([_path, mod]: any) => {
          const path = _path
            .replace(/^.*pages(.*?)(index)?\.tsx$/, "$1") // e.g. "./pages/foo/bar/[id].tsx" -> "foo/bar/[id]"
            .replace(/\[(.+)\]/, ":$1") // e.g. "foo/bar/[id]" -> "foo/bar/:id"
          const PageComponent = lazy(mod)

          console.log({ _path, path })
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
  )
}

export default App
