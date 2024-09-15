const joi = require('joi')

const schemaListarTarefas = joi.object({

    idUsuario : joi.number().messages({
        'number.base': 'O campo ID deve ser um número!',
    })

})

module.exports = schemaListarTarefas