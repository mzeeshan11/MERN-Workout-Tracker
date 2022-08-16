const mongoose = require('mongoose')
//   Mongoose allow us to create models & Schemas for our data in the data base

// 
const Schema = mongoose.Schema

// Function to create a schema

// new Schema take two argument, first argument is object which describe how our object look
// second argument is another object which has property timestamps
// Mongoose schemas support a timestamps option. 
// If you set timestamps: true, Mongoose will add two properties of type Date to your schema:

// createdAt: a date representing when this document was created
// updatedAt: a date representing when this document was last updated

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    //  reps: is repeatition property of the workout
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true})

// Schema define a structure of a particular document or type of document in our data base
// What a model does?  is apply that schema to a particular model & then we use model
// to interact with a collection of that name 

module.exports  = mongoose.model('Workout', workoutSchema)