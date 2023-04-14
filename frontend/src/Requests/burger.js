export const addIngredient = (ingredient) =>{
    return fetch(`/api/addingredient`, {
        method: "POST",
            headers: {
                Accept: "application/json",
                'content-type': 'application/json',
            },
            body: JSON.stringify({ingredient})
    }).then(response => {
        return console.log(response)
    }).catch(error => {
        console.error(error);
    });
}