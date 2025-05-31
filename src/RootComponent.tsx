import { BrowserRouter, Route, Routes } from "react-router"
import SearchPage from "@/pages/SearchPage"

export const RootComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  )
}
