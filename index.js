require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

const cr7Data =
{
    "name": "Cristiano Ronaldo",
    "team": "Al-Nassr",
    "nationality": "Portuguese",
    "position": "Forward",
    "goals": 800,
    "assists": 220,
    "appearances": 1050
}

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

app.get('/cr7', (req, res) => {
    res.json(cr7Data)
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port: ${process.env.PORT}`)
})