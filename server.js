const express = require('express');
const app = express()

app.set("view engine", "ejs")

app.get('/',(req,res) =>{
    res.send("HomePage")
    res.send("Test")
});

app.get('/mencetak',(req,res) =>{
    res.send("laporan")
});

app.get('/menambahkan',(req,res) =>{
    res.send("CPMK")
});

const userRouter = require("./routes/users")
const rpsRouter = require("./routes/rps")

app.use("/users", userRouter)
app.use("/rps", rpsRouter)

app.listen(5000)

