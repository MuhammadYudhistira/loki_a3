const express = require('express');
const router = express.Router()

router.use(express.json)
router.get('/', (req,res) => {
    res.send("list referensi")
    let obj = {
        "utama" : [
            {
            "nama" : "Matt Doyle & Wrox",
            "tahun" : 2009,
            "judul" : "Beginning PHP 5.3"
            },
            {
            "nama" : "Nicholas Zaka, John Wiley, & Sons",
            "tahun" : 2012,
            "judul" : "Professional Javascript for Web Developer"
            },
        ],

        "pendukung" : [
            {
                "nama" : "Mark Pilgrim & O’Reilly",
                "tahun" : 2010,
                "judul" : "HTML5 Up and Running"
                },
                {
                "nama" : "Steve Fulton, Jeff Fulton, O’Reilly",
                "tahun" : 2011,
                "judul" : "HTML5 Canva"
                },
                {
                "nama" : "S. Stefano & O’Reilly",
                "tahun" : 2010,
                "judul" : "Javascript Pattern"
                },
        ]

    }
    res.json(obj)
})

router.route('/:id')
.get((req,res) =>{
    const { id } = req.params
    const foundUser = users.find((user) => user.id == id)
    res.send(foundUser)
})
.patch((req,res) =>{
    
    res.send(`user with the id ${id} updated`)

})
.delete((req,res) =>{
    const { id } = req.params

    users = users.filter((user) => user.id != id)

    res.send(`user with the id ${id} deleted`)

})

module.exports = router;