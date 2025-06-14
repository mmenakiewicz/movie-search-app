export interface SearchMoviesResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  release_date?: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface MovieDetails {
  adult: boolean
  backdrop_path: string
  belongs_to_collection?: {
    id: number
    name: string
    poster_path?: string
    backdrop_path?: string
  }
  budget: number
  genres: { id: number; name: string }[]
  homepage?: string
  id: number
  imdb_id?: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  production_companies: {
    id: number
    name: string
    logo_path?: string
    origin_country: string
  }[]
  production_countries: { iso_3166_1: string; name: string }[]
  release_date?: Date
  revenue: number
  runtime?: number
  spoken_languages: { iso_639_1: string; name: string }[]
  status: string
  tagline?: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
