import type React from "react"
import type { ChangeEvent } from "react"
import { useState } from "react"
import styles from "./SearchBar.module.scss"
import { Search } from "lucide-react"
import { Link } from "react-router"
import { Heart } from "lucide-react"

interface SearchInputProps {
  placeholder?: string
  onSearch?: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search for movies...",
  onSearch,
}) => {
  const [value, setValue] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    if (onSearch) {
      onSearch(e.target.value)
    }
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
