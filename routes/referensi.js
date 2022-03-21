const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("rps list")
})

router.get('/tambah', (req,res)=> {
    res.send("dosen menenambah referensi")
})

router.get('/ubah', (req,res)=> {
    res.send("dosen mengubah referensi")
})

router.get('/hapus', (req,res)=> {
    res.send("dosen menghapus referensi")
})

module.exports = router;