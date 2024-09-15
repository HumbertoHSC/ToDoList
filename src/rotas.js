const express = require('express')
const rotas = express()

const cadastroUsuario = require('./controladores/cadastroUsuario')

rotas.post('/cadastro', cadastroUsuario)

module.exports = rotas