const joi = require('joi')

const schemaListarTarefas = joi.object({

    id : joi.number().messages({
        'number.base': 'O campo ID deve ser um número!',
    })

})

module.exports = schemaListarTarefas