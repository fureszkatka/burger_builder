import { configureStore } from '@reduxjs/toolkit'
import Ingredients_reducer from "./ingredients-store"

export const store = configureStore({
    reducer: {
        ingredients: Ingredients_reducer,
    },
})