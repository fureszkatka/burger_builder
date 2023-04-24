import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    ingredients: [],
}

export const Ingredients = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
        add: (state,val) => ({
            ingredients: [...state.ingredients, val]
        }),
        list: (state) =>{
            return state.ingredients
        },
        clear: (state) => ({
            ingredients: []
        })
    }
})

export const {add, clear} = Ingredients.actions

export default Ingredients.reducer