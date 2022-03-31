const { Sequelize, DataTypes, err } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost/loki")

sequelize.define('users', {
    id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        foreignKey : true
    },
    email_verified_at : {
        type : DataTypes.DATE,
        allowNull : true,
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    remember_token : {
        type : DataTypes.STRING,
        allowNull : true
    },
    type : {
        type : DataTypes.ENUM,
        allowNull : false
    },
    created_at : {
        type : DataTypes.DATE,
        allowNull : true
    },
    updated_at : {
        type : DataTypes.DATE,
        allowNull : true
    }
})
    