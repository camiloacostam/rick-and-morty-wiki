import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  character: {},
  loading: "idle",
}

export const getCharacterInfo = createAsyncThunk(
  "characters/getCharacterInfo",
  async (charterId) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${charterId}`
    )

    return response.data
  }
)

const characterDetail = createSlice({
  name: "charactersDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacterInfo.pending, (state) => {
      state.loading = "pending"
    })
    builder.addCase(getCharacterInfo.fulfilled, (state, action) => {
      state.loading = "succeeded"
      state.character = action.payload
    })
    builder.addCase(getCharacterInfo.rejected, (state) => {
      state.loading = "failed"
    })
  },
})

export default characterDetail.reducer
