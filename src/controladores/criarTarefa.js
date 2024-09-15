const Tarefa = require('../modelos/tarefa')

const criarTarefa = async (req, res) => {
    const { nome, descricao, prioridade = 'Baixa' } = req.body
    const usuario_id = req.userId

    try {
        const novaTarefa = await Tarefa.create({
            nome,
            descricao,
            prioridade,
            usuario_id,
            finalizada: false,
            data_termino: null,
        })

        return res.status(201).json(novaTarefa)

    } catch (error) {
        console.error('Erro ao criar tarefa:', error)
        return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
}

module.exports = criarTarefa