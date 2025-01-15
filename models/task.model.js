const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  description: String,
  duration: {
    type: Number,
    required: [true, 'Please provide a valid work duration'],
    min: 0,
    max: 12
  }
}, 
{
  timestamps: true
});

module.exports = mongoose.model('Tasks', taskSchema);