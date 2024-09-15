const express = require('express')
const rotas = express()

const login = require('./controladores/login')

rotas.post('/login', login)

module.exports = rotas