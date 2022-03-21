const express = require('express');
const app = express()

app.get('/',(req,res) =>{
    res.send("HomePage")
    res.send("Test")
})
const userRouter = require("./routes/users")
const rpsRouter = require("./routes/rps")
const MahasiswaRouter = require("./routes/Mahasiswa")
const mingguanRouter = require("./routes/mingguan")
const cpmkRouter = require("./routes/cpmk")
const referensiRouter = require("./routes/referensi")
const penilaianRouter = require("./routes/penilaian")

app.use("/users", userRouter)
app.use("/rps", rpsRouter)
app.use("/Mahasiswa", MahasiswaRouter)
app.use("/mingguan", mingguanRouter)
app.use("/cpmk", cpmkRouter)
app.use("/referensi", referensiRouter)
app.use("/penilaian", penilaianRouter)

app.listen(5000)