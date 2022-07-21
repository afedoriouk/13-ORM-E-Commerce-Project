const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The /api/tags endpoint

router.get("/", (req, res) => {
  // find all tags

  Tag.findAll({
    include: [
      {
        model: Product,
        attributes:['product_name', 'category']
      },
    ],
  })
    .then((tagDataDb) => res.json(tagDataDb))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  // be sure to include its associated Product data
});

router.get("/:id", (req, res) => {
  // find a single tag by its id
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        through: ProductTag,
        as: "productTag_product",
      },
    ],
  })
    .then((TagData) => {
      if (!TagData) {
        res.status(404).json({ message: "No Tag found with this id" });
        return;
      }
      res.json(TagData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
