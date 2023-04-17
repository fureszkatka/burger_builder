const morgan = require ("morgan")
const express = require ('express')
const bodyParser = require("body-parser")
const burgerRoots = require("./Routes/burger")
const authRoots = require("./Routes/auth")


const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))


app.use("/", burgerRoots)
app.use("/", authRoots)

app.listen(5000)