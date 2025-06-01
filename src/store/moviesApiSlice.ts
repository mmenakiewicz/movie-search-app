import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { MovieDetails, SearchMoviesResponse } from "@/types/moviesTypes"

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
    searchMovies: builder.infiniteQuery<
      SearchMoviesResponse,
      { query: string },
      number
    >({
      infiniteQueryOptions: {
        // The initial page to fetch
        initialPageParam: 1,
        // How to get the next page param from the last response
        getNextPageParam: lastPage => {
          // lastPage.page is the current page, lastPage.total_pages is the total number of pages
          if (lastPage.page < lastPage.total_pages) {
            return lastPage.page + 1
          }
          return undefined // No more pages
        },
      },
      // The query function receives the queryArg and pageParam
      query: ({ queryArg, pageParam }) =>
        `search/movie?query=${encodeURIComponent(queryArg.query)}&include_adult=false&language=en-US&page=${String(pageParam)}`,
    }),
    getMovieDetails: builder.query<MovieDetails, { id: string }>({
      query: ({ id }) => `movie/${id}?language=en-US`,
    }),
  }),
})

export const { useSearchMoviesInfiniteQuery, useGetMovieDetailsQuery } =
  moviesApi
