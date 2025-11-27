const mongoose = require('mongoose');

const strikersSchema = new mongoose.Schema({
  pos: Number,
  player: String,
  club: String,
  goals: Number,
  gamesPlayed: Number,
  avg: Number
});

module.exports = mongoose.model('Strikers', strikersSchema, 'Strikers');