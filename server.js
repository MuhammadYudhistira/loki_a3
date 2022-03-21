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
const adminRouter = require("./routes/admin")

app.use("/users", userRouter)
app.use("/rps", rpsRouter)
app.use("/admin", adminRouter)

app.listen(5000)

