const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("list mingguan")
})

router.route('/:id')
.get((req,res) =>{
})
.patch((req,res) =>{
})
.delete((req,res) =>{ 
})

module.exports = router;

