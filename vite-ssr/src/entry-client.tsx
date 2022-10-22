import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const app = document.getElementById("app")
if (app === null) throw new Error("No app element found")

ReactDOM.hydrateRoot(
  app,
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
