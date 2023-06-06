const usersDB = [{ id: 1, login: "admin", password: "admin" }];

module.exports.createUser = async (req, res) => {
  const newUser = {
    ...req.body,
    id: Date.now(),
  };
  usersDB.push(newUser);
  res.send("created");
};

module.exports.getUsers = async (req, res) => {
  res.send(usersDB);
};

module.exports.getUser = async (req, res) => {
  const {
    params: { userId },
    // query: { page },
  } = req;

  const foundUser = usersDB.find((u) => u.id === Number(userId));
  if (foundUser) {
    res.send(foundUser);
  } else {
    res.status(404).send("User not found!");
  }
};
