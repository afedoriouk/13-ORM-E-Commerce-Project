// const router = require("express").Router();
// const apiRoutes = require("./api");

// const mysql = require("mysql2");
// const inquirer = require("inquirer");
// const consoleTable = require("console.table");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   port: 3306,
//   password: "alexander123",
//   database: "ecommerce_db",
// });

// router.use("/api", apiRoutes);

// router.use((req, res) => {
//   res.send("Wrong Route!");
// });

// module.exports = router;


const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("Wrong Route!")
});

module.exports = router;