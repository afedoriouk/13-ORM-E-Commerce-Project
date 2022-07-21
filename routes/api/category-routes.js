const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: 
      { model: Product,
        attributes:["id", "product_name"]
      }
  
  }).then(categoryDataDb => {
    if (!categoryDataDb){
  
    res.status(404).json(categoryDataDb);
    return;
  }})
  .catch(err => {
    console.log(err);
  });

  // include associated Products with this category

})

router.get('/', (req, res) => {
  
  // find one category by its ID value

  Category.findOne({
    where: {
      id: req.params.id
    },
    include:{model: Product,
    
    attributes: ["id", "Product_name"]
  }}
  )
  .then(categoryDataDb => {
    if(!dbCategoryData){
      res.status(404).json('No Category found with this id');
      return;
    }
    res.json(categoryDataDb)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  // be sure to include its associated Products


router.post('/', (req, res) => {


  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(categoryDataDb => res.json(categoryDataDb))
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {


  // update a category by its ID
  Category.update(
    {
      category_name:req.body.category_name
    },
    {
      where:{
        id:req.params.id
      }
    }
  ).then(categoryDataDb =>{
    if (!categoryDataDb){
      res.status(404).json("No category foundwith this id");
      return;
    }
    res.json(categoryDataDb);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {


  // delete a category by its ID
  Category.delete({
    where: {
      id: req.params.id
    }
  }).then(categoryDataDb =>{
    if(!categoryData) {
      res.status(404).json( "No category found using this id");
    return;
    }
    res.json(categoryDataDb);
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
