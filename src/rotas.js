const express = require('express')
const rotas = express()

const autenticacao = require('./intermediarios/autenticacao')

rotas.use(autenticacao)

module.exports = rotas