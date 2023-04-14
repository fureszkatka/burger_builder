import { createSlice } from '@reduxjs/toolkit'


let initialState = {
    users: [],
    userData: {
        name:"",
        password:"",
        email:""
    }
}

export const Users = createSlice({
    name: "users",
    initialState,
    reducers: {
        signup: (state,newUser) => ({
            users: [...state.users, {name: newUser.name, password: newUser.password, email:newUser.email}]
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
        remove: (state,i) =>{
            users: state.users.filter((index) => i != index)
        },
        list: (state) =>{
            return state.users
        }
    }
})

export const {signup, remove, list, handleName, handleEmail, handlePassword} = Users.actions

export default Users.reducer