const Usuario = require('../modelos/usuario')
const bcrypt = require('bcrypt')

const cadastroUsuario = async (req, res) => {
    const { nome, email, senha, confirmarSenha } = req.body

    try {
        // Verifica se o usuário já existe
        const usuarioExistente = await Usuario.findOne({ where: { email } })

        if (usuarioExistente) {
            return res.status(400).json({ mensagem: 'E-mail informado já está cadastrado!' })
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = await Usuario.create({
            nome,
            email,
            senha: senhaCriptografada
        })

        const usuarioSemSenha = {
            id: novoUsuario.id,
            nome: novoUsuario.nome,
            email: novoUsuario.email
        };

        return res.status(201).json(usuarioSemSenha)

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = cadastroUsuario