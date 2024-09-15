const jwt = require('jsonwebtoken')
const Usuario = require('../modelos/usuario')
const senhaJwt = require('../senhaJwt')

const autenticacao = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }

    const token = authorization.replace('Bearer ', '').trim()

    try {
        const { id } = jwt.verify(token, senhaJwt)

        const usuarioExiste = await Usuario.findByPk(id)

        if (!usuarioExiste) {
            return res.status(401).json({ mensagem: 'Usuário não encontrado!' })
        }

        const { senha, ...usuario } = usuarioExiste.toJSON()

        req.usuario = usuario
        req.userId = id

        next()
    } catch (error) {
        console.error('Erro na autenticação:', error)
        return res.status(401).json({ mensagem: 'Não autorizado' })
    }
}

module.exports = autenticacao