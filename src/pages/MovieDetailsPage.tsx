import { MovieDetailsCard } from "@/components/MovieDetailsCard/MovieDetailsCard"
import { useGetMovieDetailsQuery } from "@/store/moviesApiSlice"
import { useParams } from "react-router"

const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>()

  const { data: movieDetails } = useGetMovieDetailsQuery(
    { id: id ?? "" },
    {
      skip: !id,
    },
  )

  return (
    <main>
      <MovieDetailsCard movieDetails={movieDetails} />
    </main>
  )
}

export default MovieDetailsPage
