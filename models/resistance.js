const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    // CODE HERE
    type: {
      type: String,
      require: true,
      trim:
    },
    name: {
      type: String,

    },
    duration: {
      type: Number,
      unique:; 
    },
    weight: {
        type: Number,
    },
    reps: {
        type: Number,
    },
    sets: {
        type: Number,
    },
  });
  
  const Resistance = mongoose.model("Resistance", resistancedSchema);
  
  module.exports = Resistance;
  