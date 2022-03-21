const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("rps list")
})

router.get('/menentukan_dosen', (req,res)=> {
    res.send("new rps")
})

router.get('/melihat_laporan ', (req,res) => {
    res.send("rps list")
})

router.get('/mencetak_laporan ', (req,res)=> {
    res.send("new rps")
})


module.exports = router;