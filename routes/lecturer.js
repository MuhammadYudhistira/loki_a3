require('dotenv').config()

const express = require('express');
const router = express.Router()
const jwt = ('jsonwebtoken')

router.get('/', (req,res) => {
    res.send("lecturer page")
})

router.get('/login', (req,res) =>{
    //Authentication User

    const username = req.body.username
    const user = { name: username }

    const accessToken = generateAccessToken(user)
    res.json({accessToken: accessToken})

})

app.delete('/logout', (req,res)=>{
    refreshTokens = refreshTokens.filter(token => token!== req.body.token)
    res.sendStatus(204)
})

module.exports = router;
