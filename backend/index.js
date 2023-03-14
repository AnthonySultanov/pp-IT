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
const urlmongo = "mongodb+srv://user:oTEChYWfUZsYxf4O@ppitusers.kfdmhbh.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(urlmongo, {
         useNewUrlParser: true, useUnifiedTopology: true })
         .then(() => console.log(' Connected to db'))
            .catch(err => console.log(err));

            const db = mongoose.connection;

            const gameSchema = new mongoose.Schema({
                name: String,
                password: String
            });
            const gamedatabase = db.useDb('GameDatabase'); 
            const GameDatabase = mongoose.model('accounts', gameSchema);
            

            app.post('/api/accounts',async (req, res) => {
                console.log(req.body);
                try{
                    await GameDatabase.create({
                        name: req.body.name,
                        password: req.body.password
                    })
                } catch(err) {
                    console.log(err);
                    res.send('data received');
                }
            })

            app.get('/api/accounts',(req, res) => {
                GameDatabase.find((error, data) => {
                    res.json(data);
                })
            })
            app.get('/api/accounts/:id', (req, res) => {
                console.log(req.params.id);
                GameDatabase.findById(req.params.id,(error, data) => {
                    res.json(data);
                })
            })

            app.put('/api/accounts/:id', (req, res) => {
                console.log('add: ' + req.params.id);

                GameDatabase.findByIdAndAdd(req.params.id, req.body, {new: true},
                    (error, data) => {
                        res.send(data);
                    })
            })

            app.get('*', (req,res) =>{
                res.sendFile(path.join(__dirname+'/../build/index.html'));
                });
            
            
                app.listen(port, () => 
            {
                console.log(`Example app listening at http://localhost:${port}`)
            })

//import db


//middleware







//routes




//listen to port



//listen to db
