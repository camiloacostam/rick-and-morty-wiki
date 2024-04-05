import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  currentPage: 1,
  totalPages: 1,
  characters: [],
  loading: false,
}

export const getAllCharacters = createAsyncThunk(
  "characters/getAllCharacters",
  async (page) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    )

    return response.data
  }
)

const charactersListSlice = createSlice({
  name: "charactersList",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload
    },
    setCharacters(state, action) {
      state.characters = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCharacters.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getAllCharacters.fulfilled, (state, action) => {
      state.loading = false
      state.characters = action.payload.results
      state.totalPages = action.payload.info.pages
    })
    builder.addCase(getAllCharacters.rejected, (state) => {
      state.loading = true
    })
  },
})

export const { setPage, setCharacters } = charactersListSlice.actions

export default charactersListSlice.reducer
