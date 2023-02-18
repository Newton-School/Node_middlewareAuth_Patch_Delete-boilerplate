const fs = require('fs');
const express = require('express');
const { object } = require('joi');
const app = express();
const router = new express.Router();

//middleware
router.use(express.json());

//Authentication Middleware to validate user
const isAuthenticate = () => {};

//Includes product.json
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/product.json`)
);

// Defining The Router
// Handling PATCH request
router.patch((req, res) => {
  try {
    //Write your code here for updating a product
    // 1) Find the user with the specified ID
    // 2) Store title and price into product.json
    // 3)If product updated successfully than give status:200 and message:success
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'Product Updation Failed',
      status: 'Error',
    });
  }
});

//Deleting Product
router.delete('/api/v1/product/:id', isAuthenticate(['admin']), (req, res) => {
  try {
    //write your code here to delete a product
    // -->Find a product by id and delete a product
    //  -->If successfully deleted than give a status 201 and message:success
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: 'Product Deletion Failed',
      status: 'Error',
    });
  }
});

//Registering our Router
app.use(router);

module.exports = app;
