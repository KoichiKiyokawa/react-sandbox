import { useEffect, useState } from "react"
import { queryStringDetector } from "typesafe-i18n/detectors"
import TypesafeI18n, { useI18nContext } from "./i18n/i18n-react"
import { Locales } from "./i18n/i18n-types"
import { detectLocale } from "./i18n/i18n-util"
import { loadLocaleAsync } from "./i18n/i18n-util.async"

const locales: Locales[] = ["en", "de", "ja"]

function Component() {
  const { LL, locale } = useI18nContext()
  console.log({ locale })

  return (
    <div>
      <div>{LL.HI({ name: "hoge" })}</div>

      <p>switch language</p>
      <ul>
        {locales.map((locale) => (
          <li key={locale}>
            <a href={`?lang=${locale}`}>{locale}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const detectedLocale = detectLocale(queryStringDetector)

function App() {
  const [wasLoaded, setWasLoaded] = useState(false)

  useEffect(() => {
    loadLocaleAsync(detectedLocale).then(() => setWasLoaded(true))
  }, [])

  if (!wasLoaded) return null

  return (
    <TypesafeI18n locale={detectedLocale}>
      <Component />
    </TypesafeI18n>
  )
}

export default App
