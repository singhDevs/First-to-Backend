require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('singhguransh')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login Portal</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<hp><i>Chai aur Code</i></p>')
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port: ${process.env.PORT}`)
})