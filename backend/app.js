const morgan = require ("morgan")
const express = require ('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const burgerRoots = require("./Routes/burger")
const authRoots = require("./Routes/auth")
const userRoots = require("./Routes/user")
const cookieParser = require("cookie-parser")


const app = express()

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(morgan('dev'))


app.use("/", burgerRoots)
app.use("/", authRoots)
app.use("/", userRoots)

app.listen(5000)