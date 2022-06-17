const express = require('express');
const router = express()

router.set('view engine', 'ejs');
router.use( express.static( "public" ) );

router.get('/pencarian_rps', (req,res)=> {
    res.send("new rps")
})

router.get('/melihat_rps', (req,res)=> {
    res.send("new rps")
})

router.get('/mengekspor_rps', (req,res)=> {
    res.send("new rps")
})

router.get('/matkul', (req,res) => {
    res.render('mahasiswamatkul')
})

module.exports = router;