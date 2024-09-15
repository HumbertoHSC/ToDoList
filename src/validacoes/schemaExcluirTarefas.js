const joi = require('joi')

const schemaExcluirTarefas = joi.object({

    id : joi.number().required().messages({
        'number.base': 'O campo ID deve ser um número!',
        'any.required': 'O campo ID é obrigatório'
    })

})

module.exports = schemaExcluirTarefas