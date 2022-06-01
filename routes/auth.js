const express = require('express');
const router = express()

router.set('view engine', 'ejs');
router.use( express.static( "views" ) );

router.get('/', (req,res) => {
    res.send("")
})

router.get('/login', (req,res)=> {
    res.render("login")
})

router.get('/register', (req,res)=> {
    res.render("register")
})

module.exports = router;