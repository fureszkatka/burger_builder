const morgan = require ("morgan")
const express = require ('express')
const bodyParser = require("body-parser")
const Ingredients = require("./roots")

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use("/", Ingredients)

app.listen(port, function() {
    console.log('Server started on port: ' + port);
})