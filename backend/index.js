const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://user:oTEChYWfUZsYxf4O@ppitusers.kfdmhbh.mongodb.net/mydatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error(err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

const accountlogin = mongoose.model('User', userSchema);

// Login route
app.post('/login', async (req, res) => {
      // console.log(req.body);
      try{
        await accountlogin.create({
          email: req.body.email,
          password: req.body.password
        })
      } catch (err) {
        console.log(err);
        res.send('data received');

      }

})

app.get('/login', (req, res) => {
  accountlogin.find((error, data)=>{
      res.json(data);
    })
  })

  app.get('/login/:id', (req, res)=>{
    console.log(req.params.id);
    accountlogin.findById(req.params.id,(error,data)=>{
      res.json(data);
    })
  })


  app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
    });
// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
