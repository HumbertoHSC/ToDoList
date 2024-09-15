const pool = require('../conexao');
const bcrypt = require('bcrypt');

const excluirUsuario = async (req, res) => {
  const { email, senha } = req.body
  usuario = req.usuario
  usuarioId = req.userId

  const usuarioEmail = usuario.rows[0].email
  const usuarioSenha = usuario.rows[0].senha

  try {
    if (email !== usuarioEmail) {
      return res.status(403).json({ mensagem: 'Você só pode excluir sua própria conta' })
    }

    const senhaCorreta = await bcrypt.compare(senha, usuarioSenha)
    if (!senhaCorreta) {
      return res.status(400).json({ mensagem: 'Senha inválida' })
    }

    await pool.query('DELETE FROM tarefas WHERE usuario_id = $1', [usuarioId])

    await pool.query('DELETE FROM usuarios WHERE id = $1', [usuarioId])

    res.status(200).json({ mensagem: 'Usuário e suas tarefas foram excluídos com sucesso' })

  } catch (error) {
    res.status(500).json({ mensagem: 'Erro interno do servidor', erro: error.message })
  }
}

module.exports = excluirUsuario
