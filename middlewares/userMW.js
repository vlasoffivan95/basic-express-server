const { USER_CREATE_SCHEMA } = require("../utils/validationSchemas");


module.exports.validateUserMW = async (req, res, next) => {
  try {
    await USER_CREATE_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    next(error)
  }
};


