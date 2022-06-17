const model = require('../models/index-model');
const controller = {};


controller.tampilMenentukanDosen = async (req, res) => {
    const namadsn = await model.lecturers.findAll({ order: ['name'] ,attributes: ['name', 'reg_id', 'phone']});
    res.render("admin-memilihdosen", 
    { 
      dasbordaktif: "", 
      rpsaktif: "active",
      dosen:namadsn
    });
}

controller.retrieveAll = async (req, res) => {
    try {
      const dosen = await model.lecturers.findAll();
      res.json(dosen);
    } catch (error) {
      res.json({ message: error.message });
    }
  };

module.exports = controller;