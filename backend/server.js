const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')


// Express app
const app = express()

// Middleware

app.use(express.json()) // Add Following line as middleware to use body 
app.use((req, res, next) => {
    console.log("Check", req.path, req.method)
    next()
})


// Routes
app.use('/api/workouts', require('../backend/Routes/workout'))
// app.get('/', (req, res) => {
//     res.json({ message: 'Welcome to the App.' })
// })


// Connect to db
mongoose.connect(process.env.MONG_URI) // It's async code & return a promise
    .then(() => {
        // I don't want to any kind of req those not connected to the datebase, for that purpose I placed app.listen code inside of then function 

        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log("Connected to db & Listening on port 4000!!")
        })
    })
    .catch((error) => {
        console.log(error)
    })
