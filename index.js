const express = require('express')
const db = require("./models/database.js")
const app = express()

require('dotenv').config()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || '8282'

db.checkConnect()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port,host, (req, res) => {
    console.log(`Server is listening on ${port}`)
})
