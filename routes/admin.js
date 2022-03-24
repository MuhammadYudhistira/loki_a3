const express = require('express');
const router = express.Router()

router.use(express.json())

router.get('/', (req,res) => {
    res.send("admin")
})

router.get('/menentukan-dosen', (req,res)=> {
    res.send("choose Dosen")
})

router.get('/melihat-laporan', (req,res) => {
    let obj = {
        "matakuliah" : "pemograman web",
        "kode" : 123,
        "sks" : 3,
        "semester" : 4,
        "cpps" : [
            {
                "kode" : "CP-1",
                "Keterangan" : "Mengidentifikasi, memformulasikan dan memecahkan permasalahan kebutuhan informasi dari suatu organisasi"

            },

            {
                "kode" : "CP-2",	
                "Keterangan" : "Mengintegrasikan solusi berbasis teknologi informasi secara efektif pada suatu organisasi"
            },

            {
                "kode" : "CP-3",
                "Keterangan" : "Menerapkan konsep-konsep dasar dalam merencanakan Sistem Informasi, merancang Sistem Informasi, membangun Sistem Informasi, mengoperasikan Sistem Informasi, dan mengevaluasi Sistem Informasi"
            }
        ],

        "CPMK" : [
            {
                "Nomor" : "1", 
                "Keterangan" : "Mahasiswa mampu menjelaskan konsep dasar dan komponen aplikasi berbasis web (CP-1, CP-2)"
            },

            {
                "Nomor" : "2", 
                "Keterangan" : "Mahasiswa mampu menggunakan salah satu technology stack untuk membangun aplikasi berbasis web (CP-1, CP-2)"
            },

            {
                "Nomor" : "3", 
                "Keterangan" : "Mahasiswa mampu menggunakan pemograman asynchronous . (CP-2, CP-3)"
            },

            {
                "Nomor" : "4", 
                "Keterangan" : "Mahasiswa mampu menerapkan keamanan untuk situs web . (CP-2, CP-3)"
            },

            {
                "Nomor" : "5", 
                "Keterangan" : "Mahasiswa mampu menggunakan dan mendesain format data JSON. (CP-2, CP-3)"
            },

            {
                "Nomor" : "6", 
                "Keterangan" : "Mahasiswa mampu deploy aplikasi web ke internet. (CP-2)"
            },

            {
                "Nomor" : "7", 
                "Keterangan" : "Mahasiswa mampu mendemonstrasikan keterampilan bekerja sama dengan tim (CP-3)"
            }
        ]

    }
    res.json(obj)
})

router.get('/mencetak_laporan', (req,res)=> {
    res.send("new rps")
})


module.exports = router;