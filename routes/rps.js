const express = require('express');
const router = express.Router()
const db = require('../config/db')

router.get('/', (req,res) => {
    res.send("rps list")
})

router.get('/new', (req,res)=> {
    res.send("new rps")
})

module.exports = router;