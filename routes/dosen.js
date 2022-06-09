const express = require ('express')
const router  = express()


router.set('view engine', 'ejs');
router.use( express.static( "views" ) );

router.get('/', (req,res) => {
    res.render('dashboardDosen')
})
router.get('/cpmk', (req,res) => {
    res.render('dosenCPMK')
})
router.get('/penilaian', (req,res) => {
    res.render('dosenPenilaian')
})

router.get('/mingguan', (req,res) => {
    res.render('dosenMingguan')
})

router.get('/detail', (req,res) => {
    res.render('dosendetail')
})
router.get('/CPMK', (req,res) => {
    res.render('dosenCPMK')
})

module.exports = router