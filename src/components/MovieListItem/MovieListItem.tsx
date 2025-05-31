import type { Movie } from "@/types/moviesTypes"
import styles from "./MovieListItem.module.scss"
import { Calendar, Clapperboard, Star } from "lucide-react"

interface MovieListItemProps {
  movie: Movie
}

export const MovieListItem = ({ movie }: MovieListItemProps) => {
  return (
    <li className={styles.container}>
      <div className={styles.imageWrapper}>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className={styles.placeholder}>
            <Clapperboard size={64} strokeWidth={1} />
            <p>Poster Not Available</p>
          </div>
        )}
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.title}>{movie.title}</h3>
        <div className={styles.metaContainer}>
          <p className={styles.infoItem}>
            <Calendar size={16} />
            {movie.release_date
              ? new Date(movie.release_date).getFullYear()
              : "-"}
          </p>
          <p className={styles.infoItem}>
            <Star size={16} />
            {(movie.vote_average || 0).toFixed(1)}
          </p>
        </div>
      </div>
    </li>
  )
}
