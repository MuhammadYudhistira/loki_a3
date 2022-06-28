const model = require('../models/indexmodel')
const { Op, QueryTypes  } = require("sequelize");
const sequelize = model.dbconfig
const jwt = require('jsonwebtoken')
const controller = {}


controller.listmatkul = async (req, res) => {

  const token = req.cookies.jwt
  if (!token) return res.status(200).send("tidak ada token")

  const nip = jwt.verify(token, process.env.TOKEN_SECRET)

  const matkul = await sequelize.query(
    'SELECT course_plans.code, course_plans.name, course_plans.credit, course_plans.rev, course_plans.semester, course_plans.id, course_plans.created_by FROM course_plan_lecturers JOIN course_plans ON course_plan_lecturers.course_plan_id = course_plans.id JOIN lecturers ON course_plan_lecturers.lecturer_id = lecturers.id WHERE lecturers.reg_id= :nipDosen;',
    {
        replacements: { nipDosen: nip.email },
        type: QueryTypes.SELECT
    }
)

    res.render("dosendashboard", {matkul})   
}

controller.detailmatkul = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where: {id}})

  res.render("dosendetail", {rps})
}

controller.revisirps = async (req, res) => {
  const id = req.params.id
  const rps = await model.course_plans.findOne({where: {id}})

  res.render("dosenrevisi", {rps})
}

module.exports = controller