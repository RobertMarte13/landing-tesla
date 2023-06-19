const { Router } = require('express')

const routes = Router()

routes.get('/landing-page-de-tesla.netlify.app', (req, res) => {
    res.render('index')
})

routes.get('/landing-page-de-tesla.netlify.app/home', (req, res) => {
    res.render('index')
})

module.exports = routes