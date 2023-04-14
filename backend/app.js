const morgan = require ("morgan")
const express = require ('express')
const bodyParser = require("body-parser")
const burgerRoots = require("./Routes/burger")

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use("/", burgerRoots)

app.listen(5000)