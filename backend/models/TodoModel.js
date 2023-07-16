const mongoose = require('mongoose');

const toDoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('ToDo', toDoSchema);