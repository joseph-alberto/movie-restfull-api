const response = (message, data, statusCode, res) => {
  res.json({
    statusCode,
    message,
    data
  })
}

module.exports = { response }