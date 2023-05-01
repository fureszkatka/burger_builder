import React from "react";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { clearing, handleName, handleEmail, handlePassword, loading } from '../../stores/signup-store'
import {signup} from "../../Requests/auth"
import "./Signup.styl"

export const SignupNewUser = () => {

    //define the Redux store state to wok with
    const Users = useSelector((state) => state.users.userData)
    const dispatch = useDispatch()
    
    //Upload the signup data to the request function with user data.
    const Upload = () => {
        
        dispatch(loading(true))

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
                dispatch(loading(false))
            }
            else {
                dispatch(clearing(data.message))
                dispatch(loading(false))
            }
        })
    }

    //Check if the message was error or not, for what color is going to be. 
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

    //Activate the enter pressing sensor
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
                
                <p className="Signup_title">Signup</p>

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
                    {Users.isLoading ?
                        <img style={{ width: 40, height: 40 }}
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif">
                        </img>
                        :
                        <p
                            style={isError()}
                            className="Signup_message"
                        >
                            {Users.message}
                        </p>}
                </div>
                <div
                    className="Signup_login">
                    You alredy have an account? Here you can sign in! --
                    <Link to="/login">
                        Login
                    </Link>
                </div>
            </div>
            
        </div>
    )
}