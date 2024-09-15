const { DataTypes } = require('sequelize')
const sequelize = require('../conexao')

const Tarefa = sequelize.define('Tarefa', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  prioridade: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Baixa',
  },
  finalizada: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  data_termino: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'tarefas',
  timestamps: false,
})

module.exports = Tarefa
