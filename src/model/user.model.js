const connection = require('../databases/connection');
const {DataTypes} = require('sequelize');


const User = connection.define('user', {
  userId : {
      type : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey : true,
      allowNull : false
  },

  userName : {
      type : DataTypes.STRING,
  },

  userPassword : {
      type : DataTypes.STRING,
  }
}, {
    freezeTableName : true
});


module.exports = User;


