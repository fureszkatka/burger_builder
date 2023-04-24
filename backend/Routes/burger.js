const express = require("express")
const { requireSignin } = require("../Controllers/auth")
const { addIngredients, getBurgers } = require("../Controllers/burger")

const router = express()

router.post("/api/addingredient", addIngredients)
router.post("/api/allburgers", requireSignin, getBurgers)

module.exports = router