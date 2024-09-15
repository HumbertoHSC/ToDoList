const express = require('express')
const rotas = express()

const autenticacao = require('./intermediarios/autenticacao')

const validarCorpoReq = require('./intermediarios/validarCorpoReq')

const schemaUsuario = require('./validacoes/schemaUsuario')
const schemaLogin = require('./validacoes/schemaLogin')
const schemaCriarTarefas = require('./validacoes/schemaCriarTarefas')
const schemaExcluirTarefas = require('./validacoes/schemaExcluirTarefas')
const schemaListarTarefas = require('./validacoes/schemaListarTarefas')

const cadastroUsuario = require('./controladores/cadastroUsuario')
const login = require('./controladores/login')

const criarTarefa = require('./controladores/criarTarefas')
const listarTarefas = require('./controladores/listarTarefas')
const excluirTarefa = require('./controladores/excluirTarefa')

rotas.post('/cadastro', validarCorpoReq(schemaUsuario), cadastroUsuario)
rotas.post('/login', validarCorpoReq(schemaLogin), login)

rotas.use(autenticacao)

rotas.post('/tarefa',  validarCorpoReq(schemaCriarTarefas), criarTarefa)
rotas.get('/tarefa', validarCorpoReq(schemaListarTarefas), listarTarefas)
rotas.delete('/tarefa', validarCorpoReq(schemaExcluirTarefas), excluirTarefa)

module.exports = rotas