const joi = require('joi')

const schemaCriarTarefas = joi.object({

    nome: joi.string().min(5).max(50).required().messages({
        'string.min': 'O campo nome deve ter entre 5 e 50 caracteres!',
        'string.max': 'O campo nome deve ter entre 5 e 50 caracteres!',
        'any.required': 'O campo nome é obrigatório!'
    }),

    descricao: joi.string().max(140).optional().messages({
        'string.max': 'O campo descrição deve ter no máximo 140 caracteres!'
    }),

    prioridade: joi.string().valid('Baixa', 'Média', 'Alta').messages({
        'any.only': 'O campo prioridade deve ser "Baixa", "Média" ou "Alta"!',
    }),
    
})

module.exports = schemaCriarTarefas