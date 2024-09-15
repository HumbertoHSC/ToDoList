const express = require('express')
const rotas = express()

const login = require('./controladores/login')
const cadastroUsuario = require('./controladores/cadastroUsuario')

const autenticacao = require('./intermediarios/autenticacao')

rotas.post('/login', login)
rotas.post('/cadastro', cadastroUsuario)

rotas.use(autenticacao)

module.exports = rotas