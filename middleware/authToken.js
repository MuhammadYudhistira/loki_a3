require('dotenv').config
const jwt = require('jsonwebtoken')
const User = require("../models/users");

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

const checkUser = (req,res,next) =>{
    const token = req.cookies.jwt

    if(token){
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
          if (err) {
            console.log(err.message);
            res.locals.user = null
            next()
          } else {
            console.log(decodedToken);
            let user = await User.findByPk(decodedToken.email)
            res.locals.user= decodedToken
            next();
          }
        });
    }else{
        res.locals.user = null
        next()
    }
}


module.exports = { authenticateToken, checkUser }