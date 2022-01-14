const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();


const connection = new Sequelize({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    database : process.env.DB_NAME
});
// connection.addHook('beforeConnect', async (config) => {
//     await connection.query(`CREATE DATABASE IF NOT EXIST ${process.env.DB_NAME}` );
//     config.database = process.env.DB_NAME;     
// })

module.exports = connection;