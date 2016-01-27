var mongoose = require('mongoose');

var daySchema = new mongoose.Schema({
  dayId: { type: String, unique: true, index: true },
  dayNum: String,
  staticImageUrl: String,
  gifImageUrl: String,
  backgroundImageUrl: String
});

module.exports = mongoose.model('Day', daySchema);
