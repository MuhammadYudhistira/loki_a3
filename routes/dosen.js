const express = require ('express')
const router  = express()


router.set('view engine', 'ejs');
router.use( express.static( "views" ) );

router.get('/', (req,res) => {
    res.render('dosendashboard')
})
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
router.get('/edit', (req,res) => {
    res.render('CPMKedit')
})
router.get('/hapus', (req,res) => {
    res.render('CPMKhapus')
})
router.get('/tambah', (req,res) => {
    res.render('CPMKtambah')
})
module.exports = router