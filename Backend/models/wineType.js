var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: { type: String },
  wine: {
    type: Schema.Types.ObjectId,
    ref: 'wine'
  }
});

module.exports = mongoose.model('wineType', schema);
