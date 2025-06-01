import SearchBar from "@/components/SearchBar/SearchBar"
import { SearchResults } from "@/components/SearchResults/SearchResults"

const SearchPage = () => {
  return (
    <div>
      <SearchBar />
      <main>
        <SearchResults />
      </main>
    </div>
  )
}

export default SearchPage
