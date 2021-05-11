var express = require('express');
var router = express.Router();
var Category = require('../models/category');
var Specialty = require('../models/specialty');
var Type = require('../models/type');

router.post('/addSpecialty', async function(req, res, next) {
  let specialty = await Specialty.findOne({ name: req.body.specialty });
  if (specialty) {
    res.status(501).json({ message: 'Specialty Exists' });
  } else {
    specialty = new Specialty({
      name: req.body.specialty
    });
    specialty.save();
    res.status(200).json({ message: 'Save Successful' });
  }
});

router.delete('/deleteSpecialty', async function(req, res, next) {
  let specialty = await Specialty.findOne({ name: req.body.specialty });
  Specialty.deleteOne({ name: req.body.specialty }, function(err, result) {
    if (!specialty) {
      return res.status(501).json({ message: 'Specialty does not exist' });
    } else {
      return res.status(200).json({ message: 'Delete Successful' });
    }
  });
});

router.put('/updateSpecialty', async function(req, res, next) {
  let specialty = await Specialty.findOne({
    name: req.body.specialty
  });
  if (specialty) {
    specialty.name = req.body.newName;
    specialty.save();
    res.status(200).json({ message: 'Update Successful' });
  } else {
    res.status(501).json({ message: 'Specialty Does Not Exist' });
  }
});

router.post('/addType', async function(req, res, next) {
  let type = await Type.findOne({ name: req.body.type });
  let specialty = await Specialty.findOne({ name: req.body.specialty });
  if (type) {
    res.status(501).json({ message: 'Type exists' });
  } else {
    type = new Type({
      name: req.body.type
    });
    type.save();
    specialty.types.push(type);
    specialty.save();
    res.status(200).json({ message: 'Saved Successful' });
  }
});

router.put('/clearTypes', async function(req, res, next) {
  Specialty.update(
    { name: req.body.specialty },
    { $set: { types: [] } },
    function(err, affected) {
      res.status(200).json({ message: 'Cleared Sucess' });
    }
  );
});

router.get('/getSpecialties', async function(req, res, next) {
  return Specialty.find()
    .populate('types')
    .exec((err, types) => {
      res.send(types);
    });
});

/*jhgfhgfh*/

router.put('/clearType', async function(req, res, next) {
  let type = await Type.findOne({ name: req.body.type });
  let specialty = await Specialty.findOne({ name: req.body.specialty });

  if (!specialty) {
    res.status(501).json({ message: 'Specialty Does not Exist' });
  }
  if (!type) {
    res.status(501).json({ message: 'Type Does not Exist' });
  } else {
    let index = specialty.types.indexOf(type._id);
    if (index > -1) {
      specialty.types.splice(index, 1);
      specialty.save();
      await Type.findOneAndDelete({ name: req.body.type });
      res.status(200).send({ message: 'Cleared Success' });
    } else {
      res.status(501).json({ message: 'Type does not Exist in Array' });
    }
  }
});

module.exports = router;
