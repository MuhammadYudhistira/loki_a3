const express = require('express');
const app = express()

app.set("view engine", "ejs")

app.get('/',(req,res) =>{
    res.send("HomePage")
    res.send("Test")
});

app.get('/mengubah',(req,res) =>{
    res.send("CPMK mata kuliah")
});

const userRouter = require("./routes/users")
const rpsRouter = require("./routes/rps")

app.use("/users", userRouter)
app.use("/rps", rpsRouter)

app.listen(5000)