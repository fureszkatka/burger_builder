export const signup = (userData) =>{
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