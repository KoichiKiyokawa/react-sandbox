import { Suspense } from "react"

export const withFullPageLoading = (Component: () => JSX.Element) => {
  const WithFullPageLoadingComponent = () => (
    <Suspense fallback={<span>Loading...</span>}>
      <Component />
    </Suspense>
  )

  return WithFullPageLoadingComponent
}
