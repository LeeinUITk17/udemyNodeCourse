const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  ordering: { type: String, required: true },
});

module.exports = mongoose.model('item', itemSchema);
