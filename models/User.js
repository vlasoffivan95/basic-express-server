
class User {
  static userDB = [
    { id: 1, login: "admin", password: "admin" },
    { id: 2, login: "admin1", password: "admin1" },
    { id: 3, login: "admin2", password: "admin2" },
  ];

  static async create(userData) {
    const newUser = {
      ...userData,
      id: Date.now(),
    };
    this.userDB.push(newUser);
    return newUser;
  }
  static async findAll() {
    return this.userDB;
  }

  static async findOne(userId) {
    const foundUser = this.userDB.find((u) => u.id === Number(userId));
    return foundUser;
  }

  static async delete(userId) {
    const foundUser = await User.findOne(userId);

    if (foundUser) {
      this.userDB = this.userDB.filter((u) => u.id !== Number(userId));
      return foundUser;
    }
  }

  static async update(userId, newData) {
    let updatedUser;
    const foundUser = await User.findOne(userId);
    if (foundUser) {
      this.userDB = this.userDB.map((u) => {
        const isSameUser = u.id === Number(userId);
        if (!isSameUser) {
          return u;
        } else {
          updatedUser = { ...u, ...newData };
          return updatedUser;
        }
      });
    }
  }
}

module.exports = User;
