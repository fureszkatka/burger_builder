import { createSlice,  } from '@reduxjs/toolkit'

let initialState = {
    userData: {
        password: "kiki12",
        email: "kati@gmail.com",
        message: "",
        isLoggedin: false,
        isLoading: false
    }
}

export const Login = createSlice({
    name: "login",
    initialState,
    reducers: {
        //Handle onchange for email
        handleEmail: (state,e) => ({
            userData: {...state.userData, email: e.payload}
        }),
        //Handle onchange for password
        handlePassword: (state,e) => ({
            userData: {...state.userData, password: e.payload}
        }),
        //Sets the response message
        clearing: (state, error) =>({
            userData: {...state.userData, message: error.payload, isLoggedin: true}
        }),
        //Set the loading status wether it's loading or not
        loading: (state, val) => ({
            userData: {...state.userData, isLoading: val.payload}
        })
    }
})

export const {clearing, handleName, handleEmail, handlePassword, loading} = Login.actions

export default Login.reducer