const { Sequelize } = require('sequelize')

module.exports = new Sequelize('loki', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })