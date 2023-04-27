import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    burgers: []
}

export const UserBurgers = createSlice({
    name: "user_burgers",
    initialState,
    reducers: {
        list: (state,val) => ({
            burgers: val.payload
        })
    }
})

export const {list} = UserBurgers.actions

export default UserBurgers.reducer