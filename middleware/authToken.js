require('dotenv').config
const jwt = require('jsonwebtoken')

function authenticateToken(req,res,next) {

    const token = req.cookies.jwt

    if(token){

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) =>{
        if(err){
            console.log(err.message)
            res.render('500')
        }else{
            console.log(decodedToken);
            next()
        }
    })
} else{
    res.render('500')
}
}

module.exports = authenticateToken