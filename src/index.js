const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('ejs')

const homePage = require('./routes/home.js')


const app = express()

// setting
app.set('port', 3000)
app.set('nameApp', 'App Express')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// middlewares
app.use(morgan('dev'))

// routes
app.use(homePage)

// Routes Public
app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.status(404).send('Not found')
})


app.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`)
})
