// import modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');








//import app
const app = express();



//import db


//middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



//routes




//listen to port

const port = process.env.PORT || 8080;

//listen to db
const index = app.listen(port, () => console.log('Server is running on port ' + port)
);