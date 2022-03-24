const express = require('express');
const router = express.Router()

router.use(express.json)
router.get('/', (req,res) => {
    res.send("list referensi")
    let obj = {
        "utama" : [
            {
            "nama" : "Matt Doyle & Wrox",
            "tahun" : 2009,
            "judul" : "Beginning PHP 5.3"
            },
            {
            "nama" : "Nicholas Zaka, John Wiley, & Sons",
            "tahun" : 2012,
            "judul" : "Professional Javascript for Web Developer"
            },
        ],

        "pendukung" : [
            {
                "nama" : "Mark Pilgrim & O’Reilly",
                "tahun" : 2010,
                "judul" : "HTML5 Up and Running"
                },
                {
                "nama" : "Steve Fulton, Jeff Fulton, O’Reilly",
                "tahun" : 2011,
                "judul" : "HTML5 Canva"
                },
                {
                "nama" : "S. Stefano & O’Reilly",
                "tahun" : 2010,
                "judul" : "Javascript Pattern"
                },
        ]

    }
    res.json(obj)
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