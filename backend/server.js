const express = require('express')
require('dotenv').config()


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

// Listen for request
app.listen(process.env.PORT, () => {
    console.log("Listinng on port 4000!!")
})