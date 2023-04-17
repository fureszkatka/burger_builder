import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    users: [],
    userData: {
        name:"",
        password:"",
        email:"",
        message:""
    }
}

export const Users = createSlice({
    name: "users",
    initialState,
    reducers: {
        signupUser: (state,newUser) => ({
            users: [...state.users, {
                name: newUser.name, 
                password: newUser.password, 
                email:newUser.email,
                message: "signup successfull!"
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
        clear: (state) =>({
            usersData: {
                name: "",
                email: "",
                password: "",
                message: ["email is taken","Please fill all the boxes!"] 
            }
        }),
        list: (state) =>{
            return state.users
        }
    }
})

export const {signupUser, clear, list, handleName, handleEmail, handlePassword} = Users.actions

export default Users.reducer