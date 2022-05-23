const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require("./dbconfig");
const curricula = require("./curricula")

module.export = sequelize.define('courses', {
    id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true
    },
    curriculum_id : {
        type : DataTypes.BIGINT,
        allowNull : false,
        foreignKey : true,
        references :{
            model : curricula,
            key : 'id'
        }
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
}) , {
    tableName : 'courses',
    timestamp : true,
    updatedAt : 'updated_at',
    createdAt : 'created_at'
}