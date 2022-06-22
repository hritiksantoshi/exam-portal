const dotenv = require('dotenv');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
dotenv.config();
const { PORT } = require('./config/config');
const { connection } = require('./db');

const {routes }= require('./routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes());


connection.connect().then((connected)=>{
    app.listen(PORT ,(err) => {
        if (err) throw err;
        else console.log(`Running on port ${PORT}`);
    });
    console.log(connected);
}).catch((error)=>{
    console.log("Database Connection Error:",error);
});