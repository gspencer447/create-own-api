const express = require('express')
const config = require('./config')
const app = express()
const morgan = require('morgan')
const router = require("./routes")

app.use(express.json())
app.use(morgan("dev"))
app.use('/api', router)

app.listen(config.port, ()=> {
    console.log(`server is listening at port ${config.port}`)
})