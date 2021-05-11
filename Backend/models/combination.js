var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  date: { type: Date },
  food: { type: String },
  wine: { type: String },
  rating: { type: number },
  comment: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Specialty', schema);
