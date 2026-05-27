const mongoose = require('mongoose');
const LogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  object: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    trim: true,
    default: ''
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model('Log', LogSchema);
