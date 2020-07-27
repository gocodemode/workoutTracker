const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({

    type: {
        type: "Cardio",
        require: true
    },
    name: {
        type: String,
        require: "Name of exercise is required",
        trim: true
    },
    duration: {
        type: Number,
        require: "Duration of workout is required"
    },
    distance: {
        type: Number,
        require: "Distance is required"
});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio; 