import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { Movie } from "@/types/moviesTypes"

interface FavoritesState {
  movies: Movie[]
}

const loadFavorites = (): Movie[] => {
  const savedFavorites = localStorage.getItem("favorites")
  return savedFavorites ? (JSON.parse(savedFavorites) as Movie[]) : []
}

const initialState: FavoritesState = {
  movies: loadFavorites(),
}

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Movie>) => {
      if (!state.movies.some(movie => movie.id === action.payload.id)) {
        state.movies.push(action.payload)
        localStorage.setItem("favorites", JSON.stringify(state.movies))
      }
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload)
      localStorage.setItem("favorites", JSON.stringify(state.movies))
    },
  },
  selectors: {
    selectFavorites: (state: FavoritesState) => state.movies,
  },
})

export const { selectFavorites } = favoritesSlice.selectors
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export { favoritesSlice }
