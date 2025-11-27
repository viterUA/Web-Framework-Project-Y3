const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  countryCode: String,
  phone: {
    type: String,
    unique: true,
    sparse: true
  },
  dob: Date,
  county: String
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  usernameUnique: true
});

module.exports = mongoose.model('User', userSchema);
