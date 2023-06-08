const User = require("../models/User");
const createHttpError = require("http-errors")

module.exports.createUser = async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.send(newUser);
};

module.exports.getUsers = async (req, res, next) => {
  const users = await User.findAll();
  res.send(users);
};

module.exports.getUser = async (req, res, next) => {
  const {
    params: { userId },
    // query: { page },
  } = req;
  const foundUser = await User.findOne(userId);

  if (foundUser) {
    res.send(foundUser);
  } else {
    next(createHttpError(404, 'User not found...', {test:true}));
  }
};

module.exports.deleteUser = async (req, res, next) => {
  const {
    params: { userId },
  } = req;
  try {
    const deletedUser = await User.delete(userId);
    res.send(deletedUser);
  } catch (error) {
    next(new NotFoundError(error.message));
  }
};

module.exports.updateUser = async (req, res, next) => {
  const {
    params: { userId },
    body,
  } = req;

  try {
    const updatedUser = await User.update(userId, body);
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
};
