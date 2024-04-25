const express = require('express')
const {connectDatabase} = require("./models/database.js")
const app = express()

require('dotenv').config()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || '8282'

const db = connectDatabase()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,host, (req, res) => {
    console.log(`Server is listening on ${port}`)
})
