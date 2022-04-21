require('dotenv').config()

const express = require('express');
const router = express.Router()
const jwt = ('jsonwebtoken')


router.get('/', (req,res) => {
    res.send("lecturer page")
})

module.exports = router;

app.delete('/logout', (req,res)=>{
    refreshTokens = refreshTokens.filter(token => token!== req.body.token)
    res.sendStatus(204)
})