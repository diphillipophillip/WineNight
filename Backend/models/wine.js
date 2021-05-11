var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: { type: String },
  types: [
    {
      type: Schema.Types.ObjectId,
      ref: 'wineType'
    }
  ]
});

module.exports = mongoose.model('Wine', schema);
