const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const { Movie } = require("./Schemas/Movie.js");
const { sequelize } = require("./Schemas/index.js");
const cors = require("cors");

const app = express();

// const sequelize = new Sequelize("geetesh", "root", "Geetesh@123", {
//   host: "localhost",
//   dialect: "mysql",
// });

// const user = sequelize.define("user", {
//   name: DataTypes.STRING,
//   address: DataTypes.STRING,
//   age: DataTypes.INTEGER,
//   phone: DataTypes.BIGINT,
// });
app.use(express.json());
app.use(cors());

app.post("/movies", async (req, res) => {
  const { Poster, Title, Types, Year } = req.body;
  const data = await Movie.create({ Poster, Title, Types, Year });
  res.send({ msg: "movie saved in db", data: data });
});

app.get("/movies", async (req, res) => {
  const data = await Movie.findAll();
  res.status(200).send({ data });
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server started on port 3000");
  });
});
