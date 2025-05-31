import { BrowserRouter, Route, Routes } from "react-router"
import SearchPage from "@/pages/SearchPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"

export const RootComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
