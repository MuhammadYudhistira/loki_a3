const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("list penilaian")
})

router.get('/tambah', (req,res)=> {
    res.send("dosen menenambah kompenen penilaian")
})

router.get('/ubah', (req,res)=> {
    res.send("dosen mengubah kompenen penilaian")
})

router.get('/hapus', (req,res)=> {
    res.send("dosen menghapus kompenen penilaian")
})

module.exports = router;