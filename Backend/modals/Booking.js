const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
});

module.exports = mongoose.model("booking", bookingSchema);
