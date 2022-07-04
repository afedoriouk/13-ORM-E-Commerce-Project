// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import DB connection from config.js
const sequelize = require("../config/connection");

// Product model Sequelize's Model class
class Product extends Model {}

// set up fields for Product model
Product.init(
  {
    // define columns
    id: {
      // ID column
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // product_name column
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // price column
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    //define stock availability column
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    //category ID column
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "category",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
