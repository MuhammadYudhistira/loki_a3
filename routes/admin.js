const express = require('express');
const router = express()
const controller = require('../controller/indexcontrollers')

router.set('view engine', 'ejs');
router.use( express.static( "public" ) );

router.get("/", controller.admin.dashboard)
router.get("/matakuliah", controller.admin.matakuliah)
router.get("/lihat-laporan", controller.admin.laporan)
router.get("/dosen", controller.lecturers.tampilMenentukanDosen)
router.get("/dosen:id", controller.lecturers.tampilMenentukanDosen)

module.exports = router;