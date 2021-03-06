const express = require("express");
const routes = require("./routes");
// import sequelize connection

const sequalize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database,turn the server ON
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
