const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  countryCode: String,
  phone: String,
  dob: Date,
  county: String,
  password: { type: String, required: true }
});


module.exports = mongoose.model('User', userSchema);
