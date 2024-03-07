const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("movie", "root", "Geetesh@123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
