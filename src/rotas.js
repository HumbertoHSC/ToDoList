const express = require('express')
const rotas = express()

const login = require('./controladores/login')
const cadastroUsuario = require('./controladores/cadastroUsuario')

const autenticacao = require('./intermediarios/autenticacao')

rotas.post('/cadastro', validarCorpoReq(schemaUsuario), cadastroUsuario)
rotas.post('/login', validarCorpoReq(schemaLogin), login)

rotas.use(autenticacao)

module.exports = rotas