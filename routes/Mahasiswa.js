const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.render('mahasiswaDashboard')
})

router.get('/pencarian_rps', (req,res)=> {
    res.send("new rps")
})

router.get('/melihat_rps', (req,res)=> {
    res.send("new rps")
})

router.get('/mengekspor_rps', (req,res)=> {
    res.send("new rps")
})

module.exports = router;