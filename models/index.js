// import models Product/Category/Tag/ProductTag

const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category use category Id
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products /'category_id'/product Id
Category.hasMany(Product, {
  foreignKey: "category_id",
});
// Products belongToMany Tags /through ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "productTag_tag",
  foreignKey: "product_id",
});
// Tags belongsToMany Products /through ProductTag
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "productTag_product",
  foreignKey: "tag_id",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
