// For creating route we need to have access express routes
const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()


// GET all workouts
router.get('/', (req, res) => {
    res.json({ message: 'GET All Workouts' })
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({ message: `GET a single workout ${req.params.id}` })
})

// POST a new workout
router.post('/', async (req, res) => {
    // Send body (Data Object) along with req
    const { title, load, reps } = req.body
    try {
        // creating a new workout & store response in workout
        const workout = await Workout.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    // res.json({ message: 'POST a new workout' })
})

// DELETE a  workout
router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a workout' })
})

// UPDATE a new workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'UPDATE a workout' })
})

module.exports = router