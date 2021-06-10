const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//@Desc  Fetch products
//@Route  GET/api/products
//@Access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@Desc  Fetch single product
//@Route  GET/api/products/:id
//@Access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getProducts,
  getProductById,
};
