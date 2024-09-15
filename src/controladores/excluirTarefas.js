const Tarefa = require('../modelos/tarefa')

const excluirTarefa = async (req, res) => {
    const { id } = req.body
    const usuario_id = req.userId

    try {
        const tarefa = await Tarefa.findOne({
            where: {
                id,
                usuario_id
            }
        })

        if (!tarefa) {
            return res.status(404).json({ mensagem: 'Tarefa não encontrada' })
        }

        if (tarefa.usuario_id !== usuario_id) {
            return res.status(403).json({ mensagem: 'Você não tem permissão para excluir esta tarefa' })
        }

        await tarefa.destroy()

        res.status(200).json({ mensagem: 'Tarefa excluída com sucesso' })
    } catch (error) {
        console.error('Erro ao excluir tarefa:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = excluirTarefa