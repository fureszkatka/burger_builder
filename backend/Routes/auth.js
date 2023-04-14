const express = require("express")
const {userSignupValidator} = require("../validator")
const {addUser,signin,signout} = require("../controllers/auth")

const router = express()

router.post("/signup", userSignupValidator, addUser)

module.exports = router