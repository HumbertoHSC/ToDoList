const express = require('express')
const rotas = express()

const listarTarefas = require('./controladores/listarTarefas')

rotas.get('/tarefa', listarTarefas)

const validarCorpoReq = require('./intermediarios/validarCorpoReq')

const autenticacao = require('./intermediarios/autenticacao')

const schemaUsuario = require('./validacoes/schemaUsuario')
const schemaLogin = require('./validacoes/schemaLogin')

const login = require('./controladores/login')
const cadastroUsuario = require('./controladores/cadastroUsuario')

rotas.post('/cadastro', validarCorpoReq(schemaUsuario), cadastroUsuario)
rotas.post('/login', validarCorpoReq(schemaLogin), login)

rotas.use(autenticacao)

module.exports = rotas