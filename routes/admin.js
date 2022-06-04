const express = require('express');
const router = express()

router.set('view engine', 'ejs');
router.use( express.static( "views" ) );

router.get('/', (req,res) => {
    res.render('dashboardAdmin')
})

router.get('/matakuliah', (req,res) => {
    res.render('adminmatkul')
})

router.get('/dosen', (req,res)=> {
    res.render('admindosen')
})

router.get('/menentukan-dosen', (req,res)=> {
    res.send("choose Dosen")
})

router.get('/melihat-laporan', (req,res) => {
})

router.get('/mencetak_laporan', (req,res)=> {
    res.send("new rps")
})
module.exports = router;