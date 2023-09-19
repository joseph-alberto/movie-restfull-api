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

module.exports = app;