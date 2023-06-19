const express = require('express')
const morgan = require('morgan')
const path = require('path')
require('ejs')

const homePage = require('./routes/home.js')

const app = express()

// setting
app.set('port', 3000)
app.set('nameApp', 'App Express')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use(morgan('dev'))

// routes
app.use(homePage)

// Routes Public
app.use('public', express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
    res.status(404).send('Not found')
})


app.listen(process.env.PORT || 3000)
console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`)
