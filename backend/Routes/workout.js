// For creating route we need to have access express routes
const express = require('express')
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
router.post('/', (req, res) => {
    res.json({ message: 'POST a new workout' })
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