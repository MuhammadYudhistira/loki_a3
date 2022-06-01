const express = require ('express')
const router  = express.Router()


router.get('/', (req,res) => {
    res.render('dosendashboard')
})
router.get('/cpmk', (req,res) => {
    res.render('dosenCPMK')
})

router.get('/detail', (req,res) => {
    res.render('dosendetail')
})
module.exports = router