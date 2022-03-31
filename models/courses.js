const { Sequelize, DataTypes, err } = require('sequelize');
const sequelize = new Sequelize("mysql://root@localhost/loki")

sequelize.define('courses', {
    id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true
    },
    curriculum_id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        foreignKey : true 
    },
    code : {
        type : DataTypes.STRING,
        allowNull : false
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    alias_name : {
        type : DataTypes.STRING,
        allowNull : true
    },
    credit : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    semester : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    description : {
        type : DataTypes.STRING,
        allowNull : true
    },
    created_at : {
        type : DataTypes.DATE
    },
    updated_at : {
        type : DataTypes.DATE
    }

})