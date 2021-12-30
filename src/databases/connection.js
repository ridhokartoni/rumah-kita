const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const connection = new Sequelize({
    host : process.env.DB_HOST,
    username : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    dialect : process.env.DB_DIALECT,
    port: process.env.DB_PORT
});

module.exports = connection;