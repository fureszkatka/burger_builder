const express = require("express")
const { requireSignin, userById } = require("../Controllers/auth")
const { addIngredients, getBurgers } = require("../Controllers/burger")

const router = express()

router.post("/api/addingredient", addIngredients)
router.get("/api/allburgers/:userId", requireSignin, getBurgers)

router.param("userId", userById)


module.exports = router