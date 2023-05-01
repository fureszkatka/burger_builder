import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    ingredients: "",
    message: "",
    isLoading: false
}

export const UserBurgers = createSlice({
    name: "user_burgers",
    initialState,
    reducers: {
        //Sets ingredients from response data
        list: (state,val) => ({
            ingredients: val.payload
        }),
        //Delete clicked id-ed burger
        delOrder: (state,val,message) => ({
            ingredients: state.ingredients.filter((burger, i) => i != val.payload),
            message: "Burger deleted."
        }),
        //Check loading status
        loading: (state,val) => ({
            isLoading: val.payload
        }),
    }
})

export const {list, delOrder, loading} = UserBurgers.actions

export default UserBurgers.reducer