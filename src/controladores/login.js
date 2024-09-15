const bcrypt = require('bcrypt')
const pool = require('../conexao')
const jwt = require('jsonwebtoken')
const senhaJwt = require('../senhaJwt')

const login = async (req, res) => {
	const { email, senha } = req.body

	try {
		const { rows, rowCount } = await pool.query(
			'select * from usuarios where email = $1', [email]
		)

		if (rowCount === 0) {
			return res.status(400).json({ mensagem: 'Email inválido' })
		}

		const { senha: senhaUsuario, ...usuario } = rows[0]

		const senhaCorreta = await bcrypt.compare(senha, senhaUsuario);

		if (!senhaCorreta) {
			return res.status(400).json({ mensagem: 'Senha inválida' })
		}

		const token = jwt.sign({ id: usuario.id }, senhaJwt, { expiresIn: '4h' })

		return res.json({ usuario, token})

	} catch (error) {
		return res.status(500).json({ mensagem: 'Erro interno do servidor' })
	}
}

module.exports = login