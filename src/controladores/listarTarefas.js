const Tarefa = require('../modelos/tarefa')

const listarTarefas = async (req, res) => {
    const { idUsuario } = req.body

    try {
        const filtro = {}
        
        if (idUsuario) {
            filtro.usuario_id = idUsuario
        }

        const resultado = await Tarefa.findAll({
            where: filtro, attributes: ['nome', 'prioridade', 'finalizada', 'id']
        })

        if (idUsuario && resultado.length === 0) {
            return res.status(404).json({ mensagem: 'Nenhuma tarefa encontrada para o usuário informado' })
        }

        res.status(200).json(resultado)
    } catch (error) {
        console.error('Erro ao listar tarefas:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = listarTarefas