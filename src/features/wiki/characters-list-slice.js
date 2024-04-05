import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  currentPage: 1,
  totalPages: 1,
  characters: [],
  loading: "idle",
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
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCharacters.pending, (state) => {
      state.loading = "pending"
    })
    builder.addCase(getAllCharacters.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.characters = action.payload.results
      state.totalPages = action.payload.info.pages
    })
    builder.addCase(getAllCharacters.rejected, (state) => {
      state.loading = "failed"
    })
  },
})

export const { setPage } = charactersListSlice.actions

export default charactersListSlice.reducer
