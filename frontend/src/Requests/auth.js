import {useNavigate} from "react-router-dom" 

//Send request to signup user
export const signup = (userData) => {
    return fetch(`/api/signup`, {
        method: "POST",
            headers: {
                Accept: "application/json",
                'content-type': 'application/json',
            },
            body: JSON.stringify(userData)
    }).then(response =>{
        return response.json()
    })
    .catch(err => {
        return err
    })
}

//Send request to login user
export const login = (user) =>{
    return fetch("/api/login", {
        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    .then(response =>{
        return response.json(user)
    })
    .catch(err => {
        return err
    })
}

//Send request to signout user
export const signout = (nav) =>{

    if(typeof window !== "undefined") localStorage.removeItem("jwt")
    
    return fetch("/api/signout", {
        method: "GET"
    })
        .then(response => {
            console.log("signout", response)
            nav()
            return response.json()
        })
        .catch(err => {
            return err
        })
}
