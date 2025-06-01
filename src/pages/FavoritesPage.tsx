import { BackButton } from "@/components/BackButton/BackButton"
import { Favorites } from "@/components/Favorites/Favorites"

export const FavoritesPage: React.FC = () => {
  return (
    <main>
      <BackButton isHome />
      <Favorites />
    </main>
  )
}
