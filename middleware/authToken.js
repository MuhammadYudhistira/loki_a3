require('dotenv').config
const jwt = require('jsonwebtoken')

function authenticateToken(req,res,next) {

    const token = req.cookies.jwt

    if(token){

    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) =>{
        if(err){
            console.log(err.message)
            res.redirect('/auth/login')
        }else{
            console.log(decodedToken);
            next()
        }
    })
} else{
    res.redirect('/auth/login')
}
}

module.exports = authenticateToken