const express = require('express')
const rotas = express()

const cadastroUsuario = require('./controladores/cadastroUsuario')

rotas.post('/cadastro', cadastroUsuario)

const autenticacao = require('./intermediarios/autenticacao')

rotas.use(autenticacao)

module.exports = rotas