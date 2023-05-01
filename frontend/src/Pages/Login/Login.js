import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from "react-router-dom";
import { login } from "../../Requests/auth"
import { isAuthenticated } from "../../Auth";
import { clearing, handleEmail, handlePassword, loading } from '../../stores/login-store'
import './Login.styl'

export const LoginUser = () => {
    
    //define the Redux store state to wok with
    const Login = useSelector((state) => state.login.userData)
    const dispatch = useDispatch()


    //Set the token to the localstorage's jwt
    const authenticate = (jwt)=>{
        if (typeof window !== "undefined") {
            localStorage.setItem("jwt", JSON.stringify(jwt))
        }
    }


    //Upload the user data to the request function.
    const Upload = () => {

        dispatch(loading(true))

        const user = {
            email: Login.email,
            password: Login.password
        }
        login(user)
        .then(data =>{
            if(data.error) {
                dispatch(clearing(data.error))
            }
            else {
                authenticate (data)
                dispatch(clearing(data.message))
                dispatch(loading(false))
            }
        })

    }

    //Activate the enter press sensor 
    const enterKeyDown = (e) =>{
        if(e.keyCode === 13){
            Upload()
        }
    }

    return (
        <div className="Login_container">
            {isAuthenticated() ?  
                (Login.isLoading && (<Navigate to={`/user/${isAuthenticated().user.id}`} />) )
                :
                <p></p>
            }
            <div className= "Login_background">
            </div>
            <div className="Login_forms">
                <p className="Login_title">
                    Login
                </p>

                <div className="Login_inputs">
                    <input 
                        className="Login_input"
                        value={Login.email} 
                        onKeyDown={enterKeyDown}
                        onChange={(e)=>dispatch(handleEmail(e.target.value))}
                    >
                    </input>
                    <label className="Login_labels">
                        Email
                    </label>
                </div>
                <br></br>
                <div className="Login_inputs">
                    <input 
                        className="Login_input"
                        type = "password"
                        value={Login.password} 
                        onKeyDown={enterKeyDown}
                        onChange={(e)=>dispatch(handlePassword(e.target.value))}
                    ></input>
                    <label className="Login_labels">
                        Password
                    </label>
                </div>
                
                <div className="Login_button-message">
                    <button className="Login_button" onClick={Upload}>
                        Login
                    </button>
                    {Login.isLoggedin ?
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif"
                        >
                        </img>
                        :
                        <p className="Login_message">
                            {Login.message}
                        </p>
                    }
                </div>
            </div>
            
        </div>
    )
}