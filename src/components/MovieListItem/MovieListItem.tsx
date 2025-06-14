import { Link } from "react-router"
import { Calendar, Star } from "lucide-react"
import type { Movie } from "@/types/moviesTypes"
import { PosterPlaceholder } from "@/components/PosterPlaceholder/PosterPlaceholder"
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton"
import { getFullImageUrl } from "@/utils/helpers"
import styles from "./MovieListItem.module.scss"

interface MovieListItemProps {
  movie: Movie
}

export const MovieListItem = ({ movie }: MovieListItemProps) => {
  return (
    <li className={styles.container}>
      <div className={styles.favoriteButton}>
        <FavoriteButton movie={movie} />
      </div>
      <Link to={`/movies/${String(movie.id)}`}>
        <div className={styles.imageWrapper}>
          {movie.poster_path ? (
            <img src={getFullImageUrl(movie.poster_path)} alt={movie.title} />
          ) : (
            <PosterPlaceholder />
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
      </Link>
    </li>
  )
}
