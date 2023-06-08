const { ValidationError } = require("yup");

async function handleErrors(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).send(err.message || "Server error");
}

async function handleValidationError(err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(400).send("Validation failed!");
  }
  next(err);
}

module.exports.handleErrors = handleErrors;
module.exports.handleValidationError = handleValidationError;
