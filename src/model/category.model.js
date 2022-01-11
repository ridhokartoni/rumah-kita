const {
    DataTypes
} = require('sequelize');
const connection = require('../databases/connection');


const Category = connection.define('category', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    }
}, {
    freezeTableName: true
});


module.exports = Category;