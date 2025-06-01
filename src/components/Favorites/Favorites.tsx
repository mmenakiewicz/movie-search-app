import { useAppSelector } from "@/store/hooks"
import { MovieList } from "@/components/MovieList/MovieList"
import { selectFavorites } from "@/store/favoritesSlice"
import styles from "./Favorites.module.scss"

export const Favorites: React.FC = () => {
  const favoriteMovies = useAppSelector(selectFavorites)

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Favorite Movies</h1>
      {favoriteMovies.length > 0 ? (
        <MovieList movies={favoriteMovies} />
      ) : (
        <p>You haven't added any movies to your favorites yet.</p>
      )}
    </div>
  )
}
