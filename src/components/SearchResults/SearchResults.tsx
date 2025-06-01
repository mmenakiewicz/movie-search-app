import { useEffect } from "react"
import { useLazySearchMoviesQuery } from "@/store/moviesApiSlice"
import { MovieList } from "@/components/MovieList/MovieList"
import styles from "./SearchResults.module.scss"
import Loader from "../Loader/Loader"
import { selectSearchQuery } from "@/store/searchSlice"
import { useAppSelector } from "@/store/hooks"

export const SearchResults = () => {
  const [searchMovies, { data, isFetching, isError }] =
    useLazySearchMoviesQuery()

  const searchQuery = useAppSelector(selectSearchQuery)

  useEffect(() => {
    if (searchQuery.length) {
      searchMovies({ query: searchQuery }).catch((error: unknown) => {
        console.error("Error fetching movies:", error)
      })
    }
  }, [searchQuery, searchMovies])

  return (
    <div className={styles.container}>
      {isFetching ? (
        <div className={styles.loaderWrapper}>
          <Loader />
        </div>
      ) : (
        <>
          <h2 className={styles.resultsHeader}>
            {searchQuery.length
              ? `${String(data?.total_results)} ${data?.total_results === 1 ? "result" : "results"} found for "${searchQuery}"`
              : ""}
          </h2>
          <MovieList
            movies={searchQuery.length ? data?.results : []}
            noResultsText={
              !searchQuery.length
                ? "Start typing in the search field to show results"
                : undefined
            }
          />
          {isError && <p>Error fetching movies. Please try again later.</p>}
        </>
      )}
    </div>
  )
}
