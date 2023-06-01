const yup = require("yup");

const USER_CREATE_SCHEMA = yup.object({
  login: yup.string().required(),
  password: yup.string().required(),
});

module.exports.USER_CREATE_SCHEMA = USER_CREATE_SCHEMA;
