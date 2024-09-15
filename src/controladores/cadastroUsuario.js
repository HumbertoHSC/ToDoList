const pool = require('../conexao')
const bcrypt = require('bcrypt')

const cadastroUsuario = async (req, res) => {
    const { nome, email, senha, confirmarSenha} = req.body

    try {

        const queryConsultaEmail = ('select * from usuarios where email = $1')

		const { rowCount } = await pool.query(queryConsultaEmail, [email]);

        if (rowCount > 0) {
            return res.status(400).json({ mensagem: 'E-mail informado já está cadastrado!' });
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)

		const novoUsuario = await pool.query(
            'insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *', [nome, email, senhaCriptografada])
        
        const usuarioSemSenha = {
            id: novoUsuario.rows[0].id,
            nome: novoUsuario.rows[0].nome,
            email: novoUsuario.rows[0].email,
        }

		return res.status(201).json(usuarioSemSenha)

	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

module.exports = cadastroUsuario