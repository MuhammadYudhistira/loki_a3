const express = require ('express')
const router  = express()
const controller = require('../controller/indexcontrollers')


router.set('view engine', 'ejs');
router.use( express.static( "public" ) );

router.get('/', controller.dosen.listmatkul)

router.get('/revisi', (req,res) => {
    res.render('dosenrevisi')
})
router.get('/cpmk', (req,res) => {
    res.render('dosencpmk')
})
router.get('/referensi', (req,res) => {
    res.render('dosenreferensi')
})
router.get('/penilaian', (req,res) => {
    res.render('dosenpenilaian')
})
router.get('/mingguan', (req,res) => {
    res.render('dosenmingguan')
})
router.get('/detail', (req,res) => {
    res.render('dosendetail')
})
router.get('/CPMK', (req,res) => {
    res.render('dosenCPMK')
})
router.get('/tambah', (req,res) => {
    res.render('tambahRPS')
})
router.get('/edit', (req,res) => {
    res.render('dosenedit')
})

module.exports = router