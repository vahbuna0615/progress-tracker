const errorHandler = (err, req, res, next) => {
  const statusCode = (res.statusCode >= 400) ? res.statusCode : 500
  
  return res.status(statusCode).json({
    error: err.message
  })
}

module.exports = {
  errorHandler
}