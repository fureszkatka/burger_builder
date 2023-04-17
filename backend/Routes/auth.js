const express = require("express")
const validator = require("../validator")
const addUser = require("../Controllers/auth.js")

const router = express()

router.post("/api/signup", validator.userSignupValidator, addUser.addUser)

module.exports = router