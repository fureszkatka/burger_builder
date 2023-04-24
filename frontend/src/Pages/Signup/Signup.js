import React from "react";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { clearing, handleName, handleEmail, handlePassword } from '../../stores/signup-store'
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
                dispatch(clearing(data.error))
            }
            else{
                dispatch(clearing(data.message))
            }
        })
    }

    const isError = () => {
        if (Users.message != "Signup success!") {
            return (
                {color: "red"}
            )
        }
        else {
            return (
                {color: "green"}
            )
        }
    }

    const enterKeyDown = (e) =>{
        if(e.keyCode === 13){
            Upload()
        }
    }

    return(
        <div className="Signup_container">
            
            <div className= "Signup_background">
            </div>
            <div className="Signup_forms">
                
                <p>Signup</p>

                <div className="Signup_inputs">
                    <input 
                        placeholder=""
                        className="Signup_input"
                        value={Users.name} 
                        onKeyDown={enterKeyDown}
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
                        onKeyDown={enterKeyDown}
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
                        onKeyDown={enterKeyDown}
                        onChange={(e)=>dispatch(handlePassword(e.target.value))}
                    ></input>
                    <label className="Signup_labels">Password</label>
                </div>
                
                <div className="Signup_button-message">
                    <button className ="Signup_button" onClick = {Upload}>Signup</button>
                    <p style={isError()} className ="Signup_message">{Users.message}</p>
                </div>
                <div className="Signup_login">You alredy have an account? Here you can sign in! -- <Link to ="/login">Login</Link></div>
            </div>
            
        </div>
    )
}