const express = require('express')
const rotas = express()

const excluirUsuario = require('./controladores/excluirUsuario')

rotas.delete('/usuario', excluirUsuario)

module.exports = rotas