const indexcontrollers = {}

const users = require('./users')
indexcontrollers.users = users

const lecturers = require('./lecturers-controller')
indexcontrollers.lecturers = lecturers

const admin = require('./admin-controller')
indexcontrollers.admin = admin

module.exports = indexcontrollers;