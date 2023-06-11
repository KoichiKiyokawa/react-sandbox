import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, <App />, {
    onRecoverableError(err, info) {
      if (import.meta.env.DEV) console.error(err, info);
    },
  });
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
