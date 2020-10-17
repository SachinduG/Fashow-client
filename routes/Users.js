const express = require('express');
const cors = require('cors');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');

const users = express.Router();
const User = require('../models/User');

users.use(cors());
process.env.SECRET_KEY = 'secret';

users.post('/register', (req, res) => {
  const today = new Date();
  const userData = {
    First_Name: req.body.First_Name,
    Last_Name: req.body.Last_Name,
    Email_Address: req.body.Email_Address,
    Mobile_Number: req.body.Mobile_Number,
    Home_Address: req.body.Home_Address,
    Password: req.body.Password
  };

  User.findOne({
    Email_Address: req.body.Email_Address
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.Password, 10, (err, hash) => {
          userData.Password = hash;
          User.create(userData)
            .then(user => {
              res.json({ status: user.Email_Address + 'Registered!' });
            })
            .catch(err => {
              res.send('error: ' + err);
            });
        });
      } else {
        res.json({ error: 'User already exists' });
      }
    })
    .catch(err => {
      res.send('error: ' + err);
    });
});

users.post('/login', (req, res) => {
  User.findOne({
    Email_Address: req.body.Email_Address
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.Password, user.Password)) {
          const payload = {
            _id: user._id,
            First_Name: user.First_Name,
            Last_Name: user.Last_Name,
            Email_Address: user.Email_Address,
            Mobile_Number: user.Mobile_Number,
            Home_Address: user.Home_Address
          };
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          });
          res.send(token);
        } else {
          res.json({ error: 'User is not exist!' });
        }
      } else {
        res.json({ error: 'User is not exist!' });
      }
    })
    .catch(err => {
      res.send('error: ', err);
    });
});

users.get('/profile', (req, res) => {
  let decoded = jwt.verify(
    req.headers['authorization'],
    process.env.SECRET_KEY
  );

  User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send('User is not exist!');
      }
    })
    .catch(err => {
      res.send('error: ', err);
    });
});

module.exports = users;
