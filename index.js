const express = require("express");
const app = express();
const port = process.env.PORT || '3000';
const connection = require('./src/databases/connection');
const dotenv = require('dotenv');
const routes = require('./src/routes/index.route');



function runApp() {
    dotenv.config();
   console.log( process.env.DB_PORT)
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))
    app.use(routes);

    app.listen(port, () => {
        connection.authenticate().then((conn) => {
            console.log(`Server is running on port ${port}`);
        }).catch((err) => {
            console.log(err);
        })
    })
}


runApp();