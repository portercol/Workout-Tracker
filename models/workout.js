// Required in mongoose package
const mongoose = require("mongoose");

// Create new instance of mongoose Schema
const Schema = mongoose.Schema;

// Create constructor of Schema and add exercises array
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      weight: {
        type: Number,
        default: 0
      },
      sets: {
        type: Number,
        default: 0
      },
      reps: {
        type: Number,
        default: 0
      },
      distance: {
        type: Number,
        default: 0
      }
    }
  ],
  totalDuration: {
    type: Number,
    default: 0,
  }
});

// Create new instance of WorkoutSchema using mongoose model
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export out Workout model
module.exports = Workout;