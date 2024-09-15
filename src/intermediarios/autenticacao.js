const jwt = require('jsonwebtoken')
const pool = require('../conexao')
const senhaJwt = require('../senhaJwt')

const autenticacao = async (req, res, next) => {
	const { authorization } = req.headers

	if (!authorization) {
		return res.status(401).json({ mensagem: 'Não autorizado' })
	}

	const token = authorization.replace('Bearer ', '').trim();

	try {
		const { id } = jwt.verify(token, senhaJwt);

		const usuarioExiste = await pool.query('select * from usuarios where id = $1',[id])

		if (!usuarioExiste) {
			return res.status(401).json({ mensagem: 'Usuario não encontrado!' })
		}

		const { senha, ...usuario } = usuarioExiste

		req.usuario = usuario
        req.userId = id

		next()
	} catch (error) {
		return res.status(401).json({ mensagem: 'Não autorizado' })
	};
};

module.exports = autenticacao