const express = require('express');
const router = express()
const controller = require('../controller/indexcontrollers')

router.set('view engine', 'ejs');
router.use( express.static( "public" ) );

router.get('/', (req,res) => {
    res.render('admin-dashboard')
})

router.get('/rps', (req,res) => {
    res.render('')
})

router.get('/matakuliah', (req,res) => {
    res.render('admin-listmatkul')
})

router.get("/dosen", controller.lecturers.tampilMenentukanDosen);

router.get('/melihat-laporan', (req,res) => {
})

router.get('/mencetak_laporan', (req,res)=> {
    res.send("new rps")
})
module.exports = router;