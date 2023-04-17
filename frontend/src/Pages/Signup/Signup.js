import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { signupUser, clear, list, handleName, handleEmail, handlePassword } from '../../stores/signup-store'
import {signup} from "../../Requests/auth"

export const SignupNewUser = () => {

    const Users = useSelector((state) => state.users.userData)
    const dispatch = useDispatch()
    

    const Upload = () =>{
        const user = {
            name: Users.name,
            email: Users.email,
            password: Users.password
        }
        console.log(user)
        signup(user)
        .then(response =>{
            console.log(response.error)
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
            <button onClick = {Upload}>Signup</button>

            <div>{Users.message ? Users.userData.message : <p></p>}</div>
        </div>
    )
}