const express = require ('express')
const router  = express.Router()


router.get('/', (req,res) => {
    res.render('dosendashboard')
})
router.get('/cpmk', (req,res) => {
    res.render('dosenCPMK')
})

<<<<<<< HEAD
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

router.get('/penilaian', (req,res) => {
    res.render('dosenPenilaian')
})

router.get('/mingguan', (req,res) => {
    res.render('dosenMingguan')
})

=======
router.get('/detail', (req,res) => {
    res.render('dosendetail')
})
>>>>>>> 0b245b0b23a36224c46b20c86503c5d2f21cbdb3
module.exports = router