const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('You were visited.')
})

router.post('/new', (req, res) => {
    //TODO: Create a new game
    res.send('POST request to /new')
})

router.post('/connect', (req, res) => {
    //TODO: Connect to a new game
    res.send('POST request to /connect')
})

router.post('/update', (req, res) => {
    //TODO: Update an existing game
    res.send('POST request to /update')
})

router.post('/close', (req, res) => {
    //TODO: Force close or delete an existing game.
    res.send('POST request to /close')
})

module.exports = router