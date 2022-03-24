const express = require('express');
const app = express()

app.use(express.json())

app.get('/',(req,res) =>{
    res.send("HomePage")
});

const userRouter = require("./routes/users")
app.use("/users", userRouter)
const rpsRouter = require("./routes/rps")
app.use("/rps", rpsRouter)
const MahasiswaRouter = require("./routes/Mahasiswa")
app.use("/Mahasiswa", MahasiswaRouter)
const mingguanRouter = require("./routes/mingguan")
app.use("/mingguan", mingguanRouter)
const cpmkRouter = require("./routes/cpmk")
app.use("/cpmk", cpmkRouter)
const referensiRouter = require("./routes/referensi")
app.use("/referensi", referensiRouter)
const penilaianRouter = require("./routes/penilaian")
app.use("/penilaian", penilaianRouter)
const adminRouter = require("./routes/admin")
app.use("/admin", adminRouter)

app.listen(5000, () => console.log("Server Running"))