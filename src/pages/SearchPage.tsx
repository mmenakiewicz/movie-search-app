import { useState } from "react"
import SearchBar from "@/components/SearchBar/SearchBar"
import { SearchResults } from "@/components/SearchResults/SearchResults"
import { useDebounce } from "@/utils/useDebounce"

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const debouncedSearchQuery = useDebounce(searchQuery)

  return (
    <div>
      <SearchBar onSearch={setSearchQuery} />
      <main>
        <SearchResults searchQuery={debouncedSearchQuery} />
      </main>
    </div>
  )
}

export default SearchPage
