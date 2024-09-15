const pool = require('../conexao')

const criarTarefa = async (req, res) => {
    const { nome, descricao, prioridade = 'Baixa' } = req.body
    const usuario_id = req.userId

    try {
        const novaTarefa = await pool.query(
            'INSERT INTO tarefas (nome, descricao, prioridade, usuario_id, finalizada, data_termino) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [nome, descricao, prioridade, usuario_id, false, null]
        )

        return res.status(201).json(novaTarefa.rows[0])

    } catch (error) {
        console.error('Erro ao criar tarefa:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = criarTarefa