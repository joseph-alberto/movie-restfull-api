// Express
const express = require('express')
const app = express()

// Cors
const cors = require('cors')
app.use(cors())

// Load Controller
const MovieController = require('./controllers/MovieController')

// Middleware
app.use(express.json())

// Route
const route = require('./utils/route')
route.resource('/movies', MovieController, app)

// Start App
const port = 3000
app.listen(port, () => {
  console.log(`App is now listen on port ${port}`)
})