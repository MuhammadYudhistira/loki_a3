const express = require ('express')
const router  = express.Router()


router.get('/', (req,res) => {
    res.render('dosendashboard')
})

// const { v4: uuidv4 } = require('uuid');

// let users = []

// router.get('/', (req,res) =>{
//     console.log(users)
//     res.send(users)
// })

// router.post('/', (req,res) => {
//     const user = req.body
//     users.push({... user, id: uuidv4()})
//     res.send(`User with the name ${user.firstName} added`)
// })

// router.route('/:id')
// .get((req,res) =>{
//     const { id } = req.params
//     const foundUser = users.find((user) => user.id == id)
//     res.send(foundUser)
// })
// .patch((req,res) =>{
//     const { id } = req.params
//     const {firstName, lastName, age} = req.body

//     const user = users.find((user) => user.id = id)
    
//     if(firstName) user.firstName = firstName
//     if(lastName) user.lastName = lastName
//     if(age) user.age = age

//     res.send(`user with the id ${id} updated`)

// })
// .delete((req,res) =>{
//     const { id } = req.params

//     users = users.filter((user) => user.id != id)

//     res.send(`user with the id ${id} deleted`)

// })

router.get('/CPMK', (req,res) => {
    res.render('dosenCPMK')
})

module.exports = router

