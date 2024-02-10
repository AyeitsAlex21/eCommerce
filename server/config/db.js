require('dotenv').config();
const { Sequelize } = require('sequelize');

console.log(process.env)

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  }
);

module.exports = sequelize ;

// Model imports and associations go here
require("../associations/associations")

