import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface SearchState {
  searchQuery: string
}

const initialState: SearchState = {
  searchQuery: "",
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
  selectors: {
    selectSearchQuery: state => state.searchQuery,
  },
})

export const { selectSearchQuery } = searchSlice.selectors
export const { setSearchQuery } = searchSlice.actions
export { searchSlice }
