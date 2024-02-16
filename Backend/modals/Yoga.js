const mongoose = require("mongoose");

const yogaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  profile: {
    insert: String,
  },
});

module.exports = mongoose.model("yoga", yogaSchema);
