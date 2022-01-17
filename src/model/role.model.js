const { DataTypes } = require('sequelize');
const connection = require('../databases/connection');

const role = connection.define('role', {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },

    name : {
        type : DataTypes.STRING(40),
        allowNull : false
    }
}, {
    freezeTableName : true
})


module.exports = role;