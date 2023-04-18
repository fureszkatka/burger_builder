import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { signupUser, clearing, handleName, handleEmail, handlePassword } from '../../stores/signup-store'
import {signup} from "../../Requests/auth"
import "./Signup.styl"

export const SignupNewUser = () => {

    const Users = useSelector((state) => state.users.userData)
    const dispatch = useDispatch()
    
    const Upload = () =>{
        const user = {
            name: Users.name,
            email: Users.email,
            password: Users.password,
            message: "Signup successfull!"
        }
        console.log(user)
        signup(user)
        .then(data =>{
            if(data.error){
                console.log("dsasda")
                dispatch(clearing(data.error))
            }
            else{
                dispatch(clearing(data.message))
            }
        })
    }

    return(
        <div className="Signup_container">
            <div className= "Signup_background">
            </div>
            <div className="Signup_forms">
                
                <div className="Signup_inputs">
                    <input 
                        className="Signup_input"
                        value={Users.name} 
                        onChange={(e)=>dispatch(handleName(e.target.value))}
                    >
                    </input>
                    <label className="Signup_labels">Name</label>
                </div>
                <br></br>
                <div className="Signup_inputs">
                    <input 
                        className="Signup_input"
                        value={Users.email} 
                        onChange={(e)=>dispatch(handleEmail(e.target.value))}
                    >
                    </input>
                    <label className="Signup_labels">Email</label>
                </div>
                <br></br>
                <div className="Signup_inputs">
                    <input 
                        className="Signup_input"
                        type = "password"
                        value={Users.password} 
                        onChange={(e)=>dispatch(handlePassword(e.target.value))}
                    ></input>
                    <label className="Signup_labels">Password</label>
                </div>
                <button onClick = {Upload}>Signup</button>

                <div>{Users.message}</div>
            </div>
        </div>
    )
}