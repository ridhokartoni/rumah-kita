const connection = require('../databases/connection');
const {DataTypes} = require('sequelize');


const User = connection.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique : true
    },
    
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },

    gender: {
        type: DataTypes.STRING(10),
    },

    avatar: {
        type : DataTypes.STRING(30),
        defaultValue: "1.svg"
    },

    roleId : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : 'role',
            key : 'id'
        }
    }

}, {
    freezeTableName: true
});


module.exports = User;
