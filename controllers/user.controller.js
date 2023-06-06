let usersDB = [
  { id: 1, login: "admin", password: "admin" },
  { id: 2, login: "admin1", password: "admin1" },
  { id: 3, login: "admin2", password: "admin2" },
];

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

module.exports.deleteUser = async (req, res) => {
  const {
    params: { userId },
  } = req;
  const foundUser = usersDB.find((u) => u.id === Number(userId));
  if (foundUser) {
    usersDB = usersDB.filter((u) => u.id !== Number(userId));
    res.send(userId);
  } else {
    res.status(404).send("User not found");
  }
};

module.exports.updateUser = async (req, res) => {
  const {
    params: { userId },
    body,
  } = req;

  const foundUser = usersDB.find((u) => u.id === Number(userId));

  if (foundUser) {
    let newUser;
    usersDB = usersDB.map((u) => {
      const isSameUser = u.id === Number(userId);
      if (!isSameUser) {
        return u;
      } else {
        newUser = { ...u, ...body };
        return newUser;
      }
    });
    res.send(newUser);
  } else {
    res.status(404).send("User not found!!!!");
  }
};
