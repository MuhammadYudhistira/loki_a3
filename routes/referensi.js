const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("rps list")
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