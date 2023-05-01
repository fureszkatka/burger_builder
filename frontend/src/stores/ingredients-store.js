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
        //Add new ingredient
        add: (state,val) => ({
            ingredients: [...state.ingredients, val.payload]
        }),
        //Clear ingredients and set the response data message
        clear: (state,message) =>({
            ingredients: [],
            message: message.payload
        }),
        //Clear ingredients and set the response data message
        uploadBurger: (state, message) => ({
            message: message.payload,
            ingredients: [],
        }),
        //Remove the clicked burger by id
        remove: (state,index) => ({
            ingredients: state.ingredients.filter((ingredient,i) => i != index.payload)
        })
    }
})

export const {add, uploadBurger, remove, clear} = Ingredients.actions

export default Ingredients.reducer