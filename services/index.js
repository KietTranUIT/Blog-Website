const express = require('express')
const host = '127.0.0.1'
const port = 8181
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, (req, res) => {
    console.log('Listening on port 8181')
})