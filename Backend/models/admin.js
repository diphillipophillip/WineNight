var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true }
});

schema.statics.hashPassword = function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
};

schema.methods.isValid = function(hashedPassword) {
  return bcrypt.compareSync(hashedPassword, this.password);
};

module.exports = mongoose.model('Admin', schema);
