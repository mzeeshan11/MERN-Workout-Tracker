const express = require('express')
require('dotenv').config()


// Express app
const app = express()

// Register a middleware
app.use((req, res, next) => {
    console.log("Check", req.path, req.method)
    next()
})

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the App.' })
})

// Listen for request
app.listen(process.env.PORT, () => {
    console.log("Listinng on port 4000!!")
})