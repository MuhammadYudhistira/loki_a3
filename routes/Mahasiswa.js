const express = require('express');
const router = express.Router()


router.get('/pencarian_rps', (req,res)=> {
    res.send("new rps")
})

router.get('/melihat_rps', (req,res)=> {
    res.send("new rps")
})

router.get('/mengekspor_rps', (req,res)=> {
    res.send("new rps")
})

router.get('/matkul', (req,res) => {
    res.render('mahasiswamatkul')
})

module.exports = router;