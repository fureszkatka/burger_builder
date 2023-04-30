
export const addIngredient = (ingredient, userId) =>{
    return fetch(`/api/addingredient`, {
        method: "POST",
            headers: {
                Accept: "application/json",
                'content-type': 'application/json',
            },
        body: JSON.stringify({ ingredient, userId })
    }).then(response =>{
        return response.json()
    })
    .catch(err => {
        return err
    })
}

export const getAllBurgers = (userId) =>{
    return fetch(`/api/allburgers/${userId}`, {
        method: "GET",
            headers: {
                Accept: "application/json",
                'content-type': 'application/json',
        },
    }).then(response =>{
        return response.json()
    })
    .catch(err => {
        return err
    })
}

export const delBurger = (userId,burgerId) =>{
    return fetch(`/api/deleteburger/${burgerId}`, {
        method: "DELETE",
            headers: {
                Accept: "application/json",
                'content-type': 'application/json',
        },
        body: JSON.stringify({userId,burgerId})
    }).then(response =>{
        return response.json()
    })
    .catch(err => {
        return err
    })
}
