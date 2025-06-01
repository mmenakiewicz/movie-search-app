import { favoritesSlice } from '../favoritesSlice'
import type { Movie } from '@/types/moviesTypes'

const mockMovie: Movie = {
  id: 1,
  title: 'Test Movie',
  overview: 'Test Overview',
  poster_path: '/poster.jpg',
  release_date: new Date('2025-03-05'),
  vote_average: 8.5,
  vote_count: 100,
  adult: false,
  popularity: 10.0,
  backdrop_path: '/backdrop.jpg',
  genre_ids: [28, 12],
  original_language: 'en',
  original_title: 'Test Movie Original',
  video: false,
}

describe('favoritesSlice', () => {
  it('should handle initial state', () => {
    expect(favoritesSlice.reducer(undefined, { type: 'unknown' })).toEqual({
      movies: [],
    })
  })

  it('should handle addToFavorites', () => {
    const initialState = { movies: [] }
    const nextState = favoritesSlice.reducer(
      initialState,
      favoritesSlice.actions.addToFavorites(mockMovie)
    )

    expect(nextState.movies).toEqual([mockMovie])
  })

  it('should not add duplicate movies to favorites', () => {
    const initialState = { movies: [mockMovie] }
    const nextState = favoritesSlice.reducer(
      initialState,
      favoritesSlice.actions.addToFavorites(mockMovie)
    )

    expect(nextState.movies).toEqual([mockMovie])
  })

  it('should handle removeFromFavorites', () => {
    const initialState = { movies: [mockMovie] }
    const nextState = favoritesSlice.reducer(
      initialState,
      favoritesSlice.actions.removeFromFavorites(1)
    )

    expect(nextState.movies).toEqual([])
  })
}) 