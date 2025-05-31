import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { SearchMoviesResponse } from "@/types/moviesTypes"

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
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
