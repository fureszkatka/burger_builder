import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    allUsers: [],
    userData: {
        name: "",
        password: "",
        email: "",
        message: "",
        isLoading: false
    }
}

export const Users = createSlice({
    name: "users",
    initialState,
    reducers: {
        //Save all users to the store
        signupUser: (state,newUser) => ({
            allUsers: [...state.allUsers, {
                name: newUser.payload.name, 
                password: newUser.payload.password, 
                email: newUser.payload.email,
                message: newUser.payload.message
            }]
        }),
        //Handle onchange for name
        handleName: (state,e) => ({
            userData: {...state.userData, name: e.payload}
        }),
        //Handle onchange for email
        handleEmail: (state,e) => ({
            userData: {...state.userData, email: e.payload}
        }),
        //Handle onchange for password
        handlePassword: (state,e) => ({
            userData: {...state.userData, password: e.payload}
        }),
        //Clearing userdata and sets message from response
        clearing: (state, error) =>({
            userData: {...state.userData, message: error.payload}
        }),
        //Check loading status
        loading: (state, val) => ({
            userData: {...state.userData, isLoading: val.payload}
        })
    }
})

export const {signupUser, clearing, list, handleName, handleEmail, handlePassword, loading} = Users.actions

export default Users.reducer