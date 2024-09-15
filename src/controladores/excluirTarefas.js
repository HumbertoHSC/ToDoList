const pool = require('../conexao')

const excluirTarefa = async (req, res) => {
    const { id } = req.body
    const usuario_id = req.userId

    try {
        const tarefaQuery = 'SELECT usuario_id FROM tarefas WHERE id = $1'
        const tarefaResultado = await pool.query(tarefaQuery, [id])

        if (tarefaResultado.rows.length === 0) {
            return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
        }

        const tarefa = tarefaResultado.rows[0];

        if (tarefa.usuario_id !== usuario_id) {
            return res.status(403).json({ mensagem: 'Você não tem permissão para excluir esta tarefa' })
        }

        const deleteQuery = 'DELETE FROM tarefas WHERE id = $1'
        await pool.query(deleteQuery, [id])

        res.status(200).json({ mensagem: 'Tarefa excluída com sucesso' })
        
    } catch (error) {
        console.error('Erro ao excluir tarefa:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = excluirTarefa