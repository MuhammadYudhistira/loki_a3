const model = require('../models/indexmodel')
const { Op } = require("sequelize")
const controller = {}

controller.matakuliah = async (req, res) => {
    const kurikulum = await model.curricula.findAll()
    const matkul = await model.courses.findAll()
    res.render('admin-listmatkul', {kurikulum, matkul});
}

controller.dashboard = async (req, res) => {
    res.render('admin-dashboard')
}

controller.laporan = async (req, res) => {
    res.render('admin-laporan')
}

module.exports = controller;