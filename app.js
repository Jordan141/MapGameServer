const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const firebase = require('firebase')
const PORT = process.env.PORT || 8000
const IP = process.env.IP || "127.0.0.1"
const projectId = process.env.PROJECT_ID

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    projectId: projectId,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: process.env.MESSAGING_ID,
    appId: process.env.APP_ID
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, IP, (req, res) => {
    console.log('Server has started.')
})