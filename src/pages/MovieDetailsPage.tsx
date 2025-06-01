import { BackButton } from "@/components/BackButton/BackButton"
import { MovieDetailsCard } from "@/components/MovieDetailsCard/MovieDetailsCard"
import { useParams } from "react-router"

const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <main>
      <BackButton />
      <MovieDetailsCard movieId={id} />
    </main>
  )
}

export default MovieDetailsPage
