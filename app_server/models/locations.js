const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name: String,
  image: String,
  alt: String,
  description: String,
  nicknames: String,
  founded: Number,
  ground: [String],
  capacity: [String],
  owners: [String],
  president: String,
  manager: String,
  league: String,
  season: String,
  position: String,
  achievements: [
    {
      title: String,
      count: String,
      years: String
    }
  ]
});

mongoose.model('Location', clubSchema);

