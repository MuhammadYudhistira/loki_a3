require("dotenv").config()

const express = require("express")
const app = express()
const db = require("./models/dbconfig")
const controllers = require("./controller/indexcontrollers")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const { authenticateToken, checkUser } = require("./middleware/authToken")

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.set("view engine", "ejs")
app.use(express.static("views"))


app.get("*", checkUser)

app.get("/", (req, res) => {
  res.render("index")
});
app.get("/datatable", (req, res) => {
  res.render("datatabletemplate")
});

app.get("/users", controllers.users.retrieveAll)

const dosenRouter = require("./routes/dosen")
app.use("/dosen", authenticateToken,dosenRouter)

const MahasiswaRouter = require("./routes/Mahasiswa")
app.use("/Mahasiswa", MahasiswaRouter)

const adminRouter = require("./routes/admin")
app.use("/admin", authenticateToken, adminRouter)

const authRouter = require("./routes/auth")
app.use("/auth", authRouter)

// app.use("/lecturer", authenticateToken, lecturerRouter)

app.use("/", (req, res) => {
  res.render("404")
})
app.listen(5000, () => console.log("Server Running"))