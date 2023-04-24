export const addIngredient = (ingredient,userId) =>{
    return fetch(`/api/addingredient`, {
        method: "GET",
            headers: {
                Accept: "application/json",
                'content-type': 'application/json',
            }
    }).then(response =>{
        return response.json()
    })
    .catch(err => {
        return err
    })
}