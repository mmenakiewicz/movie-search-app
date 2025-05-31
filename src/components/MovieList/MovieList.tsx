import type { Movie } from "@/types/moviesTypes"
import { MovieListItem } from "@/components/MovieListItem/MovieListItem"
import styles from "./MovieList.module.scss"

interface MovieListProps {
  movies?: Movie[]
  noResultsText?: string
}

export const MovieList = ({
  movies = [],
  noResultsText = "There are no movies to display.",
}: MovieListProps) => {
  return movies.length > 0 ? (
    <ul className={styles.list}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  ) : (
    <p className={styles.noResults}>{noResultsText}</p>
  )
}
