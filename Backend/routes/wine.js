var express = require('express');
var router = express.Router();
var Wine = require('../models/wine');
var WineType = require('../models/wineType');

router.post('/addWine', async function(req, res, next) {
  let wine = await Wine.findOne({ name: req.body.wine });
  if (wine) {
    res.status(501).json({ message: 'Wine Exists' });
  } else {
    wine = new Wine({
      name: req.body.wine
    });
    wine.save();
    res.status(200).json({ message: 'Saved Success' });
  }
});

router.delete('/deleteWine', async function(req, res, next) {
  const wine = await Wine.findOne({ name: req.body.wine });
  Wine.deleteOne({ name: req.body.wine }, function(err, result) {
    if (!wine) {
      return res.status(501).json({ message: 'Wine does not exist' });
    } else {
      return res.status(200).json({ message: 'Delete Successful' });
    }
  });
});

router.put('/updateWine', async function(req, res, next) {
  const wine = await Wine.findOne({ name: req.body.wine });
  if (wine) {
    wine.name = req.body.newName;
    wine.save();
    res.status(200).json({ message: 'Update Successful ' });
  } else {
    res.status(501).json({ message: 'Category does not exist' });
  }
});

router.put('/updateWineType', async function(req, res, next) {
  const wineType = await WineType.findOne({ name: req.body.type });
  if (wineType) {
    wineType.name = req.body.newName;
    wineType.save();
    res.status(200).json({ message: 'Update Successful ' });
  } else {
    res.status(501).json({ message: 'Wine Type does not exist' });
  }
});

router.get('/getWines', async function(req, res, next) {
  return Wine.find().exec((err, result) => {
    res.send(result);
  });
});

router.post('/addWineType', async function(req, res, next) {
  let wine = await Wine.findOne({ name: req.body.category });
  let wineType = await WineType.findOne({ name: req.body.type });

  if (wineType) {
    res.status(501).json({ message: 'Wine Type exists' });
  } else {
    wineType = new WineType({
      name: req.body.type
    });
    wineType.save();
    wine.types.push(wineType);
    wine.save();
    res.status(200).json({ message: 'Saved Successful' });
  }
});

router.put('/clearWineTypes', async function(req, res, next) {
  Wine.update({ name: req.body.wine }, { $set: { types: [] } }, function(
    err,
    affected
  ) {
    res.status(200).json({ message: 'Cleared Sucess' });
  });
});

router.put('/clearWineType', async function(req, res, next) {
  let wine = await Wine.findOne({ name: req.body.wine });
  let wineType = await WineType.findOne({ name: req.body.wineType });

  if (!wine) {
    res.status(501).json({ message: 'Wine Category Does not Exist' });
  }

  if (!wineType) {
    res.status(501).json({ message: 'Wine Type does not Exist' });
  } else {
    let index = wine.types.indexOf(wineType._id);
    if (index > -1) {
      wine.types.splice(index, 1);
      wine.save();
      await WineType.findOneAndDelete({ name: req.body.wineType });
      res.status(200).send({ message: 'Cleared Success' });
    } else {
      res.status(501).json({ message: 'Type does not Exist in Array' });
    }
  }
});

module.exports = router;
