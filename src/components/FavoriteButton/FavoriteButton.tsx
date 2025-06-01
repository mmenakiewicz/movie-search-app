import { useAppDispatch, useAppSelector } from "@/store/hooks"
import {
  addToFavorites,
  removeFromFavorites,
  selectFavorites,
} from "@/store/favoritesSlice"
import type { Movie } from "@/types/moviesTypes"
import styles from "./FavoriteButton.module.scss"
import { Heart, HeartPlus } from "lucide-react"

interface FavoriteButtonProps {
  movie: Movie
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movie }) => {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(selectFavorites)
  const isFavorite = favorites.some(fav => fav.id === movie.id)

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie.id))
    } else {
      dispatch(addToFavorites(movie))
    }
  }

  return (
    <button
      onClick={toggleFavorite}
      className={`${styles.button} ${isFavorite ? styles.active : ""}`}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? <Heart size={24} /> : <HeartPlus size={24} />}
    </button>
  )
}
