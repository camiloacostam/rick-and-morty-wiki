import { configureStore } from "@reduxjs/toolkit"
//Reducers/slices
import charactersListReducer from "../wiki/characters-list-slice"
import characterDetailReducer from "../wiki/character-detail-slice"

export const store = configureStore({
  reducer: {
    charactersList: charactersListReducer,
    characterDetail: characterDetailReducer,
  },
})
