import { StrictMode } from "react"
import { Provider } from "react-redux"
import { RootComponent } from "./RootComponent"
import { store } from "./store/store"

export const App = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <RootComponent />
      </Provider>
    </StrictMode>
  )
}
