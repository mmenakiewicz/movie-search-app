import { Link } from "react-router"
import { CircleArrowLeft, Calendar, Star } from "lucide-react"
import { getFullImageUrl } from "@/utils/helpers"
import Loader from "@/components/Loader/Loader"
import { PosterPlaceholder } from "@/components/PosterPlaceholder/PosterPlaceholder"
import type { MovieDetails } from "@/types/moviesTypes"
import styles from "./MovieDetailsCard.module.scss"

interface MovieDetailsCardProps {
  movieDetails?: MovieDetails
}

export const MovieDetailsCard = ({ movieDetails }: MovieDetailsCardProps) => {
  return (
    <div>
      <div className={styles.movieCard}>
        <div className={styles.container}>
          <Link to="/" className={styles.backButton}>
            <CircleArrowLeft /> Back
          </Link>
          {!movieDetails ? (
            <div className={styles.loaderWrapper}>
              <Loader />
            </div>
          ) : (
            <>
              {movieDetails.poster_path ? (
                <img
                  src={getFullImageUrl(movieDetails.poster_path)}
                  alt={movieDetails.title}
                  className={styles.cover}
                />
              ) : (
                <div className={styles.cover}>
                  <PosterPlaceholder />
                </div>
              )}

              <div className={styles.hero}>
                <div
                  className={styles.heroBg}
                  style={
                    movieDetails.backdrop_path
                      ? {
                          backgroundImage: `url("${getFullImageUrl(movieDetails.backdrop_path, "backdrop")}")`,
                        }
                      : {}
                  }
                />
                <div className={styles.details}>
                  <div className={styles.title1}>{movieDetails.title}</div>
                  <div className={styles.metaContainer}>
                    <div className={styles.metaInfo}>
                      <Calendar size={16} />
                      {movieDetails.release_date
                        ? new Date(movieDetails.release_date).getFullYear()
                        : "-"}
                    </div>

                    <div className={styles.metaInfo}>
                      <Star size={16} />
                      <span className={styles.ratingValue}>
                        {(movieDetails.vote_average || 0).toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <div className={styles.column1}>
                  {movieDetails.genres.length > 0 && (
                    <div className={styles.genres}>
                      {movieDetails.genres.map(genre => (
                        <span key={genre.id} className={styles.tag}>
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className={styles.column2}>
                  <p>{movieDetails.overview}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
