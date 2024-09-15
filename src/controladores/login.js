const bcrypt = require('bcrypt')
const Usuario = require('../modelos/usuario')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../senhaJwt')

const login = async (req, res) => {
    const { email, senha } = req.body

    try {

        const usuario = await Usuario.findOne({ where: { email } })

        if (!usuario) {
            return res.status(400).json({ mensagem: 'Email inválido' })
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha)

        if (!senhaCorreta) {
            return res.status(400).json({ mensagem: 'Senha inválida' })
        }

        const token = jwt.sign({ id: usuario.id }, senhaJwt, { expiresIn: '4h' })

        const usuarioSemSenha = {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        }

        return res.json({ usuario: usuarioSemSenha, token })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = login