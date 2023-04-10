const express = require("express")
const addIngredients = require("./addIngredients")

const router = express.Router()

router.post("/addingredient", addIngredients)

module.exports = router