const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("user list")
})

router.get('/new', (req,res)=> {
    res.send("User New Form")
})

router.get('/Account', (req,res) =>{
    res.send('Your Account')
})



router.put('/login', (req,res) =>{
    res.send("Login")
});

router.put('/logout', (req,res) =>{
    res.send("Logout")
});

module.exports = router;