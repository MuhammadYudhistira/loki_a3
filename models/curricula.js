const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require("./dbconfig");

module.export = sequelize.define('curricula', {
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


