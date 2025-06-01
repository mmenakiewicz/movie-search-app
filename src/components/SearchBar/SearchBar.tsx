import type React from "react"
import type { ChangeEvent } from "react"
import { useEffect, useState } from "react"
import styles from "./SearchBar.module.scss"
import { Search } from "lucide-react"
import { Link } from "react-router"
import { Heart } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { selectSearchQuery, setSearchQuery } from "@/store/searchSlice"
import { useDebounce } from "@/utils/useDebounce"

interface SearchInputProps {
  placeholder?: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search for movies...",
}) => {
  const searchQuery = useAppSelector(selectSearchQuery)
  const [value, setValue] = useState(searchQuery)
  const dispatch = useAppDispatch()
  const debouncedSearchQuery = useDebounce(value)

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearchQuery))
  }, [dispatch, debouncedSearchQuery])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <header className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.inputWrapper}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="search"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            aria-label="Search"
            className={styles.input}
          />
        </div>
        <Link to="/favorites" className={styles.favoritesLink}>
          <Heart size={24} />
          My Favorites
        </Link>
      </div>
    </header>
  )
}

export default SearchInput
