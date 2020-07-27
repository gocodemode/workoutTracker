const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    // CODE HERE
    type: {
      type: String,
      require: true,
      trim: true
    },
    name: {
      type: String,
      require: true,
      trim: true
    },
    duration: {
      type: Number,
      required: true
    },
    weight: {
        type: Number,
        required: true

    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
  });
  
  const Resistance = mongoose.model("Resistance", resistanceSchema);
  
  module.exports = Resistance;
  