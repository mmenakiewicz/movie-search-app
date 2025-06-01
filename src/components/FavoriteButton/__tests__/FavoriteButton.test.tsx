import { screen, fireEvent } from '@testing-library/react'
import { FavoriteButton } from '../FavoriteButton'
import type { Movie } from '@/types/moviesTypes'
import { renderWithProviders } from '@/utils/test-utils'

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

describe('FavoriteButton', () => {
  it('renders correctly when movie is not in favorites', () => {
    renderWithProviders(<FavoriteButton movie={mockMovie} />)

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Add to favorites')
  })

  it('renders correctly when movie is in favorites', () => {
    renderWithProviders(<FavoriteButton movie={mockMovie} />, {
      preloadedState: {
        favorites: {
          movies: [mockMovie],
        },
      },
    })

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Remove from favorites')
  })

  it('toggles favorite status when clicked', () => {
    renderWithProviders(<FavoriteButton movie={mockMovie} />)

    const button = screen.getByRole('button')
    
    // Initial state
    expect(button).toHaveAttribute('aria-label', 'Add to favorites')
    
    // Click to add to favorites
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-label', 'Remove from favorites')
    
    // Click to remove from favorites
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-label', 'Add to favorites')
  })
}) 