const express = require("express")
const {userSignupValidator, userLoginValidator} = require("../validator")
const {signup, login, signout} = require("../Controllers/auth.js")
const router = express()

router.post("/api/signup", userSignupValidator, signup)
router.post("/api/login", userLoginValidator, login)
router.get("/api/signout", signout )

module.exports = router