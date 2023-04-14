const morgan = require ("morgan")
const express = require ('express')
const bodyParser = require("body-parser")
const Ingredients = require("./roots")

const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use("/", Ingredients)

app.listen(5000)