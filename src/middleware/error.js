const { STATUS_CODES } = require("http"); //requring the status codes object

const handleError = (error, req, res, next) => {
  console.error(error)
  const status = error.status || 500 
  res.status(status) // setting the status code of the response object to the error status code

  const message = STATUS_CODES[status];
  console.log("message", message)

  if (process.env.NODE_ENV === 'production') {
    res.send({error: message}); // if this is production and not development
  } else {
    const stackArray = error.status.split("\n").map((line) => line.trim()); // splits the errors by new line
    res.send({
      error: message,
      stack: stackArray
    });
  }
}

module.exports = handleError;