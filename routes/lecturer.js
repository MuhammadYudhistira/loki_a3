require('dotenv').config()

const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("lecturer page")
})

router.get('/login', (req,res) =>{
})

router.delete('/logout', (req,res)=>{
})

module.exports = router;
