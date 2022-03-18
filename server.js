const express = require('express');
const app = express()

app.set("view engine", "ejs")

app.get('/',(req,res) =>{
    res.send("HomePage")
    res.send("Test")
});

<<<<<<< HEAD
app.get('/mencetak',(req,res) =>{
    res.send("laporan")
});

app.get('/menambahkan',(req,res) =>{
    res.send("CPMK")
=======
app.get('/mengubah',(req,res) =>{
    res.send("CPMK mata kuliah")
>>>>>>> 194fddf308425899ea711d5eda9610b29eed6972
});

const userRouter = require("./routes/users")
const rpsRouter = require("./routes/rps")

app.use("/users", userRouter)
app.use("/rps", rpsRouter)

app.listen(5000)

