require('dotenv').config();

const {users, userideas} = require('./schemas/Users');

const cookieparser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
//routing file imports
const aboutpage = require('./routes/about');
const dashboard = require('./routes/dashboard');
const feed = require('./routes/feed');
const profile = require('./routes/profile');
const loginpage = require('./routes/loginpage');


//defining
const app = express();
const db = process.env.mongoURI;

//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors({origin: 'http://localhost:3000', credentials: true}));
app.use(cookieparser());


//connecting to database
mongoose.connect(db,{ useNewUrlParser: true }, { useFindAndModify: false})
  .then(() => console.log("successfully connected to ", db))
  .catch(err => console.log(err));

//routing
app.use('/landing', aboutpage);
app.use('/login', loginpage);
app.use('/dashboard', dashboard);             //unchecked
app.use('/feed', feed);                       //unchecked
app.use('/profile', profile);                 //unchecked


app.post('/testing', (req, res) => {
  console.log(req.body);
  res.send('done');
})





app.listen(5000, () => console.log('successfully connected on port 5000'));
