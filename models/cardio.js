exercises: [
    {
      type: "cardio",
      name: "Running",
      duration: 25,
      distance: 4
    }
  ]

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({


    // CODE HERE
    type: {
    type: String,
    require: 
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