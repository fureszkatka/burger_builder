import { createSlice, getDefaultMiddleware } from '@reduxjs/toolkit'

let initialState = {
    userData: {
        name: "",
        password: "kiki12",
        email: "kati@gmail.com",
        message: "",
        isLoggedin: false
    }
}

export const Login = createSlice({
    name: "login",
    initialState,
    reducers: {
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
            userData: {...state.userData, message: error.payload, isLoggedin:true}
        })
    }
})

export const {clearing, handleName, handleEmail, handlePassword} = Login.actions

export default Login.reducer