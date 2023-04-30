const express = require("express")
const { requireSignin, userById } = require("../Controllers/auth")
const { addIngredients, getBurgers, deleteBurger} = require("../Controllers/burger")

const router = express()

router.post("/api/addingredient", addIngredients)
router.get("/api/allburgers/:userId", requireSignin, getBurgers)
router.delete("/api/deleteburger/:userId", requireSignin, deleteBurger)


router.param("userId", userById)


module.exports = router