const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator: (value) => value.length <= 50, // Adjust the length as needed
        message: 'Name must be at most 50 characters long',
      },
    },
    status: { type: String, required: true },
    ordering: { type: Number, required: true },
  },
  { timestamps: true }
);

// Add an index on the 'name' field for better query performance
itemSchema.index({ name: 1 });

module.exports = mongoose.model('Item', itemSchema);
