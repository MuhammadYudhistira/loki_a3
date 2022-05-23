const express = require('express');
const router = express.Router()
const db = require('../models/dbconfig')

router.get('/', (req,res) => {
    res.send("rps list")
})

router.get('/new', (req,res)=> {
    res.send("new rps")
})

module.exports = router;