const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("rps list")
})

router.get('/tambah', (req,res)=> {
    res.send("new rps")
})

router.get('/ubah', (req,res)=> {
    res.send("new rps")
})

router.get('/', (req,res)=> {
    res.send("new rps")
})

module.exports = router;