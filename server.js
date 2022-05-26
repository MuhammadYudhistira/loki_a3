require('dotenv').config()

const express = require('express');
const app = express()
const db = require('./models/dbconfig')
const controllers = require('./controller/indexcontrollers')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
app.use(express.json())

app.set('view engine', 'ejs');
app.use( express.static( "views" ) );


app.get('/',(req,res) =>{
    res.render('index.ejs')
})

app.get('/users', controllers.users.retrieveAll)


const userRouter = require("./routes/user")
const rpsRouter = require("./routes/rps")
const MahasiswaRouter = require("./routes/Mahasiswa")
const mingguanRouter = require("./routes/mingguan")
const cpmkRouter = require("./routes/cpmk")
const referensiRouter = require("./routes/referensi")
const penilaianRouter = require("./routes/penilaian")
const adminRouter = require("./routes/admin")
const lecturerRouter = require('./routes/lecturer')
const authenticateToken = require('./middleware/authenticationToken');

app.use("/user", userRouter)
app.use("/rps", rpsRouter)
app.use("/Mahasiswa", MahasiswaRouter)
app.use("/mingguan", mingguanRouter)
app.use("/cpmk", cpmkRouter)
app.use("/referensi", referensiRouter)
app.use("/penilaian", penilaianRouter)
app.use("/admin", authenticateToken, adminRouter)
app.use("/lecturer", authenticateToken, lecturerRouter)


app.use('/', (req, res) => {res.send('Salah alamat')});
app.listen(5000, () => console.log("Server Running"))