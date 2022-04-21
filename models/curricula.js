const { Sequelize, DataTypes, err } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost/loki")

sequelize.define('curricula', {
    id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    active : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    year_start : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    year_end : {
        type : DataTypes.INTEGER,
        allowNull : false,
    },
    description : {
        type : DataTypes.STRING,
        allowNull : true,
    },
    created_at : {
        type : DataTypes.DATE     
    },
    updated_at : {
        type : DataTypes.DATE
    }    

});

app.delete('/logout', (req,res)=>{
    refreshTokens = refreshTokens.filter(token => token!== req.body.token)
    res.sendStatus(204)
})
