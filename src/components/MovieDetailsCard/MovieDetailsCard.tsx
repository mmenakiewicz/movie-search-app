import { Calendar, Star } from "lucide-react"
import { useGetMovieDetailsQuery } from "@/store/moviesApiSlice"
import { getFullImageUrl } from "@/utils/helpers"
import Loader from "@/components/Loader/Loader"
import { PosterPlaceholder } from "@/components/PosterPlaceholder/PosterPlaceholder"
import styles from "./MovieDetailsCard.module.scss"

interface MovieDetailsCardProps {
  movieId?: string
}

export const MovieDetailsCard = ({ movieId = "" }: MovieDetailsCardProps) => {
  const {
    data: movieDetails,
    isFetching,
    error,
  } = useGetMovieDetailsQuery(
    { id: movieId },
    {
      skip: !movieId,
    },
  )

  if (error) {
    return "status" in error && error.status === 404 ? (
      <div className="error">
        Movie not found. Please check the ID or try again later.
      </div>
    ) : (
      <div className="error">
        Error fetching movie details. Please try again later.
      </div>
    )
  }

  return (
    <div>
      <div className={styles.movieCard}>
        <div className={styles.container}>
          {isFetching ? (
            <div className={styles.loaderWrapper}>
              <Loader />
            </div>
          ) : (
            <>
              {movieDetails?.poster_path ? (
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
                    movieDetails?.backdrop_path
                      ? {
                          backgroundImage: `url("${getFullImageUrl(movieDetails.backdrop_path, "backdrop")}")`,
                        }
                      : {}
                  }
                />
                <div className={styles.details}>
                  <div className={styles.title1}>
                    {movieDetails?.title ?? "Title missing"}
                  </div>
                  <div className={styles.metaContainer}>
                    <div className={styles.metaInfo}>
                      <Calendar size={16} />
                      {movieDetails?.release_date
                        ? new Date(movieDetails.release_date).getFullYear()
                        : "-"}
                    </div>

                    <div className={styles.metaInfo}>
                      <Star size={16} />
                      <span className={styles.ratingValue}>
                        {(movieDetails?.vote_average ?? 0).toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.description}>
                <div className={styles.column1}>
                  {movieDetails?.genres && movieDetails.genres.length > 0 && (
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
                  {/* eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing */}
                  <p>
                    {movieDetails?.overview || "This movie has no overview."}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
