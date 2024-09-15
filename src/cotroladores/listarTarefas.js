const pool = require('../conexao');

const listarTarefas = async (req, res) => {
    const { idUsuario } = req.body

    try {
        let query
        let params = []

        if (idUsuario) {
            query = 'SELECT nome, prioridade, finalizada FROM tarefas WHERE usuario_id = $1'
            params = [idUsuario]
        } else {
            query = 'SELECT nome, prioridade, finalizada FROM tarefas'
        }

        const resultado = await pool.query(query, params)

        if (idUsuario && resultado.rows.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhuma tarefa encontrada para o usuário informado' })
        }

        res.status(200).json(resultado.rows)
    } catch (error) {
        console.error('Erro ao listar tarefas:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = listarTarefas