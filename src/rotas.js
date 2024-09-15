const express = require('express')
const rotas = express()

const criarTarefa = require('./controladores/criarTarefas')

rotas.post('/tarefa', criarTarefa)

module.exports = rotas