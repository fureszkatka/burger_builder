const express = require("express")
const router = express()
const { requireSignin } = require("../Controllers/auth")
const {userById, getUser} = require("../Controllers/user")
 

router.get("/api/user/:userId", requireSignin, getUser)

router.param("userId", userById)

module.exports = router