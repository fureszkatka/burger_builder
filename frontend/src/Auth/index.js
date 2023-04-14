export const signupUser = (user) =>{

    return fetch(`http://localhost:5000/signup`, {

        method: "POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    .then(response =>{
        return response.json()
    })
    .catch(err => {
        console.log(err)
    })
    
}