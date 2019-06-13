app.get('/', (req, res) => {
    console.log('You were visited.')
})

app.post('/new', (req, res) => {
    //TODO: Create a new game
})

app.post('/connect', (req, res) => {
    //TODO: Connect to a new game
})

app.post('/update', (req, res) => {
    //TODO: Update an existing game
})

app.post('/close', (req, res) => {
    //TODO: Force close or delete an existing game.
})