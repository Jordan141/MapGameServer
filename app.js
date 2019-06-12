const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000
const IP = process.env.IP || "127.0.0.1"


app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    console.log('You were visited.')
})

app.post('/new', (req, res) => {
    //TODO: Create a new game
})

app.post('/update', (req, res) => {
    //TODO: Update an existing game
})

app.post('/close', (req, res) => {
    //TODO: Force close or delete an existing game.
})

app.listen(PORT, IP, (req, res) => {
    console.log('Server has started.')
})