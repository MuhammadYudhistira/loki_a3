const model = require('../models/indexmodel')
const controller = {}

controller.retrieveAll = async (req, res) => {
    try {
      const dosen = await model.lecturers.findAll()
      res.json(dosen)
    } catch (error) {
      res.json({ message: error.message })
    }
  }

controller.listmatkul = async function(req, res){

    res.render("dosendashboard")   
}

module.exports = controller