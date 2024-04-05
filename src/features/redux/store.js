import { configureStore } from "@reduxjs/toolkit"
//Reducers/slices
import charactersListReducer from "../characters/characters-list-slice"
import characterDetailReducer from "../characters/character-detail-slice"

export const store = configureStore({
  reducer: {
    charactersList: charactersListReducer,
    characterDetail: characterDetailReducer,
  },
})
