const bcrypt = require("bcryptjs");

const users = [
  {
    name: "User",
    email: "admin@exmaple.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johnn@exmaple.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@exmaple.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
