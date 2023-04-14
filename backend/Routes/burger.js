const express = require("express")
const addIngredients = require("../Controllers/burger")

const router = express()

router.post("/api/addingredient", addIngredients.addIngredients)

module.exports = router