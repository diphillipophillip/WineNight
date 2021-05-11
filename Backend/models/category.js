var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: { type: String },
  specialties: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Specialty'
    }
  ]
});

module.exports = mongoose.model('Category', schema);
