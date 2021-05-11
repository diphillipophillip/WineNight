var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');

var jwt = require('jsonwebtoken');

router.post('/register', function(req, res, next) {
  Admin.find({ email: req.body.email })
    .exec()
    .then(admin => {
      if (admin.length >= 1) {
        return res.status(409).json({
          message: 'Email Exists'
        });
      } else {
        var admin = new Admin({
          email: req.body.email,
          password: Admin.hashPassword(req.body.password)
        });
        admin.save();
        return res.status(200).json({
          message: 'Admin Created'
        });
      }
    });
});

router.post('/login', function(req, res, next) {
  Admin.findOne({ email: req.body.email })
    .exec()
    .then(admin => {
      if (admin) {
        if (admin.isValid(req.body.password)) {
          let token = jwt.sign({ email: admin.email }, 'secret', {
            expiresIn: '3h'
          });
          return res
            .status(200)
            .json({ adminToken: token, email: admin.email });
        } else {
          return res.status(501).json({ message: 'Invalid Credentials' });
        }
      } else {
        return res.status(501).json({ message: 'User is Not Registered' });
      }
    });
});

module.exports = router;
