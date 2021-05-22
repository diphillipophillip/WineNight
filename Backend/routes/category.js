var express = require('express');
var router = express.Router();
var Category = require('../models/category');
var Specialty = require('../models/specialty');

var deepPopulate = require('mongoose-deep-populate');

router.post('/addCategory', async function(req, res, next) {
  let category = await Category.findOne({ name: req.body.category });
  if (category) {
    res.status(501).json({ message: 'Category Exists' });
  } else {
    category = new Category({
      name: req.body.category
    });
    category.save();
    res.status(200).json({ message: 'Saved Successful' });
  }
});

router.get('/getCategories', async function(req, res, next) {
  return Category.find()
    .populate('specialties')
    .exec((err, specialties) => {
      res.send(specialties);
    });
});

router.delete('/deleteCategory', async function(req, res, next) {
  const category = await Category.findOne({ name: req.body.category });
  Category.deleteOne({ name: req.body.category }, function(err, result) {
    if (!category) {
      return res.status(501).json({ message: 'Category does not exist' });
    } else {
      return res.status(200).json({ message: 'Delete Successful' });
    }
  });
});

router.put('/updateCategory', async function(req, res, next) {
  const category = await Category.findOne({ name: req.body.category });
  if (category) {
    category.name = req.body.newName;
    category.save();
    res.status(200).json({ message: 'Update Successful ' });
  } else {
    res.status(501).json({ message: 'Category does not exist' });
  }
});

router.post('/addSpecialty', async function(req, res, next) {
  let category = await Category.findOne({ name: req.body.category });
  let specialty = await Specialty.findOne({ name: req.body.specialty });
  if (specialty) {
    res.status(501).json({ message: 'Specialty exists' });
  } else {
    specialty = new Specialty({
      name: req.body.specialty
    });
    specialty.save();
    category.specialties.push(specialty);
    category.save();
    res.status(200).json({ message: 'Saved Successful' });
  }
});

router.put('/clearSpecialties', async function(req, res, next) {
  Category.update(
    { name: req.body.category },
    { $set: { specialties: [] } },
    function(err, affected) {
      res.status(200).json({ message: 'Cleared Sucess' });
    }
  );
});

router.put('/clearSpecialty', async function(req, res, next) {
  let category = await Category.findOne({ name: req.body.category });
  let specialty = await Specialty.findOne({ name: req.body.specialty });

  if (!category) {
    res.status(501).json({ message: 'Category Does not Exist' });
  }

  if (!specialty) {
    res.status(501).json({ message: 'Specialty Does not Exist' });
  } else {
    let index = category.specialties.indexOf(specialty._id);
    if (index > -1) {
      category.specialties.splice(index, 1);
      category.save();
      res.status(200).send({ message: 'Cleared Success' });
    }
  }
});

router.post('/populate', async function(req, res, next) {
  let category = await Category.findOne({ name: req.body.category });
});

module.exports = router;
