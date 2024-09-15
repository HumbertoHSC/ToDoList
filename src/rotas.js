const express = require('express')
const rotas = express()

const validarCorpoReq = require('./intermediarios/validarCorpoReq')

const autenticacao = require('./intermediarios/autenticacao')

const schemaUsuario = require('./validacoes/schemaUsuario')
const schemaLogin = require('./validacoes/schemaLogin')

const login = require('./controladores/login')
const cadastroUsuario = require('./controladores/cadastroUsuario')

const criarTarefa = require('./controladores/criarTarefas')
const listarTarefas = require('./controladores/listarTarefas')

rotas.post('/cadastro', validarCorpoReq(schemaUsuario), cadastroUsuario)
rotas.post('/login', validarCorpoReq(schemaLogin), login)

rotas.use(autenticacao)

rotas.post('/tarefa', criarTarefa)
rotas.get('/tarefa', listarTarefas)

module.exports = rotas