const express = require('express')
const rotas = express()

const excluirTarefa = require('./controladores/excluirTarefa')

rotas.delete('/tarefa', excluirTarefa)

module.exports = rotas