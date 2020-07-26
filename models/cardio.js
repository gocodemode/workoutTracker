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
        require: true,
        trim: true
    },
    name: {
        type: String,
        reuiqre: true,
        trim: true
    },
    duration: {
        type: Number,
        require: true
    },
    weight: {
        type: Number,
        require: true
    },
    reps: {
        type: Number,
        require: true
    },
    sets: {
        type: Number,
        require: true
    },
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio; 