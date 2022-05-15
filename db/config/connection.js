require("dotenv").config();

const Sequelize = require("sequelize");

const sequelize = process.env.DB_JAWSDB_URL
  ? new Sequelize(process.env.DB_JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST,
        dialect: "mysql",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;
