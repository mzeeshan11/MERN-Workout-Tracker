const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// Get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })

    res.status(200).json(workouts)
}

// Get a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    // first check valid object id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findById(id)
    if (!workout) {
        return res.status(400).json({ error: 'No such workout exist' })
    }

    res.status(200).json(workout)
}

// Create a new workout
const createWorkout = async (req, res) => {
    // Send body (Data Object) along with req
    const { title, load, reps } = req.body

    // Add doc to db
    try {
        // creating a new workout & store response in workout
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    // res.json({ message: 'POST a new workout' })
}

// Delete a new workout

const deleteWorkout = async (req, res) => {
    const { id } = req.params

    // first check valid object id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    const workout = await Workout.findOneAndDelete({ _id: id })

    if (!workout) {
        return res.status(400).json({ error: 'No such workout exist' })
    }
    res.status(200).json(workout)
}

// Update a new workout

const updatedWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' })
    }

    // findOneAndUpdate() take two argument, first is id object, second is object which is placed old one
    const workout = await Workout.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({ error: 'No such workout exist' })
    }
    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updatedWorkout
}