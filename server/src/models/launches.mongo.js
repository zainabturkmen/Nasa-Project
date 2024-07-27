const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    Date,
    required: true,
  },

  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    ref: true,
  },

    customers: [String] ,
    
  upcoming: {
    type: Boolean,
    required: true,
  },

  success: {
    type: Boolean,
    required: true,
    default: true,
  },
});

// COnnects launchesSchema with the "launches" collections
module.exports = mongoose.model("Launch", launchesSchema)
