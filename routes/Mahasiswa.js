const express = require('express');
const router = express()

router.set('view engine', 'ejs');
router.use( express.static( "public" ) );

router.get('/matkul', (req,res) => {
    res.render('mahasiswamatkul')
})

router.get('/detail', (req,res) => {
    res.render('mahasiswadetail')
})

module.exports = router;