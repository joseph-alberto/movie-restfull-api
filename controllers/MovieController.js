const { sequelize } = require('../models/index')
const { response } = require('../utils/response')
const Joi = require('joi');

const Movie = sequelize.models.Movie

// All Movie
const all = async (req, res) => {
  const movies = await Movie.findAll()
  response("Retrived all movies data.", movies, 200, res)
}

// Detail Movie
const detail = async (req, res) => {
  const id = req.params.id
  const movie = await Movie.findOne({
    where: { id }
  })
  if (movie) {
    response("Retrived specific movie data.", movie, 200, res)
  } else {
    response("The data is not found!.", movie, 200, res)
  }
}

// Store Movie
const store = async (req, res) => {
  // Validation Schema
  const joi = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    rating: Joi.number().required(),
    image: Joi.string()
  }).options({ abortEarly: false })
  const { error } = joi.validate(req.body)
  // Run Validation
  if (error) {
    response("Validation Errors", error.details, 403, res)
  } else {
    // Store Logic
    const movie = await Movie.create({
      ...req.body
    }, { fields: ["title", "description", "rating", "image"] })
    response("Data is successfully stored in movies storage.", {
      success: true,
      movie
    }, 200, res)
  }
}

// Update Movie
const update = async (req, res) => {
  // Validation Schema
  const joi = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    rating: Joi.number().required(),
    image: Joi.string()
  }).options({ abortEarly: false })
  const { error } = joi.validate(req.body)
  // Run Validation
  if (error) {
    response("Validation Errors", error.details, 403, res)
  } else {
    // Update Logic
    const movie = await Movie.update({
      ...req.body
    }, {
      where: { id: req.params.id },
      fields: ["title", "description", "rating", "image"]
    })
    response("Data is successfully updated in movies storage.", {
      success: Boolean(movie)
    }, 200, res)
  }
}

// Delete Movie
const destroy = async (req, res) => {
  const movie = await Movie.destroy({
    where: { id: req.params.id }
  })
  if (movie) {
    response("Data is successfully deleted from movies storage", {
      success: Boolean(movie)
    }, 200, res)
  } else {
    response("Data is not found!", {
      success: false
    }, 200, res)
  }
}

module.exports = {
  all, detail, store, update, destroy
}