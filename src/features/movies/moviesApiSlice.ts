import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export interface SearchMoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  release_date?: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: (import.meta.env.VITE_API_URL as string),
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + (import.meta.env.VITE_API_KEY as string),
    },
  }),
  endpoints: builder => ({
    searchMovies: builder.query<SearchMoviesResponse, { query: string }>({
      query: ({ query }) =>
        `search/movie?query=${encodeURIComponent(query)}&include_adult=false&language=en-US`,
    }),
  }),
})

export const { useLazySearchMoviesQuery } = moviesApi
