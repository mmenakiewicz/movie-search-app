/* eslint-disable @typescript-eslint/no-misused-promises */
// import { useEffect } from "react"
import { useSearchMoviesInfiniteQuery } from "@/store/moviesApiSlice"
import { MovieList } from "@/components/MovieList/MovieList"
import styles from "./SearchResults.module.scss"
import Loader from "../Loader/Loader"
import { selectSearchQuery } from "@/store/searchSlice"
import { useAppSelector } from "@/store/hooks"

export const SearchResults = () => {
  const searchQuery = useAppSelector(selectSearchQuery)

  const {
    fetchNextPage,
    data: infiniteData,
    isFetching,
    isError,
  } = useSearchMoviesInfiniteQuery(
    { query: searchQuery },
    { refetchOnMountOrArgChange: true },
  )
  const totalResults = infiniteData?.pages[0].total_results ?? 0
  const totalPages = infiniteData?.pages[0].total_pages ?? 0
  const results = infiniteData?.pages.flatMap(page => page.results) ?? []
  const hasNextPage =
    infiniteData?.pages && infiniteData.pages.length < totalPages

  return (
    <div className={styles.container}>
      <>
        <h2 className={styles.resultsHeader}>
          {searchQuery.length
            ? `${String(totalResults)} ${totalResults === 1 ? "result" : "results"} found for "${searchQuery}"`
            : ""}
        </h2>
        <MovieList
          movies={searchQuery.length ? results : []}
          noResultsText={
            !searchQuery.length
              ? "Start typing in the search field to show results"
              : undefined
          }
        />
        {isFetching ? (
          <div className={styles.loaderWrapper}>
            <Loader />
          </div>
        ) : null}
        {isError && (
          <div className="error">
            Error fetching movies. Please try again later.
          </div>
        )}
        {hasNextPage ? (
          <button
            onClick={() => fetchNextPage()}
            className={styles.loadMoreButton}
          >
            Load More
          </button>
        ) : null}
      </>
    </div>
  )
}
