var express = require('express');
var router = express.Router();
var User = require('../models/User');

var jwt = require('jsonwebtoken');

router.post('/register', async function(req, res, next) {
  let user = await User.findOne({ email: req.body.email });

  if (user) {
    res.status(501).json({ message: 'Email Not Available' });
  } else {
    user = new User({
      email: req.body.email,
      password: User.hashPassword(req.body.password)
    });
    user.save();
    let token = jwt.sign({ email: user.email }, 'secret', {
      expiresIn: '3h'
    });
    res.status(200).json({ userToken: token, email: user.email });
  }
});

router.post('/login', async function(req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(501).json({ message: 'User Does not Exist' });
  } else {
    if (user.isValid(req.body.password)) {
      let token = jwt.sign({ user: user.email }, 'secret', {
        expiresIn: '3h'
      });
      return res.status(200).json({ userToken: token, email: user.email });
    } else {
      return res.status(501).json({ message: 'Password is Incorrect' });
    }
  }
});

module.exports = router;
