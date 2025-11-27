const mongoose = require('mongoose');

const standingsSchema = new mongoose.Schema({
  pos: Number,
  name: String,
  gamesPlayed: Number,
  wins: Number,
  draws: Number,
  losses: Number,
  goalsScored: Number,
  goalsMissed: Number,
  goalsDifference: String,
  points: Number
});

module.exports = mongoose.model('Standings', standingsSchema, 'Standings');