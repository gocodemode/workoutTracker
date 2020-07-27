const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true }};

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                enum: ["resistance", "cardio"],
                required: "exercise type is required"
            },
            
            name: {
                type: String,
                trim: true,
                required: "exercise name is required"
        
            },
        
            duration: {
                type: Number,
                allowNull:false
            },
        
            distance: {
                type: Number,
                allowNull: true
            },
            weight: {
                type: Number,
                allowNull: true
            },
        
            reps: {
                type: Number,
                allowNull: true
            },
        
            sets: {
                type: Number,
                allowNull: true
            }
        
        
        }
    ]
}, opts);

WorkoutSchema.virtual('totalDuration').get(function() {
    let totalDuration = 0;
    for (let i = 0; i < this.exercises.length; i++) {
       totalDuration += this.exercises[i].duration;
    }
        return totalDuration;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
