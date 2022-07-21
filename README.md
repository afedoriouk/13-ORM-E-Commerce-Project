# 13 Object Relational Mapping (ORM): E-commerce Back End

I the last several years e-commerce industry exceeded all expectation and have been steadily growing.  Demand for the web developers in the internet retail space is very strong and is continuously growing. This project highlights the e-commerce platform that is widely used in the industry.  The app is implementing most current technologies like Express.js API, Sequelize and MySQL Database. The data is transferred between the front and back end of the website using the routes.


## User Story

```md
Many retail companies are looking to establish the e-commerce website 
that use the latest technologies. The retail companies have to compete 
with other e-commerce companies in the internet space due to multiple 
channels of the products availability and the steep competition.
```

## Implementation

```md
Use of Express.js API and MySQL
Connecting to a database using Sequelize
API GET routes in Insomnia for categories or products

```

## Mock-Up

The following animations show examples of the application's API routes being tested in Insomnia.

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia:

![In Insomnia, the user tests “GET tags"]
https://user-images.githubusercontent.com/98120553/177064906-ba0231d5-a894-4db2-990b-0ed70391108a.mp4

![“GET Categories”]

https://user-images.githubusercontent.com/98120553/177068526-0051194e-eb6c-47fa-8f18-8862a9b7d1d9.mp4


![“GET All Products.”]

https://user-images.githubusercontent.com/98120553/177068947-159727c4-c627-4be3-bb02-963f42bbe2e7.mp4



The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia:

![In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.”]

https://user-images.githubusercontent.com/98120553/177069434-12711ab8-afd8-46ef-924f-2cdf1e8f5ea8.mp4


https://user-images.githubusercontent.com/98120553/177069822-9f4e096e-e513-42de-867e-229f3bfe549e.mp4



The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia:

![In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.”]

https://user-images.githubusercontent.com/98120553/177070882-54e2ea53-b42b-4110-9871-fdbdbc579ce8.mp4

The video shows the POST, PUT, and DELETE routes for products and tags being tested in Insomnia.

## Technologies and Commands

[MySQL2](https://www.npmjs.com/package/mysql2) 
Terminal command: `npm i mysql2`

[Sequelize](https://www.npmjs.com/package/sequelize)
Terminal line command: `npm i sequelize`

[dotenv package](https://www.npmjs.com/package/dotenv) 
Terminal line command `npm i dotenv`

Use the `schema.sql` file in the `db` folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.

### Database Models


- `Category`

  - `id`

    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment

  - `category_name`
    - String
    - Doesn't allow null values

- `Product`

  - `id`

    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment

  - `product_name`

    - String
    - Doesn't allow null values

  - `price`

    - Decimal
    - Doesn't allow null values
    - Validates that the value is a decimal

  - `stock`

    - Integer
    - Doesn't allow null values
    - Set a default value of 10
    - Validates that the value is numeric

  - `category_id`
    - Integer
    - References the `category` model's `id`

- `Tag`

  - `id`

    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment

  - `tag_name`
    - String

- `ProductTag`

  - `id`

    - Integer
    - Doesn't allow null values
    - Set as primary key
    - Uses auto increment

  - `product_id`

    - Integer
    - References the `product` model's `id`

  - `tag_id`
    - Integer
    - References the `tag` model's `id`

### Associations

- `Product` belongs to `Category`, as a category can have multiple products but a product can only belong to one category.
- `Category` has many `Product` models.

- `Product` belongs to many `Tag` models. Using the `ProductTag` through model, allow products to have multiple tags and tags to have many products.

- `Tag` belongs to many `Product` models.


### Seed the Database

`npm run seed` 
### Sync Sequelize to the Database on Server Start

 `server.js`

## Source
Google Search 


## Deployment
[Object Relational Mapping ORM](https://github.com/afedoriouk/13-ORM-E-Commerce-Project)