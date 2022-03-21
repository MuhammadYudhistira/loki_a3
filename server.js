const express = require('express');
const app = express()

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

 app.get('/mengeksport',(req,res) =>{
     res.send("RPS jadi PDF")
 });
     
const userRouter = require("./routes/users")
const rpsRouter = require("./routes/rps")
const MahasiswaRouter = require("./routes/Mahasiswa")

app.use("/users", userRouter)
app.use("/rps", rpsRouter)
app.use("/Mahasiswa", MahasiswaRouter)

app.listen(5000)

