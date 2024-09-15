const express = require('express')
const rotas = express()

const listarTarefas = require('./controladores/listarTarefas')

rotas.get('/tarefa', listarTarefas)

module.exports = rotas