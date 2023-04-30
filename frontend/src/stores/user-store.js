import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    ingredients: "",
    message: ""
}

export const UserBurgers = createSlice({
    name: "user_burgers",
    initialState,
    reducers: {
        list: (state,val) => ({
            ingredients: val.payload
        }),
        delOrder: (state,val,message) => ({
            ingredients: state.ingredients.filter((burger, i) => i != val.payload),
            message: "Burger deleted."
        })
    }
})

export const {list,delOrder} = UserBurgers.actions

export default UserBurgers.reducer