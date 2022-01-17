const express = require("express");
const app = express();
const connection = require('./src/databases/connection');
const dotenv = require('dotenv');
const dbRelation = require('./src/databases/relations')
const routes = require('./src/routes/index.route');
const path = require('path');
dotenv.config();
const port = process.env.PORT || '3000';

function runApp() {
    dotenv.config();
    app.use('/public', express.static('public/assets'));

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        dbRelation();
        next();
    }); 
    app.set('views', path.join(__dirname, 'src/views'))
    app.set('view engine', 'ejs');

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
