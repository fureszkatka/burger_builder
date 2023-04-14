const express = require("express")
const addIngredients = require("./addIngredients")

const router = express()

router.post("/api/addingredient", addIngredients.addIngredients)

module.exports = router