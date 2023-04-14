import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { signup, remove, list, handleName, handleEmail, handlePassword } from '../../stores/signup-store'
import {signupUser} from "../../Auth/index"

export const Signup = () => {

    const Users = useSelector((state) => state.users.userData)
    const dispatch = useDispatch()
    
    console.log(Users)


    const signup = () =>{
        const user = {
            name: Users.name,
            email: Users.email,
            password: Users.password
        }
        console.log(user)
        signupUser(user)
        .then(data =>{
            console.log(data)
            if(data.error) {
                console.log(data.error)
            }
            else ()=>dispatch(signup({
                message: "Signup successful",
                name: "",
                email: "",
                password: "",
                signin: true 
            }))
        })
    }


    return(
        <div className="Signup_container">
            name:
            <input 
                value={Users.name} 
                onChange={(e)=>dispatch(handleName(e.target.value))}
            >
            </input><br></br>
            email:
            <input 
                value={Users.email} 
                onChange={(e)=>dispatch(handleEmail(e.target.value))}
            >
            </input>
            <br></br>
            password:
            <input 
                value={Users.password} 
                onChange={(e)=>dispatch(handlePassword(e.target.value))}
            ></input>
            <button onClick = {signup}>Signup</button>
        </div>
    )
}