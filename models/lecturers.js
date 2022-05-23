const { Sequelize, DataTypes} = require('sequelize');
const sequelize = require("./dbconfig");

module.export = sequelize.define('Lectures', {
    id : {
        type : DataTypes.BIGINT,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    reg_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone : {
        type : DataTypes.STRING,
        allowNull: false
    },
    status :  {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    created_at : {
        type : DataTypes.DATE
    
    },
    update_at : {
        type : DataTypes.DATE
    }
    
});