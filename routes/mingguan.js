const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("list mingguan")
})

router.get('/menambah pertemuan', (req,res)=> {
    res.send("dosen menambah pertemuan mingguan rps")
})

router.get('/mengubah pertemuan', (req,res)=> {
    res.send("dosen mengubah pertemuan mingguan rps")
})

router.get('/menghapus pertemuan', (req,res)=> {
    res.send("dosen menghapus pertemuan mingguan rps")
})

module.exports = router;