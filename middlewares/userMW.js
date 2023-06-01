const { USER_CREATE_SCHEMA } = require("../utils/validationSchemas");


const validateUserMW = async (req, res, next) => {
  try {
    await USER_CREATE_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports.validateUserMW = validateUserMW;
