import { createRoot } from "react-dom/client"
import { App } from "./App"
import "./styles/main.scss"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  root.render(<App />)
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
