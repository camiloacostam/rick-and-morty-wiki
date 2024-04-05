import { configureStore } from "@reduxjs/toolkit"
//Reducers/slices
import charactersListReducer from "../wiki/characters-list-slice"

export const store = configureStore({
  reducer: {
    charactersList: charactersListReducer,
  },
})
