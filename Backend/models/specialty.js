var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: { type: String },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  types: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Type'
    }
  ]
});

module.exports = mongoose.model('Specialty', schema);
