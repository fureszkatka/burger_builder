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
        remove: (state,i) =>{
            ingredients: state.ingredients.filter((index) => i != index)
            console.log(state.ingredients)
        }
    }
})

export const {add, remove} = Ingredients.actions

export default Ingredients.reducer