const router = require("express").Router();
const apiRoutes = require("./api");

const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "alexander123",
  database: "ecommerce_db",
});

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
