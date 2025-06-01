import { BrowserRouter, Route, Routes } from "react-router"
import SearchPage from "@/pages/SearchPage"
import MovieDetailsPage from "@/pages/MovieDetailsPage"
import { FavoritesPage } from "@/pages/FavoritesPage"
import NotFoundPage from "./pages/NotFoundPage"

export const RootComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
