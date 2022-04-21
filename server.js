require('dotenv').config()

const express = require('express');
const app = express()
const db = require('./config/db')

app.use(express.json())

app.get('/',(req,res) =>{
    res.send("HomePage")
});


const userRouter = require("./routes/user")
const rpsRouter = require("./routes/rps")
const MahasiswaRouter = require("./routes/Mahasiswa")
const mingguanRouter = require("./routes/mingguan")
const cpmkRouter = require("./routes/cpmk")
const referensiRouter = require("./routes/referensi")
const penilaianRouter = require("./routes/penilaian")
const adminRouter = require("./routes/admin")
const lecturerRouter = require('./routes/lecturer')
const authenticateToken = require('./middleware/authenticationToken')

app.use("/user", userRouter)
app.use("/rps", rpsRouter)
app.use("/Mahasiswa", MahasiswaRouter)
app.use("/mingguan", mingguanRouter)
app.use("/cpmk", cpmkRouter)
app.use("/referensi", referensiRouter)
app.use("/penilaian", penilaianRouter)
app.use("/admin", authenticateToken, adminRouter)
app.use("/lecturer", authenticateToken, lecturerRouter)

app.listen(5000, () => console.log("Server Running"))