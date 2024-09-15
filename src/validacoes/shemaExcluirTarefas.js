const joi = require('joi')

const schemaExcluitTarefas = joi.object({

    id : joi.number().required().messages({
        'number.base': 'O campo ID deve ser um número!',
        'any.required': 'O campo ID é obrigatório'
    })

})

module.exports = schemaExcluitTarefas