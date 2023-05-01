import { configureStore } from '@reduxjs/toolkit'
import Ingredients_reducer from "./stores/ingredients-store"
import Users_reducer from "./stores/signup-store"
import Login_reducer from "./stores/login-store"
import Burgers_reducer from "./stores/user-store"

//Sets the reducers from the store to work with
export const store = configureStore({
    reducer: {
        ingredients: Ingredients_reducer,
        users: Users_reducer,
        login: Login_reducer,
        burger: Burgers_reducer
    },
})