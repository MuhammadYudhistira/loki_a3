const express = require('express');
const app = express()

app.get('/',(req,res) =>{
    res.send("HomePage")
    res.send("Test")
})

const userRouter = require("./routes/users")
const rpsRouter = require("./routes/rps")
const MahasiswaRouter = require("./routes/Mahasiswa")
const cpmkRouter = require("./routes/cpmk")
const referensiRouter = require("./routes/referensi")

app.use("/users", userRouter)
app.use("/rps", rpsRouter)
app.use("/Mahasiswa", MahasiswaRouter)
app.use("/users", userRouter)
app.use("/rps", rpsRouter)
app.use("/cpmk", cpmkRouter)
app.use("/referensi", referensiRouter)

app.listen(5000)