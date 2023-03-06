// import modules












//import app


//express
const express = require('express');
const app = express();
const port = 5000;

//parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//cors
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//mongoose
const mongoose = require('mongoose');

//import db


//middleware







//routes




//listen to port



//listen to db
const index = app.listen(port, () => console.log('Server is running on port ' + port)
);