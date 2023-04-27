import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    ingredients: [],
    message: "",
    burgers: []
}

export const Ingredients = createSlice({
    name: "ingredients",
    initialState,
    reducers: {
        add: (state,val) => ({
            ingredients: [...state.ingredients, val.payload]
        }),
        clear: (state,message) =>({
            ingredients: [],
            message: message.payload
        }),
        uploadBurger: (state, message) => ({
            message: message.payload,
            ingredients: [],
        }),
        remove: (state,index) => ({
            ingredients: state.ingredients.filter((ingredient,i) => i != index.payload)
        })
    }
})

export const {add, uploadBurger, remove, clear} = Ingredients.actions

export default Ingredients.reducer