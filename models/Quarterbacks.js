const mongoose = require('mongoose');
const { Schema } = mongoose;

const qbSchema = new Schema({
  name: String,
  team: String,
  qbrat: Number,
  att: Number,
  pct: Number,
  yds: Number,
  ydav: Number,
  td: Number,
  int: Number
});

mongoose.model('quarterbacks', userSchema);
