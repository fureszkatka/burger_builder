import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    allUsers: [],
    userData: {
        name: "",
        password: "",
        email: "",
        message: ""
    }
}

export const Users = createSlice({
    name: "users",
    initialState,
    reducers: {
        signupUser: (state,newUser) => ({
            allUsers: [...state.allUsers, {
                name: newUser.payload.name, 
                password: newUser.payload.password, 
                email: newUser.payload.email,
                message: newUser.payload.message
            }]
        }),
        handleName: (state,e) => ({
            userData: {...state.userData, name: e.payload}
        }),
        handleEmail: (state,e) => ({
            userData: {...state.userData, email: e.payload}
        }),
        handlePassword: (state,e) => ({
            userData: {...state.userData, password: e.payload}
        }),
        clearing: (state, error) =>({
            userData: {...state.userData, message: error.payload}
        })
    }
})

export const {signupUser, clearing, list, handleName, handleEmail, handlePassword} = Users.actions

export default Users.reducer