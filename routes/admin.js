const express = require('express');
const router = express()

router.set('view engine', 'ejs');
router.use( express.static( "views" ) );

router.get('/', (req,res) => {
    res.render('admin-dashboard')
})

router.get('/rps', (req,res) => {
    res.render('')
})

router.get('/matakuliah', (req,res) => {
    res.render('admin-listmatkul')
})

router.get('/dosen', (req,res)=> {
    res.render('admin-memilihdosen')
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