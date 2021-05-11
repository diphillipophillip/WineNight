var express = require('express');
var router = express.Router();
var Specialty = require('../models/specialty');
var Type = require('../models/type');

router.post('/addType', async function(req, res, next) {
  let type = await Type.findOne({ name: req.body.type });
  if (type) {
    res.status(501).json({ message: 'Type exists' });
  } else {
    type = new Type({
      name: req.body.type
    });
    type.save();
    res.status(200).json({ message: 'Saved Successful' });
  }
});

router.delete('/deleteType', async function(req, res, next) {
  let type = await Type.findOneAndDelete({ name: req.body.type });
  if (!type) {
    res.status(501).json({ message: 'Type Does not Exist' });
  } else {
    res.status(200).json({ message: 'Delete Successful' });
  }
});

router.put('/updateType', async function(req, res, next) {
  let type = await Type.findOne({ name: req.body.type });
  if (type) {
    type.name = req.body.newName;
    type.save();
    res.status(200).json({ message: 'Update Successful' });
  } else {
    res.status(501).json({ message: 'Type Does not Exist' });
  }
});

module.exports = router;
