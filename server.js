const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const server = 'localhost';
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

mongoose.connect('mongodb+srv://Sachindu:IT19143682@fashow.ygx0b.mongodb.net/Fashow?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully!");
})

const Users = require('./routes/Users');

app
  .use('/users', Users)
  .listen(PORT, () => console.log(`Connected to ${server}:${PORT}!`));
