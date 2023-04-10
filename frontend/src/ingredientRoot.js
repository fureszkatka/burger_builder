
export const addIngredient = (ingredient) =>{

    return fetch(`http://localhost:5000/addingredient`, {
            method: "POST",
            body: JSON.stringify(ingredient)
        }).then(response => {
            return console.log(response)
        })
}