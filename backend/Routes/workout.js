// For creating route we need to have access express routes
const express = require('express')
const { createWorkout, getWorkouts, getWorkout, updatedWorkout, deleteWorkout } = require('../controllers/workoutController')

const router = express.Router()


// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a  workout
router.delete('/:id', deleteWorkout)

// UPDATE a new workout
router.patch('/:id', updatedWorkout)

module.exports = router